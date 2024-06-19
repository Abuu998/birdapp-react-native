import { useState } from 'react'
import { Alert, View } from 'react-native'
import InputText from './Input'
import Label from './Label'
import Button from '../Button'
import Checkbox from '../Checkbox'
import colors from 'tailwindcss/colors'

const initialState = {
    name: '',
    username: '',
    email: '',
    password: '',
}

export default function SignupForm() {
    const [showPass, setShowPass] = useState(true)
    const [data, setData] = useState(initialState)

    const toggleShowPass = () => {
        setShowPass((prev) => !prev)
    }

    const onChangeText = (name, text) => {
        setData((prev) => ({ ...prev, [name]: text }))
    }

    return (
        <View>
            <Label label="Full Name">
                <InputText
                    placeholder="John Doe"
                    name="name"
                    onChangeText={onChangeText}
                    value={data.name}
                    autoFocus
                />
            </Label>
            <Label label="Username">
                <InputText
                    placeholder="johndoe123"
                    name="username"
                    onChangeText={onChangeText}
                    value={data.username}
                />
            </Label>
            <Label label="Email">
                <InputText
                    placeholder="john.doe@email.com"
                    name="email"
                    type="email"
                    keyboardType="email-address"
                    onChangeText={onChangeText}
                    value={data.email}
                />
            </Label>
            <Label label="Password">
                <InputText
                    placeholder="**********"
                    name="password"
                    secureTextEntry={showPass}
                    onChangeText={onChangeText}
                    value={data.password}
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
