const MODULE_RESOLVER = [
  'module-resolver',
  {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@fonts': './src/assets/fonts',
      '@images': './src/assets/images',
      '@styles': './src/assets/styles',
      '@components': './src/components',
      '@screens': './src/screens',
      '@constants': './src/constants',
      '@navigation': './src/navigation',
      '@store': './src/store',
      '@hooks': './src/hooks',
      '@helpers': './src/helpers',
    },
  },
];
module.exports = {
  plugins: [MODULE_RESOLVER],
  presets: ['module:metro-react-native-babel-preset'],
};
