import React from 'react';
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import HomeScreen from '../HomeScreen.js';
import NotificationsScreen from '../NotificationsScreen.js';
import DrawerContent from '../DrawerContent.js';
import MyMessages from '../../MyMessages/MyMessages.js';
import ElectricVehicle from '../../ElectricVehicle/ElectricVehicle.js';
import {CarDetailsScreen} from '../../CarDetails/CarDetailsScreen.js';

const Drawer = createDrawerNavigator();
const Routes = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent',
        },
        drawerPosition: 'right',
        headerLeft: false,
        headerRight: () => <DrawerToggleButton />,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          marginLeft: 'auto',
        },
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="MyMessages" component={MyMessages} />
      <Drawer.Screen name="ElectricVehicle" component={ElectricVehicle} />
      <Drawer.Screen name="CarDetailsScreen" component={CarDetailsScreen} />
    </Drawer.Navigator>
  );
};

export default Routes;
