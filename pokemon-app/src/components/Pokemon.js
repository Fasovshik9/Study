import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../css/Pokemon.css";

class Pokemon extends Component {
  render() {
    return (
      <>
        <p>Name: {this.props.name}</p>
        <p>Type: {this.props.type}</p>
        <p>Info: {this.props.aLittleInfo}</p>
        <Link className="link" to="/info_pokemon">
          More Info About Pokémon
        </Link>
      </>
    );
  }
}

export default Pokemon;
