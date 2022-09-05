import {
  __HMRClient as Bun,
  __require as require,
  __HMRModule as HMR,
} from "http://localhost:8080/__runtime.js";
import * as JSX from "http://localhost:8080/node_modules/react/jsx-dev-runtime.js";

import * as $3b6c9f54 from "http://localhost:8080/node_modules/styled-components/dist/styled-components.esm.js";
import * as $bbcd215f from "http://localhost:8080/node_modules/react/index.js";
const jsx = require(JSX).jsxDEV;
const fileName = "styled-components-output.js";
const { default: styled } = require($3b6c9f54);
const { default: React } = require($bbcd215f);
Bun.activate(false);

const hmr = new HMR(2972367994, "styled-components-output.js");
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
    console.assert(
      React.isValidElement(
        jsx(
          ErrorScreenRoot,
          {},
          undefined,
          true,
          {
            fileName,
            lineNumber: 698,
          },
          this
        )
      )
    );
    testDone(import.meta.url);
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
