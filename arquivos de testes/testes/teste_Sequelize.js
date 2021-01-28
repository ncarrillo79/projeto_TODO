const Sequelize =require('sequelize')
const sequelize =new Sequelize('teste','root','', {
    host: 'localhost',
    dialect: 'mysql'
})


// definir el modelo
const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

// inserir dados
Postagem.create({
    titulo: "otra coisa",
    conteudo: "esto esto esto"
})

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome:"Norma",
    sobrenome:"Carrillo",
    idade:50,
    email:"ncarkfj@gmail.com"
})





//Usuario.sync({force:true})
//Postagem.sync({force:true}). sync crea tablas que no existen y borra tablas anteriores

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso,rodando!')
}).catch(function(erro){
    console.log('Falha ao se conectar' + erro)
})




