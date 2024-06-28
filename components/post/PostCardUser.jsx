import React from 'react'
import { View, Text } from 'react-native'
import ThemedText from '../text/ThemedText'

export default function PostCardUser({ user, row = true }) {
    return (
        <View className={`flex-${row ? 'row' : 'column'}`}>
            <ThemedText style="font-semibold text-base tracking-tighter">
                Nduwimana Abubakar
            </ThemedText>
            <Text className="text-slate-600 dark:text-slate-400 ml-1">
                @abuu998
            </Text>
        </View>
    )
}
