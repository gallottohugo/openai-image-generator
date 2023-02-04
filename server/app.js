const express = require('express')
var cors = require('cors')
const { createImage } = require('./openai-client')

const app = express()
app.use(cors())
app.use(express.json());

app.get('/create-image', async function (req, res) {
  const { phrase } = req.query
  try {
    const response = await createImage(phrase)
    res.json(response.data)
  } catch (err) {
    const { error } = err.response.data;
    res.status(err.response.status).json(error)
  }
})

console.log(`listening on port ${3333}`)
app.listen(3333)
