import { Tabs } from 'expo-router'
import { Octicons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'
import { Colors } from '@/constants/Colors'

export default function Layout() {
    const { colorScheme } = useColorScheme()

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 14,
                },
                tabBarIconStyle: {
                    backgroundColor: Colors[colorScheme]?.icon,
                },
                tabBarActiveTintColor: Colors[colorScheme]?.iconActive,
                tabBarInactiveTintColor: Colors[colorScheme]?.iconInactive,
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme]?.background,
                    borderColor: Colors[colorScheme]?.border,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ focused, size, color }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ focused, size, color }) => (
                        <Ionicons
                            name={focused ? 'search' : 'search-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    title: 'Notifications',
                    tabBarIcon: ({ focused, size, color }) => (
                        <Octicons
                            name={focused ? 'bell-fill' : 'bell'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="messages"
                options={{
                    title: 'Messages',
                    tabBarIcon: ({ focused, size, color }) => (
                        <Ionicons
                            name={focused ? 'mail' : 'mail-outline'}
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}
