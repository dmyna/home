'use strict';
var request = require('request');
var fs = require('fs');
var myGlobal = require('../modules/global.js');

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
                'Authorization': "Basic " + //@ts-ignore
                    (new Buffer.alloc(authorization.length, authorization).toString('base64'))
            },
            form: {
                grant_type: 'client_credentials'
            },
            json: true
        },
        requestSpotify: (url: string, callback: Function) => {
            request.post(obj.authOptions, (err: any, res: any, body: any) => {
                const token = body.access_token;
                const options = {
                    url: url,
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                }
                request.get(options, (err: any, res: any, body: object) => {
                    callback(res, body, err);
                })
            })
        },
        updatePlaylistsList: () => {// Atualizar as playlists
            obj.requestSpotify(`${apiBase}users/${myUser}/playlists?limit=50`, (res: any, body: object) => {
                fs.writeFileSync(`${jsonDir}playlists.json`, JSON.stringify(body));
                obj.repeatRequestIfNextExists();
                obj.writeAllPlaylists();
            });
        },
        repeatRequestIfNextExists: () => {
            fs.readFile(`${jsonDir}/playlists.json`, 'utf-8', (err: any, data: string) => {
                var newJSON = JSON.parse(data);

                if (!newJSON.next) return;

                obj.requestSpotify(newJSON.next, (res: string, body: any) => {
                    newJSON.items = newJSON.items.concat(body.items);
                    newJSON.next = body.next;
                    fs.writeFileSync(`${jsonDir}playlists.json`, JSON.stringify(newJSON));

                    if (!newJSON.next) return;

                    obj.repeatRequestIfNextExists();
                });
            });
        },
        listPlaylistsId: (callback: Function) => {
            fs.readFile(`${jsonDir}playlists.json`, 'utf-8', (err: any, data: string) => {
                const dataJSON = JSON.parse(data);
                var playlists = [];
                for (let i of dataJSON.items) {
                    playlists.push(i.id);
                }
                callback(playlists);
            });
        },
        getUserData: (callback: Function) => {
            obj.requestSpotify(`${apiBase}users/${myUser}`, (res: any, body: object) => {
                callback(body);
            });
        },
        descriptionFilter: (body: any, id: string) => {
            var text = body.description;
            var search = text.indexOf("&#x2F;&#x2F; (");
            if (search == -1) {
                console.log(`${body.name} - (${id}): Comentário não encontrado`);
            } else {
                var comment = text.slice(search);
                body.description = text.replace(comment, "");
            }
            return body;
        },
        writePlaylistArchive: (currentPlaylist: string) => {
            obj.requestSpotify(`${apiBase}playlists/${currentPlaylist}`, (res: any, body: object) => {
                fs.writeFileSync(`${jsonDir}playlists/${currentPlaylist}.json`,
                    JSON.stringify(obj.descriptionFilter(body, currentPlaylist)));
            });
        },
        writeAllPlaylists: () => {
            obj.listPlaylistsId((playlists: string) => {
                for (let i of playlists) {
                    obj.writePlaylistArchive(i);
                }
            })
        },
        writeUserArchive: () => {
            obj.getUserData((body: object) => {
                fs.writeFileSync(`${jsonDir}user.json`, JSON.stringify(body));
            })
        }
    }
    return obj;
}

export default spotifyMain();