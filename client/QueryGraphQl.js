import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


const GET_ALL_STUDENTS = gql`
  {
    students {
      id,
      name
    }
  }
`

const GET_ONE_STUDENTS_BY_ID = gql`
  query ($id: ID) {
    student(id: $id) {
      name
    }
  }
`

export default class QueryGraphQl extends Component {
  render() {
    return (
      <SafeAreaView>
        {/* <Query query={GET_ALL_STUDENTS}> */}
        <Query query={GET_ONE_STUDENTS_BY_ID}
              variables={{
                id: '5cd8e370aeadfa201bdfb84a'
              }}
        >
          {
          ({ loading, error, data }) => {
            if (loading) return <Text>Jika teringat tentang dikau</Text>
            if (error) return <Text>Jauh dimata dekat dihati, {JSON.stringify(error)}</Text>
            if (data) return <Text>{JSON.stringify(data)}</Text>
          }
          }
        
        </Query>
     </SafeAreaView>
    )
  }
}
