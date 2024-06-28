import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import ThemedText from './text/ThemedText'
import SoftText from './text/SoftText'

export default function NumberWithLabel({
    number,
    label,
    styles,
    onPress = () => {},
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`flex-row items-center ${styles}`}
        >
            <ThemedText style="font-semibold">{number}</ThemedText>
            <SoftText style="ml-1">{label}</SoftText>
        </TouchableOpacity>
    )
}
