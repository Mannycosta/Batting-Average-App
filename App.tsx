import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import {firebaseDB} from './firebase/firebase-config';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import {Firestore} from 'firebase/firestore/lite';
import Homepage from './components/Homepage/Homepage';
import CreateNewTeam from './components/CreateNewTeam/CreateNewTeam';
import TeamPage from './components/TeamPage/TeamPage';
import StartGame from './components/StartGame/StartGame';
import CurrentGame from './components/CurrentGame/CurrentGame';
import GameSummary from './components/GameSummary/GameSummary';

type Props = {};

const Stack = createNativeStackNavigator();

const App = (props: Props) => {
  const [teams, setTeams] = useState<object[]>([]);

  const loadTeams = async (db: Firestore) => {
    const teamCollection = collection(db, 'teams');
    const teamSnapshot = await getDocs(teamCollection);
    const teamsList = teamSnapshot.docs.map(doc => doc.data());
    if (teamsList) {
      const teams: object[] = [];
      teamsList.map(team => {
        teams.push(team);
      });
      setTeams(teams);
    }
  };

  useEffect(() => {
    loadTeams(firebaseDB);
    if (teams.length) {
    }
  }, []);

  console.log(teams);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home">
            {props => <Homepage {...props} teams={teams} />}
          </Stack.Screen>
          <Stack.Screen name="Create New Team" component={CreateNewTeam} />
          <Stack.Screen name="Team Page" component={TeamPage} />
          <Stack.Screen name="Start Game" component={StartGame} />
          <Stack.Screen name="Current Game" component={CurrentGame} />
          <Stack.Screen name="Game Summary" component={GameSummary} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
