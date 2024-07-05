import React, {useState} from 'react';
import {
  ImageBackground,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from 'react-native';
import {fetchForecast, ForecastResult} from './open-weather-map';
import Forecast from './forecast';

const WeatherScreen = () => {
  const [forecast, setForecast] = useState<ForecastResult>();

  const handleTextChange = async (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    let zip = e.nativeEvent.text;
    const forecastResult = await fetchForecast(zip);
    setForecast(forecastResult);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./flowers.png')}
        resizeMode="cover"
        style={styles.backdrop}>
        <View style={styles.overlay}>
          <View style={styles.row}>
            <Text style={styles.text}>Current weather for</Text>
            <TextInput
              style={[styles.text, styles.zip]}
              underlineColorAndroid="transparent"
              onSubmitEditing={handleTextChange}
            />
          </View>
          {forecast ? (
            <Forecast
              main={forecast.main}
              description={forecast.description}
              temp={forecast.temp}
            />
          ) : null}
        </View>
      </ImageBackground>
    </View>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
  },
  overlay: {
    paddingTop: 5,
    backgroundColor: '#000000',
    opacity: 0.5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    gap: 8,
  },
  zip: {
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    padding: 0,
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});
