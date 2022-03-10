export class ShoppingCourtPage {

    validateCourtCounter(amount) {
        cy.get('[class*="j-basket__counter"]').should('have.value', amount)
    }

    clickCourtCounterPlus() {
        cy.get('[class*="counter__plus"]').click()
    }

    clickCourtCounterMinus() {
        cy.get('[class*="counter__minus"]').click()
    }

    deleteItemFromCourt() {
        cy.get('[class*="cr-from_basket"]').click()
    }

    validateDeletingFromCourt() {
        cy.get('.cr-from_basket').should('not.have.descendants', 'tr')
    }
}