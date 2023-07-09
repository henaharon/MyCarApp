/* eslint-disable*/
import { Text, TextProps, StyleSheet } from 'react-native'

export function Bold({ style, children, ...rest }: TextProps) {
    return (
        <Text style={[styles.textStyle, style]} {...rest}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: "600",
        fontSize: 18,
    },
})