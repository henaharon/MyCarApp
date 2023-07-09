/* eslint-disable*/
import { Dispatch, createContext } from "react";
import { ImageSourcePropType } from "react-native";

export type ServiceState = {
    otherDemands: string;
    mileage: number,
    location: string,
    date: Date,
    additionalDemands: {
        name: string,
        src: ImageSourcePropType,
        id: number,
        description?: string
    }[],
    additionalImages: string[],
    explanation: string,
    serviceType: {
        name: string,
        src: ImageSourcePropType,
        id: number
    },
    serviceImages: string[],
}

export const ServiceContext = createContext<[ServiceState, Dispatch<React.SetStateAction<ServiceState>>]>([null as any, null as any])