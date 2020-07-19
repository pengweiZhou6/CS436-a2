const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const msgRouter = require('./routes/msg-router')

const app = express()
const apiPort = process.env.PORT || 8000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', msgRouter)



if (process.env.NODE_ENV === 'production'){
    app.use(express.static('../my-app/build'))
}
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))