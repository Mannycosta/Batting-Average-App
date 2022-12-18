import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

type Props = {
  navigation: any;
};

const GameSummary = ({navigation}: Props) => {
  return (
    <View>
      <Text>GameSummary</Text>
      <Button
        title="Back to Team Page"
        onPress={() => {
          navigation.navigate('TeamPage');
        }}
      />
    </View>
  );
};

export default GameSummary;

const styles = StyleSheet.create({});
