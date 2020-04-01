# minify-graphql-loader

<a href="https://www.npmjs.com/package/minify-graphql-loader">
<img src="https://img.shields.io/npm/v/minify-graphql-loader" alt="Version" />
</a>

<a href="https://travis-ci.org/gabsprates/minify-graphql-loader">
<img src="https://travis-ci.org/gabsprates/minify-graphql-loader.svg?branch=master" alt="Build Status" />
</a>

<a href="https://www.npmjs.com/package/minify-graphql-loader">
<img src="https://img.shields.io/npm/dw/minify-graphql-loader" alt="npm downloads" />
</a>

<a href="https://bundlephobia.com/result?p=minify-graphql-loader">
<img src="https://img.shields.io/bundlephobia/minzip/minify-graphql-loader" alt="Bundle size" />
</a>

<a href="https://github.com/gabsprates/minify-graphql-loader/blob/master/LICENSE">
<img src="https://img.shields.io/github/license/gabsprates/minify-graphql-loader" alt="License" />
</a>

<a href="https://github.com/gabsprates/minify-graphql-loader/">
<img src="https://img.shields.io/node/v/minify-graphql-loader" alt="Node.js version" />
</a>

<a href="https://codecov.io/gh/gabsprates/minify-graphql-loader">
  <img src="https://codecov.io/gh/gabsprates/minify-graphql-loader/branch/master/graph/badge.svg" />
</a>

webpack loader to minify GraphQL queries, mutations and fragments, reducing your bundle's size

In [this example](https://github.com/gabsprates/minify-graphql-loader/blob/master/tests/queryWithVariables2.graphql.js), we decrease ~17,5% query's size

## installing:

- npm:

```
npm install --save-dev minify-graphql-loader
```

- yarn:

```
yarn add --dev minify-graphql-loader
```

## using

It must to be used in chain with a GraphQL loader:

```javascript
// webpack.config.js
module.export = {
  // ...your config
  module: {
    rules: [
      // ...your rules
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: [
          "graphql-tag/loader",
          "minify-graphql-loader"
          // it must to be the last item
        ]
      }
    ]
  }
};
```

## Contributing

### good things comes in small packages :blush:

1. Leave a star :star:
2. Share :handshake:

### coding

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'` (follow this guide: [Karma's Git Commit Msg](http://karma-runner.github.io/1.0/dev/git-commit-msg.html))
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT © [Gabriel Prates](http://gabrielprates.com)
