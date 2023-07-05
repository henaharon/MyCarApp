import {CarDetailsIcons} from '../../../uiKit/icons';
import {translate} from '../../../locals/index';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity
} from 'react-native';

export const AirPressureGuide = () => {
  return (
    <View style={styles.Container}>
        <View style={styles.ImageView}>
            <Image style={styles.Image} source={CarDetailsIcons.airPerssure}/>
        </View>
        <View style={styles.Content}>
            <Text style={styles.titleText}>{translate('airPressure')}</Text>
            <Text style={styles.ContentText}>
                לחץ אוויר נקבע בהתאם למספר פרמטרים כגון סוג הצמיג, כמות אנשים שנמצאים ברכב, האם הרכב גורר משא, תנאי מזג אוויר, חנקן ועוד.
                {'\n'}{'\n'}
                באפליקציה תוכלו לראות את טווח לחץ האוויר המומלץ.
                {'\n'}{'\n'}
                לקבלת יעוץ פרטני בהתאם לצרכים יחודיים יש לפנות למחלקת הרכב.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed')}>
                <LinearGradient
                    colors={['#E4166D','#E1376C','#ED4E61']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}
                >
                    <Text style={styles.buttonText}>הבנתי</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    </View>
  );

};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    ImageView:{
        flex: 0.4,
        backgroundColor:'red', 
    },
    Image:{
        width:'100%',
        height:'100%'
    },
    Content:{
        flex: 0.6,
        justifyContent:'space-evenly',
        alignItems:'center',
        alignSelf  :'center',
        width:'80%',
    },
    titleText:{
        fontSize: 18,
        fontWeight:'bold',
        color:'black',
    },
    ContentText:{
        color:'black',
    },
    button: {
        width:'80%',
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
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
});