function Em(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function km(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Df = { exports: {} },
  Di = {},
  Af = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eo = Symbol.for("react.element"),
  Om = Symbol.for("react.portal"),
  Pm = Symbol.for("react.fragment"),
  Rm = Symbol.for("react.strict_mode"),
  Tm = Symbol.for("react.profiler"),
  Lm = Symbol.for("react.provider"),
  Im = Symbol.for("react.context"),
  bm = Symbol.for("react.forward_ref"),
  Nm = Symbol.for("react.suspense"),
  Mm = Symbol.for("react.memo"),
  _m = Symbol.for("react.lazy"),
  Mu = Symbol.iterator;
function Fm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mu && e[Mu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var jf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Vf = Object.assign,
  zf = {};
function Zn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zf),
    (this.updater = n || jf);
}
Zn.prototype.isReactComponent = {};
Zn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Zn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $f() {}
$f.prototype = Zn.prototype;
function pa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = zf),
    (this.updater = n || jf);
}
var ha = (pa.prototype = new $f());
ha.constructor = pa;
Vf(ha, Zn.prototype);
ha.isPureReactComponent = !0;
var _u = Array.isArray,
  Uf = Object.prototype.hasOwnProperty,
  ma = { current: null },
  Bf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Hf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Uf.call(t, r) && !Bf.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: eo,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: ma.current,
  };
}
function Dm(e, t) {
  return {
    $$typeof: eo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function va(e) {
  return typeof e == "object" && e !== null && e.$$typeof === eo;
}
function Am(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Fu = /\/+/g;
function yl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Am("" + e.key)
    : t.toString(36);
}
function Do(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case eo:
          case Om:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + yl(l, 0) : r),
      _u(o)
        ? ((n = ""),
          e != null && (n = e.replace(Fu, "$&/") + "/"),
          Do(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (va(o) &&
            (o = Dm(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(Fu, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), _u(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + yl(i, a);
      l += Do(i, t, n, s, o);
    }
  else if (((s = Fm(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + yl(i, a++)), (l += Do(i, t, n, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function ho(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Do(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function jm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var be = { current: null },
  Ao = { transition: null },
  Vm = {
    ReactCurrentDispatcher: be,
    ReactCurrentBatchConfig: Ao,
    ReactCurrentOwner: ma,
  };
V.Children = {
  map: ho,
  forEach: function (e, t, n) {
    ho(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ho(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ho(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!va(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
V.Component = Zn;
V.Fragment = Pm;
V.Profiler = Tm;
V.PureComponent = pa;
V.StrictMode = Rm;
V.Suspense = Nm;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vm;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Vf({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = ma.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      Uf.call(t, s) &&
        !Bf.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: eo, type: e.type, key: o, ref: i, props: r, _owner: l };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: Im,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Lm, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = Hf;
V.createFactory = function (e) {
  var t = Hf.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: bm, render: e };
};
V.isValidElement = va;
V.lazy = function (e) {
  return { $$typeof: _m, _payload: { _status: -1, _result: e }, _init: jm };
};
V.memo = function (e, t) {
  return { $$typeof: Mm, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = Ao.transition;
  Ao.transition = {};
  try {
    e();
  } finally {
    Ao.transition = t;
  }
};
V.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
V.useCallback = function (e, t) {
  return be.current.useCallback(e, t);
};
V.useContext = function (e) {
  return be.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return be.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return be.current.useEffect(e, t);
};
V.useId = function () {
  return be.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return be.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return be.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return be.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return be.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return be.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return be.current.useRef(e);
};
V.useState = function (e) {
  return be.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return be.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return be.current.useTransition();
};
V.version = "18.2.0";
Af.exports = V;
var w = Af.exports;
const Wf = km(w),
  rs = Em({ __proto__: null, default: Wf }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zm = w,
  $m = Symbol.for("react.element"),
  Um = Symbol.for("react.fragment"),
  Bm = Object.prototype.hasOwnProperty,
  Hm = zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Wm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Bm.call(t, r) && !Wm.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: $m,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Hm.current,
  };
}
Di.Fragment = Um;
Di.jsx = Qf;
Di.jsxs = Qf;
Df.exports = Di;
var O = Df.exports,
  os = {},
  Kf = { exports: {} },
  Qe = {},
  Gf = { exports: {} },
  Yf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(L, _) {
    var D = L.length;
    L.push(_);
    e: for (; 0 < D; ) {
      var G = (D - 1) >>> 1,
        j = L[G];
      if (0 < o(j, _)) (L[G] = _), (L[D] = j), (D = G);
      else break e;
    }
  }
  function n(L) {
    return L.length === 0 ? null : L[0];
  }
  function r(L) {
    if (L.length === 0) return null;
    var _ = L[0],
      D = L.pop();
    if (D !== _) {
      L[0] = D;
      e: for (var G = 0, j = L.length, he = j >>> 1; G < he; ) {
        var ye = 2 * (G + 1) - 1,
          Xe = L[ye],
          fe = ye + 1,
          ze = L[fe];
        if (0 > o(Xe, D))
          fe < j && 0 > o(ze, Xe)
            ? ((L[G] = ze), (L[fe] = D), (G = fe))
            : ((L[G] = Xe), (L[ye] = D), (G = ye));
        else if (fe < j && 0 > o(ze, D)) (L[G] = ze), (L[fe] = D), (G = fe);
        else break e;
      }
    }
    return _;
  }
  function o(L, _) {
    var D = L.sortIndex - _.sortIndex;
    return D !== 0 ? D : L.id - _.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    u = [],
    f = 1,
    c = null,
    h = 3,
    y = !1,
    m = !1,
    v = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(L) {
    for (var _ = n(u); _ !== null; ) {
      if (_.callback === null) r(u);
      else if (_.startTime <= L)
        r(u), (_.sortIndex = _.expirationTime), t(s, _);
      else break;
      _ = n(u);
    }
  }
  function C(L) {
    if (((v = !1), g(L), !m))
      if (n(s) !== null) (m = !0), Z(x);
      else {
        var _ = n(u);
        _ !== null && Me(C, _.startTime - L);
      }
  }
  function x(L, _) {
    (m = !1), v && ((v = !1), d(R), (R = -1)), (y = !0);
    var D = h;
    try {
      for (
        g(_), c = n(s);
        c !== null && (!(c.expirationTime > _) || (L && !K()));

      ) {
        var G = c.callback;
        if (typeof G == "function") {
          (c.callback = null), (h = c.priorityLevel);
          var j = G(c.expirationTime <= _);
          (_ = e.unstable_now()),
            typeof j == "function" ? (c.callback = j) : c === n(s) && r(s),
            g(_);
        } else r(s);
        c = n(s);
      }
      if (c !== null) var he = !0;
      else {
        var ye = n(u);
        ye !== null && Me(C, ye.startTime - _), (he = !1);
      }
      return he;
    } finally {
      (c = null), (h = D), (y = !1);
    }
  }
  var P = !1,
    E = null,
    R = -1,
    A = 5,
    N = -1;
  function K() {
    return !(e.unstable_now() - N < A);
  }
  function re() {
    if (E !== null) {
      var L = e.unstable_now();
      N = L;
      var _ = !0;
      try {
        _ = E(!0, L);
      } finally {
        _ ? Te() : ((P = !1), (E = null));
      }
    } else P = !1;
  }
  var Te;
  if (typeof p == "function")
    Te = function () {
      p(re);
    };
  else if (typeof MessageChannel < "u") {
    var Ye = new MessageChannel(),
      se = Ye.port2;
    (Ye.port1.onmessage = re),
      (Te = function () {
        se.postMessage(null);
      });
  } else
    Te = function () {
      S(re, 0);
    };
  function Z(L) {
    (E = L), P || ((P = !0), Te());
  }
  function Me(L, _) {
    R = S(function () {
      L(e.unstable_now());
    }, _);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (L) {
      L.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || y || ((m = !0), Z(x));
    }),
    (e.unstable_forceFrameRate = function (L) {
      0 > L || 125 < L
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (A = 0 < L ? Math.floor(1e3 / L) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (L) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = h;
      }
      var D = h;
      h = _;
      try {
        return L();
      } finally {
        h = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (L, _) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var D = h;
      h = L;
      try {
        return _();
      } finally {
        h = D;
      }
    }),
    (e.unstable_scheduleCallback = function (L, _, D) {
      var G = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? G + D : G))
          : (D = G),
        L)
      ) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return (
        (j = D + j),
        (L = {
          id: f++,
          callback: _,
          priorityLevel: L,
          startTime: D,
          expirationTime: j,
          sortIndex: -1,
        }),
        D > G
          ? ((L.sortIndex = D),
            t(u, L),
            n(s) === null &&
              L === n(u) &&
              (v ? (d(R), (R = -1)) : (v = !0), Me(C, D - G)))
          : ((L.sortIndex = j), t(s, L), m || y || ((m = !0), Z(x))),
        L
      );
    }),
    (e.unstable_shouldYield = K),
    (e.unstable_wrapCallback = function (L) {
      var _ = h;
      return function () {
        var D = h;
        h = _;
        try {
          return L.apply(this, arguments);
        } finally {
          h = D;
        }
      };
    });
})(Yf);
Gf.exports = Yf;
var Qm = Gf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xf = w,
  We = Qm;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var qf = new Set(),
  br = {};
function Sn(e, t) {
  Hn(e, t), Hn(e + "Capture", t);
}
function Hn(e, t) {
  for (br[e] = t, e = 0; e < t.length; e++) qf.add(t[e]);
}
var It = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  is = Object.prototype.hasOwnProperty,
  Km =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Du = {},
  Au = {};
function Gm(e) {
  return is.call(Au, e)
    ? !0
    : is.call(Du, e)
    ? !1
    : Km.test(e)
    ? (Au[e] = !0)
    : ((Du[e] = !0), !1);
}
function Ym(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Xm(e, t, n, r) {
  if (t === null || typeof t > "u" || Ym(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ne(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Ne(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  xe[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  xe[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  xe[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  xe[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  xe[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  xe[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  xe[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ga = /[\-:]([a-z])/g;
function ya(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ga, ya);
    xe[t] = new Ne(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ga, ya);
    xe[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ga, ya);
  xe[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  xe[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new Ne(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  xe[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Sa(e, t, n, r) {
  var o = xe.hasOwnProperty(t) ? xe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Xm(t, n, o, r) && (n = null),
    r || o === null
      ? Gm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = Xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  mo = Symbol.for("react.element"),
  On = Symbol.for("react.portal"),
  Pn = Symbol.for("react.fragment"),
  wa = Symbol.for("react.strict_mode"),
  ls = Symbol.for("react.profiler"),
  Jf = Symbol.for("react.provider"),
  Zf = Symbol.for("react.context"),
  Ca = Symbol.for("react.forward_ref"),
  ss = Symbol.for("react.suspense"),
  as = Symbol.for("react.suspense_list"),
  xa = Symbol.for("react.memo"),
  jt = Symbol.for("react.lazy"),
  ed = Symbol.for("react.offscreen"),
  ju = Symbol.iterator;
function ir(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ju && e[ju]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ne = Object.assign,
  Sl;
function vr(e) {
  if (Sl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Sl = (t && t[1]) || "";
    }
  return (
    `
` +
    Sl +
    e
  );
}
var wl = !1;
function Cl(e, t) {
  if (!e || wl) return "";
  wl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var s =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (wl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? vr(e) : "";
}
function qm(e) {
  switch (e.tag) {
    case 5:
      return vr(e.type);
    case 16:
      return vr("Lazy");
    case 13:
      return vr("Suspense");
    case 19:
      return vr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Cl(e.type, !1)), e;
    case 11:
      return (e = Cl(e.type.render, !1)), e;
    case 1:
      return (e = Cl(e.type, !0)), e;
    default:
      return "";
  }
}
function us(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Pn:
      return "Fragment";
    case On:
      return "Portal";
    case ls:
      return "Profiler";
    case wa:
      return "StrictMode";
    case ss:
      return "Suspense";
    case as:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Zf:
        return (e.displayName || "Context") + ".Consumer";
      case Jf:
        return (e._context.displayName || "Context") + ".Provider";
      case Ca:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case xa:
        return (
          (t = e.displayName || null), t !== null ? t : us(e.type) || "Memo"
        );
      case jt:
        (t = e._payload), (e = e._init);
        try {
          return us(e(t));
        } catch {}
    }
  return null;
}
function Jm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return us(t);
    case 8:
      return t === wa ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function en(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function td(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Zm(e) {
  var t = td(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function vo(e) {
  e._valueTracker || (e._valueTracker = Zm(e));
}
function nd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = td(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ti(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function cs(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Vu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = en(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function rd(e, t) {
  (t = t.checked), t != null && Sa(e, "checked", t, !1);
}
function fs(e, t) {
  rd(e, t);
  var n = en(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ds(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ds(e, t.type, en(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function zu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ds(e, t, n) {
  (t !== "number" || ti(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var gr = Array.isArray;
function An(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + en(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ps(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function $u(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (gr(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: en(n) };
}
function od(e, t) {
  var n = en(t.value),
    r = en(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Uu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function id(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function hs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? id(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var go,
  ld = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        go = go || document.createElement("div"),
          go.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = go.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Nr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xr = {
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
  },
  ev = ["Webkit", "ms", "Moz", "O"];
Object.keys(xr).forEach(function (e) {
  ev.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xr[t] = xr[e]);
  });
});
function sd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (xr.hasOwnProperty(e) && xr[e])
    ? ("" + t).trim()
    : t + "px";
}
function ad(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = sd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var tv = ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ms(e, t) {
  if (t) {
    if (tv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function vs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var gs = null;
function Ea(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ys = null,
  jn = null,
  Vn = null;
function Bu(e) {
  if ((e = ro(e))) {
    if (typeof ys != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = $i(t)), ys(e.stateNode, e.type, t));
  }
}
function ud(e) {
  jn ? (Vn ? Vn.push(e) : (Vn = [e])) : (jn = e);
}
function cd() {
  if (jn) {
    var e = jn,
      t = Vn;
    if (((Vn = jn = null), Bu(e), t)) for (e = 0; e < t.length; e++) Bu(t[e]);
  }
}
function fd(e, t) {
  return e(t);
}
function dd() {}
var xl = !1;
function pd(e, t, n) {
  if (xl) return e(t, n);
  xl = !0;
  try {
    return fd(e, t, n);
  } finally {
    (xl = !1), (jn !== null || Vn !== null) && (dd(), cd());
  }
}
function Mr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = $i(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var Ss = !1;
if (It)
  try {
    var lr = {};
    Object.defineProperty(lr, "passive", {
      get: function () {
        Ss = !0;
      },
    }),
      window.addEventListener("test", lr, lr),
      window.removeEventListener("test", lr, lr);
  } catch {
    Ss = !1;
  }
function nv(e, t, n, r, o, i, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Er = !1,
  ni = null,
  ri = !1,
  ws = null,
  rv = {
    onError: function (e) {
      (Er = !0), (ni = e);
    },
  };
function ov(e, t, n, r, o, i, l, a, s) {
  (Er = !1), (ni = null), nv.apply(rv, arguments);
}
function iv(e, t, n, r, o, i, l, a, s) {
  if ((ov.apply(this, arguments), Er)) {
    if (Er) {
      var u = ni;
      (Er = !1), (ni = null);
    } else throw Error(T(198));
    ri || ((ri = !0), (ws = u));
  }
}
function wn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function hd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Hu(e) {
  if (wn(e) !== e) throw Error(T(188));
}
function lv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = wn(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Hu(o), e;
        if (i === r) return Hu(o), t;
        i = i.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function md(e) {
  return (e = lv(e)), e !== null ? vd(e) : null;
}
function vd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = vd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gd = We.unstable_scheduleCallback,
  Wu = We.unstable_cancelCallback,
  sv = We.unstable_shouldYield,
  av = We.unstable_requestPaint,
  le = We.unstable_now,
  uv = We.unstable_getCurrentPriorityLevel,
  ka = We.unstable_ImmediatePriority,
  yd = We.unstable_UserBlockingPriority,
  oi = We.unstable_NormalPriority,
  cv = We.unstable_LowPriority,
  Sd = We.unstable_IdlePriority,
  Ai = null,
  yt = null;
function fv(e) {
  if (yt && typeof yt.onCommitFiberRoot == "function")
    try {
      yt.onCommitFiberRoot(Ai, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var at = Math.clz32 ? Math.clz32 : hv,
  dv = Math.log,
  pv = Math.LN2;
function hv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((dv(e) / pv) | 0)) | 0;
}
var yo = 64,
  So = 4194304;
function yr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ii(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (r = yr(a)) : ((i &= l), i !== 0 && (r = yr(i)));
  } else (l = n & ~o), l !== 0 ? (r = yr(l)) : i !== 0 && (r = yr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - at(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function mv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function vv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - at(i),
      a = 1 << l,
      s = o[l];
    s === -1
      ? (!(a & n) || a & r) && (o[l] = mv(a, t))
      : s <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Cs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function wd() {
  var e = yo;
  return (yo <<= 1), !(yo & 4194240) && (yo = 64), e;
}
function El(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function to(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - at(t)),
    (e[t] = n);
}
function gv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - at(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Oa(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - at(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var W = 0;
function Cd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var xd,
  Pa,
  Ed,
  kd,
  Od,
  xs = !1,
  wo = [],
  Wt = null,
  Qt = null,
  Kt = null,
  _r = new Map(),
  Fr = new Map(),
  zt = [],
  yv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Qu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wt = null;
      break;
    case "dragenter":
    case "dragleave":
      Qt = null;
      break;
    case "mouseover":
    case "mouseout":
      Kt = null;
      break;
    case "pointerover":
    case "pointerout":
      _r.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fr.delete(t.pointerId);
  }
}
function sr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = ro(t)), t !== null && Pa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Sv(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Wt = sr(Wt, e, t, n, r, o)), !0;
    case "dragenter":
      return (Qt = sr(Qt, e, t, n, r, o)), !0;
    case "mouseover":
      return (Kt = sr(Kt, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return _r.set(i, sr(_r.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Fr.set(i, sr(Fr.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Pd(e) {
  var t = an(e.target);
  if (t !== null) {
    var n = wn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = hd(n)), t !== null)) {
          (e.blockedOn = t),
            Od(e.priority, function () {
              Ed(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function jo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Es(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (gs = r), n.target.dispatchEvent(r), (gs = null);
    } else return (t = ro(n)), t !== null && Pa(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ku(e, t, n) {
  jo(e) && n.delete(t);
}
function wv() {
  (xs = !1),
    Wt !== null && jo(Wt) && (Wt = null),
    Qt !== null && jo(Qt) && (Qt = null),
    Kt !== null && jo(Kt) && (Kt = null),
    _r.forEach(Ku),
    Fr.forEach(Ku);
}
function ar(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    xs ||
      ((xs = !0),
      We.unstable_scheduleCallback(We.unstable_NormalPriority, wv)));
}
function Dr(e) {
  function t(o) {
    return ar(o, e);
  }
  if (0 < wo.length) {
    ar(wo[0], e);
    for (var n = 1; n < wo.length; n++) {
      var r = wo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wt !== null && ar(Wt, e),
      Qt !== null && ar(Qt, e),
      Kt !== null && ar(Kt, e),
      _r.forEach(t),
      Fr.forEach(t),
      n = 0;
    n < zt.length;
    n++
  )
    (r = zt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < zt.length && ((n = zt[0]), n.blockedOn === null); )
    Pd(n), n.blockedOn === null && zt.shift();
}
var zn = _t.ReactCurrentBatchConfig,
  li = !0;
function Cv(e, t, n, r) {
  var o = W,
    i = zn.transition;
  zn.transition = null;
  try {
    (W = 1), Ra(e, t, n, r);
  } finally {
    (W = o), (zn.transition = i);
  }
}
function xv(e, t, n, r) {
  var o = W,
    i = zn.transition;
  zn.transition = null;
  try {
    (W = 4), Ra(e, t, n, r);
  } finally {
    (W = o), (zn.transition = i);
  }
}
function Ra(e, t, n, r) {
  if (li) {
    var o = Es(e, t, n, r);
    if (o === null) Ml(e, t, r, si, n), Qu(e, r);
    else if (Sv(o, e, t, n, r)) r.stopPropagation();
    else if ((Qu(e, r), t & 4 && -1 < yv.indexOf(e))) {
      for (; o !== null; ) {
        var i = ro(o);
        if (
          (i !== null && xd(i),
          (i = Es(e, t, n, r)),
          i === null && Ml(e, t, r, si, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ml(e, t, r, null, n);
  }
}
var si = null;
function Es(e, t, n, r) {
  if (((si = null), (e = Ea(r)), (e = an(e)), e !== null))
    if (((t = wn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = hd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (si = e), null;
}
function Rd(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (uv()) {
        case ka:
          return 1;
        case yd:
          return 4;
        case oi:
        case cv:
          return 16;
        case Sd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ut = null,
  Ta = null,
  Vo = null;
function Td() {
  if (Vo) return Vo;
  var e,
    t = Ta,
    n = t.length,
    r,
    o = "value" in Ut ? Ut.value : Ut.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Vo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function zo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Co() {
  return !0;
}
function Gu() {
  return !1;
}
function Ke(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Co
        : Gu),
      (this.isPropagationStopped = Gu),
      this
    );
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Co));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Co));
      },
      persist: function () {},
      isPersistent: Co,
    }),
    t
  );
}
var er = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  La = Ke(er),
  no = ne({}, er, { view: 0, detail: 0 }),
  Ev = Ke(no),
  kl,
  Ol,
  ur,
  ji = ne({}, no, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ia,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ur &&
            (ur && e.type === "mousemove"
              ? ((kl = e.screenX - ur.screenX), (Ol = e.screenY - ur.screenY))
              : (Ol = kl = 0),
            (ur = e)),
          kl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ol;
    },
  }),
  Yu = Ke(ji),
  kv = ne({}, ji, { dataTransfer: 0 }),
  Ov = Ke(kv),
  Pv = ne({}, no, { relatedTarget: 0 }),
  Pl = Ke(Pv),
  Rv = ne({}, er, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Tv = Ke(Rv),
  Lv = ne({}, er, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Iv = Ke(Lv),
  bv = ne({}, er, { data: 0 }),
  Xu = Ke(bv),
  Nv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Mv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  _v = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Fv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = _v[e]) ? !!t[e] : !1;
}
function Ia() {
  return Fv;
}
var Dv = ne({}, no, {
    key: function (e) {
      if (e.key) {
        var t = Nv[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = zo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Mv[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ia,
    charCode: function (e) {
      return e.type === "keypress" ? zo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? zo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Av = Ke(Dv),
  jv = ne({}, ji, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  qu = Ke(jv),
  Vv = ne({}, no, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ia,
  }),
  zv = Ke(Vv),
  $v = ne({}, er, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Uv = Ke($v),
  Bv = ne({}, ji, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Hv = Ke(Bv),
  Wv = [9, 13, 27, 32],
  ba = It && "CompositionEvent" in window,
  kr = null;
It && "documentMode" in document && (kr = document.documentMode);
var Qv = It && "TextEvent" in window && !kr,
  Ld = It && (!ba || (kr && 8 < kr && 11 >= kr)),
  Ju = " ",
  Zu = !1;
function Id(e, t) {
  switch (e) {
    case "keyup":
      return Wv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function bd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Rn = !1;
function Kv(e, t) {
  switch (e) {
    case "compositionend":
      return bd(t);
    case "keypress":
      return t.which !== 32 ? null : ((Zu = !0), Ju);
    case "textInput":
      return (e = t.data), e === Ju && Zu ? null : e;
    default:
      return null;
  }
}
function Gv(e, t) {
  if (Rn)
    return e === "compositionend" || (!ba && Id(e, t))
      ? ((e = Td()), (Vo = Ta = Ut = null), (Rn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ld && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Yv = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function ec(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Yv[e.type] : t === "textarea";
}
function Nd(e, t, n, r) {
  ud(r),
    (t = ai(t, "onChange")),
    0 < t.length &&
      ((n = new La("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Or = null,
  Ar = null;
function Xv(e) {
  Bd(e, 0);
}
function Vi(e) {
  var t = In(e);
  if (nd(t)) return e;
}
function qv(e, t) {
  if (e === "change") return t;
}
var Md = !1;
if (It) {
  var Rl;
  if (It) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var tc = document.createElement("div");
      tc.setAttribute("oninput", "return;"),
        (Tl = typeof tc.oninput == "function");
    }
    Rl = Tl;
  } else Rl = !1;
  Md = Rl && (!document.documentMode || 9 < document.documentMode);
}
function nc() {
  Or && (Or.detachEvent("onpropertychange", _d), (Ar = Or = null));
}
function _d(e) {
  if (e.propertyName === "value" && Vi(Ar)) {
    var t = [];
    Nd(t, Ar, e, Ea(e)), pd(Xv, t);
  }
}
function Jv(e, t, n) {
  e === "focusin"
    ? (nc(), (Or = t), (Ar = n), Or.attachEvent("onpropertychange", _d))
    : e === "focusout" && nc();
}
function Zv(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Vi(Ar);
}
function eg(e, t) {
  if (e === "click") return Vi(t);
}
function tg(e, t) {
  if (e === "input" || e === "change") return Vi(t);
}
function ng(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ft = typeof Object.is == "function" ? Object.is : ng;
function jr(e, t) {
  if (ft(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!is.call(t, o) || !ft(e[o], t[o])) return !1;
  }
  return !0;
}
function rc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function oc(e, t) {
  var n = rc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = rc(n);
  }
}
function Fd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Fd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Dd() {
  for (var e = window, t = ti(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ti(e.document);
  }
  return t;
}
function Na(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function rg(e) {
  var t = Dd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Fd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Na(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = oc(n, i));
        var l = oc(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var og = It && "documentMode" in document && 11 >= document.documentMode,
  Tn = null,
  ks = null,
  Pr = null,
  Os = !1;
function ic(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Os ||
    Tn == null ||
    Tn !== ti(r) ||
    ((r = Tn),
    "selectionStart" in r && Na(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pr && jr(Pr, r)) ||
      ((Pr = r),
      (r = ai(ks, "onSelect")),
      0 < r.length &&
        ((t = new La("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Tn))));
}
function xo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ln = {
    animationend: xo("Animation", "AnimationEnd"),
    animationiteration: xo("Animation", "AnimationIteration"),
    animationstart: xo("Animation", "AnimationStart"),
    transitionend: xo("Transition", "TransitionEnd"),
  },
  Ll = {},
  Ad = {};
It &&
  ((Ad = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ln.animationend.animation,
    delete Ln.animationiteration.animation,
    delete Ln.animationstart.animation),
  "TransitionEvent" in window || delete Ln.transitionend.transition);
function zi(e) {
  if (Ll[e]) return Ll[e];
  if (!Ln[e]) return e;
  var t = Ln[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ad) return (Ll[e] = t[n]);
  return e;
}
var jd = zi("animationend"),
  Vd = zi("animationiteration"),
  zd = zi("animationstart"),
  $d = zi("transitionend"),
  Ud = new Map(),
  lc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function nn(e, t) {
  Ud.set(e, t), Sn(t, [e]);
}
for (var Il = 0; Il < lc.length; Il++) {
  var bl = lc[Il],
    ig = bl.toLowerCase(),
    lg = bl[0].toUpperCase() + bl.slice(1);
  nn(ig, "on" + lg);
}
nn(jd, "onAnimationEnd");
nn(Vd, "onAnimationIteration");
nn(zd, "onAnimationStart");
nn("dblclick", "onDoubleClick");
nn("focusin", "onFocus");
nn("focusout", "onBlur");
nn($d, "onTransitionEnd");
Hn("onMouseEnter", ["mouseout", "mouseover"]);
Hn("onMouseLeave", ["mouseout", "mouseover"]);
Hn("onPointerEnter", ["pointerout", "pointerover"]);
Hn("onPointerLeave", ["pointerout", "pointerover"]);
Sn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Sn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Sn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Sn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Sr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  sg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));
function sc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), iv(r, t, void 0, e), (e.currentTarget = null);
}
function Bd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== i && o.isPropagationStopped())) break e;
          sc(o, a, u), (i = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          sc(o, a, u), (i = s);
        }
    }
  }
  if (ri) throw ((e = ws), (ri = !1), (ws = null), e);
}
function X(e, t) {
  var n = t[Is];
  n === void 0 && (n = t[Is] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Hd(t, e, 2, !1), n.add(r));
}
function Nl(e, t, n) {
  var r = 0;
  t && (r |= 4), Hd(n, e, r, t);
}
var Eo = "_reactListening" + Math.random().toString(36).slice(2);
function Vr(e) {
  if (!e[Eo]) {
    (e[Eo] = !0),
      qf.forEach(function (n) {
        n !== "selectionchange" && (sg.has(n) || Nl(n, !1, e), Nl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Eo] || ((t[Eo] = !0), Nl("selectionchange", !1, t));
  }
}
function Hd(e, t, n, r) {
  switch (Rd(t)) {
    case 1:
      var o = Cv;
      break;
    case 4:
      o = xv;
      break;
    default:
      o = Ra;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ss ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Ml(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = an(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  pd(function () {
    var u = i,
      f = Ea(n),
      c = [];
    e: {
      var h = Ud.get(e);
      if (h !== void 0) {
        var y = La,
          m = e;
        switch (e) {
          case "keypress":
            if (zo(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Av;
            break;
          case "focusin":
            (m = "focus"), (y = Pl);
            break;
          case "focusout":
            (m = "blur"), (y = Pl);
            break;
          case "beforeblur":
          case "afterblur":
            y = Pl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Yu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Ov;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = zv;
            break;
          case jd:
          case Vd:
          case zd:
            y = Tv;
            break;
          case $d:
            y = Uv;
            break;
          case "scroll":
            y = Ev;
            break;
          case "wheel":
            y = Hv;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Iv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = qu;
        }
        var v = (t & 4) !== 0,
          S = !v && e === "scroll",
          d = v ? (h !== null ? h + "Capture" : null) : h;
        v = [];
        for (var p = u, g; p !== null; ) {
          g = p;
          var C = g.stateNode;
          if (
            (g.tag === 5 &&
              C !== null &&
              ((g = C),
              d !== null && ((C = Mr(p, d)), C != null && v.push(zr(p, C, g)))),
            S)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((h = new y(h, m, null, n, f)), c.push({ event: h, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== gs &&
            (m = n.relatedTarget || n.fromElement) &&
            (an(m) || m[bt]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            f.window === f
              ? f
              : (h = f.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          y
            ? ((m = n.relatedTarget || n.toElement),
              (y = u),
              (m = m ? an(m) : null),
              m !== null &&
                ((S = wn(m)), m !== S || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((y = null), (m = u)),
          y !== m)
        ) {
          if (
            ((v = Yu),
            (C = "onMouseLeave"),
            (d = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = qu),
              (C = "onPointerLeave"),
              (d = "onPointerEnter"),
              (p = "pointer")),
            (S = y == null ? h : In(y)),
            (g = m == null ? h : In(m)),
            (h = new v(C, p + "leave", y, n, f)),
            (h.target = S),
            (h.relatedTarget = g),
            (C = null),
            an(f) === u &&
              ((v = new v(d, p + "enter", m, n, f)),
              (v.target = g),
              (v.relatedTarget = S),
              (C = v)),
            (S = C),
            y && m)
          )
            t: {
              for (v = y, d = m, p = 0, g = v; g; g = En(g)) p++;
              for (g = 0, C = d; C; C = En(C)) g++;
              for (; 0 < p - g; ) (v = En(v)), p--;
              for (; 0 < g - p; ) (d = En(d)), g--;
              for (; p--; ) {
                if (v === d || (d !== null && v === d.alternate)) break t;
                (v = En(v)), (d = En(d));
              }
              v = null;
            }
          else v = null;
          y !== null && ac(c, h, y, v, !1),
            m !== null && S !== null && ac(c, S, m, v, !0);
        }
      }
      e: {
        if (
          ((h = u ? In(u) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var x = qv;
        else if (ec(h))
          if (Md) x = tg;
          else {
            x = Zv;
            var P = Jv;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (x = eg);
        if (x && (x = x(e, u))) {
          Nd(c, x, n, f);
          break e;
        }
        P && P(e, h, u),
          e === "focusout" &&
            (P = h._wrapperState) &&
            P.controlled &&
            h.type === "number" &&
            ds(h, "number", h.value);
      }
      switch (((P = u ? In(u) : window), e)) {
        case "focusin":
          (ec(P) || P.contentEditable === "true") &&
            ((Tn = P), (ks = u), (Pr = null));
          break;
        case "focusout":
          Pr = ks = Tn = null;
          break;
        case "mousedown":
          Os = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Os = !1), ic(c, n, f);
          break;
        case "selectionchange":
          if (og) break;
        case "keydown":
        case "keyup":
          ic(c, n, f);
      }
      var E;
      if (ba)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        Rn
          ? Id(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Ld &&
          n.locale !== "ko" &&
          (Rn || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && Rn && (E = Td())
            : ((Ut = f),
              (Ta = "value" in Ut ? Ut.value : Ut.textContent),
              (Rn = !0))),
        (P = ai(u, R)),
        0 < P.length &&
          ((R = new Xu(R, e, null, n, f)),
          c.push({ event: R, listeners: P }),
          E ? (R.data = E) : ((E = bd(n)), E !== null && (R.data = E)))),
        (E = Qv ? Kv(e, n) : Gv(e, n)) &&
          ((u = ai(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new Xu("onBeforeInput", "beforeinput", null, n, f)),
            c.push({ event: f, listeners: u }),
            (f.data = E)));
    }
    Bd(c, t);
  });
}
function zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ai(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Mr(e, n)),
      i != null && r.unshift(zr(e, i, o)),
      (i = Mr(e, t)),
      i != null && r.push(zr(e, i, o))),
      (e = e.return);
  }
  return r;
}
function En(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ac(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((s = Mr(n, i)), s != null && l.unshift(zr(n, s, a)))
        : o || ((s = Mr(n, i)), s != null && l.push(zr(n, s, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var ag = /\r\n?/g,
  ug = /\u0000|\uFFFD/g;
function uc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      ag,
      `
`
    )
    .replace(ug, "");
}
function ko(e, t, n) {
  if (((t = uc(t)), uc(e) !== t && n)) throw Error(T(425));
}
function ui() {}
var Ps = null,
  Rs = null;
function Ts(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ls = typeof setTimeout == "function" ? setTimeout : void 0,
  cg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  cc = typeof Promise == "function" ? Promise : void 0,
  fg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof cc < "u"
      ? function (e) {
          return cc.resolve(null).then(e).catch(dg);
        }
      : Ls;
function dg(e) {
  setTimeout(function () {
    throw e;
  });
}
function _l(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Dr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Dr(t);
}
function Gt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function fc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var tr = Math.random().toString(36).slice(2),
  vt = "__reactFiber$" + tr,
  $r = "__reactProps$" + tr,
  bt = "__reactContainer$" + tr,
  Is = "__reactEvents$" + tr,
  pg = "__reactListeners$" + tr,
  hg = "__reactHandles$" + tr;
function an(e) {
  var t = e[vt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[bt] || n[vt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = fc(e); e !== null; ) {
          if ((n = e[vt])) return n;
          e = fc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ro(e) {
  return (
    (e = e[vt] || e[bt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function In(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function $i(e) {
  return e[$r] || null;
}
var bs = [],
  bn = -1;
function rn(e) {
  return { current: e };
}
function q(e) {
  0 > bn || ((e.current = bs[bn]), (bs[bn] = null), bn--);
}
function Y(e, t) {
  bn++, (bs[bn] = e.current), (e.current = t);
}
var tn = {},
  Re = rn(tn),
  De = rn(!1),
  pn = tn;
function Wn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return tn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ae(e) {
  return (e = e.childContextTypes), e != null;
}
function ci() {
  q(De), q(Re);
}
function dc(e, t, n) {
  if (Re.current !== tn) throw Error(T(168));
  Y(Re, t), Y(De, n);
}
function Wd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(T(108, Jm(e) || "Unknown", o));
  return ne({}, n, r);
}
function fi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tn),
    (pn = Re.current),
    Y(Re, e),
    Y(De, De.current),
    !0
  );
}
function pc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = Wd(e, t, pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(De),
      q(Re),
      Y(Re, e))
    : q(De),
    Y(De, n);
}
var kt = null,
  Ui = !1,
  Fl = !1;
function Qd(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
function mg(e) {
  (Ui = !0), Qd(e);
}
function on() {
  if (!Fl && kt !== null) {
    Fl = !0;
    var e = 0,
      t = W;
    try {
      var n = kt;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (kt = null), (Ui = !1);
    } catch (o) {
      throw (kt !== null && (kt = kt.slice(e + 1)), gd(ka, on), o);
    } finally {
      (W = t), (Fl = !1);
    }
  }
  return null;
}
var Nn = [],
  Mn = 0,
  di = null,
  pi = 0,
  qe = [],
  Je = 0,
  hn = null,
  Ot = 1,
  Pt = "";
function ln(e, t) {
  (Nn[Mn++] = pi), (Nn[Mn++] = di), (di = e), (pi = t);
}
function Kd(e, t, n) {
  (qe[Je++] = Ot), (qe[Je++] = Pt), (qe[Je++] = hn), (hn = e);
  var r = Ot;
  e = Pt;
  var o = 32 - at(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - at(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Ot = (1 << (32 - at(t) + o)) | (n << o) | r),
      (Pt = i + e);
  } else (Ot = (1 << i) | (n << o) | r), (Pt = e);
}
function Ma(e) {
  e.return !== null && (ln(e, 1), Kd(e, 1, 0));
}
function _a(e) {
  for (; e === di; )
    (di = Nn[--Mn]), (Nn[Mn] = null), (pi = Nn[--Mn]), (Nn[Mn] = null);
  for (; e === hn; )
    (hn = qe[--Je]),
      (qe[Je] = null),
      (Pt = qe[--Je]),
      (qe[Je] = null),
      (Ot = qe[--Je]),
      (qe[Je] = null);
}
var Be = null,
  Ue = null,
  J = !1,
  st = null;
function Gd(e, t) {
  var n = Ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function hc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Be = e), (Ue = Gt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Be = e), (Ue = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = hn !== null ? { id: Ot, overflow: Pt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Be = e),
            (Ue = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ns(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ms(e) {
  if (J) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!hc(e, t)) {
        if (Ns(e)) throw Error(T(418));
        t = Gt(n.nextSibling);
        var r = Be;
        t && hc(e, t)
          ? Gd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (Be = e));
      }
    } else {
      if (Ns(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (J = !1), (Be = e);
    }
  }
}
function mc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Be = e;
}
function Oo(e) {
  if (e !== Be) return !1;
  if (!J) return mc(e), (J = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ts(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (Ns(e)) throw (Yd(), Error(T(418)));
    for (; t; ) Gd(e, t), (t = Gt(t.nextSibling));
  }
  if ((mc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ue = Gt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = Be ? Gt(e.stateNode.nextSibling) : null;
  return !0;
}
function Yd() {
  for (var e = Ue; e; ) e = Gt(e.nextSibling);
}
function Qn() {
  (Ue = Be = null), (J = !1);
}
function Fa(e) {
  st === null ? (st = [e]) : st.push(e);
}
var vg = _t.ReactCurrentBatchConfig;
function it(e, t) {
  if (e && e.defaultProps) {
    (t = ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var hi = rn(null),
  mi = null,
  _n = null,
  Da = null;
function Aa() {
  Da = _n = mi = null;
}
function ja(e) {
  var t = hi.current;
  q(hi), (e._currentValue = t);
}
function _s(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function $n(e, t) {
  (mi = e),
    (Da = _n = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Fe = !0), (e.firstContext = null));
}
function nt(e) {
  var t = e._currentValue;
  if (Da !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), _n === null)) {
      if (mi === null) throw Error(T(308));
      (_n = e), (mi.dependencies = { lanes: 0, firstContext: e });
    } else _n = _n.next = e;
  return t;
}
var un = null;
function Va(e) {
  un === null ? (un = [e]) : un.push(e);
}
function Xd(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Va(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Nt(e, r)
  );
}
function Nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Vt = !1;
function za(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function qd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Rt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), $ & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Nt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Va(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Nt(e, n)
  );
}
function $o(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oa(e, n);
  }
}
function vc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function vi(e, t, n, r) {
  var o = e.updateQueue;
  Vt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (i = u) : (l.next = u), (l = s);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== l &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var c = o.baseState;
    (l = 0), (f = u = s = null), (a = i);
    do {
      var h = a.lane,
        y = a.eventTime;
      if ((r & h) === h) {
        f !== null &&
          (f = f.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var m = e,
            v = a;
          switch (((h = t), (y = n), v.tag)) {
            case 1:
              if (((m = v.payload), typeof m == "function")) {
                c = m.call(y, c, h);
                break e;
              }
              c = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = v.payload),
                (h = typeof m == "function" ? m.call(y, c, h) : m),
                h == null)
              )
                break e;
              c = ne({}, c, h);
              break e;
            case 2:
              Vt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = o.effects),
          h === null ? (o.effects = [a]) : h.push(a));
      } else
        (y = {
          eventTime: y,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = y), (s = c)) : (f = f.next = y),
          (l |= h);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (o.lastBaseUpdate = h),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (s = c),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (vn |= l), (e.lanes = l), (e.memoizedState = c);
  }
}
function gc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(T(191, o));
        o.call(r);
      }
    }
}
var Jd = new Xf.Component().refs;
function Fs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Bi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? wn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      o = qt(e),
      i = Rt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Yt(e, i, o)),
      t !== null && (ut(t, e, o, r), $o(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      o = qt(e),
      i = Rt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Yt(e, i, o)),
      t !== null && (ut(t, e, o, r), $o(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ie(),
      r = qt(e),
      o = Rt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Yt(e, o, r)),
      t !== null && (ut(t, e, r, n), $o(t, e, r));
  },
};
function yc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !jr(n, r) || !jr(o, i)
      : !0
  );
}
function Zd(e, t, n) {
  var r = !1,
    o = tn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = nt(i))
      : ((o = Ae(t) ? pn : Re.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Wn(e, o) : tn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Bi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Sc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Bi.enqueueReplaceState(t, t.state, null);
}
function Ds(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Jd), za(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = nt(i))
    : ((i = Ae(t) ? pn : Re.current), (o.context = Wn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Fs(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Bi.enqueueReplaceState(o, o.state, null),
      vi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function cr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            a === Jd && (a = o.refs = {}),
              l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function Po(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function wc(e) {
  var t = e._init;
  return t(e._payload);
}
function ep(e) {
  function t(d, p) {
    if (e) {
      var g = d.deletions;
      g === null ? ((d.deletions = [p]), (d.flags |= 16)) : g.push(p);
    }
  }
  function n(d, p) {
    if (!e) return null;
    for (; p !== null; ) t(d, p), (p = p.sibling);
    return null;
  }
  function r(d, p) {
    for (d = new Map(); p !== null; )
      p.key !== null ? d.set(p.key, p) : d.set(p.index, p), (p = p.sibling);
    return d;
  }
  function o(d, p) {
    return (d = Jt(d, p)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, p, g) {
    return (
      (d.index = g),
      e
        ? ((g = d.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((d.flags |= 2), p) : g)
            : ((d.flags |= 2), p))
        : ((d.flags |= 1048576), p)
    );
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, p, g, C) {
    return p === null || p.tag !== 6
      ? ((p = Ul(g, d.mode, C)), (p.return = d), p)
      : ((p = o(p, g)), (p.return = d), p);
  }
  function s(d, p, g, C) {
    var x = g.type;
    return x === Pn
      ? f(d, p, g.props.children, C, g.key)
      : p !== null &&
        (p.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === jt &&
            wc(x) === p.type))
      ? ((C = o(p, g.props)), (C.ref = cr(d, p, g)), (C.return = d), C)
      : ((C = Ko(g.type, g.key, g.props, null, d.mode, C)),
        (C.ref = cr(d, p, g)),
        (C.return = d),
        C);
  }
  function u(d, p, g, C) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = Bl(g, d.mode, C)), (p.return = d), p)
      : ((p = o(p, g.children || [])), (p.return = d), p);
  }
  function f(d, p, g, C, x) {
    return p === null || p.tag !== 7
      ? ((p = dn(g, d.mode, C, x)), (p.return = d), p)
      : ((p = o(p, g)), (p.return = d), p);
  }
  function c(d, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Ul("" + p, d.mode, g)), (p.return = d), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case mo:
          return (
            (g = Ko(p.type, p.key, p.props, null, d.mode, g)),
            (g.ref = cr(d, null, p)),
            (g.return = d),
            g
          );
        case On:
          return (p = Bl(p, d.mode, g)), (p.return = d), p;
        case jt:
          var C = p._init;
          return c(d, C(p._payload), g);
      }
      if (gr(p) || ir(p))
        return (p = dn(p, d.mode, g, null)), (p.return = d), p;
      Po(d, p);
    }
    return null;
  }
  function h(d, p, g, C) {
    var x = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return x !== null ? null : a(d, p, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case mo:
          return g.key === x ? s(d, p, g, C) : null;
        case On:
          return g.key === x ? u(d, p, g, C) : null;
        case jt:
          return (x = g._init), h(d, p, x(g._payload), C);
      }
      if (gr(g) || ir(g)) return x !== null ? null : f(d, p, g, C, null);
      Po(d, g);
    }
    return null;
  }
  function y(d, p, g, C, x) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (d = d.get(g) || null), a(p, d, "" + C, x);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case mo:
          return (d = d.get(C.key === null ? g : C.key) || null), s(p, d, C, x);
        case On:
          return (d = d.get(C.key === null ? g : C.key) || null), u(p, d, C, x);
        case jt:
          var P = C._init;
          return y(d, p, g, P(C._payload), x);
      }
      if (gr(C) || ir(C)) return (d = d.get(g) || null), f(p, d, C, x, null);
      Po(p, C);
    }
    return null;
  }
  function m(d, p, g, C) {
    for (
      var x = null, P = null, E = p, R = (p = 0), A = null;
      E !== null && R < g.length;
      R++
    ) {
      E.index > R ? ((A = E), (E = null)) : (A = E.sibling);
      var N = h(d, E, g[R], C);
      if (N === null) {
        E === null && (E = A);
        break;
      }
      e && E && N.alternate === null && t(d, E),
        (p = i(N, p, R)),
        P === null ? (x = N) : (P.sibling = N),
        (P = N),
        (E = A);
    }
    if (R === g.length) return n(d, E), J && ln(d, R), x;
    if (E === null) {
      for (; R < g.length; R++)
        (E = c(d, g[R], C)),
          E !== null &&
            ((p = i(E, p, R)), P === null ? (x = E) : (P.sibling = E), (P = E));
      return J && ln(d, R), x;
    }
    for (E = r(d, E); R < g.length; R++)
      (A = y(E, d, R, g[R], C)),
        A !== null &&
          (e && A.alternate !== null && E.delete(A.key === null ? R : A.key),
          (p = i(A, p, R)),
          P === null ? (x = A) : (P.sibling = A),
          (P = A));
    return (
      e &&
        E.forEach(function (K) {
          return t(d, K);
        }),
      J && ln(d, R),
      x
    );
  }
  function v(d, p, g, C) {
    var x = ir(g);
    if (typeof x != "function") throw Error(T(150));
    if (((g = x.call(g)), g == null)) throw Error(T(151));
    for (
      var P = (x = null), E = p, R = (p = 0), A = null, N = g.next();
      E !== null && !N.done;
      R++, N = g.next()
    ) {
      E.index > R ? ((A = E), (E = null)) : (A = E.sibling);
      var K = h(d, E, N.value, C);
      if (K === null) {
        E === null && (E = A);
        break;
      }
      e && E && K.alternate === null && t(d, E),
        (p = i(K, p, R)),
        P === null ? (x = K) : (P.sibling = K),
        (P = K),
        (E = A);
    }
    if (N.done) return n(d, E), J && ln(d, R), x;
    if (E === null) {
      for (; !N.done; R++, N = g.next())
        (N = c(d, N.value, C)),
          N !== null &&
            ((p = i(N, p, R)), P === null ? (x = N) : (P.sibling = N), (P = N));
      return J && ln(d, R), x;
    }
    for (E = r(d, E); !N.done; R++, N = g.next())
      (N = y(E, d, R, N.value, C)),
        N !== null &&
          (e && N.alternate !== null && E.delete(N.key === null ? R : N.key),
          (p = i(N, p, R)),
          P === null ? (x = N) : (P.sibling = N),
          (P = N));
    return (
      e &&
        E.forEach(function (re) {
          return t(d, re);
        }),
      J && ln(d, R),
      x
    );
  }
  function S(d, p, g, C) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Pn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case mo:
          e: {
            for (var x = g.key, P = p; P !== null; ) {
              if (P.key === x) {
                if (((x = g.type), x === Pn)) {
                  if (P.tag === 7) {
                    n(d, P.sibling),
                      (p = o(P, g.props.children)),
                      (p.return = d),
                      (d = p);
                    break e;
                  }
                } else if (
                  P.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === jt &&
                    wc(x) === P.type)
                ) {
                  n(d, P.sibling),
                    (p = o(P, g.props)),
                    (p.ref = cr(d, P, g)),
                    (p.return = d),
                    (d = p);
                  break e;
                }
                n(d, P);
                break;
              } else t(d, P);
              P = P.sibling;
            }
            g.type === Pn
              ? ((p = dn(g.props.children, d.mode, C, g.key)),
                (p.return = d),
                (d = p))
              : ((C = Ko(g.type, g.key, g.props, null, d.mode, C)),
                (C.ref = cr(d, p, g)),
                (C.return = d),
                (d = C));
          }
          return l(d);
        case On:
          e: {
            for (P = g.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(d, p.sibling),
                    (p = o(p, g.children || [])),
                    (p.return = d),
                    (d = p);
                  break e;
                } else {
                  n(d, p);
                  break;
                }
              else t(d, p);
              p = p.sibling;
            }
            (p = Bl(g, d.mode, C)), (p.return = d), (d = p);
          }
          return l(d);
        case jt:
          return (P = g._init), S(d, p, P(g._payload), C);
      }
      if (gr(g)) return m(d, p, g, C);
      if (ir(g)) return v(d, p, g, C);
      Po(d, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(d, p.sibling), (p = o(p, g)), (p.return = d), (d = p))
          : (n(d, p), (p = Ul(g, d.mode, C)), (p.return = d), (d = p)),
        l(d))
      : n(d, p);
  }
  return S;
}
var Kn = ep(!0),
  tp = ep(!1),
  oo = {},
  St = rn(oo),
  Ur = rn(oo),
  Br = rn(oo);
function cn(e) {
  if (e === oo) throw Error(T(174));
  return e;
}
function $a(e, t) {
  switch ((Y(Br, t), Y(Ur, e), Y(St, oo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : hs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = hs(t, e));
  }
  q(St), Y(St, t);
}
function Gn() {
  q(St), q(Ur), q(Br);
}
function np(e) {
  cn(Br.current);
  var t = cn(St.current),
    n = hs(t, e.type);
  t !== n && (Y(Ur, e), Y(St, n));
}
function Ua(e) {
  Ur.current === e && (q(St), q(Ur));
}
var ee = rn(0);
function gi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Dl = [];
function Ba() {
  for (var e = 0; e < Dl.length; e++)
    Dl[e]._workInProgressVersionPrimary = null;
  Dl.length = 0;
}
var Uo = _t.ReactCurrentDispatcher,
  Al = _t.ReactCurrentBatchConfig,
  mn = 0,
  te = null,
  de = null,
  me = null,
  yi = !1,
  Rr = !1,
  Hr = 0,
  gg = 0;
function Ee() {
  throw Error(T(321));
}
function Ha(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ft(e[n], t[n])) return !1;
  return !0;
}
function Wa(e, t, n, r, o, i) {
  if (
    ((mn = i),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Uo.current = e === null || e.memoizedState === null ? Cg : xg),
    (e = n(r, o)),
    Rr)
  ) {
    i = 0;
    do {
      if (((Rr = !1), (Hr = 0), 25 <= i)) throw Error(T(301));
      (i += 1),
        (me = de = null),
        (t.updateQueue = null),
        (Uo.current = Eg),
        (e = n(r, o));
    } while (Rr);
  }
  if (
    ((Uo.current = Si),
    (t = de !== null && de.next !== null),
    (mn = 0),
    (me = de = te = null),
    (yi = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function Qa() {
  var e = Hr !== 0;
  return (Hr = 0), e;
}
function pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return me === null ? (te.memoizedState = me = e) : (me = me.next = e), me;
}
function rt() {
  if (de === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = de.next;
  var t = me === null ? te.memoizedState : me.next;
  if (t !== null) (me = t), (de = e);
  else {
    if (e === null) throw Error(T(310));
    (de = e),
      (e = {
        memoizedState: de.memoizedState,
        baseState: de.baseState,
        baseQueue: de.baseQueue,
        queue: de.queue,
        next: null,
      }),
      me === null ? (te.memoizedState = me = e) : (me = me.next = e);
  }
  return me;
}
function Wr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function jl(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = de,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (l = null),
      s = null,
      u = i;
    do {
      var f = u.lane;
      if ((mn & f) === f)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = c), (l = r)) : (s = s.next = c),
          (te.lanes |= f),
          (vn |= f);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (l = r) : (s.next = a),
      ft(r, t.memoizedState) || (Fe = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (te.lanes |= i), (vn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vl(e) {
  var t = rt(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    ft(i, t.memoizedState) || (Fe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function rp() {}
function op(e, t) {
  var n = te,
    r = rt(),
    o = t(),
    i = !ft(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Fe = !0)),
    (r = r.queue),
    Ka(sp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (me !== null && me.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Qr(9, lp.bind(null, n, r, o, t), void 0, null),
      ve === null)
    )
      throw Error(T(349));
    mn & 30 || ip(n, t, o);
  }
  return o;
}
function ip(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function lp(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ap(t) && up(e);
}
function sp(e, t, n) {
  return n(function () {
    ap(t) && up(e);
  });
}
function ap(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ft(e, n);
  } catch {
    return !0;
  }
}
function up(e) {
  var t = Nt(e, 1);
  t !== null && ut(t, e, 1, -1);
}
function Cc(e) {
  var t = pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = wg.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function Qr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function cp() {
  return rt().memoizedState;
}
function Bo(e, t, n, r) {
  var o = pt();
  (te.flags |= e),
    (o.memoizedState = Qr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Hi(e, t, n, r) {
  var o = rt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (de !== null) {
    var l = de.memoizedState;
    if (((i = l.destroy), r !== null && Ha(r, l.deps))) {
      o.memoizedState = Qr(t, n, i, r);
      return;
    }
  }
  (te.flags |= e), (o.memoizedState = Qr(1 | t, n, i, r));
}
function xc(e, t) {
  return Bo(8390656, 8, e, t);
}
function Ka(e, t) {
  return Hi(2048, 8, e, t);
}
function fp(e, t) {
  return Hi(4, 2, e, t);
}
function dp(e, t) {
  return Hi(4, 4, e, t);
}
function pp(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function hp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Hi(4, 4, pp.bind(null, t, e), n)
  );
}
function Ga() {}
function mp(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ha(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function vp(e, t) {
  var n = rt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ha(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function gp(e, t, n) {
  return mn & 21
    ? (ft(n, t) || ((n = wd()), (te.lanes |= n), (vn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Fe = !0)), (e.memoizedState = n));
}
function yg(e, t) {
  var n = W;
  (W = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Al.transition;
  Al.transition = {};
  try {
    e(!1), t();
  } finally {
    (W = n), (Al.transition = r);
  }
}
function yp() {
  return rt().memoizedState;
}
function Sg(e, t, n) {
  var r = qt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Sp(e))
  )
    wp(t, n);
  else if (((n = Xd(e, t, n, r)), n !== null)) {
    var o = Ie();
    ut(n, e, r, o), Cp(n, t, r);
  }
}
function wg(e, t, n) {
  var r = qt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Sp(e)) wp(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), ft(a, l))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), Va(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Xd(e, t, o, r)),
      n !== null && ((o = Ie()), ut(n, e, r, o), Cp(n, t, r));
  }
}
function Sp(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function wp(e, t) {
  Rr = yi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Cp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Oa(e, n);
  }
}
var Si = {
    readContext: nt,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useInsertionEffect: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useMutableSource: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    unstable_isNewReconciler: !1,
  },
  Cg = {
    readContext: nt,
    useCallback: function (e, t) {
      return (pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: nt,
    useEffect: xc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Bo(4194308, 4, pp.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Bo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Bo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = pt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = pt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Sg.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Cc,
    useDebugValue: Ga,
    useDeferredValue: function (e) {
      return (pt().memoizedState = e);
    },
    useTransition: function () {
      var e = Cc(!1),
        t = e[0];
      return (e = yg.bind(null, e[1])), (pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        o = pt();
      if (J) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), ve === null)) throw Error(T(349));
        mn & 30 || ip(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        xc(sp.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Qr(9, lp.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = pt(),
        t = ve.identifierPrefix;
      if (J) {
        var n = Pt,
          r = Ot;
        (n = (r & ~(1 << (32 - at(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Hr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = gg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  xg = {
    readContext: nt,
    useCallback: mp,
    useContext: nt,
    useEffect: Ka,
    useImperativeHandle: hp,
    useInsertionEffect: fp,
    useLayoutEffect: dp,
    useMemo: vp,
    useReducer: jl,
    useRef: cp,
    useState: function () {
      return jl(Wr);
    },
    useDebugValue: Ga,
    useDeferredValue: function (e) {
      var t = rt();
      return gp(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = jl(Wr)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: rp,
    useSyncExternalStore: op,
    useId: yp,
    unstable_isNewReconciler: !1,
  },
  Eg = {
    readContext: nt,
    useCallback: mp,
    useContext: nt,
    useEffect: Ka,
    useImperativeHandle: hp,
    useInsertionEffect: fp,
    useLayoutEffect: dp,
    useMemo: vp,
    useReducer: Vl,
    useRef: cp,
    useState: function () {
      return Vl(Wr);
    },
    useDebugValue: Ga,
    useDeferredValue: function (e) {
      var t = rt();
      return de === null ? (t.memoizedState = e) : gp(t, de.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Wr)[0],
        t = rt().memoizedState;
      return [e, t];
    },
    useMutableSource: rp,
    useSyncExternalStore: op,
    useId: yp,
    unstable_isNewReconciler: !1,
  };
function Yn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += qm(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function zl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function As(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var kg = typeof WeakMap == "function" ? WeakMap : Map;
function xp(e, t, n) {
  (n = Rt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ci || ((Ci = !0), (Ks = r)), As(e, t);
    }),
    n
  );
}
function Ep(e, t, n) {
  (n = Rt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        As(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        As(e, t),
          typeof r != "function" &&
            (Xt === null ? (Xt = new Set([this])) : Xt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Ec(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new kg();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = jg.bind(null, e, t, n)), t.then(e, e));
}
function kc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Oc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Rt(-1, 1)), (t.tag = 2), Yt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Og = _t.ReactCurrentOwner,
  Fe = !1;
function Le(e, t, n, r) {
  t.child = e === null ? tp(t, null, n, r) : Kn(t, e.child, n, r);
}
function Pc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    $n(t, o),
    (r = Wa(e, t, n, r, i, o)),
    (n = Qa()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Mt(e, t, o))
      : (J && n && Ma(t), (t.flags |= 1), Le(e, t, r, o), t.child)
  );
}
function Rc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !nu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), kp(e, t, i, r, o))
      : ((e = Ko(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : jr), n(l, r) && e.ref === t.ref)
    )
      return Mt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Jt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function kp(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (jr(i, r) && e.ref === t.ref)
      if (((Fe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Fe = !0);
      else return (t.lanes = e.lanes), Mt(e, t, o);
  }
  return js(e, t, n, r, o);
}
function Op(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Y(Dn, $e),
        ($e |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Y(Dn, $e),
          ($e |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Y(Dn, $e),
        ($e |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Y(Dn, $e),
      ($e |= r);
  return Le(e, t, o, n), t.child;
}
function Pp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function js(e, t, n, r, o) {
  var i = Ae(n) ? pn : Re.current;
  return (
    (i = Wn(t, i)),
    $n(t, o),
    (n = Wa(e, t, n, r, i, o)),
    (r = Qa()),
    e !== null && !Fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Mt(e, t, o))
      : (J && r && Ma(t), (t.flags |= 1), Le(e, t, n, o), t.child)
  );
}
function Tc(e, t, n, r, o) {
  if (Ae(n)) {
    var i = !0;
    fi(t);
  } else i = !1;
  if (($n(t, o), t.stateNode === null))
    Ho(e, t), Zd(t, n, r), Ds(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = nt(u))
      : ((u = Ae(n) ? pn : Re.current), (u = Wn(t, u)));
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && Sc(t, l, r, u)),
      (Vt = !1);
    var h = t.memoizedState;
    (l.state = h),
      vi(t, r, l, o),
      (s = t.memoizedState),
      a !== r || h !== s || De.current || Vt
        ? (typeof f == "function" && (Fs(t, n, f, r), (s = t.memoizedState)),
          (a = Vt || yc(t, n, a, r, h, s, u))
            ? (c ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = u),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      qd(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : it(t.type, a)),
      (l.props = u),
      (c = t.pendingProps),
      (h = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = nt(s))
        : ((s = Ae(n) ? pn : Re.current), (s = Wn(t, s)));
    var y = n.getDerivedStateFromProps;
    (f =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== c || h !== s) && Sc(t, l, r, s)),
      (Vt = !1),
      (h = t.memoizedState),
      (l.state = h),
      vi(t, r, l, o);
    var m = t.memoizedState;
    a !== c || h !== m || De.current || Vt
      ? (typeof y == "function" && (Fs(t, n, y, r), (m = t.memoizedState)),
        (u = Vt || yc(t, n, u, r, h, m, s) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, m, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, m, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (l.props = r),
        (l.state = m),
        (l.context = s),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Vs(e, t, n, r, i, o);
}
function Vs(e, t, n, r, o, i) {
  Pp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && pc(t, n, !1), Mt(e, t, i);
  (r = t.stateNode), (Og.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Kn(t, e.child, null, i)), (t.child = Kn(t, null, a, i)))
      : Le(e, t, a, i),
    (t.memoizedState = r.state),
    o && pc(t, n, !0),
    t.child
  );
}
function Rp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? dc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && dc(e, t.context, !1),
    $a(e, t.containerInfo);
}
function Lc(e, t, n, r, o) {
  return Qn(), Fa(o), (t.flags |= 256), Le(e, t, n, r), t.child;
}
var zs = { dehydrated: null, treeContext: null, retryLane: 0 };
function $s(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Tp(e, t, n) {
  var r = t.pendingProps,
    o = ee.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    Y(ee, o & 1),
    e === null)
  )
    return (
      Ms(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Ki(l, r, 0, null)),
              (e = dn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = $s(n)),
              (t.memoizedState = zs),
              e)
            : Ya(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Pg(e, t, l, r, a, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Jt(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = Jt(a, i)) : ((i = dn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? $s(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = zs),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Jt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ya(e, t) {
  return (
    (t = Ki({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ro(e, t, n, r) {
  return (
    r !== null && Fa(r),
    Kn(t, e.child, null, n),
    (e = Ya(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Pg(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = zl(Error(T(422)))), Ro(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ki({ mode: "visible", children: r.children }, o, 0, null)),
        (i = dn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Kn(t, e.child, null, l),
        (t.child.memoizedState = $s(l)),
        (t.memoizedState = zs),
        i);
  if (!(t.mode & 1)) return Ro(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(T(419))), (r = zl(i, r, void 0)), Ro(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), Fe || a)) {
    if (((r = ve), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Nt(e, o), ut(r, e, o, -1));
    }
    return tu(), (r = zl(Error(T(421)))), Ro(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Vg.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ue = Gt(o.nextSibling)),
      (Be = t),
      (J = !0),
      (st = null),
      e !== null &&
        ((qe[Je++] = Ot),
        (qe[Je++] = Pt),
        (qe[Je++] = hn),
        (Ot = e.id),
        (Pt = e.overflow),
        (hn = t)),
      (t = Ya(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ic(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _s(e.return, t, n);
}
function $l(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function Lp(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Le(e, t, r.children, n), (r = ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ic(e, n, t);
        else if (e.tag === 19) Ic(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Y(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && gi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          $l(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && gi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        $l(t, !0, n, null, i);
        break;
      case "together":
        $l(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ho(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (vn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Jt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Jt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Rg(e, t, n) {
  switch (t.tag) {
    case 3:
      Rp(t), Qn();
      break;
    case 5:
      np(t);
      break;
    case 1:
      Ae(t.type) && fi(t);
      break;
    case 4:
      $a(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Y(hi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Y(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Tp(e, t, n)
          : (Y(ee, ee.current & 1),
            (e = Mt(e, t, n)),
            e !== null ? e.sibling : null);
      Y(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Lp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        Y(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Op(e, t, n);
  }
  return Mt(e, t, n);
}
var Ip, Us, bp, Np;
Ip = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Us = function () {};
bp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), cn(St.current);
    var i = null;
    switch (n) {
      case "input":
        (o = cs(e, o)), (r = cs(e, r)), (i = []);
        break;
      case "select":
        (o = ne({}, o, { value: void 0 })),
          (r = ne({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ps(e, o)), (r = ps(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ui);
    }
    ms(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (br.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (br.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && X("scroll", e),
                  i || a === s || (i = []))
                : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Np = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function fr(e, t) {
  if (!J)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ke(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Tg(e, t, n) {
  var r = t.pendingProps;
  switch ((_a(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ke(t), null;
    case 1:
      return Ae(t.type) && ci(), ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Gn(),
        q(De),
        q(Re),
        Ba(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Oo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), st !== null && (Xs(st), (st = null)))),
        Us(e, t),
        ke(t),
        null
      );
    case 5:
      Ua(t);
      var o = cn(Br.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        bp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return ke(t), null;
        }
        if (((e = cn(St.current)), Oo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[vt] = t), (r[$r] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Sr.length; o++) X(Sr[o], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X("error", r), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              Vu(r, i), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                X("invalid", r);
              break;
            case "textarea":
              $u(r, i), X("invalid", r);
          }
          ms(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ko(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ko(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : br.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  X("scroll", r);
            }
          switch (n) {
            case "input":
              vo(r), zu(r, i, !0);
              break;
            case "textarea":
              vo(r), Uu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ui);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = id(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[vt] = t),
            (e[$r] = r),
            Ip(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = vs(n, r)), n)) {
              case "dialog":
                X("cancel", e), X("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Sr.length; o++) X(Sr[o], e);
                o = r;
                break;
              case "source":
                X("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", e), X("load", e), (o = r);
                break;
              case "details":
                X("toggle", e), (o = r);
                break;
              case "input":
                Vu(e, r), (o = cs(e, r)), X("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ne({}, r, { value: void 0 })),
                  X("invalid", e);
                break;
              case "textarea":
                $u(e, r), (o = ps(e, r)), X("invalid", e);
                break;
              default:
                o = r;
            }
            ms(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? ad(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ld(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Nr(e, s)
                    : typeof s == "number" && Nr(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (br.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && X("scroll", e)
                      : s != null && Sa(e, i, s, l));
              }
            switch (n) {
              case "input":
                vo(e), zu(e, r, !1);
                break;
              case "textarea":
                vo(e), Uu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + en(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? An(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      An(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ui);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ke(t), null;
    case 6:
      if (e && t.stateNode != null) Np(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = cn(Br.current)), cn(St.current), Oo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[vt] = t),
            (i = r.nodeValue !== n) && ((e = Be), e !== null))
          )
            switch (e.tag) {
              case 3:
                ko(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ko(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[vt] = t),
            (t.stateNode = r);
      }
      return ke(t), null;
    case 13:
      if (
        (q(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && Ue !== null && t.mode & 1 && !(t.flags & 128))
          Yd(), Qn(), (t.flags |= 98560), (i = !1);
        else if (((i = Oo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(T(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(T(317));
            i[vt] = t;
          } else
            Qn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ke(t), (i = !1);
        } else st !== null && (Xs(st), (st = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? pe === 0 && (pe = 3) : tu())),
          t.updateQueue !== null && (t.flags |= 4),
          ke(t),
          null);
    case 4:
      return (
        Gn(), Us(e, t), e === null && Vr(t.stateNode.containerInfo), ke(t), null
      );
    case 10:
      return ja(t.type._context), ke(t), null;
    case 17:
      return Ae(t.type) && ci(), ke(t), null;
    case 19:
      if ((q(ee), (i = t.memoizedState), i === null)) return ke(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) fr(i, !1);
        else {
          if (pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = gi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    fr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Y(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            le() > Xn &&
            ((t.flags |= 128), (r = !0), fr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              fr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !J)
            )
              return ke(t), null;
          } else
            2 * le() - i.renderingStartTime > Xn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), fr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = le()),
          (t.sibling = null),
          (n = ee.current),
          Y(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (ke(t), null);
    case 22:
    case 23:
      return (
        eu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? $e & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function Lg(e, t) {
  switch ((_a(t), t.tag)) {
    case 1:
      return (
        Ae(t.type) && ci(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Gn(),
        q(De),
        q(Re),
        Ba(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ua(t), null;
    case 13:
      if ((q(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340));
        Qn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(ee), null;
    case 4:
      return Gn(), null;
    case 10:
      return ja(t.type._context), null;
    case 22:
    case 23:
      return eu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var To = !1,
  Pe = !1,
  Ig = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function Fn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        oe(e, t, r);
      }
    else n.current = null;
}
function Bs(e, t, n) {
  try {
    n();
  } catch (r) {
    oe(e, t, r);
  }
}
var bc = !1;
function bg(e, t) {
  if (((Ps = li), (e = Dd()), Na(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            f = 0,
            c = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              c !== n || (o !== 0 && c.nodeType !== 3) || (a = l + o),
                c !== i || (r !== 0 && c.nodeType !== 3) || (s = l + r),
                c.nodeType === 3 && (l += c.nodeValue.length),
                (y = c.firstChild) !== null;

            )
              (h = c), (c = y);
            for (;;) {
              if (c === e) break t;
              if (
                (h === n && ++u === o && (a = l),
                h === i && ++f === r && (s = l),
                (y = c.nextSibling) !== null)
              )
                break;
              (c = h), (h = c.parentNode);
            }
            c = y;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Rs = { focusedElem: e, selectionRange: n }, li = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var v = m.memoizedProps,
                    S = m.memoizedState,
                    d = t.stateNode,
                    p = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : it(t.type, v),
                      S
                    );
                  d.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (C) {
          oe(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (m = bc), (bc = !1), m;
}
function Tr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Bs(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Wi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Hs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Mp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Mp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[vt], delete t[$r], delete t[Is], delete t[pg], delete t[hg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function _p(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Nc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _p(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ws(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ui));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ws(e, t, n), e = e.sibling; e !== null; ) Ws(e, t, n), (e = e.sibling);
}
function Qs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qs(e, t, n), e = e.sibling; e !== null; ) Qs(e, t, n), (e = e.sibling);
}
var Se = null,
  lt = !1;
function Dt(e, t, n) {
  for (n = n.child; n !== null; ) Fp(e, t, n), (n = n.sibling);
}
function Fp(e, t, n) {
  if (yt && typeof yt.onCommitFiberUnmount == "function")
    try {
      yt.onCommitFiberUnmount(Ai, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Pe || Fn(n, t);
    case 6:
      var r = Se,
        o = lt;
      (Se = null),
        Dt(e, t, n),
        (Se = r),
        (lt = o),
        Se !== null &&
          (lt
            ? ((e = Se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null &&
        (lt
          ? ((e = Se),
            (n = n.stateNode),
            e.nodeType === 8
              ? _l(e.parentNode, n)
              : e.nodeType === 1 && _l(e, n),
            Dr(e))
          : _l(Se, n.stateNode));
      break;
    case 4:
      (r = Se),
        (o = lt),
        (Se = n.stateNode.containerInfo),
        (lt = !0),
        Dt(e, t, n),
        (Se = r),
        (lt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Bs(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      Dt(e, t, n);
      break;
    case 1:
      if (
        !Pe &&
        (Fn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          oe(n, t, a);
        }
      Dt(e, t, n);
      break;
    case 21:
      Dt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Pe = (r = Pe) || n.memoizedState !== null), Dt(e, t, n), (Pe = r))
        : Dt(e, t, n);
      break;
    default:
      Dt(e, t, n);
  }
}
function Mc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ig()),
      t.forEach(function (r) {
        var o = zg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ot(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Se = a.stateNode), (lt = !1);
              break e;
            case 3:
              (Se = a.stateNode.containerInfo), (lt = !0);
              break e;
            case 4:
              (Se = a.stateNode.containerInfo), (lt = !0);
              break e;
          }
          a = a.return;
        }
        if (Se === null) throw Error(T(160));
        Fp(i, l, o), (Se = null), (lt = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        oe(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Dp(t, e), (t = t.sibling);
}
function Dp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), dt(e), r & 4)) {
        try {
          Tr(3, e, e.return), Wi(3, e);
        } catch (v) {
          oe(e, e.return, v);
        }
        try {
          Tr(5, e, e.return);
        } catch (v) {
          oe(e, e.return, v);
        }
      }
      break;
    case 1:
      ot(t, e), dt(e), r & 512 && n !== null && Fn(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        dt(e),
        r & 512 && n !== null && Fn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Nr(o, "");
        } catch (v) {
          oe(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && rd(o, i),
              vs(a, l);
            var u = vs(a, i);
            for (l = 0; l < s.length; l += 2) {
              var f = s[l],
                c = s[l + 1];
              f === "style"
                ? ad(o, c)
                : f === "dangerouslySetInnerHTML"
                ? ld(o, c)
                : f === "children"
                ? Nr(o, c)
                : Sa(o, f, c, u);
            }
            switch (a) {
              case "input":
                fs(o, i);
                break;
              case "textarea":
                od(o, i);
                break;
              case "select":
                var h = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? An(o, !!i.multiple, y, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? An(o, !!i.multiple, i.defaultValue, !0)
                      : An(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[$r] = i;
          } catch (v) {
            oe(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((ot(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          oe(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Dr(t.containerInfo);
        } catch (v) {
          oe(e, e.return, v);
        }
      break;
    case 4:
      ot(t, e), dt(e);
      break;
    case 13:
      ot(t, e),
        dt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ja = le())),
        r & 4 && Mc(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Pe = (u = Pe) || f), ot(t, e), (Pe = u)) : ot(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (I = e, f = e.child; f !== null; ) {
            for (c = I = f; I !== null; ) {
              switch (((h = I), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tr(4, h, h.return);
                  break;
                case 1:
                  Fn(h, h.return);
                  var m = h.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (v) {
                      oe(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Fn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Fc(c);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (I = y)) : Fc(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (o = c.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = c.stateNode),
                      (s = c.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = sd("display", l)));
              } catch (v) {
                oe(e, e.return, v);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (v) {
                oe(e, e.return, v);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), (c = c.return);
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      ot(t, e), dt(e), r & 4 && Mc(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_p(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Nr(o, ""), (r.flags &= -33));
          var i = Nc(e);
          Qs(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = Nc(e);
          Ws(e, a, l);
          break;
        default:
          throw Error(T(161));
      }
    } catch (s) {
      oe(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ng(e, t, n) {
  (I = e), Ap(e);
}
function Ap(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var o = I,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || To;
      if (!l) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || Pe;
        a = To;
        var u = Pe;
        if (((To = l), (Pe = s) && !u))
          for (I = o; I !== null; )
            (l = I),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Dc(o)
                : s !== null
                ? ((s.return = l), (I = s))
                : Dc(o);
        for (; i !== null; ) (I = i), Ap(i), (i = i.sibling);
        (I = o), (To = a), (Pe = u);
      }
      _c(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (I = i)) : _c(e);
  }
}
function _c(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Pe || Wi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Pe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : it(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && gc(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                gc(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && Dr(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        Pe || (t.flags & 512 && Hs(t));
      } catch (h) {
        oe(t, t.return, h);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Fc(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Dc(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Wi(4, t);
          } catch (s) {
            oe(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              oe(t, o, s);
            }
          }
          var i = t.return;
          try {
            Hs(t);
          } catch (s) {
            oe(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Hs(t);
          } catch (s) {
            oe(t, l, s);
          }
      }
    } catch (s) {
      oe(t, t.return, s);
    }
    if (t === e) {
      I = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (I = a);
      break;
    }
    I = t.return;
  }
}
var Mg = Math.ceil,
  wi = _t.ReactCurrentDispatcher,
  Xa = _t.ReactCurrentOwner,
  et = _t.ReactCurrentBatchConfig,
  $ = 0,
  ve = null,
  ue = null,
  Ce = 0,
  $e = 0,
  Dn = rn(0),
  pe = 0,
  Kr = null,
  vn = 0,
  Qi = 0,
  qa = 0,
  Lr = null,
  _e = null,
  Ja = 0,
  Xn = 1 / 0,
  Et = null,
  Ci = !1,
  Ks = null,
  Xt = null,
  Lo = !1,
  Bt = null,
  xi = 0,
  Ir = 0,
  Gs = null,
  Wo = -1,
  Qo = 0;
function Ie() {
  return $ & 6 ? le() : Wo !== -1 ? Wo : (Wo = le());
}
function qt(e) {
  return e.mode & 1
    ? $ & 2 && Ce !== 0
      ? Ce & -Ce
      : vg.transition !== null
      ? (Qo === 0 && (Qo = wd()), Qo)
      : ((e = W),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Rd(e.type))),
        e)
    : 1;
}
function ut(e, t, n, r) {
  if (50 < Ir) throw ((Ir = 0), (Gs = null), Error(T(185)));
  to(e, n, r),
    (!($ & 2) || e !== ve) &&
      (e === ve && (!($ & 2) && (Qi |= n), pe === 4 && $t(e, Ce)),
      je(e, r),
      n === 1 && $ === 0 && !(t.mode & 1) && ((Xn = le() + 500), Ui && on()));
}
function je(e, t) {
  var n = e.callbackNode;
  vv(e, t);
  var r = ii(e, e === ve ? Ce : 0);
  if (r === 0)
    n !== null && Wu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Wu(n), t === 1))
      e.tag === 0 ? mg(Ac.bind(null, e)) : Qd(Ac.bind(null, e)),
        fg(function () {
          !($ & 6) && on();
        }),
        (n = null);
    else {
      switch (Cd(r)) {
        case 1:
          n = ka;
          break;
        case 4:
          n = yd;
          break;
        case 16:
          n = oi;
          break;
        case 536870912:
          n = Sd;
          break;
        default:
          n = oi;
      }
      n = Wp(n, jp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function jp(e, t) {
  if (((Wo = -1), (Qo = 0), $ & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (Un() && e.callbackNode !== n) return null;
  var r = ii(e, e === ve ? Ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ei(e, r);
  else {
    t = r;
    var o = $;
    $ |= 2;
    var i = zp();
    (ve !== e || Ce !== t) && ((Et = null), (Xn = le() + 500), fn(e, t));
    do
      try {
        Dg();
        break;
      } catch (a) {
        Vp(e, a);
      }
    while (!0);
    Aa(),
      (wi.current = i),
      ($ = o),
      ue !== null ? (t = 0) : ((ve = null), (Ce = 0), (t = pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Cs(e)), o !== 0 && ((r = o), (t = Ys(e, o)))), t === 1)
    )
      throw ((n = Kr), fn(e, 0), $t(e, r), je(e, le()), n);
    if (t === 6) $t(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !_g(o) &&
          ((t = Ei(e, r)),
          t === 2 && ((i = Cs(e)), i !== 0 && ((r = i), (t = Ys(e, i)))),
          t === 1))
      )
        throw ((n = Kr), fn(e, 0), $t(e, r), je(e, le()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          sn(e, _e, Et);
          break;
        case 3:
          if (
            ($t(e, r), (r & 130023424) === r && ((t = Ja + 500 - le()), 10 < t))
          ) {
            if (ii(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ie(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Ls(sn.bind(null, e, _e, Et), t);
            break;
          }
          sn(e, _e, Et);
          break;
        case 4:
          if (($t(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - at(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = le() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Mg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ls(sn.bind(null, e, _e, Et), r);
            break;
          }
          sn(e, _e, Et);
          break;
        case 5:
          sn(e, _e, Et);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return je(e, le()), e.callbackNode === n ? jp.bind(null, e) : null;
}
function Ys(e, t) {
  var n = Lr;
  return (
    e.current.memoizedState.isDehydrated && (fn(e, t).flags |= 256),
    (e = Ei(e, t)),
    e !== 2 && ((t = _e), (_e = n), t !== null && Xs(t)),
    e
  );
}
function Xs(e) {
  _e === null ? (_e = e) : _e.push.apply(_e, e);
}
function _g(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!ft(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function $t(e, t) {
  for (
    t &= ~qa,
      t &= ~Qi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - at(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ac(e) {
  if ($ & 6) throw Error(T(327));
  Un();
  var t = ii(e, 0);
  if (!(t & 1)) return je(e, le()), null;
  var n = Ei(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Cs(e);
    r !== 0 && ((t = r), (n = Ys(e, r)));
  }
  if (n === 1) throw ((n = Kr), fn(e, 0), $t(e, t), je(e, le()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    sn(e, _e, Et),
    je(e, le()),
    null
  );
}
function Za(e, t) {
  var n = $;
  $ |= 1;
  try {
    return e(t);
  } finally {
    ($ = n), $ === 0 && ((Xn = le() + 500), Ui && on());
  }
}
function gn(e) {
  Bt !== null && Bt.tag === 0 && !($ & 6) && Un();
  var t = $;
  $ |= 1;
  var n = et.transition,
    r = W;
  try {
    if (((et.transition = null), (W = 1), e)) return e();
  } finally {
    (W = r), (et.transition = n), ($ = t), !($ & 6) && on();
  }
}
function eu() {
  ($e = Dn.current), q(Dn);
}
function fn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), cg(n)), ue !== null))
    for (n = ue.return; n !== null; ) {
      var r = n;
      switch ((_a(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ci();
          break;
        case 3:
          Gn(), q(De), q(Re), Ba();
          break;
        case 5:
          Ua(r);
          break;
        case 4:
          Gn();
          break;
        case 13:
          q(ee);
          break;
        case 19:
          q(ee);
          break;
        case 10:
          ja(r.type._context);
          break;
        case 22:
        case 23:
          eu();
      }
      n = n.return;
    }
  if (
    ((ve = e),
    (ue = e = Jt(e.current, null)),
    (Ce = $e = t),
    (pe = 0),
    (Kr = null),
    (qa = Qi = vn = 0),
    (_e = Lr = null),
    un !== null)
  ) {
    for (t = 0; t < un.length; t++)
      if (((n = un[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    un = null;
  }
  return e;
}
function Vp(e, t) {
  do {
    var n = ue;
    try {
      if ((Aa(), (Uo.current = Si), yi)) {
        for (var r = te.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        yi = !1;
      }
      if (
        ((mn = 0),
        (me = de = te = null),
        (Rr = !1),
        (Hr = 0),
        (Xa.current = null),
        n === null || n.return === null)
      ) {
        (pe = 1), (Kr = t), (ue = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          a = n,
          s = t;
        if (
          ((t = Ce),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            f = a,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var h = f.alternate;
            h
              ? ((f.updateQueue = h.updateQueue),
                (f.memoizedState = h.memoizedState),
                (f.lanes = h.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var y = kc(l);
          if (y !== null) {
            (y.flags &= -257),
              Oc(y, l, a, i, t),
              y.mode & 1 && Ec(i, u, t),
              (t = y),
              (s = u);
            var m = t.updateQueue;
            if (m === null) {
              var v = new Set();
              v.add(s), (t.updateQueue = v);
            } else m.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ec(i, u, t), tu();
              break e;
            }
            s = Error(T(426));
          }
        } else if (J && a.mode & 1) {
          var S = kc(l);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              Oc(S, l, a, i, t),
              Fa(Yn(s, a));
            break e;
          }
        }
        (i = s = Yn(s, a)),
          pe !== 4 && (pe = 2),
          Lr === null ? (Lr = [i]) : Lr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = xp(i, s, t);
              vc(i, d);
              break e;
            case 1:
              a = s;
              var p = i.type,
                g = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (Xt === null || !Xt.has(g))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var C = Ep(i, a, t);
                vc(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Up(n);
    } catch (x) {
      (t = x), ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function zp() {
  var e = wi.current;
  return (wi.current = Si), e === null ? Si : e;
}
function tu() {
  (pe === 0 || pe === 3 || pe === 2) && (pe = 4),
    ve === null || (!(vn & 268435455) && !(Qi & 268435455)) || $t(ve, Ce);
}
function Ei(e, t) {
  var n = $;
  $ |= 2;
  var r = zp();
  (ve !== e || Ce !== t) && ((Et = null), fn(e, t));
  do
    try {
      Fg();
      break;
    } catch (o) {
      Vp(e, o);
    }
  while (!0);
  if ((Aa(), ($ = n), (wi.current = r), ue !== null)) throw Error(T(261));
  return (ve = null), (Ce = 0), pe;
}
function Fg() {
  for (; ue !== null; ) $p(ue);
}
function Dg() {
  for (; ue !== null && !sv(); ) $p(ue);
}
function $p(e) {
  var t = Hp(e.alternate, e, $e);
  (e.memoizedProps = e.pendingProps),
    t === null ? Up(e) : (ue = t),
    (Xa.current = null);
}
function Up(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Lg(n, t)), n !== null)) {
        (n.flags &= 32767), (ue = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (pe = 6), (ue = null);
        return;
      }
    } else if (((n = Tg(n, t, $e)), n !== null)) {
      ue = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  pe === 0 && (pe = 5);
}
function sn(e, t, n) {
  var r = W,
    o = et.transition;
  try {
    (et.transition = null), (W = 1), Ag(e, t, n, r);
  } finally {
    (et.transition = o), (W = r);
  }
  return null;
}
function Ag(e, t, n, r) {
  do Un();
  while (Bt !== null);
  if ($ & 6) throw Error(T(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (gv(e, i),
    e === ve && ((ue = ve = null), (Ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Lo ||
      ((Lo = !0),
      Wp(oi, function () {
        return Un(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = et.transition), (et.transition = null);
    var l = W;
    W = 1;
    var a = $;
    ($ |= 4),
      (Xa.current = null),
      bg(e, n),
      Dp(n, e),
      rg(Rs),
      (li = !!Ps),
      (Rs = Ps = null),
      (e.current = n),
      Ng(n),
      av(),
      ($ = a),
      (W = l),
      (et.transition = i);
  } else e.current = n;
  if (
    (Lo && ((Lo = !1), (Bt = e), (xi = o)),
    (i = e.pendingLanes),
    i === 0 && (Xt = null),
    fv(n.stateNode),
    je(e, le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Ci) throw ((Ci = !1), (e = Ks), (Ks = null), e);
  return (
    xi & 1 && e.tag !== 0 && Un(),
    (i = e.pendingLanes),
    i & 1 ? (e === Gs ? Ir++ : ((Ir = 0), (Gs = e))) : (Ir = 0),
    on(),
    null
  );
}
function Un() {
  if (Bt !== null) {
    var e = Cd(xi),
      t = et.transition,
      n = W;
    try {
      if (((et.transition = null), (W = 16 > e ? 16 : e), Bt === null))
        var r = !1;
      else {
        if (((e = Bt), (Bt = null), (xi = 0), $ & 6)) throw Error(T(331));
        var o = $;
        for ($ |= 4, I = e.current; I !== null; ) {
          var i = I,
            l = i.child;
          if (I.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (I = u; I !== null; ) {
                  var f = I;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tr(8, f, i);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (I = c);
                  else
                    for (; I !== null; ) {
                      f = I;
                      var h = f.sibling,
                        y = f.return;
                      if ((Mp(f), f === u)) {
                        I = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = y), (I = h);
                        break;
                      }
                      I = y;
                    }
                }
              }
              var m = i.alternate;
              if (m !== null) {
                var v = m.child;
                if (v !== null) {
                  m.child = null;
                  do {
                    var S = v.sibling;
                    (v.sibling = null), (v = S);
                  } while (v !== null);
                }
              }
              I = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (I = l);
          else
            e: for (; I !== null; ) {
              if (((i = I), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tr(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (I = d);
                break e;
              }
              I = i.return;
            }
        }
        var p = e.current;
        for (I = p; I !== null; ) {
          l = I;
          var g = l.child;
          if (l.subtreeFlags & 2064 && g !== null) (g.return = l), (I = g);
          else
            e: for (l = p; I !== null; ) {
              if (((a = I), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wi(9, a);
                  }
                } catch (x) {
                  oe(a, a.return, x);
                }
              if (a === l) {
                I = null;
                break e;
              }
              var C = a.sibling;
              if (C !== null) {
                (C.return = a.return), (I = C);
                break e;
              }
              I = a.return;
            }
        }
        if (
          (($ = o), on(), yt && typeof yt.onPostCommitFiberRoot == "function")
        )
          try {
            yt.onPostCommitFiberRoot(Ai, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (W = n), (et.transition = t);
    }
  }
  return !1;
}
function jc(e, t, n) {
  (t = Yn(n, t)),
    (t = xp(e, t, 1)),
    (e = Yt(e, t, 1)),
    (t = Ie()),
    e !== null && (to(e, 1, t), je(e, t));
}
function oe(e, t, n) {
  if (e.tag === 3) jc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        jc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Xt === null || !Xt.has(r)))
        ) {
          (e = Yn(n, e)),
            (e = Ep(t, e, 1)),
            (t = Yt(t, e, 1)),
            (e = Ie()),
            t !== null && (to(t, 1, e), je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function jg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ve === e &&
      (Ce & n) === n &&
      (pe === 4 || (pe === 3 && (Ce & 130023424) === Ce && 500 > le() - Ja)
        ? fn(e, 0)
        : (qa |= n)),
    je(e, t);
}
function Bp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = So), (So <<= 1), !(So & 130023424) && (So = 4194304))
      : (t = 1));
  var n = Ie();
  (e = Nt(e, t)), e !== null && (to(e, t, n), je(e, n));
}
function Vg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Bp(e, n);
}
function zg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Bp(e, n);
}
var Hp;
Hp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || De.current) Fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Fe = !1), Rg(e, t, n);
      Fe = !!(e.flags & 131072);
    }
  else (Fe = !1), J && t.flags & 1048576 && Kd(t, pi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ho(e, t), (e = t.pendingProps);
      var o = Wn(t, Re.current);
      $n(t, n), (o = Wa(null, t, r, e, o, n));
      var i = Qa();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ae(r) ? ((i = !0), fi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            za(t),
            (o.updater = Bi),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ds(t, r, e, n),
            (t = Vs(null, t, r, !0, i, n)))
          : ((t.tag = 0), J && i && Ma(t), Le(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ho(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Ug(r)),
          (e = it(r, e)),
          o)
        ) {
          case 0:
            t = js(null, t, r, e, n);
            break e;
          case 1:
            t = Tc(null, t, r, e, n);
            break e;
          case 11:
            t = Pc(null, t, r, e, n);
            break e;
          case 14:
            t = Rc(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        js(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Tc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Rp(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          qd(e, t),
          vi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Yn(Error(T(423)), t)), (t = Lc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Yn(Error(T(424)), t)), (t = Lc(e, t, r, n, o));
            break e;
          } else
            for (
              Ue = Gt(t.stateNode.containerInfo.firstChild),
                Be = t,
                J = !0,
                st = null,
                n = tp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Qn(), r === o)) {
            t = Mt(e, t, n);
            break e;
          }
          Le(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        np(t),
        e === null && Ms(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Ts(r, o) ? (l = null) : i !== null && Ts(r, i) && (t.flags |= 32),
        Pp(e, t),
        Le(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Ms(t), null;
    case 13:
      return Tp(e, t, n);
    case 4:
      return (
        $a(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Kn(t, null, r, n)) : Le(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Pc(e, t, r, o, n)
      );
    case 7:
      return Le(e, t, t.pendingProps, n), t.child;
    case 8:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Le(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          Y(hi, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (ft(i.value, l)) {
            if (i.children === o.children && !De.current) {
              t = Mt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Rt(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (s.next = s)
                          : ((s.next = f.next), (f.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      _s(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(T(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  _s(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Le(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        $n(t, n),
        (o = nt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Le(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = it(r, t.pendingProps)),
        (o = it(r.type, o)),
        Rc(e, t, r, o, n)
      );
    case 15:
      return kp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Ho(e, t),
        (t.tag = 1),
        Ae(r) ? ((e = !0), fi(t)) : (e = !1),
        $n(t, n),
        Zd(t, r, o),
        Ds(t, r, o, n),
        Vs(null, t, r, !0, e, n)
      );
    case 19:
      return Lp(e, t, n);
    case 22:
      return Op(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Wp(e, t) {
  return gd(e, t);
}
function $g(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ze(e, t, n, r) {
  return new $g(e, t, n, r);
}
function nu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ug(e) {
  if (typeof e == "function") return nu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ca)) return 11;
    if (e === xa) return 14;
  }
  return 2;
}
function Jt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ko(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) nu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Pn:
        return dn(n.children, o, i, t);
      case wa:
        (l = 8), (o |= 8);
        break;
      case ls:
        return (
          (e = Ze(12, n, t, o | 2)), (e.elementType = ls), (e.lanes = i), e
        );
      case ss:
        return (e = Ze(13, n, t, o)), (e.elementType = ss), (e.lanes = i), e;
      case as:
        return (e = Ze(19, n, t, o)), (e.elementType = as), (e.lanes = i), e;
      case ed:
        return Ki(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Jf:
              l = 10;
              break e;
            case Zf:
              l = 9;
              break e;
            case Ca:
              l = 11;
              break e;
            case xa:
              l = 14;
              break e;
            case jt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ze(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function dn(e, t, n, r) {
  return (e = Ze(7, e, r, t)), (e.lanes = n), e;
}
function Ki(e, t, n, r) {
  return (
    (e = Ze(22, e, r, t)),
    (e.elementType = ed),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ul(e, t, n) {
  return (e = Ze(6, e, null, t)), (e.lanes = n), e;
}
function Bl(e, t, n) {
  return (
    (t = Ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Bg(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = El(0)),
    (this.expirationTimes = El(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = El(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ru(e, t, n, r, o, i, l, a, s) {
  return (
    (e = new Bg(e, t, n, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ze(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    za(i),
    e
  );
}
function Hg(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: On,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qp(e) {
  if (!e) return tn;
  e = e._reactInternals;
  e: {
    if (wn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n)) return Wd(e, n, t);
  }
  return t;
}
function Kp(e, t, n, r, o, i, l, a, s) {
  return (
    (e = ru(n, r, !0, e, o, i, l, a, s)),
    (e.context = Qp(null)),
    (n = e.current),
    (r = Ie()),
    (o = qt(n)),
    (i = Rt(r, o)),
    (i.callback = t ?? null),
    Yt(n, i, o),
    (e.current.lanes = o),
    to(e, o, r),
    je(e, r),
    e
  );
}
function Gi(e, t, n, r) {
  var o = t.current,
    i = Ie(),
    l = qt(o);
  return (
    (n = Qp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Rt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Yt(o, t, l)),
    e !== null && (ut(e, o, l, i), $o(e, o, l)),
    l
  );
}
function ki(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Vc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ou(e, t) {
  Vc(e, t), (e = e.alternate) && Vc(e, t);
}
function Wg() {
  return null;
}
var Gp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function iu(e) {
  this._internalRoot = e;
}
Yi.prototype.render = iu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Gi(e, t, null, null);
};
Yi.prototype.unmount = iu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function () {
      Gi(null, e, null, null);
    }),
      (t[bt] = null);
  }
};
function Yi(e) {
  this._internalRoot = e;
}
Yi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = kd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++);
    zt.splice(n, 0, e), n === 0 && Pd(e);
  }
};
function lu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Xi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function zc() {}
function Qg(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = ki(l);
        i.call(u);
      };
    }
    var l = Kp(t, r, e, 0, null, !1, !1, "", zc);
    return (
      (e._reactRootContainer = l),
      (e[bt] = l.current),
      Vr(e.nodeType === 8 ? e.parentNode : e),
      gn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ki(s);
      a.call(u);
    };
  }
  var s = ru(e, 0, !1, null, null, !1, !1, "", zc);
  return (
    (e._reactRootContainer = s),
    (e[bt] = s.current),
    Vr(e.nodeType === 8 ? e.parentNode : e),
    gn(function () {
      Gi(t, s, n, r);
    }),
    s
  );
}
function qi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var s = ki(l);
        a.call(s);
      };
    }
    Gi(t, l, e, o);
  } else l = Qg(n, t, e, o, r);
  return ki(l);
}
xd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = yr(t.pendingLanes);
        n !== 0 &&
          (Oa(t, n | 1), je(t, le()), !($ & 6) && ((Xn = le() + 500), on()));
      }
      break;
    case 13:
      gn(function () {
        var r = Nt(e, 1);
        if (r !== null) {
          var o = Ie();
          ut(r, e, 1, o);
        }
      }),
        ou(e, 1);
  }
};
Pa = function (e) {
  if (e.tag === 13) {
    var t = Nt(e, 134217728);
    if (t !== null) {
      var n = Ie();
      ut(t, e, 134217728, n);
    }
    ou(e, 134217728);
  }
};
Ed = function (e) {
  if (e.tag === 13) {
    var t = qt(e),
      n = Nt(e, t);
    if (n !== null) {
      var r = Ie();
      ut(n, e, t, r);
    }
    ou(e, t);
  }
};
kd = function () {
  return W;
};
Od = function (e, t) {
  var n = W;
  try {
    return (W = e), t();
  } finally {
    W = n;
  }
};
ys = function (e, t, n) {
  switch (t) {
    case "input":
      if ((fs(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = $i(r);
            if (!o) throw Error(T(90));
            nd(r), fs(r, o);
          }
        }
      }
      break;
    case "textarea":
      od(e, n);
      break;
    case "select":
      (t = n.value), t != null && An(e, !!n.multiple, t, !1);
  }
};
fd = Za;
dd = gn;
var Kg = { usingClientEntryPoint: !1, Events: [ro, In, $i, ud, cd, Za] },
  dr = {
    findFiberByHostInstance: an,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Gg = {
    bundleType: dr.bundleType,
    version: dr.version,
    rendererPackageName: dr.rendererPackageName,
    rendererConfig: dr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: _t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = md(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: dr.findFiberByHostInstance || Wg,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Io = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Io.isDisabled && Io.supportsFiber)
    try {
      (Ai = Io.inject(Gg)), (yt = Io);
    } catch {}
}
Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kg;
Qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!lu(t)) throw Error(T(200));
  return Hg(e, t, null, n);
};
Qe.createRoot = function (e, t) {
  if (!lu(e)) throw Error(T(299));
  var n = !1,
    r = "",
    o = Gp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ru(e, 1, !1, null, null, n, !1, r, o)),
    (e[bt] = t.current),
    Vr(e.nodeType === 8 ? e.parentNode : e),
    new iu(t)
  );
};
Qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = md(t)), (e = e === null ? null : e.stateNode), e;
};
Qe.flushSync = function (e) {
  return gn(e);
};
Qe.hydrate = function (e, t, n) {
  if (!Xi(t)) throw Error(T(200));
  return qi(null, e, t, !0, n);
};
Qe.hydrateRoot = function (e, t, n) {
  if (!lu(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = Gp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Kp(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[bt] = t.current),
    Vr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Yi(t);
};
Qe.render = function (e, t, n) {
  if (!Xi(t)) throw Error(T(200));
  return qi(null, e, t, !1, n);
};
Qe.unmountComponentAtNode = function (e) {
  if (!Xi(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (gn(function () {
        qi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[bt] = null);
        });
      }),
      !0)
    : !1;
};
Qe.unstable_batchedUpdates = Za;
Qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Xi(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return qi(e, t, n, !1, r);
};
Qe.version = "18.2.0-next-9e3b772b8-20220608";
function Yp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yp);
    } catch (e) {
      console.error(e);
    }
}
Yp(), (Kf.exports = Qe);
var Xp = Kf.exports,
  $c = Xp;
(os.createRoot = $c.createRoot), (os.hydrateRoot = $c.hydrateRoot);
function qp(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Yg } = Object.prototype,
  { getPrototypeOf: su } = Object,
  Ji = ((e) => (t) => {
    const n = Yg.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  Ct = (e) => ((e = e.toLowerCase()), (t) => Ji(t) === e),
  Zi = (e) => (t) => typeof t === e,
  { isArray: nr } = Array,
  Gr = Zi("undefined");
function Xg(e) {
  return (
    e !== null &&
    !Gr(e) &&
    e.constructor !== null &&
    !Gr(e.constructor) &&
    tt(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Jp = Ct("ArrayBuffer");
function qg(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Jp(e.buffer)),
    t
  );
}
const Jg = Zi("string"),
  tt = Zi("function"),
  Zp = Zi("number"),
  el = (e) => e !== null && typeof e == "object",
  Zg = (e) => e === !0 || e === !1,
  Go = (e) => {
    if (Ji(e) !== "object") return !1;
    const t = su(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  e0 = Ct("Date"),
  t0 = Ct("File"),
  n0 = Ct("Blob"),
  r0 = Ct("FileList"),
  o0 = (e) => el(e) && tt(e.pipe),
  i0 = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (tt(e.append) &&
          ((t = Ji(e)) === "formdata" ||
            (t === "object" &&
              tt(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  l0 = Ct("URLSearchParams"),
  s0 = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function io(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, o;
  if ((typeof e != "object" && (e = [e]), nr(e)))
    for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      l = i.length;
    let a;
    for (r = 0; r < l; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function eh(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    o;
  for (; r-- > 0; ) if (((o = n[r]), t === o.toLowerCase())) return o;
  return null;
}
const th =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  nh = (e) => !Gr(e) && e !== th;
function qs() {
  const { caseless: e } = (nh(this) && this) || {},
    t = {},
    n = (r, o) => {
      const i = (e && eh(t, o)) || o;
      Go(t[i]) && Go(r)
        ? (t[i] = qs(t[i], r))
        : Go(r)
        ? (t[i] = qs({}, r))
        : nr(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && io(arguments[r], n);
  return t;
}
const a0 = (e, t, n, { allOwnKeys: r } = {}) => (
    io(
      t,
      (o, i) => {
        n && tt(o) ? (e[i] = qp(o, n)) : (e[i] = o);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  u0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  c0 = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  f0 = (e, t, n, r) => {
    let o, i, l;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
        (l = o[i]), (!r || r(l, e, t)) && !a[l] && ((t[l] = e[l]), (a[l] = !0));
      e = n !== !1 && su(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  d0 = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  p0 = (e) => {
    if (!e) return null;
    if (nr(e)) return e;
    let t = e.length;
    if (!Zp(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  h0 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && su(Uint8Array)),
  m0 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
      const i = o.value;
      t.call(e, i[0], i[1]);
    }
  },
  v0 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  g0 = Ct("HTMLFormElement"),
  y0 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, o) {
      return r.toUpperCase() + o;
    }),
  Uc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  S0 = Ct("RegExp"),
  rh = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    io(n, (o, i) => {
      let l;
      (l = t(o, i, e)) !== !1 && (r[i] = l || o);
    }),
      Object.defineProperties(e, r);
  },
  w0 = (e) => {
    rh(e, (t, n) => {
      if (tt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (tt(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  C0 = (e, t) => {
    const n = {},
      r = (o) => {
        o.forEach((i) => {
          n[i] = !0;
        });
      };
    return nr(e) ? r(e) : r(String(e).split(t)), n;
  },
  x0 = () => {},
  E0 = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Hl = "abcdefghijklmnopqrstuvwxyz",
  Bc = "0123456789",
  oh = { DIGIT: Bc, ALPHA: Hl, ALPHA_DIGIT: Hl + Hl.toUpperCase() + Bc },
  k0 = (e = 16, t = oh.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function O0(e) {
  return !!(
    e &&
    tt(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const P0 = (e) => {
    const t = new Array(10),
      n = (r, o) => {
        if (el(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[o] = r;
            const i = nr(r) ? [] : {};
            return (
              io(r, (l, a) => {
                const s = n(l, o + 1);
                !Gr(s) && (i[a] = s);
              }),
              (t[o] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  R0 = Ct("AsyncFunction"),
  T0 = (e) => e && (el(e) || tt(e)) && tt(e.then) && tt(e.catch),
  k = {
    isArray: nr,
    isArrayBuffer: Jp,
    isBuffer: Xg,
    isFormData: i0,
    isArrayBufferView: qg,
    isString: Jg,
    isNumber: Zp,
    isBoolean: Zg,
    isObject: el,
    isPlainObject: Go,
    isUndefined: Gr,
    isDate: e0,
    isFile: t0,
    isBlob: n0,
    isRegExp: S0,
    isFunction: tt,
    isStream: o0,
    isURLSearchParams: l0,
    isTypedArray: h0,
    isFileList: r0,
    forEach: io,
    merge: qs,
    extend: a0,
    trim: s0,
    stripBOM: u0,
    inherits: c0,
    toFlatObject: f0,
    kindOf: Ji,
    kindOfTest: Ct,
    endsWith: d0,
    toArray: p0,
    forEachEntry: m0,
    matchAll: v0,
    isHTMLForm: g0,
    hasOwnProperty: Uc,
    hasOwnProp: Uc,
    reduceDescriptors: rh,
    freezeMethods: w0,
    toObjectSet: C0,
    toCamelCase: y0,
    noop: x0,
    toFiniteNumber: E0,
    findKey: eh,
    global: th,
    isContextDefined: nh,
    ALPHABET: oh,
    generateString: k0,
    isSpecCompliantForm: O0,
    toJSONObject: P0,
    isAsyncFn: R0,
    isThenable: T0,
  };
function z(e, t, n, r, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o);
}
k.inherits(z, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: k.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const ih = z.prototype,
  lh = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  lh[e] = { value: e };
});
Object.defineProperties(z, lh);
Object.defineProperty(ih, "isAxiosError", { value: !0 });
z.from = (e, t, n, r, o, i) => {
  const l = Object.create(ih);
  return (
    k.toFlatObject(
      e,
      l,
      function (s) {
        return s !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    z.call(l, e.message, t, n, r, o),
    (l.cause = e),
    (l.name = e.name),
    i && Object.assign(l, i),
    l
  );
};
const L0 = null;
function Js(e) {
  return k.isPlainObject(e) || k.isArray(e);
}
function sh(e) {
  return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Hc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (o, i) {
          return (o = sh(o)), !n && i ? "[" + o + "]" : o;
        })
        .join(n ? "." : "")
    : t;
}
function I0(e) {
  return k.isArray(e) && !e.some(Js);
}
const b0 = k.toFlatObject(k, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function tl(e, t, n) {
  if (!k.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = k.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, S) {
        return !k.isUndefined(S[v]);
      }
    ));
  const r = n.metaTokens,
    o = n.visitor || f,
    i = n.dots,
    l = n.indexes,
    s = (n.Blob || (typeof Blob < "u" && Blob)) && k.isSpecCompliantForm(t);
  if (!k.isFunction(o)) throw new TypeError("visitor must be a function");
  function u(m) {
    if (m === null) return "";
    if (k.isDate(m)) return m.toISOString();
    if (!s && k.isBlob(m))
      throw new z("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(m) || k.isTypedArray(m)
      ? s && typeof Blob == "function"
        ? new Blob([m])
        : Buffer.from(m)
      : m;
  }
  function f(m, v, S) {
    let d = m;
    if (m && !S && typeof m == "object") {
      if (k.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (m = JSON.stringify(m));
      else if (
        (k.isArray(m) && I0(m)) ||
        ((k.isFileList(m) || k.endsWith(v, "[]")) && (d = k.toArray(m)))
      )
        return (
          (v = sh(v)),
          d.forEach(function (g, C) {
            !(k.isUndefined(g) || g === null) &&
              t.append(
                l === !0 ? Hc([v], C, i) : l === null ? v : v + "[]",
                u(g)
              );
          }),
          !1
        );
    }
    return Js(m) ? !0 : (t.append(Hc(S, v, i), u(m)), !1);
  }
  const c = [],
    h = Object.assign(b0, {
      defaultVisitor: f,
      convertValue: u,
      isVisitable: Js,
    });
  function y(m, v) {
    if (!k.isUndefined(m)) {
      if (c.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      c.push(m),
        k.forEach(m, function (d, p) {
          (!(k.isUndefined(d) || d === null) &&
            o.call(t, d, k.isString(p) ? p.trim() : p, v, h)) === !0 &&
            y(d, v ? v.concat(p) : [p]);
        }),
        c.pop();
    }
  }
  if (!k.isObject(e)) throw new TypeError("data must be an object");
  return y(e), t;
}
function Wc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function au(e, t) {
  (this._pairs = []), e && tl(e, this, t);
}
const ah = au.prototype;
ah.append = function (t, n) {
  this._pairs.push([t, n]);
};
ah.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Wc);
      }
    : Wc;
  return this._pairs
    .map(function (o) {
      return n(o[0]) + "=" + n(o[1]);
    }, "")
    .join("&");
};
function N0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function uh(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || N0,
    o = n && n.serialize;
  let i;
  if (
    (o
      ? (i = o(t, n))
      : (i = k.isURLSearchParams(t) ? t.toString() : new au(t, n).toString(r)),
    i)
  ) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class Qc {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    k.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const ch = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  M0 = typeof URLSearchParams < "u" ? URLSearchParams : au,
  _0 = typeof FormData < "u" ? FormData : null,
  F0 = typeof Blob < "u" ? Blob : null,
  D0 = {
    isBrowser: !0,
    classes: { URLSearchParams: M0, FormData: _0, Blob: F0 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  fh = typeof window < "u" && typeof document < "u",
  A0 = ((e) => fh && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  j0 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  V0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: fh,
        hasStandardBrowserEnv: A0,
        hasStandardBrowserWebWorkerEnv: j0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  gt = { ...V0, ...D0 };
function z0(e, t) {
  return tl(
    e,
    new gt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, o, i) {
          return gt.isNode && k.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function $0(e) {
  return k
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function U0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function dh(e) {
  function t(n, r, o, i) {
    let l = n[i++];
    if (l === "__proto__") return !0;
    const a = Number.isFinite(+l),
      s = i >= n.length;
    return (
      (l = !l && k.isArray(o) ? o.length : l),
      s
        ? (k.hasOwnProp(o, l) ? (o[l] = [o[l], r]) : (o[l] = r), !a)
        : ((!o[l] || !k.isObject(o[l])) && (o[l] = []),
          t(n, r, o[l], i) && k.isArray(o[l]) && (o[l] = U0(o[l])),
          !a)
    );
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const n = {};
    return (
      k.forEachEntry(e, (r, o) => {
        t($0(r), o, n, 0);
      }),
      n
    );
  }
  return null;
}
function B0(e, t, n) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const uu = {
  transitional: ch,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        o = r.indexOf("application/json") > -1,
        i = k.isObject(t);
      if ((i && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t)))
        return o && o ? JSON.stringify(dh(t)) : t;
      if (
        k.isArrayBuffer(t) ||
        k.isBuffer(t) ||
        k.isStream(t) ||
        k.isFile(t) ||
        k.isBlob(t)
      )
        return t;
      if (k.isArrayBufferView(t)) return t.buffer;
      if (k.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return z0(t, this.formSerializer).toString();
        if ((a = k.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const s = this.env && this.env.FormData;
          return tl(
            a ? { "files[]": t } : t,
            s && new s(),
            this.formSerializer
          );
        }
      }
      return i || o ? (n.setContentType("application/json", !1), B0(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || uu.transitional,
        r = n && n.forcedJSONParsing,
        o = this.responseType === "json";
      if (t && k.isString(t) && ((r && !this.responseType) || o)) {
        const l = !(n && n.silentJSONParsing) && o;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (l)
            throw a.name === "SyntaxError"
              ? z.from(a, z.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: gt.classes.FormData, Blob: gt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  uu.headers[e] = {};
});
const cu = uu,
  H0 = k.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  W0 = (e) => {
    const t = {};
    let n, r, o;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (l) {
            (o = l.indexOf(":")),
              (n = l.substring(0, o).trim().toLowerCase()),
              (r = l.substring(o + 1).trim()),
              !(!n || (t[n] && H0[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Kc = Symbol("internals");
function pr(e) {
  return e && String(e).trim().toLowerCase();
}
function Yo(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(Yo) : String(e);
}
function Q0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const K0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Wl(e, t, n, r, o) {
  if (k.isFunction(r)) return r.call(this, t, n);
  if ((o && (t = n), !!k.isString(t))) {
    if (k.isString(r)) return t.indexOf(r) !== -1;
    if (k.isRegExp(r)) return r.test(t);
  }
}
function G0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Y0(e, t) {
  const n = k.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (o, i, l) {
        return this[r].call(this, t, o, i, l);
      },
      configurable: !0,
    });
  });
}
class nl {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(a, s, u) {
      const f = pr(s);
      if (!f) throw new Error("header name must be a non-empty string");
      const c = k.findKey(o, f);
      (!c || o[c] === void 0 || u === !0 || (u === void 0 && o[c] !== !1)) &&
        (o[c || s] = Yo(a));
    }
    const l = (a, s) => k.forEach(a, (u, f) => i(u, f, s));
    return (
      k.isPlainObject(t) || t instanceof this.constructor
        ? l(t, n)
        : k.isString(t) && (t = t.trim()) && !K0(t)
        ? l(W0(t), n)
        : t != null && i(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = pr(t)), t)) {
      const r = k.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n) return o;
        if (n === !0) return Q0(o);
        if (k.isFunction(n)) return n.call(this, o, r);
        if (k.isRegExp(n)) return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = pr(t)), t)) {
      const r = k.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Wl(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(l) {
      if (((l = pr(l)), l)) {
        const a = k.findKey(r, l);
        a && (!n || Wl(r, r[a], a, n)) && (delete r[a], (o = !0));
      }
    }
    return k.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Wl(this, this[i], i, t, !0)) && (delete this[i], (o = !0));
    }
    return o;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      k.forEach(this, (o, i) => {
        const l = k.findKey(r, i);
        if (l) {
          (n[l] = Yo(o)), delete n[i];
          return;
        }
        const a = t ? G0(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = Yo(o)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      k.forEach(this, (r, o) => {
        r != null && r !== !1 && (n[o] = t && k.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Kc] = this[Kc] = { accessors: {} }).accessors,
      o = this.prototype;
    function i(l) {
      const a = pr(l);
      r[a] || (Y0(o, l), (r[a] = !0));
    }
    return k.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
nl.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
k.reduceDescriptors(nl.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
k.freezeMethods(nl);
const Tt = nl;
function Ql(e, t) {
  const n = this || cu,
    r = t || n,
    o = Tt.from(r.headers);
  let i = r.data;
  return (
    k.forEach(e, function (a) {
      i = a.call(n, i, o.normalize(), t ? t.status : void 0);
    }),
    o.normalize(),
    i
  );
}
function ph(e) {
  return !!(e && e.__CANCEL__);
}
function lo(e, t, n) {
  z.call(this, e ?? "canceled", z.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
k.inherits(lo, z, { __CANCEL__: !0 });
function X0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new z(
          "Request failed with status code " + n.status,
          [z.ERR_BAD_REQUEST, z.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const q0 = gt.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, o, i) {
        const l = [e + "=" + encodeURIComponent(t)];
        k.isNumber(n) && l.push("expires=" + new Date(n).toGMTString()),
          k.isString(r) && l.push("path=" + r),
          k.isString(o) && l.push("domain=" + o),
          i === !0 && l.push("secure"),
          (document.cookie = l.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function J0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Z0(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function hh(e, t) {
  return e && !J0(t) ? Z0(e, t) : t;
}
const ey = gt.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function o(i) {
        let l = i;
        return (
          t && (n.setAttribute("href", l), (l = n.href)),
          n.setAttribute("href", l),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = o(window.location.href)),
        function (l) {
          const a = k.isString(l) ? o(l) : l;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function ty(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function ny(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let o = 0,
    i = 0,
    l;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (s) {
      const u = Date.now(),
        f = r[i];
      l || (l = u), (n[o] = s), (r[o] = u);
      let c = i,
        h = 0;
      for (; c !== o; ) (h += n[c++]), (c = c % e);
      if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), u - l < t)) return;
      const y = f && u - f;
      return y ? Math.round((h * 1e3) / y) : void 0;
    }
  );
}
function Gc(e, t) {
  let n = 0;
  const r = ny(50, 250);
  return (o) => {
    const i = o.loaded,
      l = o.lengthComputable ? o.total : void 0,
      a = i - n,
      s = r(a),
      u = i <= l;
    n = i;
    const f = {
      loaded: i,
      total: l,
      progress: l ? i / l : void 0,
      bytes: a,
      rate: s || void 0,
      estimated: s && l && u ? (l - i) / s : void 0,
      event: o,
    };
    (f[t ? "download" : "upload"] = !0), e(f);
  };
}
const ry = typeof XMLHttpRequest < "u",
  oy =
    ry &&
    function (e) {
      return new Promise(function (n, r) {
        let o = e.data;
        const i = Tt.from(e.headers).normalize();
        let { responseType: l, withXSRFToken: a } = e,
          s;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(s),
            e.signal && e.signal.removeEventListener("abort", s);
        }
        let f;
        if (k.isFormData(o)) {
          if (gt.hasStandardBrowserEnv || gt.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((f = i.getContentType()) !== !1) {
            const [v, ...S] = f
              ? f
                  .split(";")
                  .map((d) => d.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([v || "multipart/form-data", ...S].join("; "));
          }
        }
        let c = new XMLHttpRequest();
        if (e.auth) {
          const v = e.auth.username || "",
            S = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(v + ":" + S));
        }
        const h = hh(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), uh(h, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function y() {
          if (!c) return;
          const v = Tt.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            d = {
              data:
                !l || l === "text" || l === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: v,
              config: e,
              request: c,
            };
          X0(
            function (g) {
              n(g), u();
            },
            function (g) {
              r(g), u();
            },
            d
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = y)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(y);
              }),
          (c.onabort = function () {
            c &&
              (r(new z("Request aborted", z.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new z("Network Error", z.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let S = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const d = e.transitional || ch;
            e.timeoutErrorMessage && (S = e.timeoutErrorMessage),
              r(
                new z(
                  S,
                  d.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          gt.hasStandardBrowserEnv &&
            (a && k.isFunction(a) && (a = a(e)), a || (a !== !1 && ey(h))))
        ) {
          const v =
            e.xsrfHeaderName && e.xsrfCookieName && q0.read(e.xsrfCookieName);
          v && i.set(e.xsrfHeaderName, v);
        }
        o === void 0 && i.setContentType(null),
          "setRequestHeader" in c &&
            k.forEach(i.toJSON(), function (S, d) {
              c.setRequestHeader(d, S);
            }),
          k.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          l && l !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", Gc(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", Gc(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((s = (v) => {
              c &&
                (r(!v || v.type ? new lo(null, e, c) : v),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(s),
            e.signal &&
              (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
        const m = ty(h);
        if (m && gt.protocols.indexOf(m) === -1) {
          r(new z("Unsupported protocol " + m + ":", z.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(o || null);
      });
    },
  Zs = { http: L0, xhr: oy };
k.forEach(Zs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Yc = (e) => `- ${e}`,
  iy = (e) => k.isFunction(e) || e === null || e === !1,
  mh = {
    getAdapter: (e) => {
      e = k.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const o = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let l;
        if (
          ((r = n),
          !iy(n) && ((r = Zs[(l = String(n)).toLowerCase()]), r === void 0))
        )
          throw new z(`Unknown adapter '${l}'`);
        if (r) break;
        o[l || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(o).map(
          ([a, s]) =>
            `adapter ${a} ` +
            (s === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let l = t
          ? i.length > 1
            ? `since :
` +
              i.map(Yc).join(`
`)
            : " " + Yc(i[0])
          : "as no adapter specified";
        throw new z(
          "There is no suitable adapter to dispatch the request " + l,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Zs,
  };
function Kl(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new lo(null, e);
}
function Xc(e) {
  return (
    Kl(e),
    (e.headers = Tt.from(e.headers)),
    (e.data = Ql.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    mh
      .getAdapter(e.adapter || cu.adapter)(e)
      .then(
        function (r) {
          return (
            Kl(e),
            (r.data = Ql.call(e, e.transformResponse, r)),
            (r.headers = Tt.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            ph(r) ||
              (Kl(e),
              r &&
                r.response &&
                ((r.response.data = Ql.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Tt.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const qc = (e) => (e instanceof Tt ? e.toJSON() : e);
function qn(e, t) {
  t = t || {};
  const n = {};
  function r(u, f, c) {
    return k.isPlainObject(u) && k.isPlainObject(f)
      ? k.merge.call({ caseless: c }, u, f)
      : k.isPlainObject(f)
      ? k.merge({}, f)
      : k.isArray(f)
      ? f.slice()
      : f;
  }
  function o(u, f, c) {
    if (k.isUndefined(f)) {
      if (!k.isUndefined(u)) return r(void 0, u, c);
    } else return r(u, f, c);
  }
  function i(u, f) {
    if (!k.isUndefined(f)) return r(void 0, f);
  }
  function l(u, f) {
    if (k.isUndefined(f)) {
      if (!k.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, f);
  }
  function a(u, f, c) {
    if (c in t) return r(u, f);
    if (c in e) return r(void 0, u);
  }
  const s = {
    url: i,
    method: i,
    data: i,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    withXSRFToken: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: a,
    headers: (u, f) => o(qc(u), qc(f), !0),
  };
  return (
    k.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const c = s[f] || o,
        h = c(e[f], t[f], f);
      (k.isUndefined(h) && c !== a) || (n[f] = h);
    }),
    n
  );
}
const vh = "1.6.5",
  fu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    fu[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Jc = {};
fu.transitional = function (t, n, r) {
  function o(i, l) {
    return (
      "[Axios v" +
      vh +
      "] Transitional option '" +
      i +
      "'" +
      l +
      (r ? ". " + r : "")
    );
  }
  return (i, l, a) => {
    if (t === !1)
      throw new z(
        o(l, " has been removed" + (n ? " in " + n : "")),
        z.ERR_DEPRECATED
      );
    return (
      n &&
        !Jc[l] &&
        ((Jc[l] = !0),
        console.warn(
          o(
            l,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, l, a) : !0
    );
  };
};
function ly(e, t, n) {
  if (typeof e != "object")
    throw new z("options must be an object", z.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o],
      l = t[i];
    if (l) {
      const a = e[i],
        s = a === void 0 || l(a, i, e);
      if (s !== !0)
        throw new z("option " + i + " must be " + s, z.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new z("Unknown option " + i, z.ERR_BAD_OPTION);
  }
}
const ea = { assertOptions: ly, validators: fu },
  At = ea.validators;
class Oi {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Qc(), response: new Qc() });
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = qn(this.defaults, n));
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 &&
      ea.assertOptions(
        r,
        {
          silentJSONParsing: At.transitional(At.boolean),
          forcedJSONParsing: At.transitional(At.boolean),
          clarifyTimeoutError: At.transitional(At.boolean),
        },
        !1
      ),
      o != null &&
        (k.isFunction(o)
          ? (n.paramsSerializer = { serialize: o })
          : ea.assertOptions(
              o,
              { encode: At.function, serialize: At.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let l = i && k.merge(i.common, i[n.method]);
    i &&
      k.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (m) => {
          delete i[m];
        }
      ),
      (n.headers = Tt.concat(l, i));
    const a = [];
    let s = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((s = s && v.synchronous), a.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let f,
      c = 0,
      h;
    if (!s) {
      const m = [Xc.bind(this), void 0];
      for (
        m.unshift.apply(m, a),
          m.push.apply(m, u),
          h = m.length,
          f = Promise.resolve(n);
        c < h;

      )
        f = f.then(m[c++], m[c++]);
      return f;
    }
    h = a.length;
    let y = n;
    for (c = 0; c < h; ) {
      const m = a[c++],
        v = a[c++];
      try {
        y = m(y);
      } catch (S) {
        v.call(this, S);
        break;
      }
    }
    try {
      f = Xc.call(this, y);
    } catch (m) {
      return Promise.reject(m);
    }
    for (c = 0, h = u.length; c < h; ) f = f.then(u[c++], u[c++]);
    return f;
  }
  getUri(t) {
    t = qn(this.defaults, t);
    const n = hh(t.baseURL, t.url);
    return uh(n, t.params, t.paramsSerializer);
  }
}
k.forEach(["delete", "get", "head", "options"], function (t) {
  Oi.prototype[t] = function (n, r) {
    return this.request(
      qn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
k.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, l, a) {
      return this.request(
        qn(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: l,
        })
      );
    };
  }
  (Oi.prototype[t] = n()), (Oi.prototype[t + "Form"] = n(!0));
});
const Xo = Oi;
class du {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](o);
      r._listeners = null;
    }),
      (this.promise.then = (o) => {
        let i;
        const l = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(o);
        return (
          (l.cancel = function () {
            r.unsubscribe(i);
          }),
          l
        );
      }),
      t(function (i, l, a) {
        r.reason || ((r.reason = new lo(i, l, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new du(function (o) {
        t = o;
      }),
      cancel: t,
    };
  }
}
const sy = du;
function ay(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function uy(e) {
  return k.isObject(e) && e.isAxiosError === !0;
}
const ta = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ta).forEach(([e, t]) => {
  ta[t] = e;
});
const cy = ta;
function gh(e) {
  const t = new Xo(e),
    n = qp(Xo.prototype.request, t);
  return (
    k.extend(n, Xo.prototype, t, { allOwnKeys: !0 }),
    k.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (o) {
      return gh(qn(e, o));
    }),
    n
  );
}
const H = gh(cu);
H.Axios = Xo;
H.CanceledError = lo;
H.CancelToken = sy;
H.isCancel = ph;
H.VERSION = vh;
H.toFormData = tl;
H.AxiosError = z;
H.Cancel = H.CanceledError;
H.all = function (t) {
  return Promise.all(t);
};
H.spread = ay;
H.isAxiosError = uy;
H.mergeConfig = qn;
H.AxiosHeaders = Tt;
H.formToJSON = (e) => dh(k.isHTMLForm(e) ? new FormData(e) : e);
H.getAdapter = mh.getAdapter;
H.HttpStatusCode = cy;
H.default = H;
/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Yr() {
  return (
    (Yr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Yr.apply(this, arguments)
  );
}
var Ht;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ht || (Ht = {}));
const Zc = "popstate";
function fy(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: a } = r.location;
    return na(
      "",
      { pathname: i, search: l, hash: a },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Pi(o);
  }
  return py(t, n, null, e);
}
function ce(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function pu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function dy() {
  return Math.random().toString(36).substr(2, 8);
}
function ef(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function na(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Yr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? rr(t) : t,
      { state: n, key: (t && t.key) || r || dy() }
    )
  );
}
function Pi(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function rr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function py(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    a = Ht.Pop,
    s = null,
    u = f();
  u == null && ((u = 0), l.replaceState(Yr({}, l.state, { idx: u }), ""));
  function f() {
    return (l.state || { idx: null }).idx;
  }
  function c() {
    a = Ht.Pop;
    let S = f(),
      d = S == null ? null : S - u;
    (u = S), s && s({ action: a, location: v.location, delta: d });
  }
  function h(S, d) {
    a = Ht.Push;
    let p = na(v.location, S, d);
    n && n(p, S), (u = f() + 1);
    let g = ef(p, u),
      C = v.createHref(p);
    try {
      l.pushState(g, "", C);
    } catch (x) {
      if (x instanceof DOMException && x.name === "DataCloneError") throw x;
      o.location.assign(C);
    }
    i && s && s({ action: a, location: v.location, delta: 1 });
  }
  function y(S, d) {
    a = Ht.Replace;
    let p = na(v.location, S, d);
    n && n(p, S), (u = f());
    let g = ef(p, u),
      C = v.createHref(p);
    l.replaceState(g, "", C),
      i && s && s({ action: a, location: v.location, delta: 0 });
  }
  function m(S) {
    let d = o.location.origin !== "null" ? o.location.origin : o.location.href,
      p = typeof S == "string" ? S : Pi(S);
    return (
      ce(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, d)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(o, l);
    },
    listen(S) {
      if (s) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Zc, c),
        (s = S),
        () => {
          o.removeEventListener(Zc, c), (s = null);
        }
      );
    },
    createHref(S) {
      return t(o, S);
    },
    createURL: m,
    encodeLocation(S) {
      let d = m(S);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: h,
    replace: y,
    go(S) {
      return l.go(S);
    },
  };
  return v;
}
var tf;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(tf || (tf = {}));
function hy(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? rr(t) : t,
    o = hu(r.pathname || "/", n);
  if (o == null) return null;
  let i = yh(e);
  my(i);
  let l = null;
  for (let a = 0; l == null && a < i.length; ++a) l = ky(i[a], Ry(o));
  return l;
}
function yh(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, l, a) => {
    let s = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    s.relativePath.startsWith("/") &&
      (ce(
        s.relativePath.startsWith(r),
        'Absolute route path "' +
          s.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (s.relativePath = s.relativePath.slice(r.length)));
    let u = Zt([r, s.relativePath]),
      f = n.concat(s);
    i.children &&
      i.children.length > 0 &&
      (ce(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      yh(i.children, t, f, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: xy(u, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, l) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) o(i, l);
      else for (let s of Sh(i.path)) o(i, l, s);
    }),
    t
  );
}
function Sh(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let l = Sh(r.join("/")),
    a = [];
  return (
    a.push(...l.map((s) => (s === "" ? i : [i, s].join("/")))),
    o && a.push(...l),
    a.map((s) => (e.startsWith("/") && s === "" ? "/" : s))
  );
}
function my(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Ey(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const vy = /^:[\w-]+$/,
  gy = 3,
  yy = 2,
  Sy = 1,
  wy = 10,
  Cy = -2,
  nf = (e) => e === "*";
function xy(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(nf) && (r += Cy),
    t && (r += yy),
    n
      .filter((o) => !nf(o))
      .reduce((o, i) => o + (vy.test(i) ? gy : i === "" ? Sy : wy), r)
  );
}
function Ey(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function ky(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let a = n[l],
      s = l === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      f = Oy(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: s },
        u
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let c = a.route;
    i.push({
      params: r,
      pathname: Zt([o, f.pathname]),
      pathnameBase: Ny(Zt([o, f.pathnameBase])),
      route: c,
    }),
      f.pathnameBase !== "/" && (o = Zt([o, f.pathnameBase]));
  }
  return i;
}
function Oy(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Py(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    a = o.slice(1);
  return {
    params: r.reduce((u, f, c) => {
      let { paramName: h, isOptional: y } = f;
      if (h === "*") {
        let v = a[c] || "";
        l = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const m = a[c];
      return y && !m ? (u[h] = void 0) : (u[h] = Ty(m || "", h)), u;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function Py(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    pu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, a, s) => (
            r.push({ paramName: a, isOptional: s != null }),
            s ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function Ry(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      pu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Ty(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      pu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ").")
      ),
      e
    );
  }
}
function hu(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Ly(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? rr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Iy(n, t)) : t,
    search: My(r),
    hash: _y(o),
  };
}
function Iy(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Gl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function by(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function wh(e, t) {
  let n = by(e);
  return t
    ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Ch(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = rr(e))
    : ((o = Yr({}, e)),
      ce(
        !o.pathname || !o.pathname.includes("?"),
        Gl("?", "pathname", "search", o)
      ),
      ce(
        !o.pathname || !o.pathname.includes("#"),
        Gl("#", "pathname", "hash", o)
      ),
      ce(!o.search || !o.search.includes("#"), Gl("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    l = i ? "/" : o.pathname,
    a;
  if (l == null) a = n;
  else {
    let c = t.length - 1;
    if (!r && l.startsWith("..")) {
      let h = l.split("/");
      for (; h[0] === ".."; ) h.shift(), (c -= 1);
      o.pathname = h.join("/");
    }
    a = c >= 0 ? t[c] : "/";
  }
  let s = Ly(o, a),
    u = l && l !== "/" && l.endsWith("/"),
    f = (i || l === ".") && n.endsWith("/");
  return !s.pathname.endsWith("/") && (u || f) && (s.pathname += "/"), s;
}
const Zt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Ny = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  My = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  _y = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Fy(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const xh = ["post", "put", "patch", "delete"];
new Set(xh);
const Dy = ["get", ...xh];
new Set(Dy);
/**
 * React Router v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xr() {
  return (
    (Xr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Xr.apply(this, arguments)
  );
}
const mu = w.createContext(null),
  Ay = w.createContext(null),
  Cn = w.createContext(null),
  rl = w.createContext(null),
  xn = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Eh = w.createContext(null);
function jy(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  so() || ce(!1);
  let { basename: r, navigator: o } = w.useContext(Cn),
    { hash: i, pathname: l, search: a } = Oh(e, { relative: n }),
    s = l;
  return (
    r !== "/" && (s = l === "/" ? r : Zt([r, l])),
    o.createHref({ pathname: s, search: a, hash: i })
  );
}
function so() {
  return w.useContext(rl) != null;
}
function ao() {
  return so() || ce(!1), w.useContext(rl).location;
}
function kh(e) {
  w.useContext(Cn).static || w.useLayoutEffect(e);
}
function uo() {
  let { isDataRoute: e } = w.useContext(xn);
  return e ? qy() : Vy();
}
function Vy() {
  so() || ce(!1);
  let e = w.useContext(mu),
    { basename: t, future: n, navigator: r } = w.useContext(Cn),
    { matches: o } = w.useContext(xn),
    { pathname: i } = ao(),
    l = JSON.stringify(wh(o, n.v7_relativeSplatPath)),
    a = w.useRef(!1);
  return (
    kh(() => {
      a.current = !0;
    }),
    w.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let c = Ch(u, JSON.parse(l), i, f.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : Zt([t, c.pathname])),
          (f.replace ? r.replace : r.push)(c, f.state, f);
      },
      [t, r, l, i, e]
    )
  );
}
function Oh(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = w.useContext(Cn),
    { matches: o } = w.useContext(xn),
    { pathname: i } = ao(),
    l = JSON.stringify(wh(o, r.v7_relativeSplatPath));
  return w.useMemo(() => Ch(e, JSON.parse(l), i, n === "path"), [e, l, i, n]);
}
function zy(e, t) {
  return $y(e, t);
}
function $y(e, t, n, r) {
  so() || ce(!1);
  let { navigator: o } = w.useContext(Cn),
    { matches: i } = w.useContext(xn),
    l = i[i.length - 1],
    a = l ? l.params : {};
  l && l.pathname;
  let s = l ? l.pathnameBase : "/";
  l && l.route;
  let u = ao(),
    f;
  if (t) {
    var c;
    let S = typeof t == "string" ? rr(t) : t;
    s === "/" || ((c = S.pathname) != null && c.startsWith(s)) || ce(!1),
      (f = S);
  } else f = u;
  let h = f.pathname || "/",
    y = s === "/" ? h : h.slice(s.length) || "/",
    m = hy(e, { pathname: y }),
    v = Qy(
      m &&
        m.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, a, S.params),
            pathname: Zt([
              s,
              o.encodeLocation
                ? o.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? s
                : Zt([
                    s,
                    o.encodeLocation
                      ? o.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && v
    ? w.createElement(
        rl.Provider,
        {
          value: {
            location: Xr(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f
            ),
            navigationType: Ht.Pop,
          },
        },
        v
      )
    : v;
}
function Uy() {
  let e = Xy(),
    t = Fy(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: o }, n) : null,
    null
  );
}
const By = w.createElement(Uy, null);
class Hy extends w.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
          xn.Provider,
          { value: this.props.routeContext },
          w.createElement(Eh.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Wy(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = w.useContext(mu);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(xn.Provider, { value: t }, r)
  );
}
function Qy(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let l = e,
    a = (o = n) == null ? void 0 : o.errors;
  if (a != null) {
    let f = l.findIndex(
      (c) => c.route.id && (a == null ? void 0 : a[c.route.id])
    );
    f >= 0 || ce(!1), (l = l.slice(0, Math.min(l.length, f + 1)));
  }
  let s = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < l.length; f++) {
      let c = l[f];
      if (
        ((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (u = f),
        c.route.id)
      ) {
        let { loaderData: h, errors: y } = n,
          m =
            c.route.loader &&
            h[c.route.id] === void 0 &&
            (!y || y[c.route.id] === void 0);
        if (c.route.lazy || m) {
          (s = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((f, c, h) => {
    let y,
      m = !1,
      v = null,
      S = null;
    n &&
      ((y = a && c.route.id ? a[c.route.id] : void 0),
      (v = c.route.errorElement || By),
      s &&
        (u < 0 && h === 0
          ? (Jy("route-fallback", !1), (m = !0), (S = null))
          : u === h &&
            ((m = !0), (S = c.route.hydrateFallbackElement || null))));
    let d = t.concat(l.slice(0, h + 1)),
      p = () => {
        let g;
        return (
          y
            ? (g = v)
            : m
            ? (g = S)
            : c.route.Component
            ? (g = w.createElement(c.route.Component, null))
            : c.route.element
            ? (g = c.route.element)
            : (g = f),
          w.createElement(Wy, {
            match: c,
            routeContext: { outlet: f, matches: d, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || h === 0)
      ? w.createElement(Hy, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: y,
          children: p(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Ph = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Ph || {}),
  Ri = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ri || {});
function Ky(e) {
  let t = w.useContext(mu);
  return t || ce(!1), t;
}
function Gy(e) {
  let t = w.useContext(Ay);
  return t || ce(!1), t;
}
function Yy(e) {
  let t = w.useContext(xn);
  return t || ce(!1), t;
}
function Rh(e) {
  let t = Yy(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ce(!1), n.route.id;
}
function Xy() {
  var e;
  let t = w.useContext(Eh),
    n = Gy(Ri.UseRouteError),
    r = Rh(Ri.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function qy() {
  let { router: e } = Ky(Ph.UseNavigateStable),
    t = Rh(Ri.UseNavigateStable),
    n = w.useRef(!1);
  return (
    kh(() => {
      n.current = !0;
    }),
    w.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, Xr({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
const rf = {};
function Jy(e, t, n) {
  !t && !rf[e] && (rf[e] = !0);
}
function wr(e) {
  ce(!1);
}
function Zy(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = Ht.Pop,
    navigator: i,
    static: l = !1,
    future: a,
  } = e;
  so() && ce(!1);
  let s = t.replace(/^\/*/, "/"),
    u = w.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: l,
        future: Xr({ v7_relativeSplatPath: !1 }, a),
      }),
      [s, a, i, l]
    );
  typeof r == "string" && (r = rr(r));
  let {
      pathname: f = "/",
      search: c = "",
      hash: h = "",
      state: y = null,
      key: m = "default",
    } = r,
    v = w.useMemo(() => {
      let S = hu(f, s);
      return S == null
        ? null
        : {
            location: { pathname: S, search: c, hash: h, state: y, key: m },
            navigationType: o,
          };
    }, [s, f, c, h, y, m, o]);
  return v == null
    ? null
    : w.createElement(
        Cn.Provider,
        { value: u },
        w.createElement(rl.Provider, { children: n, value: v })
      );
}
function e1(e) {
  let { children: t, location: n } = e;
  return zy(ra(t), n);
}
new Promise(() => {});
function ra(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, o) => {
      if (!w.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === w.Fragment) {
        n.push.apply(n, ra(r.props.children, i));
        return;
      }
      r.type !== wr && ce(!1), !r.props.index || !r.props.children || ce(!1);
      let l = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = ra(r.props.children, i)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function oa() {
  return (
    (oa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    oa.apply(this, arguments)
  );
}
function t1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function n1(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function r1(e, t) {
  return e.button === 0 && (!t || t === "_self") && !n1(e);
}
const o1 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  i1 = "startTransition",
  of = rs[i1];
function l1(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = w.useRef();
  i.current == null && (i.current = fy({ window: o, v5Compat: !0 }));
  let l = i.current,
    [a, s] = w.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    f = w.useCallback(
      (c) => {
        u && of ? of(() => s(c)) : s(c);
      },
      [s, u]
    );
  return (
    w.useLayoutEffect(() => l.listen(f), [l, f]),
    w.createElement(Zy, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: l,
      future: r,
    })
  );
}
const s1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  a1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  lf = w.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: o,
        reloadDocument: i,
        replace: l,
        state: a,
        target: s,
        to: u,
        preventScrollReset: f,
        unstable_viewTransition: c,
      } = t,
      h = t1(t, o1),
      { basename: y } = w.useContext(Cn),
      m,
      v = !1;
    if (typeof u == "string" && a1.test(u) && ((m = u), s1))
      try {
        let g = new URL(window.location.href),
          C = u.startsWith("//") ? new URL(g.protocol + u) : new URL(u),
          x = hu(C.pathname, y);
        C.origin === g.origin && x != null
          ? (u = x + C.search + C.hash)
          : (v = !0);
      } catch {}
    let S = jy(u, { relative: o }),
      d = u1(u, {
        replace: l,
        state: a,
        target: s,
        preventScrollReset: f,
        relative: o,
        unstable_viewTransition: c,
      });
    function p(g) {
      r && r(g), g.defaultPrevented || d(g);
    }
    return w.createElement(
      "a",
      oa({}, h, { href: m || S, onClick: v || i ? r : p, ref: n, target: s })
    );
  });
var sf;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(sf || (sf = {}));
var af;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(af || (af = {}));
function u1(e, t) {
  let {
      target: n,
      replace: r,
      state: o,
      preventScrollReset: i,
      relative: l,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    s = uo(),
    u = ao(),
    f = Oh(e, { relative: l });
  return w.useCallback(
    (c) => {
      if (r1(c, n)) {
        c.preventDefault();
        let h = r !== void 0 ? r : Pi(u) === Pi(f);
        s(e, {
          replace: h,
          state: o,
          preventScrollReset: i,
          relative: l,
          unstable_viewTransition: a,
        });
      }
    },
    [u, s, f, r, o, n, e, i, l, a]
  );
}
function c1() {
  const { token: e, setToken: t } = w.useContext(fo),
    n = { color: "#143109", textDecoration: "none" };
  function r() {
    t(""), (window.localStorage.languageGameToken = "");
  }
  return e
    ? O.jsxs("div", {
        className: "main",
        children: [
          O.jsx(lf, {
            to: "/play",
            style: n,
            children: O.jsx("div", {
              className: "nav-button",
              children: "Start Playing",
            }),
          }),
          O.jsx(lf, {
            to: "/leaderboard",
            style: n,
            children: O.jsx("div", {
              className: "nav-button",
              children: "Leaderboards",
            }),
          }),
          O.jsx("div", {
            className: "nav-button",
            onClick: r,
            children: "Logout",
          }),
        ],
      })
    : O.jsx("div", {
        className: "main",
        children: O.jsx("div", {
          className: "main-text",
          children: "Learn, Compete, Get Better",
        }),
      });
}
const f1 = () => {
  const [e, t] = w.useState(!0),
    { setToken: n, setUsername: r } = w.useContext(fo),
    [o, i] = w.useState({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    }),
    [l, a] = w.useState({ username: "", password: "" }),
    s = (y) => {
      const { name: m, value: v } = y.target;
      i({ ...o, [m]: v });
    },
    u = (y) => {
      const { name: m, value: v } = y.target;
      f(m, v);
    },
    f = (y, m) => {
      switch (y) {
        case "username":
          m.length < 2
            ? a({
                ...l,
                username: "Username must be at least 2 characters long.",
              })
            : a({ ...l, username: "" });
          break;
        case "password":
          new RegExp(/^(?=.*[A-Z])(?=.*\d).{6,}$/).test(m)
            ? a({ ...l, password: "" })
            : a({
                ...l,
                password:
                  "Password must be at least 6 characters long and contain at least 1 uppercase letter and 1 number.",
              });
          break;
      }
    },
    c = async (y) => {
      if ((y.preventDefault(), e === !1))
        (await H.post("/api/user/signup", o)).status === 200 && t(!0);
      else {
        const m = await H.post("/api/user/signin", o);
        (window.localStorage.languageGameToken = m.data.token),
          n(m.data.token),
          r(m.data.username);
      }
    },
    h = () => t(!e);
  return O.jsx("div", {
    children: e
      ? O.jsxs("form", {
          className: "form",
          autoComplete: "off",
          onSubmit: c,
          children: [
            O.jsx("div", { children: "Log In" }),
            O.jsxs("div", {
              children: [
                O.jsx("label", { htmlFor: "username", children: "username: " }),
                O.jsx("input", {
                  type: "text",
                  id: "username",
                  name: "username",
                  value: o.username,
                  onChange: s,
                }),
              ],
            }),
            O.jsxs("div", {
              children: [
                O.jsx("label", { htmlFor: "password", children: "Password:" }),
                O.jsx("input", {
                  type: "password",
                  id: "password",
                  name: "password",
                  value: o.password,
                  onChange: s,
                }),
              ],
            }),
            O.jsx("button", {
              className: "button",
              type: "submit",
              onClick: c,
              children: "Sign In",
            }),
            O.jsxs("p", {
              children: [
                "Don`t have an account?",
                " ",
                O.jsx("button", {
                  className: "button",
                  type: "button",
                  onClick: h,
                  children: "Sign Up",
                }),
              ],
            }),
          ],
        })
      : O.jsxs("form", {
          onSubmit: c,
          className: "form",
          autoComplete: "off",
          children: [
            O.jsx("div", { children: "Create New Account" }),
            O.jsxs("div", {
              children: [
                O.jsx("label", {
                  htmlFor: "firstName",
                  children: "First Name:",
                }),
                O.jsx("input", {
                  type: "text",
                  id: "firstName",
                  name: "firstName",
                  value: o.firstName,
                  onChange: s,
                }),
              ],
            }),
            O.jsxs("div", {
              children: [
                O.jsx("label", { htmlFor: "lastName", children: "Last Name:" }),
                O.jsx("input", {
                  type: "text",
                  id: "lastName",
                  name: "lastName",
                  value: o.lastName,
                  onChange: s,
                }),
              ],
            }),
            O.jsxs("div", {
              children: [
                O.jsx("label", { htmlFor: "username", children: "Username:" }),
                O.jsx("input", {
                  type: "text",
                  id: "username",
                  name: "username",
                  value: o.username,
                  onChange: s,
                  onBlur: u,
                }),
              ],
            }),
            l.username &&
              O.jsx("div", { className: "error", children: l.username }),
            O.jsxs("div", {
              children: [
                O.jsx("label", { htmlFor: "password", children: "Password:" }),
                O.jsx("input", {
                  type: "password",
                  id: "password",
                  name: "password",
                  value: o.password,
                  onChange: s,
                  onBlur: u,
                }),
              ],
            }),
            l.password &&
              O.jsx("div", { className: "error", children: l.password }),
            O.jsx("button", {
              className: "button",
              type: "submit",
              children: "Submit",
            }),
            O.jsxs("p", {
              children: [
                "Have an account?",
                " ",
                O.jsx("button", {
                  className: "button",
                  type: "button",
                  onClick: h,
                  children: "Sign In",
                }),
              ],
            }),
          ],
        }),
  });
};
function d1() {
  const { token: e, username: t } = w.useContext(fo),
    [n, r] = w.useState(!1);
  function o() {
    r(!n);
  }
  return O.jsx("div", {
    children: e
      ? O.jsxs("div", { children: ["Welcome, ", t] })
      : O.jsxs(O.Fragment, {
          children: [
            O.jsx("div", {
              className: "login-button",
              onClick: o,
              children: "Log In",
            }),
            n
              ? O.jsxs("div", {
                  className: "form-container",
                  children: [
                    O.jsx("div", { className: "overlay", onClick: o }),
                    O.jsx(f1, {}),
                  ],
                })
              : null,
          ],
        }),
  });
}
function p1() {
  const { token: e } = w.useContext(fo),
    t = uo();
  return O.jsxs("div", {
    className: "header",
    children: [
      e
        ? O.jsx("div", {
            className: "back-button",
            onClick: () => t(-1),
            children: O.jsx("i", { className: "fa-solid fa-arrow-left" }),
          })
        : null,
      O.jsx("div", { className: "logo", children: "LanGo" }),
      O.jsx(d1, {}),
    ],
  });
}
function h1() {
  const { search: e } = ao();
  return w.useMemo(() => new URLSearchParams(e), [e]);
}
function m1() {
  const e = uo(),
    [t, n] = w.useState(null),
    [r, o] = w.useState(0),
    [i, l] = w.useState(1),
    a = ["Easy", "Medium", "Hard"],
    s = ["#34eb4f", "#fdce7f", "#c21919"],
    f = h1().get("language");
  f || e("/");
  const c = w.useCallback(async (y = -1) => {
    const m = await H.get("/api/questions", {
      params: { language: f, result: y },
    });
    m.status == 200
      ? (n(m.data.question), o(m.data.score), l(m.data.difficulty))
      : console.log("error getting questions");
  }, []);
  w.useEffect(() => {
    c();
  }, []);
  const h = (y) => {
    n(null), c(y);
  };
  return O.jsxs("div", {
    className: "play-container",
    children: [
      O.jsxs("div", {
        className: "details",
        children: [
          O.jsxs("div", { children: ["Score: ", r] }),
          O.jsxs("div", {
            children: [
              "Difficulty:",
              " ",
              O.jsx("span", { style: { color: s[i - 1] }, children: a[i - 1] }),
            ],
          }),
        ],
      }),
      t ? O.jsx(v1, { data: t, nextQuestion: h }) : "loading",
      O.jsxs("div", {
        className: "progress-container",
        children: [
          O.jsxs("div", { children: ["Level ", Math.floor(r / 20) + 1] }),
          O.jsx("div", {
            className: "progress-bar",
            children: O.jsx("div", { style: { width: `${r}%` } }),
          }),
        ],
      }),
    ],
  });
}
function v1({ data: e, nextQuestion: t }) {
  const { description: n, options: r, answer: o } = e,
    i = (l) => {
      l.target.id === o
        ? (l.target.classList.add("correct"), setTimeout(() => t(1), 1e3))
        : (l.target.classList.add("wrong"),
          document.getElementById(o).classList.add("correct"),
          setTimeout(() => t(0), 1e3));
    };
  return O.jsxs("div", {
    className: "question-container",
    children: [
      O.jsxs("div", { className: "description", children: ["Q. ", n] }),
      O.jsx("div", {
        className: "options",
        children: r.map((l, a) =>
          O.jsx("div", { id: l, onClick: i, children: l }, l)
        ),
      }),
    ],
  });
}
function yn(e) {
  "@babel/helpers - typeof";
  return (
    (yn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    yn(e)
  );
}
function g1(e, t) {
  if (yn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (yn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Th(e) {
  var t = g1(e, "string");
  return yn(t) == "symbol" ? t : String(t);
}
function Cr(e, t, n) {
  return (
    (t = Th(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function uf(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uf(Object(n), !0).forEach(function (r) {
          Cr(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : uf(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function y1(e) {
  if (Array.isArray(e)) return e;
}
function S1(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r,
      o,
      i,
      l,
      a = [],
      s = !0,
      u = !1;
    try {
      if (((i = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return;
        s = !1;
      } else
        for (
          ;
          !(s = (r = i.call(n)).done) && (a.push(r.value), a.length !== t);
          s = !0
        );
    } catch (f) {
      (u = !0), (o = f);
    } finally {
      try {
        if (!s && n.return != null && ((l = n.return()), Object(l) !== l))
          return;
      } finally {
        if (u) throw o;
      }
    }
    return a;
  }
}
function ia(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Lh(e, t) {
  if (e) {
    if (typeof e == "string") return ia(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ia(e, t);
  }
}
function w1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Lt(e, t) {
  return y1(e) || S1(e, t) || Lh(e, t) || w1();
}
function C1(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Ft(e, t) {
  if (e == null) return {};
  var n = C1(e, t),
    r,
    o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      (r = i[o]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
var x1 = [
  "defaultInputValue",
  "defaultMenuIsOpen",
  "defaultValue",
  "inputValue",
  "menuIsOpen",
  "onChange",
  "onInputChange",
  "onMenuClose",
  "onMenuOpen",
  "value",
];
function E1(e) {
  var t = e.defaultInputValue,
    n = t === void 0 ? "" : t,
    r = e.defaultMenuIsOpen,
    o = r === void 0 ? !1 : r,
    i = e.defaultValue,
    l = i === void 0 ? null : i,
    a = e.inputValue,
    s = e.menuIsOpen,
    u = e.onChange,
    f = e.onInputChange,
    c = e.onMenuClose,
    h = e.onMenuOpen,
    y = e.value,
    m = Ft(e, x1),
    v = w.useState(a !== void 0 ? a : n),
    S = Lt(v, 2),
    d = S[0],
    p = S[1],
    g = w.useState(s !== void 0 ? s : o),
    C = Lt(g, 2),
    x = C[0],
    P = C[1],
    E = w.useState(y !== void 0 ? y : l),
    R = Lt(E, 2),
    A = R[0],
    N = R[1],
    K = w.useCallback(
      function (L, _) {
        typeof u == "function" && u(L, _), N(L);
      },
      [u]
    ),
    re = w.useCallback(
      function (L, _) {
        var D;
        typeof f == "function" && (D = f(L, _)), p(D !== void 0 ? D : L);
      },
      [f]
    ),
    Te = w.useCallback(
      function () {
        typeof h == "function" && h(), P(!0);
      },
      [h]
    ),
    Ye = w.useCallback(
      function () {
        typeof c == "function" && c(), P(!1);
      },
      [c]
    ),
    se = a !== void 0 ? a : d,
    Z = s !== void 0 ? s : x,
    Me = y !== void 0 ? y : A;
  return M(
    M({}, m),
    {},
    {
      inputValue: se,
      menuIsOpen: Z,
      onChange: K,
      onInputChange: re,
      onMenuClose: Ye,
      onMenuOpen: Te,
      value: Me,
    }
  );
}
function F() {
  return (
    (F = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    F.apply(this, arguments)
  );
}
function k1(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, Th(r.key), r);
  }
}
function O1(e, t, n) {
  return (
    t && cf(e.prototype, t),
    n && cf(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function la(e, t) {
  return (
    (la = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    la(e, t)
  );
}
function P1(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    t && la(e, t);
}
function Ti(e) {
  return (
    (Ti = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (n) {
          return n.__proto__ || Object.getPrototypeOf(n);
        }),
    Ti(e)
  );
}
function Ih() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (Ih = function () {
    return !!e;
  })();
}
function R1(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function T1(e, t) {
  if (t && (yn(t) === "object" || typeof t == "function")) return t;
  if (t !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return R1(e);
}
function L1(e) {
  var t = Ih();
  return function () {
    var r = Ti(e),
      o;
    if (t) {
      var i = Ti(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else o = r.apply(this, arguments);
    return T1(this, o);
  };
}
function I1(e) {
  if (Array.isArray(e)) return ia(e);
}
function b1(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function N1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vu(e) {
  return I1(e) || b1(e) || Lh(e) || N1();
}
function M1(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function _1(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var F1 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(_1(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = M1(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Oe = "-ms-",
  Li = "-moz-",
  U = "-webkit-",
  bh = "comm",
  gu = "rule",
  yu = "decl",
  D1 = "@import",
  Nh = "@keyframes",
  A1 = "@layer",
  j1 = Math.abs,
  ol = String.fromCharCode,
  V1 = Object.assign;
function z1(e, t) {
  return we(e, 0) ^ 45
    ? (((((((t << 2) ^ we(e, 0)) << 2) ^ we(e, 1)) << 2) ^ we(e, 2)) << 2) ^
        we(e, 3)
    : 0;
}
function Mh(e) {
  return e.trim();
}
function $1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function B(e, t, n) {
  return e.replace(t, n);
}
function sa(e, t) {
  return e.indexOf(t);
}
function we(e, t) {
  return e.charCodeAt(t) | 0;
}
function qr(e, t, n) {
  return e.slice(t, n);
}
function ht(e) {
  return e.length;
}
function Su(e) {
  return e.length;
}
function bo(e, t) {
  return t.push(e), e;
}
function U1(e, t) {
  return e.map(t).join("");
}
var il = 1,
  Jn = 1,
  _h = 0,
  Ve = 0,
  ae = 0,
  or = "";
function ll(e, t, n, r, o, i, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: il,
    column: Jn,
    length: l,
    return: "",
  };
}
function hr(e, t) {
  return V1(ll("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function B1() {
  return ae;
}
function H1() {
  return (
    (ae = Ve > 0 ? we(or, --Ve) : 0), Jn--, ae === 10 && ((Jn = 1), il--), ae
  );
}
function He() {
  return (
    (ae = Ve < _h ? we(or, Ve++) : 0), Jn++, ae === 10 && ((Jn = 1), il++), ae
  );
}
function wt() {
  return we(or, Ve);
}
function qo() {
  return Ve;
}
function co(e, t) {
  return qr(or, e, t);
}
function Jr(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Fh(e) {
  return (il = Jn = 1), (_h = ht((or = e))), (Ve = 0), [];
}
function Dh(e) {
  return (or = ""), e;
}
function Jo(e) {
  return Mh(co(Ve - 1, aa(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function W1(e) {
  for (; (ae = wt()) && ae < 33; ) He();
  return Jr(e) > 2 || Jr(ae) > 3 ? "" : " ";
}
function Q1(e, t) {
  for (
    ;
    --t &&
    He() &&
    !(ae < 48 || ae > 102 || (ae > 57 && ae < 65) || (ae > 70 && ae < 97));

  );
  return co(e, qo() + (t < 6 && wt() == 32 && He() == 32));
}
function aa(e) {
  for (; He(); )
    switch (ae) {
      case e:
        return Ve;
      case 34:
      case 39:
        e !== 34 && e !== 39 && aa(ae);
        break;
      case 40:
        e === 41 && aa(e);
        break;
      case 92:
        He();
        break;
    }
  return Ve;
}
function K1(e, t) {
  for (; He() && e + ae !== 57; ) if (e + ae === 84 && wt() === 47) break;
  return "/*" + co(t, Ve - 1) + "*" + ol(e === 47 ? e : He());
}
function G1(e) {
  for (; !Jr(wt()); ) He();
  return co(e, Ve);
}
function Y1(e) {
  return Dh(Zo("", null, null, null, [""], (e = Fh(e)), 0, [0], e));
}
function Zo(e, t, n, r, o, i, l, a, s) {
  for (
    var u = 0,
      f = 0,
      c = l,
      h = 0,
      y = 0,
      m = 0,
      v = 1,
      S = 1,
      d = 1,
      p = 0,
      g = "",
      C = o,
      x = i,
      P = r,
      E = g;
    S;

  )
    switch (((m = p), (p = He()))) {
      case 40:
        if (m != 108 && we(E, c - 1) == 58) {
          sa((E += B(Jo(p), "&", "&\f")), "&\f") != -1 && (d = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Jo(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += W1(m);
        break;
      case 92:
        E += Q1(qo() - 1, 7);
        continue;
      case 47:
        switch (wt()) {
          case 42:
          case 47:
            bo(X1(K1(He(), qo()), t, n), s);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * v:
        a[u++] = ht(E) * d;
      case 125 * v:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            S = 0;
          case 59 + f:
            d == -1 && (E = B(E, /\f/g, "")),
              y > 0 &&
                ht(E) - c &&
                bo(
                  y > 32
                    ? df(E + ";", r, n, c - 1)
                    : df(B(E, " ", "") + ";", r, n, c - 2),
                  s
                );
            break;
          case 59:
            E += ";";
          default:
            if (
              (bo((P = ff(E, t, n, u, f, o, a, g, (C = []), (x = []), c)), i),
              p === 123)
            )
              if (f === 0) Zo(E, t, P, P, C, i, c, a, x);
              else
                switch (h === 99 && we(E, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Zo(
                      e,
                      P,
                      P,
                      r && bo(ff(e, P, P, 0, 0, o, a, g, o, (C = []), c), x),
                      o,
                      x,
                      c,
                      a,
                      r ? C : x
                    );
                    break;
                  default:
                    Zo(E, P, P, P, [""], x, 0, a, x);
                }
        }
        (u = f = y = 0), (v = d = 1), (g = E = ""), (c = l);
        break;
      case 58:
        (c = 1 + ht(E)), (y = m);
      default:
        if (v < 1) {
          if (p == 123) --v;
          else if (p == 125 && v++ == 0 && H1() == 125) continue;
        }
        switch (((E += ol(p)), p * v)) {
          case 38:
            d = f > 0 ? 1 : ((E += "\f"), -1);
            break;
          case 44:
            (a[u++] = (ht(E) - 1) * d), (d = 1);
            break;
          case 64:
            wt() === 45 && (E += Jo(He())),
              (h = wt()),
              (f = c = ht((g = E += G1(qo())))),
              p++;
            break;
          case 45:
            m === 45 && ht(E) == 2 && (v = 0);
        }
    }
  return i;
}
function ff(e, t, n, r, o, i, l, a, s, u, f) {
  for (
    var c = o - 1, h = o === 0 ? i : [""], y = Su(h), m = 0, v = 0, S = 0;
    m < r;
    ++m
  )
    for (var d = 0, p = qr(e, c + 1, (c = j1((v = l[m])))), g = e; d < y; ++d)
      (g = Mh(v > 0 ? h[d] + " " + p : B(p, /&\f/g, h[d]))) && (s[S++] = g);
  return ll(e, t, n, o === 0 ? gu : a, s, u, f);
}
function X1(e, t, n) {
  return ll(e, t, n, bh, ol(B1()), qr(e, 2, -2), 0);
}
function df(e, t, n, r) {
  return ll(e, t, n, yu, qr(e, 0, r), qr(e, r + 1, -1), r);
}
function Bn(e, t) {
  for (var n = "", r = Su(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function q1(e, t, n, r) {
  switch (e.type) {
    case A1:
      if (e.children.length) break;
    case D1:
    case yu:
      return (e.return = e.return || e.value);
    case bh:
      return "";
    case Nh:
      return (e.return = e.value + "{" + Bn(e.children, r) + "}");
    case gu:
      e.value = e.props.join(",");
  }
  return ht((n = Bn(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function J1(e) {
  var t = Su(e);
  return function (n, r, o, i) {
    for (var l = "", a = 0; a < t; a++) l += e[a](n, r, o, i) || "";
    return l;
  };
}
function Z1(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function eS(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var tS = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = wt()), o === 38 && i === 12 && (n[r] = 1), !Jr(i);

    )
      He();
    return co(t, Ve);
  },
  nS = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Jr(o)) {
        case 0:
          o === 38 && wt() === 12 && (n[r] = 1), (t[r] += tS(Ve - 1, n, r));
          break;
        case 2:
          t[r] += Jo(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = wt() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += ol(o);
      }
    while ((o = He()));
    return t;
  },
  rS = function (t, n) {
    return Dh(nS(Fh(t), n));
  },
  pf = new WeakMap(),
  oS = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !pf.get(r)) &&
        !o
      ) {
        pf.set(t, !0);
        for (
          var i = [], l = rS(n, i), a = r.props, s = 0, u = 0;
          s < l.length;
          s++
        )
          for (var f = 0; f < a.length; f++, u++)
            t.props[u] = i[s] ? l[s].replace(/&\f/g, a[f]) : a[f] + " " + l[s];
      }
    }
  },
  iS = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Ah(e, t) {
  switch (z1(e, t)) {
    case 5103:
      return U + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return U + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return U + e + Li + e + Oe + e + e;
    case 6828:
    case 4268:
      return U + e + Oe + e + e;
    case 6165:
      return U + e + Oe + "flex-" + e + e;
    case 5187:
      return (
        U + e + B(e, /(\w+).+(:[^]+)/, U + "box-$1$2" + Oe + "flex-$1$2") + e
      );
    case 5443:
      return U + e + Oe + "flex-item-" + B(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        U +
        e +
        Oe +
        "flex-line-pack" +
        B(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return U + e + Oe + B(e, "shrink", "negative") + e;
    case 5292:
      return U + e + Oe + B(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        U +
        "box-" +
        B(e, "-grow", "") +
        U +
        e +
        Oe +
        B(e, "grow", "positive") +
        e
      );
    case 4554:
      return U + B(e, /([^-])(transform)/g, "$1" + U + "$2") + e;
    case 6187:
      return (
        B(B(B(e, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return B(e, /(image-set\([^]*)/, U + "$1$`$1");
    case 4968:
      return (
        B(
          B(e, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + Oe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        U +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return B(e, /(.+)-inline(.+)/, U + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ht(e) - 1 - t > 6)
        switch (we(e, t + 1)) {
          case 109:
            if (we(e, t + 4) !== 45) break;
          case 102:
            return (
              B(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  U +
                  "$2-$3$1" +
                  Li +
                  (we(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~sa(e, "stretch")
              ? Ah(B(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (we(e, t + 1) !== 115) break;
    case 6444:
      switch (we(e, ht(e) - 3 - (~sa(e, "!important") && 10))) {
        case 107:
          return B(e, ":", ":" + U) + e;
        case 101:
          return (
            B(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                U +
                (we(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                U +
                "$2$3$1" +
                Oe +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (we(e, t + 11)) {
        case 114:
          return U + e + Oe + B(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return U + e + Oe + B(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return U + e + Oe + B(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return U + e + Oe + e + e;
  }
  return e;
}
var lS = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case yu:
          t.return = Ah(t.value, t.length);
          break;
        case Nh:
          return Bn([hr(t, { value: B(t.value, "@", "@" + U) })], o);
        case gu:
          if (t.length)
            return U1(t.props, function (i) {
              switch ($1(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Bn(
                    [hr(t, { props: [B(i, /:(read-\w+)/, ":" + Li + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Bn(
                    [
                      hr(t, {
                        props: [B(i, /:(plac\w+)/, ":" + U + "input-$1")],
                      }),
                      hr(t, { props: [B(i, /:(plac\w+)/, ":" + Li + "$1")] }),
                      hr(t, { props: [B(i, /:(plac\w+)/, Oe + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  sS = [lS],
  aS = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (v) {
        var S = v.getAttribute("data-emotion");
        S.indexOf(" ") !== -1 &&
          (document.head.appendChild(v), v.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || sS,
      i = {},
      l,
      a = [];
    (l = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (v) {
          for (
            var S = v.getAttribute("data-emotion").split(" "), d = 1;
            d < S.length;
            d++
          )
            i[S[d]] = !0;
          a.push(v);
        }
      );
    var s,
      u = [oS, iS];
    {
      var f,
        c = [
          q1,
          Z1(function (v) {
            f.insert(v);
          }),
        ],
        h = J1(u.concat(o, c)),
        y = function (S) {
          return Bn(Y1(S), h);
        };
      s = function (S, d, p, g) {
        (f = p),
          y(S ? S + "{" + d.styles + "}" : d.styles),
          g && (m.inserted[d.name] = !0);
      };
    }
    var m = {
      key: n,
      sheet: new F1({
        key: n,
        container: l,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: s,
    };
    return m.sheet.hydrate(a), m;
  },
  jh = { exports: {} },
  Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ge = typeof Symbol == "function" && Symbol.for,
  wu = ge ? Symbol.for("react.element") : 60103,
  Cu = ge ? Symbol.for("react.portal") : 60106,
  sl = ge ? Symbol.for("react.fragment") : 60107,
  al = ge ? Symbol.for("react.strict_mode") : 60108,
  ul = ge ? Symbol.for("react.profiler") : 60114,
  cl = ge ? Symbol.for("react.provider") : 60109,
  fl = ge ? Symbol.for("react.context") : 60110,
  xu = ge ? Symbol.for("react.async_mode") : 60111,
  dl = ge ? Symbol.for("react.concurrent_mode") : 60111,
  pl = ge ? Symbol.for("react.forward_ref") : 60112,
  hl = ge ? Symbol.for("react.suspense") : 60113,
  uS = ge ? Symbol.for("react.suspense_list") : 60120,
  ml = ge ? Symbol.for("react.memo") : 60115,
  vl = ge ? Symbol.for("react.lazy") : 60116,
  cS = ge ? Symbol.for("react.block") : 60121,
  fS = ge ? Symbol.for("react.fundamental") : 60117,
  dS = ge ? Symbol.for("react.responder") : 60118,
  pS = ge ? Symbol.for("react.scope") : 60119;
function Ge(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case wu:
        switch (((e = e.type), e)) {
          case xu:
          case dl:
          case sl:
          case ul:
          case al:
          case hl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case fl:
              case pl:
              case vl:
              case ml:
              case cl:
                return e;
              default:
                return t;
            }
        }
      case Cu:
        return t;
    }
  }
}
function Vh(e) {
  return Ge(e) === dl;
}
Q.AsyncMode = xu;
Q.ConcurrentMode = dl;
Q.ContextConsumer = fl;
Q.ContextProvider = cl;
Q.Element = wu;
Q.ForwardRef = pl;
Q.Fragment = sl;
Q.Lazy = vl;
Q.Memo = ml;
Q.Portal = Cu;
Q.Profiler = ul;
Q.StrictMode = al;
Q.Suspense = hl;
Q.isAsyncMode = function (e) {
  return Vh(e) || Ge(e) === xu;
};
Q.isConcurrentMode = Vh;
Q.isContextConsumer = function (e) {
  return Ge(e) === fl;
};
Q.isContextProvider = function (e) {
  return Ge(e) === cl;
};
Q.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === wu;
};
Q.isForwardRef = function (e) {
  return Ge(e) === pl;
};
Q.isFragment = function (e) {
  return Ge(e) === sl;
};
Q.isLazy = function (e) {
  return Ge(e) === vl;
};
Q.isMemo = function (e) {
  return Ge(e) === ml;
};
Q.isPortal = function (e) {
  return Ge(e) === Cu;
};
Q.isProfiler = function (e) {
  return Ge(e) === ul;
};
Q.isStrictMode = function (e) {
  return Ge(e) === al;
};
Q.isSuspense = function (e) {
  return Ge(e) === hl;
};
Q.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === sl ||
    e === dl ||
    e === ul ||
    e === al ||
    e === hl ||
    e === uS ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === vl ||
        e.$$typeof === ml ||
        e.$$typeof === cl ||
        e.$$typeof === fl ||
        e.$$typeof === pl ||
        e.$$typeof === fS ||
        e.$$typeof === dS ||
        e.$$typeof === pS ||
        e.$$typeof === cS))
  );
};
Q.typeOf = Ge;
jh.exports = Q;
var hS = jh.exports,
  zh = hS,
  mS = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  vS = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  $h = {};
$h[zh.ForwardRef] = mS;
$h[zh.Memo] = vS;
var gS = !0;
function yS(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var Uh = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || gS === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  SS = function (t, n, r) {
    Uh(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function wS(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var CS = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  xS = /[A-Z]|^ms/g,
  ES = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Bh = function (t) {
    return t.charCodeAt(1) === 45;
  },
  hf = function (t) {
    return t != null && typeof t != "boolean";
  },
  Yl = eS(function (e) {
    return Bh(e) ? e : e.replace(xS, "-$&").toLowerCase();
  }),
  mf = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(ES, function (r, o, i) {
            return (mt = { name: o, styles: i, next: mt }), o;
          });
    }
    return CS[t] !== 1 && !Bh(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Zr(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (mt = { name: n.name, styles: n.styles, next: mt }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (mt = { name: r.name, styles: r.styles, next: mt }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return kS(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = mt,
          l = n(e);
        return (mt = i), Zr(e, t, l);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function kS(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Zr(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object")
        t != null && t[l] !== void 0
          ? (r += i + "{" + t[l] + "}")
          : hf(l) && (r += Yl(i) + ":" + mf(i, l) + ";");
      else if (
        Array.isArray(l) &&
        typeof l[0] == "string" &&
        (t == null || t[l[0]] === void 0)
      )
        for (var a = 0; a < l.length; a++)
          hf(l[a]) && (r += Yl(i) + ":" + mf(i, l[a]) + ";");
      else {
        var s = Zr(e, t, l);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Yl(i) + ":" + s + ";";
            break;
          }
          default:
            r += i + "{" + s + "}";
        }
      }
    }
  return r;
}
var vf = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  mt,
  Hh = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    mt = void 0;
    var l = t[0];
    l == null || l.raw === void 0
      ? ((o = !1), (i += Zr(r, n, l)))
      : (i += l[0]);
    for (var a = 1; a < t.length; a++) (i += Zr(r, n, t[a])), o && (i += l[a]);
    vf.lastIndex = 0;
    for (var s = "", u; (u = vf.exec(i)) !== null; ) s += "-" + u[1];
    var f = wS(i) + s;
    return { name: f, styles: i, next: mt };
  },
  OS = function (t) {
    return t();
  },
  PS = rs.useInsertionEffect ? rs.useInsertionEffect : !1,
  RS = PS || OS,
  Eu = {}.hasOwnProperty,
  Wh = w.createContext(typeof HTMLElement < "u" ? aS({ key: "css" }) : null);
Wh.Provider;
var TS = function (t) {
    return w.forwardRef(function (n, r) {
      var o = w.useContext(Wh);
      return t(n, o, r);
    });
  },
  LS = w.createContext({}),
  ua = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
  IS = function (t, n) {
    var r = {};
    for (var o in n) Eu.call(n, o) && (r[o] = n[o]);
    return (r[ua] = t), r;
  },
  bS = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Uh(n, r, o),
      RS(function () {
        return SS(n, r, o);
      }),
      null
    );
  },
  NS = TS(function (e, t, n) {
    var r = e.css;
    typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
    var o = e[ua],
      i = [r],
      l = "";
    typeof e.className == "string"
      ? (l = yS(t.registered, i, e.className))
      : e.className != null && (l = e.className + " ");
    var a = Hh(i, void 0, w.useContext(LS));
    l += t.key + "-" + a.name;
    var s = {};
    for (var u in e) Eu.call(e, u) && u !== "css" && u !== ua && (s[u] = e[u]);
    return (
      (s.ref = n),
      (s.className = l),
      w.createElement(
        w.Fragment,
        null,
        w.createElement(bS, {
          cache: t,
          serialized: a,
          isStringTag: typeof o == "string",
        }),
        w.createElement(o, s)
      )
    );
  }),
  MS = NS,
  b = function (t, n) {
    var r = arguments;
    if (n == null || !Eu.call(n, "css"))
      return w.createElement.apply(void 0, r);
    var o = r.length,
      i = new Array(o);
    (i[0] = MS), (i[1] = IS(t, n));
    for (var l = 2; l < o; l++) i[l] = r[l];
    return w.createElement.apply(null, i);
  };
function ku() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Hh(t);
}
var _S = function () {
  var t = ku.apply(void 0, arguments),
    n = "animation-" + t.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + t.styles + "}",
    anim: 1,
    toString: function () {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    },
  };
};
function FS(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
    )
  );
}
const DS = Math.min,
  AS = Math.max,
  Ii = Math.round,
  No = Math.floor,
  bi = (e) => ({ x: e, y: e });
function jS(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height,
  };
}
function Qh(e) {
  return Gh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ct(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Kh(e) {
  var t;
  return (t = (Gh(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Gh(e) {
  return e instanceof Node || e instanceof ct(e).Node;
}
function ca(e) {
  return e instanceof Element || e instanceof ct(e).Element;
}
function Ou(e) {
  return e instanceof HTMLElement || e instanceof ct(e).HTMLElement;
}
function gf(e) {
  return typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ct(e).ShadowRoot;
}
function Yh(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = Pu(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(o)
  );
}
function VS() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function zS(e) {
  return ["html", "body", "#document"].includes(Qh(e));
}
function Pu(e) {
  return ct(e).getComputedStyle(e);
}
function $S(e) {
  if (Qh(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (gf(e) && e.host) || Kh(e);
  return gf(t) ? t.host : t;
}
function Xh(e) {
  const t = $S(e);
  return zS(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Ou(t) && Yh(t)
    ? t
    : Xh(t);
}
function Ni(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Xh(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    l = ct(o);
  return i
    ? t.concat(
        l,
        l.visualViewport || [],
        Yh(o) ? o : [],
        l.frameElement && n ? Ni(l.frameElement) : []
      )
    : t.concat(o, Ni(o, [], n));
}
function US(e) {
  const t = Pu(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Ou(e),
    i = o ? e.offsetWidth : n,
    l = o ? e.offsetHeight : r,
    a = Ii(n) !== i || Ii(r) !== l;
  return a && ((n = i), (r = l)), { width: n, height: r, $: a };
}
function Ru(e) {
  return ca(e) ? e : e.contextElement;
}
function Xl(e) {
  const t = Ru(e);
  if (!Ou(t)) return bi(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = US(t);
  let l = (i ? Ii(n.width) : n.width) / r,
    a = (i ? Ii(n.height) : n.height) / o;
  return (
    (!l || !Number.isFinite(l)) && (l = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: l, y: a }
  );
}
const BS = bi(0);
function HS(e) {
  const t = ct(e);
  return !VS() || !t.visualViewport
    ? BS
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function WS(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== ct(e)) ? !1 : t;
}
function yf(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = Ru(e);
  let l = bi(1);
  t && (r ? ca(r) && (l = Xl(r)) : (l = Xl(e)));
  const a = WS(i, n, r) ? HS(i) : bi(0);
  let s = (o.left + a.x) / l.x,
    u = (o.top + a.y) / l.y,
    f = o.width / l.x,
    c = o.height / l.y;
  if (i) {
    const h = ct(i),
      y = r && ca(r) ? ct(r) : r;
    let m = h.frameElement;
    for (; m && r && y !== h; ) {
      const v = Xl(m),
        S = m.getBoundingClientRect(),
        d = Pu(m),
        p = S.left + (m.clientLeft + parseFloat(d.paddingLeft)) * v.x,
        g = S.top + (m.clientTop + parseFloat(d.paddingTop)) * v.y;
      (s *= v.x),
        (u *= v.y),
        (f *= v.x),
        (c *= v.y),
        (s += p),
        (u += g),
        (m = ct(m).frameElement);
    }
  }
  return jS({ width: f, height: c, x: s, y: u });
}
function QS(e, t) {
  let n = null,
    r;
  const o = Kh(e);
  function i() {
    clearTimeout(r), n && n.disconnect(), (n = null);
  }
  function l(a, s) {
    a === void 0 && (a = !1), s === void 0 && (s = 1), i();
    const { left: u, top: f, width: c, height: h } = e.getBoundingClientRect();
    if ((a || t(), !c || !h)) return;
    const y = No(f),
      m = No(o.clientWidth - (u + c)),
      v = No(o.clientHeight - (f + h)),
      S = No(u),
      p = {
        rootMargin: -y + "px " + -m + "px " + -v + "px " + -S + "px",
        threshold: AS(0, DS(1, s)) || 1,
      };
    let g = !0;
    function C(x) {
      const P = x[0].intersectionRatio;
      if (P !== s) {
        if (!g) return l();
        P
          ? l(!1, P)
          : (r = setTimeout(() => {
              l(!1, 1e-7);
            }, 100));
      }
      g = !1;
    }
    try {
      n = new IntersectionObserver(C, { ...p, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, p);
    }
    n.observe(e);
  }
  return l(!0), i;
}
function KS(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: l = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: s = !1,
    } = r,
    u = Ru(e),
    f = o || i ? [...(u ? Ni(u) : []), ...Ni(t)] : [];
  f.forEach((d) => {
    o && d.addEventListener("scroll", n, { passive: !0 }),
      i && d.addEventListener("resize", n);
  });
  const c = u && a ? QS(u, n) : null;
  let h = -1,
    y = null;
  l &&
    ((y = new ResizeObserver((d) => {
      let [p] = d;
      p &&
        p.target === u &&
        y &&
        (y.unobserve(t),
        cancelAnimationFrame(h),
        (h = requestAnimationFrame(() => {
          y && y.observe(t);
        }))),
        n();
    })),
    u && !s && y.observe(u),
    y.observe(t));
  let m,
    v = s ? yf(e) : null;
  s && S();
  function S() {
    const d = yf(e);
    v &&
      (d.x !== v.x ||
        d.y !== v.y ||
        d.width !== v.width ||
        d.height !== v.height) &&
      n(),
      (v = d),
      (m = requestAnimationFrame(S));
  }
  return (
    n(),
    () => {
      f.forEach((d) => {
        o && d.removeEventListener("scroll", n),
          i && d.removeEventListener("resize", n);
      }),
        c && c(),
        y && y.disconnect(),
        (y = null),
        s && cancelAnimationFrame(m);
    }
  );
}
var fa = w.useLayoutEffect,
  GS = [
    "className",
    "clearValue",
    "cx",
    "getStyles",
    "getClassNames",
    "getValue",
    "hasValue",
    "isMulti",
    "isRtl",
    "options",
    "selectOption",
    "selectProps",
    "setValue",
    "theme",
  ],
  Mi = function () {};
function YS(e, t) {
  return t ? (t[0] === "-" ? e + t : e + "__" + t) : e;
}
function XS(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2;
    o < n;
    o++
  )
    r[o - 2] = arguments[o];
  var i = [].concat(r);
  if (t && e)
    for (var l in t) t.hasOwnProperty(l) && t[l] && i.push("".concat(YS(e, l)));
  return i
    .filter(function (a) {
      return a;
    })
    .map(function (a) {
      return String(a).trim();
    })
    .join(" ");
}
var Sf = function (t) {
    return iw(t)
      ? t.filter(Boolean)
      : yn(t) === "object" && t !== null
      ? [t]
      : [];
  },
  qh = function (t) {
    t.className,
      t.clearValue,
      t.cx,
      t.getStyles,
      t.getClassNames,
      t.getValue,
      t.hasValue,
      t.isMulti,
      t.isRtl,
      t.options,
      t.selectOption,
      t.selectProps,
      t.setValue,
      t.theme;
    var n = Ft(t, GS);
    return M({}, n);
  },
  ie = function (t, n, r) {
    var o = t.cx,
      i = t.getStyles,
      l = t.getClassNames,
      a = t.className;
    return { css: i(n, t), className: o(r ?? {}, l(n, t), a) };
  };
function gl(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function qS(e) {
  return gl(e) ? window.innerHeight : e.clientHeight;
}
function Jh(e) {
  return gl(e) ? window.pageYOffset : e.scrollTop;
}
function _i(e, t) {
  if (gl(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function JS(e) {
  var t = getComputedStyle(e),
    n = t.position === "absolute",
    r = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var o = e; (o = o.parentElement); )
    if (
      ((t = getComputedStyle(o)),
      !(n && t.position === "static") &&
        r.test(t.overflow + t.overflowY + t.overflowX))
    )
      return o;
  return document.documentElement;
}
function ZS(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function Mo(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200,
    r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Mi,
    o = Jh(e),
    i = t - o,
    l = 10,
    a = 0;
  function s() {
    a += l;
    var u = ZS(a, o, i, n);
    _i(e, u), a < n ? window.requestAnimationFrame(s) : r(e);
  }
  s();
}
function wf(e, t) {
  var n = e.getBoundingClientRect(),
    r = t.getBoundingClientRect(),
    o = t.offsetHeight / 3;
  r.bottom + o > n.bottom
    ? _i(
        e,
        Math.min(
          t.offsetTop + t.clientHeight - e.offsetHeight + o,
          e.scrollHeight
        )
      )
    : r.top - o < n.top && _i(e, Math.max(t.offsetTop - o, 0));
}
function ew(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width,
  };
}
function Cf() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function tw() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  } catch {
    return !1;
  }
}
var Zh = !1,
  nw = {
    get passive() {
      return (Zh = !0);
    },
  },
  _o = typeof window < "u" ? window : {};
_o.addEventListener &&
  _o.removeEventListener &&
  (_o.addEventListener("p", Mi, nw), _o.removeEventListener("p", Mi, !1));
var rw = Zh;
function ow(e) {
  return e != null;
}
function iw(e) {
  return Array.isArray(e);
}
function Fo(e, t, n) {
  return e ? t : n;
}
var lw = function (t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
      o < n;
      o++
    )
      r[o - 1] = arguments[o];
    var i = Object.entries(t).filter(function (l) {
      var a = Lt(l, 1),
        s = a[0];
      return !r.includes(s);
    });
    return i.reduce(function (l, a) {
      var s = Lt(a, 2),
        u = s[0],
        f = s[1];
      return (l[u] = f), l;
    }, {});
  },
  sw = ["children", "innerProps"],
  aw = ["children", "innerProps"];
function uw(e) {
  var t = e.maxHeight,
    n = e.menuEl,
    r = e.minHeight,
    o = e.placement,
    i = e.shouldScroll,
    l = e.isFixedPosition,
    a = e.controlHeight,
    s = JS(n),
    u = { placement: "bottom", maxHeight: t };
  if (!n || !n.offsetParent) return u;
  var f = s.getBoundingClientRect(),
    c = f.height,
    h = n.getBoundingClientRect(),
    y = h.bottom,
    m = h.height,
    v = h.top,
    S = n.offsetParent.getBoundingClientRect(),
    d = S.top,
    p = l ? window.innerHeight : qS(s),
    g = Jh(s),
    C = parseInt(getComputedStyle(n).marginBottom, 10),
    x = parseInt(getComputedStyle(n).marginTop, 10),
    P = d - x,
    E = p - v,
    R = P + g,
    A = c - g - v,
    N = y - p + g + C,
    K = g + v - x,
    re = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (E >= m) return { placement: "bottom", maxHeight: t };
      if (A >= m && !l)
        return i && Mo(s, N, re), { placement: "bottom", maxHeight: t };
      if ((!l && A >= r) || (l && E >= r)) {
        i && Mo(s, N, re);
        var Te = l ? E - C : A - C;
        return { placement: "bottom", maxHeight: Te };
      }
      if (o === "auto" || l) {
        var Ye = t,
          se = l ? P : R;
        return (
          se >= r && (Ye = Math.min(se - C - a, t)),
          { placement: "top", maxHeight: Ye }
        );
      }
      if (o === "bottom")
        return i && _i(s, N), { placement: "bottom", maxHeight: t };
      break;
    case "top":
      if (P >= m) return { placement: "top", maxHeight: t };
      if (R >= m && !l)
        return i && Mo(s, K, re), { placement: "top", maxHeight: t };
      if ((!l && R >= r) || (l && P >= r)) {
        var Z = t;
        return (
          ((!l && R >= r) || (l && P >= r)) && (Z = l ? P - x : R - x),
          i && Mo(s, K, re),
          { placement: "top", maxHeight: Z }
        );
      }
      return { placement: "bottom", maxHeight: t };
    default:
      throw new Error('Invalid placement provided "'.concat(o, '".'));
  }
  return u;
}
function cw(e) {
  var t = { bottom: "top", top: "bottom" };
  return e ? t[e] : "bottom";
}
var em = function (t) {
    return t === "auto" ? "bottom" : t;
  },
  fw = function (t, n) {
    var r,
      o = t.placement,
      i = t.theme,
      l = i.borderRadius,
      a = i.spacing,
      s = i.colors;
    return M(
      ((r = { label: "menu" }),
      Cr(r, cw(o), "100%"),
      Cr(r, "position", "absolute"),
      Cr(r, "width", "100%"),
      Cr(r, "zIndex", 1),
      r),
      n
        ? {}
        : {
            backgroundColor: s.neutral0,
            borderRadius: l,
            boxShadow:
              "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
            marginBottom: a.menuGutter,
            marginTop: a.menuGutter,
          }
    );
  },
  tm = w.createContext(null),
  dw = function (t) {
    var n = t.children,
      r = t.minMenuHeight,
      o = t.maxMenuHeight,
      i = t.menuPlacement,
      l = t.menuPosition,
      a = t.menuShouldScrollIntoView,
      s = t.theme,
      u = w.useContext(tm) || {},
      f = u.setPortalPlacement,
      c = w.useRef(null),
      h = w.useState(o),
      y = Lt(h, 2),
      m = y[0],
      v = y[1],
      S = w.useState(null),
      d = Lt(S, 2),
      p = d[0],
      g = d[1],
      C = s.spacing.controlHeight;
    return (
      fa(
        function () {
          var x = c.current;
          if (x) {
            var P = l === "fixed",
              E = a && !P,
              R = uw({
                maxHeight: o,
                menuEl: x,
                minHeight: r,
                placement: i,
                shouldScroll: E,
                isFixedPosition: P,
                controlHeight: C,
              });
            v(R.maxHeight), g(R.placement), f == null || f(R.placement);
          }
        },
        [o, i, l, a, r, f, C]
      ),
      n({
        ref: c,
        placerProps: M(M({}, t), {}, { placement: p || em(i), maxHeight: m }),
      })
    );
  },
  pw = function (t) {
    var n = t.children,
      r = t.innerRef,
      o = t.innerProps;
    return b("div", F({}, ie(t, "menu", { menu: !0 }), { ref: r }, o), n);
  },
  hw = pw,
  mw = function (t, n) {
    var r = t.maxHeight,
      o = t.theme.spacing.baseUnit;
    return M(
      {
        maxHeight: r,
        overflowY: "auto",
        position: "relative",
        WebkitOverflowScrolling: "touch",
      },
      n ? {} : { paddingBottom: o, paddingTop: o }
    );
  },
  vw = function (t) {
    var n = t.children,
      r = t.innerProps,
      o = t.innerRef,
      i = t.isMulti;
    return b(
      "div",
      F(
        {},
        ie(t, "menuList", { "menu-list": !0, "menu-list--is-multi": i }),
        { ref: o },
        r
      ),
      n
    );
  },
  nm = function (t, n) {
    var r = t.theme,
      o = r.spacing.baseUnit,
      i = r.colors;
    return M(
      { textAlign: "center" },
      n
        ? {}
        : {
            color: i.neutral40,
            padding: "".concat(o * 2, "px ").concat(o * 3, "px"),
          }
    );
  },
  gw = nm,
  yw = nm,
  Sw = function (t) {
    var n = t.children,
      r = n === void 0 ? "No options" : n,
      o = t.innerProps,
      i = Ft(t, sw);
    return b(
      "div",
      F(
        {},
        ie(
          M(M({}, i), {}, { children: r, innerProps: o }),
          "noOptionsMessage",
          { "menu-notice": !0, "menu-notice--no-options": !0 }
        ),
        o
      ),
      r
    );
  },
  ww = function (t) {
    var n = t.children,
      r = n === void 0 ? "Loading..." : n,
      o = t.innerProps,
      i = Ft(t, aw);
    return b(
      "div",
      F(
        {},
        ie(M(M({}, i), {}, { children: r, innerProps: o }), "loadingMessage", {
          "menu-notice": !0,
          "menu-notice--loading": !0,
        }),
        o
      ),
      r
    );
  },
  Cw = function (t) {
    var n = t.rect,
      r = t.offset,
      o = t.position;
    return { left: n.left, position: o, top: r, width: n.width, zIndex: 1 };
  },
  xw = function (t) {
    var n = t.appendTo,
      r = t.children,
      o = t.controlElement,
      i = t.innerProps,
      l = t.menuPlacement,
      a = t.menuPosition,
      s = w.useRef(null),
      u = w.useRef(null),
      f = w.useState(em(l)),
      c = Lt(f, 2),
      h = c[0],
      y = c[1],
      m = w.useMemo(function () {
        return { setPortalPlacement: y };
      }, []),
      v = w.useState(null),
      S = Lt(v, 2),
      d = S[0],
      p = S[1],
      g = w.useCallback(
        function () {
          if (o) {
            var E = ew(o),
              R = a === "fixed" ? 0 : window.pageYOffset,
              A = E[h] + R;
            (A !== (d == null ? void 0 : d.offset) ||
              E.left !== (d == null ? void 0 : d.rect.left) ||
              E.width !== (d == null ? void 0 : d.rect.width)) &&
              p({ offset: A, rect: E });
          }
        },
        [
          o,
          a,
          h,
          d == null ? void 0 : d.offset,
          d == null ? void 0 : d.rect.left,
          d == null ? void 0 : d.rect.width,
        ]
      );
    fa(
      function () {
        g();
      },
      [g]
    );
    var C = w.useCallback(
      function () {
        typeof u.current == "function" && (u.current(), (u.current = null)),
          o &&
            s.current &&
            (u.current = KS(o, s.current, g, {
              elementResize: "ResizeObserver" in window,
            }));
      },
      [o, g]
    );
    fa(
      function () {
        C();
      },
      [C]
    );
    var x = w.useCallback(
      function (E) {
        (s.current = E), C();
      },
      [C]
    );
    if ((!n && a !== "fixed") || !d) return null;
    var P = b(
      "div",
      F(
        { ref: x },
        ie(
          M(M({}, t), {}, { offset: d.offset, position: a, rect: d.rect }),
          "menuPortal",
          { "menu-portal": !0 }
        ),
        i
      ),
      r
    );
    return b(tm.Provider, { value: m }, n ? Xp.createPortal(P, n) : P);
  },
  Ew = function (t) {
    var n = t.isDisabled,
      r = t.isRtl;
    return {
      label: "container",
      direction: r ? "rtl" : void 0,
      pointerEvents: n ? "none" : void 0,
      position: "relative",
    };
  },
  kw = function (t) {
    var n = t.children,
      r = t.innerProps,
      o = t.isDisabled,
      i = t.isRtl;
    return b(
      "div",
      F({}, ie(t, "container", { "--is-disabled": o, "--is-rtl": i }), r),
      n
    );
  },
  Ow = function (t, n) {
    var r = t.theme.spacing,
      o = t.isMulti,
      i = t.hasValue,
      l = t.selectProps.controlShouldRenderValue;
    return M(
      {
        alignItems: "center",
        display: o && i && l ? "flex" : "grid",
        flex: 1,
        flexWrap: "wrap",
        WebkitOverflowScrolling: "touch",
        position: "relative",
        overflow: "hidden",
      },
      n
        ? {}
        : {
            padding: ""
              .concat(r.baseUnit / 2, "px ")
              .concat(r.baseUnit * 2, "px"),
          }
    );
  },
  Pw = function (t) {
    var n = t.children,
      r = t.innerProps,
      o = t.isMulti,
      i = t.hasValue;
    return b(
      "div",
      F(
        {},
        ie(t, "valueContainer", {
          "value-container": !0,
          "value-container--is-multi": o,
          "value-container--has-value": i,
        }),
        r
      ),
      n
    );
  },
  Rw = function () {
    return {
      alignItems: "center",
      alignSelf: "stretch",
      display: "flex",
      flexShrink: 0,
    };
  },
  Tw = function (t) {
    var n = t.children,
      r = t.innerProps;
    return b(
      "div",
      F({}, ie(t, "indicatorsContainer", { indicators: !0 }), r),
      n
    );
  },
  xf,
  Lw = ["size"],
  Iw = ["innerProps", "isRtl", "size"],
  bw = {
    name: "8mmkcg",
    styles:
      "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0",
  },
  rm = function (t) {
    var n = t.size,
      r = Ft(t, Lw);
    return b(
      "svg",
      F(
        {
          height: n,
          width: n,
          viewBox: "0 0 20 20",
          "aria-hidden": "true",
          focusable: "false",
          css: bw,
        },
        r
      )
    );
  },
  Tu = function (t) {
    return b(
      rm,
      F({ size: 20 }, t),
      b("path", {
        d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z",
      })
    );
  },
  om = function (t) {
    return b(
      rm,
      F({ size: 20 }, t),
      b("path", {
        d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z",
      })
    );
  },
  im = function (t, n) {
    var r = t.isFocused,
      o = t.theme,
      i = o.spacing.baseUnit,
      l = o.colors;
    return M(
      {
        label: "indicatorContainer",
        display: "flex",
        transition: "color 150ms",
      },
      n
        ? {}
        : {
            color: r ? l.neutral60 : l.neutral20,
            padding: i * 2,
            ":hover": { color: r ? l.neutral80 : l.neutral40 },
          }
    );
  },
  Nw = im,
  Mw = function (t) {
    var n = t.children,
      r = t.innerProps;
    return b(
      "div",
      F(
        {},
        ie(t, "dropdownIndicator", { indicator: !0, "dropdown-indicator": !0 }),
        r
      ),
      n || b(om, null)
    );
  },
  _w = im,
  Fw = function (t) {
    var n = t.children,
      r = t.innerProps;
    return b(
      "div",
      F(
        {},
        ie(t, "clearIndicator", { indicator: !0, "clear-indicator": !0 }),
        r
      ),
      n || b(Tu, null)
    );
  },
  Dw = function (t, n) {
    var r = t.isDisabled,
      o = t.theme,
      i = o.spacing.baseUnit,
      l = o.colors;
    return M(
      { label: "indicatorSeparator", alignSelf: "stretch", width: 1 },
      n
        ? {}
        : {
            backgroundColor: r ? l.neutral10 : l.neutral20,
            marginBottom: i * 2,
            marginTop: i * 2,
          }
    );
  },
  Aw = function (t) {
    var n = t.innerProps;
    return b(
      "span",
      F({}, n, ie(t, "indicatorSeparator", { "indicator-separator": !0 }))
    );
  },
  jw = _S(
    xf ||
      (xf = FS([
        `
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`,
      ]))
  ),
  Vw = function (t, n) {
    var r = t.isFocused,
      o = t.size,
      i = t.theme,
      l = i.colors,
      a = i.spacing.baseUnit;
    return M(
      {
        label: "loadingIndicator",
        display: "flex",
        transition: "color 150ms",
        alignSelf: "center",
        fontSize: o,
        lineHeight: 1,
        marginRight: o,
        textAlign: "center",
        verticalAlign: "middle",
      },
      n ? {} : { color: r ? l.neutral60 : l.neutral20, padding: a * 2 }
    );
  },
  ql = function (t) {
    var n = t.delay,
      r = t.offset;
    return b("span", {
      css: ku(
        {
          animation: ""
            .concat(jw, " 1s ease-in-out ")
            .concat(n, "ms infinite;"),
          backgroundColor: "currentColor",
          borderRadius: "1em",
          display: "inline-block",
          marginLeft: r ? "1em" : void 0,
          height: "1em",
          verticalAlign: "top",
          width: "1em",
        },
        "",
        ""
      ),
    });
  },
  zw = function (t) {
    var n = t.innerProps,
      r = t.isRtl,
      o = t.size,
      i = o === void 0 ? 4 : o,
      l = Ft(t, Iw);
    return b(
      "div",
      F(
        {},
        ie(
          M(M({}, l), {}, { innerProps: n, isRtl: r, size: i }),
          "loadingIndicator",
          { indicator: !0, "loading-indicator": !0 }
        ),
        n
      ),
      b(ql, { delay: 0, offset: r }),
      b(ql, { delay: 160, offset: !0 }),
      b(ql, { delay: 320, offset: !r })
    );
  },
  $w = function (t, n) {
    var r = t.isDisabled,
      o = t.isFocused,
      i = t.theme,
      l = i.colors,
      a = i.borderRadius,
      s = i.spacing;
    return M(
      {
        label: "control",
        alignItems: "center",
        cursor: "default",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        minHeight: s.controlHeight,
        outline: "0 !important",
        position: "relative",
        transition: "all 100ms",
      },
      n
        ? {}
        : {
            backgroundColor: r ? l.neutral5 : l.neutral0,
            borderColor: r ? l.neutral10 : o ? l.primary : l.neutral20,
            borderRadius: a,
            borderStyle: "solid",
            borderWidth: 1,
            boxShadow: o ? "0 0 0 1px ".concat(l.primary) : void 0,
            "&:hover": { borderColor: o ? l.primary : l.neutral30 },
          }
    );
  },
  Uw = function (t) {
    var n = t.children,
      r = t.isDisabled,
      o = t.isFocused,
      i = t.innerRef,
      l = t.innerProps,
      a = t.menuIsOpen;
    return b(
      "div",
      F(
        { ref: i },
        ie(t, "control", {
          control: !0,
          "control--is-disabled": r,
          "control--is-focused": o,
          "control--menu-is-open": a,
        }),
        l,
        { "aria-disabled": r || void 0 }
      ),
      n
    );
  },
  Bw = Uw,
  Hw = ["data"],
  Ww = function (t, n) {
    var r = t.theme.spacing;
    return n
      ? {}
      : { paddingBottom: r.baseUnit * 2, paddingTop: r.baseUnit * 2 };
  },
  Qw = function (t) {
    var n = t.children,
      r = t.cx,
      o = t.getStyles,
      i = t.getClassNames,
      l = t.Heading,
      a = t.headingProps,
      s = t.innerProps,
      u = t.label,
      f = t.theme,
      c = t.selectProps;
    return b(
      "div",
      F({}, ie(t, "group", { group: !0 }), s),
      b(
        l,
        F({}, a, {
          selectProps: c,
          theme: f,
          getStyles: o,
          getClassNames: i,
          cx: r,
        }),
        u
      ),
      b("div", null, n)
    );
  },
  Kw = function (t, n) {
    var r = t.theme,
      o = r.colors,
      i = r.spacing;
    return M(
      { label: "group", cursor: "default", display: "block" },
      n
        ? {}
        : {
            color: o.neutral40,
            fontSize: "75%",
            fontWeight: 500,
            marginBottom: "0.25em",
            paddingLeft: i.baseUnit * 3,
            paddingRight: i.baseUnit * 3,
            textTransform: "uppercase",
          }
    );
  },
  Gw = function (t) {
    var n = qh(t);
    n.data;
    var r = Ft(n, Hw);
    return b("div", F({}, ie(t, "groupHeading", { "group-heading": !0 }), r));
  },
  Yw = Qw,
  Xw = ["innerRef", "isDisabled", "isHidden", "inputClassName"],
  qw = function (t, n) {
    var r = t.isDisabled,
      o = t.value,
      i = t.theme,
      l = i.spacing,
      a = i.colors;
    return M(
      M(
        {
          visibility: r ? "hidden" : "visible",
          transform: o ? "translateZ(0)" : "",
        },
        Jw
      ),
      n
        ? {}
        : {
            margin: l.baseUnit / 2,
            paddingBottom: l.baseUnit / 2,
            paddingTop: l.baseUnit / 2,
            color: a.neutral80,
          }
    );
  },
  lm = {
    gridArea: "1 / 2",
    font: "inherit",
    minWidth: "2px",
    border: 0,
    margin: 0,
    outline: 0,
    padding: 0,
  },
  Jw = {
    flex: "1 1 auto",
    display: "inline-grid",
    gridArea: "1 / 1 / 2 / 3",
    gridTemplateColumns: "0 min-content",
    "&:after": M(
      {
        content: 'attr(data-value) " "',
        visibility: "hidden",
        whiteSpace: "pre",
      },
      lm
    ),
  },
  Zw = function (t) {
    return M(
      {
        label: "input",
        color: "inherit",
        background: 0,
        opacity: t ? 0 : 1,
        width: "100%",
      },
      lm
    );
  },
  eC = function (t) {
    var n = t.cx,
      r = t.value,
      o = qh(t),
      i = o.innerRef,
      l = o.isDisabled,
      a = o.isHidden,
      s = o.inputClassName,
      u = Ft(o, Xw);
    return b(
      "div",
      F({}, ie(t, "input", { "input-container": !0 }), {
        "data-value": r || "",
      }),
      b(
        "input",
        F(
          { className: n({ input: !0 }, s), ref: i, style: Zw(a), disabled: l },
          u
        )
      )
    );
  },
  tC = eC,
  nC = function (t, n) {
    var r = t.theme,
      o = r.spacing,
      i = r.borderRadius,
      l = r.colors;
    return M(
      { label: "multiValue", display: "flex", minWidth: 0 },
      n
        ? {}
        : {
            backgroundColor: l.neutral10,
            borderRadius: i / 2,
            margin: o.baseUnit / 2,
          }
    );
  },
  rC = function (t, n) {
    var r = t.theme,
      o = r.borderRadius,
      i = r.colors,
      l = t.cropWithEllipsis;
    return M(
      {
        overflow: "hidden",
        textOverflow: l || l === void 0 ? "ellipsis" : void 0,
        whiteSpace: "nowrap",
      },
      n
        ? {}
        : {
            borderRadius: o / 2,
            color: i.neutral80,
            fontSize: "85%",
            padding: 3,
            paddingLeft: 6,
          }
    );
  },
  oC = function (t, n) {
    var r = t.theme,
      o = r.spacing,
      i = r.borderRadius,
      l = r.colors,
      a = t.isFocused;
    return M(
      { alignItems: "center", display: "flex" },
      n
        ? {}
        : {
            borderRadius: i / 2,
            backgroundColor: a ? l.dangerLight : void 0,
            paddingLeft: o.baseUnit,
            paddingRight: o.baseUnit,
            ":hover": { backgroundColor: l.dangerLight, color: l.danger },
          }
    );
  },
  sm = function (t) {
    var n = t.children,
      r = t.innerProps;
    return b("div", r, n);
  },
  iC = sm,
  lC = sm;
function sC(e) {
  var t = e.children,
    n = e.innerProps;
  return b("div", F({ role: "button" }, n), t || b(Tu, { size: 14 }));
}
var aC = function (t) {
    var n = t.children,
      r = t.components,
      o = t.data,
      i = t.innerProps,
      l = t.isDisabled,
      a = t.removeProps,
      s = t.selectProps,
      u = r.Container,
      f = r.Label,
      c = r.Remove;
    return b(
      u,
      {
        data: o,
        innerProps: M(
          M(
            {},
            ie(t, "multiValue", {
              "multi-value": !0,
              "multi-value--is-disabled": l,
            })
          ),
          i
        ),
        selectProps: s,
      },
      b(
        f,
        {
          data: o,
          innerProps: M(
            {},
            ie(t, "multiValueLabel", { "multi-value__label": !0 })
          ),
          selectProps: s,
        },
        n
      ),
      b(c, {
        data: o,
        innerProps: M(
          M({}, ie(t, "multiValueRemove", { "multi-value__remove": !0 })),
          {},
          { "aria-label": "Remove ".concat(n || "option") },
          a
        ),
        selectProps: s,
      })
    );
  },
  uC = aC,
  cC = function (t, n) {
    var r = t.isDisabled,
      o = t.isFocused,
      i = t.isSelected,
      l = t.theme,
      a = l.spacing,
      s = l.colors;
    return M(
      {
        label: "option",
        cursor: "default",
        display: "block",
        fontSize: "inherit",
        width: "100%",
        userSelect: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      },
      n
        ? {}
        : {
            backgroundColor: i ? s.primary : o ? s.primary25 : "transparent",
            color: r ? s.neutral20 : i ? s.neutral0 : "inherit",
            padding: ""
              .concat(a.baseUnit * 2, "px ")
              .concat(a.baseUnit * 3, "px"),
            ":active": {
              backgroundColor: r ? void 0 : i ? s.primary : s.primary50,
            },
          }
    );
  },
  fC = function (t) {
    var n = t.children,
      r = t.isDisabled,
      o = t.isFocused,
      i = t.isSelected,
      l = t.innerRef,
      a = t.innerProps;
    return b(
      "div",
      F(
        {},
        ie(t, "option", {
          option: !0,
          "option--is-disabled": r,
          "option--is-focused": o,
          "option--is-selected": i,
        }),
        { ref: l, "aria-disabled": r },
        a
      ),
      n
    );
  },
  dC = fC,
  pC = function (t, n) {
    var r = t.theme,
      o = r.spacing,
      i = r.colors;
    return M(
      { label: "placeholder", gridArea: "1 / 1 / 2 / 3" },
      n
        ? {}
        : {
            color: i.neutral50,
            marginLeft: o.baseUnit / 2,
            marginRight: o.baseUnit / 2,
          }
    );
  },
  hC = function (t) {
    var n = t.children,
      r = t.innerProps;
    return b("div", F({}, ie(t, "placeholder", { placeholder: !0 }), r), n);
  },
  mC = hC,
  vC = function (t, n) {
    var r = t.isDisabled,
      o = t.theme,
      i = o.spacing,
      l = o.colors;
    return M(
      {
        label: "singleValue",
        gridArea: "1 / 1 / 2 / 3",
        maxWidth: "100%",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      n
        ? {}
        : {
            color: r ? l.neutral40 : l.neutral80,
            marginLeft: i.baseUnit / 2,
            marginRight: i.baseUnit / 2,
          }
    );
  },
  gC = function (t) {
    var n = t.children,
      r = t.isDisabled,
      o = t.innerProps;
    return b(
      "div",
      F(
        {},
        ie(t, "singleValue", {
          "single-value": !0,
          "single-value--is-disabled": r,
        }),
        o
      ),
      n
    );
  },
  yC = gC,
  SC = {
    ClearIndicator: Fw,
    Control: Bw,
    DropdownIndicator: Mw,
    DownChevron: om,
    CrossIcon: Tu,
    Group: Yw,
    GroupHeading: Gw,
    IndicatorsContainer: Tw,
    IndicatorSeparator: Aw,
    Input: tC,
    LoadingIndicator: zw,
    Menu: hw,
    MenuList: vw,
    MenuPortal: xw,
    LoadingMessage: ww,
    NoOptionsMessage: Sw,
    MultiValue: uC,
    MultiValueContainer: iC,
    MultiValueLabel: lC,
    MultiValueRemove: sC,
    Option: dC,
    Placeholder: mC,
    SelectContainer: kw,
    SingleValue: yC,
    ValueContainer: Pw,
  },
  wC = function (t) {
    return M(M({}, SC), t.components);
  },
  Ef =
    Number.isNaN ||
    function (t) {
      return typeof t == "number" && t !== t;
    };
function CC(e, t) {
  return !!(e === t || (Ef(e) && Ef(t)));
}
function xC(e, t) {
  if (e.length !== t.length) return !1;
  for (var n = 0; n < e.length; n++) if (!CC(e[n], t[n])) return !1;
  return !0;
}
function EC(e, t) {
  t === void 0 && (t = xC);
  var n = null;
  function r() {
    for (var o = [], i = 0; i < arguments.length; i++) o[i] = arguments[i];
    if (n && n.lastThis === this && t(o, n.lastArgs)) return n.lastResult;
    var l = e.apply(this, o);
    return (n = { lastResult: l, lastArgs: o, lastThis: this }), l;
  }
  return (
    (r.clear = function () {
      n = null;
    }),
    r
  );
}
var kC = {
    name: "7pg0cj-a11yText",
    styles:
      "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap",
  },
  OC = function (t) {
    return b("span", F({ css: kC }, t));
  },
  kf = OC,
  PC = {
    guidance: function (t) {
      var n = t.isSearchable,
        r = t.isMulti,
        o = t.tabSelectsValue,
        i = t.context,
        l = t.isInitialFocus;
      switch (i) {
        case "menu":
          return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(
            o ? ", press Tab to select the option and exit the menu" : "",
            "."
          );
        case "input":
          return l
            ? ""
                .concat(t["aria-label"] || "Select", " is focused ")
                .concat(
                  n ? ",type to refine list" : "",
                  ", press Down to open the menu, "
                )
                .concat(r ? " press left to focus selected values" : "")
            : "";
        case "value":
          return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
        default:
          return "";
      }
    },
    onChange: function (t) {
      var n = t.action,
        r = t.label,
        o = r === void 0 ? "" : r,
        i = t.labels,
        l = t.isDisabled;
      switch (n) {
        case "deselect-option":
        case "pop-value":
        case "remove-value":
          return "option ".concat(o, ", deselected.");
        case "clear":
          return "All selected options have been cleared.";
        case "initial-input-focus":
          return "option"
            .concat(i.length > 1 ? "s" : "", " ")
            .concat(i.join(","), ", selected.");
        case "select-option":
          return l
            ? "option ".concat(o, " is disabled. Select another option.")
            : "option ".concat(o, ", selected.");
        default:
          return "";
      }
    },
    onFocus: function (t) {
      var n = t.context,
        r = t.focused,
        o = t.options,
        i = t.label,
        l = i === void 0 ? "" : i,
        a = t.selectValue,
        s = t.isDisabled,
        u = t.isSelected,
        f = t.isAppleDevice,
        c = function (v, S) {
          return v && v.length
            ? "".concat(v.indexOf(S) + 1, " of ").concat(v.length)
            : "";
        };
      if (n === "value" && a)
        return "value ".concat(l, " focused, ").concat(c(a, r), ".");
      if (n === "menu" && f) {
        var h = s ? " disabled" : "",
          y = "".concat(u ? " selected" : "").concat(h);
        return "".concat(l).concat(y, ", ").concat(c(o, r), ".");
      }
      return "";
    },
    onFilter: function (t) {
      var n = t.inputValue,
        r = t.resultsMessage;
      return "".concat(r).concat(n ? " for search term " + n : "", ".");
    },
  },
  RC = function (t) {
    var n = t.ariaSelection,
      r = t.focusedOption,
      o = t.focusedValue,
      i = t.focusableOptions,
      l = t.isFocused,
      a = t.selectValue,
      s = t.selectProps,
      u = t.id,
      f = t.isAppleDevice,
      c = s.ariaLiveMessages,
      h = s.getOptionLabel,
      y = s.inputValue,
      m = s.isMulti,
      v = s.isOptionDisabled,
      S = s.isSearchable,
      d = s.menuIsOpen,
      p = s.options,
      g = s.screenReaderStatus,
      C = s.tabSelectsValue,
      x = s.isLoading,
      P = s["aria-label"],
      E = s["aria-live"],
      R = w.useMemo(
        function () {
          return M(M({}, PC), c || {});
        },
        [c]
      ),
      A = w.useMemo(
        function () {
          var se = "";
          if (n && R.onChange) {
            var Z = n.option,
              Me = n.options,
              L = n.removedValue,
              _ = n.removedValues,
              D = n.value,
              G = function (xt) {
                return Array.isArray(xt) ? null : xt;
              },
              j = L || Z || G(D),
              he = j ? h(j) : "",
              ye = Me || _ || void 0,
              Xe = ye ? ye.map(h) : [],
              fe = M({ isDisabled: j && v(j, a), label: he, labels: Xe }, n);
            se = R.onChange(fe);
          }
          return se;
        },
        [n, R, v, a, h]
      ),
      N = w.useMemo(
        function () {
          var se = "",
            Z = r || o,
            Me = !!(r && a && a.includes(r));
          if (Z && R.onFocus) {
            var L = {
              focused: Z,
              label: h(Z),
              isDisabled: v(Z, a),
              isSelected: Me,
              options: i,
              context: Z === r ? "menu" : "value",
              selectValue: a,
              isAppleDevice: f,
            };
            se = R.onFocus(L);
          }
          return se;
        },
        [r, o, h, v, R, i, a, f]
      ),
      K = w.useMemo(
        function () {
          var se = "";
          if (d && p.length && !x && R.onFilter) {
            var Z = g({ count: i.length });
            se = R.onFilter({ inputValue: y, resultsMessage: Z });
          }
          return se;
        },
        [i, y, d, R, p, g, x]
      ),
      re = (n == null ? void 0 : n.action) === "initial-input-focus",
      Te = w.useMemo(
        function () {
          var se = "";
          if (R.guidance) {
            var Z = o ? "value" : d ? "menu" : "input";
            se = R.guidance({
              "aria-label": P,
              context: Z,
              isDisabled: r && v(r, a),
              isMulti: m,
              isSearchable: S,
              tabSelectsValue: C,
              isInitialFocus: re,
            });
          }
          return se;
        },
        [P, r, o, m, v, S, d, R, a, C, re]
      ),
      Ye = b(
        w.Fragment,
        null,
        b("span", { id: "aria-selection" }, A),
        b("span", { id: "aria-focused" }, N),
        b("span", { id: "aria-results" }, K),
        b("span", { id: "aria-guidance" }, Te)
      );
    return b(
      w.Fragment,
      null,
      b(kf, { id: u }, re && Ye),
      b(
        kf,
        {
          "aria-live": E,
          "aria-atomic": "false",
          "aria-relevant": "additions text",
          role: "log",
        },
        l && !re && Ye
      )
    );
  },
  TC = RC,
  da = [
    { base: "A", letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ" },
    { base: "AA", letters: "Ꜳ" },
    { base: "AE", letters: "ÆǼǢ" },
    { base: "AO", letters: "Ꜵ" },
    { base: "AU", letters: "Ꜷ" },
    { base: "AV", letters: "ꜸꜺ" },
    { base: "AY", letters: "Ꜽ" },
    { base: "B", letters: "BⒷＢḂḄḆɃƂƁ" },
    { base: "C", letters: "CⒸＣĆĈĊČÇḈƇȻꜾ" },
    { base: "D", letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ" },
    { base: "DZ", letters: "ǱǄ" },
    { base: "Dz", letters: "ǲǅ" },
    { base: "E", letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ" },
    { base: "F", letters: "FⒻＦḞƑꝻ" },
    { base: "G", letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ" },
    { base: "H", letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ" },
    { base: "I", letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ" },
    { base: "J", letters: "JⒿＪĴɈ" },
    { base: "K", letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ" },
    { base: "L", letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ" },
    { base: "LJ", letters: "Ǉ" },
    { base: "Lj", letters: "ǈ" },
    { base: "M", letters: "MⓂＭḾṀṂⱮƜ" },
    { base: "N", letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ" },
    { base: "NJ", letters: "Ǌ" },
    { base: "Nj", letters: "ǋ" },
    { base: "O", letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ" },
    { base: "OI", letters: "Ƣ" },
    { base: "OO", letters: "Ꝏ" },
    { base: "OU", letters: "Ȣ" },
    { base: "P", letters: "PⓅＰṔṖƤⱣꝐꝒꝔ" },
    { base: "Q", letters: "QⓆＱꝖꝘɊ" },
    { base: "R", letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ" },
    { base: "S", letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ" },
    { base: "T", letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ" },
    { base: "TZ", letters: "Ꜩ" },
    { base: "U", letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ" },
    { base: "V", letters: "VⓋＶṼṾƲꝞɅ" },
    { base: "VY", letters: "Ꝡ" },
    { base: "W", letters: "WⓌＷẀẂŴẆẄẈⱲ" },
    { base: "X", letters: "XⓍＸẊẌ" },
    { base: "Y", letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ" },
    { base: "Z", letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ" },
    { base: "a", letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ" },
    { base: "aa", letters: "ꜳ" },
    { base: "ae", letters: "æǽǣ" },
    { base: "ao", letters: "ꜵ" },
    { base: "au", letters: "ꜷ" },
    { base: "av", letters: "ꜹꜻ" },
    { base: "ay", letters: "ꜽ" },
    { base: "b", letters: "bⓑｂḃḅḇƀƃɓ" },
    { base: "c", letters: "cⓒｃćĉċčçḉƈȼꜿↄ" },
    { base: "d", letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ" },
    { base: "dz", letters: "ǳǆ" },
    { base: "e", letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ" },
    { base: "f", letters: "fⓕｆḟƒꝼ" },
    { base: "g", letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ" },
    { base: "h", letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ" },
    { base: "hv", letters: "ƕ" },
    { base: "i", letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı" },
    { base: "j", letters: "jⓙｊĵǰɉ" },
    { base: "k", letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ" },
    { base: "l", letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ" },
    { base: "lj", letters: "ǉ" },
    { base: "m", letters: "mⓜｍḿṁṃɱɯ" },
    { base: "n", letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ" },
    { base: "nj", letters: "ǌ" },
    { base: "o", letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ" },
    { base: "oi", letters: "ƣ" },
    { base: "ou", letters: "ȣ" },
    { base: "oo", letters: "ꝏ" },
    { base: "p", letters: "pⓟｐṕṗƥᵽꝑꝓꝕ" },
    { base: "q", letters: "qⓠｑɋꝗꝙ" },
    { base: "r", letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ" },
    { base: "s", letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ" },
    { base: "t", letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ" },
    { base: "tz", letters: "ꜩ" },
    { base: "u", letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ" },
    { base: "v", letters: "vⓥｖṽṿʋꝟʌ" },
    { base: "vy", letters: "ꝡ" },
    { base: "w", letters: "wⓦｗẁẃŵẇẅẘẉⱳ" },
    { base: "x", letters: "xⓧｘẋẍ" },
    { base: "y", letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ" },
    { base: "z", letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ" },
  ],
  LC = new RegExp(
    "[" +
      da
        .map(function (e) {
          return e.letters;
        })
        .join("") +
      "]",
    "g"
  ),
  am = {};
for (var Jl = 0; Jl < da.length; Jl++)
  for (var Zl = da[Jl], es = 0; es < Zl.letters.length; es++)
    am[Zl.letters[es]] = Zl.base;
var um = function (t) {
    return t.replace(LC, function (n) {
      return am[n];
    });
  },
  IC = EC(um),
  Of = function (t) {
    return t.replace(/^\s+|\s+$/g, "");
  },
  bC = function (t) {
    return "".concat(t.label, " ").concat(t.value);
  },
  NC = function (t) {
    return function (n, r) {
      if (n.data.__isNew__) return !0;
      var o = M(
          {
            ignoreCase: !0,
            ignoreAccents: !0,
            stringify: bC,
            trim: !0,
            matchFrom: "any",
          },
          t
        ),
        i = o.ignoreCase,
        l = o.ignoreAccents,
        a = o.stringify,
        s = o.trim,
        u = o.matchFrom,
        f = s ? Of(r) : r,
        c = s ? Of(a(n)) : a(n);
      return (
        i && ((f = f.toLowerCase()), (c = c.toLowerCase())),
        l && ((f = IC(f)), (c = um(c))),
        u === "start" ? c.substr(0, f.length) === f : c.indexOf(f) > -1
      );
    };
  },
  MC = ["innerRef"];
function _C(e) {
  var t = e.innerRef,
    n = Ft(e, MC),
    r = lw(n, "onExited", "in", "enter", "exit", "appear");
  return b(
    "input",
    F({ ref: t }, r, {
      css: ku(
        {
          label: "dummyInput",
          background: 0,
          border: 0,
          caretColor: "transparent",
          fontSize: "inherit",
          gridArea: "1 / 1 / 2 / 3",
          outline: 0,
          padding: 0,
          width: 1,
          color: "transparent",
          left: -100,
          opacity: 0,
          position: "relative",
          transform: "scale(.01)",
        },
        "",
        ""
      ),
    })
  );
}
var FC = function (t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function DC(e) {
  var t = e.isEnabled,
    n = e.onBottomArrive,
    r = e.onBottomLeave,
    o = e.onTopArrive,
    i = e.onTopLeave,
    l = w.useRef(!1),
    a = w.useRef(!1),
    s = w.useRef(0),
    u = w.useRef(null),
    f = w.useCallback(
      function (S, d) {
        if (u.current !== null) {
          var p = u.current,
            g = p.scrollTop,
            C = p.scrollHeight,
            x = p.clientHeight,
            P = u.current,
            E = d > 0,
            R = C - x - g,
            A = !1;
          R > d && l.current && (r && r(S), (l.current = !1)),
            E && a.current && (i && i(S), (a.current = !1)),
            E && d > R
              ? (n && !l.current && n(S),
                (P.scrollTop = C),
                (A = !0),
                (l.current = !0))
              : !E &&
                -d > g &&
                (o && !a.current && o(S),
                (P.scrollTop = 0),
                (A = !0),
                (a.current = !0)),
            A && FC(S);
        }
      },
      [n, r, o, i]
    ),
    c = w.useCallback(
      function (S) {
        f(S, S.deltaY);
      },
      [f]
    ),
    h = w.useCallback(function (S) {
      s.current = S.changedTouches[0].clientY;
    }, []),
    y = w.useCallback(
      function (S) {
        var d = s.current - S.changedTouches[0].clientY;
        f(S, d);
      },
      [f]
    ),
    m = w.useCallback(
      function (S) {
        if (S) {
          var d = rw ? { passive: !1 } : !1;
          S.addEventListener("wheel", c, d),
            S.addEventListener("touchstart", h, d),
            S.addEventListener("touchmove", y, d);
        }
      },
      [y, h, c]
    ),
    v = w.useCallback(
      function (S) {
        S &&
          (S.removeEventListener("wheel", c, !1),
          S.removeEventListener("touchstart", h, !1),
          S.removeEventListener("touchmove", y, !1));
      },
      [y, h, c]
    );
  return (
    w.useEffect(
      function () {
        if (t) {
          var S = u.current;
          return (
            m(S),
            function () {
              v(S);
            }
          );
        }
      },
      [t, m, v]
    ),
    function (S) {
      u.current = S;
    }
  );
}
var Pf = ["boxSizing", "height", "overflow", "paddingRight", "position"],
  Rf = {
    boxSizing: "border-box",
    overflow: "hidden",
    position: "relative",
    height: "100%",
  };
function Tf(e) {
  e.preventDefault();
}
function Lf(e) {
  e.stopPropagation();
}
function If() {
  var e = this.scrollTop,
    t = this.scrollHeight,
    n = e + this.offsetHeight;
  e === 0 ? (this.scrollTop = 1) : n === t && (this.scrollTop = e - 1);
}
function bf() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var Nf = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  mr = 0,
  kn = { capture: !1, passive: !1 };
function AC(e) {
  var t = e.isEnabled,
    n = e.accountForScrollbars,
    r = n === void 0 ? !0 : n,
    o = w.useRef({}),
    i = w.useRef(null),
    l = w.useCallback(
      function (s) {
        if (Nf) {
          var u = document.body,
            f = u && u.style;
          if (
            (r &&
              Pf.forEach(function (m) {
                var v = f && f[m];
                o.current[m] = v;
              }),
            r && mr < 1)
          ) {
            var c = parseInt(o.current.paddingRight, 10) || 0,
              h = document.body ? document.body.clientWidth : 0,
              y = window.innerWidth - h + c || 0;
            Object.keys(Rf).forEach(function (m) {
              var v = Rf[m];
              f && (f[m] = v);
            }),
              f && (f.paddingRight = "".concat(y, "px"));
          }
          u &&
            bf() &&
            (u.addEventListener("touchmove", Tf, kn),
            s &&
              (s.addEventListener("touchstart", If, kn),
              s.addEventListener("touchmove", Lf, kn))),
            (mr += 1);
        }
      },
      [r]
    ),
    a = w.useCallback(
      function (s) {
        if (Nf) {
          var u = document.body,
            f = u && u.style;
          (mr = Math.max(mr - 1, 0)),
            r &&
              mr < 1 &&
              Pf.forEach(function (c) {
                var h = o.current[c];
                f && (f[c] = h);
              }),
            u &&
              bf() &&
              (u.removeEventListener("touchmove", Tf, kn),
              s &&
                (s.removeEventListener("touchstart", If, kn),
                s.removeEventListener("touchmove", Lf, kn)));
        }
      },
      [r]
    );
  return (
    w.useEffect(
      function () {
        if (t) {
          var s = i.current;
          return (
            l(s),
            function () {
              a(s);
            }
          );
        }
      },
      [t, l, a]
    ),
    function (s) {
      i.current = s;
    }
  );
}
var jC = function (t) {
    var n = t.target;
    return (
      n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur()
    );
  },
  VC = {
    name: "1kfdb0e",
    styles: "position:fixed;left:0;bottom:0;right:0;top:0",
  };
function zC(e) {
  var t = e.children,
    n = e.lockEnabled,
    r = e.captureEnabled,
    o = r === void 0 ? !0 : r,
    i = e.onBottomArrive,
    l = e.onBottomLeave,
    a = e.onTopArrive,
    s = e.onTopLeave,
    u = DC({
      isEnabled: o,
      onBottomArrive: i,
      onBottomLeave: l,
      onTopArrive: a,
      onTopLeave: s,
    }),
    f = AC({ isEnabled: n }),
    c = function (y) {
      u(y), f(y);
    };
  return b(w.Fragment, null, n && b("div", { onClick: jC, css: VC }), t(c));
}
var $C = {
    name: "1a0ro4n-requiredInput",
    styles:
      "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%",
  },
  UC = function (t) {
    var n = t.name,
      r = t.onFocus;
    return b("input", {
      required: !0,
      name: n,
      tabIndex: -1,
      "aria-hidden": "true",
      onFocus: r,
      css: $C,
      value: "",
      onChange: function () {},
    });
  },
  BC = UC;
function Lu(e) {
  var t;
  return typeof window < "u" && window.navigator != null
    ? e.test(
        ((t = window.navigator.userAgentData) === null || t === void 0
          ? void 0
          : t.platform) || window.navigator.platform
      )
    : !1;
}
function HC() {
  return Lu(/^iPhone/i);
}
function cm() {
  return Lu(/^Mac/i);
}
function WC() {
  return Lu(/^iPad/i) || (cm() && navigator.maxTouchPoints > 1);
}
function QC() {
  return HC() || WC();
}
function KC() {
  return cm() || QC();
}
var GC = function (t) {
    return t.label;
  },
  YC = function (t) {
    return t.label;
  },
  XC = function (t) {
    return t.value;
  },
  qC = function (t) {
    return !!t.isDisabled;
  },
  JC = {
    clearIndicator: _w,
    container: Ew,
    control: $w,
    dropdownIndicator: Nw,
    group: Ww,
    groupHeading: Kw,
    indicatorsContainer: Rw,
    indicatorSeparator: Dw,
    input: qw,
    loadingIndicator: Vw,
    loadingMessage: yw,
    menu: fw,
    menuList: mw,
    menuPortal: Cw,
    multiValue: nC,
    multiValueLabel: rC,
    multiValueRemove: oC,
    noOptionsMessage: gw,
    option: cC,
    placeholder: pC,
    singleValue: vC,
    valueContainer: Ow,
  },
  ZC = {
    primary: "#2684FF",
    primary75: "#4C9AFF",
    primary50: "#B2D4FF",
    primary25: "#DEEBFF",
    danger: "#DE350B",
    dangerLight: "#FFBDAD",
    neutral0: "hsl(0, 0%, 100%)",
    neutral5: "hsl(0, 0%, 95%)",
    neutral10: "hsl(0, 0%, 90%)",
    neutral20: "hsl(0, 0%, 80%)",
    neutral30: "hsl(0, 0%, 70%)",
    neutral40: "hsl(0, 0%, 60%)",
    neutral50: "hsl(0, 0%, 50%)",
    neutral60: "hsl(0, 0%, 40%)",
    neutral70: "hsl(0, 0%, 30%)",
    neutral80: "hsl(0, 0%, 20%)",
    neutral90: "hsl(0, 0%, 10%)",
  },
  ex = 4,
  fm = 4,
  tx = 38,
  nx = fm * 2,
  rx = { baseUnit: fm, controlHeight: tx, menuGutter: nx },
  ts = { borderRadius: ex, colors: ZC, spacing: rx },
  ox = {
    "aria-live": "polite",
    backspaceRemovesValue: !0,
    blurInputOnSelect: Cf(),
    captureMenuScroll: !Cf(),
    classNames: {},
    closeMenuOnSelect: !0,
    closeMenuOnScroll: !1,
    components: {},
    controlShouldRenderValue: !0,
    escapeClearsValue: !1,
    filterOption: NC(),
    formatGroupLabel: GC,
    getOptionLabel: YC,
    getOptionValue: XC,
    isDisabled: !1,
    isLoading: !1,
    isMulti: !1,
    isRtl: !1,
    isSearchable: !0,
    isOptionDisabled: qC,
    loadingMessage: function () {
      return "Loading...";
    },
    maxMenuHeight: 300,
    minMenuHeight: 140,
    menuIsOpen: !1,
    menuPlacement: "bottom",
    menuPosition: "absolute",
    menuShouldBlockScroll: !1,
    menuShouldScrollIntoView: !tw(),
    noOptionsMessage: function () {
      return "No options";
    },
    openMenuOnFocus: !1,
    openMenuOnClick: !0,
    options: [],
    pageSize: 5,
    placeholder: "Select...",
    screenReaderStatus: function (t) {
      var n = t.count;
      return "".concat(n, " result").concat(n !== 1 ? "s" : "", " available");
    },
    styles: {},
    tabIndex: 0,
    tabSelectsValue: !0,
    unstyled: !1,
  };
function Mf(e, t, n, r) {
  var o = hm(e, t, n),
    i = mm(e, t, n),
    l = pm(e, t),
    a = Fi(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: o,
    isSelected: i,
    label: l,
    value: a,
    index: r,
  };
}
function ei(e, t) {
  return e.options
    .map(function (n, r) {
      if ("options" in n) {
        var o = n.options
          .map(function (l, a) {
            return Mf(e, l, t, a);
          })
          .filter(function (l) {
            return Ff(e, l);
          });
        return o.length > 0
          ? { type: "group", data: n, options: o, index: r }
          : void 0;
      }
      var i = Mf(e, n, t, r);
      return Ff(e, i) ? i : void 0;
    })
    .filter(ow);
}
function dm(e) {
  return e.reduce(function (t, n) {
    return (
      n.type === "group"
        ? t.push.apply(
            t,
            vu(
              n.options.map(function (r) {
                return r.data;
              })
            )
          )
        : t.push(n.data),
      t
    );
  }, []);
}
function _f(e, t) {
  return e.reduce(function (n, r) {
    return (
      r.type === "group"
        ? n.push.apply(
            n,
            vu(
              r.options.map(function (o) {
                return {
                  data: o.data,
                  id: "".concat(t, "-").concat(r.index, "-").concat(o.index),
                };
              })
            )
          )
        : n.push({ data: r.data, id: "".concat(t, "-").concat(r.index) }),
      n
    );
  }, []);
}
function ix(e, t) {
  return dm(ei(e, t));
}
function Ff(e, t) {
  var n = e.inputValue,
    r = n === void 0 ? "" : n,
    o = t.data,
    i = t.isSelected,
    l = t.label,
    a = t.value;
  return (!gm(e) || !i) && vm(e, { label: l, value: a, data: o }, r);
}
function lx(e, t) {
  var n = e.focusedValue,
    r = e.selectValue,
    o = r.indexOf(n);
  if (o > -1) {
    var i = t.indexOf(n);
    if (i > -1) return n;
    if (o < t.length) return t[o];
  }
  return null;
}
function sx(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var ns = function (t, n) {
    var r,
      o =
        (r = t.find(function (i) {
          return i.data === n;
        })) === null || r === void 0
          ? void 0
          : r.id;
    return o || null;
  },
  pm = function (t, n) {
    return t.getOptionLabel(n);
  },
  Fi = function (t, n) {
    return t.getOptionValue(n);
  };
function hm(e, t, n) {
  return typeof e.isOptionDisabled == "function"
    ? e.isOptionDisabled(t, n)
    : !1;
}
function mm(e, t, n) {
  if (n.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function") return e.isOptionSelected(t, n);
  var r = Fi(e, t);
  return n.some(function (o) {
    return Fi(e, o) === r;
  });
}
function vm(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var gm = function (t) {
    var n = t.hideSelectedOptions,
      r = t.isMulti;
    return n === void 0 ? r : n;
  },
  ax = 1,
  ym = (function (e) {
    P1(n, e);
    var t = L1(n);
    function n(r) {
      var o;
      if (
        (k1(this, n),
        (o = t.call(this, r)),
        (o.state = {
          ariaSelection: null,
          focusedOption: null,
          focusedOptionId: null,
          focusableOptionsWithIds: [],
          focusedValue: null,
          inputIsHidden: !1,
          isFocused: !1,
          selectValue: [],
          clearFocusValueOnUpdate: !1,
          prevWasFocused: !1,
          inputIsHiddenAfterUpdate: void 0,
          prevProps: void 0,
          instancePrefix: "",
        }),
        (o.blockOptionHover = !1),
        (o.isComposing = !1),
        (o.commonProps = void 0),
        (o.initialTouchX = 0),
        (o.initialTouchY = 0),
        (o.openAfterFocus = !1),
        (o.scrollToFocusedOptionOnUpdate = !1),
        (o.userIsDragging = void 0),
        (o.isAppleDevice = KC()),
        (o.controlRef = null),
        (o.getControlRef = function (s) {
          o.controlRef = s;
        }),
        (o.focusedOptionRef = null),
        (o.getFocusedOptionRef = function (s) {
          o.focusedOptionRef = s;
        }),
        (o.menuListRef = null),
        (o.getMenuListRef = function (s) {
          o.menuListRef = s;
        }),
        (o.inputRef = null),
        (o.getInputRef = function (s) {
          o.inputRef = s;
        }),
        (o.focus = o.focusInput),
        (o.blur = o.blurInput),
        (o.onChange = function (s, u) {
          var f = o.props,
            c = f.onChange,
            h = f.name;
          (u.name = h), o.ariaOnChange(s, u), c(s, u);
        }),
        (o.setValue = function (s, u, f) {
          var c = o.props,
            h = c.closeMenuOnSelect,
            y = c.isMulti,
            m = c.inputValue;
          o.onInputChange("", { action: "set-value", prevInputValue: m }),
            h &&
              (o.setState({ inputIsHiddenAfterUpdate: !y }), o.onMenuClose()),
            o.setState({ clearFocusValueOnUpdate: !0 }),
            o.onChange(s, { action: u, option: f });
        }),
        (o.selectOption = function (s) {
          var u = o.props,
            f = u.blurInputOnSelect,
            c = u.isMulti,
            h = u.name,
            y = o.state.selectValue,
            m = c && o.isOptionSelected(s, y),
            v = o.isOptionDisabled(s, y);
          if (m) {
            var S = o.getOptionValue(s);
            o.setValue(
              y.filter(function (d) {
                return o.getOptionValue(d) !== S;
              }),
              "deselect-option",
              s
            );
          } else if (!v)
            c
              ? o.setValue([].concat(vu(y), [s]), "select-option", s)
              : o.setValue(s, "select-option");
          else {
            o.ariaOnChange(s, { action: "select-option", option: s, name: h });
            return;
          }
          f && o.blurInput();
        }),
        (o.removeValue = function (s) {
          var u = o.props.isMulti,
            f = o.state.selectValue,
            c = o.getOptionValue(s),
            h = f.filter(function (m) {
              return o.getOptionValue(m) !== c;
            }),
            y = Fo(u, h, h[0] || null);
          o.onChange(y, { action: "remove-value", removedValue: s }),
            o.focusInput();
        }),
        (o.clearValue = function () {
          var s = o.state.selectValue;
          o.onChange(Fo(o.props.isMulti, [], null), {
            action: "clear",
            removedValues: s,
          });
        }),
        (o.popValue = function () {
          var s = o.props.isMulti,
            u = o.state.selectValue,
            f = u[u.length - 1],
            c = u.slice(0, u.length - 1),
            h = Fo(s, c, c[0] || null);
          o.onChange(h, { action: "pop-value", removedValue: f });
        }),
        (o.getFocusedOptionId = function (s) {
          return ns(o.state.focusableOptionsWithIds, s);
        }),
        (o.getFocusableOptionsWithIds = function () {
          return _f(ei(o.props, o.state.selectValue), o.getElementId("option"));
        }),
        (o.getValue = function () {
          return o.state.selectValue;
        }),
        (o.cx = function () {
          for (var s = arguments.length, u = new Array(s), f = 0; f < s; f++)
            u[f] = arguments[f];
          return XS.apply(void 0, [o.props.classNamePrefix].concat(u));
        }),
        (o.getOptionLabel = function (s) {
          return pm(o.props, s);
        }),
        (o.getOptionValue = function (s) {
          return Fi(o.props, s);
        }),
        (o.getStyles = function (s, u) {
          var f = o.props.unstyled,
            c = JC[s](u, f);
          c.boxSizing = "border-box";
          var h = o.props.styles[s];
          return h ? h(c, u) : c;
        }),
        (o.getClassNames = function (s, u) {
          var f, c;
          return (f = (c = o.props.classNames)[s]) === null || f === void 0
            ? void 0
            : f.call(c, u);
        }),
        (o.getElementId = function (s) {
          return "".concat(o.state.instancePrefix, "-").concat(s);
        }),
        (o.getComponents = function () {
          return wC(o.props);
        }),
        (o.buildCategorizedOptions = function () {
          return ei(o.props, o.state.selectValue);
        }),
        (o.getCategorizedOptions = function () {
          return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
        }),
        (o.buildFocusableOptions = function () {
          return dm(o.buildCategorizedOptions());
        }),
        (o.getFocusableOptions = function () {
          return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
        }),
        (o.ariaOnChange = function (s, u) {
          o.setState({ ariaSelection: M({ value: s }, u) });
        }),
        (o.onMenuMouseDown = function (s) {
          s.button === 0 &&
            (s.stopPropagation(), s.preventDefault(), o.focusInput());
        }),
        (o.onMenuMouseMove = function (s) {
          o.blockOptionHover = !1;
        }),
        (o.onControlMouseDown = function (s) {
          if (!s.defaultPrevented) {
            var u = o.props.openMenuOnClick;
            o.state.isFocused
              ? o.props.menuIsOpen
                ? s.target.tagName !== "INPUT" &&
                  s.target.tagName !== "TEXTAREA" &&
                  o.onMenuClose()
                : u && o.openMenu("first")
              : (u && (o.openAfterFocus = !0), o.focusInput()),
              s.target.tagName !== "INPUT" &&
                s.target.tagName !== "TEXTAREA" &&
                s.preventDefault();
          }
        }),
        (o.onDropdownIndicatorMouseDown = function (s) {
          if (
            !(s && s.type === "mousedown" && s.button !== 0) &&
            !o.props.isDisabled
          ) {
            var u = o.props,
              f = u.isMulti,
              c = u.menuIsOpen;
            o.focusInput(),
              c
                ? (o.setState({ inputIsHiddenAfterUpdate: !f }),
                  o.onMenuClose())
                : o.openMenu("first"),
              s.preventDefault();
          }
        }),
        (o.onClearIndicatorMouseDown = function (s) {
          (s && s.type === "mousedown" && s.button !== 0) ||
            (o.clearValue(),
            s.preventDefault(),
            (o.openAfterFocus = !1),
            s.type === "touchend"
              ? o.focusInput()
              : setTimeout(function () {
                  return o.focusInput();
                }));
        }),
        (o.onScroll = function (s) {
          typeof o.props.closeMenuOnScroll == "boolean"
            ? s.target instanceof HTMLElement &&
              gl(s.target) &&
              o.props.onMenuClose()
            : typeof o.props.closeMenuOnScroll == "function" &&
              o.props.closeMenuOnScroll(s) &&
              o.props.onMenuClose();
        }),
        (o.onCompositionStart = function () {
          o.isComposing = !0;
        }),
        (o.onCompositionEnd = function () {
          o.isComposing = !1;
        }),
        (o.onTouchStart = function (s) {
          var u = s.touches,
            f = u && u.item(0);
          f &&
            ((o.initialTouchX = f.clientX),
            (o.initialTouchY = f.clientY),
            (o.userIsDragging = !1));
        }),
        (o.onTouchMove = function (s) {
          var u = s.touches,
            f = u && u.item(0);
          if (f) {
            var c = Math.abs(f.clientX - o.initialTouchX),
              h = Math.abs(f.clientY - o.initialTouchY),
              y = 5;
            o.userIsDragging = c > y || h > y;
          }
        }),
        (o.onTouchEnd = function (s) {
          o.userIsDragging ||
            (o.controlRef &&
              !o.controlRef.contains(s.target) &&
              o.menuListRef &&
              !o.menuListRef.contains(s.target) &&
              o.blurInput(),
            (o.initialTouchX = 0),
            (o.initialTouchY = 0));
        }),
        (o.onControlTouchEnd = function (s) {
          o.userIsDragging || o.onControlMouseDown(s);
        }),
        (o.onClearIndicatorTouchEnd = function (s) {
          o.userIsDragging || o.onClearIndicatorMouseDown(s);
        }),
        (o.onDropdownIndicatorTouchEnd = function (s) {
          o.userIsDragging || o.onDropdownIndicatorMouseDown(s);
        }),
        (o.handleInputChange = function (s) {
          var u = o.props.inputValue,
            f = s.currentTarget.value;
          o.setState({ inputIsHiddenAfterUpdate: !1 }),
            o.onInputChange(f, { action: "input-change", prevInputValue: u }),
            o.props.menuIsOpen || o.onMenuOpen();
        }),
        (o.onInputFocus = function (s) {
          o.props.onFocus && o.props.onFocus(s),
            o.setState({ inputIsHiddenAfterUpdate: !1, isFocused: !0 }),
            (o.openAfterFocus || o.props.openMenuOnFocus) &&
              o.openMenu("first"),
            (o.openAfterFocus = !1);
        }),
        (o.onInputBlur = function (s) {
          var u = o.props.inputValue;
          if (o.menuListRef && o.menuListRef.contains(document.activeElement)) {
            o.inputRef.focus();
            return;
          }
          o.props.onBlur && o.props.onBlur(s),
            o.onInputChange("", { action: "input-blur", prevInputValue: u }),
            o.onMenuClose(),
            o.setState({ focusedValue: null, isFocused: !1 });
        }),
        (o.onOptionHover = function (s) {
          if (!(o.blockOptionHover || o.state.focusedOption === s)) {
            var u = o.getFocusableOptions(),
              f = u.indexOf(s);
            o.setState({
              focusedOption: s,
              focusedOptionId: f > -1 ? o.getFocusedOptionId(s) : null,
            });
          }
        }),
        (o.shouldHideSelectedOptions = function () {
          return gm(o.props);
        }),
        (o.onValueInputFocus = function (s) {
          s.preventDefault(), s.stopPropagation(), o.focus();
        }),
        (o.onKeyDown = function (s) {
          var u = o.props,
            f = u.isMulti,
            c = u.backspaceRemovesValue,
            h = u.escapeClearsValue,
            y = u.inputValue,
            m = u.isClearable,
            v = u.isDisabled,
            S = u.menuIsOpen,
            d = u.onKeyDown,
            p = u.tabSelectsValue,
            g = u.openMenuOnFocus,
            C = o.state,
            x = C.focusedOption,
            P = C.focusedValue,
            E = C.selectValue;
          if (!v && !(typeof d == "function" && (d(s), s.defaultPrevented))) {
            switch (((o.blockOptionHover = !0), s.key)) {
              case "ArrowLeft":
                if (!f || y) return;
                o.focusValue("previous");
                break;
              case "ArrowRight":
                if (!f || y) return;
                o.focusValue("next");
                break;
              case "Delete":
              case "Backspace":
                if (y) return;
                if (P) o.removeValue(P);
                else {
                  if (!c) return;
                  f ? o.popValue() : m && o.clearValue();
                }
                break;
              case "Tab":
                if (
                  o.isComposing ||
                  s.shiftKey ||
                  !S ||
                  !p ||
                  !x ||
                  (g && o.isOptionSelected(x, E))
                )
                  return;
                o.selectOption(x);
                break;
              case "Enter":
                if (s.keyCode === 229) break;
                if (S) {
                  if (!x || o.isComposing) return;
                  o.selectOption(x);
                  break;
                }
                return;
              case "Escape":
                S
                  ? (o.setState({ inputIsHiddenAfterUpdate: !1 }),
                    o.onInputChange("", {
                      action: "menu-close",
                      prevInputValue: y,
                    }),
                    o.onMenuClose())
                  : m && h && o.clearValue();
                break;
              case " ":
                if (y) return;
                if (!S) {
                  o.openMenu("first");
                  break;
                }
                if (!x) return;
                o.selectOption(x);
                break;
              case "ArrowUp":
                S ? o.focusOption("up") : o.openMenu("last");
                break;
              case "ArrowDown":
                S ? o.focusOption("down") : o.openMenu("first");
                break;
              case "PageUp":
                if (!S) return;
                o.focusOption("pageup");
                break;
              case "PageDown":
                if (!S) return;
                o.focusOption("pagedown");
                break;
              case "Home":
                if (!S) return;
                o.focusOption("first");
                break;
              case "End":
                if (!S) return;
                o.focusOption("last");
                break;
              default:
                return;
            }
            s.preventDefault();
          }
        }),
        (o.state.instancePrefix =
          "react-select-" + (o.props.instanceId || ++ax)),
        (o.state.selectValue = Sf(r.value)),
        r.menuIsOpen && o.state.selectValue.length)
      ) {
        var i = o.getFocusableOptionsWithIds(),
          l = o.buildFocusableOptions(),
          a = l.indexOf(o.state.selectValue[0]);
        (o.state.focusableOptionsWithIds = i),
          (o.state.focusedOption = l[a]),
          (o.state.focusedOptionId = ns(i, l[a]));
      }
      return o;
    }
    return (
      O1(
        n,
        [
          {
            key: "componentDidMount",
            value: function () {
              this.startListeningComposition(),
                this.startListeningToTouch(),
                this.props.closeMenuOnScroll &&
                  document &&
                  document.addEventListener &&
                  document.addEventListener("scroll", this.onScroll, !0),
                this.props.autoFocus && this.focusInput(),
                this.props.menuIsOpen &&
                  this.state.focusedOption &&
                  this.menuListRef &&
                  this.focusedOptionRef &&
                  wf(this.menuListRef, this.focusedOptionRef);
            },
          },
          {
            key: "componentDidUpdate",
            value: function (o) {
              var i = this.props,
                l = i.isDisabled,
                a = i.menuIsOpen,
                s = this.state.isFocused;
              ((s && !l && o.isDisabled) || (s && a && !o.menuIsOpen)) &&
                this.focusInput(),
                s && l && !o.isDisabled
                  ? this.setState({ isFocused: !1 }, this.onMenuClose)
                  : !s &&
                    !l &&
                    o.isDisabled &&
                    this.inputRef === document.activeElement &&
                    this.setState({ isFocused: !0 }),
                this.menuListRef &&
                  this.focusedOptionRef &&
                  this.scrollToFocusedOptionOnUpdate &&
                  (wf(this.menuListRef, this.focusedOptionRef),
                  (this.scrollToFocusedOptionOnUpdate = !1));
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.stopListeningComposition(),
                this.stopListeningToTouch(),
                document.removeEventListener("scroll", this.onScroll, !0);
            },
          },
          {
            key: "onMenuOpen",
            value: function () {
              this.props.onMenuOpen();
            },
          },
          {
            key: "onMenuClose",
            value: function () {
              this.onInputChange("", {
                action: "menu-close",
                prevInputValue: this.props.inputValue,
              }),
                this.props.onMenuClose();
            },
          },
          {
            key: "onInputChange",
            value: function (o, i) {
              this.props.onInputChange(o, i);
            },
          },
          {
            key: "focusInput",
            value: function () {
              this.inputRef && this.inputRef.focus();
            },
          },
          {
            key: "blurInput",
            value: function () {
              this.inputRef && this.inputRef.blur();
            },
          },
          {
            key: "openMenu",
            value: function (o) {
              var i = this,
                l = this.state,
                a = l.selectValue,
                s = l.isFocused,
                u = this.buildFocusableOptions(),
                f = o === "first" ? 0 : u.length - 1;
              if (!this.props.isMulti) {
                var c = u.indexOf(a[0]);
                c > -1 && (f = c);
              }
              (this.scrollToFocusedOptionOnUpdate = !(s && this.menuListRef)),
                this.setState(
                  {
                    inputIsHiddenAfterUpdate: !1,
                    focusedValue: null,
                    focusedOption: u[f],
                    focusedOptionId: this.getFocusedOptionId(u[f]),
                  },
                  function () {
                    return i.onMenuOpen();
                  }
                );
            },
          },
          {
            key: "focusValue",
            value: function (o) {
              var i = this.state,
                l = i.selectValue,
                a = i.focusedValue;
              if (this.props.isMulti) {
                this.setState({ focusedOption: null });
                var s = l.indexOf(a);
                a || (s = -1);
                var u = l.length - 1,
                  f = -1;
                if (l.length) {
                  switch (o) {
                    case "previous":
                      s === 0 ? (f = 0) : s === -1 ? (f = u) : (f = s - 1);
                      break;
                    case "next":
                      s > -1 && s < u && (f = s + 1);
                      break;
                  }
                  this.setState({
                    inputIsHidden: f !== -1,
                    focusedValue: l[f],
                  });
                }
              }
            },
          },
          {
            key: "focusOption",
            value: function () {
              var o =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : "first",
                i = this.props.pageSize,
                l = this.state.focusedOption,
                a = this.getFocusableOptions();
              if (a.length) {
                var s = 0,
                  u = a.indexOf(l);
                l || (u = -1),
                  o === "up"
                    ? (s = u > 0 ? u - 1 : a.length - 1)
                    : o === "down"
                    ? (s = (u + 1) % a.length)
                    : o === "pageup"
                    ? ((s = u - i), s < 0 && (s = 0))
                    : o === "pagedown"
                    ? ((s = u + i), s > a.length - 1 && (s = a.length - 1))
                    : o === "last" && (s = a.length - 1),
                  (this.scrollToFocusedOptionOnUpdate = !0),
                  this.setState({
                    focusedOption: a[s],
                    focusedValue: null,
                    focusedOptionId: this.getFocusedOptionId(a[s]),
                  });
              }
            },
          },
          {
            key: "getTheme",
            value: function () {
              return this.props.theme
                ? typeof this.props.theme == "function"
                  ? this.props.theme(ts)
                  : M(M({}, ts), this.props.theme)
                : ts;
            },
          },
          {
            key: "getCommonProps",
            value: function () {
              var o = this.clearValue,
                i = this.cx,
                l = this.getStyles,
                a = this.getClassNames,
                s = this.getValue,
                u = this.selectOption,
                f = this.setValue,
                c = this.props,
                h = c.isMulti,
                y = c.isRtl,
                m = c.options,
                v = this.hasValue();
              return {
                clearValue: o,
                cx: i,
                getStyles: l,
                getClassNames: a,
                getValue: s,
                hasValue: v,
                isMulti: h,
                isRtl: y,
                options: m,
                selectOption: u,
                selectProps: c,
                setValue: f,
                theme: this.getTheme(),
              };
            },
          },
          {
            key: "hasValue",
            value: function () {
              var o = this.state.selectValue;
              return o.length > 0;
            },
          },
          {
            key: "hasOptions",
            value: function () {
              return !!this.getFocusableOptions().length;
            },
          },
          {
            key: "isClearable",
            value: function () {
              var o = this.props,
                i = o.isClearable,
                l = o.isMulti;
              return i === void 0 ? l : i;
            },
          },
          {
            key: "isOptionDisabled",
            value: function (o, i) {
              return hm(this.props, o, i);
            },
          },
          {
            key: "isOptionSelected",
            value: function (o, i) {
              return mm(this.props, o, i);
            },
          },
          {
            key: "filterOption",
            value: function (o, i) {
              return vm(this.props, o, i);
            },
          },
          {
            key: "formatOptionLabel",
            value: function (o, i) {
              if (typeof this.props.formatOptionLabel == "function") {
                var l = this.props.inputValue,
                  a = this.state.selectValue;
                return this.props.formatOptionLabel(o, {
                  context: i,
                  inputValue: l,
                  selectValue: a,
                });
              } else return this.getOptionLabel(o);
            },
          },
          {
            key: "formatGroupLabel",
            value: function (o) {
              return this.props.formatGroupLabel(o);
            },
          },
          {
            key: "startListeningComposition",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener(
                  "compositionstart",
                  this.onCompositionStart,
                  !1
                ),
                document.addEventListener(
                  "compositionend",
                  this.onCompositionEnd,
                  !1
                ));
            },
          },
          {
            key: "stopListeningComposition",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener(
                  "compositionstart",
                  this.onCompositionStart
                ),
                document.removeEventListener(
                  "compositionend",
                  this.onCompositionEnd
                ));
            },
          },
          {
            key: "startListeningToTouch",
            value: function () {
              document &&
                document.addEventListener &&
                (document.addEventListener("touchstart", this.onTouchStart, !1),
                document.addEventListener("touchmove", this.onTouchMove, !1),
                document.addEventListener("touchend", this.onTouchEnd, !1));
            },
          },
          {
            key: "stopListeningToTouch",
            value: function () {
              document &&
                document.removeEventListener &&
                (document.removeEventListener("touchstart", this.onTouchStart),
                document.removeEventListener("touchmove", this.onTouchMove),
                document.removeEventListener("touchend", this.onTouchEnd));
            },
          },
          {
            key: "renderInput",
            value: function () {
              var o = this.props,
                i = o.isDisabled,
                l = o.isSearchable,
                a = o.inputId,
                s = o.inputValue,
                u = o.tabIndex,
                f = o.form,
                c = o.menuIsOpen,
                h = o.required,
                y = this.getComponents(),
                m = y.Input,
                v = this.state,
                S = v.inputIsHidden,
                d = v.ariaSelection,
                p = this.commonProps,
                g = a || this.getElementId("input"),
                C = M(
                  M(
                    M(
                      {
                        "aria-autocomplete": "list",
                        "aria-expanded": c,
                        "aria-haspopup": !0,
                        "aria-errormessage": this.props["aria-errormessage"],
                        "aria-invalid": this.props["aria-invalid"],
                        "aria-label": this.props["aria-label"],
                        "aria-labelledby": this.props["aria-labelledby"],
                        "aria-required": h,
                        role: "combobox",
                        "aria-activedescendant": this.isAppleDevice
                          ? void 0
                          : this.state.focusedOptionId || "",
                      },
                      c && { "aria-controls": this.getElementId("listbox") }
                    ),
                    !l && { "aria-readonly": !0 }
                  ),
                  this.hasValue()
                    ? (d == null ? void 0 : d.action) ===
                        "initial-input-focus" && {
                        "aria-describedby": this.getElementId("live-region"),
                      }
                    : { "aria-describedby": this.getElementId("placeholder") }
                );
              return l
                ? w.createElement(
                    m,
                    F(
                      {},
                      p,
                      {
                        autoCapitalize: "none",
                        autoComplete: "off",
                        autoCorrect: "off",
                        id: g,
                        innerRef: this.getInputRef,
                        isDisabled: i,
                        isHidden: S,
                        onBlur: this.onInputBlur,
                        onChange: this.handleInputChange,
                        onFocus: this.onInputFocus,
                        spellCheck: "false",
                        tabIndex: u,
                        form: f,
                        type: "text",
                        value: s,
                      },
                      C
                    )
                  )
                : w.createElement(
                    _C,
                    F(
                      {
                        id: g,
                        innerRef: this.getInputRef,
                        onBlur: this.onInputBlur,
                        onChange: Mi,
                        onFocus: this.onInputFocus,
                        disabled: i,
                        tabIndex: u,
                        inputMode: "none",
                        form: f,
                        value: "",
                      },
                      C
                    )
                  );
            },
          },
          {
            key: "renderPlaceholderOrValue",
            value: function () {
              var o = this,
                i = this.getComponents(),
                l = i.MultiValue,
                a = i.MultiValueContainer,
                s = i.MultiValueLabel,
                u = i.MultiValueRemove,
                f = i.SingleValue,
                c = i.Placeholder,
                h = this.commonProps,
                y = this.props,
                m = y.controlShouldRenderValue,
                v = y.isDisabled,
                S = y.isMulti,
                d = y.inputValue,
                p = y.placeholder,
                g = this.state,
                C = g.selectValue,
                x = g.focusedValue,
                P = g.isFocused;
              if (!this.hasValue() || !m)
                return d
                  ? null
                  : w.createElement(
                      c,
                      F({}, h, {
                        key: "placeholder",
                        isDisabled: v,
                        isFocused: P,
                        innerProps: { id: this.getElementId("placeholder") },
                      }),
                      p
                    );
              if (S)
                return C.map(function (R, A) {
                  var N = R === x,
                    K = ""
                      .concat(o.getOptionLabel(R), "-")
                      .concat(o.getOptionValue(R));
                  return w.createElement(
                    l,
                    F({}, h, {
                      components: { Container: a, Label: s, Remove: u },
                      isFocused: N,
                      isDisabled: v,
                      key: K,
                      index: A,
                      removeProps: {
                        onClick: function () {
                          return o.removeValue(R);
                        },
                        onTouchEnd: function () {
                          return o.removeValue(R);
                        },
                        onMouseDown: function (Te) {
                          Te.preventDefault();
                        },
                      },
                      data: R,
                    }),
                    o.formatOptionLabel(R, "value")
                  );
                });
              if (d) return null;
              var E = C[0];
              return w.createElement(
                f,
                F({}, h, { data: E, isDisabled: v }),
                this.formatOptionLabel(E, "value")
              );
            },
          },
          {
            key: "renderClearIndicator",
            value: function () {
              var o = this.getComponents(),
                i = o.ClearIndicator,
                l = this.commonProps,
                a = this.props,
                s = a.isDisabled,
                u = a.isLoading,
                f = this.state.isFocused;
              if (!this.isClearable() || !i || s || !this.hasValue() || u)
                return null;
              var c = {
                onMouseDown: this.onClearIndicatorMouseDown,
                onTouchEnd: this.onClearIndicatorTouchEnd,
                "aria-hidden": "true",
              };
              return w.createElement(
                i,
                F({}, l, { innerProps: c, isFocused: f })
              );
            },
          },
          {
            key: "renderLoadingIndicator",
            value: function () {
              var o = this.getComponents(),
                i = o.LoadingIndicator,
                l = this.commonProps,
                a = this.props,
                s = a.isDisabled,
                u = a.isLoading,
                f = this.state.isFocused;
              if (!i || !u) return null;
              var c = { "aria-hidden": "true" };
              return w.createElement(
                i,
                F({}, l, { innerProps: c, isDisabled: s, isFocused: f })
              );
            },
          },
          {
            key: "renderIndicatorSeparator",
            value: function () {
              var o = this.getComponents(),
                i = o.DropdownIndicator,
                l = o.IndicatorSeparator;
              if (!i || !l) return null;
              var a = this.commonProps,
                s = this.props.isDisabled,
                u = this.state.isFocused;
              return w.createElement(
                l,
                F({}, a, { isDisabled: s, isFocused: u })
              );
            },
          },
          {
            key: "renderDropdownIndicator",
            value: function () {
              var o = this.getComponents(),
                i = o.DropdownIndicator;
              if (!i) return null;
              var l = this.commonProps,
                a = this.props.isDisabled,
                s = this.state.isFocused,
                u = {
                  onMouseDown: this.onDropdownIndicatorMouseDown,
                  onTouchEnd: this.onDropdownIndicatorTouchEnd,
                  "aria-hidden": "true",
                };
              return w.createElement(
                i,
                F({}, l, { innerProps: u, isDisabled: a, isFocused: s })
              );
            },
          },
          {
            key: "renderMenu",
            value: function () {
              var o = this,
                i = this.getComponents(),
                l = i.Group,
                a = i.GroupHeading,
                s = i.Menu,
                u = i.MenuList,
                f = i.MenuPortal,
                c = i.LoadingMessage,
                h = i.NoOptionsMessage,
                y = i.Option,
                m = this.commonProps,
                v = this.state.focusedOption,
                S = this.props,
                d = S.captureMenuScroll,
                p = S.inputValue,
                g = S.isLoading,
                C = S.loadingMessage,
                x = S.minMenuHeight,
                P = S.maxMenuHeight,
                E = S.menuIsOpen,
                R = S.menuPlacement,
                A = S.menuPosition,
                N = S.menuPortalTarget,
                K = S.menuShouldBlockScroll,
                re = S.menuShouldScrollIntoView,
                Te = S.noOptionsMessage,
                Ye = S.onMenuScrollToTop,
                se = S.onMenuScrollToBottom;
              if (!E) return null;
              var Z = function (he, ye) {
                  var Xe = he.type,
                    fe = he.data,
                    ze = he.isDisabled,
                    xt = he.isSelected,
                    po = he.label,
                    wm = he.value,
                    Iu = v === fe,
                    bu = ze
                      ? void 0
                      : function () {
                          return o.onOptionHover(fe);
                        },
                    Cm = ze
                      ? void 0
                      : function () {
                          return o.selectOption(fe);
                        },
                    Nu = "".concat(o.getElementId("option"), "-").concat(ye),
                    xm = {
                      id: Nu,
                      onClick: Cm,
                      onMouseMove: bu,
                      onMouseOver: bu,
                      tabIndex: -1,
                      role: "option",
                      "aria-selected": o.isAppleDevice ? void 0 : xt,
                    };
                  return w.createElement(
                    y,
                    F({}, m, {
                      innerProps: xm,
                      data: fe,
                      isDisabled: ze,
                      isSelected: xt,
                      key: Nu,
                      label: po,
                      type: Xe,
                      value: wm,
                      isFocused: Iu,
                      innerRef: Iu ? o.getFocusedOptionRef : void 0,
                    }),
                    o.formatOptionLabel(he.data, "menu")
                  );
                },
                Me;
              if (this.hasOptions())
                Me = this.getCategorizedOptions().map(function (j) {
                  if (j.type === "group") {
                    var he = j.data,
                      ye = j.options,
                      Xe = j.index,
                      fe = "".concat(o.getElementId("group"), "-").concat(Xe),
                      ze = "".concat(fe, "-heading");
                    return w.createElement(
                      l,
                      F({}, m, {
                        key: fe,
                        data: he,
                        options: ye,
                        Heading: a,
                        headingProps: { id: ze, data: j.data },
                        label: o.formatGroupLabel(j.data),
                      }),
                      j.options.map(function (xt) {
                        return Z(xt, "".concat(Xe, "-").concat(xt.index));
                      })
                    );
                  } else if (j.type === "option")
                    return Z(j, "".concat(j.index));
                });
              else if (g) {
                var L = C({ inputValue: p });
                if (L === null) return null;
                Me = w.createElement(c, m, L);
              } else {
                var _ = Te({ inputValue: p });
                if (_ === null) return null;
                Me = w.createElement(h, m, _);
              }
              var D = {
                  minMenuHeight: x,
                  maxMenuHeight: P,
                  menuPlacement: R,
                  menuPosition: A,
                  menuShouldScrollIntoView: re,
                },
                G = w.createElement(dw, F({}, m, D), function (j) {
                  var he = j.ref,
                    ye = j.placerProps,
                    Xe = ye.placement,
                    fe = ye.maxHeight;
                  return w.createElement(
                    s,
                    F({}, m, D, {
                      innerRef: he,
                      innerProps: {
                        onMouseDown: o.onMenuMouseDown,
                        onMouseMove: o.onMenuMouseMove,
                      },
                      isLoading: g,
                      placement: Xe,
                    }),
                    w.createElement(
                      zC,
                      {
                        captureEnabled: d,
                        onTopArrive: Ye,
                        onBottomArrive: se,
                        lockEnabled: K,
                      },
                      function (ze) {
                        return w.createElement(
                          u,
                          F({}, m, {
                            innerRef: function (po) {
                              o.getMenuListRef(po), ze(po);
                            },
                            innerProps: {
                              role: "listbox",
                              "aria-multiselectable": m.isMulti,
                              id: o.getElementId("listbox"),
                            },
                            isLoading: g,
                            maxHeight: fe,
                            focusedOption: v,
                          }),
                          Me
                        );
                      }
                    )
                  );
                });
              return N || A === "fixed"
                ? w.createElement(
                    f,
                    F({}, m, {
                      appendTo: N,
                      controlElement: this.controlRef,
                      menuPlacement: R,
                      menuPosition: A,
                    }),
                    G
                  )
                : G;
            },
          },
          {
            key: "renderFormField",
            value: function () {
              var o = this,
                i = this.props,
                l = i.delimiter,
                a = i.isDisabled,
                s = i.isMulti,
                u = i.name,
                f = i.required,
                c = this.state.selectValue;
              if (f && !this.hasValue() && !a)
                return w.createElement(BC, {
                  name: u,
                  onFocus: this.onValueInputFocus,
                });
              if (!(!u || a))
                if (s)
                  if (l) {
                    var h = c
                      .map(function (v) {
                        return o.getOptionValue(v);
                      })
                      .join(l);
                    return w.createElement("input", {
                      name: u,
                      type: "hidden",
                      value: h,
                    });
                  } else {
                    var y =
                      c.length > 0
                        ? c.map(function (v, S) {
                            return w.createElement("input", {
                              key: "i-".concat(S),
                              name: u,
                              type: "hidden",
                              value: o.getOptionValue(v),
                            });
                          })
                        : w.createElement("input", {
                            name: u,
                            type: "hidden",
                            value: "",
                          });
                    return w.createElement("div", null, y);
                  }
                else {
                  var m = c[0] ? this.getOptionValue(c[0]) : "";
                  return w.createElement("input", {
                    name: u,
                    type: "hidden",
                    value: m,
                  });
                }
            },
          },
          {
            key: "renderLiveRegion",
            value: function () {
              var o = this.commonProps,
                i = this.state,
                l = i.ariaSelection,
                a = i.focusedOption,
                s = i.focusedValue,
                u = i.isFocused,
                f = i.selectValue,
                c = this.getFocusableOptions();
              return w.createElement(
                TC,
                F({}, o, {
                  id: this.getElementId("live-region"),
                  ariaSelection: l,
                  focusedOption: a,
                  focusedValue: s,
                  isFocused: u,
                  selectValue: f,
                  focusableOptions: c,
                  isAppleDevice: this.isAppleDevice,
                })
              );
            },
          },
          {
            key: "render",
            value: function () {
              var o = this.getComponents(),
                i = o.Control,
                l = o.IndicatorsContainer,
                a = o.SelectContainer,
                s = o.ValueContainer,
                u = this.props,
                f = u.className,
                c = u.id,
                h = u.isDisabled,
                y = u.menuIsOpen,
                m = this.state.isFocused,
                v = (this.commonProps = this.getCommonProps());
              return w.createElement(
                a,
                F({}, v, {
                  className: f,
                  innerProps: { id: c, onKeyDown: this.onKeyDown },
                  isDisabled: h,
                  isFocused: m,
                }),
                this.renderLiveRegion(),
                w.createElement(
                  i,
                  F({}, v, {
                    innerRef: this.getControlRef,
                    innerProps: {
                      onMouseDown: this.onControlMouseDown,
                      onTouchEnd: this.onControlTouchEnd,
                    },
                    isDisabled: h,
                    isFocused: m,
                    menuIsOpen: y,
                  }),
                  w.createElement(
                    s,
                    F({}, v, { isDisabled: h }),
                    this.renderPlaceholderOrValue(),
                    this.renderInput()
                  ),
                  w.createElement(
                    l,
                    F({}, v, { isDisabled: h }),
                    this.renderClearIndicator(),
                    this.renderLoadingIndicator(),
                    this.renderIndicatorSeparator(),
                    this.renderDropdownIndicator()
                  )
                ),
                this.renderMenu(),
                this.renderFormField()
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (o, i) {
              var l = i.prevProps,
                a = i.clearFocusValueOnUpdate,
                s = i.inputIsHiddenAfterUpdate,
                u = i.ariaSelection,
                f = i.isFocused,
                c = i.prevWasFocused,
                h = i.instancePrefix,
                y = o.options,
                m = o.value,
                v = o.menuIsOpen,
                S = o.inputValue,
                d = o.isMulti,
                p = Sf(m),
                g = {};
              if (
                l &&
                (m !== l.value ||
                  y !== l.options ||
                  v !== l.menuIsOpen ||
                  S !== l.inputValue)
              ) {
                var C = v ? ix(o, p) : [],
                  x = v ? _f(ei(o, p), "".concat(h, "-option")) : [],
                  P = a ? lx(i, p) : null,
                  E = sx(i, C),
                  R = ns(x, E);
                g = {
                  selectValue: p,
                  focusedOption: E,
                  focusedOptionId: R,
                  focusableOptionsWithIds: x,
                  focusedValue: P,
                  clearFocusValueOnUpdate: !1,
                };
              }
              var A =
                  s != null && o !== l
                    ? { inputIsHidden: s, inputIsHiddenAfterUpdate: void 0 }
                    : {},
                N = u,
                K = f && c;
              return (
                f &&
                  !K &&
                  ((N = {
                    value: Fo(d, p, p[0] || null),
                    options: p,
                    action: "initial-input-focus",
                  }),
                  (K = !c)),
                (u == null ? void 0 : u.action) === "initial-input-focus" &&
                  (N = null),
                M(
                  M(M({}, g), A),
                  {},
                  { prevProps: o, ariaSelection: N, prevWasFocused: K }
                )
              );
            },
          },
        ]
      ),
      n
    );
  })(w.Component);
ym.defaultProps = ox;
var ux = w.forwardRef(function (e, t) {
    var n = E1(e);
    return w.createElement(ym, F({ ref: t }, n));
  }),
  cx = ux;
function Sm({ changeHandler: e }) {
  const t = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "french", label: "French" },
    { value: "russian", label: "Russian" },
    { value: "chinese", label: "Chinese" },
  ];
  return O.jsxs("div", {
    className: "select-language",
    children: [
      O.jsx("span", { children: "Select Language" }),
      " ",
      O.jsx(cx, {
        placeholder: "Select Language",
        options: t,
        onChange: e,
        defaultValue: "english",
        styles: { container: (n) => ({ ...n, width: "20rem" }) },
      }),
    ],
  });
}
function fx() {
  const [e, t] = w.useState(""),
    [n, r] = w.useState(null);
  function o(i) {
    t(i.value);
  }
  return (
    w.useEffect(() => {
      e &&
        H.get("api/leaderboard", { params: { language: e } }).then((i) => {
          i.data.sort((l, a) => l.score < a.score), r(i.data);
        });
    }, [e]),
    O.jsxs("div", {
      className: "leaderboard",
      children: [
        O.jsx("div", {
          style: { textDecoration: "underline" },
          children: "Leaderboard",
        }),
        O.jsx(Sm, { changeHandler: o }),
        O.jsxs("div", {
          className: "leaderboard-list",
          children: [
            O.jsxs("div", {
              style: { borderBottom: "1px solid black" },
              children: [
                O.jsx("div", { children: "Username" }),
                O.jsx("div", { children: "Score" }),
              ],
            }),
            n && n.length
              ? n.map((i, l) =>
                  O.jsxs(
                    "div",
                    {
                      children: [
                        O.jsx("div", { children: i.username }),
                        O.jsx("div", { children: i.score }),
                      ],
                    },
                    l
                  )
                )
              : "Empty List",
          ],
        }),
      ],
    })
  );
}
function dx() {
  const [e, t] = w.useState(""),
    [n, r] = w.useState(null),
    o = uo();
  function i(a) {
    t(a.value);
  }
  function l() {
    H.get("/api/user/details/reset", { params: { language: e } }).then((a) => {
      r(a.data);
    });
  }
  return (
    w.useEffect(() => {
      e &&
        H.get("/api/user/details", { params: { language: e } })
          .then((a) => {
            r(a.data);
          })
          .catch(() => {
            console.log("cannot fetch language details");
          });
    }, [e]),
    O.jsxs("div", {
      className: "playground",
      children: [
        O.jsx(Sm, { changeHandler: i }),
        n
          ? O.jsxs("div", {
              className: "progress-details",
              children: [
                O.jsxs("div", { children: ["Score: ", n.score] }),
                O.jsxs("div", {
                  children: ["Level: ", Math.floor(n.score / 20) + 1],
                }),
                O.jsxs("div", {
                  children: [
                    "Questions Solved:",
                    " ",
                    n.progress[0] + n.progress[1] + n.progress[2],
                    " ",
                  ],
                }),
                O.jsxs("div", { children: ["Win Streak: ", n.winStreak] }),
                O.jsxs("div", { children: ["Loss Streak: ", n.loseStreak] }),
                O.jsxs("div", {
                  className: "controls",
                  children: [
                    O.jsx("div", {
                      className: "play-button",
                      onClick: () => {
                        e && o(`/play/quiz?language=${e}`);
                      },
                      children: "Start Playing",
                    }),
                    " ",
                    O.jsx("div", {
                      className: "play-button",
                      onClick: l,
                      children: "Reset",
                    }),
                  ],
                }),
              ],
            })
          : null,
      ],
    })
  );
}
const fo = w.createContext(),
  px = () => {
    const [e, t] = w.useState(window.localStorage.languageGameToken),
      [n, r] = w.useState(""),
      o = uo();
    return (
      (H.defaults.baseURL = "https://lango.iusecookies64.xyz"),
      (H.defaults.headers.common.authorization = e),
      (H.defaults.headers.post["Content-Type"] = "application/json"),
      (H.defaults.headers.get["Content-Type"] =
        "application/x-www-form-urlencoded"),
      w.useEffect(() => {
        e
          ? H.get("/api/users/verifyToken")
              .then((i) => {
                r(i.data.username);
              })
              .catch(() => {
                (window.localStorage.languageGameToken = ""), t(""), o("/");
              })
          : o("/");
      }, []),
      O.jsx(fo.Provider, {
        value: { token: e, setToken: t, username: n, setUsername: r },
        children: O.jsxs("div", {
          className: "app",
          children: [
            O.jsx(p1, {}),
            O.jsxs(e1, {
              children: [
                O.jsx(wr, { path: "/", element: O.jsx(c1, {}) }),
                O.jsx(wr, { path: "/play", element: O.jsx(dx, {}) }),
                O.jsx(wr, { path: "/leaderboard", element: O.jsx(fx, {}) }),
                O.jsx(wr, { path: "/play/quiz", element: O.jsx(m1, {}) }),
              ],
            }),
          ],
        }),
      })
    );
  };
os.createRoot(document.getElementById("root")).render(
  O.jsx(Wf.StrictMode, { children: O.jsx(l1, { children: O.jsx(px, {}) }) })
);
