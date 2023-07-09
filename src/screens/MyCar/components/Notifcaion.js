import React, {useCallback, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {translate} from '../../../locals/index';
import {SideMenuIcons} from '../../../uiKit/icons';

const Notifcaion = ({navigation}) => {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(3);

  const handleFirstComponentPress = useCallback(() => {
    // Handle onPress action for the first component
    navigation.navigate('MyMessages');
  }, [navigation]);

  const handleSecondComponentPress = useCallback(() => {
    // Handle onPress action for the second component
  }, []);

  return (
    <View style={styles.mainNotification}>
      <TouchableOpacity
        style={styles.SmS_notif}
        onPress={handleFirstComponentPress}>
        <View style={styles.notification}>
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>{counter}</Text>
          </View>
        </View>
        <View style={styles.imagepostion}>
          <Image
            style={styles.GeneralMessage}
            resizeMode="contain"
            source={SideMenuIcons.GeneralMessage}
          />
          <Text style={styles.TextMessage}>
            {translate('sideMenu.MyMessage')}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.SmS_notif}
        onPress={handleSecondComponentPress}>
        <View style={styles.notification}>
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>{counter2}</Text>
          </View>
        </View>
        <View style={styles.imagepostion}>
          <Image
            style={styles.GeneralMessage}
            resizeMode="contain"
            source={SideMenuIcons.ServiceIconsGeneral}
          />
          <Text style={styles.TextMessage}>
            {translate('sideMenu.MyReadings')}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    width: 25,
    height: 25,
    textAlign: 'center',
    alignItems: 'center',
    margin: 4,
    backgroundColor: 'blue',
    borderRadius: 25 / 2,
  },
  notificationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  mainNotification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  SmS_notif: {
    margin: 5,
    flexDirection: 'column',
    width: 120,
    height: 120,
    shadowRadius: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(246, 232, 232, 0.5)',
  },

  imagepostion: {
    alignItems: 'center',
  },
  GeneralMessage: {
    width: 40,
    height: 40,
    tintColor: 'white',
  },

  TextMessage: {
    marginTop: 5,
    fontSize: 15,
    color: 'white',
  },
});

export default Notifcaion;
