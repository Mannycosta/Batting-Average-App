import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {Firestore} from 'firebase/firestore/lite';

type Props = {
  navigation: any;
  route: any;
};

const TeamPage = ({navigation, route}: Props) => {
  const {id, teamName, roster} = route.params;
  console.log(roster);
  return (
    <View>
      <Text>Team Leaders</Text>
      <Text>singles</Text>
      <Text>doubles</Text>
      <Text>triples</Text>
      <Text>homeruns</Text>
      <Text>walks</Text>
      <Text>average</Text>
      <Text>hits</Text>
      <Text>outs</Text>
      <Button
        title="Start A New Game"
        onPress={() => {
          navigation.navigate('StartGame', {roster: roster});
        }}
      />
    </View>
  );
};

export default TeamPage;

const styles = StyleSheet.create({});
