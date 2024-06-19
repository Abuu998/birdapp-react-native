import { Pressable, Text, View, ScrollView } from 'react-native'
import { Link } from 'expo-router'
import { useColorScheme } from 'nativewind'
import PostCard from '@/components/post/PostCard'

export default function Home() {
    const { colorScheme, toggleColorScheme } = useColorScheme()

    return (
        <ScrollView className="flex-1 bg-slate-200 dark:bg-slate-900 py-1">
            <PostCard />
            <Text className="text-slate-950 dark:text-slate-100 px-4">
                Home Page
            </Text>
            <Link
                href="/signin"
                className="text-slate-950 dark:text-slate-100 underline px-4"
            >
                Sign in
            </Link>
            <Link
                href={{
                    pathname: '/profile/[username]',
                    params: { username: 'Abu' },
                }}
                className="text-slate-950 dark:text-slate-100 underline px-4"
            >
                To Profile Page
            </Link>
            <Pressable onPress={toggleColorScheme}>
                <Text className="py-6 text-2xl font-semibold text-slate-950 dark:text-slate-100 px-4">
                    {`Try clicking me! ${colorScheme === 'dark' ? '🌙' : '🌞'}`}
                </Text>
            </Pressable>
        </ScrollView>
    )
}
