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
  return (
    <View>
      <Text>{teamName}</Text>
      <Button
        title="Start Game"
        onPress={() => {
          navigation.navigate('StartGame');
        }}
      />
    </View>
  );
};

export default TeamPage;

const styles = StyleSheet.create({});
