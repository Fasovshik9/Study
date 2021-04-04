import React, { Component } from 'react';
import Person from './Person';
import axios from 'axios';
import '../css/WrapperPerson.css'
import sherlock2 from '../assets/sherlock1.png';
import sherlock1 from '../assets/sherlock2.jpg';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      ansver: ''
    }
    this.input = React.createRef();
  }

  handleSubmit = () => {
    alert('Ansver: ' + this.state.ansver);
  }

  nameValidation

  nameValidation = (e) => {
    e.preventDefault();
    if (this.input.current.value) {
      axios({
        method: 'post',
        url: 'http://localhost:5000/persone',
        headers: { 'Content-Type': 'application/json' },
        data: {
          'name': this.input.current.value
        }
      })
        .then((response) => {
          if (response.data) {
            this.setState({ ansver: 'Yes, you are right' });
          } else {
            this.setState({ ansver: 'No, try again' });
          }
          this.handleSubmit()
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  render() {
    return (
      <main className="main">
        <h1>Who's That Famous Person?</h1>
        { this.props.showResults ? <img src={sherlock1} alt="person" /> : <img src={sherlock2} alt="person" />}
        <form className="text form" onSubmit={this.nameValidation}>
          <label for="keyName" >
            First Name:
            </label>
          <input type="text" id="keyName" ref={this.input} />
          <input type="submit" value="Submit" />
        </form>
        <button className="button" onClick={this.props.wrapperShowResults}>{this.props.showResults ? "Return" : "Answer"}</button>
        { this.props.showResults ? <Person {...this.props.profileDetails} /> : null}
      </main>
    );
  }
}

export default SearchBar;
