const express = require('express')
const app =express()
const handlebars= require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

// config
    // Template engine
    app.engine('handlebars', handlebars({defaultLayout:'main'}))
    app.set('view engine','handlebars')

    //Body parser
    app.use(bodyParser.urlencoded({ extended:false}))
    app.use(bodyParser.json())

    //Rotas
app.get('/',function(req,res){
    Post.all().then(function(posts){
        res.render('home', {nome:"norma", sobrenome:"carrillo"})
    })
})

app.get('/',function(req,res){
    res.render('home')
})

app.get('/cad',function(req,res){
    
    res.render('formulario')
})

app.post('/add',function(req,res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send('Houve um erro:' + erro)
    })
})

app.listen(8081, function(){
    console.log('server rodando na url: http:localhost:8081')
})

