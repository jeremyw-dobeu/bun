import {
  __HMRClient as Bun,
  __FastRefreshModule as FastHMR,
  __FastRefreshRuntime as FastRefresh,
} from "http://localhost:8080/bun:wrap";
import _login from "http://localhost:8080/_login.js";
import _auth from "http://localhost:8080/_auth.js";
import * as _loginReally from "http://localhost:8080/_login.js";
import * as _loginReally2 from "http://localhost:8080/_login.js";
import * as _authReally from "http://localhost:8080/_auth.js";
Bun.activate(false);
const hmr = new FastHMR(
  2970650542,
  "cjs-transform-shouldnt-have-static-imports-in-cjs-function.js",
  FastRefresh
);
const exports = hmr.exports;
(hmr._load = function () {
  function test() {
    return testDone(import.meta.url);
  }
  let foo;
  let bar;
  hmr.exportAll({
    login: () => _login,
    test: () => test,
    foo: () => foo,
    bar: () => bar,
  });
})();
let $$hmr_login = hmr.exports.login;
let $$hmr_test = hmr.exports.test;
let $$hmr_foo = hmr.exports.foo;
let $$hmr_bar = hmr.exports.bar;
hmr._update = function (exports) {
  $$hmr_login = exports.login;
  $$hmr_test = exports.test;
  $$hmr_foo = exports.foo;
  $$hmr_bar = exports.bar;
};

export {
  $$hmr_login as login,
  $$hmr_test as test,
  $$hmr_foo as foo,
  $$hmr_bar as bar,
};

// # sourceMappingURL=http://localhost:8080/cjs-transform-shouldnt-have-static-imports-in-cjs-function.js.map
