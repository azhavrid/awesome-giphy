import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../theme/colors';
import { typography, TypographyKeys } from '../theme/typography';

/* ------------- Props ------------- */
type Props = {
  type?: TypographyKeys;
  color?: string;
  bold?: boolean;
} & Text['props'];

/* ------------- Component ------------- */
const AppText: React.FC<Props> = ({ children, style, color = colors.light, bold = false, type = 'body', ...props }) => (
  <Text style={[{ color }, bold && styles.bold, typography[type], style]} {...props}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    color: colors.light,
  },
  bold: {
    fontWeight: '600',
  },
});

export default AppText;
