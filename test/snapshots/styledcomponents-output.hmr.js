import {
  __FastRefreshRuntime as FastRefresh,
  __HMRClient as Bun,
  __require as require,
  __FastRefreshModule as FastHMR,
} from "http://localhost:8080/bun:wrap";
import * as $1407d117 from "http://localhost:8080/node_modules/react/jsx-dev-runtime.js";
import * as $1dd97690 from "http://localhost:8080/node_modules/styled-components/dist/styled-components.browser.esm.js";
import * as $45b81229 from "http://localhost:8080/node_modules/react/index.js";
import * as $d2dc5006 from "http://localhost:8080/node_modules/react-dom/index.js";
Bun.activate(false);
const JSX = require($1407d117);
const jsx = require(JSX).jsxDEV;
const { default: styled } = require($1dd97690);
const { default: React } = require($45b81229);
const { default: ReactDOM } = require($d2dc5006);
const hmr = new FastHMR(1833563982, "styledcomponents-output.js", FastRefresh);
const exports = hmr.exports;
(hmr._load = function () {
  const ErrorScreenRoot = styled.div`
    font-family: "Muli", -apple-system, BlinkMacSystemFont, Helvetica, Arial,
      sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    text-align: center;
    background-color: #0b2988;
    color: #fff;
    font-family: "Muli", -apple-system, BlinkMacSystemFont, Helvetica, Arial,
      sans-serif;
    line-height: 1.5em;

    & > p {
      margin-top: 10px;
    }

    & a {
      color: inherit;
    }
  `;
  function test() {
    if (typeof window !== "undefined") {
      const reactEl = document.createElement("div");
      document.body.appendChild(reactEl);
      ReactDOM.render(
        jsx(
          ErrorScreenRoot,
          {
            id: "error-el",
            children: "The react child should have this text",
          },
          undefined,
          false,
          undefined,
          this
        ),
        reactEl
      );
      const style = document.querySelector("style[data-styled]");
      console.assert(style, "style tag should exist");
      console.assert(
        style.textContent.split("").every((a) => a.codePointAt(0) < 128),
        "style tag should not contain invalid unicode codepoints"
      );
      console.assert(
        document.querySelector("#error-el").textContent ===
          "The react child should have this text"
      );
      ReactDOM.unmountComponentAtNode(reactEl);
      reactEl.remove();
      style.remove();
      return testDone(import.meta.url);
    }
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

// # sourceMappingURL=http://localhost:8080/styledcomponents-output.js.map
