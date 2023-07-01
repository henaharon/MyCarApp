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

const Summary = props => {
  const imagePlaceholder = require('./../../assets/icons/placeholder-image.png');

  const closeModal = () => {
    props.setSummaryModalVisible(false);
  };

  return (
    <Modal
      visible={props.summaryModalVisible}
      animationType="slide"
      onRequestClose={closeModal}>
      <ScrollView>
        <View style={styles.modalWrapper}>
          <View style={styles.modalContainer}>
            <View style={styles.blackBackground} />

            <View style={styles.header}>
              {/* <TouchableOpacity onPress={closeModal}>
                <Image
                  source={require('./../../assets/icons/arrow-left.png')}
                  style={styles.arrowIcon}
                />
              </TouchableOpacity> */}
              <View style={styles.headerTextContainer}>
                <Text style={styles.headerText}>סיכום קריאה</Text>
              </View>
              <TouchableOpacity onPress={closeModal}>
                <Image
                  source={require('./../../assets/icons/arrow-right.png')}
                  style={styles.arrowIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <Text style={styles.serviceHeader}>שירותי דרך</Text>
              <Text style={styles.serviceContent}>
                לפניכם פרטי הקריאה,
                {'\n'}
                אנא בדקו כי כל הפרטים נכונים לפני השליחה
              </Text>

              <View style={styles.BatteryIconContainer}>
                <Image
                  source={require('./../../assets/icons/battery.png')}
                  style={styles.batteryIcon}
                />
              </View>
              <Text style={styles.notesHeader}>תיאור/הערות</Text>
              <Text style={styles.notesContent}>{props.notesInputValue}</Text>

              <Text style={styles.imagesHeader}>תמונות</Text>
              <ScrollView horizontal={true} style={styles.imageContainer}>
                {props.imageUris.map((uri, index) => (
                  <View key={index} style={styles.imageCard}>
                    <Image source={{uri}} style={styles.image} />
                  </View>
                ))}
              </ScrollView>

              <View style={styles.lineBreak} />

              <Text style={styles.generalContentsHeader}>פרטים כלליים</Text>
              <View style={styles.generalContentContainer}>
                <View style={styles.generalContentIconContainer}>
                  <Image
                    source={require('./../../assets/icons/car-icon.png')}
                    style={styles.generalContentIconImage}
                  />
                </View>
                <View style={styles.generalContentDataContainer}>
                  <Text style={styles.generalContentDataHeader}>
                    (סוג הרכב)
                  </Text>
                  <Text style={styles.generalContentDataContent}>
                    (מספר הרכב)
                  </Text>
                </View>
              </View>

              <View style={styles.generalContentContainer}>
                <View style={styles.generalContentIconContainer}>
                  <Image
                    source={require('./../../assets/icons/car-location.png')}
                    style={styles.generalContentIconImage}
                  />
                </View>
                <View style={styles.generalContentDataContainer}>
                  <Text style={styles.generalContentDataHeader}>מיקום</Text>
                  <Text style={styles.generalContentDataContent}>
                    {props.locationInputValue}
                  </Text>
                </View>
              </View>

              <View style={styles.fyiContainer}>
                <View style={styles.fyiIconContainer}>
                  <Image
                    source={require('./../../assets/icons/fyi-icon.png')}
                    style={styles.fyiIconImage}
                  />
                </View>
                <View style={styles.generalContentDataContainer}>
                  <Text style={styles.fyiDataHeader}>לידיעתך</Text>
                  <Text style={styles.fyiDataContent}>
                    ניתן להתעדכן בכל רגע נתון בסטאטוס הבקשה שלך ישירות
                    מהאפליקציה דרך מסך סטאטוס הקריאות שלי
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                // onPress={handleUploadImage}
                style={styles.sendButtonStyle}>
                <Text style={styles.sendButtonText}>אישור ושליחה</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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
    justifyContent: 'flex-end',
    backgroundColor: 'black',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  headerTextContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
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
    alignItems: 'flex-end',
  },
  batteryIcon: {
    width: 45,
    height: 45,
  },
  content: {
    flex: 1,
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
  },
  serviceHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'right',
  },
  serviceContent: {
    fontSize: 13,
    marginBottom: 6,
    textAlign: 'right',
    color: 'darkgrey',
  },

  notesHeader: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'right',
  },
  notesContent: {
    fontSize: 13,
    textAlign: 'right',
  },
  imagesHeader: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
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
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  imageContainer: {
    marginTop: 8,
    flexDirection: 'row',
    maxHeight: 120,
    marginBottom: 16,
  },
  imageCard: {
    marginRight: 8,
  },
  imageCardUpload: {
    marginRight: 8,
    width: 100,
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  lineBreak: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth + 1,
  },
  generalContentsHeader: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  generalContentContainer: {
    flexDirection: 'row-reverse',
  },
  generalContentIconContainer: {
    marginTop: 6,
    borderRadius: 50,
    backgroundColor: 'lightgrey',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  generalContentIconImage: {
    backgroundColor: 'lightgrey',
    width: 20,
    height: 20,
  },
  generalContentDataContainer: {
    justifyContent: 'center',
    textAlign: 'right',
    fontSize: 12,
    width: 300,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  generalContentDataHeader: {
    color: 'black',
    fontSize: 13,
    textAlign: 'right',
  },
  generalContentDataContent: {
    color: 'grey',
    fontSize: 13,
    textAlign: 'right',
  },
  fyiContainer: {
    backgroundColor: '#FFFF8F',
    width: '100%',
    minHeight: 50,
    borderRadius: 30,
    alignSelf: 'flex-end',
    marginTop: 16,
    flexDirection: 'row-reverse',
  },
  fyiIconContainer: {
    marginTop: 6,
    borderRadius: 50,
    backgroundColor: '#FDDA0D',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  fyiIconImage: {
    backgroundColor: '#FDDA0D',
    width: 20,
    height: 20,
  },
  fyiDataHeader: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  fyiDataContent: {
    maxWidth: '90%',
    fontSize: 13,
    textAlign: 'right',
    marginBottom: 10,
  },
  sendButtonStyle: {
    backgroundColor: 'violet',
    padding: 12,
    marginTop: 24,
    alignItems: 'center',
    borderRadius: 30,
  },
  sendButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
});

export default Summary;
