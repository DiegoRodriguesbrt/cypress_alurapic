describe('Login de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
        })

        it('Login de usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.contains('a', '(Logout)').should('be.visible');   
        })

        it.only('Login de usuario invalido', () => {
            cy.login('diego','1234');
            cy.on ('window:alert', (str) => {
                expect(str).to.equal("Invalid user name or password")
            })
        })
       
     })
