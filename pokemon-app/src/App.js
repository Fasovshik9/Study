import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import WrapperPokemon from './components/WrapperPokemon'
import InfoPokemon from './components/InfoPokemon'
import { Redirect, Route, Switch } from "react-router-dom";
class SearchBar extends Component {

  constructor() {
    super();
    this.state = {
      profileDetails: {},
      showResults: false
    }
    this.fetchPokemon = this.fetchPokemon.bind(this);
    this.getShowResults = this.getShowResults.bind(this);
    this.wrapperShowResults = this.wrapperShowResults.bind(this);
  }

  wrapperShowResults() {
    if (Object.keys(this.state.profileDetails).length === 0) {
      this.fetchPokemon()
    }
    this.getShowResults()
  }

  getShowResults() {
    this.setState({ showResults: !this.state.showResults });
  }

  fetchPokemon() {
    axios.get('http://localhost:5000/data')
      .then((response) => {
        this.setState({ profileDetails: response.data })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <WrapperPokemon showResults={this.state.showResults} wrapperShowResults={this.wrapperShowResults} profileDetails={this.state.profileDetails} />} />
          {Object.keys(this.state.profileDetails).length === 0 ? <Redirect to="/" /> : <Route
            path="/info_pokemon"
            render={() => <InfoPokemon{...this.state.profileDetails.info} getShowResults={this.getShowResults} />}
          />}
        </Switch>
      </div>
    );
  }
}

export default SearchBar;
