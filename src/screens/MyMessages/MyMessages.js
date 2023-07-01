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
import {myMessages} from '../../locals/he.json';
import Video from 'react-native-video';

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
          subtitle={myMessages.item1.title}
          text={'test test'}
          onPress={() =>
            handleCardPress({
              mainImage: myMessagesIcons.image1,
              title: myMessages.item1.title,
              paragraph: myMessages.item1.paragraph,
              video: "https://www.youtube.com/watch?v=jqvWzQtDL7g",
              secondImage: myMessages.item1.secondImage,
              subTitle: myMessages.item1.subTitle,
              subParagraph: myMessages.item1.subparagraph,
            })
          }
        />
        <UpdateCard
          image={myMessagesIcons.image2}
          subtitle={myMessages.item2.title}
          text={'test test'}
          onPress={() =>
            handleCardPress({
              mainImage: myMessagesIcons.image7,
              title: myMessages.item2.title,
              paragraph: myMessages.item2.paragraph,
              video: "https://www.youtube.com/watch?v=jqvWzQtDL7g",
              secondImage: myMessages.item2.secondImage,
              subTitle: myMessages.item2.subtitle,
              subParagraph: myMessages.item2.subparagraph,
            })
          }
        />
        <UpdateCard
          image={myMessagesIcons.image3}
          subtitle={myMessages.item3.title}
          text={'test test'}
          onPress={() =>
            handleCardPress({
              mainImage: myMessagesIcons.image3,
              title: myMessages.item3.title,
              paragraph: myMessages.item3.paragraph,
              video: myMessages.item3.video,
              secondImage: myMessagesIcons.image6,
              subTitle: myMessages.item3.subtitle,
              subParagraph: myMessages.item3.subparagraph,
            })
          }
        />
        <UpdateCard
          image={myMessagesIcons.image4}
          subtitle={myMessages.item4.title}
          text={'test test'}
          onPress={() =>
            handleCardPress({
              mainImage: myMessagesIcons.image4,
              title: myMessages.item4.title,
              paragraph: myMessages.item4.paragraph,
              video: myMessages.item4.video,
              secondImage: null,
              subTitle: myMessages.item4.subtitle,
              subParagraph: myMessages.item4.subparagraph,
            })
          }
        />
      </ScrollView>
      <Modal
        visible={mesContent !== null}
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
      <Image source={myMessagesIcons.arrowRight} style={styles.backButtonImage} />
    </TouchableOpacity>
    <Image source={mainImage} style={styles.modalImage} />
    <View style={styles.modalContent}>
      {title && <Text style={styles.modalTitle}>{title}</Text>}
      {paragraph && <Text style={styles.modalText}>{paragraph}</Text>}
      {video && (
  <View style={styles.videoContainer}>
    <Video source={{ uri: video }} style={styles.video} resizeMode="contain" />
  </View>
)}

      {secondImage && <Image source={secondImage} style={styles.modalImage} />}
      {subtitle && <Text style={styles.modalSubtitle}>{subtitle}</Text>}
      {subParagraph && <Text style={styles.modalText}>{subParagraph}</Text>}
    </View>
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
fontWeight: 'bold'
},  
modalContainer: {
  borderRadius: 30,
  width: '100%'
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
},
modalSubtitle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'black',
  marginBottom: '5%'
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
  opacity: 0.6
},
paragraph:{
marginTop: '5%'
},
videoContainer: {
  width: '100%',
  aspectRatio: 16 / 9, // Adjust the aspect ratio based on your video's dimensions
  marginTop: 10,
  marginBottom: 20,
},
video: {
  flex: 1,
}

});

export default MyMessages;
