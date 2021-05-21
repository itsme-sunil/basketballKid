/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import nba from 'nba';

export default function Teams({ selectTeam }) {
  const teams = nba.teams;

  return (
    <View style={styles.container}>
      <FlatList
        data={teams}
        keyExtractor={team => team.teamId}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={selectTeam}>
            <Text style={styles.text}>
              {item.teamName}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
});
