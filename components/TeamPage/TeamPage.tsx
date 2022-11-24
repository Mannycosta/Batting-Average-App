import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type Props = {
  navigation: any;
};

const TeamPage = ({navigation}: Props) => {
  return (
    <View>
      <Text>TeamPage</Text>
      <Button
        title="Start Game"
        onPress={() => {
          navigation.navigate('Start Game');
        }}
      />
    </View>
  );
};

export default TeamPage;

const styles = StyleSheet.create({});
