import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ScrollView,
} from 'react-native';

const ButtonContainer = () => {
  const buttonNames = [
    {name: 'נורית אזהרה', logo: require('../../../assets/icons/Lights.png')},
    {name: 'החלפת מגבים', logo: require('../../../assets/icons/Wipers.png')},
    {name: 'בלמים', logo: require('../../../assets/icons/Brakes.png')},
    {name: 'מנוע', logo: require('../../../assets/icons/Engine.png')},
    {name: 'מצבר', logo: require('../../../assets/icons/Battery.png')},
    {
      name: 'תיבת הילוכים / גיר',
      logo: require('../../../assets/icons/Gear.png'),
    },
    {
      name: 'אחר / תקלה משביתה',
      logo: require('../../../assets/icons/Other.png'),
    },
  ];

  const renderButtons = () => {
    return buttonNames.map((button, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.button,
          index === buttonNames.length - 1 && styles.lastButton,
        ]}
        onPress={() => handleButtonPress(button.name)}>
        <Image source={button.logo} style={styles.logo} />
        <Text style={styles.buttonText}>{button.name}</Text>
      </TouchableOpacity>
    ));
  };

  const handleButtonPress = name => {
    console.log(`Pressed ${name}`);
    // Perform any desired action based on the pressed button
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.centeredView}>
        <View style={styles.buttonRow}>{renderButtons()}</View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 110,
    height: 110,
    margin: 10,
    Text: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'lightgray',
    borderRadius: 5,
    borderWidth: 1,
  },
  lastButton: {
    width: 240,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default ButtonContainer;
