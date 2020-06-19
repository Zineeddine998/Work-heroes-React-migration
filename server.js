const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = require('path');
const app = express();

app.use(favicon(__dirname + '/public/icon.ico'));

app.use(express.static(__dirname));

app.get('*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, 'index.html'));

});


app.listen(port);