import React from 'react';

const Gif = props => (
  <div class="d-flex justify-content-center align-items-center m-2 col-5 col-lg-2">
    <img className="img-fluid" src={props.url} alt=""/>
  </div>
    
);

export default Gif;