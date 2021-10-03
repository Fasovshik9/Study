import React, { Component } from 'react';
import axios from 'axios';

export class BookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: null,
            disabled: false
        };
    }

    componentDidMount() {
        this.getBook()
    }

    sendNewRating = (e) => {
        const { bookId } = this.props.match.params;
        axios({
            method: 'post',
            url: `http://localhost:5000/books/${bookId}`,
            headers: { 'Content-Type': 'application/json' },
            data: {
                'rating': e.target.value
            }
        }).then(() => {
            this.getBook()
            this.getDisabled()
        })
            .catch((error) => {
                console.log(error);
            });
    }

    getBook = () => {
        const { bookId } = this.props.match.params;
        axios.get(`http://localhost:5000/books/${bookId}`)
            .then((response) => response.data)
            .then((book) => this.setState({ book }))
            .catch((error) => {
                console.error(error);
            });
    }

    getDisabled = () => {
        this.setState({ disabled: true })
    }

    render() {
        const { book } = this.state;
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
        return !book ? null : (
            <section className="containerGrid containerItem">
                <div className="textWrapper">
                    <h2>{book.name}</h2>
                    <p>{book.description}</p>
                    <p className="textBold">Рейтинг: {book.rating}</p>
                    <div>{inputs}</div>
                    <a href={book.link} target="_blank" className="link">Купить</a>
                </div>
                <div className="imgWrapper">
                    <img src={book.poster} />
                </div>
            </section>
        );
    };
}
