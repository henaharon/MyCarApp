import React from 'react';
import {View, Button} from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
      <Button
        onPress={() => navigation.navigate('DriversHomeScreen')}
        title="Go to Drivers Home Screen"
      />
    </View>
  );
};

export default HomeScreen;
