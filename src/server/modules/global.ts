var path = require('path');

const globalMain = () => {
    const obj = {
        __rootdir: path.resolve(__dirname, "../") + "/"
    };
    return obj;
};

export default globalMain();