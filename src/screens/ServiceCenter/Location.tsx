/* eslint-disable*/
import { useContext, useState } from "react";
import { Image, Pressable, StyleSheet, TextInput, View, ViewProps } from "react-native";
import { Text } from "react-native";
import { ServiceContext } from "./store/context";
import { BlackWrapper } from "./ui/BlackWrapper";
import { Bold } from "./ui/Bold";
import { DefaultText } from "./ui/DefaultText";
import { SubText } from "./ui/SubText";
import { navigate } from "./utils/navigator";

function LocationOption({ name, style, ...rest }: ViewProps & { name: string }) {
    const [service,setService] = useContext(ServiceContext)

    function onLocationPick(){
        navigate("DateComp");
        setService({...service, location:name});
    }
    
    return (
        <Pressable 
            onPress={onLocationPick} 
            style={({ pressed }) => [
                styles.pressable, 
                pressed && {backgroundColor:"#e6e5ea"}
            ]}
            {...rest}
        >
            <View style={styles.choiceContainer}>
                <Text style={styles.choiceText}>בחירה</Text>
            </View>
            <DefaultText style={styles.locationName}>{name}</DefaultText>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/service-center/location.png")} style={styles.image} />
            </View>
        </Pressable>
    )
}

export function Location() {
    return (
        <BlackWrapper onPrev={()=>navigate('Mileage')} title={"מיקום"}>
            <View style={{ width: "100%" }}>
                <Bold>נקודות איסוף והחזרה</Bold>
                <SubText>אנא בחרו נקודת איסוף והחזרת הרכב</SubText>
                <View style={styles.locationOptionContainer}>
                    <LocationOption name={"אמדוקס רעננה"}/>
                    <LocationOption name={"אמדוקס נצרת"}/>
                    <LocationOption name={"אמדוקס שדרות"}/>
                </View>
            </View>
        </BlackWrapper>
    )
}


const styles = StyleSheet.create({
    pressable: {
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        padding: 10, 
        paddingTop: 14, 
        paddingBottom:14, 
        flexDirection: "row", 
        backgroundColor: "#f8f8f8", 
        borderRadius: 8 
    },
    choiceContainer: {
        backgroundColor: "#f15a64", 
        marginRight: "auto", 
        padding: 10, 
        paddingRight: 20, 
        paddingLeft: 20, 
        borderRadius: 300 
    },
    choiceText: {
        color: "white", 
        fontWeight: "500"
    },
    locationName: {
        fontWeight: "600"
    },
    imageContainer: {
        marginLeft: 10, 
        backgroundColor: "#dfdfe1", 
        padding: 14, 
        borderRadius: 300
    },
    image: {
        width: 24, 
        height: 24
    },
    locationOptionContainer: {
        gap: 16, 
        marginTop: 20
    }
});
