const path = require('path');
const {
  NODE_ENV = 'development',
} = process.env;
module.exports = {
  entry: './source/main/EntryPoint.ts',
  mode: NODE_ENV,
  target: 'node',
  externals: {
    "child_process": "require('child_process')",
    "fs": "require('fs')",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options:{
          configFile:'tsconfig.webpack.json'
        }
       // exclude: path.resolve(__dirname, "node_modules"),
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  node: {
    fs: "empty"
 },
}