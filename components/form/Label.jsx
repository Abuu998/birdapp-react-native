import React from 'react'
import { View, Text } from 'react-native'
import ThemedText from '../text/ThemedText'

export default function Label({ label, children }) {
    return (
        <View className="flex-col gap-1 mt-2">
            <ThemedText style="text-base font-semibold">{label}:</ThemedText>
            {children}
        </View>
    )
}
