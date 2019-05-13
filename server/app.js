const express = require('express')
const app = express()
const schema = require('./schema')
const graphqlHTTP = require('express-graphql')
const mongoose = require('mongoose')

const Student = require('./models/Student')

mongoose.connect('mongodb://localhost/graphql', {useNewUrlParser: true});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.get('/coba', async (req, res) => {
  await Student.create({
    name: 'Kosasih',
    age: 200,
    isEltim: false
  })

  res.send('udeh')
});



app.listen(3000, () => {
  console.log('App listening on port 3000!');
});