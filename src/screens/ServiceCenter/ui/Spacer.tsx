/* eslint-disable*/
import { View, StyleSheet } from "react-native";

export function Spacer() {
    return <View style={styles.spacer} />
}

const styles = StyleSheet.create({
    spacer: {
        height: 1, 
        marginTop:16, 
        backgroundColor: "#f3f3f3"
    },
})