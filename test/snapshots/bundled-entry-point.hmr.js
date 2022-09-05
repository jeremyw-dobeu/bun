import {
  __require as require,
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";
import * as $45b81229 from "http://localhost:8080/node_modules/react/index.js";
Bun.activate(false);
const hmr = new FastHMR(2903293251, "bundled-entry-point.js", FastRefresh);
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

// # sourceMappingURL=http://localhost:8080/bundled-entry-point.js.map
