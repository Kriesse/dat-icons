const path = require('path')
const fs = require('fs')

module.export = main

function main () {
  const svgSprite = fs.readFileSync(path.join(__dirname, 'sprite.svg'), 'utf8')
}
