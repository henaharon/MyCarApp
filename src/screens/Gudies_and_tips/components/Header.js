import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const rightImage = require('../../../assets/p2/exit.png');

const HeaderScreen = ({onRightArrowPress}) => {
  const title = 'מדריכים וטיפים';
  const renderLeftArrow = <View style={styles.leftImage} />;
  const renderRightArrow = (
    <TouchableOpacity onPress={onRightArrowPress}>
      <Image source={rightImage} style={styles.rightImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {renderLeftArrow}
      <Text style={styles.title}>{title}</Text>
      {renderRightArrow}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: 'black',
    paddingHorizontal: 10,
  },
  leftImage: {
    width: 50,
    height: 50,
  },
  title: {
    flex: 1,
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rightImage: {
    width: 50,
    height: 50,
  },
});

export default HeaderScreen;
