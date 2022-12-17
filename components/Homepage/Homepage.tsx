import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Team} from '../../types/Team';

type Props = {
  navigation: any;
  teams?: any;
};

const Homepage = ({navigation, teams}: Props) => {
  let listOfTeams = '';
  if (teams.length) {
    listOfTeams = teams.map((team: Team) => {
      return (
        <Button
          title={team.teamName}
          onPress={() => {
            navigation.navigate('TeamPage', {...team});
          }}
        />
      );
    });
  }
  return (
    <View>
      {teams.length && listOfTeams}
      <Button
        title="Create New Team!"
        onPress={() => {
          navigation.navigate('CreateNewTeam');
        }}
      />
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
