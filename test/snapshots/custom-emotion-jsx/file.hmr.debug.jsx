import {
  __FastRefreshRuntime as FastRefresh,
  __HMRClient as Bun,
  __require as require,
  __FastRefreshModule as FastHMR,
} from "http://localhost:8080/bun:wrap";

import * as $72625799 from "http://localhost:8080/node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js";

import * as $5b3cea55 from "http://localhost:8080/node_modules/react-dom/index.js";
Bun.activate(true);
const JSX = require($72625799);
const jsx = require(JSX).jsxDEV;
const ReactDOM = require($5b3cea55);
const hmr = new FastHMR(2497996991, "custom-emotion-jsx/file.jsx", FastRefresh);
const exports = hmr.exports;

(hmr._load = function () {
  const Foo = () =>
    jsx(
      "div",
      {
        css: { content: '"it worked!"' },
      },
      undefined,
      false,
      undefined,
      this
    );
  function test() {
    const element = document.createElement("div");
    element.id = "custom-emotion-jsx";
    document.body.appendChild(element);
    ReactDOM.render(jsx(Foo, {}, undefined, false, undefined, this), element);
    const style = window.getComputedStyle(element.firstChild);
    if (!(style.content ?? "").includes("it worked!")) {
      throw new Error('Expected "it worked!" but received: ' + style.content);
    }
    return testDone(import.meta.url);
  }
  hmr.exportAll({
    Foo: () => Foo,
    test: () => test,
  });
})();
let $$hmr_Foo = hmr.exports.Foo;
let $$hmr_test = hmr.exports.test;
hmr._update = function (exports) {
  $$hmr_Foo = exports.Foo;
  $$hmr_test = exports.test;
};

export { $$hmr_Foo as Foo, $$hmr_test as test };

// # sourceMappingURL=http://localhost:8080/custom-emotion-jsx/file.jsx.map
