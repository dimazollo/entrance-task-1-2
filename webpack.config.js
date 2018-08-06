import path from 'path'
import {initBackendStub} from './utils/backend-stub'

const PUBLIC_PATH = path.join(__dirname, 'public')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: PUBLIC_PATH,
    filename: 'index.js'
  },
  devServer: {
    contentBase: PUBLIC_PATH,
    // FIXME: make it
    compress: false,
    port: 9000,
    before: initBackendStub
  }
}
