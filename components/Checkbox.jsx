import React from 'react'
import { Pressable } from 'react-native'
import { CheckBox } from 'react-native-btr'
import ThemedText from './text/ThemedText'

export default function Checkbox({
    onPress = () => {},
    checked = false,
    color,
    label,
    labelStyles,
}) {
    return (
        <Pressable
            className="flex-row items-center mt-3 ml-4"
            onPress={onPress}
        >
            <CheckBox
                onPress={onPress}
                checked={checked}
                borderRadius={6}
                color={color}
            />
            <ThemedText style={`ml-6 ${labelStyles}`}>{label}</ThemedText>
        </Pressable>
    )
}
