/// <reference types="Cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('el usuario navega a la pagina About', () => {
  cy.visitWithFuelData('/about');
});

Then('debería ver el texto del numero de equipo', () => {
  cy.get('#info').should('contain', 'Somos el equipo nº 10');
});

Then('debería ver al miembro {string} con aportacion {string}', (name, contribution) => {
  cy.contains('.team-member-name', name)
    .closest('.team-member')
    .find('.team-member-contribution')
    .should('contain', contribution);
});
