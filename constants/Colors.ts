/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
import colors from 'tailwindcss/colors';

const tintColorLight = colors.emerald[600];
const tintColorDark = colors.slate[100];

export const Colors = {
  light: {
    text: colors.slate[950],
    background: colors.slate[200],
    tint: tintColorLight,
    border: colors.white,
    icon: colors.emerald[800],
    iconActive: colors.slate[950],
    iconInactive: colors.slate[400],
    placeholder: colors.gray[600],
  },
  dark: {
    text: colors.slate[100],
    background: colors.slate[900],
    tint: tintColorDark,
    border: colors.slate[700],
    icon: colors.emerald[600],
    iconActive: colors.slate[100],
    iconInactive: colors.slate[500],
    placeholder: colors.slate[600],
  },
};
