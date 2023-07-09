/* eslint-disable*/
import { createRef, useContext, useState } from "react";
import { Image, Pressable, StyleSheet, TextInput, View } from "react-native";
import { BlackWrapper } from "./ui/BlackWrapper";
import { ServiceContext } from "./store/context";
import { Bold } from "./ui/Bold";
import { SubText } from "./ui/SubText";
import { navigate } from "./utils/navigator";

export function Mileage() {
    const [service, setService] = useContext(ServiceContext)
    const [inputValue, setInputValue] = useState('')
    const onNext = inputValue ? () => navigate("Location") : undefined;

    return (
        <BlackWrapper
            onPrev={() => navigate("SelectService")}
            onNext={onNext}
            title={"קילומטראז'"}
        >
            <View style={styles.container}>
                <Bold>מספר הקילומטרים ברכב</Bold>
                <SubText>אנא הזן את מספר הקילומטרים הנוכחי ברכבך</SubText>
                <View style={styles.inputContainer}>
                    <Image source={require("../assets/service-center/mileage.png")} style={styles.image} />
                    <TextInput
                        keyboardType="numeric"
                        placeholderTextColor="#bbbbbb"
                        placeholder={`ק"מ`}
                        style={styles.textInput}
                        onChangeText={text => {
                            if (text) {
                                setService({ ...service, mileage: parseInt(text) })
                            }
                            setInputValue(text)
                        }}
                        value={inputValue}
                    />
                </View>
            </View>
        </BlackWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingRight: 30,
        paddingLeft: 30,
        paddingTop: 30
    },
    inputContainer: {
        marginTop: 32,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center"
    },
    image: {
        width: 200,
        height: 180
    },
    textInput: {
        marginTop: 16,
        borderWidth: 2,
        width: 180,
        borderRadius: 4,
        padding: 14,
        textAlign: "center",
        borderStyle: "solid",
        borderColor: "#a7b3f7"
    }
});
