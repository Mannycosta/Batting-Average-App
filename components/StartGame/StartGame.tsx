import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Box, Center, Select} from 'native-base';
import {ObjectId} from 'bson';

type Props = {
  navigation: any;
};
const StartGame = ({navigation}: Props) => {
  const [service, setService] = React.useState('');
  const roster = [
    {
      _id: new ObjectId('631cf12245b094c37c5bb906'),
      name: 'Manny Costa',
    },
    {
      _id: new ObjectId('6321310d186fdd4355f940e3'),
      name: 'Emanol Costa',
    },
    {
      _id: new ObjectId('632244f00752d531bf1160fd'),
      name: 'Brandon Gomez',
    },
  ];
  const currentRoster = roster.map((player, i) => {
    return (
      <Select.Item
        label={`${player.name}`}
        value={`${player._id.toString()}`}
        key={`${i}`}
      />
    );
  });
  return (
    <View>
      <Text>Set Lineup</Text>
      <Center>
        <Box maxW="300">
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: 'teal.600',
            }}
            mt={1}
            onValueChange={itemValue => setService(itemValue)}>
            {currentRoster}
          </Select>
        </Box>
      </Center>
      <Button
        title="Current Game"
        onPress={() => {
          navigation.navigate('CurrentGame');
        }}
      />
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({});
