import React, { Component } from 'react';
import axios from 'axios';

export class BookComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: null
        };
    }

    componentDidMount() {
        const { bookId } = this.props.match.params;
        axios.get(`http://localhost:5000/books/${bookId}`)
            .then((response) => response.data)
            .then((book) => this.setState({ book }))
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { book } = this.state;
        return !book ? null : (
            <section>
                <h2>{book.name}</h2>
                <img src={book.poster} />
                <p>{book.description}</p>
                <a href={book.link} target="_blank">Купить</a>
            </section>
        );
    };
}
