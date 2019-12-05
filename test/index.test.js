const pluginTester = require("babel-plugin-tester").default;
const path = require("path");
const plugin = require("../src");

pluginTester({
  plugin,
  fixtures: path.join(__dirname, "__fixtures__")
});
