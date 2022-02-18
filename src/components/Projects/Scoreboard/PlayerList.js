import React from 'react';
import { Consumer } from '../../Context';
import Player from './Player';

const PlayerList = () => {
    return (
        <Consumer>
            {({players}) => {
                return (
                    <div className="d-flex flex-column">
                        {players.map((player, index) =>
                            <Player
                                key={player.id.toString()}
                                index={index}
                            />
                        )}
                    </div>
                );
            }}
        </Consumer>
    );
}

export default PlayerList;