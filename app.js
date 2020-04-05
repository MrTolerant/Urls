const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const app = express()

const PORT = config.get('port') || 5000

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => console.log(`app hs been started at port ${PORT}`))
  } catch (error) {
    console.log('server error', error.message)
    process.exit(1)
  }
}

start()
