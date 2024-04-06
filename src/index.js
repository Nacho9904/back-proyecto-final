/* MongoExpressReactNode */

/* Common JS */
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const {dbConnection} = require('./database/database.js')






const server = express()

/* Conectar a la base de datos */

dbConnection();

//MiddleWare//
server.use(express.urlencoded({extended: true}))
server.use(cors())
server.use(express.json())
server.use(morgan('tiny'))

server.use('/', require('./routes/canchas.routes.js'))
/* server.get('/api/users', getUsers )
server.post('/api/users', postUsers)
server.put('/api/users', putUsers)
server.delete('/api/users', deleteUsers ) */



server.listen(3002, () => {
console.log('Servidor iniciado en http://localhost:3000')
})