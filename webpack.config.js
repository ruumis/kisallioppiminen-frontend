const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const fs = require('fs')

module.exports = function(env, argv) {
  // default to the server configuration
  const base = {
    entry: './src/server/server.ts',
    output: {
      filename: 'js/server.js',
      // path needs to be an ABSOLUTE file path
      path: path.resolve(process.cwd(), 'dist'),
      publicPath: '/'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: 'cheap-module-eval-source-map',
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
      rules: [
        // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'css/style.css',
        allChunks: true
      }),
      new CopyWebpackPlugin([
        // relative path is from src
        { from: 'favicon.ico' } // <- your path to favicon
      ])
    ]
  }

  if (env.platform === 'styles') {
    base.module.rules = [
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
    base.entry = './styles/style.scss'
    base.output.filename = 'css/style.css'
  }

  if (env.platform === 'styles-static') {
    base.module.rules = [
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
    base.plugins = [
      new ExtractTextPlugin({
        filename: 'static/css/style.css',
        allChunks: true
      })
    ]
    base.entry = './styles/style.scss'
    base.output.filename = 'static/css/style.css'
  }

  // server-specific configuration
  if (env.platform === 'server') {
    base.target = 'node'
  }

  // client-specific configurations
  if (env.platform === 'web') {
    base.entry = './src/client.tsx'
    base.output.filename = 'js/client.js'
  }

  if (env.platform === 'static') {
    base.entry = './src/client.tsx'
    base.output.filename = 'static/client.js'
  }

  if (env.platform === 'static') {
    const goThroughFiles = base => {
      fs.readdirSync(base).forEach(file => {
        const newPath = path.resolve(base, file)
        fs.stat(newPath, (err, stat) => {
          if (stat && stat.isDirectory()) {
            goThroughFiles(newPath)
          } else {
            moveImage(newPath, file)
          }
        })
      })
    }

    const moveImage = (newPath, file) => {
      const image = fs.readFileSync(newPath)
      fs.writeFileSync(`./dist/static/img/${file}`, image)
    }

    goThroughFiles(`${__dirname}/dist/img`)
  }

  return base
}
