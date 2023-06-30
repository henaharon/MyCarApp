import React from 'react';
import { View, Button, StyleSheet, ScrollView, Image } from 'react-native';

const DriversHomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.backgroundContainer}>
        {/* Background Image */}
        <Image
          source={require('../../assets/B1-assets/backgroundVideoCover3.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.content}>
        {/* Transparent Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/B1-assets/elementsLogosMyCarFullVerticalColorBlack.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        {/* Additional Image */}
        <View style={styles.additionalImageContainer}>
          <Image
            source={require('../../assets/B1-assets/backgroundShape1.png')}
            style={styles.additionalImage}
//            resizeMode="cover"
          />
        </View>
        {/* Add your custom content for the Drivers Home Page */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: undefined,
    aspectRatio: 1, // Adjust this aspect ratio based on your image's dimensions
  },
  content: {
    marginTop: 100, // Adjust this margin to position the content below the background image
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  logoContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    opacity: 0.8, // Adjust this opacity as needed
  },
  additionalImageContainer: {
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: [{ translateY: -50 }],
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  additionalImage: {
    width: 125,
    height: 290, // Adjust the height to match the logo's height
    opacity: 0.8, // Adjust this opacity as needed
    resizeMode: 'cover',
  },
});

export default DriversHomeScreen;
