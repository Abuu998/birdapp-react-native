import { Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import { DrawerItem } from '@react-navigation/drawer'
import colors from 'tailwindcss/colors'
import { useColorScheme } from 'nativewind'

export default function ProfileItem() {
    const { colorScheme } = useColorScheme()

    return (
        <DrawerItem
            to="/profile/Abu"
            pressColor="transparent"
            style={{
                marginHorizontal: 0,
                marginVertical: 0,
            }}
            icon={({ focused, size }) => (
                <FontAwesome5
                    name={focused ? 'user-alt' : 'user'}
                    size={size}
                    color={
                        colorScheme === 'dark' && focused
                            ? colors.slate[100]
                            : colorScheme === 'dark'
                            ? colors.slate[300]
                            : colors.slate[950]
                    }
                />
            )}
            label={({ focused }) => (
                <Text
                    className={`${
                        focused
                            ? 'text-slate-950 dark:text-slate-100'
                            : 'text-slate-700 dark:text-slate-300'
                    } text-lg`}
                >
                    Profile
                </Text>
            )}
        />
    )
}
