const express = require('express')
const cors = require('cors')
const router = require('./routes')


const app = express()
app.use(cors())
app.use(express.json());

app.use(router)

console.log(`listening on port ${3333}`)
app.listen(3333)
