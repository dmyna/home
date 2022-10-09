const main = () => {
    const obj = {
        __rootdir: path.resolve(__dirname) + "/"
    }
    return { obj }
}
module.exports = main().obj;