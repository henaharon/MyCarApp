/* eslint-disable*/
import { TextProps, StyleSheet } from 'react-native'
//@ts-ignore
import { DefaultText } from './DefaultText'

export function SubText({ style, children, ...rest }: TextProps) {
    return (
        <DefaultText style={[styles.textStyle, style]} {...rest}>
            {children}
        </DefaultText>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: "rgb(161,161,183)",
    },
})