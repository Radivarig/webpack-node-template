const path = require ("path")
const fs = require ("fs")

const nodeModules = {}
fs.readdirSync ("node_modules")
  .filter ((x) => [".bin"].indexOf (x) === -1)
  .forEach ((mod) => {nodeModules[mod] = `commonjs ${mod}`})

module.exports = {
  "entry": {
    main: path.resolve (__dirname, "src", "server.js"),
  },

  "target": "node",

  "output": {
    "filename": "[name].js",
  },

  "devtool": "source-map",

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
        },
      },

      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "eslint-loader",
            options: { fix: true }
          },
        ],
      },
    ],
  },

  "externals": nodeModules,
}
