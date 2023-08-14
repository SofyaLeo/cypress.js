describe('тестирование сайта https://huntingpony.com/', () => {
    it('переход на страницу' , () => {
        cy.visit('https://huntingpony.com/')
        cy.get('#splide02-slide01 > form > div > div.product-preview__area-title > div > a').click()
        cy.wait(2000);   
        cy.get('#product-detail-buy-area > div > div').click()
        cy.wait(2000);
        cy.get('#product-detail-buy-area > div > div > div > button:nth-child(3)').click()
        cy.wait(2000);
        cy.get('#product-detail-buy-area > div > div > div > a').click()
        cy.wait(2000);
        cy.get('body > div.page_layout.page_layout-clear > main > div > div > form > div.cart__area-controls > div.cart-controls > button').click()
        cy.get('body > div.page_layout.page_layout-clear > main > div > div > div > div > div.co-section--checkout_header.co-checkout-block--padded > div > h1').contains('Оформление заказа')
    })
})
