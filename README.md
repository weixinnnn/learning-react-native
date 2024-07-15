# learning-react-native

This mobile app combines all projects from the book *Learning React Native - Building Native Mobile Apps with JavaScript* into a single application. The homepage features navigation buttons to access each individual project, providing a comprehensive and interactive learning experience.

## Enhancements
TypeScript and functional components are implemented for a modern approach.

## Code Fixes
### Weather
* The `<Image>` component has been replaced with the `<ImageBackground />` component because the `<Image>` component cannot have children.
### List (FlatList / SectionList)
* NYTimes API key provided in the example is no longer valid. You'll need to register your own key on [NYTimes Developer](https://developer.nytimes.com/get-started).
### SmarterWeather
#### SmarterWeather
* Replaced deprecated `AsyncStorage` with the community package `@react-native-async-storage/async-storage`.
#### LocationButton
* Global `alert` does not exist in react-native context. Fixed with `Alert.alert`.
* Replaced deprecated `Geolocation` with the community package `@react-native-community/geolocation`.
* Cleaned up styling usage.
#### PhotoBackdrop
* Replaced deprecated `CameraRoll` with the community package `@react-native-camera-roll/camera-roll`.
* Added request for read media permissions and handled fallback to show PhotoBackdropLocalImage if permissions are not granted or no media is available.
#### PhotoBackdrop / PhotoBackdropLocalImage
* Replaced `<Image>` component with `<ImageBackground>`, as mentioned.
#### styles/typography.ts
* Refactored to satisfy TypeScript.


