import React, { Component } from 'react';
import Category from './Category';
import { Consumer } from '../../Context';

class Skills extends Component {


    render() {
        return (
            // Import data from consumer
            <Consumer>
                {({ SkillCategories }) => {
                    return (
                        <div className="row">
                        {/* for every item in the SkillCategories array create a Category component and pass it key and category via props */}
                            {SkillCategories.map((category, index) =>
                                <Category
                                    key={index}
                                    category={category}
                                />
                            )}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default Skills;