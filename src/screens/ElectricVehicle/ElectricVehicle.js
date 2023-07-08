import React, {useState} from 'react';
import {View} from 'react-native';
import HeaderScreen from './components/HeaderScreen.js';
import SummaryPage from './components/SummaryPage.js';
import NonSummaryPage from './components/NonSummaryPage.js';

const ElectricVehicle = ({navigation}) => {
  const [isSummary, setIsSummary] = useState(false);

  const handleLeftArrowPress = () => {
    setIsSummary(!isSummary);
  };

  const handleModalClose = () => {
    setIsSummary(!isSummary);
  };

  const onRightArrowPressInSummery = () => {
    setIsSummary(!isSummary);
  };
  const onRightArrowPressNoSummery = () => {
    navigation.goBack();
  };

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <HeaderScreen
        isSummary={isSummary}
        onLeftArrowPress={handleLeftArrowPress}
        onRightArrowPressInSummery={onRightArrowPressInSummery}
        onRightArrowPressNoSummery={onRightArrowPressNoSummery}
      />
      {isSummary ? (
        <SummaryPage onModalClose={handleModalClose} />
      ) : (
        <NonSummaryPage />
      )}
    </View>
  );
};

export default ElectricVehicle;
