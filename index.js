// Importações
const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const app = express();

// Variáveis Globais / Envs
require('dotenv').config({path: './.env'});
const global = require('./modules/global.js');

console.log(global.__rootdir)
// Módulos
const spotifyData = require('./modules/spotify.js');

const server = https.createServer(app);
var PORT = 10000;

app.use(express.static('./'));
server.listen(PORT);

console.log(`> Servidor iniciado na porta: ${PORT}`);

const main = () => {
    spotifyData.updatePlaylistsList();
}
module.exports = main;