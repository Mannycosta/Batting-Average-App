import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Hitter from '../Hitter/Hitter';

type Props = {};

const Field = (props: Props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../images/baseballpark.jpg')}
        style={styles.image}>
        <Hitter />
      </ImageBackground>
    </View>
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
