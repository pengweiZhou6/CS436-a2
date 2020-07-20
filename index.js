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

if (process.env.NODE_ENV === 'production'){
    app.use(express.static('my-app/build'))
    //
    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, 'client', 'build', 'index.html')); // relative path
    // })
    // app.get('/', (req, res) => {
    //     res.send('Pass')
    // })
}
// app.get('/', (req, res) => {
//     res.send(process.env.MONGODB_URI)
// })


app.use('/api', msgRouter)



app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))