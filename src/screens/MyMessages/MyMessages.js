import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import BaseView from '../../uiKit/BaseView';
import { myMessagesIcons } from '../../uiKit/icons';

const MyMessages = () => {
  const [mesContent, setMesContent] = useState(null);

  const handleCardPress = (content) => {
    setMesContent(content);
  };

  const handleBackPress = () => {
    setMesContent(null);
  };

  return (
    <BaseView>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <UpdateCard
          image={myMessagesIcons.image1}
          subtitle={'smallTest'}
          text={'test test'}
          onPress={() =>
            handleCardPress({
              mainImage: myMessagesIcons.image1,
              title: 'title1',
              paragraph: 'paragraph1',
              video: null,
              secondImage: null,
              subTitle: 'sub-title1',
              subParagraph: 'subParagraph1',
            })
          }
        />
        <UpdateCard
          image={myMessagesIcons.image2}
          subtitle={'smallTest'}
          text={'test test'}
        />
        <UpdateCard
          image={myMessagesIcons.image3}
          subtitle={'smallTest'}
          text={'test test'}
        />
        <UpdateCard
          image={myMessagesIcons.image4}
          subtitle={'smallTest'}
          text={'test test'}
        />
      </ScrollView>
      <Modal
        visible={mesContent !== null}
        transparent={true}
        animationType="fade"
        onRequestClose={handleBackPress}
      >
        <ExpandCard
          mainImage={mesContent?.mainImage}
          title={mesContent?.title}
          paragraph={mesContent?.paragraph}
          video={mesContent?.video}
          secondImage={mesContent?.secondImage}
          subtitle={mesContent?.subTitle}
          subParagraph={mesContent?.subParagraph}
          onBack={handleBackPress}
        />
      </Modal>
    </BaseView>
  );
};

const UpdateCard = ({ image, subtitle, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Image source={image} style={styles.imageMsg} />
      <Text style={styles.bodyText}>{subtitle}</Text>
      <Text style={styles.bodyText}>{text}</Text>
    </TouchableOpacity>
  );
};

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
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      {mainImage && <Image source={mainImage} style={styles.modalImage} />}
      {title && <Text style={styles.modalTitle}>{title}</Text>}
      {paragraph && <Text style={styles.modalText}>{paragraph}</Text>}
      {video && (
        <View style={styles.videoContainer}>
          {/* Render the video component */}
        </View>
      )}
      {secondImage && <Image source={secondImage} style={styles.modalImage} />}
      {subtitle && <Text style={styles.modalSubtitle}>{subtitle}</Text>}
      {subParagraph && <Text style={styles.modalText}>{subParagraph}</Text>}
</View>
);
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
container: {
flex: 1,
},
scrollViewContent: {
flexGrow: 1,
justifyContent: 'center',
paddingVertical: 30,
},
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
bodyText: {
textAlign: 'right',
},
modalContainer: {
backgroundColor: 'white',
borderRadius: 10,
padding: 20,
margin: 30,
},
modalImage: {
width: '100%',
height: 200,
resizeMode: 'contain',
marginBottom: 10,
},
modalTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
},
modalText: {
marginBottom: 10,
},
modalSubtitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 10,
},
backButton: {
alignSelf: 'flex-end',
padding: 10,
},
backButtonText: {
fontSize: 16,
fontWeight: 'bold',
color: 'blue',
},
});

export default MyMessages;
