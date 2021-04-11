import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class MoviesComponent extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/movies')
            .then((response) => response.data)
            .then((movies) => this.setState({ movies }))
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { movies } = this.state;
        return (
            <section>
                <h1>Лучшие экранизации</h1>
                <section>
                    {movies.map((movie) => (
                        <div>
                            <Link to={`movies/${movie.id}`}>
                                <h2>{movie.name}</h2>
                                <img src={movie.poster} />
                            </Link>
                        </div>
                    ))}
                </section>
            </section>
        );
    };
}
