import React, { useState } from 'react';
import { Dimensions, View, Button, Pressable, StyleSheet, Text, ScrollView, Image } from 'react-native';
import ModalPopup from './components/ModalPopup';
import InputField from './components/InputField';
import DriverLicenceTypeModal from './components/DriverLicenceTypeModal';
import AddFilesModal from './components/AddFilesModal';
import LinearGradient from 'react-native-linear-gradient';

const DriverProfileScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [driverLicenceTypeModalVisible, setDriverLicenceTypeModalVisible] = useState(false);
  const [AddFilesModalVisible, setAddFilesModalVisible] = useState(false);
  const [driverLicenceTypes, setDriverLicenceTypes] = useState([]);

  const openAddFilesModal = () => {
    setAddFilesModalVisible(true);
  };

  const closeAddFilesModal = () => {
    setAddFilesModalVisible(false);
  };
  const openDriverLicenceTypeModal = () => {
    setDriverLicenceTypeModalVisible(true);
  };

  const closeDriverLicenceTypeModal = () => {
    setDriverLicenceTypeModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleDriverLicenceTypesSelect = (selectedTypes) => {
    setDriverLicenceTypes(selectedTypes);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.header}>
    <LinearGradient
  colors={['#E50075', '#F05C62']} // Replace with your desired gradient colors
  start={{ x: 0, y: 0 }} // Start from the right side
  end={{ x: 1, y: 0 }} 
  style={styles.headerGradient}
/>
<Image source={require('./components/images/componentsNavBarXButtonsRoundedWhiteAlpha3x.png')}
style={styles.profileXImage}/>
      <Text style={styles.texttitleProfileStyle}>הפרופיל שלי </Text>
      <Image
        source={require('./components/images/elementsProfilePhotoUserDefault3x.png')}
        style={styles.profileImage}
        resizeMode="contain"
      />
      <Text style={styles.textMainProfileStyle}>אביב שרון</Text>
      <Text style={styles.textSubProfileStyle}>מספר עובד : 537 221</Text>
    </View>
    <View style={styles.mainContainer}>
        <Text style={styles.textStyle}>פרטים כלליים</Text>
        <View style={styles.inputContainer}>
          <InputField label="שם פרטי" placeholder="אביב" />
          <InputField label="שם משפחה" placeholder="שרון" />
          <InputField label="מספר עובד" placeholder="537 221" />
          <InputField label="תאריך לידה" placeholder="23.04.1990" />
        </View>
        <Text style={styles.textStyle}>פרטי תקשורת</Text>
        <View style={styles.inputContainer}>
          <InputField label="כתובת מייל" placeholder="AvivS@gmail.com" />
          <InputField label="טלפון" placeholder="0547883115" />
        </View>
        <Text style={styles.textStyle}>פרטי רישיון נהיגה</Text>
        <View style={styles.inputContainer}>
          <InputField label="מספר רישיון נהיגה" placeholder="84277081" />
          <InputField label="תוקף רישיון נהיגה" placeholder="23.05.2025" />

          <Pressable style={[styles.button, styles.buttonOpen]} onPress={openDriverLicenceTypeModal}>
            <InputField label="סוג רשיון נהיגה" placeholder={driverLicenceTypes.join(', ')} />
          </Pressable>
        </View>

        <Text style={styles.textStyle}>מסמכים</Text>
        <Text>צילום רישיון נהיגה</Text>

        <Pressable style={[styles.button, styles.fullWidthButton]} onPress={openAddFilesModal}>
          <Text style={[styles.buttonText, styles.centeredText]}>Add Files</Text>
        </Pressable>
      </View>
      <AddFilesModal
        visible={AddFilesModalVisible}
        onClose={closeAddFilesModal}
      />
      <DriverLicenceTypeModal
        visible={driverLicenceTypeModalVisible}
        onClose={closeDriverLicenceTypeModal}
        onSelect={handleDriverLicenceTypesSelect}
      />
      <ModalPopup visible={modalVisible} onClose={closeModal} />
      <Pressable style={[styles.button, styles.buttonOpen, styles.fullWidthButton]} onPress={openModal}>
        <Image
          source={require('./components/images/elements24PxIconsExit3x.png')}
        />
        <Text style={styles.textStyle}>התנתק</Text>
      </Pressable>
    </ScrollView>
  );
};

const windowsHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    position: 'relative',
    alignSelf: 'center',
    marginBottom: 20,
  },
  headerGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
  },
  mainContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  profileImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 2, // Adjust the aspect ratio as needed
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'right',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
    textAlign: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
  texttitleProfileStyle: {
    alignSelf: 'center',
    color: 'white',
  },
  textMainProfileStyle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  textSubProfileStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  fullWidthButton: {
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
  },
  profileXImage: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 24,
    height: 24,
  },

});

export default DriverProfileScreen;
