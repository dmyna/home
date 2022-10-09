// Importações
const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const app = express();
const router = express.Router();

// Variáveis Globais / Envs
const global = require('./modules/global.js');
require('dotenv').config({ path: `${global.__rootdir}.env` });

// Módulos
const spotifyData = require('./modules/spotify.js');

router.get('/', (req, res) => {
    res.sendFile(`${global.__rootdir}index.html`);
});

app.use('/', router);
app.listen(process.env.PORT, () => {
    console.log(`> Servidor iniciado na porta: ${process.env.PORT}`);
});

const main = () => {
    spotifyData.updatePlaylistsList();
}
module.exports = main;