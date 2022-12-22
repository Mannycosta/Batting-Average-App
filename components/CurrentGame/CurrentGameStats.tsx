import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Player, Roster} from '../../types/Roster';

type Props = {
  statPageCurrentBatter: Player;
  statPageCurrentGameRoster: Roster;
};

const CurrentGameStats = ({
  statPageCurrentBatter,
  statPageCurrentGameRoster,
}: Props) => {
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
    <View>
      <Text>CurrentGameStats</Text>
      {displayStats.length > 0 ? displayStats : null}
    </View>
  );
};

export default CurrentGameStats;

const styles = StyleSheet.create({});
