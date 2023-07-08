import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const ServiceCard = ({navigation, title, image, goToPath = null}) => {
  const handlePress = () => {
    if (goToPath) {
      navigation.navigate(goToPath);
    } else {
      // Stay in the same page
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <View style={styles.card}>
        <Image source={image} style={styles.cardImage} resizeMode="contain" />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
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
