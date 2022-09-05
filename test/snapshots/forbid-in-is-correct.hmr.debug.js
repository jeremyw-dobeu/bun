import {
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";

Bun.activate(true);
const hmr = new FastHMR(346837007, "forbid-in-is-correct.js", FastRefresh);
const exports = hmr.exports;

(hmr._load = function () {
  const foo = () => {
    const D = (i, r) => () => (
      r || i((r = { exports: {} }).exports, r), r.exports
    );
    return D;
  };
  function test() {
    foo();
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

// # sourceMappingURL=http://localhost:8080/forbid-in-is-correct.js.map
