let testFailed = false;
const invariant = () => {
  testFailed = true;
};
const $$m = (arg) => {
  const module = { exports: {} };
  const exports = module.exports;
  return arg(module, exports);
};
const size = 100;
const ttl = 3600;

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
          !(size > 0)
            ? process.env.NODE_ENV !== "production"
              ? invariant(
                  false,
                  "RelayQueryResponseCache: Expected the max cache size to be > 0, got " +
                    "`%s`.",
                  size
                )
              : invariant(false)
            : void 0;
          !(ttl > 0)
            ? process.env.NODE_ENV !== "production"
              ? invariant(
                  false,
                  "RelayQueryResponseCache: Expected the max ttl to be > 0, got `%s`.",
                  ttl
                )
              : invariant(false)
            : void 0;
        };
        foo({ size: 100, ttl: 3600 });
      };
      RelayQueryResponseCache();
    },
  }["relay-runtime/lib/network/RelayQueryResponseCache.js"]
);

export function test() {
  const foo = () => result;
  //   $f332019d;

  if (testFailed) throw new Error("invariant should not be called");
  return testDone(import.meta.url);
}
