/* eslint-disable*/
import { useContext, useEffect, useState } from "react"
import { Options } from "./SelectService"
import { StyledInput } from "./ui/StyledInput"
import { AddImages } from "./ui/AddImages"
import { BlackWrapper } from "./ui/BlackWrapper"
import { ServiceContext } from "./store/context"
import { navigate } from "./utils/navigator"

export function AdditionalDemands() {
    const [service, setService] = useContext(ServiceContext)

    function onImageAdd(uri: string) {
        setService(service => ({ ...service, additionalImages: [...service.additionalImages, uri] }))
    }

    function onImageRemove(index: number) {
        setService(service => ({ ...service, additionalImages: service.additionalImages.filter((_, i) => i !== index) }))
    }

    const demands = [
        {
            name: "נורות",
            src: require("../assets/service-center/lights.png"),
            id: 12
        }, {
            name: "מגבים",
            src: require("../assets/service-center/wipers.png"),
            id: 13
        }, {
            name: "מזגן",
            src: require("../assets/service-center/snowflake.png"),
            id: 14
        },
        {
            name: "בלמים",
            src: require("../assets/service-center/brakes.png"),
            id: 15
        }, {
            name: "צמיגים",
            src: require("../assets/service-center/tires.png"),
            id: 16
        }
    ]

    function onDemandPress(newDemand: { name: string, src: any, id: number }) {
        if (service.additionalDemands.find(demand => demand.id === newDemand.id)) {
            setService(service => ({ ...service, additionalDemands: service.additionalDemands.filter(demand => demand.id !== newDemand.id) }))
        } else {
            setService(service => ({ ...service, additionalDemands: [...service.additionalDemands, newDemand] }))
        }
    }

    const options = demands.map(demand => ({
        ...demand,
        onPress: () => onDemandPress(demand),
    }))

    function onChangeText(text: string) {
        setService({ ...service, otherDemands: text })
    }

    return (
        <BlackWrapper onNext={() => navigate("Summary")} onPrev={() => navigate("DateComp")} title={"דרישות נוספות"}>
            <Options options={options} />
            <StyledInput title={'אחר'} value={service.otherDemands} onChangeText={onChangeText} multiline={true} placeholder="האם יש עוד משהו שתרצו שנבדוק שלא מצויין ברשימה למעלה?" placeholderTextColor="#bbbbbb" />
            <AddImages onImageAdd={onImageAdd} onImageRemove={onImageRemove} images={service.additionalImages} />
        </BlackWrapper>
    )
}


