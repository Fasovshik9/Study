const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const info = 'info.json';
var cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/data', (request, response) => {
    response.header('Access-Control-Allow-Origin', request.headers.origin);
    let logs = JSON.parse(fs.readFileSync(path.resolve(__dirname, info), 'utf-8'));
    response.send(logs);
    return response.end();
});

app.post('/persone', (request, response) => {
    response.header('Access-Control-Allow-Origin', request.headers.origin);

    let logs = JSON.parse(fs.readFileSync(path.resolve(__dirname, info), 'utf-8'));
    if (request.body.name == logs.name) {
        response.send(true);
    } else {
        response.send(false);
    }
});

app.listen(5000, (err) => {
    if (err) {
        return console.log('An error has occurred', err);
    }
});