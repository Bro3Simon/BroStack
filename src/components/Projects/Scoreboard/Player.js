import React, { PureComponent } from "react";
import { Consumer } from "../../Context";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

class Player extends PureComponent {
  static propTypes = {
    index: PropTypes.number,
    isHighScore: PropTypes.bool,
  };

  render() {
    const { index } = this.props;

    return (
      <Consumer>
        {({ actions, players }) => (
          <div
            className={`row justify-content-between align-items-center bg-light ${
              index === players.length - 1 ? `null` : `mb-1`
            }`}
          >
            <span className="p-2">
              <button
                className="btn btn-danger"
                onClick={() => actions.removePlayer(players[index].id)}
              >
                ✖
              </button>
              <Icon
                isHighScore={actions.isHighScore === players[index].score}
              />
              {players[index].name}
            </span>
            <Counter index={index} />
          </div>
        )}
      </Consumer>
    );
  }
}

export default Player;
