import React from 'react'
import { Text } from 'react-native'

export default function ErrorText({ children, style, ...props }) {
    return (
        <Text className={`text-red-500 text-xs ml-2 ${style}`} {...props}>
            {children}
        </Text>
    )
}
