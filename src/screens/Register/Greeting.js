import React, {useState} from 'react';
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
import {RadioButton} from 'react-native-paper';
import {welcomeIcons} from '../../uiKit/welcomeIcons';
import {translate} from '../../locals';
import LinearGradient from 'react-native-linear-gradient';
const window_height = Dimensions.get('window').height;
const window_width = Dimensions.get('window').width;

const Greeting = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [addsCheck1, setAddsCheck] = useState(false);
  const [addsCheck2, setAddsCheck2] = useState(false);

  const move_to_term_use = () => {
    navigation.navigate('TermofUseapp');
  };

  const move_to_term_divor = () => {
    navigation.navigate('TermofDivor');
  };

  const openRegisterForm = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient_op}
        colors={['#d42f5b', '#d4342f']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0.3, 0.995]}>
        <View style={styles.header}>
          <Image style={styles.tinyLogo} source={welcomeIcons.welcome} />
          <Text style={styles.text}>{translate('nicetomeetyou')}</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.text_app}>{translate('InfoAboutApp')}</Text>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={openRegisterForm}>
            <Text style={styles.text_appr_con}>{translate('register')}</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
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
    backgroundColor: '#A9333A',
    height: '100%',
  },

  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: window_height * 0.3,
    width: '100%',
  },

  tinyLogo: {
    marginRight: 5,
    width: 120,
    height: 120,
  },

  text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 40,
    marginTop: 15,
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: window_height * 0.6,
    width: '100%',
  },

  text_app: {
    fontSize: 24,
    color: '#ffffff',
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },

  gradient_op: {},

  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 250,
    borderRadius: 30,
    marginBottom: 45,
    backgroundColor: 'blue',
  },

  text_appr_con: {
    fontSize: 20,
    color: '#F7F9F9',
  },
});

export default Greeting;
