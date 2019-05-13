import React, { Component } from 'react'
import { Text, SafeAreaView, Button } from 'react-native'
import { Mutation} from 'react-apollo'
import gql from 'graphql-tag'


const ADD_STUDENTS = gql`
  mutation ($name: String, $age: Int, $isEltim: Boolean) {
    addNewStudent (name: $name, age: $age, isEltim: $isEltim) {
        id
        name
        isEltim
    }
  }
`

export default class MutationGraphQl extends Component {
  render() {
    return (
      <SafeAreaView>
        <Mutation 
          mutation={ADD_STUDENTS} 
        >
          {
            ((addNewStudent, { data }) => (
              <>
                <Text>{JSON.stringify(data)}</Text>
                <Button title="bikin aku" onPress={e => {
                    addNewStudent({
                      variables: {
                        name: 'Rubhi pengen buka',
                        age: 200,
                        isEltim: false
                      }
                    })
                }} />
              </>
            ))
          }
        </Mutation>
      </SafeAreaView>
    )
  }
}
