/// <reference types="cypress" />

const selectors = {
  card: '[data-test-id="card"]'
}

describe('given a list of todos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/');
  })

  describe('when i add new todo', () => {
    it('then it sould be added', () => {
      cy.get(selectors.card).should('have.length', 3)
    });
  });
})