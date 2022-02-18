import { useState } from 'react';

export function useScoreboard() {
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: 'Guil',
      score: 0,
    },
    {
      id: 2,
      name: 'Treasure123456789abcdefghijkl',
      score: 0,
    },
    {
      id: 3,
      name: 'Ashley',
      score: 0,
    },
    {
      id: 4,
      name: 'James',
      score: 0,
    },
  ]);

  const highScore = players.reduce(
    (previousHighScore, { score }) => Math.max(previousHighScore, score),
    1, // Start at 1 so that 0 isn't the high score at start.
  );

  function handleRemovePlayer(playerId: number) {
    setPlayers((previousPlayers) => previousPlayers.filter(({ id }) => id !== playerId));
  }

  function handleChangeScore(playerId: number, type: 'decrement' | 'increment') {
    setPlayers((previousPlayers) =>
      previousPlayers.map((player) => {
        if (player.id !== playerId) return player;

        const newScore = type === 'decrement' ? player.score - 1 : player.score + 1;

        return { ...player, score: newScore };
      }),
    );
  }

  function handleAddPlayer(newPlayerName: string) {
    setPlayers((previousPlayers) => [
      ...previousPlayers,
      {
        id: previousPlayers[previousPlayers.length - 1].id + 1,
        name: newPlayerName,
        score: 0,
      },
    ]);
  }

  return { handleAddPlayer, handleChangeScore, handleRemovePlayer, highScore, players };
}
