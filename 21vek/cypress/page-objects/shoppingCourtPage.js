export class ShoppingCourtPage {

    validateCourtCounter(amount) {
        cy.get('[class*="j-basket__counter"]').should('have.value', amount)
    }

    // validateTotalSum(amount, value) {
    //     cy.get('[class*="j-basket__counter"]').type(amount)
    //     cy.get('.j-basket__cost').should('have.value', value*amount)
    // }

    clickCourtCounterPlus() {
        cy.get('[class*="j-basket__plus"]').click()
    }

    deleteItemFromCourt() {
        cy.get('[class*="cr-from_basket"]').click()
    }
}