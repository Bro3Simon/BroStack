import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card no-gutters border-0">
                <img className="img-fluid" id="quoteCardImage" src="images/coffee.jpg" alt='A coffee cup overlooking a rainforest' />
            </div>
        );
    }
}

export default Card;