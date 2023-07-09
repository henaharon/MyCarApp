/* eslint-disable*/
import { useState, useContext } from "react";
import { Image, Pressable, PressableProps, ScrollView, StyleSheet, TextInput, View, ViewProps } from "react-native";
import { Text } from "react-native";
import { BlackWrapper } from "./ui/BlackWrapper";
import { ServiceContext } from "./store/context";
import { Bold } from "./ui/Bold";
import { SubText } from "./ui/SubText";
import { navigate } from "./utils/navigator";

function Day({ children, num, day, onPress, ...rest }: PressableProps & { num: number, day: number }) {
    const active = day % 7 !== 0 && day % 6 !== 0
    const handlePress = active ? onPress : undefined
    return (
        <Pressable onPress={handlePress} style={({ pressed }) => [
            styles.pressableBase,
            { borderColor: active ? "#ececec" : "transparent" },
            active && pressed && styles.activePressable
        ]}
            {...rest}>
            <Text style={styles.pressableText}>
                {num}
            </Text>
        </Pressable>
    )
}

function monthName(month: number) {
    return ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"][month]
}

function getDaysInMonth(month: number) {
    return new Date(getCurrentYear(), month + 1, 0).getDate()
}

function getCurrentMonth() {
    let date = new Date();
    let month = date.getMonth();
    return month;
}

function getCurrentYear() {
    return new Date().getFullYear()
}


function getFirstDayOfMonth(month: number, year: number) {
    let date = new Date(year, month, 1); // month is 0-indexed
    return date.getDay(); // getDay() returns 0 for Sunday, 1 for Monday, etc.
}

function getDayLetter(day: number) {
    return ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'][day]
}

function Month({ num, year }: ViewProps & { num: number, year: number }) {
    const [service, setService] = useContext(ServiceContext)
    const firstDayOfMonth = getFirstDayOfMonth(num, year)
    function onDayPick(numDay: number) {
        setService({ ...service, date: new Date(year, num, numDay) })
        navigate("AdditionalDemands")
    }
    return (
        <View style={styles.monthWrapper}>
            <Bold>{`${monthName(num)} ${year}`} </Bold>
            <View style={styles.dayLetterWrapper}>
                {Array.from({ length: 7 }, (_, i) => i).map(day => {
                    return <SubText key={day} style={styles.dayLetter}>{getDayLetter(day)}</SubText>
                })}
            </View>
            <View style={styles.daysWrapper}>
                {Array.from({ length: firstDayOfMonth }, (_, i) => i + 1).map(x => {
                    return (
                        <View key={x} style={styles.day}></View>
                    )
                })}
                {Array.from({ length: getDaysInMonth(num) }, (_, i) => i + 1).map(numDay => {
                    return (
                        <Day onPress={() => onDayPick(numDay)} key={numDay} day={(numDay + firstDayOfMonth) % 7} num={numDay} />
                    )
                })}
            </View>
        </View>
    )
}

export function DateComp() {
    const currentMonth = getCurrentMonth()
    const year = getCurrentYear()
    return (
        <BlackWrapper onPrev={() => navigate("Location")} title={"מועד טיפול"}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.scrollViewContent}>
                    <Month num={currentMonth} year={year}></Month>
                    <Month num={currentMonth + 1} year={currentMonth === 12 ? year + 1 : year}></Month>
                </View>
            </ScrollView>
        </BlackWrapper>
    )
}

const styles = StyleSheet.create({
    pressableBase: {
        width: 42,
        height: 42,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 300
    },
    activePressable: {
        backgroundColor: "#f25964",
        borderColor: "transparent"
    },
    pressableText: {
        color: 'black'
    },
    monthWrapper: {
        justifyContent: "center",
        width: "100%",
        alignItems: "center"
    },
    dayLetterWrapper: {
        flexDirection: "row-reverse",
        width: 350,
        gap: 9,
        direction: "rtl",
        marginTop: 16
    },
    dayLetter: {
        width: 42,
        height: 42,
        textAlign: "center"
    },
    daysWrapper: {
        flexDirection: "row-reverse",
        width: 350,
        flexWrap: "wrap",
        gap: 9,
        marginTop: -12
    },
    day: {
        width: 42,
        height: 42
    },
    scrollView: {
        width: "100%"
    },
    scrollViewContent: {
        width: "100%",
        gap: 32,
        justifyContent: "center",
        alignItems: "center"
    }
});