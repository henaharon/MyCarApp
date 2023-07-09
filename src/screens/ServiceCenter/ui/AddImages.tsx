/* eslint-disable*/
import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, ViewProps, ScrollView, ScrollViewProps, ImageSourcePropType } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Bold } from './Bold';
import { SubText } from './SubText';

export function ImagesView({ onAdd, onRemove, style, images, ...rest }: ScrollViewProps & {
    images: string[],
    onAdd?: () => Promise<void>,
    onRemove?: (i: number) => void
}) {
    return (
        <View style={style}>
            {onAdd ?
                <Bold>הוספת תמונות</Bold>
                :
                <Bold>תמונות</Bold>
            }
            <ScrollView horizontal style={{ width: '100%', flexDirection: "row-reverse" }}>
                <View style={{
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    flexDirection: "row-reverse",
                    gap: 8,
                    marginTop: 8,
                }}  {...rest}>
                    {onAdd && (
                        <TouchableOpacity style={styles.container} onPress={onAdd}>
                            <Image source={require('../../assets/service-center/placeholder.png')} style={{ width: 40, height: 40 }} />
                        </TouchableOpacity>
                    )}
                    {images.map((image, index) => (
                        <TouchableOpacity style={styles.container} key={index} onPress={() => onRemove?.(index)}>
                            <Image source={require('../../assets/service-center/placeholder-white.png')} style={{ width: 20, height: 20, position: 'absolute', zIndex: 2, bottom: 10, left: 10, }} />
                            <Image source={{ uri: image }} style={styles.image} />
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>

    )
}

export function AddImages({ children, images, style, onImageAdd, onImageRemove, ...rest }: ViewProps & { images: string[], onImageAdd: (uri: string) => void, onImageRemove: (index: number) => void }) {
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const { uri } = result.assets[0]
            onImageAdd(uri);
        }
    };

    const removeImage = (index: number) => {
        onImageRemove(index);
    };

    return (
        <View style={[{ marginTop: 20, marginBottom: 60, alignContent: "flex-start", width: 320 }, style]} {...rest}>
            <ImagesView onAdd={pickImage} onRemove={removeImage} images={images} />
            <SubText style={{ textAlign: "right" }}>Assistive text</SubText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 120,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.15)",
        width: 90,
        overflow: "hidden",
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 120,
    },
});