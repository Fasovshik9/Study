import React, { Component } from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import axios from 'axios';
import LiteraryWorks from './components/LiteraryWorks';
import { BiographyComponent } from './components/BiographyComponent';
import { MoviesComponent } from './components/MoviesComponent';
import { MovieComponent } from './components/MovieComponent';
import { BookComponent } from './components/BookComponent';
import CarouselBox from './components/CarouselBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    this.addImg()
  }

  addImg = () => {
    if (this.state.images.length === 0) {
      axios.get('http://localhost:5000/persons')
        .then((response) => {
          this.setState({ images: response.data })
        }).catch((error) => {
          console.log(error);
        });
    }
  }


  render() {
    return (
      <Switch>
        <Route path={`/movies/:movieId`} component={MovieComponent}>
        </Route>
        <Route path={`/books/:bookId`} component={BookComponent}>
        </Route>
        <Route exact path="/">
          <div className='App' >
            <CarouselBox images={this.state.images}/>
            <BiographyComponent />
            <LiteraryWorks />
            <MoviesComponent />
          </div >
        </Route>
      </Switch>
    )
  };
}

export default App;
