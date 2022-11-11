import {StyleSheet, View, Pressable} from 'react-native';
import React from 'react';
import Baseball from './img/nohit.svg';

type Props = {
  handleHit: any;
  countUpHits: any;
};

const NoHit = ({handleHit, countUpHits}: Props) => {
  return (
    <Pressable
      onPress={() => {
        handleHit('Out!');
        countUpHits(0);
      }}>
      {({pressed}) => (
        <View style={styles.noHitBtn}>
          <Baseball
            fill={pressed ? 'rgba(0,0,0,.5)' : 'red'}
            width={50}
            height={50}
          />
        </View>
      )}
    </Pressable>
  );
};

export default NoHit;

const styles = StyleSheet.create({
  noHitBtn: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: 30,
    bottom: -20,
    borderRadius: 25,
  },
});
