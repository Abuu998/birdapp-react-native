import { Text, Pressable } from 'react-native'
import { CheckBox } from 'react-native-btr'

export default function Checkbox({
    onPress = () => {},
    checked = false,
    color,
    label,
    labelStyles,
}) {
    return (
        <Pressable
            className="flex-row items-center mt-3 ml-4"
            onPress={onPress}
        >
            <CheckBox
                onPress={onPress}
                checked={checked}
                borderRadius={6}
                color={color}
            />
            <Text
                className={`ml-6 text-slate-950 dark:text-slate-100 ${labelStyles}`}
            >
                {label}
            </Text>
        </Pressable>
    )
}
