import {
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";
Bun.activate(false);
const hmr = new FastHMR(
  360033594,
  "tsx-fallback-rewrite-works.tsx",
  FastRefresh
);
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

// # sourceMappingURL=http://localhost:8080/tsx-fallback-rewrite-works.js.map
