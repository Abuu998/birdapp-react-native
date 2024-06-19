import { Link } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

export default function NotFound() {
    return (
        <View className="flex-1 items-center justify-center bg-slate-100 dark:bg-slate-900">
            <Text className="text-7xl font-black text-slate-950 dark:text-slate-100">
                404
            </Text>
            <Text className="text-2xl text-slate-950 dark:text-slate-100">
                Page Not Found
            </Text>
            <Link
                href="/(drawer)"
                className="undeline text-white py-4 px-6 mt-6 bg-emerald-600 rounded-md"
            >
                Go back Home
            </Link>
        </View>
    )
}
