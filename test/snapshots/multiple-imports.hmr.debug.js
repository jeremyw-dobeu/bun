import {
  __FastRefreshRuntime as FastRefresh,
  __HMRClient as Bun,
  __require as require,
  __FastRefreshModule as FastHMR,
} from "http://localhost:8080/bun:wrap";

import * as $2f488e5b from "http://localhost:8080/node_modules/react/jsx-dev-runtime.js";
import * as $bbcd215f from "http://localhost:8080/node_modules/react/index.js";
Bun.activate(true);
const JSX = require($2f488e5b);
const JSXClassic = require($bbcd215f);
const jsx = require(JSX).jsxDEV;
const JSXFrag = require(JSXClassic).Fragment;

const { default: React } = require($bbcd215f);
const { default: React2 } = require($bbcd215f);
const hmr = new FastHMR(2165509932, "multiple-imports.js", FastRefresh);
const exports = hmr.exports;

(hmr._load = function () {
  const bacon = React;
  const bacon2 = jsx(
    JSXFrag,
    {
      children: "hello",
    },
    undefined,
    false,
    undefined,
    this
  );
  function test() {
    console.assert(bacon === React);
    console.assert(bacon === React2);
    console.assert(typeof bacon2 !== "undefined");
    console.assert(React.isValidElement(bacon2));
    return testDone(import.meta.url);
  }
  hmr.exportAll({
    test: () => test,
  });
})();
let $$hmr_test = hmr.exports.test;
hmr._update = function (exports) {
  $$hmr_test = exports.test;
};

export { $$hmr_test as test };

// # sourceMappingURL=http://localhost:8080/multiple-imports.js.map
