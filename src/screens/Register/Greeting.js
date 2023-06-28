import React, {useState} from 'react';
import {Alert, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import logo_img from '../../assets/icons/registerel.png';
import {useTranslation} from 'react-i18next';
import LinearGradient from 'react-native-linear-gradient';
const window_height = Dimensions.get('window').height;
const window_width = Dimensions.get('window').width;



const Greeting = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(false);
    const { t } = useTranslation();
    const [addsCheck1, setAddsCheck] = useState(false);
    const [addsCheck2, setAddsCheck2] = useState(false);
    const move_to_term_use = () => {
        navigation.navigate('TermofUseapp');
    };

    const move_to_term_divor = () => {
        navigation.navigate('TermofDivor');
    };


    return(


        <View style={styles.container}>

            <View style={styles.header}>
                <Image style={styles.tinyLogo} source={logo_img} />
                <Text style={styles.text}>{t("nicetomeetyou")}</Text>

            </View>

            <View style={styles.body}>
                <Text  style={styles.text_app}>{t("InfoAboutApp")}</Text>
            </View>


            <View style={styles.footer}>
                <LinearGradient style={styles.gradient_op} colors={['#3347a9', '#6057e1', '#8f9dfa']}>
                    <TouchableOpacity>
                        <Text style={styles.text_appr_con}>{t("approveandcontinue")}</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>)};


const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A9333A',
        height: '100%'
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
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        height: window_height * 0.6,
        width: '100%',
    },

    text_app: {
        fontSize: 24,
        color:'#ffffff',
    },






    footer: {
        display: 'flex',
        backgroundColor:'#3347a9',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent:'center',
    },

    gradient_op: {
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width: '60%',
        borderRadius: 20,

    },



    text_appr_con:{
        fontSize:25,
        color: '#F7F9F9',
    },





});
export default Greeting;






