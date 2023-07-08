import React, {useState} from 'react';
import {
  Dimensions,
  View,
  Pressable,
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import ModalPopup from './components/ModalPopup';
import InputField from './components/InputField';
import DriverLicenceTypeModal from './components/DriverLicenceTypeModal';
import AddFilesModal from './components/AddFilesModal';
import LinearGradient from 'react-native-linear-gradient';
import SaveModal from './components/SaveModal';

const DriverProfileScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  const [driverLicenceTypeModalVisible, setDriverLicenceTypeModalVisible] =
    useState(false);
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

  const handleFileAdded = file => {
    setAddedFiles(prevFiles => [...prevFiles, file]);
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

  const handleDriverLicenceTypesSelect = selectedTypes => {
    setDriverLicenceTypes(selectedTypes);
  };

  const handleFilesAdded = files => {
    setUploadedFiles(files);
  };

  const goBackToHomePage = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient
        colors={['#E50075', '#F05C62']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.headerGradient}>
        <View style={styles.topView}>
          <View style={styles.header}>
            <View style={styles.saveButtonContainer}>
              <Pressable onPress={openSaveModal} style={[styles.saveButton]}>
                <Text style={styles.SavebuttonText}>שׁמירה</Text>
              </Pressable>
            </View>
            <View style={styles.headerTitleContainer}>
              <Text style={styles.textTitleProfileStyle}>הפרופיל שלי</Text>
            </View>
            <View style={styles.xButtonContainer}>
              <Pressable onPress={goBackToHomePage}>
                <Image
                  source={require('./components/images/componentsNavBarXButtonsRoundedWhiteAlpha3x.png')}
                  style={styles.profileXImage}
                />
              </Pressable>
            </View>
          </View>

          <View style={styles.profileImageContainer}>
            <Pressable
              onPress={openAddFilesModal}
              style={styles.profileEditButton}>
              <Image
                source={require('./components/images/ImagePlaceholder.png')}
                style={styles.profileEditPhoto}
              />
            </Pressable>
          </View>
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
              <Pressable
                onPress={openDriverLicenceTypeModal}
                style={styles.driverLicenceTypeButton}>
                <Image
                  source={require('./components/images/elements24PxIconsNavigationIcHeaderLeftSmall3x.png')}
                  style={styles.openDriverLicenceTypeButton}
                />
              </Pressable>
              <Text style={styles.driverLicenceTypeTextStyle}>
                {driverLicenceTypes.join(', ')}
              </Text>
              <Text style={styles.textStyle}>סוג רשיון נהיגה</Text>
            </View>
          </View>

          <Text style={styles.textStyle}>מסמכים</Text>
          <View style={styles.rowContainer}>
            <Pressable
              style={styles.addDocumentButton}
              onPress={openAddFilesModal}>
              <Image
                source={require('./components/images/elements24PxIconsNavigationIcHeaderLeftSmall3x.png')}
                style={styles.documentIcon}
              />
            </Pressable>
            <Text style={styles.documentText}>צילום רישיון נהיגה</Text>
          </View>

          <Text>קבצים שנוספו:</Text>
          <View>
            <AddFilesModal
              visible={addFilesModalVisible}
              onClose={closeAddFilesModal}
              onFilesAdded={handleFilesAdded}
            />
          </View>
          <Pressable
            style={[styles.fullWidthButton, styles.whiteButton]}
            onPress={openModal}>
            <View style={styles.buttonContent}>
              <Text style={[styles.textStyle, styles.whiteButtonText]}>
                התנתק
              </Text>
              <Image
                source={require('./components/images/elements24PxIconsExit3x.png')}
                style={styles.buttonIcon}
              />
            </View>
          </Pressable>
        </View>

        <DriverLicenceTypeModal
          visible={driverLicenceTypeModalVisible}
          onClose={closeDriverLicenceTypeModal}
          onSelect={handleDriverLicenceTypesSelect}
        />

        <ModalPopup visible={modalVisible} onClose={closeModal} />
        <SaveModal visible={saveModalVisible} onClose={closeSaveModal} />
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  xButtonContainer: {flex: 1, paddingRight: 15, alignItems: 'flex-end'},
  saveButtonContainer: {flex: 1, paddingLeft: 15},
  headerTitleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  topView: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  headerGradient: {
    height: '100%',
    width: '100%',
  },
  mainContainer: {
    paddingVertical: 20,
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
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
  SavebuttonText: {
    color: 'white',
  },
  saveButton: {
    flex: 1,
    borderRadius: 20,
    elevation: 2,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20, // Add margin to the right
    alignItems: 'center',
  },

  centeredText: {
    textAlign: 'center',
  },
  textTitleProfileStyle: {
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
  openDriverLicenceTypeButton: {
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
  driverLicenceTypeTextStyle: {
    fontSize: 16,
    marginRight: 10,
  },
  openDriverLicenceTypeButton: {
    width: 12,
    height: 12,
  },
  whiteButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 60,
    padding: 10,
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginLeft: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Align content in the middle
  },

  whiteButtonText: {
    color: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    textAlign: 'center',
  },
  profileImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileEditButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 5,
    marginRight: 130, // Add margin to the left
  },
  profileEditPhoto: {
    width: 24,
    height: 24,
  },
});

export default DriverProfileScreen;
