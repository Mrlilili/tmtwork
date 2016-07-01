var fs = require('fs');
var devJsPath = './src/js/';
var entryObj = {};


fs.readdirSync(devJsPath).forEach(function (fileName) {
    var fileNameArray = fileName.split('.')
    //console.log(fileNameArray[0]);
    if (fileNameArray[1] == 'js') {
        entryObj[fileNameArray[0]] = devJsPath + fileName;
    }
})
console.log(entryObj);

module.exports = {
    entry: entryObj,
    output: {
        filename: '[name].js'
    },
    resolve: {
        root: ['./'],
        alias: {
            //'jquery': 'lib/jquery/jquery',
            'test':'lib/t1'
        }
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.png$/, loader: "url-loader?limit=100000"},
            {test: /\.jpg$/, loader: "file-loader"},
            {test: /\.scss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap"]}
        ]
    },

}
