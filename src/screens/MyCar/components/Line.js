import { View, StyleSheet } from 'react-native';
import React from 'react';

const line=()=> {
    return (
        <View style={styles.PostionLine}>
            <View style={styles.BorderLine}></View>
        </View>
      );
}
const styles = StyleSheet.create({
    PostionLine:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 15, 
        marginBottom:15, 
    },
    BorderLine:{
        width: '90%',
        borderTopWidth: 0.2,
        borderBottomColor: 0.2,
        borderBottomColor: '#C7C7C7',
        borderTopColor: '#C7C7C7', 
    },
});
export default line;