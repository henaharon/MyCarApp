/* eslint-disable*/
import { TextInput, Text, TextInputProps, TextStyle, View, StyleSheet } from "react-native";

export function StyledInput({ style, inputStyle, title, ...rest }: TextInputProps & { inputStyle?: TextStyle, title: string }) {
    return (
        <View style={[styles.viewStyle, style]}>
            <Text style={styles.textStyle}>{title}</Text>
            <TextInput 
                placeholderTextColor="#bbbbbb" 
                multiline={true} 
                style={[styles.textInputStyle, inputStyle]}  
                {...rest} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        marginTop: 6,
    },
    textStyle: {
        position: "absolute", 
        top: -10, 
        right: 10, 
        backgroundColor: "white", 
        zIndex:3, 
        paddingRight: 2, 
        paddingLeft: 2
    },
    textInputStyle: {
        borderWidth: 1,
        textAlign: "right",
        direction: "rtl",
        borderColor: "rgba(0,0,0,0.15)",
        padding: 20,
        borderRadius: 8,
        width: 320,
        height: 100
    },
})