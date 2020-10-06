import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import { getGifByIdSelector } from '../redux/data/selectors';
import { colors } from '../theme/colors';
import AppText from './AppText';
import { HomeScreenNavigationProp } from './screens/home/HomeScreen';

/* ------------- Props ------------- */
type Props = {
  gifId: string;
};

const gradientColors = ['#00000000', '#000000bb'];

/* ------------- Component ------------- */
const GifPreview: React.FC<Props> = ({ gifId }) => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const gifSelector = React.useMemo(() => getGifByIdSelector(gifId), [gifId]);
  const gif = useSelector(gifSelector);

  const { id, title, sourceUrl } = gif;

  const onPreviewPress = React.useCallback(() => navigation.navigate('GifDetailsScreen', { id }), [id, navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity containerStyle={styles.touchable} onPress={onPreviewPress}>
        <View style={styles.contentContainer}>
          <View style={styles.card}>
            <FastImage source={{ uri: sourceUrl }} style={styles.gif} />
            <LinearGradient colors={gradientColors} style={styles.linearGradient} />
            <AppText style={styles.label} numberOfLines={1} type="title">
              {title}
            </AppText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    width: '100%',
  },
  contentContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    overflow: 'hidden',
    borderRadius: 12,
    width: '90%',
  },
  gif: {
    height: 220,
    width: '100%',
    backgroundColor: colors.dark,
  },
  label: {
    opacity: 0.9,
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 6,
  },
  linearGradient: {
    height: 100,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default React.memo(GifPreview);
