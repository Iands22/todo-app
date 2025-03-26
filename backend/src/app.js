const express = require('express')
const { PrismaClient } = require('@prisma/client')

const app = express()

app.use(express.json())
const PORT = 8000
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`)
})