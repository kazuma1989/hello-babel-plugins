const pluginTester = require("babel-plugin-tester")
const path = require("path");
const plugin = require("../src");

pluginTester({
  plugin,
  fixtures: path.join(__dirname, "__fixtures__")
});
