describe('Detalle de estación con valoración media', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/api/comments/4375', {
      body: [
        { username: 'test1', comment: 'Bien', rating: 4, created_at: '2025-01-01' },
        { username: 'test2', comment: 'Regular', rating: 2, created_at: '2025-01-02' },
      ],
    }).as('getComments');
  });

  it('muestra la valoración media y datos adicionales de la gasolinera', () => {
    cy.visitWithFuelData('/station/4375');
    cy.wait('@getComments');

    cy.get('.valoracion-media').should('contain', '3.0');
    cy.contains('Provincia').should('exist');
    cy.contains('Horario').should('exist');
    cy.contains('Nº 10.935').should('exist');
    cy.contains('ALBACETE').should('exist');
  });
});
