import React from 'react'
import { TextInput } from 'react-native'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from 'nativewind'

export default function InputText({
    type = 'text',
    name = '',
    styles,
    showDefaultStyles = true,
    keyboardType = 'default',
    placeholder,
    onChangeText = () => {},
    autoFocus = false,
    secureTextEntry = false,
    ...props
}) {
    const { colorScheme } = useColorScheme()

    return (
        <TextInput
            inputMode={type}
            keyboardType={keyboardType}
            onChangeText={(text) => onChangeText(name, text)}
            autoFocus={autoFocus}
            placeholderTextColor={Colors[colorScheme]?.placeholder}
            editable
            secureTextEntry={secureTextEntry}
            className={
                showDefaultStyles
                    ? 'py-2 px-4 rounded-md w-full text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-md text-base ' +
                      styles
                    : styles
            }
            cursorColor={Colors[colorScheme]?.text}
            placeholder={placeholder}
            {...props}
        />
    )
}
