export class CatalogPage{

    open() {
        cy.visit('https://www.21vek.by/')
    }
    
    clickShoppingCourtButton() {
        cy.get('[class*= "headerCartBox"]').click()
    }

}