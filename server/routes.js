const { Router } = require('express');
const { createImage } = require('./openai-client')

const router = Router()

router.get('/image-generator', async function (req, res) {
  const { phrase } = req.query
  try {
    const response = await createImage(phrase)
    res.json(response.data)
  } catch (err) {
    const { error } = err.response.data;
    res.status(err.response.status).json(error)
  }
})

module.exports = router
