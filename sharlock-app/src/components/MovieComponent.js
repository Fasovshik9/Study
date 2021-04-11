import React, { Component } from 'react';
import axios from 'axios';

export class MovieComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null,
            disabled: false
        };
    }

    componentDidMount() {
        this.getMovie()
    }

    sendNewRating = (e) => {
        const { movieId } = this.props.match.params;
        axios({
            method: 'post',
            url: `http://localhost:5000/movies/${movieId}`,
            headers: { 'Content-Type': 'application/json' },
            data: {
                'rating': e.target.value
            }
        }).then(() => {
            this.getMovie()
            this.getDisabled()
        })
            .catch((error) => {
                console.log(error);
            });
    }

    getMovie = () => {
        const { movieId } = this.props.match.params;
        axios.get(`http://localhost:5000/movies/${movieId}`)
            .then((response) => response.data)
            .then((movie) => this.setState({ movie }))
            .catch((error) => {
                console.error(error);
            });
    }

    getDisabled = () => {
        this.setState({ disabled: true })
    }

    render() {
        const { movie } = this.state;
        const inputs = [];
        for (let i = 1; i < 6; i++) {
            inputs.push(
                <div className="form_radio_btn">
                    <label key={i}>{i}
                        <br />
                        <input type="radio" name="rating" value={i} onChange={this.sendNewRating} disabled={this.state.disabled}
                        />
                    </label>
                </div>
            );
        }
        return !movie ? null : (
            <section className="containerGrid containerItem">
                <div className="textWrapper">
                    <h2>{movie.name}</h2>
                    <p>{movie.description}</p>
                    <p className="textBold">Рейтинг: {movie.rating}</p>
                    <div>{inputs}</div>
                    <a href={movie.link} target="_blank" className="link">Смотреть онлайн</a>
                </div>
                <div className="imgWrapper">
                    <img src={movie.poster} height="100%" />
                </div>
            </section>
        );
    };
}
