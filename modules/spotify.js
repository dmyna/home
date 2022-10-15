'use strict';

const {
  waitForDebugger
} = require('inspector');
const request = require('request');
const jsonDir = `${myGlobal.__rootdir}data/json/`;

/** Documentação do Módulo
    @param {Factory} spotifyMain - Factory das funções gerais do spotify
        @param {Object} authOptions - Opções de autenticação do spotify
        @param {Function} requestSpotify - Requisição básica para a api do spotify
        @param {Function} updatePlaylistsList - Updater da database de playlists
        @param {Function} repeatRequestIfNextExists - Algoritmo de loop devido o limite do spotify
        @param {Function} listPlaylistsId - Insere os id's de todas as playlists num array
        @param {Function} writePlaylistArchive - Escreve os dados de uma playlist em seu arquivo específico
        @param {Function} writeAllPlaylists - Escreve os dados de todas as playlists em seus devidos arquivos

**/

const spotifyMain = () => {
  const client_id = process.env.DEVMYNA_PAGE_SPOTIFY_CLIENT_ID;
  const client_secret = process.env.DEVMYNA_PAGE_SPOTIFY_CLIENT_SECRET;
  const myUser = process.env.DEVMYNA_PAGE_SPOTIFY_USER;
  const apiBase = "https://api.spotify.com/v1/";
  const authorization = client_id + ":" + client_secret;
  const obj = {
    authOptions: {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': "Basic " +
        //@ts-ignore
        new Buffer.alloc(authorization.length, authorization).toString('base64')
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    },
    requestSpotify: (url, callback) => {
      request.post(obj.authOptions, (err, res, body) => {
        const token = body.access_token;
        const options = {
          url: url,
          headers: {
            'Authorization': 'Bearer ' + token
          },
          json: true
        };
        request.get(options, (err, res, body) => {
          callback(res, body, err);
        });
      });
    },
    updatePlaylistsList: () => {
      // Atualizar as playlists
      obj.requestSpotify(`${apiBase}users/${myUser}/playlists?limit=50`, (res, body) => {
        fs.writeFileSync(`${jsonDir}playlists.json`, JSON.stringify(body));
        obj.repeatRequestIfNextExists();
        obj.writeAllPlaylists();
      });
    },
    repeatRequestIfNextExists: () => {
      fs.readFile(`${jsonDir}/playlists.json`, 'utf-8', (err, data) => {
        var newJSON = JSON.parse(data);
        if (!newJSON.next) return;
        obj.requestSpotify(newJSON.next, (res, body) => {
          newJSON.items = newJSON.items.concat(body.items);
          newJSON.next = body.next;
          fs.writeFileSync(`${jsonDir}playlists.json`, JSON.stringify(newJSON));
          if (!newJSON.next) return;
          obj.repeatRequestIfNextExists();
        });
      });
    },
    listPlaylistsId: callback => {
      fs.readFile(`${jsonDir}playlists.json`, 'utf-8', (err, data) => {
        const dataJSON = JSON.parse(data);
        var playlists = [];
        for (let i of dataJSON.items) {
          playlists.push(i.id);
        }
        callback(playlists);
      });
    },
    getUserData: callback => {
      obj.requestSpotify(`${apiBase}users/${myUser}`, (res, body) => {
        callback(body);
      });
    },
    descriptionFilter: (body, id) => {
      var text = body.description;
      var search = text.indexOf("&#x2F;&#x2F; (");
      if (search == -1) {
        console.log(`${id}: Comentário não encontrado`);
      } else {
        var comment = text.slice(search);
        body.description = text.replace(comment, "");
      }
      return body;
    },
    writePlaylistArchive: currentPlaylist => {
      obj.requestSpotify(`${apiBase}playlists/${currentPlaylist}`, (res, body) => {
        fs.writeFileSync(`${jsonDir}playlists/${currentPlaylist}.json`, JSON.stringify(obj.descriptionFilter(body, currentPlaylist)));
      });
    },
    writeAllPlaylists: () => {
      obj.listPlaylistsId(playlists => {
        for (let i of playlists) {
          obj.writePlaylistArchive(i);
        }
      });
    },
    writeUserArchive: () => {
      obj.getUserData(body => {
        fs.writeFileSync(`${jsonDir}user.json`, JSON.stringify(body));
      });
    }
  };
  return obj;
};
module.exports = spotifyMain();