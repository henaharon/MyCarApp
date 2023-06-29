import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Image,
  View,
  Modal,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Linking,
} from 'react-native';
import {translate} from '../../locals/index';
import {loginIcons} from '../../uiKit/icons';

const RegisterForm = ({modalState, navigation}) => {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const closeFormModal = () => {
    // hideModal();
    setIsFormOpen(false);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isFormOpen}
        onRequestClose={closeFormModal}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>פרטים כלליים</Text>
          <View>
            <TextInput placeholder="שם פרטי" style={styles.formInput} />
            <TextInput placeholder="שם משפחה" style={styles.formInput} />
            <TextInput placeholder="מספר עובד" style={styles.formInput} />
            <TextInput placeholder="תאריך לידה" style={styles.formInput} />
          </View>
          <Text style={styles.modalText}>פרטי התקשרות</Text>
          <View>
            <TextInput placeholder="כתובת אימייל" style={styles.formInput} />
            <TextInput placeholder="טלפון" style={styles.formInput} />
          </View>
          <Text style={styles.modalText}>פרטי רישיון נהיגה</Text>
          <View>
            <TextInput
              placeholder="מספר רישיון נהיגה"
              style={styles.formInput}
            />
            <TextInput
              placeholder="תוקף רישיון נהיגה"
              style={styles.formInput}
            />
            <TextInput
              placeholder="סוג רישיון נהיגה"
              style={styles.formInput}
            />
          </View>
          <Text style={styles.modalText}>מסמכים</Text>
          {/* צריך להוסיף פה אופציה להעלות מסמכים */}

          <View style={styles.footer}>
            <LinearGradient
              style={styles.gradient}
              colors={['#d42f5b', '#d4342f']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              location={[0.5, 0.95]}>
              <TouchableOpacity style={styles.button} onPress={closeFormModal}>
                <Text style={styles.buttonText}>
                  {translate('saveAndContinue')}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },

  modalView: {
    // marginTop: 120,
    marginLeft: 45,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    width: 300,
    elevation: 5,
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  formInput: {
    // marginBottom: 15,
    borderWidth: 0.5,
    height: 40,
    borderColor: 'grey',
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },

  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 220,
    // marginBottom: 45,
  },

  buttonText: {
    color: 'white',
  },

  gradient: {
    borderRadius: 30,
  },
});

export default RegisterForm;
