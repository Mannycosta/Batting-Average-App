import {StyleSheet, Text, View, Animated, SafeAreaView} from 'react-native';
import AwesomeButton, {ThemedButton} from 'react-native-really-awesome-button';
import React, {useRef, useState} from 'react';
import Homeplate from '../Homplate/Homeplate';
import NoHit from '../NoHit/NoHit';

type Props = {};

const Hitter = (props: Props) => {
  const [scoreboardText, setScoreboardText] = useState('');

  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
    }).start();
  };

  const scaleUp = () => {
    Animated.timing(scaleAnimation, {
      toValue: 50,
      duration: 700,
      useNativeDriver: true,
    }).start();
  };

  const scaleDown = () => {
    Animated.timing(scaleAnimation, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  const handleSingle = () => {
    setScoreboardText('Single!');
    fadeIn();
    setTimeout(() => {
      scaleUp();
      fadeOut();
    }, 1000);
    scaleDown();
  };
  const handleDouble = () => {
    setScoreboardText('Double!');
    fadeIn();
    setTimeout(() => {
      scaleUp();
      fadeOut();
    }, 1000);
    scaleDown();
  };
  const handleTriple = () => {
    setScoreboardText('Triple!');
    fadeIn();
    setTimeout(() => {
      scaleUp();
      fadeOut();
    }, 1000);
    scaleDown();
  };
  const handleHomerun = () => {
    setScoreboardText('Homerun!');
    fadeIn();
    setTimeout(() => {
      scaleUp();
      fadeOut();
    }, 1000);
    scaleDown();
  };
  const handleOut = () => {
    setScoreboardText('Out!');
    fadeIn();
    setTimeout(() => {
      scaleUp();
      fadeOut();
    }, 1000);
    scaleDown();
  };

  return (
    <View style={styles.fieldContainer}>
      <View style={styles.playerContainer}>
        <View style={styles.nameTag}>
          <Text style={styles.playerName}>Manny</Text>
        </View>
      </View>
      <View style={styles.scoreBoardContainer}>
        <SafeAreaView style={styles.scoreBoard}>
          <Animated.View
            style={{
              opacity: fadeAnimation,
              transform: [{scale: scaleAnimation}],
            }}>
            <Text style={styles.hitType}>{scoreboardText}</Text>
          </Animated.View>
        </SafeAreaView>
      </View>
      <View style={styles.basesContainer}>
        <View style={[styles.btnContainer, styles.shadowProp]}>
          <AwesomeButton
            style={[styles.btn, styles.shadowProp]}
            textColor="black"
            backgroundColor="white"
            raiseLevel={0}
            width={30}
            height={30}
            onPressIn={handleDouble}>
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
            height={30}
            onPressIn={handleTriple}>
            <Text>Triple</Text>
          </AwesomeButton>
          <AwesomeButton
            style={[styles.btn, styles.shadowProp]}
            textColor="black"
            backgroundColor="white"
            raiseLevel={0}
            width={30}
            height={30}
            onPressIn={handleSingle}>
            <Text>Single</Text>
          </AwesomeButton>
        </View>
        <View style={[styles.btnContainer, styles.shadowProp]}>
          <Homeplate handleHomerun={handleHomerun} />
        </View>
        <View>
          <NoHit handleOut={handleOut} />
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
    paddingVertical: 2,
    paddingHorizontal: 12,
    fontSize: 16,
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
