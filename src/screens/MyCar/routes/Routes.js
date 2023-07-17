import React from 'react';
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import DrawerContent from '../DrawerContent.js';
import MyMessages from '../../MyMessages/MyMessages.js';
import ElectricVehicle from '../../ElectricVehicle/ElectricVehicle.js';
import {CarDetailsScreen} from '../../CarDetails/CarDetailsScreen.js';
import DriversHomeScreen from '../DriversHomeScreen.js';
import DriverProfileScreen from '../DriverProfileScreen.js';
import AccidentReport from '../../AccidentReport';
import GudiesAndTipsScreen from '../../Gudies_and_tips/Gudies_and_tipsScreen.js';
import RoadSideScreen from '../../RoadSideAssistance/index.js';

const Drawer = createDrawerNavigator();
const Routes = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="DriversHomeScreen"
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
      <Drawer.Screen
        options={{headerShown: false}}
        name="DriversHomeScreen"
        component={DriversHomeScreen}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="MyMessages"
        component={MyMessages}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="ElectricVehicle"
        component={ElectricVehicle}
      />
      <Drawer.Screen name="CarDetailsScreen" component={CarDetailsScreen} />
      <Drawer.Screen
        options={{headerShown: false}}
        name="DriverProfileScreen"
        component={DriverProfileScreen}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="AccidentReport"
        component={AccidentReport}
      />

      <Drawer.Screen
        options={{headerShown: false}}
        name="GudiesAndTipsScreen"
        component={GudiesAndTipsScreen}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="RoadsideAssistance"
        component={RoadSideScreen}
      />
    </Drawer.Navigator>
  );
};

export default Routes;
