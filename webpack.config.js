const path = require("path");
const fs = require("fs");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

// Helper to find all block index files AND view scripts
const getBlockEntries = () => {
  const blocksPath = path.resolve(__dirname, "blocks");
  const entries = {};

  // Get all subdirectories in the blocks folder
  const blockDirs = fs.readdirSync(blocksPath).filter((file) => {
    return fs.statSync(path.join(blocksPath, file)).isDirectory();
  });

  blockDirs.forEach((block) => {
    const blockSrcPath = path.resolve(blocksPath, block, "src"); // Define base src path
    const indexJsPath = path.resolve(blockSrcPath, "index.js");
    const viewJsPath = path.resolve(blockSrcPath, "view.js"); // Path to view.js
  // Add index.js & view.js 
    if (fs.existsSync(indexJsPath)) {
      entries[`${block}/build/index`] = indexJsPath;
    }
    if (fs.existsSync(viewJsPath)) {
      entries[`${block}/build/view`] = viewJsPath;
    }
  });

  return entries;
};

module.exports = {
  ...defaultConfig,
  entry: getBlockEntries(),

  output: {
    path: path.resolve(__dirname, "blocks"),
    filename: "[name].js",
  },

  performance: {
    hints: false,
  },

  // Recommended 'source maps' but it's crashing server says Gemini: Enable source maps for easier debugging in the browser
  devtool: "eval",

  plugins: [
    ...defaultConfig.plugins,
    new BrowserSyncPlugin({
      proxy: "http://localhost:10010", // LocalWP
      host: "localhost",
      port: 3003,
      files: [
        "./blocks/*/build/*.css",
        "./blocks/*/build/*.js",
        "./js/*.js",
        "**/*.php",
        "./style.css",
      ],
      injectChanges: true,
      notify: false,
      ui: false,
    }),
  ],
    watchOptions: {
    poll: 1000, // This watches the files every 1s/1000ms
    ignored: ["/.*\/build\/.*/", "/node_modules/"]
  }
};
