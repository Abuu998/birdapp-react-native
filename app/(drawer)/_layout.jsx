import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'
import { useColorScheme } from 'nativewind'
import { StatusBar } from 'expo-status-bar'
import DrawerHeader from '../../components/header/DrawerHeader'
import CustomDrawerContent from '../../components/drawer/DrawerContent'

export default function DrawerLayout() {
    const { colorScheme } = useColorScheme()

    return (
        <GestureHandlerRootView>
            <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
            <Drawer
                drawerContent={({ ...props }) => (
                    <CustomDrawerContent {...props} />
                )}
                screenOptions={{
                    header: ({ ...props }) => <DrawerHeader {...props} />,
                }}
            >
                <Drawer.Screen
                    name="(tabs)"
                    options={{
                        drawerLabel: 'Home',
                        title: 'overview',
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}
