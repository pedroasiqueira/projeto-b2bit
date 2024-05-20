/// <reference types="cypress" />

describe('Profile page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.get('[data-cy="email-input"]').type('cliente@youdrive.com')
    cy.get('[data-cy="password-input"]').type('password')
    cy.get('[data-cy="sign-in-button"]').click()
  });
  it('exists elements', () => {
    cy.get('[data-cy="name"]').should('have.text', 'Your Name')
    cy.get('[data-cy="email"]').should('have.text', 'Your E-mail')
    cy.get('[data-cy="name-user"]').should('be.visible')
    cy.get('[data-cy="email-user"]').should('be.visible')
  })
  it('user redirect "/" and remove token from localStorage when the button is clicked', () => {
    cy.get('[data-cy="button-Log-Out"]').click()
    cy.location('pathname').should('eq', '/')
    cy.window().its('localStorage').invoke('getItem', 'token').should('be.null')
  })
})