/* eslint-disable*/
import { createNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params = []) {
  if (navigationRef.isReady()) {
    // @ts-ignore
    navigationRef.navigate(name, params);
  }
}

export const Stack = createStackNavigator();
