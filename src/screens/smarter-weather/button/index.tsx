import React from 'react';

import styles from './style';
import {
  StyleProp,
  Text,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native';

type ButtonProps = {
  label: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({label, style, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[styles.button, style]}>
        <Text>{label}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;
