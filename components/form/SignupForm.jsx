import React, { useState } from 'react'
import { Alert, View, ToastAndroid } from 'react-native'
import InputText from './Input'
import Label from './Label'
import Button from '../Button'
import Checkbox from '../Checkbox'
import { signupSchema } from '../../utils/validateForm'
import { ValidationError } from 'yup'
import colors from 'tailwindcss/colors'
import ErrorText from '../text/ErrorText'
import { registerUser } from '../../utils/fetch'

const initialState = {
    name: '',
    username: '',
    email: '',
    password: '',
}

export default function SignupForm() {
    const [showPass, setShowPass] = useState(true)
    const [data, setData] = useState(initialState)
    const [errors, setErrors] = useState({
        exists: false,
        error: '',
        ...initialState,
    })
    const [loading, setLoading] = useState(false)

    const toggleShowPass = () => {
        setShowPass((prev) => !prev)
    }

    const onChangeText = (name, text) => {
        setData((prev) => ({ ...prev, [name]: text }))
    }

    const onSignup = async () => {
        setLoading(true)
        setErrors({ exists: false, error: '', ...initialState })
        let validatedData

        try {
            validatedData = await signupSchema.validate(data, {
                abortEarly: false,
            })
        } catch (err) {
            if (err instanceof ValidationError) {
                // Extracting Yup specific validation errors from list of total errors
                const yupErrors = {}
                err.inner.forEach((innerError) => {
                    yupErrors[innerError.path] = innerError.message
                })
                // Saving extracted errors
                setErrors({ exists: true, ...yupErrors })
            }

            ToastAndroid.show('Please enter valid data!', ToastAndroid.SHORT)
            return
        } finally {
            setLoading(false)
        }

        try {
            const { success, data, error } = await registerUser(validatedData)

            if (success) {
                setData(initialState)
                ToastAndroid.show(data.message, ToastAndroid.SHORT)
                router.replace('/signin')
                return
            } else {
                ToastAndroid.show(error.message, ToastAndroid.SHORT)
                setErrors((prev) => ({ ...prev, error: error.message }))
            }
        } catch (error) {
            setErrors(error)
        } finally {
            setLoading(false)
        }
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
                {errors.name && (
                    <ErrorText style="mt-1">{errors.name}</ErrorText>
                )}
            </Label>
            <Label label="Username">
                <InputText
                    placeholder="johndoe123"
                    name="username"
                    onChangeText={onChangeText}
                    value={data.username}
                />
                {errors.username && (
                    <ErrorText style="mt-1">{errors.username}</ErrorText>
                )}
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
                {errors.email && (
                    <ErrorText style="mt-1">{errors.email}</ErrorText>
                )}
            </Label>
            <Label label="Password">
                <InputText
                    placeholder="**********"
                    name="password"
                    secureTextEntry={showPass}
                    onChangeText={onChangeText}
                    value={data.password}
                />
                {errors.password && (
                    <ErrorText style="mt-1">{errors.password}</ErrorText>
                )}
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
                onPress={onSignup}
            >
                {loading ? 'Signing you up...' : 'Signup'}
            </Button>
        </View>
    )
}
