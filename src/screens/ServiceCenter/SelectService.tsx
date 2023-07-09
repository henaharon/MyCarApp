/* eslint-disable*/
import { useContext, useState } from "react"
import { Image, ImageSourcePropType, Pressable, ScrollView, StyleSheet, View } from "react-native"
import { Text } from "react-native"
import { ServiceContext } from "./store/context";
import { DefaultText } from "./ui/DefaultText";
import { Bold } from "./ui/Bold";
import { SubText } from "./ui/SubText";
import { navigate } from "./utils/navigator";


function Card({ name="", reseting = false, src="", id = 0, style = {}, onPress = () => { } }) {
    const [service, setService] = useContext(ServiceContext);
    const [selected, setSelected] = useState(
        service.additionalDemands.find(demand => demand.id === id) !== undefined
    );

    return (
        <Pressable
            onPress={() => {
                setSelected(!selected);
                onPress();
                if (reseting) setTimeout(() => setSelected(false), 1000);
            }}
            style={[styles.card, { backgroundColor: selected ? "#f15c62" : "#fff" }, style]}
        >
            <Image source={src as ImageSourcePropType } style={styles.cardImage} />
            <DefaultText style={[styles.cardText, { color: selected ? "white" : "black" }]}>
                {name}
            </DefaultText>
        </Pressable>
    );
}

export function Options({ options }: { options: Array<{ name: string, src: string, id?: number }> }) {
    return (
        <View style={styles.optionsContainer}>
            <View style={styles.optionsInnerContainer}>
                <Bold>איך אפשר לעזור לך?</Bold>
                <SubText>אנא בחר שירות</SubText>
            </View>

            <View style={styles.cardContainer}>
                <Card {...options[0]} />
                <Card {...options[1]} />
                <Card {...options[2]} />
                <Card {...options[3]} />
            </View>
            <Card {...options[4]} style={styles.optionsCard} />
        </View>
    )
}

export function SelectService() {
    const [service, setService] = useContext(ServiceContext)
    function navigateToMileage({ name = '', src = '' as ImageSourcePropType, id = 0 }) {
        setService(service => ({ ...service, serviceType: { name, src, id } }))
        navigate("Mileage")
    }

    function navigateToService({ name = '', src = ''  as ImageSourcePropType, id = 0 }) {
        setService(service => ({ ...service, serviceType: { name, src, id } }))
        //@ts-ignore
        navigate("Service", [{ name, src }])
    }

    const serviceOptions = [{
        name: "תקלה ברכב",
        src: require("../assets/service-center/big-car.png"),
        id: 0,
    },
    {
        name: "טיפול תקופתי",
        src: require("../assets/service-center/routine-service.png"),
        id: 2,
    }, {
        name: "תאונה/נזק",
        src: require("../assets/service-center/warning.png"),
        id: 3,
    }, {
        name: "ביקורת בטיחות",
        src: require("../assets/service-center/inspection.png"),
        id: 4,
    }, {
        name: "אחר",
        src: require("../assets/service-center/other.png"),
        id: 5,
    }]

    const options = [
        {
            name: serviceOptions[0].name,
            src: serviceOptions[0].src,
            onPress: () => navigateToService(serviceOptions[0]),
            reseting: true
        }, {
            name: serviceOptions[1].name,
            src: serviceOptions[1].src,
            onPress: () => navigateToMileage(serviceOptions[1]),
            reseting: true
        }, {
            name: serviceOptions[2].name,
            src: serviceOptions[2].src,
            onPress: () => navigateToMileage(serviceOptions[2]),
            reseting: true
        },
        {
            name: serviceOptions[3].name,
            src: serviceOptions[3].src,
            onPress: () => navigateToMileage(serviceOptions[3]),
            reseting: true
        }, {
            name: serviceOptions[4].name,
            src: serviceOptions[4].src,
            onPress: () => navigateToService(serviceOptions[4]),
            reseting: true
        }
    ]
    return (
        <ScrollView style={styles.scrollView}>
            <Pressable onPress={() => navigate("Home")}>
                <Image source={require("../assets/service-center/exit.png")} style={styles.exitIcon} />
            </Pressable>

            <DefaultText style={styles.title}>זימון שירותי מוסך</DefaultText>
            <Image source={require("../assets/service-center/alt-takim-bakimi.jpg")} resizeMode="cover" style={styles.headerImage} />
            <Options options={options} />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    card: {
        width: 150,
        height: 150,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.15)",
        justifyContent: "center", alignItems: "center", display: "flex"
    },
    cardImage: {
        width: 50,
        height: 50
    },
    cardText: {
        marginTop: 16,
        textAlign: "center",
        fontWeight: "600"
    },
    optionsContainer: {
        marginTop: -20,
        paddingTop: 20,
        borderRadius: 18,
        backgroundColor: "white",
        justifyContent: "flex-start",
        alignItems: "center",
        display: "flex"
    },
    optionsInnerContainer: {
        paddingLeft: 30,
        paddingRight: 30,
        width: "100%"
    },
    cardContainer: {
        marginTop: 20,
        maxWidth: 400,
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: "wrap"
    },
    optionsCard: {
        marginTop: 12,
        width: 312,
        marginBottom: 20
    },
    scrollView: {
        width: "100%"
    },
    exitIcon: {
        position: "absolute",
        width: 40,
        height: 40,
        top: 60,
        right: 16
    },
    title: {
        position: "absolute",
        textAlign: "center",
        width: "100%",
        top: 70,
        color: "white"
    },
    headerImage: {
        zIndex: -1,
        width: "100%",
        height: 300
    }
});