/// <reference types="Cypress" />
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('el usuario navega a la home', () => {
  cy.visit('/');
});

Then('debería ver en el footer a {string}', (name) => {
  cy.contains('h2', 'Miembros del equipo:')
    .parent()
    .contains(name)
    .should('be.visible');
});
