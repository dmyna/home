// Importações
var fs = require('fs');
// const path = require('path');
// const https = require('https');
// const express = require('express');
// const app = express();
// const router = express.Router();

// Variáveis Globais / Envs
var myGlobal = require('./modules/global.js');
require('dotenv').config({
  path: `${myGlobal.__rootdir}.env`
});

// Módulos
var spotifyData = require('./modules/spotify.js');

// app.get('/', (req, res) => {
//     res.sendFile(`index.html`);
// });

// app.use(express.static('/'));
// app.listen(process.env.PORT, () => {
//     console.log(`> Servidor iniciado na porta: ${process.env.PORT}`);
// });
const http = require("http");
const express = require("express");
const app = express();
const main = () => {
  spotifyData.updatePlaylistsList();
  spotifyData.writeUserArchive();
};
app.use(express.static(path.join(__dirname, "/")));
app.get('/', function (req, res) {
  var options = {
    root: path.join(__dirname)
  };
  var fileName = './index.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});
http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));
module.exports = main;