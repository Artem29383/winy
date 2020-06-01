const path = require('path');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const optimize = require('./optimize');
const plugins = require('./plugins');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = ext => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const babelOptions = preset => {
  const options = {
    presets: ['@babel/preset-env'],
  };
  if (preset) options.presets.push(preset);
  return options;
};

const jsLoaders = (react) => {
  const loaders = [{
    loader: 'babel-loader',
    options: babelOptions(react),
  }];
  
  if (isDev) loaders.push('eslint-loader', 'stylelint-custom-processor-loader', 'source-map-loader');
  
  return loaders;
};
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', path.resolve(__dirname, '../src', 'index.js')],
  },
  output: {
    filename: filename('js'),
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: require('./alias'),
  },
  optimization: optimize(),
  devServer: {
    port: 3333,
    hot: isDev,
    overlay: true,
    historyApiFallback: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devtool: isDev ? 'source-map' : '',
  plugins: plugins(isDev, isProd),
  module: {
    rules: [
      {
        test: /\.(svg|otf|ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
        exclude: [/ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/],
      },
      {
        test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
        use: ['raw-loader'],
      },
      {
        // Or /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/ if you want to limit this loader
        // to CKEditor 5's theme only.
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag',
            },
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: styles.getPostCssConfig( {
              themeImporter: {
                themePath: require.resolve( '@ckeditor/ckeditor5-theme-lark' )
              },
              minify: true,
            }),
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: jsLoaders('@babel/preset-react'),
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
};


