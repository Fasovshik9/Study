const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const info = 'info.json';

app.get('/data', (request, response) => {
    response.header('Access-Control-Allow-Origin',  request.headers.origin);
    let logs = JSON.parse(fs.readFileSync(path.resolve(__dirname, info), 'utf-8'));
    response.send(logs);
    return response.end();
});

app.listen(5000, (err) => {
    if (err) {
        return console.log('An error has occurred', err);
    }
});