/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View } from 'react-native';
import Teams from './components/Teams';
import Players from './components/Players';
import PlayerView from './components/PlayerView';

export default function App() {
  const [team, setTeam] = useState(null);
  const [player, setPlayer] = useState(null);

  const selectTeam = e => {
    const teamName = e.target._internalFiberInstanceHandleDEV.child.alternate.pendingProps;
    setTeam(teamName);
  };

  const selectPlayer = e => {
    const playerName = e.target._internalFiberInstanceHandleDEV.child.alternate.alternate.pendingProps;
    setPlayer(playerName);
  };

  return (
    <View>
      {!team && !player ?
        <Teams selectTeam={(e) => selectTeam(e)} />
        : null
      }
      {team && !player ?
        <Players team={team} selectPlayer={(e) => selectPlayer(e)} />
        : null
      }
      {team && player ?
        <PlayerView player={player} />
        : null
      }
    </View>
  );
}

