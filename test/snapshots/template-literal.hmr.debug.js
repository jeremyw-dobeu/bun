import {
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";

Bun.activate(true);
const hmr = new FastHMR(2201713056, "template-literal.js", FastRefresh);
const exports = hmr.exports;

(hmr._load = function () {
  const css = (templ) => templ.toString();
  const fooNoBracesUTF8 = css`
  before
  /* */
  after
`;
  const fooNoBracesUT16 = css`
  before
  \uD83D\uDE43
  after
`;
  const fooUTF8 = css`
    before
  ${true}
    after

`;
  const fooUTF16 = css`
    before
    \uD83D\uDE43 ${true}
    after

`;
  const templateLiteralWhichDefinesAFunction = ((...args) =>
    args[args.length - 1]().toString())`
    before
    \uD83D\uDE43 ${() => true}
    after

`;
  function test() {
    for (const foo of [fooNoBracesUT16, fooNoBracesUTF8, fooUTF16, fooUTF8]) {
      console.assert(
        foo.includes("before"),
        `Expected ${foo} to include "before"`
      );
      console.assert(
        foo.includes("after"),
        `Expected ${foo} to include "after"`
      );
    }
    console.assert(
      templateLiteralWhichDefinesAFunction.includes("true"),
      "Expected fooFunction to include 'true'"
    );
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

// # sourceMappingURL=http://localhost:8080/template-literal.js.map
