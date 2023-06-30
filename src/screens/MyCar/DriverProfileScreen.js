import React, { useState } from 'react';
import { Dimensions, View, Button, Pressable, StyleSheet, Text, ScrollView, Image } from 'react-native';
import ModalPopup from './components/ModalPopup';
import InputField from './components/InputField';
import DriverLicenceTypeModal from './components/DriverLicenceTypeModal';
import AddFilesModal from './components/AddFilesModal';
import LinearGradient from 'react-native-linear-gradient';
import SaveModal from './components/SaveModal';
const DriverProfileScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  const [driverLicenceTypeModalVisible, setDriverLicenceTypeModalVisible] = useState(false);
  const [addFilesModalVisible, setAddFilesModalVisible] = useState(false);
  const [driverLicenceTypes, setDriverLicenceTypes] = useState([]);
  const [addedFiles, setAddedFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const openAddFilesModal = () => {
    setAddFilesModalVisible(true);
  };

  const closeAddFilesModal = () => {
    setAddFilesModalVisible(false);
  };
  const openSaveModal = () => {
    setSaveModalVisible(true);
  };

  const closeSaveModal = () => {
    setSaveModalVisible(false);
  };

  const handleFileAdded = (file) => {
    setAddedFiles((prevFiles) => [...prevFiles, file]);
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

  const handleFilesAdded = (files) => {
    setUploadedFiles(files);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          colors={['#E50075', '#F05C62']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.headerGradient}
        />
        <Pressable onPress={openSaveModal} style={styles.driverLicenceTypeButton}>
        <Text style={styles.texttitleProfileStyle}>שׁמירה</Text>
            </Pressable>
        <Image
          source={require('./components/images/componentsNavBarXButtonsRoundedWhiteAlpha3x.png')}
          style={styles.profileXImage}
        />
        <Text style={styles.texttitleProfileStyle}>הפרופיל שלי</Text>
        <Image
          source={require('./components/images/elementsProfilePhotoUserDefault3x.png')}
          style={styles.profileImage}
          resizeMode="contain"
        />
        <Text style={styles.textMainProfileStyle}>אביב שרון</Text>
        <Text style={styles.textSubProfileStyle}>מספר עובד: 537 221</Text>
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

          <View style={styles.driverLicenceTypeContainer}>
            <Pressable onPress={openDriverLicenceTypeModal} style={styles.driverLicenceTypeButton}>
              <Image
                source={require('./components/images/elements24PxIconsNavigationIcHeaderLeftSmall3x.png')}
                style={styles.OpenDriverLicenceTypeButton}
              />
            </Pressable>
            <Text style={styles.DriverLicenceTypetextStyle}>{driverLicenceTypes.join(', ')}</Text>
            <Text style={styles.textStyle}>סוג רשיון נהיגה</Text>
          </View>
        </View>

        <Text style={styles.textStyle}>מסמכים</Text>
        <View style={styles.rowContainer}>
          <Pressable style={styles.addDocumentButton} onPress={openAddFilesModal}>
            <Image
              source={require('./components/images/elements24PxIconsNavigationIcHeaderLeftSmall3x.png')}
              style={styles.addDocumentIconStyle}
            />
          </Pressable>
          <Text style={styles.documentText}>צילום רישיון נהיגה</Text>
        </View>

        <Text style={styles.textStyle}>קבצים שנוספו:</Text>
        <View>
          {/* Display the uploaded files */}
          {uploadedFiles.map((file, index) => (
            <Text key={index}>{file.name}</Text>
            // Replace this with your desired display logic for the uploaded files
          ))}

          {/* Modal for adding files */}
          <AddFilesModal visible={addFilesModalVisible} onClose={closeAddFilesModal} onFilesAdded={handleFilesAdded} />
        </View>
      </View>

      <DriverLicenceTypeModal
        visible={driverLicenceTypeModalVisible}
        onClose={closeDriverLicenceTypeModal}
        onSelect={handleDriverLicenceTypesSelect}
      />

      <ModalPopup visible={modalVisible} onClose={closeSaveModal} />
      <SaveModal visible={saveModalVisible} onClose={closeSaveModal} />
      <Pressable style={[styles.button, styles.buttonOpen, styles.fullWidthButton]} onPress={openModal}>
        <Image source={require('./components/images/elements24PxIconsExit3x.png')} />
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
  documentIcon: {
    width: 24,
    height: 24,
  },
  documentText: {
    fontSize: 16,
    textAlign: 'right',
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addDocumentButton: {
    padding: 5,
    borderRadius: 50,
  },
  addDocumentIconStyle: {
    width: 12,
    height: 12,
  },
  OpenDriverLicenceTypeButton: {
    padding: 1,
    borderRadius: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  driverLicenceTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  driverLicenceTypeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
  },
  DriverLicenceTypetextStyle: {
    fontSize: 16,
    marginRight: 10,
  },
  OpenDriverLicenceTypeButton: {
    width: 12,
    height: 12,
  },
});

export default DriverProfileScreen;
