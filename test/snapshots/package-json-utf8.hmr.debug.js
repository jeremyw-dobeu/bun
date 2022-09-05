import {
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";

import pkg from "http://localhost:8080/utf8-package-json.json";
Bun.activate(true);
const hmr = new FastHMR(4111115104, "package-json-utf8.js", FastRefresh);
const exports = hmr.exports;

(hmr._load = function () {
  function test() {
    console.assert(!!pkg.author);
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

// # sourceMappingURL=http://localhost:8080/package-json-utf8.js.map
