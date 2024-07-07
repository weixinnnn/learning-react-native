import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/home';
import WeatherScreen from './src/screens/weather';
import FlatListScreen from './src/screens/flat-list';

export type RootStackParamList = {
  Home: undefined;
  Weather: undefined;
  FlatList: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
