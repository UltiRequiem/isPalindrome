module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-syntax-dynamic-import"],
    ["babel-plugin-styled-components"],
    ["@babel/plugin-transform-runtime", { regenerator: true }],
  ],
};
