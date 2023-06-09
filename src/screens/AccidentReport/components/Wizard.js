import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Pressable } from 'react-native';
import { accidentReport, loginIcons} from '../../../uiKit/icons';

const WizardSection = ({ children }) => {
  return <View style={styles.sectionContainer}>{children}</View>;
};

const FormWizard = ({ children, startPage }) => {
  const [currentPage, setCurrentPage] = useState(startPage ? startPage : 0);

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    console.log("got to next")
    if(currentPage < (children.length -1)) {
      setCurrentPage(currentPage + 1);
    }
  
  };
 
  const titles = ["פרטי האירוע", "פרטי הנהג/ת" , "צד ג׳","נפגעים ועדים", "נזקים" , "אישור פרטי הדוח"]



  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      <Pressable style={styles.pinkButton} title="Next" onPress={goToNextPage} disabled={currentPage > (children.length -1) && true}>
            <Image source={loginIcons.loginButtonArrow}></Image>
      </Pressable>
      <View>
          <Text style={styles.one}>
            {titles[currentPage]}
          </Text>   
          <View style={{flexDirection:'row-reverse', gap:5}}> 
            {
                children.map((child, index) => {
                    return(
                        <View key ={parseInt(index)} style={[{backgroundColor: index === currentPage ? 'blue' :'gray'},styles.two]}></View>
                    )
            })
        }
          </View>
           
        </View>
          
          <Pressable style={styles.button} title="Previous" onPress={goToPreviousPage} disabled={currentPage < 1 && true} >
                <Image style={styles.rightArrow} source={loginIcons.loginButtonArrow}></Image>
          </Pressable>
      </View>
      <View style={styles.sectionContainer}>{children[currentPage]}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:10,
    borderWidth:4,
    backgroundColor:'white'
  },
  sectionContainer: {
    marginBottom: 16,
    width: '100%',
    backgroundColor: 'white',
    borderRadius:30,
    padding:10,
    paddingTop:20,
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom:50,
    backgroundColor:'black',
    marginBottom:-30,
    padding:20,
   
  },
  button:{
    backgroundColor:'lightgray',
    padding:5,
    borderRadius:15,
  },
  pinkButton:{
    backgroundColor:"#EA1B62",
    padding:5,
    borderRadius:15,
  },
  rightArrow:{
    transform: [{ rotate: '180deg'}]
  },
  one:{color:'white', textAlign:"center"},
  two:{width:10,height:10, borderWidth:1, borderRadius:100}
});

export { FormWizard, WizardSection };
