import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

const UpdateCard = ({ image, subtitle, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Image source={image} style={styles.imageMsg} />
      <View style={styles.textContainer}>
        <Text style={styles.subtitleText}>{subtitle}</Text>
        <Text style={styles.bodyText} numberOfLines={1}>
          {text}
        </Text>
      </View>
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
    shadowOffset: { width: 0, height: 1 },
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
  textContainer: {
    marginTop: 10,
  },
  subtitleText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bodyText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default UpdateCard;
