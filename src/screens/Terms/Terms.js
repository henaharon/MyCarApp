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
// import logo_img from '../../assets/icons/mycarlogo.png';
// import lock_img from '../../assets/icons/locklogo.png';
import {loginIcons} from '../../uiKit/icons';
import {translate} from '../../locals/index';

const window_height = Dimensions.get('window').height;
const window_width = Dimensions.get('window').width;

const Terms = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.tinyLogo} source={loginIcons.logo} />
      </View>

      <View style={styles.body}>
        <Image style={styles.tinyLogo} source={loginIcons.logo} />
        <TextInput
          style={styles.input}
          placeholder={t('EneterCode')}
          value={code}
          onChangeText={setCode}></TextInput>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.start}>
          <Text style={styles.arrow}>{arrow}</Text>
        </TouchableOpacity>

        <View style={styles.text_input}>
          <Text style={styles.help}>{t('CodeCheck')}</Text>
          <Text style={styles.link_help}>{t('SendCode')}</Text>
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
  arrow: {
    fontSize: 30,
    color: '#fffafa',
    alignItems: 'center',
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

export default Terms;
