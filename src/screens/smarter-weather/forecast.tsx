import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ForecastResult} from './open-weather-map';

type ForecastProps = Pick<ForecastResult, 'main' | 'temp'>;

const Forecast: React.FC<ForecastProps> = ({main, temp}) => {
  return (
    <View style={styles.forecast}>
      <Text style={styles.temp}>{temp}°F</Text>
      <Text style={styles.main}>{main}</Text>
    </View>
  );
};

export default Forecast;

const styles = StyleSheet.create({
  forecast: {
    alignItems: 'center',
  },
  temp: {
    fontSize: 72,
    color: '#FFFFFF',
  },
  main: {
    fontSize: 32,
    color: '#FFFFFF',
  },
});
