import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const ServiceCard = ({title, image}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  cardTitle: {
    textAlign: 'center',
  },
});

export default ServiceCard;
