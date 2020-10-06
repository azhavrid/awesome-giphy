import React from 'react';
import { RootStackParamList, WithStackNavigationProps } from '../../../routes/types';
import ScreenWrapper from '../../ScreenWrapper';
import GifList from '../../GifList';
import { useDispatch, useSelector } from 'react-redux';
import {
  isTrendingGifsFetchingSelector,
  isTrendingGifsPaginationFetchingSelector,
  trendingGifIdsSelector,
} from '../../../redux/gifs/selectors';
import { fetchTrendingGifs, fetchTrendingGifsNextPage } from '../../../redux/gifs/thunk';

/* ------------- Props ------------- */
type Props = WithStackNavigationProps<RootStackParamList, 'HomeScreen'>;

export type HomeScreenNavigationProp = Props['navigation'];

/* ------------- Component ------------- */
const HomeScreen: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const favoriteIds = useSelector(trendingGifIdsSelector);
  const isTrendingGifsFetching = useSelector(isTrendingGifsFetchingSelector);
  const isTrendingGifsPaginationFetching = useSelector(isTrendingGifsPaginationFetchingSelector);

  React.useEffect(() => {
    dispatch(fetchTrendingGifs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScreenWrapper>
      <GifList
        gifIds={favoriteIds}
        emptyText="No Trending gifs"
        isFetching={isTrendingGifsFetching}
        refreshAction={fetchTrendingGifs}
        paginationAction={fetchTrendingGifsNextPage}
        isPaginationFetching={isTrendingGifsPaginationFetching}
      />
    </ScreenWrapper>
  );
};

export default HomeScreen;
