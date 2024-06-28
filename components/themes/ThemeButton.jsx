import React, { useEffect, useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'
import colors from 'tailwindcss/colors'
import ThemedText from '../text/ThemedText'

export default function ThemeButton({
    themeName = 'system',
    selectTheme = () => {},
    selectedTheme,
    onPress = () => {},
}) {
    const { colorScheme: theme } = useColorScheme()

    const selected = themeName === selectedTheme ? 'bg-emerald-600' : ''

    return (
        <Pressable
            onPress={() => {
                onPress()
                selectTheme(getThemeIcon(themeName).selected)
            }}
            className="py-2 px-4 justify-self-start flex-row w-full justify-between"
        >
            <View className="flex-row">
                <View
                    className={`w-7 items-center justify-center aspect-square rounded-full border-2 border-slate-400 dark:border-slate-500 ${selected}`}
                >
                    <Ionicons
                        name={getThemeIcon(themeName).iconName}
                        size={14}
                        color={
                            theme === selectedTheme ||
                            selectedTheme === 'system'
                                ? colors.white
                                : theme === 'dark'
                                ? colors.slate[100]
                                : theme === 'light'
                                ? colors.slate[950]
                                : ''
                        }
                    />
                </View>
                <ThemedText style="text-base mx-5">
                    {`${themeName.slice(0, 1).toUpperCase()}${themeName.slice(
                        1
                    )}`}
                </ThemedText>
            </View>
            <View>{getThemeIcon(themeName).box}</View>
        </Pressable>
    )
}

function getThemeIcon(theme) {
    switch (theme) {
        case 'dark':
            return {
                iconName: 'moon-outline',
                box: <ThemeBox theme={theme} />,
                selected: theme,
            }
        case 'light':
            return {
                iconName: 'sunny-outline',
                box: <ThemeBox theme={theme} />,
                selected: theme,
            }
        case 'system':
            return {
                iconName: 'phone-portrait-outline',
                box: <SystemThemeBox />,
                selected: theme,
            }

        default:
            return {
                iconName: 'phone-portrait-outline',
                box: <SystemThemeBox />,
                selected: 'system',
            }
    }
}

const ThemeBox = ({ theme }) => {
    const [classNames, setClassNames] = useState('')

    useEffect(() => {
        if (theme === 'dark') {
            setClassNames('bg-slate-900')
        } else {
            setClassNames('bg-slate-200')
        }
    }, [theme])

    return (
        <View
            className={`w-8 aspect-square border border-slate-300 dark:border-slate-700 rounded-md ${classNames}`}
        ></View>
    )
}

const SystemThemeBox = () => {
    return (
        <View className="flex-row w-8 aspect-square border-slate-300 dark:border-slate-700 rounded-md overflow-hidden">
            <View className="flex-1 bg-slate-200"></View>
            <View className="flex-1 bg-slate-900"></View>
        </View>
    )
}
