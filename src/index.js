module.exports = function jsxAttributesE2EPlugin() {
  return {
    name: "JSX data attributes for E2E",
    visitor: {
      JSXAttribute(path) {
        if (path.node.name.name !== "data-e2e") return;

        path.remove();
      }
    }
  };
};
