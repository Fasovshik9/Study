import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import WrapperPerson from './components/WrapperPerson'
import InfoPerson from './components/InfoPerson'
import { Redirect, Route, Switch } from "react-router-dom";
class SearchBar extends Component {

  constructor() {
    super();
    this.state = {
      profileDetails: {},
      showResults: false
    }
    this.fetchPerson = this.fetchPerson.bind(this);
    this.getShowResults = this.getShowResults.bind(this);
    this.wrapperShowResults = this.wrapperShowResults.bind(this);
  }

  wrapperShowResults() {
    if (Object.keys(this.state.profileDetails).length === 0) {
      this.fetchPerson()
    }
    this.getShowResults()
  }

  getShowResults() {
    this.setState({ showResults: !this.state.showResults });
  }

  fetchPerson() {
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
          <Route exact path="/" render={() => <WrapperPerson showResults={this.state.showResults} wrapperShowResults={this.wrapperShowResults} profileDetails={this.state.profileDetails} />} />
          {Object.keys(this.state.profileDetails).length === 0 ? <Redirect to="/" /> : <Route
            path="/info_person"
            render={() => <InfoPerson{...this.state.profileDetails.info} getShowResults={this.getShowResults} />}
          />}
        </Switch>
      </div>
    );
  }
}

export default SearchBar;
