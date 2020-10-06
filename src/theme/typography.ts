import { StyleSheet } from 'react-native';

export type TypographyKeys = keyof typeof typography;

export const typography = StyleSheet.create({
  h1: {
    fontSize: 26,
  },
  title: {
    fontSize: 18,
  },
  body: {
    fontSize: 16,
  },
  sub: {
    fontSize: 12,
  },
});
