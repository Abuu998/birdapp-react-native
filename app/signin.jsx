import {
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import SigninForm from '../components/form/SigninForm'
import FormSeparator from '../components/form/Separator'
import { Ionicons } from '@expo/vector-icons'
import SigninProviders from '../components/SigninProviders'
import colors from 'tailwindcss/colors'
import BirdLogo from '../components/logo/BirdLogo'

export default function SignIn() {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView className="flex-1 bg-slate-200 dark:bg-slate-900">
                <SafeAreaView className="py-8 px-4">
                    <BirdLogo marginBottom="mb-10" />
                    <Text className="mb-6 text-2xl italic text-slate-950 dark:text-slate-100">
                        Start Connecting today.
                    </Text>
                    <SigninForm />
                    <FormSeparator label="or" />
                    <SigninProviders
                        onPress={() => {}}
                        styles="py-2 px-4 rounded-md bg-white mt-2 flex-row items-center justify-center"
                    >
                        <Ionicons
                            name="logo-google"
                            size={24}
                            color={colors.amber[500]}
                        />
                        <Text className="text-lg font-semibold ml-4 text-slate-950">
                            Signin with Google
                        </Text>
                    </SigninProviders>
                    <SigninProviders
                        onPress={() => {}}
                        styles="py-2 px-4 rounded-md bg-slate-950 mt-4 flex-row items-center justify-center"
                    >
                        <Ionicons
                            name="logo-github"
                            size={24}
                            color={colors.white}
                        />
                        <Text className="text-lg font-semibold ml-4 text-white">
                            Signin with Github
                        </Text>
                    </SigninProviders>

                    <Text className="text-slate-950 dark:text-slate-100 text-sm mb-1 mt-12">
                        Don't have an account?
                    </Text>
                    <Link
                        href="/signup"
                        className="py-2 px-4 text-base rounded-md font-semibold text-slate-950 dark:text-slate-100 border border-slate-950 dark:border-slate-100 text-center"
                    >
                        Signup
                    </Link>
                </SafeAreaView>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}
