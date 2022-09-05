import {
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";

Bun.activate(true);
const hmr = new FastHMR(2883558553, "multiple-var.js", FastRefresh);
const exports = hmr.exports;

(hmr._load = function () {
  var foo = true;
  globalThis.TRUE_BUT_WE_CANT_TREESHAKE_IT = true;
  if (globalThis.TRUE_BUT_WE_CANT_TREESHAKE_IT) {
    ({ foo } = { foo: false });
  }
  var foo;
  function test() {
    console.assert(foo === false, "foo should be false");
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

// # sourceMappingURL=http://localhost:8080/multiple-var.js.map
