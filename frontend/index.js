import React, { Component } from "react";
import ReactDOM from "react-dom";

class RentIT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    fetch("/api/listings")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ listings: data });
      });
  }

  render() {
    return (
      <div>
        <h1>RentIT</h1>
        <ul>
          {this.state.listings.map((listing) => (
            <li key={listing.id}>
              {listing.title} - ${listing.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<RentIT />, document.getElementById("root"));
