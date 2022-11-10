import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import Svg, {Path} from 'react-native-svg';
import HomeplateSVG from './img/homeplate.svg';

type Props = {};

const clicked = () => {
  console.log('clicked');
};

const Homeplate = ({}: Props) => {
  return (
    <TouchableHighlight
      underlayColor="rgba(0,0,0,0)"
      onPress={clicked}
      activeOpacity={0.7}>
      <View style={styles.homeBaseContainer}>
        <HomeplateSVG
          width={50}
          height={50}
          fill="black"
          style={styles.homeBase}
        />
      </View>
    </TouchableHighlight>
  );
};

export default Homeplate;

const styles = StyleSheet.create({
  homeBaseContainer: {
    width: 50,
    height: 50,
  },
  homeBase: {
    borderRadius: 4,
    transform: [{rotateX: '60deg'}],
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});
