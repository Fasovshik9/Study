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
                <section className="my-3 d-flex bd-highlight justify-content-center">
                    {movies.map((movie) => (
                        <div key={movie.id} className=" mx-3 bd-highlight card">
                            <Link to={`movies/${movie.id}`} className="link">
                                <img src={movie.poster} className="d-block rounded mx-auto" width={240} height={370} />
                                <div className="containerCard">
                                <h2>{movie.name}</h2>
                                <p>Рейтинг: {movie.rating}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </section>
            </section>
        );
    };
}
