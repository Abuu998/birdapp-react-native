import { TouchableOpacity, Text } from 'react-native'

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
            <Text className={`${textStyle}`}>{children}</Text>
        </TouchableOpacity>
    )
}
