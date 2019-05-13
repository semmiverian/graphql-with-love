const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLBoolean
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'StudentType',
  fields: {
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    isEltim: {type: GraphQLBoolean}
  }
})