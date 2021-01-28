app.get('/', function(req, res) {

    res.sendFile(__dirname + '/html/index.html')
})

app.get('/sobre',function(req, res) {
    res.sendFile(__dirname + '/html/sobre.html')
})

app.get('/blog', function(req, res){
    res.send('bem vindo ao meu blog')
})

app.get('/ola/:nome/:cargo/:cor', function(req, res){
    
    res.send("<h1>Ola   "+req.params.cor+"</h1>" +
            "<h2>Seu nome e: "+req.params.nome+"</h2>" +   "<h2>Seu cargo e:   "+req.params.cargo+"</h2>"+
            "<h2>Seu sua cor e:   "+req.params.cor+"</h2>")

})