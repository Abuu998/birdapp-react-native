import React from 'react'
import { Text } from 'react-native'

export default function SoftText({ style, children }) {
    return (
        <Text className={`text-slate-600 dark:text-slate-400 ${style}`}>
            {children}
        </Text>
    )
}
