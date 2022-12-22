import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CurrentGameStats from '../CurrentGame/CurrentGameStats';
import Field from '../Field/Field';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Player, Roster} from '../../types/Roster';

type Props = {
  route: any;
};

const CurrentGame = ({route}: Props) => {
  const Tab = createBottomTabNavigator();
  const {id, teamName, lineup, roster} = route.params;
  const newGameRoster = lineup.map((player: Player) => {
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
  const [statPageCurrentBatter, setStatPageCurrentBatter] = useState(
    newGameRoster[0],
  );
  const [statPageCurrentGameRoster, setStatPageCurrentGameRoster] =
    useState(newGameRoster);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Field">
        {props => (
          <Field
            {...props}
            roster={roster}
            lineup={lineup}
            id={id}
            teamName={teamName}
            statPageCurrentGameRoster={statPageCurrentGameRoster}
            setStatPageCurrentGameRoster={setStatPageCurrentGameRoster}
            statPageCurrentBatter={statPageCurrentBatter}
            setStatPageCurrentBatter={setStatPageCurrentBatter}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Current Game Stats" component={CurrentGameStats} />
    </Tab.Navigator>
  );
};

export default CurrentGame;

const styles = StyleSheet.create({});
