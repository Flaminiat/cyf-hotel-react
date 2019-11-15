import React, { Component } from "react";
import FakeBookings from "./data/fakeBookings.json";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import Form from "./form";
//import Result from "./result";

class Bookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: FakeBookings
    };
  }

  search = searchVal => {
    console.info("TO DO!", searchVal);
    console.log("Hello");
    const toShow = this.state.results.filter(result => {
      return result.firstName === searchVal || result.surname === searchVal;
    });
    this.setState({ results: toShow });
  };

  booking = newClient => {
    console.info("TO DO!", newClient);
    console.log("Hello");
    this.setState({ results: FakeBookings.concat(newClient) });
  };
  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <SearchResults
            sortBy={this.props.sortBy}
            results={this.state.results}
          />
          <Form booking={this.booking} />
        </div>
      </div>
    );
  }
}
export default Bookings;
