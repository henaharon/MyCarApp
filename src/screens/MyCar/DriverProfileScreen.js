import React, {useState} from 'react';
import {View, Button, Pressable, StyleSheet, Text} from 'react-native';
import ModalPopup from './components/ModalPopup';
import DocumentField from './components/DocumentField';

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

