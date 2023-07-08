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

const CarPart = ({modalVisible, setModalVisible, buttonName, buttonLogo}) => {
  console.log(buttonName);
  const [notesInputValue, setNotesInputValue] = React.useState('');
  const [locationInputValue, setLocationInputValue] = React.useState('');
  const [imageUris, setImageUris] = React.useState([]);
  const [summaryModalVisible, setSummaryModalVisible] = React.useState(false);

  const ImagePicker = require('react-native-image-picker');

  const imagePlaceholder = require('../../../assets/icons/placeholder-image.png');

  const closeModal = () => {
    setModalVisible(false);
    setNotesInputValue('');
    setLocationInputValue('');
    setImageUris([]);
  };

  const handleChoosePhoto = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: false,
      maxHeight: 500,
      maxWidth: 500,
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        setSelectedImage('cancel');
      } else if (response.error) {
        setSelectedImage('ImagePicker Error: ' + response.error);
      } else if (response.assets[0].uri) {
        setImageUris([...imageUris, response.assets[0].uri]);
      } else {
        setImageUris([...imageUris, 'ERROR']);
      }
    });
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
                source={require('../../../assets/icons/arrow-left.png')}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>{buttonName}</Text>
            <TouchableOpacity onPress={closeModal}>
              <Image
                source={require('../../../assets/icons/arrow-right.png')}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <View style={styles.carPartIconContainer}>
              <Image source={buttonLogo} style={styles.carPartIcon} />
            </View>
            <Text style={styles.detailsHeader}>Details</Text>
            <TextInput
              multiline
              placeholder="Enter Notes ..."
              value={notesInputValue}
              onChangeText={setNotesInputValue}
              style={styles.textArea}
            />

            <ScrollView horizontal={true} style={styles.imageContainer}>
              {imageUris.map((uri, index) => (
                <View key={index} style={styles.imageCard}>
                  <Image source={{uri}} style={styles.Image} />
                  <Image source={uri} style={styles.Image} />
                  <Text>uri</Text>
                </View>
              ))}
              <TouchableOpacity onPress={handleChoosePhoto}>
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
          buttonName={buttonName}
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
  carPartIconContainer: {
    alignItems: 'center',
  },
  carPartIcon: {
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
    transform: [{scaleX: -1}],
  },
  imageCardUpload: {
    marginLeft: 8,
    width: 80,
    height: 100,
    marginTop: 6,
  },
  Image: {
    width: 80,
    height: 100,
    borderRadius: 6,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    // marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default CarPart;
