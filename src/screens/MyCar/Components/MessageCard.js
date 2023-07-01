import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const MessageCard = ({title, description, image = NULL}) => {
  const MAX_DESCRIPTION_WORDS = 10;
  const DEFAULT_IMAGE = require('../../../assets/B1-assets/elementsLogosMyCarFullVerticalColorBlack.png');

  const truncateDescription = text => {
    const words = text.split(' ');
    if (words.length > MAX_DESCRIPTION_WORDS) {
      const truncatedText = words.slice(0, MAX_DESCRIPTION_WORDS).join(' ');
      return `${truncatedText} ...`;
    }
    return text;
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {image ? (
          <Image source={image} style={styles.image} resizeMode="cover" />
        ) : (
          <Image
            source={DEFAULT_IMAGE}
            style={styles.image}
            resizeMode="cover"
          />
        )}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {truncateDescription(description)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: 200, // Adjust the width as per your design
  },
  image: {
    width: '100%',
    height: 100, // Adjust the height as per your design
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});

export default MessageCard;
