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
import {loginIcons} from '../../uiKit/icons';
import {useTranslation} from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
const window_height = Dimensions.get('window').height;
const window_width = Dimensions.get('window').width;

const Terms = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {t} = useTranslation();
  const [addsCheck1, setAddsCheck] = useState(false);
  const [addsCheck2, setAddsCheck2] = useState(false);
  const move_to_term_use = () => {
    navigation.navigate('TermofUseapp');
  };

  const move_to_term_divor = () => {
    navigation.navigate('TermofDivor');
  };

  const move_to_Greetings = () => {
    if (addsCheck1 && addsCheck2) {
      navigation.navigate('Greeting');
    } else {
      console.log('you must check 2');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.tinyLogo} source={loginIcons.logo} />
        <Text style={styles.text}>{t('terms')}</Text>
        <Text style={styles.text_approve}>{t('beforebegin')}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.Radio_b_section}>
          <TouchableOpacity onPress={() => move_to_term_use()}>
            <Text style={styles.Radio_b_section_link_Reporting_conditions}>
              {t('Reportingconditions')}
            </Text>
          </TouchableOpacity>

          <Text style={styles.Radio_b_section_text}> {t('Givemethings')}</Text>
          <RadioButton
            value={addsCheck1}
            status={addsCheck1 ? 'checked' : 'unchecked'}
            style={styles.rb_checked}
            onPress={() => setAddsCheck(!addsCheck1)}
          />
        </View>

        <View style={styles.Radio_b_section}>
          <TouchableOpacity onPress={() => move_to_term_divor()}>
            <Text style={styles.Radio_b_section_link_termuse}>
              {t('termuse')}
            </Text>
          </TouchableOpacity>
          <Text style={styles.Radio_b_section_text}>{t('Approve')}</Text>
          <RadioButton
            value={'first'}
            status={addsCheck2 ? 'checked' : 'unchecked'}
            style={addsCheck2 ? styles.checked : styles.unchecked}
            onPress={() => setAddsCheck2(!addsCheck2)}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <LinearGradient
          style={styles.gradient_op}
          colors={['#A9333A', '#E1578A', '#FAE98F']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <TouchableOpacity onPress={() => move_to_Greetings()}>
            <Text style={styles.text_appr_con}>{t('approveAndContinue')}</Text>
          </TouchableOpacity>
        </LinearGradient>
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
    backgroundColor: '#FDFEFE',
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
  },

  text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 35,
    marginTop: 15,
  },
  text_approve: {
    color: 'rgba(91,89,89,0.98)',
    fontSize: 20,
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    height: window_height * 0.3,
    backgroundColor: '#ffffff',
    borderWidth: 4,
    borderColor: '#ffffff',
    marginTop: 20,
    marginBottom: 20,
  },

  Radio_b_section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: window_height * 0.1,
    borderWidth: 1,
    borderColor: '#DDE534',
  },

  Radio_b_section_text: {
    fontSize: 17,
  },

  Radio_b_section_link_Reporting_conditions: {
    fontSize: 20,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 30,
    marginRight: 0,
  },

  Radio_b_section_link_termuse: {
    fontSize: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  footer: {
    display: 'flex',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },

  gradient_op: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '60%',
    borderRadius: 30,
  },

  text_appr_con: {
    fontSize: 18,
    color: '#F7F9F9',
  },

  rb_checked: {
    backgroundColor: '#2267E6',
  },

  rb_unchecked: {
    backgroundColor: '#E54F34',
  },
});
export default Terms;
