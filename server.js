const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
var webpack = require('webpack');
var config = require('./webpack.prod.config');
const compiler = webpack(config);
const app = express();

// app.use(express.static(path.join(__dirname, 'public')));
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port);