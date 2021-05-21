/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import nba from 'nba';

export default async function Players({ team, selectPlayer }) {
  const teamId = await nba.teamIdFromName(team);
  const playerList = nba.players.filter(player => player.teamId === teamId);
  console.log(playerList);

  return (
    <View>
      <FlatList
        data={playerList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={selectPlayer}>
            <Text style={styles.text}>
              {item.fullName}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
});
