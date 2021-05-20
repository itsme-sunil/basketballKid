import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-vector-icons';
import { ListItem } from 'react-native-elements';
import nba from 'nba';

export default function Players({ team }) {
  // const players = nba
  console.log('from players', team);

  const [players, setPlayers] = useState([]);

  setPlayers(nba.players.filter(player => player.teamId === team.teamId));


  // useEffect(() => {
  //   setPlayers(nba.players.filter(player => (player.teamId === team.teamId)));
  // }, [players]);

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        keyExtractor={player => player.playerId}
        renderItem={({ item }) => (
          <Text style={styles.text}>{item.fullName}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
});
