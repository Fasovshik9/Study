const express = require('express');
const app = express();
const fs = require('fs').promises;
const path = require('path');
const info = 'fullInfo.json';
const img = 'images.json';
var cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/persons', async (request, response) => {
    try {
        response.header('Access-Control-Allow-Origin', request.headers.origin);
        let logs = JSON.parse(await fs.readFile(path.resolve(__dirname, img), 'utf-8'));
        response.send(logs.img);
    } catch (error) {
        response.sendStatus(500);
    }
});

app.get('/biography', async (request, response) => {
    try {
        response.header('Access-Control-Allow-Origin', request.headers.origin);
        const data = JSON.parse(await fs.readFile(path.resolve(__dirname, info), 'utf-8'));
        const biography = data.biography;
        response.send(biography);
    } catch (error) {
        response.sendStatus(500);
    }
});

app.get('/books', async (request, response) => {
    try {
        response.header('Access-Control-Allow-Origin', request.headers.origin);
        const data = JSON.parse(await fs.readFile(path.resolve(__dirname, info), 'utf-8'));
        const books = data.books.map(book => ({
            ...book,
            rating: book.rating.length ? (book.rating.reduce((acc, n) => acc + n, 0) / book.rating.length).toFixed(1) : 0
        }));
        response.send(books);
    } catch (error) {
        response.sendStatus(500);
    }
});

app.get('/books/:bookId', async (request, response) => {
    try {
        const { bookId } = request.params;
        response.header('Access-Control-Allow-Origin', request.headers.origin);
        const data = JSON.parse(await fs.readFile(path.resolve(__dirname, info), 'utf-8'));
        const book = data.books.find(b => b.id === bookId);
        response.send(book
            ? {
                ...book,
                rating: book.rating.length ? (book.rating.reduce((acc, n) => acc + n, 0) / book.rating.length).toFixed(1) : 0
            }
            : null
        );
    } catch (error) {
        response.sendStatus(500);
    }
});

app.post('/books/:bookId', async (request, response) => {
    try {
        response.header('Access-Control-Allow-Origin', request.headers.origin);
        const { bookId } = request.params;
        const { rating } = request.body;
        const data = JSON.parse(await fs.readFile(path.resolve(__dirname, info), 'utf-8'));
        const book = data.books.find(b => b.id === bookId);
        book.rating.push(+rating);
        await fs.writeFile(path.resolve(__dirname, info), JSON.stringify(data), 'utf-8');
        response.send(book
            ? {
                ...book,
                rating: book.rating.length ? (book.rating.reduce((acc, n) => acc + n, 0) / book.rating.length).toFixed(1) : 0
            }
            : null);
    } catch (error) {
        response.sendStatus(500);
    }
});

app.post('/movies/:movieId', async (request, response) => {
    try {
        response.header('Access-Control-Allow-Origin', request.headers.origin);
        const { movieId } = request.params;
        const { rating } = request.body;
        const data = JSON.parse(await fs.readFile(path.resolve(__dirname, info), 'utf-8'));
        const movie = data.movies.find(b => b.id === movieId);
        movie.rating.push(+rating);
        await fs.writeFile(path.resolve(__dirname, info), JSON.stringify(data), 'utf-8');
        response.send(movie
            ? {
                ...movie,
                rating: movie.rating.length ? (movie.rating.reduce((acc, n) => acc + n, 0) / movie.rating.length).toFixed(1) : 0
            }
            : null);
    } catch (error) {
        response.sendStatus(500);
    }
});

app.get('/movies', async (request, response) => {
    try {
        response.header('Access-Control-Allow-Origin', request.headers.origin);
        const data = JSON.parse(await fs.readFile(path.resolve(__dirname, info), 'utf-8'));
        const movies = data.movies.map(movie => ({
            ...movie,
            rating: movie.rating.length ? (movie.rating.reduce((acc, n) => acc + n, 0) / movie.rating.length).toFixed(1) : 0
        }));
        response.send(movies);
    } catch (error) {
        response.sendStatus(500);
    }
});

app.get('/movies/:movieId', async (request, response) => {
    try {
        const { movieId } = request.params;
        response.header('Access-Control-Allow-Origin', request.headers.origin);
        const data = JSON.parse(await fs.readFile(path.resolve(__dirname, info), 'utf-8'));
        const movie = data.movies.find(m => m.id === movieId);
         response.send(movie
            ? {
                ...movie,
                rating: movie.rating.length ? (movie.rating.reduce((acc, n) => acc + n, 0) / movie.rating.length).toFixed(1) : 0
            }
            : null);
    } catch (error) {
        response.sendStatus(500);
    }
});

app.listen(5000, (err) => {
    if (err) {
        return console.log('An error has occurred', err);
    }
});
