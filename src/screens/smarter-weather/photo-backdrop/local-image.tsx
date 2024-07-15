import React from 'react';

import {ImageBackground} from 'react-native';

import styles from './style';

type PhotoBackdropProps = {
  children: React.ReactNode;
};

const PhotoBackdropLocalImage: React.FC<PhotoBackdropProps> = ({children}) => {
  return (
    <ImageBackground
      style={styles.backdrop}
      source={require('./flowers.png')}
      resizeMode="cover">
      {children}
    </ImageBackground>
  );
};

export default PhotoBackdropLocalImage;
