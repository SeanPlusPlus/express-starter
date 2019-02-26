const serverless = require('serverless-http')
const express = require('express')
const dotenv = require('dotenv')

const version = require('./version')

dotenv.config()

const {
  NODE_ENV,
} = process.env

const app = express()

app.get('/', (req, res) => {
  res.send({ version })
})

if (NODE_ENV === 'development') {
  const port = 3001
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`) // eslint-disable-line no-console
  })
}

if (NODE_ENV === 'test') {
  module.exports = app
}

if (NODE_ENV === 'production') {
  module.exports.handler = serverless(app)
}
