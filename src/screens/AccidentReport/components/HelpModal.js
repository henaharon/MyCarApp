import React, {useState} from 'react';
import {
  Alert,
  Image,
  Linking,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {accidentReport} from '../../../uiKit/icons';

const HelpModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const phoneNumber = number => {
    Linking.openURL(`tel:${number}`);
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <Image
                source={accidentReport.phoneIcon}
                style={styles.phoneIcon}></Image>
              <Text style={styles.modalTextHeader}>סיוע טלפוני</Text>
              <Text style={styles.modalText}>התקשרות מהירה</Text>
            </View>
            <View>
              <Pressable
                style={styles.phoneBtn}
                onPress={() => phoneNumber('100')}>
                <Text> משטרה</Text>
              </Pressable>
              <Pressable
                style={styles.phoneBtn}
                onPress={() => phoneNumber('101')}>
                <Text> מד״א</Text>
              </Pressable>
              <Pressable
                style={styles.phoneBtn}
                onPress={() => phoneNumber('1800-800-800')}>
                <Text> מוקד שירות</Text>
              </Pressable>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>סגירה</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable style={styles.helpBtn} onPress={() => setModalVisible(true)}>
        <Text style={[styles.helpBtn, styles.whiteText]}> עזרה</Text>
        <Image source={accidentReport.help} style={styles.helpIcon}></Image>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    margin: 0,
    width: '90%',
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
    position: 'absolute',
    top: 200,
  },
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
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTextHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  helpBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#DF6666',
    padding: 4,
    paddingHorizontal: 10,
  },
  whiteText: {
    color: 'white',
  },
  helpIcon: {
    width: 15,
    height: 15,
  },
  phoneBtn: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 200,
    borderRadius: 100,
    margin: 4,
    borderColor: 'lightgrey',
  },
  phoneIcon: {},
  modal: {
    backgroundColor: 'red',
  },
});

export default HelpModal;
