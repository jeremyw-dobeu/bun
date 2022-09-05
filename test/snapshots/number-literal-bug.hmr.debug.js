import {
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";

Bun.activate(true);
const hmr = new FastHMR(583570002, "number-literal-bug.js", FastRefresh);
const exports = hmr.exports;

(hmr._load = function () {
  function test() {
    const precision = 10;
    try {
      parseFloat((0).toPrecision(precision) + "1");
    } catch (exception) {
      throw new Error("Test Failed", exception);
    }
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

// # sourceMappingURL=http://localhost:8080/number-literal-bug.js.map
