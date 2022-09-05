import { __require as require } from "http://localhost:8080/bun:wrap";
import * as $2f488e5b from "http://localhost:8080/node_modules/react/jsx-dev-runtime.js";
import * as $bbcd215f from "http://localhost:8080/node_modules/react/index.js";
const JSX = require($2f488e5b);
const JSXClassic = require($bbcd215f);
const jsx = require(JSX).jsxDEV;
const JSXFrag = require(JSXClassic).Fragment;

const { default: React } = require($bbcd215f);
const { default: React2 } = require($bbcd215f);
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
export function test() {
  console.assert(bacon === React);
  console.assert(bacon === React2);
  console.assert(typeof bacon2 !== "undefined");
  console.assert(React.isValidElement(bacon2));
  return testDone(import.meta.url);
}

// # sourceMappingURL=http://localhost:8080/multiple-imports.js.map
