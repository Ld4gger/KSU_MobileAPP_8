import { WelcomeScreen } from '../../screens/WelcomeScreen';
import { SelectEventScreen } from '../../screens/SelectEventScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export const Nav = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="DatePicker" component={SelectEventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )