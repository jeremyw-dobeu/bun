import {
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";

Bun.activate(true);
const hmr = new FastHMR(
  3608848620,
  "optional-chain-with-function.js",
  FastRefresh
);
const exports = hmr.exports;

(hmr._load = function () {
  function test() {
    try {
      const multipleSecondaryValues = undefined;
      const ratings = ["123"];
      let bar = multipleSecondaryValues?.map((value) => false);
      bar = bar?.multipleSecondaryValues?.map((value) => false);
      bar = bar?.bar?.multipleSecondaryValues?.map((value) => false);
      bar = {}?.bar?.multipleSecondaryValues?.map((value) => false);
    } catch (e) {
      throw e;
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

// # sourceMappingURL=http://localhost:8080/optional-chain-with-function.js.map
