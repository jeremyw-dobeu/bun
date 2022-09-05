import {
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";
Bun.activate(false);
const hmr = new FastHMR(
  997256900,
  "global-is-remapped-to-globalThis.js",
  FastRefresh
);
const exports = hmr.exports;
(hmr._load = function () {
  function test() {
    console.assert(globalThis === globalThis);
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

// # sourceMappingURL=http://localhost:8080/global-is-remapped-to-globalThis.js.map
