import React from 'react';
import Picture from './Picture';

const FlickrPhotos = props => { 
  
    let pictures;
    if (props.pictures.length > 0) {
      pictures = props.pictures.map((picture, index) => <Picture url={picture.media.m} key={index} title={picture.title} />);
    }
    else {
        return (
            <p>Sorry, no pictures matched your search. Please try again.</p>
        )
    }
    
      return(
          <div className="row justify-content-around">
          {pictures}
        </div>     
      );
    }

export default FlickrPhotos;