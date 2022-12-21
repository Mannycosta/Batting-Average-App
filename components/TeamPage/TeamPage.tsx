import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  navigation: any;
  route: any;
};

const TeamPage = ({navigation, route}: Props) => {
  const {id, teamName, roster, setTeams} = route.params;
  console.log(route.params);
  return (
    <View>
      <Text>Team Leaders</Text>
      <Text>singles</Text>
      <Text>doubles</Text>
      <Text>triples</Text>
      <Text>homeruns</Text>
      <Text>walks</Text>
      <Text>average</Text>
      <Text>hits</Text>
      <Text>outs</Text>
      <Button
        title="Start A New Game"
        onPress={() => {
          navigation.navigate('StartGame', {
            roster: roster,
            id: id,
            teamName: teamName,
          });
        }}
      />
    </View>
  );
};

export default TeamPage;

const styles = StyleSheet.create({});
