// Importações
const fs = require('fs');
// const path = require('path');
// const https = require('https');
// const express = require('express');
// const app = express();
// const router = express.Router();

// Variáveis Globais / Envs
const global = require('./modules/global.js');
require('dotenv').config({ path: `${global.__rootdir}.env` });

// Módulos
const spotifyData = require('./modules/spotify.js');

// app.get('/', (req, res) => {
//     res.sendFile(`index.html`);
// });

// app.use(express.static('/'));
// app.listen(process.env.PORT, () => {
//     console.log(`> Servidor iniciado na porta: ${process.env.PORT}`);
// });

const main = () => {
    spotifyData.updatePlaylistsList();
    spotifyData.writeUserArchive();
}
module.exports = main;