var fs = require('fs');
var path = require('path');
var projectName = process.argv[2];

var dirConfig = {
    css: './css',
    html: './html',
    img: './img',
    js: './js',
    slice: './slice'
}
if(fs.existsSync(projectName)){
    console.log('项目目录已存在');
}else{
    fs.mkdirSync(projectName)
    Object.keys(dirConfig).forEach(function (val) {
        fs.mkdirSync(path.join(projectName, dirConfig[val]))
    })
}
