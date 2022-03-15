/// <reference types="cypress" />

import { CatalogPage } from "../page-objects/catalogPage"
import { LoginPage } from "../page-objects/loginPage"
import { ShoppingCourtPage } from "../page-objects/shoppingCourtPage"

describe('21vek actions', () => {
    const loginPage = new LoginPage()
    const catalogPage = new CatalogPage()
    const shoppingCourtPage = new ShoppingCourtPage()

    before(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      catalogPage.open()
    })

    it('Login to the system', () => {
      loginPage.clickLogin()
      cy.fixture('credentials').then(credentials => {
        loginPage.fillEmail(credentials.email)
        loginPage.fillPassword(credentials.password)
      })
      loginPage.clickLoginButton()
      cy.wait(6000)
    })

    it('Searching product by name using search bar', () => {
      cy.fixture('product').then(product => {
        catalogPage.searchProduct(product.name)
        cy.get(`a[href*="mobile/iphone13"]`).should('exist')
      })
    })

    it('Filtering Apple products using Side Bar', () =>{
      catalogPage.clickTabSmartphones()
      cy.get('label[title="Apple"]').click()
      cy.get('button[class*="filter__button"]').click()

      cy.get('span[class="result__name"]').each(($el) => {
        cy.wrap($el).should('contain', 'Apple')
      })

     })

    it('Adding item to court using Navigation Bar', () => {
      
      catalogPage.clickTabSmartphones()

      cy.xpath('(//button[contains(text(),"В корзину")])[1]').click()
        
      catalogPage.clickShoppingCourtButton()
      shoppingCourtPage.validateCourtCounter(1)

    })

    it('Validate shopping court counter', () =>{
       shoppingCourtPage.clickCourtCounterPlus()
       shoppingCourtPage.validateCourtCounter(2)
       
       shoppingCourtPage.clickCourtCounterMinus()
       shoppingCourtPage.validateCourtCounter(1)
    })

    it('Validate max amount of item', () => {
      cy.get('input[class*="basket__counter"]').clear().type(1000)
      cy.get('.notification').invoke('text').then((text1) => {
        cy.get('input[class*="basket__counter"]').invoke('text').then((text2) => {
          expect(text1).to.eq(text2)
        }) 
      })
    })

    it('Delete item from shopping court', () => {
      shoppingCourtPage.deleteItemFromCourt()
      shoppingCourtPage.validateDeletingFromCourt()
    }) 

})
 

