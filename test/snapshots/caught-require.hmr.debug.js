import {
  __HMRClient as Bun,
  __require as require,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";

Bun.activate(true);
const hmr = new FastHMR(2398506918, "caught-require.js", FastRefresh);
const exports = hmr.exports;

await (hmr._load = async function () {
  try {
    require((() => {
      throw new Error(
        "Cannot require module '\"this-package-should-not-exist\"'"
      );
    })());
  } catch (exception) {}
  try {
    await import("this-package-should-not-exist");
  } catch (exception) {}
  import("this-package-should-not-exist").then(
    () => {},
    () => {}
  );
  async function test() {
    try {
      require((() => {
        throw new Error(
          "Cannot require module '\"this-package-should-not-exist\"'"
        );
      })());
    } catch (exception) {}
    try {
      await import("this-package-should-not-exist");
    } catch (exception) {}
    import("this-package-should-not-exist").then(
      () => {},
      () => {}
    );
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

// # sourceMappingURL=http://localhost:8080/caught-require.js.map
