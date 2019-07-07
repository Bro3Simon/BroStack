import React, { Component } from 'react';
import CloseProject from '../CloseProject';
import SearchForm from '../SearchFlickr/SearchForm';
import FlickrPhotos from './FlickrPhotos';

class SearchFlickr extends Component {

    render() {
        return (
            <div className="row justify-content-center hidden" id="searchFlickr">

                <h3 className="pt-md-5">Search Flickr</h3>
                <small>Content is loaded using Flickr API. ِAfter searching an icon will appear in the URL section of your browser. Click on it and allow the insecure scripts to be loaded.</small>

                <SearchForm />

                <FlickrPhotos />

                <CloseProject />
            </div>
        )
    }

}

export default SearchFlickr;