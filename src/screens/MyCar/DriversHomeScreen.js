import React from 'react';
import { View, Button } from 'react-native';

const DriversHomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      {/* Add your custom content for the Drivers Home Page */}
    </View>
  );
};

export default DriversHomeScreen;
