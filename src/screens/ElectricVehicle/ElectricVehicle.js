import React from 'react';
import { View } from 'react-native';
import HeaderScreen from './components/HeaderScreen.js';
import SummaryPage from './components/SummaryPage.js';
import NonSummaryPage from './components/NonSummaryPage.js';

const ElectricVehicle = () => {
    const isSummary = false
  return (
    <View style={{ flex: 1 }}>
      <HeaderScreen isSummary={isSummary} />
      {isSummary ? <SummaryPage /> : <NonSummaryPage />}
      {/* Add the rest of your content below the header */}
    </View>
  );
};

export default ElectricVehicle;