const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/tasks/index.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js'
  }
};