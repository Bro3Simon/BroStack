import React from 'react';
import { Consumer } from '../../Context';

const Stats = () => {
    return (
        <Consumer>
            {context => {
                const totalPlayers = context.players.length;
                const totalPoints = context.players.reduce((total, player) => {
                    return total + player.score;
                }, 0);
                return (
                    <div className="order-1 mt-2">
                        <p>Players: {totalPlayers}</p>
                        <p>Total Points: {totalPoints}</p>
                    </div>
                );
            }}
        </Consumer>
    );
}

export default Stats;
