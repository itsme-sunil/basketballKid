/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-vector-icons';
import { ListItem } from 'react-native-elements';
import nba from 'nba';

export default function Teams({ setTeam }) {
  const teams = nba.teams;
  // const [teamId, setTeamId] = useState(null);

  // useEffect(() => {
  // }, [teamId]);

  return (
    <View style={styles.container}>
      <FlatList
        data={teams}
        keyExtractor={team => team.teamId}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={setTeam}>
            <Text
              style={styles.text}
            >
              {item.teamName}
            </Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {teams.map((team, idx) => {
          <ListItem key={idx} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{team.teamName}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  text: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
});
