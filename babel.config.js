module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        forceAllTransforms: false,
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
        exclude: ['transform-async-to-generator', 'transform-regenerator'],
      },
    ],
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
  ],
};
