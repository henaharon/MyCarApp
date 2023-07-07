import React, { useState } from 'react';
import { View } from 'react-native';
import HeaderScreen from './components/HeaderScreen.js';
import SummaryPage from './components/SummaryPage.js';
import NonSummaryPage from './components/NonSummaryPage.js';

const ElectricVehicle = () => {
  const [isSummary, setIsSummary] = useState(false);

  const handleLeftArrowPress = () => {
    setIsSummary(!isSummary);
  };

  const handleModalClose = () => {
    setIsSummary(!isSummary);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <HeaderScreen isSummary={isSummary} onLeftArrowPress={handleLeftArrowPress} />
      {isSummary ? <SummaryPage onModalClose={handleModalClose} /> : <NonSummaryPage />}
    </View>
  );
};

export default ElectricVehicle;