import React from 'react';
import {StyleSheet, Pressable, View, Button} from 'react-native';

const ButtonContainer = () => {
  const buttonNames = [
    'נורית אזהרה',
    'החלפת מגבים',
    'בלמים',
    'מנוע',
    'מצבר',
    'תיבת הילוכים/גיר',
    'אחר/תקלה משביתה',
  ];

  const renderButtons = () => {
    return buttonNames.map((name, index) => (
      <Button key={index} title={name} />
    ));
  };

  const handleButtonPress = name => {
    console.log(`Pressed ${name}`);
    // Perform any desired action based on the pressed button
  };

  return <View style={styles.centeredView}>{renderButtons()}</View>;
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  serviceButton: {
    backgroundColor: '#000',
    width: 100,
    height: 50,
    Text: 'white',
  },
});

export default ButtonContainer;
