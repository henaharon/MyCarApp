import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import DocumentField from './DocumentField';
import ImageField from './ImageField';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddFilesModal = ({ visible, onClose, onFilesAdded }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleOverlayPress = () => {
    onClose();
  };

  const handleFileUpload = (file) => {
    setUploadedFiles([...uploadedFiles, file]);
  };

  const handleCloseModal = () => {
    onFilesAdded(uploadedFiles);
    onClose();
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onClose();
      }}
    >
      <TouchableWithoutFeedback onPress={handleOverlayPress}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { width: windowWidth - 40 }]}>
            <Text style={styles.label}>צילום רישיון נהיגה</Text>
            <DocumentField onFileUpload={handleFileUpload} />
            <ImageField onFileUpload={handleFileUpload} />
            <Pressable style={[styles.button, styles.buttonClose]} onPress={handleCloseModal}>
              <Text style={styles.textStyle}>סגור</Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
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
