import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import client from './graphql'
import QueryGraphQl from './QueryGraphQl'
import MutationGraphQl from './MutationGraphQl'

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
       {/* <QueryGraphQl /> */}
       <MutationGraphQl />
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
