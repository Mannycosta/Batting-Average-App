import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Box, Center, Select} from 'native-base';
import {ObjectId} from 'bson';

type Props = {
  navigation: any;
  route: any;
};
const StartGame = ({navigation, route}: Props) => {
  const [player, setPlayer] = useState('');
  const [lineupLength, setLineupLength] = useState(9);
  const {roster} = route.params;
  const currentRoster = roster.map((player: any, i: number) => {
    return (
      <Select.Item
        label={`${player.playerName}`}
        value={`${player.id}`}
        key={`${i}`}
      />
    );
  });

  const lineupLengthOptions = [];

  for (let i = 9; i <= roster.length; i++) {
    lineupLengthOptions.push(
      <Select.Item label={`${i}`} value={`${i}`} key={`${i}`} />,
    );
  }

  console.log(lineupLength);
  return (
    <View>
      {/* <Text>How many people will you be hitting?</Text>
      <View>
        <Box maxW="300">
          <Select
            selectedValue={lineupLength.toString()}
            minWidth="200"
            accessibilityLabel="Choose Amount..."
            placeholder="Choose Amount..."
            _selectedItem={{
              bg: 'teal.600',
            }}
            mt={1}
            onValueChange={itemValue => setLineupLength(Number(itemValue))}>
            {lineupLengthOptions}
          </Select>
        </Box>
      </View>
      <Text>Set Lineup</Text>
      {Array.from(Array(lineupLength)).map((number, i) => {
        return (
          <View>
            <Text>{i + 1}</Text>
            <Box key={i} maxW="300">
              <Select
                selectedValue={player}
                minWidth="200"
                accessibilityLabel="Choose Player..."
                placeholder="Choose Player..."
                _selectedItem={{
                  bg: 'teal.600',
                }}
                mt={1}
                onValueChange={itemValue => setPlayer(itemValue)}>
                {currentRoster}
              </Select>
            </Box>
          </View>
        );
      })} */}
      <Button
        title="Ready"
        onPress={() => {
          navigation.navigate('CurrentGame', {roster: [...roster]});
        }}
      />
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({});
