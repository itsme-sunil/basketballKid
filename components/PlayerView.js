/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import nba from 'nba';

export default async function PlayerView({ player }) {
  const playerId = await nba.playerIdFromName(player);
  let bio;
  let stats;
  let photo;


  nba.stats.playerInfo({ PlayerID: playerId })
    .then(res => {
      bio = res.commonPlayerInfo[0];
      stats = res.playerHeadlineStats[0];
      photo = bio.lastName.slice(0, 5).toLowerCase() + bio.firstName.slice(0, 2).toLowerCase();
    })
    .catch(err => console.error(err));

  if (bio && photo && stats) {
    return (
      <View>
        <Text style={styles.name}>{player}, #{bio.jersey}</Text>
        <Image
          source={{ uri: `https://www.basketball-reference.com/req/202105186/images/players/${photo}01.jpg` }}
          style={styles.img}
        />
        <Text style={styles.stats}>{bio.country}</Text>
        <Text style={styles.stats}>Height: {bio.height} • Weight: {bio.weight}</Text> */}
        <Text style={styles.stats}>{stats.timeFrame}</Text>
        <Text style={styles.stats}>{stats.pts}</Text>
        <Text style={styles.stats}>{stats.reb}</Text>
        <Text style={styles.stats}>{stats.ast}</Text>
      </View>
    );
  } else {
    return <></>;
  }
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  stats: {
    fontSize: 14,
    color: 'darkslateblue',
  },
});
