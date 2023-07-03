import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ScrollView,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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
  const navigation = useNavigation();

  const [clickedButtons, setClickedButtons] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = index => {
    const updatedClickedButtons = [...clickedButtons];
    updatedClickedButtons[index] = !updatedClickedButtons[index];
    setClickedButtons(updatedClickedButtons);
    setModalVisible(true);
  };
  const getButtonStyle = index => {
    return [
      styles.button,
      clickedButtons[index] ? styles.buttonClicked : styles.buttonUnclick,
    ];
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleClose = () => {
    navigation.goBack(); // Navigate back to the previous screen
  }; // closing our part of the project and returns to the main screen.

  const renderButtons = () => {
    return buttonNames.map((button, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.button, getButtonStyle(index)]}
        onPress={() => handleButtonClick(index)}>
        <Image source={button.logo} style={styles.logo} />
        <Text style={styles.buttonText}>{button.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
        <Image
          source={require('../../../assets/icons/XButton.png')}
          style={styles.exitPhoto}
        />
      </TouchableOpacity>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/icons/carService.png')}
          style={styles.headerImage}
        />
        <View style={styles.buttonsAndTitles}>
          <Text style={styles.text}>איך אפשר לעזור לך?</Text>
          <Text style={styles.secondaryText}>אנא בחר שירות</Text>
          <View style={styles.buttonRow}>{renderButtons()}</View>
        </View>
      </View>
      <Modal visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.explanationText}>{}</Text>

          <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
            <Image
              source={require('../../../assets/icons/XButton.png')}
              style={styles.exitPhoto}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    overflow: 'scroll',
  },
  closeButton: {
    borderRadius: 5,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonClicked: {
    backgroundColor: 'red',
  },
  buttonUnclick: {
    backgroundColor: 'white',
  },
  headerImage: {
    width: '100%',
    resizeMode: 'cover',
  },
  text: {
    flex: 1,
    marginLeft: 'auto',
    paddingRight: 20,
    paddingTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryText: {
    flex: 1,
    marginLeft: 'auto',
    paddingRight: 20,
    paddingTop: 5,
    fontSize: 14,
    color: 'gray',
  },
  buttonsAndTitles: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: -30,
  },
  buttonRow: {
    flex: 1,
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
    borderRadius: 15,
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
  modalContainer: {
    flex: 1,
  },
  exitPhoto: {
    height: 30,
    width: 30,
    marginLeft: 'auto',
    marginRight: 15,
  },
  modalButton: {
    marginTop: 40,
  },
});

export default ButtonContainer;
