import { useState } from 'react'
import { View } from 'react-native'
import InputText from './Input'
import Label from './Label'
import Button from '../Button'
import Checkbox from '../Checkbox'
import colors from 'tailwindcss/colors'

export default function SignupForm() {
    const [showPass, setShowPass] = useState(true)

    const toggleShowPass = () => {
        setShowPass((prev) => !prev)
    }

    return (
        <View>
            {/* <Text>SigninForm</Text> */}
            <Label label="First Name">
                <InputText placeholder="John" autoFocus />
            </Label>
            <Label label="Last Name">
                <InputText placeholder="Doe" />
            </Label>
            <Label label="Username">
                <InputText placeholder="johndoe123" />
            </Label>
            <Label label="Email">
                <InputText
                    placeholder="john.doe@email.com"
                    type="email"
                    keyboardType="email-address"
                />
            </Label>
            <Label label="Password">
                <InputText
                    placeholder="**********"
                    secureTextEntry={showPass}
                    // onChangeText={onChangeText}
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
            >
                Signup
            </Button>
        </View>
    )
}
