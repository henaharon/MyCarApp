/* eslint-disable*/
import { View, Image, Text, StyleSheet, ViewProps, Pressable, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { DefaultText } from "./DefaultText";

export function BlackWrapper({ children, style, title, onNext, onPrev, ...rest }: ViewProps & { title: string, onNext?: () => void, onPrev: () => void }) {
    return (
        <View style={styles.wrapper}>
            <View style={styles.topNav}>
                {onNext ? 
                    <LinearGradient
                        colors={['#e60774', '#ef5763']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradient}>
                        <Pressable onPress={onNext}>
                            <View style={styles.flipped}>
                                <Image source={require("../../assets/service-center/arrow.png")} style={styles.arrow} />
                            </View>
                        </Pressable>
                    </LinearGradient> 
                    : <View style={styles.blankView}></View>
                }

                <DefaultText style={styles.title}>{title}</DefaultText>
                <Pressable onPress={onPrev} style={styles.pressable}>
                    <View>
                        <Image source={require("../../assets/service-center/arrow.png")} style={styles.arrow} />
                    </View>
                </Pressable>
            </View>
            <ScrollView style={styles.scroll}>
                <View style={[styles.container, style]} {...rest}>
                    {children}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        height: "100%",
        backgroundColor: "black",
    },
    topNav: {
        marginTop: 50,
        marginBottom: 30,
        display: 'flex',
        paddingRight: 20,
        paddingLeft: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    gradient: {
        height: 48, 
        width: 48, 
        alignItems: 'center', 
        borderRadius: 16, 
        justifyContent: "center"
    },
    blankView: {
        width: 48 
    },
    title: {
        color: "white", 
        marginTop: 16, 
        textAlign: "center"
    },
    pressable: {
        backgroundColor: "#7c7b80", 
        height: 48, 
        width: 48, 
        alignItems: 'center', 
        justifyContent: "center", 
        borderRadius: 16
    },
    scroll: {
        marginTop: -20,
        paddingTop: 20,
        marginBottom:-20,
        borderRadius: 18,
        backgroundColor: "white",
    },
    flipped: {
        transform: [{ scaleX: -1 }]
    },
    arrow: {
        width: 24,
        height: 24
    },
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingRight: 16,
        paddingLeft: 16,
    }
})