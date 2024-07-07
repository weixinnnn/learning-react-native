import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const MondrianScreen = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.topBlock}>
        <View style={styles.leftCol}>
          <View style={[styles.base, styles.cellOne]} />
          <View style={[styles.base, styles.cellTwo]} />
        </View>
        <View style={[styles.base, styles.cellThree]} />
      </View>
      <View style={styles.bottomBlock}>
        <View style={[styles.base, styles.cellFour]} />
        <View style={[styles.base, styles.cellFive]} />
        <View style={styles.bottomRight}>
          <View style={[styles.base, styles.cellSix]} />
          <View style={[styles.base, styles.cellSeven]} />
        </View>
      </View>
    </View>
  );
};

export default MondrianScreen;
