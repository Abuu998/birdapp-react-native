import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { useColorScheme } from 'nativewind'
import { Pressable } from 'react-native'

export default function SettingsIcon({ onPress = () => {} }) {
    const { colorScheme } = useColorScheme()

    return (
        <Pressable onPress={onPress}>
            <Ionicons
                name="settings-outline"
                size={24}
                color={
                    colorScheme === 'dark'
                        ? colors.slate[100]
                        : colors.slate[950]
                }
            />
        </Pressable>
    )
}
