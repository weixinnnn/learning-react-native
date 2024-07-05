import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ForecastResult} from './open-weather-map';

type ForecastProps = ForecastResult;

const Forecast: React.FC<ForecastProps> = ({main, description, temp}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>{main}</Text>
      <Text style={styles.mainText}>Current conditions: {description}</Text>
      <Text style={styles.bigText}>{temp}°F</Text>
    </View>
  );
};

export default Forecast;

const styles = StyleSheet.create({
  container: {
    height: 130,
  },
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
