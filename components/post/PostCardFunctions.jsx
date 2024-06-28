import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons, FontAwesome6 } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { useColorScheme } from 'nativewind'

export default function PostCardFunctions({
    onComment = () => {},
    onRetweet = () => {},
    onLike = () => {},
    onShare = () => {},
}) {
    const { colorScheme: theme } = useColorScheme()

    return (
        <View className="flex-row items-center justify-between mt-2">
            <TouchableOpacity onPress={onComment}>
                <Ionicons
                    name="chatbubble-outline"
                    size={20}
                    color={
                        theme === 'dark' ? colors.slate[100] : colors.slate[950]
                    }
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={onRetweet}>
                <FontAwesome6
                    name="retweet"
                    size={20}
                    color={
                        theme === 'dark' ? colors.slate[100] : colors.slate[950]
                    }
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={onLike}>
                <Ionicons
                    name="heart-outline"
                    size={20}
                    color={
                        theme === 'dark' ? colors.slate[100] : colors.slate[950]
                    }
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={onShare}>
                <Ionicons
                    name="share-social-outline"
                    size={20}
                    color={
                        theme === 'dark' ? colors.slate[100] : colors.slate[950]
                    }
                />
            </TouchableOpacity>
        </View>
    )
}
