const mongoose = require('mongoose')

mongoose.set('debug', true)

const todoSchema = new mongoose.Schema({
  text: String,
  done: Boolean
})

module.exports = mongoose.model('Todo', todoSchema)