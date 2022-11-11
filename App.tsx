import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './components/Header/Header';
import Field from './components/Field/Field';

type Props = {};

const App = (props: Props) => {
  return (
    <View style={styles.container}>
      <Header />
      <Field />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
