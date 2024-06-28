import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { useColorScheme } from 'nativewind'
import ThemeButton from './ThemeButton'

export default function ThemeSwitcher() {
    const { colorScheme: theme, setColorScheme } = useColorScheme()
    const [isSelected, setIsSelected] = useState(theme)

    const selectTheme = (theme) => setIsSelected(theme)

    return (
        <View className="w-full py-4 items-start justify-center">
            <ThemeButton
                themeName="dark"
                onPress={() => setColorScheme('dark')}
                selectTheme={selectTheme}
                selectedTheme={isSelected}
            />
            <ThemeButton
                themeName="light"
                onPress={() => setColorScheme('light')}
                selectTheme={selectTheme}
                selectedTheme={isSelected}
            />
            <ThemeButton
                themeName="system"
                onPress={() => setColorScheme('system')}
                selectTheme={selectTheme}
                selectedTheme={isSelected}
            />
        </View>
    )
}
