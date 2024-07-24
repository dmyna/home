var path = require('path');

const globalMain = (): Record<string, string> => {
    const obj = {
        __rootdir: path.resolve(__dirname, "../") + "/"
    };

    return obj;
};

export default globalMain();