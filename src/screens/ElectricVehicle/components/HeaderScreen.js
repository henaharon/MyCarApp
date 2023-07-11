import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const leftImage = require('../assets/icons/leftArrow.png');
const rightImage = require('../assets/icons/rightArrow.png');

const HeaderScreen = ({
  isSummary,
  onLeftArrowPress,
  onRightArrowPressInSummery,
  onRightArrowPressNoSummery,
}) => {
  const title = isSummary ? 'סיכום קריאה' : 'עמדת טעינה';
  const renderLeftArrow = isSummary ? null : (
    <TouchableOpacity onPress={onLeftArrowPress}>
      <Image source={leftImage} style={styles.leftImage} />
    </TouchableOpacity>
  );
  const renderRightArrow = isSummary ? (
    <TouchableOpacity onPress={onRightArrowPressInSummery}>
      <Image source={rightImage} style={styles.rightImage} />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onRightArrowPressNoSummery}>
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
