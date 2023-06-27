import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login';
import TimerScreen from './src/screens/Timer';
import SliderWalkthrough from './src/screens/WalkThrough/SliderWalkthrough';
import DefaultModal from './src/screens/Modals/DefaultModal';
import SendCode from './src/screens/AuthCode/SendCode';
import Terms from './src/screens/Terms/Terms';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator
      screenOptions={{
        headerShown: false, // Hide the header/title for all screens
      }}>
    <Stack.Screen name="SliderWalkthrough" component={SliderWalkthrough} />
    <Stack.Screen name="Modal" component={DefaultModal} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="AuthCode" component={SendCode} />
    <Stack.Screen name="Terms" component={Terms} />
    <Stack.Screen name="Timer" component={TimerScreen} />
  </Stack.Navigator>
  </NavigationContainer>
  );
}