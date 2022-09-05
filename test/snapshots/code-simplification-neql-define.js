let testFailed = false;
const invariant = () => {
  testFailed = true;
};
const $$m = (arg) => {
  const module = { exports: {} };
  const exports = module.exports;
  return arg(module, exports);
};
export var $f332019d = $$m(
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
export function test() {
  const foo = () => result;
  if (testFailed) {
    throw new Error("invariant should not be called");
  }
  return testDone(import.meta.url);
}

// # sourceMappingURL=http://localhost:8080/code-simplification-neql-define.js.map
