import React, {useState} from 'react';
import {View, Button, Pressable, StyleSheet, Text} from 'react-native';
import ModalPopup from './components/ModalPopup';
import DocumentField from './components/DocumentField';
import InputField from './components/InputField';
const DriverProfileScreen=({ navigation })=> {

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go to Home"
        />
      <Text style={styles.textStyle}>פרטים כלליים</Text>
      <InputField label ="שם פרטי" placeholder="sameer"/>
      <InputField label ="שם משפחה" placeholder="sameer"/>
      <InputField label ="מספר עובד" placeholder="sameer"/>
      <InputField label ="תאריך לידה" placeholder="sameer"/>
      <Text style={styles.textStyle}>פרטי תקשורת</Text>
      <InputField label ="כתובת מייל" placeholder="sameer"/>
      <InputField label ="טלפון" placeholder="sameer"/> 
      <Text style={styles.textStyle}>פרטי רישיון נהיגה</Text>     
      <InputField label ="מספר רישיון נהיגה" placeholder="sameer"/>
      <InputField label ="תוקף רישיון נהיגה" placeholder="sameer"/>
     <Text style={styles.textStyle}>מסמסכים</Text>
     <DocumentField/>
     <ModalPopup visible={modalVisible} onClose={closeModal} />
      <Pressable style={[styles.button, styles.buttonOpen]} onPress={openModal}>
        <Text style={styles.textStyle}>התנתק</Text>
      </Pressable>
      </View>
    );
  }
const styles = StyleSheet.create({
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
})
export default DriverProfileScreen;

