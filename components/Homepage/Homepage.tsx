import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type Props = {
  navigation: any;
};

const Homepage = ({navigation}: Props) => {
  return (
    <View>
      <Text>Homepage</Text>
      <Button
        title="Team Page"
        onPress={() => {
          navigation.navigate('Team Page');
        }}
      />
      <Button
        title="Create New Team!"
        onPress={() => {
          navigation.navigate('Create New Team');
        }}
      />
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
