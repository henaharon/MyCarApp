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
import Codes from './moc_data';
import Terms from '../Terms/Terms';

const window_height = Dimensions.get('window').height;
const window_width = Dimensions.get('window').width;

const SendCode = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(new Date());

  const onchangecode = inputValue => {
    // Validate the input value to allow only numeric characters
    const regex = /[0-9]{5}$/; // Only allow five digit
    if (regex.test(inputValue) || inputValue === '') {
      setCode(inputValue);
    }
  };

  const Code_check = () => {
    const current_time = new Date();
    const min_diff = Math.abs(timer.getTime() - current_time.getTime());
    if (min_diff > 0) {
      for (let i; i < Codes.length; i++) {
        if (code === Codes[i].code) {
          Alert.alert('the code is in the databse');
          navigation.navigate('Terms');
        }
      }
    } else {
      alert('the code is expires');
    }
  };

  return (
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
          <TouchableOpacity onPress={() => navigation.navigate('Terms')}>
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
