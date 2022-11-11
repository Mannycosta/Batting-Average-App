import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import Hitter from '../Hitter/Hitter';
import PlayerStats from '../PlayerStats/PlayerStats';

type Props = {};

const Field = (props: Props) => {
  const [singles, setSingles] = useState(0);
  const [doubles, setDoubles] = useState(0);
  const [triples, setTriples] = useState(0);
  const [homeruns, setHomeruns] = useState(0);
  const [outs, setOuts] = useState(0);
  const [totalHits, setTotalHits] = useState(0);
  const [atBats, setAtBats] = useState(0);
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
          />
        </ImageBackground>
      </View>
      <PlayerStats
        singles={singles}
        doubles={doubles}
        triples={triples}
        homeruns={homeruns}
        outs={outs}
        totalHits={totalHits}
        atBats={atBats}
      />
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
