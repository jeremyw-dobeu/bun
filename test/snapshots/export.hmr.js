import {
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";
import what from "http://localhost:8080/_auth.js";
import * as where from "http://localhost:8080/_auth.js";
Bun.activate(false);
const hmr = new FastHMR(2026450590, "export.js", FastRefresh);
const exports = hmr.exports;
(hmr._load = function () {
  const yoyoyo = "yoyoyo";
  function hey() {
    return true;
  }
  const foo = () => {};
  const bar = 100;
  const powerLevel = Symbol("9001");
  function test() {
    hey();
    foo();
    if (where.default !== "hi") {
      throw new Error("_auth import is incorrect.");
    }
    console.assert(
      powerLevel.description === "9001",
      "Symbol is not exported correctly"
    );
    return testDone(import.meta.url);
  }
  hmr.exportAll({
    yoyoyo: () => yoyoyo,
    default: () => hey,
    foo: () => foo,
    bar: () => bar,
    powerLevel: () => powerLevel,
    what: () => what,
    when: () => what,
    whence: () => what,
    where: () => where,
    booop: () => bar,
    test: () => test,
  });
})();
let $$hmr_yoyoyo = hmr.exports.yoyoyo;
let $$hmr_default = hmr.exports.default;
let $$hmr_foo = hmr.exports.foo;
let $$hmr_bar = hmr.exports.bar;
let $$hmr_powerLevel = hmr.exports.powerLevel;
let $$hmr_what = hmr.exports.what;
let $$hmr_when = hmr.exports.when;
let $$hmr_whence = hmr.exports.whence;
let $$hmr_where = hmr.exports.where;
let $$hmr_booop = hmr.exports.booop;
let $$hmr_test = hmr.exports.test;
hmr._update = function (exports) {
  $$hmr_yoyoyo = exports.yoyoyo;
  $$hmr_default = exports.default;
  $$hmr_foo = exports.foo;
  $$hmr_bar = exports.bar;
  $$hmr_powerLevel = exports.powerLevel;
  $$hmr_what = exports.what;
  $$hmr_when = exports.when;
  $$hmr_whence = exports.whence;
  $$hmr_where = exports.where;
  $$hmr_booop = exports.booop;
  $$hmr_test = exports.test;
};

export {
  $$hmr_yoyoyo as yoyoyo,
  $$hmr_default as default,
  $$hmr_foo as foo,
  $$hmr_bar as bar,
  $$hmr_powerLevel as powerLevel,
  $$hmr_what as what,
  $$hmr_when as when,
  $$hmr_whence as whence,
  $$hmr_where as where,
  $$hmr_booop as booop,
  $$hmr_test as test,
};
export { default as auth } from "http://localhost:8080/_auth.js";
export { default as login } from "http://localhost:8080/_login.js";
export * from "http://localhost:8080/_bacon.js";
export {} from "http://localhost:8080/_bacon.js";

// # sourceMappingURL=http://localhost:8080/export.js.map
