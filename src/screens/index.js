/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import LoginScreen from './Login';
import TimerScreen from './Timer';
import RoadSideScreen from './RoadSide Assistance';
const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Timer" component={TimerScreen} />
      <Stack.Screen name="Road side assistence" component={RoadSideScreen} />
    </Stack.Navigator>
  );
};

export default Screens;
