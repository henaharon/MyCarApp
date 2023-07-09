/* eslint-disable*/
import React, { useContext, useState } from "react";
import { Image, Pressable, StyleSheet, TextInput, TextInputProps, TextStyle, View } from "react-native";
import { Text } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StyledInput } from "./ui/StyledInput";
import { AddImages } from "./ui/AddImages";
import { BlackWrapper } from "./ui/BlackWrapper";
import { ServiceContext } from "./store/context";
import { Bold } from "./ui/Bold";
import { navigate } from "./utils/navigator";


export function Service({ route }: { route: RouteProp<{ params: { name: string, src: any }[] }, "params"> }) {
    const { name, src } = route.params[0];
    const [service, setService] = useContext(ServiceContext)

    function handleExplanationChange(text: string) {
        setService({ ...service, explanation: text })
    }

    function onImageAdd(uri: string) {
        setService(service => ({ ...service, serviceImages: [...service.serviceImages, uri] }))
    }

    function onImageRemove(index: number) {
        setService(service => ({ ...service, serviceImages: service.serviceImages.filter((_, i) => i !== index) }))
    }

    return (
        <BlackWrapper onNext={() => navigate("Mileage")} onPrev={() => navigate("SelectService")} title={name}>
            <Image source={src} style={styles.image} />
            <View style={styles.container}>
                <Bold style={styles.boldText}>
                    פרטים
                </Bold>
            </View>
            <StyledInput title={'תיאור / הערות'} onChangeText={handleExplanationChange} placeholder="פירוט" style={styles.textInput} />
            <AddImages onImageAdd={onImageAdd} onImageRemove={onImageRemove} images={service.serviceImages} />
        </BlackWrapper>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 140,
        marginTop: 40,
        height: 140
    },
    container: {
        justifyContent: "flex-start",
        width: "100%",
        marginTop: 16
    },
    boldText: {
        marginRight: 10
    },
    textInput: {
        marginTop: 16
    }
})
