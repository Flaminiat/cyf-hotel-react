import React, { Component } from "react";
import Result from "./result";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: props.results,
      direction: "default"
    };
  }

  // sort by FirstName
  sortAlfFirstName = () => {
    this.setState({ direction: "alphabetically" });
    this.setState(
      this.state.results.sort(function(a, b) {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 1;
        }
        return 0;
      })
    );
    console.log("sorted alphabetically!", this.state.direction);
  };
  sortRevFirstName = () => {
    this.setState({ direction: "reverse" });
    this.setState(
      this.state.results.sort(function(a, b) {
        if (a.firstName > b.firstName) {
          return -1;
        }
        if (a.key < b.key) {
          return 1;
        }
        return 0;
      })
    );
    console.log("sorted alphabetically reverse!", this.state.direction);
  };

  sortByFirstName = () => {
    console.log("I am clicked to sort it!");
    this.state.direction === "alphabetically"
      ? this.sortRevFirstName()
      : this.sortAlfFirstName();
  };

  // sort by Title
  sortAlfTitle = () => {
    this.setState({ direction: "alphabetically" });
    this.setState(
      this.state.results.sort(function(a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      })
    );
    console.log("sorted alphabetically!", this.state.direction);
  };
  sortRevTitle = () => {
    this.setState({ direction: "reverse" });
    this.setState(
      this.state.results.sort(function(a, b) {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
        return 0;
      })
    );
    console.log("sorted alphabetically reverse!", this.state.direction);
  };

  sortByTitle = () => {
    console.log("I am clicked to sort it!");
    this.state.direction === "alphabetically"
      ? this.sortRevTitle()
      : this.sortAlfTitle();
  };

  // sort by Surname
  sortAlfSurname = () => {
    this.setState({ direction: "alphabetically" });
    this.setState(
      this.state.results.sort(function(a, b) {
        if (a.surname < b.surname) {
          return -1;
        }
        if (a.surname > b.surname) {
          return 1;
        }
        return 0;
      })
    );
    console.log("sorted alphabetically!", this.state.direction);
  };
  sortRevSurname = () => {
    this.setState({ direction: "reverse" });
    this.setState(
      this.state.results.sort(function(a, b) {
        if (a.surname > b.surname) {
          return -1;
        }
        if (a.surname < b.surname) {
          return 1;
        }
        return 0;
      })
    );
    console.log("sorted alphabetically reverse!", this.state.direction);
  };

  sortBySurname = () => {
    console.log("I am clicked to sort it!");
    this.state.direction === "alphabetically"
      ? this.sortRevSurname()
      : this.sortAlfSurname();
  };

  render() {
    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Select</th>
            <th scope="col">Id</th>
            <th scope="col">
              <button className="btn btn-primary" onClick={this.sortByTitle}>
                Title
              </button>
            </th>
            <th scope="col">
              {" "}
              <button
                className="btn btn-primary"
                onClick={this.sortByFirstName}
              >
                First Name
              </button>
            </th>
            <th scope="col">
              <button className="btn btn-primary" onClick={this.sortBySurname}>
                Surname
              </button>
            </th>
            <th scope="col">E-mail</th>
            <th scope="col">Room Id</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">N° of Days</th>
          </tr>
        </thead>
        <tbody>
          {this.props.results.map(object => {
            return <Result object={object} key={object.id} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default SearchResults;
