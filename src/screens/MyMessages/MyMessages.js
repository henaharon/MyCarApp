import React, {useState} from 'react';
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
import {myMessagesIcons} from '../../uiKit/icons';
import {myMessages} from '../../locals/he.json';
import ExpandCard from './components/ExpandCard';
import UpdateCard from './components/UpdateCard';
import Header from './components/Header';

const MyMessages = ({navigation}) => {
  const [mesContent, setMesContent] = useState(null);

  const handleCardPress = content => {
    setMesContent(content);
  };

  const handleBackPress = () => {
    setMesContent(null);
  };

  const onRightArrowPress = () => {
    navigation.goBack();
  };

  return (
    <BaseView>
      <Header onRightArrowPress={onRightArrowPress} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <UpdateCard
          image={myMessagesIcons.image1}
          subtitle={myMessages.item1.title}
          text={myMessages.item1.paragraph}
          onPress={() =>
            handleCardPress({
              mainImage: myMessagesIcons.image1,
              title: myMessages.item1.title,
              paragraph: myMessages.item1.paragraph,
              video: myMessages.item1.video,
              secondImage: myMessages.item1.secondImage,
              subTitle: myMessages.item1.subTitle,
              subParagraph: myMessages.item1.subparagraph,
            })
          }
        />
        <UpdateCard
          image={myMessagesIcons.image2}
          subtitle={myMessages.item2.title}
          text={myMessages.item2.paragraph}
          onPress={() =>
            handleCardPress({
              mainImage: myMessagesIcons.image7,
              title: myMessages.item2.title,
              paragraph: myMessages.item2.paragraph,
              video: myMessages.item2.video,
              secondImage: myMessages.item2.secondImage,
              subTitle: myMessages.item2.subtitle,
              subParagraph: myMessages.item2.subparagraph,
            })
          }
        />
        <UpdateCard
          image={myMessagesIcons.image3}
          subtitle={myMessages.item3.title}
          text={myMessages.item3.paragraph}
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
          text={myMessages.item4.paragraph}
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
      <Modal visible={mesContent !== null} onRequestClose={handleBackPress}>
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

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 30,
  },
});

export default MyMessages;
