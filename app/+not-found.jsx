import React from 'react'
import { Link } from 'expo-router'
import { View, Text } from 'react-native'
import ThemedText from '@/components/text/ThemedText'

export default function NotFound() {
    return (
        <View className="flex-1 items-center justify-center bg-slate-100 dark:bg-slate-900">
            <ThemedText style="text-7xl font-black">404</ThemedText>
            <ThemedText style="text-2xl">Page Not Found</ThemedText>
            <Link
                href="/(drawer)"
                className="undeline text-white py-4 px-6 mt-6 bg-emerald-600 rounded-md"
            >
                Go back Home
            </Link>
        </View>
    )
}
