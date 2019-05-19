# fullpage-nuxt

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads](https://img.shields.io/npm/dt/fullpage-nuxt.svg?style=flat-square)](https://npmjs.com/package/fullpage-nuxt)

> Nuxt module for [fullpage-vue](https://www.npmjs.com/package/fullpage-vue) plugin. 
A by-page scroll, support horizontal scroll and vertical scroll, support all the animation instructions of animate.css.

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

- Add `fullpage-nuxt` dependency using yarn or npm to your project
- Add `fullpage-nuxt` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'fullpage-nuxt',

    // With options
    ['fullpage-nuxt', { /* module options */ }],
 ]
}
```
You can find more details under `example` folder. 
Usage instructions in the fullpage-vue [docs](https://www.npmjs.com/package/fullpage-vue)
## Options

- `animate: false` (default). Will import [animate.css](https://daneden.github.io/animate.css/) if true.

## License

MIT, made by [GALSD Web Development](https://galsd.com/)

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/fullpage-nuxt.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/fullpage-nuxt
[npm-downloads-src]: https://img.shields.io/npm/dt/fullpage-nuxt/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/fullpage-nuxt
