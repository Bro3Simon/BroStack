import React, { Component } from 'react';

class SearchForm extends Component {
 
    state = {
        searchText: ''
      }
      
      onSearchChange = e => {
        this.setState({ searchText: e.target.value });
      }
      
      handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
      }
      
      render() {  
        return (
          <form className="form-inline justify-content-center m-2" onSubmit={this.handleSubmit} >
            <input className="form-control w-auto m-2" type="search" 
                   onChange={this.onSearchChange}
                   name="search" 
                   ref={(input) => this.query = input}
                   placeholder="Search..." />
            <button className="btn btn-primary" type="submit" id="submit" >Search</button>
          </form>      
        )
    }
}

export default SearchForm;