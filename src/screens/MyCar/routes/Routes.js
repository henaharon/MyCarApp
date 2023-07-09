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
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AdditionalDemands} from '../../ServiceCenter/AdditionalDemands.js';
import {DateComp} from '../../ServiceCenter/DateComp.js';
import {Location} from '../../ServiceCenter/Location.js';
import {Mileage} from '../../ServiceCenter/Mileage.js';
import {SelectService} from '../../ServiceCenter/SelectService.js';
import {Service} from '../../ServiceCenter/Service.js';
import {Summary} from '../../ServiceCenter/Summary.js';
import {ServiceContext} from '../../ServiceCenter/store/context.js';
import {navigationRef, Stack} from '../../ServiceCenter/utils/navigator.js';

function Services() {
  const [service, setService] = useState({
    mileage: -1,
    location: '',
    date: new Date(),
    additionalDemands: [],
    additionalImages: [],
    explanation: '',
    serviceType: {
      name: '',
      src: '',
      id: -1,
    },
    serviceImages: [],
  });
  return (
    <ServiceContext.Provider value={[service, setService]}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="SelectService"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SelectService" component={SelectService} />
          <Stack.Screen name="Mileage" component={Mileage} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="DateComp" component={DateComp} />
          <Stack.Screen
            name="AdditionalDemands"
            component={AdditionalDemands}
          />
          <Stack.Screen name="Summary" component={Summary} />
          <Stack.Screen name="Service" component={Service} />
        </Stack.Navigator>
      </NavigationContainer>
    </ServiceContext.Provider>
  );
}

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
        name="Services"
        component={Services}
      />
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
    </Drawer.Navigator>
  );
};

export default Routes;
