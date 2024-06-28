import React from 'react'
import { TouchableOpacity } from 'react-native'
import ThemedText from './text/ThemedText'

export default function Button({
    onPress = () => {},
    rounded = true,
    children,
    textStyle,
    btnStyles,
    ...props
}) {
    return (
        <TouchableOpacity
            onPress={() => onPress()}
            className={`${rounded ? 'rounded-md' : ''} ${btnStyles}`}
            {...props}
        >
            <ThemedText style={textStyle}>{children}</ThemedText>
        </TouchableOpacity>
    )
}
