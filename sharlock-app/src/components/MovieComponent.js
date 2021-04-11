import React, { Component } from 'react';
import axios from 'axios';

export class MovieComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null
        };
    }

    componentDidMount() {
        const { movieId } = this.props.match.params;
        axios.get(`http://localhost:5000/movies/${movieId}`)
            .then((response) => response.data)
            .then((movie) => this.setState({ movie }))
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { movie } = this.state;
        return !movie ? null : (
            <section>
                <h2>{movie.name}</h2>
                <img src={movie.poster} />
                <p>{movie.description}</p>
                <a href={movie.link} target="_blank">Смотреть онлайн</a>
            </section>
        );
    };
}
