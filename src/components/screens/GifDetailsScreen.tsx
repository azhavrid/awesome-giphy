import React from 'react';
import { Share, StyleSheet, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';
import { getGifByIdSelector } from '../../redux/data/selectors';
import { setGifFavoriteStatus } from '../../redux/gifs/actions';
import { getGifIsFavoriteSelector } from '../../redux/gifs/selectors';
import { RootStackParamList, WithStackNavigationProps } from '../../routes/types';
import { colors } from '../../theme/colors';
import AppText from '../AppText';
import PrimaryButton from '../PrimaryButton';
import ScreenWrapper from '../ScreenWrapper';

/* ------------- Props ------------- */
type Props = WithStackNavigationProps<RootStackParamList, 'GifDetailsScreen'>;

/* ------------- Component ------------- */
const GifDetailsScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params;

  const disatch = useDispatch();
  const gifSelector = React.useMemo(() => getGifByIdSelector(id), [id]);
  const isFavoriteSelector = React.useMemo(() => getGifIsFavoriteSelector(id), [id]);

  const gif = useSelector(gifSelector);
  const isFavorite = useSelector(isFavoriteSelector);

  const { title, url, sourceUrl } = gif;

  const onLikePress = React.useCallback(() => {
    disatch(setGifFavoriteStatus({ gifId: id, isFavorite: !isFavorite }));
  }, [disatch, id, isFavorite]);

  const onSharePress = React.useCallback(() => {
    Share.share({
      message: `Check out an awesome gif on GIPHY: ${url} !`,
    });
  }, [url]);

  return (
    <ScreenWrapper>
      <View style={styles.content}>
        <AppText type="h1">{title}</AppText>
        <FastImage source={{ uri: sourceUrl }} style={styles.gif} />
        <PrimaryButton text={isFavorite ? 'REMOVE FROM FAVORITES' : 'LIKE'} onPress={onLikePress} />
        <PrimaryButton text="SHARE" onPress={onSharePress} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  content: {
    margin: 12,
  },
  gif: {
    marginVertical: 16,
    height: 250,
    borderRadius: 12,
    backgroundColor: colors.dark,
    width: '100%',
  },
});

export default GifDetailsScreen;
