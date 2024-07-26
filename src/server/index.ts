// Variáveis Globais / Envs
var myGlobal = require('./modules/global.js');
require('dotenv').config({ path: `${myGlobal.__rootdir}.env` });

// Módulos
var spotifyData = require('./modules/spotify.js');


const main = (): void => {
    spotifyData.updatePlaylistsList();
    spotifyData.writeUserArchive();
};

export default main;