const path = require('path');
const globalMain = () => {
  const obj = {
    __rootdir: path.resolve(__dirname, "../") + "/"
  };
  return obj;
};
console.log();
module.exports = globalMain();