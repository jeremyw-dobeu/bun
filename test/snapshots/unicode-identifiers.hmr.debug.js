import {
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";

Bun.activate(true);
const hmr = new FastHMR(1398361736, "unicode-identifiers.js", FastRefresh);
const exports = hmr.exports;

(hmr._load = function () {
  const ε = 0.000001;
  const ε2 = ε * ε;
  const π = Math.PI;
  const τ = 2 * π;
  const τε = τ - ε;
  const halfπ = π / 2;
  const d3_radians = π / 180;
  const d3_degrees = 180 / π;
  function test() {
    console.assert(ε === 0.000001);
    return testDone(import.meta.url);
  }
  hmr.exportAll({
    d3_radians: () => d3_radians,
    test: () => test,
  });
})();
let $$hmr_d3_radians = hmr.exports.d3_radians;
let $$hmr_test = hmr.exports.test;
hmr._update = function (exports) {
  $$hmr_d3_radians = exports.d3_radians;
  $$hmr_test = exports.test;
};

export { $$hmr_d3_radians as d3_radians, $$hmr_test as test };

// # sourceMappingURL=http://localhost:8080/unicode-identifiers.js.map
