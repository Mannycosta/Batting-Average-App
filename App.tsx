import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Realm from 'realm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import Homepage from './components/Homepage/Homepage';
import CreateNewTeam from './components/CreateNewTeam/CreateNewTeam';
import TeamPage from './components/TeamPage/TeamPage';
import StartGame from './components/StartGame/StartGame';
import CurrentGame from './components/CurrentGame/CurrentGame';
import GameSummary from './components/GameSummary/GameSummary';

// Schema for database objects
const PlayerSchema = {
  name: 'Player',
  properties: {
    _id: 'objectId',
    name: 'string',
    singles: {type: 'int', default: 0},
    doubles: {type: 'int', default: 0},
    triples: {type: 'int', default: 0},
    homeruns: {type: 'int', default: 0},
    walks: {type: 'int', default: 0},
    atBats: {type: 'int', default: 0},
    hits: {type: 'int', default: 0},
    outs: {type: 'int', default: 0},
  },
  primaryKey: '_id',
};

// (async () => {
//   // Use realm to interact with DB
//   const realm = await Realm.open({
//     path: 'myrealm',
//     schema: [PlayerSchema],
//   });
// })();

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
{
  /* <View style={styles.container}>
          <Header />
          <Field />
        </View> */
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
