import {StyleSheet} from 'react-native';

const baseFontSize = 24;

const styles = {
  baseFontSize,
  ...StyleSheet.create({
    bigText: {fontSize: baseFontSize + 8, color: '#FFFFFF'},
    mainText: {fontSize: baseFontSize, color: '#FFFFFF'},
  }),
};

export default styles;
