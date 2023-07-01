import React, {useState} from 'react';
import {CarDetailsIcons} from '../../uiKit/icons';
import {translate} from '../../../../locals/index';
import LinearGradient from 'react-native-linear-gradient';
import {
    StyleSheet, 
    Text, 
    View, 
    Image,
    TextInput,
    TouchableOpacity,
    
} from 'react-native';

const SelectDocuments = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (text) => {
      setEmail(text);
      setError('');
    };

    const validateEmail = () => {
        if (email.trim() === '') {
          setError('Email is required');
        }
    }

    return (
        <View style={styles.DetailsContainer}>

            <View style={styles.titleSection}>
                <Text style={styles.BoldText}>{translate('shareMyDocuments')}</Text>
                <Text>{translate('chooseFilesText')}</Text>
            </View>

            <View style={styles.Document}>
                <View  style={styles.ImageBorder}>
                    <Image style={styles.ImageDocument} source={CarDetailsIcons.documentIcon}/>
                </View>
                <View style={styles.DocumentText}>
                    <Text style={styles.BoldText}>{translate('carLicense')}</Text>
                    <Text style={styles.checkText}>עודכן 24.06.2020</Text>
                </View>
                <Image style={styles.Image} source={CarDetailsIcons.checkIcon}/>
            </View>
            <View style={styles.Document}>
                <View  style={styles.ImageBorder}>
                    <Image style={styles.ImageDocument} source={CarDetailsIcons.documentIcon}/>
                </View>
                <View style={styles.DocumentText}>
                    <Text style={styles.BoldText}>{translate('carLicense')}</Text>
                    <Text style={styles.checkText}>עודכן 24.06.2020</Text>
                </View>
                <Image style={styles.Image} source={CarDetailsIcons.checkIcon}/>
            </View>

            {/* Horizontal line between two sections (car color, car number) */}
            <View style={styles.lineVertical}></View>

            {/* Input for send document to email, validate email, if empty get error message (red color) */}
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    placeholder="כתובת מייל לשליחת הטפסים"
                    placeholderTextColor="#000000"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={handleEmailChange}
                    onBlur={validateEmail}
                />
                <TouchableOpacity style={styles.button} onPress={() => console.log('Go to DocumentSent component')}>
                    <LinearGradient
                        colors={['#E4166D','#E1376C','#ED4E61']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradient}
                    >
                        <Text style={styles.buttonText}>שליחה</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    DetailsContainer: {
        flex:1,
        alignItems:'flex-end',
        padding:20,
    },
    
    titleSection:{
        justifyContent:'center',
        alignItems:'flex-end',
        margin:20,
    },
    Document:{
        flexDirection:"row-reverse",
        justifyContent:'space-around',
        alignItems:'center',
        width:'90%',
        marginTop:10,
    },
    DocumentText:{
        flexDirection:'column',
    },
    ImageBorder:{
        height:50,
        width:50,
        borderColor:'black',
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    ImageDocument:{
        height:35,
        width:35,
    },
    BorderImage:{
        justifyContent:'center',
        alignItems:'center',
        width:30,
        height:30,
        borderRadius:50,
        backgroundColor:'#f5dce3',
    },
    Image:{
        height:20,
        width:20
    },
    Text:{
        fontSize:12,
    },
    checkText:{
        color:'green'
    },
    BoldText:{
        fontWeight:'bold',
        color:'black'
    },
    lineVertical: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: '100%',
        height: 1,
        marginVertical: 30,
    },
    inputView:{
        justifyContent:'center',
        width:'100%',
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    error: {
        color: 'red',
        marginTop: 5,
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
        marginTop:50,
        marginBottom:50
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SelectDocuments;