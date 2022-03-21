export class ShoppingCartPage {

    validateCartCounter(amount) {
        cy.xpath('//input[contains(@class, "basket__counter")]').should('have.value', amount)
    }

    clickCartCounterPlus() {
        cy.xpath('//span[contains(@class,"counter__plus")]').click()
    }

    clickCartCounterMinus() {
        cy.xpath('//span[contains(@class,"counter__minus")]').click()
    }

    deleteItemFromCart() {
        cy.xpath('//a[text()="удалить"]').click()
    }

    validateDeletingFromCart() {
        cy.xpath('//tbody[@class="basket__list"]').should('not.have.descendants', 'tr')
    }
}