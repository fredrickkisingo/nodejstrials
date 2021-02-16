const fs = require('fs')

const path = require('path')

console.log(path.join('../../hello','app/','../things'))

// const file =fs.readFileSync('./lib.js', {encoding: 'utf-8'}).toString()

// console.log(file)

// fs.writeFileSync('./lib.js','var me="me"')