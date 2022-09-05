import { __require as require } from "http://localhost:8080/bun:wrap";
import * as $72625799 from "http://localhost:8080/node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js";

import * as $5b3cea55 from "http://localhost:8080/node_modules/react-dom/index.js";
const JSX = require($72625799);
const jsx = require(JSX).jsxDEV;
const ReactDOM = require($5b3cea55);
export const Foo = () =>
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

export function test() {
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

// # sourceMappingURL=http://localhost:8080/custom-emotion-jsx/file.jsx.map
