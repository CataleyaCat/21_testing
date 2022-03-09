export class CatalogPage{
    
    clickShoppinCourtButton() {
        cy.get('[class*= "headerCartBox"]').click()
    }

    validateCourtCounter(value) {
        cy.get('[class*="j-basket__counter"]').should('have.value', value)
    }
}