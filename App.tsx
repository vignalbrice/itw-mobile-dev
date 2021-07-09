/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import MainNavigator from './src/navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import constants from '@constants/index';

const App = () => {
  const client = new ApolloClient({
    uri: constants.API_LINK,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
