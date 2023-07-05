import React, { useCallback } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const NotificationsScreen = ({ navigation }) => {
  const goBackHome = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.RootNotificationScreen}>
      <Button onPress={goBackHome} title="Go back home" />
    </View>
  );
};

const styles = StyleSheet.create({
  RootNotificationScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NotificationsScreen;
