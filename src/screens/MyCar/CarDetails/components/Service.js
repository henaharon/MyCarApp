import React, { useState } from 'react';
import AirPressureGuide from './AirPressureGuide';
import {
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity
} from 'react-native';

const Service = ({ data }) => {
  
  const [airPressureGuideVisible, setAirPressureGuideVisible] = useState(false);

  const handleButtonPress = () => {
    // setAirPressureGuideVisible(true);
    console.log("Go to AirPressureGuide component");
  };

  const service = data.map(({ icons, defualtText, dynamicText }, index) => (
    <View style={styles.serivceView} key={index}>
      <TouchableOpacity style={styles.touchableOpacity} onPress={index === 2 || index === 3  ? handleButtonPress : null}>
        <Image style={styles.icons} source={icons} />
        <Text style={styles.defaultText}>{defualtText}</Text>
        <Text style={styles.dynamicText}>{dynamicText}</Text>
      </TouchableOpacity>
    </View>
  ));

  return (
    <View style={styles.DetailsContainer}>
      {service}
    </View>
  );
};

const styles = StyleSheet.create({
  DetailsContainer: {
    flexDirection:'row',
    flexWrap:'wrap',
    alignSelf:'center',
    padding:10,
    marginTop:30,
    width: '94%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius:10,
  },
  serivceView:{
    justifyContent:'center',
    alignItems:'center',
    width:'49%',
    padding:10,
    margin:'0.5%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius:10,
  },
  touchableOpacity:{
    justifyContent:'center',
    alignItems:'center',
  },
  icons:{
    width:40,
    height:40,
    marginBottom:10
  },
  dynamicText:{
    color: 'white',
    fontSize:16,
    fontWeight:'bold'
  },
  defaultText:{
    color: 'white',
    fontSize:12
  }
});

export default Service;