import {
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";
Bun.activate(false);
const hmr = new FastHMR(
  2744655916,
  "export-default-module-hot.js",
  FastRefresh
);
const exports = hmr.exports;
(hmr._load = function () {
  const export_default_module_hot_default =
    typeof module !== "undefined" && module.id;
  function test() {
    testDone(import.meta.url);
  }
  hmr.exportAll({
    default: () => export_default_module_hot_default,
    test: () => test,
  });
})();
let $$hmr_default = hmr.exports.default;
let $$hmr_test = hmr.exports.test;
hmr._update = function (exports) {
  $$hmr_default = exports.default;
  $$hmr_test = exports.test;
};

export { $$hmr_default as default, $$hmr_test as test };

// # sourceMappingURL=http://localhost:8080/export-default-module-hot.js.map
