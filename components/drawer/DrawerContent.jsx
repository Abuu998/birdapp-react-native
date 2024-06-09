import { Pressable, View, Text } from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import DrawerProfile from '../profile/DrawerProfile'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'
import colors from 'tailwindcss/colors'
import NumberWithLabel from '../NumberWithLabel'
import ProfileItem from './items/ProfileItem'
import BookmarkItem from './items/BookmarkItem'
import LineSeparator from './LineSeparator'
import Collapsible from '../Collapsible'
import IconText from './IconText'
import SettingsIcon from '../header/SettingsIcon'
import { router } from 'expo-router'
import ThemeModal from '../modal/Modal'
import { useState } from 'react'
import ThemeSwitcher from '../themes/ThemeSwitcher'

export default function CustomDrawerContent(props) {
    const { colorScheme } = useColorScheme()
    const [modalVisible, setModalVisible] = useState(false)
    const { navigation } = props

    return (
        <View className="flex-1 bg-slate-200 dark:bg-slate-900 dark:border-r py-4 dark:border-r-slate-800">
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'space-between',
                }}
            >
                <View>
                    <View className="px-4 mb-5 flex-row items-start justify-between">
                        <DrawerProfile />
                        <Pressable onPress={() => {}}>
                            <Ionicons
                                name="ellipsis-vertical-circle"
                                size={26}
                                color={
                                    colorScheme === 'dark'
                                        ? colors.slate[100]
                                        : colors.slate[950]
                                }
                            />
                        </Pressable>
                    </View>
                    <View className="px-4 flex-row items-center">
                        <NumberWithLabel number={50} label="Followers" />
                        <NumberWithLabel
                            number={100}
                            label="Following"
                            styles="ml-4"
                        />
                    </View>
                    <LineSeparator colorScheme={colorScheme} colors={colors} />
                    <View className="px-4">
                        <ProfileItem />
                        <BookmarkItem />
                    </View>
                    <LineSeparator colorScheme={colorScheme} colors={colors} />
                    <Collapsible label="Settings & Support" styles="px-4">
                        <IconText
                            text="Settings"
                            textStyle="ml-4 text-base"
                            onPress={() => router.navigate('/settings')}
                        >
                            <SettingsIcon />
                        </IconText>
                    </Collapsible>
                </View>
                <View className="px-4 mb-2">
                    <IconText
                        text="Theme"
                        textStyle="ml-4 text-base"
                        onPress={() => {
                            navigation.toggleDrawer()
                            setModalVisible(true)
                        }}
                    >
                        <Ionicons
                            name="color-filter-outline"
                            size={24}
                            color={
                                colorScheme === 'dark'
                                    ? colors.slate[100]
                                    : colors.slate[950]
                            }
                        />
                    </IconText>
                </View>
                <ThemeModal
                    title="Choose Theme"
                    isVisible={modalVisible}
                    onClose={() => setModalVisible(false)}
                >
                    <ThemeSwitcher />
                </ThemeModal>
            </DrawerContentScrollView>
        </View>
    )
}
