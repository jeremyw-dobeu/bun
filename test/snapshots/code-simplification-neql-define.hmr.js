import {
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";
Bun.activate(false);
const hmr = new FastHMR(
  3365801599,
  "code-simplification-neql-define.js",
  FastRefresh
);
const exports = hmr.exports;
(hmr._load = function () {
  let testFailed = false;
  const invariant = () => {
    testFailed = true;
  };
  const $$m = (arg) => {
    const module = { exports: {} };
    const exports = module.exports;
    return arg(module, exports);
  };
  const $f332019d = $$m(
    {
      "relay-runtime/lib/network/RelayQueryResponseCache.js": (
        module,
        exports
      ) => {
        const RelayQueryResponseCache = function () {
          const foo = function RelayQueryResponseCache(_ref) {
            const size = _ref.size;
            const ttl = _ref.ttl;
            !(size > 0) &&
              invariant(
                false,
                "RelayQueryResponseCache: Expected the max cache size to be > 0, got `%s`.",
                size
              );
            !(ttl > 0) &&
              invariant(
                false,
                "RelayQueryResponseCache: Expected the max ttl to be > 0, got `%s`.",
                ttl
              );
          };
          foo({ size: 100, ttl: 3600 });
        };
        RelayQueryResponseCache();
      },
    }["relay-runtime/lib/network/RelayQueryResponseCache.js"]
  );
  function test() {
    const foo = () => result;
    if (testFailed) {
      throw new Error("invariant should not be called");
    }
    return testDone(import.meta.url);
  }
  hmr.exportAll({
    $f332019d: () => $f332019d,
    test: () => test,
  });
})();
let $$hmr_$f332019d = hmr.exports.$f332019d;
let $$hmr_test = hmr.exports.test;
hmr._update = function (exports) {
  $$hmr_$f332019d = exports.$f332019d;
  $$hmr_test = exports.test;
};

export { $$hmr_$f332019d as $f332019d, $$hmr_test as test };

// # sourceMappingURL=http://localhost:8080/code-simplification-neql-define.js.map
