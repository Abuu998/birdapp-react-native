import { Pressable, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { useColorScheme } from 'nativewind'

export default function Home() {
    const { colorScheme, toggleColorScheme } = useColorScheme()

    return (
        <View className="flex-1 items-center justify-center bg-slate-200 dark:bg-slate-900 px-4 py-4">
            <Text className="text-slate-950 dark:text-slate-100">
                Home Page
            </Text>
            <Link
                href="/signin"
                className="text-slate-950 dark:text-slate-100 underline"
            >
                Sign in
            </Link>
            <Link
                href={{
                    pathname: '/profile/[username]',
                    params: { username: 'Abu' },
                }}
                className="text-slate-950 dark:text-slate-100 underline"
            >
                To Profile Page
            </Link>
            <Pressable onPress={toggleColorScheme}>
                <Text className="py-6 text-2xl font-semibold">
                    {`Try clicking me! ${colorScheme === 'dark' ? '🌙' : '🌞'}`}
                </Text>
            </Pressable>
        </View>
    )
}
