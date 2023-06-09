/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  Pressable,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './routes/Routes';
import HomeScreen from './HomeScreen.js';
import NotificationsScreen from './NotificationsScreen.js';
import LoginScreen from './src/screens/Login';
import TimerScreen from './src/screens/Timer';
import SliderWalkthrough from './src/screens/WalkThrough/SliderWalkthrough';
import DefaultModal from './src/screens/Modals/DefaultModal';
import SendCode from './src/screens/AuthCode/SendCode';
import Terms from './src/screens/Terms/Terms';
import TermsofDivor from './src/screens/Terms/TermofDivor';
import TermsofUseapp from './src/screens/Terms/TermofUseapp';
import Greeting from './src/screens/Register/Greeting';
import Form from './src/screens/Register/GreetingForm';
import RegisterForm from './src/screens/Register/RegisterForm';
import { I18nManager } from 'react-native';
I18nManager.forceRTL(false);

function App(): JSX.Element {
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {true ? <Router /> : 
      (<Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide the header/title for all screens
        }}>
      <Stack.Screen name="SliderWalkthrough" component={SliderWalkthrough} />
      <Stack.Screen name="Modal" component={DefaultModal} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="AuthCode" component={SendCode} />
      <Stack.Screen name="Terms" component={Terms} />
      <Stack.Screen name="Timer" component={TimerScreen} />
      <Stack.Screen name="TermofDivor" component={TermsofDivor} />
      <Stack.Screen name="TermofUseapp" component={TermsofUseapp} />
      <Stack.Screen name="Greeting" component={Greeting} />
      <Stack.Screen name="GreetingForm" component={Form} />
      <Stack.Screen name="Register" component={RegisterForm} />
    </Stack.Navigator>)}
    </NavigationContainer>
  );
}



const windowsHight = Dimensions.get('window').height;


export default App;
