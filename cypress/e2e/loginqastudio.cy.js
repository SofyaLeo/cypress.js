describe('тестирование сайта https://login.qa.studio ' , () => {
    it('Проверка успешной авторизации' , () => {

        cy.visit('https://login.qa.studio/')

        cy.get('#mail').type('german@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click()
        cy.wait(1000);
        cy.get('#messageHeader').should('have.text', 'Авторизация прошла успешно')
    }) 

    it('Востановление пароля' , () => {

        cy.visit('https://login.qa.studio/')

        cy.get('#forgotEmailButton').click()
        cy.get('#forgotForm').type('german@dolnikov.ru')
        cy.get('#restoreEmailButton').click()
        cy.wait(1000);
        cy.get('#messageHeader').should('have.text', 'Успешно отправили пароль на e-mail')
    })
})