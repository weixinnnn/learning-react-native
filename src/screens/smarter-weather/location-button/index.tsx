import React from 'react';

import {Alert} from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import Button from '../button';
import styles from './style';

type LocationButtonProps = {
  onGetCoords: (latitude: number, longitude: number) => void;
};

const LocationButton: React.FC<LocationButtonProps> = ({onGetCoords}) => {
  const handlePress = () => {
    Geolocation.getCurrentPosition(
      initialPosition => {
        onGetCoords(
          initialPosition.coords.latitude,
          initialPosition.coords.longitude,
        );
      },
      error => {
        Alert.alert(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  };

  return (
    <Button
      label="Use Current Location"
      style={styles.button}
      onPress={handlePress}
    />
  );
};

export default LocationButton;
