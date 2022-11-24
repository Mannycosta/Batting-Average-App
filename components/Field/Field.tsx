import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import Hitter from '../Hitter/Hitter';
import PlayerStats from '../PlayerStats/PlayerStats';
import {Teams} from '../../testRoster';

type Props = {};

const Field = (props: Props) => {
  const [singles, setSingles] = useState(0);
  const [doubles, setDoubles] = useState(0);
  const [triples, setTriples] = useState(0);
  const [homeruns, setHomeruns] = useState(0);
  const [outs, setOuts] = useState(0);
  const [totalHits, setTotalHits] = useState(0);
  const [atBats, setAtBats] = useState(0);

  let lineup = [
    {
      _id: 123,
      name: 'Manny',
      singles: 0,
      doubles: 0,
      triples: 0,
      homeruns: 0,
      walks: 0,
      atBats: 0,
      hits: 0,
      outs: 0,
    },
    // {
    //   _id: 1234,
    //   name: 'Manol',
    //   singles: 0,
    //   doubles: 0,
    //   triples: 0,
    //   homeruns: 0,
    //   walks: 0,
    //   atBats: 0,
    //   hits: 0,
    //   outs: 0,
    // },
  ];

  const [currentBatter, setCurrentBatter] = useState(lineup[0]);

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
          />
        </ImageBackground>
      </View>
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
