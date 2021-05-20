/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { Icon } from 'react-native-vector-icons';
import nba from 'nba';

export default function PlayerView({ player }) {
  const [photo, setPhoto] = useState(null);
  const [info, setInfo] = useState(null);
  const [stats, setStats] = useState(null);


  useEffect(() => {

    const playerInfo = nba.findPlayer(player);
    nba.stats.playerInfo({ PlayerID: playerInfo.playerId })
      .then(res => {
        setInfo(res.commonPlayerInfo);
        return res;
      })
      .then(res => {
        setPhoto(`${playerInfo.lastName.slice(0, 5).toLowerCase()}${playerInfo.firstName.slice(0, 2).toLowerCase()}`);
        return res;
      })
      .then(res => {
        setStats(res.playerHeadlineStats[0]);
      })
      .catch(err => console.error(err));
  });

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{player}, #{info.jersey}</Text>
      <Image
        source={{ uri: `https://www.basketball-reference.com/req/202105186/images/players/${photo}01.jpg` }}
        style={styles.img}
      />
      <Text style={styles.stats}>{info.country}</Text>
      <Text style={styles.stats}>Height: {info.height} • Weight: {info.weight}</Text>
      <Text style={styles.stats}>{stats.timeFrame}</Text>
      <Text style={styles.stats}>{stats.pts}</Text>
      <Text style={styles.stats}>{stats.reb}</Text>
      <Text style={styles.stats}>{stats.ast}</Text>
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
