import { Image, TouchableOpacity } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { useColorScheme } from 'nativewind'

export default function HeaderProfile({ onPress = () => {} }) {
    const { colorScheme } = useColorScheme()
    return (
        <TouchableOpacity onPress={onPress}>
            <FontAwesome6
                name="circle-user"
                size={24}
                color={
                    colorScheme === 'dark'
                        ? colors.slate[100]
                        : colors.slate[950]
                }
            />
        </TouchableOpacity>
    )
}
