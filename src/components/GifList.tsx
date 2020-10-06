import React from 'react';
import { ActivityIndicator, FlatList, RefreshControl, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from '../theme/colors';
import AppText from './AppText';
import GifPreview from './GifPreview';

/* ------------- Props ------------- */
type Props = {
  gifIds: string[];
  emptyText?: string;
  EmptyComponent?: JSX.Element;
  isFetching?: boolean;
  refreshAction?: () => Function;
  isPaginationFetching?: boolean;
  paginationAction?: () => Function;
};

const keyExtractor = (gifId: string) => gifId;

const renderGif = ({ item }: { item: string }) => <GifPreview gifId={item} />;

/* ------------- Component ------------- */
const GifList: React.FC<Props> = ({
  gifIds,
  emptyText,
  EmptyComponent,
  isFetching,
  refreshAction,
  paginationAction,
  isPaginationFetching,
  ...props
}) => {
  const dispatch = useDispatch();
  const onRefresh = React.useCallback(() => dispatch(refreshAction()), [dispatch, refreshAction]);
  const onEndReached = React.useCallback(() => dispatch(paginationAction()), [dispatch, paginationAction]);

  return (
    <FlatList
      data={gifIds}
      keyExtractor={keyExtractor}
      renderItem={renderGif}
      refreshControl={
        refreshAction && <RefreshControl refreshing={isFetching} onRefresh={onRefresh} tintColor={colors.primary} />
      }
      onEndReached={paginationAction && onEndReached}
      ListEmptyComponent={
        EmptyComponent || (
          <AppText type="title" style={styles.emptyLabel}>
            {emptyText}
          </AppText>
        )
      }
      ListFooterComponent={isPaginationFetching && <ActivityIndicator size="large" color={colors.primary} />}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  emptyLabel: {
    alignSelf: 'center',
    marginVertical: 28,
  },
});

export default React.memo(GifList);
