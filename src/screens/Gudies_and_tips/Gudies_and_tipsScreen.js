import React, {useState} from 'react';
import {Modal, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Text} from 'react-native';
import BaseView from '../../uiKit/BaseView';
import {gudiesIcons} from '../../uiKit/icons';
import {tipsAndGuides} from '../../locals/tips.json';
import ExpandTipCard from './components/ExpandTipCard';
import TipCard from './components/TipCard';
import Header from './components/Header';

const Gudies_and_tipsScreen = ({navigation}) => {
  const [tipContent, setTipContent] = useState(null);

  const handleCardPress = content => {
    setTipContent(content);
  };

  const handleBackPress = () => {
    setTipContent(null);
  };

  const onRightArrowPress = () => {
    navigation.goBack();
  };

  return (
    <BaseView>
      <Header onRightArrowPress={onRightArrowPress} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={styles.heading}>
              {"מדריכים"}
      </Text>
        <TipCard
          image={gudiesIcons.image8}
          subtitle={tipsAndGuides.item1.title}
          text={tipsAndGuides.item1.paragraph}
          onPress={() =>
            handleCardPress({
              mainImage: gudiesIcons.image8,
              title: tipsAndGuides.item1.title,
              paragraph: tipsAndGuides.item1.paragraph,
              video: tipsAndGuides.item1.video,
              secondImage: tipsAndGuides.item1.secondImage,
              subTitle: tipsAndGuides.item1.subtitle,
              subParagraph: tipsAndGuides.item1.subparagraph,
            })
          }
        />
        <TipCard
          image={gudiesIcons.image9}
          subtitle={tipsAndGuides.item2.title}
          text={tipsAndGuides.item2.paragraph}
          onPress={() =>
            handleCardPress({
              mainImage: gudiesIcons.image9,
              title: tipsAndGuides.item2.title,
              paragraph: tipsAndGuides.item2.paragraph,
              video: tipsAndGuides.item2.video,
              secondImage: tipsAndGuides.item2.secondImage,
              subTitle: tipsAndGuides.item2.subtitle,
              subParagraph: tipsAndGuides.item2.subparagraph,
            })
          }
        />
        <TipCard
          image={gudiesIcons.image10}
          subtitle={tipsAndGuides.item3.title}
          text={tipsAndGuides.item3.paragraph}
          onPress={() =>
            handleCardPress({
              mainImage: gudiesIcons.image10,
              title: tipsAndGuides.item3.title,
              paragraph: tipsAndGuides.item3.paragraph,
              video: tipsAndGuides.item3.video,
              secondImage: gudiesIcons.image11,
              subTitle: tipsAndGuides.item3.subtitle,
              subParagraph: tipsAndGuides.item3.subparagraph,
            })
          }
        />
      </ScrollView>
      <Modal visible={tipContent !== null} onRequestClose={handleBackPress}>
        <ExpandTipCard
          mainImage={tipContent?.mainImage}
          title={tipContent?.title}
          paragraph={tipContent?.paragraph}
          video={tipContent?.video}
          secondImage={tipContent?.secondImage}
          subtitle={tipContent?.subTitle}
          subParagraph={tipContent?.subParagraph}
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
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    marginRight: 20,
  },
});

export default Gudies_and_tipsScreen;
