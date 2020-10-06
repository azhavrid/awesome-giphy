import React from 'react';
import { useSelector } from 'react-redux';
import { favoriteGifIdsSelector } from '../../redux/gifs/selectors';
import { RootStackParamList, WithStackNavigationProps } from '../../routes/types';
import GifList from '../GifList';
import ScreenWrapper from '../ScreenWrapper';

/* ------------- Props ------------- */
type Props = WithStackNavigationProps<RootStackParamList, 'FavoriteScreen'>;

/* ------------- Component ------------- */
const FavoriteScreen: React.FC<Props> = ({}) => {
  const favoriteIds = useSelector(favoriteGifIdsSelector);

  return (
    <ScreenWrapper>
      <GifList gifIds={favoriteIds} emptyText="No Favorite gifs yet" />
    </ScreenWrapper>
  );
};

export default FavoriteScreen;
