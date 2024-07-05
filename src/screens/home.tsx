import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack/types';
import {RootStackParamList} from '../../App';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Screen 1"
        // onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  },
});
