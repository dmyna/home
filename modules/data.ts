'use strict'
export const getServerSideProps = (context?: any) => {
    const fs = require('fs');

    const jsonDir = 'data/json/';
    const data = () => {
        const obj = {
            // Funções
            get: (reqUrl: string, encoding?: any) => {
                const data = fs.readFileSync(reqUrl, encoding || 'utf-8');
                const json = JSON.parse(data);

                return json;
            },
            verifyStatus: (data: any) => {
                if (data.status) {
                    if (data.status === 200) {
                        return data;
                    } else {
                        return console.log(`Error: ${data.status} - ${data.message}`);
                    }
                }
                return data;
            },
            getPlaylist: (id: string) => {
                const data = obj.verifyStatus(obj.get(`${jsonDir}playlists/${id}.json`));

                return data;
            },
            getPlaylistList: () => {
                const data = obj.verifyStatus(obj.get(`${jsonDir}playlists.json`));

                var list: string[] = [];
                for (let i of data.items) {
                    list.push(i.id);
                }

                return list;
            },
            getUserData: () => {
                const data = obj.verifyStatus(obj.get(`${jsonDir}user.json`));

                return data;
            },
            getUiData: () => {
                const data = obj.verifyStatus(obj.get(`${jsonDir}uidata.json`));

                return data;
            },
            getUserPerfil: () => {
                const data = obj.verifyStatus(obj.get(`${jsonDir}perfil.json`));

                return data;
            }
        }
        return obj;
    }
    return data();
}
module.exports = getServerSideProps();