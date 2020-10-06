import { Theme } from '@react-navigation/native/lib/typescript/src/types';

import { colors } from './colors';

export const navigationTheme: Theme = {
  dark: true,
  colors: {
    primary: colors.primary,
    background: colors.background,
    notification: colors.primary,
    card: colors.dark,
    text: colors.light,
    border: 'transparent',
  },
};
