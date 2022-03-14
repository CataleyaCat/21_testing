export class LoginPage {
    
    clickLogin() {
        cy.xpath('//button/span[contains(text(), "Аккаунт")]').click()
        cy.get('button[title="Вход"]').click()
    }

    fillEmail(email) {
        cy.get('input[id="login-email"]').type(`${email}`)
    }

    fillPassword(password) {
        cy.get('input[type="password"]').type(`${password}`)
    }

    clickLoginButton() {
        cy.xpath('//button[contains(text(),"Войти")]').click()
    }
}