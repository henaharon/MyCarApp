import {useEffect, useState} from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal
} from 'react-native';
import {PhotosGallery} from './PhotosGallery';
import RadioButtons from './RadioButtons';
import Signiture from './Signiture';
import FormInput from './FormInput';
import {FormSection, FormWizard, WizardSection} from './Wizard';
import LinearGradient from 'react-native-linear-gradient';
import { CameraButton } from './CameraButton';


export default function Form({startPage, closeForm}) {
  const [formData, setFormData] = useState(null);

  const setDate = data => {
    setFormData({...formData, date: data});
  };

  const setTime = data => {
    setFormData({...formData, time: data});
  };

  const setLocation = data => {
    setFormData({...formData, location: data});
  };

  const setHouseNumber = data => {
    setFormData({...formData, houseNumber: data});
  };

  const setAddress = data => {
    setFormData({...formData, address: data});
  };

  const setDetails = data => {
    setFormData({...formData, details: data});
  };

  const setPoliceTrue = () => {
    setFormData({...formData, police: true});
  };

  const setPoliceFalse = () => {
    setFormData({...formData, police: false});
  };

  const saveSigniture = data => {
    setFormData({...formData, signiture: data});
  };

  const setIWasDrivingTrue = () => {
    setFormData({...formData, iWasDriving: true});
  };

  const setIWasDrivingFalse = () => {
    setFormData({...formData, iWasDriving: false});
  };
  const setWitnessTrue = () => {
    setFormData({...formData, witness: true});
  };

  const setWitnessFalse = () => {
    setFormData({...formData, witness: false});
  };

  const setHitTrue = () => {
    setFormData({...formData, hit: true});
  };

  const setHitFalse = () => {
    setFormData({...formData, hit: false});
  };



  const onSubmit = () => {
    console.log(formData);
    setFormData(null)
    closeForm()

  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <ScrollView style={styles.ScrollView}>
      <FormWizard startPage={startPage}>

        <WizardSection>
          <View style={styles.wrapper}>
            <Text style={styles.header}>פרטים כלליים</Text>
            <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={date => setDate(date)}
                style={styles.Input}
                placeholder="תאריך האירוע"></TextInput>
              <TextInput
                onChangeText={time => setTime(time)}
                style={styles.Input}
                placeholder="שעת האירוע"></TextInput>
            </View>
            <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={location => setLocation(location)}
                style={styles.Input}
                placeholder="עיר / כביש מרכזי"></TextInput>
            </View>
            <View style={styles.inputWrppaer}>
              <TextInput
                style={[styles.Input]}
                placeholder="מ. בית"></TextInput>
              <TextInput
                style={[styles.Input, {flex: 3}]}
                placeholder="כתובת"></TextInput>
            </View>
            <View style={styles.textAreaContainer}>
              <Text style={styles.textAreaLabel}> פרטי האירוע</Text>
              <TextInput style={styles.textArea} multiline={true}>
                {' '}
              </TextInput>
            </View>
          </View>
          <View style={styles.wrapper}>
            <Text style={styles.header}>הוספת תמונות מהאירוע</Text>
            {/* <View style={styles.photoGalleryPlaceholder}> */}
            <PhotosGallery></PhotosGallery>
            {/* </View> */}
          </View>

          <View style={styles.wrapper}>
            <Text style={styles.header}> האם הייתה מעורבות משטרה באירוע?</Text>
            <RadioButtons
              rightText={'כן, היתה'}
              leftText={'לא היתה'}
              rightPress={setPoliceTrue}
               leftPress={setPoliceFalse}
               
               ></RadioButtons>
            <Text style={styles.header}>פרטי המשטרה</Text>
            <View style={styles.inputWrppaer}>
              <TextInput
                style={styles.Input}
                placeholder="תחנת משטרה"></TextInput>
            </View>
            <View style={styles.inputWrppaer}>
              <TextInput
                style={styles.Input}
                placeholder="שם השוטר"></TextInput>
            </View>
          </View>
        </WizardSection>

        <WizardSection>
          <View style={styles.wrapper}>
            <Text style={styles.header}>מי נהג ברכב בזמן האירוע? </Text>
            <RadioButtons
              leftText={'נהג/ת אחר/ת'}
              rightText={'אני נהגתי'}
              rightPress={setIWasDrivingTrue}
              leftPress={setIWasDrivingFalse}
              ></RadioButtons>
            <Text style={styles.header}> פרטי הנהג/ת</Text>
             <FormInput label="שם הנהג" placeholder="אביב דניאל"></FormInput>
             <FormInput label="מספר ת.ז" placeholder="055550555"></FormInput>
             <FormInput label="מספר רשיון נהיגה" placeholder="662765"></FormInput>
             <FormInput label="טלפון" placeholder="050-828-4537"></FormInput>
          </View>
        </WizardSection>

        <WizardSection>
          <Text style={styles.header}> פרטי נהג צד ג׳</Text>
          <View style={styles.wrapper}>
          <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={location => setLocation(location)}
                style={styles.Input}
                placeholder="שם בעל הרכב"></TextInput>
            </View>

            <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={location => setLocation(location)}
                style={styles.Input}
                placeholder="מספר ת.ז"></TextInput>
            </View>
            <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={location => setLocation(location)}
                style={styles.Input}
                placeholder="כתובת מייל"></TextInput>
            </View>
            <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={location => setLocation(location)}
                style={styles.Input}
                placeholder="כתובת מגורים"></TextInput>
            </View>
            <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={location => setLocation(location)}
                style={styles.Input}
                placeholder="טלפון"></TextInput>
            </View>
            <Text style={styles.header}> פרטי רכב צד ג׳</Text>
            <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={location => setLocation(location)}
                style={styles.Input}
                placeholder="דגם רכב"></TextInput>
            </View>
            <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={location => setLocation(location)}
                style={styles.Input}
                placeholder="מספר רכב"></TextInput>
            </View>

            <Text style={styles.header}> פרטי ביטוח צד ג׳</Text>
            <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={location => setLocation(location)}
                style={styles.Input}
                placeholder="שם חברת הביטוח"></TextInput>
            </View>
            <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={location => setLocation(location)}
                style={styles.Input}
                placeholder="מספר פוליסת ביטוח"></TextInput>
            </View>
            <Text style={styles.header}>מסמכים - נהג צד ג׳</Text>


          </View>
        </WizardSection>

        <WizardSection>
          <View style={styles.wrapper}>
              <Text style={styles.header}>מסמכים - נהג צד ג׳</Text>
              <RadioButtons
              rightText={'כן, היו נפגעים'}
              leftText={'לא היו נפגעים'}
              rightPress={setHitTrue}
               leftPress={setHitFalse}
               
               ></RadioButtons>

              <Text style={styles.header}>מסמכים - נהג צד ג׳</Text>
              <RadioButtons
              rightText={'כן, היו עדים'}
              leftText={'לא היו עדים'}
              rightPress={setWitnessTrue}
               leftPress={setWitnessFalse}
               
               ></RadioButtons>

              <Text style={styles.header}>מסמכים - נהג צד ג׳</Text>
              <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={location => setLocation(location)}
                style={styles.Input}
                placeholder="שם עד"></TextInput>
            </View>

            <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={location => setLocation(location)}
                style={styles.Input}
                placeholder="מזפר ת.ז"></TextInput>
            </View>
            <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={location => setLocation(location)}
                style={styles.Input}
                placeholder="כתובת"></TextInput>
            </View>

            <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={location => setLocation(location)}
                style={styles.Input}
                placeholder="במידה ויש עדים נוספים אנא עדכן כאן. יש להקפיד למלא את שמם המלא, תז , כתובת וטלפון של העדים הנוספים"></TextInput>
            </View>
           
          

            <Text style={styles.header}>
              הוספת תמונות עדים
            </Text>

            <PhotosGallery></PhotosGallery>


            

          </View>
        </WizardSection>

        <WizardSection>
          <View style={styles.wrapper}>
              <Text style={styles.header}>האם הרכב שלך ניזוק?</Text>
              <RadioButtons
              rightText={'כן, הרכב ניזוקם'}
              leftText={'ברכב לר ניזוק'}
              rightPress={setHitTrue}
               leftPress={setHitFalse}
               
               ></RadioButtons>

              <Text style={styles.header}>האם הרכב של צד ג׳ ניזוק?</Text>
              <RadioButtons
              rightText={'כן, הרכב ניזוקם'}
              leftText={'ברכב לר ניזוק'}
              rightPress={setHitTrue}
               leftPress={setHitFalse}
               
               ></RadioButtons>

              <Text style={styles.header}>פרטי הנזק לרכב צד ג׳</Text>
              <View style={styles.inputWrppaer}>
              <TextInput
                onChangeText={location => setLocation(location)}
                style={styles.Input}
                placeholder="תיאור הנזק"></TextInput>
            </View>

            <Text style={styles.header}>
              הוספת תמונות עדים
            </Text>

            <PhotosGallery></PhotosGallery>


            

          </View>
        </WizardSection>

        <WizardSection>
          <View style={styles.wrapper}>

            <Text> שליחת דוח</Text>
            <TextInput
                style={styles.Input}
                placeholder="כתובת המייל שלי">
            </TextInput>
            <Text> חתימה</Text>
            <Text> אני מאשר שכל המידע שמסרתי הוא מדויק</Text>
            <Signiture onOK={saveSigniture}></Signiture>
            
            <View style={styles.wrapper}> 
            <View style={styles.wrapper}>
            <Text>
                     המלצה
                </Text>
                <Text>
                    לאחר קבלת המסמך במייל אנחנו ממליצים להעביר אותו כפי שהוא לחברת הביטוח.
                </Text>
            </View>
               
                <LinearGradient
                style={[styles.submit]}
                colors={['#E60473', '#F05864']}
                // top left is the start point, top right is the end point
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}>
                <Pressable onPress={onSubmit} >
                    <Text style={styles.colorWhite}>
                        אישור ושליחה
                    </Text>
                </Pressable>
                </LinearGradient>
            </View>

        
          </View>
        </WizardSection>

      </FormWizard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  inputWrppaer: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  Input: {
    backgroundColor: 'white',
    borderRadius: 5,
    textAlign: 'right',
    flex: 1,
    margin: 3,
    height: 60,
    padding: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
  textArea: {
    flex: 2,
    backgroundColor: 'white',
    height: Dimensions.get('window').height / 4,
    textAlign: 'right',
  },
  textAreaContainer: {
    flexDirection: 'row-reverse',
    borderWidth: 1,
    borderColor: '#E6E5E9',
    position: 'relative',
    marginVertical: 10,
  },
  textAreaLabel: {
    position: 'absolute',
    left: 10,
    top: -14,
    zIndex: 100,
  },
  photoGalleryPlaceholder: {
    width: '100%',
    height: 200,
    borderWidth: 1,
  },
  header: {
    marginTop: 10,
  },
  submit:{
        borderRadius:50,
        padding:15,
        justifyContent:'center',
        alignItems:'center', 
        width:'100%',
          
  },
  colorWhite:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,
  },
  header:{
    fontWeight:'bold',
    color:'black',
    fontSize:18,
    textAlign:'right',
  },
  ScrollView:{
    backgroundColor:'white',
    borderWidth:2,
    height:Dimensions.get('window').height* 0.91,

  }

});
