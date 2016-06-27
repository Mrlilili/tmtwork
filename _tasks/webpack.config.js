var fs = require('fs');
var devJsPath = './src/js/';
var entryObj = {};
fs.readdir(devJsPath, function (err, files) {
    if (err) {
        console.log(err);
        return;
    }
    files.forEach(function (fileName) {
        fs.stat(devJsPath + fileName, function (err, stats) {
            if (err) throw  err;
            if (stats.isFile()) {

                entryObj['test'] = devJsPath + fileName;
            }
        })
    });
    console.log(entryObj);
})



module.exports = {
    entry: {
        app: './src/js/index.js'
    },
    output: {
        filename: '[name].js'
    }
}
