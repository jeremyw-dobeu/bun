import {
  __require as require,
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";
import * as $147f6594 from "http://localhost:8080/package-json-exports/node_modules/inexact/browser/index.js";
import * as $f9f33cd5 from "http://localhost:8080/package-json-exports/node_modules/inexact/browser/dir/file.js";
import * as $efd1f056 from "http://localhost:8080/package-json-exports/node_modules/inexact/browser/foo.js";
import * as $3e697ad7 from "http://localhost:8080/package-json-exports/node_modules/js-only-exports/browser/js-file.js";
Bun.activate(false);
const InexactRoot = require($147f6594);
const InexactFile = require($f9f33cd5);
const ExactFile = require($efd1f056);
const JSFileExtensionOnly = require($3e697ad7);
const hmr = new FastHMR(
  2713515135,
  "package-json-exports/index.js",
  FastRefresh
);
const exports = hmr.exports;
(hmr._load = function () {
  async function test() {
    console.assert(InexactRoot.target === "browser");
    console.assert(InexactFile.target === "browser");
    console.assert(ExactFile.target === "browser");
    console.assert(JSFileExtensionOnly.isJS === true);
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

// # sourceMappingURL=http://localhost:8080/package-json-exports/index.js.map
