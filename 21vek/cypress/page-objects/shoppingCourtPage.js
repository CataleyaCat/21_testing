export class ShoppingCourtPage {

    validateCourtCounter(amount) {
        cy.get('input[class*="basket__counter"]').should('have.value', amount)
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
        cy.xpath('//a[contains(text(), "удалить")]').should('not.have.descendants', 'tr')
    }
}