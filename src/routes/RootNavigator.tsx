import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import FavoriteScreen from '../components/screens/FavoriteScreen';
import GifDetailsScreen from '../components/screens/GifDetailsScreen';
import HomeHeaderLeftComponent from '../components/screens/home/HomeHeaderLeftComponent';
import HomeHeaderRightComponent from '../components/screens/home/HomeHeaderRightComponent';
import HomeScreen from '../components/screens/home/HomeScreen';
import SearchScreen from '../components/screens/SearchScreen';
import { navigationTheme } from '../theme/navigationTheme';
import { RootStackParamList } from './types';

const rootStackNavigationOptions: StackNavigationOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const homeOptions: StackNavigationOptions = {
  title: 'Home',
  headerLeft: () => <HomeHeaderLeftComponent />,
  headerRight: () => <HomeHeaderRightComponent />,
};
const searchOptions: StackNavigationOptions = { title: 'Search' };
const favoriteOptions: StackNavigationOptions = { title: 'Favorites' };
const detailsOptions: StackNavigationOptions = { title: 'Details' };

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => (
  <NavigationContainer theme={navigationTheme}>
    <RootStack.Navigator screenOptions={rootStackNavigationOptions}>
      <RootStack.Screen name="HomeScreen" component={HomeScreen} options={homeOptions} />
      <RootStack.Screen name="SearchScreen" component={SearchScreen} options={searchOptions} />
      <RootStack.Screen name="FavoriteScreen" component={FavoriteScreen} options={favoriteOptions} />
      <RootStack.Screen name="GifDetailsScreen" component={GifDetailsScreen} options={detailsOptions} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
