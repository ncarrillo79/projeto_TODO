const Sequelize =require('sequelize')

//conexão com o banco de dados Mysql
    const sequelize =new Sequelize('postapp','root','root', {
        host: 'localhost',
        dialect: 'mysql'
    })


    module.exports={
        Sequelize: Sequelize,
        sequelize:sequelize
    }

    