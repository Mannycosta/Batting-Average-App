import {StyleSheet, View, Pressable} from 'react-native';
import React from 'react';
import HomeplateSVG from './img/homeplate.svg';

type Props = {
  handleHit: Function;
  isDisabled: boolean;
  countUpHits: Function;
  goThroughLineup: Function;
};

const Homeplate = ({handleHit, countUpHits, goThroughLineup}: Props) => {
  return (
    <Pressable
      onPress={() => {
        handleHit('Homerun!');
        countUpHits(4);
        setTimeout(() => {
          goThroughLineup();
        }, 1950);
      }}>
      {({pressed}) => (
        <HomeplateSVG
          width={50}
          height={50}
          fill={pressed ? 'rgba(150,150,150,.8)' : 'white'}
          style={styles.homeBase}
        />
      )}
    </Pressable>
  );
};

export default Homeplate;

const styles = StyleSheet.create({
  homeBase: {
    borderRadius: 4,
    transform: [{rotateX: '60deg'}],
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
