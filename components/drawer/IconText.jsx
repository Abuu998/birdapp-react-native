import { Pressable, Text } from 'react-native'

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
            <Text className={`text-slate-950 dark:text-slate-100 ${textStyle}`}>
                {text}
            </Text>
        </Pressable>
    )
}
