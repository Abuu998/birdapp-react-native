import {
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignupForm from '../components/form/SignupForm'
import BirdLogo from '../components/logo/BirdLogo'

export default function SignUp() {
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ScrollView className="flex-1 bg-slate-200 dark:bg-slate-900">
                <SafeAreaView className="py-8 px-4">
                    <BirdLogo marginBottom="mb-10" />
                    <Text className="mb-6 text-2xl italic text-slate-950 dark:text-slate-100">
                        Join today.
                    </Text>
                    <SignupForm />

                    <Text className="text-slate-950 dark:text-slate-100 text-sm mb-1 mt-12">
                        Have an account?
                    </Text>
                    <Link
                        href="/signin"
                        className="py-2 px-4 text-base rounded-md font-semibold text-slate-950 dark:text-slate-100 border border-slate-950 dark:border-slate-100 text-center"
                    >
                        Signin
                    </Link>
                </SafeAreaView>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}
