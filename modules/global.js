const path = require('path');

const main = () => {
    const obj = {
        __rootdir: path.resolve(__dirname, "../") + "/"
    }
    return { obj }
}
console.log()
module.exports = main().obj;