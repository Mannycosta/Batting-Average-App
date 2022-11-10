import {StyleSheet, View, Pressable} from 'react-native';
import React from 'react';
import Baseball from './img/nohit.svg';

type Props = {
  handleHit: any;
};

const NoHit = ({handleHit}: Props) => {
  return (
    <Pressable
      onPress={() => {
        handleHit('Out!');
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
