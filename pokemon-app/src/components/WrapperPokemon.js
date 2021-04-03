import React, { Component } from 'react';
import Pokemon from './Pokemon';
import '../css/WrapperPokemon.css'
import pokemon from '../assets/pokemon.jpg';
import pokemon2 from '../assets/pokemon2.png';

class SearchBar extends Component {
  render() {
    return (
      <main className="main">
        <h1>Who's That Pokémon?</h1>
        { this.props.showResults ? <img src={pokemon2} alt="pokemon" /> : <img src={pokemon} alt="pokemon" />}
        <button className="button" onClick={this.props.wrapperShowResults}>{this.props.showResults ? "Return" : "Answer"}</button>
        { this.props.showResults ? <Pokemon {...this.props.profileDetails} /> : null}
      </main>
    );
  }
}

export default SearchBar;
