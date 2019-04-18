import React from 'react';
import { Consumer } from '../../Context';

const AddPlayerForm = () => {

    const playerInput = React.createRef();

    return (
        <Consumer>
            {context => {
                const handleSubmit = (event) => {
                    event.preventDefault();
                    context.actions.addPlayer(playerInput.current.value);
                    event.currentTarget.reset();
                }

                return (
                    <form className="row justify-content-center form-inline bg-primary text-white rounded-bottom p-2" onSubmit={handleSubmit}>
                        <input className="col-10 col-sm-8 form-control text-uppercase" type='text' ref={playerInput} placeholder="Enter a player's name."/>
                        <button className="col-4 col-sm-3 btn btn-sm btn-success text-uppercase mt-2 mt-sm-0 ml-sm-auto" type="submit">Add Player</button>
                    </form>
                );
            }}
        </Consumer>
    );
}

export default AddPlayerForm;