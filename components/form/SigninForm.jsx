import { useState } from 'react'
import { View } from 'react-native'
import InputText from './Input'
import Label from './Label'
import Button from '../Button'
import Checkbox from '../Checkbox'
import colors from 'tailwindcss/colors'
import { router } from 'expo-router'

export default function SignupForm() {
    const [showPass, setShowPass] = useState(true)

    const toggleShowPass = () => {
        setShowPass((prev) => !prev)
    }

    return (
        <View>
            <Label label="Email">
                <InputText
                    placeholder="john.doe@email.com"
                    type="email"
                    keyboardType="email-address"
                    autoFocus
                />
            </Label>
            <Label label="Password">
                <InputText
                    placeholder="**********"
                    secureTextEntry={showPass}
                />
                <Checkbox
                    color={colors.emerald[600]}
                    label="Show Password"
                    checked={!showPass}
                    onPress={toggleShowPass}
                />
            </Label>

            <Button
                btnStyles="py-2 px-4 rounded-md bg-emerald-500 mt-8"
                textStyle="text-lg font-semibold text-white text-center"
                onPress={() => router.navigate('/(drawer)')}
            >
                Signin
            </Button>
        </View>
    )
}
