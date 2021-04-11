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
                {this.state.books.map((book) => (
                    <div>
                        <Link to={`books/${book.id}`}>
                            <h2>{book.name}</h2>
                            <img src={book.poster} />
                        </Link>
                    </div>
                ))}
            </section>
        );
    };
}

export default LiteraryWorks;