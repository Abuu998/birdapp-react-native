import { View } from 'react-native'
import HeaderProfile from '../profile/HeaderProfile'
import BirdLogo from '../logo/BirdLogo'
import SettingsIcon from './SettingsIcon'

export default function DrawerHeader({ navigation }) {
    return (
        <View className="flex-row items-center justify-between px-4 bg-slate-200 dark:bg-slate-900 border-b border-b-white dark:border-b-slate-700 pt-11 pb-3">
            <HeaderProfile onPress={() => navigation.toggleDrawer()} />
            <BirdLogo fontSize="text-2xl" />
            <SettingsIcon />
        </View>
    )
}
