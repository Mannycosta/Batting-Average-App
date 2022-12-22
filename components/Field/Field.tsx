import {StyleSheet, Text, View, ImageBackground, Button} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Hitter from '../Hitter/Hitter';
import PlayerStats from '../PlayerStats/PlayerStats';
import {Teams} from '../../testRoster';
import {Player, Roster} from '../../types/Roster';
import {doc, setDoc} from 'firebase/firestore/lite';
import {firebaseDB, loadTeams} from '../../firebase/firebase-config';

type Props = {
  navigation: any;
  lineup: Roster;
  id: string;
  teamName: string;
  roster: Roster;
  statPageCurrentBatter: Player;
  setStatPageCurrentBatter: Function;
  statPageCurrentGameRoster: Roster;
  setStatPageCurrentGameRoster: Function;
};

const Field = ({
  navigation,
  lineup,
  teamName,
  id,
  roster,
  statPageCurrentBatter,
  setStatPageCurrentBatter,
  statPageCurrentGameRoster,
  setStatPageCurrentGameRoster,
}: Props) => {
  const nonActivePlayers = roster.filter(players => {
    return lineup.every(activePlayer => {
      return players.id !== activePlayer.id;
    });
  });

  const [currentBatter, setCurrentBatter] = useState(lineup[0]);
  const [currentGameRoster, setCurrentGameRoster] = useState(lineup);

  const handleUpdateStats = async () => {
    const newTeamStats = {
      teamName: teamName,
      roster: [...nonActivePlayers, ...currentGameRoster],
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
            statPageCurrentGameRoster={statPageCurrentGameRoster}
            setStatPageCurrentGameRoster={setStatPageCurrentGameRoster}
            statPageCurrentBatter={statPageCurrentBatter}
            setStatPageCurrentBatter={setStatPageCurrentBatter}
          />
        </ImageBackground>
      </View>
      <Button title="End Game" onPress={handleUpdateStats} />
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
