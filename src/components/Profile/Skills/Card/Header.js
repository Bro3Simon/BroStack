import React, { Component } from 'react';

class Header extends Component {
    render() {
        //Create variables for inherited props
        const category = this.props.category;

        return (
            <div className="card-header">
                <ul className="nav nav-tabs nav-justified card-header-tabs" role="tablist">
                    {/* Create a navtab for every item in the list */}
                    {category.subCategories.map((subcategory, index) =>
                        <li key={index} className="nav-item">
                            {/* Add the class active to the first item in the list only */}
                            <a className={`nav-link ${index === 0 ? "active" : null}`} id={subcategory.id} data-toggle="tab" href={subcategory.href} role="tab" aria-controls={subcategory.control} aria-selected="true">{subcategory.text}</a>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Header;