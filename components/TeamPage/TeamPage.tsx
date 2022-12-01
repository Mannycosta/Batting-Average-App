import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {firebaseDB} from '../../firebase/firebase-config';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {Firestore} from 'firebase/firestore/lite';

type Props = {
  navigation: any;
};

const checkDB = async (db: Firestore) => {
  const teamCollection = collection(db, 'teams');
  const teamSnapshot = await getDocs(teamCollection);
  const teamsList = teamSnapshot.docs.map(doc => doc.data());
  console.log(teamsList);
};

const TeamPage = ({navigation}: Props) => {
  return (
    <View>
      <Text>TeamPage</Text>
      <Button
        title="Start Game"
        onPress={() => {
          navigation.navigate('Start Game');
        }}
      />
      <Button
        title="Test db"
        onPress={() => {
          checkDB(firebaseDB);
        }}
      />
    </View>
  );
};

export default TeamPage;

const styles = StyleSheet.create({});
