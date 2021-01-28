const ROOT_URL = 'http://localhost:3001';

describe('Cypress test', () => {
    const user = {
        login: "newAdmen",
        password: "newadmenpass",
        name: "Admin2"
    }

    it('home page', () => {
        cy.visit(ROOT_URL);
        cy.get('#greeting').should('be.visible');
        cy.get('#greeting').should('contain', 'Привет!');
    })

    it('register', () => {
        cy.request('POST', '/users/reset')
        cy.visit(ROOT_URL);

        cy.get('#auth-links')
            .contains('Sign Up')
            .click()

        cy.get('#sign-up-form')
            .children()
            .first()
            .next()
            .type(user.login)
            .next()
            .type(user.password)
            .next()
            .type(user.name)
            .next()
            .click()

        cy.get('#greeting')
            .should('contain', 'Привет, ' + user.login + '!')
    })

    it('logout', () => {
        cy.get('#auth-links')
            .contains('Logout')
            .click()

        cy.get('#greeting').should('contain', 'Привет!');
    })

    it('sign in', () => {
        cy.get('#auth-links')
            .contains('Sign In')
            .click()

        cy.get('#sign-in-form')
            .children()
            .first()
            .next()
            .type(user.login)
            .next()
            .type(user.password)

        cy.get('#sign-in-button').click()

        cy.get('#greeting')
            .should('contain', 'Привет, ' + user.login + '!')
    })

    it('add bad phone', () => {
        cy.get('#nav-links')
            .contains('Phones')
            .click()

        cy.get('#add-phone-form')
            .children()
            .first()
            .next()
            .type("abab")
            .next()
            .type("kebab")
            .next()
            .click()

        cy.get('#phone-list')
            .children()
            .should('have.length', 1)
    })

    it('add good phone', () => {
        cy.get('#add-phone-form')
            .children()
            .first()
            .next()
            .clear()
            .type("abab")
            .next()
            .clear()
            .type("88005553535")
            .next()
            .click()

        cy.get('#phone-list')
            .children()
            .should('have.length', 2)
    })
})