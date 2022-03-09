export class ShoppingCourtPage {

    validateCourtCounter(amount) {
        cy.get('[class*="j-basket__counter"]').should('have.value', amount)
    }

    clickCourtCounterPlus() {
        cy.get('[class*="j-basket__plus"]').click()
    }

    deleteItemFromCourt() {
        cy.get('[class*="cr-from_basket"]').click()
    }
}