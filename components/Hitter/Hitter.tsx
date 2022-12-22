import {
  StyleSheet,
  Text,
  View,
  Animated,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Homeplate from '../Homplate/Homeplate';
import NoHit from '../NoHit/NoHit';
import {Player, Roster} from '../../types/Roster';

type Props = {
  currentBatter: Player;
  setCurrentBatter: Function;
  currentGameRoster: Roster;
  setCurrentGameRoster: Function;
  statPageCurrentBatter: Player;
  setStatPageCurrentBatter: Function;
  statPageCurrentGameRoster: Roster;
  setStatPageCurrentGameRoster: Function;
};

const Hitter = ({
  currentGameRoster,
  setCurrentGameRoster,
  currentBatter,
  setCurrentBatter,
  statPageCurrentBatter,
  setStatPageCurrentBatter,
  statPageCurrentGameRoster,
  setStatPageCurrentGameRoster,
}: Props) => {
  const [scoreboardText, setScoreboardText] = useState('Start!');
  const [scoreboardColor, setScoreboardColor] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(1)).current;

  const animateScoreboard = () => {
    const fadeIn = () => {
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();
    };
    const fadeOut = () => {
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

    fadeIn();
    setTimeout(() => {
      scaleUp();
      fadeOut();
    }, 1000);
    scaleDown();
  };

  const handleHit = (hit: string) => {
    hit === 'Homerun!'
      ? setScoreboardColor('yellow')
      : hit === 'Out!'
      ? setScoreboardColor('hsl(12, 100%, 50%)')
      : setScoreboardColor('hsl(120, 82%, 50%)');
    setScoreboardText(hit);
    animateScoreboard();
  };

  const goThroughLineup = () => {
    setCurrentBatter(currentGameRoster[1]);
    setStatPageCurrentBatter(statPageCurrentGameRoster[1]);
  };

  const singleFunc = () => {
    const currentGameUpdatedRoster = currentGameRoster.filter(player => {
      return player.id !== currentBatter.id;
    });
    const newPlayerStats = {
      ...currentBatter,
      singles: currentBatter.singles + 1,
      hits: currentBatter.hits + 1,
      atBats: currentBatter.atBats + 1,
    };
    setCurrentGameRoster([...currentGameUpdatedRoster, newPlayerStats]);

    const statPageCurrentGameUpdatedRoster = statPageCurrentGameRoster.filter(
      player => {
        return player.id !== statPageCurrentBatter.id;
      },
    );
    const statPageNewPlayerStats = {
      ...statPageCurrentBatter,
      singles: statPageCurrentBatter.singles + 1,
      hits: statPageCurrentBatter.hits + 1,
      atBats: statPageCurrentBatter.atBats + 1,
    };
    setStatPageCurrentGameRoster([
      ...statPageCurrentGameUpdatedRoster,
      statPageNewPlayerStats,
    ]);
  };

  const doubleFunc = () => {
    const currentGameUpdatedRoster = currentGameRoster.filter(player => {
      return player.id !== currentBatter.id;
    });
    const newPlayerStats = {
      ...currentBatter,
      doubles: currentBatter.doubles + 1,
      hits: currentBatter.hits + 1,
      atBats: currentBatter.atBats + 1,
    };
    setCurrentGameRoster([...currentGameUpdatedRoster, newPlayerStats]);

    const statPageCurrentGameUpdatedRoster = statPageCurrentGameRoster.filter(
      player => {
        return player.id !== statPageCurrentBatter.id;
      },
    );
    const statPageNewPlayerStats = {
      ...statPageCurrentBatter,
      doubles: statPageCurrentBatter.doubles + 1,
      hits: statPageCurrentBatter.hits + 1,
      atBats: statPageCurrentBatter.atBats + 1,
    };
    setStatPageCurrentGameRoster([
      ...statPageCurrentGameUpdatedRoster,
      statPageNewPlayerStats,
    ]);
  };

  const tripleFunc = () => {
    const currentGameUpdatedRoster = currentGameRoster.filter(player => {
      return player.id !== currentBatter.id;
    });
    const newPlayerStats = {
      ...currentBatter,
      triples: currentBatter.triples + 1,
      hits: currentBatter.hits + 1,
      atBats: currentBatter.atBats + 1,
    };
    setCurrentGameRoster([...currentGameUpdatedRoster, newPlayerStats]);

    const statPageCurrentGameUpdatedRoster = statPageCurrentGameRoster.filter(
      player => {
        return player.id !== statPageCurrentBatter.id;
      },
    );
    const statPageNewPlayerStats = {
      ...statPageCurrentBatter,
      triples: statPageCurrentBatter.triples + 1,
      hits: statPageCurrentBatter.hits + 1,
      atBats: statPageCurrentBatter.atBats + 1,
    };
    setStatPageCurrentGameRoster([
      ...statPageCurrentGameUpdatedRoster,
      statPageNewPlayerStats,
    ]);
  };

  const homerunFunc = () => {
    const currentGameUpdatedRoster = currentGameRoster.filter(player => {
      return player.id !== currentBatter.id;
    });
    const newPlayerStats = {
      ...currentBatter,
      homeruns: currentBatter.homeruns + 1,
      hits: currentBatter.hits + 1,
      atBats: currentBatter.atBats + 1,
    };
    setCurrentGameRoster([...currentGameUpdatedRoster, newPlayerStats]);

    const statPageCurrentGameUpdatedRoster = statPageCurrentGameRoster.filter(
      player => {
        return player.id !== statPageCurrentBatter.id;
      },
    );
    const statPageNewPlayerStats = {
      ...statPageCurrentBatter,
      homeruns: statPageCurrentBatter.homeruns + 1,
      hits: statPageCurrentBatter.hits + 1,
      atBats: statPageCurrentBatter.atBats + 1,
    };
    setStatPageCurrentGameRoster([
      ...statPageCurrentGameUpdatedRoster,
      statPageNewPlayerStats,
    ]);
  };

  const outFunc = () => {
    const currentGameUpdatedRoster = currentGameRoster.filter(player => {
      return player.id !== currentBatter.id;
    });
    const newPlayerStats = {
      ...currentBatter,
      outs: currentBatter.outs + 1,
      atBats: currentBatter.atBats + 1,
    };
    setCurrentGameRoster([...currentGameUpdatedRoster, newPlayerStats]);

    const statPageCurrentGameUpdatedRoster = statPageCurrentGameRoster.filter(
      player => {
        return player.id !== statPageCurrentBatter.id;
      },
    );
    const statPageNewPlayerStats = {
      ...statPageCurrentBatter,
      outs: statPageCurrentBatter.outs + 1,
      atBats: statPageCurrentBatter.atBats + 1,
    };
    setStatPageCurrentGameRoster([
      ...statPageCurrentGameUpdatedRoster,
      statPageNewPlayerStats,
    ]);
  };
  const countUpHits = (hit: number) => {
    hit === 1
      ? singleFunc()
      : hit === 2
      ? doubleFunc()
      : hit === 3
      ? tripleFunc()
      : hit === 4
      ? homerunFunc()
      : outFunc();
  };

  return (
    <View style={styles.fieldContainer}>
      <View style={styles.playerContainer}>
        <View style={styles.nameTag}>
          <Text style={styles.playerName}>{currentBatter.playerName}</Text>
        </View>
      </View>
      <View style={styles.scoreBoardContainer}>
        <SafeAreaView style={styles.scoreBoard}>
          <Animated.View
            style={{
              opacity: fadeAnimation,
              transform: [{scale: scaleAnimation}],
            }}>
            <Text style={[styles.hitType, {color: scoreboardColor}]}>
              {scoreboardText}
            </Text>
          </Animated.View>
        </SafeAreaView>
      </View>
      <View style={styles.basesContainer}>
        <View style={[styles.btnContainer, styles.shadowProp]}>
          <Pressable
            style={({pressed}) =>
              !pressed
                ? [styles.bases, styles.shadowProp]
                : [styles.bases, styles.shadowProp, styles.basesPressed]
            }
            onPress={() => {
              handleHit('Double!');
              countUpHits(2);
              setTimeout(() => {
                goThroughLineup();
              }, 1950);
            }}
          />
        </View>
        <View style={[styles.btnContainer, styles.shadowProp, styles.endBases]}>
          <Pressable
            style={({pressed}) =>
              !pressed
                ? [styles.bases, styles.shadowProp]
                : [styles.bases, styles.shadowProp, styles.basesPressed]
            }
            onPress={() => {
              handleHit('Triple!');
              countUpHits(3);
              setTimeout(() => {
                goThroughLineup();
              }, 1950);
            }}
          />
          <Pressable
            style={({pressed}) =>
              !pressed
                ? [styles.bases, styles.shadowProp]
                : [styles.bases, styles.shadowProp, styles.basesPressed]
            }
            onPress={() => {
              handleHit('Single!');
              countUpHits(1);
              setTimeout(() => {
                goThroughLineup();
              }, 1950);
            }}
          />
        </View>
        <View style={[styles.btnContainer, styles.shadowProp]}>
          <Homeplate
            handleHit={handleHit}
            isDisabled={isDisabled}
            countUpHits={countUpHits}
            goThroughLineup={goThroughLineup}
          />
        </View>
        <View>
          <NoHit
            handleHit={handleHit}
            countUpHits={countUpHits}
            goThroughLineup={goThroughLineup}
          />
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
  bases: {
    margin: 0,
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 4,
    transform: [{rotateX: '60deg'}, {rotateZ: '45deg'}],
  },
  basesPressed: {
    backgroundColor: 'rgba(150,150,150,.8)',
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
