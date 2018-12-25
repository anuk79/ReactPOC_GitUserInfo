//react imports
import React from "react";
import propTypes from "prop-types";
//styles
import "./SearchBox.scss";
//constants
import { EMPTY_STRING } from "../../constants/commonConstants";

class SearchBox extends React.Component {
    
  onChangeCallback = event => {
    let query = event.target.value || EMPTY_STRING;
    this.props.onSearch.call(this, query);
  };

  render() {
    return (
      <div className="search-box">
        <label> Search for repository: </label>
        <input
          type="text"
          placeholder="Enter repo name"
          value={this.props.searchQuery}
          onChange={this.onChangeCallback}
        />
      </div>
    );
  }
}

SearchBox.propTypes = {
  onSearch: propTypes.func.isRequired
};

export default SearchBox;
