import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

export default class App extends React.Component {
  onTermSubmit = (term) => {
    youtube.get("/search", {
      params: { q: term },
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}
