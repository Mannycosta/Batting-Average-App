import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

type Props = {
  currentBatter: any;
};

const PlayerStats = ({currentBatter}: Props) => {
  return (
    <View style={styles.statContainer}>
      <View>
        <Text style={styles.stats}>Singles:{currentBatter.singles}</Text>
        <Text style={styles.stats}>Doubles:{currentBatter.doubles}</Text>
        <Text style={styles.stats}>Triples:{currentBatter.triples}</Text>
        <Text style={styles.stats}>Homeruns:{currentBatter.homeruns}</Text>
      </View>
      <View>
        <Text style={styles.stats}>Outs:{currentBatter.outs}</Text>
        <Text style={styles.stats}>Hits:{currentBatter.hits}</Text>
        <Text style={styles.stats}>At Bats:{currentBatter.atBats}</Text>
        <Text style={styles.stats}>
          Average:{' '}
          {Number.isNaN(currentBatter.hits / currentBatter.atBats)
            ? 0
            : (currentBatter.hits / currentBatter.atBats).toFixed(3)}
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
