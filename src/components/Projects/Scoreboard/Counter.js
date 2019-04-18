import React from 'react';
import PropTypes from 'prop-types'
import { Consumer } from '../../Context';

const Counter = ({ index }) => {
    return (
        <Consumer>
            {({actions, players}) => {
                return (
                    <div className="pr-2">
                        <button className="btn btn-danger px-3" onClick={() => actions.changeScore(index, -1)}> - </button>
                        <span className="mx-3">{players[index].score}</span>
                        <button className="btn btn-success px-3" onClick={() => actions.changeScore(index, +1)}> + </button>
                    </div>
                );
            }}
        </Consumer>
    );
}

Counter.propTypes = {
    index: PropTypes.number,
};

export default Counter;