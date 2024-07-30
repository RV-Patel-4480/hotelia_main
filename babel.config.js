module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".tsx", ".ts", ".js", ".json"],
          alias: {
            _assets: "./assets",
            _components: "./src/components",
            _config: "./src/config",
            _screens: "./src/screens",
            _helpers: "./src/helpers",
            _navigations: "./src/navigations",
            _styles: "./src/styles",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
