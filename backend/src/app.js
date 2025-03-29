require('dotenv').config()
const cors = require('cors')
const express = require('express')
const errorHandler = require('./middlewares/errorHandler')
const todoRouter = require('./routes/todoRoutes')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/', todoRouter)

app.use(errorHandler)

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`)
})