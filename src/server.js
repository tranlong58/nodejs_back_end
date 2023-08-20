const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//khai bao route
app.get('/', (req, res) => {
    res.send('Hello World!!!');
});

app.get('/abc', (req, res) => {
    res.render('sample.ejs');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});