import React from 'react'
import { ScrollView } from 'react-native'
import { Link } from 'expo-router'
import PostCard from '@/components/post/PostCard'
import ThemedText from '../../../components/text/ThemedText'

export default function Home() {
    return (
        <ScrollView className="flex-1 bg-slate-200 dark:bg-slate-900 py-1">
            <PostCard />
            <ThemedText style="px-4">Home Page</ThemedText>
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
        </ScrollView>
    )
}
