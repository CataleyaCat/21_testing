export class CatalogPage{

    open() {
        cy.visit('https://www.21vek.by/')
    }
    
    clickShoppingCartButton() {
        cy.xpath('//span[contains(text(), "Корзина")]').click()
    }

    clickTabSmartphones() {
        cy.get('[class*="promoItems"] li:nth-child(2)').click()
    }

    searchProduct(productToSearch) { 
        cy.get('input[placeholder="Поиск товаров"]').click()
       .type(`${productToSearch}{enter}`)
    }

}