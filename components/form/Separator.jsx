import { View, Text } from 'react-native'

export default function FormSeparator({ label }) {
    return (
        <View className="items-center flex-row my-4 text-center">
            <View className="h-[2px] w-[40%] bg-gray-400 dark:bg-slate-700"></View>
            <Text className="text-sm uppercase mx-2 flex-1 text-center text-gray-500 dark:text-slate-600">
                {label}
            </Text>
            <View className="h-[2px] w-[40%] bg-gray-400 dark:bg-slate-700"></View>
        </View>
    )
}
