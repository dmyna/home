'use strict'
export const getServerSideProps = (context?: any) => {
    const fs = require('fs');

    const jsonDir = './data/json/';
    const data = () => {
        const obj = {
            // Funções
            get: (reqUrl: string, encoding?: any) => {
                const data = fs.readFileSync(reqUrl, encoding || 'utf-8');
                const json = JSON.parse(data);

                return json;
            },
            getPlaylist: (id: string) => {
                const data = obj.get(`${jsonDir}playlists/${id}.json`);

                return data;
            },
            getPlaylistList: () => {
                const data = obj.get(`${jsonDir}playlists.json`);

                var list: any = [];
                for (let i of data.items) {
                    list.push(i.id);
                }

                return list;
            },
            getUserData: () => {
                const data = obj.get(`${jsonDir}user.json`);

                return data;
            },
            getUiData: () => {
                const data = obj.get(`${jsonDir}uidata.json`);

                return data;
            }
        }
        return obj;
    }
    return data();
}
module.exports = getServerSideProps();