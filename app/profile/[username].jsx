import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { ScrollView, Text, View, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import ThemedText from '@/components/text/ThemedText'

export default function UserProfile() {
    const { username } = useLocalSearchParams()

    return (
        <View className="flex-1 bg-slate-200 dark:bg-slate-900">
            <View className="pt-11 px-4 bg-blue-500 w-full h-36">
                <Pressable
                    className="self-start rounded-full"
                    onPress={() => router.back()}
                >
                    <View className="bg-white absolute top-[8px] z-0 w-[18px] rounded-full self-center justify-self-center aspect-square"></View>
                    <Ionicons
                        name="arrow-back-circle-sharp"
                        size={34}
                        color="black"
                    />
                </Pressable>
            </View>
            <ScrollView className="px-4">
                <ThemedText style="text-3xl">
                    UserProfile: {username}
                </ThemedText>
            </ScrollView>
        </View>
    )
}
