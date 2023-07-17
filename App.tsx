import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Router from './src/screens/MyCar/routes/Routes';
import LoginScreen from './src/screens/Login';
import TimerScreen from './src/screens/Timer';
import SliderWalkthrough from './src/screens/Walkthrough/SliderWalkthrough';
import DefaultModal from './src/screens/Modals/DefaultModal';
import SendCode from './src/screens/AuthCode/SendCode';
import Terms from './src/screens/Terms/Terms';
import TermsofDivor from './src/screens/Terms/TermofDivor';
import TermsofUseapp from './src/screens/Terms/TermofUseapp';
import Greeting from './src/screens/Register/Greeting';
import Form from './src/screens/Register/GreetingForm';
import RegisterForm from './src/screens/Register/RegisterForm';
import {I18nManager} from 'react-native';
I18nManager.forceRTL(false);

export const AuthContext = React.createContext();

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignIn: true,
            // userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignIn: false,
            // userToken: null,
          };
      }
    },
    {
      isSignIn: true,
      // userToken: null,
    },
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_OUT', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.isSignIn ? (
          <Router />
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false, // Hide the header/title for all screens
            }}>
            <Stack.Screen
              name="SliderWalkthrough"
              component={SliderWalkthrough}
            />
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
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
