import {StyleSheet, Text, View, ImageBackground, Button} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Hitter from '../Hitter/Hitter';
import PlayerStats from '../PlayerStats/PlayerStats';
import {Teams} from '../../testRoster';
import {Roster} from '../../types/Roster';
import {doc, setDoc} from 'firebase/firestore/lite';
import {firebaseDB, loadTeams} from '../../firebase/firebase-config';

type Props = {
  navigation: any;
  lineup: Roster[];
  id: string;
  teamName: string;
};

const Field = ({navigation, lineup, teamName, id}: Props) => {
  const newGameRoster = lineup.map(player => {
    return {
      id: player.id,
      playerName: player.playerName,
      singles: 0,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      walks: 0,
      atBats: 0,
      hits: 0,
      outs: 0,
    };
  });

  const [currentBatter, setCurrentBatter] = useState(lineup[0]);
  const [currentGameRoster, setCurrentGameRoster] = useState(newGameRoster);

  const handleCreateNewTeam = async () => {
    const newTeamStats = {
      teamName: teamName,
      roster: [...currentGameRoster],
    };
    try {
      await setDoc(doc(firebaseDB, 'teams', id), newTeamStats);
      console.log('Team stats have been updated succesfully');
      navigation.navigate('GameSummary', {id: id});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../images/baseballpark.jpg')}
          style={styles.image}>
          <Hitter
            currentBatter={currentBatter}
            setCurrentBatter={setCurrentBatter}
            currentGameRoster={currentGameRoster}
            setCurrentGameRoster={setCurrentGameRoster}
          />
        </ImageBackground>
      </View>
      <Button title="End Game" onPress={handleCreateNewTeam} />
      <PlayerStats currentBatter={currentBatter} />
    </>
  );
};

export default Field;

const styles = StyleSheet.create({
  container: {
    height: 500,
    position: 'relative',
  },
  image: {
    flex: 1,
  },
});
