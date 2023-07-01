import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

const UpdateCard = ({image, subtitle, text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Image source={image} style={styles.imageMsg} />
      <Text style={styles.bodyText}>{subtitle}</Text>
      <Text style={styles.bodyText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 30,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
  imageMsg: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  bodyText: {
    textAlign: 'right',
    fontWeight: 'bold',
  },
});

export default UpdateCard;
