import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Dimensions,
  ScrollView,
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
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [inputError, setInputError] = useState(null);

  const closeFormModal = () => {
    // hideModal();
    setIsFormOpen(false);
  };

  const onChangeNumber = inputValue => {
    // Validate the input value to allow only numeric characters
    const regex = /^[0-9]*$/; // Only allow digits (0-9)
    if (regex.test(inputValue) || inputValue === '') {
      setNumber(inputValue);
    }
  };

  const onChangeText = text => {
    setText(text);
  };

  const handleButtonPress = () => {
    console.log(`${text}, ${number}`);
    if (text.trim() === '' || number.trim() === '') {
      console.log(`inside= ${text}, ${number}`);
      setInputError('All fields are required.');
    } else {
      setInputError(null);
      setIsFormOpen(false);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isFormOpen}
        onRequestClose={closeFormModal}>
        <View style={styles.modalView}>
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.modalTitle}>פרטים כלליים</Text>
            <View>
              <Text style={styles.titleSpacing}>
                <Text style={styles.inputTitle}>* </Text>
                <Text>שם פרטי</Text>
              </Text>
              <TextInput
                placeholder="שם פרטי"
                style={styles.reqInput}
                value={text}
                onChangeText={onChangeText}></TextInput>
              <View>
                {!!inputError && (
                  <Text style={styles.errorText}>{inputError}</Text>
                )}
              </View>
              <Text style={styles.titleSpacing}>
                <Text style={styles.inputTitle}>* </Text>
                <Text>שם משפחה</Text>
              </Text>
              <TextInput
                placeholder="שם משפחה"
                style={styles.reqInput}
                value={text}
                onChangeText={onChangeText}
              />
              <View>
                {!!inputError && (
                  <Text style={styles.errorText}>{inputError}</Text>
                )}
              </View>
              <Text style={styles.titleSpacing}>
                <Text style={styles.inputTitle}>* </Text>
                <Text>מספר עובד</Text>
              </Text>
              <TextInput
                placeholder="מספר עובד"
                style={styles.reqInput}
                value={number}
                onChangeText={onChangeNumber}
              />
              <View>
                {!!inputError && (
                  <Text style={styles.errorText}>{inputError}</Text>
                )}
              </View>
              <Text style={styles.titleSpacing}>
                <Text>תאריך לידה</Text>
              </Text>
              <TextInput
                placeholder="תאריך לידה"
                style={[styles.formInput, styles.input]}
                value={text}
                onChangeText={onChangeText}
              />
            </View>
            <Text style={styles.modalText}>פרטי התקשרות</Text>
            <View>
              <Text style={styles.titleSpacing}>
                <Text style={styles.inputTitle}>* </Text>
                <Text>כתובת אימייל</Text>
              </Text>
              <TextInput
                placeholder="כתובת אימייל"
                style={styles.reqInput}
                value={text}
                onChangeText={onChangeText}
              />
              <View>
                {!!inputError && (
                  <Text style={styles.errorText}>{inputError}</Text>
                )}
              </View>
              <Text style={styles.titleSpacing}>
                <Text>מספר טלפון</Text>
              </Text>
              <TextInput
                placeholder="טלפון"
                style={[styles.formInput, styles.input]}
                value={text}
                onChangeText={onChangeText}
              />
            </View>
            <Text style={styles.modalText}>פרטי רישיון נהיגה</Text>
            <View>
              <Text style={styles.titleSpacing}>
                <Text>מספר רישיון נהיגה</Text>
              </Text>
              <TextInput
                placeholder="מספר רישיון נהיגה"
                style={[styles.formInput, styles.input]}
                value={number}
                onChangeText={onChangeNumber}
              />
              <Text style={styles.titleSpacing}>
                <Text>תוקף רישיון נהיגה</Text>
              </Text>
              <TextInput
                placeholder="תוקף רישיון נהיגה"
                style={[styles.formInput, styles.input]}
                value={text}
                onChangeText={onChangeText}
              />
              <Text style={styles.titleSpacing}>
                <Text>סוג רישיון נהיגה</Text>
              </Text>
              <TextInput
                placeholder="סוג רישיון נהיגה"
                style={[styles.formInput, styles.input]}
                // צריך לשנות ל-list ממנה ניתן לבחור כמה אופציות
              />
            </View>
            <Text style={styles.modalText}>מסמכים</Text>
            {/* צריך להוסיף פה אופציה להעלות מסמכים */}

            <View style={styles.footer}>
              <LinearGradient
                style={styles.gradient}
                colors={['#d42f5b', '#d45e2f']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                location={[0.8, 0.95]}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleButtonPress}>
                  <Text style={styles.buttonText}>
                    {translate('saveAndContinue')}
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const windowHeight = Dimensions.get('window').height; //returns height of window

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },

  modalView: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowRadius: 4,
    width: 400,
    height: windowHeight,
    elevation: 5,
  },

  modalContent: {
    padding: 30,
  },

  modalTitle: {
    marginTop: 0,
    marginBottom: 15,
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  modalText: {
    marginTop: 30,
    marginBottom: 15,
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  titleSpacing: {
    marginBottom: 3,
  },

  inputTitle: {
    color: 'red',
    textAlign: 'right',
  },

  formInput: {
    borderWidth: 0.5,
    height: 40,
    width: '100%',
    borderColor: 'black',
    color: 'black',
  },

  input: {
    marginBottom: 15,
  },

  reqInput: {
    marginBottom: 10,
    borderWidth: 0.5,
    height: 40,
    width: '100%',
    borderColor: 'black',
    color: 'black',
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
  },

  buttonText: {
    color: 'white',
  },

  gradient: {
    borderRadius: 30,
  },

  errorText: {
    color: 'red',
    fontSize: 13,
    marginBottom: 5,
  },
});

export default RegisterForm;
