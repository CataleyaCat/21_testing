export class CatalogPage{

    open() {
        cy.visit('https://www.21vek.by/')
    }
    
    clickShoppingCartButton() {
        cy.xpath('//span[text()= "Корзина"]').click()
    }

    clickTabSmartphones() {
        cy.xpath('//a[text()="Смартфоны"]').click()
    }

    searchProduct(productToSearch) { 
        cy.xpath('//input[@placeholder="Поиск товаров"]').click()
       .type(`${productToSearch}{enter}`)
    }

}