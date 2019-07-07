import React, { Component } from 'react';


class SearchForm extends Component {
    render() {
        return (
            <form id="searchFlickrForm" className="form-inline row justify-content-center mt-3 mx-2">
                <label className="col-form-label mx-sm-1" htmlFor="flickrSearch">Enter a Search Term</label>
                <input className="form-control mb-3 mb-sm-0 mx-5 mx-sm-1" id="flickrSearch" type="search"
                    name="flickrSearch" placeholder="Cats" />
                <input className="btn btn-primary mx-sm-1" id="flickrSubmit" type="submit" value="Search" />
            </form>
        )
    }
}

export default SearchForm;