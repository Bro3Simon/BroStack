import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm'
import GifList from './GifList';
import CloseProject from '../CloseProject';

class GifSearch extends Component {

    constructor() {
        super();
        this.state = {
            gifs: [],
            loading: true
        };
    }

    componentDidMount() {
        this.performSearch();
      }

    performSearch = (query = 'hello') => {
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
            .then(response => {
                this.setState({
                    gifs: response.data.data,
                    loading: false
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        return (
            <div className="row justify-content-center hidden" id="GifSearch">
                <h3 className="pt-md-5">Search GIFs</h3>
                <p>If you don't see the GIFs below, allow unathenticated scripts to run on your browser.</p>
                <SearchForm onSearch={this.performSearch} />
                <div>
                    {
                        (this.state.loading)
                            ? <p>Loading...</p>
                            : <GifList data={this.state.gifs} />
                    }
                </div>
                <CloseProject />
            </div>
        );
    }
}

export default GifSearch;