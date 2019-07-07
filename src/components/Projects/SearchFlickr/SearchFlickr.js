import React, { Component } from 'react';
import $ from 'jquery';
import CloseProject from '../CloseProject';
import SearchForm from '../SearchFlickr/SearchForm';
import FlickrPhotos from './FlickrPhotos';

class SearchFlickr extends Component {

    constructor() {
        super();
        this.state = {
            pictures: [],
        };
    }

    componentDidMount() {
        this.performSearch();
      }

    performSearch = (query = 'water') => {

        const Options = {
            tags: query,
            format: "json"
        }

        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", Options, this.updateState)
    }

    updateState = (response) => {
        this.setState({pictures: []});
        this.setState({pictures: response.items})
    }

    render() {
        return (
            <div className="row justify-content-center hidden" id="searchFlickr">

                <h3 className="pt-md-5">Search Flickr</h3>
                <small>Content is loaded using Flickr API. ِClick on the icon in the URL section of your browser and allow the insecure scripts to be loaded.</small>

                <SearchForm onSearch={this.performSearch}/>

                <FlickrPhotos pictures={this.state.pictures}/>

                <CloseProject />
            </div>
        )
    }

}

export default SearchFlickr;