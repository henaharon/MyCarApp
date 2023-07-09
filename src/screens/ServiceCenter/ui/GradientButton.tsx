/* eslint-disable*/
import { Pressable, PressableProps, Text, StyleSheet } from "react-native";
import {LinearGradient} from "expo-linear-gradient";

export function GradientButton({ title, ...rest }: PressableProps & { title: string }) {
    return (
        <Pressable {...rest}>
            <LinearGradient
                colors={['#e60774', '#ef5763']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </LinearGradient>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    gradient: {
        padding: 15, 
        height:60, 
        justifyContent:"center", 
        alignItems: 'center', 
        borderRadius: 300
    },
    text: {
        fontSize: 15, 
        color: '#fff' 
    },
})