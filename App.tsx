import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/home';
import WeatherScreen from './src/screens/weather';
import FlatListScreen from './src/screens/list/flat-list';
import SectionListScreen from './src/screens/list/section-list';

export type RootStackParamList = {
  Home: undefined;
  Weather: undefined;
  FlatList: undefined;
  SectionList: undefined;
};

function App(): React.JSX.Element {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="FlatList" component={FlatListScreen} />
        <Stack.Screen name="SectionList" component={SectionListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
