const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  name: 'client',
  target: 'web',
  mode: 'production',
  // optimization: {
  //   minimize: false,
  // },
  optimization: {
    concatenateModules: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  devtool: false,
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json', 'json5'],
  },
  entry: {
    app: [path.join(__dirname, './main.ts')],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, './dist'),
    publicPath: '',
  },
  plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
