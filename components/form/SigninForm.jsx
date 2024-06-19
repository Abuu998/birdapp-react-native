import React, { useState } from 'react'
import { View, ToastAndroid } from 'react-native'
import InputText from './Input'
import Label from './Label'
import Button from '../Button'
import Checkbox from '../Checkbox'
import colors from 'tailwindcss/colors'
import { router } from 'expo-router'
import { signinSchema } from '../../utils/validateForm'
import { ValidationError } from 'yup'
import ErrorText from '../text/ErrorText'
import { loginUser } from '../../utils/fetch'

const initialState = {
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

    const onLogin = async () => {
        setLoading(true)
        setErrors({ exists: false, error: '', ...initialState })
        let validatedData

        try {
            validatedData = await signinSchema.validate(data, {
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
            const { success, data, error } = await loginUser(validatedData)

            if (success) {
                setData(initialState)
                ToastAndroid.show('Login Successful!', ToastAndroid.SHORT)
                console.log(data)
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
            <Label label="Email">
                <InputText
                    placeholder="john.doe@email.com"
                    onChangeText={onChangeText}
                    value={data.email}
                    name="email"
                    type="email"
                    keyboardType="email-address"
                    autoFocus
                />
                {errors.email && (
                    <ErrorText style="mt-1">{errors.email}</ErrorText>
                )}
            </Label>
            <Label label="Password">
                <InputText
                    placeholder="**********"
                    onChangeText={onChangeText}
                    value={data.password}
                    name="password"
                    secureTextEntry={showPass}
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
                onPress={onLogin}
            >
                {loading ? 'Signing you in...' : 'Signin'}
            </Button>
        </View>
    )
}
