/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import nba from 'nba';
import getJSON from 'nba/src/get-json';
import axios from 'axios';
import Teams from './components/Teams';
import Players from './components/Players';
import PlayerView from './components/PlayerView';

export default function App() {
  const [team, setTeam] = useState();
  const [player, setPlayer] = useState(null);

  // const playerInfo = nba.findPlayer(player);
  nba.stats.playerInfo({ PlayerID: 203507 })
    .then(info => console.log(info.commonPlayerInfo[0].displayFirstLast, info.commonPlayerInfo[0], info.playerHeadlineStats[0]));

  const selectTeam = e => {
    const teamName = e.target._internalFiberInstanceHandleDEV.child.alternate.pendingProps;
    setTeam(teamName);
  };

  const selectPlayer = e => {
    const playerName = e.target._internalFiberInstanceHandleDEV.child.alternate.pendingProps;
    setPlayer(playerName);
  };

  return (
    <View>
      {!team ?
        <Teams setTeam={(e) => setTeam(e.target._internalFiberInstanceHandleDEV.child.alternate.pendingProps)}/>
        : null
      }
      {team && !player ?
        <Players team={team} selectPlayer={selectPlayer} />
        : null
      }
      {player ?
        <PlayerView player={player} />
        : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: 'darkslateblue',
    fontSize: 30,
  },
  stats: {
    color: 'darkslateblue',
    fontSize: 16,
  },
  img: {
    aspectRatio: 0.75,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});
