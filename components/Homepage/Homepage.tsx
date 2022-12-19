import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Team} from '../../types/Team';
import {firebaseDB, loadTeams} from '../../firebase/firebase-config';
import {DocumentData} from 'firebase/firestore/lite';

type Props = {
  navigation: any;
  teams: Team[] | DocumentData;
  setTeams: Function;
};

const Homepage = ({navigation, teams, setTeams}: Props) => {
  let listOfTeams;
  if (teams.length) {
    listOfTeams = teams.map((team: Team, i: number) => {
      return (
        <Button
          title={team.teamName}
          key={i}
          onPress={() => {
            navigation.navigate('TeamPage', {...team});
          }}
        />
      );
    });
  }
  return (
    <View>
      {teams.length ? listOfTeams : null}
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
