import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

type Props = {
  singles: number;
  doubles: number;
  triples: number;
  homeruns: number;
  outs: number;
  totalHits: number;
  atBats: number;
};

const PlayerStats = ({
  singles,
  doubles,
  triples,
  homeruns,
  outs,
  totalHits,
  atBats,
}: Props) => {
  return (
    <View style={styles.statContainer}>
      <View>
        <Text style={styles.stats}>Singles:{singles}</Text>
        <Text style={styles.stats}>Doubles:{doubles}</Text>
        <Text style={styles.stats}>Triples:{triples}</Text>
        <Text style={styles.stats}>Homeruns:{homeruns}</Text>
      </View>
      <View>
        <Text style={styles.stats}>Outs:{outs}</Text>
        <Text style={styles.stats}>Hits:{totalHits}</Text>
        <Text style={styles.stats}>At Bats:{atBats}</Text>
        <Text style={styles.stats}>
          Average: {(totalHits / atBats).toFixed(3)}
        </Text>
      </View>
    </View>
  );
};

export default PlayerStats;

const styles = StyleSheet.create({
  statContainer: {
    height: 300,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#04732f',
    borderTopWidth: 4,
    borderTopColor: '#098235',
  },
  stats: {
    fontFamily: 'Exo2-Italic',
    fontSize: 30,
    marginBottom: 10,
    marginLeft: 20,
    color: 'hsl(142, 87%, 80%)',
  },
});
