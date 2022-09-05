import {
  __HMRClient as Bun,
  __HMRModule as HMR,
} from "http://localhost:8080/bun:wrap";
Bun.activate(false);
const hmr = new HMR(1227236257, "ts-fallback-rewrite-works.ts");
const exports = hmr.exports;
(hmr._load = function () {
  function test() {
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

// # sourceMappingURL=http://localhost:8080/ts-fallback-rewrite-works.js.map
