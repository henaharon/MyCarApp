import React from 'react';
import {TextInput as MaterialTextInput} from '@react-native-material/core';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

import Summary from './Summary';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker'; // TODO

const Battery = ({modalVisible, setModalVisible}) => {
  const [notesInputValue, setNotesInputValue] = React.useState('');
  const [locationInputValue, setLocationInputValue] = React.useState('');
  const [imageUris, setImageUris] = React.useState([]);
  const [summaryModalVisible, setSummaryModalVisible] = React.useState(false);

  const handleUploadImage = () => {
    // Simulating image upload by generating a random image URL
    const randomImageUrl = `https://picsum.photos/200/300?random=${Math.random()}`;
    setImageUris([...imageUris, randomImageUrl]);
  };

  const imagePlaceholder = require('./../../assets/icons/placeholder-image.png');

  const closeModal = () => {
    setModalVisible(false);
    setNotesInputValue('');
    setLocationInputValue('');
    setImageUris([]);
  };

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      onRequestClose={closeModal}>
      <View style={styles.modalWrapper}>
        <View style={styles.modalContainer}>
          <View style={styles.blackBackground} />

          <View style={styles.header}>
            <TouchableOpacity onPress={() => setSummaryModalVisible(true)}>
              <Image
                source={require('./../../assets/icons/arrow-left.png')}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Battery</Text>
            <TouchableOpacity onPress={closeModal}>
              <Image
                source={require('./../../assets/icons/arrow-right.png')}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <View style={styles.BatteryIconContainer}>
              <Image
                source={require('./../../assets/icons/battery.png')}
                style={styles.batteryIcon}
              />
            </View>
            <Text style={styles.detailsHeader}>Details</Text>
            <TextInput
              multiline
              placeholder="Enter Notes ..."
              value={notesInputValue}
              onChangeText={setNotesInputValue}
              style={styles.textArea}
            />

            {/* <TouchableOpacity
              onPress={handleUploadImage}
              style={styles.uploadButton}>
              <Text style={styles.buttonText}>Upload Images</Text>
            </TouchableOpacity> */}

            <ScrollView horizontal={true} style={styles.imageContainer}>
              {imageUris.map((uri, index) => (
                <View key={index} style={styles.imageCard}>
                  <Image source={{uri}} style={styles.image} />
                </View>
              ))}
              <TouchableOpacity onPress={handleUploadImage}>
                <Image
                  source={imagePlaceholder}
                  style={styles.imageCardUpload}
                />
              </TouchableOpacity>
            </ScrollView>

            <MaterialTextInput
              variant="outlined"
              value={locationInputValue}
              label="* Current location & directions"
              inputContainerStyle={styles.locationTextArea}
              onChangeText={setLocationInputValue}
            />
          </View>
        </View>
      </View>

      {summaryModalVisible && (
        <Summary
          summaryModalVisible={summaryModalVisible}
          setSummaryModalVisible={setSummaryModalVisible}
          imageUris={imageUris}
          locationInputValue={locationInputValue}
          notesInputValue={notesInputValue}
        />
      )}
    </Modal>
  );
};

const windowsHight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    marginTop: 22,
  },
  modalContainer: {
    flex: 1,
  },
  blackBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '50%',
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  arrowIcon: {
    width: 36,
    height: 36,
  },
  BatteryIconContainer: {
    alignItems: 'center',
  },
  batteryIcon: {
    width: 90,
    height: 90,
  },
  content: {
    flex: 1,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
  },
  detailsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    height: 100,
    marginBottom: 16,
  },
  locationTextArea: {
    minHeight: 100,
    flex: 1,
    flexWrap: 'wrap',
  },
  uploadButton: {
    backgroundColor: 'blue',
    padding: 12,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  imageContainer: {
    marginTop: 16,
    flexDirection: 'row',
    maxHeight: 120,
    marginBottom: 16,
    transform: [{scaleX: -1}],
  },
  imageCard: {
    marginLeft: 8,
    marginTop: 6,
    transform: [{ scaleX: -1 }]
  },
  imageCardUpload: {
    marginLeft: 8,
    width: 80,
    height: 100,
    marginTop: 6,
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 6,
  },
});

export default Battery;
