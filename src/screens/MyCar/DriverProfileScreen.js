import React, { useState } from 'react';
import { Dimensions, View, Button, Pressable, StyleSheet, Text, ScrollView, Image } from 'react-native';
import ModalPopup from './components/ModalPopup';
import InputField from './components/InputField';
import DriverLicenceTypeModal from './components/DriverLicenceTypeModal';
import AddFilesModal from './components/AddFilesModal';


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
        <Image
          source={require('./components/images/elementsProfilePhotoUserDefault3x.png')}
          style={styles.profileImage}
          resizeMode="contain"
        />
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

        <Pressable style={[styles.button, styles.buttonOpen]} onPress={openAddFilesModal}>
       
          <Text style={styles.buttonText}>Add Files</Text>
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
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={openModal}>
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
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  mainContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  profileImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1, // Adjust the aspect ratio as needed
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
  },
});

export default DriverProfileScreen;
