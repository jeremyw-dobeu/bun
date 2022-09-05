const Gd = Object.create;
const Ac = Object.defineProperty;
const Xd = Object.getOwnPropertyDescriptor;
const Zd = Object.getOwnPropertyNames;
const Jd = Object.getPrototypeOf;
const Qd = Object.prototype.hasOwnProperty;
const an = (e, n) => () => (
  n || e((n = { exports: {} }).exports, n), n.exports
);
const Kd = (e, n, i, s) => {
  if ((n && typeof n === "object") || typeof n === "function") {
    for (const v of Zd(n)) {
      !Qd.call(e, v) &&
        v !== i &&
        Ac(e, v, {
          get: () => n[v],
          enumerable: !(s = Xd(n, v)) || s.enumerable,
        });
    }
  }
  return e;
};
const Dc = (e, n, i) => (
  (i = e != null ? Gd(Jd(e)) : {}),
  Kd(
    n || !e || !e.__esModule
      ? Ac(i, "default", { value: e, enumerable: !0 })
      : i,
    e
  )
);
const Nc = an(($) => {
  "use strict";
  const Ai = Symbol.for("react.element");
  const qd = Symbol.for("react.portal");
  const ep = Symbol.for("react.fragment");
  const tp = Symbol.for("react.strict_mode");
  const rp = Symbol.for("react.profiler");
  const np = Symbol.for("react.provider");
  const op = Symbol.for("react.context");
  const ap = Symbol.for("react.forward_ref");
  const ip = Symbol.for("react.suspense");
  const lp = Symbol.for("react.memo");
  const sp = Symbol.for("react.lazy");
  const Oc = Symbol.iterator;
  function up(e) {
    return e === null || typeof e !== "object"
      ? null
      : ((e = (Oc && e[Oc]) || e["@@iterator"]),
        typeof e === "function" ? e : null);
  }
  const Bc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  };
  const Uc = Object.assign;
  const jc = {};
  function sa(e, n, i) {
    (this.props = e),
      (this.context = n),
      (this.refs = jc),
      (this.updater = i || Bc);
  }
  sa.prototype.isReactComponent = {};
  sa.prototype.setState = function (e, n) {
    if (typeof e !== "object" && typeof e !== "function" && e != null) {
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    }
    this.updater.enqueueSetState(this, e, n, "setState");
  };
  sa.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Hc() {}
  Hc.prototype = sa.prototype;
  function Hu(e, n, i) {
    (this.props = e),
      (this.context = n),
      (this.refs = jc),
      (this.updater = i || Bc);
  }
  const Wu = (Hu.prototype = new Hc());
  Wu.constructor = Hu;
  Uc(Wu, sa.prototype);
  Wu.isPureReactComponent = !0;
  const Mc = Array.isArray;
  const Wc = Object.prototype.hasOwnProperty;
  const zu = { current: null };
  const zc = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $c(e, n, i) {
    let s;
    const v = {};
    let c = null;
    let m = null;
    if (n != null) {
      for (s in (n.ref !== void 0 && (m = n.ref),
      n.key !== void 0 && (c = "" + n.key),
      n)) {
        Wc.call(n, s) && !zc.hasOwnProperty(s) && (v[s] = n[s]);
      }
    }
    let S = arguments.length - 2;
    if (S === 1) v.children = i;
    else if (S > 1) {
      for (var E = Array(S), x = 0; x < S; x++) E[x] = arguments[x + 2];
      v.children = E;
    }
    if (e && e.defaultProps) {
      for (s in ((S = e.defaultProps), S)) v[s] === void 0 && (v[s] = S[s]);
    }
    return {
      $$typeof: Ai,
      type: e,
      key: c,
      ref: m,
      props: v,
      _owner: zu.current,
    };
  }
  function cp(e, n) {
    return {
      $$typeof: Ai,
      type: e.type,
      key: n,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function $u(e) {
    return typeof e === "object" && e !== null && e.$$typeof === Ai;
  }
  function fp(e) {
    const n = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (i) {
        return n[i];
      })
    );
  }
  const Lc = /\/+/g;
  function ju(e, n) {
    return typeof e === "object" && e !== null && e.key != null
      ? fp("" + e.key)
      : n.toString(36);
  }
  function Ml(e, n, i, s, v) {
    let c = typeof e;
    (c === "undefined" || c === "boolean") && (e = null);
    let m = !1;
    if (e === null) m = !0;
    else {
      switch (c) {
        case "string":
        case "number":
          m = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Ai:
            case qd:
              m = !0;
          }
      }
    }
    if (m) {
      return (
        (m = e),
        (v = v(m)),
        (e = s === "" ? "." + ju(m, 0) : s),
        Mc(v)
          ? ((i = ""),
            e != null && (i = e.replace(Lc, "$&/") + "/"),
            Ml(v, n, i, "", function (x) {
              return x;
            }))
          : v != null &&
            ($u(v) &&
              (v = cp(
                v,
                i +
                  (!v.key || (m && m.key === v.key)
                    ? ""
                    : ("" + v.key).replace(Lc, "$&/") + "/") +
                  e
              )),
            n.push(v)),
        1
      );
    }
    if (((m = 0), (s = s === "" ? "." : s + ":"), Mc(e))) {
      for (var S = 0; S < e.length; S++) {
        c = e[S];
        var E = s + ju(c, S);
        m += Ml(c, n, i, E, v);
      }
    } else if (((E = up(e)), typeof E === "function")) {
      for (e = E.call(e), S = 0; !(c = e.next()).done; ) {
        (c = c.value), (E = s + ju(c, S++)), (m += Ml(c, n, i, E, v));
      }
    } else if (c === "object") {
      throw (
        ((n = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (n === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : n) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return m;
  }
  function Ol(e, n, i) {
    if (e == null) return e;
    const s = [];
    let v = 0;
    return (
      Ml(e, s, "", "", function (c) {
        return n.call(i, c, v++);
      }),
      s
    );
  }
  function dp(e) {
    if (e._status === -1) {
      let n = e._result;
      (n = n()),
        n.then(
          function (i) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = i));
          },
          function (i) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = i));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = n));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  const Ve = { current: null };
  const Ll = { transition: null };
  const pp = {
    ReactCurrentDispatcher: Ve,
    ReactCurrentBatchConfig: Ll,
    ReactCurrentOwner: zu,
  };
  $.Children = {
    map: Ol,
    forEach: function (e, n, i) {
      Ol(
        e,
        function () {
          n.apply(this, arguments);
        },
        i
      );
    },
    count: function (e) {
      let n = 0;
      return (
        Ol(e, function () {
          n++;
        }),
        n
      );
    },
    toArray: function (e) {
      return (
        Ol(e, function (n) {
          return n;
        }) || []
      );
    },
    only: function (e) {
      if (!$u(e)) {
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      }
      return e;
    },
  };
  $.Component = sa;
  $.Fragment = ep;
  $.Profiler = rp;
  $.PureComponent = Hu;
  $.StrictMode = tp;
  $.Suspense = ip;
  $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pp;
  $.cloneElement = function (e, n, i) {
    if (e == null) {
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    }
    const s = Uc({}, e.props);
    let v = e.key;
    let c = e.ref;
    let m = e._owner;
    if (n != null) {
      if (
        (n.ref !== void 0 && ((c = n.ref), (m = zu.current)),
        n.key !== void 0 && (v = "" + n.key),
        e.type && e.type.defaultProps)
      ) {
        var S = e.type.defaultProps;
      }
      for (E in n) {
        Wc.call(n, E) &&
          !zc.hasOwnProperty(E) &&
          (s[E] = n[E] === void 0 && S !== void 0 ? S[E] : n[E]);
      }
    }
    var E = arguments.length - 2;
    if (E === 1) s.children = i;
    else if (E > 1) {
      S = Array(E);
      for (let x = 0; x < E; x++) S[x] = arguments[x + 2];
      s.children = S;
    }
    return { $$typeof: Ai, type: e.type, key: v, ref: c, props: s, _owner: m };
  };
  $.createContext = function (e) {
    return (
      (e = {
        $$typeof: op,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: np, _context: e }),
      (e.Consumer = e)
    );
  };
  $.createElement = $c;
  $.createFactory = function (e) {
    const n = $c.bind(null, e);
    return (n.type = e), n;
  };
  $.createRef = function () {
    return { current: null };
  };
  $.forwardRef = function (e) {
    return { $$typeof: ap, render: e };
  };
  $.isValidElement = $u;
  $.lazy = function (e) {
    return { $$typeof: sp, _payload: { _status: -1, _result: e }, _init: dp };
  };
  $.memo = function (e, n) {
    return { $$typeof: lp, type: e, compare: n === void 0 ? null : n };
  };
  $.startTransition = function (e) {
    const n = Ll.transition;
    Ll.transition = {};
    try {
      e();
    } finally {
      Ll.transition = n;
    }
  };
  $.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  };
  $.useCallback = function (e, n) {
    return Ve.current.useCallback(e, n);
  };
  $.useContext = function (e) {
    return Ve.current.useContext(e);
  };
  $.useDebugValue = function () {};
  $.useDeferredValue = function (e) {
    return Ve.current.useDeferredValue(e);
  };
  $.useEffect = function (e, n) {
    return Ve.current.useEffect(e, n);
  };
  $.useId = function () {
    return Ve.current.useId();
  };
  $.useImperativeHandle = function (e, n, i) {
    return Ve.current.useImperativeHandle(e, n, i);
  };
  $.useInsertionEffect = function (e, n) {
    return Ve.current.useInsertionEffect(e, n);
  };
  $.useLayoutEffect = function (e, n) {
    return Ve.current.useLayoutEffect(e, n);
  };
  $.useMemo = function (e, n) {
    return Ve.current.useMemo(e, n);
  };
  $.useReducer = function (e, n, i) {
    return Ve.current.useReducer(e, n, i);
  };
  $.useRef = function (e) {
    return Ve.current.useRef(e);
  };
  $.useState = function (e) {
    return Ve.current.useState(e);
  };
  $.useSyncExternalStore = function (e, n, i) {
    return Ve.current.useSyncExternalStore(e, n, i);
  };
  $.useTransition = function () {
    return Ve.current.useTransition();
  };
  $.version = "18.2.0";
});
const Vc = an((N, Bl) => {
  "use strict";
  process.env.NODE_ENV !== "production" &&
    (function () {
      "use strict";
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
          "function" &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      const e = "18.2.0";
      const n = Symbol.for("react.element");
      const i = Symbol.for("react.portal");
      const s = Symbol.for("react.fragment");
      const v = Symbol.for("react.strict_mode");
      const c = Symbol.for("react.profiler");
      const m = Symbol.for("react.provider");
      const S = Symbol.for("react.context");
      const E = Symbol.for("react.forward_ref");
      const x = Symbol.for("react.suspense");
      const R = Symbol.for("react.suspense_list");
      const D = Symbol.for("react.memo");
      const V = Symbol.for("react.lazy");
      const te = Symbol.for("react.offscreen");
      const J = Symbol.iterator;
      const Oe = "@@iterator";
      function P(h) {
        if (h === null || typeof h !== "object") return null;
        const b = (J && h[J]) || h[Oe];
        return typeof b === "function" ? b : null;
      }
      const ue = { current: null };
      const W = { transition: null };
      const q = {
        current: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
      };
      const xe = { current: null };
      const _e = {};
      let he = null;
      function F(h) {
        he = h;
      }
      (_e.setExtraStackFrame = function (h) {
        he = h;
      }),
        (_e.getCurrentStack = null),
        (_e.getStackAddendum = function () {
          let h = "";
          he && (h += he);
          const b = _e.getCurrentStack;
          return b && (h += b() || ""), h;
        });
      const ct = !1;
      const qt = !1;
      const yt = !1;
      const Mt = !1;
      const Lt = !1;
      const ft = {
        ReactCurrentDispatcher: ue,
        ReactCurrentBatchConfig: W,
        ReactCurrentOwner: xe,
      };
      (ft.ReactDebugCurrentFrame = _e), (ft.ReactCurrentActQueue = q);
      function Me(h) {
        {
          for (
            var b = arguments.length, k = new Array(b > 1 ? b - 1 : 0), T = 1;
            T < b;
            T++
          ) {
            k[T - 1] = arguments[T];
          }
          Er("warn", h, k);
        }
      }
      function B(h) {
        {
          for (
            var b = arguments.length, k = new Array(b > 1 ? b - 1 : 0), T = 1;
            T < b;
            T++
          ) {
            k[T - 1] = arguments[T];
          }
          Er("error", h, k);
        }
      }
      function Er(h, b, k) {
        {
          const T = ft.ReactDebugCurrentFrame;
          const I = T.getStackAddendum();
          I !== "" && ((b += "%s"), (k = k.concat([I])));
          const U = k.map(function (M) {
            return String(M);
          });
          U.unshift("Warning: " + b),
            Function.prototype.apply.call(console[h], console, U);
        }
      }
      const tt = {};
      function Bt(h, b) {
        {
          const k = h.constructor;
          const T = (k && (k.displayName || k.name)) || "ReactClass";
          const I = T + "." + b;
          if (tt[I]) return;
          B(
            "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
            b,
            T
          ),
            (tt[I] = !0);
        }
      }
      const bt = {
        isMounted: function (h) {
          return !1;
        },
        enqueueForceUpdate: function (h, b, k) {
          Bt(h, "forceUpdate");
        },
        enqueueReplaceState: function (h, b, k, T) {
          Bt(h, "replaceState");
        },
        enqueueSetState: function (h, b, k, T) {
          Bt(h, "setState");
        },
      };
      const Le = Object.assign;
      const er = {};
      Object.freeze(er);
      function re(h, b, k) {
        (this.props = h),
          (this.context = b),
          (this.refs = er),
          (this.updater = k || bt);
      }
      (re.prototype.isReactComponent = {}),
        (re.prototype.setState = function (h, b) {
          if (typeof h !== "object" && typeof h !== "function" && h != null) {
            throw new Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          }
          this.updater.enqueueSetState(this, h, b, "setState");
        }),
        (re.prototype.forceUpdate = function (h) {
          this.updater.enqueueForceUpdate(this, h, "forceUpdate");
        });
      {
        const ce = {
          isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
          ],
          replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).",
          ],
        };
        const tr = function (h, b) {
          Object.defineProperty(re.prototype, h, {
            get: function () {
              Me(
                "%s(...) is deprecated in plain JavaScript React classes. %s",
                b[0],
                b[1]
              );
            },
          });
        };
        for (const rr in ce) ce.hasOwnProperty(rr) && tr(rr, ce[rr]);
      }
      function nr() {}
      nr.prototype = re.prototype;
      function Rr(h, b, k) {
        (this.props = h),
          (this.context = b),
          (this.refs = er),
          (this.updater = k || bt);
      }
      const St = (Rr.prototype = new nr());
      (St.constructor = Rr),
        Le(St, re.prototype),
        (St.isPureReactComponent = !0);
      function so() {
        const h = { current: null };
        return Object.seal(h), h;
      }
      const uo = Array.isArray;
      function ye(h) {
        return uo(h);
      }
      function ve(h) {
        {
          const b = typeof Symbol === "function" && Symbol.toStringTag;
          const k =
            (b && h[Symbol.toStringTag]) || h.constructor.name || "Object";
          return k;
        }
      }
      function co(h) {
        try {
          return or(h), !1;
        } catch {
          return !0;
        }
      }
      function or(h) {
        return "" + h;
      }
      function je(h) {
        if (co(h)) {
          return (
            B(
              "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
              ve(h)
            ),
            or(h)
          );
        }
      }
      function ha(h, b, k) {
        const T = h.displayName;
        if (T) return T;
        const I = b.displayName || b.name || "";
        return I !== "" ? k + "(" + I + ")" : k;
      }
      function ar(h) {
        return h.displayName || "Context";
      }
      function dt(h) {
        if (h == null) return null;
        if (
          (typeof h.tag === "number" &&
            B(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          typeof h === "function")
        ) {
          return h.displayName || h.name || null;
        }
        if (typeof h === "string") return h;
        switch (h) {
          case s:
            return "Fragment";
          case i:
            return "Portal";
          case c:
            return "Profiler";
          case v:
            return "StrictMode";
          case x:
            return "Suspense";
          case R:
            return "SuspenseList";
        }
        if (typeof h === "object") {
          switch (h.$$typeof) {
            case S:
              var b = h;
              return ar(b) + ".Consumer";
            case m:
              var k = h;
              return ar(k._context) + ".Provider";
            case E:
              return ha(h, h.render, "ForwardRef");
            case D:
              var T = h.displayName || null;
              return T !== null ? T : dt(h.type) || "Memo";
            case V: {
              const I = h;
              const U = I._payload;
              const M = I._init;
              try {
                return dt(M(U));
              } catch {
                return null;
              }
            }
          }
        }
        return null;
      }
      const ir = Object.prototype.hasOwnProperty;
      const fo = { key: !0, ref: !0, __self: !0, __source: !0 };
      let lr;
      let fn;
      let sr;
      sr = {};
      function pt(h) {
        if (ir.call(h, "ref")) {
          const b = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (b && b.isReactWarning) return !1;
        }
        return h.ref !== void 0;
      }
      function ke(h) {
        if (ir.call(h, "key")) {
          const b = Object.getOwnPropertyDescriptor(h, "key").get;
          if (b && b.isReactWarning) return !1;
        }
        return h.key !== void 0;
      }
      function po(h, b) {
        const k = function () {
          lr ||
            ((lr = !0),
            B(
              "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
              b
            ));
        };
        (k.isReactWarning = !0),
          Object.defineProperty(h, "key", { get: k, configurable: !0 });
      }
      function va(h, b) {
        const k = function () {
          fn ||
            ((fn = !0),
            B(
              "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
              b
            ));
        };
        (k.isReactWarning = !0),
          Object.defineProperty(h, "ref", { get: k, configurable: !0 });
      }
      function ga(h) {
        if (
          typeof h.ref === "string" &&
          xe.current &&
          h.__self &&
          xe.current.stateNode !== h.__self
        ) {
          const b = dt(xe.current.type);
          sr[b] ||
            (B(
              'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
              b,
              h.ref
            ),
            (sr[b] = !0));
        }
      }
      const dn = function (h, b, k, T, I, U, M) {
        const H = { $$typeof: n, type: h, key: b, ref: k, props: M, _owner: U };
        return (
          (H._store = {}),
          Object.defineProperty(H._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(H, "_self", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: T,
          }),
          Object.defineProperty(H, "_source", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: I,
          }),
          Object.freeze && (Object.freeze(H.props), Object.freeze(H)),
          H
        );
      };
      function ho(h, b, k) {
        let T;
        const I = {};
        let U = null;
        let M = null;
        let H = null;
        let z = null;
        if (b != null) {
          pt(b) && ((M = b.ref), ga(b)),
            ke(b) && (je(b.key), (U = "" + b.key)),
            (H = b.__self === void 0 ? null : b.__self),
            (z = b.__source === void 0 ? null : b.__source);
          for (T in b) ir.call(b, T) && !fo.hasOwnProperty(T) && (I[T] = b[T]);
        }
        const Y = arguments.length - 2;
        if (Y === 1) I.children = k;
        else if (Y > 1) {
          for (var Q = Array(Y), K = 0; K < Y; K++) Q[K] = arguments[K + 2];
          Object.freeze && Object.freeze(Q), (I.children = Q);
        }
        if (h && h.defaultProps) {
          const ee = h.defaultProps;
          for (T in ee) I[T] === void 0 && (I[T] = ee[T]);
        }
        if (U || M) {
          const fe =
            typeof h === "function" ? h.displayName || h.name || "Unknown" : h;
          U && po(I, fe), M && va(I, fe);
        }
        return dn(h, U, M, H, z, xe.current, I);
      }
      function ma(h, b) {
        const k = dn(h.type, b, h.ref, h._self, h._source, h._owner, h.props);
        return k;
      }
      function pn(h, b, k) {
        if (h == null) {
          throw new Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
              h +
              "."
          );
        }
        let T;
        const I = Le({}, h.props);
        let U = h.key;
        let M = h.ref;
        const H = h._self;
        const z = h._source;
        let Y = h._owner;
        if (b != null) {
          pt(b) && ((M = b.ref), (Y = xe.current)),
            ke(b) && (je(b.key), (U = "" + b.key));
          let Q;
          h.type && h.type.defaultProps && (Q = h.type.defaultProps);
          for (T in b) {
            ir.call(b, T) &&
              !fo.hasOwnProperty(T) &&
              (b[T] === void 0 && Q !== void 0 ? (I[T] = Q[T]) : (I[T] = b[T]));
          }
        }
        const K = arguments.length - 2;
        if (K === 1) I.children = k;
        else if (K > 1) {
          for (var ee = Array(K), fe = 0; fe < K; fe++) {
            ee[fe] = arguments[fe + 2];
          }
          I.children = ee;
        }
        return dn(h.type, U, M, H, z, Y, I);
      }
      function wt(h) {
        return typeof h === "object" && h !== null && h.$$typeof === n;
      }
      const Te = ".";
      const vo = ":";
      function go(h) {
        const b = /[=:]/g;
        const k = { "=": "=0", ":": "=2" };
        const T = h.replace(b, function (I) {
          return k[I];
        });
        return "$" + T;
      }
      let xt = !1;
      const hn = /\/+/g;
      function vn(h) {
        return h.replace(hn, "$&/");
      }
      function Ir(h, b) {
        return typeof h === "object" && h !== null && h.key != null
          ? (je(h.key), go("" + h.key))
          : b.toString(36);
      }
      function ur(h, b, k, T, I) {
        const U = typeof h;
        (U === "undefined" || U === "boolean") && (h = null);
        let M = !1;
        if (h === null) M = !0;
        else {
          switch (U) {
            case "string":
            case "number":
              M = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case n:
                case i:
                  M = !0;
              }
          }
        }
        if (M) {
          const H = h;
          let z = I(H);
          const Y = T === "" ? Te + Ir(H, 0) : T;
          if (ye(z)) {
            let Q = "";
            Y != null && (Q = vn(Y) + "/"),
              ur(z, b, Q, "", function (Ma) {
                return Ma;
              });
          } else {
            z != null &&
              (wt(z) &&
                (z.key && (!H || H.key !== z.key) && je(z.key),
                (z = ma(
                  z,
                  k +
                    (z.key && (!H || H.key !== z.key)
                      ? vn("" + z.key) + "/"
                      : "") +
                    Y
                ))),
              b.push(z));
          }
          return 1;
        }
        let K;
        let ee;
        let fe = 0;
        const Se = T === "" ? Te : T + vo;
        if (ye(h)) {
          for (let yr = 0; yr < h.length; yr++) {
            (K = h[yr]), (ee = Se + Ir(K, yr)), (fe += ur(K, b, k, ee, I));
          }
        } else {
          const Pn = P(h);
          if (typeof Pn === "function") {
            const Wr = h;
            Pn === Wr.entries &&
              (xt ||
                Me(
                  "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
                ),
              (xt = !0));
            for (var Co = Pn.call(Wr), zr, Oa = 0; !(zr = Co.next()).done; ) {
              (K = zr.value),
                (ee = Se + Ir(K, Oa++)),
                (fe += ur(K, b, k, ee, I));
            }
          } else if (U === "object") {
            const Eo = String(h);
            throw new Error(
              "Objects are not valid as a React child (found: " +
                (Eo === "[object Object]"
                  ? "object with keys {" + Object.keys(h).join(", ") + "}"
                  : Eo) +
                "). If you meant to render a collection of children, use an array instead."
            );
          }
        }
        return fe;
      }
      function _r(h, b, k) {
        if (h == null) return h;
        const T = [];
        let I = 0;
        return (
          ur(h, T, "", "", function (U) {
            return b.call(k, U, I++);
          }),
          T
        );
      }
      function ya(h) {
        let b = 0;
        return (
          _r(h, function () {
            b++;
          }),
          b
        );
      }
      function ba(h, b, k) {
        _r(
          h,
          function () {
            b.apply(this, arguments);
          },
          k
        );
      }
      function mo(h) {
        return (
          _r(h, function (b) {
            return b;
          }) || []
        );
      }
      function Ut(h) {
        if (!wt(h)) {
          throw new Error(
            "React.Children.only expected to receive a single React element child."
          );
        }
        return h;
      }
      function gn(h) {
        const b = {
          $$typeof: S,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        };
        b.Provider = { $$typeof: m, _context: b };
        let k = !1;
        let T = !1;
        let I = !1;
        {
          const U = { $$typeof: S, _context: b };
          Object.defineProperties(U, {
            Provider: {
              get: function () {
                return (
                  T ||
                    ((T = !0),
                    B(
                      "Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?"
                    )),
                  b.Provider
                );
              },
              set: function (M) {
                b.Provider = M;
              },
            },
            _currentValue: {
              get: function () {
                return b._currentValue;
              },
              set: function (M) {
                b._currentValue = M;
              },
            },
            _currentValue2: {
              get: function () {
                return b._currentValue2;
              },
              set: function (M) {
                b._currentValue2 = M;
              },
            },
            _threadCount: {
              get: function () {
                return b._threadCount;
              },
              set: function (M) {
                b._threadCount = M;
              },
            },
            Consumer: {
              get: function () {
                return (
                  k ||
                    ((k = !0),
                    B(
                      "Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
                    )),
                  b.Consumer
                );
              },
            },
            displayName: {
              get: function () {
                return b.displayName;
              },
              set: function (M) {
                I ||
                  (Me(
                    "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                    M
                  ),
                  (I = !0));
              },
            },
          }),
            (b.Consumer = U);
        }
        return (b._currentRenderer = null), (b._currentRenderer2 = null), b;
      }
      const jt = -1;
      const Pr = 0;
      const ge = 1;
      const Sa = 2;
      function wa(h) {
        if (h._status === jt) {
          const b = h._result;
          const k = b();
          if (
            (k.then(
              function (U) {
                if (h._status === Pr || h._status === jt) {
                  const M = h;
                  (M._status = ge), (M._result = U);
                }
              },
              function (U) {
                if (h._status === Pr || h._status === jt) {
                  const M = h;
                  (M._status = Sa), (M._result = U);
                }
              }
            ),
            h._status === jt)
          ) {
            const T = h;
            (T._status = Pr), (T._result = k);
          }
        }
        if (h._status === ge) {
          const I = h._result;
          return (
            I === void 0 &&
              B(
                `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
                I
              ),
            "default" in I ||
              B(
                `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
                I
              ),
            I.default
          );
        } else throw h._result;
      }
      function xa(h) {
        const b = { _status: jt, _result: h };
        const k = { $$typeof: V, _payload: b, _init: wa };
        {
          let T, I;
          Object.defineProperties(k, {
            defaultProps: {
              configurable: !0,
              get: function () {
                return T;
              },
              set: function (U) {
                B(
                  "React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
                ),
                  (T = U),
                  Object.defineProperty(k, "defaultProps", { enumerable: !0 });
              },
            },
            propTypes: {
              configurable: !0,
              get: function () {
                return I;
              },
              set: function (U) {
                B(
                  "React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."
                ),
                  (I = U),
                  Object.defineProperty(k, "propTypes", { enumerable: !0 });
              },
            },
          });
        }
        return k;
      }
      function ka(h) {
        h != null && h.$$typeof === D
          ? B(
              "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
            )
          : typeof h !== "function"
          ? B(
              "forwardRef requires a render function but was given %s.",
              h === null ? "null" : typeof h
            )
          : h.length !== 0 &&
            h.length !== 2 &&
            B(
              "forwardRef render functions accept exactly two parameters: props and ref. %s",
              h.length === 1
                ? "Did you forget to use the ref parameter?"
                : "Any additional parameter will be undefined."
            ),
          h != null &&
            (h.defaultProps != null || h.propTypes != null) &&
            B(
              "forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"
            );
        const b = { $$typeof: E, render: h };
        {
          let k;
          Object.defineProperty(b, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function () {
              return k;
            },
            set: function (T) {
              (k = T), !h.name && !h.displayName && (h.displayName = T);
            },
          });
        }
        return b;
      }
      let mn;
      mn = Symbol.for("react.module.reference");
      function yo(h) {
        return !!(
          typeof h === "string" ||
          typeof h === "function" ||
          h === s ||
          h === c ||
          Lt ||
          h === v ||
          h === x ||
          h === R ||
          Mt ||
          h === te ||
          ct ||
          qt ||
          yt ||
          (typeof h === "object" &&
            h !== null &&
            (h.$$typeof === V ||
              h.$$typeof === D ||
              h.$$typeof === m ||
              h.$$typeof === S ||
              h.$$typeof === E ||
              h.$$typeof === mn ||
              h.getModuleId !== void 0))
        );
      }
      function Ta(h, b) {
        yo(h) ||
          B(
            "memo: The first argument must be a component. Instead received: %s",
            h === null ? "null" : typeof h
          );
        const k = { $$typeof: D, type: h, compare: b === void 0 ? null : b };
        {
          let T;
          Object.defineProperty(k, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function () {
              return T;
            },
            set: function (I) {
              (T = I), !h.name && !h.displayName && (h.displayName = I);
            },
          });
        }
        return k;
      }
      function me() {
        const h = ue.current;
        return (
          h === null &&
            B(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`),
          h
        );
      }
      function be(h) {
        const b = me();
        if (h._context !== void 0) {
          const k = h._context;
          k.Consumer === h
            ? B(
                "Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"
              )
            : k.Provider === h &&
              B(
                "Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?"
              );
        }
        return b.useContext(h);
      }
      function Ca(h) {
        const b = me();
        return b.useState(h);
      }
      function Ea(h, b, k) {
        const T = me();
        return T.useReducer(h, b, k);
      }
      function Ra(h) {
        const b = me();
        return b.useRef(h);
      }
      function bo(h, b) {
        const k = me();
        return k.useEffect(h, b);
      }
      function So(h, b) {
        const k = me();
        return k.useInsertionEffect(h, b);
      }
      function Ia(h, b) {
        const k = me();
        return k.useLayoutEffect(h, b);
      }
      function _a(h, b) {
        const k = me();
        return k.useCallback(h, b);
      }
      function cr(h, b) {
        const k = me();
        return k.useMemo(h, b);
      }
      function Fr(h, b, k) {
        const T = me();
        return T.useImperativeHandle(h, b, k);
      }
      function kt(h, b) {
        {
          const k = me();
          return k.useDebugValue(h, b);
        }
      }
      function Ar() {
        const h = me();
        return h.useTransition();
      }
      function Dr(h) {
        const b = me();
        return b.useDeferredValue(h);
      }
      function fr() {
        const h = me();
        return h.useId();
      }
      function yn(h, b, k) {
        const T = me();
        return T.useSyncExternalStore(h, b, k);
      }
      let Tt = 0;
      let Or;
      let He;
      let Ht;
      let Ct;
      let Wt;
      let zt;
      let Et;
      function dr() {}
      dr.__reactDisabledLog = !0;
      function bn() {
        {
          if (Tt === 0) {
            (Or = console.log),
              (He = console.info),
              (Ht = console.warn),
              (Ct = console.error),
              (Wt = console.group),
              (zt = console.groupCollapsed),
              (Et = console.groupEnd);
            const h = {
              configurable: !0,
              enumerable: !0,
              value: dr,
              writable: !0,
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h,
            });
          }
          Tt++;
        }
      }
      function Sn() {
        {
          if ((Tt--, Tt === 0)) {
            const h = { configurable: !0, enumerable: !0, writable: !0 };
            Object.defineProperties(console, {
              log: Le({}, h, { value: Or }),
              info: Le({}, h, { value: He }),
              warn: Le({}, h, { value: Ht }),
              error: Le({}, h, { value: Ct }),
              group: Le({}, h, { value: Wt }),
              groupCollapsed: Le({}, h, { value: zt }),
              groupEnd: Le({}, h, { value: Et }),
            });
          }
          Tt < 0 &&
            B(
              "disabledDepth fell below zero. This is a bug in React. Please file an issue."
            );
        }
      }
      const Ee = ft.ReactCurrentDispatcher;
      let wn;
      function Mr(h, b, k) {
        {
          if (wn === void 0) {
            try {
              throw Error();
            } catch (I) {
              const T = I.stack.trim().match(/\n( *(at )?)/);
              wn = (T && T[1]) || "";
            }
          }
          return (
            `
` +
            wn +
            h
          );
        }
      }
      let Lr = !1;
      let Br;
      {
        const wo = typeof WeakMap === "function" ? WeakMap : Map;
        Br = new wo();
      }
      function We(h, b) {
        if (!h || Lr) return "";
        {
          const k = Br.get(h);
          if (k !== void 0) return k;
        }
        let T;
        Lr = !0;
        const I = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        let U;
        (U = Ee.current), (Ee.current = null), bn();
        try {
          if (b) {
            const M = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(M.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect === "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(M, []);
              } catch (Se) {
                T = Se;
              }
              Reflect.construct(h, [], M);
            } else {
              try {
                M.call();
              } catch (Se) {
                T = Se;
              }
              h.call(M.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Se) {
              T = Se;
            }
            h();
          }
        } catch (Se) {
          if (Se && T && typeof Se.stack === "string") {
            for (
              var H = Se.stack.split(`
`),
                z = T.stack.split(`
`),
                Y = H.length - 1,
                Q = z.length - 1;
              Y >= 1 && Q >= 0 && H[Y] !== z[Q];

            ) {
              Q--;
            }
            for (; Y >= 1 && Q >= 0; Y--, Q--) {
              if (H[Y] !== z[Q]) {
                if (Y !== 1 || Q !== 1) {
                  do {
                    if ((Y--, Q--, Q < 0 || H[Y] !== z[Q])) {
                      let K =
                        `
` + H[Y].replace(" at new ", " at ");
                      return (
                        h.displayName &&
                          K.includes("<anonymous>") &&
                          (K = K.replace("<anonymous>", h.displayName)),
                        typeof h === "function" && Br.set(h, K),
                        K
                      );
                    }
                  } while (Y >= 1 && Q >= 0);
                }
                break;
              }
            }
          }
        } finally {
          (Lr = !1), (Ee.current = U), Sn(), (Error.prepareStackTrace = I);
        }
        const ee = h ? h.displayName || h.name : "";
        const fe = ee ? Mr(ee) : "";
        return typeof h === "function" && Br.set(h, fe), fe;
      }
      function Rt(h, b, k) {
        return We(h, !1);
      }
      function ht(h) {
        const b = h.prototype;
        return !!(b && b.isReactComponent);
      }
      function $t(h, b, k) {
        if (h == null) return "";
        if (typeof h === "function") return We(h, ht(h));
        if (typeof h === "string") return Mr(h);
        switch (h) {
          case x:
            return Mr("Suspense");
          case R:
            return Mr("SuspenseList");
        }
        if (typeof h === "object") {
          switch (h.$$typeof) {
            case E:
              return Rt(h.render);
            case D:
              return $t(h.type, b, k);
            case V: {
              const T = h;
              const I = T._payload;
              const U = T._init;
              try {
                return $t(U(I), b, k);
              } catch {}
            }
          }
        }
        return "";
      }
      const Ce = {};
      const rt = ft.ReactDebugCurrentFrame;
      function pr(h) {
        if (h) {
          const b = h._owner;
          const k = $t(h.type, h._source, b ? b.type : null);
          rt.setExtraStackFrame(k);
        } else rt.setExtraStackFrame(null);
      }
      function hr(h, b, k, T, I) {
        {
          const U = Function.call.bind(ir);
          for (const M in h) {
            if (U(h, M)) {
              let H = void 0;
              try {
                if (typeof h[M] !== "function") {
                  const z = Error(
                    (T || "React class") +
                      ": " +
                      k +
                      " type `" +
                      M +
                      "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                      typeof h[M] +
                      "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  throw ((z.name = "Invariant Violation"), z);
                }
                H = h[M](
                  b,
                  M,
                  T,
                  k,
                  null,
                  "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                );
              } catch (Y) {
                H = Y;
              }
              H &&
                !(H instanceof Error) &&
                (pr(I),
                B(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  T || "React class",
                  k,
                  M,
                  typeof H
                ),
                pr(null)),
                H instanceof Error &&
                  !(H.message in Ce) &&
                  ((Ce[H.message] = !0),
                  pr(I),
                  B("Failed %s type: %s", k, H.message),
                  pr(null));
            }
          }
        }
      }
      function It(h) {
        if (h) {
          const b = h._owner;
          const k = $t(h.type, h._source, b ? b.type : null);
          F(k);
        } else F(null);
      }
      let vr;
      vr = !1;
      function Ze() {
        if (xe.current) {
          const h = dt(xe.current.type);
          if (h) {
            return (
              `

Check the render method of \`` +
              h +
              "`."
            );
          }
        }
        return "";
      }
      function _t(h) {
        if (h !== void 0) {
          const b = h.fileName.replace(/^.*[\\\/]/, "");
          const k = h.lineNumber;
          return (
            `

Check your code at ` +
            b +
            ":" +
            k +
            "."
          );
        }
        return "";
      }
      function vt(h) {
        return h != null ? _t(h.__source) : "";
      }
      const Ur = {};
      function Re(h) {
        let b = Ze();
        if (!b) {
          const k = typeof h === "string" ? h : h.displayName || h.name;
          k &&
            (b =
              `

Check the top-level render call using <` +
              k +
              ">.");
        }
        return b;
      }
      function Je(h, b) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          const k = Re(b);
          if (!Ur[k]) {
            Ur[k] = !0;
            let T = "";
            h &&
              h._owner &&
              h._owner !== xe.current &&
              (T = " It was passed a child from " + dt(h._owner.type) + "."),
              It(h),
              B(
                'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                k,
                T
              ),
              It(null);
          }
        }
      }
      function xn(h, b) {
        if (typeof h === "object") {
          if (ye(h)) {
            for (let k = 0; k < h.length; k++) {
              const T = h[k];
              wt(T) && Je(T, b);
            }
          } else if (wt(h)) h._store && (h._store.validated = !0);
          else if (h) {
            const I = P(h);
            if (typeof I === "function" && I !== h.entries) {
              for (var U = I.call(h), M; !(M = U.next()).done; ) {
                wt(M.value) && Je(M.value, b);
              }
            }
          }
        }
      }
      function gr(h) {
        {
          const b = h.type;
          if (b == null || typeof b === "string") return;
          let k;
          if (typeof b === "function") k = b.propTypes;
          else if (
            typeof b === "object" &&
            (b.$$typeof === E || b.$$typeof === D)
          ) {
            k = b.propTypes;
          } else return;
          if (k) {
            const T = dt(b);
            hr(k, h.props, "prop", T, h);
          } else if (b.PropTypes !== void 0 && !vr) {
            vr = !0;
            const I = dt(b);
            B(
              "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
              I || "Unknown"
            );
          }
          typeof b.getDefaultProps === "function" &&
            !b.getDefaultProps.isReactClassApproved &&
            B(
              "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
            );
        }
      }
      function jr(h) {
        {
          for (let b = Object.keys(h.props), k = 0; k < b.length; k++) {
            const T = b[k];
            if (T !== "children" && T !== "key") {
              It(h),
                B(
                  "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                  T
                ),
                It(null);
              break;
            }
          }
          h.ref !== null &&
            (It(h),
            B("Invalid attribute `ref` supplied to `React.Fragment`."),
            It(null));
        }
      }
      function kn(h, b, k) {
        const T = yo(h);
        if (!T) {
          let I = "";
          (h === void 0 ||
            (typeof h === "object" &&
              h !== null &&
              Object.keys(h).length === 0)) &&
            (I +=
              " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          const U = vt(b);
          U ? (I += U) : (I += Ze());
          let M;
          h === null
            ? (M = "null")
            : ye(h)
            ? (M = "array")
            : h !== void 0 && h.$$typeof === n
            ? ((M = "<" + (dt(h.type) || "Unknown") + " />"),
              (I =
                " Did you accidentally export a JSX literal instead of a component?"))
            : (M = typeof h),
            B(
              "React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
              M,
              I
            );
        }
        const H = ho.apply(this, arguments);
        if (H == null) return H;
        if (T) for (let z = 2; z < arguments.length; z++) xn(arguments[z], h);
        return h === s ? jr(H) : gr(H), H;
      }
      let Tn = !1;
      function xo(h) {
        const b = kn.bind(null, h);
        return (
          (b.type = h),
          Tn ||
            ((Tn = !0),
            Me(
              "React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead."
            )),
          Object.defineProperty(b, "type", {
            enumerable: !1,
            get: function () {
              return (
                Me(
                  "Factory.type is deprecated. Access the class directly before passing it to createFactory."
                ),
                Object.defineProperty(this, "type", { value: h }),
                h
              );
            },
          }),
          b
        );
      }
      function ko(h, b, k) {
        for (
          var T = pn.apply(this, arguments), I = 2;
          I < arguments.length;
          I++
        ) {
          xn(arguments[I], T.type);
        }
        return gr(T), T;
      }
      function To(h, b) {
        const k = W.transition;
        W.transition = {};
        const T = W.transition;
        W.transition._updatedFibers = new Set();
        try {
          h();
        } finally {
          if (((W.transition = k), k === null && T._updatedFibers)) {
            const I = T._updatedFibers.size;
            I > 10 &&
              Me(
                "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
              ),
              T._updatedFibers.clear();
          }
        }
      }
      let Cn = !1;
      let Pt = null;
      function Pa(h) {
        if (Pt === null) {
          try {
            const b = ("require" + Math.random()).slice(0, 7);
            const k = Bl && Bl[b];
            Pt = k.call(Bl, "timers").setImmediate;
          } catch {
            Pt = function (I) {
              Cn === !1 &&
                ((Cn = !0),
                typeof MessageChannel > "u" &&
                  B(
                    "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
                  ));
              const U = new MessageChannel();
              (U.port1.onmessage = I), U.port2.postMessage(void 0);
            };
          }
        }
        return Pt(h);
      }
      let gt = 0;
      let Hr = !1;
      function Fa(h) {
        {
          const b = gt;
          gt++, q.current === null && (q.current = []);
          const k = q.isBatchingLegacy;
          let T;
          try {
            if (
              ((q.isBatchingLegacy = !0),
              (T = h()),
              !k && q.didScheduleLegacyUpdate)
            ) {
              const I = q.current;
              I !== null && ((q.didScheduleLegacyUpdate = !1), Rn(I));
            }
          } catch (ee) {
            throw (mr(b), ee);
          } finally {
            q.isBatchingLegacy = k;
          }
          if (
            T !== null &&
            typeof T === "object" &&
            typeof T.then === "function"
          ) {
            const U = T;
            let M = !1;
            const H = {
              then: function (ee, fe) {
                (M = !0),
                  U.then(
                    function (Se) {
                      mr(b), gt === 0 ? Be(Se, ee, fe) : ee(Se);
                    },
                    function (Se) {
                      mr(b), fe(Se);
                    }
                  );
              },
            };
            return (
              !Hr &&
                typeof Promise < "u" &&
                Promise.resolve()
                  .then(function () {})
                  .then(function () {
                    M ||
                      ((Hr = !0),
                      B(
                        "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
                      ));
                  }),
              H
            );
          } else {
            const z = T;
            if ((mr(b), gt === 0)) {
              const Y = q.current;
              Y !== null && (Rn(Y), (q.current = null));
              const Q = {
                then: function (ee, fe) {
                  q.current === null
                    ? ((q.current = []), Be(z, ee, fe))
                    : ee(z);
                },
              };
              return Q;
            } else {
              const K = {
                then: function (ee, fe) {
                  ee(z);
                },
              };
              return K;
            }
          }
        }
      }
      function mr(h) {
        h !== gt - 1 &&
          B(
            "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
          ),
          (gt = h);
      }
      function Be(h, b, k) {
        {
          const T = q.current;
          if (T !== null) {
            try {
              Rn(T),
                Pa(function () {
                  T.length === 0 ? ((q.current = null), b(h)) : Be(h, b, k);
                });
            } catch (I) {
              k(I);
            }
          } else b(h);
        }
      }
      let En = !1;
      function Rn(h) {
        if (!En) {
          En = !0;
          let b = 0;
          try {
            for (; b < h.length; b++) {
              let k = h[b];
              do k = k(!0);
              while (k !== null);
            }
            h.length = 0;
          } catch (T) {
            throw ((h = h.slice(b + 1)), T);
          } finally {
            En = !1;
          }
        }
      }
      const Aa = kn;
      const In = ko;
      const Da = xo;
      const _n = { map: _r, forEach: ba, count: ya, toArray: mo, only: Ut };
      (N.Children = _n),
        (N.Component = re),
        (N.Fragment = s),
        (N.Profiler = c),
        (N.PureComponent = Rr),
        (N.StrictMode = v),
        (N.Suspense = x),
        (N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ft),
        (N.cloneElement = In),
        (N.createContext = gn),
        (N.createElement = Aa),
        (N.createFactory = Da),
        (N.createRef = so),
        (N.forwardRef = ka),
        (N.isValidElement = wt),
        (N.lazy = xa),
        (N.memo = Ta),
        (N.startTransition = To),
        (N.unstable_act = Fa),
        (N.useCallback = _a),
        (N.useContext = be),
        (N.useDebugValue = kt),
        (N.useDeferredValue = Dr),
        (N.useEffect = bo),
        (N.useId = fr),
        (N.useImperativeHandle = Fr),
        (N.useInsertionEffect = So),
        (N.useLayoutEffect = Ia),
        (N.useMemo = cr),
        (N.useReducer = Ea),
        (N.useRef = Ra),
        (N.useState = Ca),
        (N.useSyncExternalStore = yn),
        (N.useTransition = Ar),
        (N.version = e),
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
            "function" &&
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
            new Error()
          );
    })();
});
const ua = an((_v, Nu) => {
  "use strict";
  process.env.NODE_ENV === "production"
    ? (Nu.exports = Nc())
    : (Nu.exports = Vc());
});
const Wf = an((ca) => {
  "use strict";
  const pf = ua();
  const hp = require("stream");
  const qe = Object.prototype.hasOwnProperty;
  const vp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
  const Yc = {};
  const Gc = {};
  function hf(e) {
    return qe.call(Gc, e)
      ? !0
      : qe.call(Yc, e)
      ? !1
      : vp.test(e)
      ? (Gc[e] = !0)
      : ((Yc[e] = !0), !1);
  }
  function Ge(e, n, i, s, v, c, m) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = s),
      (this.attributeNamespace = v),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = c),
      (this.removeEmptyString = m);
  }
  const Fe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      Fe[e] = new Ge(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    const n = e[0];
    Fe[n] = new Ge(n, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Fe[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    Fe[e] = new Ge(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      Fe[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Fe[e] = new Ge(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    Fe[e] = new Ge(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    Fe[e] = new Ge(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    Fe[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  const qu = /[\-:]([a-z])/g;
  function ec(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      const n = e.replace(qu, ec);
      Fe[n] = new Ge(n, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      const n = e.replace(qu, ec);
      Fe[n] = new Ge(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    const n = e.replace(qu, ec);
    Fe[n] = new Ge(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    Fe[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  Fe.xlinkHref = new Ge(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    Fe[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  const Hl = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  };
  const gp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Hl).forEach(function (e) {
    gp.forEach(function (n) {
      (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Hl[n] = Hl[e]);
    });
  });
  const mp = /["'&<>]/;
  function Ye(e) {
    if (typeof e === "boolean" || typeof e === "number") return "" + e;
    e = "" + e;
    let n = mp.exec(e);
    if (n) {
      let i = "";
      let s;
      let v = 0;
      for (s = n.index; s < e.length; s++) {
        switch (e.charCodeAt(s)) {
          case 34:
            n = "&quot;";
            break;
          case 38:
            n = "&amp;";
            break;
          case 39:
            n = "&#x27;";
            break;
          case 60:
            n = "&lt;";
            break;
          case 62:
            n = "&gt;";
            break;
          default:
            continue;
        }
        v !== s && (i += e.substring(v, s)), (v = s + 1), (i += n);
      }
      e = v !== s ? i + e.substring(v, s) : i;
    }
    return e;
  }
  const yp = /([A-Z])/g;
  const bp = /^ms-/;
  const Xu = Array.isArray;
  function xr(e, n) {
    return { insertionMode: e, selectedValue: n };
  }
  function Sp(e, n, i) {
    switch (n) {
      case "select":
        return xr(1, i.value != null ? i.value : i.defaultValue);
      case "svg":
        return xr(2, null);
      case "math":
        return xr(3, null);
      case "foreignObject":
        return xr(1, null);
      case "table":
        return xr(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return xr(5, null);
      case "colgroup":
        return xr(7, null);
      case "tr":
        return xr(6, null);
    }
    return e.insertionMode >= 4 || e.insertionMode === 0 ? xr(1, null) : e;
  }
  const Xc = new Map();
  function vf(e, n, i) {
    if (typeof i !== "object") {
      throw Error(
        "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
      );
    }
    n = !0;
    for (const s in i) {
      if (qe.call(i, s)) {
        let v = i[s];
        if (v != null && typeof v !== "boolean" && v !== "") {
          if (s.indexOf("--") === 0) {
            var c = Ye(s);
            v = Ye(("" + v).trim());
          } else {
            c = s;
            let m = Xc.get(c);
            m !== void 0 ||
              ((m = Ye(c.replace(yp, "-$1").toLowerCase().replace(bp, "-ms-"))),
              Xc.set(c, m)),
              (c = m),
              (v =
                typeof v === "number"
                  ? v === 0 || qe.call(Hl, s)
                    ? "" + v
                    : v + "px"
                  : Ye(("" + v).trim()));
          }
          n
            ? ((n = !1), e.push(' style="', c, ":", v))
            : e.push(";", c, ":", v);
        }
      }
    }
    n || e.push('"');
  }
  function it(e, n, i, s) {
    switch (i) {
      case "style":
        vf(e, n, s);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (
      !(i.length > 2) ||
      (i[0] !== "o" && i[0] !== "O") ||
      (i[1] !== "n" && i[1] !== "N")
    ) {
      if (((n = Fe.hasOwnProperty(i) ? Fe[i] : null), n !== null)) {
        switch (typeof s) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!n.acceptsBooleans) return;
        }
        switch (((i = n.attributeName), n.type)) {
          case 3:
            s && e.push(" ", i, '=""');
            break;
          case 4:
            s === !0
              ? e.push(" ", i, '=""')
              : s !== !1 && e.push(" ", i, '="', Ye(s), '"');
            break;
          case 5:
            isNaN(s) || e.push(" ", i, '="', Ye(s), '"');
            break;
          case 6:
            !isNaN(s) && s >= 1 && e.push(" ", i, '="', Ye(s), '"');
            break;
          default:
            n.sanitizeURL && (s = "" + s), e.push(" ", i, '="', Ye(s), '"');
        }
      } else if (hf(i)) {
        switch (typeof s) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (
              ((n = i.toLowerCase().slice(0, 5)),
              n !== "data-" && n !== "aria-")
            ) {
              return;
            }
        }
        e.push(" ", i, '="', Ye(s), '"');
      }
    }
  }
  function Wl(e, n, i) {
    if (n != null) {
      if (i != null) {
        throw Error(
          "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
        );
      }
      if (typeof n !== "object" || !("__html" in n)) {
        throw Error(
          "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
        );
      }
      (n = n.__html), n != null && e.push("" + n);
    }
  }
  function wp(e) {
    let n = "";
    return (
      pf.Children.forEach(e, function (i) {
        i != null && (n += i);
      }),
      n
    );
  }
  function Vu(e, n, i, s) {
    e.push(Jt(i));
    let v = (i = null);
    let c;
    for (c in n) {
      if (qe.call(n, c)) {
        const m = n[c];
        if (m != null) {
          switch (c) {
            case "children":
              i = m;
              break;
            case "dangerouslySetInnerHTML":
              v = m;
              break;
            default:
              it(e, s, c, m);
          }
        }
      }
    }
    return (
      e.push(">"),
      Wl(e, v, i),
      typeof i === "string" ? (e.push(Ye(i)), null) : i
    );
  }
  const xp = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
  const Zc = new Map();
  function Jt(e) {
    let n = Zc.get(e);
    if (n === void 0) {
      if (!xp.test(e)) throw Error("Invalid tag: " + e);
      (n = "<" + e), Zc.set(e, n);
    }
    return n;
  }
  function kp(e, n, i, s, v) {
    switch (n) {
      case "select":
        e.push(Jt("select"));
        var c = null;
        var m = null;
        for (R in i) {
          if (qe.call(i, R)) {
            var S = i[R];
            if (S != null) {
              switch (R) {
                case "children":
                  c = S;
                  break;
                case "dangerouslySetInnerHTML":
                  m = S;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  it(e, s, R, S);
              }
            }
          }
        }
        return e.push(">"), Wl(e, m, c), c;
      case "option":
        (m = v.selectedValue), e.push(Jt("option"));
        var E = (S = null);
        var x = null;
        var R = null;
        for (c in i) {
          if (qe.call(i, c)) {
            var D = i[c];
            if (D != null) {
              switch (c) {
                case "children":
                  S = D;
                  break;
                case "selected":
                  x = D;
                  break;
                case "dangerouslySetInnerHTML":
                  R = D;
                  break;
                case "value":
                  E = D;
                default:
                  it(e, s, c, D);
              }
            }
          }
        }
        if (m != null) {
          if (((i = E !== null ? "" + E : wp(S)), Xu(m))) {
            for (s = 0; s < m.length; s++) {
              if ("" + m[s] === i) {
                e.push(' selected=""');
                break;
              }
            }
          } else "" + m === i && e.push(' selected=""');
        } else x && e.push(' selected=""');
        return e.push(">"), Wl(e, R, S), S;
      case "textarea":
        e.push(Jt("textarea")), (R = m = c = null);
        for (S in i) {
          if (qe.call(i, S) && ((E = i[S]), E != null)) {
            switch (S) {
              case "children":
                R = E;
                break;
              case "value":
                c = E;
                break;
              case "defaultValue":
                m = E;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(
                  "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                );
              default:
                it(e, s, S, E);
            }
          }
        }
        if ((c === null && m !== null && (c = m), e.push(">"), R != null)) {
          if (c != null) {
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          }
          if (Xu(R) && R.length > 1) {
            throw Error("<textarea> can only have at most one child.");
          }
          c = "" + R;
        }
        return (
          typeof c === "string" &&
            c[0] ===
              `
` &&
            e.push(`
`),
          c !== null && e.push(Ye("" + c)),
          null
        );
      case "input":
        e.push(Jt("input")), (E = R = S = c = null);
        for (m in i) {
          if (qe.call(i, m) && ((x = i[m]), x != null)) {
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              case "defaultChecked":
                E = x;
                break;
              case "defaultValue":
                S = x;
                break;
              case "checked":
                R = x;
                break;
              case "value":
                c = x;
                break;
              default:
                it(e, s, m, x);
            }
          }
        }
        return (
          R !== null
            ? it(e, s, "checked", R)
            : E !== null && it(e, s, "checked", E),
          c !== null
            ? it(e, s, "value", c)
            : S !== null && it(e, s, "value", S),
          e.push("/>"),
          null
        );
      case "menuitem":
        e.push(Jt("menuitem"));
        for (const V in i) {
          if (qe.call(i, V) && ((c = i[V]), c != null)) {
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                );
              default:
                it(e, s, V, c);
            }
          }
        }
        return e.push(">"), null;
      case "title":
        e.push(Jt("title")), (c = null);
        for (D in i) {
          if (qe.call(i, D) && ((m = i[D]), m != null)) {
            switch (D) {
              case "children":
                c = m;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(
                  "`dangerouslySetInnerHTML` does not make sense on <title>."
                );
              default:
                it(e, s, D, m);
            }
          }
        }
        return e.push(">"), c;
      case "listing":
      case "pre":
        e.push(Jt(n)), (m = c = null);
        for (E in i) {
          if (qe.call(i, E) && ((S = i[E]), S != null)) {
            switch (E) {
              case "children":
                c = S;
                break;
              case "dangerouslySetInnerHTML":
                m = S;
                break;
              default:
                it(e, s, E, S);
            }
          }
        }
        if ((e.push(">"), m != null)) {
          if (c != null) {
            throw Error(
              "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
            );
          }
          if (typeof m !== "object" || !("__html" in m)) {
            throw Error(
              "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
            );
          }
          (i = m.__html),
            i != null &&
              (typeof i === "string" &&
              i.length > 0 &&
              i[0] ===
                `
`
                ? e.push(
                    `
`,
                    i
                  )
                : e.push("" + i));
        }
        return (
          typeof c === "string" &&
            c[0] ===
              `
` &&
            e.push(`
`),
          c
        );
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        e.push(Jt(n));
        for (const te in i) {
          if (qe.call(i, te) && ((c = i[te]), c != null)) {
            switch (te) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  n +
                    " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                it(e, s, te, c);
            }
          }
        }
        return e.push("/>"), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Vu(e, i, n, s);
      case "html":
        return (
          v.insertionMode === 0 && e.push("<!DOCTYPE html>"), Vu(e, i, n, s)
        );
      default:
        if (n.indexOf("-") === -1 && typeof i.is !== "string") {
          return Vu(e, i, n, s);
        }
        e.push(Jt(n)), (m = c = null);
        for (x in i) {
          if (qe.call(i, x) && ((S = i[x]), S != null)) {
            switch (x) {
              case "children":
                c = S;
                break;
              case "dangerouslySetInnerHTML":
                m = S;
                break;
              case "style":
                vf(e, s, S);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                hf(x) &&
                  typeof S !== "function" &&
                  typeof S !== "symbol" &&
                  e.push(" ", x, '="', Ye(S), '"');
            }
          }
        }
        return e.push(">"), Wl(e, m, c), c;
    }
  }
  function Jc(e, n, i) {
    if ((e.push('<!--$?--><template id="'), i === null)) {
      throw Error(
        "An ID must have been assigned before we can complete the boundary."
      );
    }
    return e.push(i), e.push('"></template>');
  }
  function Tp(e, n, i, s) {
    switch (i.insertionMode) {
      case 0:
      case 1:
        return (
          e.push('<div hidden id="'),
          e.push(n.segmentPrefix),
          (n = s.toString(16)),
          e.push(n),
          e.push('">')
        );
      case 2:
        return (
          e.push('<svg aria-hidden="true" style="display:none" id="'),
          e.push(n.segmentPrefix),
          (n = s.toString(16)),
          e.push(n),
          e.push('">')
        );
      case 3:
        return (
          e.push('<math aria-hidden="true" style="display:none" id="'),
          e.push(n.segmentPrefix),
          (n = s.toString(16)),
          e.push(n),
          e.push('">')
        );
      case 4:
        return (
          e.push('<table hidden id="'),
          e.push(n.segmentPrefix),
          (n = s.toString(16)),
          e.push(n),
          e.push('">')
        );
      case 5:
        return (
          e.push('<table hidden><tbody id="'),
          e.push(n.segmentPrefix),
          (n = s.toString(16)),
          e.push(n),
          e.push('">')
        );
      case 6:
        return (
          e.push('<table hidden><tr id="'),
          e.push(n.segmentPrefix),
          (n = s.toString(16)),
          e.push(n),
          e.push('">')
        );
      case 7:
        return (
          e.push('<table hidden><colgroup id="'),
          e.push(n.segmentPrefix),
          (n = s.toString(16)),
          e.push(n),
          e.push('">')
        );
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  function Cp(e, n) {
    switch (n.insertionMode) {
      case 0:
      case 1:
        return e.push("</div>");
      case 2:
        return e.push("</svg>");
      case 3:
        return e.push("</math>");
      case 4:
        return e.push("</table>");
      case 5:
        return e.push("</tbody></table>");
      case 6:
        return e.push("</tr></table>");
      case 7:
        return e.push("</colgroup></table>");
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  const Ep = /[<\u2028\u2029]/g;
  function Yu(e) {
    return JSON.stringify(e).replace(Ep, function (n) {
      switch (n) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error(
            "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    });
  }
  function gf(e, n) {
    return (
      (n = n === void 0 ? "" : n),
      {
        bootstrapChunks: [],
        startInlineScript: "<script>",
        placeholderPrefix: n + "P:",
        segmentPrefix: n + "S:",
        boundaryPrefix: n + "B:",
        idPrefix: n,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: !1,
        sentCompleteBoundaryFunction: !1,
        sentClientRenderFunction: !1,
        generateStaticMarkup: e,
      }
    );
  }
  function mf() {
    return { insertionMode: 1, selectedValue: null };
  }
  function Qc(e, n, i, s) {
    return i.generateStaticMarkup
      ? (e.push(Ye(n)), !1)
      : (n === ""
          ? (e = s)
          : (s && e.push("<!-- -->"), e.push(Ye(n)), (e = !0)),
        e);
  }
  const Mi = Object.assign;
  const Rp = Symbol.for("react.element");
  const yf = Symbol.for("react.portal");
  const bf = Symbol.for("react.fragment");
  const Sf = Symbol.for("react.strict_mode");
  const wf = Symbol.for("react.profiler");
  const xf = Symbol.for("react.provider");
  const kf = Symbol.for("react.context");
  const Tf = Symbol.for("react.forward_ref");
  const Cf = Symbol.for("react.suspense");
  const Ef = Symbol.for("react.suspense_list");
  const Rf = Symbol.for("react.memo");
  const tc = Symbol.for("react.lazy");
  const Ip = Symbol.for("react.scope");
  const _p = Symbol.for("react.debug_trace_mode");
  const Pp = Symbol.for("react.legacy_hidden");
  const Fp = Symbol.for("react.default_value");
  const Kc = Symbol.iterator;
  function Zu(e) {
    if (e == null) return null;
    if (typeof e === "function") return e.displayName || e.name || null;
    if (typeof e === "string") return e;
    switch (e) {
      case bf:
        return "Fragment";
      case yf:
        return "Portal";
      case wf:
        return "Profiler";
      case Sf:
        return "StrictMode";
      case Cf:
        return "Suspense";
      case Ef:
        return "SuspenseList";
    }
    if (typeof e === "object") {
      switch (e.$$typeof) {
        case kf:
          return (e.displayName || "Context") + ".Consumer";
        case xf:
          return (e._context.displayName || "Context") + ".Provider";
        case Tf:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Rf:
          return (
            (n = e.displayName || null), n !== null ? n : Zu(e.type) || "Memo"
          );
        case tc:
          (n = e._payload), (e = e._init);
          try {
            return Zu(e(n));
          } catch {}
      }
    }
    return null;
  }
  const If = {};
  function qc(e, n) {
    if (((e = e.contextTypes), !e)) return If;
    const i = {};
    let s;
    for (s in e) i[s] = n[s];
    return i;
  }
  let ro = null;
  function Jl(e, n) {
    if (e !== n) {
      (e.context._currentValue2 = e.parentValue), (e = e.parent);
      const i = n.parent;
      if (e === null) {
        if (i !== null) {
          throw Error(
            "The stacks must reach the root at the same time. This is a bug in React."
          );
        }
      } else {
        if (i === null) {
          throw Error(
            "The stacks must reach the root at the same time. This is a bug in React."
          );
        }
        Jl(e, i);
      }
      n.context._currentValue2 = n.value;
    }
  }
  function _f(e) {
    (e.context._currentValue2 = e.parentValue),
      (e = e.parent),
      e !== null && _f(e);
  }
  function Pf(e) {
    const n = e.parent;
    n !== null && Pf(n), (e.context._currentValue2 = e.value);
  }
  function Ff(e, n) {
    if (
      ((e.context._currentValue2 = e.parentValue), (e = e.parent), e === null)
    ) {
      throw Error(
        "The depth must equal at least at zero before reaching the root. This is a bug in React."
      );
    }
    e.depth === n.depth ? Jl(e, n) : Ff(e, n);
  }
  function Af(e, n) {
    const i = n.parent;
    if (i === null) {
      throw Error(
        "The depth must equal at least at zero before reaching the root. This is a bug in React."
      );
    }
    e.depth === i.depth ? Jl(e, i) : Af(e, i),
      (n.context._currentValue2 = n.value);
  }
  function Vl(e) {
    const n = ro;
    n !== e &&
      (n === null
        ? Pf(e)
        : e === null
        ? _f(n)
        : n.depth === e.depth
        ? Jl(n, e)
        : n.depth > e.depth
        ? Ff(n, e)
        : Af(n, e),
      (ro = e));
  }
  const ef = {
    isMounted: function () {
      return !1;
    },
    enqueueSetState: function (e, n) {
      (e = e._reactInternals), e.queue !== null && e.queue.push(n);
    },
    enqueueReplaceState: function (e, n) {
      (e = e._reactInternals), (e.replace = !0), (e.queue = [n]);
    },
    enqueueForceUpdate: function () {},
  };
  function tf(e, n, i, s) {
    let v = e.state !== void 0 ? e.state : null;
    (e.updater = ef), (e.props = i), (e.state = v);
    let c = { queue: [], replace: !1 };
    e._reactInternals = c;
    let m = n.contextType;
    if (
      ((e.context = typeof m === "object" && m !== null ? m._currentValue2 : s),
      (m = n.getDerivedStateFromProps),
      typeof m === "function" &&
        ((m = m(i, v)), (v = m == null ? v : Mi({}, v, m)), (e.state = v)),
      typeof n.getDerivedStateFromProps !== "function" &&
        typeof e.getSnapshotBeforeUpdate !== "function" &&
        (typeof e.UNSAFE_componentWillMount === "function" ||
          typeof e.componentWillMount === "function"))
    ) {
      if (
        ((n = e.state),
        typeof e.componentWillMount === "function" && e.componentWillMount(),
        typeof e.UNSAFE_componentWillMount === "function" &&
          e.UNSAFE_componentWillMount(),
        n !== e.state && ef.enqueueReplaceState(e, e.state, null),
        c.queue !== null && c.queue.length > 0)
      ) {
        if (
          ((n = c.queue),
          (m = c.replace),
          (c.queue = null),
          (c.replace = !1),
          m && n.length === 1)
        ) {
          e.state = n[0];
        } else {
          for (
            c = m ? n[0] : e.state, v = !0, m = m ? 1 : 0;
            m < n.length;
            m++
          ) {
            let S = n[m];
            (S = typeof S === "function" ? S.call(e, c, i, s) : S),
              S != null && (v ? ((v = !1), (c = Mi({}, c, S))) : Mi(c, S));
          }
          e.state = c;
        }
      } else c.queue = null;
    }
  }
  const Ap = { id: 1, overflow: "" };
  function Ju(e, n, i) {
    let s = e.id;
    e = e.overflow;
    let v = 32 - zl(s) - 1;
    (s &= ~(1 << v)), (i += 1);
    let c = 32 - zl(n) + v;
    if (c > 30) {
      const m = v - (v % 5);
      return (
        (c = (s & ((1 << m) - 1)).toString(32)),
        (s >>= m),
        (v -= m),
        { id: (1 << (32 - zl(n) + v)) | (i << v) | s, overflow: c + e }
      );
    }
    return { id: (1 << c) | (i << v) | s, overflow: e };
  }
  var zl = Math.clz32 ? Math.clz32 : Mp;
  const Dp = Math.log;
  const Op = Math.LN2;
  function Mp(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Dp(e) / Op) | 0)) | 0;
  }
  function Lp(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  const Bp = typeof Object.is === "function" ? Object.is : Lp;
  let kr = null;
  let rc = null;
  let $l = null;
  let oe = null;
  let Di = !1;
  let Yl = !1;
  let Li = 0;
  let ln = null;
  let Ql = 0;
  function to() {
    if (kr === null) {
      throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    return kr;
  }
  function rf() {
    if (Ql > 0) {
      throw Error("Rendered more hooks than during the previous render");
    }
    return { memoizedState: null, queue: null, next: null };
  }
  function nc() {
    return (
      oe === null
        ? $l === null
          ? ((Di = !1), ($l = oe = rf()))
          : ((Di = !0), (oe = $l))
        : oe.next === null
        ? ((Di = !1), (oe = oe.next = rf()))
        : ((Di = !0), (oe = oe.next)),
      oe
    );
  }
  function oc() {
    (rc = kr = null), (Yl = !1), ($l = null), (Ql = 0), (oe = ln = null);
  }
  function Df(e, n) {
    return typeof n === "function" ? n(e) : n;
  }
  function nf(e, n, i) {
    if (((kr = to()), (oe = nc()), Di)) {
      let s = oe.queue;
      if (((n = s.dispatch), ln !== null && ((i = ln.get(s)), i !== void 0))) {
        ln.delete(s), (s = oe.memoizedState);
        do (s = e(s, i.action)), (i = i.next);
        while (i !== null);
        return (oe.memoizedState = s), [s, n];
      }
      return [oe.memoizedState, n];
    }
    return (
      (e =
        e === Df
          ? typeof n === "function"
            ? n()
            : n
          : i !== void 0
          ? i(n)
          : n),
      (oe.memoizedState = e),
      (e = oe.queue = { last: null, dispatch: null }),
      (e = e.dispatch = Up.bind(null, kr, e)),
      [oe.memoizedState, e]
    );
  }
  function of(e, n) {
    if (
      ((kr = to()), (oe = nc()), (n = n === void 0 ? null : n), oe !== null)
    ) {
      const i = oe.memoizedState;
      if (i !== null && n !== null) {
        let s = i[1];
        e: if (s === null) s = !1;
        else {
          for (let v = 0; v < s.length && v < n.length; v++) {
            if (!Bp(n[v], s[v])) {
              s = !1;
              break e;
            }
          }
          s = !0;
        }
        if (s) return i[0];
      }
    }
    return (e = e()), (oe.memoizedState = [e, n]), e;
  }
  function Up(e, n, i) {
    if (Ql >= 25) {
      throw Error(
        "Too many re-renders. React limits the number of renders to prevent an infinite loop."
      );
    }
    if (e === kr) {
      if (
        ((Yl = !0),
        (e = { action: i, next: null }),
        ln === null && (ln = new Map()),
        (i = ln.get(n)),
        i === void 0)
      ) {
        ln.set(n, e);
      } else {
        for (n = i; n.next !== null; ) n = n.next;
        n.next = e;
      }
    }
  }
  function jp() {
    throw Error("startTransition cannot be called during server rendering.");
  }
  function Ul() {}
  const af = {
    readContext: function (e) {
      return e._currentValue2;
    },
    useContext: function (e) {
      return to(), e._currentValue2;
    },
    useMemo: of,
    useReducer: nf,
    useRef: function (e) {
      (kr = to()), (oe = nc());
      const n = oe.memoizedState;
      return n === null ? ((e = { current: e }), (oe.memoizedState = e)) : n;
    },
    useState: function (e) {
      return nf(Df, e);
    },
    useInsertionEffect: Ul,
    useLayoutEffect: function () {},
    useCallback: function (e, n) {
      return of(function () {
        return e;
      }, n);
    },
    useImperativeHandle: Ul,
    useEffect: Ul,
    useDebugValue: Ul,
    useDeferredValue: function (e) {
      return to(), e;
    },
    useTransition: function () {
      return to(), [!1, jp];
    },
    useId: function () {
      let e = rc.treeContext;
      let n = e.overflow;
      (e = e.id), (e = (e & ~(1 << (32 - zl(e) - 1))).toString(32) + n);
      const i = Nl;
      if (i === null) {
        throw Error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component."
        );
      }
      return (
        (n = Li++),
        (e = ":" + i.idPrefix + "R" + e),
        n > 0 && (e += "H" + n.toString(32)),
        e + ":"
      );
    },
    useMutableSource: function (e, n) {
      return to(), n(e._source);
    },
    useSyncExternalStore: function (e, n, i) {
      if (i === void 0) {
        throw Error(
          "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
        );
      }
      return i();
    },
  };
  var Nl = null;
  const Gu =
    pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      .ReactCurrentDispatcher;
  function Hp(e) {
    return console.error(e), null;
  }
  function Oi() {}
  function Of(e, n, i, s, v, c, m, S, E) {
    const x = [];
    const R = new Set();
    return (
      (n = {
        destination: null,
        responseState: n,
        progressiveChunkSize: s === void 0 ? 12800 : s,
        status: 0,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: R,
        pingedTasks: x,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: v === void 0 ? Hp : v,
        onAllReady: c === void 0 ? Oi : c,
        onShellReady: m === void 0 ? Oi : m,
        onShellError: S === void 0 ? Oi : S,
        onFatalError: E === void 0 ? Oi : E,
      }),
      (i = Gl(n, 0, null, i, !1, !1)),
      (i.parentFlushed = !0),
      (e = ac(n, e, null, i, R, If, null, Ap)),
      x.push(e),
      n
    );
  }
  function ac(e, n, i, s, v, c, m, S) {
    e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
    var E = {
      node: n,
      ping: function () {
        const x = e.pingedTasks;
        x.push(E), x.length === 1 && ic(e);
      },
      blockedBoundary: i,
      blockedSegment: s,
      abortSet: v,
      legacyContext: c,
      context: m,
      treeContext: S,
    };
    return v.add(E), E;
  }
  function Gl(e, n, i, s, v, c) {
    return {
      status: 0,
      id: -1,
      index: n,
      parentFlushed: !1,
      chunks: [],
      children: [],
      formatContext: s,
      boundary: i,
      lastPushedText: v,
      textEmbedded: c,
    };
  }
  function Bi(e, n) {
    if (((e = e.onError(n)), e != null && typeof e !== "string")) {
      throw Error(
        'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
          typeof e +
          '" instead'
      );
    }
    return e;
  }
  function Xl(e, n) {
    let i = e.onShellError;
    i(n),
      (i = e.onFatalError),
      i(n),
      e.destination !== null
        ? ((e.status = 2), e.destination.destroy(n))
        : ((e.status = 1), (e.fatalError = n));
  }
  function lf(e, n, i, s, v) {
    for (kr = {}, rc = n, Li = 0, e = i(s, v); Yl; ) {
      (Yl = !1), (Li = 0), (Ql += 1), (oe = null), (e = i(s, v));
    }
    return oc(), e;
  }
  function sf(e, n, i, s) {
    const v = i.render();
    const c = s.childContextTypes;
    if (c != null) {
      const m = n.legacyContext;
      if (typeof i.getChildContext !== "function") s = m;
      else {
        i = i.getChildContext();
        for (const S in i) {
          if (!(S in c)) {
            throw Error(
              (Zu(s) || "Unknown") +
                '.getChildContext(): key "' +
                S +
                '" is not defined in childContextTypes.'
            );
          }
        }
        s = Mi({}, m, i);
      }
      (n.legacyContext = s), lt(e, n, v), (n.legacyContext = m);
    } else lt(e, n, v);
  }
  function uf(e, n) {
    if (e && e.defaultProps) {
      (n = Mi({}, n)), (e = e.defaultProps);
      for (const i in e) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    return n;
  }
  function Qu(e, n, i, s, v) {
    if (typeof i === "function") {
      if (i.prototype && i.prototype.isReactComponent) {
        v = qc(i, n.legacyContext);
        var c = i.contextType;
        (c = new i(
          s,
          typeof c === "object" && c !== null ? c._currentValue2 : v
        )),
          tf(c, i, s, v),
          sf(e, n, c, i);
      } else {
        (c = qc(i, n.legacyContext)), (v = lf(e, n, i, s, c));
        var m = Li !== 0;
        if (
          typeof v === "object" &&
          v !== null &&
          typeof v.render === "function" &&
          v.$$typeof === void 0
        ) {
          tf(v, i, s, c), sf(e, n, v, i);
        } else if (m) {
          (s = n.treeContext), (n.treeContext = Ju(s, 1, 0));
          try {
            lt(e, n, v);
          } finally {
            n.treeContext = s;
          }
        } else lt(e, n, v);
      }
    } else if (typeof i === "string") {
      switch (
        ((v = n.blockedSegment),
        (c = kp(v.chunks, i, s, e.responseState, v.formatContext)),
        (v.lastPushedText = !1),
        (m = v.formatContext),
        (v.formatContext = Sp(m, i, s)),
        Ku(e, n, c),
        (v.formatContext = m),
        i)
      ) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          v.chunks.push("</", i, ">");
      }
      v.lastPushedText = !1;
    } else {
      switch (i) {
        case Pp:
        case _p:
        case Sf:
        case wf:
        case bf:
          lt(e, n, s.children);
          return;
        case Ef:
          lt(e, n, s.children);
          return;
        case Ip:
          throw Error("ReactDOMServer does not yet support scope components.");
        case Cf:
          e: {
            (i = n.blockedBoundary),
              (v = n.blockedSegment),
              (c = s.fallback),
              (s = s.children),
              (m = new Set());
            const S = {
              id: null,
              rootSegmentID: -1,
              parentFlushed: !1,
              pendingTasks: 0,
              forceClientRender: !1,
              completedSegments: [],
              byteSize: 0,
              fallbackAbortableTasks: m,
              errorDigest: null,
            };
            const E = Gl(e, v.chunks.length, S, v.formatContext, !1, !1);
            v.children.push(E), (v.lastPushedText = !1);
            const x = Gl(e, 0, null, v.formatContext, !1, !1);
            (x.parentFlushed = !0),
              (n.blockedBoundary = S),
              (n.blockedSegment = x);
            try {
              if (
                (Ku(e, n, s),
                e.responseState.generateStaticMarkup ||
                  (x.lastPushedText &&
                    x.textEmbedded &&
                    x.chunks.push("<!-- -->")),
                (x.status = 1),
                Zl(S, x),
                S.pendingTasks === 0)
              ) {
                break e;
              }
            } catch (R) {
              (x.status = 4),
                (S.forceClientRender = !0),
                (S.errorDigest = Bi(e, R));
            } finally {
              (n.blockedBoundary = i), (n.blockedSegment = v);
            }
            (n = ac(e, c, i, E, m, n.legacyContext, n.context, n.treeContext)),
              e.pingedTasks.push(n);
          }
          return;
      }
      if (typeof i === "object" && i !== null) {
        switch (i.$$typeof) {
          case Tf:
            if (((s = lf(e, n, i.render, s, v)), Li !== 0)) {
              (i = n.treeContext), (n.treeContext = Ju(i, 1, 0));
              try {
                lt(e, n, s);
              } finally {
                n.treeContext = i;
              }
            } else lt(e, n, s);
            return;
          case Rf:
            (i = i.type), (s = uf(i, s)), Qu(e, n, i, s, v);
            return;
          case xf:
            if (
              ((v = s.children),
              (i = i._context),
              (s = s.value),
              (c = i._currentValue2),
              (i._currentValue2 = s),
              (m = ro),
              (ro = s =
                {
                  parent: m,
                  depth: m === null ? 0 : m.depth + 1,
                  context: i,
                  parentValue: c,
                  value: s,
                }),
              (n.context = s),
              lt(e, n, v),
              (e = ro),
              e === null)
            ) {
              throw Error(
                "Tried to pop a Context at the root of the app. This is a bug in React."
              );
            }
            (s = e.parentValue),
              (e.context._currentValue2 =
                s === Fp ? e.context._defaultValue : s),
              (e = ro = e.parent),
              (n.context = e);
            return;
          case kf:
            (s = s.children), (s = s(i._currentValue2)), lt(e, n, s);
            return;
          case tc:
            (v = i._init),
              (i = v(i._payload)),
              (s = uf(i, s)),
              Qu(e, n, i, s, void 0);
            return;
        }
      }
      throw Error(
        "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " +
          ((i == null ? i : typeof i) + ".")
      );
    }
  }
  function lt(e, n, i) {
    if (((n.node = i), typeof i === "object" && i !== null)) {
      switch (i.$$typeof) {
        case Rp:
          Qu(e, n, i.type, i.props, i.ref);
          return;
        case yf:
          throw Error(
            "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
          );
        case tc:
          var s = i._init;
          (i = s(i._payload)), lt(e, n, i);
          return;
      }
      if (Xu(i)) {
        cf(e, n, i);
        return;
      }
      if (
        (i === null || typeof i !== "object"
          ? (s = null)
          : ((s = (Kc && i[Kc]) || i["@@iterator"]),
            (s = typeof s === "function" ? s : null)),
        s && (s = s.call(i)))
      ) {
        if (((i = s.next()), !i.done)) {
          const v = [];
          do v.push(i.value), (i = s.next());
          while (!i.done);
          cf(e, n, v);
        }
        return;
      }
      throw (
        ((e = Object.prototype.toString.call(i)),
        Error(
          "Objects are not valid as a React child (found: " +
            (e === "[object Object]"
              ? "object with keys {" + Object.keys(i).join(", ") + "}"
              : e) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    typeof i === "string"
      ? ((s = n.blockedSegment),
        (s.lastPushedText = Qc(
          n.blockedSegment.chunks,
          i,
          e.responseState,
          s.lastPushedText
        )))
      : typeof i === "number" &&
        ((s = n.blockedSegment),
        (s.lastPushedText = Qc(
          n.blockedSegment.chunks,
          "" + i,
          e.responseState,
          s.lastPushedText
        )));
  }
  function cf(e, n, i) {
    for (let s = i.length, v = 0; v < s; v++) {
      const c = n.treeContext;
      n.treeContext = Ju(c, s, v);
      try {
        Ku(e, n, i[v]);
      } finally {
        n.treeContext = c;
      }
    }
  }
  function Ku(e, n, i) {
    const s = n.blockedSegment.formatContext;
    const v = n.legacyContext;
    const c = n.context;
    try {
      return lt(e, n, i);
    } catch (E) {
      if (
        (oc(),
        typeof E === "object" && E !== null && typeof E.then === "function")
      ) {
        i = E;
        const m = n.blockedSegment;
        const S = Gl(
          e,
          m.chunks.length,
          null,
          m.formatContext,
          m.lastPushedText,
          !0
        );
        m.children.push(S),
          (m.lastPushedText = !1),
          (e = ac(
            e,
            n.node,
            n.blockedBoundary,
            S,
            n.abortSet,
            n.legacyContext,
            n.context,
            n.treeContext
          ).ping),
          i.then(e, e),
          (n.blockedSegment.formatContext = s),
          (n.legacyContext = v),
          (n.context = c),
          Vl(c);
      } else {
        throw (
          ((n.blockedSegment.formatContext = s),
          (n.legacyContext = v),
          (n.context = c),
          Vl(c),
          E)
        );
      }
    }
  }
  function Wp(e) {
    const n = e.blockedBoundary;
    (e = e.blockedSegment), (e.status = 3), Lf(this, n, e);
  }
  function Mf(e, n, i) {
    const s = e.blockedBoundary;
    (e.blockedSegment.status = 3),
      s === null
        ? (n.allPendingTasks--,
          n.status !== 2 &&
            ((n.status = 2),
            n.destination !== null && n.destination.push(null)))
        : (s.pendingTasks--,
          s.forceClientRender ||
            ((s.forceClientRender = !0),
            (s.errorDigest = n.onError(
              i === void 0
                ? Error(
                    "The render was aborted by the server without a reason."
                  )
                : i
            )),
            s.parentFlushed && n.clientRenderedBoundaries.push(s)),
          s.fallbackAbortableTasks.forEach(function (v) {
            return Mf(v, n, i);
          }),
          s.fallbackAbortableTasks.clear(),
          n.allPendingTasks--,
          n.allPendingTasks === 0 && ((e = n.onAllReady), e()));
  }
  function Zl(e, n) {
    if (
      n.chunks.length === 0 &&
      n.children.length === 1 &&
      n.children[0].boundary === null
    ) {
      const i = n.children[0];
      (i.id = n.id), (i.parentFlushed = !0), i.status === 1 && Zl(e, i);
    } else e.completedSegments.push(n);
  }
  function Lf(e, n, i) {
    if (n === null) {
      if (i.parentFlushed) {
        if (e.completedRootSegment !== null) {
          throw Error(
            "There can only be one root segment. This is a bug in React."
          );
        }
        e.completedRootSegment = i;
      }
      e.pendingRootTasks--,
        e.pendingRootTasks === 0 &&
          ((e.onShellError = Oi), (n = e.onShellReady), n());
    } else {
      n.pendingTasks--,
        n.forceClientRender ||
          (n.pendingTasks === 0
            ? (i.parentFlushed && i.status === 1 && Zl(n, i),
              n.parentFlushed && e.completedBoundaries.push(n),
              n.fallbackAbortableTasks.forEach(Wp, e),
              n.fallbackAbortableTasks.clear())
            : i.parentFlushed &&
              i.status === 1 &&
              (Zl(n, i),
              n.completedSegments.length === 1 &&
                n.parentFlushed &&
                e.partialBoundaries.push(n)));
    }
    e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e());
  }
  function ic(e) {
    if (e.status !== 2) {
      const n = ro;
      const i = Gu.current;
      Gu.current = af;
      const s = Nl;
      Nl = e.responseState;
      try {
        const v = e.pingedTasks;
        let c;
        for (c = 0; c < v.length; c++) {
          const m = v[c];
          const S = e;
          const E = m.blockedSegment;
          if (E.status === 0) {
            Vl(m.context);
            try {
              lt(S, m, m.node),
                S.responseState.generateStaticMarkup ||
                  (E.lastPushedText &&
                    E.textEmbedded &&
                    E.chunks.push("<!-- -->")),
                m.abortSet.delete(m),
                (E.status = 1),
                Lf(S, m.blockedBoundary, E);
            } catch (J) {
              if (
                (oc(),
                typeof J === "object" &&
                  J !== null &&
                  typeof J.then === "function")
              ) {
                const x = m.ping;
                J.then(x, x);
              } else {
                m.abortSet.delete(m), (E.status = 4);
                const R = m.blockedBoundary;
                const D = J;
                const V = Bi(S, D);
                if (
                  (R === null
                    ? Xl(S, D)
                    : (R.pendingTasks--,
                      R.forceClientRender ||
                        ((R.forceClientRender = !0),
                        (R.errorDigest = V),
                        R.parentFlushed && S.clientRenderedBoundaries.push(R))),
                  S.allPendingTasks--,
                  S.allPendingTasks === 0)
                ) {
                  const te = S.onAllReady;
                  te();
                }
              }
            } finally {
            }
          }
        }
        v.splice(0, c), e.destination !== null && lc(e, e.destination);
      } catch (J) {
        Bi(e, J), Xl(e, J);
      } finally {
        (Nl = s), (Gu.current = i), i === af && Vl(n);
      }
    }
  }
  function jl(e, n, i) {
    switch (((i.parentFlushed = !0), i.status)) {
      case 0:
        var s = (i.id = e.nextSegmentId++);
        return (
          (i.lastPushedText = !1),
          (i.textEmbedded = !1),
          (e = e.responseState),
          n.push('<template id="'),
          n.push(e.placeholderPrefix),
          (e = s.toString(16)),
          n.push(e),
          n.push('"></template>')
        );
      case 1:
        i.status = 2;
        var v = !0;
        s = i.chunks;
        var c = 0;
        i = i.children;
        for (let m = 0; m < i.length; m++) {
          for (v = i[m]; c < v.index; c++) n.push(s[c]);
          v = Kl(e, n, v);
        }
        for (; c < s.length - 1; c++) n.push(s[c]);
        return c < s.length && (v = n.push(s[c])), v;
      default:
        throw Error(
          "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
        );
    }
  }
  function Kl(e, n, i) {
    let s = i.boundary;
    if (s === null) return jl(e, n, i);
    if (((s.parentFlushed = !0), s.forceClientRender)) {
      return (
        e.responseState.generateStaticMarkup ||
          ((s = s.errorDigest),
          n.push("<!--$!-->"),
          n.push("<template"),
          s && (n.push(' data-dgst="'), (s = Ye(s)), n.push(s), n.push('"')),
          n.push("></template>")),
        jl(e, n, i),
        (e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->")),
        e
      );
    }
    if (s.pendingTasks > 0) {
      (s.rootSegmentID = e.nextSegmentId++),
        s.completedSegments.length > 0 && e.partialBoundaries.push(s);
      let v = e.responseState;
      const c = v.nextSuspenseID++;
      return (
        (v = v.boundaryPrefix + c.toString(16)),
        (s = s.id = v),
        Jc(n, e.responseState, s),
        jl(e, n, i),
        n.push("<!--/$-->")
      );
    }
    if (s.byteSize > e.progressiveChunkSize) {
      return (
        (s.rootSegmentID = e.nextSegmentId++),
        e.completedBoundaries.push(s),
        Jc(n, e.responseState, s.id),
        jl(e, n, i),
        n.push("<!--/$-->")
      );
    }
    if (
      (e.responseState.generateStaticMarkup || n.push("<!--$-->"),
      (i = s.completedSegments),
      i.length !== 1)
    ) {
      throw Error(
        "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
      );
    }
    return (
      Kl(e, n, i[0]),
      (e = e.responseState.generateStaticMarkup ? !0 : n.push("<!--/$-->")),
      e
    );
  }
  function ff(e, n, i) {
    return (
      Tp(n, e.responseState, i.formatContext, i.id),
      Kl(e, n, i),
      Cp(n, i.formatContext)
    );
  }
  function df(e, n, i) {
    for (var s = i.completedSegments, v = 0; v < s.length; v++) {
      Bf(e, n, i, s[v]);
    }
    if (
      ((s.length = 0),
      (e = e.responseState),
      (s = i.id),
      (i = i.rootSegmentID),
      n.push(e.startInlineScript),
      e.sentCompleteBoundaryFunction
        ? n.push('$RC("')
        : ((e.sentCompleteBoundaryFunction = !0),
          n.push(
            'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'
          )),
      s === null)
    ) {
      throw Error(
        "An ID must have been assigned before we can complete the boundary."
      );
    }
    return (
      (i = i.toString(16)),
      n.push(s),
      n.push('","'),
      n.push(e.segmentPrefix),
      n.push(i),
      n.push('")</script>')
    );
  }
  function Bf(e, n, i, s) {
    if (s.status === 2) return !0;
    let v = s.id;
    if (v === -1) {
      if ((s.id = i.rootSegmentID) === -1) {
        throw Error(
          "A root segment ID must have been assigned by now. This is a bug in React."
        );
      }
      return ff(e, n, s);
    }
    return (
      ff(e, n, s),
      (e = e.responseState),
      n.push(e.startInlineScript),
      e.sentCompleteSegmentFunction
        ? n.push('$RS("')
        : ((e.sentCompleteSegmentFunction = !0),
          n.push(
            'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
          )),
      n.push(e.segmentPrefix),
      (v = v.toString(16)),
      n.push(v),
      n.push('","'),
      n.push(e.placeholderPrefix),
      n.push(v),
      n.push('")</script>')
    );
  }
  function lc(e, n) {
    try {
      let i = e.completedRootSegment;
      if (i !== null && e.pendingRootTasks === 0) {
        Kl(e, n, i), (e.completedRootSegment = null);
        var s = e.responseState.bootstrapChunks;
        for (i = 0; i < s.length - 1; i++) n.push(s[i]);
        i < s.length && n.push(s[i]);
      }
      let v = e.clientRenderedBoundaries;
      let c;
      for (c = 0; c < v.length; c++) {
        var m = v[c];
        s = n;
        var S = e.responseState;
        const E = m.id;
        const x = m.errorDigest;
        const R = m.errorMessage;
        const D = m.errorComponentStack;
        if (
          (s.push(S.startInlineScript),
          S.sentClientRenderFunction
            ? s.push('$RX("')
            : ((S.sentClientRenderFunction = !0),
              s.push(
                'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'
              )),
          E === null)
        ) {
          throw Error(
            "An ID must have been assigned before we can complete the boundary."
          );
        }
        if ((s.push(E), s.push('"'), x || R || D)) {
          s.push(",");
          const V = Yu(x || "");
          s.push(V);
        }
        if (R || D) {
          s.push(",");
          const te = Yu(R || "");
          s.push(te);
        }
        if (D) {
          s.push(",");
          const J = Yu(D);
          s.push(J);
        }
        if (!s.push(")</script>")) {
          (e.destination = null), c++, v.splice(0, c);
          return;
        }
      }
      v.splice(0, c);
      const Oe = e.completedBoundaries;
      for (c = 0; c < Oe.length; c++) {
        if (!df(e, n, Oe[c])) {
          (e.destination = null), c++, Oe.splice(0, c);
          return;
        }
      }
      Oe.splice(0, c);
      const P = e.partialBoundaries;
      for (c = 0; c < P.length; c++) {
        const ue = P[c];
        e: {
          (v = e), (m = n);
          const W = ue.completedSegments;
          for (S = 0; S < W.length; S++) {
            if (!Bf(v, m, ue, W[S])) {
              S++, W.splice(0, S);
              var q = !1;
              break e;
            }
          }
          W.splice(0, S), (q = !0);
        }
        if (!q) {
          (e.destination = null), c++, P.splice(0, c);
          return;
        }
      }
      P.splice(0, c);
      const xe = e.completedBoundaries;
      for (c = 0; c < xe.length; c++) {
        if (!df(e, n, xe[c])) {
          (e.destination = null), c++, xe.splice(0, c);
          return;
        }
      }
      xe.splice(0, c);
    } finally {
      e.allPendingTasks === 0 &&
        e.pingedTasks.length === 0 &&
        e.clientRenderedBoundaries.length === 0 &&
        e.completedBoundaries.length === 0 &&
        n.push(null);
    }
  }
  function sc(e, n) {
    if (e.status === 1) (e.status = 2), n.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = n;
      try {
        lc(e, n);
      } catch (i) {
        Bi(e, i), Xl(e, i);
      }
    }
  }
  function Uf(e, n) {
    try {
      const i = e.abortableTasks;
      i.forEach(function (s) {
        return Mf(s, e, n);
      }),
        i.clear(),
        e.destination !== null && lc(e, e.destination);
    } catch (s) {
      Bi(e, s), Xl(e, s);
    }
  }
  function zp() {}
  function jf(e, n, i, s) {
    let v = !1;
    let c = null;
    let m = "";
    let S = !1;
    if (
      ((e = Of(
        e,
        gf(i, n ? n.identifierPrefix : void 0),
        mf(),
        1 / 0,
        zp,
        void 0,
        function () {
          S = !0;
        },
        void 0,
        void 0
      )),
      ic(e),
      Uf(e, s),
      sc(e, {
        push: function (E) {
          return E !== null && (m += E), !0;
        },
        destroy: function (E) {
          (v = !0), (c = E);
        },
      }),
      v)
    ) {
      throw c;
    }
    if (!S) {
      throw Error(
        "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition."
      );
    }
    return m;
  }
  function $p(e, n) {
    (e.prototype = Object.create(n.prototype)),
      (e.prototype.constructor = e),
      (e.__proto__ = n);
  }
  const Np = (function (e) {
    function n() {
      const s = e.call(this, {}) || this;
      return (s.request = null), (s.startedFlowing = !1), s;
    }
    $p(n, e);
    const i = n.prototype;
    return (
      (i._destroy = function (s, v) {
        Uf(this.request), v(s);
      }),
      (i._read = function () {
        this.startedFlowing && sc(this.request, this);
      }),
      n
    );
  })(hp.Readable);
  function Vp() {}
  function Hf(e, n) {
    const i = new Np();
    var s = Of(
      e,
      gf(!1, n ? n.identifierPrefix : void 0),
      mf(),
      1 / 0,
      Vp,
      function () {
        (i.startedFlowing = !0), sc(s, i);
      },
      void 0,
      void 0
    );
    return (i.request = s), ic(s), i;
  }
  ca.renderToNodeStream = function (e, n) {
    return Hf(e, n);
  };
  ca.renderToStaticMarkup = function (e, n) {
    return jf(
      e,
      n,
      !0,
      'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server'
    );
  };
  ca.renderToStaticNodeStream = function (e, n) {
    return Hf(e, n);
  };
  ca.renderToString = function (e, n) {
    return jf(
      e,
      n,
      !1,
      'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server'
    );
  };
  ca.version = "18.2.0";
});
const jd = an((_c) => {
  "use strict";
  const Yp = require("util");
  const hd = ua();
  let pe = null;
  let le = 0;
  let da = !0;
  function L(e, n) {
    if (typeof n === "string") {
      if (n.length !== 0) {
        if (3 * n.length > 2048) {
          le > 0 &&
            (Tr(e, pe.subarray(0, le)), (pe = new Uint8Array(2048)), (le = 0)),
            Tr(e, ts.encode(n));
        } else {
          var i = pe;
          le > 0 && (i = pe.subarray(le)), (i = ts.encodeInto(n, i));
          const s = i.read;
          (le += i.written),
            s < n.length &&
              (Tr(e, pe),
              (pe = new Uint8Array(2048)),
              (le = ts.encodeInto(n.slice(s), pe).written)),
            le === 2048 && (Tr(e, pe), (pe = new Uint8Array(2048)), (le = 0));
        }
      }
    } else {
      n.byteLength !== 0 &&
        (n.byteLength > 2048
          ? (le > 0 &&
              (Tr(e, pe.subarray(0, le)),
              (pe = new Uint8Array(2048)),
              (le = 0)),
            Tr(e, n))
          : ((i = pe.length - le),
            i < n.byteLength &&
              (i === 0
                ? Tr(e, pe)
                : (pe.set(n.subarray(0, i), le),
                  (le += i),
                  Tr(e, pe),
                  (n = n.subarray(i))),
              (pe = new Uint8Array(2048)),
              (le = 0)),
            pe.set(n, le),
            (le += n.byteLength),
            le === 2048 && (Tr(e, pe), (pe = new Uint8Array(2048)), (le = 0))));
    }
  }
  function Tr(e, n) {
    (e = e.write(n)), (da = da && e);
  }
  function se(e, n) {
    return L(e, n), da;
  }
  function zf(e) {
    pe && le > 0 && e.write(pe.subarray(0, le)),
      (pe = null),
      (le = 0),
      (da = !0);
  }
  var ts = new Yp.TextEncoder();
  function A(e) {
    return ts.encode(e);
  }
  const et = Object.prototype.hasOwnProperty;
  const Gp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
  const $f = {};
  const Nf = {};
  function vd(e) {
    return et.call(Nf, e)
      ? !0
      : et.call($f, e)
      ? !1
      : Gp.test(e)
      ? (Nf[e] = !0)
      : (($f[e] = !0), !1);
  }
  function Xe(e, n, i, s, v, c, m) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = s),
      (this.attributeNamespace = v),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = c),
      (this.removeEmptyString = m);
  }
  const De = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      De[e] = new Xe(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    const n = e[0];
    De[n] = new Xe(n, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    De[e] = new Xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    De[e] = new Xe(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      De[e] = new Xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    De[e] = new Xe(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    De[e] = new Xe(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    De[e] = new Xe(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    De[e] = new Xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  const Sc = /[\-:]([a-z])/g;
  function wc(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      const n = e.replace(Sc, wc);
      De[n] = new Xe(n, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      const n = e.replace(Sc, wc);
      De[n] = new Xe(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    const n = e.replace(Sc, wc);
    De[n] = new Xe(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    De[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  De.xlinkHref = new Xe(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    De[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  const rs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  };
  const Xp = ["Webkit", "ms", "Moz", "O"];
  Object.keys(rs).forEach(function (e) {
    Xp.forEach(function (n) {
      (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (rs[n] = rs[e]);
    });
  });
  const Zp = /["'&<>]/;
  function Ae(e) {
    if (typeof e === "boolean" || typeof e === "number") return "" + e;
    e = "" + e;
    let n = Zp.exec(e);
    if (n) {
      let i = "";
      let s;
      let v = 0;
      for (s = n.index; s < e.length; s++) {
        switch (e.charCodeAt(s)) {
          case 34:
            n = "&quot;";
            break;
          case 38:
            n = "&amp;";
            break;
          case 39:
            n = "&#x27;";
            break;
          case 60:
            n = "&lt;";
            break;
          case 62:
            n = "&gt;";
            break;
          default:
            continue;
        }
        v !== s && (i += e.substring(v, s)), (v = s + 1), (i += n);
      }
      e = v !== s ? i + e.substring(v, s) : i;
    }
    return e;
  }
  const Jp = /([A-Z])/g;
  const Qp = /^ms-/;
  const vc = Array.isArray;
  const Kp = A("<script>");
  const qp = A("</script>");
  const eh = A('<script src="');
  const th = A('<script type="module" src="');
  const Vf = A('" async=""></script>');
  const rh = /(<\/|<)(s)(cript)/gi;
  function nh(e, n, i, s) {
    return "" + n + (i === "s" ? "\\u0073" : "\\u0053") + s;
  }
  function Qt(e, n) {
    return { insertionMode: e, selectedValue: n };
  }
  function oh(e, n, i) {
    switch (n) {
      case "select":
        return Qt(1, i.value != null ? i.value : i.defaultValue);
      case "svg":
        return Qt(2, null);
      case "math":
        return Qt(3, null);
      case "foreignObject":
        return Qt(1, null);
      case "table":
        return Qt(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Qt(5, null);
      case "colgroup":
        return Qt(7, null);
      case "tr":
        return Qt(6, null);
    }
    return e.insertionMode >= 4 || e.insertionMode === 0 ? Qt(1, null) : e;
  }
  const xc = A("<!-- -->");
  function Yf(e, n, i, s) {
    return n === "" ? s : (s && e.push(xc), e.push(Ae(n)), !0);
  }
  const Gf = new Map();
  const ah = A(' style="');
  const Xf = A(":");
  const ih = A(";");
  function gd(e, n, i) {
    if (typeof i !== "object") {
      throw Error(
        "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
      );
    }
    n = !0;
    for (const s in i) {
      if (et.call(i, s)) {
        let v = i[s];
        if (v != null && typeof v !== "boolean" && v !== "") {
          if (s.indexOf("--") === 0) {
            var c = Ae(s);
            v = Ae(("" + v).trim());
          } else {
            c = s;
            let m = Gf.get(c);
            m !== void 0 ||
              ((m = A(
                Ae(c.replace(Jp, "-$1").toLowerCase().replace(Qp, "-ms-"))
              )),
              Gf.set(c, m)),
              (c = m),
              (v =
                typeof v === "number"
                  ? v === 0 || et.call(rs, s)
                    ? "" + v
                    : v + "px"
                  : Ae(("" + v).trim()));
          }
          n ? ((n = !1), e.push(ah, c, Xf, v)) : e.push(ih, c, Xf, v);
        }
      }
    }
    n || e.push(no);
  }
  const sn = A(" ");
  const fa = A('="');
  var no = A('"');
  const Zf = A('=""');
  function st(e, n, i, s) {
    switch (i) {
      case "style":
        gd(e, n, s);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (
      !(i.length > 2) ||
      (i[0] !== "o" && i[0] !== "O") ||
      (i[1] !== "n" && i[1] !== "N")
    ) {
      if (((n = De.hasOwnProperty(i) ? De[i] : null), n !== null)) {
        switch (typeof s) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!n.acceptsBooleans) return;
        }
        switch (((i = n.attributeName), n.type)) {
          case 3:
            s && e.push(sn, i, Zf);
            break;
          case 4:
            s === !0
              ? e.push(sn, i, Zf)
              : s !== !1 && e.push(sn, i, fa, Ae(s), no);
            break;
          case 5:
            isNaN(s) || e.push(sn, i, fa, Ae(s), no);
            break;
          case 6:
            !isNaN(s) && s >= 1 && e.push(sn, i, fa, Ae(s), no);
            break;
          default:
            n.sanitizeURL && (s = "" + s), e.push(sn, i, fa, Ae(s), no);
        }
      } else if (vd(i)) {
        switch (typeof s) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (
              ((n = i.toLowerCase().slice(0, 5)),
              n !== "data-" && n !== "aria-")
            ) {
              return;
            }
        }
        e.push(sn, i, fa, Ae(s), no);
      }
    }
  }
  const un = A(">");
  const Jf = A("/>");
  function ns(e, n, i) {
    if (n != null) {
      if (i != null) {
        throw Error(
          "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
        );
      }
      if (typeof n !== "object" || !("__html" in n)) {
        throw Error(
          "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
        );
      }
      (n = n.__html), n != null && e.push("" + n);
    }
  }
  function lh(e) {
    let n = "";
    return (
      hd.Children.forEach(e, function (i) {
        i != null && (n += i);
      }),
      n
    );
  }
  const uc = A(' selected=""');
  function cc(e, n, i, s) {
    e.push(Kt(i));
    let v = (i = null);
    let c;
    for (c in n) {
      if (et.call(n, c)) {
        const m = n[c];
        if (m != null) {
          switch (c) {
            case "children":
              i = m;
              break;
            case "dangerouslySetInnerHTML":
              v = m;
              break;
            default:
              st(e, s, c, m);
          }
        }
      }
    }
    return (
      e.push(un), ns(e, v, i), typeof i === "string" ? (e.push(Ae(i)), null) : i
    );
  }
  const fc = A(`
`);
  const sh = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
  const Qf = new Map();
  function Kt(e) {
    let n = Qf.get(e);
    if (n === void 0) {
      if (!sh.test(e)) throw Error("Invalid tag: " + e);
      (n = A("<" + e)), Qf.set(e, n);
    }
    return n;
  }
  const uh = A("<!DOCTYPE html>");
  function ch(e, n, i, s, v) {
    switch (n) {
      case "select":
        e.push(Kt("select"));
        var c = null;
        var m = null;
        for (R in i) {
          if (et.call(i, R)) {
            var S = i[R];
            if (S != null) {
              switch (R) {
                case "children":
                  c = S;
                  break;
                case "dangerouslySetInnerHTML":
                  m = S;
                  break;
                case "defaultValue":
                case "value":
                  break;
                default:
                  st(e, s, R, S);
              }
            }
          }
        }
        return e.push(un), ns(e, m, c), c;
      case "option":
        (m = v.selectedValue), e.push(Kt("option"));
        var E = (S = null);
        var x = null;
        var R = null;
        for (c in i) {
          if (et.call(i, c)) {
            var D = i[c];
            if (D != null) {
              switch (c) {
                case "children":
                  S = D;
                  break;
                case "selected":
                  x = D;
                  break;
                case "dangerouslySetInnerHTML":
                  R = D;
                  break;
                case "value":
                  E = D;
                default:
                  st(e, s, c, D);
              }
            }
          }
        }
        if (m != null) {
          if (((i = E !== null ? "" + E : lh(S)), vc(m))) {
            for (s = 0; s < m.length; s++) {
              if ("" + m[s] === i) {
                e.push(uc);
                break;
              }
            }
          } else "" + m === i && e.push(uc);
        } else x && e.push(uc);
        return e.push(un), ns(e, R, S), S;
      case "textarea":
        e.push(Kt("textarea")), (R = m = c = null);
        for (S in i) {
          if (et.call(i, S) && ((E = i[S]), E != null)) {
            switch (S) {
              case "children":
                R = E;
                break;
              case "value":
                c = E;
                break;
              case "defaultValue":
                m = E;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(
                  "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                );
              default:
                st(e, s, S, E);
            }
          }
        }
        if ((c === null && m !== null && (c = m), e.push(un), R != null)) {
          if (c != null) {
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          }
          if (vc(R) && R.length > 1) {
            throw Error("<textarea> can only have at most one child.");
          }
          c = "" + R;
        }
        return (
          typeof c === "string" &&
            c[0] ===
              `
` &&
            e.push(fc),
          c !== null && e.push(Ae("" + c)),
          null
        );
      case "input":
        e.push(Kt("input")), (E = R = S = c = null);
        for (m in i) {
          if (et.call(i, m) && ((x = i[m]), x != null)) {
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              case "defaultChecked":
                E = x;
                break;
              case "defaultValue":
                S = x;
                break;
              case "checked":
                R = x;
                break;
              case "value":
                c = x;
                break;
              default:
                st(e, s, m, x);
            }
          }
        }
        return (
          R !== null
            ? st(e, s, "checked", R)
            : E !== null && st(e, s, "checked", E),
          c !== null
            ? st(e, s, "value", c)
            : S !== null && st(e, s, "value", S),
          e.push(Jf),
          null
        );
      case "menuitem":
        e.push(Kt("menuitem"));
        for (const V in i) {
          if (et.call(i, V) && ((c = i[V]), c != null)) {
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                );
              default:
                st(e, s, V, c);
            }
          }
        }
        return e.push(un), null;
      case "title":
        e.push(Kt("title")), (c = null);
        for (D in i) {
          if (et.call(i, D) && ((m = i[D]), m != null)) {
            switch (D) {
              case "children":
                c = m;
                break;
              case "dangerouslySetInnerHTML":
                throw Error(
                  "`dangerouslySetInnerHTML` does not make sense on <title>."
                );
              default:
                st(e, s, D, m);
            }
          }
        }
        return e.push(un), c;
      case "listing":
      case "pre":
        e.push(Kt(n)), (m = c = null);
        for (E in i) {
          if (et.call(i, E) && ((S = i[E]), S != null)) {
            switch (E) {
              case "children":
                c = S;
                break;
              case "dangerouslySetInnerHTML":
                m = S;
                break;
              default:
                st(e, s, E, S);
            }
          }
        }
        if ((e.push(un), m != null)) {
          if (c != null) {
            throw Error(
              "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
            );
          }
          if (typeof m !== "object" || !("__html" in m)) {
            throw Error(
              "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
            );
          }
          (i = m.__html),
            i != null &&
              (typeof i === "string" &&
              i.length > 0 &&
              i[0] ===
                `
`
                ? e.push(fc, i)
                : e.push("" + i));
        }
        return (
          typeof c === "string" &&
            c[0] ===
              `
` &&
            e.push(fc),
          c
        );
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        e.push(Kt(n));
        for (const te in i) {
          if (et.call(i, te) && ((c = i[te]), c != null)) {
            switch (te) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(
                  n +
                    " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                st(e, s, te, c);
            }
          }
        }
        return e.push(Jf), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return cc(e, i, n, s);
      case "html":
        return v.insertionMode === 0 && e.push(uh), cc(e, i, n, s);
      default:
        if (n.indexOf("-") === -1 && typeof i.is !== "string") {
          return cc(e, i, n, s);
        }
        e.push(Kt(n)), (m = c = null);
        for (x in i) {
          if (et.call(i, x) && ((S = i[x]), S != null)) {
            switch (x) {
              case "children":
                c = S;
                break;
              case "dangerouslySetInnerHTML":
                m = S;
                break;
              case "style":
                gd(e, s, S);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                vd(x) &&
                  typeof S !== "function" &&
                  typeof S !== "symbol" &&
                  e.push(sn, x, fa, Ae(S), no);
            }
          }
        }
        return e.push(un), ns(e, m, c), c;
    }
  }
  const fh = A("</");
  const dh = A(">");
  const ph = A('<template id="');
  const hh = A('"></template>');
  const vh = A("<!--$-->");
  const gh = A('<!--$?--><template id="');
  const mh = A('"></template>');
  const yh = A("<!--$!-->");
  const bh = A("<!--/$-->");
  const Sh = A("<template");
  const wh = A('"');
  const xh = A(' data-dgst="');
  A(' data-msg="');
  A(' data-stck="');
  const kh = A("></template>");
  function Kf(e, n, i) {
    if ((L(e, gh), i === null)) {
      throw Error(
        "An ID must have been assigned before we can complete the boundary."
      );
    }
    return L(e, i), se(e, mh);
  }
  const Th = A('<div hidden id="');
  const Ch = A('">');
  const Eh = A("</div>");
  const Rh = A('<svg aria-hidden="true" style="display:none" id="');
  const Ih = A('">');
  const _h = A("</svg>");
  const Ph = A('<math aria-hidden="true" style="display:none" id="');
  const Fh = A('">');
  const Ah = A("</math>");
  const Dh = A('<table hidden id="');
  const Oh = A('">');
  const Mh = A("</table>");
  const Lh = A('<table hidden><tbody id="');
  const Bh = A('">');
  const Uh = A("</tbody></table>");
  const jh = A('<table hidden><tr id="');
  const Hh = A('">');
  const Wh = A("</tr></table>");
  const zh = A('<table hidden><colgroup id="');
  const $h = A('">');
  const Nh = A("</colgroup></table>");
  function Vh(e, n, i, s) {
    switch (i.insertionMode) {
      case 0:
      case 1:
        return L(e, Th), L(e, n.segmentPrefix), L(e, s.toString(16)), se(e, Ch);
      case 2:
        return L(e, Rh), L(e, n.segmentPrefix), L(e, s.toString(16)), se(e, Ih);
      case 3:
        return L(e, Ph), L(e, n.segmentPrefix), L(e, s.toString(16)), se(e, Fh);
      case 4:
        return L(e, Dh), L(e, n.segmentPrefix), L(e, s.toString(16)), se(e, Oh);
      case 5:
        return L(e, Lh), L(e, n.segmentPrefix), L(e, s.toString(16)), se(e, Bh);
      case 6:
        return L(e, jh), L(e, n.segmentPrefix), L(e, s.toString(16)), se(e, Hh);
      case 7:
        return L(e, zh), L(e, n.segmentPrefix), L(e, s.toString(16)), se(e, $h);
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  function Yh(e, n) {
    switch (n.insertionMode) {
      case 0:
      case 1:
        return se(e, Eh);
      case 2:
        return se(e, _h);
      case 3:
        return se(e, Ah);
      case 4:
        return se(e, Mh);
      case 5:
        return se(e, Uh);
      case 6:
        return se(e, Wh);
      case 7:
        return se(e, Nh);
      default:
        throw Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  const Gh = A(
    'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
  );
  const Xh = A('$RS("');
  const Zh = A('","');
  const Jh = A('")</script>');
  const Qh = A(
    'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'
  );
  const Kh = A('$RC("');
  const qh = A('","');
  const ev = A('")</script>');
  const tv = A(
    'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'
  );
  const rv = A('$RX("');
  const nv = A('"');
  const ov = A(")</script>");
  const dc = A(",");
  const av = /[<\u2028\u2029]/g;
  function pc(e) {
    return JSON.stringify(e).replace(av, function (n) {
      switch (n) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw Error(
            "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
          );
      }
    });
  }
  const Hi = Object.assign;
  const iv = Symbol.for("react.element");
  const md = Symbol.for("react.portal");
  const yd = Symbol.for("react.fragment");
  const bd = Symbol.for("react.strict_mode");
  const Sd = Symbol.for("react.profiler");
  const wd = Symbol.for("react.provider");
  const xd = Symbol.for("react.context");
  const kd = Symbol.for("react.forward_ref");
  const Td = Symbol.for("react.suspense");
  const Cd = Symbol.for("react.suspense_list");
  const Ed = Symbol.for("react.memo");
  const kc = Symbol.for("react.lazy");
  const lv = Symbol.for("react.scope");
  const sv = Symbol.for("react.debug_trace_mode");
  const uv = Symbol.for("react.legacy_hidden");
  const cv = Symbol.for("react.default_value");
  const qf = Symbol.iterator;
  function gc(e) {
    if (e == null) return null;
    if (typeof e === "function") return e.displayName || e.name || null;
    if (typeof e === "string") return e;
    switch (e) {
      case yd:
        return "Fragment";
      case md:
        return "Portal";
      case Sd:
        return "Profiler";
      case bd:
        return "StrictMode";
      case Td:
        return "Suspense";
      case Cd:
        return "SuspenseList";
    }
    if (typeof e === "object") {
      switch (e.$$typeof) {
        case xd:
          return (e.displayName || "Context") + ".Consumer";
        case wd:
          return (e._context.displayName || "Context") + ".Provider";
        case kd:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Ed:
          return (
            (n = e.displayName || null), n !== null ? n : gc(e.type) || "Memo"
          );
        case kc:
          (n = e._payload), (e = e._init);
          try {
            return gc(e(n));
          } catch {}
      }
    }
    return null;
  }
  const Rd = {};
  function ed(e, n) {
    if (((e = e.contextTypes), !e)) return Rd;
    const i = {};
    let s;
    for (s in e) i[s] = n[s];
    return i;
  }
  let ao = null;
  function ds(e, n) {
    if (e !== n) {
      (e.context._currentValue = e.parentValue), (e = e.parent);
      const i = n.parent;
      if (e === null) {
        if (i !== null) {
          throw Error(
            "The stacks must reach the root at the same time. This is a bug in React."
          );
        }
      } else {
        if (i === null) {
          throw Error(
            "The stacks must reach the root at the same time. This is a bug in React."
          );
        }
        ds(e, i);
      }
      n.context._currentValue = n.value;
    }
  }
  function Id(e) {
    (e.context._currentValue = e.parentValue),
      (e = e.parent),
      e !== null && Id(e);
  }
  function _d(e) {
    const n = e.parent;
    n !== null && _d(n), (e.context._currentValue = e.value);
  }
  function Pd(e, n) {
    if (
      ((e.context._currentValue = e.parentValue), (e = e.parent), e === null)
    ) {
      throw Error(
        "The depth must equal at least at zero before reaching the root. This is a bug in React."
      );
    }
    e.depth === n.depth ? ds(e, n) : Pd(e, n);
  }
  function Fd(e, n) {
    const i = n.parent;
    if (i === null) {
      throw Error(
        "The depth must equal at least at zero before reaching the root. This is a bug in React."
      );
    }
    e.depth === i.depth ? ds(e, i) : Fd(e, i),
      (n.context._currentValue = n.value);
  }
  function ls(e) {
    const n = ao;
    n !== e &&
      (n === null
        ? _d(e)
        : e === null
        ? Id(n)
        : n.depth === e.depth
        ? ds(n, e)
        : n.depth > e.depth
        ? Pd(n, e)
        : Fd(n, e),
      (ao = e));
  }
  const td = {
    isMounted: function () {
      return !1;
    },
    enqueueSetState: function (e, n) {
      (e = e._reactInternals), e.queue !== null && e.queue.push(n);
    },
    enqueueReplaceState: function (e, n) {
      (e = e._reactInternals), (e.replace = !0), (e.queue = [n]);
    },
    enqueueForceUpdate: function () {},
  };
  function rd(e, n, i, s) {
    let v = e.state !== void 0 ? e.state : null;
    (e.updater = td), (e.props = i), (e.state = v);
    let c = { queue: [], replace: !1 };
    e._reactInternals = c;
    let m = n.contextType;
    if (
      ((e.context = typeof m === "object" && m !== null ? m._currentValue : s),
      (m = n.getDerivedStateFromProps),
      typeof m === "function" &&
        ((m = m(i, v)), (v = m == null ? v : Hi({}, v, m)), (e.state = v)),
      typeof n.getDerivedStateFromProps !== "function" &&
        typeof e.getSnapshotBeforeUpdate !== "function" &&
        (typeof e.UNSAFE_componentWillMount === "function" ||
          typeof e.componentWillMount === "function"))
    ) {
      if (
        ((n = e.state),
        typeof e.componentWillMount === "function" && e.componentWillMount(),
        typeof e.UNSAFE_componentWillMount === "function" &&
          e.UNSAFE_componentWillMount(),
        n !== e.state && td.enqueueReplaceState(e, e.state, null),
        c.queue !== null && c.queue.length > 0)
      ) {
        if (
          ((n = c.queue),
          (m = c.replace),
          (c.queue = null),
          (c.replace = !1),
          m && n.length === 1)
        ) {
          e.state = n[0];
        } else {
          for (
            c = m ? n[0] : e.state, v = !0, m = m ? 1 : 0;
            m < n.length;
            m++
          ) {
            let S = n[m];
            (S = typeof S === "function" ? S.call(e, c, i, s) : S),
              S != null && (v ? ((v = !1), (c = Hi({}, c, S))) : Hi(c, S));
          }
          e.state = c;
        }
      } else c.queue = null;
    }
  }
  const fv = { id: 1, overflow: "" };
  function mc(e, n, i) {
    let s = e.id;
    e = e.overflow;
    let v = 32 - os(s) - 1;
    (s &= ~(1 << v)), (i += 1);
    let c = 32 - os(n) + v;
    if (c > 30) {
      const m = v - (v % 5);
      return (
        (c = (s & ((1 << m) - 1)).toString(32)),
        (s >>= m),
        (v -= m),
        { id: (1 << (32 - os(n) + v)) | (i << v) | s, overflow: c + e }
      );
    }
    return { id: (1 << c) | (i << v) | s, overflow: e };
  }
  var os = Math.clz32 ? Math.clz32 : hv;
  const dv = Math.log;
  const pv = Math.LN2;
  function hv(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((dv(e) / pv) | 0)) | 0;
  }
  function vv(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  const gv = typeof Object.is === "function" ? Object.is : vv;
  let Cr = null;
  let Tc = null;
  let as = null;
  let ae = null;
  let Ui = !1;
  let ss = !1;
  let Wi = 0;
  let cn = null;
  let ps = 0;
  function oo() {
    if (Cr === null) {
      throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    return Cr;
  }
  function nd() {
    if (ps > 0) {
      throw Error("Rendered more hooks than during the previous render");
    }
    return { memoizedState: null, queue: null, next: null };
  }
  function Cc() {
    return (
      ae === null
        ? as === null
          ? ((Ui = !1), (as = ae = nd()))
          : ((Ui = !0), (ae = as))
        : ae.next === null
        ? ((Ui = !1), (ae = ae.next = nd()))
        : ((Ui = !0), (ae = ae.next)),
      ae
    );
  }
  function Ec() {
    (Tc = Cr = null), (ss = !1), (as = null), (ps = 0), (ae = cn = null);
  }
  function Ad(e, n) {
    return typeof n === "function" ? n(e) : n;
  }
  function od(e, n, i) {
    if (((Cr = oo()), (ae = Cc()), Ui)) {
      let s = ae.queue;
      if (((n = s.dispatch), cn !== null && ((i = cn.get(s)), i !== void 0))) {
        cn.delete(s), (s = ae.memoizedState);
        do (s = e(s, i.action)), (i = i.next);
        while (i !== null);
        return (ae.memoizedState = s), [s, n];
      }
      return [ae.memoizedState, n];
    }
    return (
      (e =
        e === Ad
          ? typeof n === "function"
            ? n()
            : n
          : i !== void 0
          ? i(n)
          : n),
      (ae.memoizedState = e),
      (e = ae.queue = { last: null, dispatch: null }),
      (e = e.dispatch = mv.bind(null, Cr, e)),
      [ae.memoizedState, e]
    );
  }
  function ad(e, n) {
    if (
      ((Cr = oo()), (ae = Cc()), (n = n === void 0 ? null : n), ae !== null)
    ) {
      const i = ae.memoizedState;
      if (i !== null && n !== null) {
        let s = i[1];
        e: if (s === null) s = !1;
        else {
          for (let v = 0; v < s.length && v < n.length; v++) {
            if (!gv(n[v], s[v])) {
              s = !1;
              break e;
            }
          }
          s = !0;
        }
        if (s) return i[0];
      }
    }
    return (e = e()), (ae.memoizedState = [e, n]), e;
  }
  function mv(e, n, i) {
    if (ps >= 25) {
      throw Error(
        "Too many re-renders. React limits the number of renders to prevent an infinite loop."
      );
    }
    if (e === Cr) {
      if (
        ((ss = !0),
        (e = { action: i, next: null }),
        cn === null && (cn = new Map()),
        (i = cn.get(n)),
        i === void 0)
      ) {
        cn.set(n, e);
      } else {
        for (n = i; n.next !== null; ) n = n.next;
        n.next = e;
      }
    }
  }
  function yv() {
    throw Error("startTransition cannot be called during server rendering.");
  }
  function ql() {}
  const id = {
    readContext: function (e) {
      return e._currentValue;
    },
    useContext: function (e) {
      return oo(), e._currentValue;
    },
    useMemo: ad,
    useReducer: od,
    useRef: function (e) {
      (Cr = oo()), (ae = Cc());
      const n = ae.memoizedState;
      return n === null ? ((e = { current: e }), (ae.memoizedState = e)) : n;
    },
    useState: function (e) {
      return od(Ad, e);
    },
    useInsertionEffect: ql,
    useLayoutEffect: function () {},
    useCallback: function (e, n) {
      return ad(function () {
        return e;
      }, n);
    },
    useImperativeHandle: ql,
    useEffect: ql,
    useDebugValue: ql,
    useDeferredValue: function (e) {
      return oo(), e;
    },
    useTransition: function () {
      return oo(), [!1, yv];
    },
    useId: function () {
      let e = Tc.treeContext;
      let n = e.overflow;
      (e = e.id), (e = (e & ~(1 << (32 - os(e) - 1))).toString(32) + n);
      const i = is;
      if (i === null) {
        throw Error(
          "Invalid hook call. Hooks can only be called inside of the body of a function component."
        );
      }
      return (
        (n = Wi++),
        (e = ":" + i.idPrefix + "R" + e),
        n > 0 && (e += "H" + n.toString(32)),
        e + ":"
      );
    },
    useMutableSource: function (e, n) {
      return oo(), n(e._source);
    },
    useSyncExternalStore: function (e, n, i) {
      if (i === void 0) {
        throw Error(
          "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
        );
      }
      return i();
    },
  };
  var is = null;
  const hc =
    hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      .ReactCurrentDispatcher;
  function bv(e) {
    return console.error(e), null;
  }
  function ji() {}
  function Sv(e, n) {
    const i = e.pingedTasks;
    i.push(n),
      i.length === 1 &&
        setImmediate(function () {
          return Md(e);
        });
  }
  function Rc(e, n, i, s, v, c, m, S) {
    e.allPendingTasks++, i === null ? e.pendingRootTasks++ : i.pendingTasks++;
    var E = {
      node: n,
      ping: function () {
        return Sv(e, E);
      },
      blockedBoundary: i,
      blockedSegment: s,
      abortSet: v,
      legacyContext: c,
      context: m,
      treeContext: S,
    };
    return v.add(E), E;
  }
  function us(e, n, i, s, v, c) {
    return {
      status: 0,
      id: -1,
      index: n,
      parentFlushed: !1,
      chunks: [],
      children: [],
      formatContext: s,
      boundary: i,
      lastPushedText: v,
      textEmbedded: c,
    };
  }
  function zi(e, n) {
    if (((e = e.onError(n)), e != null && typeof e !== "string")) {
      throw Error(
        'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
          typeof e +
          '" instead'
      );
    }
    return e;
  }
  function cs(e, n) {
    let i = e.onShellError;
    i(n),
      (i = e.onFatalError),
      i(n),
      e.destination !== null
        ? ((e.status = 2), e.destination.destroy(n))
        : ((e.status = 1), (e.fatalError = n));
  }
  function ld(e, n, i, s, v) {
    for (Cr = {}, Tc = n, Wi = 0, e = i(s, v); ss; ) {
      (ss = !1), (Wi = 0), (ps += 1), (ae = null), (e = i(s, v));
    }
    return Ec(), e;
  }
  function sd(e, n, i, s) {
    const v = i.render();
    const c = s.childContextTypes;
    if (c != null) {
      const m = n.legacyContext;
      if (typeof i.getChildContext !== "function") s = m;
      else {
        i = i.getChildContext();
        for (const S in i) {
          if (!(S in c)) {
            throw Error(
              (gc(s) || "Unknown") +
                '.getChildContext(): key "' +
                S +
                '" is not defined in childContextTypes.'
            );
          }
        }
        s = Hi({}, m, i);
      }
      (n.legacyContext = s), ut(e, n, v), (n.legacyContext = m);
    } else ut(e, n, v);
  }
  function ud(e, n) {
    if (e && e.defaultProps) {
      (n = Hi({}, n)), (e = e.defaultProps);
      for (const i in e) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    return n;
  }
  function yc(e, n, i, s, v) {
    if (typeof i === "function") {
      if (i.prototype && i.prototype.isReactComponent) {
        v = ed(i, n.legacyContext);
        var c = i.contextType;
        (c = new i(
          s,
          typeof c === "object" && c !== null ? c._currentValue : v
        )),
          rd(c, i, s, v),
          sd(e, n, c, i);
      } else {
        (c = ed(i, n.legacyContext)), (v = ld(e, n, i, s, c));
        var m = Wi !== 0;
        if (
          typeof v === "object" &&
          v !== null &&
          typeof v.render === "function" &&
          v.$$typeof === void 0
        ) {
          rd(v, i, s, c), sd(e, n, v, i);
        } else if (m) {
          (s = n.treeContext), (n.treeContext = mc(s, 1, 0));
          try {
            ut(e, n, v);
          } finally {
            n.treeContext = s;
          }
        } else ut(e, n, v);
      }
    } else if (typeof i === "string") {
      switch (
        ((v = n.blockedSegment),
        (c = ch(v.chunks, i, s, e.responseState, v.formatContext)),
        (v.lastPushedText = !1),
        (m = v.formatContext),
        (v.formatContext = oh(m, i, s)),
        bc(e, n, c),
        (v.formatContext = m),
        i)
      ) {
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "input":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          break;
        default:
          v.chunks.push(fh, i, dh);
      }
      v.lastPushedText = !1;
    } else {
      switch (i) {
        case uv:
        case sv:
        case bd:
        case Sd:
        case yd:
          ut(e, n, s.children);
          return;
        case Cd:
          ut(e, n, s.children);
          return;
        case lv:
          throw Error("ReactDOMServer does not yet support scope components.");
        case Td:
          e: {
            (i = n.blockedBoundary),
              (v = n.blockedSegment),
              (c = s.fallback),
              (s = s.children),
              (m = new Set());
            const S = {
              id: null,
              rootSegmentID: -1,
              parentFlushed: !1,
              pendingTasks: 0,
              forceClientRender: !1,
              completedSegments: [],
              byteSize: 0,
              fallbackAbortableTasks: m,
              errorDigest: null,
            };
            const E = us(e, v.chunks.length, S, v.formatContext, !1, !1);
            v.children.push(E), (v.lastPushedText = !1);
            const x = us(e, 0, null, v.formatContext, !1, !1);
            (x.parentFlushed = !0),
              (n.blockedBoundary = S),
              (n.blockedSegment = x);
            try {
              if (
                (bc(e, n, s),
                x.lastPushedText && x.textEmbedded && x.chunks.push(xc),
                (x.status = 1),
                fs(S, x),
                S.pendingTasks === 0)
              ) {
                break e;
              }
            } catch (R) {
              (x.status = 4),
                (S.forceClientRender = !0),
                (S.errorDigest = zi(e, R));
            } finally {
              (n.blockedBoundary = i), (n.blockedSegment = v);
            }
            (n = Rc(e, c, i, E, m, n.legacyContext, n.context, n.treeContext)),
              e.pingedTasks.push(n);
          }
          return;
      }
      if (typeof i === "object" && i !== null) {
        switch (i.$$typeof) {
          case kd:
            if (((s = ld(e, n, i.render, s, v)), Wi !== 0)) {
              (i = n.treeContext), (n.treeContext = mc(i, 1, 0));
              try {
                ut(e, n, s);
              } finally {
                n.treeContext = i;
              }
            } else ut(e, n, s);
            return;
          case Ed:
            (i = i.type), (s = ud(i, s)), yc(e, n, i, s, v);
            return;
          case wd:
            if (
              ((v = s.children),
              (i = i._context),
              (s = s.value),
              (c = i._currentValue),
              (i._currentValue = s),
              (m = ao),
              (ao = s =
                {
                  parent: m,
                  depth: m === null ? 0 : m.depth + 1,
                  context: i,
                  parentValue: c,
                  value: s,
                }),
              (n.context = s),
              ut(e, n, v),
              (e = ao),
              e === null)
            ) {
              throw Error(
                "Tried to pop a Context at the root of the app. This is a bug in React."
              );
            }
            (s = e.parentValue),
              (e.context._currentValue =
                s === cv ? e.context._defaultValue : s),
              (e = ao = e.parent),
              (n.context = e);
            return;
          case xd:
            (s = s.children), (s = s(i._currentValue)), ut(e, n, s);
            return;
          case kc:
            (v = i._init),
              (i = v(i._payload)),
              (s = ud(i, s)),
              yc(e, n, i, s, void 0);
            return;
        }
      }
      throw Error(
        "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " +
          ((i == null ? i : typeof i) + ".")
      );
    }
  }
  function ut(e, n, i) {
    if (((n.node = i), typeof i === "object" && i !== null)) {
      switch (i.$$typeof) {
        case iv:
          yc(e, n, i.type, i.props, i.ref);
          return;
        case md:
          throw Error(
            "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
          );
        case kc:
          var s = i._init;
          (i = s(i._payload)), ut(e, n, i);
          return;
      }
      if (vc(i)) {
        cd(e, n, i);
        return;
      }
      if (
        (i === null || typeof i !== "object"
          ? (s = null)
          : ((s = (qf && i[qf]) || i["@@iterator"]),
            (s = typeof s === "function" ? s : null)),
        s && (s = s.call(i)))
      ) {
        if (((i = s.next()), !i.done)) {
          const v = [];
          do v.push(i.value), (i = s.next());
          while (!i.done);
          cd(e, n, v);
        }
        return;
      }
      throw (
        ((e = Object.prototype.toString.call(i)),
        Error(
          "Objects are not valid as a React child (found: " +
            (e === "[object Object]"
              ? "object with keys {" + Object.keys(i).join(", ") + "}"
              : e) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    typeof i === "string"
      ? ((s = n.blockedSegment),
        (s.lastPushedText = Yf(
          n.blockedSegment.chunks,
          i,
          e.responseState,
          s.lastPushedText
        )))
      : typeof i === "number" &&
        ((s = n.blockedSegment),
        (s.lastPushedText = Yf(
          n.blockedSegment.chunks,
          "" + i,
          e.responseState,
          s.lastPushedText
        )));
  }
  function cd(e, n, i) {
    for (let s = i.length, v = 0; v < s; v++) {
      const c = n.treeContext;
      n.treeContext = mc(c, s, v);
      try {
        bc(e, n, i[v]);
      } finally {
        n.treeContext = c;
      }
    }
  }
  function bc(e, n, i) {
    const s = n.blockedSegment.formatContext;
    const v = n.legacyContext;
    const c = n.context;
    try {
      return ut(e, n, i);
    } catch (E) {
      if (
        (Ec(),
        typeof E === "object" && E !== null && typeof E.then === "function")
      ) {
        i = E;
        const m = n.blockedSegment;
        const S = us(
          e,
          m.chunks.length,
          null,
          m.formatContext,
          m.lastPushedText,
          !0
        );
        m.children.push(S),
          (m.lastPushedText = !1),
          (e = Rc(
            e,
            n.node,
            n.blockedBoundary,
            S,
            n.abortSet,
            n.legacyContext,
            n.context,
            n.treeContext
          ).ping),
          i.then(e, e),
          (n.blockedSegment.formatContext = s),
          (n.legacyContext = v),
          (n.context = c),
          ls(c);
      } else {
        throw (
          ((n.blockedSegment.formatContext = s),
          (n.legacyContext = v),
          (n.context = c),
          ls(c),
          E)
        );
      }
    }
  }
  function wv(e) {
    const n = e.blockedBoundary;
    (e = e.blockedSegment), (e.status = 3), Od(this, n, e);
  }
  function Dd(e, n, i) {
    const s = e.blockedBoundary;
    (e.blockedSegment.status = 3),
      s === null
        ? (n.allPendingTasks--,
          n.status !== 2 &&
            ((n.status = 2), n.destination !== null && n.destination.end()))
        : (s.pendingTasks--,
          s.forceClientRender ||
            ((s.forceClientRender = !0),
            (s.errorDigest = n.onError(
              i === void 0
                ? Error(
                    "The render was aborted by the server without a reason."
                  )
                : i
            )),
            s.parentFlushed && n.clientRenderedBoundaries.push(s)),
          s.fallbackAbortableTasks.forEach(function (v) {
            return Dd(v, n, i);
          }),
          s.fallbackAbortableTasks.clear(),
          n.allPendingTasks--,
          n.allPendingTasks === 0 && ((e = n.onAllReady), e()));
  }
  function fs(e, n) {
    if (
      n.chunks.length === 0 &&
      n.children.length === 1 &&
      n.children[0].boundary === null
    ) {
      const i = n.children[0];
      (i.id = n.id), (i.parentFlushed = !0), i.status === 1 && fs(e, i);
    } else e.completedSegments.push(n);
  }
  function Od(e, n, i) {
    if (n === null) {
      if (i.parentFlushed) {
        if (e.completedRootSegment !== null) {
          throw Error(
            "There can only be one root segment. This is a bug in React."
          );
        }
        e.completedRootSegment = i;
      }
      e.pendingRootTasks--,
        e.pendingRootTasks === 0 &&
          ((e.onShellError = ji), (n = e.onShellReady), n());
    } else {
      n.pendingTasks--,
        n.forceClientRender ||
          (n.pendingTasks === 0
            ? (i.parentFlushed && i.status === 1 && fs(n, i),
              n.parentFlushed && e.completedBoundaries.push(n),
              n.fallbackAbortableTasks.forEach(wv, e),
              n.fallbackAbortableTasks.clear())
            : i.parentFlushed &&
              i.status === 1 &&
              (fs(n, i),
              n.completedSegments.length === 1 &&
                n.parentFlushed &&
                e.partialBoundaries.push(n)));
    }
    e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e());
  }
  function Md(e) {
    if (e.status !== 2) {
      const n = ao;
      const i = hc.current;
      hc.current = id;
      const s = is;
      is = e.responseState;
      try {
        const v = e.pingedTasks;
        let c;
        for (c = 0; c < v.length; c++) {
          const m = v[c];
          const S = e;
          const E = m.blockedSegment;
          if (E.status === 0) {
            ls(m.context);
            try {
              ut(S, m, m.node),
                E.lastPushedText && E.textEmbedded && E.chunks.push(xc),
                m.abortSet.delete(m),
                (E.status = 1),
                Od(S, m.blockedBoundary, E);
            } catch (J) {
              if (
                (Ec(),
                typeof J === "object" &&
                  J !== null &&
                  typeof J.then === "function")
              ) {
                const x = m.ping;
                J.then(x, x);
              } else {
                m.abortSet.delete(m), (E.status = 4);
                const R = m.blockedBoundary;
                const D = J;
                const V = zi(S, D);
                if (
                  (R === null
                    ? cs(S, D)
                    : (R.pendingTasks--,
                      R.forceClientRender ||
                        ((R.forceClientRender = !0),
                        (R.errorDigest = V),
                        R.parentFlushed && S.clientRenderedBoundaries.push(R))),
                  S.allPendingTasks--,
                  S.allPendingTasks === 0)
                ) {
                  const te = S.onAllReady;
                  te();
                }
              }
            } finally {
            }
          }
        }
        v.splice(0, c), e.destination !== null && Ic(e, e.destination);
      } catch (J) {
        zi(e, J), cs(e, J);
      } finally {
        (is = s), (hc.current = i), i === id && ls(n);
      }
    }
  }
  function es(e, n, i) {
    switch (((i.parentFlushed = !0), i.status)) {
      case 0:
        var s = (i.id = e.nextSegmentId++);
        return (
          (i.lastPushedText = !1),
          (i.textEmbedded = !1),
          (e = e.responseState),
          L(n, ph),
          L(n, e.placeholderPrefix),
          (e = s.toString(16)),
          L(n, e),
          se(n, hh)
        );
      case 1:
        i.status = 2;
        var v = !0;
        s = i.chunks;
        var c = 0;
        i = i.children;
        for (let m = 0; m < i.length; m++) {
          for (v = i[m]; c < v.index; c++) L(n, s[c]);
          v = hs(e, n, v);
        }
        for (; c < s.length - 1; c++) L(n, s[c]);
        return c < s.length && (v = se(n, s[c])), v;
      default:
        throw Error(
          "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
        );
    }
  }
  function hs(e, n, i) {
    let s = i.boundary;
    if (s === null) return es(e, n, i);
    if (((s.parentFlushed = !0), s.forceClientRender)) {
      (s = s.errorDigest),
        se(n, yh),
        L(n, Sh),
        s && (L(n, xh), L(n, Ae(s)), L(n, wh)),
        se(n, kh),
        es(e, n, i);
    } else if (s.pendingTasks > 0) {
      (s.rootSegmentID = e.nextSegmentId++),
        s.completedSegments.length > 0 && e.partialBoundaries.push(s);
      let v = e.responseState;
      const c = v.nextSuspenseID++;
      (v = A(v.boundaryPrefix + c.toString(16))),
        (s = s.id = v),
        Kf(n, e.responseState, s),
        es(e, n, i);
    } else if (s.byteSize > e.progressiveChunkSize) {
      (s.rootSegmentID = e.nextSegmentId++),
        e.completedBoundaries.push(s),
        Kf(n, e.responseState, s.id),
        es(e, n, i);
    } else {
      if ((se(n, vh), (i = s.completedSegments), i.length !== 1)) {
        throw Error(
          "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
        );
      }
      hs(e, n, i[0]);
    }
    return se(n, bh);
  }
  function fd(e, n, i) {
    return (
      Vh(n, e.responseState, i.formatContext, i.id),
      hs(e, n, i),
      Yh(n, i.formatContext)
    );
  }
  function dd(e, n, i) {
    for (var s = i.completedSegments, v = 0; v < s.length; v++) {
      Ld(e, n, i, s[v]);
    }
    if (
      ((s.length = 0),
      (e = e.responseState),
      (s = i.id),
      (i = i.rootSegmentID),
      L(n, e.startInlineScript),
      e.sentCompleteBoundaryFunction
        ? L(n, Kh)
        : ((e.sentCompleteBoundaryFunction = !0), L(n, Qh)),
      s === null)
    ) {
      throw Error(
        "An ID must have been assigned before we can complete the boundary."
      );
    }
    return (
      (i = i.toString(16)),
      L(n, s),
      L(n, qh),
      L(n, e.segmentPrefix),
      L(n, i),
      se(n, ev)
    );
  }
  function Ld(e, n, i, s) {
    if (s.status === 2) return !0;
    let v = s.id;
    if (v === -1) {
      if ((s.id = i.rootSegmentID) === -1) {
        throw Error(
          "A root segment ID must have been assigned by now. This is a bug in React."
        );
      }
      return fd(e, n, s);
    }
    return (
      fd(e, n, s),
      (e = e.responseState),
      L(n, e.startInlineScript),
      e.sentCompleteSegmentFunction
        ? L(n, Xh)
        : ((e.sentCompleteSegmentFunction = !0), L(n, Gh)),
      L(n, e.segmentPrefix),
      (v = v.toString(16)),
      L(n, v),
      L(n, Zh),
      L(n, e.placeholderPrefix),
      L(n, v),
      se(n, Jh)
    );
  }
  function Ic(e, n) {
    (pe = new Uint8Array(2048)), (le = 0), (da = !0);
    try {
      let i = e.completedRootSegment;
      if (i !== null && e.pendingRootTasks === 0) {
        hs(e, n, i), (e.completedRootSegment = null);
        var s = e.responseState.bootstrapChunks;
        for (i = 0; i < s.length - 1; i++) L(n, s[i]);
        i < s.length && se(n, s[i]);
      }
      let v = e.clientRenderedBoundaries;
      let c;
      for (c = 0; c < v.length; c++) {
        var m = v[c];
        s = n;
        var S = e.responseState;
        const E = m.id;
        const x = m.errorDigest;
        const R = m.errorMessage;
        const D = m.errorComponentStack;
        if (
          (L(s, S.startInlineScript),
          S.sentClientRenderFunction
            ? L(s, rv)
            : ((S.sentClientRenderFunction = !0), L(s, tv)),
          E === null)
        ) {
          throw Error(
            "An ID must have been assigned before we can complete the boundary."
          );
        }
        if (
          (L(s, E),
          L(s, nv),
          (x || R || D) && (L(s, dc), L(s, pc(x || ""))),
          (R || D) && (L(s, dc), L(s, pc(R || ""))),
          D && (L(s, dc), L(s, pc(D))),
          !se(s, ov))
        ) {
          (e.destination = null), c++, v.splice(0, c);
          return;
        }
      }
      v.splice(0, c);
      const V = e.completedBoundaries;
      for (c = 0; c < V.length; c++) {
        if (!dd(e, n, V[c])) {
          (e.destination = null), c++, V.splice(0, c);
          return;
        }
      }
      V.splice(0, c), zf(n), (pe = new Uint8Array(2048)), (le = 0), (da = !0);
      const te = e.partialBoundaries;
      for (c = 0; c < te.length; c++) {
        const J = te[c];
        e: {
          (v = e), (m = n);
          const Oe = J.completedSegments;
          for (S = 0; S < Oe.length; S++) {
            if (!Ld(v, m, J, Oe[S])) {
              S++, Oe.splice(0, S);
              var P = !1;
              break e;
            }
          }
          Oe.splice(0, S), (P = !0);
        }
        if (!P) {
          (e.destination = null), c++, te.splice(0, c);
          return;
        }
      }
      te.splice(0, c);
      const ue = e.completedBoundaries;
      for (c = 0; c < ue.length; c++) {
        if (!dd(e, n, ue[c])) {
          (e.destination = null), c++, ue.splice(0, c);
          return;
        }
      }
      ue.splice(0, c);
    } finally {
      zf(n),
        typeof n.flush === "function" && n.flush(),
        e.allPendingTasks === 0 &&
          e.pingedTasks.length === 0 &&
          e.clientRenderedBoundaries.length === 0 &&
          e.completedBoundaries.length === 0 &&
          n.end();
    }
  }
  function xv(e) {
    setImmediate(function () {
      return Md(e);
    });
  }
  function Bd(e, n) {
    if (e.status === 1) (e.status = 2), n.destroy(e.fatalError);
    else if (e.status !== 2 && e.destination === null) {
      e.destination = n;
      try {
        Ic(e, n);
      } catch (i) {
        zi(e, i), cs(e, i);
      }
    }
  }
  function Ud(e, n) {
    try {
      const i = e.abortableTasks;
      i.forEach(function (s) {
        return Dd(s, e, n);
      }),
        i.clear(),
        e.destination !== null && Ic(e, e.destination);
    } catch (s) {
      zi(e, s), cs(e, s);
    }
  }
  function kv(e, n) {
    return function () {
      return Bd(n, e);
    };
  }
  function pd(e, n) {
    return function () {
      return Ud(e, n);
    };
  }
  function Tv(e, n) {
    let i = n ? n.identifierPrefix : void 0;
    let s = n ? n.nonce : void 0;
    let v = n ? n.bootstrapScriptContent : void 0;
    let c = n ? n.bootstrapScripts : void 0;
    let m = n ? n.bootstrapModules : void 0;
    (i = i === void 0 ? "" : i),
      (s = s === void 0 ? Kp : A('<script nonce="' + Ae(s) + '">'));
    let S = [];
    if (
      (v !== void 0 && S.push(s, ("" + v).replace(rh, nh), qp), c !== void 0)
    ) {
      for (v = 0; v < c.length; v++) S.push(eh, Ae(c[v]), Vf);
    }
    if (m !== void 0) for (c = 0; c < m.length; c++) S.push(th, Ae(m[c]), Vf);
    (m = {
      bootstrapChunks: S,
      startInlineScript: s,
      placeholderPrefix: A(i + "P:"),
      segmentPrefix: A(i + "S:"),
      boundaryPrefix: i + "B:",
      idPrefix: i,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1,
    }),
      (c = n ? n.namespaceURI : void 0),
      (c = Qt(
        c === "http://www.w3.org/2000/svg"
          ? 2
          : c === "http://www.w3.org/1998/Math/MathML"
          ? 3
          : 0,
        null
      )),
      (v = n ? n.progressiveChunkSize : void 0),
      (s = n ? n.onError : void 0),
      (S = n ? n.onAllReady : void 0);
    const E = n ? n.onShellReady : void 0;
    const x = n ? n.onShellError : void 0;
    return (
      (n = []),
      (i = new Set()),
      (m = {
        destination: null,
        responseState: m,
        progressiveChunkSize: v === void 0 ? 12800 : v,
        status: 0,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: i,
        pingedTasks: n,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: s === void 0 ? bv : s,
        onAllReady: S === void 0 ? ji : S,
        onShellReady: E === void 0 ? ji : E,
        onShellError: x === void 0 ? ji : x,
        onFatalError: ji,
      }),
      (c = us(m, 0, null, c, !1, !1)),
      (c.parentFlushed = !0),
      (e = Rc(m, e, null, c, i, Rd, null, fv)),
      n.push(e),
      m
    );
  }
  _c.renderToPipeableStream = function (e, n) {
    const i = Tv(e, n);
    let s = !1;
    return (
      xv(i),
      {
        pipe: function (v) {
          if (s) {
            throw Error(
              "React currently only supports piping to one writable stream."
            );
          }
          return (
            (s = !0),
            Bd(i, v),
            v.on("drain", kv(v, i)),
            v.on(
              "error",
              pd(i, Error("The destination stream errored while writing data."))
            ),
            v.on("close", pd(i, Error("The destination stream closed early."))),
            v
          );
        },
        abort: function (v) {
          Ud(i, v);
        },
      }
    );
  };
  _c.version = "18.2.0";
});
const Hd = an((pa) => {
  "use strict";
  process.env.NODE_ENV !== "production" &&
    (function () {
      "use strict";
      const e = ua();
      const n = require("stream");
      const i = "18.2.0";
      const s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function v(t) {
        {
          for (
            var r = arguments.length, l = new Array(r > 1 ? r - 1 : 0), u = 1;
            u < r;
            u++
          ) {
            l[u - 1] = arguments[u];
          }
          m("warn", t, l);
        }
      }
      function c(t) {
        {
          for (
            var r = arguments.length, l = new Array(r > 1 ? r - 1 : 0), u = 1;
            u < r;
            u++
          ) {
            l[u - 1] = arguments[u];
          }
          m("error", t, l);
        }
      }
      function m(t, r, l) {
        {
          const u = s.ReactDebugCurrentFrame;
          const p = u.getStackAddendum();
          p !== "" && ((r += "%s"), (l = l.concat([p])));
          const g = l.map(function (y) {
            return String(y);
          });
          g.unshift("Warning: " + r),
            Function.prototype.apply.call(console[t], console, g);
        }
      }
      function S(t) {
        t();
      }
      function E(t) {}
      function x(t, r) {
        R(t, r);
      }
      function R(t, r) {
        return t.push(r);
      }
      function D(t) {}
      function V(t) {
        t.push(null);
      }
      function te(t) {
        return t;
      }
      function J(t) {
        return t;
      }
      function Oe(t, r) {
        t.destroy(r);
      }
      function P(t) {
        {
          const r = typeof Symbol === "function" && Symbol.toStringTag;
          const l =
            (r && t[Symbol.toStringTag]) || t.constructor.name || "Object";
          return l;
        }
      }
      function ue(t) {
        try {
          return W(t), !1;
        } catch {
          return !0;
        }
      }
      function W(t) {
        return "" + t;
      }
      function q(t, r) {
        if (ue(t)) {
          return (
            c(
              "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",
              r,
              P(t)
            ),
            W(t)
          );
        }
      }
      function xe(t, r) {
        if (ue(t)) {
          return (
            c(
              "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",
              r,
              P(t)
            ),
            W(t)
          );
        }
      }
      function _e(t) {
        if (ue(t)) {
          return (
            c(
              "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",
              P(t)
            ),
            W(t)
          );
        }
      }
      const he = Object.prototype.hasOwnProperty;
      const F = 0;
      const ct = 1;
      const qt = 2;
      const yt = 3;
      const Mt = 4;
      const Lt = 5;
      const ft = 6;
      const Me =
        ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
      const B = Me + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
      const Er = new RegExp("^[" + Me + "][" + B + "]*$");
      const tt = {};
      const Bt = {};
      function bt(t) {
        return he.call(Bt, t)
          ? !0
          : he.call(tt, t)
          ? !1
          : Er.test(t)
          ? ((Bt[t] = !0), !0)
          : ((tt[t] = !0), c("Invalid attribute name: `%s`", t), !1);
      }
      function Le(t, r, l, u) {
        if (l !== null && l.type === F) return !1;
        switch (typeof r) {
          case "function":
          case "symbol":
            return !0;
          case "boolean": {
            if (u) return !1;
            if (l !== null) return !l.acceptsBooleans;
            const p = t.toLowerCase().slice(0, 5);
            return p !== "data-" && p !== "aria-";
          }
          default:
            return !1;
        }
      }
      function er(t) {
        return ce.hasOwnProperty(t) ? ce[t] : null;
      }
      function re(t, r, l, u, p, g, y) {
        (this.acceptsBooleans = r === qt || r === yt || r === Mt),
          (this.attributeName = u),
          (this.attributeNamespace = p),
          (this.mustUseProperty = l),
          (this.propertyName = t),
          (this.type = r),
          (this.sanitizeURL = g),
          (this.removeEmptyString = y);
      }
      var ce = {};
      const tr = [
        "children",
        "dangerouslySetInnerHTML",
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style",
      ];
      tr.forEach(function (t) {
        ce[t] = new re(t, F, !1, t, null, !1, !1);
      }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (t) {
          const r = t[0];
          const l = t[1];
          ce[r] = new re(r, ct, !1, l, null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (t) {
            ce[t] = new re(t, qt, !1, t.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (t) {
          ce[t] = new re(t, qt, !1, t, null, !1, !1);
        }),
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope",
        ].forEach(function (t) {
          ce[t] = new re(t, yt, !1, t.toLowerCase(), null, !1, !1);
        }),
        ["checked", "multiple", "muted", "selected"].forEach(function (t) {
          ce[t] = new re(t, yt, !0, t, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (t) {
          ce[t] = new re(t, Mt, !1, t, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (t) {
          ce[t] = new re(t, ft, !1, t, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (t) {
          ce[t] = new re(t, Lt, !1, t.toLowerCase(), null, !1, !1);
        });
      const rr = /[\-\:]([a-z])/g;
      const nr = function (t) {
        return t[1].toUpperCase();
      };
      [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height",
      ].forEach(function (t) {
        const r = t.replace(rr, nr);
        ce[r] = new re(r, ct, !1, t, null, !1, !1);
      }),
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type",
        ].forEach(function (t) {
          const r = t.replace(rr, nr);
          ce[r] = new re(r, ct, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
        }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
          const r = t.replace(rr, nr);
          ce[r] = new re(
            r,
            ct,
            !1,
            t,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (t) {
          ce[t] = new re(t, ct, !1, t.toLowerCase(), null, !1, !1);
        });
      const Rr = "xlinkHref";
      (ce[Rr] = new re(
        "xlinkHref",
        ct,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      )),
        ["src", "href", "action", "formAction"].forEach(function (t) {
          ce[t] = new re(t, ct, !1, t.toLowerCase(), null, !0, !0);
        });
      const St = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      };
      function so(t, r) {
        return t + r.charAt(0).toUpperCase() + r.substring(1);
      }
      const uo = ["Webkit", "ms", "Moz", "O"];
      Object.keys(St).forEach(function (t) {
        uo.forEach(function (r) {
          St[so(r, t)] = St[t];
        });
      });
      const ye = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0,
      };
      function ve(t, r) {
        ye[r.type] ||
          r.onChange ||
          r.onInput ||
          r.readOnly ||
          r.disabled ||
          r.value == null ||
          c(
            "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
          ),
          r.onChange ||
            r.readOnly ||
            r.disabled ||
            r.checked == null ||
            c(
              "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
            );
      }
      function co(t, r) {
        if (t.indexOf("-") === -1) return typeof r.is === "string";
        switch (t) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      const or = {
        "aria-current": 0,
        "aria-description": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        "aria-hidden": 0,
        "aria-invalid": 0,
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0,
      };
      const je = {};
      const ha = new RegExp("^(aria)-[" + B + "]*$");
      const ar = new RegExp("^(aria)[A-Z][" + B + "]*$");
      function dt(t, r) {
        {
          if (he.call(je, r) && je[r]) return !0;
          if (ar.test(r)) {
            const l = "aria-" + r.slice(4).toLowerCase();
            const u = or.hasOwnProperty(l) ? l : null;
            if (u == null) {
              return (
                c(
                  "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
                  r
                ),
                (je[r] = !0),
                !0
              );
            }
            if (r !== u) {
              return (
                c("Invalid ARIA attribute `%s`. Did you mean `%s`?", r, u),
                (je[r] = !0),
                !0
              );
            }
          }
          if (ha.test(r)) {
            const p = r.toLowerCase();
            const g = or.hasOwnProperty(p) ? p : null;
            if (g == null) return (je[r] = !0), !1;
            if (r !== g) {
              return (
                c("Unknown ARIA attribute `%s`. Did you mean `%s`?", r, g),
                (je[r] = !0),
                !0
              );
            }
          }
        }
        return !0;
      }
      function ir(t, r) {
        {
          const l = [];
          for (const u in r) {
            const p = dt(t, u);
            p || l.push(u);
          }
          const g = l
            .map(function (y) {
              return "`" + y + "`";
            })
            .join(", ");
          l.length === 1
            ? c(
                "Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
                g,
                t
              )
            : l.length > 1 &&
              c(
                "Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
                g,
                t
              );
        }
      }
      function fo(t, r) {
        co(t, r) || ir(t, r);
      }
      let lr = !1;
      function fn(t, r) {
        {
          if (t !== "input" && t !== "textarea" && t !== "select") return;
          r != null &&
            r.value === null &&
            !lr &&
            ((lr = !0),
            t === "select" && r.multiple
              ? c(
                  "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
                  t
                )
              : c(
                  "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
                  t
                ));
        }
      }
      const sr = {
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        imagesizes: "imageSizes",
        imagesrcset: "imageSrcSet",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan",
      };
      let pt = function () {};
      {
        const ke = {};
        const po = /^on./;
        const va = /^on[^A-Z]/;
        const ga = new RegExp("^(aria)-[" + B + "]*$");
        const dn = new RegExp("^(aria)[A-Z][" + B + "]*$");
        pt = function (t, r, l, u) {
          if (he.call(ke, r) && ke[r]) return !0;
          const p = r.toLowerCase();
          if (p === "onfocusin" || p === "onfocusout") {
            return (
              c(
                "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
              ),
              (ke[r] = !0),
              !0
            );
          }
          if (u != null) {
            const g = u.registrationNameDependencies;
            const y = u.possibleRegistrationNames;
            if (g.hasOwnProperty(r)) return !0;
            const w = y.hasOwnProperty(p) ? y[p] : null;
            if (w != null) {
              return (
                c(
                  "Invalid event handler property `%s`. Did you mean `%s`?",
                  r,
                  w
                ),
                (ke[r] = !0),
                !0
              );
            }
            if (po.test(r)) {
              return (
                c(
                  "Unknown event handler property `%s`. It will be ignored.",
                  r
                ),
                (ke[r] = !0),
                !0
              );
            }
          } else if (po.test(r)) {
            return (
              va.test(r) &&
                c(
                  "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
                  r
                ),
              (ke[r] = !0),
              !0
            );
          }
          if (ga.test(r) || dn.test(r)) return !0;
          if (p === "innerhtml") {
            return (
              c(
                "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
              ),
              (ke[r] = !0),
              !0
            );
          }
          if (p === "aria") {
            return (
              c(
                "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
              ),
              (ke[r] = !0),
              !0
            );
          }
          if (
            p === "is" &&
            l !== null &&
            l !== void 0 &&
            typeof l !== "string"
          ) {
            return (
              c(
                "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
                typeof l
              ),
              (ke[r] = !0),
              !0
            );
          }
          if (typeof l === "number" && isNaN(l)) {
            return (
              c(
                "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
                r
              ),
              (ke[r] = !0),
              !0
            );
          }
          const C = er(r);
          const _ = C !== null && C.type === F;
          if (sr.hasOwnProperty(p)) {
            const O = sr[p];
            if (O !== r) {
              return (
                c("Invalid DOM property `%s`. Did you mean `%s`?", r, O),
                (ke[r] = !0),
                !0
              );
            }
          } else if (!_ && r !== p) {
            return (
              c(
                "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
                r,
                p
              ),
              (ke[r] = !0),
              !0
            );
          }
          return typeof l === "boolean" && Le(r, l, C, !1)
            ? (l
                ? c(
                    'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                    l,
                    r,
                    r,
                    l,
                    r
                  )
                : c(
                    'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                    l,
                    r,
                    r,
                    l,
                    r,
                    r,
                    r
                  ),
              (ke[r] = !0),
              !0)
            : _
            ? !0
            : Le(r, l, C, !1)
            ? ((ke[r] = !0), !1)
            : ((l === "false" || l === "true") &&
                C !== null &&
                C.type === yt &&
                (c(
                  "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
                  l,
                  r,
                  l === "false"
                    ? "The browser will interpret it as a truthy value."
                    : 'Although this works, it will not work as expected if you pass the string "false".',
                  r,
                  l
                ),
                (ke[r] = !0)),
              !0);
        };
      }
      const ho = function (t, r, l) {
        {
          const u = [];
          for (const p in r) {
            const g = pt(t, p, r[p], l);
            g || u.push(p);
          }
          const y = u
            .map(function (w) {
              return "`" + w + "`";
            })
            .join(", ");
          u.length === 1
            ? c(
                "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
                y,
                t
              )
            : u.length > 1 &&
              c(
                "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
                y,
                t
              );
        }
      };
      function ma(t, r, l) {
        co(t, r) || ho(t, r, l);
      }
      let pn = function () {};
      {
        const wt = /^(?:webkit|moz|o)[A-Z]/;
        const Te = /^-ms-/;
        const vo = /-(.)/g;
        const go = /;\s*$/;
        const xt = {};
        const hn = {};
        let vn = !1;
        let Ir = !1;
        const ur = function (t) {
          return t.replace(vo, function (r, l) {
            return l.toUpperCase();
          });
        };
        const _r = function (t) {
          (xt.hasOwnProperty(t) && xt[t]) ||
            ((xt[t] = !0),
            c(
              "Unsupported style property %s. Did you mean %s?",
              t,
              ur(t.replace(Te, "ms-"))
            ));
        };
        const ya = function (t) {
          (xt.hasOwnProperty(t) && xt[t]) ||
            ((xt[t] = !0),
            c(
              "Unsupported vendor-prefixed style property %s. Did you mean %s?",
              t,
              t.charAt(0).toUpperCase() + t.slice(1)
            ));
        };
        const ba = function (t, r) {
          (hn.hasOwnProperty(r) && hn[r]) ||
            ((hn[r] = !0),
            c(
              'Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.',
              t,
              r.replace(go, "")
            ));
        };
        const mo = function (t, r) {
          vn ||
            ((vn = !0),
            c("`NaN` is an invalid value for the `%s` css style property.", t));
        };
        const Ut = function (t, r) {
          Ir ||
            ((Ir = !0),
            c(
              "`Infinity` is an invalid value for the `%s` css style property.",
              t
            ));
        };
        pn = function (t, r) {
          t.indexOf("-") > -1
            ? _r(t)
            : wt.test(t)
            ? ya(t)
            : go.test(r) && ba(t, r),
            typeof r === "number" &&
              (isNaN(r) ? mo(t, r) : isFinite(r) || Ut(t, r));
        };
      }
      const gn = pn;
      const jt = /["'&<>]/;
      function Pr(t) {
        _e(t);
        const r = "" + t;
        const l = jt.exec(r);
        if (!l) return r;
        let u;
        let p = "";
        let g;
        let y = 0;
        for (g = l.index; g < r.length; g++) {
          switch (r.charCodeAt(g)) {
            case 34:
              u = "&quot;";
              break;
            case 38:
              u = "&amp;";
              break;
            case 39:
              u = "&#x27;";
              break;
            case 60:
              u = "&lt;";
              break;
            case 62:
              u = "&gt;";
              break;
            default:
              continue;
          }
          y !== g && (p += r.substring(y, g)), (y = g + 1), (p += u);
        }
        return y !== g ? p + r.substring(y, g) : p;
      }
      function ge(t) {
        return typeof t === "boolean" || typeof t === "number" ? "" + t : Pr(t);
      }
      const Sa = /([A-Z])/g;
      const wa = /^ms-/;
      function xa(t) {
        return t.replace(Sa, "-$1").toLowerCase().replace(wa, "-ms-");
      }
      const ka =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
      let mn = !1;
      function yo(t) {
        !mn &&
          ka.test(t) &&
          ((mn = !0),
          c(
            "A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",
            JSON.stringify(t)
          ));
      }
      const Ta = Array.isArray;
      function me(t) {
        return Ta(t);
      }
      const be = "<script>";
      const Ca = "</script>";
      const Ea = '<script src="';
      const Ra = '<script type="module" src="';
      const bo = '" async=""></script>';
      function So(t) {
        return _e(t), ("" + t).replace(Ia, _a);
      }
      var Ia = /(<\/|<)(s)(cript)/gi;
      var _a = function (t, r, l, u) {
        return "" + r + (l === "s" ? "\\u0073" : "\\u0053") + u;
      };
      function cr(t, r, l, u, p) {
        const g = t === void 0 ? "" : t;
        const y = r === void 0 ? be : '<script nonce="' + ge(r) + '">';
        const w = [];
        if ((l !== void 0 && w.push(y, So(l), Ca), u !== void 0)) {
          for (let C = 0; C < u.length; C++) w.push(Ea, ge(u[C]), bo);
        }
        if (p !== void 0) {
          for (let _ = 0; _ < p.length; _++) w.push(Ra, ge(p[_]), bo);
        }
        return {
          bootstrapChunks: w,
          startInlineScript: y,
          placeholderPrefix: g + "P:",
          segmentPrefix: g + "S:",
          boundaryPrefix: g + "B:",
          idPrefix: g,
          nextSuspenseID: 0,
          sentCompleteSegmentFunction: !1,
          sentCompleteBoundaryFunction: !1,
          sentClientRenderFunction: !1,
        };
      }
      const Fr = 0;
      const kt = 1;
      const Ar = 2;
      const Dr = 3;
      const fr = 4;
      const yn = 5;
      const Tt = 6;
      const Or = 7;
      function He(t, r) {
        return { insertionMode: t, selectedValue: r };
      }
      function Ht(t, r, l) {
        switch (r) {
          case "select":
            return He(kt, l.value != null ? l.value : l.defaultValue);
          case "svg":
            return He(Ar, null);
          case "math":
            return He(Dr, null);
          case "foreignObject":
            return He(kt, null);
          case "table":
            return He(fr, null);
          case "thead":
          case "tbody":
          case "tfoot":
            return He(yn, null);
          case "colgroup":
            return He(Or, null);
          case "tr":
            return He(Tt, null);
        }
        return t.insertionMode >= fr || t.insertionMode === Fr
          ? He(kt, null)
          : t;
      }
      const Ct = null;
      function Wt(t) {
        const r = t.nextSuspenseID++;
        return t.boundaryPrefix + r.toString(16);
      }
      function zt(t, r, l) {
        const u = t.idPrefix;
        let p = ":" + u + "R" + r;
        return l > 0 && (p += "H" + l.toString(32)), p + ":";
      }
      function Et(t) {
        return ge(t);
      }
      const dr = "<!-- -->";
      function bn(t, r, l, u) {
        return r === "" ? u : (u && t.push(dr), t.push(Et(r)), !0);
      }
      function Sn(t, r, l, u) {
        l && u && t.push(dr);
      }
      const Ee = new Map();
      function wn(t) {
        const r = Ee.get(t);
        if (r !== void 0) return r;
        const l = ge(xa(t));
        return Ee.set(t, l), l;
      }
      const Mr = ' style="';
      const Lr = ":";
      const Br = ";";
      function wo(t, r, l) {
        if (typeof l !== "object") {
          throw new Error(
            "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
          );
        }
        let u = !0;
        for (const p in l) {
          if (he.call(l, p)) {
            const g = l[p];
            if (!(g == null || typeof g === "boolean" || g === "")) {
              let y = void 0;
              let w = void 0;
              const C = p.indexOf("--") === 0;
              C
                ? ((y = ge(p)), xe(g, p), (w = ge(("" + g).trim())))
                : (gn(p, g),
                  (y = wn(p)),
                  typeof g === "number"
                    ? g !== 0 && !he.call(St, p)
                      ? (w = g + "px")
                      : (w = "" + g)
                    : (xe(g, p), (w = ge(("" + g).trim())))),
                u ? ((u = !1), t.push(Mr, y, Lr, w)) : t.push(Br, y, Lr, w);
            }
          }
        }
        u || t.push(ht);
      }
      const We = " ";
      const Rt = '="';
      var ht = '"';
      const $t = '=""';
      function Ce(t, r, l, u) {
        switch (l) {
          case "style": {
            wo(t, r, u);
            return;
          }
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            return;
        }
        if (
          !(
            l.length > 2 &&
            (l[0] === "o" || l[0] === "O") &&
            (l[1] === "n" || l[1] === "N")
          )
        ) {
          const p = er(l);
          if (p !== null) {
            switch (typeof u) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                if (!p.acceptsBooleans) return;
            }
            const g = p.attributeName;
            const y = g;
            switch (p.type) {
              case yt:
                u && t.push(We, y, $t);
                return;
              case Mt:
                u === !0
                  ? t.push(We, y, $t)
                  : u === !1 || t.push(We, y, Rt, ge(u), ht);
                return;
              case Lt:
                isNaN(u) || t.push(We, y, Rt, ge(u), ht);
                break;
              case ft:
                !isNaN(u) && u >= 1 && t.push(We, y, Rt, ge(u), ht);
                break;
              default:
                p.sanitizeURL && (q(u, g), (u = "" + u), yo(u)),
                  t.push(We, y, Rt, ge(u), ht);
            }
          } else if (bt(l)) {
            switch (typeof u) {
              case "function":
              case "symbol":
                return;
              case "boolean": {
                const w = l.toLowerCase().slice(0, 5);
                if (w !== "data-" && w !== "aria-") return;
              }
            }
            t.push(We, l, Rt, ge(u), ht);
          }
        }
      }
      const rt = ">";
      const pr = "/>";
      function hr(t, r, l) {
        if (r != null) {
          if (l != null) {
            throw new Error(
              "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
            );
          }
          if (typeof r !== "object" || !("__html" in r)) {
            throw new Error(
              "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
            );
          }
          const u = r.__html;
          u != null && (_e(u), t.push("" + u));
        }
      }
      let It = !1;
      let vr = !1;
      let Ze = !1;
      let _t = !1;
      let vt = !1;
      let Ur = !1;
      let Re = !1;
      function Je(t, r) {
        {
          const l = t[r];
          if (l != null) {
            const u = me(l);
            t.multiple && !u
              ? c(
                  "The `%s` prop supplied to <select> must be an array if `multiple` is true.",
                  r
                )
              : !t.multiple &&
                u &&
                c(
                  "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.",
                  r
                );
          }
        }
      }
      function xn(t, r, l) {
        ve("select", r),
          Je(r, "value"),
          Je(r, "defaultValue"),
          r.value !== void 0 &&
            r.defaultValue !== void 0 &&
            !Ze &&
            (c(
              "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"
            ),
            (Ze = !0)),
          t.push(Be("select"));
        let u = null;
        let p = null;
        for (const g in r) {
          if (he.call(r, g)) {
            const y = r[g];
            if (y == null) continue;
            switch (g) {
              case "children":
                u = y;
                break;
              case "dangerouslySetInnerHTML":
                p = y;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                Ce(t, l, g, y);
                break;
            }
          }
        }
        return t.push(rt), hr(t, p, u), u;
      }
      function gr(t) {
        let r = "";
        return (
          e.Children.forEach(t, function (l) {
            l != null &&
              ((r += l),
              !vt &&
                typeof l !== "string" &&
                typeof l !== "number" &&
                ((vt = !0),
                c(
                  "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
                )));
          }),
          r
        );
      }
      const jr = ' selected=""';
      function kn(t, r, l, u) {
        const p = u.selectedValue;
        t.push(Be("option"));
        let g = null;
        let y = null;
        let w = null;
        let C = null;
        for (const _ in r) {
          if (he.call(r, _)) {
            const O = r[_];
            if (O == null) continue;
            switch (_) {
              case "children":
                g = O;
                break;
              case "selected":
                (w = O),
                  Re ||
                    (c(
                      "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
                    ),
                    (Re = !0));
                break;
              case "dangerouslySetInnerHTML":
                C = O;
                break;
              case "value":
                y = O;
              default:
                Ce(t, l, _, O);
                break;
            }
          }
        }
        if (p != null) {
          let j;
          if (
            (y !== null
              ? (q(y, "value"), (j = "" + y))
              : (C !== null &&
                  (Ur ||
                    ((Ur = !0),
                    c(
                      "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
                    ))),
                (j = gr(g))),
            me(p))
          ) {
            for (let Z = 0; Z < p.length; Z++) {
              q(p[Z], "value");
              const de = "" + p[Z];
              if (de === j) {
                t.push(jr);
                break;
              }
            }
          } else q(p, "select.value"), "" + p === j && t.push(jr);
        } else w && t.push(jr);
        return t.push(rt), hr(t, C, g), g;
      }
      function Tn(t, r, l) {
        ve("input", r),
          r.checked !== void 0 &&
            r.defaultChecked !== void 0 &&
            !vr &&
            (c(
              "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
              "A component",
              r.type
            ),
            (vr = !0)),
          r.value !== void 0 &&
            r.defaultValue !== void 0 &&
            !It &&
            (c(
              "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
              "A component",
              r.type
            ),
            (It = !0)),
          t.push(Be("input"));
        let u = null;
        let p = null;
        let g = null;
        let y = null;
        for (const w in r) {
          if (he.call(r, w)) {
            const C = r[w];
            if (C == null) continue;
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(
                  "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              case "defaultChecked":
                y = C;
                break;
              case "defaultValue":
                p = C;
                break;
              case "checked":
                g = C;
                break;
              case "value":
                u = C;
                break;
              default:
                Ce(t, l, w, C);
                break;
            }
          }
        }
        return (
          g !== null
            ? Ce(t, l, "checked", g)
            : y !== null && Ce(t, l, "checked", y),
          u !== null
            ? Ce(t, l, "value", u)
            : p !== null && Ce(t, l, "value", p),
          t.push(pr),
          null
        );
      }
      function xo(t, r, l) {
        ve("textarea", r),
          r.value !== void 0 &&
            r.defaultValue !== void 0 &&
            !_t &&
            (c(
              "Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"
            ),
            (_t = !0)),
          t.push(Be("textarea"));
        let u = null;
        let p = null;
        let g = null;
        for (const y in r) {
          if (he.call(r, y)) {
            const w = r[y];
            if (w == null) continue;
            switch (y) {
              case "children":
                g = w;
                break;
              case "value":
                u = w;
                break;
              case "defaultValue":
                p = w;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error(
                  "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                );
              default:
                Ce(t, l, y, w);
                break;
            }
          }
        }
        if ((u === null && p !== null && (u = p), t.push(rt), g != null)) {
          if (
            (c(
              "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
            ),
            u != null)
          ) {
            throw new Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          }
          if (me(g)) {
            if (g.length > 1) {
              throw new Error("<textarea> can only have at most one child.");
            }
            _e(g[0]), (u = "" + g[0]);
          }
          _e(g), (u = "" + g);
        }
        return (
          typeof u === "string" &&
            u[0] ===
              `
` &&
            t.push(gt),
          u !== null && (q(u, "value"), t.push(Et("" + u))),
          null
        );
      }
      function ko(t, r, l, u) {
        t.push(Be(l));
        for (const p in r) {
          if (he.call(r, p)) {
            const g = r[p];
            if (g == null) continue;
            switch (p) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(
                  l +
                    " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                Ce(t, u, p, g);
                break;
            }
          }
        }
        return t.push(pr), null;
      }
      function To(t, r, l) {
        t.push(Be("menuitem"));
        for (const u in r) {
          if (he.call(r, u)) {
            const p = r[u];
            if (p == null) continue;
            switch (u) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(
                  "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                );
              default:
                Ce(t, l, u, p);
                break;
            }
          }
        }
        return t.push(rt), null;
      }
      function Cn(t, r, l) {
        t.push(Be("title"));
        let u = null;
        for (const p in r) {
          if (he.call(r, p)) {
            const g = r[p];
            if (g == null) continue;
            switch (p) {
              case "children":
                u = g;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error(
                  "`dangerouslySetInnerHTML` does not make sense on <title>."
                );
              default:
                Ce(t, l, p, g);
                break;
            }
          }
        }
        t.push(rt);
        {
          const y = Array.isArray(u) && u.length < 2 ? u[0] || null : u;
          Array.isArray(u) && u.length > 1
            ? c(
                "A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering"
              )
            : y != null && y.$$typeof != null
            ? c(
                "A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering"
              )
            : y != null &&
              typeof y !== "string" &&
              typeof y !== "number" &&
              c(
                "A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering"
              );
        }
        return u;
      }
      function Pt(t, r, l, u) {
        t.push(Be(l));
        let p = null;
        let g = null;
        for (const y in r) {
          if (he.call(r, y)) {
            const w = r[y];
            if (w == null) continue;
            switch (y) {
              case "children":
                p = w;
                break;
              case "dangerouslySetInnerHTML":
                g = w;
                break;
              default:
                Ce(t, u, y, w);
                break;
            }
          }
        }
        return (
          t.push(rt),
          hr(t, g, p),
          typeof p === "string" ? (t.push(Et(p)), null) : p
        );
      }
      function Pa(t, r, l, u) {
        t.push(Be(l));
        let p = null;
        let g = null;
        for (const y in r) {
          if (he.call(r, y)) {
            const w = r[y];
            if (w == null) continue;
            switch (y) {
              case "children":
                p = w;
                break;
              case "dangerouslySetInnerHTML":
                g = w;
                break;
              case "style":
                wo(t, u, w);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                bt(y) &&
                  typeof w !== "function" &&
                  typeof w !== "symbol" &&
                  t.push(We, y, Rt, ge(w), ht);
                break;
            }
          }
        }
        return t.push(rt), hr(t, g, p), p;
      }
      var gt = `
`;
      function Hr(t, r, l, u) {
        t.push(Be(l));
        let p = null;
        let g = null;
        for (const y in r) {
          if (he.call(r, y)) {
            const w = r[y];
            if (w == null) continue;
            switch (y) {
              case "children":
                p = w;
                break;
              case "dangerouslySetInnerHTML":
                g = w;
                break;
              default:
                Ce(t, u, y, w);
                break;
            }
          }
        }
        if ((t.push(rt), g != null)) {
          if (p != null) {
            throw new Error(
              "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
            );
          }
          if (typeof g !== "object" || !("__html" in g)) {
            throw new Error(
              "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
            );
          }
          const C = g.__html;
          C != null &&
            (typeof C === "string" &&
            C.length > 0 &&
            C[0] ===
              `
`
              ? t.push(gt, C)
              : (_e(C), t.push("" + C)));
        }
        return (
          typeof p === "string" &&
            p[0] ===
              `
` &&
            t.push(gt),
          p
        );
      }
      const Fa = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
      const mr = new Map();
      function Be(t) {
        let r = mr.get(t);
        if (r === void 0) {
          if (!Fa.test(t)) throw new Error("Invalid tag: " + t);
          (r = "<" + t), mr.set(t, r);
        }
        return r;
      }
      const En = "<!DOCTYPE html>";
      function Rn(t, r, l, u, p) {
        switch (
          (fo(r, l),
          fn(r, l),
          ma(r, l, null),
          !l.suppressContentEditableWarning &&
            l.contentEditable &&
            l.children != null &&
            c(
              "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
            ),
          p.insertionMode !== Ar &&
            p.insertionMode !== Dr &&
            r.indexOf("-") === -1 &&
            typeof l.is !== "string" &&
            r.toLowerCase() !== r &&
            c(
              "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
              r
            ),
          r)
        ) {
          case "select":
            return xn(t, l, u);
          case "option":
            return kn(t, l, u, p);
          case "textarea":
            return xo(t, l, u);
          case "input":
            return Tn(t, l, u);
          case "menuitem":
            return To(t, l, u);
          case "title":
            return Cn(t, l, u);
          case "listing":
          case "pre":
            return Hr(t, l, r, u);
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            return ko(t, l, r, u);
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return Pt(t, l, r, u);
          case "html":
            return p.insertionMode === Fr && t.push(En), Pt(t, l, r, u);
          default:
            return r.indexOf("-") === -1 && typeof l.is !== "string"
              ? Pt(t, l, r, u)
              : Pa(t, l, r, u);
        }
      }
      const Aa = "</";
      const In = ">";
      function Da(t, r, l) {
        switch (r) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            t.push(Aa, r, In);
        }
      }
      function _n(t, r) {
        for (var l = r.bootstrapChunks, u = 0; u < l.length - 1; u++) {
          x(t, l[u]);
        }
        return u < l.length ? R(t, l[u]) : !0;
      }
      const h = '<template id="';
      const b = '"></template>';
      function k(t, r, l) {
        x(t, h), x(t, r.placeholderPrefix);
        const u = l.toString(16);
        return x(t, u), R(t, b);
      }
      const T = "<!--$-->";
      const I = '<!--$?--><template id="';
      const U = '"></template>';
      const M = "<!--$!-->";
      const H = "<!--/$-->";
      const z = "<template";
      const Y = '"';
      const Q = ' data-dgst="';
      const K = ' data-msg="';
      const ee = ' data-stck="';
      const fe = "></template>";
      function Se(t, r) {
        return R(t, T);
      }
      function yr(t, r, l) {
        if ((x(t, I), l === null)) {
          throw new Error(
            "An ID must have been assigned before we can complete the boundary."
          );
        }
        return x(t, l), R(t, U);
      }
      function Pn(t, r, l, u, p) {
        let g;
        return (
          (g = R(t, M)),
          x(t, z),
          l && (x(t, Q), x(t, ge(l)), x(t, Y)),
          u && (x(t, K), x(t, ge(u)), x(t, Y)),
          p && (x(t, ee), x(t, ge(p)), x(t, Y)),
          (g = R(t, fe)),
          g
        );
      }
      function Wr(t, r) {
        return R(t, H);
      }
      function Co(t, r) {
        return R(t, H);
      }
      function zr(t, r) {
        return R(t, H);
      }
      const Oa = '<div hidden id="';
      const Eo = '">';
      const Ma = "</div>";
      const vs = '<svg aria-hidden="true" style="display:none" id="';
      const gs = '">';
      const Ni = "</svg>";
      const ms = '<math aria-hidden="true" style="display:none" id="';
      const ys = '">';
      const Vi = "</math>";
      const bs = '<table hidden id="';
      const Ss = '">';
      const ws = "</table>";
      const xs = '<table hidden><tbody id="';
      const ks = '">';
      const Ts = "</tbody></table>";
      const Cs = '<table hidden><tr id="';
      const Es = '">';
      const Rs = "</tr></table>";
      const Is = '<table hidden><colgroup id="';
      const _s = '">';
      const Ps = "</colgroup></table>";
      function Fs(t, r, l, u) {
        switch (l.insertionMode) {
          case Fr:
          case kt:
            return (
              x(t, Oa), x(t, r.segmentPrefix), x(t, u.toString(16)), R(t, Eo)
            );
          case Ar:
            return (
              x(t, vs), x(t, r.segmentPrefix), x(t, u.toString(16)), R(t, gs)
            );
          case Dr:
            return (
              x(t, ms), x(t, r.segmentPrefix), x(t, u.toString(16)), R(t, ys)
            );
          case fr:
            return (
              x(t, bs), x(t, r.segmentPrefix), x(t, u.toString(16)), R(t, Ss)
            );
          case yn:
            return (
              x(t, xs), x(t, r.segmentPrefix), x(t, u.toString(16)), R(t, ks)
            );
          case Tt:
            return (
              x(t, Cs), x(t, r.segmentPrefix), x(t, u.toString(16)), R(t, Es)
            );
          case Or:
            return (
              x(t, Is), x(t, r.segmentPrefix), x(t, u.toString(16)), R(t, _s)
            );
          default:
            throw new Error("Unknown insertion mode. This is a bug in React.");
        }
      }
      function As(t, r) {
        switch (r.insertionMode) {
          case Fr:
          case kt:
            return R(t, Ma);
          case Ar:
            return R(t, Ni);
          case Dr:
            return R(t, Vi);
          case fr:
            return R(t, ws);
          case yn:
            return R(t, Ts);
          case Tt:
            return R(t, Rs);
          case Or:
            return R(t, Ps);
          default:
            throw new Error("Unknown insertion mode. This is a bug in React.");
        }
      }
      const Ds =
        "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}";
      const Os =
        'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
      const Ms =
        'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}';
      const Ls = Ds + ';$RS("';
      const Bs = '$RS("';
      const Us = '","';
      const js = '")</script>';
      function Hs(t, r, l) {
        x(t, r.startInlineScript),
          r.sentCompleteSegmentFunction
            ? x(t, Bs)
            : ((r.sentCompleteSegmentFunction = !0), x(t, Ls)),
          x(t, r.segmentPrefix);
        const u = l.toString(16);
        return x(t, u), x(t, Us), x(t, r.placeholderPrefix), x(t, u), R(t, js);
      }
      const Ws = Os + ';$RC("';
      const zs = '$RC("';
      const $s = '","';
      const Ns = '")</script>';
      function Vs(t, r, l, u) {
        if (
          (x(t, r.startInlineScript),
          r.sentCompleteBoundaryFunction
            ? x(t, zs)
            : ((r.sentCompleteBoundaryFunction = !0), x(t, Ws)),
          l === null)
        ) {
          throw new Error(
            "An ID must have been assigned before we can complete the boundary."
          );
        }
        const p = u.toString(16);
        return x(t, l), x(t, $s), x(t, r.segmentPrefix), x(t, p), R(t, Ns);
      }
      const Ys = Ms + ';$RX("';
      const Gs = '$RX("';
      const Xs = '"';
      const Zs = ")</script>";
      const La = ",";
      function Js(t, r, l, u, p, g) {
        if (
          (x(t, r.startInlineScript),
          r.sentClientRenderFunction
            ? x(t, Gs)
            : ((r.sentClientRenderFunction = !0), x(t, Ys)),
          l === null)
        ) {
          throw new Error(
            "An ID must have been assigned before we can complete the boundary."
          );
        }
        return (
          x(t, l),
          x(t, Xs),
          (u || p || g) && (x(t, La), x(t, Ba(u || ""))),
          (p || g) && (x(t, La), x(t, Ba(p || ""))),
          g && (x(t, La), x(t, Ba(g))),
          R(t, Zs)
        );
      }
      const Qs = /[<\u2028\u2029]/g;
      function Ba(t) {
        const r = JSON.stringify(t);
        return r.replace(Qs, function (l) {
          switch (l) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw new Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        });
      }
      function Yi(t, r) {
        const l = cr(r, void 0);
        return {
          bootstrapChunks: l.bootstrapChunks,
          startInlineScript: l.startInlineScript,
          placeholderPrefix: l.placeholderPrefix,
          segmentPrefix: l.segmentPrefix,
          boundaryPrefix: l.boundaryPrefix,
          idPrefix: l.idPrefix,
          nextSuspenseID: l.nextSuspenseID,
          sentCompleteSegmentFunction: l.sentCompleteSegmentFunction,
          sentCompleteBoundaryFunction: l.sentCompleteBoundaryFunction,
          sentClientRenderFunction: l.sentClientRenderFunction,
          generateStaticMarkup: t,
        };
      }
      function Gi() {
        return { insertionMode: kt, selectedValue: null };
      }
      function Xi(t, r, l, u) {
        return l.generateStaticMarkup ? (t.push(ge(r)), !1) : bn(t, r, l, u);
      }
      function Zi(t, r, l, u) {
        if (!r.generateStaticMarkup) return Sn(t, r, l, u);
      }
      function Ks(t, r) {
        return r.generateStaticMarkup ? !0 : Se(t);
      }
      function qs(t, r, l, u, p) {
        return r.generateStaticMarkup ? !0 : Pn(t, r, l, u, p);
      }
      function Ua(t, r) {
        return r.generateStaticMarkup ? !0 : Wr(t);
      }
      function eu(t, r) {
        return r.generateStaticMarkup ? !0 : zr(t);
      }
      const Qe = Object.assign;
      const ja = Symbol.for("react.element");
      const ze = Symbol.for("react.portal");
      const Ji = Symbol.for("react.fragment");
      const Ha = Symbol.for("react.strict_mode");
      const Wa = Symbol.for("react.profiler");
      const Ro = Symbol.for("react.provider");
      const Io = Symbol.for("react.context");
      const Fn = Symbol.for("react.forward_ref");
      const An = Symbol.for("react.suspense");
      const Dn = Symbol.for("react.suspense_list");
      const On = Symbol.for("react.memo");
      const $r = Symbol.for("react.lazy");
      const za = Symbol.for("react.scope");
      const _o = Symbol.for("react.debug_trace_mode");
      const tu = Symbol.for("react.legacy_hidden");
      const ru = Symbol.for("react.default_value");
      const Qi = Symbol.iterator;
      const nu = "@@iterator";
      function Ki(t) {
        if (t === null || typeof t !== "object") return null;
        const r = (Qi && t[Qi]) || t[nu];
        return typeof r === "function" ? r : null;
      }
      function ou(t, r, l) {
        const u = t.displayName;
        if (u) return u;
        const p = r.displayName || r.name || "";
        return p !== "" ? l + "(" + p + ")" : l;
      }
      function qi(t) {
        return t.displayName || "Context";
      }
      function ie(t) {
        if (t == null) return null;
        if (
          (typeof t.tag === "number" &&
            c(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          typeof t === "function")
        ) {
          return t.displayName || t.name || null;
        }
        if (typeof t === "string") return t;
        switch (t) {
          case Ji:
            return "Fragment";
          case ze:
            return "Portal";
          case Wa:
            return "Profiler";
          case Ha:
            return "StrictMode";
          case An:
            return "Suspense";
          case Dn:
            return "SuspenseList";
        }
        if (typeof t === "object") {
          switch (t.$$typeof) {
            case Io:
              var r = t;
              return qi(r) + ".Consumer";
            case Ro:
              var l = t;
              return qi(l._context) + ".Provider";
            case Fn:
              return ou(t, t.render, "ForwardRef");
            case On:
              var u = t.displayName || null;
              return u !== null ? u : ie(t.type) || "Memo";
            case $r: {
              const p = t;
              const g = p._payload;
              const y = p._init;
              try {
                return ie(y(g));
              } catch {
                return null;
              }
            }
          }
        }
        return null;
      }
      let Nr = 0;
      let ne;
      let Vr;
      let $a;
      let Na;
      let Va;
      let Ya;
      let Ga;
      function Xa() {}
      Xa.__reactDisabledLog = !0;
      function el() {
        {
          if (Nr === 0) {
            (ne = console.log),
              (Vr = console.info),
              ($a = console.warn),
              (Na = console.error),
              (Va = console.group),
              (Ya = console.groupCollapsed),
              (Ga = console.groupEnd);
            const t = {
              configurable: !0,
              enumerable: !0,
              value: Xa,
              writable: !0,
            };
            Object.defineProperties(console, {
              info: t,
              log: t,
              warn: t,
              error: t,
              group: t,
              groupCollapsed: t,
              groupEnd: t,
            });
          }
          Nr++;
        }
      }
      function tl() {
        {
          if ((Nr--, Nr === 0)) {
            const t = { configurable: !0, enumerable: !0, writable: !0 };
            Object.defineProperties(console, {
              log: Qe({}, t, { value: ne }),
              info: Qe({}, t, { value: Vr }),
              warn: Qe({}, t, { value: $a }),
              error: Qe({}, t, { value: Na }),
              group: Qe({}, t, { value: Va }),
              groupCollapsed: Qe({}, t, { value: Ya }),
              groupEnd: Qe({}, t, { value: Ga }),
            });
          }
          Nr < 0 &&
            c(
              "disabledDepth fell below zero. This is a bug in React. Please file an issue."
            );
        }
      }
      const Za = s.ReactCurrentDispatcher;
      let Ja;
      function br(t, r, l) {
        {
          if (Ja === void 0) {
            try {
              throw Error();
            } catch (p) {
              const u = p.stack.trim().match(/\n( *(at )?)/);
              Ja = (u && u[1]) || "";
            }
          }
          return (
            `
` +
            Ja +
            t
          );
        }
      }
      let Mn = !1;
      let Nt;
      {
        const Qa = typeof WeakMap === "function" ? WeakMap : Map;
        Nt = new Qa();
      }
      function Yr(t, r) {
        if (!t || Mn) return "";
        {
          const l = Nt.get(t);
          if (l !== void 0) return l;
        }
        let u;
        Mn = !0;
        const p = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        let g;
        (g = Za.current), (Za.current = null), el();
        try {
          if (r) {
            const y = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(y.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect === "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(y, []);
              } catch (we) {
                u = we;
              }
              Reflect.construct(t, [], y);
            } else {
              try {
                y.call();
              } catch (we) {
                u = we;
              }
              t.call(y.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (we) {
              u = we;
            }
            t();
          }
        } catch (we) {
          if (we && u && typeof we.stack === "string") {
            for (
              var w = we.stack.split(`
`),
                C = u.stack.split(`
`),
                _ = w.length - 1,
                O = C.length - 1;
              _ >= 1 && O >= 0 && w[_] !== C[O];

            ) {
              O--;
            }
            for (; _ >= 1 && O >= 0; _--, O--) {
              if (w[_] !== C[O]) {
                if (_ !== 1 || O !== 1) {
                  do {
                    if ((_--, O--, O < 0 || w[_] !== C[O])) {
                      let j =
                        `
` + w[_].replace(" at new ", " at ");
                      return (
                        t.displayName &&
                          j.includes("<anonymous>") &&
                          (j = j.replace("<anonymous>", t.displayName)),
                        typeof t === "function" && Nt.set(t, j),
                        j
                      );
                    }
                  } while (_ >= 1 && O >= 0);
                }
                break;
              }
            }
          }
        } finally {
          (Mn = !1), (Za.current = g), tl(), (Error.prepareStackTrace = p);
        }
        const Z = t ? t.displayName || t.name : "";
        const de = Z ? br(Z) : "";
        return typeof t === "function" && Nt.set(t, de), de;
      }
      function au(t, r, l) {
        return Yr(t, !0);
      }
      function Po(t, r, l) {
        return Yr(t, !1);
      }
      function iu(t) {
        const r = t.prototype;
        return !!(r && r.isReactComponent);
      }
      function Fo(t, r, l) {
        if (t == null) return "";
        if (typeof t === "function") return Yr(t, iu(t));
        if (typeof t === "string") return br(t);
        switch (t) {
          case An:
            return br("Suspense");
          case Dn:
            return br("SuspenseList");
        }
        if (typeof t === "object") {
          switch (t.$$typeof) {
            case Fn:
              return Po(t.render);
            case On:
              return Fo(t.type, r, l);
            case $r: {
              const u = t;
              const p = u._payload;
              const g = u._init;
              try {
                return Fo(g(p), r, l);
              } catch {}
            }
          }
        }
        return "";
      }
      const rl = {};
      const Ao = s.ReactDebugCurrentFrame;
      function Ln(t) {
        if (t) {
          const r = t._owner;
          const l = Fo(t.type, t._source, r ? r.type : null);
          Ao.setExtraStackFrame(l);
        } else Ao.setExtraStackFrame(null);
      }
      function Ka(t, r, l, u, p) {
        {
          const g = Function.call.bind(he);
          for (const y in t) {
            if (g(t, y)) {
              let w = void 0;
              try {
                if (typeof t[y] !== "function") {
                  const C = Error(
                    (u || "React class") +
                      ": " +
                      l +
                      " type `" +
                      y +
                      "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                      typeof t[y] +
                      "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  throw ((C.name = "Invariant Violation"), C);
                }
                w = t[y](
                  r,
                  y,
                  u,
                  l,
                  null,
                  "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                );
              } catch (_) {
                w = _;
              }
              w &&
                !(w instanceof Error) &&
                (Ln(p),
                c(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  u || "React class",
                  l,
                  y,
                  typeof w
                ),
                Ln(null)),
                w instanceof Error &&
                  !(w.message in rl) &&
                  ((rl[w.message] = !0),
                  Ln(p),
                  c("Failed %s type: %s", l, w.message),
                  Ln(null));
            }
          }
        }
      }
      let Gr;
      Gr = {};
      const Bn = {};
      Object.freeze(Bn);
      function Do(t, r) {
        {
          const l = t.contextTypes;
          if (!l) return Bn;
          const u = {};
          for (const p in l) u[p] = r[p];
          {
            const g = ie(t) || "Unknown";
            Ka(l, u, "context", g);
          }
          return u;
        }
      }
      function Oo(t, r, l, u) {
        {
          if (typeof t.getChildContext !== "function") {
            {
              const p = ie(r) || "Unknown";
              Gr[p] ||
                ((Gr[p] = !0),
                c(
                  "%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",
                  p,
                  p
                ));
            }
            return l;
          }
          const g = t.getChildContext();
          for (const y in g) {
            if (!(y in u)) {
              throw new Error(
                (ie(r) || "Unknown") +
                  '.getChildContext(): key "' +
                  y +
                  '" is not defined in childContextTypes.'
              );
            }
          }
          {
            const w = ie(r) || "Unknown";
            Ka(u, g, "child context", w);
          }
          return Qe({}, l, g);
        }
      }
      let Xr;
      Xr = {};
      const lu = null;
      let nt = null;
      function qa(t) {
        t.context._currentValue2 = t.parentValue;
      }
      function Ft(t) {
        t.context._currentValue2 = t.value;
      }
      function Zr(t, r) {
        if (t !== r) {
          qa(t);
          const l = t.parent;
          const u = r.parent;
          if (l === null) {
            if (u !== null) {
              throw new Error(
                "The stacks must reach the root at the same time. This is a bug in React."
              );
            }
          } else {
            if (u === null) {
              throw new Error(
                "The stacks must reach the root at the same time. This is a bug in React."
              );
            }
            Zr(l, u);
          }
          Ft(r);
        }
      }
      function Mo(t) {
        qa(t);
        const r = t.parent;
        r !== null && Mo(r);
      }
      function Un(t) {
        const r = t.parent;
        r !== null && Un(r), Ft(t);
      }
      function ei(t, r) {
        qa(t);
        const l = t.parent;
        if (l === null) {
          throw new Error(
            "The depth must equal at least at zero before reaching the root. This is a bug in React."
          );
        }
        l.depth === r.depth ? Zr(l, r) : ei(l, r);
      }
      function ti(t, r) {
        const l = r.parent;
        if (l === null) {
          throw new Error(
            "The depth must equal at least at zero before reaching the root. This is a bug in React."
          );
        }
        t.depth === l.depth ? Zr(t, l) : ti(t, l), Ft(r);
      }
      function jn(t) {
        const r = nt;
        const l = t;
        r !== l &&
          (r === null
            ? Un(l)
            : l === null
            ? Mo(r)
            : r.depth === l.depth
            ? Zr(r, l)
            : r.depth > l.depth
            ? ei(r, l)
            : ti(r, l),
          (nt = l));
      }
      function nl(t, r) {
        let l;
        (l = t._currentValue2),
          (t._currentValue2 = r),
          t._currentRenderer2 !== void 0 &&
            t._currentRenderer2 !== null &&
            t._currentRenderer2 !== Xr &&
            c(
              "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
            ),
          (t._currentRenderer2 = Xr);
        const u = nt;
        const p = {
          parent: u,
          depth: u === null ? 0 : u.depth + 1,
          context: t,
          parentValue: l,
          value: r,
        };
        return (nt = p), p;
      }
      function Lo(t) {
        const r = nt;
        if (r === null) {
          throw new Error(
            "Tried to pop a Context at the root of the app. This is a bug in React."
          );
        }
        r.context !== t &&
          c(
            "The parent context is not the expected context. This is probably a bug in React."
          );
        {
          const l = r.parentValue;
          l === ru
            ? (r.context._currentValue2 = r.context._defaultValue)
            : (r.context._currentValue2 = l),
            t._currentRenderer2 !== void 0 &&
              t._currentRenderer2 !== null &&
              t._currentRenderer2 !== Xr &&
              c(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ),
            (t._currentRenderer2 = Xr);
        }
        return (nt = r.parent);
      }
      function su() {
        return nt;
      }
      function Hn(t) {
        const r = t._currentValue2;
        return r;
      }
      function ri(t) {
        return t._reactInternals;
      }
      function Wn(t, r) {
        t._reactInternals = r;
      }
      const Bo = {};
      const ol = {};
      let Uo;
      let jo;
      let zn;
      let $n;
      let Ho;
      let Jr;
      let Wo;
      let Qr;
      let Nn;
      {
        (Uo = new Set()),
          (jo = new Set()),
          (zn = new Set()),
          (Wo = new Set()),
          ($n = new Set()),
          (Qr = new Set()),
          (Nn = new Set());
        const zo = new Set();
        (Jr = function (t, r) {
          if (!(t === null || typeof t === "function")) {
            const l = r + "_" + t;
            zo.has(l) ||
              (zo.add(l),
              c(
                "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
                r,
                t
              ));
          }
        }),
          (Ho = function (t, r) {
            if (r === void 0) {
              const l = ie(t) || "Component";
              $n.has(l) ||
                ($n.add(l),
                c(
                  "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                  l
                ));
            }
          });
      }
      function $o(t, r) {
        {
          const l = t.constructor;
          const u = (l && ie(l)) || "ReactClass";
          const p = u + "." + r;
          if (Bo[p]) return;
          c(
            `%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`,
            r,
            r,
            u
          ),
            (Bo[p] = !0);
        }
      }
      const ni = {
        isMounted: function (t) {
          return !1;
        },
        enqueueSetState: function (t, r, l) {
          const u = ri(t);
          u.queue === null
            ? $o(t, "setState")
            : (u.queue.push(r), l != null && Jr(l, "setState"));
        },
        enqueueReplaceState: function (t, r, l) {
          const u = ri(t);
          (u.replace = !0), (u.queue = [r]), l != null && Jr(l, "setState");
        },
        enqueueForceUpdate: function (t, r) {
          const l = ri(t);
          l.queue === null
            ? $o(t, "forceUpdate")
            : r != null && Jr(r, "setState");
        },
      };
      function al(t, r, l, u, p) {
        const g = l(p, u);
        Ho(r, g);
        const y = g == null ? u : Qe({}, u, g);
        return y;
      }
      function il(t, r, l) {
        let u = Bn;
        const p = t.contextType;
        if ("contextType" in t) {
          const g =
            p === null ||
            (p !== void 0 && p.$$typeof === Io && p._context === void 0);
          if (!g && !Nn.has(t)) {
            Nn.add(t);
            let y = "";
            p === void 0
              ? (y =
                  " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.")
              : typeof p !== "object"
              ? (y = " However, it is set to a " + typeof p + ".")
              : p.$$typeof === Ro
              ? (y = " Did you accidentally pass the Context.Provider instead?")
              : p._context !== void 0
              ? (y = " Did you accidentally pass the Context.Consumer instead?")
              : (y =
                  " However, it is set to an object with keys {" +
                  Object.keys(p).join(", ") +
                  "}."),
              c(
                "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
                ie(t) || "Component",
                y
              );
          }
        }
        typeof p === "object" && p !== null ? (u = Hn(p)) : (u = l);
        const w = new t(r, u);
        {
          if (
            typeof t.getDerivedStateFromProps === "function" &&
            (w.state === null || w.state === void 0)
          ) {
            const C = ie(t) || "Component";
            Uo.has(C) ||
              (Uo.add(C),
              c(
                "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
                C,
                w.state === null ? "null" : "undefined",
                C
              ));
          }
          if (
            typeof t.getDerivedStateFromProps === "function" ||
            typeof w.getSnapshotBeforeUpdate === "function"
          ) {
            let _ = null;
            let O = null;
            let j = null;
            if (
              (typeof w.componentWillMount === "function" &&
              w.componentWillMount.__suppressDeprecationWarning !== !0
                ? (_ = "componentWillMount")
                : typeof w.UNSAFE_componentWillMount === "function" &&
                  (_ = "UNSAFE_componentWillMount"),
              typeof w.componentWillReceiveProps === "function" &&
              w.componentWillReceiveProps.__suppressDeprecationWarning !== !0
                ? (O = "componentWillReceiveProps")
                : typeof w.UNSAFE_componentWillReceiveProps === "function" &&
                  (O = "UNSAFE_componentWillReceiveProps"),
              typeof w.componentWillUpdate === "function" &&
              w.componentWillUpdate.__suppressDeprecationWarning !== !0
                ? (j = "componentWillUpdate")
                : typeof w.UNSAFE_componentWillUpdate === "function" &&
                  (j = "UNSAFE_componentWillUpdate"),
              _ !== null || O !== null || j !== null)
            ) {
              const Z = ie(t) || "Component";
              const de =
                typeof t.getDerivedStateFromProps === "function"
                  ? "getDerivedStateFromProps()"
                  : "getSnapshotBeforeUpdate()";
              zn.has(Z) ||
                (zn.add(Z),
                c(
                  `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,
                  Z,
                  de,
                  _ !== null
                    ? `
  ` + _
                    : "",
                  O !== null
                    ? `
  ` + O
                    : "",
                  j !== null
                    ? `
  ` + j
                    : ""
                ));
            }
          }
        }
        return w;
      }
      function uu(t, r, l) {
        {
          const u = ie(r) || "Component";
          const p = t.render;
          p ||
            (r.prototype && typeof r.prototype.render === "function"
              ? c(
                  "%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",
                  u
                )
              : c(
                  "%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",
                  u
                )),
            t.getInitialState &&
              !t.getInitialState.isReactClassApproved &&
              !t.state &&
              c(
                "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
                u
              ),
            t.getDefaultProps &&
              !t.getDefaultProps.isReactClassApproved &&
              c(
                "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
                u
              ),
            t.propTypes &&
              c(
                "propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",
                u
              ),
            t.contextType &&
              c(
                "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
                u
              ),
            t.contextTypes &&
              c(
                "contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",
                u
              ),
            r.contextType &&
              r.contextTypes &&
              !Qr.has(r) &&
              (Qr.add(r),
              c(
                "%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",
                u
              )),
            typeof t.componentShouldUpdate === "function" &&
              c(
                "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
                u
              ),
            r.prototype &&
              r.prototype.isPureReactComponent &&
              typeof t.shouldComponentUpdate < "u" &&
              c(
                "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
                ie(r) || "A pure component"
              ),
            typeof t.componentDidUnmount === "function" &&
              c(
                "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
                u
              ),
            typeof t.componentDidReceiveProps === "function" &&
              c(
                "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
                u
              ),
            typeof t.componentWillRecieveProps === "function" &&
              c(
                "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
                u
              ),
            typeof t.UNSAFE_componentWillRecieveProps === "function" &&
              c(
                "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
                u
              );
          const g = t.props !== l;
          t.props !== void 0 &&
            g &&
            c(
              "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
              u,
              u
            ),
            t.defaultProps &&
              c(
                "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
                u,
                u
              ),
            typeof t.getSnapshotBeforeUpdate === "function" &&
              typeof t.componentDidUpdate !== "function" &&
              !jo.has(r) &&
              (jo.add(r),
              c(
                "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
                ie(r)
              )),
            typeof t.getDerivedStateFromProps === "function" &&
              c(
                "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                u
              ),
            typeof t.getDerivedStateFromError === "function" &&
              c(
                "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                u
              ),
            typeof r.getSnapshotBeforeUpdate === "function" &&
              c(
                "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
                u
              );
          const y = t.state;
          y &&
            (typeof y !== "object" || me(y)) &&
            c("%s.state: must be set to an object or null", u),
            typeof t.getChildContext === "function" &&
              typeof r.childContextTypes !== "object" &&
              c(
                "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
                u
              );
        }
      }
      function cu(t, r) {
        const l = r.state;
        if (typeof r.componentWillMount === "function") {
          if (r.componentWillMount.__suppressDeprecationWarning !== !0) {
            const u = ie(t) || "Unknown";
            ol[u] ||
              (v(
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                u
              ),
              (ol[u] = !0));
          }
          r.componentWillMount();
        }
        typeof r.UNSAFE_componentWillMount === "function" &&
          r.UNSAFE_componentWillMount(),
          l !== r.state &&
            (c(
              "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
              ie(t) || "Component"
            ),
            ni.enqueueReplaceState(r, r.state, null));
      }
      function fu(t, r, l, u) {
        if (t.queue !== null && t.queue.length > 0) {
          const p = t.queue;
          const g = t.replace;
          if (((t.queue = null), (t.replace = !1), g && p.length === 1)) {
            r.state = p[0];
          } else {
            for (
              var y = g ? p[0] : r.state, w = !0, C = g ? 1 : 0;
              C < p.length;
              C++
            ) {
              const _ = p[C];
              const O = typeof _ === "function" ? _.call(r, y, l, u) : _;
              O != null && (w ? ((w = !1), (y = Qe({}, y, O))) : Qe(y, O));
            }
            r.state = y;
          }
        } else t.queue = null;
      }
      function ll(t, r, l, u) {
        uu(t, r, l);
        const p = t.state !== void 0 ? t.state : null;
        (t.updater = ni), (t.props = l), (t.state = p);
        const g = { queue: [], replace: !1 };
        Wn(t, g);
        const y = r.contextType;
        if (
          (typeof y === "object" && y !== null
            ? (t.context = Hn(y))
            : (t.context = u),
          t.state === l)
        ) {
          const w = ie(r) || "Component";
          Wo.has(w) ||
            (Wo.add(w),
            c(
              "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
              w
            ));
        }
        const C = r.getDerivedStateFromProps;
        typeof C === "function" && (t.state = al(t, r, C, p, l)),
          typeof r.getDerivedStateFromProps !== "function" &&
            typeof t.getSnapshotBeforeUpdate !== "function" &&
            (typeof t.UNSAFE_componentWillMount === "function" ||
              typeof t.componentWillMount === "function") &&
            (cu(r, t), fu(g, t, l, u));
      }
      const du = { id: 1, overflow: "" };
      function sl(t) {
        const r = t.overflow;
        const l = t.id;
        const u = l & ~ai(l);
        return u.toString(32) + r;
      }
      function oi(t, r, l) {
        const u = t.id;
        const p = t.overflow;
        const g = No(u) - 1;
        const y = u & ~(1 << g);
        const w = l + 1;
        const C = No(r) + g;
        if (C > 30) {
          const _ = g - (g % 5);
          const O = (1 << _) - 1;
          const j = (y & O).toString(32);
          const Z = y >> _;
          const de = g - _;
          const we = No(r) + de;
          const aa = w << de;
          const ia = aa | Z;
          const Dl = j + p;
          return { id: (1 << we) | ia, overflow: Dl };
        } else {
          const la = w << g;
          const Vd = la | y;
          const Yd = p;
          return { id: (1 << C) | Vd, overflow: Yd };
        }
      }
      function No(t) {
        return 32 - Vo(t);
      }
      function ai(t) {
        return 1 << (No(t) - 1);
      }
      var Vo = Math.clz32 ? Math.clz32 : vu;
      const pu = Math.log;
      const hu = Math.LN2;
      function vu(t) {
        const r = t >>> 0;
        return r === 0 ? 32 : (31 - ((pu(r) / hu) | 0)) | 0;
      }
      function gu(t, r) {
        return (
          (t === r && (t !== 0 || 1 / t === 1 / r)) || (t !== t && r !== r)
        );
      }
      const mu = typeof Object.is === "function" ? Object.is : gu;
      let At = null;
      let ii = null;
      let Ke = null;
      let X = null;
      let Vt = !1;
      let G = !1;
      let Yt = 0;
      let ot = null;
      let Sr = 0;
      const Gt = 25;
      let $e = !1;
      let Kr;
      function Ie() {
        if (At === null) {
          throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
        }
        return (
          $e &&
            c(
              "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"
            ),
          At
        );
      }
      function qr(t, r) {
        if (r === null) {
          return (
            c(
              "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
              Kr
            ),
            !1
          );
        }
        t.length !== r.length &&
          c(
            `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
            Kr,
            "[" + t.join(", ") + "]",
            "[" + r.join(", ") + "]"
          );
        for (let l = 0; l < r.length && l < t.length; l++) {
          if (!mu(t[l], r[l])) return !1;
        }
        return !0;
      }
      function Xt() {
        if (Sr > 0) {
          throw new Error(
            "Rendered more hooks than during the previous render"
          );
        }
        return { memoizedState: null, queue: null, next: null };
      }
      function li() {
        return (
          X === null
            ? Ke === null
              ? ((Vt = !1), (Ke = X = Xt()))
              : ((Vt = !0), (X = Ke))
            : X.next === null
            ? ((Vt = !1), (X = X.next = Xt()))
            : ((Vt = !0), (X = X.next)),
          X
        );
      }
      function ul(t, r) {
        (At = r), (ii = t), ($e = !1), (Yt = 0);
      }
      function si(t, r, l, u) {
        for (; G; ) (G = !1), (Yt = 0), (Sr += 1), (X = null), (l = t(r, u));
        return ui(), l;
      }
      function cl() {
        const t = Yt !== 0;
        return t;
      }
      function ui() {
        ($e = !1),
          (At = null),
          (ii = null),
          (G = !1),
          (Ke = null),
          (Sr = 0),
          (ot = null),
          (X = null);
      }
      function fl(t) {
        return (
          $e &&
            c(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
            ),
          Hn(t)
        );
      }
      function ci(t) {
        return (Kr = "useContext"), Ie(), Hn(t);
      }
      function fi(t, r) {
        return typeof r === "function" ? r(t) : r;
      }
      function yu(t) {
        return (Kr = "useState"), Yo(fi, t);
      }
      function Yo(t, r, l) {
        if ((t !== fi && (Kr = "useReducer"), (At = Ie()), (X = li()), Vt)) {
          const u = X.queue;
          const p = u.dispatch;
          if (ot !== null) {
            const g = ot.get(u);
            if (g !== void 0) {
              ot.delete(u);
              let y = X.memoizedState;
              let w = g;
              do {
                const C = w.action;
                ($e = !0), (y = t(y, C)), ($e = !1), (w = w.next);
              } while (w !== null);
              return (X.memoizedState = y), [y, p];
            }
          }
          return [X.memoizedState, p];
        } else {
          $e = !0;
          let _;
          t === fi
            ? (_ = typeof r === "function" ? r() : r)
            : (_ = l !== void 0 ? l(r) : r),
            ($e = !1),
            (X.memoizedState = _);
          const O = (X.queue = { last: null, dispatch: null });
          const j = (O.dispatch = bu.bind(null, At, O));
          return [X.memoizedState, j];
        }
      }
      function dl(t, r) {
        (At = Ie()), (X = li());
        const l = r === void 0 ? null : r;
        if (X !== null) {
          const u = X.memoizedState;
          if (u !== null && l !== null) {
            const p = u[1];
            if (qr(l, p)) return u[0];
          }
        }
        $e = !0;
        const g = t();
        return ($e = !1), (X.memoizedState = [g, l]), g;
      }
      function pl(t) {
        (At = Ie()), (X = li());
        const r = X.memoizedState;
        if (r === null) {
          const l = { current: t };
          return Object.seal(l), (X.memoizedState = l), l;
        } else return r;
      }
      function hl(t, r) {
        (Kr = "useLayoutEffect"),
          c(
            "useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes."
          );
      }
      function bu(t, r, l) {
        if (Sr >= Gt) {
          throw new Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        }
        if (t === At) {
          G = !0;
          const u = { action: l, next: null };
          ot === null && (ot = new Map());
          const p = ot.get(r);
          if (p === void 0) ot.set(r, u);
          else {
            for (var g = p; g.next !== null; ) g = g.next;
            g.next = u;
          }
        }
      }
      function Su(t, r) {
        return dl(function () {
          return t;
        }, r);
      }
      function wu(t, r, l) {
        return Ie(), r(t._source);
      }
      function xu(t, r, l) {
        if (l === void 0) {
          throw new Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        }
        return l();
      }
      function ku(t) {
        return Ie(), t;
      }
      function Tu() {
        throw new Error(
          "startTransition cannot be called during server rendering."
        );
      }
      function Cu() {
        return Ie(), [!1, Tu];
      }
      function Eu() {
        const t = ii;
        const r = sl(t.treeContext);
        const l = en;
        if (l === null) {
          throw new Error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component."
          );
        }
        const u = Yt++;
        return zt(l, r, u);
      }
      function Go() {}
      const vl = {
        readContext: fl,
        useContext: ci,
        useMemo: dl,
        useReducer: Yo,
        useRef: pl,
        useState: yu,
        useInsertionEffect: Go,
        useLayoutEffect: hl,
        useCallback: Su,
        useImperativeHandle: Go,
        useEffect: Go,
        useDebugValue: Go,
        useDeferredValue: ku,
        useTransition: Cu,
        useId: Eu,
        useMutableSource: wu,
        useSyncExternalStore: xu,
      };
      var en = null;
      function di(t) {
        en = t;
      }
      function pi(t) {
        try {
          let r = "";
          let l = t;
          do {
            switch (l.tag) {
              case 0:
                r += br(l.type, null, null);
                break;
              case 1:
                r += Po(l.type, null, null);
                break;
              case 2:
                r += au(l.type, null, null);
                break;
            }
            l = l.parent;
          } while (l);
          return r;
        } catch (u) {
          return (
            `
Error generating stack: ` +
            u.message +
            `
` +
            u.stack
          );
        }
      }
      const Xo = s.ReactCurrentDispatcher;
      const hi = s.ReactDebugCurrentFrame;
      const Vn = 0;
      const Zt = 1;
      const Zo = 2;
      const wr = 3;
      const vi = 4;
      const gl = 0;
      const gi = 1;
      const tn = 2;
      const ml = 12800;
      function rn(t) {
        return console.error(t), null;
      }
      function Yn() {}
      function yl(t, r, l, u, p, g, y, w, C) {
        const _ = [];
        const O = new Set();
        const j = {
          destination: null,
          responseState: r,
          progressiveChunkSize: u === void 0 ? ml : u,
          status: gl,
          fatalError: null,
          nextSegmentId: 0,
          allPendingTasks: 0,
          pendingRootTasks: 0,
          completedRootSegment: null,
          abortableTasks: O,
          pingedTasks: _,
          clientRenderedBoundaries: [],
          completedBoundaries: [],
          partialBoundaries: [],
          onError: p === void 0 ? rn : p,
          onAllReady: g === void 0 ? Yn : g,
          onShellReady: y === void 0 ? Yn : y,
          onShellError: w === void 0 ? Yn : w,
          onFatalError: C === void 0 ? Yn : C,
        };
        const Z = Jo(j, 0, null, l, !1, !1);
        Z.parentFlushed = !0;
        const de = mi(j, t, null, Z, O, Bn, lu, du);
        return _.push(de), j;
      }
      function Gn(t, r) {
        const l = t.pingedTasks;
        l.push(r),
          l.length === 1 &&
            S(function () {
              return Ri(t);
            });
      }
      function Ru(t, r) {
        return {
          id: Ct,
          rootSegmentID: -1,
          parentFlushed: !1,
          pendingTasks: 0,
          forceClientRender: !1,
          completedSegments: [],
          byteSize: 0,
          fallbackAbortableTasks: r,
          errorDigest: null,
        };
      }
      function mi(t, r, l, u, p, g, y, w) {
        t.allPendingTasks++,
          l === null ? t.pendingRootTasks++ : l.pendingTasks++;
        var C = {
          node: r,
          ping: function () {
            return Gn(t, C);
          },
          blockedBoundary: l,
          blockedSegment: u,
          abortSet: p,
          legacyContext: g,
          context: y,
          treeContext: w,
        };
        return (C.componentStack = null), p.add(C), C;
      }
      function Jo(t, r, l, u, p, g) {
        return {
          status: Vn,
          id: -1,
          index: r,
          parentFlushed: !1,
          chunks: [],
          children: [],
          formatContext: u,
          boundary: l,
          lastPushedText: p,
          textEmbedded: g,
        };
      }
      let at = null;
      function nn() {
        return at === null || at.componentStack === null
          ? ""
          : pi(at.componentStack);
      }
      function Ne(t, r) {
        t.componentStack = { tag: 0, parent: t.componentStack, type: r };
      }
      function Qo(t, r) {
        t.componentStack = { tag: 1, parent: t.componentStack, type: r };
      }
      function Xn(t, r) {
        t.componentStack = { tag: 2, parent: t.componentStack, type: r };
      }
      function Dt(t) {
        t.componentStack === null
          ? c(
              "Unexpectedly popped too many stack frames. This is a bug in React."
            )
          : (t.componentStack = t.componentStack.parent);
      }
      let Zn = null;
      function mt(t, r) {
        {
          let l;
          typeof r === "string"
            ? (l = r)
            : r && typeof r.message === "string"
            ? (l = r.message)
            : (l = String(r));
          const u = Zn || nn();
          (Zn = null), (t.errorMessage = l), (t.errorComponentStack = u);
        }
      }
      function Ot(t, r) {
        const l = t.onError(r);
        if (l != null && typeof l !== "string") {
          throw new Error(
            'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
              typeof l +
              '" instead'
          );
        }
        return l;
      }
      function on(t, r) {
        const l = t.onShellError;
        l(r);
        const u = t.onFatalError;
        u(r),
          t.destination !== null
            ? ((t.status = tn), Oe(t.destination, r))
            : ((t.status = gi), (t.fatalError = r));
      }
      function Jn(t, r, l) {
        Ne(r, "Suspense");
        const u = r.blockedBoundary;
        const p = r.blockedSegment;
        const g = l.fallback;
        const y = l.children;
        const w = new Set();
        const C = Ru(t, w);
        const _ = p.chunks.length;
        const O = Jo(t, _, C, p.formatContext, !1, !1);
        p.children.push(O), (p.lastPushedText = !1);
        const j = Jo(t, 0, null, p.formatContext, !1, !1);
        (j.parentFlushed = !0), (r.blockedBoundary = C), (r.blockedSegment = j);
        try {
          if (
            (ea(t, r, y),
            Zi(j.chunks, t.responseState, j.lastPushedText, j.textEmbedded),
            (j.status = Zt),
            ta(C, j),
            C.pendingTasks === 0)
          ) {
            Dt(r);
            return;
          }
        } catch (de) {
          (j.status = vi),
            (C.forceClientRender = !0),
            (C.errorDigest = Ot(t, de)),
            mt(C, de);
        } finally {
          (r.blockedBoundary = u), (r.blockedSegment = p);
        }
        const Z = mi(t, g, u, O, w, r.legacyContext, r.context, r.treeContext);
        (Z.componentStack = r.componentStack), t.pingedTasks.push(Z), Dt(r);
      }
      function Ko(t, r, l, u) {
        Ne(r, l);
        const p = r.blockedSegment;
        const g = Rn(p.chunks, l, u, t.responseState, p.formatContext);
        p.lastPushedText = !1;
        const y = p.formatContext;
        (p.formatContext = Ht(y, l, u)),
          ea(t, r, g),
          (p.formatContext = y),
          Da(p.chunks, l),
          (p.lastPushedText = !1),
          Dt(r);
      }
      function Iu(t) {
        return t.prototype && t.prototype.isReactComponent;
      }
      function bl(t, r, l, u, p) {
        const g = {};
        ul(r, g);
        const y = l(u, p);
        return si(l, u, y, p);
      }
      function Sl(t, r, l, u, p) {
        const g = l.render();
        l.props !== p &&
          (Si ||
            c(
              "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
              ie(u) || "a component"
            ),
          (Si = !0));
        {
          const y = u.childContextTypes;
          if (y != null) {
            const w = r.legacyContext;
            const C = Oo(l, u, w, y);
            (r.legacyContext = C), Pe(t, r, g), (r.legacyContext = w);
            return;
          }
        }
        Pe(t, r, g);
      }
      function wl(t, r, l, u) {
        Xn(r, l);
        const p = Do(l, r.legacyContext);
        const g = il(l, u, p);
        ll(g, l, u, p), Sl(t, r, g, l, u), Dt(r);
      }
      const yi = {};
      const qo = {};
      const bi = {};
      const Qn = {};
      var Si = !1;
      let wi = !1;
      let xi = !1;
      let ki = !1;
      function xl(t, r, l, u) {
        let p;
        if (
          ((p = Do(l, r.legacyContext)),
          Qo(r, l),
          l.prototype && typeof l.prototype.render === "function")
        ) {
          const g = ie(l) || "Unknown";
          yi[g] ||
            (c(
              "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
              g,
              g
            ),
            (yi[g] = !0));
        }
        const y = bl(t, r, l, u, p);
        const w = cl();
        if (
          typeof y === "object" &&
          y !== null &&
          typeof y.render === "function" &&
          y.$$typeof === void 0
        ) {
          const C = ie(l) || "Unknown";
          qo[C] ||
            (c(
              "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
              C,
              C,
              C
            ),
            (qo[C] = !0));
        }
        if (
          typeof y === "object" &&
          y !== null &&
          typeof y.render === "function" &&
          y.$$typeof === void 0
        ) {
          {
            const _ = ie(l) || "Unknown";
            qo[_] ||
              (c(
                "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
                _,
                _,
                _
              ),
              (qo[_] = !0));
          }
          ll(y, l, u, p), Sl(t, r, y, l, u);
        } else if ((kl(l), w)) {
          const O = r.treeContext;
          const j = 1;
          const Z = 0;
          r.treeContext = oi(O, j, Z);
          try {
            Pe(t, r, y);
          } finally {
            r.treeContext = O;
          }
        } else Pe(t, r, y);
        Dt(r);
      }
      function kl(t) {
        {
          if (
            (t &&
              t.childContextTypes &&
              c(
                "%s(...): childContextTypes cannot be defined on a function component.",
                t.displayName || t.name || "Component"
              ),
            typeof t.getDerivedStateFromProps === "function")
          ) {
            const r = ie(t) || "Unknown";
            Qn[r] ||
              (c(
                "%s: Function components do not support getDerivedStateFromProps.",
                r
              ),
              (Qn[r] = !0));
          }
          if (typeof t.contextType === "object" && t.contextType !== null) {
            const l = ie(t) || "Unknown";
            bi[l] ||
              (c("%s: Function components do not support contextType.", l),
              (bi[l] = !0));
          }
        }
      }
      function Tl(t, r) {
        if (t && t.defaultProps) {
          const l = Qe({}, r);
          const u = t.defaultProps;
          for (const p in u) l[p] === void 0 && (l[p] = u[p]);
          return l;
        }
        return r;
      }
      function _u(t, r, l, u, p) {
        Qo(r, l.render);
        const g = bl(t, r, l.render, u, p);
        const y = cl();
        if (y) {
          const w = r.treeContext;
          const C = 1;
          const _ = 0;
          r.treeContext = oi(w, C, _);
          try {
            Pe(t, r, g);
          } finally {
            r.treeContext = w;
          }
        } else Pe(t, r, g);
        Dt(r);
      }
      function Cl(t, r, l, u, p) {
        const g = l.type;
        const y = Tl(g, u);
        Ti(t, r, g, y, p);
      }
      function Pu(t, r, l, u) {
        l._context === void 0
          ? l !== l.Consumer &&
            (ki ||
              ((ki = !0),
              c(
                "Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
              )))
          : (l = l._context);
        const p = u.children;
        typeof p !== "function" &&
          c(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          );
        const g = Hn(l);
        const y = p(g);
        Pe(t, r, y);
      }
      function Fu(t, r, l, u) {
        const p = l._context;
        const g = u.value;
        const y = u.children;
        let w;
        (w = r.context),
          (r.context = nl(p, g)),
          Pe(t, r, y),
          (r.context = Lo(p)),
          w !== r.context &&
            c(
              "Popping the context provider did not return back to the original snapshot. This is a bug in React."
            );
      }
      function Au(t, r, l, u, p) {
        Ne(r, "Lazy");
        const g = l._payload;
        const y = l._init;
        const w = y(g);
        const C = Tl(w, u);
        Ti(t, r, w, C, p), Dt(r);
      }
      function Ti(t, r, l, u, p) {
        if (typeof l === "function") {
          if (Iu(l)) {
            wl(t, r, l, u);
            return;
          } else {
            xl(t, r, l, u);
            return;
          }
        }
        if (typeof l === "string") {
          Ko(t, r, l, u);
          return;
        }
        switch (l) {
          case tu:
          case _o:
          case Ha:
          case Wa:
          case Ji: {
            Pe(t, r, u.children);
            return;
          }
          case Dn: {
            Ne(r, "SuspenseList"), Pe(t, r, u.children), Dt(r);
            return;
          }
          case za:
            throw new Error(
              "ReactDOMServer does not yet support scope components."
            );
          case An: {
            Jn(t, r, u);
            return;
          }
        }
        if (typeof l === "object" && l !== null) {
          switch (l.$$typeof) {
            case Fn: {
              _u(t, r, l, u, p);
              return;
            }
            case On: {
              Cl(t, r, l, u, p);
              return;
            }
            case Ro: {
              Fu(t, r, l, u);
              return;
            }
            case Io: {
              Pu(t, r, l, u);
              return;
            }
            case $r: {
              Au(t, r, l, u);
              return;
            }
          }
        }
        let g = "";
        throw (
          ((l === void 0 ||
            (typeof l === "object" &&
              l !== null &&
              Object.keys(l).length === 0)) &&
            (g +=
              " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),
          new Error(
            "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " +
              ("but got: " + (l == null ? l : typeof l) + "." + g)
          ))
        );
      }
      function Du(t, r) {
        typeof Symbol === "function" &&
          t[Symbol.toStringTag] === "Generator" &&
          (wi ||
            c(
              "Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."
            ),
          (wi = !0)),
          t.entries === r &&
            (xi ||
              c(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
              ),
            (xi = !0));
      }
      function Pe(t, r, l) {
        try {
          return Ou(t, r, l);
        } catch (u) {
          throw (
            ((typeof u === "object" &&
              u !== null &&
              typeof u.then === "function") ||
              (Zn = Zn !== null ? Zn : nn()),
            u)
          );
        }
      }
      function Ou(t, r, l) {
        if (((r.node = l), typeof l === "object" && l !== null)) {
          switch (l.$$typeof) {
            case ja: {
              const u = l;
              const p = u.type;
              const g = u.props;
              const y = u.ref;
              Ti(t, r, p, g, y);
              return;
            }
            case ze:
              throw new Error(
                "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
              );
            case $r: {
              const w = l;
              const C = w._payload;
              const _ = w._init;
              let O;
              try {
                O = _(C);
              } catch (la) {
                throw (
                  (typeof la === "object" &&
                    la !== null &&
                    typeof la.then === "function" &&
                    Ne(r, "Lazy"),
                  la)
                );
              }
              Pe(t, r, O);
              return;
            }
          }
          if (me(l)) {
            Ue(t, r, l);
            return;
          }
          const j = Ki(l);
          if (j) {
            Du(l, j);
            const Z = j.call(l);
            if (Z) {
              let de = Z.next();
              if (!de.done) {
                const we = [];
                do we.push(de.value), (de = Z.next());
                while (!de.done);
                Ue(t, r, we);
                return;
              }
              return;
            }
          }
          const aa = Object.prototype.toString.call(l);
          throw new Error(
            "Objects are not valid as a React child (found: " +
              (aa === "[object Object]"
                ? "object with keys {" + Object.keys(l).join(", ") + "}"
                : aa) +
              "). If you meant to render a collection of children, use an array instead."
          );
        }
        if (typeof l === "string") {
          const ia = r.blockedSegment;
          ia.lastPushedText = Xi(
            r.blockedSegment.chunks,
            l,
            t.responseState,
            ia.lastPushedText
          );
          return;
        }
        if (typeof l === "number") {
          const Dl = r.blockedSegment;
          Dl.lastPushedText = Xi(
            r.blockedSegment.chunks,
            "" + l,
            t.responseState,
            Dl.lastPushedText
          );
          return;
        }
        typeof l === "function" &&
          c(
            "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."
          );
      }
      function Ue(t, r, l) {
        for (let u = l.length, p = 0; p < u; p++) {
          const g = r.treeContext;
          r.treeContext = oi(g, u, p);
          try {
            ea(t, r, l[p]);
          } finally {
            r.treeContext = g;
          }
        }
      }
      function Mu(t, r, l) {
        const u = r.blockedSegment;
        const p = u.chunks.length;
        const g = Jo(t, p, null, u.formatContext, u.lastPushedText, !0);
        u.children.push(g), (u.lastPushedText = !1);
        const y = mi(
          t,
          r.node,
          r.blockedBoundary,
          g,
          r.abortSet,
          r.legacyContext,
          r.context,
          r.treeContext
        );
        r.componentStack !== null &&
          (y.componentStack = r.componentStack.parent);
        const w = y.ping;
        l.then(w, w);
      }
      function ea(t, r, l) {
        const u = r.blockedSegment.formatContext;
        const p = r.legacyContext;
        const g = r.context;
        let y = null;
        y = r.componentStack;
        try {
          return Pe(t, r, l);
        } catch (w) {
          if (
            (ui(),
            typeof w === "object" && w !== null && typeof w.then === "function")
          ) {
            Mu(t, r, w),
              (r.blockedSegment.formatContext = u),
              (r.legacyContext = p),
              (r.context = g),
              jn(g),
              (r.componentStack = y);
          } else {
            throw (
              ((r.blockedSegment.formatContext = u),
              (r.legacyContext = p),
              (r.context = g),
              jn(g),
              (r.componentStack = y),
              w)
            );
          }
        }
      }
      function Lu(t, r, l, u) {
        const p = Ot(t, u);
        if (
          (r === null
            ? on(t, u)
            : (r.pendingTasks--,
              r.forceClientRender ||
                ((r.forceClientRender = !0),
                (r.errorDigest = p),
                mt(r, u),
                r.parentFlushed && t.clientRenderedBoundaries.push(r))),
          t.allPendingTasks--,
          t.allPendingTasks === 0)
        ) {
          const g = t.onAllReady;
          g();
        }
      }
      function Ci(t) {
        const r = this;
        const l = t.blockedBoundary;
        const u = t.blockedSegment;
        (u.status = wr), Ei(r, l, u);
      }
      function El(t, r, l) {
        const u = t.blockedBoundary;
        const p = t.blockedSegment;
        if (((p.status = wr), u === null)) {
          r.allPendingTasks--,
            r.status !== tn &&
              ((r.status = tn), r.destination !== null && V(r.destination));
        } else {
          if ((u.pendingTasks--, !u.forceClientRender)) {
            u.forceClientRender = !0;
            let g =
              l === void 0
                ? new Error(
                    "The render was aborted by the server without a reason."
                  )
                : l;
            u.errorDigest = r.onError(g);
            {
              const y = "The server did not finish this Suspense boundary: ";
              g && typeof g.message === "string"
                ? (g = y + g.message)
                : (g = y + String(g));
              const w = at;
              at = t;
              try {
                mt(u, g);
              } finally {
                at = w;
              }
            }
            u.parentFlushed && r.clientRenderedBoundaries.push(u);
          }
          if (
            (u.fallbackAbortableTasks.forEach(function (_) {
              return El(_, r, l);
            }),
            u.fallbackAbortableTasks.clear(),
            r.allPendingTasks--,
            r.allPendingTasks === 0)
          ) {
            const C = r.onAllReady;
            C();
          }
        }
      }
      function ta(t, r) {
        if (
          r.chunks.length === 0 &&
          r.children.length === 1 &&
          r.children[0].boundary === null
        ) {
          const l = r.children[0];
          (l.id = r.id), (l.parentFlushed = !0), l.status === Zt && ta(t, l);
        } else {
          const u = t.completedSegments;
          u.push(r);
        }
      }
      function Ei(t, r, l) {
        if (r === null) {
          if (l.parentFlushed) {
            if (t.completedRootSegment !== null) {
              throw new Error(
                "There can only be one root segment. This is a bug in React."
              );
            }
            t.completedRootSegment = l;
          }
          if ((t.pendingRootTasks--, t.pendingRootTasks === 0)) {
            t.onShellError = Yn;
            const u = t.onShellReady;
            u();
          }
        } else if ((r.pendingTasks--, !r.forceClientRender)) {
          if (r.pendingTasks === 0) {
            l.parentFlushed && l.status === Zt && ta(r, l),
              r.parentFlushed && t.completedBoundaries.push(r),
              r.fallbackAbortableTasks.forEach(Ci, t),
              r.fallbackAbortableTasks.clear();
          } else if (l.parentFlushed && l.status === Zt) {
            ta(r, l);
            const p = r.completedSegments;
            p.length === 1 && r.parentFlushed && t.partialBoundaries.push(r);
          }
        }
        if ((t.allPendingTasks--, t.allPendingTasks === 0)) {
          const g = t.onAllReady;
          g();
        }
      }
      function ra(t, r) {
        const l = r.blockedSegment;
        if (l.status === Vn) {
          jn(r.context);
          let u = null;
          (u = at), (at = r);
          try {
            Pe(t, r, r.node),
              Zi(l.chunks, t.responseState, l.lastPushedText, l.textEmbedded),
              r.abortSet.delete(r),
              (l.status = Zt),
              Ei(t, r.blockedBoundary, l);
          } catch (g) {
            if (
              (ui(),
              typeof g === "object" &&
                g !== null &&
                typeof g.then === "function")
            ) {
              const p = r.ping;
              g.then(p, p);
            } else {
              r.abortSet.delete(r),
                (l.status = vi),
                Lu(t, r.blockedBoundary, l, g);
            }
          } finally {
            at = u;
          }
        }
      }
      function Ri(t) {
        if (t.status !== tn) {
          const r = su();
          const l = Xo.current;
          Xo.current = vl;
          let u;
          (u = hi.getCurrentStack), (hi.getCurrentStack = nn);
          const p = en;
          di(t.responseState);
          try {
            const g = t.pingedTasks;
            let y;
            for (y = 0; y < g.length; y++) {
              const w = g[y];
              ra(t, w);
            }
            g.splice(0, y), t.destination !== null && _i(t, t.destination);
          } catch (C) {
            Ot(t, C), on(t, C);
          } finally {
            di(p),
              (Xo.current = l),
              (hi.getCurrentStack = u),
              l === vl && jn(r);
          }
        }
      }
      function na(t, r, l) {
        switch (((l.parentFlushed = !0), l.status)) {
          case Vn: {
            const u = (l.id = t.nextSegmentId++);
            return (
              (l.lastPushedText = !1),
              (l.textEmbedded = !1),
              k(r, t.responseState, u)
            );
          }
          case Zt: {
            l.status = Zo;
            for (
              var p = !0, g = l.chunks, y = 0, w = l.children, C = 0;
              C < w.length;
              C++
            ) {
              for (var _ = w[C]; y < _.index; y++) x(r, g[y]);
              p = Kn(t, r, _);
            }
            for (; y < g.length - 1; y++) x(r, g[y]);
            return y < g.length && (p = R(r, g[y])), p;
          }
          default:
            throw new Error(
              "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
            );
        }
      }
      function Kn(t, r, l) {
        const u = l.boundary;
        if (u === null) return na(t, r, l);
        if (((u.parentFlushed = !0), u.forceClientRender)) {
          return (
            qs(
              r,
              t.responseState,
              u.errorDigest,
              u.errorMessage,
              u.errorComponentStack
            ),
            na(t, r, l),
            eu(r, t.responseState)
          );
        }
        if (u.pendingTasks > 0) {
          (u.rootSegmentID = t.nextSegmentId++),
            u.completedSegments.length > 0 && t.partialBoundaries.push(u);
          const p = (u.id = Wt(t.responseState));
          return yr(r, t.responseState, p), na(t, r, l), Co(r, t.responseState);
        } else {
          if (u.byteSize > t.progressiveChunkSize) {
            return (
              (u.rootSegmentID = t.nextSegmentId++),
              t.completedBoundaries.push(u),
              yr(r, t.responseState, u.id),
              na(t, r, l),
              Co(r, t.responseState)
            );
          }
          Ks(r, t.responseState);
          const g = u.completedSegments;
          if (g.length !== 1) {
            throw new Error(
              "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
            );
          }
          const y = g[0];
          return Kn(t, r, y), Ua(r, t.responseState);
        }
      }
      function oa(t, r, l) {
        return Js(
          r,
          t.responseState,
          l.id,
          l.errorDigest,
          l.errorMessage,
          l.errorComponentStack
        );
      }
      function qn(t, r, l) {
        return (
          Fs(r, t.responseState, l.formatContext, l.id),
          Kn(t, r, l),
          As(r, l.formatContext)
        );
      }
      function Rl(t, r, l) {
        for (var u = l.completedSegments, p = 0; p < u.length; p++) {
          const g = u[p];
          Ii(t, r, l, g);
        }
        return (u.length = 0), Vs(r, t.responseState, l.id, l.rootSegmentID);
      }
      function Il(t, r, l) {
        for (var u = l.completedSegments, p = 0; p < u.length; p++) {
          const g = u[p];
          if (!Ii(t, r, l, g)) return p++, u.splice(0, p), !1;
        }
        return u.splice(0, p), !0;
      }
      function Ii(t, r, l, u) {
        if (u.status === Zo) return !0;
        const p = u.id;
        if (p === -1) {
          const g = (u.id = l.rootSegmentID);
          if (g === -1) {
            throw new Error(
              "A root segment ID must have been assigned by now. This is a bug in React."
            );
          }
          return qn(t, r, u);
        } else return qn(t, r, u), Hs(r, t.responseState, p);
      }
      function _i(t, r) {
        try {
          const l = t.completedRootSegment;
          l !== null &&
            t.pendingRootTasks === 0 &&
            (Kn(t, r, l),
            (t.completedRootSegment = null),
            _n(r, t.responseState));
          const u = t.clientRenderedBoundaries;
          let p;
          for (p = 0; p < u.length; p++) {
            const g = u[p];
            if (!oa(t, r, g)) {
              (t.destination = null), p++, u.splice(0, p);
              return;
            }
          }
          u.splice(0, p);
          const y = t.completedBoundaries;
          for (p = 0; p < y.length; p++) {
            const w = y[p];
            if (!Rl(t, r, w)) {
              (t.destination = null), p++, y.splice(0, p);
              return;
            }
          }
          y.splice(0, p);
          const C = t.partialBoundaries;
          for (p = 0; p < C.length; p++) {
            const _ = C[p];
            if (!Il(t, r, _)) {
              (t.destination = null), p++, C.splice(0, p);
              return;
            }
          }
          C.splice(0, p);
          const O = t.completedBoundaries;
          for (p = 0; p < O.length; p++) {
            const j = O[p];
            if (!Rl(t, r, j)) {
              (t.destination = null), p++, O.splice(0, p);
              return;
            }
          }
          O.splice(0, p);
        } finally {
          t.allPendingTasks === 0 &&
            t.pingedTasks.length === 0 &&
            t.clientRenderedBoundaries.length === 0 &&
            t.completedBoundaries.length === 0 &&
            (t.abortableTasks.size !== 0 &&
              c(
                "There was still abortable task at the root when we closed. This is a bug in React."
              ),
            V(r));
        }
      }
      function Pi(t) {
        S(function () {
          return Ri(t);
        });
      }
      function eo(t, r) {
        if (t.status === gi) {
          (t.status = tn), Oe(r, t.fatalError);
          return;
        }
        if (t.status !== tn && t.destination === null) {
          t.destination = r;
          try {
            _i(t, r);
          } catch (l) {
            Ot(t, l), on(t, l);
          }
        }
      }
      function _l(t, r) {
        try {
          const l = t.abortableTasks;
          l.forEach(function (u) {
            return El(u, t, r);
          }),
            l.clear(),
            t.destination !== null && _i(t, t.destination);
        } catch (u) {
          Ot(t, u), on(t, u);
        }
      }
      function Pl() {}
      function Fi(t, r, l, u) {
        let p = !1;
        let g = null;
        let y = "";
        const w = {
          push: function (j) {
            return j !== null && (y += j), !0;
          },
          destroy: function (j) {
            (p = !0), (g = j);
          },
        };
        let C = !1;
        function _() {
          C = !0;
        }
        const O = yl(
          t,
          Yi(l, r ? r.identifierPrefix : void 0),
          Gi(),
          1 / 0,
          Pl,
          void 0,
          _,
          void 0,
          void 0
        );
        if ((Pi(O), _l(O, u), eo(O, w), p)) throw g;
        if (!C) {
          throw new Error(
            "A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition."
          );
        }
        return y;
      }
      function Bu(t, r) {
        (t.prototype = Object.create(r.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = r);
      }
      const Fl = (function (t) {
        Bu(r, t);
        function r() {
          let u;
          return (
            (u = t.call(this, {}) || this),
            (u.request = null),
            (u.startedFlowing = !1),
            u
          );
        }
        const l = r.prototype;
        return (
          (l._destroy = function (p, g) {
            _l(this.request), g(p);
          }),
          (l._read = function (p) {
            this.startedFlowing && eo(this.request, this);
          }),
          r
        );
      })(n.Readable);
      function Uu() {}
      function Al(t, r, l) {
        function u() {
          (p.startedFlowing = !0), eo(g, p);
        }
        var p = new Fl();
        var g = yl(
          t,
          Yi(!1, r ? r.identifierPrefix : void 0),
          Gi(),
          1 / 0,
          Uu,
          u,
          void 0,
          void 0
        );
        return (p.request = g), Pi(g), p;
      }
      function o(t, r) {
        return (
          c(
            "renderToNodeStream is deprecated. Use renderToPipeableStream instead."
          ),
          Al(t, r)
        );
      }
      function a(t, r) {
        return Al(t, r);
      }
      function f(t, r) {
        return Fi(
          t,
          r,
          !1,
          'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server'
        );
      }
      function d(t, r) {
        return Fi(
          t,
          r,
          !0,
          'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server'
        );
      }
      (pa.renderToNodeStream = o),
        (pa.renderToStaticMarkup = d),
        (pa.renderToStaticNodeStream = a),
        (pa.renderToString = f),
        (pa.version = i);
    })();
});
const Wd = an((Pc) => {
  "use strict";
  process.env.NODE_ENV !== "production" &&
    (function () {
      "use strict";
      const e = ua();
      const n = require("util");
      const i = "18.2.0";
      const s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function v(o) {
        {
          for (
            var a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), d = 1;
            d < a;
            d++
          ) {
            f[d - 1] = arguments[d];
          }
          m("warn", o, f);
        }
      }
      function c(o) {
        {
          for (
            var a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), d = 1;
            d < a;
            d++
          ) {
            f[d - 1] = arguments[d];
          }
          m("error", o, f);
        }
      }
      function m(o, a, f) {
        {
          const d = s.ReactDebugCurrentFrame;
          const t = d.getStackAddendum();
          t !== "" && ((a += "%s"), (f = f.concat([t])));
          const r = f.map(function (l) {
            return String(l);
          });
          r.unshift("Warning: " + a),
            Function.prototype.apply.call(console[o], console, r);
        }
      }
      function S(o) {
        setImmediate(o);
      }
      function E(o) {
        typeof o.flush === "function" && o.flush();
      }
      const x = 2048;
      let R = null;
      let D = 0;
      let V = !0;
      function te(o) {
        (R = new Uint8Array(x)), (D = 0), (V = !0);
      }
      function J(o, a) {
        if (a.length !== 0) {
          if (a.length * 3 > x) {
            D > 0 &&
              (ue(o, R.subarray(0, D)), (R = new Uint8Array(x)), (D = 0)),
              ue(o, _e.encode(a));
            return;
          }
          let f = R;
          D > 0 && (f = R.subarray(D));
          const d = _e.encodeInto(a, f);
          const t = d.read;
          const r = d.written;
          (D += r),
            t < a.length &&
              (ue(o, R),
              (R = new Uint8Array(x)),
              (D = _e.encodeInto(a.slice(t), R).written)),
            D === x && (ue(o, R), (R = new Uint8Array(x)), (D = 0));
        }
      }
      function Oe(o, a) {
        if (a.byteLength !== 0) {
          if (a.byteLength > x) {
            D > 0 &&
              (ue(o, R.subarray(0, D)), (R = new Uint8Array(x)), (D = 0)),
              ue(o, a);
            return;
          }
          let f = a;
          const d = R.length - D;
          d < f.byteLength &&
            (d === 0
              ? ue(o, R)
              : (R.set(f.subarray(0, d), D),
                (D += d),
                ue(o, R),
                (f = f.subarray(d))),
            (R = new Uint8Array(x)),
            (D = 0)),
            R.set(f, D),
            (D += f.byteLength),
            D === x && (ue(o, R), (R = new Uint8Array(x)), (D = 0));
        }
      }
      function P(o, a) {
        typeof a === "string" ? J(o, a) : Oe(o, a);
      }
      function ue(o, a) {
        const f = o.write(a);
        V = V && f;
      }
      function W(o, a) {
        return P(o, a), V;
      }
      function q(o) {
        R && D > 0 && o.write(R.subarray(0, D)), (R = null), (D = 0), (V = !0);
      }
      function xe(o) {
        o.end();
      }
      var _e = new n.TextEncoder();
      function he(o) {
        return o;
      }
      function F(o) {
        return _e.encode(o);
      }
      function ct(o, a) {
        o.destroy(a);
      }
      function qt(o) {
        {
          const a = typeof Symbol === "function" && Symbol.toStringTag;
          const f =
            (a && o[Symbol.toStringTag]) || o.constructor.name || "Object";
          return f;
        }
      }
      function yt(o) {
        try {
          return Mt(o), !1;
        } catch {
          return !0;
        }
      }
      function Mt(o) {
        return "" + o;
      }
      function Lt(o, a) {
        if (yt(o)) {
          return (
            c(
              "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",
              a,
              qt(o)
            ),
            Mt(o)
          );
        }
      }
      function ft(o, a) {
        if (yt(o)) {
          return (
            c(
              "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",
              a,
              qt(o)
            ),
            Mt(o)
          );
        }
      }
      function Me(o) {
        if (yt(o)) {
          return (
            c(
              "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",
              qt(o)
            ),
            Mt(o)
          );
        }
      }
      const B = Object.prototype.hasOwnProperty;
      const Er = 0;
      const tt = 1;
      const Bt = 2;
      const bt = 3;
      const Le = 4;
      const er = 5;
      const re = 6;
      const ce =
        ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
      const tr = ce + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
      const rr = new RegExp("^[" + ce + "][" + tr + "]*$");
      const nr = {};
      const Rr = {};
      function St(o) {
        return B.call(Rr, o)
          ? !0
          : B.call(nr, o)
          ? !1
          : rr.test(o)
          ? ((Rr[o] = !0), !0)
          : ((nr[o] = !0), c("Invalid attribute name: `%s`", o), !1);
      }
      function so(o, a, f, d) {
        if (f !== null && f.type === Er) return !1;
        switch (typeof a) {
          case "function":
          case "symbol":
            return !0;
          case "boolean": {
            if (d) return !1;
            if (f !== null) return !f.acceptsBooleans;
            const t = o.toLowerCase().slice(0, 5);
            return t !== "data-" && t !== "aria-";
          }
          default:
            return !1;
        }
      }
      function uo(o) {
        return ve.hasOwnProperty(o) ? ve[o] : null;
      }
      function ye(o, a, f, d, t, r, l) {
        (this.acceptsBooleans = a === Bt || a === bt || a === Le),
          (this.attributeName = d),
          (this.attributeNamespace = t),
          (this.mustUseProperty = f),
          (this.propertyName = o),
          (this.type = a),
          (this.sanitizeURL = r),
          (this.removeEmptyString = l);
      }
      var ve = {};
      const co = [
        "children",
        "dangerouslySetInnerHTML",
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style",
      ];
      co.forEach(function (o) {
        ve[o] = new ye(o, Er, !1, o, null, !1, !1);
      }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (o) {
          const a = o[0];
          const f = o[1];
          ve[a] = new ye(a, tt, !1, f, null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (o) {
            ve[o] = new ye(o, Bt, !1, o.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (o) {
          ve[o] = new ye(o, Bt, !1, o, null, !1, !1);
        }),
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope",
        ].forEach(function (o) {
          ve[o] = new ye(o, bt, !1, o.toLowerCase(), null, !1, !1);
        }),
        ["checked", "multiple", "muted", "selected"].forEach(function (o) {
          ve[o] = new ye(o, bt, !0, o, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (o) {
          ve[o] = new ye(o, Le, !1, o, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (o) {
          ve[o] = new ye(o, re, !1, o, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (o) {
          ve[o] = new ye(o, er, !1, o.toLowerCase(), null, !1, !1);
        });
      const or = /[\-\:]([a-z])/g;
      const je = function (o) {
        return o[1].toUpperCase();
      };
      [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height",
      ].forEach(function (o) {
        const a = o.replace(or, je);
        ve[a] = new ye(a, tt, !1, o, null, !1, !1);
      }),
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type",
        ].forEach(function (o) {
          const a = o.replace(or, je);
          ve[a] = new ye(a, tt, !1, o, "http://www.w3.org/1999/xlink", !1, !1);
        }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (o) {
          const a = o.replace(or, je);
          ve[a] = new ye(
            a,
            tt,
            !1,
            o,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (o) {
          ve[o] = new ye(o, tt, !1, o.toLowerCase(), null, !1, !1);
        });
      const ha = "xlinkHref";
      (ve[ha] = new ye(
        "xlinkHref",
        tt,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      )),
        ["src", "href", "action", "formAction"].forEach(function (o) {
          ve[o] = new ye(o, tt, !1, o.toLowerCase(), null, !0, !0);
        });
      const ar = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      };
      function dt(o, a) {
        return o + a.charAt(0).toUpperCase() + a.substring(1);
      }
      const ir = ["Webkit", "ms", "Moz", "O"];
      Object.keys(ar).forEach(function (o) {
        ir.forEach(function (a) {
          ar[dt(a, o)] = ar[o];
        });
      });
      const fo = {
        button: !0,
        checkbox: !0,
        image: !0,
        hidden: !0,
        radio: !0,
        reset: !0,
        submit: !0,
      };
      function lr(o, a) {
        fo[a.type] ||
          a.onChange ||
          a.onInput ||
          a.readOnly ||
          a.disabled ||
          a.value == null ||
          c(
            "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
          ),
          a.onChange ||
            a.readOnly ||
            a.disabled ||
            a.checked == null ||
            c(
              "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
            );
      }
      function fn(o, a) {
        if (o.indexOf("-") === -1) return typeof a.is === "string";
        switch (o) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      const sr = {
        "aria-current": 0,
        "aria-description": 0,
        "aria-details": 0,
        "aria-disabled": 0,
        "aria-hidden": 0,
        "aria-invalid": 0,
        "aria-keyshortcuts": 0,
        "aria-label": 0,
        "aria-roledescription": 0,
        "aria-autocomplete": 0,
        "aria-checked": 0,
        "aria-expanded": 0,
        "aria-haspopup": 0,
        "aria-level": 0,
        "aria-modal": 0,
        "aria-multiline": 0,
        "aria-multiselectable": 0,
        "aria-orientation": 0,
        "aria-placeholder": 0,
        "aria-pressed": 0,
        "aria-readonly": 0,
        "aria-required": 0,
        "aria-selected": 0,
        "aria-sort": 0,
        "aria-valuemax": 0,
        "aria-valuemin": 0,
        "aria-valuenow": 0,
        "aria-valuetext": 0,
        "aria-atomic": 0,
        "aria-busy": 0,
        "aria-live": 0,
        "aria-relevant": 0,
        "aria-dropeffect": 0,
        "aria-grabbed": 0,
        "aria-activedescendant": 0,
        "aria-colcount": 0,
        "aria-colindex": 0,
        "aria-colspan": 0,
        "aria-controls": 0,
        "aria-describedby": 0,
        "aria-errormessage": 0,
        "aria-flowto": 0,
        "aria-labelledby": 0,
        "aria-owns": 0,
        "aria-posinset": 0,
        "aria-rowcount": 0,
        "aria-rowindex": 0,
        "aria-rowspan": 0,
        "aria-setsize": 0,
      };
      const pt = {};
      const ke = new RegExp("^(aria)-[" + tr + "]*$");
      const po = new RegExp("^(aria)[A-Z][" + tr + "]*$");
      function va(o, a) {
        {
          if (B.call(pt, a) && pt[a]) return !0;
          if (po.test(a)) {
            const f = "aria-" + a.slice(4).toLowerCase();
            const d = sr.hasOwnProperty(f) ? f : null;
            if (d == null) {
              return (
                c(
                  "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
                  a
                ),
                (pt[a] = !0),
                !0
              );
            }
            if (a !== d) {
              return (
                c("Invalid ARIA attribute `%s`. Did you mean `%s`?", a, d),
                (pt[a] = !0),
                !0
              );
            }
          }
          if (ke.test(a)) {
            const t = a.toLowerCase();
            const r = sr.hasOwnProperty(t) ? t : null;
            if (r == null) return (pt[a] = !0), !1;
            if (a !== r) {
              return (
                c("Unknown ARIA attribute `%s`. Did you mean `%s`?", a, r),
                (pt[a] = !0),
                !0
              );
            }
          }
        }
        return !0;
      }
      function ga(o, a) {
        {
          const f = [];
          for (const d in a) {
            const t = va(o, d);
            t || f.push(d);
          }
          const r = f
            .map(function (l) {
              return "`" + l + "`";
            })
            .join(", ");
          f.length === 1
            ? c(
                "Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
                r,
                o
              )
            : f.length > 1 &&
              c(
                "Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",
                r,
                o
              );
        }
      }
      function dn(o, a) {
        fn(o, a) || ga(o, a);
      }
      let ho = !1;
      function ma(o, a) {
        {
          if (o !== "input" && o !== "textarea" && o !== "select") return;
          a != null &&
            a.value === null &&
            !ho &&
            ((ho = !0),
            o === "select" && a.multiple
              ? c(
                  "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
                  o
                )
              : c(
                  "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
                  o
                ));
        }
      }
      const pn = {
        accept: "accept",
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        action: "action",
        allowfullscreen: "allowFullScreen",
        alt: "alt",
        as: "as",
        async: "async",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        capture: "capture",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        challenge: "challenge",
        charset: "charSet",
        checked: "checked",
        children: "children",
        cite: "cite",
        class: "className",
        classid: "classID",
        classname: "className",
        cols: "cols",
        colspan: "colSpan",
        content: "content",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controls: "controls",
        controlslist: "controlsList",
        coords: "coords",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        data: "data",
        datetime: "dateTime",
        default: "default",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        defer: "defer",
        dir: "dir",
        disabled: "disabled",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        download: "download",
        draggable: "draggable",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        for: "htmlFor",
        form: "form",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        headers: "headers",
        height: "height",
        hidden: "hidden",
        high: "high",
        href: "href",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        icon: "icon",
        id: "id",
        imagesizes: "imageSizes",
        imagesrcset: "imageSrcSet",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        integrity: "integrity",
        is: "is",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        kind: "kind",
        label: "label",
        lang: "lang",
        list: "list",
        loop: "loop",
        low: "low",
        manifest: "manifest",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        max: "max",
        maxlength: "maxLength",
        media: "media",
        mediagroup: "mediaGroup",
        method: "method",
        min: "min",
        minlength: "minLength",
        multiple: "multiple",
        muted: "muted",
        name: "name",
        nomodule: "noModule",
        nonce: "nonce",
        novalidate: "noValidate",
        open: "open",
        optimum: "optimum",
        pattern: "pattern",
        placeholder: "placeholder",
        playsinline: "playsInline",
        poster: "poster",
        preload: "preload",
        profile: "profile",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rel: "rel",
        required: "required",
        reversed: "reversed",
        role: "role",
        rows: "rows",
        rowspan: "rowSpan",
        sandbox: "sandbox",
        scope: "scope",
        scoped: "scoped",
        scrolling: "scrolling",
        seamless: "seamless",
        selected: "selected",
        shape: "shape",
        size: "size",
        sizes: "sizes",
        span: "span",
        spellcheck: "spellCheck",
        src: "src",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        start: "start",
        step: "step",
        style: "style",
        summary: "summary",
        tabindex: "tabIndex",
        target: "target",
        title: "title",
        type: "type",
        usemap: "useMap",
        value: "value",
        width: "width",
        wmode: "wmode",
        wrap: "wrap",
        about: "about",
        accentheight: "accentHeight",
        "accent-height": "accentHeight",
        accumulate: "accumulate",
        additive: "additive",
        alignmentbaseline: "alignmentBaseline",
        "alignment-baseline": "alignmentBaseline",
        allowreorder: "allowReorder",
        alphabetic: "alphabetic",
        amplitude: "amplitude",
        arabicform: "arabicForm",
        "arabic-form": "arabicForm",
        ascent: "ascent",
        attributename: "attributeName",
        attributetype: "attributeType",
        autoreverse: "autoReverse",
        azimuth: "azimuth",
        basefrequency: "baseFrequency",
        baselineshift: "baselineShift",
        "baseline-shift": "baselineShift",
        baseprofile: "baseProfile",
        bbox: "bbox",
        begin: "begin",
        bias: "bias",
        by: "by",
        calcmode: "calcMode",
        capheight: "capHeight",
        "cap-height": "capHeight",
        clip: "clip",
        clippath: "clipPath",
        "clip-path": "clipPath",
        clippathunits: "clipPathUnits",
        cliprule: "clipRule",
        "clip-rule": "clipRule",
        color: "color",
        colorinterpolation: "colorInterpolation",
        "color-interpolation": "colorInterpolation",
        colorinterpolationfilters: "colorInterpolationFilters",
        "color-interpolation-filters": "colorInterpolationFilters",
        colorprofile: "colorProfile",
        "color-profile": "colorProfile",
        colorrendering: "colorRendering",
        "color-rendering": "colorRendering",
        contentscripttype: "contentScriptType",
        contentstyletype: "contentStyleType",
        cursor: "cursor",
        cx: "cx",
        cy: "cy",
        d: "d",
        datatype: "datatype",
        decelerate: "decelerate",
        descent: "descent",
        diffuseconstant: "diffuseConstant",
        direction: "direction",
        display: "display",
        divisor: "divisor",
        dominantbaseline: "dominantBaseline",
        "dominant-baseline": "dominantBaseline",
        dur: "dur",
        dx: "dx",
        dy: "dy",
        edgemode: "edgeMode",
        elevation: "elevation",
        enablebackground: "enableBackground",
        "enable-background": "enableBackground",
        end: "end",
        exponent: "exponent",
        externalresourcesrequired: "externalResourcesRequired",
        fill: "fill",
        fillopacity: "fillOpacity",
        "fill-opacity": "fillOpacity",
        fillrule: "fillRule",
        "fill-rule": "fillRule",
        filter: "filter",
        filterres: "filterRes",
        filterunits: "filterUnits",
        floodopacity: "floodOpacity",
        "flood-opacity": "floodOpacity",
        floodcolor: "floodColor",
        "flood-color": "floodColor",
        focusable: "focusable",
        fontfamily: "fontFamily",
        "font-family": "fontFamily",
        fontsize: "fontSize",
        "font-size": "fontSize",
        fontsizeadjust: "fontSizeAdjust",
        "font-size-adjust": "fontSizeAdjust",
        fontstretch: "fontStretch",
        "font-stretch": "fontStretch",
        fontstyle: "fontStyle",
        "font-style": "fontStyle",
        fontvariant: "fontVariant",
        "font-variant": "fontVariant",
        fontweight: "fontWeight",
        "font-weight": "fontWeight",
        format: "format",
        from: "from",
        fx: "fx",
        fy: "fy",
        g1: "g1",
        g2: "g2",
        glyphname: "glyphName",
        "glyph-name": "glyphName",
        glyphorientationhorizontal: "glyphOrientationHorizontal",
        "glyph-orientation-horizontal": "glyphOrientationHorizontal",
        glyphorientationvertical: "glyphOrientationVertical",
        "glyph-orientation-vertical": "glyphOrientationVertical",
        glyphref: "glyphRef",
        gradienttransform: "gradientTransform",
        gradientunits: "gradientUnits",
        hanging: "hanging",
        horizadvx: "horizAdvX",
        "horiz-adv-x": "horizAdvX",
        horizoriginx: "horizOriginX",
        "horiz-origin-x": "horizOriginX",
        ideographic: "ideographic",
        imagerendering: "imageRendering",
        "image-rendering": "imageRendering",
        in2: "in2",
        in: "in",
        inlist: "inlist",
        intercept: "intercept",
        k1: "k1",
        k2: "k2",
        k3: "k3",
        k4: "k4",
        k: "k",
        kernelmatrix: "kernelMatrix",
        kernelunitlength: "kernelUnitLength",
        kerning: "kerning",
        keypoints: "keyPoints",
        keysplines: "keySplines",
        keytimes: "keyTimes",
        lengthadjust: "lengthAdjust",
        letterspacing: "letterSpacing",
        "letter-spacing": "letterSpacing",
        lightingcolor: "lightingColor",
        "lighting-color": "lightingColor",
        limitingconeangle: "limitingConeAngle",
        local: "local",
        markerend: "markerEnd",
        "marker-end": "markerEnd",
        markerheight: "markerHeight",
        markermid: "markerMid",
        "marker-mid": "markerMid",
        markerstart: "markerStart",
        "marker-start": "markerStart",
        markerunits: "markerUnits",
        markerwidth: "markerWidth",
        mask: "mask",
        maskcontentunits: "maskContentUnits",
        maskunits: "maskUnits",
        mathematical: "mathematical",
        mode: "mode",
        numoctaves: "numOctaves",
        offset: "offset",
        opacity: "opacity",
        operator: "operator",
        order: "order",
        orient: "orient",
        orientation: "orientation",
        origin: "origin",
        overflow: "overflow",
        overlineposition: "overlinePosition",
        "overline-position": "overlinePosition",
        overlinethickness: "overlineThickness",
        "overline-thickness": "overlineThickness",
        paintorder: "paintOrder",
        "paint-order": "paintOrder",
        panose1: "panose1",
        "panose-1": "panose1",
        pathlength: "pathLength",
        patterncontentunits: "patternContentUnits",
        patterntransform: "patternTransform",
        patternunits: "patternUnits",
        pointerevents: "pointerEvents",
        "pointer-events": "pointerEvents",
        points: "points",
        pointsatx: "pointsAtX",
        pointsaty: "pointsAtY",
        pointsatz: "pointsAtZ",
        prefix: "prefix",
        preservealpha: "preserveAlpha",
        preserveaspectratio: "preserveAspectRatio",
        primitiveunits: "primitiveUnits",
        property: "property",
        r: "r",
        radius: "radius",
        refx: "refX",
        refy: "refY",
        renderingintent: "renderingIntent",
        "rendering-intent": "renderingIntent",
        repeatcount: "repeatCount",
        repeatdur: "repeatDur",
        requiredextensions: "requiredExtensions",
        requiredfeatures: "requiredFeatures",
        resource: "resource",
        restart: "restart",
        result: "result",
        results: "results",
        rotate: "rotate",
        rx: "rx",
        ry: "ry",
        scale: "scale",
        security: "security",
        seed: "seed",
        shaperendering: "shapeRendering",
        "shape-rendering": "shapeRendering",
        slope: "slope",
        spacing: "spacing",
        specularconstant: "specularConstant",
        specularexponent: "specularExponent",
        speed: "speed",
        spreadmethod: "spreadMethod",
        startoffset: "startOffset",
        stddeviation: "stdDeviation",
        stemh: "stemh",
        stemv: "stemv",
        stitchtiles: "stitchTiles",
        stopcolor: "stopColor",
        "stop-color": "stopColor",
        stopopacity: "stopOpacity",
        "stop-opacity": "stopOpacity",
        strikethroughposition: "strikethroughPosition",
        "strikethrough-position": "strikethroughPosition",
        strikethroughthickness: "strikethroughThickness",
        "strikethrough-thickness": "strikethroughThickness",
        string: "string",
        stroke: "stroke",
        strokedasharray: "strokeDasharray",
        "stroke-dasharray": "strokeDasharray",
        strokedashoffset: "strokeDashoffset",
        "stroke-dashoffset": "strokeDashoffset",
        strokelinecap: "strokeLinecap",
        "stroke-linecap": "strokeLinecap",
        strokelinejoin: "strokeLinejoin",
        "stroke-linejoin": "strokeLinejoin",
        strokemiterlimit: "strokeMiterlimit",
        "stroke-miterlimit": "strokeMiterlimit",
        strokewidth: "strokeWidth",
        "stroke-width": "strokeWidth",
        strokeopacity: "strokeOpacity",
        "stroke-opacity": "strokeOpacity",
        suppresscontenteditablewarning: "suppressContentEditableWarning",
        suppresshydrationwarning: "suppressHydrationWarning",
        surfacescale: "surfaceScale",
        systemlanguage: "systemLanguage",
        tablevalues: "tableValues",
        targetx: "targetX",
        targety: "targetY",
        textanchor: "textAnchor",
        "text-anchor": "textAnchor",
        textdecoration: "textDecoration",
        "text-decoration": "textDecoration",
        textlength: "textLength",
        textrendering: "textRendering",
        "text-rendering": "textRendering",
        to: "to",
        transform: "transform",
        typeof: "typeof",
        u1: "u1",
        u2: "u2",
        underlineposition: "underlinePosition",
        "underline-position": "underlinePosition",
        underlinethickness: "underlineThickness",
        "underline-thickness": "underlineThickness",
        unicode: "unicode",
        unicodebidi: "unicodeBidi",
        "unicode-bidi": "unicodeBidi",
        unicoderange: "unicodeRange",
        "unicode-range": "unicodeRange",
        unitsperem: "unitsPerEm",
        "units-per-em": "unitsPerEm",
        unselectable: "unselectable",
        valphabetic: "vAlphabetic",
        "v-alphabetic": "vAlphabetic",
        values: "values",
        vectoreffect: "vectorEffect",
        "vector-effect": "vectorEffect",
        version: "version",
        vertadvy: "vertAdvY",
        "vert-adv-y": "vertAdvY",
        vertoriginx: "vertOriginX",
        "vert-origin-x": "vertOriginX",
        vertoriginy: "vertOriginY",
        "vert-origin-y": "vertOriginY",
        vhanging: "vHanging",
        "v-hanging": "vHanging",
        videographic: "vIdeographic",
        "v-ideographic": "vIdeographic",
        viewbox: "viewBox",
        viewtarget: "viewTarget",
        visibility: "visibility",
        vmathematical: "vMathematical",
        "v-mathematical": "vMathematical",
        vocab: "vocab",
        widths: "widths",
        wordspacing: "wordSpacing",
        "word-spacing": "wordSpacing",
        writingmode: "writingMode",
        "writing-mode": "writingMode",
        x1: "x1",
        x2: "x2",
        x: "x",
        xchannelselector: "xChannelSelector",
        xheight: "xHeight",
        "x-height": "xHeight",
        xlinkactuate: "xlinkActuate",
        "xlink:actuate": "xlinkActuate",
        xlinkarcrole: "xlinkArcrole",
        "xlink:arcrole": "xlinkArcrole",
        xlinkhref: "xlinkHref",
        "xlink:href": "xlinkHref",
        xlinkrole: "xlinkRole",
        "xlink:role": "xlinkRole",
        xlinkshow: "xlinkShow",
        "xlink:show": "xlinkShow",
        xlinktitle: "xlinkTitle",
        "xlink:title": "xlinkTitle",
        xlinktype: "xlinkType",
        "xlink:type": "xlinkType",
        xmlbase: "xmlBase",
        "xml:base": "xmlBase",
        xmllang: "xmlLang",
        "xml:lang": "xmlLang",
        xmlns: "xmlns",
        "xml:space": "xmlSpace",
        xmlnsxlink: "xmlnsXlink",
        "xmlns:xlink": "xmlnsXlink",
        xmlspace: "xmlSpace",
        y1: "y1",
        y2: "y2",
        y: "y",
        ychannelselector: "yChannelSelector",
        z: "z",
        zoomandpan: "zoomAndPan",
      };
      let wt = function () {};
      {
        const Te = {};
        const vo = /^on./;
        const go = /^on[^A-Z]/;
        const xt = new RegExp("^(aria)-[" + tr + "]*$");
        const hn = new RegExp("^(aria)[A-Z][" + tr + "]*$");
        wt = function (o, a, f, d) {
          if (B.call(Te, a) && Te[a]) return !0;
          const t = a.toLowerCase();
          if (t === "onfocusin" || t === "onfocusout") {
            return (
              c(
                "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
              ),
              (Te[a] = !0),
              !0
            );
          }
          if (d != null) {
            const r = d.registrationNameDependencies;
            const l = d.possibleRegistrationNames;
            if (r.hasOwnProperty(a)) return !0;
            const u = l.hasOwnProperty(t) ? l[t] : null;
            if (u != null) {
              return (
                c(
                  "Invalid event handler property `%s`. Did you mean `%s`?",
                  a,
                  u
                ),
                (Te[a] = !0),
                !0
              );
            }
            if (vo.test(a)) {
              return (
                c(
                  "Unknown event handler property `%s`. It will be ignored.",
                  a
                ),
                (Te[a] = !0),
                !0
              );
            }
          } else if (vo.test(a)) {
            return (
              go.test(a) &&
                c(
                  "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
                  a
                ),
              (Te[a] = !0),
              !0
            );
          }
          if (xt.test(a) || hn.test(a)) return !0;
          if (t === "innerhtml") {
            return (
              c(
                "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
              ),
              (Te[a] = !0),
              !0
            );
          }
          if (t === "aria") {
            return (
              c(
                "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
              ),
              (Te[a] = !0),
              !0
            );
          }
          if (
            t === "is" &&
            f !== null &&
            f !== void 0 &&
            typeof f !== "string"
          ) {
            return (
              c(
                "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
                typeof f
              ),
              (Te[a] = !0),
              !0
            );
          }
          if (typeof f === "number" && isNaN(f)) {
            return (
              c(
                "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
                a
              ),
              (Te[a] = !0),
              !0
            );
          }
          const p = uo(a);
          const g = p !== null && p.type === Er;
          if (pn.hasOwnProperty(t)) {
            const y = pn[t];
            if (y !== a) {
              return (
                c("Invalid DOM property `%s`. Did you mean `%s`?", a, y),
                (Te[a] = !0),
                !0
              );
            }
          } else if (!g && a !== t) {
            return (
              c(
                "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
                a,
                t
              ),
              (Te[a] = !0),
              !0
            );
          }
          return typeof f === "boolean" && so(a, f, p, !1)
            ? (f
                ? c(
                    'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                    f,
                    a,
                    a,
                    f,
                    a
                  )
                : c(
                    'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                    f,
                    a,
                    a,
                    f,
                    a,
                    a,
                    a
                  ),
              (Te[a] = !0),
              !0)
            : g
            ? !0
            : so(a, f, p, !1)
            ? ((Te[a] = !0), !1)
            : ((f === "false" || f === "true") &&
                p !== null &&
                p.type === bt &&
                (c(
                  "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
                  f,
                  a,
                  f === "false"
                    ? "The browser will interpret it as a truthy value."
                    : 'Although this works, it will not work as expected if you pass the string "false".',
                  a,
                  f
                ),
                (Te[a] = !0)),
              !0);
        };
      }
      const vn = function (o, a, f) {
        {
          const d = [];
          for (const t in a) {
            const r = wt(o, t, a[t], f);
            r || d.push(t);
          }
          const l = d
            .map(function (u) {
              return "`" + u + "`";
            })
            .join(", ");
          d.length === 1
            ? c(
                "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
                l,
                o
              )
            : d.length > 1 &&
              c(
                "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",
                l,
                o
              );
        }
      };
      function Ir(o, a, f) {
        fn(o, a) || vn(o, a, f);
      }
      let ur = function () {};
      {
        const _r = /^(?:webkit|moz|o)[A-Z]/;
        const ya = /^-ms-/;
        const ba = /-(.)/g;
        const mo = /;\s*$/;
        const Ut = {};
        const gn = {};
        let jt = !1;
        let Pr = !1;
        const ge = function (o) {
          return o.replace(ba, function (a, f) {
            return f.toUpperCase();
          });
        };
        const Sa = function (o) {
          (Ut.hasOwnProperty(o) && Ut[o]) ||
            ((Ut[o] = !0),
            c(
              "Unsupported style property %s. Did you mean %s?",
              o,
              ge(o.replace(ya, "ms-"))
            ));
        };
        const wa = function (o) {
          (Ut.hasOwnProperty(o) && Ut[o]) ||
            ((Ut[o] = !0),
            c(
              "Unsupported vendor-prefixed style property %s. Did you mean %s?",
              o,
              o.charAt(0).toUpperCase() + o.slice(1)
            ));
        };
        const xa = function (o, a) {
          (gn.hasOwnProperty(a) && gn[a]) ||
            ((gn[a] = !0),
            c(
              'Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.',
              o,
              a.replace(mo, "")
            ));
        };
        const ka = function (o, a) {
          jt ||
            ((jt = !0),
            c("`NaN` is an invalid value for the `%s` css style property.", o));
        };
        const mn = function (o, a) {
          Pr ||
            ((Pr = !0),
            c(
              "`Infinity` is an invalid value for the `%s` css style property.",
              o
            ));
        };
        ur = function (o, a) {
          o.indexOf("-") > -1
            ? Sa(o)
            : _r.test(o)
            ? wa(o)
            : mo.test(a) && xa(o, a),
            typeof a === "number" &&
              (isNaN(a) ? ka(o, a) : isFinite(a) || mn(o, a));
        };
      }
      const yo = ur;
      const Ta = /["'&<>]/;
      function me(o) {
        Me(o);
        const a = "" + o;
        const f = Ta.exec(a);
        if (!f) return a;
        let d;
        let t = "";
        let r;
        let l = 0;
        for (r = f.index; r < a.length; r++) {
          switch (a.charCodeAt(r)) {
            case 34:
              d = "&quot;";
              break;
            case 38:
              d = "&amp;";
              break;
            case 39:
              d = "&#x27;";
              break;
            case 60:
              d = "&lt;";
              break;
            case 62:
              d = "&gt;";
              break;
            default:
              continue;
          }
          l !== r && (t += a.substring(l, r)), (l = r + 1), (t += d);
        }
        return l !== r ? t + a.substring(l, r) : t;
      }
      function be(o) {
        return typeof o === "boolean" || typeof o === "number" ? "" + o : me(o);
      }
      const Ca = /([A-Z])/g;
      const Ea = /^ms-/;
      function Ra(o) {
        return o.replace(Ca, "-$1").toLowerCase().replace(Ea, "-ms-");
      }
      const bo =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
      let So = !1;
      function Ia(o) {
        !So &&
          bo.test(o) &&
          ((So = !0),
          c(
            "A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",
            JSON.stringify(o)
          ));
      }
      const _a = Array.isArray;
      function cr(o) {
        return _a(o);
      }
      const Fr = F("<script>");
      const kt = F("</script>");
      const Ar = F('<script src="');
      const Dr = F('<script type="module" src="');
      const fr = F('" async=""></script>');
      function yn(o) {
        return Me(o), ("" + o).replace(Tt, Or);
      }
      var Tt = /(<\/|<)(s)(cript)/gi;
      var Or = function (o, a, f, d) {
        return "" + a + (f === "s" ? "\\u0073" : "\\u0053") + d;
      };
      function He(o, a, f, d, t) {
        const r = o === void 0 ? "" : o;
        const l = a === void 0 ? Fr : F('<script nonce="' + be(a) + '">');
        const u = [];
        if ((f !== void 0 && u.push(l, yn(f), kt), d !== void 0)) {
          for (let p = 0; p < d.length; p++) u.push(Ar, be(d[p]), fr);
        }
        if (t !== void 0) {
          for (let g = 0; g < t.length; g++) u.push(Dr, be(t[g]), fr);
        }
        return {
          bootstrapChunks: u,
          startInlineScript: l,
          placeholderPrefix: F(r + "P:"),
          segmentPrefix: F(r + "S:"),
          boundaryPrefix: r + "B:",
          idPrefix: r,
          nextSuspenseID: 0,
          sentCompleteSegmentFunction: !1,
          sentCompleteBoundaryFunction: !1,
          sentClientRenderFunction: !1,
        };
      }
      const Ht = 0;
      const Ct = 1;
      const Wt = 2;
      const zt = 3;
      const Et = 4;
      const dr = 5;
      const bn = 6;
      const Sn = 7;
      function Ee(o, a) {
        return { insertionMode: o, selectedValue: a };
      }
      function wn(o) {
        const a =
          o === "http://www.w3.org/2000/svg"
            ? Wt
            : o === "http://www.w3.org/1998/Math/MathML"
            ? zt
            : Ht;
        return Ee(a, null);
      }
      function Mr(o, a, f) {
        switch (a) {
          case "select":
            return Ee(Ct, f.value != null ? f.value : f.defaultValue);
          case "svg":
            return Ee(Wt, null);
          case "math":
            return Ee(zt, null);
          case "foreignObject":
            return Ee(Ct, null);
          case "table":
            return Ee(Et, null);
          case "thead":
          case "tbody":
          case "tfoot":
            return Ee(dr, null);
          case "colgroup":
            return Ee(Sn, null);
          case "tr":
            return Ee(bn, null);
        }
        return o.insertionMode >= Et || o.insertionMode === Ht
          ? Ee(Ct, null)
          : o;
      }
      const Lr = null;
      function Br(o) {
        const a = o.nextSuspenseID++;
        return F(o.boundaryPrefix + a.toString(16));
      }
      function wo(o, a, f) {
        const d = o.idPrefix;
        let t = ":" + d + "R" + a;
        return f > 0 && (t += "H" + f.toString(32)), t + ":";
      }
      function We(o) {
        return be(o);
      }
      const Rt = F("<!-- -->");
      function ht(o, a, f, d) {
        return a === "" ? d : (d && o.push(Rt), o.push(We(a)), !0);
      }
      function $t(o, a, f, d) {
        f && d && o.push(Rt);
      }
      const Ce = new Map();
      function rt(o) {
        const a = Ce.get(o);
        if (a !== void 0) return a;
        const f = F(be(Ra(o)));
        return Ce.set(o, f), f;
      }
      const pr = F(' style="');
      const hr = F(":");
      const It = F(";");
      function vr(o, a, f) {
        if (typeof f !== "object") {
          throw new Error(
            "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
          );
        }
        let d = !0;
        for (const t in f) {
          if (B.call(f, t)) {
            const r = f[t];
            if (!(r == null || typeof r === "boolean" || r === "")) {
              let l = void 0;
              let u = void 0;
              const p = t.indexOf("--") === 0;
              p
                ? ((l = be(t)), ft(r, t), (u = be(("" + r).trim())))
                : (yo(t, r),
                  (l = rt(t)),
                  typeof r === "number"
                    ? r !== 0 && !B.call(ar, t)
                      ? (u = r + "px")
                      : (u = "" + r)
                    : (ft(r, t), (u = be(("" + r).trim())))),
                d ? ((d = !1), o.push(pr, l, hr, u)) : o.push(It, l, hr, u);
            }
          }
        }
        d || o.push(vt);
      }
      const Ze = F(" ");
      const _t = F('="');
      var vt = F('"');
      const Ur = F('=""');
      function Re(o, a, f, d) {
        switch (f) {
          case "style": {
            vr(o, a, d);
            return;
          }
          case "defaultValue":
          case "defaultChecked":
          case "innerHTML":
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            return;
        }
        if (
          !(
            f.length > 2 &&
            (f[0] === "o" || f[0] === "O") &&
            (f[1] === "n" || f[1] === "N")
          )
        ) {
          const t = uo(f);
          if (t !== null) {
            switch (typeof d) {
              case "function":
              case "symbol":
                return;
              case "boolean":
                if (!t.acceptsBooleans) return;
            }
            const r = t.attributeName;
            const l = r;
            switch (t.type) {
              case bt:
                d && o.push(Ze, l, Ur);
                return;
              case Le:
                d === !0
                  ? o.push(Ze, l, Ur)
                  : d === !1 || o.push(Ze, l, _t, be(d), vt);
                return;
              case er:
                isNaN(d) || o.push(Ze, l, _t, be(d), vt);
                break;
              case re:
                !isNaN(d) && d >= 1 && o.push(Ze, l, _t, be(d), vt);
                break;
              default:
                t.sanitizeURL && (Lt(d, r), (d = "" + d), Ia(d)),
                  o.push(Ze, l, _t, be(d), vt);
            }
          } else if (St(f)) {
            switch (typeof d) {
              case "function":
              case "symbol":
                return;
              case "boolean": {
                const u = f.toLowerCase().slice(0, 5);
                if (u !== "data-" && u !== "aria-") return;
              }
            }
            o.push(Ze, f, _t, be(d), vt);
          }
        }
      }
      const Je = F(">");
      const xn = F("/>");
      function gr(o, a, f) {
        if (a != null) {
          if (f != null) {
            throw new Error(
              "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
            );
          }
          if (typeof a !== "object" || !("__html" in a)) {
            throw new Error(
              "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
            );
          }
          const d = a.__html;
          d != null && (Me(d), o.push("" + d));
        }
      }
      let jr = !1;
      let kn = !1;
      let Tn = !1;
      let xo = !1;
      let ko = !1;
      let To = !1;
      let Cn = !1;
      function Pt(o, a) {
        {
          const f = o[a];
          if (f != null) {
            const d = cr(f);
            o.multiple && !d
              ? c(
                  "The `%s` prop supplied to <select> must be an array if `multiple` is true.",
                  a
                )
              : !o.multiple &&
                d &&
                c(
                  "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.",
                  a
                );
          }
        }
      }
      function Pa(o, a, f) {
        lr("select", a),
          Pt(a, "value"),
          Pt(a, "defaultValue"),
          a.value !== void 0 &&
            a.defaultValue !== void 0 &&
            !Tn &&
            (c(
              "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"
            ),
            (Tn = !0)),
          o.push(T("select"));
        let d = null;
        let t = null;
        for (const r in a) {
          if (B.call(a, r)) {
            const l = a[r];
            if (l == null) continue;
            switch (r) {
              case "children":
                d = l;
                break;
              case "dangerouslySetInnerHTML":
                t = l;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                Re(o, f, r, l);
                break;
            }
          }
        }
        return o.push(Je), gr(o, t, d), d;
      }
      function gt(o) {
        let a = "";
        return (
          e.Children.forEach(o, function (f) {
            f != null &&
              ((a += f),
              !ko &&
                typeof f !== "string" &&
                typeof f !== "number" &&
                ((ko = !0),
                c(
                  "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
                )));
          }),
          a
        );
      }
      const Hr = F(' selected=""');
      function Fa(o, a, f, d) {
        const t = d.selectedValue;
        o.push(T("option"));
        let r = null;
        let l = null;
        let u = null;
        let p = null;
        for (const g in a) {
          if (B.call(a, g)) {
            const y = a[g];
            if (y == null) continue;
            switch (g) {
              case "children":
                r = y;
                break;
              case "selected":
                (u = y),
                  Cn ||
                    (c(
                      "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
                    ),
                    (Cn = !0));
                break;
              case "dangerouslySetInnerHTML":
                p = y;
                break;
              case "value":
                l = y;
              default:
                Re(o, f, g, y);
                break;
            }
          }
        }
        if (t != null) {
          let w;
          if (
            (l !== null
              ? (Lt(l, "value"), (w = "" + l))
              : (p !== null &&
                  (To ||
                    ((To = !0),
                    c(
                      "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
                    ))),
                (w = gt(r))),
            cr(t))
          ) {
            for (let C = 0; C < t.length; C++) {
              Lt(t[C], "value");
              const _ = "" + t[C];
              if (_ === w) {
                o.push(Hr);
                break;
              }
            }
          } else Lt(t, "select.value"), "" + t === w && o.push(Hr);
        } else u && o.push(Hr);
        return o.push(Je), gr(o, p, r), r;
      }
      function mr(o, a, f) {
        lr("input", a),
          a.checked !== void 0 &&
            a.defaultChecked !== void 0 &&
            !kn &&
            (c(
              "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
              "A component",
              a.type
            ),
            (kn = !0)),
          a.value !== void 0 &&
            a.defaultValue !== void 0 &&
            !jr &&
            (c(
              "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",
              "A component",
              a.type
            ),
            (jr = !0)),
          o.push(T("input"));
        let d = null;
        let t = null;
        let r = null;
        let l = null;
        for (const u in a) {
          if (B.call(a, u)) {
            const p = a[u];
            if (p == null) continue;
            switch (u) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(
                  "input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              case "defaultChecked":
                l = p;
                break;
              case "defaultValue":
                t = p;
                break;
              case "checked":
                r = p;
                break;
              case "value":
                d = p;
                break;
              default:
                Re(o, f, u, p);
                break;
            }
          }
        }
        return (
          r !== null
            ? Re(o, f, "checked", r)
            : l !== null && Re(o, f, "checked", l),
          d !== null
            ? Re(o, f, "value", d)
            : t !== null && Re(o, f, "value", t),
          o.push(xn),
          null
        );
      }
      function Be(o, a, f) {
        lr("textarea", a),
          a.value !== void 0 &&
            a.defaultValue !== void 0 &&
            !xo &&
            (c(
              "Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"
            ),
            (xo = !0)),
          o.push(T("textarea"));
        let d = null;
        let t = null;
        let r = null;
        for (const l in a) {
          if (B.call(a, l)) {
            const u = a[l];
            if (u == null) continue;
            switch (l) {
              case "children":
                r = u;
                break;
              case "value":
                d = u;
                break;
              case "defaultValue":
                t = u;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error(
                  "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                );
              default:
                Re(o, f, l, u);
                break;
            }
          }
        }
        if ((d === null && t !== null && (d = t), o.push(Je), r != null)) {
          if (
            (c(
              "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
            ),
            d != null)
          ) {
            throw new Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          }
          if (cr(r)) {
            if (r.length > 1) {
              throw new Error("<textarea> can only have at most one child.");
            }
            Me(r[0]), (d = "" + r[0]);
          }
          Me(r), (d = "" + r);
        }
        return (
          typeof d === "string" &&
            d[0] ===
              `
` &&
            o.push(_n),
          d !== null && (Lt(d, "value"), o.push(We("" + d))),
          null
        );
      }
      function En(o, a, f, d) {
        o.push(T(f));
        for (const t in a) {
          if (B.call(a, t)) {
            const r = a[t];
            if (r == null) continue;
            switch (t) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(
                  f +
                    " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                );
              default:
                Re(o, d, t, r);
                break;
            }
          }
        }
        return o.push(xn), null;
      }
      function Rn(o, a, f) {
        o.push(T("menuitem"));
        for (const d in a) {
          if (B.call(a, d)) {
            const t = a[d];
            if (t == null) continue;
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw new Error(
                  "menuitems cannot have `children` nor `dangerouslySetInnerHTML`."
                );
              default:
                Re(o, f, d, t);
                break;
            }
          }
        }
        return o.push(Je), null;
      }
      function Aa(o, a, f) {
        o.push(T("title"));
        let d = null;
        for (const t in a) {
          if (B.call(a, t)) {
            const r = a[t];
            if (r == null) continue;
            switch (t) {
              case "children":
                d = r;
                break;
              case "dangerouslySetInnerHTML":
                throw new Error(
                  "`dangerouslySetInnerHTML` does not make sense on <title>."
                );
              default:
                Re(o, f, t, r);
                break;
            }
          }
        }
        o.push(Je);
        {
          const l = Array.isArray(d) && d.length < 2 ? d[0] || null : d;
          Array.isArray(d) && d.length > 1
            ? c(
                "A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering"
              )
            : l != null && l.$$typeof != null
            ? c(
                "A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering"
              )
            : l != null &&
              typeof l !== "string" &&
              typeof l !== "number" &&
              c(
                "A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering"
              );
        }
        return d;
      }
      function In(o, a, f, d) {
        o.push(T(f));
        let t = null;
        let r = null;
        for (const l in a) {
          if (B.call(a, l)) {
            const u = a[l];
            if (u == null) continue;
            switch (l) {
              case "children":
                t = u;
                break;
              case "dangerouslySetInnerHTML":
                r = u;
                break;
              default:
                Re(o, d, l, u);
                break;
            }
          }
        }
        return (
          o.push(Je),
          gr(o, r, t),
          typeof t === "string" ? (o.push(We(t)), null) : t
        );
      }
      function Da(o, a, f, d) {
        o.push(T(f));
        let t = null;
        let r = null;
        for (const l in a) {
          if (B.call(a, l)) {
            const u = a[l];
            if (u == null) continue;
            switch (l) {
              case "children":
                t = u;
                break;
              case "dangerouslySetInnerHTML":
                r = u;
                break;
              case "style":
                vr(o, d, u);
                break;
              case "suppressContentEditableWarning":
              case "suppressHydrationWarning":
                break;
              default:
                St(l) &&
                  typeof u !== "function" &&
                  typeof u !== "symbol" &&
                  o.push(Ze, l, _t, be(u), vt);
                break;
            }
          }
        }
        return o.push(Je), gr(o, r, t), t;
      }
      var _n = F(`
`);
      function h(o, a, f, d) {
        o.push(T(f));
        let t = null;
        let r = null;
        for (const l in a) {
          if (B.call(a, l)) {
            const u = a[l];
            if (u == null) continue;
            switch (l) {
              case "children":
                t = u;
                break;
              case "dangerouslySetInnerHTML":
                r = u;
                break;
              default:
                Re(o, d, l, u);
                break;
            }
          }
        }
        if ((o.push(Je), r != null)) {
          if (t != null) {
            throw new Error(
              "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
            );
          }
          if (typeof r !== "object" || !("__html" in r)) {
            throw new Error(
              "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information."
            );
          }
          const p = r.__html;
          p != null &&
            (typeof p === "string" &&
            p.length > 0 &&
            p[0] ===
              `
`
              ? o.push(_n, p)
              : (Me(p), o.push("" + p)));
        }
        return (
          typeof t === "string" &&
            t[0] ===
              `
` &&
            o.push(_n),
          t
        );
      }
      const b = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
      const k = new Map();
      function T(o) {
        let a = k.get(o);
        if (a === void 0) {
          if (!b.test(o)) throw new Error("Invalid tag: " + o);
          (a = F("<" + o)), k.set(o, a);
        }
        return a;
      }
      const I = F("<!DOCTYPE html>");
      function U(o, a, f, d, t) {
        switch (
          (dn(a, f),
          ma(a, f),
          Ir(a, f, null),
          !f.suppressContentEditableWarning &&
            f.contentEditable &&
            f.children != null &&
            c(
              "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
            ),
          t.insertionMode !== Wt &&
            t.insertionMode !== zt &&
            a.indexOf("-") === -1 &&
            typeof f.is !== "string" &&
            a.toLowerCase() !== a &&
            c(
              "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
              a
            ),
          a)
        ) {
          case "select":
            return Pa(o, f, d);
          case "option":
            return Fa(o, f, d, t);
          case "textarea":
            return Be(o, f, d);
          case "input":
            return mr(o, f, d);
          case "menuitem":
            return Rn(o, f, d);
          case "title":
            return Aa(o, f, d);
          case "listing":
          case "pre":
            return h(o, f, a, d);
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            return En(o, f, a, d);
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return In(o, f, a, d);
          case "html":
            return t.insertionMode === Ht && o.push(I), In(o, f, a, d);
          default:
            return a.indexOf("-") === -1 && typeof f.is !== "string"
              ? In(o, f, a, d)
              : Da(o, f, a, d);
        }
      }
      const M = F("</");
      const H = F(">");
      function z(o, a, f) {
        switch (a) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            o.push(M, a, H);
        }
      }
      function Y(o, a) {
        for (var f = a.bootstrapChunks, d = 0; d < f.length - 1; d++) {
          P(o, f[d]);
        }
        return d < f.length ? W(o, f[d]) : !0;
      }
      const Q = F('<template id="');
      const K = F('"></template>');
      function ee(o, a, f) {
        P(o, Q), P(o, a.placeholderPrefix);
        const d = f.toString(16);
        return P(o, d), W(o, K);
      }
      const fe = F("<!--$-->");
      const Se = F('<!--$?--><template id="');
      const yr = F('"></template>');
      const Pn = F("<!--$!-->");
      const Wr = F("<!--/$-->");
      const Co = F("<template");
      const zr = F('"');
      const Oa = F(' data-dgst="');
      const Eo = F(' data-msg="');
      const Ma = F(' data-stck="');
      const vs = F("></template>");
      function gs(o, a) {
        return W(o, fe);
      }
      function Ni(o, a, f) {
        if ((P(o, Se), f === null)) {
          throw new Error(
            "An ID must have been assigned before we can complete the boundary."
          );
        }
        return P(o, f), W(o, yr);
      }
      function ms(o, a, f, d, t) {
        let r;
        return (
          (r = W(o, Pn)),
          P(o, Co),
          f && (P(o, Oa), P(o, be(f)), P(o, zr)),
          d && (P(o, Eo), P(o, be(d)), P(o, zr)),
          t && (P(o, Ma), P(o, be(t)), P(o, zr)),
          (r = W(o, vs)),
          r
        );
      }
      function ys(o, a) {
        return W(o, Wr);
      }
      function Vi(o, a) {
        return W(o, Wr);
      }
      function bs(o, a) {
        return W(o, Wr);
      }
      const Ss = F('<div hidden id="');
      const ws = F('">');
      const xs = F("</div>");
      const ks = F('<svg aria-hidden="true" style="display:none" id="');
      const Ts = F('">');
      const Cs = F("</svg>");
      const Es = F('<math aria-hidden="true" style="display:none" id="');
      const Rs = F('">');
      const Is = F("</math>");
      const _s = F('<table hidden id="');
      const Ps = F('">');
      const Fs = F("</table>");
      const As = F('<table hidden><tbody id="');
      const Ds = F('">');
      const Os = F("</tbody></table>");
      const Ms = F('<table hidden><tr id="');
      const Ls = F('">');
      const Bs = F("</tr></table>");
      const Us = F('<table hidden><colgroup id="');
      const js = F('">');
      const Hs = F("</colgroup></table>");
      function Ws(o, a, f, d) {
        switch (f.insertionMode) {
          case Ht:
          case Ct:
            return (
              P(o, Ss), P(o, a.segmentPrefix), P(o, d.toString(16)), W(o, ws)
            );
          case Wt:
            return (
              P(o, ks), P(o, a.segmentPrefix), P(o, d.toString(16)), W(o, Ts)
            );
          case zt:
            return (
              P(o, Es), P(o, a.segmentPrefix), P(o, d.toString(16)), W(o, Rs)
            );
          case Et:
            return (
              P(o, _s), P(o, a.segmentPrefix), P(o, d.toString(16)), W(o, Ps)
            );
          case dr:
            return (
              P(o, As), P(o, a.segmentPrefix), P(o, d.toString(16)), W(o, Ds)
            );
          case bn:
            return (
              P(o, Ms), P(o, a.segmentPrefix), P(o, d.toString(16)), W(o, Ls)
            );
          case Sn:
            return (
              P(o, Us), P(o, a.segmentPrefix), P(o, d.toString(16)), W(o, js)
            );
          default:
            throw new Error("Unknown insertion mode. This is a bug in React.");
        }
      }
      function zs(o, a) {
        switch (a.insertionMode) {
          case Ht:
          case Ct:
            return W(o, xs);
          case Wt:
            return W(o, Cs);
          case zt:
            return W(o, Is);
          case Et:
            return W(o, Fs);
          case dr:
            return W(o, Os);
          case bn:
            return W(o, Bs);
          case Sn:
            return W(o, Hs);
          default:
            throw new Error("Unknown insertion mode. This is a bug in React.");
        }
      }
      const $s =
        "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}";
      const Ns =
        'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}';
      const Vs =
        'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}';
      const Ys = F($s + ';$RS("');
      const Gs = F('$RS("');
      const Xs = F('","');
      const Zs = F('")</script>');
      function La(o, a, f) {
        P(o, a.startInlineScript),
          a.sentCompleteSegmentFunction
            ? P(o, Gs)
            : ((a.sentCompleteSegmentFunction = !0), P(o, Ys)),
          P(o, a.segmentPrefix);
        const d = f.toString(16);
        return P(o, d), P(o, Xs), P(o, a.placeholderPrefix), P(o, d), W(o, Zs);
      }
      const Js = F(Ns + ';$RC("');
      const Qs = F('$RC("');
      const Ba = F('","');
      const Yi = F('")</script>');
      function Gi(o, a, f, d) {
        if (
          (P(o, a.startInlineScript),
          a.sentCompleteBoundaryFunction
            ? P(o, Qs)
            : ((a.sentCompleteBoundaryFunction = !0), P(o, Js)),
          f === null)
        ) {
          throw new Error(
            "An ID must have been assigned before we can complete the boundary."
          );
        }
        const t = d.toString(16);
        return P(o, f), P(o, Ba), P(o, a.segmentPrefix), P(o, t), W(o, Yi);
      }
      const Xi = F(Vs + ';$RX("');
      const Zi = F('$RX("');
      const Ks = F('"');
      const qs = F(")</script>");
      const Ua = F(",");
      function eu(o, a, f, d, t, r) {
        if (
          (P(o, a.startInlineScript),
          a.sentClientRenderFunction
            ? P(o, Zi)
            : ((a.sentClientRenderFunction = !0), P(o, Xi)),
          f === null)
        ) {
          throw new Error(
            "An ID must have been assigned before we can complete the boundary."
          );
        }
        return (
          P(o, f),
          P(o, Ks),
          (d || t || r) && (P(o, Ua), P(o, ja(d || ""))),
          (t || r) && (P(o, Ua), P(o, ja(t || ""))),
          r && (P(o, Ua), P(o, ja(r))),
          W(o, qs)
        );
      }
      const Qe = /[<\u2028\u2029]/g;
      function ja(o) {
        const a = JSON.stringify(o);
        return a.replace(Qe, function (f) {
          switch (f) {
            case "<":
              return "\\u003c";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
            default:
              throw new Error(
                "escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React"
              );
          }
        });
      }
      const ze = Object.assign;
      const Ji = Symbol.for("react.element");
      const Ha = Symbol.for("react.portal");
      const Wa = Symbol.for("react.fragment");
      const Ro = Symbol.for("react.strict_mode");
      const Io = Symbol.for("react.profiler");
      const Fn = Symbol.for("react.provider");
      const An = Symbol.for("react.context");
      const Dn = Symbol.for("react.forward_ref");
      const On = Symbol.for("react.suspense");
      const $r = Symbol.for("react.suspense_list");
      const za = Symbol.for("react.memo");
      const _o = Symbol.for("react.lazy");
      const tu = Symbol.for("react.scope");
      const ru = Symbol.for("react.debug_trace_mode");
      const Qi = Symbol.for("react.legacy_hidden");
      const nu = Symbol.for("react.default_value");
      const Ki = Symbol.iterator;
      const ou = "@@iterator";
      function qi(o) {
        if (o === null || typeof o !== "object") return null;
        const a = (Ki && o[Ki]) || o[ou];
        return typeof a === "function" ? a : null;
      }
      function ie(o, a, f) {
        const d = o.displayName;
        if (d) return d;
        const t = a.displayName || a.name || "";
        return t !== "" ? f + "(" + t + ")" : f;
      }
      function Nr(o) {
        return o.displayName || "Context";
      }
      function ne(o) {
        if (o == null) return null;
        if (
          (typeof o.tag === "number" &&
            c(
              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
            ),
          typeof o === "function")
        ) {
          return o.displayName || o.name || null;
        }
        if (typeof o === "string") return o;
        switch (o) {
          case Wa:
            return "Fragment";
          case Ha:
            return "Portal";
          case Io:
            return "Profiler";
          case Ro:
            return "StrictMode";
          case On:
            return "Suspense";
          case $r:
            return "SuspenseList";
        }
        if (typeof o === "object") {
          switch (o.$$typeof) {
            case An:
              var a = o;
              return Nr(a) + ".Consumer";
            case Fn:
              var f = o;
              return Nr(f._context) + ".Provider";
            case Dn:
              return ie(o, o.render, "ForwardRef");
            case za:
              var d = o.displayName || null;
              return d !== null ? d : ne(o.type) || "Memo";
            case _o: {
              const t = o;
              const r = t._payload;
              const l = t._init;
              try {
                return ne(l(r));
              } catch {
                return null;
              }
            }
          }
        }
        return null;
      }
      let Vr = 0;
      let $a;
      let Na;
      let Va;
      let Ya;
      let Ga;
      let Xa;
      let el;
      function tl() {}
      tl.__reactDisabledLog = !0;
      function Za() {
        {
          if (Vr === 0) {
            ($a = console.log),
              (Na = console.info),
              (Va = console.warn),
              (Ya = console.error),
              (Ga = console.group),
              (Xa = console.groupCollapsed),
              (el = console.groupEnd);
            const o = {
              configurable: !0,
              enumerable: !0,
              value: tl,
              writable: !0,
            };
            Object.defineProperties(console, {
              info: o,
              log: o,
              warn: o,
              error: o,
              group: o,
              groupCollapsed: o,
              groupEnd: o,
            });
          }
          Vr++;
        }
      }
      function Ja() {
        {
          if ((Vr--, Vr === 0)) {
            const o = { configurable: !0, enumerable: !0, writable: !0 };
            Object.defineProperties(console, {
              log: ze({}, o, { value: $a }),
              info: ze({}, o, { value: Na }),
              warn: ze({}, o, { value: Va }),
              error: ze({}, o, { value: Ya }),
              group: ze({}, o, { value: Ga }),
              groupCollapsed: ze({}, o, { value: Xa }),
              groupEnd: ze({}, o, { value: el }),
            });
          }
          Vr < 0 &&
            c(
              "disabledDepth fell below zero. This is a bug in React. Please file an issue."
            );
        }
      }
      const br = s.ReactCurrentDispatcher;
      let Mn;
      function Nt(o, a, f) {
        {
          if (Mn === void 0) {
            try {
              throw Error();
            } catch (t) {
              const d = t.stack.trim().match(/\n( *(at )?)/);
              Mn = (d && d[1]) || "";
            }
          }
          return (
            `
` +
            Mn +
            o
          );
        }
      }
      let Qa = !1;
      let Yr;
      {
        const au = typeof WeakMap === "function" ? WeakMap : Map;
        Yr = new au();
      }
      function Po(o, a) {
        if (!o || Qa) return "";
        {
          const f = Yr.get(o);
          if (f !== void 0) return f;
        }
        let d;
        Qa = !0;
        const t = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        let r;
        (r = br.current), (br.current = null), Za();
        try {
          if (a) {
            const l = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(l.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect === "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(l, []);
              } catch (O) {
                d = O;
              }
              Reflect.construct(o, [], l);
            } else {
              try {
                l.call();
              } catch (O) {
                d = O;
              }
              o.call(l.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (O) {
              d = O;
            }
            o();
          }
        } catch (O) {
          if (O && d && typeof O.stack === "string") {
            for (
              var u = O.stack.split(`
`),
                p = d.stack.split(`
`),
                g = u.length - 1,
                y = p.length - 1;
              g >= 1 && y >= 0 && u[g] !== p[y];

            ) {
              y--;
            }
            for (; g >= 1 && y >= 0; g--, y--) {
              if (u[g] !== p[y]) {
                if (g !== 1 || y !== 1) {
                  do {
                    if ((g--, y--, y < 0 || u[g] !== p[y])) {
                      let w =
                        `
` + u[g].replace(" at new ", " at ");
                      return (
                        o.displayName &&
                          w.includes("<anonymous>") &&
                          (w = w.replace("<anonymous>", o.displayName)),
                        typeof o === "function" && Yr.set(o, w),
                        w
                      );
                    }
                  } while (g >= 1 && y >= 0);
                }
                break;
              }
            }
          }
        } finally {
          (Qa = !1), (br.current = r), Ja(), (Error.prepareStackTrace = t);
        }
        const C = o ? o.displayName || o.name : "";
        const _ = C ? Nt(C) : "";
        return typeof o === "function" && Yr.set(o, _), _;
      }
      function iu(o, a, f) {
        return Po(o, !0);
      }
      function Fo(o, a, f) {
        return Po(o, !1);
      }
      function rl(o) {
        const a = o.prototype;
        return !!(a && a.isReactComponent);
      }
      function Ao(o, a, f) {
        if (o == null) return "";
        if (typeof o === "function") return Po(o, rl(o));
        if (typeof o === "string") return Nt(o);
        switch (o) {
          case On:
            return Nt("Suspense");
          case $r:
            return Nt("SuspenseList");
        }
        if (typeof o === "object") {
          switch (o.$$typeof) {
            case Dn:
              return Fo(o.render);
            case za:
              return Ao(o.type, a, f);
            case _o: {
              const d = o;
              const t = d._payload;
              const r = d._init;
              try {
                return Ao(r(t), a, f);
              } catch {}
            }
          }
        }
        return "";
      }
      const Ln = {};
      const Ka = s.ReactDebugCurrentFrame;
      function Gr(o) {
        if (o) {
          const a = o._owner;
          const f = Ao(o.type, o._source, a ? a.type : null);
          Ka.setExtraStackFrame(f);
        } else Ka.setExtraStackFrame(null);
      }
      function Bn(o, a, f, d, t) {
        {
          const r = Function.call.bind(B);
          for (const l in o) {
            if (r(o, l)) {
              let u = void 0;
              try {
                if (typeof o[l] !== "function") {
                  const p = Error(
                    (d || "React class") +
                      ": " +
                      f +
                      " type `" +
                      l +
                      "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                      typeof o[l] +
                      "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  throw ((p.name = "Invariant Violation"), p);
                }
                u = o[l](
                  a,
                  l,
                  d,
                  f,
                  null,
                  "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                );
              } catch (g) {
                u = g;
              }
              u &&
                !(u instanceof Error) &&
                (Gr(t),
                c(
                  "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                  d || "React class",
                  f,
                  l,
                  typeof u
                ),
                Gr(null)),
                u instanceof Error &&
                  !(u.message in Ln) &&
                  ((Ln[u.message] = !0),
                  Gr(t),
                  c("Failed %s type: %s", f, u.message),
                  Gr(null));
            }
          }
        }
      }
      let Do;
      Do = {};
      const Oo = {};
      Object.freeze(Oo);
      function Xr(o, a) {
        {
          const f = o.contextTypes;
          if (!f) return Oo;
          const d = {};
          for (const t in f) d[t] = a[t];
          {
            const r = ne(o) || "Unknown";
            Bn(f, d, "context", r);
          }
          return d;
        }
      }
      function lu(o, a, f, d) {
        {
          if (typeof o.getChildContext !== "function") {
            {
              const t = ne(a) || "Unknown";
              Do[t] ||
                ((Do[t] = !0),
                c(
                  "%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",
                  t,
                  t
                ));
            }
            return f;
          }
          const r = o.getChildContext();
          for (const l in r) {
            if (!(l in d)) {
              throw new Error(
                (ne(a) || "Unknown") +
                  '.getChildContext(): key "' +
                  l +
                  '" is not defined in childContextTypes.'
              );
            }
          }
          {
            const u = ne(a) || "Unknown";
            Bn(d, r, "child context", u);
          }
          return ze({}, f, r);
        }
      }
      let nt;
      nt = {};
      const qa = null;
      let Ft = null;
      function Zr(o) {
        o.context._currentValue = o.parentValue;
      }
      function Mo(o) {
        o.context._currentValue = o.value;
      }
      function Un(o, a) {
        if (o !== a) {
          Zr(o);
          const f = o.parent;
          const d = a.parent;
          if (f === null) {
            if (d !== null) {
              throw new Error(
                "The stacks must reach the root at the same time. This is a bug in React."
              );
            }
          } else {
            if (d === null) {
              throw new Error(
                "The stacks must reach the root at the same time. This is a bug in React."
              );
            }
            Un(f, d);
          }
          Mo(a);
        }
      }
      function ei(o) {
        Zr(o);
        const a = o.parent;
        a !== null && ei(a);
      }
      function ti(o) {
        const a = o.parent;
        a !== null && ti(a), Mo(o);
      }
      function jn(o, a) {
        Zr(o);
        const f = o.parent;
        if (f === null) {
          throw new Error(
            "The depth must equal at least at zero before reaching the root. This is a bug in React."
          );
        }
        f.depth === a.depth ? Un(f, a) : jn(f, a);
      }
      function nl(o, a) {
        const f = a.parent;
        if (f === null) {
          throw new Error(
            "The depth must equal at least at zero before reaching the root. This is a bug in React."
          );
        }
        o.depth === f.depth ? Un(o, f) : nl(o, f), Mo(a);
      }
      function Lo(o) {
        const a = Ft;
        const f = o;
        a !== f &&
          (a === null
            ? ti(f)
            : f === null
            ? ei(a)
            : a.depth === f.depth
            ? Un(a, f)
            : a.depth > f.depth
            ? jn(a, f)
            : nl(a, f),
          (Ft = f));
      }
      function su(o, a) {
        let f;
        (f = o._currentValue),
          (o._currentValue = a),
          o._currentRenderer !== void 0 &&
            o._currentRenderer !== null &&
            o._currentRenderer !== nt &&
            c(
              "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
            ),
          (o._currentRenderer = nt);
        const d = Ft;
        const t = {
          parent: d,
          depth: d === null ? 0 : d.depth + 1,
          context: o,
          parentValue: f,
          value: a,
        };
        return (Ft = t), t;
      }
      function Hn(o) {
        const a = Ft;
        if (a === null) {
          throw new Error(
            "Tried to pop a Context at the root of the app. This is a bug in React."
          );
        }
        a.context !== o &&
          c(
            "The parent context is not the expected context. This is probably a bug in React."
          );
        {
          const f = a.parentValue;
          f === nu
            ? (a.context._currentValue = a.context._defaultValue)
            : (a.context._currentValue = f),
            o._currentRenderer !== void 0 &&
              o._currentRenderer !== null &&
              o._currentRenderer !== nt &&
              c(
                "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
              ),
            (o._currentRenderer = nt);
        }
        return (Ft = a.parent);
      }
      function ri() {
        return Ft;
      }
      function Wn(o) {
        const a = o._currentValue;
        return a;
      }
      function Bo(o) {
        return o._reactInternals;
      }
      function ol(o, a) {
        o._reactInternals = a;
      }
      const Uo = {};
      const jo = {};
      let zn;
      let $n;
      let Ho;
      let Jr;
      let Wo;
      let Qr;
      let Nn;
      let zo;
      let $o;
      {
        (zn = new Set()),
          ($n = new Set()),
          (Ho = new Set()),
          (Nn = new Set()),
          (Jr = new Set()),
          (zo = new Set()),
          ($o = new Set());
        const ni = new Set();
        (Qr = function (o, a) {
          if (!(o === null || typeof o === "function")) {
            const f = a + "_" + o;
            ni.has(f) ||
              (ni.add(f),
              c(
                "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",
                a,
                o
              ));
          }
        }),
          (Wo = function (o, a) {
            if (a === void 0) {
              const f = ne(o) || "Component";
              Jr.has(f) ||
                (Jr.add(f),
                c(
                  "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
                  f
                ));
            }
          });
      }
      function al(o, a) {
        {
          const f = o.constructor;
          const d = (f && ne(f)) || "ReactClass";
          const t = d + "." + a;
          if (Uo[t]) return;
          c(
            `%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`,
            a,
            a,
            d
          ),
            (Uo[t] = !0);
        }
      }
      const il = {
        isMounted: function (o) {
          return !1;
        },
        enqueueSetState: function (o, a, f) {
          const d = Bo(o);
          d.queue === null
            ? al(o, "setState")
            : (d.queue.push(a), f != null && Qr(f, "setState"));
        },
        enqueueReplaceState: function (o, a, f) {
          const d = Bo(o);
          (d.replace = !0), (d.queue = [a]), f != null && Qr(f, "setState");
        },
        enqueueForceUpdate: function (o, a) {
          const f = Bo(o);
          f.queue === null
            ? al(o, "forceUpdate")
            : a != null && Qr(a, "setState");
        },
      };
      function uu(o, a, f, d, t) {
        const r = f(t, d);
        Wo(a, r);
        const l = r == null ? d : ze({}, d, r);
        return l;
      }
      function cu(o, a, f) {
        let d = Oo;
        const t = o.contextType;
        if ("contextType" in o) {
          const r =
            t === null ||
            (t !== void 0 && t.$$typeof === An && t._context === void 0);
          if (!r && !$o.has(o)) {
            $o.add(o);
            let l = "";
            t === void 0
              ? (l =
                  " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.")
              : typeof t !== "object"
              ? (l = " However, it is set to a " + typeof t + ".")
              : t.$$typeof === Fn
              ? (l = " Did you accidentally pass the Context.Provider instead?")
              : t._context !== void 0
              ? (l = " Did you accidentally pass the Context.Consumer instead?")
              : (l =
                  " However, it is set to an object with keys {" +
                  Object.keys(t).join(", ") +
                  "}."),
              c(
                "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
                ne(o) || "Component",
                l
              );
          }
        }
        typeof t === "object" && t !== null ? (d = Wn(t)) : (d = f);
        const u = new o(a, d);
        {
          if (
            typeof o.getDerivedStateFromProps === "function" &&
            (u.state === null || u.state === void 0)
          ) {
            const p = ne(o) || "Component";
            zn.has(p) ||
              (zn.add(p),
              c(
                "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
                p,
                u.state === null ? "null" : "undefined",
                p
              ));
          }
          if (
            typeof o.getDerivedStateFromProps === "function" ||
            typeof u.getSnapshotBeforeUpdate === "function"
          ) {
            let g = null;
            let y = null;
            let w = null;
            if (
              (typeof u.componentWillMount === "function" &&
              u.componentWillMount.__suppressDeprecationWarning !== !0
                ? (g = "componentWillMount")
                : typeof u.UNSAFE_componentWillMount === "function" &&
                  (g = "UNSAFE_componentWillMount"),
              typeof u.componentWillReceiveProps === "function" &&
              u.componentWillReceiveProps.__suppressDeprecationWarning !== !0
                ? (y = "componentWillReceiveProps")
                : typeof u.UNSAFE_componentWillReceiveProps === "function" &&
                  (y = "UNSAFE_componentWillReceiveProps"),
              typeof u.componentWillUpdate === "function" &&
              u.componentWillUpdate.__suppressDeprecationWarning !== !0
                ? (w = "componentWillUpdate")
                : typeof u.UNSAFE_componentWillUpdate === "function" &&
                  (w = "UNSAFE_componentWillUpdate"),
              g !== null || y !== null || w !== null)
            ) {
              const C = ne(o) || "Component";
              const _ =
                typeof o.getDerivedStateFromProps === "function"
                  ? "getDerivedStateFromProps()"
                  : "getSnapshotBeforeUpdate()";
              Ho.has(C) ||
                (Ho.add(C),
                c(
                  `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`,
                  C,
                  _,
                  g !== null
                    ? `
  ` + g
                    : "",
                  y !== null
                    ? `
  ` + y
                    : "",
                  w !== null
                    ? `
  ` + w
                    : ""
                ));
            }
          }
        }
        return u;
      }
      function fu(o, a, f) {
        {
          const d = ne(a) || "Component";
          const t = o.render;
          t ||
            (a.prototype && typeof a.prototype.render === "function"
              ? c(
                  "%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",
                  d
                )
              : c(
                  "%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",
                  d
                )),
            o.getInitialState &&
              !o.getInitialState.isReactClassApproved &&
              !o.state &&
              c(
                "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
                d
              ),
            o.getDefaultProps &&
              !o.getDefaultProps.isReactClassApproved &&
              c(
                "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
                d
              ),
            o.propTypes &&
              c(
                "propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",
                d
              ),
            o.contextType &&
              c(
                "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
                d
              ),
            o.contextTypes &&
              c(
                "contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",
                d
              ),
            a.contextType &&
              a.contextTypes &&
              !zo.has(a) &&
              (zo.add(a),
              c(
                "%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",
                d
              )),
            typeof o.componentShouldUpdate === "function" &&
              c(
                "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
                d
              ),
            a.prototype &&
              a.prototype.isPureReactComponent &&
              typeof o.shouldComponentUpdate < "u" &&
              c(
                "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
                ne(a) || "A pure component"
              ),
            typeof o.componentDidUnmount === "function" &&
              c(
                "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
                d
              ),
            typeof o.componentDidReceiveProps === "function" &&
              c(
                "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
                d
              ),
            typeof o.componentWillRecieveProps === "function" &&
              c(
                "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
                d
              ),
            typeof o.UNSAFE_componentWillRecieveProps === "function" &&
              c(
                "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
                d
              );
          const r = o.props !== f;
          o.props !== void 0 &&
            r &&
            c(
              "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
              d,
              d
            ),
            o.defaultProps &&
              c(
                "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
                d,
                d
              ),
            typeof o.getSnapshotBeforeUpdate === "function" &&
              typeof o.componentDidUpdate !== "function" &&
              !$n.has(a) &&
              ($n.add(a),
              c(
                "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
                ne(a)
              )),
            typeof o.getDerivedStateFromProps === "function" &&
              c(
                "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                d
              ),
            typeof o.getDerivedStateFromError === "function" &&
              c(
                "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
                d
              ),
            typeof a.getSnapshotBeforeUpdate === "function" &&
              c(
                "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
                d
              );
          const l = o.state;
          l &&
            (typeof l !== "object" || cr(l)) &&
            c("%s.state: must be set to an object or null", d),
            typeof o.getChildContext === "function" &&
              typeof a.childContextTypes !== "object" &&
              c(
                "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
                d
              );
        }
      }
      function ll(o, a) {
        const f = a.state;
        if (typeof a.componentWillMount === "function") {
          if (a.componentWillMount.__suppressDeprecationWarning !== !0) {
            const d = ne(o) || "Unknown";
            jo[d] ||
              (v(
                `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
                d
              ),
              (jo[d] = !0));
          }
          a.componentWillMount();
        }
        typeof a.UNSAFE_componentWillMount === "function" &&
          a.UNSAFE_componentWillMount(),
          f !== a.state &&
            (c(
              "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
              ne(o) || "Component"
            ),
            il.enqueueReplaceState(a, a.state, null));
      }
      function du(o, a, f, d) {
        if (o.queue !== null && o.queue.length > 0) {
          const t = o.queue;
          const r = o.replace;
          if (((o.queue = null), (o.replace = !1), r && t.length === 1)) {
            a.state = t[0];
          } else {
            for (
              var l = r ? t[0] : a.state, u = !0, p = r ? 1 : 0;
              p < t.length;
              p++
            ) {
              const g = t[p];
              const y = typeof g === "function" ? g.call(a, l, f, d) : g;
              y != null && (u ? ((u = !1), (l = ze({}, l, y))) : ze(l, y));
            }
            a.state = l;
          }
        } else o.queue = null;
      }
      function sl(o, a, f, d) {
        fu(o, a, f);
        const t = o.state !== void 0 ? o.state : null;
        (o.updater = il), (o.props = f), (o.state = t);
        const r = { queue: [], replace: !1 };
        ol(o, r);
        const l = a.contextType;
        if (
          (typeof l === "object" && l !== null
            ? (o.context = Wn(l))
            : (o.context = d),
          o.state === f)
        ) {
          const u = ne(a) || "Component";
          Nn.has(u) ||
            (Nn.add(u),
            c(
              "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
              u
            ));
        }
        const p = a.getDerivedStateFromProps;
        typeof p === "function" && (o.state = uu(o, a, p, t, f)),
          typeof a.getDerivedStateFromProps !== "function" &&
            typeof o.getSnapshotBeforeUpdate !== "function" &&
            (typeof o.UNSAFE_componentWillMount === "function" ||
              typeof o.componentWillMount === "function") &&
            (ll(a, o), du(r, o, f, d));
      }
      const oi = { id: 1, overflow: "" };
      function No(o) {
        const a = o.overflow;
        const f = o.id;
        const d = f & ~pu(f);
        return d.toString(32) + a;
      }
      function ai(o, a, f) {
        const d = o.id;
        const t = o.overflow;
        const r = Vo(d) - 1;
        const l = d & ~(1 << r);
        const u = f + 1;
        const p = Vo(a) + r;
        if (p > 30) {
          const g = r - (r % 5);
          const y = (1 << g) - 1;
          const w = (l & y).toString(32);
          const C = l >> g;
          const _ = r - g;
          const O = Vo(a) + _;
          const j = u << _;
          const Z = j | C;
          const de = w + t;
          return { id: (1 << O) | Z, overflow: de };
        } else {
          const we = u << r;
          const aa = we | l;
          const ia = t;
          return { id: (1 << p) | aa, overflow: ia };
        }
      }
      function Vo(o) {
        return 32 - hu(o);
      }
      function pu(o) {
        return 1 << (Vo(o) - 1);
      }
      var hu = Math.clz32 ? Math.clz32 : mu;
      const vu = Math.log;
      const gu = Math.LN2;
      function mu(o) {
        const a = o >>> 0;
        return a === 0 ? 32 : (31 - ((vu(a) / gu) | 0)) | 0;
      }
      function At(o, a) {
        return (
          (o === a && (o !== 0 || 1 / o === 1 / a)) || (o !== o && a !== a)
        );
      }
      const ii = typeof Object.is === "function" ? Object.is : At;
      let Ke = null;
      let X = null;
      let Vt = null;
      let G = null;
      let Yt = !1;
      let ot = !1;
      let Sr = 0;
      let Gt = null;
      let $e = 0;
      const Kr = 25;
      let Ie = !1;
      let qr;
      function Xt() {
        if (Ke === null) {
          throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
        }
        return (
          Ie &&
            c(
              "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"
            ),
          Ke
        );
      }
      function li(o, a) {
        if (a === null) {
          return (
            c(
              "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
              qr
            ),
            !1
          );
        }
        o.length !== a.length &&
          c(
            `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
            qr,
            "[" + o.join(", ") + "]",
            "[" + a.join(", ") + "]"
          );
        for (let f = 0; f < a.length && f < o.length; f++) {
          if (!ii(o[f], a[f])) return !1;
        }
        return !0;
      }
      function ul() {
        if ($e > 0) {
          throw new Error(
            "Rendered more hooks than during the previous render"
          );
        }
        return { memoizedState: null, queue: null, next: null };
      }
      function si() {
        return (
          G === null
            ? Vt === null
              ? ((Yt = !1), (Vt = G = ul()))
              : ((Yt = !0), (G = Vt))
            : G.next === null
            ? ((Yt = !1), (G = G.next = ul()))
            : ((Yt = !0), (G = G.next)),
          G
        );
      }
      function cl(o, a) {
        (Ke = a), (X = o), (Ie = !1), (Sr = 0);
      }
      function ui(o, a, f, d) {
        for (; ot; ) (ot = !1), (Sr = 0), ($e += 1), (G = null), (f = o(a, d));
        return ci(), f;
      }
      function fl() {
        const o = Sr !== 0;
        return o;
      }
      function ci() {
        (Ie = !1),
          (Ke = null),
          (X = null),
          (ot = !1),
          (Vt = null),
          ($e = 0),
          (Gt = null),
          (G = null);
      }
      function fi(o) {
        return (
          Ie &&
            c(
              "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
            ),
          Wn(o)
        );
      }
      function yu(o) {
        return (qr = "useContext"), Xt(), Wn(o);
      }
      function Yo(o, a) {
        return typeof a === "function" ? a(o) : a;
      }
      function dl(o) {
        return (qr = "useState"), pl(Yo, o);
      }
      function pl(o, a, f) {
        if ((o !== Yo && (qr = "useReducer"), (Ke = Xt()), (G = si()), Yt)) {
          const d = G.queue;
          const t = d.dispatch;
          if (Gt !== null) {
            const r = Gt.get(d);
            if (r !== void 0) {
              Gt.delete(d);
              let l = G.memoizedState;
              let u = r;
              do {
                const p = u.action;
                (Ie = !0), (l = o(l, p)), (Ie = !1), (u = u.next);
              } while (u !== null);
              return (G.memoizedState = l), [l, t];
            }
          }
          return [G.memoizedState, t];
        } else {
          Ie = !0;
          let g;
          o === Yo
            ? (g = typeof a === "function" ? a() : a)
            : (g = f !== void 0 ? f(a) : a),
            (Ie = !1),
            (G.memoizedState = g);
          const y = (G.queue = { last: null, dispatch: null });
          const w = (y.dispatch = wu.bind(null, Ke, y));
          return [G.memoizedState, w];
        }
      }
      function hl(o, a) {
        (Ke = Xt()), (G = si());
        const f = a === void 0 ? null : a;
        if (G !== null) {
          const d = G.memoizedState;
          if (d !== null && f !== null) {
            const t = d[1];
            if (li(f, t)) return d[0];
          }
        }
        Ie = !0;
        const r = o();
        return (Ie = !1), (G.memoizedState = [r, f]), r;
      }
      function bu(o) {
        (Ke = Xt()), (G = si());
        const a = G.memoizedState;
        if (a === null) {
          const f = { current: o };
          return Object.seal(f), (G.memoizedState = f), f;
        } else return a;
      }
      function Su(o, a) {
        (qr = "useLayoutEffect"),
          c(
            "useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes."
          );
      }
      function wu(o, a, f) {
        if ($e >= Kr) {
          throw new Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        }
        if (o === Ke) {
          ot = !0;
          const d = { action: f, next: null };
          Gt === null && (Gt = new Map());
          const t = Gt.get(a);
          if (t === void 0) Gt.set(a, d);
          else {
            for (var r = t; r.next !== null; ) r = r.next;
            r.next = d;
          }
        }
      }
      function xu(o, a) {
        return hl(function () {
          return o;
        }, a);
      }
      function ku(o, a, f) {
        return Xt(), a(o._source);
      }
      function Tu(o, a, f) {
        if (f === void 0) {
          throw new Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        }
        return f();
      }
      function Cu(o) {
        return Xt(), o;
      }
      function Eu() {
        throw new Error(
          "startTransition cannot be called during server rendering."
        );
      }
      function Go() {
        return Xt(), [!1, Eu];
      }
      function vl() {
        const o = X;
        const a = No(o.treeContext);
        const f = pi;
        if (f === null) {
          throw new Error(
            "Invalid hook call. Hooks can only be called inside of the body of a function component."
          );
        }
        const d = Sr++;
        return wo(f, a, d);
      }
      function en() {}
      const di = {
        readContext: fi,
        useContext: yu,
        useMemo: hl,
        useReducer: pl,
        useRef: bu,
        useState: dl,
        useInsertionEffect: en,
        useLayoutEffect: Su,
        useCallback: xu,
        useImperativeHandle: en,
        useEffect: en,
        useDebugValue: en,
        useDeferredValue: Cu,
        useTransition: Go,
        useId: vl,
        useMutableSource: ku,
        useSyncExternalStore: Tu,
      };
      var pi = null;
      function Xo(o) {
        pi = o;
      }
      function hi(o) {
        try {
          let a = "";
          let f = o;
          do {
            switch (f.tag) {
              case 0:
                a += Nt(f.type, null, null);
                break;
              case 1:
                a += Fo(f.type, null, null);
                break;
              case 2:
                a += iu(f.type, null, null);
                break;
            }
            f = f.parent;
          } while (f);
          return a;
        } catch (d) {
          return (
            `
Error generating stack: ` +
            d.message +
            `
` +
            d.stack
          );
        }
      }
      const Vn = s.ReactCurrentDispatcher;
      const Zt = s.ReactDebugCurrentFrame;
      const Zo = 0;
      const wr = 1;
      const vi = 2;
      const gl = 3;
      const gi = 4;
      const tn = 0;
      const ml = 1;
      const rn = 2;
      const Yn = 12800;
      function yl(o) {
        return console.error(o), null;
      }
      function Gn() {}
      function Ru(o, a, f, d, t, r, l, u, p) {
        const g = [];
        const y = new Set();
        const w = {
          destination: null,
          responseState: a,
          progressiveChunkSize: d === void 0 ? Yn : d,
          status: tn,
          fatalError: null,
          nextSegmentId: 0,
          allPendingTasks: 0,
          pendingRootTasks: 0,
          completedRootSegment: null,
          abortableTasks: y,
          pingedTasks: g,
          clientRenderedBoundaries: [],
          completedBoundaries: [],
          partialBoundaries: [],
          onError: t === void 0 ? yl : t,
          onAllReady: r === void 0 ? Gn : r,
          onShellReady: l === void 0 ? Gn : l,
          onShellError: u === void 0 ? Gn : u,
          onFatalError: p === void 0 ? Gn : p,
        };
        const C = nn(w, 0, null, f, !1, !1);
        C.parentFlushed = !0;
        const _ = at(w, o, null, C, y, Oo, qa, oi);
        return g.push(_), w;
      }
      function mi(o, a) {
        const f = o.pingedTasks;
        f.push(a),
          f.length === 1 &&
            S(function () {
              return Kn(o);
            });
      }
      function Jo(o, a) {
        return {
          id: Lr,
          rootSegmentID: -1,
          parentFlushed: !1,
          pendingTasks: 0,
          forceClientRender: !1,
          completedSegments: [],
          byteSize: 0,
          fallbackAbortableTasks: a,
          errorDigest: null,
        };
      }
      function at(o, a, f, d, t, r, l, u) {
        o.allPendingTasks++,
          f === null ? o.pendingRootTasks++ : f.pendingTasks++;
        var p = {
          node: a,
          ping: function () {
            return mi(o, p);
          },
          blockedBoundary: f,
          blockedSegment: d,
          abortSet: t,
          legacyContext: r,
          context: l,
          treeContext: u,
        };
        return (p.componentStack = null), t.add(p), p;
      }
      function nn(o, a, f, d, t, r) {
        return {
          status: Zo,
          id: -1,
          index: a,
          parentFlushed: !1,
          chunks: [],
          children: [],
          formatContext: d,
          boundary: f,
          lastPushedText: t,
          textEmbedded: r,
        };
      }
      let Ne = null;
      function Qo() {
        return Ne === null || Ne.componentStack === null
          ? ""
          : hi(Ne.componentStack);
      }
      function Xn(o, a) {
        o.componentStack = { tag: 0, parent: o.componentStack, type: a };
      }
      function Dt(o, a) {
        o.componentStack = { tag: 1, parent: o.componentStack, type: a };
      }
      function Zn(o, a) {
        o.componentStack = { tag: 2, parent: o.componentStack, type: a };
      }
      function mt(o) {
        o.componentStack === null
          ? c(
              "Unexpectedly popped too many stack frames. This is a bug in React."
            )
          : (o.componentStack = o.componentStack.parent);
      }
      let Ot = null;
      function on(o, a) {
        {
          let f;
          typeof a === "string"
            ? (f = a)
            : a && typeof a.message === "string"
            ? (f = a.message)
            : (f = String(a));
          const d = Ot || Qo();
          (Ot = null), (o.errorMessage = f), (o.errorComponentStack = d);
        }
      }
      function Jn(o, a) {
        const f = o.onError(a);
        if (f != null && typeof f !== "string") {
          throw new Error(
            'onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' +
              typeof f +
              '" instead'
          );
        }
        return f;
      }
      function Ko(o, a) {
        const f = o.onShellError;
        f(a);
        const d = o.onFatalError;
        d(a),
          o.destination !== null
            ? ((o.status = rn), ct(o.destination, a))
            : ((o.status = ml), (o.fatalError = a));
      }
      function Iu(o, a, f) {
        Xn(a, "Suspense");
        const d = a.blockedBoundary;
        const t = a.blockedSegment;
        const r = f.fallback;
        const l = f.children;
        const u = new Set();
        const p = Jo(o, u);
        const g = t.chunks.length;
        const y = nn(o, g, p, t.formatContext, !1, !1);
        t.children.push(y), (t.lastPushedText = !1);
        const w = nn(o, 0, null, t.formatContext, !1, !1);
        (w.parentFlushed = !0), (a.blockedBoundary = p), (a.blockedSegment = w);
        try {
          if (
            (Ci(o, a, l),
            $t(w.chunks, o.responseState, w.lastPushedText, w.textEmbedded),
            (w.status = wr),
            ra(p, w),
            p.pendingTasks === 0)
          ) {
            mt(a);
            return;
          }
        } catch (_) {
          (w.status = gi),
            (p.forceClientRender = !0),
            (p.errorDigest = Jn(o, _)),
            on(p, _);
        } finally {
          (a.blockedBoundary = d), (a.blockedSegment = t);
        }
        const C = at(o, r, d, y, u, a.legacyContext, a.context, a.treeContext);
        (C.componentStack = a.componentStack), o.pingedTasks.push(C), mt(a);
      }
      function bl(o, a, f, d) {
        Xn(a, f);
        const t = a.blockedSegment;
        const r = U(t.chunks, f, d, o.responseState, t.formatContext);
        t.lastPushedText = !1;
        const l = t.formatContext;
        (t.formatContext = Mr(l, f, d)),
          Ci(o, a, r),
          (t.formatContext = l),
          z(t.chunks, f),
          (t.lastPushedText = !1),
          mt(a);
      }
      function Sl(o) {
        return o.prototype && o.prototype.isReactComponent;
      }
      function wl(o, a, f, d, t) {
        const r = {};
        cl(a, r);
        const l = f(d, t);
        return ui(f, d, l, t);
      }
      function yi(o, a, f, d, t) {
        const r = f.render();
        f.props !== t &&
          (xi ||
            c(
              "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
              ne(d) || "a component"
            ),
          (xi = !0));
        {
          const l = d.childContextTypes;
          if (l != null) {
            const u = a.legacyContext;
            const p = lu(f, d, u, l);
            (a.legacyContext = p), Ue(o, a, r), (a.legacyContext = u);
            return;
          }
        }
        Ue(o, a, r);
      }
      function qo(o, a, f, d) {
        Zn(a, f);
        const t = Xr(f, a.legacyContext);
        const r = cu(f, d, t);
        sl(r, f, d, t), yi(o, a, r, f, d), mt(a);
      }
      const bi = {};
      const Qn = {};
      const Si = {};
      const wi = {};
      var xi = !1;
      let ki = !1;
      let xl = !1;
      let kl = !1;
      function Tl(o, a, f, d) {
        let t;
        if (
          ((t = Xr(f, a.legacyContext)),
          Dt(a, f),
          f.prototype && typeof f.prototype.render === "function")
        ) {
          const r = ne(f) || "Unknown";
          bi[r] ||
            (c(
              "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
              r,
              r
            ),
            (bi[r] = !0));
        }
        const l = wl(o, a, f, d, t);
        const u = fl();
        if (
          typeof l === "object" &&
          l !== null &&
          typeof l.render === "function" &&
          l.$$typeof === void 0
        ) {
          const p = ne(f) || "Unknown";
          Qn[p] ||
            (c(
              "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
              p,
              p,
              p
            ),
            (Qn[p] = !0));
        }
        if (
          typeof l === "object" &&
          l !== null &&
          typeof l.render === "function" &&
          l.$$typeof === void 0
        ) {
          {
            const g = ne(f) || "Unknown";
            Qn[g] ||
              (c(
                "The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",
                g,
                g,
                g
              ),
              (Qn[g] = !0));
          }
          sl(l, f, d, t), yi(o, a, l, f, d);
        } else if ((_u(f), u)) {
          const y = a.treeContext;
          const w = 1;
          const C = 0;
          a.treeContext = ai(y, w, C);
          try {
            Ue(o, a, l);
          } finally {
            a.treeContext = y;
          }
        } else Ue(o, a, l);
        mt(a);
      }
      function _u(o) {
        {
          if (
            (o &&
              o.childContextTypes &&
              c(
                "%s(...): childContextTypes cannot be defined on a function component.",
                o.displayName || o.name || "Component"
              ),
            typeof o.getDerivedStateFromProps === "function")
          ) {
            const a = ne(o) || "Unknown";
            wi[a] ||
              (c(
                "%s: Function components do not support getDerivedStateFromProps.",
                a
              ),
              (wi[a] = !0));
          }
          if (typeof o.contextType === "object" && o.contextType !== null) {
            const f = ne(o) || "Unknown";
            Si[f] ||
              (c("%s: Function components do not support contextType.", f),
              (Si[f] = !0));
          }
        }
      }
      function Cl(o, a) {
        if (o && o.defaultProps) {
          const f = ze({}, a);
          const d = o.defaultProps;
          for (const t in d) f[t] === void 0 && (f[t] = d[t]);
          return f;
        }
        return a;
      }
      function Pu(o, a, f, d, t) {
        Dt(a, f.render);
        const r = wl(o, a, f.render, d, t);
        const l = fl();
        if (l) {
          const u = a.treeContext;
          const p = 1;
          const g = 0;
          a.treeContext = ai(u, p, g);
          try {
            Ue(o, a, r);
          } finally {
            a.treeContext = u;
          }
        } else Ue(o, a, r);
        mt(a);
      }
      function Fu(o, a, f, d, t) {
        const r = f.type;
        const l = Cl(r, d);
        Pe(o, a, r, l, t);
      }
      function Au(o, a, f, d) {
        f._context === void 0
          ? f !== f.Consumer &&
            (kl ||
              ((kl = !0),
              c(
                "Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"
              )))
          : (f = f._context);
        const t = d.children;
        typeof t !== "function" &&
          c(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          );
        const r = Wn(f);
        const l = t(r);
        Ue(o, a, l);
      }
      function Ti(o, a, f, d) {
        const t = f._context;
        const r = d.value;
        const l = d.children;
        let u;
        (u = a.context),
          (a.context = su(t, r)),
          Ue(o, a, l),
          (a.context = Hn(t)),
          u !== a.context &&
            c(
              "Popping the context provider did not return back to the original snapshot. This is a bug in React."
            );
      }
      function Du(o, a, f, d, t) {
        Xn(a, "Lazy");
        const r = f._payload;
        const l = f._init;
        const u = l(r);
        const p = Cl(u, d);
        Pe(o, a, u, p, t), mt(a);
      }
      function Pe(o, a, f, d, t) {
        if (typeof f === "function") {
          if (Sl(f)) {
            qo(o, a, f, d);
            return;
          } else {
            Tl(o, a, f, d);
            return;
          }
        }
        if (typeof f === "string") {
          bl(o, a, f, d);
          return;
        }
        switch (f) {
          case Qi:
          case ru:
          case Ro:
          case Io:
          case Wa: {
            Ue(o, a, d.children);
            return;
          }
          case $r: {
            Xn(a, "SuspenseList"), Ue(o, a, d.children), mt(a);
            return;
          }
          case tu:
            throw new Error(
              "ReactDOMServer does not yet support scope components."
            );
          case On: {
            Iu(o, a, d);
            return;
          }
        }
        if (typeof f === "object" && f !== null) {
          switch (f.$$typeof) {
            case Dn: {
              Pu(o, a, f, d, t);
              return;
            }
            case za: {
              Fu(o, a, f, d, t);
              return;
            }
            case Fn: {
              Ti(o, a, f, d);
              return;
            }
            case An: {
              Au(o, a, f, d);
              return;
            }
            case _o: {
              Du(o, a, f, d);
              return;
            }
          }
        }
        let r = "";
        throw (
          ((f === void 0 ||
            (typeof f === "object" &&
              f !== null &&
              Object.keys(f).length === 0)) &&
            (r +=
              " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),
          new Error(
            "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " +
              ("but got: " + (f == null ? f : typeof f) + "." + r)
          ))
        );
      }
      function Ou(o, a) {
        typeof Symbol === "function" &&
          o[Symbol.toStringTag] === "Generator" &&
          (ki ||
            c(
              "Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."
            ),
          (ki = !0)),
          o.entries === a &&
            (xl ||
              c(
                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
              ),
            (xl = !0));
      }
      function Ue(o, a, f) {
        try {
          return Mu(o, a, f);
        } catch (d) {
          throw (
            ((typeof d === "object" &&
              d !== null &&
              typeof d.then === "function") ||
              (Ot = Ot !== null ? Ot : Qo()),
            d)
          );
        }
      }
      function Mu(o, a, f) {
        if (((a.node = f), typeof f === "object" && f !== null)) {
          switch (f.$$typeof) {
            case Ji: {
              const d = f;
              const t = d.type;
              const r = d.props;
              const l = d.ref;
              Pe(o, a, t, r, l);
              return;
            }
            case Ha:
              throw new Error(
                "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render."
              );
            case _o: {
              const u = f;
              const p = u._payload;
              const g = u._init;
              let y;
              try {
                y = g(p);
              } catch (we) {
                throw (
                  (typeof we === "object" &&
                    we !== null &&
                    typeof we.then === "function" &&
                    Xn(a, "Lazy"),
                  we)
                );
              }
              Ue(o, a, y);
              return;
            }
          }
          if (cr(f)) {
            ea(o, a, f);
            return;
          }
          const w = qi(f);
          if (w) {
            Ou(f, w);
            const C = w.call(f);
            if (C) {
              let _ = C.next();
              if (!_.done) {
                const O = [];
                do O.push(_.value), (_ = C.next());
                while (!_.done);
                ea(o, a, O);
                return;
              }
              return;
            }
          }
          const j = Object.prototype.toString.call(f);
          throw new Error(
            "Objects are not valid as a React child (found: " +
              (j === "[object Object]"
                ? "object with keys {" + Object.keys(f).join(", ") + "}"
                : j) +
              "). If you meant to render a collection of children, use an array instead."
          );
        }
        if (typeof f === "string") {
          const Z = a.blockedSegment;
          Z.lastPushedText = ht(
            a.blockedSegment.chunks,
            f,
            o.responseState,
            Z.lastPushedText
          );
          return;
        }
        if (typeof f === "number") {
          const de = a.blockedSegment;
          de.lastPushedText = ht(
            a.blockedSegment.chunks,
            "" + f,
            o.responseState,
            de.lastPushedText
          );
          return;
        }
        typeof f === "function" &&
          c(
            "Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."
          );
      }
      function ea(o, a, f) {
        for (let d = f.length, t = 0; t < d; t++) {
          const r = a.treeContext;
          a.treeContext = ai(r, d, t);
          try {
            Ci(o, a, f[t]);
          } finally {
            a.treeContext = r;
          }
        }
      }
      function Lu(o, a, f) {
        const d = a.blockedSegment;
        const t = d.chunks.length;
        const r = nn(o, t, null, d.formatContext, d.lastPushedText, !0);
        d.children.push(r), (d.lastPushedText = !1);
        const l = at(
          o,
          a.node,
          a.blockedBoundary,
          r,
          a.abortSet,
          a.legacyContext,
          a.context,
          a.treeContext
        );
        a.componentStack !== null &&
          (l.componentStack = a.componentStack.parent);
        const u = l.ping;
        f.then(u, u);
      }
      function Ci(o, a, f) {
        const d = a.blockedSegment.formatContext;
        const t = a.legacyContext;
        const r = a.context;
        let l = null;
        l = a.componentStack;
        try {
          return Ue(o, a, f);
        } catch (u) {
          if (
            (ci(),
            typeof u === "object" && u !== null && typeof u.then === "function")
          ) {
            Lu(o, a, u),
              (a.blockedSegment.formatContext = d),
              (a.legacyContext = t),
              (a.context = r),
              Lo(r),
              (a.componentStack = l);
          } else {
            throw (
              ((a.blockedSegment.formatContext = d),
              (a.legacyContext = t),
              (a.context = r),
              Lo(r),
              (a.componentStack = l),
              u)
            );
          }
        }
      }
      function El(o, a, f, d) {
        const t = Jn(o, d);
        if (
          (a === null
            ? Ko(o, d)
            : (a.pendingTasks--,
              a.forceClientRender ||
                ((a.forceClientRender = !0),
                (a.errorDigest = t),
                on(a, d),
                a.parentFlushed && o.clientRenderedBoundaries.push(a))),
          o.allPendingTasks--,
          o.allPendingTasks === 0)
        ) {
          const r = o.onAllReady;
          r();
        }
      }
      function ta(o) {
        const a = this;
        const f = o.blockedBoundary;
        const d = o.blockedSegment;
        (d.status = gl), Ri(a, f, d);
      }
      function Ei(o, a, f) {
        const d = o.blockedBoundary;
        const t = o.blockedSegment;
        if (((t.status = gl), d === null)) {
          a.allPendingTasks--,
            a.status !== rn &&
              ((a.status = rn), a.destination !== null && xe(a.destination));
        } else {
          if ((d.pendingTasks--, !d.forceClientRender)) {
            d.forceClientRender = !0;
            let r =
              f === void 0
                ? new Error(
                    "The render was aborted by the server without a reason."
                  )
                : f;
            d.errorDigest = a.onError(r);
            {
              const l = "The server did not finish this Suspense boundary: ";
              r && typeof r.message === "string"
                ? (r = l + r.message)
                : (r = l + String(r));
              const u = Ne;
              Ne = o;
              try {
                on(d, r);
              } finally {
                Ne = u;
              }
            }
            d.parentFlushed && a.clientRenderedBoundaries.push(d);
          }
          if (
            (d.fallbackAbortableTasks.forEach(function (g) {
              return Ei(g, a, f);
            }),
            d.fallbackAbortableTasks.clear(),
            a.allPendingTasks--,
            a.allPendingTasks === 0)
          ) {
            const p = a.onAllReady;
            p();
          }
        }
      }
      function ra(o, a) {
        if (
          a.chunks.length === 0 &&
          a.children.length === 1 &&
          a.children[0].boundary === null
        ) {
          const f = a.children[0];
          (f.id = a.id), (f.parentFlushed = !0), f.status === wr && ra(o, f);
        } else {
          const d = o.completedSegments;
          d.push(a);
        }
      }
      function Ri(o, a, f) {
        if (a === null) {
          if (f.parentFlushed) {
            if (o.completedRootSegment !== null) {
              throw new Error(
                "There can only be one root segment. This is a bug in React."
              );
            }
            o.completedRootSegment = f;
          }
          if ((o.pendingRootTasks--, o.pendingRootTasks === 0)) {
            o.onShellError = Gn;
            const d = o.onShellReady;
            d();
          }
        } else if ((a.pendingTasks--, !a.forceClientRender)) {
          if (a.pendingTasks === 0) {
            f.parentFlushed && f.status === wr && ra(a, f),
              a.parentFlushed && o.completedBoundaries.push(a),
              a.fallbackAbortableTasks.forEach(ta, o),
              a.fallbackAbortableTasks.clear();
          } else if (f.parentFlushed && f.status === wr) {
            ra(a, f);
            const t = a.completedSegments;
            t.length === 1 && a.parentFlushed && o.partialBoundaries.push(a);
          }
        }
        if ((o.allPendingTasks--, o.allPendingTasks === 0)) {
          const r = o.onAllReady;
          r();
        }
      }
      function na(o, a) {
        const f = a.blockedSegment;
        if (f.status === Zo) {
          Lo(a.context);
          let d = null;
          (d = Ne), (Ne = a);
          try {
            Ue(o, a, a.node),
              $t(f.chunks, o.responseState, f.lastPushedText, f.textEmbedded),
              a.abortSet.delete(a),
              (f.status = wr),
              Ri(o, a.blockedBoundary, f);
          } catch (r) {
            if (
              (ci(),
              typeof r === "object" &&
                r !== null &&
                typeof r.then === "function")
            ) {
              const t = a.ping;
              r.then(t, t);
            } else {
              a.abortSet.delete(a),
                (f.status = gi),
                El(o, a.blockedBoundary, f, r);
            }
          } finally {
            Ne = d;
          }
        }
      }
      function Kn(o) {
        if (o.status !== rn) {
          const a = ri();
          const f = Vn.current;
          Vn.current = di;
          let d;
          (d = Zt.getCurrentStack), (Zt.getCurrentStack = Qo);
          const t = pi;
          Xo(o.responseState);
          try {
            const r = o.pingedTasks;
            let l;
            for (l = 0; l < r.length; l++) {
              const u = r[l];
              na(o, u);
            }
            r.splice(0, l), o.destination !== null && eo(o, o.destination);
          } catch (p) {
            Jn(o, p), Ko(o, p);
          } finally {
            Xo(t),
              (Vn.current = f),
              (Zt.getCurrentStack = d),
              f === di && Lo(a);
          }
        }
      }
      function oa(o, a, f) {
        switch (((f.parentFlushed = !0), f.status)) {
          case Zo: {
            const d = (f.id = o.nextSegmentId++);
            return (
              (f.lastPushedText = !1),
              (f.textEmbedded = !1),
              ee(a, o.responseState, d)
            );
          }
          case wr: {
            f.status = vi;
            for (
              var t = !0, r = f.chunks, l = 0, u = f.children, p = 0;
              p < u.length;
              p++
            ) {
              for (var g = u[p]; l < g.index; l++) P(a, r[l]);
              t = qn(o, a, g);
            }
            for (; l < r.length - 1; l++) P(a, r[l]);
            return l < r.length && (t = W(a, r[l])), t;
          }
          default:
            throw new Error(
              "Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React."
            );
        }
      }
      function qn(o, a, f) {
        const d = f.boundary;
        if (d === null) return oa(o, a, f);
        if (((d.parentFlushed = !0), d.forceClientRender)) {
          return (
            ms(
              a,
              o.responseState,
              d.errorDigest,
              d.errorMessage,
              d.errorComponentStack
            ),
            oa(o, a, f),
            bs(a, o.responseState)
          );
        }
        if (d.pendingTasks > 0) {
          (d.rootSegmentID = o.nextSegmentId++),
            d.completedSegments.length > 0 && o.partialBoundaries.push(d);
          const t = (d.id = Br(o.responseState));
          return Ni(a, o.responseState, t), oa(o, a, f), Vi(a, o.responseState);
        } else {
          if (d.byteSize > o.progressiveChunkSize) {
            return (
              (d.rootSegmentID = o.nextSegmentId++),
              o.completedBoundaries.push(d),
              Ni(a, o.responseState, d.id),
              oa(o, a, f),
              Vi(a, o.responseState)
            );
          }
          gs(a, o.responseState);
          const r = d.completedSegments;
          if (r.length !== 1) {
            throw new Error(
              "A previously unvisited boundary must have exactly one root segment. This is a bug in React."
            );
          }
          const l = r[0];
          return qn(o, a, l), ys(a, o.responseState);
        }
      }
      function Rl(o, a, f) {
        return eu(
          a,
          o.responseState,
          f.id,
          f.errorDigest,
          f.errorMessage,
          f.errorComponentStack
        );
      }
      function Il(o, a, f) {
        return (
          Ws(a, o.responseState, f.formatContext, f.id),
          qn(o, a, f),
          zs(a, f.formatContext)
        );
      }
      function Ii(o, a, f) {
        for (var d = f.completedSegments, t = 0; t < d.length; t++) {
          const r = d[t];
          Pi(o, a, f, r);
        }
        return (d.length = 0), Gi(a, o.responseState, f.id, f.rootSegmentID);
      }
      function _i(o, a, f) {
        for (var d = f.completedSegments, t = 0; t < d.length; t++) {
          const r = d[t];
          if (!Pi(o, a, f, r)) return t++, d.splice(0, t), !1;
        }
        return d.splice(0, t), !0;
      }
      function Pi(o, a, f, d) {
        if (d.status === vi) return !0;
        const t = d.id;
        if (t === -1) {
          const r = (d.id = f.rootSegmentID);
          if (r === -1) {
            throw new Error(
              "A root segment ID must have been assigned by now. This is a bug in React."
            );
          }
          return Il(o, a, d);
        } else return Il(o, a, d), La(a, o.responseState, t);
      }
      function eo(o, a) {
        te();
        try {
          const f = o.completedRootSegment;
          f !== null &&
            o.pendingRootTasks === 0 &&
            (qn(o, a, f),
            (o.completedRootSegment = null),
            Y(a, o.responseState));
          const d = o.clientRenderedBoundaries;
          let t;
          for (t = 0; t < d.length; t++) {
            const r = d[t];
            if (!Rl(o, a, r)) {
              (o.destination = null), t++, d.splice(0, t);
              return;
            }
          }
          d.splice(0, t);
          const l = o.completedBoundaries;
          for (t = 0; t < l.length; t++) {
            const u = l[t];
            if (!Ii(o, a, u)) {
              (o.destination = null), t++, l.splice(0, t);
              return;
            }
          }
          l.splice(0, t), q(a), te(a);
          const p = o.partialBoundaries;
          for (t = 0; t < p.length; t++) {
            const g = p[t];
            if (!_i(o, a, g)) {
              (o.destination = null), t++, p.splice(0, t);
              return;
            }
          }
          p.splice(0, t);
          const y = o.completedBoundaries;
          for (t = 0; t < y.length; t++) {
            const w = y[t];
            if (!Ii(o, a, w)) {
              (o.destination = null), t++, y.splice(0, t);
              return;
            }
          }
          y.splice(0, t);
        } finally {
          q(a),
            E(a),
            o.allPendingTasks === 0 &&
              o.pingedTasks.length === 0 &&
              o.clientRenderedBoundaries.length === 0 &&
              o.completedBoundaries.length === 0 &&
              (o.abortableTasks.size !== 0 &&
                c(
                  "There was still abortable task at the root when we closed. This is a bug in React."
                ),
              xe(a));
        }
      }
      function _l(o) {
        S(function () {
          return Kn(o);
        });
      }
      function Pl(o, a) {
        if (o.status === ml) {
          (o.status = rn), ct(a, o.fatalError);
          return;
        }
        if (o.status !== rn && o.destination === null) {
          o.destination = a;
          try {
            eo(o, a);
          } catch (f) {
            Jn(o, f), Ko(o, f);
          }
        }
      }
      function Fi(o, a) {
        try {
          const f = o.abortableTasks;
          f.forEach(function (d) {
            return Ei(d, o, a);
          }),
            f.clear(),
            o.destination !== null && eo(o, o.destination);
        } catch (d) {
          Jn(o, d), Ko(o, d);
        }
      }
      function Bu(o, a) {
        return function () {
          return Pl(a, o);
        };
      }
      function Fl(o, a) {
        return function () {
          return Fi(o, a);
        };
      }
      function Uu(o, a) {
        return Ru(
          o,
          He(
            a ? a.identifierPrefix : void 0,
            a ? a.nonce : void 0,
            a ? a.bootstrapScriptContent : void 0,
            a ? a.bootstrapScripts : void 0,
            a ? a.bootstrapModules : void 0
          ),
          wn(a ? a.namespaceURI : void 0),
          a ? a.progressiveChunkSize : void 0,
          a ? a.onError : void 0,
          a ? a.onAllReady : void 0,
          a ? a.onShellReady : void 0,
          a ? a.onShellError : void 0,
          void 0
        );
      }
      function Al(o, a) {
        const f = Uu(o, a);
        let d = !1;
        return (
          _l(f),
          {
            pipe: function (t) {
              if (d) {
                throw new Error(
                  "React currently only supports piping to one writable stream."
                );
              }
              return (
                (d = !0),
                Pl(f, t),
                t.on("drain", Bu(t, f)),
                t.on(
                  "error",
                  Fl(
                    f,
                    new Error(
                      "The destination stream errored while writing data."
                    )
                  )
                ),
                t.on(
                  "close",
                  Fl(f, new Error("The destination stream closed early."))
                ),
                t
              );
            },
            abort: function (t) {
              Fi(f, t);
            },
          }
        );
      }
      (Pc.renderToPipeableStream = Al), (Pc.version = i);
    })();
});
const zd = an((lo) => {
  "use strict";
  let io, Fc;
  process.env.NODE_ENV === "production"
    ? ((io = Wf()), (Fc = jd()))
    : ((io = Hd()), (Fc = Wd()));
  lo.version = io.version;
  lo.renderToString = io.renderToString;
  lo.renderToStaticMarkup = io.renderToStaticMarkup;
  lo.renderToNodeStream = io.renderToNodeStream;
  lo.renderToStaticNodeStream = io.renderToStaticNodeStream;
  lo.renderToPipeableStream = Fc.renderToPipeableStream;
});
const Nd = Dc(zd());
const $i = Dc(ua());
const Cv = require("http");
const Ev = () =>
  $i.default.createElement(
    "html",
    null,
    $i.default.createElement(
      "body",
      null,
      $i.default.createElement("h1", null, "Hello World")
    )
  );
let $d = !1;
Cv.createServer(function (e, n) {
  const i = (0, Nd.renderToPipeableStream)($i.default.createElement(Ev, null), {
    onShellReady() {
      (n.statusCode = $d ? 500 : 200),
        n.setHeader("Content-type", "text/html"),
        n.setHeader("Cache-Control", "no-transform"),
        i.pipe(n);
    },
    onShellError(s) {
      (n.statusCode = 500),
        n.send(
          '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
        );
    },
    onAllReady() {},
    onError(s) {
      ($d = !0), console.error(s);
    },
  });
}).listen(9080);
/**
 * @license React
 * react-dom-server-legacy.node.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server-legacy.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server.node.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
