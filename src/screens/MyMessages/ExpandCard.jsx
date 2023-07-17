import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Dimensions, 
} from 'react-native';
import {myMessagesIcons} from '../../uiKit/icons';
import Video from 'react-native-video';
import { Thumbnail } from 'react-native-thumbnail-video';


const ExpandCard = ({
  mainImage,
  title,
  paragraph,
  video,
  secondImage,
  subtitle,
  subParagraph,
  onBack,
}) => {
  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Image
          source={myMessagesIcons.arrowRight}
          style={styles.backButtonImage}
        />
      </TouchableOpacity>
      <Image source={mainImage} style={styles.modalImage} />
      <View style={styles.modalContent}>
        {title && <Text style={styles.modalTitle}>{title}</Text>}
        {paragraph && <Text style={styles.modalText}>{paragraph}</Text>}
        {video && (
        <View style={styles.videoContainer}>
          <View style={styles.thumbnailContainer}>
            <Thumbnail 
              url={video}
              imageWidth={Dimensions.get('window').width - 40}
              imageHeight={200}
              borderRadius={20}
            />
          </View>
          <Video
            source={{ uri: video }}
            style={styles.video}
            resizeMode="contain"
          />
        </View>
      )}

        {secondImage && (
          <Image source={secondImage} style={styles.modalImage} />
        )}
        {subtitle && <Text style={styles.modalSubtitle}>{subtitle}</Text>}
        {subParagraph && <Text style={styles.modalText}>{subParagraph}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    borderRadius: 30,
    width: '100%',
  },
  modalContent: {
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: '-5%',
    zIndex: 2,
    padding: '5%',
  },
  modalImage: {
    width: '100%',
    height: 210,
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '5%',
  },
  modalText: {
    color: 'black',
    marginBottom: '5%',
  },
  modalSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '5%',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    right: 0,
    zIndex: 5,
    padding: 10,
  },
  backButtonImage: {
    width: 34,
    height: 34,
    opacity: 0.7,
  },
  paragraph: {
    marginTop: '5%',
  },
  videoContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginTop: 10,
    marginBottom: 20,
    padding: 20, // Add padding around the video container
  },
  thumbnailContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExpandCard;
