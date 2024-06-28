import React from 'react'
import { View, Text, Pressable } from 'react-native'
import useToggle from '@/hooks/useToggle'
import { Ionicons } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { useColorScheme } from 'nativewind'
import ThemedText from './text/ThemedText'

export default function Collapsible({ label, children, styles }) {
    const [on, toggleOn] = useToggle()
    const { colorScheme } = useColorScheme()

    return (
        <Pressable className={`${styles}`} onPress={() => toggleOn()}>
            <View className="flex-row items-center justify-between">
                <ThemedText style="text-base font-semibold">{label}</ThemedText>
                <Ionicons
                    name={on ? 'caret-up-outline' : 'caret-down-outline'}
                    size={24}
                    color={
                        colorScheme === 'dark'
                            ? colors.slate[100]
                            : colors.slate[900]
                    }
                />
            </View>
            <View className="pl-2 py-2">{on && children}</View>
        </Pressable>
    )
}
