import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../css/Person.css";

class Person extends Component {
  render() {
    return (
      <div className="text">
        <p className="widhtText">First Name: {this.props.firstName}</p>
        <p>Second Name: {this.props.secondName}</p>
        <p>Info: {this.props.aLittleInfo}</p>
        <Link className="link" to="/info_person">
          More Info About Person
        </Link>
      </div>
    );
  }
}

export default Person;
