// Importações
const fs = require('fs');
const path = require('path');
const http = require("http");
const express = require("express");
const app = express();

// Variáveis Globais / Envs
var myGlobal = require('./modules/global.js');
require('dotenv').config({ path: `${myGlobal.__rootdir}.env` });

// Módulos
var spotifyData = require('./modules/spotify.js');


const main = () => {
    spotifyData.updatePlaylistsList();
    spotifyData.writeUserArchive();
}

export default main;