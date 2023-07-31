import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ItemWithIcon = ({ imageSource, text1, text2 }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconBackground}>
        <Image source={imageSource} style={styles.iconImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.contentText}>{text1}</Text>
        <Text style={styles.contentText}>{text2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginTop: 15,
  },
  iconBackground: {
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
    padding: 10, 
    borderRadius: 50,
  },
  iconImage: {
    width: 25,
    height: 25,
  },
  textContainer: {
    flex: 1,
  },
  contentText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'right',
    marginRight: 10,
  },
});

export default ItemWithIcon;
