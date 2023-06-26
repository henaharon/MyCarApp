import React from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native';
import Line from '../components/Line';
import {SideMenuIcons} from '../../../uiKit/icons'
const Footer=()=> {
    return (
       <View style={styles.footersidemenu}>
          <Image
            style={styles.amdocsicon}
            resizeMode="contain"
            accessibilityLabel="Amdocs Logo"
            source={SideMenuIcons.Amdocs}></Image>
          <Line/>
          <Image
            style={styles.AAG_Mobile}
            resizeMode="contain"
            accessibilityLabel="LogosAagWhite"
            source={SideMenuIcons.AAG_Mobile}></Image>
          <View style={styles.PostionTextFooter}>
            <Text style={styles.TextFooter}>{'V 3.0B'}</Text>
          </View>
      </View>
    );
}
const styles = StyleSheet.create({
    footersidemenu :{
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingVertical: 14,
    paddingHorizontal: 18,
    },
    amdocsicon:{
      width: 120, 
      height: 40,
    },
    AAG_Mobile:{
      width: 160,
      height: 40,
    },
    PostionTextFooter: {
      alignItems: 'flex-end',
      marginTop:10,
      height:30,
    },
    TextFooter:{
    color: 'white',
    fontSize: 10,
    marginRight: 10,
    },
    
  }); 
export default Footer;