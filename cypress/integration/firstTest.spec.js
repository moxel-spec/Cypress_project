/// <reference types="cypress" /> 


// it('By ID', () => {
//     cy.visit("https://facebook.com/")
//     cy.get('#email')
// })

// New test comment
// it('By Class', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get#Timeouts")
//     cy.get('.DocSearch.DocSearch-Button').click()
// })


// it('By Tag value', () => {
//     cy.visit("https://www.pitcher.com/")
//     cy.get('[id="main-nav"]')
// })


// master testing 123



it.only ('Using get with find and eq', () => {
    cy.viewport(1800,700)
    cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
    cy.get('div').find('nav').find('ul').find('li').find('a').eq(1)
})