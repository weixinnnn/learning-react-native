# learning-react-native

This mobile app combines all projects from the book *Learning React Native - Building Native Mobile Apps with JavaScript* into a single application. The homepage features navigation buttons to access each individual project, providing a comprehensive and interactive learning experience.

## Enhancements
TypeScript and functional components are implemented for a modern approach.

## Code Fixes
### Weather
* The `<Image>` component has been replaced with the `<ImageBackground />` component because the `<Image>` component cannot have children.
### FlatList
* NYTimes API key provided in the example is no longer valid. You'll need to register your own key on [NYTimes Developer](https://developer.nytimes.com/get-started).
* Remove `fetchBooks` redundant function param.
