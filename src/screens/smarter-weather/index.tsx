import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

import Forecast from './forecast';
import LocationButton from './location-button';
import textStyles from './styles/typography';

const STORAGE_KEY = '@SmarterWeather:zip';

import PhotoBackdrop from './photo-backdrop';
import {
  fetchLatLonForecast,
  fetchZipForecast,
  ForecastResult,
} from './open-weather-map';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SmarterWeatherScreen = () => {
  const [forecast, setForecast] = useState<ForecastResult>();

  useEffect(() => {
    const loadForecastFromStorage = async () => {
      try {
        const storedZip = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedZip !== null) {
          await getForecastForZip(storedZip);
        }
      } catch (error) {
        console.error(
          'AsyncStorage error: ' +
            (error instanceof Error ? error.message : error),
        );
      }
    };

    loadForecastFromStorage();
  }, []);

  const getForecastForZip = async (zip: string) => {
    try {
      // Store zip code
      await AsyncStorage.setItem(STORAGE_KEY, zip);
      console.log('Saved selection to disk: ' + zip);

      // Fetch forecast
      const forecastData = await fetchZipForecast(zip);
      setForecast(forecastData);
    } catch (error) {
      console.error(
        'AsyncStorage error: ' +
          (error instanceof Error ? error.message : error),
      );
    }
  };

  const getForecastForCoords = async (lat: number, lon: number) => {
    setForecast(await fetchLatLonForecast(lat, lon));
  };

  const handleTextChange = (event: any) => {
    const zip = event.nativeEvent.text;
    getForecastForZip(zip);
  };

  return (
    <PhotoBackdrop>
      <View style={styles.overlay}>
        <View style={styles.row}>
          <Text style={textStyles.mainText}>Forecast for</Text>

          <View style={styles.zipContainer}>
            <TextInput
              style={[textStyles.mainText, styles.zipCode]}
              onSubmitEditing={handleTextChange}
              underlineColorAndroid="transparent"
            />
          </View>
        </View>

        <View style={styles.row}>
          <LocationButton onGetCoords={getForecastForCoords} />
        </View>
        {forecast ? (
          <View style={styles.row}>
            <Forecast main={forecast.main} temp={forecast.temp} />
          </View>
        ) : null}
      </View>
    </PhotoBackdrop>
  );
};

const styles = StyleSheet.create({
  overlay: {backgroundColor: 'rgba(0,0,0,0.1)'},
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  zipContainer: {
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
    width: 80,
    height: textStyles.baseFontSize * 2,
    justifyContent: 'flex-end',
  },
  zipCode: {flex: 1},
});

export default SmarterWeatherScreen;
