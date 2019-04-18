import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';

class Card extends Component {
    render() {
        //Create variables for inherited props
        const category = this.props.category;

        return (
            <div className="card">
                <Header
                    category={category}
                />
                <Body
                    category={category}
                />
            </div>
        );
    }
}

export default Card;