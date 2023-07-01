import {translate} from '../../locals/index';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity
} from 'react-native';

const DocumentSent = () => {
  return (
    <View style={styles.Container}>
        <Text style={styles.titleText}>{translate('documentSent')}</Text>
        <Text style={styles.ContentText}>{translate('documtSentInfo')}</Text>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed')}>
            <LinearGradient
                colors={['#E4166D','#E1376C','#ED4E61']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                <Text style={styles.buttonText}>שליחה נוספת</Text>
            </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.linkText}>אישור</Text>
        </TouchableOpacity>    
    </View>
  );

};

const styles = StyleSheet.create({
    Container: {
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
    },
    button: {
        width:'80%',
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
        marginTop:50,
        marginBottom:50
      },
      titleText:{
        fontSize: 18,
        fontWeight:'bold',
        color:'black',
    },
    ContentText:{
        textAlign:'center',
        color:'black',
        marginTop:20,
        width:'60%',
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    linkText: {
        color: 'blue',
        fontSize:16,
        textDecorationLine: 'none',
    },
});

export default DocumentSent;