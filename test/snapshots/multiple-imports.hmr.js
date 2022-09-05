import {
  __FastRefreshRuntime as FastRefresh,
  __HMRClient as Bun,
  __require as require,
  __FastRefreshModule as FastHMR,
} from "http://localhost:8080/bun:wrap";
import * as $1407d117 from "http://localhost:8080/node_modules/react/jsx-dev-runtime.js";
import * as $45b81229 from "http://localhost:8080/node_modules/react/index.js";
Bun.activate(false);
const JSX = require($1407d117);
const JSXClassic = require($45b81229);
const jsx = require(JSX).jsxDEV;
const JSXFrag = require(JSXClassic).Fragment;
const { default: React } = require($45b81229);
const { default: React2 } = require($45b81229);
const hmr = new FastHMR(2063938930, "multiple-imports.js", FastRefresh);
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
