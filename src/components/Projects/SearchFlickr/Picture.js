import React from 'react';

const Picture = props => (
  <div className="d-flex justify-content-center align-items-center m-2 col-5 col-lg-2">
    <img className="img-fluid" src={props.url} alt={props.title}/>
  </div>
    
);

export default Picture;