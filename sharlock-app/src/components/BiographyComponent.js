import axios from 'axios';
import React, { Component } from 'react';


export class BiographyComponent extends Component {
    constructor() {
        super();
        this.state = {
            biography: '',
            books: []
        };
    }

    componentDidMount() {
        Promise
            .all([
                axios.get('http://localhost:5000/biography'),
                axios.get('http://localhost:5000/books')
            ])
            .then(([biographyResponse, booksResponse]) => [biographyResponse.data, booksResponse.data])
            .then(([biography, books]) => {
                this.setState({ biography, books });
            });
    }

    render() {
        const { biography, books } = this.state;
        return (
            <section>
                <section>
                    <h1>Биография</h1>
                    <p>{biography}</p>
                </section>
                <section>
                    <h1>Произведения</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Название</th>
                                <th>Год</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map(book => (
                                <tr>
                                    <td>{book.name}</td>
                                    <td>{book.year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </section>
        );
    }
}