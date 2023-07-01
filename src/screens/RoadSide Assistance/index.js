import React from 'react';
// import {Header} from 'react-native';
import {View, Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import Model from './components/CustomButton';
import CustomButton from './components/CustomButton';

const RoadSideScreen = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: '15%',
  },
});

export default RoadSideScreen;
