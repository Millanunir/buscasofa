// ***********************************************
// Comandos personalizados para esperar la carga de la app
// ***********************************************

Cypress.Commands.add('waitForAppReady', () => {
  cy.get('body').then(($body) => {
    if ($body.find('.loading').length) {
      cy.get('.loading', { timeout: 30000 }).should('not.exist');
    }
  });
});

Cypress.Commands.add('visitWithFuelData', (url = '/') => {
  cy.intercept('GET', '**/EstacionesTerrestres/**', { fixture: 'fuel_data.json' }).as('getFuelPrices');
  cy.visit(url);
  cy.wait('@getFuelPrices');
  cy.waitForAppReady();
});
