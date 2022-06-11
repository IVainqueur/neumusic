import { SafeAreaView, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LandingScreen from './app/screens/LandingScreen'

const Stack = createNativeStackNavigator()

// export default function App() {
//   return (
//     <SafeAreaView>
//       <LandingScreen />
//     </SafeAreaView>
//   )
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={LandingScreen}
          options={{ title: "Introduction" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
