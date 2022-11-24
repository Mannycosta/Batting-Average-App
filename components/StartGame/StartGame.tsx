import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type Props = {
  navigation: any;
};
const StartGame = ({navigation}: Props) => {
  return (
    <View>
      <Text>StartGame</Text>
      <Button
        title="Current Game"
        onPress={() => {
          navigation.navigate('Current Game');
        }}
      />
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({});
