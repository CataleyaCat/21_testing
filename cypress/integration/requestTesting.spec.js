import { CatalogPage } from "../page-objects/catalogPage"
import { ShoppingCartPage } from "../page-objects/shoppingCartPage"

describe('21vek actions', () => {
    const catalogPage = new CatalogPage()
    const shoppingCartPage = new ShoppingCartPage()

    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      catalogPage.open()
    })

    it('Validate max amount of items', () => {
      
        cy.fixture('product').then(product => {
            catalogPage.searchProduct(product.phone)

            cy.xpath('(//button[contains(text(),"В корзину")])[1]').click()
            catalogPage.clickShoppingCartButton()
        
            cy.request({method: 'Post', url: 'https://gate.21vek.by/quantity/check.quantity', 
              body: {
                 "codes": product.idPhone
                }
              }).then((response) => {
               cy.writeFile('cypress/fixtures/quantity.json', response.body["6088597"])
                })

            cy.fixture('quantity').then(quantity => {
               cy.xpath('//input[contains(@class, "basket__counter")]').clear().type('3000', '{enter}')
               cy.wait(2000)
               cy.xpath('//input[contains(@class, "basket__counter")]').invoke('val').then((val) => {
                  expect(Number(val)).to.eq(quantity.count)            
                })
           
            })

        
  
        })

    })
      

})