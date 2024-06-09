import { Text } from 'react-native'

export default function BirdLogo({ fontSize = 'text-4xl', marginBottom }) {
    return (
        <Text
            style={{ fontFamily: 'Nunito' }}
            className={`font-semibold italic text-slate-900 dark:text-slate-100 -tracking-widest ${fontSize} ${marginBottom}`}
        >
            .Bird
        </Text>
    )
}
