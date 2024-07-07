import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
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
  const renderButton = (screen: keyof RootStackParamList) => {
    return (
      <TouchableHighlight onPress={() => navigation.navigate(screen)}>
        <View style={styles.button}>
          <Text style={styles.label}>{`Go to ${screen}`}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      {renderButton('Weather')}
      {renderButton('FlatList')}
      {renderButton('SectionList')}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
  },
  button: {
    backgroundColor: '#4BAAC8',
    padding: 12,
    minWidth: '50%',
  },
  label: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFF',
  },
});
