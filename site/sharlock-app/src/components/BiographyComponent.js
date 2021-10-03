import axios from 'axios';
import React, { Component } from 'react';


export class BiographyComponent extends Component {
    constructor() {
        super();
        this.state = {
            biography: {},
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
            <section className="containerBiography containerGrid">
                    <div className="textWrapper">
                        <h1>Биография</h1>
                        <p>{biography.text}</p>
                    </div>
                    <div className="imgWrapper">
                        <img className="rounded-circle" src={biography.img} width={200} height={200}/>
                    </div>
                    <div className="thingWrapper">
                        <h2>Лучшие литературные произведения</h2>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Название</th>
                                    <th>Год</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map(book => (
                                    <tr key={book.id}>
                                        <td>{book.name}</td>
                                        <td>{book.year}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            </section>
        );
    }
}