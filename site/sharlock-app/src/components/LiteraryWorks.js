import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class LiteraryWorks extends Component {
    constructor() {
        super();
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/books')
            .then((response) => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <section>
                <h1>Лучшие литературные произведения</h1>
                <section className="my-3 d-flex bd-highlight justify-content-center">
                {this.state.books.map((book) => (
                    <div key={book.id} className=" mx-3 bd-highlight card">
                        <Link to={`books/${book.id}`} className="link">
                            <img src={book.poster} />
                            <div className="containerCard">
                            <h2>{book.name}</h2>
                            <p>Рейтинг: {book.rating}</p>
                            </div>
                        </Link>
                    </div>
                ))}
                </section>
            </section>
        );
    };
}

export default LiteraryWorks;