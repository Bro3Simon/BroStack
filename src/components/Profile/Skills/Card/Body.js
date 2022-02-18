import React, { Component } from 'react';

class Body extends Component {
    render() {
        //Create variables for inherited props
        const category = this.props.category;

        return (
            <div className="tab-content card-body">
                {/* Create body content for every item in the list */}
                {category.subCategories.map((subcategory, index) =>
                    // Show and active class for the first item in the list
                    <div key={index} className={`tab-pane fade ${index === 0 ? "show active" : null}`} id={subcategory.control} role="tabpanel" aria-labelledby={subcategory.id}>
                        <ul className="list-unstyled text-secondary">
                            {subcategory.items.map((item, index) =>
                                <li key={index}>{item}</li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default Body;