import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../css/Person.css";

class Person extends Component {
  render() {
    return (
      <>
        <p>Name: {this.props.name}</p>
        <p>Type: {this.props.type}</p>
        <p>Info: {this.props.aLittleInfo}</p>
        <Link className="link" to="/info_person">
          More Info About Person
        </Link>
      </>
    );
  }
}

export default Person;
