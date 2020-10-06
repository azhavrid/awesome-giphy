import React from 'react';
import { StyleSheet, TouchableOpacityProps, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../theme/colors';
import AppText from './AppText';

/* ------------- Props ------------- */
type Props = {
  text?: string;
} & TouchableOpacityProps;

/* ------------- Component ------------- */
const PrimaryButton: React.FC<Props> = ({ text, style, ...props }) => (
  <TouchableOpacity {...props}>
    <View style={[styles.button, style]}>
      <View style={styles.content}>
        <AppText type="title" bold color={colors.background} numberOfLines={1}>
          {text}
        </AppText>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: 56,
    backgroundColor: colors.primary,
    borderRadius: 999,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default React.memo(PrimaryButton);
