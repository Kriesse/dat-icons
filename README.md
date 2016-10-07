# dat-icons
Icons and other SVGs for the [dat project](http://dat-data.com)

## Usage

```js
const svgSprite = require('dat-icons')
document.body.innerHTML += svgSprite()
```

Make sure this is the first element after the `<body>` opening tag.

Icons can later be referenced like so:

```html
<svg><use xlink:href="#daticon-happy-dat"></use></svg>
```

### Icon Names

- `daticon-clipboard`
- `daticon-create-new-dat`
- `daticon-delete`
- `daticon-download`
- `daticon-edit-dat`
- `daticon-file`
- `daticon-folder`
- `daticon-happy-dat`
- `daticon-hexagon-outlines`
- `daticon-import-dat`
- `daticon-link`
- `daticon-loading`
- `daticon-lock`
- `daticon-menu`
- `daticon-open-in-desktop`
- `daticon-open-in-finder`
- `daticon-question`
- `daticon-sad-dat`
- `daticon-star-dat`

## Build

to build SVG sprite:

```shell
npm install
npm run build-icons
```
