export class LoginPage {
    
    clickLogin() {
        cy.get('.userToolsText').click()
        cy.get('.userToolsBtn').click()
    }

    fillEmail(email) {
        cy.get('input[autocomplete="email"]').type(email)
    }

    fillPassword(password) {
        cy.get('[type="password"]').type(password)
    }

    clickLoginButton() {
        cy.get('.style_actions__2mIsz button[type="submit"]').click()
    }
}