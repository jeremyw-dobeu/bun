import {
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";

Bun.activate(true);
const hmr = new FastHMR(
  3474597122,
  "array-args-with-default-values.js",
  FastRefresh
);
const exports = hmr.exports;

(hmr._load = function () {
  let lines;
  const data = () =>
    lines.map(([a = null, b = null, c = null, d = null]) => ({
      a,
      b,
      c,
      d,
    }));
  function test() {
    let ran = false;
    lines = [
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
    ];
    for (const foo of data()) {
      console.assert(foo.a === null);
      console.assert(foo.b === null);
      console.assert(foo.c === null);
      console.assert(foo.d === null);
      ran = true;
    }
    console.assert(ran);
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

// # sourceMappingURL=http://localhost:8080/array-args-with-default-values.js.map
