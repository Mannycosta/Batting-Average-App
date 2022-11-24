import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type Props = {
  navigation: any;
};

const CreateNewTeam = ({navigation}: Props) => {
  return (
    <View>
      <Text>CreateNewTeam</Text>
      <Button
        title="Create Team"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default CreateNewTeam;

const styles = StyleSheet.create({});
