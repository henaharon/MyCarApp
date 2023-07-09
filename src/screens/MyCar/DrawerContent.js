import React, {useCallback} from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import CommonCard from './components/commonCard';
import Line from './components/Line';
import Notifcaion from './components/Notifcaion';
import sideMenuMock from '../../mockData/sideMenuMock';
import Footer from './components/Footer';
import Userinfo from './components/Userinfo';
import {translate} from '../../locals/index';

const DrawerContent = props => {
  const handleClick = useCallback(
    index => {
      switch (index) {
        case 0:
          props.navigation.navigate('CarDetailsScreen');
          break;
        case 1:
          props.navigation.navigate('DriversHomeScreen');
          break;
        case 2:
          props.navigation.closeDrawer();
          break;
        case 3:
          props.navigation.closeDrawer();
          break;
        case 4:
          props.navigation.navigate('DriversHomeScreen');
          break;
        case 5:
          props.navigation.navigate('DriversHomeScreen');
          break;
        case 6:
          props.navigation.closeDrawer();
          break;
        default:
          break;
      }
    },
    [props.navigation],
  );

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={['#E50075', '#F05C62']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <Userinfo
              onPress={() => props.navigation.navigate('DriverProfileScreen')}
            />
            <Notifcaion navigation={props.navigation} />
          </View>
          {sideMenuMock.slice(0, 4).map((item, index) => (
            <CommonCard
              key={index}
              title={item.title}
              icon={item.icon}
              count={item.count}
              onClick={useCallback(
                () => handleClick(index),
                [handleClick, index],
              )}
            />
          ))}
          <Line />
          <View style={styles.Txtpostion}>
            <Text style={styles.textinfo}>
              {translate('sideMenu.ConactUs')}
            </Text>
          </View>
          <View style={styles.commoncard}>
            {sideMenuMock.slice(4, 7).map((item, index) => (
              <CommonCard
                key={index}
                title={item.title}
                icon={item.icon}
                count={item.count}
                onClick={useCallback(
                  () => handleClick(index + 4),
                  [handleClick, index],
                )}
              />
            ))}
          </View>
          <Footer />
        </DrawerContentScrollView>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
    marginTop: 20,
  },
  commoncard: {
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    marginTop: 1,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Cochin',
  },
  userInfoSection: {
    paddingLeft: 20,
    flex: 1,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: 'white',
    fontFamily: 'Cochin',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  logo: {
    width: 70,
    height: 70,
  },
  profile: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  TextMessage: {
    marginTop: 5,
    fontSize: 15,
    color: 'white',
  },
  Txtpostion: {
    alignItems: 'flex-end',
    marginRight: 25,
    marginTop: 20,
  },
  textinfo: {
    color: 'white',
    fontWeight: '400',
    fontSize: 16,
  },
});

export default DrawerContent;
