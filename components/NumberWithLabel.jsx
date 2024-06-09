import { TouchableOpacity, Text } from 'react-native'

export default function NumberWithLabel({
    number,
    label,
    styles,
    onPress = () => {},
}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`flex-row items-center ${styles}`}
        >
            <Text
                className={`text-slate-950 dark:text-slate-100 font-semibold`}
            >
                {number}
            </Text>
            <Text className="text-slate-600 dark:text-slate-400 ml-1">
                {label}
            </Text>
        </TouchableOpacity>
    )
}
