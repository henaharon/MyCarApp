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
  TouchableOpacity,
} from 'react-native';
import DriversHomeScreenText from '../../assets/DriversHomeScreenText';
import galleryData from '../../assets/serviceGalleryData';
import ServiceCard from './Components/serviceCard';
import BigServiceCard from './Components/BigServiceCard';
import MessageCard from './Components/MessageCard';
import messagesGalleryData from '../../assets/messagesGalleryData';

const DriversHomeScreen = ({navigation}) => {

  const renderCard = ({item}) => (
    <ServiceCard title={item.title} image={item.image} />
  );

  const renderMessageCard = ({item}) => (
    <MessageCard
      title={item.title}
      description={item.description}
      image={item.image}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        {/* Background Image */}
        <Image
          source={require('../../assets/B1-assets/backgroundVideoCover3.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Transparent Logo */}
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/B1-assets/elementsLogosMyCarFullVerticalColorBlack.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          {/* Page title and description */}
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
          {/* service vertical scroll gallery */}
          <View style={styles.cardGalleryContainer}>
            <FlatList
              data={galleryData}
              renderItem={renderCard}
              keyExtractor={item => item.id}
              horizontal={true}
              numColumns={1}
              pagingEnabled
              snapToAlignment="center"
              decelerationRate="fast"
              contentContainerStyle={styles.cardGallery}
            />
          </View>
          <View style={styles.sectionDivider} />
          {/* Updates and News Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonUpdateAndNews}
              onPress={() => {
                // Handle button press
              }}>
              <Text style={styles.buttonText}>
                {DriversHomeScreenText.updateAndNews}
              </Text>
            </TouchableOpacity>
          </View>
          {/* Messages scroll gallery */}
          {messagesGalleryData && (
            <>
              <View style={styles.messagesContainer}>
                <FlatList
                  data={messagesGalleryData}
                  renderItem={renderMessageCard}
                  keyExtractor={item => item.id}
                  horizontal={true}
                  numColumns={1}
                  pagingEnabled
                  snapToAlignment="center"
                  decelerationRate="fast"
                  contentContainerStyle={styles.messagesCardGallery}
                />
              </View>
              <View style={styles.sectionDivider} />
            </>
          )}
          {/* Big Service Cards */}
          <View style={styles.bigServiceCardsContainer}>
            <BigServiceCard
              title={DriversHomeScreenText.CarRental}
              imagePath={require('../../assets/B1-assets/photosCarPerDayCombined.png')}
            />
            <View style={styles.sectionDivider} />
            <BigServiceCard
              title={DriversHomeScreenText.AccidentsAndEmergency}
              imagePath={require('../../assets/B1-assets/photosAccident.png')}
            />
          </View>
          {/* Image at the bottom left corner */}
          <View style={styles.bottomLeftImageContainer}>
            <Image
              source={require('../../assets/B1-assets/backgroundShape2.png')}
              style={styles.bottomLeftImage}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const windowsHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
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
  },
  logoContainer: {
    position: 'absolute',
    top: '10%',
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
    top: '10%',
    right: 20,
    transform: [{translateY: 100}],
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
    top: '10%',
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
  sectionDivider: {
    borderBottomWidth: 2,
    borderBottomColor: '#D3D3D3',
    width: '90%',
    marginTop: 10,
    opacity: 0.8,
    alignSelf: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
    width: '80%',
  },
  buttonUpdateAndNews: {
    backgroundColor: '#FFFFFF',
    height: 50,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 20,
    paddingHorizontal: 10,
  },
  messagesContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  messagesCardGallery: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bigServiceCardsContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  bottomLeftImageContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: -1,
  },
  bottomLeftImage: {
    width: 200,
    height: 200,
  },
});

export default DriversHomeScreen;
