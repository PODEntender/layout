const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: {
    episode: './scss/episode/main.scss',
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
}
