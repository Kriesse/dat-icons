# dat-icons

[![NPM version][npm-image]][npm-url]

SVG icons for [dat project](http://dat-data.com) and related projects.

## Usage

```js
const svgSprite = require('dat-icons')
document.body.innerHTML += svgSprite()
```

Make sure to include this sprite in your page as the first element after the `<body>` opening tag.

Icons can later be referenced like so:

```html
<svg><use xlink:href="#daticon-happy-dat"></use></svg>
```

If this looks unfamiliar, read more about an SVG workflow using SVG sprites and `<use>` [here](https://www.sitepoint.com/a-working-svg-workflow-for-accessible-icons/).

### Icon Names

- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/clipboard.svg"> `daticon-clipboard`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/create-new-dat.svg"> `daticon-create-new-dat`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/delete.svg"> `daticon-delete`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/download.svg"> `daticon-download`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/edit-dat.svg"> `daticon-edit-dat`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/file.svg"> `daticon-file`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/folder.svg"> `daticon-folder`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/happy-dat.svg"> `daticon-happy-dat`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/hexagon-outlines.svg"> `daticon-hexagon-outlines`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/import-dat.svg"> `daticon-import-dat`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/link.svg"> `daticon-link`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/loading.svg"> `daticon-loading`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/lock.svg"> `daticon-lock`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/menu.svg"> `daticon-menu`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/open-in-desktop.svg"> `daticon-open-in-desktop`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/open-in-finder.svg"> `daticon-open-in-finder`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/question.svg"> `daticon-question`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/sad-dat.svg"> `daticon-sad-dat`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/star-dat.svg"> `daticon-star-dat`
- <img width="16px" src="https://cdn.rawgit.com/kriesse/dat-icons/master/icons/network.svg"> `daticon-network`

## Build

to build SVG sprite:

```shell
npm install
npm run build-icons
```


[npm-image]: https://img.shields.io/npm/v/dat-icons.svg?style=flat-square
[npm-url]: https://npmjs.org/package/dat-icons
