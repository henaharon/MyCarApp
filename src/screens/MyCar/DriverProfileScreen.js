import React, { useState } from 'react';
import { Dimensions, View, Button, Pressable, StyleSheet, Text, ScrollView } from 'react-native';
import ModalPopup from './components/ModalPopup';
import DocumentField from './components/DocumentField';
import InputField from './components/InputField';
import DriverLicenceTypeModal from './components/DriverLicenceTypeModal';

const DriverProfileScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [driverLicenceTypeModalVisible, setDriverLicenceTypeModalVisible] = useState(false);

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Button onPress={() => navigation.navigate('Home')} title="Go to Home" />
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
            <Text style={styles.textStyle}>Open Modal</Text>
          </Pressable>
        </View>
      
        <Text style={styles.textStyle}>מסמסכים</Text>
        <Text>צילום רישיון נהיגה</Text>
        <DocumentField />
      </View>
      <DriverLicenceTypeModal visible={driverLicenceTypeModalVisible} onClose={closeDriverLicenceTypeModal} />
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
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'right',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
});

export default DriverProfileScreen;
