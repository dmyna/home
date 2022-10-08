'use strict';
const request = require('request');
const jsonDir = `${__rootdir}apps/custom/devmyna_page/data/json/`;

// Dev Version
const fs = require('fs');

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
    const obj = {
        authOptions: {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': "Basic " +
                    (new Buffer(client_id + ":" + client_secret).toString('base64'))
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
                }
                request.get(options, (err, res, body) => {
                    callback(res, body, err);
                })
            })
        },
        updatePlaylistsList: () => {// Atualizar as playlists
            obj.requestSpotify(`${apiBase}users/${myUser}/playlists?limit=50`, (res, body) => {
                fs.writeFileSync(`${jsonDir}/playlists.json`, JSON.stringify(body));
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
                    fs.writeFileSync(`${jsonDir}/playlists.json`, JSON.stringify(newJSON));

                    if (!newJSON.next) return;

                    obj.repeatRequestIfNextExists();
                });
            });
        },
        listPlaylistsId: callback => {
            fs.readFile(`${jsonDir}playlists.json`, 'utf-8', (err, data) => {
                const dataJSON = JSON.parse(data);
                var playlists = [];
                for (let i = 0; i <= dataJSON.items.length - 1; i++) {
                    playlists.push(dataJSON.items[i].id);
                }
                callback(playlists);
            });
        },
        writePlaylistArchive: currentPlaylist => {
            obj.requestSpotify(`${apiBase}playlists/${currentPlaylist}`, (res, body) => {
                fs.writeFileSync(`${jsonDir + "playlists/" + currentPlaylist}.json`, JSON.stringify(body));
            });
        },
        writeAllPlaylists: () => {
            obj.listPlaylistsId((playlists) => {
                for (let i = 0; i <= playlists.length - 1; i++) {
                    obj.writePlaylistArchive(playlists[i]);
                }
            })
        }
    }
    return { obj };
}
module.exports = spotifyMain().obj;