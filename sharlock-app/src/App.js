import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import axios from 'axios';
import Slider from './components/slider/Slider';
import MainWrapper from './components/MainWrapper';
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
      images: [],
      info: {}
    }
  }

  componentDidMount() {
    this.addImg()
    this.addInfo()
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

  addInfo = () => {
    if (Object.keys(this.state.info).length === 0) {
      axios.get('http://localhost:5000/info')
        .then((response) => {
          this.setState({ info: response.data })
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
            <CarouselBox />
            {this.state.images.length === 0 ? null : <Slider slides={this.state.images} />}
            <MainWrapper img={this.state.info.img} text={this.state.info.text} />
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
