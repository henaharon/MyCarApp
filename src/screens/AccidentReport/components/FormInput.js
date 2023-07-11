import {View, Text, TextInput, StyleSheet} from 'react-native';

export default function FormInput({label, placeholder}) {

    return (

        <View style={styles.container}>
           
            <Text style={styles.label}>
            <Text style={{color:'red'}}>*</Text>
               {label}
            </Text>
            <TextInput style={styles.input} placeholder={placeholder}></TextInput>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        marginTop:18,
        width: '100%',
        alignItems: 'flex-end',
        position: 'relative',
    },
    input: {
        height: 50,
        borderWidth: 2,
        borderRadius: 6,
        borderColor: 'lightgray',
        padding: 10,
        width: '100%',
        textAlign: 'right',
        fontSize: 16,
    },
    label: {
        textAlign: 'right',
        fontSize: 14,
        color: 'black',
        paddingHorizontal:5,
        backgroundColor: 'white',
        position: 'absolute',
        top: -14,
        right:10, 
        zIndex: 100,

    }
})