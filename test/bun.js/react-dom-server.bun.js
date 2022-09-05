/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const aa = require("react");
function k(a) {
  for (
    var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1;
    c < arguments.length;
    c++
  ) {
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  }
  return (
    "Minified React error #" +
    a +
    "; visit " +
    b +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
const l = null;
let n = 0;
function p(controller, b) {
  if (b.length !== 0) controller.write(b);
}
function t(a, b) {
  p(a, b);
  return !0;
}
function ba(a) {
  // a.flush(false);
}
const ca = new TextEncoder();
function u(a) {
  return a;
}
function v(a) {
  return a;
}
function da(a, b) {
  typeof a.error === "function" ? a.close(b) : a.end(b);
}
const w = Object.prototype.hasOwnProperty;
const ea =
  /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
const fa = {};
const ha = {};
function ia(a) {
  if (w.call(ha, a)) return !0;
  if (w.call(fa, a)) return !1;
  if (ea.test(a)) return (ha[a] = !0);
  fa[a] = !0;
  return !1;
}
function x(a, b, c, d, f, e, g) {
  this.acceptsBooleans = b === 2 || b === 3 || b === 4;
  this.attributeName = d;
  this.attributeNamespace = f;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = e;
  this.removeEmptyString = g;
}
const y = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (a) {
    y[a] = new x(a, 0, !1, a, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (a) {
  const b = a[0];
  y[b] = new x(b, 1, !1, a[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (a) {
  y[a] = new x(a, 2, !1, a.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (a) {
  y[a] = new x(a, 2, !1, a, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (a) {
    y[a] = new x(a, 3, !1, a.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (a) {
  y[a] = new x(a, 3, !0, a, null, !1, !1);
});
["capture", "download"].forEach(function (a) {
  y[a] = new x(a, 4, !1, a, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (a) {
  y[a] = new x(a, 6, !1, a, null, !1, !1);
});
["rowSpan", "start"].forEach(function (a) {
  y[a] = new x(a, 5, !1, a.toLowerCase(), null, !1, !1);
});
const ja = /[\-:]([a-z])/g;
function ka(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (a) {
    const b = a.replace(ja, ka);
    y[b] = new x(b, 1, !1, a, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (a) {
    const b = a.replace(ja, ka);
    y[b] = new x(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (a) {
  const b = a.replace(ja, ka);
  y[b] = new x(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (a) {
  y[a] = new x(a, 1, !1, a.toLowerCase(), null, !1, !1);
});
y.xlinkHref = new x(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (a) {
  y[a] = new x(a, 1, !1, a.toLowerCase(), null, !0, !0);
});
const z = {
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
const la = ["Webkit", "ms", "Moz", "O"];
Object.keys(z).forEach(function (a) {
  la.forEach(function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    z[b] = z[a];
  });
});
const ma = /["'&<>]/;
function A(a) {
  return Bun.escapeHTML(a);
}
const na = /([A-Z])/g;
const oa = /^ms-/;
const pa = Array.isArray;
const qa = v("<script>");
const ra = v("\x3c/script>");
const sa = v('<script src="');
const ta = v('<script type="module" src="');
const ua = v('" async="">\x3c/script>');
const va = /(<\/|<)(s)(cript)/gi;
function wa(a, b, c, d) {
  return "" + b + (c === "s" ? "\\u0073" : "\\u0053") + d;
}
function xa(a, b, c, d, f) {
  a = void 0 === a ? "" : a;
  b = void 0 === b ? qa : v('<script nonce="' + A(b) + '">');
  const e = [];
  void 0 !== c && e.push(b, u(("" + c).replace(va, wa)), ra);
  if (void 0 !== d) for (c = 0; c < d.length; c++) e.push(sa, u(A(d[c])), ua);
  if (void 0 !== f) for (d = 0; d < f.length; d++) e.push(ta, u(A(f[d])), ua);
  return {
    bootstrapChunks: e,
    startInlineScript: b,
    placeholderPrefix: v(a + "P:"),
    segmentPrefix: v(a + "S:"),
    boundaryPrefix: a + "B:",
    idPrefix: a,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: !1,
    sentCompleteBoundaryFunction: !1,
    sentClientRenderFunction: !1,
  };
}
function B(a, b) {
  return { insertionMode: a, selectedValue: b };
}
function ya(a) {
  return B(
    a === "http://www.w3.org/2000/svg"
      ? 2
      : a === "http://www.w3.org/1998/Math/MathML"
      ? 3
      : 0,
    null
  );
}
function za(a, b, c) {
  switch (b) {
    case "select":
      return B(1, c.value != null ? c.value : c.defaultValue);
    case "svg":
      return B(2, null);
    case "math":
      return B(3, null);
    case "foreignObject":
      return B(1, null);
    case "table":
      return B(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return B(5, null);
    case "colgroup":
      return B(7, null);
    case "tr":
      return B(6, null);
  }
  return a.insertionMode >= 4 || a.insertionMode === 0 ? B(1, null) : a;
}
const Aa = v("\x3c!-- --\x3e");
const Ba = new Map();
const Ca = v(' style="');
const Da = v(":");
const Ea = v(";");
function Fa(a, b, c) {
  if (typeof c !== "object") throw Error(k(62));
  b = !0;
  for (const d in c) {
    if (w.call(c, d)) {
      let f = c[d];
      if (f != null && typeof f !== "boolean" && f !== "") {
        if (d.indexOf("--") === 0) {
          var e = u(A(d));
          f = u(A(("" + f).trim()));
        } else {
          e = d;
          let g = Ba.get(e);
          void 0 !== g
            ? (e = g)
            : ((g = v(
                A(e.replace(na, "-$1").toLowerCase().replace(oa, "-ms-"))
              )),
              Ba.set(e, g),
              (e = g));
          f =
            typeof f === "number"
              ? f === 0 || w.call(z, d)
                ? u("" + f)
                : u(f + "px")
              : u(A(("" + f).trim()));
        }
        b ? ((b = !1), a.push(Ca, e, Da, f)) : a.push(Ea, e, Da, f);
      }
    }
  }
  b || a.push(D);
}
const G = v(" ");
const H = v('="');
var D = v('"');
const Ga = v('=""');
function I(a, b, c, d) {
  switch (c) {
    case "style":
      Fa(a, b, d);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (
    !(c.length > 2) ||
    (c[0] !== "o" && c[0] !== "O") ||
    (c[1] !== "n" && c[1] !== "N")
  ) {
    if (((b = y.hasOwnProperty(c) ? y[c] : null), b !== null)) {
      switch (typeof d) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!b.acceptsBooleans) return;
      }
      c = u(b.attributeName);
      switch (b.type) {
        case 3:
          d && a.push(G, c, Ga);
          break;
        case 4:
          !0 === d ? a.push(G, c, Ga) : !1 !== d && a.push(G, c, H, u(A(d)), D);
          break;
        case 5:
          isNaN(d) || a.push(G, c, H, u(A(d)), D);
          break;
        case 6:
          !isNaN(d) && d >= 1 && a.push(G, c, H, u(A(d)), D);
          break;
        default:
          b.sanitizeURL && (d = "" + d), a.push(G, c, H, u(A(d)), D);
      }
    } else if (ia(c)) {
      switch (typeof d) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (
            ((b = c.toLowerCase().slice(0, 5)), b !== "data-" && b !== "aria-")
          ) {
            return;
          }
      }
      a.push(G, u(c), H, u(A(d)), D);
    }
  }
}
const J = v(">");
const Ha = v("/>");
function K(a, b, c) {
  if (b != null) {
    if (c != null) throw Error(k(60));
    if (typeof b !== "object" || !("__html" in b)) throw Error(k(61));
    b = b.__html;
    b !== null && void 0 !== b && a.push(u("" + b));
  }
}
function Ia(a) {
  let b = "";
  aa.Children.forEach(a, function (a) {
    a != null && (b += a);
  });
  return b;
}
const Ja = v(' selected=""');
function Ka(a, b, c, d) {
  a.push(L(c));
  let f = (c = null);
  let e;
  for (e in b) {
    if (w.call(b, e)) {
      const g = b[e];
      if (g != null) {
        switch (e) {
          case "children":
            c = g;
            break;
          case "dangerouslySetInnerHTML":
            f = g;
            break;
          default:
            I(a, d, e, g);
        }
      }
    }
  }
  a.push(J);
  K(a, f, c);
  return typeof c === "string" ? (a.push(u(A(c))), null) : c;
}
const La = v("\n");
const Ma = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
const Na = new Map();
function L(a) {
  let b = Na.get(a);
  if (void 0 === b) {
    if (!Ma.test(a)) throw Error(k(65, a));
    b = v("<" + a);
    Na.set(a, b);
  }
  return b;
}
const Oa = v("<!DOCTYPE html>");
function Pa(a, b, c, d, f) {
  switch (b) {
    case "select":
      a.push(L("select"));
      var e = null;
      var g = null;
      for (r in c) {
        if (w.call(c, r)) {
          var h = c[r];
          if (h != null) {
            switch (r) {
              case "children":
                e = h;
                break;
              case "dangerouslySetInnerHTML":
                g = h;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                I(a, d, r, h);
            }
          }
        }
      }
      a.push(J);
      K(a, g, e);
      return e;
    case "option":
      g = f.selectedValue;
      a.push(L("option"));
      var m = (h = null);
      var q = null;
      var r = null;
      for (e in c) {
        if (w.call(c, e) && ((b = c[e]), b != null)) {
          switch (e) {
            case "children":
              h = b;
              break;
            case "selected":
              q = b;
              break;
            case "dangerouslySetInnerHTML":
              r = b;
              break;
            case "value":
              m = b;
            default:
              I(a, d, e, b);
          }
        }
      }
      if (g != null) {
        if (((c = m !== null ? "" + m : Ia(h)), pa(g))) {
          for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c) {
              a.push(Ja);
              break;
            }
          }
        } else "" + g === c && a.push(Ja);
      } else q && a.push(Ja);
      a.push(J);
      K(a, r, h);
      return h;
    case "textarea":
      a.push(L("textarea"));
      r = g = e = null;
      for (h in c) {
        if (w.call(c, h) && ((m = c[h]), m != null)) {
          switch (h) {
            case "children":
              r = m;
              break;
            case "value":
              e = m;
              break;
            case "defaultValue":
              g = m;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(k(91));
            default:
              I(a, d, h, m);
          }
        }
      }
      e === null && g !== null && (e = g);
      a.push(J);
      if (r != null) {
        if (e != null) throw Error(k(92));
        if (pa(r) && r.length > 1) throw Error(k(93));
        e = "" + r;
      }
      typeof e === "string" && e[0] === "\n" && a.push(La);
      e !== null && a.push(u(A("" + e)));
      return null;
    case "input":
      a.push(L("input"));
      m = r = h = e = null;
      for (g in c) {
        if (w.call(c, g) && ((q = c[g]), q != null)) {
          switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(k(399, "input"));
            case "defaultChecked":
              m = q;
              break;
            case "defaultValue":
              h = q;
              break;
            case "checked":
              r = q;
              break;
            case "value":
              e = q;
              break;
            default:
              I(a, d, g, q);
          }
        }
      }
      r !== null ? I(a, d, "checked", r) : m !== null && I(a, d, "checked", m);
      e !== null ? I(a, d, "value", e) : h !== null && I(a, d, "value", h);
      a.push(Ha);
      return null;
    case "menuitem":
      a.push(L("menuitem"));
      for (const E in c) {
        if (w.call(c, E) && ((e = c[E]), e != null)) {
          switch (E) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(k(400));
            default:
              I(a, d, E, e);
          }
        }
      }
      a.push(J);
      return null;
    case "listing":
    case "pre":
      a.push(L(b));
      g = e = null;
      for (m in c) {
        if (w.call(c, m) && ((h = c[m]), h != null)) {
          switch (m) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            default:
              I(a, d, m, h);
          }
        }
      }
      a.push(J);
      if (g != null) {
        if (e != null) throw Error(k(60));
        if (typeof g !== "object" || !("__html" in g)) throw Error(k(61));
        c = g.__html;
        c !== null &&
          void 0 !== c &&
          (typeof c === "string" && c.length > 0 && c[0] === "\n"
            ? a.push(La, u(c))
            : a.push(u("" + c)));
      }
      typeof e === "string" && e[0] === "\n" && a.push(La);
      return e;
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
      a.push(L(b));
      for (const F in c) {
        if (w.call(c, F) && ((e = c[F]), e != null)) {
          switch (F) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(k(399, b));
            default:
              I(a, d, F, e);
          }
        }
      }
      a.push(Ha);
      return null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return Ka(a, c, b, d);
    case "html":
      return f.insertionMode === 0 && a.push(Oa), Ka(a, c, b, d);
    default:
      if (b.indexOf("-") === -1 && typeof c.is !== "string") {
        return Ka(a, c, b, d);
      }
      a.push(L(b));
      g = e = null;
      for (q in c) {
        if (w.call(c, q) && ((h = c[q]), h != null)) {
          switch (q) {
            case "children":
              e = h;
              break;
            case "dangerouslySetInnerHTML":
              g = h;
              break;
            case "style":
              Fa(a, d, h);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ia(q) &&
                typeof h !== "function" &&
                typeof h !== "symbol" &&
                a.push(G, u(q), H, u(A(h)), D);
          }
        }
      }
      a.push(J);
      K(a, g, e);
      return e;
  }
}
const Qa = v("</");
const Ra = v(">");
const Sa = v('<template id="');
const Ta = v('"></template>');
const Ua = v("\x3c!--$--\x3e");
const Va = v('\x3c!--$?--\x3e<template id="');
const Wa = v('"></template>');
const Xa = v("\x3c!--$!--\x3e");
const Ya = v("\x3c!--/$--\x3e");
function Za(a, b, c) {
  p(a, Va);
  if (c === null) throw Error(k(395));
  p(a, c);
  return t(a, Wa);
}
const $a = v('<div hidden id="');
const ab = v('">');
const bb = v("</div>");
const cb = v('<svg aria-hidden="true" style="display:none" id="');
const db = v('">');
const eb = v("</svg>");
const fb = v('<math aria-hidden="true" style="display:none" id="');
const gb = v('">');
const hb = v("</math>");
const ib = v('<table hidden id="');
const jb = v('">');
const kb = v("</table>");
const lb = v('<table hidden><tbody id="');
const mb = v('">');
const nb = v("</tbody></table>");
const ob = v('<table hidden><tr id="');
const pb = v('">');
const qb = v("</tr></table>");
const rb = v('<table hidden><colgroup id="');
const sb = v('">');
const tb = v("</colgroup></table>");
function ub(a, b, c, d) {
  switch (c.insertionMode) {
    case 0:
    case 1:
      return p(a, $a), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, ab);
    case 2:
      return p(a, cb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, db);
    case 3:
      return p(a, fb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, gb);
    case 4:
      return p(a, ib), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, jb);
    case 5:
      return p(a, lb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, mb);
    case 6:
      return p(a, ob), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, pb);
    case 7:
      return p(a, rb), p(a, b.segmentPrefix), p(a, u(d.toString(16))), t(a, sb);
    default:
      throw Error(k(397));
  }
}
function vb(a, b) {
  switch (b.insertionMode) {
    case 0:
    case 1:
      return t(a, bb);
    case 2:
      return t(a, eb);
    case 3:
      return t(a, hb);
    case 4:
      return t(a, kb);
    case 5:
      return t(a, nb);
    case 6:
      return t(a, qb);
    case 7:
      return t(a, tb);
    default:
      throw Error(k(397));
  }
}
const wb = v(
  'function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'
);
const xb = v('$RS("');
const yb = v('","');
const zb = v('")\x3c/script>');
const Ab = v(
  'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'
);
const Bb = v('$RC("');
const Cb = v('","');
const Db = v('")\x3c/script>');
const Eb = v(
  'function $RX(a){if(a=document.getElementById(a))a=a.previousSibling,a.data="$!",a._reactRetry&&a._reactRetry()};$RX("'
);
const Fb = v('$RX("');
const Gb = v('")\x3c/script>');
const M = Object.assign;
const Hb = Symbol.for("react.element");
const Ib = Symbol.for("react.portal");
const Jb = Symbol.for("react.fragment");
const Kb = Symbol.for("react.strict_mode");
const Lb = Symbol.for("react.profiler");
const Mb = Symbol.for("react.provider");
const Nb = Symbol.for("react.context");
const Ob = Symbol.for("react.forward_ref");
const Pb = Symbol.for("react.suspense");
const Qb = Symbol.for("react.suspense_list");
const Rb = Symbol.for("react.memo");
const Sb = Symbol.for("react.lazy");
const Tb = Symbol.for("react.scope");
const Ub = Symbol.for("react.debug_trace_mode");
const Vb = Symbol.for("react.legacy_hidden");
const Wb = Symbol.for("react.default_value");
const Xb = Symbol.iterator;
function Yb(a) {
  if (a == null) return null;
  if (typeof a === "function") return a.displayName || a.name || null;
  if (typeof a === "string") return a;
  switch (a) {
    case Jb:
      return "Fragment";
    case Ib:
      return "Portal";
    case Lb:
      return "Profiler";
    case Kb:
      return "StrictMode";
    case Pb:
      return "Suspense";
    case Qb:
      return "SuspenseList";
  }
  if (typeof a === "object") {
    switch (a.$$typeof) {
      case Nb:
        return (a.displayName || "Context") + ".Consumer";
      case Mb:
        return (a._context.displayName || "Context") + ".Provider";
      case Ob:
        var b = a.render;
        a = a.displayName;
        a ||
          ((a = b.displayName || b.name || ""),
          (a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"));
        return a;
      case Rb:
        return (
          (b = a.displayName || null), b !== null ? b : Yb(a.type) || "Memo"
        );
      case Sb:
        b = a._payload;
        a = a._init;
        try {
          return Yb(a(b));
        } catch (c) {}
    }
  }
  return null;
}
const Zb = {};
function $b(a, b) {
  a = a.contextTypes;
  if (!a) return Zb;
  const c = {};
  let d;
  for (d in a) c[d] = b[d];
  return c;
}
let N = null;
function O(a, b) {
  if (a !== b) {
    a.context._currentValue = a.parentValue;
    a = a.parent;
    const c = b.parent;
    if (a === null) {
      if (c !== null) throw Error(k(401));
    } else {
      if (c === null) throw Error(k(401));
      O(a, c);
    }
    b.context._currentValue = b.value;
  }
}
function ac(a) {
  a.context._currentValue = a.parentValue;
  a = a.parent;
  a !== null && ac(a);
}
function bc(a) {
  const b = a.parent;
  b !== null && bc(b);
  a.context._currentValue = a.value;
}
function cc(a, b) {
  a.context._currentValue = a.parentValue;
  a = a.parent;
  if (a === null) throw Error(k(402));
  a.depth === b.depth ? O(a, b) : cc(a, b);
}
function dc(a, b) {
  const c = b.parent;
  if (c === null) throw Error(k(402));
  a.depth === c.depth ? O(a, c) : dc(a, c);
  b.context._currentValue = b.value;
}
function P(a) {
  const b = N;
  b !== a &&
    (b === null
      ? bc(a)
      : a === null
      ? ac(b)
      : b.depth === a.depth
      ? O(b, a)
      : b.depth > a.depth
      ? cc(b, a)
      : dc(b, a),
    (N = a));
}
const ec = {
  isMounted: function () {
    return !1;
  },
  enqueueSetState: function (a, b) {
    a = a._reactInternals;
    a.queue !== null && a.queue.push(b);
  },
  enqueueReplaceState: function (a, b) {
    a = a._reactInternals;
    a.replace = !0;
    a.queue = [b];
  },
  enqueueForceUpdate: function () {},
};
function fc(a, b, c, d) {
  let f = void 0 !== a.state ? a.state : null;
  a.updater = ec;
  a.props = c;
  a.state = f;
  let e = { queue: [], replace: !1 };
  a._reactInternals = e;
  let g = b.contextType;
  a.context = typeof g === "object" && g !== null ? g._currentValue : d;
  g = b.getDerivedStateFromProps;
  typeof g === "function" &&
    ((g = g(c, f)),
    (f = g === null || void 0 === g ? f : M({}, f, g)),
    (a.state = f));
  if (
    typeof b.getDerivedStateFromProps !== "function" &&
    typeof a.getSnapshotBeforeUpdate !== "function" &&
    (typeof a.UNSAFE_componentWillMount === "function" ||
      typeof a.componentWillMount === "function")
  ) {
    if (
      ((b = a.state),
      typeof a.componentWillMount === "function" && a.componentWillMount(),
      typeof a.UNSAFE_componentWillMount === "function" &&
        a.UNSAFE_componentWillMount(),
      b !== a.state && ec.enqueueReplaceState(a, a.state, null),
      e.queue !== null && e.queue.length > 0)
    ) {
      if (
        ((b = e.queue),
        (g = e.replace),
        (e.queue = null),
        (e.replace = !1),
        g && b.length === 1)
      ) {
        a.state = b[0];
      } else {
        e = g ? b[0] : a.state;
        f = !0;
        for (g = g ? 1 : 0; g < b.length; g++) {
          let h = b[g];
          h = typeof h === "function" ? h.call(a, e, c, d) : h;
          h != null && (f ? ((f = !1), (e = M({}, e, h))) : M(e, h));
        }
        a.state = e;
      }
    } else e.queue = null;
  }
}
const gc = { id: 1, overflow: "" };
function hc(a, b, c) {
  let d = a.id;
  a = a.overflow;
  let f = 32 - Q(d) - 1;
  d &= ~(1 << f);
  c += 1;
  let e = 32 - Q(b) + f;
  if (e > 30) {
    const g = f - (f % 5);
    e = (d & ((1 << g) - 1)).toString(32);
    d >>= g;
    f -= g;
    return { id: (1 << (32 - Q(b) + f)) | (c << f) | d, overflow: e + a };
  }
  return { id: (1 << e) | (c << f) | d, overflow: a };
}
var Q = Math.clz32 ? Math.clz32 : ic;
const jc = Math.log;
const kc = Math.LN2;
function ic(a) {
  a >>>= 0;
  return a === 0 ? 32 : (31 - ((jc(a) / kc) | 0)) | 0;
}
function lc(a, b) {
  return (a === b && (a !== 0 || 1 / a === 1 / b)) || (a !== a && b !== b);
}
const mc = typeof Object.is === "function" ? Object.is : lc;
let R = null;
let nc = null;
let oc = null;
let S = null;
let T = !1;
let pc = !1;
let U = 0;
let V = null;
let qc = 0;
function W() {
  if (R === null) throw Error(k(321));
  return R;
}
function rc() {
  if (qc > 0) throw Error(k(312));
  return { memoizedState: null, queue: null, next: null };
}
function sc() {
  S === null
    ? oc === null
      ? ((T = !1), (oc = S = rc()))
      : ((T = !0), (S = oc))
    : S.next === null
    ? ((T = !1), (S = S.next = rc()))
    : ((T = !0), (S = S.next));
  return S;
}
function tc() {
  nc = R = null;
  pc = !1;
  oc = null;
  qc = 0;
  S = V = null;
}
function uc(a, b) {
  return typeof b === "function" ? b(a) : b;
}
function vc(a, b, c) {
  R = W();
  S = sc();
  if (T) {
    let d = S.queue;
    b = d.dispatch;
    if (V !== null && ((c = V.get(d)), void 0 !== c)) {
      V.delete(d);
      d = S.memoizedState;
      do (d = a(d, c.action)), (c = c.next);
      while (c !== null);
      S.memoizedState = d;
      return [d, b];
    }
    return [S.memoizedState, b];
  }
  a = a === uc ? (typeof b === "function" ? b() : b) : void 0 !== c ? c(b) : b;
  S.memoizedState = a;
  a = S.queue = { last: null, dispatch: null };
  a = a.dispatch = wc.bind(null, R, a);
  return [S.memoizedState, a];
}
function xc(a, b) {
  R = W();
  S = sc();
  b = void 0 === b ? null : b;
  if (S !== null) {
    const c = S.memoizedState;
    if (c !== null && b !== null) {
      let d = c[1];
      a: if (d === null) d = !1;
      else {
        for (let f = 0; f < d.length && f < b.length; f++) {
          if (!mc(b[f], d[f])) {
            d = !1;
            break a;
          }
        }
        d = !0;
      }
      if (d) return c[0];
    }
  }
  a = a();
  S.memoizedState = [a, b];
  return a;
}
function wc(a, b, c) {
  if (qc >= 25) throw Error(k(301));
  if (a === R) {
    if (
      ((pc = !0),
      (a = { action: c, next: null }),
      V === null && (V = new Map()),
      (c = V.get(b)),
      void 0 === c)
    ) {
      V.set(b, a);
    } else {
      for (b = c; b.next !== null; ) b = b.next;
      b.next = a;
    }
  }
}
function yc() {
  throw Error(k(394));
}
function zc() {}
const Bc = {
  readContext: function (a) {
    return a._currentValue;
  },
  useContext: function (a) {
    W();
    return a._currentValue;
  },
  useMemo: xc,
  useReducer: vc,
  useRef: function (a) {
    R = W();
    S = sc();
    const b = S.memoizedState;
    return b === null ? ((a = { current: a }), (S.memoizedState = a)) : b;
  },
  useState: function (a) {
    return vc(uc, a);
  },
  useInsertionEffect: zc,
  useLayoutEffect: function () {},
  useCallback: function (a, b) {
    return xc(function () {
      return a;
    }, b);
  },
  useImperativeHandle: zc,
  useEffect: zc,
  useDebugValue: zc,
  useDeferredValue: function (a) {
    W();
    return a;
  },
  useTransition: function () {
    W();
    return [!1, yc];
  },
  useId: function () {
    let a = nc.treeContext;
    let b = a.overflow;
    a = a.id;
    a = (a & ~(1 << (32 - Q(a) - 1))).toString(32) + b;
    const c = Ac;
    if (c === null) throw Error(k(404));
    b = U++;
    a = ":" + c.idPrefix + "R" + a;
    b > 0 && (a += "H" + b.toString(32));
    return a + ":";
  },
  useMutableSource: function (a, b) {
    W();
    return b(a._source);
  },
  useSyncExternalStore: function (a, b, c) {
    if (void 0 === c) throw Error(k(407));
    return c();
  },
};
var Ac = null;
const Cc =
  aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function Dc(a) {
  console.error(a);
}
function X() {}
function Ec(a, b, c, d, f, e, g, h, m) {
  const q = [];
  const r = new Set();
  b = {
    destination: null,
    responseState: b,
    progressiveChunkSize: void 0 === d ? 12800 : d,
    status: 0,
    fatalError: null,
    nextSegmentId: 0,
    allPendingTasks: 0,
    pendingRootTasks: 0,
    completedRootSegment: null,
    abortableTasks: r,
    pingedTasks: q,
    clientRenderedBoundaries: [],
    completedBoundaries: [],
    partialBoundaries: [],
    onError: void 0 === f ? Dc : f,
    onAllReady: void 0 === e ? X : e,
    onShellReady: void 0 === g ? X : g,
    onShellError: void 0 === h ? X : h,
    onFatalError: void 0 === m ? X : m,
  };
  c = Fc(b, 0, null, c);
  c.parentFlushed = !0;
  a = Gc(b, a, null, c, r, Zb, null, gc);
  q.push(a);
  return b;
}
function Gc(a, b, c, d, f, e, g, h) {
  a.allPendingTasks++;
  c === null ? a.pendingRootTasks++ : c.pendingTasks++;
  var m = {
    node: b,
    ping: function () {
      const b = a.pingedTasks;
      b.push(m);
      b.length === 1 && Hc(a);
    },
    blockedBoundary: c,
    blockedSegment: d,
    abortSet: f,
    legacyContext: e,
    context: g,
    treeContext: h,
  };
  f.add(m);
  return m;
}
function Fc(a, b, c, d) {
  return {
    status: 0,
    id: -1,
    index: b,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: d,
    boundary: c,
  };
}
function Y(a, b) {
  a = a.onError;
  a(b);
}
function Ic(a, b) {
  let c = a.onShellError;
  c(b);
  c = a.onFatalError;
  c(b);
  a.destination !== null
    ? ((a.status = 2), da(a.destination, b))
    : ((a.status = 1), (a.fatalError = b));
}
function Jc(a, b, c, d, f) {
  R = {};
  nc = b;
  U = 0;
  for (a = c(d, f); pc; ) {
    (pc = !1), (U = 0), (qc += 1), (S = null), (a = c(d, f));
  }
  tc();
  return a;
}
function Kc(a, b, c, d) {
  const f = c.render();
  const e = d.childContextTypes;
  if (e !== null && void 0 !== e) {
    const g = b.legacyContext;
    if (typeof c.getChildContext !== "function") d = g;
    else {
      c = c.getChildContext();
      for (const h in c) {
        if (!(h in e)) throw Error(k(108, Yb(d) || "Unknown", h));
      }
      d = M({}, g, c);
    }
    b.legacyContext = d;
    Z(a, b, f);
    b.legacyContext = g;
  } else Z(a, b, f);
}
function Lc(a, b) {
  if (a && a.defaultProps) {
    b = M({}, b);
    a = a.defaultProps;
    for (const c in a) void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
function Mc(a, b, c, d, f) {
  if (typeof c === "function") {
    if (c.prototype && c.prototype.isReactComponent) {
      f = $b(c, b.legacyContext);
      var e = c.contextType;
      e = new c(d, typeof e === "object" && e !== null ? e._currentValue : f);
      fc(e, c, d, f);
      Kc(a, b, e, c);
    } else {
      e = $b(c, b.legacyContext);
      f = Jc(a, b, c, d, e);
      var g = U !== 0;
      if (
        typeof f === "object" &&
        f !== null &&
        typeof f.render === "function" &&
        void 0 === f.$$typeof
      ) {
        fc(f, c, d, e), Kc(a, b, f, c);
      } else if (g) {
        d = b.treeContext;
        b.treeContext = hc(d, 1, 0);
        try {
          Z(a, b, f);
        } finally {
          b.treeContext = d;
        }
      } else Z(a, b, f);
    }
  } else if (typeof c === "string") {
    switch (
      ((f = b.blockedSegment),
      (e = Pa(f.chunks, c, d, a.responseState, f.formatContext)),
      (g = f.formatContext),
      (f.formatContext = za(g, c, d)),
      Nc(a, b, e),
      (f.formatContext = g),
      c)
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
        f.chunks.push(Qa, u(c), Ra);
    }
  } else {
    switch (c) {
      case Vb:
      case Ub:
      case Kb:
      case Lb:
      case Jb:
        Z(a, b, d.children);
        return;
      case Qb:
        Z(a, b, d.children);
        return;
      case Tb:
        throw Error(k(343));
      case Pb:
        a: {
          c = b.blockedBoundary;
          f = b.blockedSegment;
          e = d.fallback;
          d = d.children;
          g = new Set();
          const h = {
            id: null,
            rootSegmentID: -1,
            parentFlushed: !1,
            pendingTasks: 0,
            forceClientRender: !1,
            completedSegments: [],
            byteSize: 0,
            fallbackAbortableTasks: g,
          };
          const m = Fc(a, f.chunks.length, h, f.formatContext);
          f.children.push(m);
          const q = Fc(a, 0, null, f.formatContext);
          q.parentFlushed = !0;
          b.blockedBoundary = h;
          b.blockedSegment = q;
          try {
            if ((Nc(a, b, d), (q.status = 1), Oc(h, q), h.pendingTasks === 0)) {
              break a;
            }
          } catch (r) {
            (q.status = 4), Y(a, r), (h.forceClientRender = !0);
          } finally {
            (b.blockedBoundary = c), (b.blockedSegment = f);
          }
          b = Gc(a, e, c, m, g, b.legacyContext, b.context, b.treeContext);
          a.pingedTasks.push(b);
        }
        return;
    }
    if (typeof c === "object" && c !== null) {
      switch (c.$$typeof) {
        case Ob:
          d = Jc(a, b, c.render, d, f);
          if (U !== 0) {
            c = b.treeContext;
            b.treeContext = hc(c, 1, 0);
            try {
              Z(a, b, d);
            } finally {
              b.treeContext = c;
            }
          } else Z(a, b, d);
          return;
        case Rb:
          c = c.type;
          d = Lc(c, d);
          Mc(a, b, c, d, f);
          return;
        case Mb:
          f = d.children;
          c = c._context;
          d = d.value;
          e = c._currentValue;
          c._currentValue = d;
          g = N;
          N = d = {
            parent: g,
            depth: g === null ? 0 : g.depth + 1,
            context: c,
            parentValue: e,
            value: d,
          };
          b.context = d;
          Z(a, b, f);
          a = N;
          if (a === null) throw Error(k(403));
          d = a.parentValue;
          a.context._currentValue = d === Wb ? a.context._defaultValue : d;
          a = N = a.parent;
          b.context = a;
          return;
        case Nb:
          d = d.children;
          d = d(c._currentValue);
          Z(a, b, d);
          return;
        case Sb:
          f = c._init;
          c = f(c._payload);
          d = Lc(c, d);
          Mc(a, b, c, d, void 0);
          return;
      }
    }
    throw Error(k(130, c == null ? c : typeof c, ""));
  }
}
function Z(a, b, c) {
  b.node = c;
  if (typeof c === "object" && c !== null) {
    switch (c.$$typeof) {
      case Hb:
        Mc(a, b, c.type, c.props, c.ref);
        return;
      case Ib:
        throw Error(k(257));
      case Sb:
        var d = c._init;
        c = d(c._payload);
        Z(a, b, c);
        return;
    }
    if (pa(c)) {
      Pc(a, b, c);
      return;
    }
    c === null || typeof c !== "object"
      ? (d = null)
      : ((d = (Xb && c[Xb]) || c["@@iterator"]),
        (d = typeof d === "function" ? d : null));
    if (d && (d = d.call(c))) {
      c = d.next();
      if (!c.done) {
        const f = [];
        do f.push(c.value), (c = d.next());
        while (!c.done);
        Pc(a, b, f);
      }
      return;
    }
    b = Object.prototype.toString.call(c);
    throw Error(
      k(
        31,
        b === "[object Object]"
          ? "object with keys {" + Object.keys(c).join(", ") + "}"
          : b
      )
    );
  }
  typeof c === "string"
    ? c !== "" && b.blockedSegment.chunks.push(u(A(c)), Aa)
    : typeof c === "number" &&
      ((a = "" + c), a !== "" && b.blockedSegment.chunks.push(u(A(a)), Aa));
}
function Pc(a, b, c) {
  for (let d = c.length, f = 0; f < d; f++) {
    const e = b.treeContext;
    b.treeContext = hc(e, d, f);
    try {
      Nc(a, b, c[f]);
    } finally {
      b.treeContext = e;
    }
  }
}
function Nc(a, b, c) {
  const d = b.blockedSegment.formatContext;
  const f = b.legacyContext;
  const e = b.context;
  try {
    return Z(a, b, c);
  } catch (m) {
    if (
      (tc(),
      typeof m === "object" && m !== null && typeof m.then === "function")
    ) {
      c = m;
      const g = b.blockedSegment;
      const h = Fc(a, g.chunks.length, null, g.formatContext);
      g.children.push(h);
      a = Gc(
        a,
        b.node,
        b.blockedBoundary,
        h,
        b.abortSet,
        b.legacyContext,
        b.context,
        b.treeContext
      ).ping;
      c.then(a, a);
      b.blockedSegment.formatContext = d;
      b.legacyContext = f;
      b.context = e;
      P(e);
    } else {
      throw (
        ((b.blockedSegment.formatContext = d),
        (b.legacyContext = f),
        (b.context = e),
        P(e),
        m)
      );
    }
  }
}
function Qc(a) {
  const b = a.blockedBoundary;
  a = a.blockedSegment;
  a.status = 3;
  Rc(this, b, a);
}
function Sc(a) {
  const b = a.blockedBoundary;
  a.blockedSegment.status = 3;
  b === null
    ? (this.allPendingTasks--,
      this.status !== 2 &&
        ((this.status = 2),
        this.destination !== null && this.destination.close()))
    : (b.pendingTasks--,
      b.forceClientRender ||
        ((b.forceClientRender = !0),
        b.parentFlushed && this.clientRenderedBoundaries.push(b)),
      b.fallbackAbortableTasks.forEach(Sc, this),
      b.fallbackAbortableTasks.clear(),
      this.allPendingTasks--,
      this.allPendingTasks === 0 && ((a = this.onAllReady), a()));
}
function Oc(a, b) {
  if (
    b.chunks.length === 0 &&
    b.children.length === 1 &&
    b.children[0].boundary === null
  ) {
    const c = b.children[0];
    c.id = b.id;
    c.parentFlushed = !0;
    c.status === 1 && Oc(a, c);
  } else a.completedSegments.push(b);
}
function Rc(a, b, c) {
  if (b === null) {
    if (c.parentFlushed) {
      if (a.completedRootSegment !== null) throw Error(k(389));
      a.completedRootSegment = c;
    }
    a.pendingRootTasks--;
    a.pendingRootTasks === 0 &&
      ((a.onShellError = X), (b = a.onShellReady), b());
  } else {
    b.pendingTasks--,
      b.forceClientRender ||
        (b.pendingTasks === 0
          ? (c.parentFlushed && c.status === 1 && Oc(b, c),
            b.parentFlushed && a.completedBoundaries.push(b),
            b.fallbackAbortableTasks.forEach(Qc, a),
            b.fallbackAbortableTasks.clear())
          : c.parentFlushed &&
            c.status === 1 &&
            (Oc(b, c),
            b.completedSegments.length === 1 &&
              b.parentFlushed &&
              a.partialBoundaries.push(b)));
  }
  a.allPendingTasks--;
  a.allPendingTasks === 0 && ((a = a.onAllReady), a());
}
function Hc(a) {
  if (a.status !== 2) {
    const b = N;
    const c = Cc.current;
    Cc.current = Bc;
    const d = Ac;
    Ac = a.responseState;
    try {
      const f = a.pingedTasks;
      let e;
      for (e = 0; e < f.length; e++) {
        const g = f[e];
        const h = a;
        const m = g.blockedSegment;
        if (m.status === 0) {
          P(g.context);
          try {
            Z(h, g, g.node),
              g.abortSet.delete(g),
              (m.status = 1),
              Rc(h, g.blockedBoundary, m);
          } catch (C) {
            if (
              (tc(),
              typeof C === "object" &&
                C !== null &&
                typeof C.then === "function")
            ) {
              const q = g.ping;
              C.then(q, q);
            } else {
              g.abortSet.delete(g);
              m.status = 4;
              const r = g.blockedBoundary;
              const E = C;
              Y(h, E);
              r === null
                ? Ic(h, E)
                : (r.pendingTasks--,
                  r.forceClientRender ||
                    ((r.forceClientRender = !0),
                    r.parentFlushed && h.clientRenderedBoundaries.push(r)));
              h.allPendingTasks--;
              if (h.allPendingTasks === 0) {
                const F = h.onAllReady;
                F();
              }
            }
          } finally {
          }
        }
      }
      f.splice(0, e);
      a.destination !== null && Tc(a, a.destination);
    } catch (C) {
      Y(a, C), Ic(a, C);
    } finally {
      (Ac = d), (Cc.current = c), c === Bc && P(b);
    }
  }
}
function Uc(a, b, c) {
  c.parentFlushed = !0;
  switch (c.status) {
    case 0:
      var d = (c.id = a.nextSegmentId++);
      a = a.responseState;
      p(b, Sa);
      p(b, a.placeholderPrefix);
      a = u(d.toString(16));
      p(b, a);
      return t(b, Ta);
    case 1:
      c.status = 2;
      var f = !0;
      d = c.chunks;
      var e = 0;
      c = c.children;
      for (let g = 0; g < c.length; g++) {
        for (f = c[g]; e < f.index; e++) p(b, d[e]);
        f = Vc(a, b, f);
      }
      for (; e < d.length - 1; e++) p(b, d[e]);
      e < d.length && (f = t(b, d[e]));
      return f;
    default:
      throw Error(k(390));
  }
}
function Vc(a, b, c) {
  let d = c.boundary;
  if (d === null) return Uc(a, b, c);
  d.parentFlushed = !0;
  if (d.forceClientRender) t(b, Xa), Uc(a, b, c);
  else if (d.pendingTasks > 0) {
    d.rootSegmentID = a.nextSegmentId++;
    d.completedSegments.length > 0 && a.partialBoundaries.push(d);
    let f = a.responseState;
    const e = f.nextSuspenseID++;
    f = v(f.boundaryPrefix + e.toString(16));
    d = d.id = f;
    Za(b, a.responseState, d);
    Uc(a, b, c);
  } else if (d.byteSize > a.progressiveChunkSize) {
    (d.rootSegmentID = a.nextSegmentId++),
      a.completedBoundaries.push(d),
      Za(b, a.responseState, d.id),
      Uc(a, b, c);
  } else {
    t(b, Ua);
    c = d.completedSegments;
    if (c.length !== 1) throw Error(k(391));
    Vc(a, b, c[0]);
  }
  return t(b, Ya);
}
function Wc(a, b, c) {
  ub(b, a.responseState, c.formatContext, c.id);
  Vc(a, b, c);
  return vb(b, c.formatContext);
}
function Xc(a, b, c) {
  for (var d = c.completedSegments, f = 0; f < d.length; f++) Yc(a, b, c, d[f]);
  d.length = 0;
  a = a.responseState;
  d = c.id;
  c = c.rootSegmentID;
  p(b, a.startInlineScript);
  a.sentCompleteBoundaryFunction
    ? p(b, Bb)
    : ((a.sentCompleteBoundaryFunction = !0), p(b, Ab));
  if (d === null) throw Error(k(395));
  c = u(c.toString(16));
  p(b, d);
  p(b, Cb);
  p(b, a.segmentPrefix);
  p(b, c);
  return t(b, Db);
}
function Yc(a, b, c, d) {
  if (d.status === 2) return !0;
  let f = d.id;
  if (f === -1) {
    if ((d.id = c.rootSegmentID) === -1) throw Error(k(392));
    return Wc(a, b, d);
  }
  Wc(a, b, d);
  a = a.responseState;
  p(b, a.startInlineScript);
  a.sentCompleteSegmentFunction
    ? p(b, xb)
    : ((a.sentCompleteSegmentFunction = !0), p(b, wb));
  p(b, a.segmentPrefix);
  f = u(f.toString(16));
  p(b, f);
  p(b, yb);
  p(b, a.placeholderPrefix);
  p(b, f);
  return t(b, zb);
}
function Tc(a, b) {
  n = 0;
  try {
    let c = a.completedRootSegment;
    if (c !== null && a.pendingRootTasks === 0) {
      Vc(a, b, c);
      a.completedRootSegment = null;
      var d = a.responseState.bootstrapChunks;
      for (c = 0; c < d.length - 1; c++) p(b, d[c]);
      c < d.length && t(b, d[c]);
    }
    let f = a.clientRenderedBoundaries;
    let e;
    for (e = 0; e < f.length; e++) {
      d = b;
      var g = a.responseState;
      var h = f[e].id;
      p(d, g.startInlineScript);
      g.sentClientRenderFunction
        ? p(d, Fb)
        : ((g.sentClientRenderFunction = !0), p(d, Eb));
      if (h === null) throw Error(k(395));
      p(d, h);
      if (!t(d, Gb)) {
        a.destination = null;
        e++;
        f.splice(0, e);
        return;
      }
    }
    f.splice(0, e);
    const m = a.completedBoundaries;
    for (e = 0; e < m.length; e++) {
      if (!Xc(a, b, m[e])) {
        a.destination = null;
        e++;
        m.splice(0, e);
        return;
      }
    }
    m.splice(0, e);
    ba(b);
    n = 0;
    const q = a.partialBoundaries;
    for (e = 0; e < q.length; e++) {
      const r = q[e];
      a: {
        f = a;
        g = b;
        const E = r.completedSegments;
        for (h = 0; h < E.length; h++) {
          if (!Yc(f, g, r, E[h])) {
            h++;
            E.splice(0, h);
            var F = !1;
            break a;
          }
        }
        E.splice(0, h);
        F = !0;
      }
      if (!F) {
        a.destination = null;
        e++;
        q.splice(0, e);
        return;
      }
    }
    q.splice(0, e);
    const C = a.completedBoundaries;
    for (e = 0; e < C.length; e++) {
      if (!Xc(a, b, C[e])) {
        a.destination = null;
        e++;
        C.splice(0, e);
        return;
      }
    }
    C.splice(0, e);
  } finally {
    ba(b),
      a.allPendingTasks === 0 &&
        a.pingedTasks.length === 0 &&
        a.clientRenderedBoundaries.length === 0 &&
        a.completedBoundaries.length === 0 &&
        b.close();
  }
}
function Zc(a) {
  try {
    const b = a.abortableTasks;
    b.forEach(Sc, a);
    b.clear();
    a.destination !== null && Tc(a, a.destination);
  } catch (c) {
    Y(a, c), Ic(a, c);
  }
}
export function renderToReadableStream(a, b) {
  return new Promise(function (c, d) {
    let f;
    let e;
    const g = new Promise(function (a, b) {
      e = a;
      f = b;
    });
    var h = Ec(
      a,
      xa(
        b ? b.identifierPrefix : void 0,
        b ? b.nonce : void 0,
        b ? b.bootstrapScriptContent : void 0,
        b ? b.bootstrapScripts : void 0,
        b ? b.bootstrapModules : void 0
      ),
      ya(b ? b.namespaceURI : void 0),
      b ? b.progressiveChunkSize : void 0,
      b ? b.onError : void 0,
      e,
      function () {
        const a = new ReadableStream(
          {
            type: "direct",
            pull: function (a) {
              if (h.status === 1) (h.status = 2), da(a, h.fatalError);
              else if (h.status !== 2 && h.destination === null) {
                h.destination = a;
                try {
                  Tc(h, a);
                } catch (F) {
                  Y(h, F), Ic(h, F);
                }
              }
            },
            cancel: function () {
              Zc(h);
            },
          },
          { highWaterMark: 2048 }
        );
        a.allReady = g;
        c(a);
      },
      function (a) {
        g.catch(function () {});
        d(a);
      },
      f
    );
    if (b && b.signal) {
      const m = b.signal;
      var q = function () {
        Zc(h);
        m.removeEventListener("abort", q);
      };
      m.addEventListener("abort", q);
    }
    Hc(h);
  });
}
export const version = "18.1.0";
