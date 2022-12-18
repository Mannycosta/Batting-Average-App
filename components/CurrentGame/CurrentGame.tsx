import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CurrentGameStats from '../CurrentGame/CurrentGameStats';
import Field from '../Field/Field';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

type Props = {
  route: any;
};

const CurrentGame = ({route}: Props) => {
  const Tab = createBottomTabNavigator();
  const {roster} = route.params;
  return (
    <Tab.Navigator>
      <Tab.Screen name="Field">
        {props => <Field {...props} roster={roster} />}
      </Tab.Screen>
      <Tab.Screen name="Current Game Stats" component={CurrentGameStats} />
    </Tab.Navigator>
  );
};

export default CurrentGame;

const styles = StyleSheet.create({});
