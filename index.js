var path = require('path')
var html = require('bel')
var fs = require('fs')

module.exports = main

function main () {
  var sprite = fs.readFileSync(path.join(__dirname, 'sprite.svg'), 'utf8')

  var parentEl = html`<div></div>`
  parentEl.innerHTML = sprite
  var el = parentEl.childNodes[0]

  return el
}
