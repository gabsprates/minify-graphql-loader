# minify-graphql-loader

[![Build Status](https://travis-ci.org/gabsprates/minify-graphql-loader.svg?branch=master)](https://travis-ci.org/gabsprates/minify-graphql-loader)

webpack loader to minify GraphQL queries and mutations, reducing your bundle's size

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

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT © [Gabriel Prates](http://gabrielprates.com)
