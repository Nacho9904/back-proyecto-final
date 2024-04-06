const mongoose = require('mongoose')



const dbConnection = async () => {
try {
    await
    mongoose.connect ('mongodb://localhost:27017/Proyecto_Final')
    console.log('Base de datos conectada')
} catch (error) {
    console.log(error)
    throw new Error ('Error al conectar a la base de datos')
}}
 
module.exports = {
    dbConnection
}