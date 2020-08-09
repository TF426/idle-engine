module.exports = {
  mode: "development",
  entry: "./src/main.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.tsx"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
};
