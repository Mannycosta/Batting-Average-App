import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AwesomeButton from 'react-native-really-awesome-button/lib/typescript/src/Button';

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Batting Average</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 105,
    backgroundColor: 'hsl(192, 82%, 49.5%)',
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    marginTop: 40,
    marginLeft: 20,
    fontSize: 25,
    fontFamily: 'Tuwir',
  },
});
