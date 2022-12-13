var faker = require('faker')



export default{
    entregador: function(){
       var  data = {

        var : primeiroNome = faker.nome.primeiroNome(),
        var : ultimoNome = faker.nome.ultimoNome(),

        nome: '${primeiroNome} ${ultimoNome}',
        cpf: '06941186566',
        email: faker.internet.email(primeiroNome),
        whats:'1199999999',
        endereco:{
         cep:'42803169',
         rua:'Rua Afrânio Peixoto',
         numero:'1938',
         complemento:'Ap 301',
         bairro:'Alto da Cruz',
         cidade_uf:'Camaçari/BA'
      
              },
              metdo_entrega:'Moto',
              cnh:'cnh-digital.jpg'


    }
        return data
    }
}