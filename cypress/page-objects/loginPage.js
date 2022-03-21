export class LoginPage {
    
    clickLogin() {
        cy.xpath('//button/span[text()= "Аккаунт"]').click()
        cy.xpath('//button[@title="Вход"]').click()
    }

    fillEmail(email) {
        cy.xpath('//input[@label="Электронная почта"]').type(`${email}`)
    }

    fillPassword(password) {
        cy.xpath('//input[@label="Пароль"]').type(`${password}`)
    }

    clickLoginButton() {
        cy.xpath('//button[text()="Войти"]').click()
    }
}