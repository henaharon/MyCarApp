import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

const TipCard = ({ image, subtitle, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Image source={image} style={styles.tipImage} />
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
    borderRadius: 40,
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
  tipImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  textContainer: {
    marginTop: 10,
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bodyText: {
    fontSize: 16,
    color: 'gray',
  },
});

export default TipCard;
