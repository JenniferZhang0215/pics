import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: ""
  };
  handleChange = e => {
    this.setState({ term: e.target.value });
  };

  handleFormSubmit = event => {
    //prevent the form submit and refresh the page
    event.preventDefault();

    //call the function that was passed as props from parent to child
    //pass the data that child can pass to parent.
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
