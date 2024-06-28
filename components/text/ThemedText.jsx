import React from 'react'
import { Text } from 'react-native'

export default function ThemedText({ style, children }) {
    return (
        <Text className={`text-slate-950 dark:text-slate-100 ${style}`}>
            {children}
        </Text>
    )
}
