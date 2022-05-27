describe('Login de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('/')
        })

        it('Login de usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.contains('a', '(Logout)').should('be.visible');   
        })

        it('Login de usuario invalido', () => {
            cy.login('diego','1234');
            cy.on ('window:alert', (str) => {
                expect(str).to.equal("Invalid user name or password")
            })
        })
       
     })
