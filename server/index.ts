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
    const PORT: number = 3000;

    app.use(express.static(path.join(__dirname, "/")))

    app.get('/', function (req: any, res: any) {
        var options = {
            root: path.join(__dirname)
        };

        var fileName = './'
        res.sendFile(fileName, options, function (err: any) {
            if (err) {
                console.log(err);
            } else {
                console.log('Sent:', fileName);
            }
        });
    });

    http.createServer(app).listen(PORT, () => {
        console.log(`Servidor rodando local na porta ${PORT}`);
    });

    spotifyData.updatePlaylistsList();
    spotifyData.writeUserArchive();
}

export default main;