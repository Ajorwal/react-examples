import React, { Component } from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onInputChange(event) {
        console.log(event.target.value)
    }

    render() {
        return (
            <div className='search-bar'>
                <input onChange={(event) => this.onInputChange(event.target.value)} />
            </div>
        )
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;