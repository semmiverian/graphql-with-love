const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  isEltim: {
    type: Boolean
  }
})

const student = mongoose.model('student', StudentSchema)

module.exports = student
