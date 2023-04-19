/* import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; */

/* import { ApolloProvider } from '@apollo/client';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { apolloClient } from './services/ApolloClient'; */

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

/* export default function App() {
  return(
    <ApolloProvider client={apolloClient}>
      <WelcomeScreen/>
    </ApolloProvider>
  )
} */


import { ApolloProvider } from '@apollo/client';
import { ConfigProvider } from 'antd-mobile';
import enUS from 'antd-mobile/es/locales/en-US'



import { apolloClient } from './services/ApolloClient';
import { Nav } from "./components/Navigator"

export default function App() {
  return(
    <ApolloProvider client={apolloClient}>
      <ConfigProvider locale={enUS}>
          <Nav/>             
      </ConfigProvider>
    </ApolloProvider>
    )
}