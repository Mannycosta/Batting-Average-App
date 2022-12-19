import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Input, Button as BaseButton} from 'native-base';
import uuid from 'react-native-uuid';
import {firebaseDB} from '../../firebase/firebase-config';
import {collection, addDoc} from 'firebase/firestore/lite';

type Props = {
  navigation: any;
  loadTeams: Function;
  setTeams: Function;
};

const CreateNewTeam = ({navigation, loadTeams, setTeams}: Props) => {
  const [teamName, setTeamName] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [roster, setRoster] = useState<string[]>([]);
  const [rosterCount, setRosterCount] = useState(0);

  const addPlayer = (text: string) => {
    setPlayerName(text);
  };

  const handleRemovePlayer = () => {
    setRosterCount(prevCount => prevCount - 1);
    const newRoster = [...roster];
    newRoster.pop();
    setRoster([...newRoster]);
    setPlayerName(roster[roster.length - 1]);
  };

  const handleAddNewPlayer = () => {
    setRosterCount(prevCount => prevCount + 1);
    const newRoster = [...roster];
    newRoster.push(playerName);
    setRoster([...newRoster]);
    setPlayerName('');
  };

  const handleCreateNewTeam = async () => {
    const newRoster = roster.map(player => {
      return {
        id: uuid.v4(),
        playerName: player,
        singles: 0,
        doubles: 0,
        triples: 0,
        homeruns: 0,
        walks: 0,
        atBats: 0,
        hits: 0,
        outs: 0,
      };
    });
    const newTeam = {
      teamName: teamName,
      roster: [...newRoster],
    };
    try {
      const docRef = await addDoc(collection(firebaseDB, 'teams'), newTeam);
      console.log('Team has been added succesfully, with id:', docRef.id);
      loadTeams(firebaseDB, setTeams);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>Team Name</Text>
      <Input
        placeholder="Team Name..."
        onChangeText={text => {
          setTeamName(text);
        }}
      />
      <View>
        <Text>Add Players to Roster</Text>
        <Input
          isDisabled={rosterCount !== 0}
          key={1}
          placeholder="Player First & Last Name..."
          onChangeText={text => {
            addPlayer(text);
          }}
        />
        {Array.from(Array(rosterCount)).map((num, i) => {
          return (
            <Input
              isDisabled={rosterCount !== i + 1}
              placeholder="Player First & Last Name..."
              key={i + 2}
              onChangeText={text => {
                addPlayer(text);
              }}
            />
          );
        })}
      </View>
      {rosterCount > 0 ? (
        <BaseButton onPress={handleRemovePlayer}>Remove -</BaseButton>
      ) : null}

      <BaseButton onPress={handleAddNewPlayer}>Add +</BaseButton>
      <Button title="Create Team" onPress={handleCreateNewTeam} />
    </View>
  );
};

export default CreateNewTeam;

const styles = StyleSheet.create({});
