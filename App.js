import { SafeAreaView, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LandingScreen from './app/screens/LandingScreen'
import HomeScreen from './app/screens/HomeScreen'

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
          name="LandingScreen"
          component={LandingScreen}
          options={{ title: "Introduction", headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Main Page", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
