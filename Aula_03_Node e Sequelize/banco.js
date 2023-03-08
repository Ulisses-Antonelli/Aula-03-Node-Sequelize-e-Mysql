const Sequelize = require("sequelize")

//parametros da classe Sequelize
//nomebanco__usuario__senha__localhostxamp__tipo de banco/dialeto
const sequelize = new Sequelize("test", "root","", {
    host: "localhost",
    dialect: "mysql"
})


sequelize.authenticate().then(function(){
    console.log("conectado com sucesso!")
}).catch(function(erro){
    console.log("falha ao conectar" + erro)
})

const Agendamento = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },

    endereco:{
        type: Sequelize.STRING
    },

    bairro:{
        type: Sequelize.STRING
    },

    cep:{
        type: Sequelize.INTEGER
    },

    cidade:{
        type: Sequelize.STRING
    },

    estado:{
        type: Sequelize.STRING
    },

    observação:{
        type: Sequelize.STRING
    }
})

//Cria tabela-entidade
//Agendamento.sync({force: true})

Agendamento.create({
    nome:"Ulisses Antonelli",
    endereco: "Aguia de Haia",
    bairro: "JD Laone",
    cep: "03896010",
    cidade:"São Paulo",
    estado: "SP",
    observação: ""
})

