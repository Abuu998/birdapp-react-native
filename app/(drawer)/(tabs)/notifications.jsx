import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import ThemedText from '@/components/text/ThemedText'

export default function Notifications() {
    return (
        <View className="flex-1 items-center justify-center bg-slate-200 dark:bg-slate-900">
            <ThemedText>Notifications</ThemedText>
        </View>
    )
}
