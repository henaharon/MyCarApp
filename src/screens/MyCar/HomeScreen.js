import React, {useCallback} from 'react';
import {View, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  const navigateToNotifications = useCallback(() => {
    navigation.navigate('Notifications');
  }, [navigation]);

  return (
    <View style={styles.RootHomeScreen}>
      <Button onPress={navigateToNotifications} title="Go to notifications" />
      <Button
        onPress={() => navigation.navigate('AccidentReport')}
        title="Go to Accident report"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  RootHomeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
