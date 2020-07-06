
const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox-rnlu7.mongodb.net/m001-student', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db