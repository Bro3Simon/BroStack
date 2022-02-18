import React, { Component } from 'react';

class Card extends Component {
    render() {

        const name = this.props.name;
        const image = this.props.image;
        const href = this.props.href;
        const description = this.props.description;

        return (
            <div className="card bg-dark text-white col-xs-11 col-md-5 col-lg mx-1 my-3">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer p-0 border-0">
                    <img src={image} className="card-img mt-auto" alt={name} />
                    <a className="text-white no-hover" href={href} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary m-2">View</button>
                    </a>

                </div>
            </div >
        )
    }
}

export default Card;