import React, { Component } from 'react';

class Header extends Component {
    render() {
        // Create variables for inherited props
        const category = this.props.category;

        return (
            <React.Fragment>
                {/* Create an icons and titles for every category in the list */}
                {category.icons.map((icon, index) =>
                    <i key={index} className={icon} aria-hidden="true"></i>
                )}
                <h3 className="font-weight-bold my-4 ">{category.title}</h3>
            </React.Fragment>
        );
    }
}

export default Header;