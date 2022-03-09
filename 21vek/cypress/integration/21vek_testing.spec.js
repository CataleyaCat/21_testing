/// <reference types="cypress" />

import { CatalogPage } from "../page-objects/catalogPage"
import { LoginPage } from "../page-objects/loginPage"

describe('21vek actions', () => {
    const loginPage = new LoginPage()
    const catalogPage = new CatalogPage()

    it('Login to the system', () => {
    
      loginPage.open()

      loginPage.clickLogin()

      loginPage.fillEmail('mailkot484@gmail.com')

      loginPage.fillPassword('dJ53LlkI')

      loginPage.clickLoginButton()
    })

    it('Adding item to court using Navigation Bar', () => {
         cy.get('.styles_promoItems__2Tq3m li:nth-child(2)').click()

         Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        
        cy.xpath('//*[@id="j-result-page-1"]/li[1]/dl/div[2]/form/button').click()
        
        catalogPage.clickShoppinCourtButton()
        catalogPage.validateCourtCounter(1)

        cy.get('[class*="j-basket__plus"]').click()

        catalogPage.validateCourtCounter(2)


    })
  
    
 
})
