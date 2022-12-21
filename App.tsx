import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer, TabRouter} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import {firebaseDB, loadTeams} from './firebase/firebase-config';
import {
  getFirestore,
  doc,
  collection,
  getDocs,
  DocumentData,
} from 'firebase/firestore/lite';
import {Firestore} from 'firebase/firestore/lite';
import Homepage from './components/Homepage/Homepage';
import CreateNewTeam from './components/CreateNewTeam/CreateNewTeam';
import TeamPage from './components/TeamPage/TeamPage';
import StartGame from './components/StartGame/StartGame';
import CurrentGame from './components/CurrentGame/CurrentGame';
import GameSummary from './components/GameSummary/GameSummary';
import {Team} from './types/Team';

type Props = {};

const Stack = createNativeStackNavigator();

const App = (props: Props) => {
  const [teams, setTeams] = useState<Team[] | DocumentData>([]);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home">
            {props => <Homepage {...props} teams={teams} setTeams={setTeams} />}
          </Stack.Screen>
          <Stack.Screen
            name="CreateNewTeam"
            options={{title: 'Create New Team'}}>
            {props => (
              <CreateNewTeam
                {...props}
                loadTeams={loadTeams}
                setTeams={setTeams}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="TeamPage"
            component={TeamPage}
            options={({route, navigation}) => ({
              title: route.params?.teamName,
            })}
          />
          <Stack.Screen name="StartGame" component={StartGame} />
          <Stack.Screen name="CurrentGame" component={CurrentGame} />
          <Stack.Screen name="GameSummary">
            {props => (
              <GameSummary {...props} setTeams={setTeams} teams={teams} />
            )}
          </Stack.Screen>
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
