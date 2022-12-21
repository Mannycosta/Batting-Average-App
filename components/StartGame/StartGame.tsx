import {
  Button,
  GestureResponderEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Button as BaseButton} from 'native-base';
import {Roster} from '../../types/Roster';

type Props = {
  navigation: any;
  route: any;
};
const StartGame = ({navigation, route}: Props) => {
  const {id, teamName, roster} = route.params;
  const [newGameLineup, setNewGameLineup] = useState<Roster[]>([]);

  const lineupOrders: Roster[] = [];

  const handleAddToLineup = (player: Roster) => {
    lineupOrders.push(player);
    setNewGameLineup([...newGameLineup, ...lineupOrders]);
  };

  const playerBtns = roster.map((player: Roster) => {
    return (
      <View>
        <BaseButton
          width={100}
          marginBottom={15}
          onPress={() => {
            handleAddToLineup(player);
          }}>
          {player.playerName}
        </BaseButton>
      </View>
    );
  });

  const handleClearLineup = () => {
    setNewGameLineup([]);
  };

  const lineupPreview = newGameLineup.map(player => {
    return <Text>{player.playerName}</Text>;
  });
  return (
    <View>
      <Text>Set Lineup for game</Text>
      {playerBtns}
      {lineupPreview}
      <BaseButton width={100} marginBottom={15} onPress={handleClearLineup}>
        Clear Lineup
      </BaseButton>
      <Button
        title="Ready"
        onPress={() => {
          navigation.navigate('CurrentGame', {
            lineup: [...newGameLineup],
            roster: [...roster],
            id: id,
            teamName: teamName,
          });
        }}
      />
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({});
