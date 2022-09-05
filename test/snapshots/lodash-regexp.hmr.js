import {
  __require as require,
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";
import * as $2f2e4966 from "http://localhost:8080/node_modules/lodash/lodash.js";
Bun.activate(false);
const { shuffle } = require($2f2e4966);
const hmr = new FastHMR(639488503, "lodash-regexp.js", FastRefresh);
const exports = hmr.exports;
(hmr._load = function () {
  function test() {
    const foo = [1, 2, 3, 4, 6];
    const bar = shuffle(foo);
    console.assert(bar !== foo);
    console.assert(bar.length === foo.length);
    bar.sort();
    foo.sort();
    for (let i = 0; i < bar.length; i++) {
      console.assert(bar[i] === foo[i], "expected " + i + " to be " + foo[i]);
      console.assert(typeof bar[i] === "number");
      console.assert(typeof foo[i] === "number");
    }
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

// # sourceMappingURL=http://localhost:8080/lodash-regexp.js.map
