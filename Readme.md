# Awesome GIPHY

An awesome application for browsing & searching for your favorite gifs 🎉

## Installation

Application was tested on iOS Simulator (iPhone 11 14.0). Note that on Android some UI elements might differ

To run application follow simple steps:

- `cd` into application folder
- `yarn install`
- `pod install` in `ios` directory
- `yarn ios`

## Technical stack

In this section I will describe core technical choices made in the application

- `redux` has been chosen for state management with `redux-persist` to easily cache local state, as well `reselect` is used to create optimized and efficient selectors.
- As for asynchronous action `redux-thunk` has been chosen instead of `redux-saga` due to lack of complicated asynchronous flows.
- `react-navigation` is used as navigation library.
- `react-native-fast-image` replaces default React Native's `<Image />` component because it has better caching and much more efficient performance in list views.
- `typescript` is used for static checking and because it's just marvelous 🙂

In addition I would love to describe redux store architecture. Data structure is normalized in such a way that gif's data is stored in separate store. In that way it is defined only in 1 place (for trending, favorite and search lists). In that way updating data is much easier and it takes less space because we do not store duplicate data. This structure both helps in application scalability and performance.

As well redux has 100% typescript support, so all reducers "know" exactly what data will they receive with every action.

## Possible improvements

Some feature were left behind, I will list possible improvements below in no particular order

- Pagination for search results
- Cover code with unit tests
- Display thumbnail of the gif while it is still loading. It would give more pleasing experience for users with low internet speed
- Clean cached gifs data from redux that hasn't been used for some time
- Add typescript interfaces for data from GIPHY api

## Other projects

I have an open source React Native application called "Movie Swiper". It's an application for searching for movies with an interesting feature of "tinder-like" cards to browse through movies. The source code is available at [GitHub](https://github.com/azhavrid/movie-swiper)
