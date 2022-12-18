import {StyleSheet, Text, View, ImageBackground, Button} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Hitter from '../Hitter/Hitter';
import PlayerStats from '../PlayerStats/PlayerStats';
import {Teams} from '../../testRoster';
import {Roster} from '../../types/Roster';

type Props = {
  navigation: any;
  roster: Roster[];
};

const Field = ({navigation, roster}: Props) => {
  const [singles, setSingles] = useState(0);
  const [doubles, setDoubles] = useState(0);
  const [triples, setTriples] = useState(0);
  const [homeruns, setHomeruns] = useState(0);
  const [outs, setOuts] = useState(0);
  const [totalHits, setTotalHits] = useState(0);
  const [atBats, setAtBats] = useState(0);

  const [lineupCount, setLineupCount] = useState<number>(0);
  const [currentBatter, setCurrentBatter] = useState(roster[lineupCount]);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../images/baseballpark.jpg')}
          style={styles.image}>
          <Hitter
            setSingles={setSingles}
            setDoubles={setDoubles}
            setTriples={setTriples}
            setHomeruns={setHomeruns}
            setOuts={setOuts}
            setTotalHits={setTotalHits}
            setAtBats={setAtBats}
            currentBatter={currentBatter}
            setCurrentBatter={setCurrentBatter}
            roster={roster}
            setLineupCount={setLineupCount}
            lineupCount={lineupCount}
          />
        </ImageBackground>
      </View>
      <Button
        title="End Game"
        onPress={() => {
          navigation.navigate('GameSummary');
        }}
      />
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
