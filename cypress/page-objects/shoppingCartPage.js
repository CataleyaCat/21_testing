export class ShoppingCartPage {

    validateCartCounter(amount) {
        cy.get('input[class*="basket__counter"]').should('have.value', amount)
    }

    clickCartCounterPlus() {
        cy.get('[class*="counter__plus"]').click()
    }

    clickCartCounterMinus() {
        cy.get('[class*="counter__minus"]').click()
    }

    deleteItemFromCart() {
        cy.get('[class*="cr-from_basket"]').click()
    }

    validateDeletingFromCart() {
        cy.xpath('//a[contains(text(), "удалить")]').should('not.have.descendants', 'tr')
    }
}