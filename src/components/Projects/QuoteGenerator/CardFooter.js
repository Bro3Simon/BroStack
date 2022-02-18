import React, { Component } from 'react';

class CardFooter extends Component {
    render() {
        return (
            <div className="bg-dark text-white card-footer" style={{ opacity: .7 }}>
                <blockquote id="quoteText">All our dreams can come true, if we have the courage to pursue them.</blockquote>
                <p className=" mb-0" id="quoteAuthor">~Walt Disney</p>
            </div>
        );
    }
}

export default CardFooter;