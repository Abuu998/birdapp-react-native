import { View, Text, Pressable, Image } from 'react-native'

export default function DrawerProfile() {
    return (
        <Pressable onPress={() => {}}>
            <View className="w-11 aspect-square items-center justify-center rounded-full bg-emerald-700">
                <Text className="text-xl font-bold text-white uppercase tracking-tighter">
                    Na
                </Text>
            </View>
            <View className="mt-3">
                <Text className="font-semibold text-slate-950 dark:text-slate-100 text-base tracking-tighter">
                    Nduwimana Abubakar
                </Text>
                <Text className="text-slate-600 dark:text-slate-400 tracking-tighter">
                    @abuu990
                </Text>
            </View>
        </Pressable>
    )
}
