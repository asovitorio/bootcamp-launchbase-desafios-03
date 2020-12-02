var express = require('express');
const server = express()
const router = require('./router')
const path = require('path')
server.use(express.json())
    // Direciona para rotas
    // view engine setup
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(router)

server.listen(3333, () => {
    console.log('servidor em operação')
})
module.exports = server