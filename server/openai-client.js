const { Response } = require('express');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENIA_API_KEY,
});

const createImage = async (phrase) => {
  const openai = new OpenAIApi(configuration);
  const response = openai.createImage(
    {
      prompt: phrase,
      n: 4,
      size: "256x256",
      response_format: 'url'
    }
  );
  return await response.then(res => { return res.data })
}

module.exports = { createImage }
