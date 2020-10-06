import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../theme/colors';
import AppText from '../../AppText';
import { HomeScreenNavigationProp } from './HomeScreen';

/* ------------- Props ------------- */
type Props = {};

/* ------------- Component ------------- */
const HomeHeaderLeftComponent: React.FC<Props> = ({}) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const onPress = React.useCallback(() => navigation.navigate('FavoriteScreen'), [navigation]);

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AppText bold color={colors.primary}>
        Favorite
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  bold: {
    fontWeight: '600',
  },
});

export default React.memo(HomeHeaderLeftComponent);
