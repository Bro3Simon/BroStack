import React, {Component} from 'react';

class Photography extends Component {
    render() {
        return(
    <section id="photography" className="text-center">

      <div className="container">

        <h2 className="mb-4 font-weight-bold">My Photography</h2>

        <p>I am also a photopher and cinematographer. Enjoy a few of my favorite photos below or check out my <a href="https://www.youtube.com/watch?v=WB_et_y80Xc"
            target="_blank" rel="noopener noreferrer">video</a> on YouTube with 1/4 million views!</p>

        <div className="row justify-content-center">

          <div className="col-lg-5 col-md-12 p-0 m-2 img-container">
            <img className="img-fluid" src="images/coffee.jpg" alt="A coffee cup overlooking a rainforest" />
          </div>

          <div className="col-lg-5 col-md-12 p-0 m-2 img-container">
            <img className="img-fluid" src="images/fishing.jpg" alt="A silhouette of a man fishing with an orange sky" />
          </div>

        </div>

        <div className="row justify-content-center">

          <div className="col-lg-5 col-md-12 p-0 m-2 img-container">
            <img className="img-fluid" src="images/roof.jpg" alt="A red geometric roof" />
          </div>

          <div className="col-lg-5 col-md-12 p-0 m-2 img-container">
            <img className="img-fluid" src="images/ducks.jpg" alt="Ducks swimming in the National Mall in DC" />
          </div>

        </div>

      </div>

    </section>
        );
    }
}

export default Photography;