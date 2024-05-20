/// <reference types="cypress" />

describe('validations test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });
  it('error mensage without e-mail and password', () => {
    cy.get('[data-cy="sign-in-button"]').click()
    cy.get('[data-cy="error-message"]').should('have.text', 'You forgot E-mail')
  })
  it('error mensage without password', () => {
    cy.get('[data-cy="email-input"]').type('cliente@youdrive.com')
    cy.get('[data-cy="sign-in-button"]').click()
    cy.get('[data-cy="error-message"]').should('have.text', 'You forgot Password')
  })
  it('error mensage invalid email', () => {
    cy.get('[data-cy="email-input"]').type('cliente@youdriveom')
    cy.get('[data-cy="sign-in-button"]').click()
    cy.get('[data-cy="error-message"]').should('have.text', 'Enter a valid E-mail')
  })
  it('user redirect "/profile" after click button', () => {
    cy.get('[data-cy="email-input"]').type('cliente@youdrive.com')
    cy.get('[data-cy="password-input"]').type('password')
    cy.get('[data-cy="sign-in-button"]').click()
    cy.location('pathname').should('eq', '/Profile')
  })
})