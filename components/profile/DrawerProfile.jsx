import React from 'react'
import { View, Pressable, Image } from 'react-native'
import ThemedText from '../text/ThemedText'
import SoftText from '../text/SoftText'

export default function DrawerProfile() {
    return (
        <Pressable onPress={() => {}}>
            <View className="w-11 aspect-square items-center justify-center rounded-full bg-emerald-700">
                <ThemedText style="text-xl font-bold text-white uppercase tracking-tighter">
                    Na
                </ThemedText>
            </View>
            <View className="mt-3">
                <ThemedText style="font-semibold text-base tracking-tighter">
                    Nduwimana Abubakar
                </ThemedText>
                <SoftText style="tracking-tighter">@abuu990</SoftText>
            </View>
        </Pressable>
    )
}
