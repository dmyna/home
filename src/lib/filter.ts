'use strict';

const filter = () => {
    const obj = {
        data: {
            playlists: (data: any) => {
                const newData = {
                    images: [
                        {
                            url: data.images[0].url
                        }
                    ],
                    name: data.name,
                    description: data.description
                };

                return newData;
            }
        }
    };
    return obj;
};

module.exports = filter();
export default filter();