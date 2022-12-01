import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import Homepage from './components/Homepage/Homepage';
import CreateNewTeam from './components/CreateNewTeam/CreateNewTeam';
import TeamPage from './components/TeamPage/TeamPage';
import StartGame from './components/StartGame/StartGame';
import CurrentGame from './components/CurrentGame/CurrentGame';
import GameSummary from './components/GameSummary/GameSummary';

type Props = {};

const Stack = createNativeStackNavigator();

const App = (props: Props) => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Homepage} />
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
