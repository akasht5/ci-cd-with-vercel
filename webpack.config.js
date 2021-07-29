module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        excludes: /node_modules/,
        uses: 'babel-loader',
      },
    ],
  },
};
