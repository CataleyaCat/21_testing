/// <reference types="cypress" />

import { CatalogPage } from "../page-objects/catalogPage"
import { LoginPage } from "../page-objects/loginPage"
import { ShoppingCourtPage } from "../page-objects/shoppingCourtPage"

describe('21vek actions', () => {
    const loginPage = new LoginPage()
    const catalogPage = new CatalogPage()
    const shoppingCourtPage = new ShoppingCourtPage()


    it('Login to the system', () => {
    
      catalogPage.open()
      loginPage.clickLogin()
      loginPage.fillEmail('mailkot484@gmail.com')
      loginPage.fillPassword('123456')
      loginPage.clickLoginButton()

      cy.wait(6000)
    })

    it('Adding item to court using Navigation Bar', () => {
      
      cy.get('[class*="promoItems"] li:nth-child(2)').click()
      
      Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

      cy.xpath('//*[@id="j-result-page-1"]/li[1]//button').click()
        
      catalogPage.clickShoppingCourtButton()
      shoppingCourtPage.validateCourtCounter(1)

    })

    it('Validate counter in shopping court', () =>{
       shoppingCourtPage.clickCourtCounterPlus()
       shoppingCourtPage.validateCourtCounter(2)
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
 

