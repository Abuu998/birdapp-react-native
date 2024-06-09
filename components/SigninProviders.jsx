import { TouchableOpacity } from 'react-native'
export default function SigninProviders({
    onPress = () => {},
    styles,
    children,
}) {
    return (
        <TouchableOpacity className={`rounded-md ${styles}`} onPress={onPress}>
            {children}
        </TouchableOpacity>
    )
}
