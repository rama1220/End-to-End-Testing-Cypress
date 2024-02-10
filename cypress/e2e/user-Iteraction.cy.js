/// <reference types="cypress" />
describe('template click test modal', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get('.backdrop').click({force: true})
  })
})

describe('template click test task list', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get('#title').click().type('Hello world')
    cy.get('#summary').click().type("AKU")
    cy.get('#category').select("low")
    cy.get('[type="submit"]').click()
    cy.get('.task-list li').should('have.length', 1)

  })
})

describe('template click Validate user input', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.error-message').contains('Please provide values for task title, summary and category!')

  })
})

describe('template click Filter task', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('[data-cy="start-add-task-button"]').click()
    cy.get('#title').click().type('Hello world')
    cy.get('#summary').click().type("AKU")
    cy.get('#category').select("urgent")
    cy.get('[type="submit"]').click()
    cy.get('#filter').select("urgent")
    cy.get('.task-list li').should('have.length', 1)
  })
})
describe('template click Filter task', () => {
  const numberOfTasks = 3; 

  beforeEach(() => {
    cy.visit('http://localhost:5173')

    for (let i = 0; i < numberOfTasks; i++) {
      cy.get('[data-cy="start-add-task-button"]').click()
      cy.get('#title').click().type(`Task ${i + 1}`)
      cy.get('#summary').click().type(`Summary ${i + 1}`)
      cy.get('#category').select("low")
      cy.get('[type="submit"]').click()
    }
  });

  it('passes', () => {
    cy.get('#filter').select("urgent")
    cy.get('#filter').select("low")
    cy.get('.task-list li').should('have.length', numberOfTasks)
  });
});

