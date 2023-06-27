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
// import CheckBox from 'react-native-check-box';
import {RadioButton} from 'react-native-paper';
import {loginIcons} from '../../uiKit/icons';
import {useTranslation} from 'react-i18next';

const window_height = Dimensions.get('window').height;
const window_width = Dimensions.get('window').width;

const Terms = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {t} = useTranslation();
  const [addsCheck, setAddsCheck] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.tinyLogo} source={loginIcons.logo} />
        <Text style={styles.text}>{t('terms')}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.Radio_b_section}>
          <Text style={styles.Radio_b_section_link_Reporting_conditions}>
            {t('Reportingconditions')}
          </Text>
          <Text style={styles.Radio_b_section_text}>{t('Givemethings')}</Text>
          {/*<CheckBox*/}
          {/*    value="first"*/}
          {/*    status={ addsCheck ? 'checked' : 'unchecked' }*/}
          {/*    style={addsCheck ? styles.checked : styles.unchecked}*/}
          {/*    onPress={() => setAddsCheck(!addsCheck)}*/}
          {/*/>*/}
        </View>

        <View style={styles.Radio_b_section}>
          <Text style={styles.Radio_b_section_text}>{t('Givemethings')}</Text>
          {/*<CheckBox*/}
          {/*    value="first"*/}
          {/*    status={ addsCheck === 'first' ? 'checked' : 'unchecked' }*/}
          {/*    onPress={() => setAddsCheck('first')}*/}
          {/*/>*/}
        </View>
      </View>

      <View style={styles.footer}></View>
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
    justifyContent: 'center',
    alignItems: 'center',
    height: window_height * 0.3,
    width: '100%',
    backgroundColor: '#ffffff',
  },

  tinyLogo: {
    marginRight: 5,
    width: 120,
    height: 100,
  },

  text: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 40,
    marginTop: 15,
  },

  body: {
    display: 'flex',
    flexDirection: 'column',
    height: window_height * 0.6,
    width: '100%',
    backgroundColor: '#ffffff',
    borderWidth: 3,
    borderRadius: 1,
    borderColor: '#335EFF',
  },

  Radio_b_section: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    height: window_height * 0.1,
    borderWidth: 3,
    borderRadius: 1,
    borderColor: '#55FF33',
    gap: 30,
  },

  Radio_b_section_text: {
    fontSize: 20,
  },

  Radio_b_section_link_Reporting_conditions: {
    fontSize: 15,
    color: 'blue',
    marginTop: 30,
    marginRight: 0,
  },

  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
    width: '100%',
    height: window_height * 0.2,
  },

  checked: {
    backgroundColor: 'blue',
  },
  unchecked: {
    backgroundColor: 'white',
  },
});

export default Terms;

/*
 <Text style={styles.Radio_b_section_text}>{t("Givemethings")}</Text>

 */
