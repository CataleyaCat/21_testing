export class CatalogPage{

    open() {
        cy.visit('https://www.21vek.by/')
    }
    
    clickShoppingCourtButton() {
        cy.xpath('//span[contains(text(), "Корзина")]').click()
    }

}