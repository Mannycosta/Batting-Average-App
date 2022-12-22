import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Player, Roster} from '../../types/Roster';
import {ScrollView} from 'native-base';

type Props = {
  statPageCurrentGameRoster: Roster;
};

const CurrentGameStats = ({statPageCurrentGameRoster}: Props) => {
  const displayStats = statPageCurrentGameRoster.map(player => {
    return (
      <>
        <Text>{player.playerName}</Text>
        <Text>singles: {player.singles}</Text>
        <Text>doubles: {player.doubles}</Text>
        <Text>triples: {player.triples}</Text>
        <Text>homeruns: {player.homeruns}</Text>
        <Text>hits: {player.hits}</Text>
        <Text>outs: {player.outs}</Text>
        <Text>atBats: {player.atBats}</Text>
      </>
    );
  });
  return (
    <ScrollView>
      <Text>CurrentGameStats</Text>
      {displayStats.length > 0 ? displayStats : null}
    </ScrollView>
  );
};

export default CurrentGameStats;

const styles = StyleSheet.create({});
