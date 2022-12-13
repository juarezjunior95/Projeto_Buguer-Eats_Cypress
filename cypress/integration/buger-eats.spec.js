import SigUpPage from '../pages/SigUpPage'
import signup from '../pages/SigUpPage'

describe('Testando o Qazando E-Commerce', function () {
   beforeEach(function () {

      cy.visit('https://buger-eats-qa.vercel.app')



   })

   beforeEach(function () {
      cy.fixture("entregador").then((e) => {
         this.entregador = e

      })


   })
   it('Visitando a home do site', function () {
      cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
   })

   it('Cadastro do entregador', function () {





      signup.go()
      signup.fillForm(this.entregador.signup)
      signup.submit()


      const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
      signup.modalContentShouldBe(expectedMessage)












   })


   it('Cpf incorreto', function () {




      signup.go()
      signup.fillForm(this.entregador.cpf_Inv)
      signup.submit()
      signup.alertMessageShouldBe('Oops! CPF inválido')

   })

   it('email incorreto', function () {




      signup.go()
      signup.fillForm(this.entregador.email_errado)
      signup.submit()
      signup.alertMessageShouldBe('Oops! Email com formato inválido.')

   })
      context('Required fields', function () {
      const messages = [
         { field: 'nome', output: 'É necessário informar o nome' },
         { field: 'cpf', output: 'É necessário informar o CPF' },
         { field: 'email', output: 'É necessário informar o email' },
         { field: 'cep', output: 'É necessário informar o CEP' },
         { field: 'numero', output: 'É necessário informar o número do endereço' },
         { field: 'metdo_entrega', output: 'Selecione o método de entrega' },
         { field: 'cnh', output: 'Adicione uma foto da sua CNH' },

      ]

      beforeEach(function(){
         SigUpPage.go()
         SigUpPage.submit()
      })
      messages.forEach(function(msg){
         it('${{msg.field} is required', function(){
            SigUpPage.alertMessageShouldBe(msg.output)
         } )
      })
   })
   //it.only('Required fields', function () {
      //SigUpPage.go()
      //SigUpPage.submit()
      //SigUpPage.alertMessageShouldBe('É necessário informar o nome')
      //SigUpPage.alertMessageShouldBe('É necessário informar o CPF')
     // SigUpPage.alertMessageShouldBe('É necessário informar o e-mail')
     // SigUpPage.alertMessageShouldBe('É necessário informar o CEP')
      //SigUpPage.alertMessageShouldBe('É necessário informar o número do endereço')
      //SigUpPage.alertMessageShouldBe('Selecione o método de entrega')
      //SigUpPage.alertMessageShouldBe('Adicione uma foto da sua CNH')


   })

//)