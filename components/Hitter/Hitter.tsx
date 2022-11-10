import {StyleSheet, Text, View, Button, Image} from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import React from 'react';
import Homeplate from '../Homplate/Homeplate';
import NoHit from '../NoHit/NoHit';

type Props = {};

const Hitter = (props: Props) => {
  return (
    <View style={styles.fieldContainer}>
      <View style={styles.playerContainer}>
        <View style={styles.nameTag}>
          <Text style={styles.playerName}>Player Name</Text>
        </View>
      </View>
      <View style={styles.scoreBoardContainer}>
        <View style={styles.scoreBoard}>
          <Text style={styles.hitType}>Homerun!</Text>
        </View>
      </View>
      <View style={styles.basesContainer}>
        <View style={[styles.btnContainer, styles.shadowProp]}>
          <AwesomeButton
            style={[styles.btn, styles.shadowProp]}
            textColor="black"
            backgroundColor="white"
            raiseLevel={0}
            width={30}
            height={30}>
            <Text>Double</Text>
          </AwesomeButton>
        </View>
        <View style={[styles.btnContainer, styles.shadowProp, styles.endBases]}>
          <AwesomeButton
            style={[styles.btn, styles.shadowProp]}
            textColor="black"
            backgroundColor="white"
            raiseLevel={0}
            width={30}
            height={30}>
            <Text>Triple</Text>
          </AwesomeButton>
          <AwesomeButton
            style={[styles.btn, styles.shadowProp]}
            textColor="black"
            backgroundColor="white"
            raiseLevel={0}
            width={30}
            height={30}>
            <Text>Single</Text>
          </AwesomeButton>
        </View>
        <View style={[styles.btnContainer, styles.shadowProp]}>
          <Homeplate />
        </View>
        <View>
          <NoHit />
        </View>
      </View>
    </View>
  );
};

export default Hitter;

const styles = StyleSheet.create({
  fieldContainer: {},
  outFieldContainer: {},
  playerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameTag: {
    backgroundColor: 'rgba(255,255,255,.5)',
    marginTop: 25,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'hsl(192, 82%, 49.5%)',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  playerName: {
    fontSize: 50,
    paddingHorizontal: 15,
    paddingBottom: 5,
    borderRadius: 10,
    fontFamily: 'Exo2-Italic',
  },
  scoreBoardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreBoard: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 60,
  },
  hitType: {
    color: 'red',
    fontFamily: 'ComicShark',
    paddingVertical: 3,
    paddingHorizontal: 12,
  },
  basesContainer: {
    marginTop: 112,
    borderColor: 'black',
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    margin: 0,
    transform: [{rotateX: '60deg'}, {rotateZ: '45deg'}],
  },
  endBases: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 60,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  homeBase: {
    borderRadius: 4,
    transform: [{rotateX: '60deg'}],
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
