import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {authIcons} from '../../uiKit/authIcons';
import {translate} from '../../locals/index';
import {codes} from './moc_data';
import DefaultModal from '../Modals/DefaultModal';
import Terms from '../Terms/Terms';

const window_height = Dimensions.get('window').height;
const window_width = Dimensions.get('window').width;

const SendCode = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(new Date());
  const [isExpired, setIsExpired] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const openExpiredModal = () => {
    setModalVisible(true);
    setIsExpired(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    setIsExpired(false);
    navigation.navigate('AuthCode');
  };

  const onchangecode = inputValue => {
    // Validate the input value to allow only numeric characters
    const regex = /[0-9]{5}$/; // Only allow five digit
    if (regex.test(inputValue) || inputValue === '') {
      setCode(inputValue);
    }
  };

  const code_check = () => {
    const current_time = new Date();
    const min_diff =
      Math.abs(timer.getTime() - current_time.getTime()) / (1000 * 60);
    console.log('min dif\t' + min_diff);
    console.log(min_diff > 0);
    if (min_diff > 0) {
      console.log('we pass the time check');
      for (let i = 0; i < codes.length; i++) {
        console.log('----------------------------');
        console.log('Entered code:\t', code);
        console.log('Checkin code:\t', codes[i].code);
        console.log('----------------------------\n');
        if (code === codes[i].code) {
          Alert.alert('The code exists in the DB');
          navigation.navigate('Terms');
        } else {
          console.log("the code doesn't exist in the DB");
        }
      }
    } else {
      openExpiredModal();
    }
  };

  return (
    <>
      {isExpired ? (
        <DefaultModal
          modalState={modalVisible}
          modalTitle={'קוד אינו בתוקף'}
          modalText={'הקוד שהוזן אינו בתוקף, האם לשלוח קוד התחברות חדש?'}
          buttonText={'שלח קוד חדש'}
          setModalVisible={setModalVisible}
          hideModal={hideModal}
        />
      ) : (
        <View style={styles.container}>
          <View style={styles.button_container}>
            <Text style={styles.button_container_text}>
              {translate('sendCode')}
            </Text>
          </View>

          <View style={styles.body}>
            <Image style={styles.tinyLogo} source={authIcons.lock} />
            <TextInput
              style={styles.input}
              placeholder={translate('authCode')}
              value={code}
              onChangeText={setCode}></TextInput>
          </View>
          <View style={styles.footer}>
            <View style={styles.arrowCircle}>
              <TouchableOpacity onPress={code_check}>
                <LinearGradient
                  colors={['#A9333A', '#E1578A', '#FAE98F']}
                  style={styles.gradient}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}>
                  <Image style={styles.arrow} source={authIcons.arrow} />
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.text_input}>
              <Text style={styles.help}>{translate('codeNotReceived')}</Text>
              <Text style={styles.link_help}>{translate('sendCodeAgain')}</Text>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: window_height * 0.1,
    width: '100%',
    backgroundColor: '#ffffff',
  },

  tinyLogo: {
    marginRight: 5,
    width: 40,
    height: 40,
  },

  text: {
    marginLeft: 100,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    fontSize: 40,
    fontStyle: 'italic',
  },

  button_container: {
    marginTop: 30,
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'center',
    fontStyle: 'italic',
    height: window_height * 0.23,
  },

  button_container_text: {
    fontSize: 25,
  },

  body: {
    width: '50%',
    gap: 10,
  },

  input: {
    borderWidth: 1,
    padding: 15,
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    width: '100%',
    height: window_height * 0.2,
  },

  start: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  arrowCircle: {
    position: 'absolute',
    bottom: -9,
    left: -7,
    alignSelf: 'flex-start',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  arrow: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -12.5}, {translateY: -12.5}],
  },

  gradient: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text_input: {
    height: 80,
    width: '50%',
    marginLeft: 100,
  },

  help: {
    fontSize: 25,
  },
  link_help: {
    fontSize: 15,
    color: '#0000FF',
  },
});

export default SendCode;
