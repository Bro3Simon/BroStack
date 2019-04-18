import React from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = () => {
    return (
        <div className="row justify-content-around align-items-center bg-primary text-white text-uppercase rounded-top p-2">
            <Stats />
            <h3 className="col-12 col-sm order-0 order-sm-2">Scoreboard</h3>
            <Stopwatch />
        </div>
    );
}

export default Header;