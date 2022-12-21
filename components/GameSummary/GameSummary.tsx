import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import {firebaseDB, loadTeams} from '../../firebase/firebase-config';
import {DocumentData} from 'firebase/firestore/lite';
import {Team} from '../../types/Team';

type Props = {
  navigation: any;
  route: any;
  setTeams: Function;
  teams: Team[] | DocumentData;
};

const GameSummary = ({navigation, setTeams, teams, route}: Props) => {
  useEffect(() => {
    loadTeams(firebaseDB, setTeams);
  }, []);

  const {id} = route.params;

  const activeTeam = teams.filter((team: Team) => {
    return team.id === id;
  });

  console.log(activeTeam);

  return (
    <View>
      <Text>GameSummary</Text>
      <Button
        title="Back to Team Page"
        onPress={() => {
          navigation.navigate('TeamPage', {...activeTeam[0]});
        }}
      />
    </View>
  );
};

export default GameSummary;

const styles = StyleSheet.create({});
