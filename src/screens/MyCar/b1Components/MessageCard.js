import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

const MessageCard = ({title, description, image = false, goToPath = null}) => {
  const MAX_DESCRIPTION_WORDS = 6;
  const DEFAULT_IMAGE = require('../../../uiKit/icons/elementsLogosMyCarFullVerticalColorBlack.png');

  const truncateDescription = text => {
    const words = text.split(' ');
    if (words.length > MAX_DESCRIPTION_WORDS) {
      const truncatedText = words.slice(0, MAX_DESCRIPTION_WORDS).join(' ');
      return `${truncatedText} ...`;
    }
    return text;
  };
  const handlePress = () => {
    if (goToPath) {
      navigation.navigate(goToPath);
    } else {
      // Stay in the same page
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
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
    </TouchableOpacity>
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
    width: 300,
    height: 250,
  },
  image: {
    width: '100%',
    height: 150,
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
