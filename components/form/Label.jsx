import { View, Text } from 'react-native'

export default function Label({ label, children }) {
    return (
        <View className="flex-col gap-1 mt-2">
            <Text className="text-slate-950 dark:text-slate-100 text-base font-semibold">
                {label}:
            </Text>
            {children}
        </View>
    )
}
