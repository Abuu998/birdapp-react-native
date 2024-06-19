import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import PostCardProfile from '../profile/PostCardProfile'
import PostCardUser from './PostCardUser'
import colors from 'tailwindcss/colors'
import { useColorScheme } from 'nativewind'
import PostCardFunctions from './PostCardFunctions'

export default function PostCard({ post }) {
    const { colorScheme: theme } = useColorScheme()

    return (
        <View className="w-full px-4 py-1 flex-row items-start">
            <View className="">
                <PostCardProfile />
            </View>
            <View className="flex-1 ml-4">
                <View className="flex-row">
                    <PostCardUser />
                    <Text className="text-slate-600 dark:text-slate-400 ml-1">
                        1h
                    </Text>
                    <Ionicons
                        name="ellipsis-horizontal"
                        size={20}
                        color={
                            theme === 'dark'
                                ? colors.slate[100]
                                : colors.slate[950]
                        }
                        style={{ marginLeft: 'auto' }}
                    />
                </View>
                <View className="mt-1">
                    <Text className="text-slate-950 dark:text-slate-100">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Quae possimus dignissimos, cupiditate ullam
                        praesentium in. Dolorum excepturi doloribus quibusdam
                        at.
                    </Text>
                    <PostCardFunctions />
                </View>

                <Text>PostCard</Text>
            </View>
        </View>
    )
}
