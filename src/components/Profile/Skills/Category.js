import React, { Component } from 'react';
import Header from './Header';
import Card from './Card/Card';

class Category extends Component {
    render() {
        //Create variables for inherited props
        const index = this.props.index;
        const category = this.props.category;

        return (
            <div key={index} className="col-md-6 col-xs-12 mb-4 load-hidden" id={category.id}>
                <Header
                    category={category}
                />
                <Card
                    category={category}
                />
            </div>
        );
    }
}

export default Category;