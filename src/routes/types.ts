import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';

/* ------------- Params ------------- */
export type RootStackParamList = {
  HomeScreen: undefined;
  GifDetailsScreen: { id: string };
  SearchScreen: undefined;
  FavoriteScreen: undefined;
};

/* ------------- Types ------------- */
export interface WithStackNavigationProps<Params extends RootStackParamList, RouteName extends keyof Params> {
  navigation: StackNavigationProp<Params, RouteName>;
  route: RouteProp<Params, RouteName>;
}
