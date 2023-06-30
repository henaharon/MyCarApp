import React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import DocumentField from './DocumentField';
import ImageField from './ImageField';
const AddFilesModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onClose();
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Text style={styles.label}>צילום רישיון נהיגה</Text>
          <DocumentField />
          <ImageField/>
          <Pressable style={[styles.button, styles.buttonClose]} onPress={onClose}>
            <Text style={styles.textStyle}>סגור</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 5,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AddFilesModal;
