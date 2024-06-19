import { View, Text } from 'react-native'

export default function PostCardUser({ user, row = true }) {
    return (
        <View className={`flex-${row ? 'row' : 'column'}`}>
            <Text className="font-semibold text-base tracking-tighter text-slate-950 dark:text-slate-100">
                Nduwimana Abubakar
            </Text>
            <Text className="text-slate-600 dark:text-slate-400 ml-1">
                @abuu998
            </Text>
        </View>
    )
}
