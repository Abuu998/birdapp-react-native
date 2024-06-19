import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { View, Text, Modal, Pressable } from 'react-native'

export default function CustomModal({
    isVisible = false,
    title = 'Modal Title',
    children,
    onClose = () => {},
}) {
    const { colorScheme: theme } = useColorScheme()

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
            <View className="flex-1 items-center bg-slate-300 dark:bg-slate-800 h-1/3 w-full absolute bottom-0 rounded-t-2xl">
                <View className="items-center rounded-t-xl w-full overflow-hidden">
                    <View className="px-4 py-1 items-center w-full bg-slate-400 dark:bg-slate-700 border-b border-b-slate-300 dark:border-b-slate-600">
                        <Pressable
                            onPress={onClose}
                            className="w-16 h-1 rounded-full bg-slate-100 py-1"
                        ></Pressable>
                    </View>
                    <View className="w-full px-4 py-1 pb-2 bg-slate-400 dark:bg-slate-700">
                        <Text className="text-slate-800 dark:text-slate-100 text-base self-start font-semibold">
                            {title}
                        </Text>
                    </View>
                </View>
                <View className="px-4 self-start">{children}</View>
            </View>
        </Modal>
    )
}
