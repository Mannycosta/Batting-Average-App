import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import Baseball from './img/noHitBat.svg';

type Props = {
  handleOut: any;
};

const NoHit = ({handleOut}: Props) => {
  return (
    <TouchableHighlight
      underlayColor="rgba(0,0,0,0)"
      onPress={handleOut}
      activeOpacity={0.7}>
      <View style={styles.noHitContainer}>
        <Baseball width={75} height={75} />
      </View>
    </TouchableHighlight>
  );
};

export default NoHit;

const styles = StyleSheet.create({
  noHitContainer: {
    position: 'absolute',
    left: 30,
    bottom: -20,
  },
});
