const path = require ("path")
const fs = require ("fs")

const nodeModules = {}
fs.readdirSync ("node_modules")
  .filter ((x) => [".bin"].indexOf (x) === -1)
  .forEach ((mod) => {nodeModules[mod] = `commonjs ${mod}`})

module.exports = {
  "entry": "./src/server.js",
  "target": "node",
  "output": {
    "path": path.join (__dirname, "build"),
    "filename": "backend.js",
  },
  "devtool": "source-map",
  "module": {
    "loaders": [
      {
        "test": /\.js?$/,
        "exclude": /node_modules/,
        "use": [
          "babel-loader",
          {
            "loader": "eslint-loader",
            "options": {
              "fix": true,
            },
          },
        ],
      },
    ],
  },
  "externals": nodeModules,
}
