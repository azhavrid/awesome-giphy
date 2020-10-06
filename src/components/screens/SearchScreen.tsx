import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'throttle-debounce';
import { isSearchGifsFetchingSelector, searchGifIdsSelector, searchQuerySelector } from '../../redux/search/selectors';
import { fetchSearchGifs } from '../../redux/search/thunk';
import { RootStackParamList, WithStackNavigationProps } from '../../routes/types';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import GifList from '../GifList';
import ScreenWrapper from '../ScreenWrapper';

/* ------------- Props ------------- */
type Props = WithStackNavigationProps<RootStackParamList, 'SearchScreen'>;

/* ------------- Component ------------- */
const SearchScreen: React.FC<Props> = ({}) => {
  const [query, setQuery] = React.useState('');
  const dispatch = useDispatch();

  const searchGifIds = useSelector(searchGifIdsSelector);
  const searchQuery = useSelector(searchQuerySelector);
  const isSearchGifsFetching = useSelector(isSearchGifsFetchingSelector);

  const makeRequest = React.useCallback(
    debounce(1000, (requestQuery: string) => {
      dispatch(fetchSearchGifs(requestQuery));
    }),
    [dispatch],
  );

  const onChangeText = React.useCallback(
    (text: string) => {
      setQuery(text);
      makeRequest(text);
    },
    [makeRequest],
  );

  return (
    <ScreenWrapper>
      <View style={styles.inputContainer}>
        <TextInput
          autoFocus
          value={query}
          onChangeText={onChangeText}
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={colors.lightVariant2}
        />
      </View>
      <GifList
        gifIds={searchGifIds}
        EmptyComponent={
          searchQuery && isSearchGifsFetching && <ActivityIndicator size="large" color={colors.primary} />
        }
        emptyText={searchQuery ? `Nothing found by "${searchQuery}"` : 'Search for your favorite gifs'}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 6,
    margin: 12,
    backgroundColor: colors.dark,
  },
  input: {
    padding: 12,
    color: colors.lightVariant,
    ...typography.body,
  },
});

export default SearchScreen;
