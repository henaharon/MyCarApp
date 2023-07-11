import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const ImageField = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.7,
      cropping: true,
    };

    ImagePicker.openPicker(options)
      .then((response) => {
        if (!response.didCancel) {
          setSelectedImage(response.path);
        }
      })
      .catch((error) => {
        console.log('Image picker error:', error);
      });
  };

  const handleCaptureImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.7,
      cropping: true,
    };

    ImagePicker.openCamera(options)
      .then((response) => {
        if (!response.didCancel) {
          setSelectedImage(response.path);
        }
      })
      .catch((error) => {
        console.log('Image capture error:', error);
      });
  };

  return (
    <View style={styles.container}>
      {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      ) : (
        <Text style={styles.placeholder}>No image selected</Text>
      )}
      {!selectedImage && (
        <View style={styles.buttonContainer}>
          <Button
            title="Select Image"
            onPress={handleSelectImage}
            icon={<Icon name="photo" size={20} color="black" />}
            color="#007bff"
          />
          <Button
            title="Capture Image"
            onPress={handleCaptureImage}
            icon={<Icon name="camera" size={20} color="white" />}
            color="#007bff"
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  placeholder: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ImageField;
