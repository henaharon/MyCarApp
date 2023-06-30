import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Text,
  FlatList,
} from 'react-native';
import DriversHomeScreenText from '../../assets/DriversHomeScreenText';

const Card = ({title, image}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} resizeMode="contain" />
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
};

const galleryData = [
  {
    id: '1',
    title: 'Card 1',
    image: require('../../assets/B1-assets/elementsServiceIconsChat.png'),
  },
  {
    id: '2',
    title: 'Card 2',
    image: require('../../assets/B1-assets/elementsServiceIconsRoadsideAssistance.png'),
  },
  // Add more card data as needed
];

const DriversHomeScreen = ({navigation}) => {
  const renderCard = ({item}) => <Card title={item.title} image={item.image} />;

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
        {/* services title and description */}
        <View style={styles.textContainer}>
          <Text style={styles.heading}>
            {DriversHomeScreenText.servicesTitle}
          </Text>
          <Text style={styles.paragraph}>
            {DriversHomeScreenText.servicesDescription}
          </Text>
        </View>
        {/* left shape */}
        <View style={styles.leftShapeContainer}>
          <Image
            source={require('../../assets/B1-assets/backgroundShape1.png')}
            style={styles.leftShape}
          />
        </View>
        {/* Add your custom content for the Drivers Home Page */}
        <View style={styles.cardGalleryContainer}>
          <FlatList
            data={galleryData}
            renderItem={renderCard}
            keyExtractor={item => item.id}
            horizontal={false}
            numColumns={2}
            contentContainerStyle={styles.cardGallery}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const windowsHeight = Dimensions.get('window').height;
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
    height: windowsHeight,
    aspectRatio: 1,
  },
  content: {
    marginTop: 100,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  logoContainer: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: [{translateX: -50}, {translateY: -50}],
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    opacity: 0.8,
  },
  textContainer: {
    position: 'absolute',
    top: '30%',
    right: 20, // Adjust the right margin as needed
    transform: [{translateY: 100}], // Adjust the translateY value to position the text vertically
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'right',
  },
  leftShapeContainer: {
    position: 'absolute',
    top: '30%',
    left: 0,
    transform: [{translateY: -50}],
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  leftShape: {
    width: 125,
    height: 290,
    opacity: 0.8,
  },
  cardGalleryContainer: {
    marginTop: 320,
    alignItems: 'center',
  },
  cardGallery: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
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

export default DriversHomeScreen;
