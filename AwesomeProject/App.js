/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; */

import { ApolloProvider } from '@apollo/client';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { apolloClient } from './services/ApolloClient';

/* export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

export default function App() {
  return(
    <ApolloProvider client={apolloClient}>
      <WelcomeScreen/>
    </ApolloProvider>
  )
}