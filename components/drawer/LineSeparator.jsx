import { View } from 'react-native'
import { Separator } from 'react-native-btr'

export default function LineSeparator({ colorScheme, colors }) {
    return (
        <View className="px-4 py-3">
            <Separator
                color={
                    colorScheme === 'dark'
                        ? colors.slate[700]
                        : colors.gray[500]
                }
            />
        </View>
    )
}
