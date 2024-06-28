import React from 'react'
import { Pressable } from 'react-native'
import ThemedText from '../text/ThemedText'

export default function IconText({
    text,
    textStyle = 'ml-4',
    children,
    onPress = () => {},
    ...props
}) {
    return (
        <Pressable
            className="flex-row items-center"
            onPress={onPress}
            {...props}
        >
            {children}
            <ThemedText style={textStyle}>{text}</ThemedText>
        </Pressable>
    )
}
