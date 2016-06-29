var fs = require('fs');
var devJsPath = './src/js/';
var entryObj = {};


fs.readdirSync(devJsPath).forEach(function (fileName) {
    var fileNameArray = fileName.split('.')
    //console.log(fileNameArray[0]);
    if (fileNameArray[1] == 'js') {
        entryObj[fileNameArray[0]] = devJsPath+fileName;
    }
})
console.log(entryObj);

module.exports = {
    entry:entryObj,
    output: {
        filename: '[name].js'
    }
}
