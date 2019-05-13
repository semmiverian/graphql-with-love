const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLBoolean,
  GraphQLList
} = require('graphql')

const StudentType = require('./graphql/type/student')
const Student = require('./models/Student')

// Student Type
// const StudentType = new GraphQLObjectType({
//   name: 'StudentType',
//   fields: {
//     id: {type: GraphQLID},
//     name: {type: GraphQLString},
//     age: {type: GraphQLInt},
//     isEltim: {type: GraphQLBoolean}
//   }
// })


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'ClassicFoxGraphQlLecture',
    fields: {
     message: {
      type: GraphQLString,
      resolve() {
        return "Rubhy tidak sahur"
      }
     },
     age: {
       type: GraphQLInt,
       resolve() {
         return 20
       }
     },
     student: {
       type: StudentType,
       args: {
        id: {
          type: GraphQLID
        },
      },
       async resolve(parent, {id}) {
         console.log(parent)
        const student = await Student.findById(id)
        return student
       }
     },
     students: {
       type: new GraphQLList(StudentType),
       args: {
        id: {
          type: GraphQLID
        }
      },
       async resolve(parent, args) {
         const students = await Student.find({})

         return students
       },
     }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'ClassicFoxGraphQlMutation',
    fields: {
      addNewStudent: {
        type: StudentType,
        args: {
          name: {
            type: GraphQLString
          },
          isEltim: {
            type: GraphQLBoolean
          },
          age: {
            type: GraphQLInt
          }
        },
        async resolve(parent, { name, isEltim, age}) {
          const student = await Student.create({name, isEltim, age})

          return student
        }
      }
    }
  })
})

module.exports = schema
