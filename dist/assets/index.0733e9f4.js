var L1 = Object.defineProperty,
  R1 = Object.defineProperties
var N1 = Object.getOwnPropertyDescriptors
var Ds = Object.getOwnPropertySymbols
var wh = Object.prototype.hasOwnProperty,
  Sh = Object.prototype.propertyIsEnumerable
var bh = (e, t, n) =>
    t in e ? L1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  te = (e, t) => {
    for (var n in t || (t = {})) wh.call(t, n) && bh(e, n, t[n])
    if (Ds) for (var n of Ds(t)) Sh.call(t, n) && bh(e, n, t[n])
    return e
  },
  Be = (e, t) => R1(e, N1(t))
var zs = (e, t) => {
  var n = {}
  for (var i in e) wh.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i])
  if (e != null && Ds) for (var i of Ds(e)) t.indexOf(i) < 0 && Sh.call(e, i) && (n[i] = e[i])
  return n
}
const D1 = function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r)
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === 'childList')
        for (const s of o.addedNodes) s.tagName === 'LINK' && s.rel === 'modulepreload' && i(s)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(r) {
    const o = {}
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerpolicy && (o.referrerPolicy = r.referrerpolicy),
      r.crossorigin === 'use-credentials'
        ? (o.credentials = 'include')
        : r.crossorigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function i(r) {
    if (r.ep) return
    r.ep = !0
    const o = n(r)
    fetch(r.href, o)
  }
}
D1()
var R = { exports: {} },
  ae = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _s = Symbol.for('react.element'),
  z1 = Symbol.for('react.portal'),
  I1 = Symbol.for('react.fragment'),
  A1 = Symbol.for('react.strict_mode'),
  F1 = Symbol.for('react.profiler'),
  j1 = Symbol.for('react.provider'),
  B1 = Symbol.for('react.context'),
  $1 = Symbol.for('react.forward_ref'),
  H1 = Symbol.for('react.suspense'),
  W1 = Symbol.for('react.memo'),
  V1 = Symbol.for('react.lazy'),
  kh = Symbol.iterator
function U1(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (kh && e[kh]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var ym = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  },
  vm = Object.assign,
  _m = {}
function Xr(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = _m), (this.updater = n || ym)
}
Xr.prototype.isReactComponent = {}
Xr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Xr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function xm() {}
xm.prototype = Xr.prototype
function Dd(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = _m), (this.updater = n || ym)
}
var zd = (Dd.prototype = new xm())
zd.constructor = Dd
vm(zd, Xr.prototype)
zd.isPureReactComponent = !0
var Ch = Array.isArray,
  bm = Object.prototype.hasOwnProperty,
  Id = { current: null },
  wm = { key: !0, ref: !0, __self: !0, __source: !0 }
function Sm(e, t, n) {
  var i,
    r = {},
    o = null,
    s = null
  if (t != null)
    for (i in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = '' + t.key), t))
      bm.call(t, i) && !wm.hasOwnProperty(i) && (r[i] = t[i])
  var a = arguments.length - 2
  if (a === 1) r.children = n
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2]
    r.children = l
  }
  if (e && e.defaultProps) for (i in ((a = e.defaultProps), a)) r[i] === void 0 && (r[i] = a[i])
  return { $$typeof: _s, type: e, key: o, ref: s, props: r, _owner: Id.current }
}
function q1(e, t) {
  return { $$typeof: _s, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
}
function Ad(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === _s
}
function Y1(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Eh = /\/+/g
function wu(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? Y1('' + e.key) : t.toString(36)
}
function _a(e, t, n, i, r) {
  var o = typeof e
  ;(o === 'undefined' || o === 'boolean') && (e = null)
  var s = !1
  if (e === null) s = !0
  else
    switch (o) {
      case 'string':
      case 'number':
        s = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case _s:
          case z1:
            s = !0
        }
    }
  if (s)
    return (
      (s = e),
      (r = r(s)),
      (e = i === '' ? '.' + wu(s, 0) : i),
      Ch(r)
        ? ((n = ''),
          e != null && (n = e.replace(Eh, '$&/') + '/'),
          _a(r, t, n, '', function (u) {
            return u
          }))
        : r != null &&
          (Ad(r) &&
            (r = q1(
              r,
              n +
                (!r.key || (s && s.key === r.key) ? '' : ('' + r.key).replace(Eh, '$&/') + '/') +
                e
            )),
          t.push(r)),
      1
    )
  if (((s = 0), (i = i === '' ? '.' : i + ':'), Ch(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a]
      var l = i + wu(o, a)
      s += _a(o, t, n, l, r)
    }
  else if (((l = U1(e)), typeof l == 'function'))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = i + wu(o, a++)), (s += _a(o, t, n, l, r))
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    )
  return s
}
function Is(e, t, n) {
  if (e == null) return e
  var i = [],
    r = 0
  return (
    _a(e, i, '', '', function (o) {
      return t.call(n, o, r++)
    }),
    i
  )
}
function Q1(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Mt = { current: null },
  xa = { transition: null },
  X1 = { ReactCurrentDispatcher: Mt, ReactCurrentBatchConfig: xa, ReactCurrentOwner: Id }
ae.Children = {
  map: Is,
  forEach: function (e, t, n) {
    Is(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      Is(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Is(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Ad(e)) throw Error('React.Children.only expected to receive a single React element child.')
    return e
  }
}
ae.Component = Xr
ae.Fragment = I1
ae.Profiler = F1
ae.PureComponent = Dd
ae.StrictMode = A1
ae.Suspense = H1
ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X1
ae.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.'
    )
  var i = vm({}, e.props),
    r = e.key,
    o = e.ref,
    s = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Id.current)),
      t.key !== void 0 && (r = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps
    for (l in t)
      bm.call(t, l) &&
        !wm.hasOwnProperty(l) &&
        (i[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
  }
  var l = arguments.length - 2
  if (l === 1) i.children = n
  else if (1 < l) {
    a = Array(l)
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2]
    i.children = a
  }
  return { $$typeof: _s, type: e.type, key: r, ref: o, props: i, _owner: s }
}
ae.createContext = function (e) {
  return (
    (e = {
      $$typeof: B1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null
    }),
    (e.Provider = { $$typeof: j1, _context: e }),
    (e.Consumer = e)
  )
}
ae.createElement = Sm
ae.createFactory = function (e) {
  var t = Sm.bind(null, e)
  return (t.type = e), t
}
ae.createRef = function () {
  return { current: null }
}
ae.forwardRef = function (e) {
  return { $$typeof: $1, render: e }
}
ae.isValidElement = Ad
ae.lazy = function (e) {
  return { $$typeof: V1, _payload: { _status: -1, _result: e }, _init: Q1 }
}
ae.memo = function (e, t) {
  return { $$typeof: W1, type: e, compare: t === void 0 ? null : t }
}
ae.startTransition = function (e) {
  var t = xa.transition
  xa.transition = {}
  try {
    e()
  } finally {
    xa.transition = t
  }
}
ae.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.')
}
ae.useCallback = function (e, t) {
  return Mt.current.useCallback(e, t)
}
ae.useContext = function (e) {
  return Mt.current.useContext(e)
}
ae.useDebugValue = function () {}
ae.useDeferredValue = function (e) {
  return Mt.current.useDeferredValue(e)
}
ae.useEffect = function (e, t) {
  return Mt.current.useEffect(e, t)
}
ae.useId = function () {
  return Mt.current.useId()
}
ae.useImperativeHandle = function (e, t, n) {
  return Mt.current.useImperativeHandle(e, t, n)
}
ae.useInsertionEffect = function (e, t) {
  return Mt.current.useInsertionEffect(e, t)
}
ae.useLayoutEffect = function (e, t) {
  return Mt.current.useLayoutEffect(e, t)
}
ae.useMemo = function (e, t) {
  return Mt.current.useMemo(e, t)
}
ae.useReducer = function (e, t, n) {
  return Mt.current.useReducer(e, t, n)
}
ae.useRef = function (e) {
  return Mt.current.useRef(e)
}
ae.useState = function (e) {
  return Mt.current.useState(e)
}
ae.useSyncExternalStore = function (e, t, n) {
  return Mt.current.useSyncExternalStore(e, t, n)
}
ae.useTransition = function () {
  return Mt.current.useTransition()
}
ae.version = '18.0.0-fc46dba67-20220329'
R.exports = ae
var oe = R.exports,
  Sc = {},
  Fd = { exports: {} },
  Vt = {},
  km = { exports: {} },
  Cm = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(C, M) {
    var D = C.length
    C.push(M)
    e: for (; 0 < D; ) {
      var W = (D - 1) >>> 1,
        F = C[W]
      if (0 < r(F, M)) (C[W] = M), (C[D] = F), (D = W)
      else break e
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0]
  }
  function i(C) {
    if (C.length === 0) return null
    var M = C[0],
      D = C.pop()
    if (D !== M) {
      C[0] = D
      e: for (var W = 0, F = C.length, de = F >>> 1; W < de; ) {
        var me = 2 * (W + 1) - 1,
          Ke = C[me],
          We = me + 1,
          E = C[We]
        if (0 > r(Ke, D))
          We < F && 0 > r(E, Ke)
            ? ((C[W] = E), (C[We] = D), (W = We))
            : ((C[W] = Ke), (C[me] = D), (W = me))
        else if (We < F && 0 > r(E, D)) (C[W] = E), (C[We] = D), (W = We)
        else break e
      }
    }
    return M
  }
  function r(C, M) {
    var D = C.sortIndex - M.sortIndex
    return D !== 0 ? D : C.id - M.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var s = Date,
      a = s.now()
    e.unstable_now = function () {
      return s.now() - a
    }
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    p = !1,
    y = !1,
    _ = typeof setTimeout == 'function' ? setTimeout : null,
    g = typeof clearTimeout == 'function' ? clearTimeout : null,
    m = typeof setImmediate != 'undefined' ? setImmediate : null
  typeof navigator != 'undefined' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function v(C) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) i(u)
      else if (M.startTime <= C) i(u), (M.sortIndex = M.expirationTime), t(l, M)
      else break
      M = n(u)
    }
  }
  function x(C) {
    if (((y = !1), v(C), !p))
      if (n(l) !== null) (p = !0), X(b)
      else {
        var M = n(u)
        M !== null && ue(x, M.startTime - C)
      }
  }
  function b(C, M) {
    ;(p = !1), y && ((y = !1), g(P), (P = -1)), (h = !0)
    var D = f
    try {
      for (v(M), d = n(l); d !== null && (!(d.expirationTime > M) || (C && !N())); ) {
        var W = d.callback
        if (typeof W == 'function') {
          ;(d.callback = null), (f = d.priorityLevel)
          var F = W(d.expirationTime <= M)
          ;(M = e.unstable_now()),
            typeof F == 'function' ? (d.callback = F) : d === n(l) && i(l),
            v(M)
        } else i(l)
        d = n(l)
      }
      if (d !== null) var de = !0
      else {
        var me = n(u)
        me !== null && ue(x, me.startTime - M), (de = !1)
      }
      return de
    } finally {
      ;(d = null), (f = D), (h = !1)
    }
  }
  var O = !1,
    k = null,
    P = -1,
    L = 5,
    I = -1
  function N() {
    return !(e.unstable_now() - I < L)
  }
  function Y() {
    if (k !== null) {
      var C = e.unstable_now()
      I = C
      var M = !0
      try {
        M = k(!0, C)
      } finally {
        M ? S() : ((O = !1), (k = null))
      }
    } else O = !1
  }
  var S
  if (typeof m == 'function')
    S = function () {
      m(Y)
    }
  else if (typeof MessageChannel != 'undefined') {
    var Z = new MessageChannel(),
      Q = Z.port2
    ;(Z.port1.onmessage = Y),
      (S = function () {
        Q.postMessage(null)
      })
  } else
    S = function () {
      _(Y, 0)
    }
  function X(C) {
    ;(k = C), O || ((O = !0), S())
  }
  function ue(C, M) {
    P = _(function () {
      C(e.unstable_now())
    }, M)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null
    }),
    (e.unstable_continueExecution = function () {
      p || h || ((p = !0), X(b))
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (L = 0 < C ? Math.floor(1e3 / C) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l)
    }),
    (e.unstable_next = function (C) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var M = 3
          break
        default:
          M = f
      }
      var D = f
      f = M
      try {
        return C()
      } finally {
        f = D
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, M) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          C = 3
      }
      var D = f
      f = C
      try {
        return M()
      } finally {
        f = D
      }
    }),
    (e.unstable_scheduleCallback = function (C, M, D) {
      var W = e.unstable_now()
      switch (
        (typeof D == 'object' && D !== null
          ? ((D = D.delay), (D = typeof D == 'number' && 0 < D ? W + D : W))
          : (D = W),
        C)
      ) {
        case 1:
          var F = -1
          break
        case 2:
          F = 250
          break
        case 5:
          F = 1073741823
          break
        case 4:
          F = 1e4
          break
        default:
          F = 5e3
      }
      return (
        (F = D + F),
        (C = {
          id: c++,
          callback: M,
          priorityLevel: C,
          startTime: D,
          expirationTime: F,
          sortIndex: -1
        }),
        D > W
          ? ((C.sortIndex = D),
            t(u, C),
            n(l) === null && C === n(u) && (y ? (g(P), (P = -1)) : (y = !0), ue(x, D - W)))
          : ((C.sortIndex = F), t(l, C), p || h || ((p = !0), X(b))),
        C
      )
    }),
    (e.unstable_shouldYield = N),
    (e.unstable_wrapCallback = function (C) {
      var M = f
      return function () {
        var D = f
        f = M
        try {
          return C.apply(this, arguments)
        } finally {
          f = D
        }
      }
    })
})(Cm)
km.exports = Cm
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Em = R.exports,
  Ht = km.exports
function z(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Pm = new Set(),
  Uo = {}
function ar(e, t) {
  Fr(e, t), Fr(e + 'Capture', t)
}
function Fr(e, t) {
  for (Uo[e] = t, e = 0; e < t.length; e++) Pm.add(t[e])
}
var Qn = !(
    typeof window == 'undefined' ||
    typeof window.document == 'undefined' ||
    typeof window.document.createElement == 'undefined'
  ),
  kc = Object.prototype.hasOwnProperty,
  K1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ph = {},
  Mh = {}
function G1(e) {
  return kc.call(Mh, e) ? !0 : kc.call(Ph, e) ? !1 : K1.test(e) ? (Mh[e] = !0) : ((Ph[e] = !0), !1)
}
function Z1(e, t, n, i) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return i
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function J1(e, t, n, i) {
  if (t === null || typeof t == 'undefined' || Z1(e, t, n, i)) return !0
  if (i) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function Ot(e, t, n, i, r, o, s) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = i),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s)
}
var pt = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    pt[e] = new Ot(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv']
].forEach(function (e) {
  var t = e[0]
  pt[t] = new Ot(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  pt[e] = new Ot(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  pt[e] = new Ot(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    pt[e] = new Ot(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  pt[e] = new Ot(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  pt[e] = new Ot(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  pt[e] = new Ot(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  pt[e] = new Ot(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var jd = /[\-:]([a-z])/g
function Bd(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(jd, Bd)
    pt[t] = new Ot(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(jd, Bd)
    pt[t] = new Ot(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(jd, Bd)
  pt[t] = new Ot(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  pt[e] = new Ot(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
pt.xlinkHref = new Ot('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  pt[e] = new Ot(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function $d(e, t, n, i) {
  var r = pt.hasOwnProperty(t) ? pt[t] : null
  ;(r !== null
    ? r.type !== 0
    : i || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (J1(t, n, r, i) && (n = null),
    i || r === null
      ? G1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : r.mustUseProperty
      ? (e[r.propertyName] = n === null ? (r.type === 3 ? !1 : '') : n)
      : ((t = r.attributeName),
        (i = r.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((r = r.type),
            (n = r === 3 || (r === 4 && n === !0) ? '' : '' + n),
            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))))
}
var Zn = Em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  As = Symbol.for('react.element'),
  vr = Symbol.for('react.portal'),
  _r = Symbol.for('react.fragment'),
  Hd = Symbol.for('react.strict_mode'),
  Cc = Symbol.for('react.profiler'),
  Mm = Symbol.for('react.provider'),
  Om = Symbol.for('react.context'),
  Wd = Symbol.for('react.forward_ref'),
  Ec = Symbol.for('react.suspense'),
  Pc = Symbol.for('react.suspense_list'),
  Vd = Symbol.for('react.memo'),
  ii = Symbol.for('react.lazy'),
  Tm = Symbol.for('react.offscreen'),
  Oh = Symbol.iterator
function no(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Oh && e[Oh]) || e['@@iterator']), typeof e == 'function' ? e : null)
}
var He = Object.assign,
  Su
function So(e) {
  if (Su === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Su = (t && t[1]) || ''
    }
  return (
    `
` +
    Su +
    e
  )
}
var ku = !1
function Cu(e, t) {
  if (!e || ku) return ''
  ku = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          }
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var i = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          i = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        i = u
      }
      e()
    }
  } catch (u) {
    if (u && i && typeof u.stack == 'string') {
      for (
        var r = u.stack.split(`
`),
          o = i.stack.split(`
`),
          s = r.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && r[s] !== o[a];

      )
        a--
      for (; 1 <= s && 0 <= a; s--, a--)
        if (r[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || r[s] !== o[a])) {
                var l =
                  `
` + r[s].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                )
              }
            while (1 <= s && 0 <= a)
          break
        }
    }
  } finally {
    ;(ku = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? So(e) : ''
}
function e_(e) {
  switch (e.tag) {
    case 5:
      return So(e.type)
    case 16:
      return So('Lazy')
    case 13:
      return So('Suspense')
    case 19:
      return So('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Cu(e.type, !1)), e
    case 11:
      return (e = Cu(e.type.render, !1)), e
    case 1:
      return (e = Cu(e.type, !0)), e
    default:
      return ''
  }
}
function Mc(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case _r:
      return 'Fragment'
    case vr:
      return 'Portal'
    case Cc:
      return 'Profiler'
    case Hd:
      return 'StrictMode'
    case Ec:
      return 'Suspense'
    case Pc:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Om:
        return (e.displayName || 'Context') + '.Consumer'
      case Mm:
        return (e._context.displayName || 'Context') + '.Provider'
      case Wd:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Vd:
        return (t = e.displayName || null), t !== null ? t : Mc(e.type) || 'Memo'
      case ii:
        ;(t = e._payload), (e = e._init)
        try {
          return Mc(e(t))
        } catch {}
    }
  return null
}
function t_(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return Mc(t)
    case 8:
      return t === Hd ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function Si(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function Lm(e) {
  var t = e.type
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
}
function n_(e) {
  var t = Lm(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    i = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n != 'undefined' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var r = n.get,
      o = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return r.call(this)
        },
        set: function (s) {
          ;(i = '' + s), o.call(this, s)
        }
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i
        },
        setValue: function (s) {
          i = '' + s
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        }
      }
    )
  }
}
function Fs(e) {
  e._valueTracker || (e._valueTracker = n_(e))
}
function Rm(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    i = ''
  return (
    e && (i = Lm(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = i),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Na(e) {
  if (((e = e || (typeof document != 'undefined' ? document : void 0)), typeof e == 'undefined'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Oc(e, t) {
  var n = t.checked
  return He({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked
  })
}
function Th(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    i = t.checked != null ? t.checked : t.defaultChecked
  ;(n = Si(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null
    })
}
function Nm(e, t) {
  ;(t = t.checked), t != null && $d(e, 'checked', t, !1)
}
function Tc(e, t) {
  Nm(e, t)
  var n = Si(t.value),
    i = t.type
  if (n != null)
    i === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (i === 'submit' || i === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? Lc(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Lc(e, t.type, Si(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Lh(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var i = t.type
    if (!((i !== 'submit' && i !== 'reset') || (t.value !== void 0 && t.value !== null))) return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function Lc(e, t, n) {
  ;(t !== 'number' || Na(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var ko = Array.isArray
function Or(e, t, n, i) {
  if (((e = e.options), t)) {
    t = {}
    for (var r = 0; r < n.length; r++) t['$' + n[r]] = !0
    for (n = 0; n < e.length; n++)
      (r = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== r && (e[n].selected = r),
        r && i && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + Si(n), t = null, r = 0; r < e.length; r++) {
      if (e[r].value === n) {
        ;(e[r].selected = !0), i && (e[r].defaultSelected = !0)
        return
      }
      t !== null || e[r].disabled || (t = e[r])
    }
    t !== null && (t.selected = !0)
  }
}
function Rc(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(z(91))
  return He({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue
  })
}
function Rh(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(z(92))
      if (ko(n)) {
        if (1 < n.length) throw Error(z(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: Si(n) }
}
function Dm(e, t) {
  var n = Si(t.value),
    i = Si(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    i != null && (e.defaultValue = '' + i)
}
function Nh(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function zm(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Nc(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? zm(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e
}
var js,
  Im = (function (e) {
    return typeof MSApp != 'undefined' && MSApp.execUnsafeLocalFunction
      ? function (t, n, i, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, i, r)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t
    else {
      for (
        js = js || document.createElement('div'),
          js.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = js.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function qo(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var To = {
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
    strokeWidth: !0
  },
  i_ = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(To).forEach(function (e) {
  i_.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (To[t] = To[e])
  })
})
function Am(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (To.hasOwnProperty(e) && To[e])
    ? ('' + t).trim()
    : t + 'px'
}
function Fm(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = n.indexOf('--') === 0,
        r = Am(n, t[n], i)
      n === 'float' && (n = 'cssFloat'), i ? e.setProperty(n, r) : (e[n] = r)
    }
}
var r_ = He(
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
    wbr: !0
  }
)
function Dc(e, t) {
  if (t) {
    if (r_[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(z(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(z(60))
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML))
        throw Error(z(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(z(62))
  }
}
function zc(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Ic = null
function Ud(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Ac = null,
  Tr = null,
  Lr = null
function Dh(e) {
  if ((e = ws(e))) {
    if (typeof Ac != 'function') throw Error(z(280))
    var t = e.stateNode
    t && ((t = Pl(t)), Ac(e.stateNode, e.type, t))
  }
}
function jm(e) {
  Tr ? (Lr ? Lr.push(e) : (Lr = [e])) : (Tr = e)
}
function Bm() {
  if (Tr) {
    var e = Tr,
      t = Lr
    if (((Lr = Tr = null), Dh(e), t)) for (e = 0; e < t.length; e++) Dh(t[e])
  }
}
function $m(e, t) {
  return e(t)
}
function Hm() {}
var Eu = !1
function Wm(e, t, n) {
  if (Eu) return e(t, n)
  Eu = !0
  try {
    return $m(e, t, n)
  } finally {
    ;(Eu = !1), (Tr !== null || Lr !== null) && (Hm(), Bm())
  }
}
function Yo(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var i = Pl(n)
  if (i === null) return null
  n = i[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(i = !i.disabled) ||
        ((e = e.type),
        (i = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !i)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(z(231, t, typeof n))
  return n
}
var Fc = !1
if (Qn)
  try {
    var io = {}
    Object.defineProperty(io, 'passive', {
      get: function () {
        Fc = !0
      }
    }),
      window.addEventListener('test', io, io),
      window.removeEventListener('test', io, io)
  } catch {
    Fc = !1
  }
function o_(e, t, n, i, r, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var Lo = !1,
  Da = null,
  za = !1,
  jc = null,
  s_ = {
    onError: function (e) {
      ;(Lo = !0), (Da = e)
    }
  }
function a_(e, t, n, i, r, o, s, a, l) {
  ;(Lo = !1), (Da = null), o_.apply(s_, arguments)
}
function l_(e, t, n, i, r, o, s, a, l) {
  if ((a_.apply(this, arguments), Lo)) {
    if (Lo) {
      var u = Da
      ;(Lo = !1), (Da = null)
    } else throw Error(z(198))
    za || ((za = !0), (jc = u))
  }
}
function lr(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function Vm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated
  }
  return null
}
function zh(e) {
  if (lr(e) !== e) throw Error(z(188))
}
function u_(e) {
  var t = e.alternate
  if (!t) {
    if (((t = lr(e)), t === null)) throw Error(z(188))
    return t !== e ? null : e
  }
  for (var n = e, i = t; ; ) {
    var r = n.return
    if (r === null) break
    var o = r.alternate
    if (o === null) {
      if (((i = r.return), i !== null)) {
        n = i
        continue
      }
      break
    }
    if (r.child === o.child) {
      for (o = r.child; o; ) {
        if (o === n) return zh(r), e
        if (o === i) return zh(r), t
        o = o.sibling
      }
      throw Error(z(188))
    }
    if (n.return !== i.return) (n = r), (i = o)
    else {
      for (var s = !1, a = r.child; a; ) {
        if (a === n) {
          ;(s = !0), (n = r), (i = o)
          break
        }
        if (a === i) {
          ;(s = !0), (i = r), (n = o)
          break
        }
        a = a.sibling
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            ;(s = !0), (n = o), (i = r)
            break
          }
          if (a === i) {
            ;(s = !0), (i = o), (n = r)
            break
          }
          a = a.sibling
        }
        if (!s) throw Error(z(189))
      }
    }
    if (n.alternate !== i) throw Error(z(190))
  }
  if (n.tag !== 3) throw Error(z(188))
  return n.stateNode.current === n ? e : t
}
function Um(e) {
  return (e = u_(e)), e !== null ? qm(e) : null
}
function qm(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = qm(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Ym = Ht.unstable_scheduleCallback,
  Ih = Ht.unstable_cancelCallback,
  c_ = Ht.unstable_shouldYield,
  d_ = Ht.unstable_requestPaint,
  Xe = Ht.unstable_now,
  f_ = Ht.unstable_getCurrentPriorityLevel,
  qd = Ht.unstable_ImmediatePriority,
  Qm = Ht.unstable_UserBlockingPriority,
  Ia = Ht.unstable_NormalPriority,
  h_ = Ht.unstable_LowPriority,
  Xm = Ht.unstable_IdlePriority,
  Sl = null,
  En = null
function p_(e) {
  if (En && typeof En.onCommitFiberRoot == 'function')
    try {
      En.onCommitFiberRoot(Sl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var _n = Math.clz32 ? Math.clz32 : y_,
  g_ = Math.log,
  m_ = Math.LN2
function y_(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((g_(e) / m_) | 0)) | 0
}
var Bs = 64,
  $s = 4194304
function Co(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
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
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Aa(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var i = 0,
    r = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455
  if (s !== 0) {
    var a = s & ~r
    a !== 0 ? (i = Co(a)) : ((o &= s), o !== 0 && (i = Co(o)))
  } else (s = n & ~r), s !== 0 ? (i = Co(s)) : o !== 0 && (i = Co(o))
  if (i === 0) return 0
  if (
    t !== 0 &&
    t !== i &&
    (t & r) === 0 &&
    ((r = i & -i), (o = t & -t), r >= o || (r === 16 && (o & 4194240) !== 0))
  )
    return t
  if (((i & 4) !== 0 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= i; 0 < t; )
      (n = 31 - _n(t)), (r = 1 << n), (i |= e[n]), (t &= ~r)
  return i
}
function v_(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
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
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function __(e, t) {
  for (
    var n = e.suspendedLanes, i = e.pingedLanes, r = e.expirationTimes, o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - _n(o),
      a = 1 << s,
      l = r[s]
    l === -1
      ? ((a & n) === 0 || (a & i) !== 0) && (r[s] = v_(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a)
  }
}
function Bc(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Pu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function xs(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - _n(t)),
    (e[t] = n)
}
function x_(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var i = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var r = 31 - _n(n),
      o = 1 << r
    ;(t[r] = 0), (i[r] = -1), (e[r] = -1), (n &= ~o)
  }
}
function Yd(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var i = 31 - _n(n),
      r = 1 << i
    ;(r & t) | (e[i] & t) && (e[i] |= t), (n &= ~r)
  }
}
var we = 0
function Km(e) {
  return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
}
var Gm,
  Qd,
  Zm,
  Jm,
  e0,
  $c = !1,
  Hs = [],
  pi = null,
  gi = null,
  mi = null,
  Qo = new Map(),
  Xo = new Map(),
  oi = [],
  b_ =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    )
function Ah(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      pi = null
      break
    case 'dragenter':
    case 'dragleave':
      gi = null
      break
    case 'mouseover':
    case 'mouseout':
      mi = null
      break
    case 'pointerover':
    case 'pointerout':
      Qo.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      Xo.delete(t.pointerId)
  }
}
function ro(e, t, n, i, r, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: o,
        targetContainers: [r]
      }),
      t !== null && ((t = ws(t)), t !== null && Qd(t)),
      e)
    : ((e.eventSystemFlags |= i),
      (t = e.targetContainers),
      r !== null && t.indexOf(r) === -1 && t.push(r),
      e)
}
function w_(e, t, n, i, r) {
  switch (t) {
    case 'focusin':
      return (pi = ro(pi, e, t, n, i, r)), !0
    case 'dragenter':
      return (gi = ro(gi, e, t, n, i, r)), !0
    case 'mouseover':
      return (mi = ro(mi, e, t, n, i, r)), !0
    case 'pointerover':
      var o = r.pointerId
      return Qo.set(o, ro(Qo.get(o) || null, e, t, n, i, r)), !0
    case 'gotpointercapture':
      return (o = r.pointerId), Xo.set(o, ro(Xo.get(o) || null, e, t, n, i, r)), !0
  }
  return !1
}
function t0(e) {
  var t = Vi(e.target)
  if (t !== null) {
    var n = lr(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Vm(n)), t !== null)) {
          ;(e.blockedOn = t),
            e0(e.priority, function () {
              Zm(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function ba(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Hc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var i = new n.constructor(n.type, n)
      ;(Ic = i), n.target.dispatchEvent(i), (Ic = null)
    } else return (t = ws(n)), t !== null && Qd(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Fh(e, t, n) {
  ba(e) && n.delete(t)
}
function S_() {
  ;($c = !1),
    pi !== null && ba(pi) && (pi = null),
    gi !== null && ba(gi) && (gi = null),
    mi !== null && ba(mi) && (mi = null),
    Qo.forEach(Fh),
    Xo.forEach(Fh)
}
function oo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $c || (($c = !0), Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority, S_)))
}
function Ko(e) {
  function t(r) {
    return oo(r, e)
  }
  if (0 < Hs.length) {
    oo(Hs[0], e)
    for (var n = 1; n < Hs.length; n++) {
      var i = Hs[n]
      i.blockedOn === e && (i.blockedOn = null)
    }
  }
  for (
    pi !== null && oo(pi, e),
      gi !== null && oo(gi, e),
      mi !== null && oo(mi, e),
      Qo.forEach(t),
      Xo.forEach(t),
      n = 0;
    n < oi.length;
    n++
  )
    (i = oi[n]), i.blockedOn === e && (i.blockedOn = null)
  for (; 0 < oi.length && ((n = oi[0]), n.blockedOn === null); )
    t0(n), n.blockedOn === null && oi.shift()
}
var Rr = Zn.ReactCurrentBatchConfig
function k_(e, t, n, i) {
  var r = we,
    o = Rr.transition
  Rr.transition = null
  try {
    ;(we = 1), Xd(e, t, n, i)
  } finally {
    ;(we = r), (Rr.transition = o)
  }
}
function C_(e, t, n, i) {
  var r = we,
    o = Rr.transition
  Rr.transition = null
  try {
    ;(we = 4), Xd(e, t, n, i)
  } finally {
    ;(we = r), (Rr.transition = o)
  }
}
function Xd(e, t, n, i) {
  var r = Hc(e, t, n, i)
  if (r === null) Au(e, t, i, Fa, n), Ah(e, i)
  else if (w_(r, e, t, n, i)) i.stopPropagation()
  else if ((Ah(e, i), t & 4 && -1 < b_.indexOf(e))) {
    for (; r !== null; ) {
      var o = ws(r)
      if ((o !== null && Gm(o), (o = Hc(e, t, n, i)), o === null && Au(e, t, i, Fa, n), o === r))
        break
      r = o
    }
    r !== null && i.stopPropagation()
  } else Au(e, t, i, null, n)
}
var Fa = null
function Hc(e, t, n, i) {
  if (((Fa = null), (e = Ud(i)), (e = Vi(e)), e !== null))
    if (((t = lr(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = Vm(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (Fa = e), null
}
function n0(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (f_()) {
        case qd:
          return 1
        case Qm:
          return 4
        case Ia:
        case h_:
          return 16
        case Xm:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var li = null,
  Kd = null,
  wa = null
function i0() {
  if (wa) return wa
  var e,
    t = Kd,
    n = t.length,
    i,
    r = 'value' in li ? li.value : li.textContent,
    o = r.length
  for (e = 0; e < n && t[e] === r[e]; e++);
  var s = n - e
  for (i = 1; i <= s && t[n - i] === r[o - i]; i++);
  return (wa = r.slice(e, 1 < i ? 1 - i : void 0))
}
function Sa(e) {
  var t = e.keyCode
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function Ws() {
  return !0
}
function jh() {
  return !1
}
function Ut(e) {
  function t(n, i, r, o, s) {
    ;(this._reactName = n),
      (this._targetInst = r),
      (this.type = i),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null)
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]))
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ws
        : jh),
      (this.isPropagationStopped = jh),
      this
    )
  }
  return (
    He(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ws))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ws))
      },
      persist: function () {},
      isPersistent: Ws
    }),
    t
  )
}
var Kr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  Gd = Ut(Kr),
  bs = He({}, Kr, { view: 0, detail: 0 }),
  E_ = Ut(bs),
  Mu,
  Ou,
  so,
  kl = He({}, bs, {
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
    getModifierState: Zd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== so &&
            (so && e.type === 'mousemove'
              ? ((Mu = e.screenX - so.screenX), (Ou = e.screenY - so.screenY))
              : (Ou = Mu = 0),
            (so = e)),
          Mu)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ou
    }
  }),
  Bh = Ut(kl),
  P_ = He({}, kl, { dataTransfer: 0 }),
  M_ = Ut(P_),
  O_ = He({}, bs, { relatedTarget: 0 }),
  Tu = Ut(O_),
  T_ = He({}, Kr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  L_ = Ut(T_),
  R_ = He({}, Kr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    }
  }),
  N_ = Ut(R_),
  D_ = He({}, Kr, { data: 0 }),
  $h = Ut(D_),
  z_ = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  },
  I_ = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta'
  },
  A_ = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function F_(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = A_[e]) ? !!t[e] : !1
}
function Zd() {
  return F_
}
var j_ = He({}, bs, {
    key: function (e) {
      if (e.key) {
        var t = z_[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Sa(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? I_[e.keyCode] || 'Unidentified'
        : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zd,
    charCode: function (e) {
      return e.type === 'keypress' ? Sa(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Sa(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0
    }
  }),
  B_ = Ut(j_),
  $_ = He({}, kl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }),
  Hh = Ut($_),
  H_ = He({}, bs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zd
  }),
  W_ = Ut(H_),
  V_ = He({}, Kr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  U_ = Ut(V_),
  q_ = He({}, kl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  Y_ = Ut(q_),
  Q_ = [9, 13, 27, 32],
  Jd = Qn && 'CompositionEvent' in window,
  Ro = null
Qn && 'documentMode' in document && (Ro = document.documentMode)
var X_ = Qn && 'TextEvent' in window && !Ro,
  r0 = Qn && (!Jd || (Ro && 8 < Ro && 11 >= Ro)),
  Wh = String.fromCharCode(32),
  Vh = !1
function o0(e, t) {
  switch (e) {
    case 'keyup':
      return Q_.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function s0(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var xr = !1
function K_(e, t) {
  switch (e) {
    case 'compositionend':
      return s0(t)
    case 'keypress':
      return t.which !== 32 ? null : ((Vh = !0), Wh)
    case 'textInput':
      return (e = t.data), e === Wh && Vh ? null : e
    default:
      return null
  }
}
function G_(e, t) {
  if (xr)
    return e === 'compositionend' || (!Jd && o0(e, t))
      ? ((e = i0()), (wa = Kd = li = null), (xr = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return r0 && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Z_ = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
  week: !0
}
function Uh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Z_[e.type] : t === 'textarea'
}
function a0(e, t, n, i) {
  jm(i),
    (t = ja(t, 'onChange')),
    0 < t.length &&
      ((n = new Gd('onChange', 'change', null, n, i)), e.push({ event: n, listeners: t }))
}
var No = null,
  Go = null
function J_(e) {
  v0(e, 0)
}
function Cl(e) {
  var t = Sr(e)
  if (Rm(t)) return e
}
function ex(e, t) {
  if (e === 'change') return t
}
var l0 = !1
if (Qn) {
  var Lu
  if (Qn) {
    var Ru = 'oninput' in document
    if (!Ru) {
      var qh = document.createElement('div')
      qh.setAttribute('oninput', 'return;'), (Ru = typeof qh.oninput == 'function')
    }
    Lu = Ru
  } else Lu = !1
  l0 = Lu && (!document.documentMode || 9 < document.documentMode)
}
function Yh() {
  No && (No.detachEvent('onpropertychange', u0), (Go = No = null))
}
function u0(e) {
  if (e.propertyName === 'value' && Cl(Go)) {
    var t = []
    a0(t, Go, e, Ud(e)), Wm(J_, t)
  }
}
function tx(e, t, n) {
  e === 'focusin'
    ? (Yh(), (No = t), (Go = n), No.attachEvent('onpropertychange', u0))
    : e === 'focusout' && Yh()
}
function nx(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Cl(Go)
}
function ix(e, t) {
  if (e === 'click') return Cl(t)
}
function rx(e, t) {
  if (e === 'input' || e === 'change') return Cl(t)
}
function ox(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Tn = typeof Object.is == 'function' ? Object.is : ox
function Zo(e, t) {
  if (Tn(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
  var n = Object.keys(e),
    i = Object.keys(t)
  if (n.length !== i.length) return !1
  for (i = 0; i < n.length; i++) {
    var r = n[i]
    if (!kc.call(t, r) || !Tn(e[r], t[r])) return !1
  }
  return !0
}
function Qh(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Xh(e, t) {
  var n = Qh(e)
  e = 0
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = e + n.textContent.length), e <= t && i >= t)) return { node: n, offset: t - e }
      e = i
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Qh(n)
  }
}
function c0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? c0(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function d0() {
  for (var e = window, t = Na(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Na(e.document)
  }
  return t
}
function ef(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function sx(e) {
  var t = d0(),
    n = e.focusedElem,
    i = e.selectionRange
  if (t !== n && n && n.ownerDocument && c0(n.ownerDocument.documentElement, n)) {
    if (i !== null && ef(n)) {
      if (((t = i.start), (e = i.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection()
        var r = n.textContent.length,
          o = Math.min(i.start, r)
        ;(i = i.end === void 0 ? o : Math.min(i.end, r)),
          !e.extend && o > i && ((r = i), (i = o), (o = r)),
          (r = Xh(n, o))
        var s = Xh(n, i)
        r &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== r.node ||
            e.anchorOffset !== r.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(r.node, r.offset),
          e.removeAllRanges(),
          o > i
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var ax = Qn && 'documentMode' in document && 11 >= document.documentMode,
  br = null,
  Wc = null,
  Do = null,
  Vc = !1
function Kh(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Vc ||
    br == null ||
    br !== Na(i) ||
    ((i = br),
    'selectionStart' in i && ef(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = ((i.ownerDocument && i.ownerDocument.defaultView) || window).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset
        })),
    (Do && Zo(Do, i)) ||
      ((Do = i),
      (i = ja(Wc, 'onSelect')),
      0 < i.length &&
        ((t = new Gd('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: i }),
        (t.target = br))))
}
function Vs(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var wr = {
    animationend: Vs('Animation', 'AnimationEnd'),
    animationiteration: Vs('Animation', 'AnimationIteration'),
    animationstart: Vs('Animation', 'AnimationStart'),
    transitionend: Vs('Transition', 'TransitionEnd')
  },
  Nu = {},
  f0 = {}
Qn &&
  ((f0 = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete wr.animationend.animation,
    delete wr.animationiteration.animation,
    delete wr.animationstart.animation),
  'TransitionEvent' in window || delete wr.transitionend.transition)
function El(e) {
  if (Nu[e]) return Nu[e]
  if (!wr[e]) return e
  var t = wr[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in f0) return (Nu[e] = t[n])
  return e
}
var h0 = El('animationend'),
  p0 = El('animationiteration'),
  g0 = El('animationstart'),
  m0 = El('transitionend'),
  y0 = new Map(),
  Gh =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    )
function Ti(e, t) {
  y0.set(e, t), ar(t, [e])
}
for (var Du = 0; Du < Gh.length; Du++) {
  var zu = Gh[Du],
    lx = zu.toLowerCase(),
    ux = zu[0].toUpperCase() + zu.slice(1)
  Ti(lx, 'on' + ux)
}
Ti(h0, 'onAnimationEnd')
Ti(p0, 'onAnimationIteration')
Ti(g0, 'onAnimationStart')
Ti('dblclick', 'onDoubleClick')
Ti('focusin', 'onFocus')
Ti('focusout', 'onBlur')
Ti(m0, 'onTransitionEnd')
Fr('onMouseEnter', ['mouseout', 'mouseover'])
Fr('onMouseLeave', ['mouseout', 'mouseover'])
Fr('onPointerEnter', ['pointerout', 'pointerover'])
Fr('onPointerLeave', ['pointerout', 'pointerover'])
ar('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
ar(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
)
ar('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
ar('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
ar('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
ar('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
var Eo =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  cx = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Eo))
function Zh(e, t, n) {
  var i = e.type || 'unknown-event'
  ;(e.currentTarget = n), l_(i, t, void 0, e), (e.currentTarget = null)
}
function v0(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var i = e[n],
      r = i.event
    i = i.listeners
    e: {
      var o = void 0
      if (t)
        for (var s = i.length - 1; 0 <= s; s--) {
          var a = i[s],
            l = a.instance,
            u = a.currentTarget
          if (((a = a.listener), l !== o && r.isPropagationStopped())) break e
          Zh(r, a, u), (o = l)
        }
      else
        for (s = 0; s < i.length; s++) {
          if (
            ((a = i[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && r.isPropagationStopped())
          )
            break e
          Zh(r, a, u), (o = l)
        }
    }
  }
  if (za) throw ((e = jc), (za = !1), (jc = null), e)
}
function Le(e, t) {
  var n = t[Qc]
  n === void 0 && (n = t[Qc] = new Set())
  var i = e + '__bubble'
  n.has(i) || (_0(t, e, 2, !1), n.add(i))
}
function Iu(e, t, n) {
  var i = 0
  t && (i |= 4), _0(n, e, i, t)
}
var Us = '_reactListening' + Math.random().toString(36).slice(2)
function Jo(e) {
  if (!e[Us]) {
    ;(e[Us] = !0),
      Pm.forEach(function (n) {
        n !== 'selectionchange' && (cx.has(n) || Iu(n, !1, e), Iu(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[Us] || ((t[Us] = !0), Iu('selectionchange', !1, t))
  }
}
function _0(e, t, n, i) {
  switch (n0(t)) {
    case 1:
      var r = k_
      break
    case 4:
      r = C_
      break
    default:
      r = Xd
  }
  ;(n = r.bind(null, t, n, e)),
    (r = void 0),
    !Fc || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (r = !0),
    i
      ? r !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: r })
        : e.addEventListener(t, n, !0)
      : r !== void 0
      ? e.addEventListener(t, n, { passive: r })
      : e.addEventListener(t, n, !1)
}
function Au(e, t, n, i, r) {
  var o = i
  if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
    e: for (;;) {
      if (i === null) return
      var s = i.tag
      if (s === 3 || s === 4) {
        var a = i.stateNode.containerInfo
        if (a === r || (a.nodeType === 8 && a.parentNode === r)) break
        if (s === 4)
          for (s = i.return; s !== null; ) {
            var l = s.tag
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo), l === r || (l.nodeType === 8 && l.parentNode === r))
            )
              return
            s = s.return
          }
        for (; a !== null; ) {
          if (((s = Vi(a)), s === null)) return
          if (((l = s.tag), l === 5 || l === 6)) {
            i = o = s
            continue e
          }
          a = a.parentNode
        }
      }
      i = i.return
    }
  Wm(function () {
    var u = o,
      c = Ud(n),
      d = []
    e: {
      var f = y0.get(e)
      if (f !== void 0) {
        var h = Gd,
          p = e
        switch (e) {
          case 'keypress':
            if (Sa(n) === 0) break e
          case 'keydown':
          case 'keyup':
            h = B_
            break
          case 'focusin':
            ;(p = 'focus'), (h = Tu)
            break
          case 'focusout':
            ;(p = 'blur'), (h = Tu)
            break
          case 'beforeblur':
          case 'afterblur':
            h = Tu
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            h = Bh
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            h = M_
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            h = W_
            break
          case h0:
          case p0:
          case g0:
            h = L_
            break
          case m0:
            h = U_
            break
          case 'scroll':
            h = E_
            break
          case 'wheel':
            h = Y_
            break
          case 'copy':
          case 'cut':
          case 'paste':
            h = N_
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            h = Hh
        }
        var y = (t & 4) !== 0,
          _ = !y && e === 'scroll',
          g = y ? (f !== null ? f + 'Capture' : null) : f
        y = []
        for (var m = u, v; m !== null; ) {
          v = m
          var x = v.stateNode
          if (
            (v.tag === 5 &&
              x !== null &&
              ((v = x), g !== null && ((x = Yo(m, g)), x != null && y.push(es(m, x, v)))),
            _)
          )
            break
          m = m.return
        }
        0 < y.length && ((f = new h(f, p, null, n, c)), d.push({ event: f, listeners: y }))
      }
    }
    if ((t & 7) === 0) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (h = e === 'mouseout' || e === 'pointerout'),
          f && n !== Ic && (p = n.relatedTarget || n.fromElement) && (Vi(p) || p[Xn]))
        )
          break e
        if (
          (h || f) &&
          ((f =
            c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window),
          h
            ? ((p = n.relatedTarget || n.toElement),
              (h = u),
              (p = p ? Vi(p) : null),
              p !== null && ((_ = lr(p)), p !== _ || (p.tag !== 5 && p.tag !== 6)) && (p = null))
            : ((h = null), (p = u)),
          h !== p)
        ) {
          if (
            ((y = Bh),
            (x = 'onMouseLeave'),
            (g = 'onMouseEnter'),
            (m = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = Hh), (x = 'onPointerLeave'), (g = 'onPointerEnter'), (m = 'pointer')),
            (_ = h == null ? f : Sr(h)),
            (v = p == null ? f : Sr(p)),
            (f = new y(x, m + 'leave', h, n, c)),
            (f.target = _),
            (f.relatedTarget = v),
            (x = null),
            Vi(c) === u &&
              ((y = new y(g, m + 'enter', p, n, c)),
              (y.target = v),
              (y.relatedTarget = _),
              (x = y)),
            (_ = x),
            h && p)
          )
            t: {
              for (y = h, g = p, m = 0, v = y; v; v = fr(v)) m++
              for (v = 0, x = g; x; x = fr(x)) v++
              for (; 0 < m - v; ) (y = fr(y)), m--
              for (; 0 < v - m; ) (g = fr(g)), v--
              for (; m--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t
                ;(y = fr(y)), (g = fr(g))
              }
              y = null
            }
          else y = null
          h !== null && Jh(d, f, h, y, !1), p !== null && _ !== null && Jh(d, _, p, y, !0)
        }
      }
      e: {
        if (
          ((f = u ? Sr(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === 'select' || (h === 'input' && f.type === 'file'))
        )
          var b = ex
        else if (Uh(f))
          if (l0) b = rx
          else {
            b = nx
            var O = tx
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (b = ix)
        if (b && (b = b(e, u))) {
          a0(d, b, n, c)
          break e
        }
        O && O(e, f, u),
          e === 'focusout' &&
            (O = f._wrapperState) &&
            O.controlled &&
            f.type === 'number' &&
            Lc(f, 'number', f.value)
      }
      switch (((O = u ? Sr(u) : window), e)) {
        case 'focusin':
          ;(Uh(O) || O.contentEditable === 'true') && ((br = O), (Wc = u), (Do = null))
          break
        case 'focusout':
          Do = Wc = br = null
          break
        case 'mousedown':
          Vc = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(Vc = !1), Kh(d, n, c)
          break
        case 'selectionchange':
          if (ax) break
        case 'keydown':
        case 'keyup':
          Kh(d, n, c)
      }
      var k
      if (Jd)
        e: {
          switch (e) {
            case 'compositionstart':
              var P = 'onCompositionStart'
              break e
            case 'compositionend':
              P = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              P = 'onCompositionUpdate'
              break e
          }
          P = void 0
        }
      else
        xr
          ? o0(e, n) && (P = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (P = 'onCompositionStart')
      P &&
        (r0 &&
          n.locale !== 'ko' &&
          (xr || P !== 'onCompositionStart'
            ? P === 'onCompositionEnd' && xr && (k = i0())
            : ((li = c), (Kd = 'value' in li ? li.value : li.textContent), (xr = !0))),
        (O = ja(u, P)),
        0 < O.length &&
          ((P = new $h(P, e, null, n, c)),
          d.push({ event: P, listeners: O }),
          k ? (P.data = k) : ((k = s0(n)), k !== null && (P.data = k)))),
        (k = X_ ? K_(e, n) : G_(e, n)) &&
          ((u = ja(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new $h('onBeforeInput', 'beforeinput', null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = k)))
    }
    v0(d, t)
  })
}
function es(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function ja(e, t) {
  for (var n = t + 'Capture', i = []; e !== null; ) {
    var r = e,
      o = r.stateNode
    r.tag === 5 &&
      o !== null &&
      ((r = o),
      (o = Yo(e, n)),
      o != null && i.unshift(es(e, o, r)),
      (o = Yo(e, t)),
      o != null && i.push(es(e, o, r))),
      (e = e.return)
  }
  return i
}
function fr(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Jh(e, t, n, i, r) {
  for (var o = t._reactName, s = []; n !== null && n !== i; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode
    if (l !== null && l === i) break
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      r
        ? ((l = Yo(n, o)), l != null && s.unshift(es(n, l, a)))
        : r || ((l = Yo(n, o)), l != null && s.push(es(n, l, a)))),
      (n = n.return)
  }
  s.length !== 0 && e.push({ event: t, listeners: s })
}
var dx = /\r\n?/g,
  fx = /\u0000|\uFFFD/g
function ep(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      dx,
      `
`
    )
    .replace(fx, '')
}
function qs(e, t, n) {
  if (((t = ep(t)), ep(e) !== t && n)) throw Error(z(425))
}
function Ba() {}
var Uc = null
function qc(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Yc = typeof setTimeout == 'function' ? setTimeout : void 0,
  hx = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  tp = typeof Promise == 'function' ? Promise : void 0,
  px =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof tp != 'undefined'
      ? function (e) {
          return tp.resolve(null).then(e).catch(gx)
        }
      : Yc
function gx(e) {
  setTimeout(function () {
    throw e
  })
}
function Fu(e, t) {
  var n = t,
    i = 0
  do {
    var r = n.nextSibling
    if ((e.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === '/$')) {
        if (i === 0) {
          e.removeChild(r), Ko(t)
          return
        }
        i--
      } else (n !== '$' && n !== '$?' && n !== '$!') || i++
    n = r
  } while (n)
  Ko(t)
}
function Wn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function np(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Gr = Math.random().toString(36).slice(2),
  kn = '__reactFiber$' + Gr,
  ts = '__reactProps$' + Gr,
  Xn = '__reactContainer$' + Gr,
  Qc = '__reactEvents$' + Gr,
  mx = '__reactListeners$' + Gr,
  yx = '__reactHandles$' + Gr
function Vi(e) {
  var t = e[kn]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Xn] || n[kn])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = np(e); e !== null; ) {
          if ((n = e[kn])) return n
          e = np(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function ws(e) {
  return (
    (e = e[kn] || e[Xn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Sr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(z(33))
}
function Pl(e) {
  return e[ts] || null
}
var Xc = [],
  kr = -1
function Li(e) {
  return { current: e }
}
function De(e) {
  0 > kr || ((e.current = Xc[kr]), (Xc[kr] = null), kr--)
}
function Pe(e, t) {
  kr++, (Xc[kr] = e.current), (e.current = t)
}
var ki = {},
  St = Li(ki),
  It = Li(!1),
  er = ki
function jr(e, t) {
  var n = e.type.contextTypes
  if (!n) return ki
  var i = e.stateNode
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
    return i.__reactInternalMemoizedMaskedChildContext
  var r = {},
    o
  for (o in n) r[o] = t[o]
  return (
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = r)),
    r
  )
}
function At(e) {
  return (e = e.childContextTypes), e != null
}
function $a() {
  De(It), De(St)
}
function ip(e, t, n) {
  if (St.current !== ki) throw Error(z(168))
  Pe(St, t), Pe(It, n)
}
function x0(e, t, n) {
  var i = e.stateNode
  if (((t = t.childContextTypes), typeof i.getChildContext != 'function')) return n
  i = i.getChildContext()
  for (var r in i) if (!(r in t)) throw Error(z(108, t_(e) || 'Unknown', r))
  return He({}, n, i)
}
function Ha(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ki),
    (er = St.current),
    Pe(St, e),
    Pe(It, It.current),
    !0
  )
}
function rp(e, t, n) {
  var i = e.stateNode
  if (!i) throw Error(z(169))
  n
    ? ((e = x0(e, t, er)),
      (i.__reactInternalMemoizedMergedChildContext = e),
      De(It),
      De(St),
      Pe(St, e))
    : De(It),
    Pe(It, n)
}
var $n = null,
  Ml = !1,
  ju = !1
function b0(e) {
  $n === null ? ($n = [e]) : $n.push(e)
}
function vx(e) {
  ;(Ml = !0), b0(e)
}
function Ri() {
  if (!ju && $n !== null) {
    ju = !0
    var e = 0,
      t = we
    try {
      var n = $n
      for (we = 1; e < n.length; e++) {
        var i = n[e]
        do i = i(!0)
        while (i !== null)
      }
      ;($n = null), (Ml = !1)
    } catch (r) {
      throw ($n !== null && ($n = $n.slice(e + 1)), Ym(qd, Ri), r)
    } finally {
      ;(we = t), (ju = !1)
    }
  }
  return null
}
var _x = Zn.ReactCurrentBatchConfig
function pn(e, t) {
  if (e && e.defaultProps) {
    ;(t = He({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var Wa = Li(null),
  Va = null,
  Cr = null,
  tf = null
function nf() {
  tf = Cr = Va = null
}
function rf(e) {
  var t = Wa.current
  De(Wa), (e._currentValue = t)
}
function Kc(e, t, n) {
  for (; e !== null; ) {
    var i = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
        : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Nr(e, t) {
  ;(Va = e),
    (tf = Cr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      ((e.lanes & t) !== 0 && (Bt = !0), (e.firstContext = null))
}
function sn(e) {
  var t = e._currentValue
  if (tf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Cr === null)) {
      if (Va === null) throw Error(z(308))
      ;(Cr = e), (Va.dependencies = { lanes: 0, firstContext: e })
    } else Cr = Cr.next = e
  return t
}
var Cn = null,
  ri = !1
function of(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null
  }
}
function w0(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
      })
}
function Yn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function yi(e, t) {
  var n = e.updateQueue
  n !== null &&
    ((n = n.shared),
    et !== null && (e.mode & 1) !== 0 && (ce & 2) === 0
      ? ((e = n.interleaved),
        e === null
          ? ((t.next = t), Cn === null ? (Cn = [n]) : Cn.push(n))
          : ((t.next = e.next), (e.next = t)),
        (n.interleaved = t))
      : ((e = n.pending),
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (n.pending = t)))
}
function ka(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var i = t.lanes
    ;(i &= e.pendingLanes), (n |= i), (t.lanes = n), Yd(e, n)
  }
}
function op(e, t) {
  var n = e.updateQueue,
    i = e.alternate
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var r = null,
      o = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        }
        o === null ? (r = o = s) : (o = o.next = s), (n = n.next)
      } while (n !== null)
      o === null ? (r = o = t) : (o = o.next = t)
    } else r = o = t
    ;(n = {
      baseState: i.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: o,
      shared: i.shared,
      effects: i.effects
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function Ua(e, t, n, i) {
  var r = e.updateQueue
  ri = !1
  var o = r.firstBaseUpdate,
    s = r.lastBaseUpdate,
    a = r.shared.pending
  if (a !== null) {
    r.shared.pending = null
    var l = a,
      u = l.next
    ;(l.next = null), s === null ? (o = u) : (s.next = u), (s = l)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = l)))
  }
  if (o !== null) {
    var d = r.baseState
    ;(s = 0), (c = u = l = null), (a = o)
    do {
      var f = a.lane,
        h = a.eventTime
      if ((i & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null
            })
        e: {
          var p = e,
            y = a
          switch (((f = t), (h = n), y.tag)) {
            case 1:
              if (((p = y.payload), typeof p == 'function')) {
                d = p.call(h, d, f)
                break e
              }
              d = p
              break e
            case 3:
              p.flags = (p.flags & -65537) | 128
            case 0:
              if (((p = y.payload), (f = typeof p == 'function' ? p.call(h, d, f) : p), f == null))
                break e
              d = He({}, d, f)
              break e
            case 2:
              ri = !0
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (f = r.effects), f === null ? (r.effects = [a]) : f.push(a))
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (s |= f)
      if (((a = a.next), a === null)) {
        if (((a = r.shared.pending), a === null)) break
        ;(f = a), (a = f.next), (f.next = null), (r.lastBaseUpdate = f), (r.shared.pending = null)
      }
    } while (1)
    if (
      (c === null && (l = d),
      (r.baseState = l),
      (r.firstBaseUpdate = u),
      (r.lastBaseUpdate = c),
      (t = r.shared.interleaved),
      t !== null)
    ) {
      r = t
      do (s |= r.lane), (r = r.next)
      while (r !== t)
    } else o === null && (r.shared.lanes = 0)
    ;(Vr |= s), (e.lanes = s), (e.memoizedState = d)
  }
}
function sp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var i = e[t],
        r = i.callback
      if (r !== null) {
        if (((i.callback = null), (i = n), typeof r != 'function')) throw Error(z(191, r))
        r.call(i)
      }
    }
}
var S0 = new Em.Component().refs
function Gc(e, t, n, i) {
  ;(t = e.memoizedState),
    (n = n(i, t)),
    (n = n == null ? t : He({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ol = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? lr(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var i = Pt(),
      r = _i(e),
      o = Yn(i, r)
    ;(o.payload = t),
      n != null && (o.callback = n),
      yi(e, o),
      (t = on(e, r, i)),
      t !== null && ka(t, e, r)
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var i = Pt(),
      r = _i(e),
      o = Yn(i, r)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      yi(e, o),
      (t = on(e, r, i)),
      t !== null && ka(t, e, r)
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Pt(),
      i = _i(e),
      r = Yn(n, i)
    ;(r.tag = 2),
      t != null && (r.callback = t),
      yi(e, r),
      (t = on(e, i, n)),
      t !== null && ka(t, e, i)
  }
}
function ap(e, t, n, i, r, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(i, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Zo(n, i) || !Zo(r, o)
      : !0
  )
}
function k0(e, t, n) {
  var i = !1,
    r = ki,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = sn(o))
      : ((r = At(t) ? er : St.current),
        (i = t.contextTypes),
        (o = (i = i != null) ? jr(e, r) : ki)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ol),
    (e.stateNode = t),
    (t._reactInternals = e),
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = r),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function lp(e, t, n, i) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && Ol.enqueueReplaceState(t, t.state, null)
}
function Zc(e, t, n, i) {
  var r = e.stateNode
  ;(r.props = n), (r.state = e.memoizedState), (r.refs = S0), of(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (r.context = sn(o))
    : ((o = At(t) ? er : St.current), (r.context = jr(e, o))),
    (r.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Gc(e, t, o, n), (r.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof r.getSnapshotBeforeUpdate == 'function' ||
      (typeof r.UNSAFE_componentWillMount != 'function' &&
        typeof r.componentWillMount != 'function') ||
      ((t = r.state),
      typeof r.componentWillMount == 'function' && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == 'function' && r.UNSAFE_componentWillMount(),
      t !== r.state && Ol.enqueueReplaceState(r, r.state, null),
      Ua(e, n, r, i),
      (r.state = e.memoizedState)),
    typeof r.componentDidMount == 'function' && (e.flags |= 4194308)
}
var Er = [],
  Pr = 0,
  qa = null,
  Ya = 0,
  Gt = [],
  Zt = 0,
  tr = null,
  Vn = 1,
  Un = ''
function ji(e, t) {
  ;(Er[Pr++] = Ya), (Er[Pr++] = qa), (qa = e), (Ya = t)
}
function C0(e, t, n) {
  ;(Gt[Zt++] = Vn), (Gt[Zt++] = Un), (Gt[Zt++] = tr), (tr = e)
  var i = Vn
  e = Un
  var r = 32 - _n(i) - 1
  ;(i &= ~(1 << r)), (n += 1)
  var o = 32 - _n(t) + r
  if (30 < o) {
    var s = r - (r % 5)
    ;(o = (i & ((1 << s) - 1)).toString(32)),
      (i >>= s),
      (r -= s),
      (Vn = (1 << (32 - _n(t) + r)) | (n << r) | i),
      (Un = o + e)
  } else (Vn = (1 << o) | (n << r) | i), (Un = e)
}
function sf(e) {
  e.return !== null && (ji(e, 1), C0(e, 1, 0))
}
function af(e) {
  for (; e === qa; ) (qa = Er[--Pr]), (Er[Pr] = null), (Ya = Er[--Pr]), (Er[Pr] = null)
  for (; e === tr; )
    (tr = Gt[--Zt]),
      (Gt[Zt] = null),
      (Un = Gt[--Zt]),
      (Gt[Zt] = null),
      (Vn = Gt[--Zt]),
      (Gt[Zt] = null)
}
var $t = null,
  Rt = null,
  Ae = !1,
  mn = null
function E0(e, t) {
  var n = en(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function up(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), ($t = e), (Rt = Wn(t.firstChild)), !0) : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), ($t = e), (Rt = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = tr !== null ? { id: Vn, overflow: Un } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = en(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            ($t = e),
            (Rt = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Jc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ed(e) {
  if (Ae) {
    var t = Rt
    if (t) {
      var n = t
      if (!up(e, t)) {
        if (Jc(e)) throw Error(z(418))
        t = Wn(n.nextSibling)
        var i = $t
        t && up(e, t) ? E0(i, n) : ((e.flags = (e.flags & -4097) | 2), (Ae = !1), ($t = e))
      }
    } else {
      if (Jc(e)) throw Error(z(418))
      ;(e.flags = (e.flags & -4097) | 2), (Ae = !1), ($t = e)
    }
  }
}
function cp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
  $t = e
}
function ao(e) {
  if (e !== $t) return !1
  if (!Ae) return cp(e), (Ae = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !qc(e.type, e.memoizedProps))),
    t && (t = Rt))
  ) {
    if (Jc(e)) {
      for (e = Rt; e; ) e = Wn(e.nextSibling)
      throw Error(z(418))
    }
    for (; t; ) E0(e, t), (t = Wn(t.nextSibling))
  }
  if ((cp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(z(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              Rt = Wn(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      Rt = null
    }
  } else Rt = $t ? Wn(e.stateNode.nextSibling) : null
  return !0
}
function Br() {
  ;(Rt = $t = null), (Ae = !1)
}
function lf(e) {
  mn === null ? (mn = [e]) : mn.push(e)
}
function lo(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(z(309))
        var i = n.stateNode
      }
      if (!i) throw Error(z(147, e))
      var r = i,
        o = '' + e
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = r.refs
            a === S0 && (a = r.refs = {}), s === null ? delete a[o] : (a[o] = s)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != 'string') throw Error(z(284))
    if (!n._owner) throw Error(z(290, e))
  }
  return e
}
function Ys(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      z(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
    ))
  )
}
function dp(e) {
  var t = e._init
  return t(e._payload)
}
function P0(e) {
  function t(g, m) {
    if (e) {
      var v = g.deletions
      v === null ? ((g.deletions = [m]), (g.flags |= 16)) : v.push(m)
    }
  }
  function n(g, m) {
    if (!e) return null
    for (; m !== null; ) t(g, m), (m = m.sibling)
    return null
  }
  function i(g, m) {
    for (g = new Map(); m !== null; )
      m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling)
    return g
  }
  function r(g, m) {
    return (g = Ci(g, m)), (g.index = 0), (g.sibling = null), g
  }
  function o(g, m, v) {
    return (
      (g.index = v),
      e
        ? ((v = g.alternate),
          v !== null ? ((v = v.index), v < m ? ((g.flags |= 2), m) : v) : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    )
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g
  }
  function a(g, m, v, x) {
    return m === null || m.tag !== 6
      ? ((m = Uu(v, g.mode, x)), (m.return = g), m)
      : ((m = r(m, v)), (m.return = g), m)
  }
  function l(g, m, v, x) {
    var b = v.type
    return b === _r
      ? c(g, m, v.props.children, x, v.key)
      : m !== null &&
        (m.elementType === b ||
          (typeof b == 'object' && b !== null && b.$$typeof === ii && dp(b) === m.type))
      ? ((x = r(m, v.props)), (x.ref = lo(g, m, v)), (x.return = g), x)
      : ((x = Oa(v.type, v.key, v.props, null, g.mode, x)),
        (x.ref = lo(g, m, v)),
        (x.return = g),
        x)
  }
  function u(g, m, v, x) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== v.containerInfo ||
      m.stateNode.implementation !== v.implementation
      ? ((m = qu(v, g.mode, x)), (m.return = g), m)
      : ((m = r(m, v.children || [])), (m.return = g), m)
  }
  function c(g, m, v, x, b) {
    return m === null || m.tag !== 7
      ? ((m = Gi(v, g.mode, x, b)), (m.return = g), m)
      : ((m = r(m, v)), (m.return = g), m)
  }
  function d(g, m, v) {
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return (m = Uu('' + m, g.mode, v)), (m.return = g), m
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case As:
          return (
            (v = Oa(m.type, m.key, m.props, null, g.mode, v)),
            (v.ref = lo(g, null, m)),
            (v.return = g),
            v
          )
        case vr:
          return (m = qu(m, g.mode, v)), (m.return = g), m
        case ii:
          var x = m._init
          return d(g, x(m._payload), v)
      }
      if (ko(m) || no(m)) return (m = Gi(m, g.mode, v, null)), (m.return = g), m
      Ys(g, m)
    }
    return null
  }
  function f(g, m, v, x) {
    var b = m !== null ? m.key : null
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return b !== null ? null : a(g, m, '' + v, x)
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case As:
          return v.key === b ? l(g, m, v, x) : null
        case vr:
          return v.key === b ? u(g, m, v, x) : null
        case ii:
          return (b = v._init), f(g, m, b(v._payload), x)
      }
      if (ko(v) || no(v)) return b !== null ? null : c(g, m, v, x, null)
      Ys(g, v)
    }
    return null
  }
  function h(g, m, v, x, b) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (g = g.get(v) || null), a(m, g, '' + x, b)
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case As:
          return (g = g.get(x.key === null ? v : x.key) || null), l(m, g, x, b)
        case vr:
          return (g = g.get(x.key === null ? v : x.key) || null), u(m, g, x, b)
        case ii:
          var O = x._init
          return h(g, m, v, O(x._payload), b)
      }
      if (ko(x) || no(x)) return (g = g.get(v) || null), c(m, g, x, b, null)
      Ys(m, x)
    }
    return null
  }
  function p(g, m, v, x) {
    for (var b = null, O = null, k = m, P = (m = 0), L = null; k !== null && P < v.length; P++) {
      k.index > P ? ((L = k), (k = null)) : (L = k.sibling)
      var I = f(g, k, v[P], x)
      if (I === null) {
        k === null && (k = L)
        break
      }
      e && k && I.alternate === null && t(g, k),
        (m = o(I, m, P)),
        O === null ? (b = I) : (O.sibling = I),
        (O = I),
        (k = L)
    }
    if (P === v.length) return n(g, k), Ae && ji(g, P), b
    if (k === null) {
      for (; P < v.length; P++)
        (k = d(g, v[P], x)),
          k !== null && ((m = o(k, m, P)), O === null ? (b = k) : (O.sibling = k), (O = k))
      return Ae && ji(g, P), b
    }
    for (k = i(g, k); P < v.length; P++)
      (L = h(k, g, P, v[P], x)),
        L !== null &&
          (e && L.alternate !== null && k.delete(L.key === null ? P : L.key),
          (m = o(L, m, P)),
          O === null ? (b = L) : (O.sibling = L),
          (O = L))
    return (
      e &&
        k.forEach(function (N) {
          return t(g, N)
        }),
      Ae && ji(g, P),
      b
    )
  }
  function y(g, m, v, x) {
    var b = no(v)
    if (typeof b != 'function') throw Error(z(150))
    if (((v = b.call(v)), v == null)) throw Error(z(151))
    for (
      var O = (b = null), k = m, P = (m = 0), L = null, I = v.next();
      k !== null && !I.done;
      P++, I = v.next()
    ) {
      k.index > P ? ((L = k), (k = null)) : (L = k.sibling)
      var N = f(g, k, I.value, x)
      if (N === null) {
        k === null && (k = L)
        break
      }
      e && k && N.alternate === null && t(g, k),
        (m = o(N, m, P)),
        O === null ? (b = N) : (O.sibling = N),
        (O = N),
        (k = L)
    }
    if (I.done) return n(g, k), Ae && ji(g, P), b
    if (k === null) {
      for (; !I.done; P++, I = v.next())
        (I = d(g, I.value, x)),
          I !== null && ((m = o(I, m, P)), O === null ? (b = I) : (O.sibling = I), (O = I))
      return Ae && ji(g, P), b
    }
    for (k = i(g, k); !I.done; P++, I = v.next())
      (I = h(k, g, P, I.value, x)),
        I !== null &&
          (e && I.alternate !== null && k.delete(I.key === null ? P : I.key),
          (m = o(I, m, P)),
          O === null ? (b = I) : (O.sibling = I),
          (O = I))
    return (
      e &&
        k.forEach(function (Y) {
          return t(g, Y)
        }),
      Ae && ji(g, P),
      b
    )
  }
  function _(g, m, v, x) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === _r &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case As:
          e: {
            for (var b = v.key, O = m; O !== null; ) {
              if (O.key === b) {
                if (((b = v.type), b === _r)) {
                  if (O.tag === 7) {
                    n(g, O.sibling), (m = r(O, v.props.children)), (m.return = g), (g = m)
                    break e
                  }
                } else if (
                  O.elementType === b ||
                  (typeof b == 'object' && b !== null && b.$$typeof === ii && dp(b) === O.type)
                ) {
                  n(g, O.sibling),
                    (m = r(O, v.props)),
                    (m.ref = lo(g, O, v)),
                    (m.return = g),
                    (g = m)
                  break e
                }
                n(g, O)
                break
              } else t(g, O)
              O = O.sibling
            }
            v.type === _r
              ? ((m = Gi(v.props.children, g.mode, x, v.key)), (m.return = g), (g = m))
              : ((x = Oa(v.type, v.key, v.props, null, g.mode, x)),
                (x.ref = lo(g, m, v)),
                (x.return = g),
                (g = x))
          }
          return s(g)
        case vr:
          e: {
            for (O = v.key; m !== null; ) {
              if (m.key === O)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === v.containerInfo &&
                  m.stateNode.implementation === v.implementation
                ) {
                  n(g, m.sibling), (m = r(m, v.children || [])), (m.return = g), (g = m)
                  break e
                } else {
                  n(g, m)
                  break
                }
              else t(g, m)
              m = m.sibling
            }
            ;(m = qu(v, g.mode, x)), (m.return = g), (g = m)
          }
          return s(g)
        case ii:
          return (O = v._init), _(g, m, O(v._payload), x)
      }
      if (ko(v)) return p(g, m, v, x)
      if (no(v)) return y(g, m, v, x)
      Ys(g, v)
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        m !== null && m.tag === 6
          ? (n(g, m.sibling), (m = r(m, v)), (m.return = g), (g = m))
          : (n(g, m), (m = Uu(v, g.mode, x)), (m.return = g), (g = m)),
        s(g))
      : n(g, m)
  }
  return _
}
var $r = P0(!0),
  M0 = P0(!1),
  Ss = {},
  Pn = Li(Ss),
  ns = Li(Ss),
  is = Li(Ss)
function Ui(e) {
  if (e === Ss) throw Error(z(174))
  return e
}
function uf(e, t) {
  switch ((Pe(is, t), Pe(ns, e), Pe(Pn, Ss), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Nc(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Nc(t, e))
  }
  De(Pn), Pe(Pn, t)
}
function Hr() {
  De(Pn), De(ns), De(is)
}
function O0(e) {
  Ui(is.current)
  var t = Ui(Pn.current),
    n = Nc(t, e.type)
  t !== n && (Pe(ns, e), Pe(Pn, n))
}
function cf(e) {
  ns.current === e && (De(Pn), De(ns))
}
var $e = Li(0)
function Qa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if ((t.flags & 128) !== 0) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Bu = []
function df() {
  for (var e = 0; e < Bu.length; e++) Bu[e]._workInProgressVersionPrimary = null
  Bu.length = 0
}
var Ca = Zn.ReactCurrentDispatcher,
  nn = Zn.ReactCurrentBatchConfig,
  Wr = 0,
  Qe = null,
  bt = null,
  lt = null,
  Xa = !1,
  zo = !1,
  rs = 0,
  xx = 0
function yt() {
  throw Error(z(321))
}
function ff(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++) if (!Tn(e[n], t[n])) return !1
  return !0
}
function hf(e, t, n, i, r, o) {
  if (
    ((Wr = o),
    (Qe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ca.current = e === null || e.memoizedState === null ? kx : Cx),
    (e = n(i, r)),
    zo)
  ) {
    o = 0
    do {
      if (((zo = !1), (rs = 0), 25 <= o)) throw Error(z(301))
      ;(o += 1), (lt = bt = null), (t.updateQueue = null), (Ca.current = Ex), (e = n(i, r))
    } while (zo)
  }
  if (
    ((Ca.current = Ka),
    (t = bt !== null && bt.next !== null),
    (Wr = 0),
    (lt = bt = Qe = null),
    (Xa = !1),
    t)
  )
    throw Error(z(300))
  return e
}
function pf() {
  var e = rs !== 0
  return (rs = 0), e
}
function jn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
  return lt === null ? (Qe.memoizedState = lt = e) : (lt = lt.next = e), lt
}
function Ln() {
  if (bt === null) {
    var e = Qe.alternate
    e = e !== null ? e.memoizedState : null
  } else e = bt.next
  var t = lt === null ? Qe.memoizedState : lt.next
  if (t !== null) (lt = t), (bt = e)
  else {
    if (e === null) throw Error(z(310))
    ;(bt = e),
      (e = {
        memoizedState: bt.memoizedState,
        baseState: bt.baseState,
        baseQueue: bt.baseQueue,
        queue: bt.queue,
        next: null
      }),
      lt === null ? (Qe.memoizedState = lt = e) : (lt = lt.next = e)
  }
  return lt
}
function Xi(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Qs(e) {
  var t = Ln(),
    n = t.queue
  if (n === null) throw Error(z(311))
  n.lastRenderedReducer = e
  var i = bt,
    r = i.baseQueue,
    o = n.pending
  if (o !== null) {
    if (r !== null) {
      var s = r.next
      ;(r.next = o.next), (o.next = s)
    }
    ;(i.baseQueue = r = o), (n.pending = null)
  }
  if (r !== null) {
    ;(o = r.next), (i = i.baseState)
    var a = (s = null),
      l = null,
      u = o
    do {
      var c = u.lane
      if ((Wr & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null
            }),
          (i = u.hasEagerState ? u.eagerState : e(i, u.action))
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        }
        l === null ? ((a = l = d), (s = i)) : (l = l.next = d), (Qe.lanes |= c), (Vr |= c)
      }
      u = u.next
    } while (u !== null && u !== o)
    l === null ? (s = i) : (l.next = a),
      Tn(i, t.memoizedState) || (Bt = !0),
      (t.memoizedState = i),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = i)
  }
  if (((e = n.interleaved), e !== null)) {
    r = e
    do (o = r.lane), (Qe.lanes |= o), (Vr |= o), (r = r.next)
    while (r !== e)
  } else r === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Xs(e) {
  var t = Ln(),
    n = t.queue
  if (n === null) throw Error(z(311))
  n.lastRenderedReducer = e
  var i = n.dispatch,
    r = n.pending,
    o = t.memoizedState
  if (r !== null) {
    n.pending = null
    var s = (r = r.next)
    do (o = e(o, s.action)), (s = s.next)
    while (s !== r)
    Tn(o, t.memoizedState) || (Bt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, i]
}
function T0() {}
function L0(e, t) {
  var n = Qe,
    i = Ln(),
    r = t(),
    o = !Tn(i.memoizedState, r)
  if (
    (o && ((i.memoizedState = r), (Bt = !0)),
    (i = i.queue),
    ss(D0.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || o || (lt !== null && lt.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), os(9, N0.bind(null, n, i, r, t), void 0, null), et === null))
      throw Error(z(349))
    ;(Wr & 30) !== 0 || R0(n, t, r)
  }
  return r
}
function R0(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Qe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (Qe.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function N0(e, t, n, i) {
  ;(t.value = n), (t.getSnapshot = i), z0(t) && on(e, 1, -1)
}
function D0(e, t, n) {
  return n(function () {
    z0(t) && on(e, 1, -1)
  })
}
function z0(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Tn(e, n)
  } catch {
    return !0
  }
}
function $u(e) {
  var t = jn()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xi,
      lastRenderedState: e
    }),
    (t.queue = e),
    (e = e.dispatch = Sx.bind(null, Qe, e)),
    [t.memoizedState, e]
  )
}
function os(e, t, n, i) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
    (t = Qe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Qe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
    e
  )
}
function I0() {
  return Ln().memoizedState
}
function Ea(e, t, n, i) {
  var r = jn()
  ;(Qe.flags |= e), (r.memoizedState = os(1 | t, n, void 0, i === void 0 ? null : i))
}
function Tl(e, t, n, i) {
  var r = Ln()
  i = i === void 0 ? null : i
  var o = void 0
  if (bt !== null) {
    var s = bt.memoizedState
    if (((o = s.destroy), i !== null && ff(i, s.deps))) {
      r.memoizedState = os(t, n, o, i)
      return
    }
  }
  ;(Qe.flags |= e), (r.memoizedState = os(1 | t, n, o, i))
}
function Hu(e, t) {
  return Ea(8390656, 8, e, t)
}
function ss(e, t) {
  return Tl(2048, 8, e, t)
}
function A0(e, t) {
  return Tl(4, 2, e, t)
}
function F0(e, t) {
  return Tl(4, 4, e, t)
}
function j0(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function B0(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Tl(4, 4, j0.bind(null, t, e), n)
}
function gf() {}
function $0(e, t) {
  var n = Ln()
  t = t === void 0 ? null : t
  var i = n.memoizedState
  return i !== null && t !== null && ff(t, i[1]) ? i[0] : ((n.memoizedState = [e, t]), e)
}
function H0(e, t) {
  var n = Ln()
  t = t === void 0 ? null : t
  var i = n.memoizedState
  return i !== null && t !== null && ff(t, i[1]) ? i[0] : ((e = e()), (n.memoizedState = [e, t]), e)
}
function bx(e, t) {
  var n = we
  ;(we = n !== 0 && 4 > n ? n : 4), e(!0)
  var i = nn.transition
  nn.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(we = n), (nn.transition = i)
  }
}
function W0() {
  return Ln().memoizedState
}
function wx(e, t, n) {
  var i = _i(e)
  ;(n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }),
    V0(e) ? U0(t, n) : (q0(e, t, n), (n = Pt()), (e = on(e, i, n)), e !== null && Y0(e, t, i))
}
function Sx(e, t, n) {
  var i = _i(e),
    r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (V0(e)) U0(t, r)
  else {
    q0(e, t, r)
    var o = e.alternate
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
      try {
        var s = t.lastRenderedState,
          a = o(s, n)
        if (((r.hasEagerState = !0), (r.eagerState = a), Tn(a, s))) return
      } catch {
      } finally {
      }
    ;(n = Pt()), (e = on(e, i, n)), e !== null && Y0(e, t, i)
  }
}
function V0(e) {
  var t = e.alternate
  return e === Qe || (t !== null && t === Qe)
}
function U0(e, t) {
  zo = Xa = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function q0(e, t, n) {
  et !== null && (e.mode & 1) !== 0 && (ce & 2) === 0
    ? ((e = t.interleaved),
      e === null
        ? ((n.next = n), Cn === null ? (Cn = [t]) : Cn.push(t))
        : ((n.next = e.next), (e.next = n)),
      (t.interleaved = n))
    : ((e = t.pending),
      e === null ? (n.next = n) : ((n.next = e.next), (e.next = n)),
      (t.pending = n))
}
function Y0(e, t, n) {
  if ((n & 4194240) !== 0) {
    var i = t.lanes
    ;(i &= e.pendingLanes), (n |= i), (t.lanes = n), Yd(e, n)
  }
}
var Ka = {
    readContext: sn,
    useCallback: yt,
    useContext: yt,
    useEffect: yt,
    useImperativeHandle: yt,
    useInsertionEffect: yt,
    useLayoutEffect: yt,
    useMemo: yt,
    useReducer: yt,
    useRef: yt,
    useState: yt,
    useDebugValue: yt,
    useDeferredValue: yt,
    useTransition: yt,
    useMutableSource: yt,
    useSyncExternalStore: yt,
    useId: yt,
    unstable_isNewReconciler: !1
  },
  kx = {
    readContext: sn,
    useCallback: function (e, t) {
      return (jn().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: sn,
    useEffect: Hu,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Ea(4194308, 4, j0.bind(null, t, e), n)
    },
    useLayoutEffect: function (e, t) {
      return Ea(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Ea(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = jn()
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, n) {
      var i = jn()
      return (
        (t = n !== void 0 ? n(t) : t),
        (i.memoizedState = i.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t
        }),
        (i.queue = e),
        (e = e.dispatch = wx.bind(null, Qe, e)),
        [i.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = jn()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: $u,
    useDebugValue: gf,
    useDeferredValue: function (e) {
      var t = $u(e),
        n = t[0],
        i = t[1]
      return (
        Hu(
          function () {
            var r = nn.transition
            nn.transition = {}
            try {
              i(e)
            } finally {
              nn.transition = r
            }
          },
          [e]
        ),
        n
      )
    },
    useTransition: function () {
      var e = $u(!1),
        t = e[0]
      return (e = bx.bind(null, e[1])), (jn().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var i = Qe,
        r = jn()
      if (Ae) {
        if (n === void 0) throw Error(z(407))
        n = n()
      } else {
        if (((n = t()), et === null)) throw Error(z(349))
        ;(Wr & 30) !== 0 || R0(i, t, n)
      }
      r.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (r.queue = o),
        Hu(D0.bind(null, i, o, e), [e]),
        (i.flags |= 2048),
        os(9, N0.bind(null, i, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = jn(),
        t = et.identifierPrefix
      if (Ae) {
        var n = Un,
          i = Vn
        ;(n = (i & ~(1 << (32 - _n(i) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = rs++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = xx++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1
  },
  Cx = {
    readContext: sn,
    useCallback: $0,
    useContext: sn,
    useEffect: ss,
    useImperativeHandle: B0,
    useInsertionEffect: A0,
    useLayoutEffect: F0,
    useMemo: H0,
    useReducer: Qs,
    useRef: I0,
    useState: function () {
      return Qs(Xi)
    },
    useDebugValue: gf,
    useDeferredValue: function (e) {
      var t = Qs(Xi),
        n = t[0],
        i = t[1]
      return (
        ss(
          function () {
            var r = nn.transition
            nn.transition = {}
            try {
              i(e)
            } finally {
              nn.transition = r
            }
          },
          [e]
        ),
        n
      )
    },
    useTransition: function () {
      var e = Qs(Xi)[0],
        t = Ln().memoizedState
      return [e, t]
    },
    useMutableSource: T0,
    useSyncExternalStore: L0,
    useId: W0,
    unstable_isNewReconciler: !1
  },
  Ex = {
    readContext: sn,
    useCallback: $0,
    useContext: sn,
    useEffect: ss,
    useImperativeHandle: B0,
    useInsertionEffect: A0,
    useLayoutEffect: F0,
    useMemo: H0,
    useReducer: Xs,
    useRef: I0,
    useState: function () {
      return Xs(Xi)
    },
    useDebugValue: gf,
    useDeferredValue: function (e) {
      var t = Xs(Xi),
        n = t[0],
        i = t[1]
      return (
        ss(
          function () {
            var r = nn.transition
            nn.transition = {}
            try {
              i(e)
            } finally {
              nn.transition = r
            }
          },
          [e]
        ),
        n
      )
    },
    useTransition: function () {
      var e = Xs(Xi)[0],
        t = Ln().memoizedState
      return [e, t]
    },
    useMutableSource: T0,
    useSyncExternalStore: L0,
    useId: W0,
    unstable_isNewReconciler: !1
  }
function mf(e, t) {
  try {
    var n = '',
      i = t
    do (n += e_(i)), (i = i.return)
    while (i)
    var r = n
  } catch (o) {
    r =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack
  }
  return { value: e, source: t, stack: r }
}
function td(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var Px = typeof WeakMap == 'function' ? WeakMap : Map
function Q0(e, t, n) {
  ;(n = Yn(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var i = t.value
  return (
    (n.callback = function () {
      Ja || ((Ja = !0), (cd = i)), td(e, t)
    }),
    n
  )
}
function X0(e, t, n) {
  ;(n = Yn(-1, n)), (n.tag = 3)
  var i = e.type.getDerivedStateFromError
  if (typeof i == 'function') {
    var r = t.value
    ;(n.payload = function () {
      return i(r)
    }),
      (n.callback = function () {
        td(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        td(e, t), typeof i != 'function' && (vi === null ? (vi = new Set([this])) : vi.add(this))
        var s = t.stack
        this.componentDidCatch(t.value, { componentStack: s !== null ? s : '' })
      }),
    n
  )
}
function fp(e, t, n) {
  var i = e.pingCache
  if (i === null) {
    i = e.pingCache = new Px()
    var r = new Set()
    i.set(t, r)
  } else (r = i.get(t)), r === void 0 && ((r = new Set()), i.set(t, r))
  r.has(n) || (r.add(n), (e = $x.bind(null, e, t, n)), t.then(e, e))
}
function hp(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function pp(e, t, n, i, r) {
  return (e.mode & 1) === 0
    ? (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = Yn(-1, 1)), (t.tag = 2), yi(n, t))),
          (n.lanes |= 1)),
      e)
    : ((e.flags |= 65536), (e.lanes = r), e)
}
var K0, nd, G0, Z0
K0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
nd = function () {}
G0 = function (e, t, n, i) {
  var r = e.memoizedProps
  if (r !== i) {
    ;(e = t.stateNode), Ui(Pn.current)
    var o = null
    switch (n) {
      case 'input':
        ;(r = Oc(e, r)), (i = Oc(e, i)), (o = [])
        break
      case 'select':
        ;(r = He({}, r, { value: void 0 })), (i = He({}, i, { value: void 0 })), (o = [])
        break
      case 'textarea':
        ;(r = Rc(e, r)), (i = Rc(e, i)), (o = [])
        break
      default:
        typeof r.onClick != 'function' && typeof i.onClick == 'function' && (e.onclick = Ba)
    }
    Dc(n, i)
    var s
    n = null
    for (u in r)
      if (!i.hasOwnProperty(u) && r.hasOwnProperty(u) && r[u] != null)
        if (u === 'style') {
          var a = r[u]
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (Uo.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null))
    for (u in i) {
      var l = i[u]
      if (
        ((a = r != null ? r[u] : void 0),
        i.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === 'style')
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) || (l && l.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ''))
            for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), (n[s] = l[s]))
          } else n || (o || (o = []), o.push(u, n)), (n = l)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === 'children'
            ? (typeof l != 'string' && typeof l != 'number') || (o = o || []).push(u, '' + l)
            : u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              (Uo.hasOwnProperty(u)
                ? (l != null && u === 'onScroll' && Le('scroll', e), o || a === l || (o = []))
                : (o = o || []).push(u, l))
    }
    n && (o = o || []).push('style', n)
    var u = o
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
Z0 = function (e, t, n, i) {
  n !== i && (t.flags |= 4)
}
function uo(e, t) {
  if (!Ae)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var i = null; n !== null; ) n.alternate !== null && (i = n), (n = n.sibling)
        i === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (i.sibling = null)
    }
}
function vt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    i = 0
  if (t)
    for (var r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags & 14680064),
        (i |= r.flags & 14680064),
        (r.return = e),
        (r = r.sibling)
  else
    for (r = e.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags),
        (i |= r.flags),
        (r.return = e),
        (r = r.sibling)
  return (e.subtreeFlags |= i), (e.childLanes = n), t
}
function Mx(e, t, n) {
  var i = t.pendingProps
  switch ((af(t), t.tag)) {
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
      return vt(t), null
    case 1:
      return At(t.type) && $a(), vt(t), null
    case 3:
      return (
        (i = t.stateNode),
        Hr(),
        De(It),
        De(St),
        df(),
        i.pendingContext && ((i.context = i.pendingContext), (i.pendingContext = null)),
        (e === null || e.child === null) &&
          (ao(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
              ((t.flags |= 1024), mn !== null && (hd(mn), (mn = null)))),
        nd(e, t),
        vt(t),
        null
      )
    case 5:
      cf(t)
      var r = Ui(is.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        G0(e, t, n, i, r), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!i) {
          if (t.stateNode === null) throw Error(z(166))
          return vt(t), null
        }
        if (((e = Ui(Pn.current)), ao(t))) {
          ;(i = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((i[kn] = t), (i[ts] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Le('cancel', i), Le('close', i)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              Le('load', i)
              break
            case 'video':
            case 'audio':
              for (r = 0; r < Eo.length; r++) Le(Eo[r], i)
              break
            case 'source':
              Le('error', i)
              break
            case 'img':
            case 'image':
            case 'link':
              Le('error', i), Le('load', i)
              break
            case 'details':
              Le('toggle', i)
              break
            case 'input':
              Th(i, o), Le('invalid', i)
              break
            case 'select':
              ;(i._wrapperState = { wasMultiple: !!o.multiple }), Le('invalid', i)
              break
            case 'textarea':
              Rh(i, o), Le('invalid', i)
          }
          Dc(n, o), (r = null)
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s]
              s === 'children'
                ? typeof a == 'string'
                  ? i.textContent !== a && (qs(i.textContent, a, e), (r = ['children', a]))
                  : typeof a == 'number' &&
                    i.textContent !== '' + a &&
                    (qs(i.textContent, a, e), (r = ['children', '' + a]))
                : Uo.hasOwnProperty(s) && a != null && s === 'onScroll' && Le('scroll', i)
            }
          switch (n) {
            case 'input':
              Fs(i), Lh(i, o, !0)
              break
            case 'textarea':
              Fs(i), Nh(i)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof o.onClick == 'function' && (i.onclick = Ba)
          }
          ;(i = r), (t.updateQueue = i), i !== null && (t.flags |= 4)
        } else {
          ;(s = r.nodeType === 9 ? r : r.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = zm(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = s.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof i.is == 'string'
                ? (e = s.createElement(n, { is: i.is }))
                : ((e = s.createElement(n)),
                  n === 'select' &&
                    ((s = e), i.multiple ? (s.multiple = !0) : i.size && (s.size = i.size)))
              : (e = s.createElementNS(e, n)),
            (e[kn] = t),
            (e[ts] = i),
            K0(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((s = zc(n, i)), n)) {
              case 'dialog':
                Le('cancel', e), Le('close', e), (r = i)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Le('load', e), (r = i)
                break
              case 'video':
              case 'audio':
                for (r = 0; r < Eo.length; r++) Le(Eo[r], e)
                r = i
                break
              case 'source':
                Le('error', e), (r = i)
                break
              case 'img':
              case 'image':
              case 'link':
                Le('error', e), Le('load', e), (r = i)
                break
              case 'details':
                Le('toggle', e), (r = i)
                break
              case 'input':
                Th(e, i), (r = Oc(e, i)), Le('invalid', e)
                break
              case 'option':
                r = i
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!i.multiple }),
                  (r = He({}, i, { value: void 0 })),
                  Le('invalid', e)
                break
              case 'textarea':
                Rh(e, i), (r = Rc(e, i)), Le('invalid', e)
                break
              default:
                r = i
            }
            Dc(n, r), (a = r)
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o]
                o === 'style'
                  ? Fm(e, l)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && Im(e, l))
                  : o === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && qo(e, l)
                    : typeof l == 'number' && qo(e, '' + l)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Uo.hasOwnProperty(o)
                      ? l != null && o === 'onScroll' && Le('scroll', e)
                      : l != null && $d(e, o, l, s))
              }
            switch (n) {
              case 'input':
                Fs(e), Lh(e, i, !1)
                break
              case 'textarea':
                Fs(e), Nh(e)
                break
              case 'option':
                i.value != null && e.setAttribute('value', '' + Si(i.value))
                break
              case 'select':
                ;(e.multiple = !!i.multiple),
                  (o = i.value),
                  o != null
                    ? Or(e, !!i.multiple, o, !1)
                    : i.defaultValue != null && Or(e, !!i.multiple, i.defaultValue, !0)
                break
              default:
                typeof r.onClick == 'function' && (e.onclick = Ba)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                i = !!i.autoFocus
                break e
              case 'img':
                i = !0
                break e
              default:
                i = !1
            }
          }
          i && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return vt(t), null
    case 6:
      if (e && t.stateNode != null) Z0(e, t, e.memoizedProps, i)
      else {
        if (typeof i != 'string' && t.stateNode === null) throw Error(z(166))
        if (((n = Ui(is.current)), Ui(Pn.current), ao(t))) {
          if (
            ((i = t.stateNode),
            (n = t.memoizedProps),
            (i[kn] = t),
            (o = i.nodeValue !== n) && ((e = $t), e !== null))
          )
            switch (((s = (e.mode & 1) !== 0), e.tag)) {
              case 3:
                qs(i.nodeValue, n, s)
                break
              case 5:
                e.memoizedProps[void 0] !== !0 && qs(i.nodeValue, n, s)
            }
          o && (t.flags |= 4)
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[kn] = t),
            (t.stateNode = i)
      }
      return vt(t), null
    case 13:
      if (
        (De($e),
        (i = t.memoizedState),
        Ae && Rt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
      ) {
        for (i = Rt; i; ) i = Wn(i.nextSibling)
        return Br(), (t.flags |= 98560), t
      }
      if (i !== null && i.dehydrated !== null) {
        if (((i = ao(t)), e === null)) {
          if (!i) throw Error(z(318))
          if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
            throw Error(z(317))
          i[kn] = t
        } else Br(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4)
        return vt(t), null
      }
      return (
        mn !== null && (hd(mn), (mn = null)),
        (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((i = i !== null),
            (n = !1),
            e === null ? ao(t) : (n = e.memoizedState !== null),
            i &&
              !n &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || ($e.current & 1) !== 0 ? nt === 0 && (nt = 3) : wf())),
            t.updateQueue !== null && (t.flags |= 4),
            vt(t),
            null)
      )
    case 4:
      return Hr(), nd(e, t), e === null && Jo(t.stateNode.containerInfo), vt(t), null
    case 10:
      return rf(t.type._context), vt(t), null
    case 17:
      return At(t.type) && $a(), vt(t), null
    case 19:
      if ((De($e), (o = t.memoizedState), o === null)) return vt(t), null
      if (((i = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (i) uo(o, !1)
        else {
          if (nt !== 0 || (e !== null && (e.flags & 128) !== 0))
            for (e = t.child; e !== null; ) {
              if (((s = Qa(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    uo(o, !1),
                    i = s.updateQueue,
                    i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    i = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = i),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling)
                return Pe($e, ($e.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null &&
            Xe() > Ur &&
            ((t.flags |= 128), (i = !0), uo(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!i)
          if (((e = Qa(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (i = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              uo(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !s.alternate && !Ae)
            )
              return vt(t), null
          } else
            2 * Xe() - o.renderingStartTime > Ur &&
              n !== 1073741824 &&
              ((t.flags |= 128), (i = !0), uo(o, !1), (t.lanes = 4194304))
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last), n !== null ? (n.sibling = s) : (t.child = s), (o.last = s))
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Xe()),
          (t.sibling = null),
          (n = $e.current),
          Pe($e, i ? (n & 1) | 2 : n & 1),
          t)
        : (vt(t), null)
    case 22:
    case 23:
      return (
        bf(),
        (i = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
        i && (t.mode & 1) !== 0
          ? (jt & 1073741824) !== 0 && (vt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : vt(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(z(156, t.tag))
}
var Ox = Zn.ReactCurrentOwner,
  Bt = !1
function Et(e, t, n, i) {
  t.child = e === null ? M0(t, null, n, i) : $r(t, e.child, n, i)
}
function gp(e, t, n, i, r) {
  n = n.render
  var o = t.ref
  return (
    Nr(t, r),
    (i = hf(e, t, n, i, o, r)),
    (n = pf()),
    e !== null && !Bt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r), Kn(e, t, r))
      : (Ae && n && sf(t), (t.flags |= 1), Et(e, t, i, r), t.child)
  )
}
function mp(e, t, n, i, r) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !Sf(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), J0(e, t, o, i, r))
      : ((e = Oa(n.type, null, i, t, t.mode, r)), (e.ref = t.ref), (e.return = t), (t.child = e))
  }
  if (((o = e.child), (e.lanes & r) === 0)) {
    var s = o.memoizedProps
    if (((n = n.compare), (n = n !== null ? n : Zo), n(s, i) && e.ref === t.ref)) return Kn(e, t, r)
  }
  return (t.flags |= 1), (e = Ci(o, i)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function J0(e, t, n, i, r) {
  if (e !== null && Zo(e.memoizedProps, i) && e.ref === t.ref)
    if (((Bt = !1), (e.lanes & r) !== 0)) (e.flags & 131072) !== 0 && (Bt = !0)
    else return (t.lanes = e.lanes), Kn(e, t, r)
  return id(e, t, n, i, r)
}
function ey(e, t, n) {
  var i = t.pendingProps,
    r = i.children,
    o = e !== null ? e.memoizedState : null
  if (i.mode === 'hidden')
    if ((t.mode & 1) === 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null }), Pe(Mr, jt), (jt |= n)
    else if ((n & 1073741824) !== 0)
      (t.memoizedState = { baseLanes: 0, cachePool: null }),
        (i = o !== null ? o.baseLanes : n),
        Pe(Mr, jt),
        (jt |= i)
    else
      return (
        (e = o !== null ? o.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = { baseLanes: e, cachePool: null }),
        (t.updateQueue = null),
        Pe(Mr, jt),
        (jt |= e),
        null
      )
  else
    o !== null ? ((i = o.baseLanes | n), (t.memoizedState = null)) : (i = n), Pe(Mr, jt), (jt |= i)
  return Et(e, t, r, n), t.child
}
function ty(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function id(e, t, n, i, r) {
  var o = At(n) ? er : St.current
  return (
    (o = jr(t, o)),
    Nr(t, r),
    (n = hf(e, t, n, i, o, r)),
    (i = pf()),
    e !== null && !Bt
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~r), Kn(e, t, r))
      : (Ae && i && sf(t), (t.flags |= 1), Et(e, t, n, r), t.child)
  )
}
function yp(e, t, n, i, r) {
  if (At(n)) {
    var o = !0
    Ha(t)
  } else o = !1
  if ((Nr(t, r), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      k0(t, n, i),
      Zc(t, n, i, r),
      (i = !0)
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps
    s.props = a
    var l = s.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = sn(u))
      : ((u = At(n) ? er : St.current), (u = jr(t, u)))
    var c = n.getDerivedStateFromProps,
      d = typeof c == 'function' || typeof s.getSnapshotBeforeUpdate == 'function'
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== i || l !== u) && lp(t, s, i, u)),
      (ri = !1)
    var f = t.memoizedState
    ;(s.state = f),
      Ua(t, i, s, r),
      (l = t.memoizedState),
      a !== i || f !== l || It.current || ri
        ? (typeof c == 'function' && (Gc(t, n, c, i), (l = t.memoizedState)),
          (a = ri || ap(t, n, a, i, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != 'function' &&
                  typeof s.componentWillMount != 'function') ||
                (typeof s.componentWillMount == 'function' && s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == 'function' && s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = i),
              (t.memoizedState = l)),
          (s.props = i),
          (s.state = l),
          (s.context = u),
          (i = a))
        : (typeof s.componentDidMount == 'function' && (t.flags |= 4194308), (i = !1))
  } else {
    ;(s = t.stateNode),
      w0(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : pn(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = sn(l))
        : ((l = At(n) ? er : St.current), (l = jr(t, l)))
    var h = n.getDerivedStateFromProps
    ;(c = typeof h == 'function' || typeof s.getSnapshotBeforeUpdate == 'function') ||
      (typeof s.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof s.componentWillReceiveProps != 'function') ||
      ((a !== d || f !== l) && lp(t, s, i, l)),
      (ri = !1),
      (f = t.memoizedState),
      (s.state = f),
      Ua(t, i, s, r)
    var p = t.memoizedState
    a !== d || f !== p || It.current || ri
      ? (typeof h == 'function' && (Gc(t, n, h, i), (p = t.memoizedState)),
        (u = ri || ap(t, n, u, i, f, p, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != 'function' &&
                typeof s.componentWillUpdate != 'function') ||
              (typeof s.componentWillUpdate == 'function' && s.componentWillUpdate(i, p, l),
              typeof s.UNSAFE_componentWillUpdate == 'function' &&
                s.UNSAFE_componentWillUpdate(i, p, l)),
            typeof s.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = i),
            (t.memoizedState = p)),
        (s.props = i),
        (s.state = p),
        (s.context = l),
        (i = u))
      : (typeof s.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (i = !1))
  }
  return rd(e, t, n, i, o, r)
}
function rd(e, t, n, i, r, o) {
  ty(e, t)
  var s = (t.flags & 128) !== 0
  if (!i && !s) return r && rp(t, n, !1), Kn(e, t, o)
  ;(i = t.stateNode), (Ox.current = t)
  var a = s && typeof n.getDerivedStateFromError != 'function' ? null : i.render()
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = $r(t, e.child, null, o)), (t.child = $r(t, null, a, o)))
      : Et(e, t, a, o),
    (t.memoizedState = i.state),
    r && rp(t, n, !0),
    t.child
  )
}
function ny(e) {
  var t = e.stateNode
  t.pendingContext
    ? ip(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ip(e, t.context, !1),
    uf(e, t.containerInfo)
}
function vp(e, t, n, i, r) {
  return Br(), lf(r), (t.flags |= 256), Et(e, t, n, i), t.child
}
var Ks = { dehydrated: null, treeContext: null, retryLane: 0 }
function Gs(e) {
  return { baseLanes: e, cachePool: null }
}
function iy(e, t, n) {
  var i = t.pendingProps,
    r = $e.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a
  if (
    ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (r & 2) !== 0),
    a ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (r |= 1),
    Pe($e, r & 1),
    e === null)
  )
    return (
      ed(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? ((t.mode & 1) === 0
            ? (t.lanes = 1)
            : e.data === '$!'
            ? (t.lanes = 8)
            : (t.lanes = 1073741824),
          null)
        : ((r = i.children),
          (e = i.fallback),
          o
            ? ((i = t.mode),
              (o = t.child),
              (r = { mode: 'hidden', children: r }),
              (i & 1) === 0 && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = r))
                : (o = nl(r, i, 0, null)),
              (e = Gi(e, i, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Gs(n)),
              (t.memoizedState = Ks),
              e)
            : od(t, r))
    )
  if (((r = e.memoizedState), r !== null)) {
    if (((a = r.dehydrated), a !== null)) {
      if (s)
        return t.flags & 256
          ? ((t.flags &= -257), Zs(e, t, n, Error(z(422))))
          : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((o = i.fallback),
            (r = t.mode),
            (i = nl({ mode: 'visible', children: i.children }, r, 0, null)),
            (o = Gi(o, r, n, null)),
            (o.flags |= 2),
            (i.return = t),
            (o.return = t),
            (i.sibling = o),
            (t.child = i),
            (t.mode & 1) !== 0 && $r(t, e.child, null, n),
            (t.child.memoizedState = Gs(n)),
            (t.memoizedState = Ks),
            o)
      if ((t.mode & 1) === 0) t = Zs(e, t, n, null)
      else if (a.data === '$!') t = Zs(e, t, n, Error(z(419)))
      else if (((i = (n & e.childLanes) !== 0), Bt || i)) {
        if (((i = et), i !== null)) {
          switch (n & -n) {
            case 4:
              o = 2
              break
            case 16:
              o = 8
              break
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
              o = 32
              break
            case 536870912:
              o = 268435456
              break
            default:
              o = 0
          }
          ;(i = (o & (i.suspendedLanes | n)) !== 0 ? 0 : o),
            i !== 0 && i !== r.retryLane && ((r.retryLane = i), on(e, i, -1))
        }
        wf(), (t = Zs(e, t, n, Error(z(421))))
      } else
        a.data === '$?'
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = Hx.bind(null, e)),
            (a._reactRetry = t),
            (t = null))
          : ((n = r.treeContext),
            (Rt = Wn(a.nextSibling)),
            ($t = t),
            (Ae = !0),
            (mn = null),
            n !== null &&
              ((Gt[Zt++] = Vn),
              (Gt[Zt++] = Un),
              (Gt[Zt++] = tr),
              (Vn = n.id),
              (Un = n.overflow),
              (tr = t)),
            (t = od(t, t.pendingProps.children)),
            (t.flags |= 4096))
      return t
    }
    return o
      ? ((i = xp(e, t, i.children, i.fallback, n)),
        (o = t.child),
        (r = e.child.memoizedState),
        (o.memoizedState = r === null ? Gs(n) : { baseLanes: r.baseLanes | n, cachePool: null }),
        (o.childLanes = e.childLanes & ~n),
        (t.memoizedState = Ks),
        i)
      : ((n = _p(e, t, i.children, n)), (t.memoizedState = null), n)
  }
  return o
    ? ((i = xp(e, t, i.children, i.fallback, n)),
      (o = t.child),
      (r = e.child.memoizedState),
      (o.memoizedState = r === null ? Gs(n) : { baseLanes: r.baseLanes | n, cachePool: null }),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ks),
      i)
    : ((n = _p(e, t, i.children, n)), (t.memoizedState = null), n)
}
function od(e, t) {
  return (t = nl({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
}
function _p(e, t, n, i) {
  var r = e.child
  return (
    (e = r.sibling),
    (n = Ci(r, { mode: 'visible', children: n })),
    (t.mode & 1) === 0 && (n.lanes = i),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((i = t.deletions), i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
    (t.child = n)
  )
}
function xp(e, t, n, i, r) {
  var o = t.mode
  e = e.child
  var s = e.sibling,
    a = { mode: 'hidden', children: n }
  return (
    (o & 1) === 0 && t.child !== e
      ? ((n = t.child), (n.childLanes = 0), (n.pendingProps = a), (t.deletions = null))
      : ((n = Ci(e, a)), (n.subtreeFlags = e.subtreeFlags & 14680064)),
    s !== null ? (i = Ci(s, i)) : ((i = Gi(i, o, r, null)), (i.flags |= 2)),
    (i.return = t),
    (n.return = t),
    (n.sibling = i),
    (t.child = n),
    i
  )
}
function Zs(e, t, n, i) {
  return (
    i !== null && lf(i),
    $r(t, e.child, null, n),
    (e = od(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function bp(e, t, n) {
  e.lanes |= t
  var i = e.alternate
  i !== null && (i.lanes |= t), Kc(e.return, t, n)
}
function Wu(e, t, n, i, r) {
  var o = e.memoizedState
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = i),
      (o.tail = n),
      (o.tailMode = r))
}
function ry(e, t, n) {
  var i = t.pendingProps,
    r = i.revealOrder,
    o = i.tail
  if ((Et(e, t, i.children, n), (i = $e.current), (i & 2) !== 0))
    (i = (i & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bp(e, n, t)
        else if (e.tag === 19) bp(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    i &= 1
  }
  if ((Pe($e, i), (t.mode & 1) === 0)) t.memoizedState = null
  else
    switch (r) {
      case 'forwards':
        for (n = t.child, r = null; n !== null; )
          (e = n.alternate), e !== null && Qa(e) === null && (r = n), (n = n.sibling)
        ;(n = r),
          n === null ? ((r = t.child), (t.child = null)) : ((r = n.sibling), (n.sibling = null)),
          Wu(t, !1, r, n, o)
        break
      case 'backwards':
        for (n = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && Qa(e) === null)) {
            t.child = r
            break
          }
          ;(e = r.sibling), (r.sibling = n), (n = r), (r = e)
        }
        Wu(t, !0, n, null, o)
        break
      case 'together':
        Wu(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Kn(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Vr |= t.lanes), (n & t.childLanes) === 0))
    return null
  if (e !== null && t.child !== e.child) throw Error(z(153))
  if (t.child !== null) {
    for (e = t.child, n = Ci(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = Ci(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function Tx(e, t, n) {
  switch (t.tag) {
    case 3:
      ny(t), Br()
      break
    case 5:
      O0(t)
      break
    case 1:
      At(t.type) && Ha(t)
      break
    case 4:
      uf(t, t.stateNode.containerInfo)
      break
    case 10:
      var i = t.type._context,
        r = t.memoizedProps.value
      Pe(Wa, i._currentValue), (i._currentValue = r)
      break
    case 13:
      if (((i = t.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (Pe($e, $e.current & 1), (t.flags |= 128), null)
          : (n & t.child.childLanes) !== 0
          ? iy(e, t, n)
          : (Pe($e, $e.current & 1), (e = Kn(e, t, n)), e !== null ? e.sibling : null)
      Pe($e, $e.current & 1)
      break
    case 19:
      if (((i = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
        if (i) return ry(e, t, n)
        t.flags |= 128
      }
      if (
        ((r = t.memoizedState),
        r !== null && ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        Pe($e, $e.current),
        i)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), ey(e, t, n)
  }
  return Kn(e, t, n)
}
function Lx(e, t) {
  switch ((af(t), t.tag)) {
    case 1:
      return (
        At(t.type) && $a(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Hr(),
        De(It),
        De(St),
        df(),
        (e = t.flags),
        (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return cf(t), null
    case 13:
      if ((De($e), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(z(340))
        Br()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return De($e), null
    case 4:
      return Hr(), null
    case 10:
      return rf(t.type._context), null
    case 22:
    case 23:
      return bf(), null
    case 24:
      return null
    default:
      return null
  }
}
var Js = !1,
  qi = !1,
  Rx = typeof WeakSet == 'function' ? WeakSet : Set,
  j = null
function Ga(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (i) {
        Nt(e, t, i)
      }
    else n.current = null
}
function sd(e, t, n) {
  try {
    n()
  } catch (i) {
    Nt(e, t, i)
  }
}
var wp = !1
function Nx(e, t) {
  if (((e = d0()), ef(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var i = n.getSelection && n.getSelection()
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode
          var r = i.anchorOffset,
            o = i.focusNode
          i = i.focusOffset
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null
            break e
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null
          t: for (;;) {
            for (
              var h;
              d !== n || (r !== 0 && d.nodeType !== 3) || (a = s + r),
                d !== o || (i !== 0 && d.nodeType !== 3) || (l = s + i),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h)
            for (;;) {
              if (d === e) break t
              if (
                (f === n && ++u === r && (a = s),
                f === o && ++c === i && (l = s),
                (h = d.nextSibling) !== null)
              )
                break
              ;(d = f), (f = d.parentNode)
            }
            d = h
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Uc = { focusedElem: e, selectionRange: n }, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e)
    else
      for (; j !== null; ) {
        t = j
        try {
          var p = t.alternate
          if ((t.flags & 1024) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (p !== null) {
                  var y = p.memoizedProps,
                    _ = p.memoizedState,
                    g = t.stateNode,
                    m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : pn(t.type, y), _)
                  g.__reactInternalSnapshotBeforeUpdate = m
                }
                break
              case 3:
                var v = t.stateNode.containerInfo
                if (v.nodeType === 1) v.textContent = ''
                else if (v.nodeType === 9) {
                  var x = v.body
                  x != null && (x.textContent = '')
                }
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(z(163))
            }
        } catch (b) {
          Nt(t, t.return, b)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (j = e)
          break
        }
        j = t.return
      }
  return (p = wp), (wp = !1), p
}
function as(e, t, n) {
  var i = t.updateQueue
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var r = (i = i.next)
    do {
      if ((r.tag & e) === e) {
        var o = r.destroy
        ;(r.destroy = void 0), o !== void 0 && sd(t, n, o)
      }
      r = r.next
    } while (r !== i)
  }
}
function Ll(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var i = n.create
        n.destroy = i()
      }
      n = n.next
    } while (n !== t)
  }
}
function ad(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function Sp(e, t, n) {
  if (En && typeof En.onCommitFiberUnmount == 'function')
    try {
      En.onCommitFiberUnmount(Sl, t)
    } catch {}
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (((e = t.updateQueue), e !== null && ((e = e.lastEffect), e !== null))) {
        var i = (e = e.next)
        do {
          var r = i,
            o = r.destroy
          ;(r = r.tag),
            o !== void 0 && ((r & 2) !== 0 || (r & 4) !== 0) && sd(t, n, o),
            (i = i.next)
        } while (i !== e)
      }
      break
    case 1:
      if ((Ga(t, n), (e = t.stateNode), typeof e.componentWillUnmount == 'function'))
        try {
          ;(e.props = t.memoizedProps), (e.state = t.memoizedState), e.componentWillUnmount()
        } catch (s) {
          Nt(t, n, s)
        }
      break
    case 5:
      Ga(t, n)
      break
    case 4:
      ay(e, t, n)
  }
}
function oy(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), oy(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[kn], delete t[ts], delete t[Qc], delete t[mx], delete t[yx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function sy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function kp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || sy(e.return)) return null
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Cp(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (sy(t)) break e
      t = t.return
    }
    throw Error(z(160))
  }
  var n = t
  switch (n.tag) {
    case 5:
      ;(t = n.stateNode), n.flags & 32 && (qo(t, ''), (n.flags &= -33)), (n = kp(e)), ud(e, n, t)
      break
    case 3:
    case 4:
      ;(t = n.stateNode.containerInfo), (n = kp(e)), ld(e, n, t)
      break
    default:
      throw Error(z(161))
  }
}
function ld(e, t, n) {
  var i = e.tag
  if (i === 5 || i === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ba))
  else if (i !== 4 && ((e = e.child), e !== null))
    for (ld(e, t, n), e = e.sibling; e !== null; ) ld(e, t, n), (e = e.sibling)
}
function ud(e, t, n) {
  var i = e.tag
  if (i === 5 || i === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (i !== 4 && ((e = e.child), e !== null))
    for (ud(e, t, n), e = e.sibling; e !== null; ) ud(e, t, n), (e = e.sibling)
}
function ay(e, t, n) {
  for (var i = t, r = !1, o, s; ; ) {
    if (!r) {
      r = i.return
      e: for (;;) {
        if (r === null) throw Error(z(160))
        switch (((o = r.stateNode), r.tag)) {
          case 5:
            s = !1
            break e
          case 3:
            ;(o = o.containerInfo), (s = !0)
            break e
          case 4:
            ;(o = o.containerInfo), (s = !0)
            break e
        }
        r = r.return
      }
      r = !0
    }
    if (i.tag === 5 || i.tag === 6) {
      e: for (var a = e, l = i, u = n, c = l; ; )
        if ((Sp(a, c, u), c.child !== null && c.tag !== 4)) (c.child.return = c), (c = c.child)
        else {
          if (c === l) break e
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === l) break e
            c = c.return
          }
          ;(c.sibling.return = c.return), (c = c.sibling)
        }
      s
        ? ((a = o),
          (l = i.stateNode),
          a.nodeType === 8 ? a.parentNode.removeChild(l) : a.removeChild(l))
        : o.removeChild(i.stateNode)
    } else if (i.tag === 18)
      s
        ? ((a = o),
          (l = i.stateNode),
          a.nodeType === 8 ? Fu(a.parentNode, l) : a.nodeType === 1 && Fu(a, l),
          Ko(a))
        : Fu(o, i.stateNode)
    else if (i.tag === 4) {
      if (i.child !== null) {
        ;(o = i.stateNode.containerInfo), (s = !0), (i.child.return = i), (i = i.child)
        continue
      }
    } else if ((Sp(e, i, n), i.child !== null)) {
      ;(i.child.return = i), (i = i.child)
      continue
    }
    if (i === t) break
    for (; i.sibling === null; ) {
      if (i.return === null || i.return === t) return
      ;(i = i.return), i.tag === 4 && (r = !1)
    }
    ;(i.sibling.return = i.return), (i = i.sibling)
  }
}
function Vu(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      as(3, t, t.return), Ll(3, t), as(5, t, t.return)
      return
    case 1:
      return
    case 5:
      var n = t.stateNode
      if (n != null) {
        var i = t.memoizedProps,
          r = e !== null ? e.memoizedProps : i
        e = t.type
        var o = t.updateQueue
        if (((t.updateQueue = null), o !== null)) {
          for (
            e === 'input' && i.type === 'radio' && i.name != null && Nm(n, i),
              zc(e, r),
              t = zc(e, i),
              r = 0;
            r < o.length;
            r += 2
          ) {
            var s = o[r],
              a = o[r + 1]
            s === 'style'
              ? Fm(n, a)
              : s === 'dangerouslySetInnerHTML'
              ? Im(n, a)
              : s === 'children'
              ? qo(n, a)
              : $d(n, s, a, t)
          }
          switch (e) {
            case 'input':
              Tc(n, i)
              break
            case 'textarea':
              Dm(n, i)
              break
            case 'select':
              ;(e = n._wrapperState.wasMultiple),
                (n._wrapperState.wasMultiple = !!i.multiple),
                (o = i.value),
                o != null
                  ? Or(n, !!i.multiple, o, !1)
                  : e !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Or(n, !!i.multiple, i.defaultValue, !0)
                      : Or(n, !!i.multiple, i.multiple ? [] : '', !1))
          }
          n[ts] = i
        }
      }
      return
    case 6:
      if (t.stateNode === null) throw Error(z(162))
      t.stateNode.nodeValue = t.memoizedProps
      return
    case 3:
      e !== null && e.memoizedState.isDehydrated && Ko(t.stateNode.containerInfo)
      return
    case 12:
      return
    case 13:
      Ep(t)
      return
    case 19:
      Ep(t)
      return
    case 17:
      return
  }
  throw Error(z(163))
}
function Ep(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new Rx()),
      t.forEach(function (i) {
        var r = Wx.bind(null, e, i)
        n.has(i) || (n.add(i), i.then(r, r))
      })
  }
}
function Dx(e, t) {
  for (j = t; j !== null; ) {
    t = j
    var n = t.deletions
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var r = n[i]
        try {
          ay(e, r, t)
          var o = r.alternate
          o !== null && (o.return = null), (r.return = null)
        } catch (P) {
          Nt(r, t, P)
        }
      }
    if (((n = t.child), (t.subtreeFlags & 12854) !== 0 && n !== null)) (n.return = t), (j = n)
    else
      for (; j !== null; ) {
        t = j
        try {
          var s = t.flags
          if ((s & 32 && qo(t.stateNode, ''), s & 512)) {
            var a = t.alternate
            if (a !== null) {
              var l = a.ref
              l !== null && (typeof l == 'function' ? l(null) : (l.current = null))
            }
          }
          if (s & 8192)
            switch (t.tag) {
              case 13:
                if (t.memoizedState !== null) {
                  var u = t.alternate
                  ;(u === null || u.memoizedState === null) && (_f = Xe())
                }
                break
              case 22:
                var c = t.memoizedState !== null,
                  d = t.alternate,
                  f = d !== null && d.memoizedState !== null
                n = t
                e: {
                  ;(i = n), (r = c)
                  for (var h = null, p = i; ; ) {
                    if (p.tag === 5) {
                      if (h === null) {
                        h = p
                        var y = p.stateNode
                        if (r) {
                          var _ = y.style
                          typeof _.setProperty == 'function'
                            ? _.setProperty('display', 'none', 'important')
                            : (_.display = 'none')
                        } else {
                          var g = p.stateNode,
                            m = p.memoizedProps.style,
                            v = m != null && m.hasOwnProperty('display') ? m.display : null
                          g.style.display = Am('display', v)
                        }
                      }
                    } else if (p.tag === 6)
                      h === null && (p.stateNode.nodeValue = r ? '' : p.memoizedProps)
                    else if (
                      ((p.tag !== 22 && p.tag !== 23) || p.memoizedState === null || p === i) &&
                      p.child !== null
                    ) {
                      ;(p.child.return = p), (p = p.child)
                      continue
                    }
                    if (p === i) break
                    for (; p.sibling === null; ) {
                      if (p.return === null || p.return === i) break e
                      h === p && (h = null), (p = p.return)
                    }
                    h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling)
                  }
                }
                if (c && !f && (n.mode & 1) !== 0) {
                  j = n
                  for (var x = n.child; x !== null; ) {
                    for (n = j = x; j !== null; ) {
                      i = j
                      var b = i.child
                      switch (i.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          as(4, i, i.return)
                          break
                        case 1:
                          Ga(i, i.return)
                          var O = i.stateNode
                          if (typeof O.componentWillUnmount == 'function') {
                            var k = i.return
                            try {
                              ;(O.props = i.memoizedProps),
                                (O.state = i.memoizedState),
                                O.componentWillUnmount()
                            } catch (P) {
                              Nt(i, k, P)
                            }
                          }
                          break
                        case 5:
                          Ga(i, i.return)
                          break
                        case 22:
                          if (i.memoizedState !== null) {
                            Mp(n)
                            continue
                          }
                      }
                      b !== null ? ((b.return = i), (j = b)) : Mp(n)
                    }
                    x = x.sibling
                  }
                }
            }
          switch (s & 4102) {
            case 2:
              Cp(t), (t.flags &= -3)
              break
            case 6:
              Cp(t), (t.flags &= -3), Vu(t.alternate, t)
              break
            case 4096:
              t.flags &= -4097
              break
            case 4100:
              ;(t.flags &= -4097), Vu(t.alternate, t)
              break
            case 4:
              Vu(t.alternate, t)
          }
        } catch (P) {
          Nt(t, t.return, P)
        }
        if (((n = t.sibling), n !== null)) {
          ;(n.return = t.return), (j = n)
          break
        }
        j = t.return
      }
  }
}
function zx(e, t, n) {
  ;(j = e), ly(e)
}
function ly(e, t, n) {
  for (var i = (e.mode & 1) !== 0; j !== null; ) {
    var r = j,
      o = r.child
    if (r.tag === 22 && i) {
      var s = r.memoizedState !== null || Js
      if (!s) {
        var a = r.alternate,
          l = (a !== null && a.memoizedState !== null) || qi
        a = Js
        var u = qi
        if (((Js = s), (qi = l) && !u))
          for (j = r; j !== null; )
            (s = j),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Op(r)
                : l !== null
                ? ((l.return = s), (j = l))
                : Op(r)
        for (; o !== null; ) (j = o), ly(o), (o = o.sibling)
        ;(j = r), (Js = a), (qi = u)
      }
      Pp(e)
    } else (r.subtreeFlags & 8772) !== 0 && o !== null ? ((o.return = r), (j = o)) : Pp(e)
  }
}
function Pp(e) {
  for (; j !== null; ) {
    var t = j
    if ((t.flags & 8772) !== 0) {
      var n = t.alternate
      try {
        if ((t.flags & 8772) !== 0)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              qi || Ll(5, t)
              break
            case 1:
              var i = t.stateNode
              if (t.flags & 4 && !qi)
                if (n === null) i.componentDidMount()
                else {
                  var r = t.elementType === t.type ? n.memoizedProps : pn(t.type, n.memoizedProps)
                  i.componentDidUpdate(r, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate)
                }
              var o = t.updateQueue
              o !== null && sp(t, o, i)
              break
            case 3:
              var s = t.updateQueue
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                sp(t, s, n)
              }
              break
            case 5:
              var a = t.stateNode
              if (n === null && t.flags & 4) {
                n = a
                var l = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus()
                    break
                  case 'img':
                    l.src && (n.src = l.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var c = u.memoizedState
                  if (c !== null) {
                    var d = c.dehydrated
                    d !== null && Ko(d)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break
            default:
              throw Error(z(163))
          }
        qi || (t.flags & 512 && ad(t))
      } catch (f) {
        Nt(t, t.return, f)
      }
    }
    if (t === e) {
      j = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (j = n)
      break
    }
    j = t.return
  }
}
function Mp(e) {
  for (; j !== null; ) {
    var t = j
    if (t === e) {
      j = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (j = n)
      break
    }
    j = t.return
  }
}
function Op(e) {
  for (; j !== null; ) {
    var t = j
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            Ll(4, t)
          } catch (l) {
            Nt(t, n, l)
          }
          break
        case 1:
          var i = t.stateNode
          if (typeof i.componentDidMount == 'function') {
            var r = t.return
            try {
              i.componentDidMount()
            } catch (l) {
              Nt(t, r, l)
            }
          }
          var o = t.return
          try {
            ad(t)
          } catch (l) {
            Nt(t, o, l)
          }
          break
        case 5:
          var s = t.return
          try {
            ad(t)
          } catch (l) {
            Nt(t, s, l)
          }
      }
    } catch (l) {
      Nt(t, t.return, l)
    }
    if (t === e) {
      j = null
      break
    }
    var a = t.sibling
    if (a !== null) {
      ;(a.return = t.return), (j = a)
      break
    }
    j = t.return
  }
}
var Ix = Math.ceil,
  Za = Zn.ReactCurrentDispatcher,
  yf = Zn.ReactCurrentOwner,
  rn = Zn.ReactCurrentBatchConfig,
  ce = 0,
  et = null,
  Je = null,
  ft = 0,
  jt = 0,
  Mr = Li(0),
  nt = 0,
  ls = null,
  Vr = 0,
  Rl = 0,
  vf = 0,
  Io = null,
  Lt = null,
  _f = 0,
  Ur = 1 / 0,
  Ja = !1,
  cd = null,
  vi = null,
  ea = !1,
  ui = null,
  el = 0,
  Ao = 0,
  dd = null,
  Pa = -1,
  Ma = 0
function Pt() {
  return (ce & 6) !== 0 ? Xe() : Pa !== -1 ? Pa : (Pa = Xe())
}
function _i(e) {
  return (e.mode & 1) === 0
    ? 1
    : (ce & 2) !== 0 && ft !== 0
    ? ft & -ft
    : _x.transition !== null
    ? (Ma === 0 && ((e = Bs), (Bs <<= 1), (Bs & 4194240) === 0 && (Bs = 64), (Ma = e)), Ma)
    : ((e = we), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : n0(e.type))), e)
}
function on(e, t, n) {
  if (50 < Ao) throw ((Ao = 0), (dd = null), Error(z(185)))
  var i = Nl(e, t)
  return i === null
    ? null
    : (xs(i, t, n),
      ((ce & 2) === 0 || i !== et) &&
        (i === et && ((ce & 2) === 0 && (Rl |= t), nt === 4 && si(i, ft)),
        Ft(i, n),
        t === 1 && ce === 0 && (e.mode & 1) === 0 && ((Ur = Xe() + 500), Ml && Ri())),
      i)
}
function Nl(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
function Ft(e, t) {
  var n = e.callbackNode
  __(e, t)
  var i = Aa(e, e === et ? ft : 0)
  if (i === 0) n !== null && Ih(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = i & -i), e.callbackPriority !== t)) {
    if ((n != null && Ih(n), t === 1))
      e.tag === 0 ? vx(Tp.bind(null, e)) : b0(Tp.bind(null, e)),
        px(function () {
          ce === 0 && Ri()
        }),
        (n = null)
    else {
      switch (Km(i)) {
        case 1:
          n = qd
          break
        case 4:
          n = Qm
          break
        case 16:
          n = Ia
          break
        case 536870912:
          n = Xm
          break
        default:
          n = Ia
      }
      n = my(n, uy.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function uy(e, t) {
  if (((Pa = -1), (Ma = 0), (ce & 6) !== 0)) throw Error(z(327))
  var n = e.callbackNode
  if (Dr() && e.callbackNode !== n) return null
  var i = Aa(e, e === et ? ft : 0)
  if (i === 0) return null
  if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = tl(e, i)
  else {
    t = i
    var r = ce
    ce |= 2
    var o = dy()
    ;(et !== e || ft !== t) && ((Ur = Xe() + 500), Ki(e, t))
    do
      try {
        jx()
        break
      } catch (a) {
        cy(e, a)
      }
    while (1)
    nf(), (Za.current = o), (ce = r), Je !== null ? (t = 0) : ((et = null), (ft = 0), (t = nt))
  }
  if (t !== 0) {
    if ((t === 2 && ((r = Bc(e)), r !== 0 && ((i = r), (t = fd(e, r)))), t === 1))
      throw ((n = ls), Ki(e, 0), si(e, i), Ft(e, Xe()), n)
    if (t === 6) si(e, i)
    else {
      if (
        ((r = e.current.alternate),
        (i & 30) === 0 &&
          !Ax(r) &&
          ((t = tl(e, i)), t === 2 && ((o = Bc(e)), o !== 0 && ((i = o), (t = fd(e, o)))), t === 1))
      )
        throw ((n = ls), Ki(e, 0), si(e, i), Ft(e, Xe()), n)
      switch (((e.finishedWork = r), (e.finishedLanes = i), t)) {
        case 0:
        case 1:
          throw Error(z(345))
        case 2:
          Bi(e, Lt)
          break
        case 3:
          if ((si(e, i), (i & 130023424) === i && ((t = _f + 500 - Xe()), 10 < t))) {
            if (Aa(e, 0) !== 0) break
            if (((r = e.suspendedLanes), (r & i) !== i)) {
              Pt(), (e.pingedLanes |= e.suspendedLanes & r)
              break
            }
            e.timeoutHandle = Yc(Bi.bind(null, e, Lt), t)
            break
          }
          Bi(e, Lt)
          break
        case 4:
          if ((si(e, i), (i & 4194240) === i)) break
          for (t = e.eventTimes, r = -1; 0 < i; ) {
            var s = 31 - _n(i)
            ;(o = 1 << s), (s = t[s]), s > r && (r = s), (i &= ~o)
          }
          if (
            ((i = r),
            (i = Xe() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                ? 480
                : 1080 > i
                ? 1080
                : 1920 > i
                ? 1920
                : 3e3 > i
                ? 3e3
                : 4320 > i
                ? 4320
                : 1960 * Ix(i / 1960)) - i),
            10 < i)
          ) {
            e.timeoutHandle = Yc(Bi.bind(null, e, Lt), i)
            break
          }
          Bi(e, Lt)
          break
        case 5:
          Bi(e, Lt)
          break
        default:
          throw Error(z(329))
      }
    }
  }
  return Ft(e, Xe()), e.callbackNode === n ? uy.bind(null, e) : null
}
function fd(e, t) {
  var n = Io
  return (
    e.current.memoizedState.isDehydrated && (Ki(e, t).flags |= 256),
    (e = tl(e, t)),
    e !== 2 && ((t = Lt), (Lt = n), t !== null && hd(t)),
    e
  )
}
function hd(e) {
  Lt === null ? (Lt = e) : Lt.push.apply(Lt, e)
}
function Ax(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            o = r.getSnapshot
          r = r.value
          try {
            if (!Tn(o(), r)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function si(e, t) {
  for (
    t &= ~vf, t &= ~Rl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - _n(t),
      i = 1 << n
    ;(e[n] = -1), (t &= ~i)
  }
}
function Tp(e) {
  if ((ce & 6) !== 0) throw Error(z(327))
  Dr()
  var t = Aa(e, 0)
  if ((t & 1) === 0) return Ft(e, Xe()), null
  var n = tl(e, t)
  if (e.tag !== 0 && n === 2) {
    var i = Bc(e)
    i !== 0 && ((t = i), (n = fd(e, i)))
  }
  if (n === 1) throw ((n = ls), Ki(e, 0), si(e, t), Ft(e, Xe()), n)
  if (n === 6) throw Error(z(345))
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Bi(e, Lt), Ft(e, Xe()), null
}
function xf(e, t) {
  var n = ce
  ce |= 1
  try {
    return e(t)
  } finally {
    ;(ce = n), ce === 0 && ((Ur = Xe() + 500), Ml && Ri())
  }
}
function nr(e) {
  ui !== null && ui.tag === 0 && (ce & 6) === 0 && Dr()
  var t = ce
  ce |= 1
  var n = rn.transition,
    i = we
  try {
    if (((rn.transition = null), (we = 1), e)) return e()
  } finally {
    ;(we = i), (rn.transition = n), (ce = t), (ce & 6) === 0 && Ri()
  }
}
function bf() {
  ;(jt = Mr.current), De(Mr)
}
function Ki(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), hx(n)), Je !== null))
    for (n = Je.return; n !== null; ) {
      var i = n
      switch ((af(i), i.tag)) {
        case 1:
          ;(i = i.type.childContextTypes), i != null && $a()
          break
        case 3:
          Hr(), De(It), De(St), df()
          break
        case 5:
          cf(i)
          break
        case 4:
          Hr()
          break
        case 13:
          De($e)
          break
        case 19:
          De($e)
          break
        case 10:
          rf(i.type._context)
          break
        case 22:
        case 23:
          bf()
      }
      n = n.return
    }
  if (
    ((et = e),
    (Je = e = Ci(e.current, null)),
    (ft = jt = t),
    (nt = 0),
    (ls = null),
    (vf = Rl = Vr = 0),
    (Lt = Io = null),
    Cn !== null)
  ) {
    for (t = 0; t < Cn.length; t++)
      if (((n = Cn[t]), (i = n.interleaved), i !== null)) {
        n.interleaved = null
        var r = i.next,
          o = n.pending
        if (o !== null) {
          var s = o.next
          ;(o.next = r), (i.next = s)
        }
        n.pending = i
      }
    Cn = null
  }
  return e
}
function cy(e, t) {
  do {
    var n = Je
    try {
      if ((nf(), (Ca.current = Ka), Xa)) {
        for (var i = Qe.memoizedState; i !== null; ) {
          var r = i.queue
          r !== null && (r.pending = null), (i = i.next)
        }
        Xa = !1
      }
      if (
        ((Wr = 0),
        (lt = bt = Qe = null),
        (zo = !1),
        (rs = 0),
        (yf.current = null),
        n === null || n.return === null)
      ) {
        ;(nt = 1), (ls = t), (Je = null)
        break
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t
        if (
          ((t = ft),
          (a.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = a,
            d = c.tag
          if ((c.mode & 1) === 0 && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var h = hp(s)
          if (h !== null) {
            ;(h.flags &= -257), pp(h, s, a, o, t), h.mode & 1 && fp(o, u, t), (t = h), (l = u)
            var p = t.updateQueue
            if (p === null) {
              var y = new Set()
              y.add(l), (t.updateQueue = y)
            } else p.add(l)
            break e
          } else {
            if ((t & 1) === 0) {
              fp(o, u, t), wf()
              break e
            }
            l = Error(z(426))
          }
        } else if (Ae && a.mode & 1) {
          var _ = hp(s)
          if (_ !== null) {
            ;(_.flags & 65536) === 0 && (_.flags |= 256), pp(_, s, a, o, t), lf(l)
            break e
          }
        }
        ;(o = l),
          nt !== 4 && (nt = 2),
          Io === null ? (Io = [o]) : Io.push(o),
          (l = mf(l, a)),
          (a = s)
        do {
          switch (a.tag) {
            case 3:
              ;(a.flags |= 65536), (t &= -t), (a.lanes |= t)
              var g = Q0(a, l, t)
              op(a, g)
              break e
            case 1:
              o = l
              var m = a.type,
                v = a.stateNode
              if (
                (a.flags & 128) === 0 &&
                (typeof m.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (vi === null || !vi.has(v))))
              ) {
                ;(a.flags |= 65536), (t &= -t), (a.lanes |= t)
                var x = X0(a, o, t)
                op(a, x)
                break e
              }
          }
          a = a.return
        } while (a !== null)
      }
      hy(n)
    } catch (b) {
      ;(t = b), Je === n && n !== null && (Je = n = n.return)
      continue
    }
    break
  } while (1)
}
function dy() {
  var e = Za.current
  return (Za.current = Ka), e === null ? Ka : e
}
function wf() {
  ;(nt === 0 || nt === 3 || nt === 2) && (nt = 4),
    et === null || ((Vr & 268435455) === 0 && (Rl & 268435455) === 0) || si(et, ft)
}
function tl(e, t) {
  var n = ce
  ce |= 2
  var i = dy()
  ;(et === e && ft === t) || Ki(e, t)
  do
    try {
      Fx()
      break
    } catch (r) {
      cy(e, r)
    }
  while (1)
  if ((nf(), (ce = n), (Za.current = i), Je !== null)) throw Error(z(261))
  return (et = null), (ft = 0), nt
}
function Fx() {
  for (; Je !== null; ) fy(Je)
}
function jx() {
  for (; Je !== null && !c_(); ) fy(Je)
}
function fy(e) {
  var t = gy(e.alternate, e, jt)
  ;(e.memoizedProps = e.pendingProps), t === null ? hy(e) : (Je = t), (yf.current = null)
}
function hy(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), (t.flags & 32768) === 0)) {
      if (((n = Mx(n, t, jt)), n !== null)) {
        Je = n
        return
      }
    } else {
      if (((n = Lx(n, t)), n !== null)) {
        ;(n.flags &= 32767), (Je = n)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(nt = 6), (Je = null)
        return
      }
    }
    if (((t = t.sibling), t !== null)) {
      Je = t
      return
    }
    Je = t = e
  } while (t !== null)
  nt === 0 && (nt = 5)
}
function Bi(e, t) {
  var n = we,
    i = rn.transition
  try {
    ;(rn.transition = null), (we = 1), Bx(e, t, n)
  } finally {
    ;(rn.transition = i), (we = n)
  }
  return null
}
function Bx(e, t, n) {
  do Dr()
  while (ui !== null)
  if ((ce & 6) !== 0) throw Error(z(327))
  var i = e.finishedWork,
    r = e.finishedLanes
  if (i === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current)) throw Error(z(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = i.lanes | i.childLanes
  if (
    (x_(e, o),
    e === et && ((Je = et = null), (ft = 0)),
    ((i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0) ||
      ea ||
      ((ea = !0),
      my(Ia, function () {
        return Dr(), null
      })),
    (o = (i.flags & 15990) !== 0),
    (i.subtreeFlags & 15990) !== 0 || o)
  ) {
    ;(o = rn.transition), (rn.transition = null)
    var s = we
    we = 1
    var a = ce
    ;(ce |= 4),
      (yf.current = null),
      Nx(e, i),
      Dx(e, i),
      sx(Uc),
      (Uc = null),
      (e.current = i),
      zx(i),
      d_(),
      (ce = a),
      (we = s),
      (rn.transition = o)
  } else e.current = i
  if (
    (ea && ((ea = !1), (ui = e), (el = r)),
    (o = e.pendingLanes),
    o === 0 && (vi = null),
    p_(i.stateNode),
    Ft(e, Xe()),
    t !== null)
  )
    for (n = e.onRecoverableError, i = 0; i < t.length; i++) n(t[i])
  if (Ja) throw ((Ja = !1), (e = cd), (cd = null), e)
  return (
    (el & 1) !== 0 && e.tag !== 0 && Dr(),
    (o = e.pendingLanes),
    (o & 1) !== 0 ? (e === dd ? Ao++ : ((Ao = 0), (dd = e))) : (Ao = 0),
    Ri(),
    null
  )
}
function Dr() {
  if (ui !== null) {
    var e = Km(el),
      t = rn.transition,
      n = we
    try {
      if (((rn.transition = null), (we = 16 > e ? 16 : e), ui === null)) var i = !1
      else {
        if (((e = ui), (ui = null), (el = 0), (ce & 6) !== 0)) throw Error(z(331))
        var r = ce
        for (ce |= 4, j = e.current; j !== null; ) {
          var o = j,
            s = o.child
          if ((j.flags & 16) !== 0) {
            var a = o.deletions
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l]
                for (j = u; j !== null; ) {
                  var c = j
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      as(8, c, o)
                  }
                  var d = c.child
                  if (d !== null) (d.return = c), (j = d)
                  else
                    for (; j !== null; ) {
                      c = j
                      var f = c.sibling,
                        h = c.return
                      if ((oy(c), c === u)) {
                        j = null
                        break
                      }
                      if (f !== null) {
                        ;(f.return = h), (j = f)
                        break
                      }
                      j = h
                    }
                }
              }
              var p = o.alternate
              if (p !== null) {
                var y = p.child
                if (y !== null) {
                  p.child = null
                  do {
                    var _ = y.sibling
                    ;(y.sibling = null), (y = _)
                  } while (y !== null)
                }
              }
              j = o
            }
          }
          if ((o.subtreeFlags & 2064) !== 0 && s !== null) (s.return = o), (j = s)
          else
            e: for (; j !== null; ) {
              if (((o = j), (o.flags & 2048) !== 0))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    as(9, o, o.return)
                }
              var g = o.sibling
              if (g !== null) {
                ;(g.return = o.return), (j = g)
                break e
              }
              j = o.return
            }
        }
        var m = e.current
        for (j = m; j !== null; ) {
          s = j
          var v = s.child
          if ((s.subtreeFlags & 2064) !== 0 && v !== null) (v.return = s), (j = v)
          else
            e: for (s = m; j !== null; ) {
              if (((a = j), (a.flags & 2048) !== 0))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ll(9, a)
                  }
                } catch (b) {
                  Nt(a, a.return, b)
                }
              if (a === s) {
                j = null
                break e
              }
              var x = a.sibling
              if (x !== null) {
                ;(x.return = a.return), (j = x)
                break e
              }
              j = a.return
            }
        }
        if (((ce = r), Ri(), En && typeof En.onPostCommitFiberRoot == 'function'))
          try {
            En.onPostCommitFiberRoot(Sl, e)
          } catch {}
        i = !0
      }
      return i
    } finally {
      ;(we = n), (rn.transition = t)
    }
  }
  return !1
}
function Lp(e, t, n) {
  ;(t = mf(n, t)),
    (t = Q0(e, t, 1)),
    yi(e, t),
    (t = Pt()),
    (e = Nl(e, 1)),
    e !== null && (xs(e, 1, t), Ft(e, t))
}
function Nt(e, t, n) {
  if (e.tag === 3) Lp(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Lp(t, e, n)
        break
      } else if (t.tag === 1) {
        var i = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof i.componentDidCatch == 'function' && (vi === null || !vi.has(i)))
        ) {
          ;(e = mf(n, e)),
            (e = X0(t, e, 1)),
            yi(t, e),
            (e = Pt()),
            (t = Nl(t, 1)),
            t !== null && (xs(t, 1, e), Ft(t, e))
          break
        }
      }
      t = t.return
    }
}
function $x(e, t, n) {
  var i = e.pingCache
  i !== null && i.delete(t),
    (t = Pt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    et === e &&
      (ft & n) === n &&
      (nt === 4 || (nt === 3 && (ft & 130023424) === ft && 500 > Xe() - _f) ? Ki(e, 0) : (vf |= n)),
    Ft(e, t)
}
function py(e, t) {
  t === 0 &&
    ((e.mode & 1) === 0
      ? (t = 1)
      : ((t = $s), ($s <<= 1), ($s & 130023424) === 0 && ($s = 4194304)))
  var n = Pt()
  ;(e = Nl(e, t)), e !== null && (xs(e, t, n), Ft(e, n))
}
function Hx(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), py(e, n)
}
function Wx(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var i = e.stateNode,
        r = e.memoizedState
      r !== null && (n = r.retryLane)
      break
    case 19:
      i = e.stateNode
      break
    default:
      throw Error(z(314))
  }
  i !== null && i.delete(t), py(e, n)
}
var gy
gy = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || It.current) Bt = !0
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return (Bt = !1), Tx(e, t, n)
      Bt = (e.flags & 131072) !== 0
    }
  else (Bt = !1), Ae && (t.flags & 1048576) !== 0 && C0(t, Ya, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var i = t.type
      e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps)
      var r = jr(t, St.current)
      Nr(t, n), (r = hf(null, t, i, e, r, n))
      var o = pf()
      return (
        (t.flags |= 1),
        typeof r == 'object' && r !== null && typeof r.render == 'function' && r.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            At(i) ? ((o = !0), Ha(t)) : (o = !1),
            (t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null),
            of(t),
            (r.updater = Ol),
            (t.stateNode = r),
            (r._reactInternals = t),
            Zc(t, i, e, n),
            (t = rd(null, t, i, !0, o, n)))
          : ((t.tag = 0), Ae && o && sf(t), Et(null, t, r, n), (t = t.child)),
        t
      )
    case 16:
      i = t.elementType
      e: {
        switch (
          (e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (r = i._init),
          (i = r(i._payload)),
          (t.type = i),
          (r = t.tag = Ux(i)),
          (e = pn(i, e)),
          r)
        ) {
          case 0:
            t = id(null, t, i, e, n)
            break e
          case 1:
            t = yp(null, t, i, e, n)
            break e
          case 11:
            t = gp(null, t, i, e, n)
            break e
          case 14:
            t = mp(null, t, i, pn(i.type, e), n)
            break e
        }
        throw Error(z(306, i, ''))
      }
      return t
    case 0:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : pn(i, r)),
        id(e, t, i, r, n)
      )
    case 1:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : pn(i, r)),
        yp(e, t, i, r, n)
      )
    case 3:
      e: {
        if ((ny(t), e === null)) throw Error(z(387))
        ;(i = t.pendingProps), (o = t.memoizedState), (r = o.element), w0(e, t), Ua(t, i, null, n)
        var s = t.memoizedState
        if (((i = s.element), o.isDehydrated))
          if (
            ((o = { element: i, isDehydrated: !1, cache: s.cache, transitions: s.transitions }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ;(r = Error(z(423))), (t = vp(e, t, i, n, r))
            break e
          } else if (i !== r) {
            ;(r = Error(z(424))), (t = vp(e, t, i, n, r))
            break e
          } else
            for (
              Rt = Wn(t.stateNode.containerInfo.firstChild),
                $t = t,
                Ae = !0,
                mn = null,
                n = M0(t, null, i, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Br(), i === r)) {
            t = Kn(e, t, n)
            break e
          }
          Et(e, t, i, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        O0(t),
        e === null && ed(t),
        (i = t.type),
        (r = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = r.children),
        qc(i, r) ? (s = null) : o !== null && qc(i, o) && (t.flags |= 32),
        ty(e, t),
        Et(e, t, s, n),
        t.child
      )
    case 6:
      return e === null && ed(t), null
    case 13:
      return iy(e, t, n)
    case 4:
      return (
        uf(t, t.stateNode.containerInfo),
        (i = t.pendingProps),
        e === null ? (t.child = $r(t, null, i, n)) : Et(e, t, i, n),
        t.child
      )
    case 11:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : pn(i, r)),
        gp(e, t, i, r, n)
      )
    case 7:
      return Et(e, t, t.pendingProps, n), t.child
    case 8:
      return Et(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Et(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((i = t.type._context),
          (r = t.pendingProps),
          (o = t.memoizedProps),
          (s = r.value),
          Pe(Wa, i._currentValue),
          (i._currentValue = s),
          o !== null)
        )
          if (Tn(o.value, s)) {
            if (o.children === r.children && !It.current) {
              t = Kn(e, t, n)
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies
              if (a !== null) {
                s = o.child
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === i) {
                    if (o.tag === 1) {
                      ;(l = Yn(-1, n & -n)), (l.tag = 2)
                      var u = o.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var c = u.pending
                        c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)),
                          (u.pending = l)
                      }
                    }
                    ;(o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Kc(o.return, n, t),
                      (a.lanes |= n)
                    break
                  }
                  l = l.next
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(z(341))
                ;(s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Kc(s, n, t),
                  (s = o.sibling)
              } else s = o.child
              if (s !== null) s.return = o
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null
                    break
                  }
                  if (((o = s.sibling), o !== null)) {
                    ;(o.return = s.return), (s = o)
                    break
                  }
                  s = s.return
                }
              o = s
            }
        Et(e, t, r.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (r = t.type),
        (i = t.pendingProps.children),
        Nr(t, n),
        (r = sn(r)),
        (i = i(r)),
        (t.flags |= 1),
        Et(e, t, i, n),
        t.child
      )
    case 14:
      return (i = t.type), (r = pn(i, t.pendingProps)), (r = pn(i.type, r)), mp(e, t, i, r, n)
    case 15:
      return J0(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (i = t.type),
        (r = t.pendingProps),
        (r = t.elementType === i ? r : pn(i, r)),
        e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        At(i) ? ((e = !0), Ha(t)) : (e = !1),
        Nr(t, n),
        k0(t, i, r),
        Zc(t, i, r, n),
        rd(null, t, i, !0, e, n)
      )
    case 19:
      return ry(e, t, n)
    case 22:
      return ey(e, t, n)
  }
  throw Error(z(156, t.tag))
}
function my(e, t) {
  return Ym(e, t)
}
function Vx(e, t, n, i) {
  ;(this.tag = e),
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
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function en(e, t, n, i) {
  return new Vx(e, t, n, i)
}
function Sf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Ux(e) {
  if (typeof e == 'function') return Sf(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Wd)) return 11
    if (e === Vd) return 14
  }
  return 2
}
function Ci(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = en(e.tag, t, e.key, e.mode)),
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
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Oa(e, t, n, i, r, o) {
  var s = 2
  if (((i = e), typeof e == 'function')) Sf(e) && (s = 1)
  else if (typeof e == 'string') s = 5
  else
    e: switch (e) {
      case _r:
        return Gi(n.children, r, o, t)
      case Hd:
        ;(s = 8), (r |= 8)
        break
      case Cc:
        return (e = en(12, n, t, r | 2)), (e.elementType = Cc), (e.lanes = o), e
      case Ec:
        return (e = en(13, n, t, r)), (e.elementType = Ec), (e.lanes = o), e
      case Pc:
        return (e = en(19, n, t, r)), (e.elementType = Pc), (e.lanes = o), e
      case Tm:
        return nl(n, r, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Mm:
              s = 10
              break e
            case Om:
              s = 9
              break e
            case Wd:
              s = 11
              break e
            case Vd:
              s = 14
              break e
            case ii:
              ;(s = 16), (i = null)
              break e
          }
        throw Error(z(130, e == null ? e : typeof e, ''))
    }
  return (t = en(s, n, t, r)), (t.elementType = e), (t.type = i), (t.lanes = o), t
}
function Gi(e, t, n, i) {
  return (e = en(7, e, i, t)), (e.lanes = n), e
}
function nl(e, t, n, i) {
  return (e = en(22, e, i, t)), (e.elementType = Tm), (e.lanes = n), (e.stateNode = {}), e
}
function Uu(e, t, n) {
  return (e = en(6, e, null, t)), (e.lanes = n), e
}
function qu(e, t, n) {
  return (
    (t = en(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }),
    t
  )
}
function qx(e, t, n, i, r) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Pu(0)),
    (this.expirationTimes = Pu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Pu(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null)
}
function kf(e, t, n, i, r, o, s, a, l) {
  return (
    (e = new qx(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = en(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = { element: i, isDehydrated: n, cache: null, transitions: null }),
    of(o),
    e
  )
}
function Yx(e, t, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: vr,
    key: i == null ? null : '' + i,
    children: e,
    containerInfo: t,
    implementation: n
  }
}
function yy(e) {
  if (!e) return ki
  e = e._reactInternals
  e: {
    if (lr(e) !== e || e.tag !== 1) throw Error(z(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (At(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(z(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (At(n)) return x0(e, n, t)
  }
  return t
}
function vy(e, t, n, i, r, o, s, a, l) {
  return (
    (e = kf(n, i, !0, e, r, o, s, a, l)),
    (e.context = yy(null)),
    (n = e.current),
    (i = Pt()),
    (r = _i(n)),
    (o = Yn(i, r)),
    (o.callback = t != null ? t : null),
    yi(n, o),
    (e.current.lanes = r),
    xs(e, r, i),
    Ft(e, i),
    e
  )
}
function Dl(e, t, n, i) {
  var r = t.current,
    o = Pt(),
    s = _i(r)
  return (
    (n = yy(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Yn(o, s)),
    (t.payload = { element: e }),
    (i = i === void 0 ? null : i),
    i !== null && (t.callback = i),
    yi(r, t),
    (e = on(r, s, o)),
    e !== null && ka(e, r, s),
    s
  )
}
function il(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Rp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Cf(e, t) {
  Rp(e, t), (e = e.alternate) && Rp(e, t)
}
function Qx() {
  return null
}
var _y =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Ef(e) {
  this._internalRoot = e
}
zl.prototype.render = Ef.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(z(409))
  Dl(e, t, null, null)
}
zl.prototype.unmount = Ef.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    nr(function () {
      Dl(null, e, null, null)
    }),
      (t[Xn] = null)
  }
}
function zl(e) {
  this._internalRoot = e
}
zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Jm()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < oi.length && t !== 0 && t < oi[n].priority; n++);
    oi.splice(n, 0, e), n === 0 && t0(e)
  }
}
function Pf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function Il(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function Np() {}
function Xx(e, t, n, i, r) {
  if (r) {
    if (typeof i == 'function') {
      var o = i
      i = function () {
        var u = il(s)
        o.call(u)
      }
    }
    var s = vy(t, i, e, 0, null, !1, !1, '', Np)
    return (
      (e._reactRootContainer = s),
      (e[Xn] = s.current),
      Jo(e.nodeType === 8 ? e.parentNode : e),
      nr(),
      s
    )
  }
  for (; (r = e.lastChild); ) e.removeChild(r)
  if (typeof i == 'function') {
    var a = i
    i = function () {
      var u = il(l)
      a.call(u)
    }
  }
  var l = kf(e, 0, !1, null, null, !1, !1, '', Np)
  return (
    (e._reactRootContainer = l),
    (e[Xn] = l.current),
    Jo(e.nodeType === 8 ? e.parentNode : e),
    nr(function () {
      Dl(t, l, n, i)
    }),
    l
  )
}
function Al(e, t, n, i, r) {
  var o = n._reactRootContainer
  if (o) {
    var s = o
    if (typeof r == 'function') {
      var a = r
      r = function () {
        var l = il(s)
        a.call(l)
      }
    }
    Dl(t, s, e, r)
  } else s = Xx(n, t, e, r, i)
  return il(s)
}
Gm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = Co(t.pendingLanes)
        n !== 0 && (Yd(t, n | 1), Ft(t, Xe()), (ce & 6) === 0 && ((Ur = Xe() + 500), Ri()))
      }
      break
    case 13:
      var i = Pt()
      nr(function () {
        return on(e, 1, i)
      }),
        Cf(e, 1)
  }
}
Qd = function (e) {
  if (e.tag === 13) {
    var t = Pt()
    on(e, 134217728, t), Cf(e, 134217728)
  }
}
Zm = function (e) {
  if (e.tag === 13) {
    var t = Pt(),
      n = _i(e)
    on(e, n, t), Cf(e, n)
  }
}
Jm = function () {
  return we
}
e0 = function (e, t) {
  var n = we
  try {
    return (we = e), t()
  } finally {
    we = n
  }
}
Ac = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Tc(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var i = n[t]
          if (i !== e && i.form === e.form) {
            var r = Pl(i)
            if (!r) throw Error(z(90))
            Rm(i), Tc(i, r)
          }
        }
      }
      break
    case 'textarea':
      Dm(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Or(e, !!n.multiple, t, !1)
  }
}
$m = xf
Hm = nr
var Kx = { usingClientEntryPoint: !1, Events: [ws, Sr, Pl, jm, Bm, xf] },
  co = {
    findFiberByHostInstance: Vi,
    bundleType: 0,
    version: '18.0.0-fc46dba67-20220329',
    rendererPackageName: 'react-dom'
  },
  Gx = {
    bundleType: co.bundleType,
    version: co.version,
    rendererPackageName: co.rendererPackageName,
    rendererConfig: co.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Zn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Um(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: co.findFiberByHostInstance || Qx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.0.0-fc46dba67-20220329'
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != 'undefined') {
  var ta = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!ta.isDisabled && ta.supportsFiber)
    try {
      ;(Sl = ta.inject(Gx)), (En = ta)
    } catch {}
}
Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kx
Vt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!Pf(t)) throw Error(z(200))
  return Yx(e, t, null, n)
}
Vt.createRoot = function (e, t) {
  if (!Pf(e)) throw Error(z(299))
  var n = !1,
    i = '',
    r = _y
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    (t = kf(e, 1, !1, null, null, n, !1, i, r)),
    (e[Xn] = t.current),
    Jo(e.nodeType === 8 ? e.parentNode : e),
    new Ef(t)
  )
}
Vt.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(z(188))
      : ((e = Object.keys(e).join(',')), Error(z(268, e)))
  return (e = Um(t)), (e = e === null ? null : e.stateNode), e
}
Vt.flushSync = function (e) {
  return nr(e)
}
Vt.hydrate = function (e, t, n) {
  if (!Il(t)) throw Error(z(200))
  return Al(null, e, t, !0, n)
}
Vt.hydrateRoot = function (e, t, n) {
  if (!Pf(e)) throw Error(z(405))
  var i = (n != null && n.hydratedSources) || null,
    r = !1,
    o = '',
    s = _y
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = vy(t, null, e, 1, n != null ? n : null, r, !1, o, s)),
    (e[Xn] = t.current),
    Jo(e),
    i)
  )
    for (e = 0; e < i.length; e++)
      (n = i[e]),
        (r = n._getVersion),
        (r = r(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, r])
          : t.mutableSourceEagerHydrationData.push(n, r)
  return new zl(t)
}
Vt.render = function (e, t, n) {
  if (!Il(t)) throw Error(z(200))
  return Al(null, e, t, !1, n)
}
Vt.unmountComponentAtNode = function (e) {
  if (!Il(e)) throw Error(z(40))
  return e._reactRootContainer
    ? (nr(function () {
        Al(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Xn] = null)
        })
      }),
      !0)
    : !1
}
Vt.unstable_batchedUpdates = xf
Vt.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
  if (!Il(n)) throw Error(z(200))
  if (e == null || e._reactInternals === void 0) throw Error(z(38))
  return Al(e, t, n, !1, i)
}
Vt.version = '18.0.0-fc46dba67-20220329'
function xy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == 'undefined' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xy)
    } catch (e) {
      console.error(e)
    }
}
xy(), (Fd.exports = Vt)
var Dp = Fd.exports
;(Sc.createRoot = Dp.createRoot), (Sc.hydrateRoot = Dp.hydrateRoot)
function rl() {
  return (
    (rl =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
      }),
    rl.apply(this, arguments)
  )
}
var Yi
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(Yi || (Yi = {}))
var zp = function (e) {
    return e
  },
  Ip = 'beforeunload',
  Zx = 'popstate'
function Jx(e) {
  e === void 0 && (e = {})
  var t = e,
    n = t.window,
    i = n === void 0 ? document.defaultView : n,
    r = i.history
  function o() {
    var k = i.location,
      P = k.pathname,
      L = k.search,
      I = k.hash,
      N = r.state || {}
    return [
      N.idx,
      zp({ pathname: P, search: L, hash: I, state: N.usr || null, key: N.key || 'default' })
    ]
  }
  var s = null
  function a() {
    if (s) h.call(s), (s = null)
    else {
      var k = Yi.Pop,
        P = o(),
        L = P[0],
        I = P[1]
      if (h.length) {
        if (L != null) {
          var N = c - L
          N &&
            ((s = {
              action: k,
              location: I,
              retry: function () {
                b(N * -1)
              }
            }),
            b(N))
        }
      } else m(k)
    }
  }
  i.addEventListener(Zx, a)
  var l = Yi.Pop,
    u = o(),
    c = u[0],
    d = u[1],
    f = Fp(),
    h = Fp()
  c == null && ((c = 0), r.replaceState(rl({}, r.state, { idx: c }), ''))
  function p(k) {
    return typeof k == 'string' ? k : pd(k)
  }
  function y(k, P) {
    return (
      P === void 0 && (P = null),
      zp(
        rl({ pathname: d.pathname, hash: '', search: '' }, typeof k == 'string' ? ur(k) : k, {
          state: P,
          key: eb()
        })
      )
    )
  }
  function _(k, P) {
    return [{ usr: k.state, key: k.key, idx: P }, p(k)]
  }
  function g(k, P, L) {
    return !h.length || (h.call({ action: k, location: P, retry: L }), !1)
  }
  function m(k) {
    l = k
    var P = o()
    ;(c = P[0]), (d = P[1]), f.call({ action: l, location: d })
  }
  function v(k, P) {
    var L = Yi.Push,
      I = y(k, P)
    function N() {
      v(k, P)
    }
    if (g(L, I, N)) {
      var Y = _(I, c + 1),
        S = Y[0],
        Z = Y[1]
      try {
        r.pushState(S, '', Z)
      } catch {
        i.location.assign(Z)
      }
      m(L)
    }
  }
  function x(k, P) {
    var L = Yi.Replace,
      I = y(k, P)
    function N() {
      x(k, P)
    }
    if (g(L, I, N)) {
      var Y = _(I, c),
        S = Y[0],
        Z = Y[1]
      r.replaceState(S, '', Z), m(L)
    }
  }
  function b(k) {
    r.go(k)
  }
  var O = {
    get action() {
      return l
    },
    get location() {
      return d
    },
    createHref: p,
    push: v,
    replace: x,
    go: b,
    back: function () {
      b(-1)
    },
    forward: function () {
      b(1)
    },
    listen: function (P) {
      return f.push(P)
    },
    block: function (P) {
      var L = h.push(P)
      return (
        h.length === 1 && i.addEventListener(Ip, Ap),
        function () {
          L(), h.length || i.removeEventListener(Ip, Ap)
        }
      )
    }
  }
  return O
}
function Ap(e) {
  e.preventDefault(), (e.returnValue = '')
}
function Fp() {
  var e = []
  return {
    get length() {
      return e.length
    },
    push: function (n) {
      return (
        e.push(n),
        function () {
          e = e.filter(function (i) {
            return i !== n
          })
        }
      )
    },
    call: function (n) {
      e.forEach(function (i) {
        return i && i(n)
      })
    }
  }
}
function eb() {
  return Math.random().toString(36).substr(2, 8)
}
function pd(e) {
  var t = e.pathname,
    n = t === void 0 ? '/' : t,
    i = e.search,
    r = i === void 0 ? '' : i,
    o = e.hash,
    s = o === void 0 ? '' : o
  return (
    r && r !== '?' && (n += r.charAt(0) === '?' ? r : '?' + r),
    s && s !== '#' && (n += s.charAt(0) === '#' ? s : '#' + s),
    n
  )
}
function ur(e) {
  var t = {}
  if (e) {
    var n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    var i = e.indexOf('?')
    i >= 0 && ((t.search = e.substr(i)), (e = e.substr(0, i))), e && (t.pathname = e)
  }
  return t
}
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Mf = R.exports.createContext(null),
  Of = R.exports.createContext(null),
  Zr = R.exports.createContext({ outlet: null, matches: [] })
function xn(e, t) {
  if (!e) throw new Error(t)
}
function tb(e, t, n) {
  n === void 0 && (n = '/')
  let i = typeof t == 'string' ? ur(t) : t,
    r = Sy(i.pathname || '/', n)
  if (r == null) return null
  let o = by(e)
  nb(o)
  let s = null
  for (let a = 0; s == null && a < o.length; ++a) s = db(o[a], r)
  return s
}
function by(e, t, n, i) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    i === void 0 && (i = ''),
    e.forEach((r, o) => {
      let s = {
        relativePath: r.path || '',
        caseSensitive: r.caseSensitive === !0,
        childrenIndex: o,
        route: r
      }
      s.relativePath.startsWith('/') &&
        (s.relativePath.startsWith(i) || xn(!1), (s.relativePath = s.relativePath.slice(i.length)))
      let a = xi([i, s.relativePath]),
        l = n.concat(s)
      r.children && r.children.length > 0 && (r.index === !0 && xn(!1), by(r.children, t, l, a)),
        !(r.path == null && !r.index) && t.push({ path: a, score: ub(a, r.index), routesMeta: l })
    }),
    t
  )
}
function nb(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : cb(
          t.routesMeta.map((i) => i.childrenIndex),
          n.routesMeta.map((i) => i.childrenIndex)
        )
  )
}
const ib = /^:\w+$/,
  rb = 3,
  ob = 2,
  sb = 1,
  ab = 10,
  lb = -2,
  jp = (e) => e === '*'
function ub(e, t) {
  let n = e.split('/'),
    i = n.length
  return (
    n.some(jp) && (i += lb),
    t && (i += ob),
    n.filter((r) => !jp(r)).reduce((r, o) => r + (ib.test(o) ? rb : o === '' ? sb : ab), i)
  )
}
function cb(e, t) {
  return e.length === t.length && e.slice(0, -1).every((i, r) => i === t[r])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function db(e, t) {
  let { routesMeta: n } = e,
    i = {},
    r = '/',
    o = []
  for (let s = 0; s < n.length; ++s) {
    let a = n[s],
      l = s === n.length - 1,
      u = r === '/' ? t : t.slice(r.length) || '/',
      c = fb({ path: a.relativePath, caseSensitive: a.caseSensitive, end: l }, u)
    if (!c) return null
    Object.assign(i, c.params)
    let d = a.route
    o.push({
      params: i,
      pathname: xi([r, c.pathname]),
      pathnameBase: ky(xi([r, c.pathnameBase])),
      route: d
    }),
      c.pathnameBase !== '/' && (r = xi([r, c.pathnameBase]))
  }
  return o
}
function fb(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, i] = hb(e.path, e.caseSensitive, e.end),
    r = t.match(n)
  if (!r) return null
  let o = r[0],
    s = o.replace(/(.)\/+$/, '$1'),
    a = r.slice(1)
  return {
    params: i.reduce((u, c, d) => {
      if (c === '*') {
        let f = a[d] || ''
        s = o.slice(0, o.length - f.length).replace(/(.)\/+$/, '$1')
      }
      return (u[c] = pb(a[d] || '')), u
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e
  }
}
function hb(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0)
  let i = [],
    r =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/:(\w+)/g, (s, a) => (i.push(a), '([^\\/]+)'))
  return (
    e.endsWith('*')
      ? (i.push('*'), (r += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : (r += n ? '\\/*$' : '(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)'),
    [new RegExp(r, t ? void 0 : 'i'), i]
  )
}
function pb(e, t) {
  try {
    return decodeURIComponent(e)
  } catch {
    return e
  }
}
function gb(e, t) {
  t === void 0 && (t = '/')
  let { pathname: n, search: i = '', hash: r = '' } = typeof e == 'string' ? ur(e) : e
  return { pathname: n ? (n.startsWith('/') ? n : mb(n, t)) : t, search: vb(i), hash: _b(r) }
}
function mb(e, t) {
  let n = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach((r) => {
      r === '..' ? n.length > 1 && n.pop() : r !== '.' && n.push(r)
    }),
    n.length > 1 ? n.join('/') : '/'
  )
}
function wy(e, t, n) {
  let i = typeof e == 'string' ? ur(e) : e,
    r = e === '' || i.pathname === '' ? '/' : i.pathname,
    o
  if (r == null) o = n
  else {
    let a = t.length - 1
    if (r.startsWith('..')) {
      let l = r.split('/')
      for (; l[0] === '..'; ) l.shift(), (a -= 1)
      i.pathname = l.join('/')
    }
    o = a >= 0 ? t[a] : '/'
  }
  let s = gb(i, o)
  return r && r !== '/' && r.endsWith('/') && !s.pathname.endsWith('/') && (s.pathname += '/'), s
}
function yb(e) {
  return e === '' || e.pathname === '' ? '/' : typeof e == 'string' ? ur(e).pathname : e.pathname
}
function Sy(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = e.charAt(t.length)
  return n && n !== '/' ? null : e.slice(t.length) || '/'
}
const xi = (e) => e.join('/').replace(/\/\/+/g, '/'),
  ky = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  vb = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  _b = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
function xb(e) {
  Jr() || xn(!1)
  let { basename: t, navigator: n } = R.exports.useContext(Mf),
    { hash: i, pathname: r, search: o } = Ey(e),
    s = r
  if (t !== '/') {
    let a = yb(e),
      l = a != null && a.endsWith('/')
    s = r === '/' ? t + (l ? '/' : '') : xi([t, r])
  }
  return n.createHref({ pathname: s, search: o, hash: i })
}
function Jr() {
  return R.exports.useContext(Of) != null
}
function Fl() {
  return Jr() || xn(!1), R.exports.useContext(Of).location
}
function Cy() {
  Jr() || xn(!1)
  let { basename: e, navigator: t } = R.exports.useContext(Mf),
    { matches: n } = R.exports.useContext(Zr),
    { pathname: i } = Fl(),
    r = JSON.stringify(n.map((a) => a.pathnameBase)),
    o = R.exports.useRef(!1)
  return (
    R.exports.useEffect(() => {
      o.current = !0
    }),
    R.exports.useCallback(
      function (a, l) {
        if ((l === void 0 && (l = {}), !o.current)) return
        if (typeof a == 'number') {
          t.go(a)
          return
        }
        let u = wy(a, JSON.parse(r), i)
        e !== '/' && (u.pathname = xi([e, u.pathname])),
          (l.replace ? t.replace : t.push)(u, l.state)
      },
      [e, t, r, i]
    )
  )
}
const bb = R.exports.createContext(null)
function wb(e) {
  let t = R.exports.useContext(Zr).outlet
  return t && R.exports.createElement(bb.Provider, { value: e }, t)
}
function Tf() {
  let { matches: e } = R.exports.useContext(Zr),
    t = e[e.length - 1]
  return t ? t.params : {}
}
function Ey(e) {
  let { matches: t } = R.exports.useContext(Zr),
    { pathname: n } = Fl(),
    i = JSON.stringify(t.map((r) => r.pathnameBase))
  return R.exports.useMemo(() => wy(e, JSON.parse(i), n), [e, i, n])
}
function Sb(e, t) {
  Jr() || xn(!1)
  let { matches: n } = R.exports.useContext(Zr),
    i = n[n.length - 1],
    r = i ? i.params : {}
  i && i.pathname
  let o = i ? i.pathnameBase : '/'
  i && i.route
  let s = Fl(),
    a
  if (t) {
    var l
    let f = typeof t == 'string' ? ur(t) : t
    o === '/' || ((l = f.pathname) == null ? void 0 : l.startsWith(o)) || xn(!1), (a = f)
  } else a = s
  let u = a.pathname || '/',
    c = o === '/' ? u : u.slice(o.length) || '/',
    d = tb(e, { pathname: c })
  return kb(
    d &&
      d.map((f) =>
        Object.assign({}, f, {
          params: Object.assign({}, r, f.params),
          pathname: xi([o, f.pathname]),
          pathnameBase: f.pathnameBase === '/' ? o : xi([o, f.pathnameBase])
        })
      ),
    n
  )
}
function kb(e, t) {
  return (
    t === void 0 && (t = []),
    e == null
      ? null
      : e.reduceRight(
          (n, i, r) =>
            R.exports.createElement(Zr.Provider, {
              children: i.route.element !== void 0 ? i.route.element : n,
              value: { outlet: n, matches: t.concat(e.slice(0, r + 1)) }
            }),
          null
        )
  )
}
function Cb(e) {
  let { to: t, replace: n, state: i } = e
  Jr() || xn(!1)
  let r = Cy()
  return (
    R.exports.useEffect(() => {
      r(t, { replace: n, state: i })
    }),
    null
  )
}
function Eb(e) {
  return wb(e.context)
}
function In(e) {
  xn(!1)
}
function Pb(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: i,
    navigationType: r = Yi.Pop,
    navigator: o,
    static: s = !1
  } = e
  Jr() && xn(!1)
  let a = ky(t),
    l = R.exports.useMemo(() => ({ basename: a, navigator: o, static: s }), [a, o, s])
  typeof i == 'string' && (i = ur(i))
  let { pathname: u = '/', search: c = '', hash: d = '', state: f = null, key: h = 'default' } = i,
    p = R.exports.useMemo(() => {
      let y = Sy(u, a)
      return y == null ? null : { pathname: y, search: c, hash: d, state: f, key: h }
    }, [a, u, c, d, f, h])
  return p == null
    ? null
    : R.exports.createElement(
        Mf.Provider,
        { value: l },
        R.exports.createElement(Of.Provider, {
          children: n,
          value: { location: p, navigationType: r }
        })
      )
}
function Mb(e) {
  let { children: t, location: n } = e
  return Sb(gd(t), n)
}
function gd(e) {
  let t = []
  return (
    R.exports.Children.forEach(e, (n) => {
      if (!R.exports.isValidElement(n)) return
      if (n.type === R.exports.Fragment) {
        t.push.apply(t, gd(n.props.children))
        return
      }
      n.type !== In && xn(!1)
      let i = {
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        index: n.props.index,
        path: n.props.path
      }
      n.props.children && (i.children = gd(n.props.children)), t.push(i)
    }),
    t
  )
}
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function md() {
  return (
    (md =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
      }),
    md.apply(this, arguments)
  )
}
function Ob(e, t) {
  if (e == null) return {}
  var n = {},
    i = Object.keys(e),
    r,
    o
  for (o = 0; o < i.length; o++) (r = i[o]), !(t.indexOf(r) >= 0) && (n[r] = e[r])
  return n
}
const Tb = ['onClick', 'reloadDocument', 'replace', 'state', 'target', 'to']
function Lb(e) {
  let { basename: t, children: n, window: i } = e,
    r = R.exports.useRef()
  r.current == null && (r.current = Jx({ window: i }))
  let o = r.current,
    [s, a] = R.exports.useState({ action: o.action, location: o.location })
  return (
    R.exports.useLayoutEffect(() => o.listen(a), [o]),
    R.exports.createElement(Pb, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: o
    })
  )
}
function Rb(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
const Lf = R.exports.forwardRef(function (t, n) {
  let { onClick: i, reloadDocument: r, replace: o = !1, state: s, target: a, to: l } = t,
    u = Ob(t, Tb),
    c = xb(l),
    d = Nb(l, { replace: o, state: s, target: a })
  function f(h) {
    i && i(h), !h.defaultPrevented && !r && d(h)
  }
  return R.exports.createElement('a', md({}, u, { href: c, onClick: f, ref: n, target: a }))
})
function Nb(e, t) {
  let { target: n, replace: i, state: r } = t === void 0 ? {} : t,
    o = Cy(),
    s = Fl(),
    a = Ey(e)
  return R.exports.useCallback(
    (l) => {
      if (l.button === 0 && (!n || n === '_self') && !Rb(l)) {
        l.preventDefault()
        let u = !!i || pd(s) === pd(a)
        o(e, { replace: u, state: r })
      }
    },
    [s, o, a, i, r, n, e]
  )
}
const Db = '_header_bsmmk_1',
  zb = '_logo_bsmmk_12',
  Ib = '_fsInfoAccount_bsmmk_29',
  Ab = '_search_bsmmk_38',
  Fb = '_accountInfo_bsmmk_69',
  jb = '_avataUser_bsmmk_77'
var hr = { header: Db, logo: zb, fsInfoAccount: Ib, search: Ab, accountInfo: Fb, avataUser: jb },
  Py = './image/logo.png',
  My = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  Bp = oe.createContext && oe.createContext(My),
  bi =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (bi =
          Object.assign ||
          function (e) {
            for (var t, n = 1, i = arguments.length; n < i; n++) {
              t = arguments[n]
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
          }),
        bi.apply(this, arguments)
      )
    },
  Bb =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {}
      for (var i in e)
        Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i])
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++)
          t.indexOf(i[r]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
            (n[i[r]] = e[i[r]])
      return n
    }
function Oy(e) {
  return (
    e &&
    e.map(function (t, n) {
      return oe.createElement(t.tag, bi({ key: n }, t.attr), Oy(t.child))
    })
  )
}
function Ct(e) {
  return function (t) {
    return oe.createElement($b, bi({ attr: bi({}, e.attr) }, t), Oy(e.child))
  }
}
function $b(e) {
  var t = function (n) {
    var i = e.attr,
      r = e.size,
      o = e.title,
      s = Bb(e, ['attr', 'size', 'title']),
      a = r || n.size || '1em',
      l
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + ' ' : '') + e.className),
      oe.createElement(
        'svg',
        bi({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, n.attr, i, s, {
          className: l,
          style: bi(bi({ color: e.color || n.color }, n.style), e.style),
          height: a,
          width: a,
          xmlns: 'http://www.w3.org/2000/svg'
        }),
        o && oe.createElement('title', null, o),
        e.children
      )
    )
  }
  return Bp !== void 0
    ? oe.createElement(Bp.Consumer, null, function (n) {
        return t(n)
      })
    : t(My)
}
function Hb(e) {
  return Ct({
    tag: 'svg',
    attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z'
        }
      }
    ]
  })(e)
}
function Wb(e) {
  return Ct({
    tag: 'svg',
    attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z'
        }
      }
    ]
  })(e)
}
function Vb(e) {
  return Ct({
    tag: 'svg',
    attr: { fill: 'currentColor', viewBox: '0 0 16 16' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'
        }
      }
    ]
  })(e)
}
function Ub(e) {
  return Ct({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      fill: 'none',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    },
    child: [
      { tag: 'desc', attr: {}, child: [] },
      { tag: 'path', attr: { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' } },
      { tag: 'rect', attr: { x: '3', y: '5', width: '18', height: '14', rx: '2' } },
      { tag: 'polyline', attr: { points: '3 7 12 13 21 7' } }
    ]
  })(e)
}
function qb(e) {
  return Ct({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      strokeWidth: '2',
      stroke: 'currentColor',
      fill: 'none',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    },
    child: [
      { tag: 'desc', attr: {}, child: [] },
      { tag: 'path', attr: { stroke: 'none', d: 'M0 0h24v24H0z', fill: 'none' } },
      {
        tag: 'path',
        attr: {
          d: 'M11.5 20h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v7.5m-16 -3.5h16m-10 -6v16m4 -1h7m-3 -3l3 3l-3 3'
        }
      }
    ]
  })(e)
}
function Yb(e) {
  return Ct({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm0 336c-20.9 0-37.52-8.86-39.75-27.58a4 4 0 014-4.42h71.45a4 4 0 014 4.48C293.15 374.85 276.68 384 256 384zm98-48H158c-11.84 0-18-15-11.19-23 16.33-19.34 27.87-27.47 27.87-80.8 0-48.87 25.74-66.21 47-74.67a11.35 11.35 0 006.33-6.68C231.7 138.6 242.14 128 256 128s24.28 10.6 28 22.86a11.39 11.39 0 006.34 6.68c21.21 8.44 47 25.81 47 74.67 0 53.33 11.53 61.46 27.86 80.8 6.74 7.99.57 22.99-11.2 22.99z'
        }
      }
    ]
  })(e)
}
function Qb(e) {
  return Ct({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          fill: 'none',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '32',
          d: 'M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z'
        }
      }
    ]
  })(e)
}
var jl = { exports: {} },
  Bl = {}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xb = R.exports,
  Kb = Symbol.for('react.element'),
  Gb = Symbol.for('react.fragment'),
  Zb = Object.prototype.hasOwnProperty,
  Jb = Xb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ew = { key: !0, ref: !0, __self: !0, __source: !0 }
function Ty(e, t, n) {
  var i,
    r = {},
    o = null,
    s = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (s = t.ref)
  for (i in t) Zb.call(t, i) && !ew.hasOwnProperty(i) && (r[i] = t[i])
  if (e && e.defaultProps) for (i in ((t = e.defaultProps), t)) r[i] === void 0 && (r[i] = t[i])
  return { $$typeof: Kb, type: e, key: o, ref: s, props: r, _owner: Jb.current }
}
Bl.Fragment = Gb
Bl.jsx = Ty
Bl.jsxs = Ty
jl.exports = Bl
const w = jl.exports.jsx,
  q = jl.exports.jsxs,
  dt = jl.exports.Fragment,
  tw = () =>
    q('div', {
      className: hr.header,
      children: [
        q('div', {
          className: hr.logo,
          children: [w('img', { src: Py, alt: 'logo' }), w('p', { children: 'NAME' })]
        }),
        q('div', {
          className: hr.fsInfoAccount,
          children: [
            q('div', {
              className: hr.search,
              children: [
                w(Vb, { size: 18 }),
                w('input', { type: 'text', placeholder: 'Search...' })
              ]
            }),
            q('div', {
              className: hr.accountInfo,
              children: [w(Yb, {}), w(Ub, {}), w('div', { className: hr.avataUser })]
            })
          ]
        })
      ]
    }),
  nw = '_Navigation_17fyi_1'
var iw = { Navigation: nw }
function rw(e) {
  return Ct({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0V0z' } },
      {
        tag: 'path',
        attr: {
          d: 'M19 5v14H5V5h14m0-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6 10H6v-1.53c0-2.5 3.97-3.58 6-3.58s6 1.08 6 3.58V18zm-9.69-2h7.38c-.69-.56-2.38-1.12-3.69-1.12s-3.01.56-3.69 1.12z'
        }
      }
    ]
  })(e)
}
function $p(e) {
  return Ct({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0V0z' } },
      {
        tag: 'path',
        attr: {
          d: 'M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 00-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z'
        }
      }
    ]
  })(e)
}
function ow(e) {
  return Ct({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0V0z' } },
      {
        tag: 'path',
        attr: {
          d: 'M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z'
        }
      }
    ]
  })(e)
}
const sw = '_dashBoard_m8jfe_2',
  aw = '_mainChart_m8jfe_9',
  lw = '_earningConversion_m8jfe_18',
  uw = '_earning_m8jfe_18',
  cw = '_conversion_m8jfe_34',
  dw = '_enterpriseClients_m8jfe_43',
  fw = '_boardChart_m8jfe_52',
  hw = '_boardDetail_m8jfe_57',
  pw = '_dabitCard_m8jfe_62',
  gw = '_activityOverview_m8jfe_71',
  mw = '_visitor_m8jfe_81'
var fn = {
  dashBoard: sw,
  mainChart: aw,
  earningConversion: lw,
  earning: uw,
  conversion: cw,
  enterpriseClients: dw,
  boardChart: fw,
  boardDetail: hw,
  dabitCard: pw,
  activityOverview: gw,
  visitor: mw
}
const yw = '_button_n4yhm_1'
var vw = { button: yw }
function _w(e) {
  const { handleOnCick: t, name: n, height: i, width: r } = e
  return w('div', {
    className: vw.button,
    style: { width: r, height: i },
    onClick: t,
    children: q('p', { children: [' ', n] })
  })
}
const xw = '_dialog_1g27s_30',
  bw = '_open_1g27s_42',
  ww = '_close_1g27s_47',
  Sw = '_overLay_1g27s_54'
var fo = { dialog: xw, open: bw, close: ww, overLay: Sw }
function kw() {
  const [e, t] = R.exports.useState(!1)
  return q(dt, {
    children: [
      w('div', {
        style: { position: 'absolute', zIndex: '1000' },
        className: 'click',
        onClick: () => t((n) => !n),
        children: w('button', { children: 'Click' })
      }),
      w('div', { className: `${fo.overLay}  ${e && fo.open}` }),
      w('div', { className: `${fo.dialog} ${!e && fo.close} ${e && fo.open}` })
    ]
  })
}
const Cw = '_table_szqxr_2',
  Ew = '_tableHeader_szqxr_15',
  Pw = '_tableTH_szqxr_29',
  Mw = '_tableBody_szqxr_35',
  Ow = '_title_szqxr_43',
  Tw = '_tableTR_szqxr_49',
  Lw = '_tableTD_szqxr_67',
  Rw = '_optionTable_szqxr_74',
  Nw = '_groupButton_szqxr_79',
  Dw = '_buttonItem_szqxr_86',
  zw = '_navigation_szqxr_110',
  Iw = '_pageTable_szqxr_124',
  Aw = '_active_szqxr_138',
  Fw = '_dot_szqxr_143'
var qe = {
  table: Cw,
  tableHeader: Ew,
  tableTH: Pw,
  tableBody: Mw,
  title: Ow,
  tableTR: Tw,
  tableTD: Lw,
  optionTable: Rw,
  groupButton: Nw,
  buttonItem: Dw,
  navigation: zw,
  pageTable: Iw,
  active: Aw,
  dot: Fw
}
function jw(e) {
  return Ct({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    },
    child: [{ tag: 'polyline', attr: { points: '15 18 9 12 15 6' } }]
  })(e)
}
function Ly(e) {
  return Ct({
    tag: 'svg',
    attr: {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    },
    child: [{ tag: 'polyline', attr: { points: '9 18 15 12 9 6' } }]
  })(e)
}
function Ry(e) {
  var t,
    n,
    i = ''
  if (typeof e == 'string' || typeof e == 'number') i += e
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++) e[t] && (n = Ry(e[t])) && (i && (i += ' '), (i += n))
    else for (t in e) e[t] && (i && (i += ' '), (i += t))
  return i
}
function ci() {
  for (var e, t, n = 0, i = ''; n < arguments.length; )
    (e = arguments[n++]) && (t = Ry(e)) && (i && (i += ' '), (i += t))
  return i
}
function Fo(e) {
  return typeof e == 'number' && !isNaN(e)
}
function ho(e) {
  return typeof e == 'boolean'
}
function ir(e) {
  return typeof e == 'string'
}
function zt(e) {
  return typeof e == 'function'
}
function Ta(e) {
  return ir(e) || zt(e) ? e : null
}
function Yu(e) {
  return e === 0 || e
}
function Qu(e) {
  return R.exports.isValidElement(e) || ir(e) || zt(e) || Fo(e)
}
const Ny = {
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
    TOP_CENTER: 'top-center',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_CENTER: 'bottom-center'
  },
  Bn = { INFO: 'info', SUCCESS: 'success', WARNING: 'warning', ERROR: 'error', DEFAULT: 'default' }
function Bw(e, t, n) {
  n === void 0 && (n = 300)
  const { scrollHeight: i, style: r } = e
  requestAnimationFrame(() => {
    ;(r.minHeight = 'initial'),
      (r.height = i + 'px'),
      (r.transition = 'all ' + n + 'ms'),
      requestAnimationFrame(() => {
        ;(r.height = '0'), (r.padding = '0'), (r.margin = '0'), setTimeout(t, n)
      })
  })
}
function $w(e) {
  let { enter: t, exit: n, appendPosition: i = !1, collapse: r = !0, collapseDuration: o = 300 } = e
  return function (s) {
    let { children: a, position: l, preventExitTransition: u, done: c, nodeRef: d, isIn: f } = s
    const h = i ? t + '--' + l : t,
      p = i ? n + '--' + l : n,
      y = R.exports.useRef(),
      _ = R.exports.useRef(0)
    function g(v) {
      if (v.target !== d.current) return
      const x = d.current
      x.dispatchEvent(new Event('d')),
        x.removeEventListener('animationend', g),
        x.removeEventListener('animationcancel', g),
        _.current === 0 && v.type !== 'animationcancel' && (x.className = y.current)
    }
    function m() {
      const v = d.current
      v.removeEventListener('animationend', m), r ? Bw(v, c, o) : c()
    }
    return (
      R.exports.useLayoutEffect(() => {
        ;(function () {
          const v = d.current
          ;(y.current = v.className),
            (v.className += ' ' + h),
            v.addEventListener('animationend', g),
            v.addEventListener('animationcancel', g)
        })()
      }, []),
      R.exports.useEffect(() => {
        f ||
          (u
            ? m()
            : (function () {
                _.current = 1
                const v = d.current
                ;(v.className += ' ' + p), v.addEventListener('animationend', m)
              })())
      }, [f]),
      oe.createElement(oe.Fragment, null, a)
    )
  }
}
function Hp(e, t) {
  return {
    content: e.content,
    containerId: e.props.containerId,
    id: e.props.toastId,
    theme: e.props.theme,
    type: e.props.type,
    data: e.props.data || {},
    isLoading: e.props.isLoading,
    icon: e.props.icon,
    status: t
  }
}
const Kt = {
    list: new Map(),
    emitQueue: new Map(),
    on(e, t) {
      return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
    },
    off(e, t) {
      if (t) {
        const n = this.list.get(e).filter((i) => i !== t)
        return this.list.set(e, n), this
      }
      return this.list.delete(e), this
    },
    cancelEmit(e) {
      const t = this.emitQueue.get(e)
      return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this
    },
    emit(e) {
      this.list.has(e) &&
        this.list.get(e).forEach((t) => {
          const n = setTimeout(() => {
            t(...[].slice.call(arguments, 1))
          }, 0)
          this.emitQueue.has(e) || this.emitQueue.set(e, []), this.emitQueue.get(e).push(n)
        })
    }
  },
  na = (e) => {
    let r = e,
      { theme: t, type: n } = r,
      i = zs(r, ['theme', 'type'])
    return oe.createElement(
      'svg',
      te(
        {
          viewBox: '0 0 24 24',
          width: '100%',
          height: '100%',
          fill: t === 'colored' ? 'currentColor' : 'var(--toastify-icon-color-' + n + ')'
        },
        i
      )
    )
  },
  Xu = {
    info: function (e) {
      return oe.createElement(
        na,
        te({}, e),
        oe.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z'
        })
      )
    },
    warning: function (e) {
      return oe.createElement(
        na,
        te({}, e),
        oe.createElement('path', {
          d: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z'
        })
      )
    },
    success: function (e) {
      return oe.createElement(
        na,
        te({}, e),
        oe.createElement('path', {
          d: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z'
        })
      )
    },
    error: function (e) {
      return oe.createElement(
        na,
        te({}, e),
        oe.createElement('path', {
          d: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z'
        })
      )
    },
    spinner: function () {
      return oe.createElement('div', { className: 'Toastify__spinner' })
    }
  }
function Hw(e) {
  const [, t] = R.exports.useReducer((h) => h + 1, 0),
    [n, i] = R.exports.useState([]),
    r = R.exports.useRef(null),
    o = R.exports.useRef(new Map()).current,
    s = (h) => n.indexOf(h) !== -1,
    a = R.exports.useRef({
      toastKey: 1,
      displayedToast: 0,
      count: 0,
      queue: [],
      props: e,
      containerId: null,
      isToastActive: s,
      getToast: (h) => o.get(h)
    }).current
  function l(h) {
    let { containerId: p } = h
    const { limit: y } = a.props
    !y || (p && a.containerId !== p) || ((a.count -= a.queue.length), (a.queue = []))
  }
  function u(h) {
    i((p) => (Yu(h) ? p.filter((y) => y !== h) : []))
  }
  function c() {
    const { toastContent: h, toastProps: p, staleId: y } = a.queue.shift()
    f(h, p, y)
  }
  function d(h, p) {
    let Y = p,
      { delay: y, staleId: _ } = Y,
      g = zs(Y, ['delay', 'staleId'])
    if (
      !Qu(h) ||
      (function (S) {
        return (
          !r.current ||
          (a.props.enableMultiContainer && S.containerId !== a.props.containerId) ||
          (o.has(S.toastId) && S.updateId == null)
        )
      })(g)
    )
      return
    const { toastId: m, updateId: v, data: x } = g,
      { props: b } = a,
      O = () => u(m),
      k = v == null
    k && a.count++
    const P = {
      toastId: m,
      updateId: v,
      data: x,
      containerId: g.containerId,
      isLoading: g.isLoading,
      theme: g.theme || b.theme,
      icon: g.icon != null ? g.icon : b.icon,
      isIn: !1,
      key: g.key || a.toastKey++,
      type: g.type,
      closeToast: O,
      closeButton: g.closeButton,
      rtl: b.rtl,
      position: g.position || b.position,
      transition: g.transition || b.transition,
      className: Ta(g.className || b.toastClassName),
      bodyClassName: Ta(g.bodyClassName || b.bodyClassName),
      style: g.style || b.toastStyle,
      bodyStyle: g.bodyStyle || b.bodyStyle,
      onClick: g.onClick || b.onClick,
      pauseOnHover: ho(g.pauseOnHover) ? g.pauseOnHover : b.pauseOnHover,
      pauseOnFocusLoss: ho(g.pauseOnFocusLoss) ? g.pauseOnFocusLoss : b.pauseOnFocusLoss,
      draggable: ho(g.draggable) ? g.draggable : b.draggable,
      draggablePercent: g.draggablePercent || b.draggablePercent,
      draggableDirection: g.draggableDirection || b.draggableDirection,
      closeOnClick: ho(g.closeOnClick) ? g.closeOnClick : b.closeOnClick,
      progressClassName: Ta(g.progressClassName || b.progressClassName),
      progressStyle: g.progressStyle || b.progressStyle,
      autoClose:
        !g.isLoading &&
        ((L = g.autoClose), (I = b.autoClose), L === !1 || (Fo(L) && L > 0) ? L : I),
      hideProgressBar: ho(g.hideProgressBar) ? g.hideProgressBar : b.hideProgressBar,
      progress: g.progress,
      role: g.role || b.role,
      deleteToast() {
        const S = Hp(o.get(m), 'removed')
        o.delete(m), Kt.emit(4, S)
        const Z = a.queue.length
        if (
          ((a.count = Yu(m) ? a.count - 1 : a.count - a.displayedToast),
          a.count < 0 && (a.count = 0),
          Z > 0)
        ) {
          const Q = Yu(m) ? 1 : a.props.limit
          if (Z === 1 || Q === 1) a.displayedToast++, c()
          else {
            const X = Q > Z ? Z : Q
            a.displayedToast = X
            for (let ue = 0; ue < X; ue++) c()
          }
        } else t()
      }
    }
    var L, I
    ;(P.iconOut = (function (S) {
      let { theme: Z, type: Q, isLoading: X, icon: ue } = S,
        C = null
      const M = { theme: Z, type: Q }
      return (
        ue === !1 ||
          (zt(ue)
            ? (C = ue(M))
            : R.exports.isValidElement(ue)
            ? (C = R.exports.cloneElement(ue, M))
            : ir(ue) || Fo(ue)
            ? (C = ue)
            : X
            ? (C = Xu.spinner())
            : ((D) => D in Xu)(Q) && (C = Xu[Q](M))),
        C
      )
    })(P)),
      zt(g.onOpen) && (P.onOpen = g.onOpen),
      zt(g.onClose) && (P.onClose = g.onClose),
      (P.closeButton = b.closeButton),
      g.closeButton === !1 || Qu(g.closeButton)
        ? (P.closeButton = g.closeButton)
        : g.closeButton === !0 && (P.closeButton = !Qu(b.closeButton) || b.closeButton)
    let N = h
    R.exports.isValidElement(h) && !ir(h.type)
      ? (N = R.exports.cloneElement(h, { closeToast: O, toastProps: P, data: x }))
      : zt(h) && (N = h({ closeToast: O, toastProps: P, data: x })),
      b.limit && b.limit > 0 && a.count > b.limit && k
        ? a.queue.push({ toastContent: N, toastProps: P, staleId: _ })
        : Fo(y)
        ? setTimeout(() => {
            f(N, P, _)
          }, y)
        : f(N, P, _)
  }
  function f(h, p, y) {
    const { toastId: _ } = p
    y && o.delete(y)
    const g = { content: h, props: p }
    o.set(_, g),
      i((m) => [...m, _].filter((v) => v !== y)),
      Kt.emit(4, Hp(g, g.props.updateId == null ? 'added' : 'updated'))
  }
  return (
    R.exports.useEffect(
      () => (
        (a.containerId = e.containerId),
        Kt.cancelEmit(3)
          .on(0, d)
          .on(1, (h) => r.current && u(h))
          .on(5, l)
          .emit(2, a),
        () => Kt.emit(3, a)
      ),
      []
    ),
    R.exports.useEffect(() => {
      ;(a.props = e), (a.isToastActive = s), (a.displayedToast = n.length)
    }),
    {
      getToastToRender: function (h) {
        const p = new Map(),
          y = Array.from(o.values())
        return (
          e.newestOnTop && y.reverse(),
          y.forEach((_) => {
            const { position: g } = _.props
            p.has(g) || p.set(g, []), p.get(g).push(_)
          }),
          Array.from(p, (_) => h(_[0], _[1]))
        )
      },
      containerRef: r,
      isToastActive: s
    }
  )
}
function Wp(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
}
function Vp(e) {
  return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY
}
function Ww(e) {
  const [t, n] = R.exports.useState(!1),
    [i, r] = R.exports.useState(!1),
    o = R.exports.useRef(null),
    s = R.exports.useRef({
      start: 0,
      x: 0,
      y: 0,
      delta: 0,
      removalDistance: 0,
      canCloseOnClick: !0,
      canDrag: !1,
      boundingRect: null,
      didMove: !1
    }).current,
    a = R.exports.useRef(e),
    { autoClose: l, pauseOnHover: u, closeToast: c, onClick: d, closeOnClick: f } = e
  function h(x) {
    if (e.draggable) {
      ;(s.didMove = !1),
        document.addEventListener('mousemove', g),
        document.addEventListener('mouseup', m),
        document.addEventListener('touchmove', g),
        document.addEventListener('touchend', m)
      const b = o.current
      ;(s.canCloseOnClick = !0),
        (s.canDrag = !0),
        (s.boundingRect = b.getBoundingClientRect()),
        (b.style.transition = ''),
        (s.x = Wp(x.nativeEvent)),
        (s.y = Vp(x.nativeEvent)),
        e.draggableDirection === 'x'
          ? ((s.start = s.x), (s.removalDistance = b.offsetWidth * (e.draggablePercent / 100)))
          : ((s.start = s.y),
            (s.removalDistance =
              b.offsetHeight *
              (e.draggablePercent === 80 ? 1.5 * e.draggablePercent : e.draggablePercent / 100)))
    }
  }
  function p() {
    if (s.boundingRect) {
      const { top: x, bottom: b, left: O, right: k } = s.boundingRect
      e.pauseOnHover && s.x >= O && s.x <= k && s.y >= x && s.y <= b ? _() : y()
    }
  }
  function y() {
    n(!0)
  }
  function _() {
    n(!1)
  }
  function g(x) {
    const b = o.current
    s.canDrag &&
      b &&
      ((s.didMove = !0),
      t && _(),
      (s.x = Wp(x)),
      (s.y = Vp(x)),
      (s.delta = e.draggableDirection === 'x' ? s.x - s.start : s.y - s.start),
      s.start !== s.x && (s.canCloseOnClick = !1),
      (b.style.transform = 'translate' + e.draggableDirection + '(' + s.delta + 'px)'),
      (b.style.opacity = '' + (1 - Math.abs(s.delta / s.removalDistance))))
  }
  function m() {
    document.removeEventListener('mousemove', g),
      document.removeEventListener('mouseup', m),
      document.removeEventListener('touchmove', g),
      document.removeEventListener('touchend', m)
    const x = o.current
    if (s.canDrag && s.didMove && x) {
      if (((s.canDrag = !1), Math.abs(s.delta) > s.removalDistance))
        return r(!0), void e.closeToast()
      ;(x.style.transition = 'transform 0.2s, opacity 0.2s'),
        (x.style.transform = 'translate' + e.draggableDirection + '(0)'),
        (x.style.opacity = '1')
    }
  }
  R.exports.useEffect(() => {
    a.current = e
  }),
    R.exports.useEffect(
      () => (
        o.current && o.current.addEventListener('d', y, { once: !0 }),
        zt(e.onOpen) && e.onOpen(R.exports.isValidElement(e.children) && e.children.props),
        () => {
          const x = a.current
          zt(x.onClose) && x.onClose(R.exports.isValidElement(x.children) && x.children.props)
        }
      ),
      []
    ),
    R.exports.useEffect(
      () => (
        e.pauseOnFocusLoss &&
          (document.hasFocus() || _(),
          window.addEventListener('focus', y),
          window.addEventListener('blur', _)),
        () => {
          e.pauseOnFocusLoss &&
            (window.removeEventListener('focus', y), window.removeEventListener('blur', _))
        }
      ),
      [e.pauseOnFocusLoss]
    )
  const v = { onMouseDown: h, onTouchStart: h, onMouseUp: p, onTouchEnd: p }
  return (
    l && u && ((v.onMouseEnter = _), (v.onMouseLeave = y)),
    f &&
      (v.onClick = (x) => {
        d && d(x), s.canCloseOnClick && c()
      }),
    {
      playToast: y,
      pauseToast: _,
      isRunning: t,
      preventExitTransition: i,
      toastRef: o,
      eventHandlers: v
    }
  )
}
function Dy(e) {
  let { closeToast: t, theme: n, ariaLabel: i = 'close' } = e
  return oe.createElement(
    'button',
    {
      className: 'Toastify__close-button Toastify__close-button--' + n,
      type: 'button',
      onClick: (r) => {
        r.stopPropagation(), t(r)
      },
      'aria-label': i
    },
    oe.createElement(
      'svg',
      { 'aria-hidden': 'true', viewBox: '0 0 14 16' },
      oe.createElement('path', {
        fillRule: 'evenodd',
        d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z'
      })
    )
  )
}
function zy(e) {
  let {
    delay: t,
    isRunning: n,
    closeToast: i,
    type: r,
    hide: o,
    className: s,
    style: a,
    controlledProgress: l,
    progress: u,
    rtl: c,
    isIn: d,
    theme: f
  } = e
  const h = Be(te({}, a), {
    animationDuration: t + 'ms',
    animationPlayState: n ? 'running' : 'paused',
    opacity: o ? 0 : 1
  })
  l && (h.transform = 'scaleX(' + u + ')')
  const p = ci(
      'Toastify__progress-bar',
      l ? 'Toastify__progress-bar--controlled' : 'Toastify__progress-bar--animated',
      'Toastify__progress-bar-theme--' + f,
      'Toastify__progress-bar--' + r,
      { 'Toastify__progress-bar--rtl': c }
    ),
    y = zt(s) ? s({ rtl: c, type: r, defaultClassName: p }) : ci(p, s)
  return oe.createElement('div', {
    role: 'progressbar',
    'aria-hidden': o ? 'true' : 'false',
    'aria-label': 'notification timer',
    className: y,
    style: h,
    [l && u >= 1 ? 'onTransitionEnd' : 'onAnimationEnd']:
      l && u < 1
        ? null
        : () => {
            d && i()
          }
  })
}
zy.defaultProps = { type: Bn.DEFAULT, hide: !1 }
const Vw = (e) => {
    const { isRunning: t, preventExitTransition: n, toastRef: i, eventHandlers: r } = Ww(e),
      {
        closeButton: o,
        children: s,
        autoClose: a,
        onClick: l,
        type: u,
        hideProgressBar: c,
        closeToast: d,
        transition: f,
        position: h,
        className: p,
        style: y,
        bodyClassName: _,
        bodyStyle: g,
        progressClassName: m,
        progressStyle: v,
        updateId: x,
        role: b,
        progress: O,
        rtl: k,
        toastId: P,
        deleteToast: L,
        isIn: I,
        isLoading: N,
        iconOut: Y,
        theme: S
      } = e,
      Z = ci('Toastify__toast', 'Toastify__toast-theme--' + S, 'Toastify__toast--' + u, {
        'Toastify__toast--rtl': k
      }),
      Q = zt(p) ? p({ rtl: k, position: h, type: u, defaultClassName: Z }) : ci(Z, p),
      X = !!O,
      ue = { closeToast: d, type: u, theme: S }
    let C = null
    return (
      o === !1 || (C = zt(o) ? o(ue) : oe.isValidElement(o) ? oe.cloneElement(o, ue) : Dy(ue)),
      oe.createElement(
        f,
        { isIn: I, done: L, position: h, preventExitTransition: n, nodeRef: i },
        oe.createElement(
          'div',
          Be(te({ id: P, onClick: l, className: Q }, r), { style: y, ref: i }),
          oe.createElement(
            'div',
            Be(te({}, I && { role: b }), {
              className: zt(_) ? _({ type: u }) : ci('Toastify__toast-body', _),
              style: g
            }),
            Y != null &&
              oe.createElement(
                'div',
                {
                  className: ci('Toastify__toast-icon', {
                    'Toastify--animate-icon Toastify__zoom-enter': !N
                  })
                },
                Y
              ),
            oe.createElement('div', null, s)
          ),
          C,
          (a || X) &&
            oe.createElement(
              zy,
              Be(te({}, x && !X ? { key: 'pb-' + x } : {}), {
                rtl: k,
                theme: S,
                delay: a,
                isRunning: t,
                isIn: I,
                closeToast: d,
                hide: c,
                type: u,
                style: v,
                className: m,
                controlledProgress: X,
                progress: O
              })
            )
        )
      )
    )
  },
  Uw = $w({
    enter: 'Toastify--animate Toastify__bounce-enter',
    exit: 'Toastify--animate Toastify__bounce-exit',
    appendPosition: !0
  }),
  yd = R.exports.forwardRef((e, t) => {
    const { getToastToRender: n, containerRef: i, isToastActive: r } = Hw(e),
      { className: o, style: s, rtl: a, containerId: l } = e
    function u(c) {
      const d = ci('Toastify__toast-container', 'Toastify__toast-container--' + c, {
        'Toastify__toast-container--rtl': a
      })
      return zt(o) ? o({ position: c, rtl: a, defaultClassName: d }) : ci(d, Ta(o))
    }
    return (
      R.exports.useEffect(() => {
        t && (t.current = i.current)
      }, []),
      oe.createElement(
        'div',
        { ref: i, className: 'Toastify', id: l },
        n((c, d) => {
          const f = d.length ? te({}, s) : Be(te({}, s), { pointerEvents: 'none' })
          return oe.createElement(
            'div',
            { className: u(c), style: f, key: 'container-' + c },
            d.map((h, p) => {
              let { content: y, props: _ } = h
              return oe.createElement(
                Vw,
                Be(te({}, _), {
                  isIn: r(_.toastId),
                  style: Be(te({}, _.style), { '--nth': p + 1, '--len': d.length }),
                  key: 'toast-' + _.key
                }),
                y
              )
            })
          )
        })
      )
    )
  })
;(yd.displayName = 'ToastContainer'),
  (yd.defaultProps = {
    position: Ny.TOP_RIGHT,
    transition: Uw,
    rtl: !1,
    autoClose: 5e3,
    hideProgressBar: !1,
    closeButton: Dy,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    newestOnTop: !1,
    draggable: !0,
    draggablePercent: 80,
    draggableDirection: 'x',
    role: 'alert',
    theme: 'light'
  })
let Ku,
  yr = new Map(),
  vd = []
function Iy() {
  return Math.random().toString(36).substring(2, 9)
}
function qw(e) {
  return e && (ir(e.toastId) || Fo(e.toastId)) ? e.toastId : Iy()
}
function jo(e, t) {
  return yr.size > 0 ? Kt.emit(0, e, t) : vd.push({ content: e, options: t }), t.toastId
}
function ol(e, t) {
  return Be(te({}, t), { type: (t && t.type) || e, toastId: qw(t) })
}
function ia(e) {
  return (t, n) => jo(t, ol(e, n))
}
function Re(e, t) {
  return jo(e, ol(Bn.DEFAULT, t))
}
;(Re.loading = (e, t) =>
  jo(
    e,
    ol(
      Bn.DEFAULT,
      te({ isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1 }, t)
    )
  )),
  (Re.promise = function (e, t, n) {
    let i,
      { pending: r, error: o, success: s } = t
    r && (i = ir(r) ? Re.loading(r, n) : Re.loading(r.render, te(te({}, n), r)))
    const a = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
        delay: 100
      },
      l = (c, d, f) => {
        if (d == null) return void Re.dismiss(i)
        const h = Be(te(te({ type: c }, a), n), { data: f }),
          p = ir(d) ? { render: d } : d
        return i ? Re.update(i, te(te({}, h), p)) : Re(p.render, te(te({}, h), p)), f
      },
      u = zt(e) ? e() : e
    return u.then((c) => l('success', s, c)).catch((c) => l('error', o, c)), u
  }),
  (Re.success = ia(Bn.SUCCESS)),
  (Re.info = ia(Bn.INFO)),
  (Re.error = ia(Bn.ERROR)),
  (Re.warning = ia(Bn.WARNING)),
  (Re.warn = Re.warning),
  (Re.dark = (e, t) => jo(e, ol(Bn.DEFAULT, te({ theme: 'dark' }, t)))),
  (Re.dismiss = (e) => Kt.emit(1, e)),
  (Re.clearWaitingQueue = function (e) {
    return e === void 0 && (e = {}), Kt.emit(5, e)
  }),
  (Re.isActive = (e) => {
    let t = !1
    return (
      yr.forEach((n) => {
        n.isToastActive && n.isToastActive(e) && (t = !0)
      }),
      t
    )
  }),
  (Re.update = function (e, t) {
    t === void 0 && (t = {}),
      setTimeout(() => {
        const n = (function (i, r) {
          let { containerId: o } = r
          const s = yr.get(o || Ku)
          return s ? s.getToast(i) : null
        })(e, t)
        if (n) {
          const { props: i, content: r } = n,
            o = Be(te(te({}, i), t), { toastId: t.toastId || e, updateId: Iy() })
          o.toastId !== e && (o.staleId = e)
          const s = o.render || r
          delete o.render, jo(s, o)
        }
      }, 0)
  }),
  (Re.done = (e) => {
    Re.update(e, { progress: 1 })
  }),
  (Re.onChange = (e) => (
    Kt.on(4, e),
    () => {
      Kt.off(4, e)
    }
  )),
  (Re.POSITION = Ny),
  (Re.TYPE = Bn),
  Kt.on(2, (e) => {
    ;(Ku = e.containerId || e),
      yr.set(Ku, e),
      vd.forEach((t) => {
        Kt.emit(0, t.content, t.options)
      }),
      (vd = [])
  }).on(3, (e) => {
    yr.delete(e.containerId || e), yr.size === 0 && Kt.off(0).off(1).off(5)
  })
const Yw = '_success_p25t6_1',
  Qw = '_error_p25t6_2',
  Xw = '_warning_p25t6_3'
var Gu = { success: Yw, error: Qw, warning: Xw }
function Zu(e) {
  const { title: t, type: n } = e
  return w('div', {
    className: `
      ${n === 'success' && Gu.success}
      ${n === 'error' && Gu.error} 
      ${n === 'warning' && Gu.warning}`,
    children: t
  })
}
const ra = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Price' },
  { name: 'Total' },
  { name: 'Total1' },
  { name: 'Total2' },
  { name: 'Total3' },
  { name: 'Total4' }
]
function Kw() {
  const [e, t] = R.exports.useState({ _limit: 5, _start: 1, _page: 1, _total: 20 }),
    n = (a) => {
      navigator.clipboard.writeText(a), Re.success('\u0110\xE3 copy'), Re.clearWaitingQueue()
    },
    i = (a) => {
      t(Be(te({}, e), { _page: a }))
    },
    r = () => {
      t(Be(te({}, e), { _page: e._page - 1 <= 0 ? 1 : e._page - 1 }))
    },
    o = () => {
      t(Be(te({}, e), { _page: e._page + 1 >= e._total ? e._total : e._page + 1 }))
    },
    s = (a) => Math.floor((a - 1) / e._limit) * e._limit + 1
  return q(dt, {
    children: [
      w(yd, { limit: 1, autoClose: 500, hideProgressBar: !0, pauseOnFocusLoss: !1 }),
      q('div', {
        className: qe.table,
        children: [
          q('div', {
            className: qe.optionTable,
            children: [
              w('p', { className: qe.title, children: 'Name Table' }),
              q('div', {
                className: qe.groupButton,
                children: [
                  w(Qb, { size: 20 }),
                  w('div', { className: qe.buttonItem, children: 'Export to CSV' }),
                  q('div', {
                    className: qe.buttonItem,
                    children: [w('p', { children: 'Export' }), ' ', w(qb, { size: 16 })]
                  })
                ]
              })
            ]
          }),
          w('div', {
            className: qe.tableHeader,
            children: ra.map((a) =>
              w(
                'div',
                { className: qe.tableTH, children: q('p', { children: [a.name, ' '] }) },
                a.name
              )
            )
          }),
          q('div', {
            className: qe.tableBody,
            children: [
              w('div', {
                className: qe.tableTR,
                children: ra.map((a) =>
                  w(
                    'div',
                    { className: qe.tableTD, children: w(Zu, { title: a.name, type: 'error' }) },
                    a.name
                  )
                )
              }),
              w('div', {
                className: qe.tableTR,
                children: ra.map((a) =>
                  w(
                    'div',
                    {
                      className: qe.tableTD,
                      onClick: () => n(a.name),
                      children: w(Zu, { title: a.name, type: 'warning' })
                    },
                    a.name
                  )
                )
              }),
              w('div', {
                className: qe.tableTR,
                children: ra.map((a) =>
                  w(
                    'div',
                    {
                      className: qe.tableTD,
                      onClick: () => n(a.name),
                      children: w(Zu, { title: a.name, type: 'success' })
                    },
                    a.name
                  )
                )
              })
            ]
          }),
          q('div', {
            className: qe.navigation,
            children: [
              w('div', { className: qe.pageTable, onClick: r, children: w(jw, {}) }),
              s(e._page) + e._limit - 1 > e._total - e._limit &&
                w('p', { className: qe.dot, children: '...' }),
              Array.from({ length: e._total }, (a, l) => l + 1)
                .slice(s(e._page) - 1, s(e._page) + e._limit - 1)
                .map((a) =>
                  w(
                    'div',
                    {
                      className: `${qe.pageTable} ${e._page === a && qe.active}`,
                      onClick: () => i(a),
                      children: w('p', { children: a })
                    },
                    a
                  )
                ),
              s(e._page) + e._limit - 1 < e._total &&
                w('p', { className: qe.dot, children: '...' }),
              w('div', { className: qe.pageTable, onClick: o, children: w(Ly, {}) })
            ]
          })
        ]
      })
    ]
  })
}
var Gw = R.exports.memo(Kw)
const Zw = '_inputField_1u7tv_1',
  Jw = '_invalid_1u7tv_23',
  eS = '_inputBox_1u7tv_30'
var Ju = { inputField: Zw, invalid: Jw, inputBox: eS }
function Up(e) {
  const { name: t, value: n, handelChange: i, type: r, title: o, invalid: s, textInvalid: a } = e
  return q('div', {
    className: Ju.inputBox,
    children: [
      w('fieldset', {
        className: Ju.inputField,
        children: w('input', { value: n, type: r, name: t, onChange: (l) => i(l), placeholder: o })
      }),
      s && w('span', { className: Ju.invalid, children: a })
    ]
  })
}
const tS = '_inputField_p80g6_1',
  nS = '_invalid_p80g6_16',
  iS = '_inputBox_p80g6_23',
  rS = '_title_p80g6_29',
  oS = '_isRequired_p80g6_34'
var po = { inputField: tS, invalid: nS, inputBox: iS, title: rS, isRequired: oS }
function pr(e) {
  const {
    name: t,
    value: n,
    handelChange: i,
    type: r,
    title: o,
    invalid: s,
    textInvalid: a,
    isRequired: l
  } = e
  return q('div', {
    className: po.inputBox,
    children: [
      q('p', {
        className: po.title,
        children: [o, ' ', l && w('span', { className: po.isRequired, children: '*' })]
      }),
      w('fieldset', {
        className: po.inputField,
        children: w('input', { value: n, type: r, name: t, onChange: (u) => i(u) })
      }),
      s && l && w('span', { className: po.invalid, children: a })
    ]
  })
}
/*!
 * Chart.js v3.8.0
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ const Ay = (function () {
  return typeof window == 'undefined'
    ? function (e) {
        return e()
      }
    : window.requestAnimationFrame
})()
function Fy(e, t, n) {
  const i = n || ((s) => Array.prototype.slice.call(s))
  let r = !1,
    o = []
  return function (...s) {
    ;(o = i(s)),
      r ||
        ((r = !0),
        Ay.call(window, () => {
          ;(r = !1), e.apply(t, o)
        }))
  }
}
function sS(e, t) {
  let n
  return function (...i) {
    return t ? (clearTimeout(n), (n = setTimeout(e, t, i))) : e.apply(this, i), t
  }
}
const Rf = (e) => (e === 'start' ? 'left' : e === 'end' ? 'right' : 'center'),
  xt = (e, t, n) => (e === 'start' ? t : e === 'end' ? n : (t + n) / 2),
  aS = (e, t, n, i) => (e === (i ? 'left' : 'right') ? n : e === 'center' ? (t + n) / 2 : t)
function Dn() {}
const lS = (function () {
  let e = 0
  return function () {
    return e++
  }
})()
function be(e) {
  return e === null || typeof e == 'undefined'
}
function Ne(e) {
  if (Array.isArray && Array.isArray(e)) return !0
  const t = Object.prototype.toString.call(e)
  return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]'
}
function ge(e) {
  return e !== null && Object.prototype.toString.call(e) === '[object Object]'
}
const ht = (e) => (typeof e == 'number' || e instanceof Number) && isFinite(+e)
function Xt(e, t) {
  return ht(e) ? e : t
}
function ie(e, t) {
  return typeof e == 'undefined' ? t : e
}
const uS = (e, t) => (typeof e == 'string' && e.endsWith('%') ? parseFloat(e) / 100 : e / t),
  jy = (e, t) => (typeof e == 'string' && e.endsWith('%') ? (parseFloat(e) / 100) * t : +e)
function Ee(e, t, n) {
  if (e && typeof e.call == 'function') return e.apply(n, t)
}
function xe(e, t, n, i) {
  let r, o, s
  if (Ne(e))
    if (((o = e.length), i)) for (r = o - 1; r >= 0; r--) t.call(n, e[r], r)
    else for (r = 0; r < o; r++) t.call(n, e[r], r)
  else if (ge(e)) for (s = Object.keys(e), o = s.length, r = 0; r < o; r++) t.call(n, e[s[r]], s[r])
}
function sl(e, t) {
  let n, i, r, o
  if (!e || !t || e.length !== t.length) return !1
  for (n = 0, i = e.length; n < i; ++n)
    if (((r = e[n]), (o = t[n]), r.datasetIndex !== o.datasetIndex || r.index !== o.index))
      return !1
  return !0
}
function al(e) {
  if (Ne(e)) return e.map(al)
  if (ge(e)) {
    const t = Object.create(null),
      n = Object.keys(e),
      i = n.length
    let r = 0
    for (; r < i; ++r) t[n[r]] = al(e[n[r]])
    return t
  }
  return e
}
function By(e) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(e) === -1
}
function cS(e, t, n, i) {
  if (!By(e)) return
  const r = t[e],
    o = n[e]
  ge(r) && ge(o) ? us(r, o, i) : (t[e] = al(o))
}
function us(e, t, n) {
  const i = Ne(t) ? t : [t],
    r = i.length
  if (!ge(e)) return e
  n = n || {}
  const o = n.merger || cS
  for (let s = 0; s < r; ++s) {
    if (((t = i[s]), !ge(t))) continue
    const a = Object.keys(t)
    for (let l = 0, u = a.length; l < u; ++l) o(a[l], e, t, n)
  }
  return e
}
function Bo(e, t) {
  return us(e, t, { merger: dS })
}
function dS(e, t, n) {
  if (!By(e)) return
  const i = t[e],
    r = n[e]
  ge(i) && ge(r) ? Bo(i, r) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = al(r))
}
const fS = '',
  hS = '.'
function qp(e, t) {
  const n = e.indexOf(hS, t)
  return n === -1 ? e.length : n
}
function Ei(e, t) {
  if (t === fS) return e
  let n = 0,
    i = qp(t, n)
  for (; e && i > n; ) (e = e[t.slice(n, i)]), (n = i + 1), (i = qp(t, n))
  return e
}
function Nf(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}
const an = (e) => typeof e != 'undefined',
  Pi = (e) => typeof e == 'function',
  Yp = (e, t) => {
    if (e.size !== t.size) return !1
    for (const n of e) if (!t.has(n)) return !1
    return !0
  }
function pS(e) {
  return e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu'
}
const Fe = Math.PI,
  Me = 2 * Fe,
  gS = Me + Fe,
  ll = Number.POSITIVE_INFINITY,
  mS = Fe / 180,
  Ye = Fe / 2,
  go = Fe / 4,
  Qp = (Fe * 2) / 3,
  Jt = Math.log10,
  Mn = Math.sign
function Xp(e) {
  const t = Math.round(e)
  e = $o(e, t, e / 1e3) ? t : e
  const n = Math.pow(10, Math.floor(Jt(e))),
    i = e / n
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n
}
function yS(e) {
  const t = [],
    n = Math.sqrt(e)
  let i
  for (i = 1; i < n; i++) e % i === 0 && (t.push(i), t.push(e / i))
  return n === (n | 0) && t.push(n), t.sort((r, o) => r - o).pop(), t
}
function cs(e) {
  return !isNaN(parseFloat(e)) && isFinite(e)
}
function $o(e, t, n) {
  return Math.abs(e - t) < n
}
function vS(e, t) {
  const n = Math.round(e)
  return n - t <= e && n + t >= e
}
function $y(e, t, n) {
  let i, r, o
  for (i = 0, r = e.length; i < r; i++)
    (o = e[i][n]), isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)))
}
function vn(e) {
  return e * (Fe / 180)
}
function Df(e) {
  return e * (180 / Fe)
}
function Kp(e) {
  if (!ht(e)) return
  let t = 1,
    n = 0
  for (; Math.round(e * t) / t !== e; ) (t *= 10), n++
  return n
}
function Hy(e, t) {
  const n = t.x - e.x,
    i = t.y - e.y,
    r = Math.sqrt(n * n + i * i)
  let o = Math.atan2(i, n)
  return o < -0.5 * Fe && (o += Me), { angle: o, distance: r }
}
function _d(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
}
function _S(e, t) {
  return ((e - t + gS) % Me) - Fe
}
function gn(e) {
  return ((e % Me) + Me) % Me
}
function ds(e, t, n, i) {
  const r = gn(e),
    o = gn(t),
    s = gn(n),
    a = gn(o - r),
    l = gn(s - r),
    u = gn(r - o),
    c = gn(r - s)
  return r === o || r === s || (i && o === s) || (a > l && u < c)
}
function wt(e, t, n) {
  return Math.max(t, Math.min(n, e))
}
function xS(e) {
  return wt(e, -32768, 32767)
}
function di(e, t, n, i = 1e-6) {
  return e >= Math.min(t, n) - i && e <= Math.max(t, n) + i
}
const oa = (e) => e === 0 || e === 1,
  Gp = (e, t, n) => -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * Me) / n)),
  Zp = (e, t, n) => Math.pow(2, -10 * e) * Math.sin(((e - t) * Me) / n) + 1,
  Ho = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => -e * (e - 2),
    easeInOutQuad: (e) => ((e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1)),
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => (e -= 1) * e * e + 1,
    easeInOutCubic: (e) => ((e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2)),
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
    easeInOutQuart: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
    easeInOutQuint: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: (e) => -Math.cos(e * Ye) + 1,
    easeOutSine: (e) => Math.sin(e * Ye),
    easeInOutSine: (e) => -0.5 * (Math.cos(Fe * e) - 1),
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
    easeOutExpo: (e) => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
    easeInOutExpo: (e) =>
      oa(e)
        ? e
        : e < 0.5
        ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
    easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: (e) =>
      (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: (e) => (oa(e) ? e : Gp(e, 0.075, 0.3)),
    easeOutElastic: (e) => (oa(e) ? e : Zp(e, 0.075, 0.3)),
    easeInOutElastic(e) {
      return oa(e)
        ? e
        : e < 0.5
        ? 0.5 * Gp(e * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * Zp(e * 2 - 1, 0.1125, 0.45)
    },
    easeInBack(e) {
      return e * e * ((1.70158 + 1) * e - 1.70158)
    },
    easeOutBack(e) {
      return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1
    },
    easeInOutBack(e) {
      let t = 1.70158
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    },
    easeInBounce: (e) => 1 - Ho.easeOutBounce(1 - e),
    easeOutBounce(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375
    },
    easeInOutBounce: (e) =>
      e < 0.5 ? Ho.easeInBounce(e * 2) * 0.5 : Ho.easeOutBounce(e * 2 - 1) * 0.5 + 0.5
  }
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */ function ks(e) {
  return (e + 0.5) | 0
}
const fi = (e, t, n) => Math.max(Math.min(e, n), t)
function Po(e) {
  return fi(ks(e * 2.55), 0, 255)
}
function wi(e) {
  return fi(ks(e * 255), 0, 255)
}
function Hn(e) {
  return fi(ks(e / 2.55) / 100, 0, 1)
}
function Jp(e) {
  return fi(ks(e * 100), 0, 100)
}
const Qt = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  },
  xd = [...'0123456789ABCDEF'],
  bS = (e) => xd[e & 15],
  wS = (e) => xd[(e & 240) >> 4] + xd[e & 15],
  sa = (e) => (e & 240) >> 4 === (e & 15),
  SS = (e) => sa(e.r) && sa(e.g) && sa(e.b) && sa(e.a)
function kS(e) {
  var t = e.length,
    n
  return (
    e[0] === '#' &&
      (t === 4 || t === 5
        ? (n = {
            r: 255 & (Qt[e[1]] * 17),
            g: 255 & (Qt[e[2]] * 17),
            b: 255 & (Qt[e[3]] * 17),
            a: t === 5 ? Qt[e[4]] * 17 : 255
          })
        : (t === 7 || t === 9) &&
          (n = {
            r: (Qt[e[1]] << 4) | Qt[e[2]],
            g: (Qt[e[3]] << 4) | Qt[e[4]],
            b: (Qt[e[5]] << 4) | Qt[e[6]],
            a: t === 9 ? (Qt[e[7]] << 4) | Qt[e[8]] : 255
          })),
    n
  )
}
const CS = (e, t) => (e < 255 ? t(e) : '')
function ES(e) {
  var t = SS(e) ? bS : wS
  return e ? '#' + t(e.r) + t(e.g) + t(e.b) + CS(e.a, t) : void 0
}
const PS =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/
function Wy(e, t, n) {
  const i = t * Math.min(n, 1 - n),
    r = (o, s = (o + e / 30) % 12) => n - i * Math.max(Math.min(s - 3, 9 - s, 1), -1)
  return [r(0), r(8), r(4)]
}
function MS(e, t, n) {
  const i = (r, o = (r + e / 60) % 6) => n - n * t * Math.max(Math.min(o, 4 - o, 1), 0)
  return [i(5), i(3), i(1)]
}
function OS(e, t, n) {
  const i = Wy(e, 1, 0.5)
  let r
  for (t + n > 1 && ((r = 1 / (t + n)), (t *= r), (n *= r)), r = 0; r < 3; r++)
    (i[r] *= 1 - t - n), (i[r] += t)
  return i
}
function TS(e, t, n, i, r) {
  return e === r ? (t - n) / i + (t < n ? 6 : 0) : t === r ? (n - e) / i + 2 : (e - t) / i + 4
}
function zf(e) {
  const n = e.r / 255,
    i = e.g / 255,
    r = e.b / 255,
    o = Math.max(n, i, r),
    s = Math.min(n, i, r),
    a = (o + s) / 2
  let l, u, c
  return (
    o !== s &&
      ((c = o - s),
      (u = a > 0.5 ? c / (2 - o - s) : c / (o + s)),
      (l = TS(n, i, r, c, o)),
      (l = l * 60 + 0.5)),
    [l | 0, u || 0, a]
  )
}
function If(e, t, n, i) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, i)).map(wi)
}
function Af(e, t, n) {
  return If(Wy, e, t, n)
}
function LS(e, t, n) {
  return If(OS, e, t, n)
}
function RS(e, t, n) {
  return If(MS, e, t, n)
}
function Vy(e) {
  return ((e % 360) + 360) % 360
}
function NS(e) {
  const t = PS.exec(e)
  let n = 255,
    i
  if (!t) return
  t[5] !== i && (n = t[6] ? Po(+t[5]) : wi(+t[5]))
  const r = Vy(+t[2]),
    o = +t[3] / 100,
    s = +t[4] / 100
  return (
    t[1] === 'hwb' ? (i = LS(r, o, s)) : t[1] === 'hsv' ? (i = RS(r, o, s)) : (i = Af(r, o, s)),
    { r: i[0], g: i[1], b: i[2], a: n }
  )
}
function DS(e, t) {
  var n = zf(e)
  ;(n[0] = Vy(n[0] + t)), (n = Af(n)), (e.r = n[0]), (e.g = n[1]), (e.b = n[2])
}
function zS(e) {
  if (!e) return
  const t = zf(e),
    n = t[0],
    i = Jp(t[1]),
    r = Jp(t[2])
  return e.a < 255 ? `hsla(${n}, ${i}%, ${r}%, ${Hn(e.a)})` : `hsl(${n}, ${i}%, ${r}%)`
}
const eg = {
    x: 'dark',
    Z: 'light',
    Y: 're',
    X: 'blu',
    W: 'gr',
    V: 'medium',
    U: 'slate',
    A: 'ee',
    T: 'ol',
    S: 'or',
    B: 'ra',
    C: 'lateg',
    D: 'ights',
    R: 'in',
    Q: 'turquois',
    E: 'hi',
    P: 'ro',
    O: 'al',
    N: 'le',
    M: 'de',
    L: 'yello',
    F: 'en',
    K: 'ch',
    G: 'arks',
    H: 'ea',
    I: 'ightg',
    J: 'wh'
  },
  tg = {
    OiceXe: 'f0f8ff',
    antiquewEte: 'faebd7',
    aqua: 'ffff',
    aquamarRe: '7fffd4',
    azuY: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '0',
    blanKedOmond: 'ffebcd',
    Xe: 'ff',
    XeviTet: '8a2be2',
    bPwn: 'a52a2a',
    burlywood: 'deb887',
    caMtXe: '5f9ea0',
    KartYuse: '7fff00',
    KocTate: 'd2691e',
    cSO: 'ff7f50',
    cSnflowerXe: '6495ed',
    cSnsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: 'ffff',
    xXe: '8b',
    xcyan: '8b8b',
    xgTMnPd: 'b8860b',
    xWay: 'a9a9a9',
    xgYF: '6400',
    xgYy: 'a9a9a9',
    xkhaki: 'bdb76b',
    xmagFta: '8b008b',
    xTivegYF: '556b2f',
    xSange: 'ff8c00',
    xScEd: '9932cc',
    xYd: '8b0000',
    xsOmon: 'e9967a',
    xsHgYF: '8fbc8f',
    xUXe: '483d8b',
    xUWay: '2f4f4f',
    xUgYy: '2f4f4f',
    xQe: 'ced1',
    xviTet: '9400d3',
    dAppRk: 'ff1493',
    dApskyXe: 'bfff',
    dimWay: '696969',
    dimgYy: '696969',
    dodgerXe: '1e90ff',
    fiYbrick: 'b22222',
    flSOwEte: 'fffaf0',
    foYstWAn: '228b22',
    fuKsia: 'ff00ff',
    gaRsbSo: 'dcdcdc',
    ghostwEte: 'f8f8ff',
    gTd: 'ffd700',
    gTMnPd: 'daa520',
    Way: '808080',
    gYF: '8000',
    gYFLw: 'adff2f',
    gYy: '808080',
    honeyMw: 'f0fff0',
    hotpRk: 'ff69b4',
    RdianYd: 'cd5c5c',
    Rdigo: '4b0082',
    ivSy: 'fffff0',
    khaki: 'f0e68c',
    lavFMr: 'e6e6fa',
    lavFMrXsh: 'fff0f5',
    lawngYF: '7cfc00',
    NmoncEffon: 'fffacd',
    ZXe: 'add8e6',
    ZcSO: 'f08080',
    Zcyan: 'e0ffff',
    ZgTMnPdLw: 'fafad2',
    ZWay: 'd3d3d3',
    ZgYF: '90ee90',
    ZgYy: 'd3d3d3',
    ZpRk: 'ffb6c1',
    ZsOmon: 'ffa07a',
    ZsHgYF: '20b2aa',
    ZskyXe: '87cefa',
    ZUWay: '778899',
    ZUgYy: '778899',
    ZstAlXe: 'b0c4de',
    ZLw: 'ffffe0',
    lime: 'ff00',
    limegYF: '32cd32',
    lRF: 'faf0e6',
    magFta: 'ff00ff',
    maPon: '800000',
    VaquamarRe: '66cdaa',
    VXe: 'cd',
    VScEd: 'ba55d3',
    VpurpN: '9370db',
    VsHgYF: '3cb371',
    VUXe: '7b68ee',
    VsprRggYF: 'fa9a',
    VQe: '48d1cc',
    VviTetYd: 'c71585',
    midnightXe: '191970',
    mRtcYam: 'f5fffa',
    mistyPse: 'ffe4e1',
    moccasR: 'ffe4b5',
    navajowEte: 'ffdead',
    navy: '80',
    Tdlace: 'fdf5e6',
    Tive: '808000',
    TivedBb: '6b8e23',
    Sange: 'ffa500',
    SangeYd: 'ff4500',
    ScEd: 'da70d6',
    pOegTMnPd: 'eee8aa',
    pOegYF: '98fb98',
    pOeQe: 'afeeee',
    pOeviTetYd: 'db7093',
    papayawEp: 'ffefd5',
    pHKpuff: 'ffdab9',
    peru: 'cd853f',
    pRk: 'ffc0cb',
    plum: 'dda0dd',
    powMrXe: 'b0e0e6',
    purpN: '800080',
    YbeccapurpN: '663399',
    Yd: 'ff0000',
    Psybrown: 'bc8f8f',
    PyOXe: '4169e1',
    saddNbPwn: '8b4513',
    sOmon: 'fa8072',
    sandybPwn: 'f4a460',
    sHgYF: '2e8b57',
    sHshell: 'fff5ee',
    siFna: 'a0522d',
    silver: 'c0c0c0',
    skyXe: '87ceeb',
    UXe: '6a5acd',
    UWay: '708090',
    UgYy: '708090',
    snow: 'fffafa',
    sprRggYF: 'ff7f',
    stAlXe: '4682b4',
    tan: 'd2b48c',
    teO: '8080',
    tEstN: 'd8bfd8',
    tomato: 'ff6347',
    Qe: '40e0d0',
    viTet: 'ee82ee',
    JHt: 'f5deb3',
    wEte: 'ffffff',
    wEtesmoke: 'f5f5f5',
    Lw: 'ffff00',
    LwgYF: '9acd32'
  }
function IS() {
  const e = {},
    t = Object.keys(tg),
    n = Object.keys(eg)
  let i, r, o, s, a
  for (i = 0; i < t.length; i++) {
    for (s = a = t[i], r = 0; r < n.length; r++) (o = n[r]), (a = a.replace(o, eg[o]))
    ;(o = parseInt(tg[s], 16)), (e[a] = [(o >> 16) & 255, (o >> 8) & 255, o & 255])
  }
  return e
}
let aa
function AS(e) {
  aa || ((aa = IS()), (aa.transparent = [0, 0, 0, 0]))
  const t = aa[e.toLowerCase()]
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 }
}
const FS =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/
function jS(e) {
  const t = FS.exec(e)
  let n = 255,
    i,
    r,
    o
  if (!!t) {
    if (t[7] !== i) {
      const s = +t[7]
      n = t[8] ? Po(s) : fi(s * 255, 0, 255)
    }
    return (
      (i = +t[1]),
      (r = +t[3]),
      (o = +t[5]),
      (i = 255 & (t[2] ? Po(i) : fi(i, 0, 255))),
      (r = 255 & (t[4] ? Po(r) : fi(r, 0, 255))),
      (o = 255 & (t[6] ? Po(o) : fi(o, 0, 255))),
      { r: i, g: r, b: o, a: n }
    )
  }
}
function BS(e) {
  return (
    e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Hn(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`)
  )
}
const ec = (e) => (e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055),
  gr = (e) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4))
function $S(e, t, n) {
  const i = gr(Hn(e.r)),
    r = gr(Hn(e.g)),
    o = gr(Hn(e.b))
  return {
    r: wi(ec(i + n * (gr(Hn(t.r)) - i))),
    g: wi(ec(r + n * (gr(Hn(t.g)) - r))),
    b: wi(ec(o + n * (gr(Hn(t.b)) - o))),
    a: e.a + n * (t.a - e.a)
  }
}
function la(e, t, n) {
  if (e) {
    let i = zf(e)
    ;(i[t] = Math.max(0, Math.min(i[t] + i[t] * n, t === 0 ? 360 : 1))),
      (i = Af(i)),
      (e.r = i[0]),
      (e.g = i[1]),
      (e.b = i[2])
  }
}
function Uy(e, t) {
  return e && Object.assign(t || {}, e)
}
function ng(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 }
  return (
    Array.isArray(e)
      ? e.length >= 3 &&
        ((t = { r: e[0], g: e[1], b: e[2], a: 255 }), e.length > 3 && (t.a = wi(e[3])))
      : ((t = Uy(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = wi(t.a))),
    t
  )
}
function HS(e) {
  return e.charAt(0) === 'r' ? jS(e) : NS(e)
}
class ul {
  constructor(t) {
    if (t instanceof ul) return t
    const n = typeof t
    let i
    n === 'object' ? (i = ng(t)) : n === 'string' && (i = kS(t) || AS(t) || HS(t)),
      (this._rgb = i),
      (this._valid = !!i)
  }
  get valid() {
    return this._valid
  }
  get rgb() {
    var t = Uy(this._rgb)
    return t && (t.a = Hn(t.a)), t
  }
  set rgb(t) {
    this._rgb = ng(t)
  }
  rgbString() {
    return this._valid ? BS(this._rgb) : void 0
  }
  hexString() {
    return this._valid ? ES(this._rgb) : void 0
  }
  hslString() {
    return this._valid ? zS(this._rgb) : void 0
  }
  mix(t, n) {
    if (t) {
      const i = this.rgb,
        r = t.rgb
      let o
      const s = n === o ? 0.5 : n,
        a = 2 * s - 1,
        l = i.a - r.a,
        u = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2
      ;(o = 1 - u),
        (i.r = 255 & (u * i.r + o * r.r + 0.5)),
        (i.g = 255 & (u * i.g + o * r.g + 0.5)),
        (i.b = 255 & (u * i.b + o * r.b + 0.5)),
        (i.a = s * i.a + (1 - s) * r.a),
        (this.rgb = i)
    }
    return this
  }
  interpolate(t, n) {
    return t && (this._rgb = $S(this._rgb, t._rgb, n)), this
  }
  clone() {
    return new ul(this.rgb)
  }
  alpha(t) {
    return (this._rgb.a = wi(t)), this
  }
  clearer(t) {
    const n = this._rgb
    return (n.a *= 1 - t), this
  }
  greyscale() {
    const t = this._rgb,
      n = ks(t.r * 0.3 + t.g * 0.59 + t.b * 0.11)
    return (t.r = t.g = t.b = n), this
  }
  opaquer(t) {
    const n = this._rgb
    return (n.a *= 1 + t), this
  }
  negate() {
    const t = this._rgb
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this
  }
  lighten(t) {
    return la(this._rgb, 2, t), this
  }
  darken(t) {
    return la(this._rgb, 2, -t), this
  }
  saturate(t) {
    return la(this._rgb, 1, t), this
  }
  desaturate(t) {
    return la(this._rgb, 1, -t), this
  }
  rotate(t) {
    return DS(this._rgb, t), this
  }
}
function qy(e) {
  return new ul(e)
}
function Yy(e) {
  if (e && typeof e == 'object') {
    const t = e.toString()
    return t === '[object CanvasPattern]' || t === '[object CanvasGradient]'
  }
  return !1
}
function ig(e) {
  return Yy(e) ? e : qy(e)
}
function tc(e) {
  return Yy(e) ? e : qy(e).saturate(0.5).darken(0.1).hexString()
}
const rr = Object.create(null),
  bd = Object.create(null)
function Wo(e, t) {
  if (!t) return e
  const n = t.split('.')
  for (let i = 0, r = n.length; i < r; ++i) {
    const o = n[i]
    e = e[o] || (e[o] = Object.create(null))
  }
  return e
}
function nc(e, t, n) {
  return typeof t == 'string' ? us(Wo(e, t), n) : us(Wo(e, ''), t)
}
class WS {
  constructor(t) {
    ;(this.animation = void 0),
      (this.backgroundColor = 'rgba(0,0,0,0.1)'),
      (this.borderColor = 'rgba(0,0,0,0.1)'),
      (this.color = '#666'),
      (this.datasets = {}),
      (this.devicePixelRatio = (n) => n.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: 'normal',
        lineHeight: 1.2,
        weight: null
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (n, i) => tc(i.backgroundColor)),
      (this.hoverBorderColor = (n, i) => tc(i.borderColor)),
      (this.hoverColor = (n, i) => tc(i.color)),
      (this.indexAxis = 'x'),
      (this.interaction = { mode: 'nearest', intersect: !0, includeInvisible: !1 }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t)
  }
  set(t, n) {
    return nc(this, t, n)
  }
  get(t) {
    return Wo(this, t)
  }
  describe(t, n) {
    return nc(bd, t, n)
  }
  override(t, n) {
    return nc(rr, t, n)
  }
  route(t, n, i, r) {
    const o = Wo(this, t),
      s = Wo(this, i),
      a = '_' + n
    Object.defineProperties(o, {
      [a]: { value: o[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[a],
            u = s[r]
          return ge(l) ? Object.assign({}, u, l) : ie(l, u)
        },
        set(l) {
          this[a] = l
        }
      }
    })
  }
}
var le = new WS({
  _scriptable: (e) => !e.startsWith('on'),
  _indexable: (e) => e !== 'events',
  hover: { _fallback: 'interaction' },
  interaction: { _scriptable: !1, _indexable: !1 }
})
function VS(e) {
  return !e || be(e.size) || be(e.family)
    ? null
    : (e.style ? e.style + ' ' : '') + (e.weight ? e.weight + ' ' : '') + e.size + 'px ' + e.family
}
function cl(e, t, n, i, r) {
  let o = t[r]
  return o || ((o = t[r] = e.measureText(r).width), n.push(r)), o > i && (i = o), i
}
function US(e, t, n, i) {
  i = i || {}
  let r = (i.data = i.data || {}),
    o = (i.garbageCollect = i.garbageCollect || [])
  i.font !== t && ((r = i.data = {}), (o = i.garbageCollect = []), (i.font = t)),
    e.save(),
    (e.font = t)
  let s = 0
  const a = n.length
  let l, u, c, d, f
  for (l = 0; l < a; l++)
    if (((d = n[l]), d != null && Ne(d) !== !0)) s = cl(e, r, o, s, d)
    else if (Ne(d))
      for (u = 0, c = d.length; u < c; u++)
        (f = d[u]), f != null && !Ne(f) && (s = cl(e, r, o, s, f))
  e.restore()
  const h = o.length / 2
  if (h > n.length) {
    for (l = 0; l < h; l++) delete r[o[l]]
    o.splice(0, h)
  }
  return s
}
function Ii(e, t, n) {
  const i = e.currentDevicePixelRatio,
    r = n !== 0 ? Math.max(n / 2, 0.5) : 0
  return Math.round((t - r) * i) / i + r
}
function rg(e, t) {
  ;(t = t || e.getContext('2d')),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore()
}
function dl(e, t, n, i) {
  let r, o, s, a, l
  const u = t.pointStyle,
    c = t.rotation,
    d = t.radius
  let f = (c || 0) * mS
  if (
    u &&
    typeof u == 'object' &&
    ((r = u.toString()), r === '[object HTMLImageElement]' || r === '[object HTMLCanvasElement]')
  ) {
    e.save(),
      e.translate(n, i),
      e.rotate(f),
      e.drawImage(u, -u.width / 2, -u.height / 2, u.width, u.height),
      e.restore()
    return
  }
  if (!(isNaN(d) || d <= 0)) {
    switch ((e.beginPath(), u)) {
      default:
        e.arc(n, i, d, 0, Me), e.closePath()
        break
      case 'triangle':
        e.moveTo(n + Math.sin(f) * d, i - Math.cos(f) * d),
          (f += Qp),
          e.lineTo(n + Math.sin(f) * d, i - Math.cos(f) * d),
          (f += Qp),
          e.lineTo(n + Math.sin(f) * d, i - Math.cos(f) * d),
          e.closePath()
        break
      case 'rectRounded':
        ;(l = d * 0.516),
          (a = d - l),
          (o = Math.cos(f + go) * a),
          (s = Math.sin(f + go) * a),
          e.arc(n - o, i - s, l, f - Fe, f - Ye),
          e.arc(n + s, i - o, l, f - Ye, f),
          e.arc(n + o, i + s, l, f, f + Ye),
          e.arc(n - s, i + o, l, f + Ye, f + Fe),
          e.closePath()
        break
      case 'rect':
        if (!c) {
          ;(a = Math.SQRT1_2 * d), e.rect(n - a, i - a, 2 * a, 2 * a)
          break
        }
        f += go
      case 'rectRot':
        ;(o = Math.cos(f) * d),
          (s = Math.sin(f) * d),
          e.moveTo(n - o, i - s),
          e.lineTo(n + s, i - o),
          e.lineTo(n + o, i + s),
          e.lineTo(n - s, i + o),
          e.closePath()
        break
      case 'crossRot':
        f += go
      case 'cross':
        ;(o = Math.cos(f) * d),
          (s = Math.sin(f) * d),
          e.moveTo(n - o, i - s),
          e.lineTo(n + o, i + s),
          e.moveTo(n + s, i - o),
          e.lineTo(n - s, i + o)
        break
      case 'star':
        ;(o = Math.cos(f) * d),
          (s = Math.sin(f) * d),
          e.moveTo(n - o, i - s),
          e.lineTo(n + o, i + s),
          e.moveTo(n + s, i - o),
          e.lineTo(n - s, i + o),
          (f += go),
          (o = Math.cos(f) * d),
          (s = Math.sin(f) * d),
          e.moveTo(n - o, i - s),
          e.lineTo(n + o, i + s),
          e.moveTo(n + s, i - o),
          e.lineTo(n - s, i + o)
        break
      case 'line':
        ;(o = Math.cos(f) * d),
          (s = Math.sin(f) * d),
          e.moveTo(n - o, i - s),
          e.lineTo(n + o, i + s)
        break
      case 'dash':
        e.moveTo(n, i), e.lineTo(n + Math.cos(f) * d, i + Math.sin(f) * d)
        break
    }
    e.fill(), t.borderWidth > 0 && e.stroke()
  }
}
function fs(e, t, n) {
  return (
    (n = n || 0.5),
    !t || (e && e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n)
  )
}
function Ff(e, t) {
  e.save(), e.beginPath(), e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), e.clip()
}
function jf(e) {
  e.restore()
}
function qS(e, t, n, i, r) {
  if (!t) return e.lineTo(n.x, n.y)
  if (r === 'middle') {
    const o = (t.x + n.x) / 2
    e.lineTo(o, t.y), e.lineTo(o, n.y)
  } else (r === 'after') != !!i ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y)
  e.lineTo(n.x, n.y)
}
function YS(e, t, n, i) {
  if (!t) return e.lineTo(n.x, n.y)
  e.bezierCurveTo(
    i ? t.cp1x : t.cp2x,
    i ? t.cp1y : t.cp2y,
    i ? n.cp2x : n.cp1x,
    i ? n.cp2y : n.cp1y,
    n.x,
    n.y
  )
}
function or(e, t, n, i, r, o = {}) {
  const s = Ne(t) ? t : [t],
    a = o.strokeWidth > 0 && o.strokeColor !== ''
  let l, u
  for (e.save(), e.font = r.string, QS(e, o), l = 0; l < s.length; ++l)
    (u = s[l]),
      a &&
        (o.strokeColor && (e.strokeStyle = o.strokeColor),
        be(o.strokeWidth) || (e.lineWidth = o.strokeWidth),
        e.strokeText(u, n, i, o.maxWidth)),
      e.fillText(u, n, i, o.maxWidth),
      XS(e, n, i, u, o),
      (i += r.lineHeight)
  e.restore()
}
function QS(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]),
    be(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline)
}
function XS(e, t, n, i, r) {
  if (r.strikethrough || r.underline) {
    const o = e.measureText(i),
      s = t - o.actualBoundingBoxLeft,
      a = t + o.actualBoundingBoxRight,
      l = n - o.actualBoundingBoxAscent,
      u = n + o.actualBoundingBoxDescent,
      c = r.strikethrough ? (l + u) / 2 : u
    ;(e.strokeStyle = e.fillStyle),
      e.beginPath(),
      (e.lineWidth = r.decorationWidth || 2),
      e.moveTo(s, c),
      e.lineTo(a, c),
      e.stroke()
  }
}
function hs(e, t) {
  const { x: n, y: i, w: r, h: o, radius: s } = t
  e.arc(n + s.topLeft, i + s.topLeft, s.topLeft, -Ye, Fe, !0),
    e.lineTo(n, i + o - s.bottomLeft),
    e.arc(n + s.bottomLeft, i + o - s.bottomLeft, s.bottomLeft, Fe, Ye, !0),
    e.lineTo(n + r - s.bottomRight, i + o),
    e.arc(n + r - s.bottomRight, i + o - s.bottomRight, s.bottomRight, Ye, 0, !0),
    e.lineTo(n + r, i + s.topRight),
    e.arc(n + r - s.topRight, i + s.topRight, s.topRight, 0, -Ye, !0),
    e.lineTo(n + s.topLeft, i)
}
const KS = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
  GS = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/)
function ZS(e, t) {
  const n = ('' + e).match(KS)
  if (!n || n[1] === 'normal') return t * 1.2
  switch (((e = +n[2]), n[3])) {
    case 'px':
      return e
    case '%':
      e /= 100
      break
  }
  return t * e
}
const JS = (e) => +e || 0
function Bf(e, t) {
  const n = {},
    i = ge(t),
    r = i ? Object.keys(t) : t,
    o = ge(e) ? (i ? (s) => ie(e[s], e[t[s]]) : (s) => e[s]) : () => e
  for (const s of r) n[s] = JS(o(s))
  return n
}
function Qy(e) {
  return Bf(e, { top: 'y', right: 'x', bottom: 'y', left: 'x' })
}
function Zi(e) {
  return Bf(e, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
}
function kt(e) {
  const t = Qy(e)
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t
}
function it(e, t) {
  ;(e = e || {}), (t = t || le.font)
  let n = ie(e.size, t.size)
  typeof n == 'string' && (n = parseInt(n, 10))
  let i = ie(e.style, t.style)
  i && !('' + i).match(GS) && (console.warn('Invalid font style specified: "' + i + '"'), (i = ''))
  const r = {
    family: ie(e.family, t.family),
    lineHeight: ZS(ie(e.lineHeight, t.lineHeight), n),
    size: n,
    style: i,
    weight: ie(e.weight, t.weight),
    string: ''
  }
  return (r.string = VS(r)), r
}
function ua(e, t, n, i) {
  let r = !0,
    o,
    s,
    a
  for (o = 0, s = e.length; o < s; ++o)
    if (
      ((a = e[o]),
      a !== void 0 &&
        (t !== void 0 && typeof a == 'function' && ((a = a(t)), (r = !1)),
        n !== void 0 && Ne(a) && ((a = a[n % a.length]), (r = !1)),
        a !== void 0))
    )
      return i && !r && (i.cacheable = !1), a
}
function e2(e, t, n) {
  const { min: i, max: r } = e,
    o = jy(t, (r - i) / 2),
    s = (a, l) => (n && a === 0 ? 0 : a + l)
  return { min: s(i, -Math.abs(o)), max: s(r, o) }
}
function Ni(e, t) {
  return Object.assign(Object.create(e), t)
}
function $f(e, t, n) {
  n = n || ((s) => e[s] < t)
  let i = e.length - 1,
    r = 0,
    o
  for (; i - r > 1; ) (o = (r + i) >> 1), n(o) ? (r = o) : (i = o)
  return { lo: r, hi: i }
}
const Qi = (e, t, n) => $f(e, n, (i) => e[i][t] < n),
  t2 = (e, t, n) => $f(e, n, (i) => e[i][t] >= n)
function n2(e, t, n) {
  let i = 0,
    r = e.length
  for (; i < r && e[i] < t; ) i++
  for (; r > i && e[r - 1] > n; ) r--
  return i > 0 || r < e.length ? e.slice(i, r) : e
}
const Xy = ['push', 'pop', 'shift', 'splice', 'unshift']
function i2(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t)
    return
  }
  Object.defineProperty(e, '_chartjs', {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] }
  }),
    Xy.forEach((n) => {
      const i = '_onData' + Nf(n),
        r = e[n]
      Object.defineProperty(e, n, {
        configurable: !0,
        enumerable: !1,
        value(...o) {
          const s = r.apply(this, o)
          return (
            e._chartjs.listeners.forEach((a) => {
              typeof a[i] == 'function' && a[i](...o)
            }),
            s
          )
        }
      })
    })
}
function og(e, t) {
  const n = e._chartjs
  if (!n) return
  const i = n.listeners,
    r = i.indexOf(t)
  r !== -1 && i.splice(r, 1),
    !(i.length > 0) &&
      (Xy.forEach((o) => {
        delete e[o]
      }),
      delete e._chartjs)
}
function Ky(e) {
  const t = new Set()
  let n, i
  for (n = 0, i = e.length; n < i; ++n) t.add(e[n])
  return t.size === i ? e : Array.from(t)
}
function Hf(e, t = [''], n = e, i, r = () => e[0]) {
  an(i) || (i = ev('_fallback', e))
  const o = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: !0,
    _scopes: e,
    _rootScopes: n,
    _fallback: i,
    _getTarget: r,
    override: (s) => Hf([s, ...e], t, n, i)
  }
  return new Proxy(o, {
    deleteProperty(s, a) {
      return delete s[a], delete s._keys, delete e[0][a], !0
    },
    get(s, a) {
      return Zy(s, a, () => d2(a, t, e, s))
    },
    getOwnPropertyDescriptor(s, a) {
      return Reflect.getOwnPropertyDescriptor(s._scopes[0], a)
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0])
    },
    has(s, a) {
      return ag(s).includes(a)
    },
    ownKeys(s) {
      return ag(s)
    },
    set(s, a, l) {
      const u = s._storage || (s._storage = r())
      return (s[a] = u[a] = l), delete s._keys, !0
    }
  })
}
function qr(e, t, n, i) {
  const r = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: Gy(e, i),
    setContext: (o) => qr(e, o, n, i),
    override: (o) => qr(e.override(o), t, n, i)
  }
  return new Proxy(r, {
    deleteProperty(o, s) {
      return delete o[s], delete e[s], !0
    },
    get(o, s, a) {
      return Zy(o, s, () => o2(o, s, a))
    },
    getOwnPropertyDescriptor(o, s) {
      return o._descriptors.allKeys
        ? Reflect.has(e, s)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(e, s)
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e)
    },
    has(o, s) {
      return Reflect.has(e, s)
    },
    ownKeys() {
      return Reflect.ownKeys(e)
    },
    set(o, s, a) {
      return (e[s] = a), delete o[s], !0
    }
  })
}
function Gy(e, t = { scriptable: !0, indexable: !0 }) {
  const { _scriptable: n = t.scriptable, _indexable: i = t.indexable, _allKeys: r = t.allKeys } = e
  return {
    allKeys: r,
    scriptable: n,
    indexable: i,
    isScriptable: Pi(n) ? n : () => n,
    isIndexable: Pi(i) ? i : () => i
  }
}
const r2 = (e, t) => (e ? e + Nf(t) : t),
  Wf = (e, t) =>
    ge(t) && e !== 'adapters' && (Object.getPrototypeOf(t) === null || t.constructor === Object)
function Zy(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
  const i = n()
  return (e[t] = i), i
}
function o2(e, t, n) {
  const { _proxy: i, _context: r, _subProxy: o, _descriptors: s } = e
  let a = i[t]
  return (
    Pi(a) && s.isScriptable(t) && (a = s2(t, a, e, n)),
    Ne(a) && a.length && (a = a2(t, a, e, s.isIndexable)),
    Wf(t, a) && (a = qr(a, r, o && o[t], s)),
    a
  )
}
function s2(e, t, n, i) {
  const { _proxy: r, _context: o, _subProxy: s, _stack: a } = n
  if (a.has(e)) throw new Error('Recursion detected: ' + Array.from(a).join('->') + '->' + e)
  return a.add(e), (t = t(o, s || i)), a.delete(e), Wf(e, t) && (t = Vf(r._scopes, r, e, t)), t
}
function a2(e, t, n, i) {
  const { _proxy: r, _context: o, _subProxy: s, _descriptors: a } = n
  if (an(o.index) && i(e)) t = t[o.index % t.length]
  else if (ge(t[0])) {
    const l = t,
      u = r._scopes.filter((c) => c !== l)
    t = []
    for (const c of l) {
      const d = Vf(u, r, e, c)
      t.push(qr(d, o, s && s[e], a))
    }
  }
  return t
}
function Jy(e, t, n) {
  return Pi(e) ? e(t, n) : e
}
const l2 = (e, t) => (e === !0 ? t : typeof e == 'string' ? Ei(t, e) : void 0)
function u2(e, t, n, i, r) {
  for (const o of t) {
    const s = l2(n, o)
    if (s) {
      e.add(s)
      const a = Jy(s._fallback, n, r)
      if (an(a) && a !== n && a !== i) return a
    } else if (s === !1 && an(i) && n !== i) return null
  }
  return !1
}
function Vf(e, t, n, i) {
  const r = t._rootScopes,
    o = Jy(t._fallback, n, i),
    s = [...e, ...r],
    a = new Set()
  a.add(i)
  let l = sg(a, s, n, o || n, i)
  return l === null || (an(o) && o !== n && ((l = sg(a, s, o, l, i)), l === null))
    ? !1
    : Hf(Array.from(a), [''], r, o, () => c2(t, n, i))
}
function sg(e, t, n, i, r) {
  for (; n; ) n = u2(e, t, n, i, r)
  return n
}
function c2(e, t, n) {
  const i = e._getTarget()
  t in i || (i[t] = {})
  const r = i[t]
  return Ne(r) && ge(n) ? n : r
}
function d2(e, t, n, i) {
  let r
  for (const o of t) if (((r = ev(r2(o, e), n)), an(r))) return Wf(e, r) ? Vf(n, i, e, r) : r
}
function ev(e, t) {
  for (const n of t) {
    if (!n) continue
    const i = n[e]
    if (an(i)) return i
  }
}
function ag(e) {
  let t = e._keys
  return t || (t = e._keys = f2(e._scopes)), t
}
function f2(e) {
  const t = new Set()
  for (const n of e) for (const i of Object.keys(n).filter((r) => !r.startsWith('_'))) t.add(i)
  return Array.from(t)
}
function tv(e, t, n, i) {
  const { iScale: r } = e,
    { key: o = 'r' } = this._parsing,
    s = new Array(i)
  let a, l, u, c
  for (a = 0, l = i; a < l; ++a) (u = a + n), (c = t[u]), (s[a] = { r: r.parse(Ei(c, o), u) })
  return s
}
const h2 = Number.EPSILON || 1e-14,
  Yr = (e, t) => t < e.length && !e[t].skip && e[t],
  nv = (e) => (e === 'x' ? 'y' : 'x')
function p2(e, t, n, i) {
  const r = e.skip ? t : e,
    o = t,
    s = n.skip ? t : n,
    a = _d(o, r),
    l = _d(s, o)
  let u = a / (a + l),
    c = l / (a + l)
  ;(u = isNaN(u) ? 0 : u), (c = isNaN(c) ? 0 : c)
  const d = i * u,
    f = i * c
  return {
    previous: { x: o.x - d * (s.x - r.x), y: o.y - d * (s.y - r.y) },
    next: { x: o.x + f * (s.x - r.x), y: o.y + f * (s.y - r.y) }
  }
}
function g2(e, t, n) {
  const i = e.length
  let r,
    o,
    s,
    a,
    l,
    u = Yr(e, 0)
  for (let c = 0; c < i - 1; ++c)
    if (((l = u), (u = Yr(e, c + 1)), !(!l || !u))) {
      if ($o(t[c], 0, h2)) {
        n[c] = n[c + 1] = 0
        continue
      }
      ;(r = n[c] / t[c]),
        (o = n[c + 1] / t[c]),
        (a = Math.pow(r, 2) + Math.pow(o, 2)),
        !(a <= 9) && ((s = 3 / Math.sqrt(a)), (n[c] = r * s * t[c]), (n[c + 1] = o * s * t[c]))
    }
}
function m2(e, t, n = 'x') {
  const i = nv(n),
    r = e.length
  let o,
    s,
    a,
    l = Yr(e, 0)
  for (let u = 0; u < r; ++u) {
    if (((s = a), (a = l), (l = Yr(e, u + 1)), !a)) continue
    const c = a[n],
      d = a[i]
    s && ((o = (c - s[n]) / 3), (a[`cp1${n}`] = c - o), (a[`cp1${i}`] = d - o * t[u])),
      l && ((o = (l[n] - c) / 3), (a[`cp2${n}`] = c + o), (a[`cp2${i}`] = d + o * t[u]))
  }
}
function y2(e, t = 'x') {
  const n = nv(t),
    i = e.length,
    r = Array(i).fill(0),
    o = Array(i)
  let s,
    a,
    l,
    u = Yr(e, 0)
  for (s = 0; s < i; ++s)
    if (((a = l), (l = u), (u = Yr(e, s + 1)), !!l)) {
      if (u) {
        const c = u[t] - l[t]
        r[s] = c !== 0 ? (u[n] - l[n]) / c : 0
      }
      o[s] = a ? (u ? (Mn(r[s - 1]) !== Mn(r[s]) ? 0 : (r[s - 1] + r[s]) / 2) : r[s - 1]) : r[s]
    }
  g2(e, r, o), m2(e, o, t)
}
function ca(e, t, n) {
  return Math.max(Math.min(e, n), t)
}
function v2(e, t) {
  let n,
    i,
    r,
    o,
    s,
    a = fs(e[0], t)
  for (n = 0, i = e.length; n < i; ++n)
    (s = o),
      (o = a),
      (a = n < i - 1 && fs(e[n + 1], t)),
      o &&
        ((r = e[n]),
        s && ((r.cp1x = ca(r.cp1x, t.left, t.right)), (r.cp1y = ca(r.cp1y, t.top, t.bottom))),
        a && ((r.cp2x = ca(r.cp2x, t.left, t.right)), (r.cp2y = ca(r.cp2y, t.top, t.bottom))))
}
function _2(e, t, n, i, r) {
  let o, s, a, l
  if ((t.spanGaps && (e = e.filter((u) => !u.skip)), t.cubicInterpolationMode === 'monotone'))
    y2(e, r)
  else {
    let u = i ? e[e.length - 1] : e[0]
    for (o = 0, s = e.length; o < s; ++o)
      (a = e[o]),
        (l = p2(u, a, e[Math.min(o + 1, s - (i ? 0 : 1)) % s], t.tension)),
        (a.cp1x = l.previous.x),
        (a.cp1y = l.previous.y),
        (a.cp2x = l.next.x),
        (a.cp2y = l.next.y),
        (u = a)
  }
  t.capBezierPoints && v2(e, n)
}
function iv() {
  return typeof window != 'undefined' && typeof document != 'undefined'
}
function Uf(e) {
  let t = e.parentNode
  return t && t.toString() === '[object ShadowRoot]' && (t = t.host), t
}
function fl(e, t, n) {
  let i
  return (
    typeof e == 'string'
      ? ((i = parseInt(e, 10)), e.indexOf('%') !== -1 && (i = (i / 100) * t.parentNode[n]))
      : (i = e),
    i
  )
}
const $l = (e) => window.getComputedStyle(e, null)
function x2(e, t) {
  return $l(e).getPropertyValue(t)
}
const b2 = ['top', 'right', 'bottom', 'left']
function Ji(e, t, n) {
  const i = {}
  n = n ? '-' + n : ''
  for (let r = 0; r < 4; r++) {
    const o = b2[r]
    i[o] = parseFloat(e[t + '-' + o + n]) || 0
  }
  return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i
}
const w2 = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot)
function S2(e, t) {
  const n = e.touches,
    i = n && n.length ? n[0] : e,
    { offsetX: r, offsetY: o } = i
  let s = !1,
    a,
    l
  if (w2(r, o, e.target)) (a = r), (l = o)
  else {
    const u = t.getBoundingClientRect()
    ;(a = i.clientX - u.left), (l = i.clientY - u.top), (s = !0)
  }
  return { x: a, y: l, box: s }
}
function $i(e, t) {
  if ('native' in e) return e
  const { canvas: n, currentDevicePixelRatio: i } = t,
    r = $l(n),
    o = r.boxSizing === 'border-box',
    s = Ji(r, 'padding'),
    a = Ji(r, 'border', 'width'),
    { x: l, y: u, box: c } = S2(e, n),
    d = s.left + (c && a.left),
    f = s.top + (c && a.top)
  let { width: h, height: p } = t
  return (
    o && ((h -= s.width + a.width), (p -= s.height + a.height)),
    { x: Math.round((((l - d) / h) * n.width) / i), y: Math.round((((u - f) / p) * n.height) / i) }
  )
}
function k2(e, t, n) {
  let i, r
  if (t === void 0 || n === void 0) {
    const o = Uf(e)
    if (!o) (t = e.clientWidth), (n = e.clientHeight)
    else {
      const s = o.getBoundingClientRect(),
        a = $l(o),
        l = Ji(a, 'border', 'width'),
        u = Ji(a, 'padding')
      ;(t = s.width - u.width - l.width),
        (n = s.height - u.height - l.height),
        (i = fl(a.maxWidth, o, 'clientWidth')),
        (r = fl(a.maxHeight, o, 'clientHeight'))
    }
  }
  return { width: t, height: n, maxWidth: i || ll, maxHeight: r || ll }
}
const ic = (e) => Math.round(e * 10) / 10
function C2(e, t, n, i) {
  const r = $l(e),
    o = Ji(r, 'margin'),
    s = fl(r.maxWidth, e, 'clientWidth') || ll,
    a = fl(r.maxHeight, e, 'clientHeight') || ll,
    l = k2(e, t, n)
  let { width: u, height: c } = l
  if (r.boxSizing === 'content-box') {
    const d = Ji(r, 'border', 'width'),
      f = Ji(r, 'padding')
    ;(u -= f.width + d.width), (c -= f.height + d.height)
  }
  return (
    (u = Math.max(0, u - o.width)),
    (c = Math.max(0, i ? Math.floor(u / i) : c - o.height)),
    (u = ic(Math.min(u, s, l.maxWidth))),
    (c = ic(Math.min(c, a, l.maxHeight))),
    u && !c && (c = ic(u / 2)),
    { width: u, height: c }
  )
}
function lg(e, t, n) {
  const i = t || 1,
    r = Math.floor(e.height * i),
    o = Math.floor(e.width * i)
  ;(e.height = r / i), (e.width = o / i)
  const s = e.canvas
  return (
    s.style &&
      (n || (!s.style.height && !s.style.width)) &&
      ((s.style.height = `${e.height}px`), (s.style.width = `${e.width}px`)),
    e.currentDevicePixelRatio !== i || s.height !== r || s.width !== o
      ? ((e.currentDevicePixelRatio = i),
        (s.height = r),
        (s.width = o),
        e.ctx.setTransform(i, 0, 0, i, 0, 0),
        !0)
      : !1
  )
}
const E2 = (function () {
  let e = !1
  try {
    const t = {
      get passive() {
        return (e = !0), !1
      }
    }
    window.addEventListener('test', null, t), window.removeEventListener('test', null, t)
  } catch {}
  return e
})()
function ug(e, t) {
  const n = x2(e, t),
    i = n && n.match(/^(\d+)(\.\d+)?px$/)
  return i ? +i[1] : void 0
}
function Hi(e, t, n, i) {
  return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) }
}
function P2(e, t, n, i) {
  return {
    x: e.x + n * (t.x - e.x),
    y:
      i === 'middle'
        ? n < 0.5
          ? e.y
          : t.y
        : i === 'after'
        ? n < 1
          ? e.y
          : t.y
        : n > 0
        ? t.y
        : e.y
  }
}
function M2(e, t, n, i) {
  const r = { x: e.cp2x, y: e.cp2y },
    o = { x: t.cp1x, y: t.cp1y },
    s = Hi(e, r, n),
    a = Hi(r, o, n),
    l = Hi(o, t, n),
    u = Hi(s, a, n),
    c = Hi(a, l, n)
  return Hi(u, c, n)
}
const cg = new Map()
function O2(e, t) {
  t = t || {}
  const n = e + JSON.stringify(t)
  let i = cg.get(n)
  return i || ((i = new Intl.NumberFormat(e, t)), cg.set(n, i)), i
}
function Cs(e, t, n) {
  return O2(t, n).format(e)
}
const T2 = function (e, t) {
    return {
      x(n) {
        return e + e + t - n
      },
      setWidth(n) {
        t = n
      },
      textAlign(n) {
        return n === 'center' ? n : n === 'right' ? 'left' : 'right'
      },
      xPlus(n, i) {
        return n - i
      },
      leftForLtr(n, i) {
        return n - i
      }
    }
  },
  L2 = function () {
    return {
      x(e) {
        return e
      },
      setWidth(e) {},
      textAlign(e) {
        return e
      },
      xPlus(e, t) {
        return e + t
      },
      leftForLtr(e, t) {
        return e
      }
    }
  }
function zr(e, t, n) {
  return e ? T2(t, n) : L2()
}
function rv(e, t) {
  let n, i
  ;(t === 'ltr' || t === 'rtl') &&
    ((n = e.canvas.style),
    (i = [n.getPropertyValue('direction'), n.getPropertyPriority('direction')]),
    n.setProperty('direction', t, 'important'),
    (e.prevTextDirection = i))
}
function ov(e, t) {
  t !== void 0 && (delete e.prevTextDirection, e.canvas.style.setProperty('direction', t[0], t[1]))
}
function sv(e) {
  return e === 'angle'
    ? { between: ds, compare: _S, normalize: gn }
    : { between: di, compare: (t, n) => t - n, normalize: (t) => t }
}
function dg({ start: e, end: t, count: n, loop: i, style: r }) {
  return { start: e % n, end: t % n, loop: i && (t - e + 1) % n === 0, style: r }
}
function R2(e, t, n) {
  const { property: i, start: r, end: o } = n,
    { between: s, normalize: a } = sv(i),
    l = t.length
  let { start: u, end: c, loop: d } = e,
    f,
    h
  if (d) {
    for (u += l, c += l, f = 0, h = l; f < h && s(a(t[u % l][i]), r, o); ++f) u--, c--
    ;(u %= l), (c %= l)
  }
  return c < u && (c += l), { start: u, end: c, loop: d, style: e.style }
}
function N2(e, t, n) {
  if (!n) return [e]
  const { property: i, start: r, end: o } = n,
    s = t.length,
    { compare: a, between: l, normalize: u } = sv(i),
    { start: c, end: d, loop: f, style: h } = R2(e, t, n),
    p = []
  let y = !1,
    _ = null,
    g,
    m,
    v
  const x = () => l(r, v, g) && a(r, v) !== 0,
    b = () => a(o, g) === 0 || l(o, v, g),
    O = () => y || x(),
    k = () => !y || b()
  for (let P = c, L = c; P <= d; ++P)
    (m = t[P % s]),
      !m.skip &&
        ((g = u(m[i])),
        g !== v &&
          ((y = l(g, r, o)),
          _ === null && O() && (_ = a(g, r) === 0 ? P : L),
          _ !== null &&
            k() &&
            (p.push(dg({ start: _, end: P, loop: f, count: s, style: h })), (_ = null)),
          (L = P),
          (v = g)))
  return _ !== null && p.push(dg({ start: _, end: d, loop: f, count: s, style: h })), p
}
function D2(e, t) {
  const n = [],
    i = e.segments
  for (let r = 0; r < i.length; r++) {
    const o = N2(i[r], e.points, t)
    o.length && n.push(...o)
  }
  return n
}
function z2(e, t, n, i) {
  let r = 0,
    o = t - 1
  if (n && !i) for (; r < t && !e[r].skip; ) r++
  for (; r < t && e[r].skip; ) r++
  for (r %= t, n && (o += r); o > r && e[o % t].skip; ) o--
  return (o %= t), { start: r, end: o }
}
function I2(e, t, n, i) {
  const r = e.length,
    o = []
  let s = t,
    a = e[t],
    l
  for (l = t + 1; l <= n; ++l) {
    const u = e[l % r]
    u.skip || u.stop
      ? a.skip ||
        ((i = !1), o.push({ start: t % r, end: (l - 1) % r, loop: i }), (t = s = u.stop ? l : null))
      : ((s = l), a.skip && (t = l)),
      (a = u)
  }
  return s !== null && o.push({ start: t % r, end: s % r, loop: i }), o
}
function A2(e, t) {
  const n = e.points,
    i = e.options.spanGaps,
    r = n.length
  if (!r) return []
  const o = !!e._loop,
    { start: s, end: a } = z2(n, r, o, i)
  if (i === !0) return fg(e, [{ start: s, end: a, loop: o }], n, t)
  const l = a < s ? a + r : a,
    u = !!e._fullLoop && s === 0 && a === r - 1
  return fg(e, I2(n, s, l, u), n, t)
}
function fg(e, t, n, i) {
  return !i || !i.setContext || !n ? t : F2(e, t, n, i)
}
function F2(e, t, n, i) {
  const r = e._chart.getContext(),
    o = hg(e.options),
    {
      _datasetIndex: s,
      options: { spanGaps: a }
    } = e,
    l = n.length,
    u = []
  let c = o,
    d = t[0].start,
    f = d
  function h(p, y, _, g) {
    const m = a ? -1 : 1
    if (p !== y) {
      for (p += l; n[p % l].skip; ) p -= m
      for (; n[y % l].skip; ) y += m
      p % l !== y % l &&
        (u.push({ start: p % l, end: y % l, loop: _, style: g }), (c = g), (d = y % l))
    }
  }
  for (const p of t) {
    d = a ? d : p.start
    let y = n[d % l],
      _
    for (f = d + 1; f <= p.end; f++) {
      const g = n[f % l]
      ;(_ = hg(
        i.setContext(
          Ni(r, {
            type: 'segment',
            p0: y,
            p1: g,
            p0DataIndex: (f - 1) % l,
            p1DataIndex: f % l,
            datasetIndex: s
          })
        )
      )),
        j2(_, c) && h(d, f - 1, p.loop, c),
        (y = g),
        (c = _)
    }
    d < f - 1 && h(d, f - 1, p.loop, c)
  }
  return u
}
function hg(e) {
  return {
    backgroundColor: e.backgroundColor,
    borderCapStyle: e.borderCapStyle,
    borderDash: e.borderDash,
    borderDashOffset: e.borderDashOffset,
    borderJoinStyle: e.borderJoinStyle,
    borderWidth: e.borderWidth,
    borderColor: e.borderColor
  }
}
function j2(e, t) {
  return t && JSON.stringify(e) !== JSON.stringify(t)
}
/*!
 * Chart.js v3.8.0
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ class B2 {
  constructor() {
    ;(this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0)
  }
  _notify(t, n, i, r) {
    const o = n.listeners[r],
      s = n.duration
    o.forEach((a) =>
      a({ chart: t, initial: n.initial, numSteps: s, currentStep: Math.min(i - n.start, s) })
    )
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = Ay.call(window, () => {
        this._update(), (this._request = null), this._running && this._refresh()
      })))
  }
  _update(t = Date.now()) {
    let n = 0
    this._charts.forEach((i, r) => {
      if (!i.running || !i.items.length) return
      const o = i.items
      let s = o.length - 1,
        a = !1,
        l
      for (; s >= 0; --s)
        (l = o[s]),
          l._active
            ? (l._total > i.duration && (i.duration = l._total), l.tick(t), (a = !0))
            : ((o[s] = o[o.length - 1]), o.pop())
      a && (r.draw(), this._notify(r, i, t, 'progress')),
        o.length || ((i.running = !1), this._notify(r, i, t, 'complete'), (i.initial = !1)),
        (n += o.length)
    }),
      (this._lastDate = t),
      n === 0 && (this._running = !1)
  }
  _getAnims(t) {
    const n = this._charts
    let i = n.get(t)
    return (
      i ||
        ((i = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }),
        n.set(t, i)),
      i
    )
  }
  listen(t, n, i) {
    this._getAnims(t).listeners[n].push(i)
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n)
  }
  has(t) {
    return this._getAnims(t).items.length > 0
  }
  start(t) {
    const n = this._charts.get(t)
    !n ||
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((i, r) => Math.max(i, r._duration), 0)),
      this._refresh())
  }
  running(t) {
    if (!this._running) return !1
    const n = this._charts.get(t)
    return !(!n || !n.running || !n.items.length)
  }
  stop(t) {
    const n = this._charts.get(t)
    if (!n || !n.items.length) return
    const i = n.items
    let r = i.length - 1
    for (; r >= 0; --r) i[r].cancel()
    ;(n.items = []), this._notify(t, n, Date.now(), 'complete')
  }
  remove(t) {
    return this._charts.delete(t)
  }
}
var An = new B2()
const pg = 'transparent',
  $2 = {
    boolean(e, t, n) {
      return n > 0.5 ? t : e
    },
    color(e, t, n) {
      const i = ig(e || pg),
        r = i.valid && ig(t || pg)
      return r && r.valid ? r.mix(i, n).hexString() : t
    },
    number(e, t, n) {
      return e + (t - e) * n
    }
  }
class H2 {
  constructor(t, n, i, r) {
    const o = n[i]
    r = ua([t.to, r, o, t.from])
    const s = ua([t.from, o, r])
    ;(this._active = !0),
      (this._fn = t.fn || $2[t.type || typeof s]),
      (this._easing = Ho[t.easing] || Ho.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = n),
      (this._prop = i),
      (this._from = s),
      (this._to = r),
      (this._promises = void 0)
  }
  active() {
    return this._active
  }
  update(t, n, i) {
    if (this._active) {
      this._notify(!1)
      const r = this._target[this._prop],
        o = i - this._start,
        s = this._duration - o
      ;(this._start = i),
        (this._duration = Math.floor(Math.max(s, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = ua([t.to, n, r, t.from])),
        (this._from = ua([t.from, r, n]))
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), (this._active = !1), this._notify(!1))
  }
  tick(t) {
    const n = t - this._start,
      i = this._duration,
      r = this._prop,
      o = this._from,
      s = this._loop,
      a = this._to
    let l
    if (((this._active = o !== a && (s || n < i)), !this._active)) {
      ;(this._target[r] = a), this._notify(!0)
      return
    }
    if (n < 0) {
      this._target[r] = o
      return
    }
    ;(l = (n / i) % 2),
      (l = s && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[r] = this._fn(o, a, l))
  }
  wait() {
    const t = this._promises || (this._promises = [])
    return new Promise((n, i) => {
      t.push({ res: n, rej: i })
    })
  }
  _notify(t) {
    const n = t ? 'res' : 'rej',
      i = this._promises || []
    for (let r = 0; r < i.length; r++) i[r][n]()
  }
}
const W2 = ['x', 'y', 'borderWidth', 'radius', 'tension'],
  V2 = ['color', 'borderColor', 'backgroundColor']
le.set('animation', {
  delay: void 0,
  duration: 1e3,
  easing: 'easeOutQuart',
  fn: void 0,
  from: void 0,
  loop: void 0,
  to: void 0,
  type: void 0
})
const U2 = Object.keys(le.animation)
le.describe('animation', {
  _fallback: !1,
  _indexable: !1,
  _scriptable: (e) => e !== 'onProgress' && e !== 'onComplete' && e !== 'fn'
})
le.set('animations', {
  colors: { type: 'color', properties: V2 },
  numbers: { type: 'number', properties: W2 }
})
le.describe('animations', { _fallback: 'animation' })
le.set('transitions', {
  active: { animation: { duration: 400 } },
  resize: { animation: { duration: 0 } },
  show: {
    animations: { colors: { from: 'transparent' }, visible: { type: 'boolean', duration: 0 } }
  },
  hide: {
    animations: {
      colors: { to: 'transparent' },
      visible: { type: 'boolean', easing: 'linear', fn: (e) => e | 0 }
    }
  }
})
class av {
  constructor(t, n) {
    ;(this._chart = t), (this._properties = new Map()), this.configure(n)
  }
  configure(t) {
    if (!ge(t)) return
    const n = this._properties
    Object.getOwnPropertyNames(t).forEach((i) => {
      const r = t[i]
      if (!ge(r)) return
      const o = {}
      for (const s of U2) o[s] = r[s]
      ;((Ne(r.properties) && r.properties) || [i]).forEach((s) => {
        ;(s === i || !n.has(s)) && n.set(s, o)
      })
    })
  }
  _animateOptions(t, n) {
    const i = n.options,
      r = Y2(t, i)
    if (!r) return []
    const o = this._createAnimations(r, i)
    return (
      i.$shared &&
        q2(t.options.$animations, i).then(
          () => {
            t.options = i
          },
          () => {}
        ),
      o
    )
  }
  _createAnimations(t, n) {
    const i = this._properties,
      r = [],
      o = t.$animations || (t.$animations = {}),
      s = Object.keys(n),
      a = Date.now()
    let l
    for (l = s.length - 1; l >= 0; --l) {
      const u = s[l]
      if (u.charAt(0) === '$') continue
      if (u === 'options') {
        r.push(...this._animateOptions(t, n))
        continue
      }
      const c = n[u]
      let d = o[u]
      const f = i.get(u)
      if (d)
        if (f && d.active()) {
          d.update(f, c, a)
          continue
        } else d.cancel()
      if (!f || !f.duration) {
        t[u] = c
        continue
      }
      ;(o[u] = d = new H2(f, t, u, c)), r.push(d)
    }
    return r
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n)
      return
    }
    const i = this._createAnimations(t, n)
    if (i.length) return An.add(this._chart, i), !0
  }
}
function q2(e, t) {
  const n = [],
    i = Object.keys(t)
  for (let r = 0; r < i.length; r++) {
    const o = e[i[r]]
    o && o.active() && n.push(o.wait())
  }
  return Promise.all(n)
}
function Y2(e, t) {
  if (!t) return
  let n = e.options
  if (!n) {
    e.options = t
    return
  }
  return n.$shared && (e.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })), n
}
function gg(e, t) {
  const n = (e && e.options) || {},
    i = n.reverse,
    r = n.min === void 0 ? t : 0,
    o = n.max === void 0 ? t : 0
  return { start: i ? o : r, end: i ? r : o }
}
function Q2(e, t, n) {
  if (n === !1) return !1
  const i = gg(e, n),
    r = gg(t, n)
  return { top: r.end, right: i.end, bottom: r.start, left: i.start }
}
function X2(e) {
  let t, n, i, r
  return (
    ge(e) ? ((t = e.top), (n = e.right), (i = e.bottom), (r = e.left)) : (t = n = i = r = e),
    { top: t, right: n, bottom: i, left: r, disabled: e === !1 }
  )
}
function lv(e, t) {
  const n = [],
    i = e._getSortedDatasetMetas(t)
  let r, o
  for (r = 0, o = i.length; r < o; ++r) n.push(i[r].index)
  return n
}
function mg(e, t, n, i = {}) {
  const r = e.keys,
    o = i.mode === 'single'
  let s, a, l, u
  if (t !== null) {
    for (s = 0, a = r.length; s < a; ++s) {
      if (((l = +r[s]), l === n)) {
        if (i.all) continue
        break
      }
      ;(u = e.values[l]), ht(u) && (o || t === 0 || Mn(t) === Mn(u)) && (t += u)
    }
    return t
  }
}
function K2(e) {
  const t = Object.keys(e),
    n = new Array(t.length)
  let i, r, o
  for (i = 0, r = t.length; i < r; ++i) (o = t[i]), (n[i] = { x: o, y: e[o] })
  return n
}
function yg(e, t) {
  const n = e && e.options.stacked
  return n || (n === void 0 && t.stack !== void 0)
}
function G2(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`
}
function Z2(e) {
  const { min: t, max: n, minDefined: i, maxDefined: r } = e.getUserBounds()
  return { min: i ? t : Number.NEGATIVE_INFINITY, max: r ? n : Number.POSITIVE_INFINITY }
}
function J2(e, t, n) {
  const i = e[t] || (e[t] = {})
  return i[n] || (i[n] = {})
}
function vg(e, t, n, i) {
  for (const r of t.getMatchingVisibleMetas(i).reverse()) {
    const o = e[r.index]
    if ((n && o > 0) || (!n && o < 0)) return r.index
  }
  return null
}
function _g(e, t) {
  const { chart: n, _cachedMeta: i } = e,
    r = n._stacks || (n._stacks = {}),
    { iScale: o, vScale: s, index: a } = i,
    l = o.axis,
    u = s.axis,
    c = G2(o, s, i),
    d = t.length
  let f
  for (let h = 0; h < d; ++h) {
    const p = t[h],
      { [l]: y, [u]: _ } = p,
      g = p._stacks || (p._stacks = {})
    ;(f = g[u] = J2(r, c, y)),
      (f[a] = _),
      (f._top = vg(f, s, !0, i.type)),
      (f._bottom = vg(f, s, !1, i.type))
  }
}
function rc(e, t) {
  const n = e.scales
  return Object.keys(n)
    .filter((i) => n[i].axis === t)
    .shift()
}
function ek(e, t) {
  return Ni(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: 'default',
    type: 'dataset'
  })
}
function tk(e, t, n) {
  return Ni(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: 'default',
    type: 'data'
  })
}
function mo(e, t) {
  const n = e.controller.index,
    i = e.vScale && e.vScale.axis
  if (!!i) {
    t = t || e._parsed
    for (const r of t) {
      const o = r._stacks
      if (!o || o[i] === void 0 || o[i][n] === void 0) return
      delete o[i][n]
    }
  }
}
const oc = (e) => e === 'reset' || e === 'none',
  xg = (e, t) => (t ? e : Object.assign({}, e)),
  nk = (e, t, n) => e && !t.hidden && t._stacked && { keys: lv(n, !0), values: null }
class Rn {
  constructor(t, n) {
    ;(this.chart = t),
      (this._ctx = t.ctx),
      (this.index = n),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      this.initialize()
  }
  initialize() {
    const t = this._cachedMeta
    this.configure(), this.linkScales(), (t._stacked = yg(t.vScale, t)), this.addElements()
  }
  updateIndex(t) {
    this.index !== t && mo(this._cachedMeta), (this.index = t)
  }
  linkScales() {
    const t = this.chart,
      n = this._cachedMeta,
      i = this.getDataset(),
      r = (d, f, h, p) => (d === 'x' ? f : d === 'r' ? p : h),
      o = (n.xAxisID = ie(i.xAxisID, rc(t, 'x'))),
      s = (n.yAxisID = ie(i.yAxisID, rc(t, 'y'))),
      a = (n.rAxisID = ie(i.rAxisID, rc(t, 'r'))),
      l = n.indexAxis,
      u = (n.iAxisID = r(l, o, s, a)),
      c = (n.vAxisID = r(l, s, o, a))
    ;(n.xScale = this.getScaleForId(o)),
      (n.yScale = this.getScaleForId(s)),
      (n.rScale = this.getScaleForId(a)),
      (n.iScale = this.getScaleForId(u)),
      (n.vScale = this.getScaleForId(c))
  }
  getDataset() {
    return this.chart.data.datasets[this.index]
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index)
  }
  getScaleForId(t) {
    return this.chart.scales[t]
  }
  _getOtherScale(t) {
    const n = this._cachedMeta
    return t === n.iScale ? n.vScale : n.iScale
  }
  reset() {
    this._update('reset')
  }
  _destroy() {
    const t = this._cachedMeta
    this._data && og(this._data, this), t._stacked && mo(t)
  }
  _dataCheck() {
    const t = this.getDataset(),
      n = t.data || (t.data = []),
      i = this._data
    if (ge(n)) this._data = K2(n)
    else if (i !== n) {
      if (i) {
        og(i, this)
        const r = this._cachedMeta
        mo(r), (r._parsed = [])
      }
      n && Object.isExtensible(n) && i2(n, this), (this._syncList = []), (this._data = n)
    }
  }
  addElements() {
    const t = this._cachedMeta
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType())
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta,
      i = this.getDataset()
    let r = !1
    this._dataCheck()
    const o = n._stacked
    ;(n._stacked = yg(n.vScale, n)),
      n.stack !== i.stack && ((r = !0), mo(n), (n.stack = i.stack)),
      this._resyncElements(t),
      (r || o !== n._stacked) && _g(this, n._parsed)
  }
  configure() {
    const t = this.chart.config,
      n = t.datasetScopeKeys(this._type),
      i = t.getOptionScopes(this.getDataset(), n, !0)
    ;(this.options = t.createResolver(i, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {})
  }
  parse(t, n) {
    const { _cachedMeta: i, _data: r } = this,
      { iScale: o, _stacked: s } = i,
      a = o.axis
    let l = t === 0 && n === r.length ? !0 : i._sorted,
      u = t > 0 && i._parsed[t - 1],
      c,
      d,
      f
    if (this._parsing === !1) (i._parsed = r), (i._sorted = !0), (f = r)
    else {
      Ne(r[t])
        ? (f = this.parseArrayData(i, r, t, n))
        : ge(r[t])
        ? (f = this.parseObjectData(i, r, t, n))
        : (f = this.parsePrimitiveData(i, r, t, n))
      const h = () => d[a] === null || (u && d[a] < u[a])
      for (c = 0; c < n; ++c) (i._parsed[c + t] = d = f[c]), l && (h() && (l = !1), (u = d))
      i._sorted = l
    }
    s && _g(this, f)
  }
  parsePrimitiveData(t, n, i, r) {
    const { iScale: o, vScale: s } = t,
      a = o.axis,
      l = s.axis,
      u = o.getLabels(),
      c = o === s,
      d = new Array(r)
    let f, h, p
    for (f = 0, h = r; f < h; ++f)
      (p = f + i), (d[f] = { [a]: c || o.parse(u[p], p), [l]: s.parse(n[p], p) })
    return d
  }
  parseArrayData(t, n, i, r) {
    const { xScale: o, yScale: s } = t,
      a = new Array(r)
    let l, u, c, d
    for (l = 0, u = r; l < u; ++l)
      (c = l + i), (d = n[c]), (a[l] = { x: o.parse(d[0], c), y: s.parse(d[1], c) })
    return a
  }
  parseObjectData(t, n, i, r) {
    const { xScale: o, yScale: s } = t,
      { xAxisKey: a = 'x', yAxisKey: l = 'y' } = this._parsing,
      u = new Array(r)
    let c, d, f, h
    for (c = 0, d = r; c < d; ++c)
      (f = c + i), (h = n[f]), (u[c] = { x: o.parse(Ei(h, a), f), y: s.parse(Ei(h, l), f) })
    return u
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t]
  }
  getDataElement(t) {
    return this._cachedMeta.data[t]
  }
  applyStack(t, n, i) {
    const r = this.chart,
      o = this._cachedMeta,
      s = n[t.axis],
      a = { keys: lv(r, !0), values: n._stacks[t.axis] }
    return mg(a, s, o.index, { mode: i })
  }
  updateRangeFromParsed(t, n, i, r) {
    const o = i[n.axis]
    let s = o === null ? NaN : o
    const a = r && i._stacks[n.axis]
    r && a && ((r.values = a), (s = mg(r, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, s)),
      (t.max = Math.max(t.max, s))
  }
  getMinMax(t, n) {
    const i = this._cachedMeta,
      r = i._parsed,
      o = i._sorted && t === i.iScale,
      s = r.length,
      a = this._getOtherScale(t),
      l = nk(n, i, this.chart),
      u = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: c, max: d } = Z2(a)
    let f, h
    function p() {
      h = r[f]
      const y = h[a.axis]
      return !ht(h[t.axis]) || c > y || d < y
    }
    for (f = 0; f < s && !(!p() && (this.updateRangeFromParsed(u, t, h, l), o)); ++f);
    if (o) {
      for (f = s - 1; f >= 0; --f)
        if (!p()) {
          this.updateRangeFromParsed(u, t, h, l)
          break
        }
    }
    return u
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed,
      i = []
    let r, o, s
    for (r = 0, o = n.length; r < o; ++r) (s = n[r][t.axis]), ht(s) && i.push(s)
    return i
  }
  getMaxOverflow() {
    return !1
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = n.iScale,
      r = n.vScale,
      o = this.getParsed(t)
    return {
      label: i ? '' + i.getLabelForValue(o[i.axis]) : '',
      value: r ? '' + r.getLabelForValue(o[r.axis]) : ''
    }
  }
  _update(t) {
    const n = this._cachedMeta
    this.update(t || 'default'),
      (n._clip = X2(ie(this.options.clip, Q2(n.xScale, n.yScale, this.getMaxOverflow()))))
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      n = this.chart,
      i = this._cachedMeta,
      r = i.data || [],
      o = n.chartArea,
      s = [],
      a = this._drawStart || 0,
      l = this._drawCount || r.length - a,
      u = this.options.drawActiveElementsOnTop
    let c
    for (i.dataset && i.dataset.draw(t, o, a, l), c = a; c < a + l; ++c) {
      const d = r[c]
      d.hidden || (d.active && u ? s.push(d) : d.draw(t, o))
    }
    for (c = 0; c < s.length; ++c) s[c].draw(t, o)
  }
  getStyle(t, n) {
    const i = n ? 'active' : 'default'
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(i)
      : this.resolveDataElementOptions(t || 0, i)
  }
  getContext(t, n, i) {
    const r = this.getDataset()
    let o
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const s = this._cachedMeta.data[t]
      ;(o = s.$context || (s.$context = tk(this.getContext(), t, s))),
        (o.parsed = this.getParsed(t)),
        (o.raw = r.data[t]),
        (o.index = o.dataIndex = t)
    } else
      (o = this.$context || (this.$context = ek(this.chart.getContext(), this.index))),
        (o.dataset = r),
        (o.index = o.datasetIndex = this.index)
    return (o.active = !!n), (o.mode = i), o
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t)
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t)
  }
  _resolveElementOptions(t, n = 'default', i) {
    const r = n === 'active',
      o = this._cachedDataOpts,
      s = t + '-' + n,
      a = o[s],
      l = this.enableOptionSharing && an(i)
    if (a) return xg(a, l)
    const u = this.chart.config,
      c = u.datasetElementScopeKeys(this._type, t),
      d = r ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
      f = u.getOptionScopes(this.getDataset(), c),
      h = Object.keys(le.elements[t]),
      p = () => this.getContext(i, r),
      y = u.resolveNamedOptions(f, h, p, d)
    return y.$shared && ((y.$shared = l), (o[s] = Object.freeze(xg(y, l)))), y
  }
  _resolveAnimations(t, n, i) {
    const r = this.chart,
      o = this._cachedDataOpts,
      s = `animation-${n}`,
      a = o[s]
    if (a) return a
    let l
    if (r.options.animation !== !1) {
      const c = this.chart.config,
        d = c.datasetAnimationScopeKeys(this._type, n),
        f = c.getOptionScopes(this.getDataset(), d)
      l = c.createResolver(f, this.getContext(t, i, n))
    }
    const u = new av(r, l && l.animations)
    return l && l._cacheable && (o[s] = Object.freeze(u)), u
  }
  getSharedOptions(t) {
    if (!!t.$shared) return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
  }
  includeOptions(t, n) {
    return !n || oc(t) || this.chart._animationsDisabled
  }
  updateElement(t, n, i, r) {
    oc(r) ? Object.assign(t, i) : this._resolveAnimations(n, r).update(t, i)
  }
  updateSharedOptions(t, n, i) {
    t && !oc(n) && this._resolveAnimations(void 0, n).update(t, i)
  }
  _setStyle(t, n, i, r) {
    t.active = r
    const o = this.getStyle(n, r)
    this._resolveAnimations(n, i, r).update(t, { options: (!r && this.getSharedOptions(o)) || o })
  }
  removeHoverStyle(t, n, i) {
    this._setStyle(t, i, 'active', !1)
  }
  setHoverStyle(t, n, i) {
    this._setStyle(t, i, 'active', !0)
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset
    t && this._setStyle(t, void 0, 'active', !1)
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset
    t && this._setStyle(t, void 0, 'active', !0)
  }
  _resyncElements(t) {
    const n = this._data,
      i = this._cachedMeta.data
    for (const [a, l, u] of this._syncList) this[a](l, u)
    this._syncList = []
    const r = i.length,
      o = n.length,
      s = Math.min(o, r)
    s && this.parse(0, s),
      o > r ? this._insertElements(r, o - r, t) : o < r && this._removeElements(o, r - o)
  }
  _insertElements(t, n, i = !0) {
    const r = this._cachedMeta,
      o = r.data,
      s = t + n
    let a
    const l = (u) => {
      for (u.length += n, a = u.length - 1; a >= s; a--) u[a] = u[a - n]
    }
    for (l(o), a = t; a < s; ++a) o[a] = new this.dataElementType()
    this._parsing && l(r._parsed), this.parse(t, n), i && this.updateElements(o, t, n, 'reset')
  }
  updateElements(t, n, i, r) {}
  _removeElements(t, n) {
    const i = this._cachedMeta
    if (this._parsing) {
      const r = i._parsed.splice(t, n)
      i._stacked && mo(i, r)
    }
    i.data.splice(t, n)
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t)
    else {
      const [n, i, r] = t
      this[n](i, r)
    }
    this.chart._dataChanges.push([this.index, ...t])
  }
  _onDataPush() {
    const t = arguments.length
    this._sync(['_insertElements', this.getDataset().data.length - t, t])
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1])
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1])
  }
  _onDataSplice(t, n) {
    n && this._sync(['_removeElements', t, n])
    const i = arguments.length - 2
    i && this._sync(['_insertElements', t, i])
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length])
  }
}
Rn.defaults = {}
Rn.prototype.datasetElementType = null
Rn.prototype.dataElementType = null
function ik(e, t) {
  if (!e._cache.$bar) {
    const n = e.getMatchingVisibleMetas(t)
    let i = []
    for (let r = 0, o = n.length; r < o; r++) i = i.concat(n[r].controller.getAllParsedValues(e))
    e._cache.$bar = Ky(i.sort((r, o) => r - o))
  }
  return e._cache.$bar
}
function rk(e) {
  const t = e.iScale,
    n = ik(t, e.type)
  let i = t._length,
    r,
    o,
    s,
    a
  const l = () => {
    s === 32767 || s === -32768 || (an(a) && (i = Math.min(i, Math.abs(s - a) || i)), (a = s))
  }
  for (r = 0, o = n.length; r < o; ++r) (s = t.getPixelForValue(n[r])), l()
  for (a = void 0, r = 0, o = t.ticks.length; r < o; ++r) (s = t.getPixelForTick(r)), l()
  return i
}
function ok(e, t, n, i) {
  const r = n.barThickness
  let o, s
  return (
    be(r) ? ((o = t.min * n.categoryPercentage), (s = n.barPercentage)) : ((o = r * i), (s = 1)),
    { chunk: o / i, ratio: s, start: t.pixels[e] - o / 2 }
  )
}
function sk(e, t, n, i) {
  const r = t.pixels,
    o = r[e]
  let s = e > 0 ? r[e - 1] : null,
    a = e < r.length - 1 ? r[e + 1] : null
  const l = n.categoryPercentage
  s === null && (s = o - (a === null ? t.end - t.start : a - o)), a === null && (a = o + o - s)
  const u = o - ((o - Math.min(s, a)) / 2) * l
  return { chunk: ((Math.abs(a - s) / 2) * l) / i, ratio: n.barPercentage, start: u }
}
function ak(e, t, n, i) {
  const r = n.parse(e[0], i),
    o = n.parse(e[1], i),
    s = Math.min(r, o),
    a = Math.max(r, o)
  let l = s,
    u = a
  Math.abs(s) > Math.abs(a) && ((l = a), (u = s)),
    (t[n.axis] = u),
    (t._custom = { barStart: l, barEnd: u, start: r, end: o, min: s, max: a })
}
function uv(e, t, n, i) {
  return Ne(e) ? ak(e, t, n, i) : (t[n.axis] = n.parse(e, i)), t
}
function bg(e, t, n, i) {
  const r = e.iScale,
    o = e.vScale,
    s = r.getLabels(),
    a = r === o,
    l = []
  let u, c, d, f
  for (u = n, c = n + i; u < c; ++u)
    (f = t[u]), (d = {}), (d[r.axis] = a || r.parse(s[u], u)), l.push(uv(f, d, o, u))
  return l
}
function sc(e) {
  return e && e.barStart !== void 0 && e.barEnd !== void 0
}
function lk(e, t, n) {
  return e !== 0 ? Mn(e) : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1)
}
function uk(e) {
  let t, n, i, r, o
  return (
    e.horizontal
      ? ((t = e.base > e.x), (n = 'left'), (i = 'right'))
      : ((t = e.base < e.y), (n = 'bottom'), (i = 'top')),
    t ? ((r = 'end'), (o = 'start')) : ((r = 'start'), (o = 'end')),
    { start: n, end: i, reverse: t, top: r, bottom: o }
  )
}
function ck(e, t, n, i) {
  let r = t.borderSkipped
  const o = {}
  if (!r) {
    e.borderSkipped = o
    return
  }
  const { start: s, end: a, reverse: l, top: u, bottom: c } = uk(e)
  r === 'middle' &&
    n &&
    ((e.enableBorderRadius = !0),
    (n._top || 0) === i
      ? (r = u)
      : (n._bottom || 0) === i
      ? (r = c)
      : ((o[wg(c, s, a, l)] = !0), (r = u))),
    (o[wg(r, s, a, l)] = !0),
    (e.borderSkipped = o)
}
function wg(e, t, n, i) {
  return i ? ((e = dk(e, t, n)), (e = Sg(e, n, t))) : (e = Sg(e, t, n)), e
}
function dk(e, t, n) {
  return e === t ? n : e === n ? t : e
}
function Sg(e, t, n) {
  return e === 'start' ? t : e === 'end' ? n : e
}
function fk(e, { inflateAmount: t }, n) {
  e.inflateAmount = t === 'auto' ? (n === 1 ? 0.33 : 0) : t
}
class Hl extends Rn {
  parsePrimitiveData(t, n, i, r) {
    return bg(t, n, i, r)
  }
  parseArrayData(t, n, i, r) {
    return bg(t, n, i, r)
  }
  parseObjectData(t, n, i, r) {
    const { iScale: o, vScale: s } = t,
      { xAxisKey: a = 'x', yAxisKey: l = 'y' } = this._parsing,
      u = o.axis === 'x' ? a : l,
      c = s.axis === 'x' ? a : l,
      d = []
    let f, h, p, y
    for (f = i, h = i + r; f < h; ++f)
      (y = n[f]), (p = {}), (p[o.axis] = o.parse(Ei(y, u), f)), d.push(uv(Ei(y, c), p, s, f))
    return d
  }
  updateRangeFromParsed(t, n, i, r) {
    super.updateRangeFromParsed(t, n, i, r)
    const o = i._custom
    o &&
      n === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, o.min)), (t.max = Math.max(t.max, o.max)))
  }
  getMaxOverflow() {
    return 0
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      { iScale: i, vScale: r } = n,
      o = this.getParsed(t),
      s = o._custom,
      a = sc(s) ? '[' + s.start + ', ' + s.end + ']' : '' + r.getLabelForValue(o[r.axis])
    return { label: '' + i.getLabelForValue(o[i.axis]), value: a }
  }
  initialize() {
    ;(this.enableOptionSharing = !0), super.initialize()
    const t = this._cachedMeta
    t.stack = this.getDataset().stack
  }
  update(t) {
    const n = this._cachedMeta
    this.updateElements(n.data, 0, n.data.length, t)
  }
  updateElements(t, n, i, r) {
    const o = r === 'reset',
      {
        index: s,
        _cachedMeta: { vScale: a }
      } = this,
      l = a.getBasePixel(),
      u = a.isHorizontal(),
      c = this._getRuler(),
      d = this.resolveDataElementOptions(n, r),
      f = this.getSharedOptions(d),
      h = this.includeOptions(r, f)
    this.updateSharedOptions(f, r, d)
    for (let p = n; p < n + i; p++) {
      const y = this.getParsed(p),
        _ = o || be(y[a.axis]) ? { base: l, head: l } : this._calculateBarValuePixels(p),
        g = this._calculateBarIndexPixels(p, c),
        m = (y._stacks || {})[a.axis],
        v = {
          horizontal: u,
          base: _.base,
          enableBorderRadius: !m || sc(y._custom) || s === m._top || s === m._bottom,
          x: u ? _.head : g.center,
          y: u ? g.center : _.head,
          height: u ? g.size : Math.abs(_.size),
          width: u ? Math.abs(_.size) : g.size
        }
      h && (v.options = f || this.resolveDataElementOptions(p, t[p].active ? 'active' : r))
      const x = v.options || t[p].options
      ck(v, x, m, s), fk(v, x, c.ratio), this.updateElement(t[p], p, v, r)
    }
  }
  _getStacks(t, n) {
    const r = this._cachedMeta.iScale,
      o = r.getMatchingVisibleMetas(this._type),
      s = r.options.stacked,
      a = o.length,
      l = []
    let u, c
    for (u = 0; u < a; ++u)
      if (((c = o[u]), !!c.controller.options.grouped)) {
        if (typeof n != 'undefined') {
          const d = c.controller.getParsed(n)[c.controller._cachedMeta.vScale.axis]
          if (be(d) || isNaN(d)) continue
        }
        if (
          ((s === !1 || l.indexOf(c.stack) === -1 || (s === void 0 && c.stack === void 0)) &&
            l.push(c.stack),
          c.index === t)
        )
          break
      }
    return l.length || l.push(void 0), l
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length
  }
  _getStackIndex(t, n, i) {
    const r = this._getStacks(t, i),
      o = n !== void 0 ? r.indexOf(n) : -1
    return o === -1 ? r.length - 1 : o
  }
  _getRuler() {
    const t = this.options,
      n = this._cachedMeta,
      i = n.iScale,
      r = []
    let o, s
    for (o = 0, s = n.data.length; o < s; ++o)
      r.push(i.getPixelForValue(this.getParsed(o)[i.axis], o))
    const a = t.barThickness
    return {
      min: a || rk(n),
      pixels: r,
      start: i._startPixel,
      end: i._endPixel,
      stackCount: this._getStackCount(),
      scale: i,
      grouped: t.grouped,
      ratio: a ? 1 : t.categoryPercentage * t.barPercentage
    }
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: n, _stacked: i },
        options: { base: r, minBarLength: o }
      } = this,
      s = r || 0,
      a = this.getParsed(t),
      l = a._custom,
      u = sc(l)
    let c = a[n.axis],
      d = 0,
      f = i ? this.applyStack(n, a, i) : c,
      h,
      p
    f !== c && ((d = f - c), (f = c)),
      u &&
        ((c = l.barStart),
        (f = l.barEnd - l.barStart),
        c !== 0 && Mn(c) !== Mn(l.barEnd) && (d = 0),
        (d += c))
    const y = !be(r) && !u ? r : d
    let _ = n.getPixelForValue(y)
    if (
      (this.chart.getDataVisibility(t) ? (h = n.getPixelForValue(d + f)) : (h = _),
      (p = h - _),
      Math.abs(p) < o)
    ) {
      ;(p = lk(p, n, s) * o), c === s && (_ -= p / 2)
      const g = n.getPixelForDecimal(0),
        m = n.getPixelForDecimal(1),
        v = Math.min(g, m),
        x = Math.max(g, m)
      ;(_ = Math.max(Math.min(_, x), v)), (h = _ + p)
    }
    if (_ === n.getPixelForValue(s)) {
      const g = (Mn(p) * n.getLineWidthForValue(s)) / 2
      ;(_ += g), (p -= g)
    }
    return { size: p, base: _, head: h, center: h + p / 2 }
  }
  _calculateBarIndexPixels(t, n) {
    const i = n.scale,
      r = this.options,
      o = r.skipNull,
      s = ie(r.maxBarThickness, 1 / 0)
    let a, l
    if (n.grouped) {
      const u = o ? this._getStackCount(t) : n.stackCount,
        c = r.barThickness === 'flex' ? sk(t, n, r, u) : ok(t, n, r, u),
        d = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0)
      ;(a = c.start + c.chunk * d + c.chunk / 2), (l = Math.min(s, c.chunk * c.ratio))
    } else
      (a = i.getPixelForValue(this.getParsed(t)[i.axis], t)), (l = Math.min(s, n.min * n.ratio))
    return { base: a - l / 2, head: a + l / 2, center: a, size: l }
  }
  draw() {
    const t = this._cachedMeta,
      n = t.vScale,
      i = t.data,
      r = i.length
    let o = 0
    for (; o < r; ++o) this.getParsed(o)[n.axis] !== null && i[o].draw(this._ctx)
  }
}
Hl.id = 'bar'
Hl.defaults = {
  datasetElementType: !1,
  dataElementType: 'bar',
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: { numbers: { type: 'number', properties: ['x', 'y', 'base', 'width', 'height'] } }
}
Hl.overrides = {
  scales: {
    _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
    _value_: { type: 'linear', beginAtZero: !0 }
  }
}
class qf extends Rn {
  initialize() {
    ;(this.enableOptionSharing = !0), super.initialize()
  }
  parsePrimitiveData(t, n, i, r) {
    const o = super.parsePrimitiveData(t, n, i, r)
    for (let s = 0; s < o.length; s++) o[s]._custom = this.resolveDataElementOptions(s + i).radius
    return o
  }
  parseArrayData(t, n, i, r) {
    const o = super.parseArrayData(t, n, i, r)
    for (let s = 0; s < o.length; s++) {
      const a = n[i + s]
      o[s]._custom = ie(a[2], this.resolveDataElementOptions(s + i).radius)
    }
    return o
  }
  parseObjectData(t, n, i, r) {
    const o = super.parseObjectData(t, n, i, r)
    for (let s = 0; s < o.length; s++) {
      const a = n[i + s]
      o[s]._custom = ie(a && a.r && +a.r, this.resolveDataElementOptions(s + i).radius)
    }
    return o
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data
    let n = 0
    for (let i = t.length - 1; i >= 0; --i)
      n = Math.max(n, t[i].size(this.resolveDataElementOptions(i)) / 2)
    return n > 0 && n
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      { xScale: i, yScale: r } = n,
      o = this.getParsed(t),
      s = i.getLabelForValue(o.x),
      a = r.getLabelForValue(o.y),
      l = o._custom
    return { label: n.label, value: '(' + s + ', ' + a + (l ? ', ' + l : '') + ')' }
  }
  update(t) {
    const n = this._cachedMeta.data
    this.updateElements(n, 0, n.length, t)
  }
  updateElements(t, n, i, r) {
    const o = r === 'reset',
      { iScale: s, vScale: a } = this._cachedMeta,
      l = this.resolveDataElementOptions(n, r),
      u = this.getSharedOptions(l),
      c = this.includeOptions(r, u),
      d = s.axis,
      f = a.axis
    for (let h = n; h < n + i; h++) {
      const p = t[h],
        y = !o && this.getParsed(h),
        _ = {},
        g = (_[d] = o ? s.getPixelForDecimal(0.5) : s.getPixelForValue(y[d])),
        m = (_[f] = o ? a.getBasePixel() : a.getPixelForValue(y[f]))
      ;(_.skip = isNaN(g) || isNaN(m)),
        c &&
          ((_.options = this.resolveDataElementOptions(h, p.active ? 'active' : r)),
          o && (_.options.radius = 0)),
        this.updateElement(p, h, _, r)
    }
    this.updateSharedOptions(u, r, l)
  }
  resolveDataElementOptions(t, n) {
    const i = this.getParsed(t)
    let r = super.resolveDataElementOptions(t, n)
    r.$shared && (r = Object.assign({}, r, { $shared: !1 }))
    const o = r.radius
    return n !== 'active' && (r.radius = 0), (r.radius += ie(i && i._custom, o)), r
  }
}
qf.id = 'bubble'
qf.defaults = {
  datasetElementType: !1,
  dataElementType: 'point',
  animations: { numbers: { type: 'number', properties: ['x', 'y', 'borderWidth', 'radius'] } }
}
qf.overrides = {
  scales: { x: { type: 'linear' }, y: { type: 'linear' } },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return ''
        }
      }
    }
  }
}
function hk(e, t, n) {
  let i = 1,
    r = 1,
    o = 0,
    s = 0
  if (t < Me) {
    const a = e,
      l = a + t,
      u = Math.cos(a),
      c = Math.sin(a),
      d = Math.cos(l),
      f = Math.sin(l),
      h = (v, x, b) => (ds(v, a, l, !0) ? 1 : Math.max(x, x * n, b, b * n)),
      p = (v, x, b) => (ds(v, a, l, !0) ? -1 : Math.min(x, x * n, b, b * n)),
      y = h(0, u, d),
      _ = h(Ye, c, f),
      g = p(Fe, u, d),
      m = p(Fe + Ye, c, f)
    ;(i = (y - g) / 2), (r = (_ - m) / 2), (o = -(y + g) / 2), (s = -(_ + m) / 2)
  }
  return { ratioX: i, ratioY: r, offsetX: o, offsetY: s }
}
class Es extends Rn {
  constructor(t, n) {
    super(t, n),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0)
  }
  linkScales() {}
  parse(t, n) {
    const i = this.getDataset().data,
      r = this._cachedMeta
    if (this._parsing === !1) r._parsed = i
    else {
      let o = (l) => +i[l]
      if (ge(i[t])) {
        const { key: l = 'value' } = this._parsing
        o = (u) => +Ei(i[u], l)
      }
      let s, a
      for (s = t, a = t + n; s < a; ++s) r._parsed[s] = o(s)
    }
  }
  _getRotation() {
    return vn(this.options.rotation - 90)
  }
  _getCircumference() {
    return vn(this.options.circumference)
  }
  _getRotationExtents() {
    let t = Me,
      n = -Me
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (this.chart.isDatasetVisible(i)) {
        const r = this.chart.getDatasetMeta(i).controller,
          o = r._getRotation(),
          s = r._getCircumference()
        ;(t = Math.min(t, o)), (n = Math.max(n, o + s))
      }
    return { rotation: t, circumference: n - t }
  }
  update(t) {
    const n = this.chart,
      { chartArea: i } = n,
      r = this._cachedMeta,
      o = r.data,
      s = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing,
      a = Math.max((Math.min(i.width, i.height) - s) / 2, 0),
      l = Math.min(uS(this.options.cutout, a), 1),
      u = this._getRingWeight(this.index),
      { circumference: c, rotation: d } = this._getRotationExtents(),
      { ratioX: f, ratioY: h, offsetX: p, offsetY: y } = hk(d, c, l),
      _ = (i.width - s) / f,
      g = (i.height - s) / h,
      m = Math.max(Math.min(_, g) / 2, 0),
      v = jy(this.options.radius, m),
      x = Math.max(v * l, 0),
      b = (v - x) / this._getVisibleDatasetWeightTotal()
    ;(this.offsetX = p * v),
      (this.offsetY = y * v),
      (r.total = this.calculateTotal()),
      (this.outerRadius = v - b * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - b * u, 0)),
      this.updateElements(o, 0, o.length, t)
  }
  _circumference(t, n) {
    const i = this.options,
      r = this._cachedMeta,
      o = this._getCircumference()
    return (n && i.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      r._parsed[t] === null ||
      r.data[t].hidden
      ? 0
      : this.calculateCircumference((r._parsed[t] * o) / Me)
  }
  updateElements(t, n, i, r) {
    const o = r === 'reset',
      s = this.chart,
      a = s.chartArea,
      u = s.options.animation,
      c = (a.left + a.right) / 2,
      d = (a.top + a.bottom) / 2,
      f = o && u.animateScale,
      h = f ? 0 : this.innerRadius,
      p = f ? 0 : this.outerRadius,
      y = this.resolveDataElementOptions(n, r),
      _ = this.getSharedOptions(y),
      g = this.includeOptions(r, _)
    let m = this._getRotation(),
      v
    for (v = 0; v < n; ++v) m += this._circumference(v, o)
    for (v = n; v < n + i; ++v) {
      const x = this._circumference(v, o),
        b = t[v],
        O = {
          x: c + this.offsetX,
          y: d + this.offsetY,
          startAngle: m,
          endAngle: m + x,
          circumference: x,
          outerRadius: p,
          innerRadius: h
        }
      g && (O.options = _ || this.resolveDataElementOptions(v, b.active ? 'active' : r)),
        (m += x),
        this.updateElement(b, v, O, r)
    }
    this.updateSharedOptions(_, r, y)
  }
  calculateTotal() {
    const t = this._cachedMeta,
      n = t.data
    let i = 0,
      r
    for (r = 0; r < n.length; r++) {
      const o = t._parsed[r]
      o !== null &&
        !isNaN(o) &&
        this.chart.getDataVisibility(r) &&
        !n[r].hidden &&
        (i += Math.abs(o))
    }
    return i
  }
  calculateCircumference(t) {
    const n = this._cachedMeta.total
    return n > 0 && !isNaN(t) ? Me * (Math.abs(t) / n) : 0
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = this.chart,
      r = i.data.labels || [],
      o = Cs(n._parsed[t], i.options.locale)
    return { label: r[t] || '', value: o }
  }
  getMaxBorderWidth(t) {
    let n = 0
    const i = this.chart
    let r, o, s, a, l
    if (!t) {
      for (r = 0, o = i.data.datasets.length; r < o; ++r)
        if (i.isDatasetVisible(r)) {
          ;(s = i.getDatasetMeta(r)), (t = s.data), (a = s.controller)
          break
        }
    }
    if (!t) return 0
    for (r = 0, o = t.length; r < o; ++r)
      (l = a.resolveDataElementOptions(r)),
        l.borderAlign !== 'inner' && (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0))
    return n
  }
  getMaxOffset(t) {
    let n = 0
    for (let i = 0, r = t.length; i < r; ++i) {
      const o = this.resolveDataElementOptions(i)
      n = Math.max(n, o.offset || 0, o.hoverOffset || 0)
    }
    return n
  }
  _getRingWeightOffset(t) {
    let n = 0
    for (let i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && (n += this._getRingWeight(i))
    return n
  }
  _getRingWeight(t) {
    return Math.max(ie(this.chart.data.datasets[t].weight, 1), 0)
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
  }
}
Es.id = 'doughnut'
Es.defaults = {
  datasetElementType: !1,
  dataElementType: 'arc',
  animation: { animateRotate: !0, animateScale: !1 },
  animations: {
    numbers: {
      type: 'number',
      properties: [
        'circumference',
        'endAngle',
        'innerRadius',
        'outerRadius',
        'startAngle',
        'x',
        'y',
        'offset',
        'borderWidth',
        'spacing'
      ]
    }
  },
  cutout: '50%',
  rotation: 0,
  circumference: 360,
  radius: '100%',
  spacing: 0,
  indexAxis: 'r'
}
Es.descriptors = { _scriptable: (e) => e !== 'spacing', _indexable: (e) => e !== 'spacing' }
Es.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(e) {
          const t = e.data
          if (t.labels.length && t.datasets.length) {
            const {
              labels: { pointStyle: n }
            } = e.legend.options
            return t.labels.map((i, r) => {
              const s = e.getDatasetMeta(0).controller.getStyle(r)
              return {
                text: i,
                fillStyle: s.backgroundColor,
                strokeStyle: s.borderColor,
                lineWidth: s.borderWidth,
                pointStyle: n,
                hidden: !e.getDataVisibility(r),
                index: r
              }
            })
          }
          return []
        }
      },
      onClick(e, t, n) {
        n.chart.toggleDataVisibility(t.index), n.chart.update()
      }
    },
    tooltip: {
      callbacks: {
        title() {
          return ''
        },
        label(e) {
          let t = e.label
          const n = ': ' + e.formattedValue
          return Ne(t) ? ((t = t.slice()), (t[0] += n)) : (t += n), t
        }
      }
    }
  }
}
class Ps extends Rn {
  initialize() {
    ;(this.enableOptionSharing = !0), (this.supportsDecimation = !0), super.initialize()
  }
  update(t) {
    const n = this._cachedMeta,
      { dataset: i, data: r = [], _dataset: o } = n,
      s = this.chart._animationsDisabled
    let { start: a, count: l } = pk(n, r, s)
    ;(this._drawStart = a),
      (this._drawCount = l),
      gk(n) && ((a = 0), (l = r.length)),
      (i._chart = this.chart),
      (i._datasetIndex = this.index),
      (i._decimated = !!o._decimated),
      (i.points = r)
    const u = this.resolveDatasetElementOptions(t)
    this.options.showLine || (u.borderWidth = 0),
      (u.segment = this.options.segment),
      this.updateElement(i, void 0, { animated: !s, options: u }, t),
      this.updateElements(r, a, l, t)
  }
  updateElements(t, n, i, r) {
    const o = r === 'reset',
      { iScale: s, vScale: a, _stacked: l, _dataset: u } = this._cachedMeta,
      c = this.resolveDataElementOptions(n, r),
      d = this.getSharedOptions(c),
      f = this.includeOptions(r, d),
      h = s.axis,
      p = a.axis,
      { spanGaps: y, segment: _ } = this.options,
      g = cs(y) ? y : Number.POSITIVE_INFINITY,
      m = this.chart._animationsDisabled || o || r === 'none'
    let v = n > 0 && this.getParsed(n - 1)
    for (let x = n; x < n + i; ++x) {
      const b = t[x],
        O = this.getParsed(x),
        k = m ? b : {},
        P = be(O[p]),
        L = (k[h] = s.getPixelForValue(O[h], x)),
        I = (k[p] =
          o || P ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, O, l) : O[p], x))
      ;(k.skip = isNaN(L) || isNaN(I) || P),
        (k.stop = x > 0 && Math.abs(O[h] - v[h]) > g),
        _ && ((k.parsed = O), (k.raw = u.data[x])),
        f && (k.options = d || this.resolveDataElementOptions(x, b.active ? 'active' : r)),
        m || this.updateElement(b, x, k, r),
        (v = O)
    }
    this.updateSharedOptions(d, r, c)
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      n = t.dataset,
      i = (n.options && n.options.borderWidth) || 0,
      r = t.data || []
    if (!r.length) return i
    const o = r[0].size(this.resolveDataElementOptions(0)),
      s = r[r.length - 1].size(this.resolveDataElementOptions(r.length - 1))
    return Math.max(i, o, s) / 2
  }
  draw() {
    const t = this._cachedMeta
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
  }
}
Ps.id = 'line'
Ps.defaults = { datasetElementType: 'line', dataElementType: 'point', showLine: !0, spanGaps: !1 }
Ps.overrides = { scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } } }
function pk(e, t, n) {
  const i = t.length
  let r = 0,
    o = i
  if (e._sorted) {
    const { iScale: s, _parsed: a } = e,
      l = s.axis,
      { min: u, max: c, minDefined: d, maxDefined: f } = s.getUserBounds()
    d &&
      (r = wt(Math.min(Qi(a, s.axis, u).lo, n ? i : Qi(t, l, s.getPixelForValue(u)).lo), 0, i - 1)),
      f
        ? (o =
            wt(
              Math.max(Qi(a, s.axis, c).hi + 1, n ? 0 : Qi(t, l, s.getPixelForValue(c)).hi + 1),
              r,
              i
            ) - r)
        : (o = i - r)
  }
  return { start: r, count: o }
}
function gk(e) {
  const { xScale: t, yScale: n, _scaleRanges: i } = e,
    r = { xmin: t.min, xmax: t.max, ymin: n.min, ymax: n.max }
  if (!i) return (e._scaleRanges = r), !0
  const o = i.xmin !== t.min || i.xmax !== t.max || i.ymin !== n.min || i.ymax !== n.max
  return Object.assign(i, r), o
}
class Yf extends Rn {
  constructor(t, n) {
    super(t, n), (this.innerRadius = void 0), (this.outerRadius = void 0)
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      i = this.chart,
      r = i.data.labels || [],
      o = Cs(n._parsed[t].r, i.options.locale)
    return { label: r[t] || '', value: o }
  }
  parseObjectData(t, n, i, r) {
    return tv.bind(this)(t, n, i, r)
  }
  update(t) {
    const n = this._cachedMeta.data
    this._updateRadius(), this.updateElements(n, 0, n.length, t)
  }
  getMinMax() {
    const t = this._cachedMeta,
      n = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }
    return (
      t.data.forEach((i, r) => {
        const o = this.getParsed(r).r
        !isNaN(o) &&
          this.chart.getDataVisibility(r) &&
          (o < n.min && (n.min = o), o > n.max && (n.max = o))
      }),
      n
    )
  }
  _updateRadius() {
    const t = this.chart,
      n = t.chartArea,
      i = t.options,
      r = Math.min(n.right - n.left, n.bottom - n.top),
      o = Math.max(r / 2, 0),
      s = Math.max(i.cutoutPercentage ? (o / 100) * i.cutoutPercentage : 1, 0),
      a = (o - s) / t.getVisibleDatasetCount()
    ;(this.outerRadius = o - a * this.index), (this.innerRadius = this.outerRadius - a)
  }
  updateElements(t, n, i, r) {
    const o = r === 'reset',
      s = this.chart,
      l = s.options.animation,
      u = this._cachedMeta.rScale,
      c = u.xCenter,
      d = u.yCenter,
      f = u.getIndexAngle(0) - 0.5 * Fe
    let h = f,
      p
    const y = 360 / this.countVisibleElements()
    for (p = 0; p < n; ++p) h += this._computeAngle(p, r, y)
    for (p = n; p < n + i; p++) {
      const _ = t[p]
      let g = h,
        m = h + this._computeAngle(p, r, y),
        v = s.getDataVisibility(p) ? u.getDistanceFromCenterForValue(this.getParsed(p).r) : 0
      ;(h = m), o && (l.animateScale && (v = 0), l.animateRotate && (g = m = f))
      const x = {
        x: c,
        y: d,
        innerRadius: 0,
        outerRadius: v,
        startAngle: g,
        endAngle: m,
        options: this.resolveDataElementOptions(p, _.active ? 'active' : r)
      }
      this.updateElement(_, p, x, r)
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta
    let n = 0
    return (
      t.data.forEach((i, r) => {
        !isNaN(this.getParsed(r).r) && this.chart.getDataVisibility(r) && n++
      }),
      n
    )
  }
  _computeAngle(t, n, i) {
    return this.chart.getDataVisibility(t) ? vn(this.resolveDataElementOptions(t, n).angle || i) : 0
  }
}
Yf.id = 'polarArea'
Yf.defaults = {
  dataElementType: 'arc',
  animation: { animateRotate: !0, animateScale: !0 },
  animations: {
    numbers: {
      type: 'number',
      properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius']
    }
  },
  indexAxis: 'r',
  startAngle: 0
}
Yf.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(e) {
          const t = e.data
          if (t.labels.length && t.datasets.length) {
            const {
              labels: { pointStyle: n }
            } = e.legend.options
            return t.labels.map((i, r) => {
              const s = e.getDatasetMeta(0).controller.getStyle(r)
              return {
                text: i,
                fillStyle: s.backgroundColor,
                strokeStyle: s.borderColor,
                lineWidth: s.borderWidth,
                pointStyle: n,
                hidden: !e.getDataVisibility(r),
                index: r
              }
            })
          }
          return []
        }
      },
      onClick(e, t, n) {
        n.chart.toggleDataVisibility(t.index), n.chart.update()
      }
    },
    tooltip: {
      callbacks: {
        title() {
          return ''
        },
        label(e) {
          return e.chart.data.labels[e.dataIndex] + ': ' + e.formattedValue
        }
      }
    }
  },
  scales: {
    r: {
      type: 'radialLinear',
      angleLines: { display: !1 },
      beginAtZero: !0,
      grid: { circular: !0 },
      pointLabels: { display: !1 },
      startAngle: 0
    }
  }
}
class Qf extends Es {}
Qf.id = 'pie'
Qf.defaults = { cutout: 0, rotation: 0, circumference: 360, radius: '100%' }
class Xf extends Rn {
  getLabelAndValue(t) {
    const n = this._cachedMeta.vScale,
      i = this.getParsed(t)
    return { label: n.getLabels()[t], value: '' + n.getLabelForValue(i[n.axis]) }
  }
  parseObjectData(t, n, i, r) {
    return tv.bind(this)(t, n, i, r)
  }
  update(t) {
    const n = this._cachedMeta,
      i = n.dataset,
      r = n.data || [],
      o = n.iScale.getLabels()
    if (((i.points = r), t !== 'resize')) {
      const s = this.resolveDatasetElementOptions(t)
      this.options.showLine || (s.borderWidth = 0)
      const a = { _loop: !0, _fullLoop: o.length === r.length, options: s }
      this.updateElement(i, void 0, a, t)
    }
    this.updateElements(r, 0, r.length, t)
  }
  updateElements(t, n, i, r) {
    const o = this._cachedMeta.rScale,
      s = r === 'reset'
    for (let a = n; a < n + i; a++) {
      const l = t[a],
        u = this.resolveDataElementOptions(a, l.active ? 'active' : r),
        c = o.getPointPositionForValue(a, this.getParsed(a).r),
        d = s ? o.xCenter : c.x,
        f = s ? o.yCenter : c.y,
        h = { x: d, y: f, angle: c.angle, skip: isNaN(d) || isNaN(f), options: u }
      this.updateElement(l, a, h, r)
    }
  }
}
Xf.id = 'radar'
Xf.defaults = {
  datasetElementType: 'line',
  dataElementType: 'point',
  indexAxis: 'r',
  showLine: !0,
  elements: { line: { fill: 'start' } }
}
Xf.overrides = { aspectRatio: 1, scales: { r: { type: 'radialLinear' } } }
class Kf extends Ps {}
Kf.id = 'scatter'
Kf.defaults = { showLine: !1, fill: !1 }
Kf.overrides = {
  interaction: { mode: 'point' },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return ''
        },
        label(e) {
          return '(' + e.label + ', ' + e.formattedValue + ')'
        }
      }
    }
  },
  scales: { x: { type: 'linear' }, y: { type: 'linear' } }
}
function Ai() {
  throw new Error('This method is not implemented: Check that a complete date adapter is provided.')
}
class wd {
  constructor(t) {
    this.options = t || {}
  }
  formats() {
    return Ai()
  }
  parse(t, n) {
    return Ai()
  }
  format(t, n) {
    return Ai()
  }
  add(t, n, i) {
    return Ai()
  }
  diff(t, n, i) {
    return Ai()
  }
  startOf(t, n, i) {
    return Ai()
  }
  endOf(t, n) {
    return Ai()
  }
}
wd.override = function (e) {
  Object.assign(wd.prototype, e)
}
var mk = { _date: wd }
function yk(e, t, n, i) {
  const { controller: r, data: o, _sorted: s } = e,
    a = r._cachedMeta.iScale
  if (a && t === a.axis && t !== 'r' && s && o.length) {
    const l = a._reversePixels ? t2 : Qi
    if (i) {
      if (r._sharedOptions) {
        const u = o[0],
          c = typeof u.getRange == 'function' && u.getRange(t)
        if (c) {
          const d = l(o, t, n - c),
            f = l(o, t, n + c)
          return { lo: d.lo, hi: f.hi }
        }
      }
    } else return l(o, t, n)
  }
  return { lo: 0, hi: o.length - 1 }
}
function Ms(e, t, n, i, r) {
  const o = e.getSortedVisibleDatasetMetas(),
    s = n[t]
  for (let a = 0, l = o.length; a < l; ++a) {
    const { index: u, data: c } = o[a],
      { lo: d, hi: f } = yk(o[a], t, s, r)
    for (let h = d; h <= f; ++h) {
      const p = c[h]
      p.skip || i(p, u, h)
    }
  }
}
function vk(e) {
  const t = e.indexOf('x') !== -1,
    n = e.indexOf('y') !== -1
  return function (i, r) {
    const o = t ? Math.abs(i.x - r.x) : 0,
      s = n ? Math.abs(i.y - r.y) : 0
    return Math.sqrt(Math.pow(o, 2) + Math.pow(s, 2))
  }
}
function ac(e, t, n, i, r) {
  const o = []
  return (
    (!r && !e.isPointInArea(t)) ||
      Ms(
        e,
        n,
        t,
        function (a, l, u) {
          ;(!r && !fs(a, e.chartArea, 0)) ||
            (a.inRange(t.x, t.y, i) && o.push({ element: a, datasetIndex: l, index: u }))
        },
        !0
      ),
    o
  )
}
function _k(e, t, n, i) {
  let r = []
  function o(s, a, l) {
    const { startAngle: u, endAngle: c } = s.getProps(['startAngle', 'endAngle'], i),
      { angle: d } = Hy(s, { x: t.x, y: t.y })
    ds(d, u, c) && r.push({ element: s, datasetIndex: a, index: l })
  }
  return Ms(e, n, t, o), r
}
function xk(e, t, n, i, r, o) {
  let s = []
  const a = vk(n)
  let l = Number.POSITIVE_INFINITY
  function u(c, d, f) {
    const h = c.inRange(t.x, t.y, r)
    if (i && !h) return
    const p = c.getCenterPoint(r)
    if (!(!!o || e.isPointInArea(p)) && !h) return
    const _ = a(t, p)
    _ < l
      ? ((s = [{ element: c, datasetIndex: d, index: f }]), (l = _))
      : _ === l && s.push({ element: c, datasetIndex: d, index: f })
  }
  return Ms(e, n, t, u), s
}
function lc(e, t, n, i, r, o) {
  return !o && !e.isPointInArea(t) ? [] : n === 'r' && !i ? _k(e, t, n, r) : xk(e, t, n, i, r, o)
}
function kg(e, t, n, i, r) {
  const o = [],
    s = n === 'x' ? 'inXRange' : 'inYRange'
  let a = !1
  return (
    Ms(e, n, t, (l, u, c) => {
      l[s](t[n], r) &&
        (o.push({ element: l, datasetIndex: u, index: c }), (a = a || l.inRange(t.x, t.y, r)))
    }),
    i && !a ? [] : o
  )
}
var bk = {
  evaluateInteractionItems: Ms,
  modes: {
    index(e, t, n, i) {
      const r = $i(t, e),
        o = n.axis || 'x',
        s = n.includeInvisible || !1,
        a = n.intersect ? ac(e, r, o, i, s) : lc(e, r, o, !1, i, s),
        l = []
      return a.length
        ? (e.getSortedVisibleDatasetMetas().forEach((u) => {
            const c = a[0].index,
              d = u.data[c]
            d && !d.skip && l.push({ element: d, datasetIndex: u.index, index: c })
          }),
          l)
        : []
    },
    dataset(e, t, n, i) {
      const r = $i(t, e),
        o = n.axis || 'xy',
        s = n.includeInvisible || !1
      let a = n.intersect ? ac(e, r, o, i, s) : lc(e, r, o, !1, i, s)
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          u = e.getDatasetMeta(l).data
        a = []
        for (let c = 0; c < u.length; ++c) a.push({ element: u[c], datasetIndex: l, index: c })
      }
      return a
    },
    point(e, t, n, i) {
      const r = $i(t, e),
        o = n.axis || 'xy',
        s = n.includeInvisible || !1
      return ac(e, r, o, i, s)
    },
    nearest(e, t, n, i) {
      const r = $i(t, e),
        o = n.axis || 'xy',
        s = n.includeInvisible || !1
      return lc(e, r, o, n.intersect, i, s)
    },
    x(e, t, n, i) {
      const r = $i(t, e)
      return kg(e, r, 'x', n.intersect, i)
    },
    y(e, t, n, i) {
      const r = $i(t, e)
      return kg(e, r, 'y', n.intersect, i)
    }
  }
}
const cv = ['left', 'top', 'right', 'bottom']
function yo(e, t) {
  return e.filter((n) => n.pos === t)
}
function Cg(e, t) {
  return e.filter((n) => cv.indexOf(n.pos) === -1 && n.box.axis === t)
}
function vo(e, t) {
  return e.sort((n, i) => {
    const r = t ? i : n,
      o = t ? n : i
    return r.weight === o.weight ? r.index - o.index : r.weight - o.weight
  })
}
function wk(e) {
  const t = []
  let n, i, r, o, s, a
  for (n = 0, i = (e || []).length; n < i; ++n)
    (r = e[n]),
      ({
        position: o,
        options: { stack: s, stackWeight: a = 1 }
      } = r),
      t.push({
        index: n,
        box: r,
        pos: o,
        horizontal: r.isHorizontal(),
        weight: r.weight,
        stack: s && o + s,
        stackWeight: a
      })
  return t
}
function Sk(e) {
  const t = {}
  for (const n of e) {
    const { stack: i, pos: r, stackWeight: o } = n
    if (!i || !cv.includes(r)) continue
    const s = t[i] || (t[i] = { count: 0, placed: 0, weight: 0, size: 0 })
    s.count++, (s.weight += o)
  }
  return t
}
function kk(e, t) {
  const n = Sk(e),
    { vBoxMaxWidth: i, hBoxMaxHeight: r } = t
  let o, s, a
  for (o = 0, s = e.length; o < s; ++o) {
    a = e[o]
    const { fullSize: l } = a.box,
      u = n[a.stack],
      c = u && a.stackWeight / u.weight
    a.horizontal
      ? ((a.width = c ? c * i : l && t.availableWidth), (a.height = r))
      : ((a.width = i), (a.height = c ? c * r : l && t.availableHeight))
  }
  return n
}
function Ck(e) {
  const t = wk(e),
    n = vo(
      t.filter((u) => u.box.fullSize),
      !0
    ),
    i = vo(yo(t, 'left'), !0),
    r = vo(yo(t, 'right')),
    o = vo(yo(t, 'top'), !0),
    s = vo(yo(t, 'bottom')),
    a = Cg(t, 'x'),
    l = Cg(t, 'y')
  return {
    fullSize: n,
    leftAndTop: i.concat(o),
    rightAndBottom: r.concat(l).concat(s).concat(a),
    chartArea: yo(t, 'chartArea'),
    vertical: i.concat(r).concat(l),
    horizontal: o.concat(s).concat(a)
  }
}
function Eg(e, t, n, i) {
  return Math.max(e[n], t[n]) + Math.max(e[i], t[i])
}
function dv(e, t) {
  ;(e.top = Math.max(e.top, t.top)),
    (e.left = Math.max(e.left, t.left)),
    (e.bottom = Math.max(e.bottom, t.bottom)),
    (e.right = Math.max(e.right, t.right))
}
function Ek(e, t, n, i) {
  const { pos: r, box: o } = n,
    s = e.maxPadding
  if (!ge(r)) {
    n.size && (e[r] -= n.size)
    const d = i[n.stack] || { size: 0, count: 1 }
    ;(d.size = Math.max(d.size, n.horizontal ? o.height : o.width)),
      (n.size = d.size / d.count),
      (e[r] += n.size)
  }
  o.getPadding && dv(s, o.getPadding())
  const a = Math.max(0, t.outerWidth - Eg(s, e, 'left', 'right')),
    l = Math.max(0, t.outerHeight - Eg(s, e, 'top', 'bottom')),
    u = a !== e.w,
    c = l !== e.h
  return (e.w = a), (e.h = l), n.horizontal ? { same: u, other: c } : { same: c, other: u }
}
function Pk(e) {
  const t = e.maxPadding
  function n(i) {
    const r = Math.max(t[i] - e[i], 0)
    return (e[i] += r), r
  }
  ;(e.y += n('top')), (e.x += n('left')), n('right'), n('bottom')
}
function Mk(e, t) {
  const n = t.maxPadding
  function i(r) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 }
    return (
      r.forEach((s) => {
        o[s] = Math.max(t[s], n[s])
      }),
      o
    )
  }
  return i(e ? ['left', 'right'] : ['top', 'bottom'])
}
function Mo(e, t, n, i) {
  const r = []
  let o, s, a, l, u, c
  for (o = 0, s = e.length, u = 0; o < s; ++o) {
    ;(a = e[o]), (l = a.box), l.update(a.width || t.w, a.height || t.h, Mk(a.horizontal, t))
    const { same: d, other: f } = Ek(t, n, a, i)
    ;(u |= d && r.length), (c = c || f), l.fullSize || r.push(a)
  }
  return (u && Mo(r, t, n, i)) || c
}
function da(e, t, n, i, r) {
  ;(e.top = n), (e.left = t), (e.right = t + i), (e.bottom = n + r), (e.width = i), (e.height = r)
}
function Pg(e, t, n, i) {
  const r = n.padding
  let { x: o, y: s } = t
  for (const a of e) {
    const l = a.box,
      u = i[a.stack] || { count: 1, placed: 0, weight: 1 },
      c = a.stackWeight / u.weight || 1
    if (a.horizontal) {
      const d = t.w * c,
        f = u.size || l.height
      an(u.start) && (s = u.start),
        l.fullSize
          ? da(l, r.left, s, n.outerWidth - r.right - r.left, f)
          : da(l, t.left + u.placed, s, d, f),
        (u.start = s),
        (u.placed += d),
        (s = l.bottom)
    } else {
      const d = t.h * c,
        f = u.size || l.width
      an(u.start) && (o = u.start),
        l.fullSize
          ? da(l, o, r.top, f, n.outerHeight - r.bottom - r.top)
          : da(l, o, t.top + u.placed, f, d),
        (u.start = o),
        (u.placed += d),
        (o = l.right)
    }
  }
  ;(t.x = o), (t.y = s)
}
le.set('layout', { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } })
var tn = {
  addBox(e, t) {
    e.boxes || (e.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || 'top'),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                t.draw(n)
              }
            }
          ]
        }),
      e.boxes.push(t)
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1
    n !== -1 && e.boxes.splice(n, 1)
  },
  configure(e, t, n) {
    ;(t.fullSize = n.fullSize), (t.position = n.position), (t.weight = n.weight)
  },
  update(e, t, n, i) {
    if (!e) return
    const r = kt(e.options.layout.padding),
      o = Math.max(t - r.width, 0),
      s = Math.max(n - r.height, 0),
      a = Ck(e.boxes),
      l = a.vertical,
      u = a.horizontal
    xe(e.boxes, (y) => {
      typeof y.beforeLayout == 'function' && y.beforeLayout()
    })
    const c =
        l.reduce((y, _) => (_.box.options && _.box.options.display === !1 ? y : y + 1), 0) || 1,
      d = Object.freeze({
        outerWidth: t,
        outerHeight: n,
        padding: r,
        availableWidth: o,
        availableHeight: s,
        vBoxMaxWidth: o / 2 / c,
        hBoxMaxHeight: s / 2
      }),
      f = Object.assign({}, r)
    dv(f, kt(i))
    const h = Object.assign({ maxPadding: f, w: o, h: s, x: r.left, y: r.top }, r),
      p = kk(l.concat(u), d)
    Mo(a.fullSize, h, d, p),
      Mo(l, h, d, p),
      Mo(u, h, d, p) && Mo(l, h, d, p),
      Pk(h),
      Pg(a.leftAndTop, h, d, p),
      (h.x += h.w),
      (h.y += h.h),
      Pg(a.rightAndBottom, h, d, p),
      (e.chartArea = {
        left: h.left,
        top: h.top,
        right: h.left + h.w,
        bottom: h.top + h.h,
        height: h.h,
        width: h.w
      }),
      xe(a.chartArea, (y) => {
        const _ = y.box
        Object.assign(_, e.chartArea), _.update(h.w, h.h, { left: 0, top: 0, right: 0, bottom: 0 })
      })
  }
}
class fv {
  acquireContext(t, n) {}
  releaseContext(t) {
    return !1
  }
  addEventListener(t, n, i) {}
  removeEventListener(t, n, i) {}
  getDevicePixelRatio() {
    return 1
  }
  getMaximumSize(t, n, i, r) {
    return (
      (n = Math.max(0, n || t.width)),
      (i = i || t.height),
      { width: n, height: Math.max(0, r ? Math.floor(n / r) : i) }
    )
  }
  isAttached(t) {
    return !0
  }
  updateConfig(t) {}
}
class Ok extends fv {
  acquireContext(t) {
    return (t && t.getContext && t.getContext('2d')) || null
  }
  updateConfig(t) {
    t.options.animation = !1
  }
}
const La = '$chartjs',
  Tk = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout'
  },
  Mg = (e) => e === null || e === ''
function Lk(e, t) {
  const n = e.style,
    i = e.getAttribute('height'),
    r = e.getAttribute('width')
  if (
    ((e[La] = {
      initial: {
        height: i,
        width: r,
        style: { display: n.display, height: n.height, width: n.width }
      }
    }),
    (n.display = n.display || 'block'),
    (n.boxSizing = n.boxSizing || 'border-box'),
    Mg(r))
  ) {
    const o = ug(e, 'width')
    o !== void 0 && (e.width = o)
  }
  if (Mg(i))
    if (e.style.height === '') e.height = e.width / (t || 2)
    else {
      const o = ug(e, 'height')
      o !== void 0 && (e.height = o)
    }
  return e
}
const hv = E2 ? { passive: !0 } : !1
function Rk(e, t, n) {
  e.addEventListener(t, n, hv)
}
function Nk(e, t, n) {
  e.canvas.removeEventListener(t, n, hv)
}
function Dk(e, t) {
  const n = Tk[e.type] || e.type,
    { x: i, y: r } = $i(e, t)
  return { type: n, chart: t, native: e, x: i !== void 0 ? i : null, y: r !== void 0 ? r : null }
}
function hl(e, t) {
  for (const n of e) if (n === t || n.contains(t)) return !0
}
function zk(e, t, n) {
  const i = e.canvas,
    r = new MutationObserver((o) => {
      let s = !1
      for (const a of o) (s = s || hl(a.addedNodes, i)), (s = s && !hl(a.removedNodes, i))
      s && n()
    })
  return r.observe(document, { childList: !0, subtree: !0 }), r
}
function Ik(e, t, n) {
  const i = e.canvas,
    r = new MutationObserver((o) => {
      let s = !1
      for (const a of o) (s = s || hl(a.removedNodes, i)), (s = s && !hl(a.addedNodes, i))
      s && n()
    })
  return r.observe(document, { childList: !0, subtree: !0 }), r
}
const ps = new Map()
let Og = 0
function pv() {
  const e = window.devicePixelRatio
  e !== Og &&
    ((Og = e),
    ps.forEach((t, n) => {
      n.currentDevicePixelRatio !== e && t()
    }))
}
function Ak(e, t) {
  ps.size || window.addEventListener('resize', pv), ps.set(e, t)
}
function Fk(e) {
  ps.delete(e), ps.size || window.removeEventListener('resize', pv)
}
function jk(e, t, n) {
  const i = e.canvas,
    r = i && Uf(i)
  if (!r) return
  const o = Fy((a, l) => {
      const u = r.clientWidth
      n(a, l), u < r.clientWidth && n()
    }, window),
    s = new ResizeObserver((a) => {
      const l = a[0],
        u = l.contentRect.width,
        c = l.contentRect.height
      ;(u === 0 && c === 0) || o(u, c)
    })
  return s.observe(r), Ak(e, o), s
}
function uc(e, t, n) {
  n && n.disconnect(), t === 'resize' && Fk(e)
}
function Bk(e, t, n) {
  const i = e.canvas,
    r = Fy(
      (o) => {
        e.ctx !== null && n(Dk(o, e))
      },
      e,
      (o) => {
        const s = o[0]
        return [s, s.offsetX, s.offsetY]
      }
    )
  return Rk(i, t, r), r
}
class $k extends fv {
  acquireContext(t, n) {
    const i = t && t.getContext && t.getContext('2d')
    return i && i.canvas === t ? (Lk(t, n), i) : null
  }
  releaseContext(t) {
    const n = t.canvas
    if (!n[La]) return !1
    const i = n[La].initial
    ;['height', 'width'].forEach((o) => {
      const s = i[o]
      be(s) ? n.removeAttribute(o) : n.setAttribute(o, s)
    })
    const r = i.style || {}
    return (
      Object.keys(r).forEach((o) => {
        n.style[o] = r[o]
      }),
      (n.width = n.width),
      delete n[La],
      !0
    )
  }
  addEventListener(t, n, i) {
    this.removeEventListener(t, n)
    const r = t.$proxies || (t.$proxies = {}),
      s = { attach: zk, detach: Ik, resize: jk }[n] || Bk
    r[n] = s(t, n, i)
  }
  removeEventListener(t, n) {
    const i = t.$proxies || (t.$proxies = {}),
      r = i[n]
    if (!r) return
    ;(({ attach: uc, detach: uc, resize: uc }[n] || Nk)(t, n, r), (i[n] = void 0))
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio
  }
  getMaximumSize(t, n, i, r) {
    return C2(t, n, i, r)
  }
  isAttached(t) {
    const n = Uf(t)
    return !!(n && n.isConnected)
  }
}
function Hk(e) {
  return !iv() || (typeof OffscreenCanvas != 'undefined' && e instanceof OffscreenCanvas) ? Ok : $k
}
class bn {
  constructor() {
    ;(this.x = void 0),
      (this.y = void 0),
      (this.active = !1),
      (this.options = void 0),
      (this.$animations = void 0)
  }
  tooltipPosition(t) {
    const { x: n, y: i } = this.getProps(['x', 'y'], t)
    return { x: n, y: i }
  }
  hasValue() {
    return cs(this.x) && cs(this.y)
  }
  getProps(t, n) {
    const i = this.$animations
    if (!n || !i) return this
    const r = {}
    return (
      t.forEach((o) => {
        r[o] = i[o] && i[o].active() ? i[o]._to : this[o]
      }),
      r
    )
  }
}
bn.defaults = {}
bn.defaultRoutes = void 0
const gv = {
  values(e) {
    return Ne(e) ? e : '' + e
  },
  numeric(e, t, n) {
    if (e === 0) return '0'
    const i = this.chart.options.locale
    let r,
      o = e
    if (n.length > 1) {
      const u = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value))
      ;(u < 1e-4 || u > 1e15) && (r = 'scientific'), (o = Wk(e, n))
    }
    const s = Jt(Math.abs(o)),
      a = Math.max(Math.min(-1 * Math.floor(s), 20), 0),
      l = { notation: r, minimumFractionDigits: a, maximumFractionDigits: a }
    return Object.assign(l, this.options.ticks.format), Cs(e, i, l)
  },
  logarithmic(e, t, n) {
    if (e === 0) return '0'
    const i = e / Math.pow(10, Math.floor(Jt(e)))
    return i === 1 || i === 2 || i === 5 ? gv.numeric.call(this, e, t, n) : ''
  }
}
function Wk(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n
}
var Wl = { formatters: gv }
le.set('scale', {
  display: !0,
  offset: !1,
  reverse: !1,
  beginAtZero: !1,
  bounds: 'ticks',
  grace: 0,
  grid: {
    display: !0,
    lineWidth: 1,
    drawBorder: !0,
    drawOnChartArea: !0,
    drawTicks: !0,
    tickLength: 8,
    tickWidth: (e, t) => t.lineWidth,
    tickColor: (e, t) => t.color,
    offset: !1,
    borderDash: [],
    borderDashOffset: 0,
    borderWidth: 1
  },
  title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
  ticks: {
    minRotation: 0,
    maxRotation: 50,
    mirror: !1,
    textStrokeWidth: 0,
    textStrokeColor: '',
    padding: 3,
    display: !0,
    autoSkip: !0,
    autoSkipPadding: 3,
    labelOffset: 0,
    callback: Wl.formatters.values,
    minor: {},
    major: {},
    align: 'center',
    crossAlign: 'near',
    showLabelBackdrop: !1,
    backdropColor: 'rgba(255, 255, 255, 0.75)',
    backdropPadding: 2
  }
})
le.route('scale.ticks', 'color', '', 'color')
le.route('scale.grid', 'color', '', 'borderColor')
le.route('scale.grid', 'borderColor', '', 'borderColor')
le.route('scale.title', 'color', '', 'color')
le.describe('scale', {
  _fallback: !1,
  _scriptable: (e) =>
    !e.startsWith('before') && !e.startsWith('after') && e !== 'callback' && e !== 'parser',
  _indexable: (e) => e !== 'borderDash' && e !== 'tickBorderDash'
})
le.describe('scales', { _fallback: 'scale' })
le.describe('scale.ticks', {
  _scriptable: (e) => e !== 'backdropPadding' && e !== 'callback',
  _indexable: (e) => e !== 'backdropPadding'
})
function Vk(e, t) {
  const n = e.options.ticks,
    i = n.maxTicksLimit || Uk(e),
    r = n.major.enabled ? Yk(t) : [],
    o = r.length,
    s = r[0],
    a = r[o - 1],
    l = []
  if (o > i) return Qk(t, l, r, o / i), l
  const u = qk(r, t, i)
  if (o > 0) {
    let c, d
    const f = o > 1 ? Math.round((a - s) / (o - 1)) : null
    for (fa(t, l, u, be(f) ? 0 : s - f, s), c = 0, d = o - 1; c < d; c++)
      fa(t, l, u, r[c], r[c + 1])
    return fa(t, l, u, a, be(f) ? t.length : a + f), l
  }
  return fa(t, l, u), l
}
function Uk(e) {
  const t = e.options.offset,
    n = e._tickSize(),
    i = e._length / n + (t ? 0 : 1),
    r = e._maxLength / n
  return Math.floor(Math.min(i, r))
}
function qk(e, t, n) {
  const i = Xk(e),
    r = t.length / n
  if (!i) return Math.max(r, 1)
  const o = yS(i)
  for (let s = 0, a = o.length - 1; s < a; s++) {
    const l = o[s]
    if (l > r) return l
  }
  return Math.max(r, 1)
}
function Yk(e) {
  const t = []
  let n, i
  for (n = 0, i = e.length; n < i; n++) e[n].major && t.push(n)
  return t
}
function Qk(e, t, n, i) {
  let r = 0,
    o = n[0],
    s
  for (i = Math.ceil(i), s = 0; s < e.length; s++) s === o && (t.push(e[s]), r++, (o = n[r * i]))
}
function fa(e, t, n, i, r) {
  const o = ie(i, 0),
    s = Math.min(ie(r, e.length), e.length)
  let a = 0,
    l,
    u,
    c
  for (n = Math.ceil(n), r && ((l = r - i), (n = l / Math.floor(l / n))), c = o; c < 0; )
    a++, (c = Math.round(o + a * n))
  for (u = Math.max(o, 0); u < s; u++) u === c && (t.push(e[u]), a++, (c = Math.round(o + a * n)))
}
function Xk(e) {
  const t = e.length
  let n, i
  if (t < 2) return !1
  for (i = e[0], n = 1; n < t; ++n) if (e[n] - e[n - 1] !== i) return !1
  return i
}
const Kk = (e) => (e === 'left' ? 'right' : e === 'right' ? 'left' : e),
  Tg = (e, t, n) => (t === 'top' || t === 'left' ? e[t] + n : e[t] - n)
function Lg(e, t) {
  const n = [],
    i = e.length / t,
    r = e.length
  let o = 0
  for (; o < r; o += i) n.push(e[Math.floor(o)])
  return n
}
function Gk(e, t, n) {
  const i = e.ticks.length,
    r = Math.min(t, i - 1),
    o = e._startPixel,
    s = e._endPixel,
    a = 1e-6
  let l = e.getPixelForTick(r),
    u
  if (
    !(
      n &&
      (i === 1
        ? (u = Math.max(l - o, s - l))
        : t === 0
        ? (u = (e.getPixelForTick(1) - l) / 2)
        : (u = (l - e.getPixelForTick(r - 1)) / 2),
      (l += r < t ? u : -u),
      l < o - a || l > s + a)
    )
  )
    return l
}
function Zk(e, t) {
  xe(e, (n) => {
    const i = n.gc,
      r = i.length / 2
    let o
    if (r > t) {
      for (o = 0; o < r; ++o) delete n.data[i[o]]
      i.splice(0, r)
    }
  })
}
function _o(e) {
  return e.drawTicks ? e.tickLength : 0
}
function Rg(e, t) {
  if (!e.display) return 0
  const n = it(e.font, t),
    i = kt(e.padding)
  return (Ne(e.text) ? e.text.length : 1) * n.lineHeight + i.height
}
function Jk(e, t) {
  return Ni(e, { scale: t, type: 'scale' })
}
function eC(e, t, n) {
  return Ni(e, { tick: n, index: t, type: 'tick' })
}
function tC(e, t, n) {
  let i = Rf(e)
  return ((n && t !== 'right') || (!n && t === 'right')) && (i = Kk(i)), i
}
function nC(e, t, n, i) {
  const { top: r, left: o, bottom: s, right: a, chart: l } = e,
    { chartArea: u, scales: c } = l
  let d = 0,
    f,
    h,
    p
  const y = s - r,
    _ = a - o
  if (e.isHorizontal()) {
    if (((h = xt(i, o, a)), ge(n))) {
      const g = Object.keys(n)[0],
        m = n[g]
      p = c[g].getPixelForValue(m) + y - t
    } else n === 'center' ? (p = (u.bottom + u.top) / 2 + y - t) : (p = Tg(e, n, t))
    f = a - o
  } else {
    if (ge(n)) {
      const g = Object.keys(n)[0],
        m = n[g]
      h = c[g].getPixelForValue(m) - _ + t
    } else n === 'center' ? (h = (u.left + u.right) / 2 - _ + t) : (h = Tg(e, n, t))
    ;(p = xt(i, s, r)), (d = n === 'left' ? -Ye : Ye)
  }
  return { titleX: h, titleY: p, maxWidth: f, rotation: d }
}
class cr extends bn {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0)
  }
  init(t) {
    ;(this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax))
  }
  parse(t, n) {
    return t
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: i, _suggestedMax: r } = this
    return (
      (t = Xt(t, Number.POSITIVE_INFINITY)),
      (n = Xt(n, Number.NEGATIVE_INFINITY)),
      (i = Xt(i, Number.POSITIVE_INFINITY)),
      (r = Xt(r, Number.NEGATIVE_INFINITY)),
      { min: Xt(t, i), max: Xt(n, r), minDefined: ht(t), maxDefined: ht(n) }
    )
  }
  getMinMax(t) {
    let { min: n, max: i, minDefined: r, maxDefined: o } = this.getUserBounds(),
      s
    if (r && o) return { min: n, max: i }
    const a = this.getMatchingVisibleMetas()
    for (let l = 0, u = a.length; l < u; ++l)
      (s = a[l].controller.getMinMax(this, t)),
        r || (n = Math.min(n, s.min)),
        o || (i = Math.max(i, s.max))
    return (
      (n = o && n > i ? i : n),
      (i = r && n > i ? n : i),
      { min: Xt(n, Xt(i, n)), max: Xt(i, Xt(n, i)) }
    )
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    }
  }
  getTicks() {
    return this.ticks
  }
  getLabels() {
    const t = this.chart.data
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
  }
  beforeLayout() {
    ;(this._cache = {}), (this._dataLimitsCached = !1)
  }
  beforeUpdate() {
    Ee(this.options.beforeUpdate, [this])
  }
  update(t, n, i) {
    const { beginAtZero: r, grace: o, ticks: s } = this.options,
      a = s.sampleSize
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = i = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + i.left + i.right
        : this.height + i.top + i.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = e2(this, o, r)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks()
    const l = a < this.ticks.length
    this._convertTicksToLabels(l ? Lg(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      s.display &&
        (s.autoSkip || s.source === 'auto') &&
        ((this.ticks = Vk(this, this.ticks)), (this._labelSizes = null), this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate()
  }
  configure() {
    let t = this.options.reverse,
      n,
      i
    this.isHorizontal()
      ? ((n = this.left), (i = this.right))
      : ((n = this.top), (i = this.bottom), (t = !t)),
      (this._startPixel = n),
      (this._endPixel = i),
      (this._reversePixels = t),
      (this._length = i - n),
      (this._alignToPixels = this.options.alignToPixels)
  }
  afterUpdate() {
    Ee(this.options.afterUpdate, [this])
  }
  beforeSetDimensions() {
    Ee(this.options.beforeSetDimensions, [this])
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth), (this.left = 0), (this.right = this.width))
      : ((this.height = this.maxHeight), (this.top = 0), (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0)
  }
  afterSetDimensions() {
    Ee(this.options.afterSetDimensions, [this])
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), Ee(this.options[t], [this])
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits')
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits')
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks')
  }
  buildTicks() {
    return []
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks')
  }
  beforeTickToLabelConversion() {
    Ee(this.options.beforeTickToLabelConversion, [this])
  }
  generateTickLabels(t) {
    const n = this.options.ticks
    let i, r, o
    for (i = 0, r = t.length; i < r; i++)
      (o = t[i]), (o.label = Ee(n.callback, [o.value, i, t], this))
  }
  afterTickToLabelConversion() {
    Ee(this.options.afterTickToLabelConversion, [this])
  }
  beforeCalculateLabelRotation() {
    Ee(this.options.beforeCalculateLabelRotation, [this])
  }
  calculateLabelRotation() {
    const t = this.options,
      n = t.ticks,
      i = this.ticks.length,
      r = n.minRotation || 0,
      o = n.maxRotation
    let s = r,
      a,
      l,
      u
    if (!this._isVisible() || !n.display || r >= o || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = r
      return
    }
    const c = this._getLabelSizes(),
      d = c.widest.width,
      f = c.highest.height,
      h = wt(this.chart.width - d, 0, this.maxWidth)
    ;(a = t.offset ? this.maxWidth / i : h / (i - 1)),
      d + 6 > a &&
        ((a = h / (i - (t.offset ? 0.5 : 1))),
        (l = this.maxHeight - _o(t.grid) - n.padding - Rg(t.title, this.chart.options.font)),
        (u = Math.sqrt(d * d + f * f)),
        (s = Df(
          Math.min(
            Math.asin(wt((c.highest.height + 6) / a, -1, 1)),
            Math.asin(wt(l / u, -1, 1)) - Math.asin(wt(f / u, -1, 1))
          )
        )),
        (s = Math.max(r, Math.min(o, s)))),
      (this.labelRotation = s)
  }
  afterCalculateLabelRotation() {
    Ee(this.options.afterCalculateLabelRotation, [this])
  }
  afterAutoSkip() {}
  beforeFit() {
    Ee(this.options.beforeFit, [this])
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: i, title: r, grid: o }
      } = this,
      s = this._isVisible(),
      a = this.isHorizontal()
    if (s) {
      const l = Rg(r, n.options.font)
      if (
        (a
          ? ((t.width = this.maxWidth), (t.height = _o(o) + l))
          : ((t.height = this.maxHeight), (t.width = _o(o) + l)),
        i.display && this.ticks.length)
      ) {
        const { first: u, last: c, widest: d, highest: f } = this._getLabelSizes(),
          h = i.padding * 2,
          p = vn(this.labelRotation),
          y = Math.cos(p),
          _ = Math.sin(p)
        if (a) {
          const g = i.mirror ? 0 : _ * d.width + y * f.height
          t.height = Math.min(this.maxHeight, t.height + g + h)
        } else {
          const g = i.mirror ? 0 : y * d.width + _ * f.height
          t.width = Math.min(this.maxWidth, t.width + g + h)
        }
        this._calculatePadding(u, c, _, y)
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length = n.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length = n.height - this._margins.top - this._margins.bottom))
  }
  _calculatePadding(t, n, i, r) {
    const {
        ticks: { align: o, padding: s },
        position: a
      } = this.options,
      l = this.labelRotation !== 0,
      u = a !== 'top' && this.axis === 'x'
    if (this.isHorizontal()) {
      const c = this.getPixelForTick(0) - this.left,
        d = this.right - this.getPixelForTick(this.ticks.length - 1)
      let f = 0,
        h = 0
      l
        ? u
          ? ((f = r * t.width), (h = i * n.height))
          : ((f = i * t.height), (h = r * n.width))
        : o === 'start'
        ? (h = n.width)
        : o === 'end'
        ? (f = t.width)
        : o !== 'inner' && ((f = t.width / 2), (h = n.width / 2)),
        (this.paddingLeft = Math.max(((f - c + s) * this.width) / (this.width - c), 0)),
        (this.paddingRight = Math.max(((h - d + s) * this.width) / (this.width - d), 0))
    } else {
      let c = n.height / 2,
        d = t.height / 2
      o === 'start' ? ((c = 0), (d = t.height)) : o === 'end' && ((c = n.height), (d = 0)),
        (this.paddingTop = c + s),
        (this.paddingBottom = d + s)
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)))
  }
  afterFit() {
    Ee(this.options.afterFit, [this])
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options
    return n === 'top' || n === 'bottom' || t === 'x'
  }
  isFullSize() {
    return this.options.fullSize
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t)
    let n, i
    for (n = 0, i = t.length; n < i; n++) be(t[n].label) && (t.splice(n, 1), i--, n--)
    this.afterTickToLabelConversion()
  }
  _getLabelSizes() {
    let t = this._labelSizes
    if (!t) {
      const n = this.options.ticks.sampleSize
      let i = this.ticks
      n < i.length && (i = Lg(i, n)), (this._labelSizes = t = this._computeLabelSizes(i, i.length))
    }
    return t
  }
  _computeLabelSizes(t, n) {
    const { ctx: i, _longestTextCache: r } = this,
      o = [],
      s = []
    let a = 0,
      l = 0,
      u,
      c,
      d,
      f,
      h,
      p,
      y,
      _,
      g,
      m,
      v
    for (u = 0; u < n; ++u) {
      if (
        ((f = t[u].label),
        (h = this._resolveTickFontOptions(u)),
        (i.font = p = h.string),
        (y = r[p] = r[p] || { data: {}, gc: [] }),
        (_ = h.lineHeight),
        (g = m = 0),
        !be(f) && !Ne(f))
      )
        (g = cl(i, y.data, y.gc, g, f)), (m = _)
      else if (Ne(f))
        for (c = 0, d = f.length; c < d; ++c)
          (v = f[c]), !be(v) && !Ne(v) && ((g = cl(i, y.data, y.gc, g, v)), (m += _))
      o.push(g), s.push(m), (a = Math.max(g, a)), (l = Math.max(m, l))
    }
    Zk(r, n)
    const x = o.indexOf(a),
      b = s.indexOf(l),
      O = (k) => ({ width: o[k] || 0, height: s[k] || 0 })
    return { first: O(0), last: O(n - 1), widest: O(x), highest: O(b), widths: o, heights: s }
  }
  getLabelForValue(t) {
    return t
  }
  getPixelForValue(t, n) {
    return NaN
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const n = this.ticks
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value)
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t)
    const n = this._startPixel + t * this._length
    return xS(this._alignToPixels ? Ii(this.chart, n, 0) : n)
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length
    return this._reversePixels ? 1 - n : n
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue())
  }
  getBaseValue() {
    const { min: t, max: n } = this
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0
  }
  getContext(t) {
    const n = this.ticks || []
    if (t >= 0 && t < n.length) {
      const i = n[t]
      return i.$context || (i.$context = eC(this.getContext(), t, i))
    }
    return this.$context || (this.$context = Jk(this.chart.getContext(), this))
  }
  _tickSize() {
    const t = this.options.ticks,
      n = vn(this.labelRotation),
      i = Math.abs(Math.cos(n)),
      r = Math.abs(Math.sin(n)),
      o = this._getLabelSizes(),
      s = t.autoSkipPadding || 0,
      a = o ? o.widest.width + s : 0,
      l = o ? o.highest.height + s : 0
    return this.isHorizontal() ? (l * i > a * r ? a / i : l / r) : l * r < a * i ? l / i : a / r
  }
  _isVisible() {
    const t = this.options.display
    return t !== 'auto' ? !!t : this.getMatchingVisibleMetas().length > 0
  }
  _computeGridLineItems(t) {
    const n = this.axis,
      i = this.chart,
      r = this.options,
      { grid: o, position: s } = r,
      a = o.offset,
      l = this.isHorizontal(),
      c = this.ticks.length + (a ? 1 : 0),
      d = _o(o),
      f = [],
      h = o.setContext(this.getContext()),
      p = h.drawBorder ? h.borderWidth : 0,
      y = p / 2,
      _ = function (Q) {
        return Ii(i, Q, p)
      }
    let g, m, v, x, b, O, k, P, L, I, N, Y
    if (s === 'top')
      (g = _(this.bottom)), (O = this.bottom - d), (P = g - y), (I = _(t.top) + y), (Y = t.bottom)
    else if (s === 'bottom')
      (g = _(this.top)), (I = t.top), (Y = _(t.bottom) - y), (O = g + y), (P = this.top + d)
    else if (s === 'left')
      (g = _(this.right)), (b = this.right - d), (k = g - y), (L = _(t.left) + y), (N = t.right)
    else if (s === 'right')
      (g = _(this.left)), (L = t.left), (N = _(t.right) - y), (b = g + y), (k = this.left + d)
    else if (n === 'x') {
      if (s === 'center') g = _((t.top + t.bottom) / 2 + 0.5)
      else if (ge(s)) {
        const Q = Object.keys(s)[0],
          X = s[Q]
        g = _(this.chart.scales[Q].getPixelForValue(X))
      }
      ;(I = t.top), (Y = t.bottom), (O = g + y), (P = O + d)
    } else if (n === 'y') {
      if (s === 'center') g = _((t.left + t.right) / 2)
      else if (ge(s)) {
        const Q = Object.keys(s)[0],
          X = s[Q]
        g = _(this.chart.scales[Q].getPixelForValue(X))
      }
      ;(b = g - y), (k = b - d), (L = t.left), (N = t.right)
    }
    const S = ie(r.ticks.maxTicksLimit, c),
      Z = Math.max(1, Math.ceil(c / S))
    for (m = 0; m < c; m += Z) {
      const Q = o.setContext(this.getContext(m)),
        X = Q.lineWidth,
        ue = Q.color,
        C = o.borderDash || [],
        M = Q.borderDashOffset,
        D = Q.tickWidth,
        W = Q.tickColor,
        F = Q.tickBorderDash || [],
        de = Q.tickBorderDashOffset
      ;(v = Gk(this, m, a)),
        v !== void 0 &&
          ((x = Ii(i, v, X)),
          l ? (b = k = L = N = x) : (O = P = I = Y = x),
          f.push({
            tx1: b,
            ty1: O,
            tx2: k,
            ty2: P,
            x1: L,
            y1: I,
            x2: N,
            y2: Y,
            width: X,
            color: ue,
            borderDash: C,
            borderDashOffset: M,
            tickWidth: D,
            tickColor: W,
            tickBorderDash: F,
            tickBorderDashOffset: de
          }))
    }
    return (this._ticksLength = c), (this._borderValue = g), f
  }
  _computeLabelItems(t) {
    const n = this.axis,
      i = this.options,
      { position: r, ticks: o } = i,
      s = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: u, padding: c, mirror: d } = o,
      f = _o(i.grid),
      h = f + c,
      p = d ? -c : h,
      y = -vn(this.labelRotation),
      _ = []
    let g,
      m,
      v,
      x,
      b,
      O,
      k,
      P,
      L,
      I,
      N,
      Y,
      S = 'middle'
    if (r === 'top') (O = this.bottom - p), (k = this._getXAxisLabelAlignment())
    else if (r === 'bottom') (O = this.top + p), (k = this._getXAxisLabelAlignment())
    else if (r === 'left') {
      const Q = this._getYAxisLabelAlignment(f)
      ;(k = Q.textAlign), (b = Q.x)
    } else if (r === 'right') {
      const Q = this._getYAxisLabelAlignment(f)
      ;(k = Q.textAlign), (b = Q.x)
    } else if (n === 'x') {
      if (r === 'center') O = (t.top + t.bottom) / 2 + h
      else if (ge(r)) {
        const Q = Object.keys(r)[0],
          X = r[Q]
        O = this.chart.scales[Q].getPixelForValue(X) + h
      }
      k = this._getXAxisLabelAlignment()
    } else if (n === 'y') {
      if (r === 'center') b = (t.left + t.right) / 2 - h
      else if (ge(r)) {
        const Q = Object.keys(r)[0],
          X = r[Q]
        b = this.chart.scales[Q].getPixelForValue(X)
      }
      k = this._getYAxisLabelAlignment(f).textAlign
    }
    n === 'y' && (l === 'start' ? (S = 'top') : l === 'end' && (S = 'bottom'))
    const Z = this._getLabelSizes()
    for (g = 0, m = a.length; g < m; ++g) {
      ;(v = a[g]), (x = v.label)
      const Q = o.setContext(this.getContext(g))
      ;(P = this.getPixelForTick(g) + o.labelOffset),
        (L = this._resolveTickFontOptions(g)),
        (I = L.lineHeight),
        (N = Ne(x) ? x.length : 1)
      const X = N / 2,
        ue = Q.color,
        C = Q.textStrokeColor,
        M = Q.textStrokeWidth
      let D = k
      s
        ? ((b = P),
          k === 'inner' &&
            (g === m - 1
              ? (D = this.options.reverse ? 'left' : 'right')
              : g === 0
              ? (D = this.options.reverse ? 'right' : 'left')
              : (D = 'center')),
          r === 'top'
            ? u === 'near' || y !== 0
              ? (Y = -N * I + I / 2)
              : u === 'center'
              ? (Y = -Z.highest.height / 2 - X * I + I)
              : (Y = -Z.highest.height + I / 2)
            : u === 'near' || y !== 0
            ? (Y = I / 2)
            : u === 'center'
            ? (Y = Z.highest.height / 2 - X * I)
            : (Y = Z.highest.height - N * I),
          d && (Y *= -1))
        : ((O = P), (Y = ((1 - N) * I) / 2))
      let W
      if (Q.showLabelBackdrop) {
        const F = kt(Q.backdropPadding),
          de = Z.heights[g],
          me = Z.widths[g]
        let Ke = O + Y - F.top,
          We = b - F.left
        switch (S) {
          case 'middle':
            Ke -= de / 2
            break
          case 'bottom':
            Ke -= de
            break
        }
        switch (k) {
          case 'center':
            We -= me / 2
            break
          case 'right':
            We -= me
            break
        }
        W = {
          left: We,
          top: Ke,
          width: me + F.width,
          height: de + F.height,
          color: Q.backdropColor
        }
      }
      _.push({
        rotation: y,
        label: x,
        font: L,
        color: ue,
        strokeColor: C,
        strokeWidth: M,
        textOffset: Y,
        textAlign: D,
        textBaseline: S,
        translation: [b, O],
        backdrop: W
      })
    }
    return _
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options
    if (-vn(this.labelRotation)) return t === 'top' ? 'left' : 'right'
    let r = 'center'
    return (
      n.align === 'start'
        ? (r = 'left')
        : n.align === 'end'
        ? (r = 'right')
        : n.align === 'inner' && (r = 'inner'),
      r
    )
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: n,
        ticks: { crossAlign: i, mirror: r, padding: o }
      } = this.options,
      s = this._getLabelSizes(),
      a = t + o,
      l = s.widest.width
    let u, c
    return (
      n === 'left'
        ? r
          ? ((c = this.right + o),
            i === 'near'
              ? (u = 'left')
              : i === 'center'
              ? ((u = 'center'), (c += l / 2))
              : ((u = 'right'), (c += l)))
          : ((c = this.right - a),
            i === 'near'
              ? (u = 'right')
              : i === 'center'
              ? ((u = 'center'), (c -= l / 2))
              : ((u = 'left'), (c = this.left)))
        : n === 'right'
        ? r
          ? ((c = this.left + o),
            i === 'near'
              ? (u = 'right')
              : i === 'center'
              ? ((u = 'center'), (c -= l / 2))
              : ((u = 'left'), (c -= l)))
          : ((c = this.left + a),
            i === 'near'
              ? (u = 'left')
              : i === 'center'
              ? ((u = 'center'), (c += l / 2))
              : ((u = 'right'), (c = this.right)))
        : (u = 'right'),
      { textAlign: u, x: c }
    )
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return
    const t = this.chart,
      n = this.options.position
    if (n === 'left' || n === 'right')
      return { top: 0, left: this.left, bottom: t.height, right: this.right }
    if (n === 'top' || n === 'bottom')
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width }
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: n },
      left: i,
      top: r,
      width: o,
      height: s
    } = this
    n && (t.save(), (t.fillStyle = n), t.fillRect(i, r, o, s), t.restore())
  }
  getLineWidthForValue(t) {
    const n = this.options.grid
    if (!this._isVisible() || !n.display) return 0
    const r = this.ticks.findIndex((o) => o.value === t)
    return r >= 0 ? n.setContext(this.getContext(r)).lineWidth : 0
  }
  drawGrid(t) {
    const n = this.options.grid,
      i = this.ctx,
      r = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t))
    let o, s
    const a = (l, u, c) => {
      !c.width ||
        !c.color ||
        (i.save(),
        (i.lineWidth = c.width),
        (i.strokeStyle = c.color),
        i.setLineDash(c.borderDash || []),
        (i.lineDashOffset = c.borderDashOffset),
        i.beginPath(),
        i.moveTo(l.x, l.y),
        i.lineTo(u.x, u.y),
        i.stroke(),
        i.restore())
    }
    if (n.display)
      for (o = 0, s = r.length; o < s; ++o) {
        const l = r[o]
        n.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          n.drawTicks &&
            a(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset
              }
            )
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: n,
        options: { grid: i }
      } = this,
      r = i.setContext(this.getContext()),
      o = i.drawBorder ? r.borderWidth : 0
    if (!o) return
    const s = i.setContext(this.getContext(0)).lineWidth,
      a = this._borderValue
    let l, u, c, d
    this.isHorizontal()
      ? ((l = Ii(t, this.left, o) - o / 2), (u = Ii(t, this.right, s) + s / 2), (c = d = a))
      : ((c = Ii(t, this.top, o) - o / 2), (d = Ii(t, this.bottom, s) + s / 2), (l = u = a)),
      n.save(),
      (n.lineWidth = r.borderWidth),
      (n.strokeStyle = r.borderColor),
      n.beginPath(),
      n.moveTo(l, c),
      n.lineTo(u, d),
      n.stroke(),
      n.restore()
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return
    const i = this.ctx,
      r = this._computeLabelArea()
    r && Ff(i, r)
    const o = this._labelItems || (this._labelItems = this._computeLabelItems(t))
    let s, a
    for (s = 0, a = o.length; s < a; ++s) {
      const l = o[s],
        u = l.font,
        c = l.label
      l.backdrop &&
        ((i.fillStyle = l.backdrop.color),
        i.fillRect(l.backdrop.left, l.backdrop.top, l.backdrop.width, l.backdrop.height))
      let d = l.textOffset
      or(i, c, 0, d, u, l)
    }
    r && jf(i)
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: n, title: i, reverse: r }
    } = this
    if (!i.display) return
    const o = it(i.font),
      s = kt(i.padding),
      a = i.align
    let l = o.lineHeight / 2
    n === 'bottom' || n === 'center' || ge(n)
      ? ((l += s.bottom), Ne(i.text) && (l += o.lineHeight * (i.text.length - 1)))
      : (l += s.top)
    const { titleX: u, titleY: c, maxWidth: d, rotation: f } = nC(this, l, n, a)
    or(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: d,
      rotation: f,
      textAlign: tC(a, n, r),
      textBaseline: 'middle',
      translation: [u, c]
    })
  }
  draw(t) {
    !this._isVisible() ||
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t))
  }
  _layers() {
    const t = this.options,
      n = (t.ticks && t.ticks.z) || 0,
      i = ie(t.grid && t.grid.z, -1)
    return !this._isVisible() || this.draw !== cr.prototype.draw
      ? [
          {
            z: n,
            draw: (r) => {
              this.draw(r)
            }
          }
        ]
      : [
          {
            z: i,
            draw: (r) => {
              this.drawBackground(), this.drawGrid(r), this.drawTitle()
            }
          },
          {
            z: i + 1,
            draw: () => {
              this.drawBorder()
            }
          },
          {
            z: n,
            draw: (r) => {
              this.drawLabels(r)
            }
          }
        ]
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      i = this.axis + 'AxisID',
      r = []
    let o, s
    for (o = 0, s = n.length; o < s; ++o) {
      const a = n[o]
      a[i] === this.id && (!t || a.type === t) && r.push(a)
    }
    return r
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t))
    return it(n.font)
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight
    return (this.isHorizontal() ? this.width : this.height) / t
  }
}
class ha {
  constructor(t, n, i) {
    ;(this.type = t), (this.scope = n), (this.override = i), (this.items = Object.create(null))
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
  }
  register(t) {
    const n = Object.getPrototypeOf(t)
    let i
    oC(n) && (i = this.register(n))
    const r = this.items,
      o = t.id,
      s = this.scope + '.' + o
    if (!o) throw new Error('class does not have id: ' + t)
    return o in r || ((r[o] = t), iC(t, s, i), this.override && le.override(t.id, t.overrides)), s
  }
  get(t) {
    return this.items[t]
  }
  unregister(t) {
    const n = this.items,
      i = t.id,
      r = this.scope
    i in n && delete n[i], r && i in le[r] && (delete le[r][i], this.override && delete rr[i])
  }
}
function iC(e, t, n) {
  const i = us(Object.create(null), [n ? le.get(n) : {}, le.get(t), e.defaults])
  le.set(t, i),
    e.defaultRoutes && rC(t, e.defaultRoutes),
    e.descriptors && le.describe(t, e.descriptors)
}
function rC(e, t) {
  Object.keys(t).forEach((n) => {
    const i = n.split('.'),
      r = i.pop(),
      o = [e].concat(i).join('.'),
      s = t[n].split('.'),
      a = s.pop(),
      l = s.join('.')
    le.route(o, r, l, a)
  })
}
function oC(e) {
  return 'id' in e && 'defaults' in e
}
class sC {
  constructor() {
    ;(this.controllers = new ha(Rn, 'datasets', !0)),
      (this.elements = new ha(bn, 'elements')),
      (this.plugins = new ha(Object, 'plugins')),
      (this.scales = new ha(cr, 'scales')),
      (this._typedRegistries = [this.controllers, this.scales, this.elements])
  }
  add(...t) {
    this._each('register', t)
  }
  remove(...t) {
    this._each('unregister', t)
  }
  addControllers(...t) {
    this._each('register', t, this.controllers)
  }
  addElements(...t) {
    this._each('register', t, this.elements)
  }
  addPlugins(...t) {
    this._each('register', t, this.plugins)
  }
  addScales(...t) {
    this._each('register', t, this.scales)
  }
  getController(t) {
    return this._get(t, this.controllers, 'controller')
  }
  getElement(t) {
    return this._get(t, this.elements, 'element')
  }
  getPlugin(t) {
    return this._get(t, this.plugins, 'plugin')
  }
  getScale(t) {
    return this._get(t, this.scales, 'scale')
  }
  removeControllers(...t) {
    this._each('unregister', t, this.controllers)
  }
  removeElements(...t) {
    this._each('unregister', t, this.elements)
  }
  removePlugins(...t) {
    this._each('unregister', t, this.plugins)
  }
  removeScales(...t) {
    this._each('unregister', t, this.scales)
  }
  _each(t, n, i) {
    ;[...n].forEach((r) => {
      const o = i || this._getRegistryForType(r)
      i || o.isForType(r) || (o === this.plugins && r.id)
        ? this._exec(t, o, r)
        : xe(r, (s) => {
            const a = i || this._getRegistryForType(s)
            this._exec(t, a, s)
          })
    })
  }
  _exec(t, n, i) {
    const r = Nf(t)
    Ee(i['before' + r], [], i), n[t](i), Ee(i['after' + r], [], i)
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const i = this._typedRegistries[n]
      if (i.isForType(t)) return i
    }
    return this.plugins
  }
  _get(t, n, i) {
    const r = n.get(t)
    if (r === void 0) throw new Error('"' + t + '" is not a registered ' + i + '.')
    return r
  }
}
var qn = new sC()
class aC {
  constructor() {
    this._init = []
  }
  notify(t, n, i, r) {
    n === 'beforeInit' &&
      ((this._init = this._createDescriptors(t, !0)), this._notify(this._init, t, 'install'))
    const o = r ? this._descriptors(t).filter(r) : this._descriptors(t),
      s = this._notify(o, t, n, i)
    return (
      n === 'afterDestroy' &&
        (this._notify(o, t, 'stop'), this._notify(this._init, t, 'uninstall')),
      s
    )
  }
  _notify(t, n, i, r) {
    r = r || {}
    for (const o of t) {
      const s = o.plugin,
        a = s[i],
        l = [n, r, o.options]
      if (Ee(a, l, s) === !1 && r.cancelable) return !1
    }
    return !0
  }
  invalidate() {
    be(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0))
  }
  _descriptors(t) {
    if (this._cache) return this._cache
    const n = (this._cache = this._createDescriptors(t))
    return this._notifyStateChanges(t), n
  }
  _createDescriptors(t, n) {
    const i = t && t.config,
      r = ie(i.options && i.options.plugins, {}),
      o = lC(i)
    return r === !1 && !n ? [] : cC(t, o, r, n)
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [],
      i = this._cache,
      r = (o, s) => o.filter((a) => !s.some((l) => a.plugin.id === l.plugin.id))
    this._notify(r(n, i), t, 'stop'), this._notify(r(i, n), t, 'start')
  }
}
function lC(e) {
  const t = [],
    n = Object.keys(qn.plugins.items)
  for (let r = 0; r < n.length; r++) t.push(qn.getPlugin(n[r]))
  const i = e.plugins || []
  for (let r = 0; r < i.length; r++) {
    const o = i[r]
    t.indexOf(o) === -1 && t.push(o)
  }
  return t
}
function uC(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e
}
function cC(e, t, n, i) {
  const r = [],
    o = e.getContext()
  for (let s = 0; s < t.length; s++) {
    const a = t[s],
      l = a.id,
      u = uC(n[l], i)
    u !== null && r.push({ plugin: a, options: dC(e.config, a, u, o) })
  }
  return r
}
function dC(e, t, n, i) {
  const r = e.pluginScopeKeys(t),
    o = e.getOptionScopes(n, r)
  return e.createResolver(o, i, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
}
function Sd(e, t) {
  const n = le.datasets[e] || {}
  return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || 'x'
}
function fC(e, t) {
  let n = e
  return e === '_index_' ? (n = t) : e === '_value_' && (n = t === 'x' ? 'y' : 'x'), n
}
function hC(e, t) {
  return e === t ? '_index_' : '_value_'
}
function pC(e) {
  if (e === 'top' || e === 'bottom') return 'x'
  if (e === 'left' || e === 'right') return 'y'
}
function kd(e, t) {
  return e === 'x' || e === 'y' ? e : t.axis || pC(t.position) || e.charAt(0).toLowerCase()
}
function gC(e, t) {
  const n = rr[e.type] || { scales: {} },
    i = t.scales || {},
    r = Sd(e.type, t),
    o = Object.create(null),
    s = Object.create(null)
  return (
    Object.keys(i).forEach((a) => {
      const l = i[a]
      if (!ge(l)) return console.error(`Invalid scale configuration for scale: ${a}`)
      if (l._proxy) return console.warn(`Ignoring resolver passed as options for scale: ${a}`)
      const u = kd(a, l),
        c = hC(u, r),
        d = n.scales || {}
      ;(o[u] = o[u] || a), (s[a] = Bo(Object.create(null), [{ axis: u }, l, d[u], d[c]]))
    }),
    e.data.datasets.forEach((a) => {
      const l = a.type || e.type,
        u = a.indexAxis || Sd(l, t),
        d = (rr[l] || {}).scales || {}
      Object.keys(d).forEach((f) => {
        const h = fC(f, u),
          p = a[h + 'AxisID'] || o[h] || h
        ;(s[p] = s[p] || Object.create(null)), Bo(s[p], [{ axis: h }, i[p], d[f]])
      })
    }),
    Object.keys(s).forEach((a) => {
      const l = s[a]
      Bo(l, [le.scales[l.type], le.scale])
    }),
    s
  )
}
function mv(e) {
  const t = e.options || (e.options = {})
  ;(t.plugins = ie(t.plugins, {})), (t.scales = gC(e, t))
}
function yv(e) {
  return (e = e || {}), (e.datasets = e.datasets || []), (e.labels = e.labels || []), e
}
function mC(e) {
  return (e = e || {}), (e.data = yv(e.data)), mv(e), e
}
const Ng = new Map(),
  vv = new Set()
function pa(e, t) {
  let n = Ng.get(e)
  return n || ((n = t()), Ng.set(e, n), vv.add(n)), n
}
const xo = (e, t, n) => {
  const i = Ei(t, n)
  i !== void 0 && e.add(i)
}
class yC {
  constructor(t) {
    ;(this._config = mC(t)), (this._scopeCache = new Map()), (this._resolverCache = new Map())
  }
  get platform() {
    return this._config.platform
  }
  get type() {
    return this._config.type
  }
  set type(t) {
    this._config.type = t
  }
  get data() {
    return this._config.data
  }
  set data(t) {
    this._config.data = yv(t)
  }
  get options() {
    return this._config.options
  }
  set options(t) {
    this._config.options = t
  }
  get plugins() {
    return this._config.plugins
  }
  update() {
    const t = this._config
    this.clearCache(), mv(t)
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear()
  }
  datasetScopeKeys(t) {
    return pa(t, () => [[`datasets.${t}`, '']])
  }
  datasetAnimationScopeKeys(t, n) {
    return pa(`${t}.transition.${n}`, () => [
      [`datasets.${t}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${t}`, '']
    ])
  }
  datasetElementScopeKeys(t, n) {
    return pa(`${t}-${n}`, () => [
      [`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, '']
    ])
  }
  pluginScopeKeys(t) {
    const n = t.id,
      i = this.type
    return pa(`${i}-plugin-${n}`, () => [[`plugins.${n}`, ...(t.additionalOptionScopes || [])]])
  }
  _cachedScopes(t, n) {
    const i = this._scopeCache
    let r = i.get(t)
    return (!r || n) && ((r = new Map()), i.set(t, r)), r
  }
  getOptionScopes(t, n, i) {
    const { options: r, type: o } = this,
      s = this._cachedScopes(t, i),
      a = s.get(n)
    if (a) return a
    const l = new Set()
    n.forEach((c) => {
      t && (l.add(t), c.forEach((d) => xo(l, t, d))),
        c.forEach((d) => xo(l, r, d)),
        c.forEach((d) => xo(l, rr[o] || {}, d)),
        c.forEach((d) => xo(l, le, d)),
        c.forEach((d) => xo(l, bd, d))
    })
    const u = Array.from(l)
    return u.length === 0 && u.push(Object.create(null)), vv.has(n) && s.set(n, u), u
  }
  chartOptionScopes() {
    const { options: t, type: n } = this
    return [t, rr[n] || {}, le.datasets[n] || {}, { type: n }, le, bd]
  }
  resolveNamedOptions(t, n, i, r = ['']) {
    const o = { $shared: !0 },
      { resolver: s, subPrefixes: a } = Dg(this._resolverCache, t, r)
    let l = s
    if (_C(s, n)) {
      ;(o.$shared = !1), (i = Pi(i) ? i() : i)
      const u = this.createResolver(t, i, a)
      l = qr(s, i, u)
    }
    for (const u of n) o[u] = l[u]
    return o
  }
  createResolver(t, n, i = [''], r) {
    const { resolver: o } = Dg(this._resolverCache, t, i)
    return ge(n) ? qr(o, n, void 0, r) : o
  }
}
function Dg(e, t, n) {
  let i = e.get(t)
  i || ((i = new Map()), e.set(t, i))
  const r = n.join()
  let o = i.get(r)
  return (
    o ||
      ((o = {
        resolver: Hf(t, n),
        subPrefixes: n.filter((a) => !a.toLowerCase().includes('hover'))
      }),
      i.set(r, o)),
    o
  )
}
const vC = (e) => ge(e) && Object.getOwnPropertyNames(e).reduce((t, n) => t || Pi(e[n]), !1)
function _C(e, t) {
  const { isScriptable: n, isIndexable: i } = Gy(e)
  for (const r of t) {
    const o = n(r),
      s = i(r),
      a = (s || o) && e[r]
    if ((o && (Pi(a) || vC(a))) || (s && Ne(a))) return !0
  }
  return !1
}
var xC = '3.8.0'
const bC = ['top', 'bottom', 'left', 'right', 'chartArea']
function zg(e, t) {
  return e === 'top' || e === 'bottom' || (bC.indexOf(e) === -1 && t === 'x')
}
function Ig(e, t) {
  return function (n, i) {
    return n[e] === i[e] ? n[t] - i[t] : n[e] - i[e]
  }
}
function Ag(e) {
  const t = e.chart,
    n = t.options.animation
  t.notifyPlugins('afterRender'), Ee(n && n.onComplete, [e], t)
}
function wC(e) {
  const t = e.chart,
    n = t.options.animation
  Ee(n && n.onProgress, [e], t)
}
function _v(e) {
  return (
    iv() && typeof e == 'string' ? (e = document.getElementById(e)) : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
  )
}
const pl = {},
  xv = (e) => {
    const t = _v(e)
    return Object.values(pl)
      .filter((n) => n.canvas === t)
      .pop()
  }
function SC(e, t, n) {
  const i = Object.keys(e)
  for (const r of i) {
    const o = +r
    if (o >= t) {
      const s = e[r]
      delete e[r], (n > 0 || o > t) && (e[o + n] = s)
    }
  }
}
function kC(e, t, n, i) {
  return !n || e.type === 'mouseout' ? null : i ? t : e
}
class Os {
  constructor(t, n) {
    const i = (this.config = new yC(n)),
      r = _v(t),
      o = xv(r)
    if (o)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          o.id +
          "' must be destroyed before the canvas can be reused."
      )
    const s = i.createResolver(i.chartOptionScopes(), this.getContext())
    ;(this.platform = new (i.platform || Hk(r))()), this.platform.updateConfig(i)
    const a = this.platform.acquireContext(r, s.aspectRatio),
      l = a && a.canvas,
      u = l && l.height,
      c = l && l.width
    if (
      ((this.id = lS()),
      (this.ctx = a),
      (this.canvas = l),
      (this.width = c),
      (this.height = u),
      (this._options = s),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new aC()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = sS((d) => this.update(d), s.resizeDelay || 0)),
      (this._dataChanges = []),
      (pl[this.id] = this),
      !a || !l)
    ) {
      console.error("Failed to create chart: can't acquire context from the given item")
      return
    }
    An.listen(this, 'complete', Ag),
      An.listen(this, 'progress', wC),
      this._initialize(),
      this.attached && this.update()
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: t, maintainAspectRatio: n },
      width: i,
      height: r,
      _aspectRatio: o
    } = this
    return be(t) ? (n && o ? o : r ? i / r : null) : t
  }
  get data() {
    return this.config.data
  }
  set data(t) {
    this.config.data = t
  }
  get options() {
    return this._options
  }
  set options(t) {
    this.config.options = t
  }
  _initialize() {
    return (
      this.notifyPlugins('beforeInit'),
      this.options.responsive ? this.resize() : lg(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins('afterInit'),
      this
    )
  }
  clear() {
    return rg(this.canvas, this.ctx), this
  }
  stop() {
    return An.stop(this), this
  }
  resize(t, n) {
    An.running(this) ? (this._resizeBeforeDraw = { width: t, height: n }) : this._resize(t, n)
  }
  _resize(t, n) {
    const i = this.options,
      r = this.canvas,
      o = i.maintainAspectRatio && this.aspectRatio,
      s = this.platform.getMaximumSize(r, t, n, o),
      a = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
      l = this.width ? 'resize' : 'attach'
    ;(this.width = s.width),
      (this.height = s.height),
      (this._aspectRatio = this.aspectRatio),
      lg(this, a, !0) &&
        (this.notifyPlugins('resize', { size: s }),
        Ee(i.onResize, [this, s], this),
        this.attached && this._doResize(l) && this.render())
  }
  ensureScalesHaveIDs() {
    const n = this.options.scales || {}
    xe(n, (i, r) => {
      i.id = r
    })
  }
  buildOrUpdateScales() {
    const t = this.options,
      n = t.scales,
      i = this.scales,
      r = Object.keys(i).reduce((s, a) => ((s[a] = !1), s), {})
    let o = []
    n &&
      (o = o.concat(
        Object.keys(n).map((s) => {
          const a = n[s],
            l = kd(s, a),
            u = l === 'r',
            c = l === 'x'
          return {
            options: a,
            dposition: u ? 'chartArea' : c ? 'bottom' : 'left',
            dtype: u ? 'radialLinear' : c ? 'category' : 'linear'
          }
        })
      )),
      xe(o, (s) => {
        const a = s.options,
          l = a.id,
          u = kd(l, a),
          c = ie(a.type, s.dtype)
        ;(a.position === void 0 || zg(a.position, u) !== zg(s.dposition)) &&
          (a.position = s.dposition),
          (r[l] = !0)
        let d = null
        if (l in i && i[l].type === c) d = i[l]
        else {
          const f = qn.getScale(c)
          ;(d = new f({ id: l, type: c, ctx: this.ctx, chart: this })), (i[d.id] = d)
        }
        d.init(a, t)
      }),
      xe(r, (s, a) => {
        s || delete i[a]
      }),
      xe(i, (s) => {
        tn.configure(this, s, s.options), tn.addBox(this, s)
      })
  }
  _updateMetasets() {
    const t = this._metasets,
      n = this.data.datasets.length,
      i = t.length
    if ((t.sort((r, o) => r.index - o.index), i > n)) {
      for (let r = n; r < i; ++r) this._destroyDatasetMeta(r)
      t.splice(n, i - n)
    }
    this._sortedMetasets = t.slice(0).sort(Ig('order', 'index'))
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: t,
      data: { datasets: n }
    } = this
    t.length > n.length && delete this._stacks,
      t.forEach((i, r) => {
        n.filter((o) => o === i._dataset).length === 0 && this._destroyDatasetMeta(r)
      })
  }
  buildOrUpdateControllers() {
    const t = [],
      n = this.data.datasets
    let i, r
    for (this._removeUnreferencedMetasets(), i = 0, r = n.length; i < r; i++) {
      const o = n[i]
      let s = this.getDatasetMeta(i)
      const a = o.type || this.config.type
      if (
        (s.type && s.type !== a && (this._destroyDatasetMeta(i), (s = this.getDatasetMeta(i))),
        (s.type = a),
        (s.indexAxis = o.indexAxis || Sd(a, this.options)),
        (s.order = o.order || 0),
        (s.index = i),
        (s.label = '' + o.label),
        (s.visible = this.isDatasetVisible(i)),
        s.controller)
      )
        s.controller.updateIndex(i), s.controller.linkScales()
      else {
        const l = qn.getController(a),
          { datasetElementType: u, dataElementType: c } = le.datasets[a]
        Object.assign(l.prototype, {
          dataElementType: qn.getElement(c),
          datasetElementType: u && qn.getElement(u)
        }),
          (s.controller = new l(this, i)),
          t.push(s.controller)
      }
    }
    return this._updateMetasets(), t
  }
  _resetElements() {
    xe(
      this.data.datasets,
      (t, n) => {
        this.getDatasetMeta(n).controller.reset()
      },
      this
    )
  }
  reset() {
    this._resetElements(), this.notifyPlugins('reset')
  }
  update(t) {
    const n = this.config
    n.update()
    const i = (this._options = n.createResolver(n.chartOptionScopes(), this.getContext())),
      r = (this._animationsDisabled = !i.animation)
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }) === !1)
    )
      return
    const o = this.buildOrUpdateControllers()
    this.notifyPlugins('beforeElementsUpdate')
    let s = 0
    for (let u = 0, c = this.data.datasets.length; u < c; u++) {
      const { controller: d } = this.getDatasetMeta(u),
        f = !r && o.indexOf(d) === -1
      d.buildOrUpdateElements(f), (s = Math.max(+d.getMaxOverflow(), s))
    }
    ;(s = this._minPadding = i.layout.autoPadding ? s : 0),
      this._updateLayout(s),
      r ||
        xe(o, (u) => {
          u.reset()
        }),
      this._updateDatasets(t),
      this.notifyPlugins('afterUpdate', { mode: t }),
      this._layers.sort(Ig('z', '_idx'))
    const { _active: a, _lastEvent: l } = this
    l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0), this.render()
  }
  _updateScales() {
    xe(this.scales, (t) => {
      tn.removeBox(this, t)
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales()
  }
  _checkEventBindings() {
    const t = this.options,
      n = new Set(Object.keys(this._listeners)),
      i = new Set(t.events)
    ;(!Yp(n, i) || !!this._responsiveListeners !== t.responsive) &&
      (this.unbindEvents(), this.bindEvents())
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this,
      n = this._getUniformDataChanges() || []
    for (const { method: i, start: r, count: o } of n) {
      const s = i === '_removeElements' ? -o : o
      SC(t, r, s)
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges
    if (!t || !t.length) return
    this._dataChanges = []
    const n = this.data.datasets.length,
      i = (o) =>
        new Set(t.filter((s) => s[0] === o).map((s, a) => a + ',' + s.splice(1).join(','))),
      r = i(0)
    for (let o = 1; o < n; o++) if (!Yp(r, i(o))) return
    return Array.from(r)
      .map((o) => o.split(','))
      .map((o) => ({ method: o[1], start: +o[2], count: +o[3] }))
  }
  _updateLayout(t) {
    if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return
    tn.update(this, this.width, this.height, t)
    const n = this.chartArea,
      i = n.width <= 0 || n.height <= 0
    ;(this._layers = []),
      xe(
        this.boxes,
        (r) => {
          ;(i && r.position === 'chartArea') ||
            (r.configure && r.configure(), this._layers.push(...r._layers()))
        },
        this
      ),
      this._layers.forEach((r, o) => {
        r._idx = o
      }),
      this.notifyPlugins('afterLayout')
  }
  _updateDatasets(t) {
    if (this.notifyPlugins('beforeDatasetsUpdate', { mode: t, cancelable: !0 }) !== !1) {
      for (let n = 0, i = this.data.datasets.length; n < i; ++n)
        this.getDatasetMeta(n).controller.configure()
      for (let n = 0, i = this.data.datasets.length; n < i; ++n)
        this._updateDataset(n, Pi(t) ? t({ datasetIndex: n }) : t)
      this.notifyPlugins('afterDatasetsUpdate', { mode: t })
    }
  }
  _updateDataset(t, n) {
    const i = this.getDatasetMeta(t),
      r = { meta: i, index: t, mode: n, cancelable: !0 }
    this.notifyPlugins('beforeDatasetUpdate', r) !== !1 &&
      (i.controller._update(n), (r.cancelable = !1), this.notifyPlugins('afterDatasetUpdate', r))
  }
  render() {
    this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
      (An.has(this)
        ? this.attached && !An.running(this) && An.start(this)
        : (this.draw(), Ag({ chart: this })))
  }
  draw() {
    let t
    if (this._resizeBeforeDraw) {
      const { width: i, height: r } = this._resizeBeforeDraw
      this._resize(i, r), (this._resizeBeforeDraw = null)
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
    )
      return
    const n = this._layers
    for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(this.chartArea)
    for (this._drawDatasets(); t < n.length; ++t) n[t].draw(this.chartArea)
    this.notifyPlugins('afterDraw')
  }
  _getSortedDatasetMetas(t) {
    const n = this._sortedMetasets,
      i = []
    let r, o
    for (r = 0, o = n.length; r < o; ++r) {
      const s = n[r]
      ;(!t || s.visible) && i.push(s)
    }
    return i
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0)
  }
  _drawDatasets() {
    if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1) return
    const t = this.getSortedVisibleDatasetMetas()
    for (let n = t.length - 1; n >= 0; --n) this._drawDataset(t[n])
    this.notifyPlugins('afterDatasetsDraw')
  }
  _drawDataset(t) {
    const n = this.ctx,
      i = t._clip,
      r = !i.disabled,
      o = this.chartArea,
      s = { meta: t, index: t.index, cancelable: !0 }
    this.notifyPlugins('beforeDatasetDraw', s) !== !1 &&
      (r &&
        Ff(n, {
          left: i.left === !1 ? 0 : o.left - i.left,
          right: i.right === !1 ? this.width : o.right + i.right,
          top: i.top === !1 ? 0 : o.top - i.top,
          bottom: i.bottom === !1 ? this.height : o.bottom + i.bottom
        }),
      t.controller.draw(),
      r && jf(n),
      (s.cancelable = !1),
      this.notifyPlugins('afterDatasetDraw', s))
  }
  isPointInArea(t) {
    return fs(t, this.chartArea, this._minPadding)
  }
  getElementsAtEventForMode(t, n, i, r) {
    const o = bk.modes[n]
    return typeof o == 'function' ? o(this, t, i, r) : []
  }
  getDatasetMeta(t) {
    const n = this.data.datasets[t],
      i = this._metasets
    let r = i.filter((o) => o && o._dataset === n).pop()
    return (
      r ||
        ((r = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (n && n.order) || 0,
          index: t,
          _dataset: n,
          _parsed: [],
          _sorted: !1
        }),
        i.push(r)),
      r
    )
  }
  getContext() {
    return this.$context || (this.$context = Ni(null, { chart: this, type: 'chart' }))
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length
  }
  isDatasetVisible(t) {
    const n = this.data.datasets[t]
    if (!n) return !1
    const i = this.getDatasetMeta(t)
    return typeof i.hidden == 'boolean' ? !i.hidden : !n.hidden
  }
  setDatasetVisibility(t, n) {
    const i = this.getDatasetMeta(t)
    i.hidden = !n
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t]
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t]
  }
  _updateVisibility(t, n, i) {
    const r = i ? 'show' : 'hide',
      o = this.getDatasetMeta(t),
      s = o.controller._resolveAnimations(void 0, r)
    an(n)
      ? ((o.data[n].hidden = !i), this.update())
      : (this.setDatasetVisibility(t, i),
        s.update(o, { visible: i }),
        this.update((a) => (a.datasetIndex === t ? r : void 0)))
  }
  hide(t, n) {
    this._updateVisibility(t, n, !1)
  }
  show(t, n) {
    this._updateVisibility(t, n, !0)
  }
  _destroyDatasetMeta(t) {
    const n = this._metasets[t]
    n && n.controller && n.controller._destroy(), delete this._metasets[t]
  }
  _stop() {
    let t, n
    for (this.stop(), An.remove(this), t = 0, n = this.data.datasets.length; t < n; ++t)
      this._destroyDatasetMeta(t)
  }
  destroy() {
    this.notifyPlugins('beforeDestroy')
    const { canvas: t, ctx: n } = this
    this._stop(),
      this.config.clearCache(),
      t &&
        (this.unbindEvents(),
        rg(t, n),
        this.platform.releaseContext(n),
        (this.canvas = null),
        (this.ctx = null)),
      this.notifyPlugins('destroy'),
      delete pl[this.id],
      this.notifyPlugins('afterDestroy')
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t)
  }
  bindEvents() {
    this.bindUserEvents(),
      this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0)
  }
  bindUserEvents() {
    const t = this._listeners,
      n = this.platform,
      i = (o, s) => {
        n.addEventListener(this, o, s), (t[o] = s)
      },
      r = (o, s, a) => {
        ;(o.offsetX = s), (o.offsetY = a), this._eventHandler(o)
      }
    xe(this.options.events, (o) => i(o, r))
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {})
    const t = this._responsiveListeners,
      n = this.platform,
      i = (l, u) => {
        n.addEventListener(this, l, u), (t[l] = u)
      },
      r = (l, u) => {
        t[l] && (n.removeEventListener(this, l, u), delete t[l])
      },
      o = (l, u) => {
        this.canvas && this.resize(l, u)
      }
    let s
    const a = () => {
      r('attach', a), (this.attached = !0), this.resize(), i('resize', o), i('detach', s)
    }
    ;(s = () => {
      ;(this.attached = !1), r('resize', o), this._stop(), this._resize(0, 0), i('attach', a)
    }),
      n.isAttached(this.canvas) ? a() : s()
  }
  unbindEvents() {
    xe(this._listeners, (t, n) => {
      this.platform.removeEventListener(this, n, t)
    }),
      (this._listeners = {}),
      xe(this._responsiveListeners, (t, n) => {
        this.platform.removeEventListener(this, n, t)
      }),
      (this._responsiveListeners = void 0)
  }
  updateHoverStyle(t, n, i) {
    const r = i ? 'set' : 'remove'
    let o, s, a, l
    for (
      n === 'dataset' &&
        ((o = this.getDatasetMeta(t[0].datasetIndex)),
        o.controller['_' + r + 'DatasetHoverStyle']()),
        a = 0,
        l = t.length;
      a < l;
      ++a
    ) {
      s = t[a]
      const u = s && this.getDatasetMeta(s.datasetIndex).controller
      u && u[r + 'HoverStyle'](s.element, s.datasetIndex, s.index)
    }
  }
  getActiveElements() {
    return this._active || []
  }
  setActiveElements(t) {
    const n = this._active || [],
      i = t.map(({ datasetIndex: o, index: s }) => {
        const a = this.getDatasetMeta(o)
        if (!a) throw new Error('No dataset found at index ' + o)
        return { datasetIndex: o, element: a.data[s], index: s }
      })
    !sl(i, n) && ((this._active = i), (this._lastEvent = null), this._updateHoverStyles(i, n))
  }
  notifyPlugins(t, n, i) {
    return this._plugins.notify(this, t, n, i)
  }
  _updateHoverStyles(t, n, i) {
    const r = this.options.hover,
      o = (l, u) =>
        l.filter((c) => !u.some((d) => c.datasetIndex === d.datasetIndex && c.index === d.index)),
      s = o(n, t),
      a = i ? t : o(t, n)
    s.length && this.updateHoverStyle(s, r.mode, !1),
      a.length && r.mode && this.updateHoverStyle(a, r.mode, !0)
  }
  _eventHandler(t, n) {
    const i = { event: t, replay: n, cancelable: !0, inChartArea: this.isPointInArea(t) },
      r = (s) => (s.options.events || this.options.events).includes(t.native.type)
    if (this.notifyPlugins('beforeEvent', i, r) === !1) return
    const o = this._handleEvent(t, n, i.inChartArea)
    return (
      (i.cancelable = !1),
      this.notifyPlugins('afterEvent', i, r),
      (o || i.changed) && this.render(),
      this
    )
  }
  _handleEvent(t, n, i) {
    const { _active: r = [], options: o } = this,
      s = n,
      a = this._getActiveElements(t, r, i, s),
      l = pS(t),
      u = kC(t, this._lastEvent, i, l)
    i &&
      ((this._lastEvent = null),
      Ee(o.onHover, [t, a, this], this),
      l && Ee(o.onClick, [t, a, this], this))
    const c = !sl(a, r)
    return (
      (c || n) && ((this._active = a), this._updateHoverStyles(a, r, n)), (this._lastEvent = u), c
    )
  }
  _getActiveElements(t, n, i, r) {
    if (t.type === 'mouseout') return []
    if (!i) return n
    const o = this.options.hover
    return this.getElementsAtEventForMode(t, o.mode, o, r)
  }
}
const Fg = () => xe(Os.instances, (e) => e._plugins.invalidate()),
  ti = !0
Object.defineProperties(Os, {
  defaults: { enumerable: ti, value: le },
  instances: { enumerable: ti, value: pl },
  overrides: { enumerable: ti, value: rr },
  registry: { enumerable: ti, value: qn },
  version: { enumerable: ti, value: xC },
  getChart: { enumerable: ti, value: xv },
  register: {
    enumerable: ti,
    value: (...e) => {
      qn.add(...e), Fg()
    }
  },
  unregister: {
    enumerable: ti,
    value: (...e) => {
      qn.remove(...e), Fg()
    }
  }
})
function bv(e, t, n) {
  const { startAngle: i, pixelMargin: r, x: o, y: s, outerRadius: a, innerRadius: l } = t
  let u = r / a
  e.beginPath(),
    e.arc(o, s, a, i - u, n + u),
    l > r ? ((u = r / l), e.arc(o, s, l, n + u, i - u, !0)) : e.arc(o, s, r, n + Ye, i - Ye),
    e.closePath(),
    e.clip()
}
function CC(e) {
  return Bf(e, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd'])
}
function EC(e, t, n, i) {
  const r = CC(e.options.borderRadius),
    o = (n - t) / 2,
    s = Math.min(o, (i * t) / 2),
    a = (l) => {
      const u = ((n - Math.min(o, l)) * i) / 2
      return wt(l, 0, Math.min(o, u))
    }
  return {
    outerStart: a(r.outerStart),
    outerEnd: a(r.outerEnd),
    innerStart: wt(r.innerStart, 0, s),
    innerEnd: wt(r.innerEnd, 0, s)
  }
}
function mr(e, t, n, i) {
  return { x: n + e * Math.cos(t), y: i + e * Math.sin(t) }
}
function Cd(e, t, n, i, r) {
  const { x: o, y: s, startAngle: a, pixelMargin: l, innerRadius: u } = t,
    c = Math.max(t.outerRadius + i + n - l, 0),
    d = u > 0 ? u + i + n + l : 0
  let f = 0
  const h = r - a
  if (i) {
    const X = u > 0 ? u - i : 0,
      ue = c > 0 ? c - i : 0,
      C = (X + ue) / 2,
      M = C !== 0 ? (h * C) / (C + i) : h
    f = (h - M) / 2
  }
  const p = Math.max(0.001, h * c - n / Fe) / c,
    y = (h - p) / 2,
    _ = a + y + f,
    g = r - y - f,
    { outerStart: m, outerEnd: v, innerStart: x, innerEnd: b } = EC(t, d, c, g - _),
    O = c - m,
    k = c - v,
    P = _ + m / O,
    L = g - v / k,
    I = d + x,
    N = d + b,
    Y = _ + x / I,
    S = g - b / N
  if ((e.beginPath(), e.arc(o, s, c, P, L), v > 0)) {
    const X = mr(k, L, o, s)
    e.arc(X.x, X.y, v, L, g + Ye)
  }
  const Z = mr(N, g, o, s)
  if ((e.lineTo(Z.x, Z.y), b > 0)) {
    const X = mr(N, S, o, s)
    e.arc(X.x, X.y, b, g + Ye, S + Math.PI)
  }
  if ((e.arc(o, s, d, g - b / d, _ + x / d, !0), x > 0)) {
    const X = mr(I, Y, o, s)
    e.arc(X.x, X.y, x, Y + Math.PI, _ - Ye)
  }
  const Q = mr(O, _, o, s)
  if ((e.lineTo(Q.x, Q.y), m > 0)) {
    const X = mr(O, P, o, s)
    e.arc(X.x, X.y, m, _ - Ye, P)
  }
  e.closePath()
}
function PC(e, t, n, i) {
  const { fullCircles: r, startAngle: o, circumference: s } = t
  let a = t.endAngle
  if (r) {
    Cd(e, t, n, i, o + Me)
    for (let l = 0; l < r; ++l) e.fill()
    isNaN(s) || ((a = o + (s % Me)), s % Me === 0 && (a += Me))
  }
  return Cd(e, t, n, i, a), e.fill(), a
}
function MC(e, t, n) {
  const { x: i, y: r, startAngle: o, pixelMargin: s, fullCircles: a } = t,
    l = Math.max(t.outerRadius - s, 0),
    u = t.innerRadius + s
  let c
  for (n && bv(e, t, o + Me), e.beginPath(), e.arc(i, r, u, o + Me, o, !0), c = 0; c < a; ++c)
    e.stroke()
  for (e.beginPath(), e.arc(i, r, l, o, o + Me), c = 0; c < a; ++c) e.stroke()
}
function OC(e, t, n, i, r) {
  const { options: o } = t,
    { borderWidth: s, borderJoinStyle: a } = o,
    l = o.borderAlign === 'inner'
  !s ||
    (l
      ? ((e.lineWidth = s * 2), (e.lineJoin = a || 'round'))
      : ((e.lineWidth = s), (e.lineJoin = a || 'bevel')),
    t.fullCircles && MC(e, t, l),
    l && bv(e, t, r),
    Cd(e, t, n, i, r),
    e.stroke())
}
class Vl extends bn {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      t && Object.assign(this, t)
  }
  inRange(t, n, i) {
    const r = this.getProps(['x', 'y'], i),
      { angle: o, distance: s } = Hy(r, { x: t, y: n }),
      {
        startAngle: a,
        endAngle: l,
        innerRadius: u,
        outerRadius: c,
        circumference: d
      } = this.getProps(
        ['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'],
        i
      ),
      f = this.options.spacing / 2,
      p = ie(d, l - a) >= Me || ds(o, a, l),
      y = di(s, u + f, c + f)
    return p && y
  }
  getCenterPoint(t) {
    const {
        x: n,
        y: i,
        startAngle: r,
        endAngle: o,
        innerRadius: s,
        outerRadius: a
      } = this.getProps(
        ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'],
        t
      ),
      { offset: l, spacing: u } = this.options,
      c = (r + o) / 2,
      d = (s + a + u + l) / 2
    return { x: n + Math.cos(c) * d, y: i + Math.sin(c) * d }
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t)
  }
  draw(t) {
    const { options: n, circumference: i } = this,
      r = (n.offset || 0) / 2,
      o = (n.spacing || 0) / 2
    if (
      ((this.pixelMargin = n.borderAlign === 'inner' ? 0.33 : 0),
      (this.fullCircles = i > Me ? Math.floor(i / Me) : 0),
      i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return
    t.save()
    let s = 0
    if (r) {
      s = r / 2
      const l = (this.startAngle + this.endAngle) / 2
      t.translate(Math.cos(l) * s, Math.sin(l) * s), this.circumference >= Fe && (s = r)
    }
    ;(t.fillStyle = n.backgroundColor), (t.strokeStyle = n.borderColor)
    const a = PC(t, this, s, o)
    OC(t, this, s, o, a), t.restore()
  }
}
Vl.id = 'arc'
Vl.defaults = {
  borderAlign: 'center',
  borderColor: '#fff',
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0
}
Vl.defaultRoutes = { backgroundColor: 'backgroundColor' }
function wv(e, t, n = t) {
  ;(e.lineCap = ie(n.borderCapStyle, t.borderCapStyle)),
    e.setLineDash(ie(n.borderDash, t.borderDash)),
    (e.lineDashOffset = ie(n.borderDashOffset, t.borderDashOffset)),
    (e.lineJoin = ie(n.borderJoinStyle, t.borderJoinStyle)),
    (e.lineWidth = ie(n.borderWidth, t.borderWidth)),
    (e.strokeStyle = ie(n.borderColor, t.borderColor))
}
function TC(e, t, n) {
  e.lineTo(n.x, n.y)
}
function LC(e) {
  return e.stepped ? qS : e.tension || e.cubicInterpolationMode === 'monotone' ? YS : TC
}
function Sv(e, t, n = {}) {
  const i = e.length,
    { start: r = 0, end: o = i - 1 } = n,
    { start: s, end: a } = t,
    l = Math.max(r, s),
    u = Math.min(o, a),
    c = (r < s && o < s) || (r > a && o > a)
  return { count: i, start: l, loop: t.loop, ilen: u < l && !c ? i + u - l : u - l }
}
function RC(e, t, n, i) {
  const { points: r, options: o } = t,
    { count: s, start: a, loop: l, ilen: u } = Sv(r, n, i),
    c = LC(o)
  let { move: d = !0, reverse: f } = i || {},
    h,
    p,
    y
  for (h = 0; h <= u; ++h)
    (p = r[(a + (f ? u - h : h)) % s]),
      !p.skip && (d ? (e.moveTo(p.x, p.y), (d = !1)) : c(e, y, p, f, o.stepped), (y = p))
  return l && ((p = r[(a + (f ? u : 0)) % s]), c(e, y, p, f, o.stepped)), !!l
}
function NC(e, t, n, i) {
  const r = t.points,
    { count: o, start: s, ilen: a } = Sv(r, n, i),
    { move: l = !0, reverse: u } = i || {}
  let c = 0,
    d = 0,
    f,
    h,
    p,
    y,
    _,
    g
  const m = (x) => (s + (u ? a - x : x)) % o,
    v = () => {
      y !== _ && (e.lineTo(c, _), e.lineTo(c, y), e.lineTo(c, g))
    }
  for (l && ((h = r[m(0)]), e.moveTo(h.x, h.y)), f = 0; f <= a; ++f) {
    if (((h = r[m(f)]), h.skip)) continue
    const x = h.x,
      b = h.y,
      O = x | 0
    O === p
      ? (b < y ? (y = b) : b > _ && (_ = b), (c = (d * c + x) / ++d))
      : (v(), e.lineTo(x, b), (p = O), (d = 0), (y = _ = b)),
      (g = b)
  }
  v()
}
function Ed(e) {
  const t = e.options,
    n = t.borderDash && t.borderDash.length
  return !e._decimated &&
    !e._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== 'monotone' &&
    !t.stepped &&
    !n
    ? NC
    : RC
}
function DC(e) {
  return e.stepped ? P2 : e.tension || e.cubicInterpolationMode === 'monotone' ? M2 : Hi
}
function zC(e, t, n, i) {
  let r = t._path
  r || ((r = t._path = new Path2D()), t.path(r, n, i) && r.closePath()),
    wv(e, t.options),
    e.stroke(r)
}
function IC(e, t, n, i) {
  const { segments: r, options: o } = t,
    s = Ed(t)
  for (const a of r)
    wv(e, o, a.style),
      e.beginPath(),
      s(e, t, a, { start: n, end: n + i - 1 }) && e.closePath(),
      e.stroke()
}
const AC = typeof Path2D == 'function'
function FC(e, t, n, i) {
  AC && !t.options.segment ? zC(e, t, n, i) : IC(e, t, n, i)
}
class Ts extends bn {
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t)
  }
  updateControlPoints(t, n) {
    const i = this.options
    if (
      (i.tension || i.cubicInterpolationMode === 'monotone') &&
      !i.stepped &&
      !this._pointsUpdated
    ) {
      const r = i.spanGaps ? this._loop : this._fullLoop
      _2(this._points, i, t, r, n), (this._pointsUpdated = !0)
    }
  }
  set points(t) {
    ;(this._points = t), delete this._segments, delete this._path, (this._pointsUpdated = !1)
  }
  get points() {
    return this._points
  }
  get segments() {
    return this._segments || (this._segments = A2(this, this.options.segment))
  }
  first() {
    const t = this.segments,
      n = this.points
    return t.length && n[t[0].start]
  }
  last() {
    const t = this.segments,
      n = this.points,
      i = t.length
    return i && n[t[i - 1].end]
  }
  interpolate(t, n) {
    const i = this.options,
      r = t[n],
      o = this.points,
      s = D2(this, { property: n, start: r, end: r })
    if (!s.length) return
    const a = [],
      l = DC(i)
    let u, c
    for (u = 0, c = s.length; u < c; ++u) {
      const { start: d, end: f } = s[u],
        h = o[d],
        p = o[f]
      if (h === p) {
        a.push(h)
        continue
      }
      const y = Math.abs((r - h[n]) / (p[n] - h[n])),
        _ = l(h, p, y, i.stepped)
      ;(_[n] = t[n]), a.push(_)
    }
    return a.length === 1 ? a[0] : a
  }
  pathSegment(t, n, i) {
    return Ed(this)(t, this, n, i)
  }
  path(t, n, i) {
    const r = this.segments,
      o = Ed(this)
    let s = this._loop
    ;(n = n || 0), (i = i || this.points.length - n)
    for (const a of r) s &= o(t, this, a, { start: n, end: n + i - 1 })
    return !!s
  }
  draw(t, n, i, r) {
    const o = this.options || {}
    ;(this.points || []).length && o.borderWidth && (t.save(), FC(t, this, i, r), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0))
  }
}
Ts.id = 'line'
Ts.defaults = {
  borderCapStyle: 'butt',
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: 'miter',
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: 'default',
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0
}
Ts.defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }
Ts.descriptors = { _scriptable: !0, _indexable: (e) => e !== 'borderDash' && e !== 'fill' }
function jg(e, t, n, i) {
  const r = e.options,
    { [n]: o } = e.getProps([n], i)
  return Math.abs(t - o) < r.radius + r.hitRadius
}
class Ul extends bn {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      t && Object.assign(this, t)
  }
  inRange(t, n, i) {
    const r = this.options,
      { x: o, y: s } = this.getProps(['x', 'y'], i)
    return Math.pow(t - o, 2) + Math.pow(n - s, 2) < Math.pow(r.hitRadius + r.radius, 2)
  }
  inXRange(t, n) {
    return jg(this, t, 'x', n)
  }
  inYRange(t, n) {
    return jg(this, t, 'y', n)
  }
  getCenterPoint(t) {
    const { x: n, y: i } = this.getProps(['x', 'y'], t)
    return { x: n, y: i }
  }
  size(t) {
    t = t || this.options || {}
    let n = t.radius || 0
    n = Math.max(n, (n && t.hoverRadius) || 0)
    const i = (n && t.borderWidth) || 0
    return (n + i) * 2
  }
  draw(t, n) {
    const i = this.options
    this.skip ||
      i.radius < 0.1 ||
      !fs(this, n, this.size(i) / 2) ||
      ((t.strokeStyle = i.borderColor),
      (t.lineWidth = i.borderWidth),
      (t.fillStyle = i.backgroundColor),
      dl(t, i, this.x, this.y))
  }
  getRange() {
    const t = this.options || {}
    return t.radius + t.hitRadius
  }
}
Ul.id = 'point'
Ul.defaults = {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: 'circle',
  radius: 3,
  rotation: 0
}
Ul.defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }
function kv(e, t) {
  const {
    x: n,
    y: i,
    base: r,
    width: o,
    height: s
  } = e.getProps(['x', 'y', 'base', 'width', 'height'], t)
  let a, l, u, c, d
  return (
    e.horizontal
      ? ((d = s / 2), (a = Math.min(n, r)), (l = Math.max(n, r)), (u = i - d), (c = i + d))
      : ((d = o / 2), (a = n - d), (l = n + d), (u = Math.min(i, r)), (c = Math.max(i, r))),
    { left: a, top: u, right: l, bottom: c }
  )
}
function hi(e, t, n, i) {
  return e ? 0 : wt(t, n, i)
}
function jC(e, t, n) {
  const i = e.options.borderWidth,
    r = e.borderSkipped,
    o = Qy(i)
  return {
    t: hi(r.top, o.top, 0, n),
    r: hi(r.right, o.right, 0, t),
    b: hi(r.bottom, o.bottom, 0, n),
    l: hi(r.left, o.left, 0, t)
  }
}
function BC(e, t, n) {
  const { enableBorderRadius: i } = e.getProps(['enableBorderRadius']),
    r = e.options.borderRadius,
    o = Zi(r),
    s = Math.min(t, n),
    a = e.borderSkipped,
    l = i || ge(r)
  return {
    topLeft: hi(!l || a.top || a.left, o.topLeft, 0, s),
    topRight: hi(!l || a.top || a.right, o.topRight, 0, s),
    bottomLeft: hi(!l || a.bottom || a.left, o.bottomLeft, 0, s),
    bottomRight: hi(!l || a.bottom || a.right, o.bottomRight, 0, s)
  }
}
function $C(e) {
  const t = kv(e),
    n = t.right - t.left,
    i = t.bottom - t.top,
    r = jC(e, n / 2, i / 2),
    o = BC(e, n / 2, i / 2)
  return {
    outer: { x: t.left, y: t.top, w: n, h: i, radius: o },
    inner: {
      x: t.left + r.l,
      y: t.top + r.t,
      w: n - r.l - r.r,
      h: i - r.t - r.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(r.t, r.l)),
        topRight: Math.max(0, o.topRight - Math.max(r.t, r.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(r.b, r.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(r.b, r.r))
      }
    }
  }
}
function cc(e, t, n, i) {
  const r = t === null,
    o = n === null,
    a = e && !(r && o) && kv(e, i)
  return a && (r || di(t, a.left, a.right)) && (o || di(n, a.top, a.bottom))
}
function HC(e) {
  return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight
}
function WC(e, t) {
  e.rect(t.x, t.y, t.w, t.h)
}
function dc(e, t, n = {}) {
  const i = e.x !== n.x ? -t : 0,
    r = e.y !== n.y ? -t : 0,
    o = (e.x + e.w !== n.x + n.w ? t : 0) - i,
    s = (e.y + e.h !== n.y + n.h ? t : 0) - r
  return { x: e.x + i, y: e.y + r, w: e.w + o, h: e.h + s, radius: e.radius }
}
class ql extends bn {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t)
  }
  draw(t) {
    const {
        inflateAmount: n,
        options: { borderColor: i, backgroundColor: r }
      } = this,
      { inner: o, outer: s } = $C(this),
      a = HC(s.radius) ? hs : WC
    t.save(),
      (s.w !== o.w || s.h !== o.h) &&
        (t.beginPath(),
        a(t, dc(s, n, o)),
        t.clip(),
        a(t, dc(o, -n, s)),
        (t.fillStyle = i),
        t.fill('evenodd')),
      t.beginPath(),
      a(t, dc(o, n)),
      (t.fillStyle = r),
      t.fill(),
      t.restore()
  }
  inRange(t, n, i) {
    return cc(this, t, n, i)
  }
  inXRange(t, n) {
    return cc(this, t, null, n)
  }
  inYRange(t, n) {
    return cc(this, null, t, n)
  }
  getCenterPoint(t) {
    const {
      x: n,
      y: i,
      base: r,
      horizontal: o
    } = this.getProps(['x', 'y', 'base', 'horizontal'], t)
    return { x: o ? (n + r) / 2 : n, y: o ? i : (i + r) / 2 }
  }
  getRange(t) {
    return t === 'x' ? this.width / 2 : this.height / 2
  }
}
ql.id = 'bar'
ql.defaults = {
  borderSkipped: 'start',
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: 'auto',
  pointStyle: void 0
}
ql.defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }
const Bg = (e, t) => {
    let { boxHeight: n = t, boxWidth: i = t } = e
    return (
      e.usePointStyle && ((n = Math.min(n, t)), (i = Math.min(i, t))),
      { boxWidth: i, boxHeight: n, itemHeight: Math.max(t, n) }
    )
  },
  VC = (e, t) =>
    e !== null && t !== null && e.datasetIndex === t.datasetIndex && e.index === t.index
class $g extends bn {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0)
  }
  update(t, n, i) {
    ;(this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = i),
      this.setDimensions(),
      this.buildLabels(),
      this.fit()
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth), (this.left = this._margins.left), (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height))
  }
  buildLabels() {
    const t = this.options.labels || {}
    let n = Ee(t.generateLabels, [this.chart], this) || []
    t.filter && (n = n.filter((i) => t.filter(i, this.chart.data))),
      t.sort && (n = n.sort((i, r) => t.sort(i, r, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n)
  }
  fit() {
    const { options: t, ctx: n } = this
    if (!t.display) {
      this.width = this.height = 0
      return
    }
    const i = t.labels,
      r = it(i.font),
      o = r.size,
      s = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: l } = Bg(i, o)
    let u, c
    ;(n.font = r.string),
      this.isHorizontal()
        ? ((u = this.maxWidth), (c = this._fitRows(s, o, a, l) + 10))
        : ((c = this.maxHeight), (u = this._fitCols(s, o, a, l) + 10)),
      (this.width = Math.min(u, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(c, t.maxHeight || this.maxHeight))
  }
  _fitRows(t, n, i, r) {
    const {
        ctx: o,
        maxWidth: s,
        options: {
          labels: { padding: a }
        }
      } = this,
      l = (this.legendHitBoxes = []),
      u = (this.lineWidths = [0]),
      c = r + a
    let d = t
    ;(o.textAlign = 'left'), (o.textBaseline = 'middle')
    let f = -1,
      h = -c
    return (
      this.legendItems.forEach((p, y) => {
        const _ = i + n / 2 + o.measureText(p.text).width
        ;(y === 0 || u[u.length - 1] + _ + 2 * a > s) &&
          ((d += c), (u[u.length - (y > 0 ? 0 : 1)] = 0), (h += c), f++),
          (l[y] = { left: 0, top: h, row: f, width: _, height: r }),
          (u[u.length - 1] += _ + a)
      }),
      d
    )
  }
  _fitCols(t, n, i, r) {
    const {
        ctx: o,
        maxHeight: s,
        options: {
          labels: { padding: a }
        }
      } = this,
      l = (this.legendHitBoxes = []),
      u = (this.columnSizes = []),
      c = s - t
    let d = a,
      f = 0,
      h = 0,
      p = 0,
      y = 0
    return (
      this.legendItems.forEach((_, g) => {
        const m = i + n / 2 + o.measureText(_.text).width
        g > 0 &&
          h + r + 2 * a > c &&
          ((d += f + a), u.push({ width: f, height: h }), (p += f + a), y++, (f = h = 0)),
          (l[g] = { left: p, top: h, col: y, width: m, height: r }),
          (f = Math.max(f, m)),
          (h += r + a)
      }),
      (d += f),
      u.push({ width: f, height: h }),
      d
    )
  }
  adjustHitBoxes() {
    if (!this.options.display) return
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: n,
        options: {
          align: i,
          labels: { padding: r },
          rtl: o
        }
      } = this,
      s = zr(o, this.left, this.width)
    if (this.isHorizontal()) {
      let a = 0,
        l = xt(i, this.left + r, this.right - this.lineWidths[a])
      for (const u of n)
        a !== u.row && ((a = u.row), (l = xt(i, this.left + r, this.right - this.lineWidths[a]))),
          (u.top += this.top + t + r),
          (u.left = s.leftForLtr(s.x(l), u.width)),
          (l += u.width + r)
    } else {
      let a = 0,
        l = xt(i, this.top + t + r, this.bottom - this.columnSizes[a].height)
      for (const u of n)
        u.col !== a &&
          ((a = u.col), (l = xt(i, this.top + t + r, this.bottom - this.columnSizes[a].height))),
          (u.top = l),
          (u.left += this.left + r),
          (u.left = s.leftForLtr(s.x(u.left), u.width)),
          (l += u.height + r)
    }
  }
  isHorizontal() {
    return this.options.position === 'top' || this.options.position === 'bottom'
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx
      Ff(t, this), this._draw(), jf(t)
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: i, ctx: r } = this,
      { align: o, labels: s } = t,
      a = le.color,
      l = zr(t.rtl, this.left, this.width),
      u = it(s.font),
      { color: c, padding: d } = s,
      f = u.size,
      h = f / 2
    let p
    this.drawTitle(),
      (r.textAlign = l.textAlign('left')),
      (r.textBaseline = 'middle'),
      (r.lineWidth = 0.5),
      (r.font = u.string)
    const { boxWidth: y, boxHeight: _, itemHeight: g } = Bg(s, f),
      m = function (k, P, L) {
        if (isNaN(y) || y <= 0 || isNaN(_) || _ < 0) return
        r.save()
        const I = ie(L.lineWidth, 1)
        if (
          ((r.fillStyle = ie(L.fillStyle, a)),
          (r.lineCap = ie(L.lineCap, 'butt')),
          (r.lineDashOffset = ie(L.lineDashOffset, 0)),
          (r.lineJoin = ie(L.lineJoin, 'miter')),
          (r.lineWidth = I),
          (r.strokeStyle = ie(L.strokeStyle, a)),
          r.setLineDash(ie(L.lineDash, [])),
          s.usePointStyle)
        ) {
          const N = {
              radius: (y * Math.SQRT2) / 2,
              pointStyle: L.pointStyle,
              rotation: L.rotation,
              borderWidth: I
            },
            Y = l.xPlus(k, y / 2),
            S = P + h
          dl(r, N, Y, S)
        } else {
          const N = P + Math.max((f - _) / 2, 0),
            Y = l.leftForLtr(k, y),
            S = Zi(L.borderRadius)
          r.beginPath(),
            Object.values(S).some((Z) => Z !== 0)
              ? hs(r, { x: Y, y: N, w: y, h: _, radius: S })
              : r.rect(Y, N, y, _),
            r.fill(),
            I !== 0 && r.stroke()
        }
        r.restore()
      },
      v = function (k, P, L) {
        or(r, L.text, k, P + g / 2, u, {
          strikethrough: L.hidden,
          textAlign: l.textAlign(L.textAlign)
        })
      },
      x = this.isHorizontal(),
      b = this._computeTitleHeight()
    x
      ? (p = { x: xt(o, this.left + d, this.right - i[0]), y: this.top + d + b, line: 0 })
      : (p = { x: this.left + d, y: xt(o, this.top + b + d, this.bottom - n[0].height), line: 0 }),
      rv(this.ctx, t.textDirection)
    const O = g + d
    this.legendItems.forEach((k, P) => {
      ;(r.strokeStyle = k.fontColor || c), (r.fillStyle = k.fontColor || c)
      const L = r.measureText(k.text).width,
        I = l.textAlign(k.textAlign || (k.textAlign = s.textAlign)),
        N = y + h + L
      let Y = p.x,
        S = p.y
      l.setWidth(this.width),
        x
          ? P > 0 &&
            Y + N + d > this.right &&
            ((S = p.y += O), p.line++, (Y = p.x = xt(o, this.left + d, this.right - i[p.line])))
          : P > 0 &&
            S + O > this.bottom &&
            ((Y = p.x = Y + n[p.line].width + d),
            p.line++,
            (S = p.y = xt(o, this.top + b + d, this.bottom - n[p.line].height)))
      const Z = l.x(Y)
      m(Z, S, k),
        (Y = aS(I, Y + y + h, x ? Y + N : this.right, t.rtl)),
        v(l.x(Y), S, k),
        x ? (p.x += N + d) : (p.y += O)
    }),
      ov(this.ctx, t.textDirection)
  }
  drawTitle() {
    const t = this.options,
      n = t.title,
      i = it(n.font),
      r = kt(n.padding)
    if (!n.display) return
    const o = zr(t.rtl, this.left, this.width),
      s = this.ctx,
      a = n.position,
      l = i.size / 2,
      u = r.top + l
    let c,
      d = this.left,
      f = this.width
    if (this.isHorizontal())
      (f = Math.max(...this.lineWidths)), (c = this.top + u), (d = xt(t.align, d, this.right - f))
    else {
      const p = this.columnSizes.reduce((y, _) => Math.max(y, _.height), 0)
      c = u + xt(t.align, this.top, this.bottom - p - t.labels.padding - this._computeTitleHeight())
    }
    const h = xt(a, d, d + f)
    ;(s.textAlign = o.textAlign(Rf(a))),
      (s.textBaseline = 'middle'),
      (s.strokeStyle = n.color),
      (s.fillStyle = n.color),
      (s.font = i.string),
      or(s, n.text, h, c, i)
  }
  _computeTitleHeight() {
    const t = this.options.title,
      n = it(t.font),
      i = kt(t.padding)
    return t.display ? n.lineHeight + i.height : 0
  }
  _getLegendItemAt(t, n) {
    let i, r, o
    if (di(t, this.left, this.right) && di(n, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
        if (((r = o[i]), di(t, r.left, r.left + r.width) && di(n, r.top, r.top + r.height)))
          return this.legendItems[i]
    }
    return null
  }
  handleEvent(t) {
    const n = this.options
    if (!UC(t.type, n)) return
    const i = this._getLegendItemAt(t.x, t.y)
    if (t.type === 'mousemove' || t.type === 'mouseout') {
      const r = this._hoveredItem,
        o = VC(r, i)
      r && !o && Ee(n.onLeave, [t, r, this], this),
        (this._hoveredItem = i),
        i && !o && Ee(n.onHover, [t, i, this], this)
    } else i && Ee(n.onClick, [t, i, this], this)
  }
}
function UC(e, t) {
  return !!(
    ((e === 'mousemove' || e === 'mouseout') && (t.onHover || t.onLeave)) ||
    (t.onClick && (e === 'click' || e === 'mouseup'))
  )
}
var qC = {
  id: 'legend',
  _element: $g,
  start(e, t, n) {
    const i = (e.legend = new $g({ ctx: e.ctx, options: n, chart: e }))
    tn.configure(e, i, n), tn.addBox(e, i)
  },
  stop(e) {
    tn.removeBox(e, e.legend), delete e.legend
  },
  beforeUpdate(e, t, n) {
    const i = e.legend
    tn.configure(e, i, n), (i.options = n)
  },
  afterUpdate(e) {
    const t = e.legend
    t.buildLabels(), t.adjustHitBoxes()
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event)
  },
  defaults: {
    display: !0,
    position: 'top',
    align: 'center',
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, n) {
      const i = t.datasetIndex,
        r = n.chart
      r.isDatasetVisible(i) ? (r.hide(i), (t.hidden = !0)) : (r.show(i), (t.hidden = !1))
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets,
          {
            labels: { usePointStyle: n, pointStyle: i, textAlign: r, color: o }
          } = e.legend.options
        return e._getSortedDatasetMetas().map((s) => {
          const a = s.controller.getStyle(n ? 0 : void 0),
            l = kt(a.borderWidth)
          return {
            text: t[s.index].label,
            fillStyle: a.backgroundColor,
            fontColor: o,
            hidden: !s.visible,
            lineCap: a.borderCapStyle,
            lineDash: a.borderDash,
            lineDashOffset: a.borderDashOffset,
            lineJoin: a.borderJoinStyle,
            lineWidth: (l.width + l.height) / 4,
            strokeStyle: a.borderColor,
            pointStyle: i || a.pointStyle,
            rotation: a.rotation,
            textAlign: r || a.textAlign,
            borderRadius: 0,
            datasetIndex: s.index
          }
        }, this)
      }
    },
    title: { color: (e) => e.chart.options.color, display: !1, position: 'center', text: '' }
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith('on'),
    labels: { _scriptable: (e) => !['generateLabels', 'filter', 'sort'].includes(e) }
  }
}
class Cv extends bn {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0)
  }
  update(t, n) {
    const i = this.options
    if (((this.left = 0), (this.top = 0), !i.display)) {
      this.width = this.height = this.right = this.bottom = 0
      return
    }
    ;(this.width = this.right = t), (this.height = this.bottom = n)
    const r = Ne(i.text) ? i.text.length : 1
    this._padding = kt(i.padding)
    const o = r * it(i.font).lineHeight + this._padding.height
    this.isHorizontal() ? (this.height = o) : (this.width = o)
  }
  isHorizontal() {
    const t = this.options.position
    return t === 'top' || t === 'bottom'
  }
  _drawArgs(t) {
    const { top: n, left: i, bottom: r, right: o, options: s } = this,
      a = s.align
    let l = 0,
      u,
      c,
      d
    return (
      this.isHorizontal()
        ? ((c = xt(a, i, o)), (d = n + t), (u = o - i))
        : (s.position === 'left'
            ? ((c = i + t), (d = xt(a, r, n)), (l = Fe * -0.5))
            : ((c = o - t), (d = xt(a, n, r)), (l = Fe * 0.5)),
          (u = r - n)),
      { titleX: c, titleY: d, maxWidth: u, rotation: l }
    )
  }
  draw() {
    const t = this.ctx,
      n = this.options
    if (!n.display) return
    const i = it(n.font),
      o = i.lineHeight / 2 + this._padding.top,
      { titleX: s, titleY: a, maxWidth: l, rotation: u } = this._drawArgs(o)
    or(t, n.text, 0, 0, i, {
      color: n.color,
      maxWidth: l,
      rotation: u,
      textAlign: Rf(n.align),
      textBaseline: 'middle',
      translation: [s, a]
    })
  }
}
function YC(e, t) {
  const n = new Cv({ ctx: e.ctx, options: t, chart: e })
  tn.configure(e, n, t), tn.addBox(e, n), (e.titleBlock = n)
}
var QC = {
  id: 'title',
  _element: Cv,
  start(e, t, n) {
    YC(e, n)
  },
  stop(e) {
    const t = e.titleBlock
    tn.removeBox(e, t), delete e.titleBlock
  },
  beforeUpdate(e, t, n) {
    const i = e.titleBlock
    tn.configure(e, i, n), (i.options = n)
  },
  defaults: {
    align: 'center',
    display: !1,
    font: { weight: 'bold' },
    fullSize: !0,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2e3
  },
  defaultRoutes: { color: 'color' },
  descriptors: { _scriptable: !0, _indexable: !1 }
}
const Vo = {
  average(e) {
    if (!e.length) return !1
    let t,
      n,
      i = 0,
      r = 0,
      o = 0
    for (t = 0, n = e.length; t < n; ++t) {
      const s = e[t].element
      if (s && s.hasValue()) {
        const a = s.tooltipPosition()
        ;(i += a.x), (r += a.y), ++o
      }
    }
    return { x: i / o, y: r / o }
  },
  nearest(e, t) {
    if (!e.length) return !1
    let n = t.x,
      i = t.y,
      r = Number.POSITIVE_INFINITY,
      o,
      s,
      a
    for (o = 0, s = e.length; o < s; ++o) {
      const l = e[o].element
      if (l && l.hasValue()) {
        const u = l.getCenterPoint(),
          c = _d(t, u)
        c < r && ((r = c), (a = l))
      }
    }
    if (a) {
      const l = a.tooltipPosition()
      ;(n = l.x), (i = l.y)
    }
    return { x: n, y: i }
  }
}
function Sn(e, t) {
  return t && (Ne(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
}
function Fn(e) {
  return (typeof e == 'string' || e instanceof String) &&
    e.indexOf(`
`) > -1
    ? e.split(`
`)
    : e
}
function XC(e, t) {
  const { element: n, datasetIndex: i, index: r } = t,
    o = e.getDatasetMeta(i).controller,
    { label: s, value: a } = o.getLabelAndValue(r)
  return {
    chart: e,
    label: s,
    parsed: o.getParsed(r),
    raw: e.data.datasets[i].data[r],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: r,
    datasetIndex: i,
    element: n
  }
}
function Hg(e, t) {
  const n = e.chart.ctx,
    { body: i, footer: r, title: o } = e,
    { boxWidth: s, boxHeight: a } = t,
    l = it(t.bodyFont),
    u = it(t.titleFont),
    c = it(t.footerFont),
    d = o.length,
    f = r.length,
    h = i.length,
    p = kt(t.padding)
  let y = p.height,
    _ = 0,
    g = i.reduce((x, b) => x + b.before.length + b.lines.length + b.after.length, 0)
  if (
    ((g += e.beforeBody.length + e.afterBody.length),
    d && (y += d * u.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom),
    g)
  ) {
    const x = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight
    y += h * x + (g - h) * l.lineHeight + (g - 1) * t.bodySpacing
  }
  f && (y += t.footerMarginTop + f * c.lineHeight + (f - 1) * t.footerSpacing)
  let m = 0
  const v = function (x) {
    _ = Math.max(_, n.measureText(x).width + m)
  }
  return (
    n.save(),
    (n.font = u.string),
    xe(e.title, v),
    (n.font = l.string),
    xe(e.beforeBody.concat(e.afterBody), v),
    (m = t.displayColors ? s + 2 + t.boxPadding : 0),
    xe(i, (x) => {
      xe(x.before, v), xe(x.lines, v), xe(x.after, v)
    }),
    (m = 0),
    (n.font = c.string),
    xe(e.footer, v),
    n.restore(),
    (_ += p.width),
    { width: _, height: y }
  )
}
function KC(e, t) {
  const { y: n, height: i } = t
  return n < i / 2 ? 'top' : n > e.height - i / 2 ? 'bottom' : 'center'
}
function GC(e, t, n, i) {
  const { x: r, width: o } = i,
    s = n.caretSize + n.caretPadding
  if ((e === 'left' && r + o + s > t.width) || (e === 'right' && r - o - s < 0)) return !0
}
function ZC(e, t, n, i) {
  const { x: r, width: o } = n,
    {
      width: s,
      chartArea: { left: a, right: l }
    } = e
  let u = 'center'
  return (
    i === 'center'
      ? (u = r <= (a + l) / 2 ? 'left' : 'right')
      : r <= o / 2
      ? (u = 'left')
      : r >= s - o / 2 && (u = 'right'),
    GC(u, e, t, n) && (u = 'center'),
    u
  )
}
function Wg(e, t, n) {
  const i = n.yAlign || t.yAlign || KC(e, n)
  return { xAlign: n.xAlign || t.xAlign || ZC(e, t, n, i), yAlign: i }
}
function JC(e, t) {
  let { x: n, width: i } = e
  return t === 'right' ? (n -= i) : t === 'center' && (n -= i / 2), n
}
function eE(e, t, n) {
  let { y: i, height: r } = e
  return t === 'top' ? (i += n) : t === 'bottom' ? (i -= r + n) : (i -= r / 2), i
}
function Vg(e, t, n, i) {
  const { caretSize: r, caretPadding: o, cornerRadius: s } = e,
    { xAlign: a, yAlign: l } = n,
    u = r + o,
    { topLeft: c, topRight: d, bottomLeft: f, bottomRight: h } = Zi(s)
  let p = JC(t, a)
  const y = eE(t, l, u)
  return (
    l === 'center'
      ? a === 'left'
        ? (p += u)
        : a === 'right' && (p -= u)
      : a === 'left'
      ? (p -= Math.max(c, f) + r)
      : a === 'right' && (p += Math.max(d, h) + r),
    { x: wt(p, 0, i.width - t.width), y: wt(y, 0, i.height - t.height) }
  )
}
function ga(e, t, n) {
  const i = kt(n.padding)
  return t === 'center' ? e.x + e.width / 2 : t === 'right' ? e.x + e.width - i.right : e.x + i.left
}
function Ug(e) {
  return Sn([], Fn(e))
}
function tE(e, t, n) {
  return Ni(e, { tooltip: t, tooltipItems: n, type: 'tooltip' })
}
function qg(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks
  return n ? e.override(n) : e
}
class Pd extends bn {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart || t._chart),
      (this._chart = this.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0)
  }
  initialize(t) {
    ;(this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0)
  }
  _resolveAnimations() {
    const t = this._cachedAnimations
    if (t) return t
    const n = this.chart,
      i = this.options.setContext(this.getContext()),
      r = i.enabled && n.options.animation && i.animations,
      o = new av(this.chart, r)
    return r._cacheable && (this._cachedAnimations = Object.freeze(o)), o
  }
  getContext() {
    return this.$context || (this.$context = tE(this.chart.getContext(), this, this._tooltipItems))
  }
  getTitle(t, n) {
    const { callbacks: i } = n,
      r = i.beforeTitle.apply(this, [t]),
      o = i.title.apply(this, [t]),
      s = i.afterTitle.apply(this, [t])
    let a = []
    return (a = Sn(a, Fn(r))), (a = Sn(a, Fn(o))), (a = Sn(a, Fn(s))), a
  }
  getBeforeBody(t, n) {
    return Ug(n.callbacks.beforeBody.apply(this, [t]))
  }
  getBody(t, n) {
    const { callbacks: i } = n,
      r = []
    return (
      xe(t, (o) => {
        const s = { before: [], lines: [], after: [] },
          a = qg(i, o)
        Sn(s.before, Fn(a.beforeLabel.call(this, o))),
          Sn(s.lines, a.label.call(this, o)),
          Sn(s.after, Fn(a.afterLabel.call(this, o))),
          r.push(s)
      }),
      r
    )
  }
  getAfterBody(t, n) {
    return Ug(n.callbacks.afterBody.apply(this, [t]))
  }
  getFooter(t, n) {
    const { callbacks: i } = n,
      r = i.beforeFooter.apply(this, [t]),
      o = i.footer.apply(this, [t]),
      s = i.afterFooter.apply(this, [t])
    let a = []
    return (a = Sn(a, Fn(r))), (a = Sn(a, Fn(o))), (a = Sn(a, Fn(s))), a
  }
  _createItems(t) {
    const n = this._active,
      i = this.chart.data,
      r = [],
      o = [],
      s = []
    let a = [],
      l,
      u
    for (l = 0, u = n.length; l < u; ++l) a.push(XC(this.chart, n[l]))
    return (
      t.filter && (a = a.filter((c, d, f) => t.filter(c, d, f, i))),
      t.itemSort && (a = a.sort((c, d) => t.itemSort(c, d, i))),
      xe(a, (c) => {
        const d = qg(t.callbacks, c)
        r.push(d.labelColor.call(this, c)),
          o.push(d.labelPointStyle.call(this, c)),
          s.push(d.labelTextColor.call(this, c))
      }),
      (this.labelColors = r),
      (this.labelPointStyles = o),
      (this.labelTextColors = s),
      (this.dataPoints = a),
      a
    )
  }
  update(t, n) {
    const i = this.options.setContext(this.getContext()),
      r = this._active
    let o,
      s = []
    if (!r.length) this.opacity !== 0 && (o = { opacity: 0 })
    else {
      const a = Vo[i.position].call(this, r, this._eventPosition)
      ;(s = this._createItems(i)),
        (this.title = this.getTitle(s, i)),
        (this.beforeBody = this.getBeforeBody(s, i)),
        (this.body = this.getBody(s, i)),
        (this.afterBody = this.getAfterBody(s, i)),
        (this.footer = this.getFooter(s, i))
      const l = (this._size = Hg(this, i)),
        u = Object.assign({}, a, l),
        c = Wg(this.chart, i, u),
        d = Vg(i, u, c, this.chart)
      ;(this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (o = {
          opacity: 1,
          x: d.x,
          y: d.y,
          width: l.width,
          height: l.height,
          caretX: a.x,
          caretY: a.y
        })
    }
    ;(this._tooltipItems = s),
      (this.$context = void 0),
      o && this._resolveAnimations().update(this, o),
      t && i.external && i.external.call(this, { chart: this.chart, tooltip: this, replay: n })
  }
  drawCaret(t, n, i, r) {
    const o = this.getCaretPosition(t, i, r)
    n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3)
  }
  getCaretPosition(t, n, i) {
    const { xAlign: r, yAlign: o } = this,
      { caretSize: s, cornerRadius: a } = i,
      { topLeft: l, topRight: u, bottomLeft: c, bottomRight: d } = Zi(a),
      { x: f, y: h } = t,
      { width: p, height: y } = n
    let _, g, m, v, x, b
    return (
      o === 'center'
        ? ((x = h + y / 2),
          r === 'left'
            ? ((_ = f), (g = _ - s), (v = x + s), (b = x - s))
            : ((_ = f + p), (g = _ + s), (v = x - s), (b = x + s)),
          (m = _))
        : (r === 'left'
            ? (g = f + Math.max(l, c) + s)
            : r === 'right'
            ? (g = f + p - Math.max(u, d) - s)
            : (g = this.caretX),
          o === 'top'
            ? ((v = h), (x = v - s), (_ = g - s), (m = g + s))
            : ((v = h + y), (x = v + s), (_ = g + s), (m = g - s)),
          (b = v)),
      { x1: _, x2: g, x3: m, y1: v, y2: x, y3: b }
    )
  }
  drawTitle(t, n, i) {
    const r = this.title,
      o = r.length
    let s, a, l
    if (o) {
      const u = zr(i.rtl, this.x, this.width)
      for (
        t.x = ga(this, i.titleAlign, i),
          n.textAlign = u.textAlign(i.titleAlign),
          n.textBaseline = 'middle',
          s = it(i.titleFont),
          a = i.titleSpacing,
          n.fillStyle = i.titleColor,
          n.font = s.string,
          l = 0;
        l < o;
        ++l
      )
        n.fillText(r[l], u.x(t.x), t.y + s.lineHeight / 2),
          (t.y += s.lineHeight + a),
          l + 1 === o && (t.y += i.titleMarginBottom - a)
    }
  }
  _drawColorBox(t, n, i, r, o) {
    const s = this.labelColors[i],
      a = this.labelPointStyles[i],
      { boxHeight: l, boxWidth: u, boxPadding: c } = o,
      d = it(o.bodyFont),
      f = ga(this, 'left', o),
      h = r.x(f),
      p = l < d.lineHeight ? (d.lineHeight - l) / 2 : 0,
      y = n.y + p
    if (o.usePointStyle) {
      const _ = {
          radius: Math.min(u, l) / 2,
          pointStyle: a.pointStyle,
          rotation: a.rotation,
          borderWidth: 1
        },
        g = r.leftForLtr(h, u) + u / 2,
        m = y + l / 2
      ;(t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        dl(t, _, g, m),
        (t.strokeStyle = s.borderColor),
        (t.fillStyle = s.backgroundColor),
        dl(t, _, g, m)
    } else {
      ;(t.lineWidth = s.borderWidth || 1),
        (t.strokeStyle = s.borderColor),
        t.setLineDash(s.borderDash || []),
        (t.lineDashOffset = s.borderDashOffset || 0)
      const _ = r.leftForLtr(h, u - c),
        g = r.leftForLtr(r.xPlus(h, 1), u - c - 2),
        m = Zi(s.borderRadius)
      Object.values(m).some((v) => v !== 0)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          hs(t, { x: _, y, w: u, h: l, radius: m }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = s.backgroundColor),
          t.beginPath(),
          hs(t, { x: g, y: y + 1, w: u - 2, h: l - 2, radius: m }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(_, y, u, l),
          t.strokeRect(_, y, u, l),
          (t.fillStyle = s.backgroundColor),
          t.fillRect(g, y + 1, u - 2, l - 2))
    }
    t.fillStyle = this.labelTextColors[i]
  }
  drawBody(t, n, i) {
    const { body: r } = this,
      {
        bodySpacing: o,
        bodyAlign: s,
        displayColors: a,
        boxHeight: l,
        boxWidth: u,
        boxPadding: c
      } = i,
      d = it(i.bodyFont)
    let f = d.lineHeight,
      h = 0
    const p = zr(i.rtl, this.x, this.width),
      y = function (P) {
        n.fillText(P, p.x(t.x + h), t.y + f / 2), (t.y += f + o)
      },
      _ = p.textAlign(s)
    let g, m, v, x, b, O, k
    for (
      n.textAlign = s,
        n.textBaseline = 'middle',
        n.font = d.string,
        t.x = ga(this, _, i),
        n.fillStyle = i.bodyColor,
        xe(this.beforeBody, y),
        h = a && _ !== 'right' ? (s === 'center' ? u / 2 + c : u + 2 + c) : 0,
        x = 0,
        O = r.length;
      x < O;
      ++x
    ) {
      for (
        g = r[x],
          m = this.labelTextColors[x],
          n.fillStyle = m,
          xe(g.before, y),
          v = g.lines,
          a && v.length && (this._drawColorBox(n, t, x, p, i), (f = Math.max(d.lineHeight, l))),
          b = 0,
          k = v.length;
        b < k;
        ++b
      )
        y(v[b]), (f = d.lineHeight)
      xe(g.after, y)
    }
    ;(h = 0), (f = d.lineHeight), xe(this.afterBody, y), (t.y -= o)
  }
  drawFooter(t, n, i) {
    const r = this.footer,
      o = r.length
    let s, a
    if (o) {
      const l = zr(i.rtl, this.x, this.width)
      for (
        t.x = ga(this, i.footerAlign, i),
          t.y += i.footerMarginTop,
          n.textAlign = l.textAlign(i.footerAlign),
          n.textBaseline = 'middle',
          s = it(i.footerFont),
          n.fillStyle = i.footerColor,
          n.font = s.string,
          a = 0;
        a < o;
        ++a
      )
        n.fillText(r[a], l.x(t.x), t.y + s.lineHeight / 2), (t.y += s.lineHeight + i.footerSpacing)
    }
  }
  drawBackground(t, n, i, r) {
    const { xAlign: o, yAlign: s } = this,
      { x: a, y: l } = t,
      { width: u, height: c } = i,
      { topLeft: d, topRight: f, bottomLeft: h, bottomRight: p } = Zi(r.cornerRadius)
    ;(n.fillStyle = r.backgroundColor),
      (n.strokeStyle = r.borderColor),
      (n.lineWidth = r.borderWidth),
      n.beginPath(),
      n.moveTo(a + d, l),
      s === 'top' && this.drawCaret(t, n, i, r),
      n.lineTo(a + u - f, l),
      n.quadraticCurveTo(a + u, l, a + u, l + f),
      s === 'center' && o === 'right' && this.drawCaret(t, n, i, r),
      n.lineTo(a + u, l + c - p),
      n.quadraticCurveTo(a + u, l + c, a + u - p, l + c),
      s === 'bottom' && this.drawCaret(t, n, i, r),
      n.lineTo(a + h, l + c),
      n.quadraticCurveTo(a, l + c, a, l + c - h),
      s === 'center' && o === 'left' && this.drawCaret(t, n, i, r),
      n.lineTo(a, l + d),
      n.quadraticCurveTo(a, l, a + d, l),
      n.closePath(),
      n.fill(),
      r.borderWidth > 0 && n.stroke()
  }
  _updateAnimationTarget(t) {
    const n = this.chart,
      i = this.$animations,
      r = i && i.x,
      o = i && i.y
    if (r || o) {
      const s = Vo[t.position].call(this, this._active, this._eventPosition)
      if (!s) return
      const a = (this._size = Hg(this, t)),
        l = Object.assign({}, s, this._size),
        u = Wg(n, t, l),
        c = Vg(t, l, u, n)
      ;(r._to !== c.x || o._to !== c.y) &&
        ((this.xAlign = u.xAlign),
        (this.yAlign = u.yAlign),
        (this.width = a.width),
        (this.height = a.height),
        (this.caretX = s.x),
        (this.caretY = s.y),
        this._resolveAnimations().update(this, c))
    }
  }
  _willRender() {
    return !!this.opacity
  }
  draw(t) {
    const n = this.options.setContext(this.getContext())
    let i = this.opacity
    if (!i) return
    this._updateAnimationTarget(n)
    const r = { width: this.width, height: this.height },
      o = { x: this.x, y: this.y }
    i = Math.abs(i) < 0.001 ? 0 : i
    const s = kt(n.padding),
      a =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length
    n.enabled &&
      a &&
      (t.save(),
      (t.globalAlpha = i),
      this.drawBackground(o, t, r, n),
      rv(t, n.textDirection),
      (o.y += s.top),
      this.drawTitle(o, t, n),
      this.drawBody(o, t, n),
      this.drawFooter(o, t, n),
      ov(t, n.textDirection),
      t.restore())
  }
  getActiveElements() {
    return this._active || []
  }
  setActiveElements(t, n) {
    const i = this._active,
      r = t.map(({ datasetIndex: a, index: l }) => {
        const u = this.chart.getDatasetMeta(a)
        if (!u) throw new Error('Cannot find a dataset at index ' + a)
        return { datasetIndex: a, element: u.data[l], index: l }
      }),
      o = !sl(i, r),
      s = this._positionChanged(r, n)
    ;(o || s) &&
      ((this._active = r),
      (this._eventPosition = n),
      (this._ignoreReplayEvents = !0),
      this.update(!0))
  }
  handleEvent(t, n, i = !0) {
    if (n && this._ignoreReplayEvents) return !1
    this._ignoreReplayEvents = !1
    const r = this.options,
      o = this._active || [],
      s = this._getActiveElements(t, o, n, i),
      a = this._positionChanged(s, t),
      l = n || !sl(s, o) || a
    return (
      l &&
        ((this._active = s),
        (r.enabled || r.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, n))),
      l
    )
  }
  _getActiveElements(t, n, i, r) {
    const o = this.options
    if (t.type === 'mouseout') return []
    if (!r) return n
    const s = this.chart.getElementsAtEventForMode(t, o.mode, o, i)
    return o.reverse && s.reverse(), s
  }
  _positionChanged(t, n) {
    const { caretX: i, caretY: r, options: o } = this,
      s = Vo[o.position].call(this, t, n)
    return s !== !1 && (i !== s.x || r !== s.y)
  }
}
Pd.positioners = Vo
var nE = {
  id: 'tooltip',
  _element: Pd,
  positioners: Vo,
  afterInit(e, t, n) {
    n && (e.tooltip = new Pd({ chart: e, options: n }))
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n)
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n)
  },
  afterDraw(e) {
    const t = e.tooltip
    if (t && t._willRender()) {
      const n = { tooltip: t }
      if (e.notifyPlugins('beforeTooltipDraw', n) === !1) return
      t.draw(e.ctx), e.notifyPlugins('afterTooltipDraw', n)
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0)
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: 'average',
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleColor: '#fff',
    titleFont: { weight: 'bold' },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: 'left',
    bodyColor: '#fff',
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: 'left',
    footerColor: '#fff',
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: 'bold' },
    footerAlign: 'left',
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: '#fff',
    displayColors: !0,
    boxPadding: 0,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    animation: { duration: 400, easing: 'easeOutQuart' },
    animations: {
      numbers: { type: 'number', properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'] },
      opacity: { easing: 'linear', duration: 200 }
    },
    callbacks: {
      beforeTitle: Dn,
      title(e) {
        if (e.length > 0) {
          const t = e[0],
            n = t.chart.data.labels,
            i = n ? n.length : 0
          if (this && this.options && this.options.mode === 'dataset') return t.dataset.label || ''
          if (t.label) return t.label
          if (i > 0 && t.dataIndex < i) return n[t.dataIndex]
        }
        return ''
      },
      afterTitle: Dn,
      beforeBody: Dn,
      beforeLabel: Dn,
      label(e) {
        if (this && this.options && this.options.mode === 'dataset')
          return e.label + ': ' + e.formattedValue || e.formattedValue
        let t = e.dataset.label || ''
        t && (t += ': ')
        const n = e.formattedValue
        return be(n) || (t += n), t
      },
      labelColor(e) {
        const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex)
        return {
          borderColor: n.borderColor,
          backgroundColor: n.backgroundColor,
          borderWidth: n.borderWidth,
          borderDash: n.borderDash,
          borderDashOffset: n.borderDashOffset,
          borderRadius: 0
        }
      },
      labelTextColor() {
        return this.options.bodyColor
      },
      labelPointStyle(e) {
        const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex)
        return { pointStyle: n.pointStyle, rotation: n.rotation }
      },
      afterLabel: Dn,
      afterBody: Dn,
      beforeFooter: Dn,
      footer: Dn,
      afterFooter: Dn
    }
  },
  defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
  descriptors: {
    _scriptable: (e) => e !== 'filter' && e !== 'itemSort' && e !== 'external',
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: 'animation' }
  },
  additionalOptionScopes: ['interaction']
}
const iE = (e, t, n, i) => (
  typeof t == 'string'
    ? ((n = e.push(t) - 1), i.unshift({ index: n, label: t }))
    : isNaN(t) && (n = null),
  n
)
function rE(e, t, n, i) {
  const r = e.indexOf(t)
  if (r === -1) return iE(e, t, n, i)
  const o = e.lastIndexOf(t)
  return r !== o ? n : r
}
const oE = (e, t) => (e === null ? null : wt(Math.round(e), 0, t))
class gl extends cr {
  constructor(t) {
    super(t), (this._startValue = void 0), (this._valueRange = 0), (this._addedLabels = [])
  }
  init(t) {
    const n = this._addedLabels
    if (n.length) {
      const i = this.getLabels()
      for (const { index: r, label: o } of n) i[r] === o && i.splice(r, 1)
      this._addedLabels = []
    }
    super.init(t)
  }
  parse(t, n) {
    if (be(t)) return null
    const i = this.getLabels()
    return (
      (n = isFinite(n) && i[n] === t ? n : rE(i, t, ie(n, t), this._addedLabels)),
      oE(n, i.length - 1)
    )
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds()
    let { min: i, max: r } = this.getMinMax(!0)
    this.options.bounds === 'ticks' && (t || (i = 0), n || (r = this.getLabels().length - 1)),
      (this.min = i),
      (this.max = r)
  }
  buildTicks() {
    const t = this.min,
      n = this.max,
      i = this.options.offset,
      r = []
    let o = this.getLabels()
    ;(o = t === 0 && n === o.length - 1 ? o : o.slice(t, n + 1)),
      (this._valueRange = Math.max(o.length - (i ? 0 : 1), 1)),
      (this._startValue = this.min - (i ? 0.5 : 0))
    for (let s = t; s <= n; s++) r.push({ value: s })
    return r
  }
  getLabelForValue(t) {
    const n = this.getLabels()
    return t >= 0 && t < n.length ? n[t] : t
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels)
  }
  getPixelForValue(t) {
    return (
      typeof t != 'number' && (t = this.parse(t)),
      t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    )
  }
  getPixelForTick(t) {
    const n = this.ticks
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value)
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
  }
  getBasePixel() {
    return this.bottom
  }
}
gl.id = 'category'
gl.defaults = { ticks: { callback: gl.prototype.getLabelForValue } }
function sE(e, t) {
  const n = [],
    {
      bounds: r,
      step: o,
      min: s,
      max: a,
      precision: l,
      count: u,
      maxTicks: c,
      maxDigits: d,
      includeBounds: f
    } = e,
    h = o || 1,
    p = c - 1,
    { min: y, max: _ } = t,
    g = !be(s),
    m = !be(a),
    v = !be(u),
    x = (_ - y) / (d + 1)
  let b = Xp((_ - y) / p / h) * h,
    O,
    k,
    P,
    L
  if (b < 1e-14 && !g && !m) return [{ value: y }, { value: _ }]
  ;(L = Math.ceil(_ / b) - Math.floor(y / b)),
    L > p && (b = Xp((L * b) / p / h) * h),
    be(l) || ((O = Math.pow(10, l)), (b = Math.ceil(b * O) / O)),
    r === 'ticks' ? ((k = Math.floor(y / b) * b), (P = Math.ceil(_ / b) * b)) : ((k = y), (P = _)),
    g && m && o && vS((a - s) / o, b / 1e3)
      ? ((L = Math.round(Math.min((a - s) / b, c))), (b = (a - s) / L), (k = s), (P = a))
      : v
      ? ((k = g ? s : k), (P = m ? a : P), (L = u - 1), (b = (P - k) / L))
      : ((L = (P - k) / b),
        $o(L, Math.round(L), b / 1e3) ? (L = Math.round(L)) : (L = Math.ceil(L)))
  const I = Math.max(Kp(b), Kp(k))
  ;(O = Math.pow(10, be(l) ? I : l)), (k = Math.round(k * O) / O), (P = Math.round(P * O) / O)
  let N = 0
  for (
    g &&
    (f && k !== s
      ? (n.push({ value: s }),
        k < s && N++,
        $o(Math.round((k + N * b) * O) / O, s, Yg(s, x, e)) && N++)
      : k < s && N++);
    N < L;
    ++N
  )
    n.push({ value: Math.round((k + N * b) * O) / O })
  return (
    m && f && P !== a
      ? n.length && $o(n[n.length - 1].value, a, Yg(a, x, e))
        ? (n[n.length - 1].value = a)
        : n.push({ value: a })
      : (!m || P === a) && n.push({ value: P }),
    n
  )
}
function Yg(e, t, { horizontal: n, minRotation: i }) {
  const r = vn(i),
    o = (n ? Math.sin(r) : Math.cos(r)) || 0.001,
    s = 0.75 * t * ('' + e).length
  return Math.min(t / o, s)
}
class ml extends cr {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0)
  }
  parse(t, n) {
    return be(t) || ((typeof t == 'number' || t instanceof Number) && !isFinite(+t)) ? null : +t
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: n, maxDefined: i } = this.getUserBounds()
    let { min: r, max: o } = this
    const s = (l) => (r = n ? r : l),
      a = (l) => (o = i ? o : l)
    if (t) {
      const l = Mn(r),
        u = Mn(o)
      l < 0 && u < 0 ? a(0) : l > 0 && u > 0 && s(0)
    }
    if (r === o) {
      let l = 1
      ;(o >= Number.MAX_SAFE_INTEGER || r <= Number.MIN_SAFE_INTEGER) && (l = Math.abs(o * 0.05)),
        a(o + l),
        t || s(r - l)
    }
    ;(this.min = r), (this.max = o)
  }
  getTickLimit() {
    const t = this.options.ticks
    let { maxTicksLimit: n, stepSize: i } = t,
      r
    return (
      i
        ? ((r = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1),
          r > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${r} ticks. Limiting to 1000.`
            ),
            (r = 1e3)))
        : ((r = this.computeTickLimit()), (n = n || 11)),
      n && (r = Math.min(n, r)),
      r
    )
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY
  }
  buildTicks() {
    const t = this.options,
      n = t.ticks
    let i = this.getTickLimit()
    i = Math.max(2, i)
    const r = {
        maxTicks: i,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: n.precision,
        step: n.stepSize,
        count: n.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: n.minRotation || 0,
        includeBounds: n.includeBounds !== !1
      },
      o = this._range || this,
      s = sE(r, o)
    return (
      t.bounds === 'ticks' && $y(s, this, 'value'),
      t.reverse
        ? (s.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      s
    )
  }
  configure() {
    const t = this.ticks
    let n = this.min,
      i = this.max
    if ((super.configure(), this.options.offset && t.length)) {
      const r = (i - n) / Math.max(t.length - 1, 1) / 2
      ;(n -= r), (i += r)
    }
    ;(this._startValue = n), (this._endValue = i), (this._valueRange = i - n)
  }
  getLabelForValue(t) {
    return Cs(t, this.chart.options.locale, this.options.ticks.format)
  }
}
class Gf extends ml {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0)
    ;(this.min = ht(t) ? t : 0), (this.max = ht(n) ? n : 1), this.handleTickRangeOptions()
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      n = t ? this.width : this.height,
      i = vn(this.options.ticks.minRotation),
      r = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
      o = this._resolveTickFontOptions(0)
    return Math.ceil(n / Math.min(40, o.lineHeight / r))
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange
  }
}
Gf.id = 'linear'
Gf.defaults = { ticks: { callback: Wl.formatters.numeric } }
function Qg(e) {
  return e / Math.pow(10, Math.floor(Jt(e))) === 1
}
function aE(e, t) {
  const n = Math.floor(Jt(t.max)),
    i = Math.ceil(t.max / Math.pow(10, n)),
    r = []
  let o = Xt(e.min, Math.pow(10, Math.floor(Jt(t.min)))),
    s = Math.floor(Jt(o)),
    a = Math.floor(o / Math.pow(10, s)),
    l = s < 0 ? Math.pow(10, Math.abs(s)) : 1
  do
    r.push({ value: o, major: Qg(o) }),
      ++a,
      a === 10 && ((a = 1), ++s, (l = s >= 0 ? 1 : l)),
      (o = Math.round(a * Math.pow(10, s) * l) / l)
  while (s < n || (s === n && a < i))
  const u = Xt(e.max, o)
  return r.push({ value: u, major: Qg(o) }), r
}
class Ev extends cr {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0)
  }
  parse(t, n) {
    const i = ml.prototype.parse.apply(this, [t, n])
    if (i === 0) {
      this._zero = !0
      return
    }
    return ht(i) && i > 0 ? i : null
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0)
    ;(this.min = ht(t) ? Math.max(0, t) : null),
      (this.max = ht(n) ? Math.max(0, n) : null),
      this.options.beginAtZero && (this._zero = !0),
      this.handleTickRangeOptions()
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds()
    let i = this.min,
      r = this.max
    const o = (l) => (i = t ? i : l),
      s = (l) => (r = n ? r : l),
      a = (l, u) => Math.pow(10, Math.floor(Jt(l)) + u)
    i === r && (i <= 0 ? (o(1), s(10)) : (o(a(i, -1)), s(a(r, 1)))),
      i <= 0 && o(a(r, -1)),
      r <= 0 && s(a(i, 1)),
      this._zero && this.min !== this._suggestedMin && i === a(this.min, 0) && o(a(i, -1)),
      (this.min = i),
      (this.max = r)
  }
  buildTicks() {
    const t = this.options,
      n = { min: this._userMin, max: this._userMax },
      i = aE(n, this)
    return (
      t.bounds === 'ticks' && $y(i, this, 'value'),
      t.reverse
        ? (i.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      i
    )
  }
  getLabelForValue(t) {
    return t === void 0 ? '0' : Cs(t, this.chart.options.locale, this.options.ticks.format)
  }
  configure() {
    const t = this.min
    super.configure(), (this._startValue = Jt(t)), (this._valueRange = Jt(this.max) - Jt(t))
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (Jt(t) - this._startValue) / this._valueRange
          )
    )
  }
  getValueForPixel(t) {
    const n = this.getDecimalForPixel(t)
    return Math.pow(10, this._startValue + n * this._valueRange)
  }
}
Ev.id = 'logarithmic'
Ev.defaults = { ticks: { callback: Wl.formatters.logarithmic, major: { enabled: !0 } } }
function Md(e) {
  const t = e.ticks
  if (t.display && e.display) {
    const n = kt(t.backdropPadding)
    return ie(t.font && t.font.size, le.font.size) + n.height
  }
  return 0
}
function lE(e, t, n) {
  return (n = Ne(n) ? n : [n]), { w: US(e, t.string, n), h: n.length * t.lineHeight }
}
function Xg(e, t, n, i, r) {
  return e === i || e === r
    ? { start: t - n / 2, end: t + n / 2 }
    : e < i || e > r
    ? { start: t - n, end: t }
    : { start: t, end: t + n }
}
function uE(e) {
  const t = {
      l: e.left + e._padding.left,
      r: e.right - e._padding.right,
      t: e.top + e._padding.top,
      b: e.bottom - e._padding.bottom
    },
    n = Object.assign({}, t),
    i = [],
    r = [],
    o = e._pointLabels.length,
    s = e.options.pointLabels,
    a = s.centerPointLabels ? Fe / o : 0
  for (let l = 0; l < o; l++) {
    const u = s.setContext(e.getPointLabelContext(l))
    r[l] = u.padding
    const c = e.getPointPosition(l, e.drawingArea + r[l], a),
      d = it(u.font),
      f = lE(e.ctx, d, e._pointLabels[l])
    i[l] = f
    const h = gn(e.getIndexAngle(l) + a),
      p = Math.round(Df(h)),
      y = Xg(p, c.x, f.w, 0, 180),
      _ = Xg(p, c.y, f.h, 90, 270)
    cE(n, t, h, y, _)
  }
  e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b), (e._pointLabelItems = dE(e, i, r))
}
function cE(e, t, n, i, r) {
  const o = Math.abs(Math.sin(n)),
    s = Math.abs(Math.cos(n))
  let a = 0,
    l = 0
  i.start < t.l
    ? ((a = (t.l - i.start) / o), (e.l = Math.min(e.l, t.l - a)))
    : i.end > t.r && ((a = (i.end - t.r) / o), (e.r = Math.max(e.r, t.r + a))),
    r.start < t.t
      ? ((l = (t.t - r.start) / s), (e.t = Math.min(e.t, t.t - l)))
      : r.end > t.b && ((l = (r.end - t.b) / s), (e.b = Math.max(e.b, t.b + l)))
}
function dE(e, t, n) {
  const i = [],
    r = e._pointLabels.length,
    o = e.options,
    s = Md(o) / 2,
    a = e.drawingArea,
    l = o.pointLabels.centerPointLabels ? Fe / r : 0
  for (let u = 0; u < r; u++) {
    const c = e.getPointPosition(u, a + s + n[u], l),
      d = Math.round(Df(gn(c.angle + Ye))),
      f = t[u],
      h = pE(c.y, f.h, d),
      p = fE(d),
      y = hE(c.x, f.w, p)
    i.push({ x: c.x, y: h, textAlign: p, left: y, top: h, right: y + f.w, bottom: h + f.h })
  }
  return i
}
function fE(e) {
  return e === 0 || e === 180 ? 'center' : e < 180 ? 'left' : 'right'
}
function hE(e, t, n) {
  return n === 'right' ? (e -= t) : n === 'center' && (e -= t / 2), e
}
function pE(e, t, n) {
  return n === 90 || n === 270 ? (e -= t / 2) : (n > 270 || n < 90) && (e -= t), e
}
function gE(e, t) {
  const {
    ctx: n,
    options: { pointLabels: i }
  } = e
  for (let r = t - 1; r >= 0; r--) {
    const o = i.setContext(e.getPointLabelContext(r)),
      s = it(o.font),
      { x: a, y: l, textAlign: u, left: c, top: d, right: f, bottom: h } = e._pointLabelItems[r],
      { backdropColor: p } = o
    if (!be(p)) {
      const y = Zi(o.borderRadius),
        _ = kt(o.backdropPadding)
      n.fillStyle = p
      const g = c - _.left,
        m = d - _.top,
        v = f - c + _.width,
        x = h - d + _.height
      Object.values(y).some((b) => b !== 0)
        ? (n.beginPath(), hs(n, { x: g, y: m, w: v, h: x, radius: y }), n.fill())
        : n.fillRect(g, m, v, x)
    }
    or(n, e._pointLabels[r], a, l + s.lineHeight / 2, s, {
      color: o.color,
      textAlign: u,
      textBaseline: 'middle'
    })
  }
}
function Pv(e, t, n, i) {
  const { ctx: r } = e
  if (n) r.arc(e.xCenter, e.yCenter, t, 0, Me)
  else {
    let o = e.getPointPosition(0, t)
    r.moveTo(o.x, o.y)
    for (let s = 1; s < i; s++) (o = e.getPointPosition(s, t)), r.lineTo(o.x, o.y)
  }
}
function mE(e, t, n, i) {
  const r = e.ctx,
    o = t.circular,
    { color: s, lineWidth: a } = t
  ;(!o && !i) ||
    !s ||
    !a ||
    n < 0 ||
    (r.save(),
    (r.strokeStyle = s),
    (r.lineWidth = a),
    r.setLineDash(t.borderDash),
    (r.lineDashOffset = t.borderDashOffset),
    r.beginPath(),
    Pv(e, n, o, i),
    r.closePath(),
    r.stroke(),
    r.restore())
}
function yE(e, t, n) {
  return Ni(e, { label: n, index: t, type: 'pointLabel' })
}
class Yl extends ml {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = [])
  }
  setDimensions() {
    const t = (this._padding = kt(Md(this.options) / 2)),
      n = (this.width = this.maxWidth - t.width),
      i = (this.height = this.maxHeight - t.height)
    ;(this.xCenter = Math.floor(this.left + n / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(n, i) / 2))
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1)
    ;(this.min = ht(t) && !isNaN(t) ? t : 0),
      (this.max = ht(n) && !isNaN(n) ? n : 0),
      this.handleTickRangeOptions()
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Md(this.options))
  }
  generateTickLabels(t) {
    ml.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((n, i) => {
          const r = Ee(this.options.pointLabels.callback, [n, i], this)
          return r || r === 0 ? r : ''
        })
        .filter((n, i) => this.chart.getDataVisibility(i)))
  }
  fit() {
    const t = this.options
    t.display && t.pointLabels.display ? uE(this) : this.setCenterPoint(0, 0, 0, 0)
  }
  setCenterPoint(t, n, i, r) {
    ;(this.xCenter += Math.floor((t - n) / 2)),
      (this.yCenter += Math.floor((i - r) / 2)),
      (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, n, i, r)))
  }
  getIndexAngle(t) {
    const n = Me / (this._pointLabels.length || 1),
      i = this.options.startAngle || 0
    return gn(t * n + vn(i))
  }
  getDistanceFromCenterForValue(t) {
    if (be(t)) return NaN
    const n = this.drawingArea / (this.max - this.min)
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n
  }
  getValueForDistanceFromCenter(t) {
    if (be(t)) return NaN
    const n = t / (this.drawingArea / (this.max - this.min))
    return this.options.reverse ? this.max - n : this.min + n
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || []
    if (t >= 0 && t < n.length) {
      const i = n[t]
      return yE(this.getContext(), t, i)
    }
  }
  getPointPosition(t, n, i = 0) {
    const r = this.getIndexAngle(t) - Ye + i
    return { x: Math.cos(r) * n + this.xCenter, y: Math.sin(r) * n + this.yCenter, angle: r }
  }
  getPointPositionForValue(t, n) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(n))
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue())
  }
  getPointLabelPosition(t) {
    const { left: n, top: i, right: r, bottom: o } = this._pointLabelItems[t]
    return { left: n, top: i, right: r, bottom: o }
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: n }
    } = this.options
    if (t) {
      const i = this.ctx
      i.save(),
        i.beginPath(),
        Pv(this, this.getDistanceFromCenterForValue(this._endValue), n, this._pointLabels.length),
        i.closePath(),
        (i.fillStyle = t),
        i.fill(),
        i.restore()
    }
  }
  drawGrid() {
    const t = this.ctx,
      n = this.options,
      { angleLines: i, grid: r } = n,
      o = this._pointLabels.length
    let s, a, l
    if (
      (n.pointLabels.display && gE(this, o),
      r.display &&
        this.ticks.forEach((u, c) => {
          if (c !== 0) {
            a = this.getDistanceFromCenterForValue(u.value)
            const d = r.setContext(this.getContext(c - 1))
            mE(this, d, a, o)
          }
        }),
      i.display)
    ) {
      for (t.save(), s = o - 1; s >= 0; s--) {
        const u = i.setContext(this.getPointLabelContext(s)),
          { color: c, lineWidth: d } = u
        !d ||
          !c ||
          ((t.lineWidth = d),
          (t.strokeStyle = c),
          t.setLineDash(u.borderDash),
          (t.lineDashOffset = u.borderDashOffset),
          (a = this.getDistanceFromCenterForValue(n.ticks.reverse ? this.min : this.max)),
          (l = this.getPointPosition(s, a)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(l.x, l.y),
          t.stroke())
      }
      t.restore()
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      n = this.options,
      i = n.ticks
    if (!i.display) return
    const r = this.getIndexAngle(0)
    let o, s
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(r),
      (t.textAlign = 'center'),
      (t.textBaseline = 'middle'),
      this.ticks.forEach((a, l) => {
        if (l === 0 && !n.reverse) return
        const u = i.setContext(this.getContext(l)),
          c = it(u.font)
        if (((o = this.getDistanceFromCenterForValue(this.ticks[l].value)), u.showLabelBackdrop)) {
          ;(t.font = c.string), (s = t.measureText(a.label).width), (t.fillStyle = u.backdropColor)
          const d = kt(u.backdropPadding)
          t.fillRect(-s / 2 - d.left, -o - c.size / 2 - d.top, s + d.width, c.size + d.height)
        }
        or(t, a.label, 0, -o, c, { color: u.color })
      }),
      t.restore()
  }
  drawTitle() {}
}
Yl.id = 'radialLinear'
Yl.defaults = {
  display: !0,
  animate: !0,
  position: 'chartArea',
  angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
  grid: { circular: !1 },
  startAngle: 0,
  ticks: { showLabelBackdrop: !0, callback: Wl.formatters.numeric },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: { size: 10 },
    callback(e) {
      return e
    },
    padding: 5,
    centerPointLabels: !1
  }
}
Yl.defaultRoutes = {
  'angleLines.color': 'borderColor',
  'pointLabels.color': 'color',
  'ticks.color': 'color'
}
Yl.descriptors = { angleLines: { _fallback: 'grid' } }
const Ql = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 }
  },
  Dt = Object.keys(Ql)
function vE(e, t) {
  return e - t
}
function Kg(e, t) {
  if (be(t)) return null
  const n = e._adapter,
    { parser: i, round: r, isoWeekday: o } = e._parseOpts
  let s = t
  return (
    typeof i == 'function' && (s = i(s)),
    ht(s) || (s = typeof i == 'string' ? n.parse(s, i) : n.parse(s)),
    s === null
      ? null
      : (r &&
          (s = r === 'week' && (cs(o) || o === !0) ? n.startOf(s, 'isoWeek', o) : n.startOf(s, r)),
        +s)
  )
}
function Gg(e, t, n, i) {
  const r = Dt.length
  for (let o = Dt.indexOf(e); o < r - 1; ++o) {
    const s = Ql[Dt[o]],
      a = s.steps ? s.steps : Number.MAX_SAFE_INTEGER
    if (s.common && Math.ceil((n - t) / (a * s.size)) <= i) return Dt[o]
  }
  return Dt[r - 1]
}
function _E(e, t, n, i, r) {
  for (let o = Dt.length - 1; o >= Dt.indexOf(n); o--) {
    const s = Dt[o]
    if (Ql[s].common && e._adapter.diff(r, i, s) >= t - 1) return s
  }
  return Dt[n ? Dt.indexOf(n) : 0]
}
function xE(e) {
  for (let t = Dt.indexOf(e) + 1, n = Dt.length; t < n; ++t) if (Ql[Dt[t]].common) return Dt[t]
}
function Zg(e, t, n) {
  if (!n) e[t] = !0
  else if (n.length) {
    const { lo: i, hi: r } = $f(n, t),
      o = n[i] >= t ? n[i] : n[r]
    e[o] = !0
  }
}
function bE(e, t, n, i) {
  const r = e._adapter,
    o = +r.startOf(t[0].value, i),
    s = t[t.length - 1].value
  let a, l
  for (a = o; a <= s; a = +r.add(a, 1, i)) (l = n[a]), l >= 0 && (t[l].major = !0)
  return t
}
function Jg(e, t, n) {
  const i = [],
    r = {},
    o = t.length
  let s, a
  for (s = 0; s < o; ++s) (a = t[s]), (r[a] = s), i.push({ value: a, major: !1 })
  return o === 0 || !n ? i : bE(e, i, r, n)
}
class Xl extends cr {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = 'day'),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0)
  }
  init(t, n) {
    const i = t.time || (t.time = {}),
      r = (this._adapter = new mk._date(t.adapters.date))
    Bo(i.displayFormats, r.formats()),
      (this._parseOpts = { parser: i.parser, round: i.round, isoWeekday: i.isoWeekday }),
      super.init(t),
      (this._normalized = n.normalized)
  }
  parse(t, n) {
    return t === void 0 ? null : Kg(this, t)
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] })
  }
  determineDataLimits() {
    const t = this.options,
      n = this._adapter,
      i = t.time.unit || 'day'
    let { min: r, max: o, minDefined: s, maxDefined: a } = this.getUserBounds()
    function l(u) {
      !s && !isNaN(u.min) && (r = Math.min(r, u.min)),
        !a && !isNaN(u.max) && (o = Math.max(o, u.max))
    }
    ;(!s || !a) &&
      (l(this._getLabelBounds()),
      (t.bounds !== 'ticks' || t.ticks.source !== 'labels') && l(this.getMinMax(!1))),
      (r = ht(r) && !isNaN(r) ? r : +n.startOf(Date.now(), i)),
      (o = ht(o) && !isNaN(o) ? o : +n.endOf(Date.now(), i) + 1),
      (this.min = Math.min(r, o - 1)),
      (this.max = Math.max(r + 1, o))
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps()
    let n = Number.POSITIVE_INFINITY,
      i = Number.NEGATIVE_INFINITY
    return t.length && ((n = t[0]), (i = t[t.length - 1])), { min: n, max: i }
  }
  buildTicks() {
    const t = this.options,
      n = t.time,
      i = t.ticks,
      r = i.source === 'labels' ? this.getLabelTimestamps() : this._generate()
    t.bounds === 'ticks' &&
      r.length &&
      ((this.min = this._userMin || r[0]), (this.max = this._userMax || r[r.length - 1]))
    const o = this.min,
      s = this.max,
      a = n2(r, o, s)
    return (
      (this._unit =
        n.unit ||
        (i.autoSkip
          ? Gg(n.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : _E(this, a.length, n.minUnit, this.min, this.max))),
      (this._majorUnit = !i.major.enabled || this._unit === 'year' ? void 0 : xE(this._unit)),
      this.initOffsets(r),
      t.reverse && a.reverse(),
      Jg(this, a, this._majorUnit)
    )
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value))
  }
  initOffsets(t) {
    let n = 0,
      i = 0,
      r,
      o
    this.options.offset &&
      t.length &&
      ((r = this.getDecimalForValue(t[0])),
      t.length === 1 ? (n = 1 - r) : (n = (this.getDecimalForValue(t[1]) - r) / 2),
      (o = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1 ? (i = o) : (i = (o - this.getDecimalForValue(t[t.length - 2])) / 2))
    const s = t.length < 3 ? 0.5 : 0.25
    ;(n = wt(n, 0, s)),
      (i = wt(i, 0, s)),
      (this._offsets = { start: n, end: i, factor: 1 / (n + 1 + i) })
  }
  _generate() {
    const t = this._adapter,
      n = this.min,
      i = this.max,
      r = this.options,
      o = r.time,
      s = o.unit || Gg(o.minUnit, n, i, this._getLabelCapacity(n)),
      a = ie(o.stepSize, 1),
      l = s === 'week' ? o.isoWeekday : !1,
      u = cs(l) || l === !0,
      c = {}
    let d = n,
      f,
      h
    if (
      (u && (d = +t.startOf(d, 'isoWeek', l)),
      (d = +t.startOf(d, u ? 'day' : s)),
      t.diff(i, n, s) > 1e5 * a)
    )
      throw new Error(n + ' and ' + i + ' are too far apart with stepSize of ' + a + ' ' + s)
    const p = r.ticks.source === 'data' && this.getDataTimestamps()
    for (f = d, h = 0; f < i; f = +t.add(f, a, s), h++) Zg(c, f, p)
    return (
      (f === i || r.bounds === 'ticks' || h === 1) && Zg(c, f, p),
      Object.keys(c)
        .sort((y, _) => y - _)
        .map((y) => +y)
    )
  }
  getLabelForValue(t) {
    const n = this._adapter,
      i = this.options.time
    return i.tooltipFormat ? n.format(t, i.tooltipFormat) : n.format(t, i.displayFormats.datetime)
  }
  _tickFormatFunction(t, n, i, r) {
    const o = this.options,
      s = o.time.displayFormats,
      a = this._unit,
      l = this._majorUnit,
      u = a && s[a],
      c = l && s[l],
      d = i[n],
      f = l && c && d && d.major,
      h = this._adapter.format(t, r || (f ? c : u)),
      p = o.ticks.callback
    return p ? Ee(p, [h, n, i], this) : h
  }
  generateTickLabels(t) {
    let n, i, r
    for (n = 0, i = t.length; n < i; ++n)
      (r = t[n]), (r.label = this._tickFormatFunction(r.value, n, t))
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min)
  }
  getPixelForValue(t) {
    const n = this._offsets,
      i = this.getDecimalForValue(t)
    return this.getPixelForDecimal((n.start + i) * n.factor)
  }
  getValueForPixel(t) {
    const n = this._offsets,
      i = this.getDecimalForPixel(t) / n.factor - n.end
    return this.min + i * (this.max - this.min)
  }
  _getLabelSize(t) {
    const n = this.options.ticks,
      i = this.ctx.measureText(t).width,
      r = vn(this.isHorizontal() ? n.maxRotation : n.minRotation),
      o = Math.cos(r),
      s = Math.sin(r),
      a = this._resolveTickFontOptions(0).size
    return { w: i * o + a * s, h: i * s + a * o }
  }
  _getLabelCapacity(t) {
    const n = this.options.time,
      i = n.displayFormats,
      r = i[n.unit] || i.millisecond,
      o = this._tickFormatFunction(t, 0, Jg(this, [t], this._majorUnit), r),
      s = this._getLabelSize(o),
      a = Math.floor(this.isHorizontal() ? this.width / s.w : this.height / s.h) - 1
    return a > 0 ? a : 1
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      n,
      i
    if (t.length) return t
    const r = this.getMatchingVisibleMetas()
    if (this._normalized && r.length)
      return (this._cache.data = r[0].controller.getAllParsedValues(this))
    for (n = 0, i = r.length; n < i; ++n) t = t.concat(r[n].controller.getAllParsedValues(this))
    return (this._cache.data = this.normalize(t))
  }
  getLabelTimestamps() {
    const t = this._cache.labels || []
    let n, i
    if (t.length) return t
    const r = this.getLabels()
    for (n = 0, i = r.length; n < i; ++n) t.push(Kg(this, r[n]))
    return (this._cache.labels = this._normalized ? t : this.normalize(t))
  }
  normalize(t) {
    return Ky(t.sort(vE))
  }
}
Xl.id = 'time'
Xl.defaults = {
  bounds: 'data',
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: 'millisecond',
    displayFormats: {}
  },
  ticks: { source: 'auto', major: { enabled: !1 } }
}
function ma(e, t, n) {
  let i = 0,
    r = e.length - 1,
    o,
    s,
    a,
    l
  n
    ? (t >= e[i].pos && t <= e[r].pos && ({ lo: i, hi: r } = Qi(e, 'pos', t)),
      ({ pos: o, time: a } = e[i]),
      ({ pos: s, time: l } = e[r]))
    : (t >= e[i].time && t <= e[r].time && ({ lo: i, hi: r } = Qi(e, 'time', t)),
      ({ time: o, pos: a } = e[i]),
      ({ time: s, pos: l } = e[r]))
  const u = s - o
  return u ? a + ((l - a) * (t - o)) / u : a
}
class Mv extends Xl {
  constructor(t) {
    super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0)
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(t))
    ;(this._minPos = ma(n, this.min)),
      (this._tableRange = ma(n, this.max) - this._minPos),
      super.initOffsets(t)
  }
  buildLookupTable(t) {
    const { min: n, max: i } = this,
      r = [],
      o = []
    let s, a, l, u, c
    for (s = 0, a = t.length; s < a; ++s) (u = t[s]), u >= n && u <= i && r.push(u)
    if (r.length < 2)
      return [
        { time: n, pos: 0 },
        { time: i, pos: 1 }
      ]
    for (s = 0, a = r.length; s < a; ++s)
      (c = r[s + 1]),
        (l = r[s - 1]),
        (u = r[s]),
        Math.round((c + l) / 2) !== u && o.push({ time: u, pos: s / (a - 1) })
    return o
  }
  _getTimestampsForTable() {
    let t = this._cache.all || []
    if (t.length) return t
    const n = this.getDataTimestamps(),
      i = this.getLabelTimestamps()
    return (
      n.length && i.length ? (t = this.normalize(n.concat(i))) : (t = n.length ? n : i),
      (t = this._cache.all = t),
      t
    )
  }
  getDecimalForValue(t) {
    return (ma(this._table, t) - this._minPos) / this._tableRange
  }
  getValueForPixel(t) {
    const n = this._offsets,
      i = this.getDecimalForPixel(t) / n.factor - n.end
    return ma(this._table, i * this._tableRange + this._minPos, !0)
  }
}
Mv.id = 'timeseries'
Mv.defaults = Xl.defaults
const Ov = 'label'
function em(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t)
}
function wE(e, t) {
  Object.assign(e.options, t)
}
function Tv(e, t) {
  e.labels = t
}
function Lv(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ov
  const i = []
  e.datasets = t.map((r) => {
    const o = e.datasets.find((s) => s[n] === r[n])
    return !o || !r.data || i.includes(o) ? te({}, r) : (i.push(o), Object.assign(o, r), o)
  })
}
function SE(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ov
  const n = { labels: [], datasets: [] }
  return Tv(n, e.labels), Lv(n, e.datasets, t), n
}
function kE(e, t) {
  let g = e,
    {
      height: n = 150,
      width: i = 300,
      redraw: r = !1,
      datasetIdKey: o,
      type: s,
      data: a,
      options: l,
      plugins: u = [],
      fallbackContent: c,
      updateMode: d
    } = g,
    f = zs(g, [
      'height',
      'width',
      'redraw',
      'datasetIdKey',
      'type',
      'data',
      'options',
      'plugins',
      'fallbackContent',
      'updateMode'
    ])
  const h = R.exports.useRef(null),
    p = R.exports.useRef(),
    y = () => {
      !h.current ||
        ((p.current = new Os(h.current, {
          type: s,
          data: SE(a, o),
          options: l && te({}, l),
          plugins: u
        })),
        em(t, p.current))
    },
    _ = () => {
      em(t, null), p.current && (p.current.destroy(), (p.current = null))
    }
  return (
    R.exports.useEffect(() => {
      !r && p.current && l && wE(p.current, l)
    }, [r, l]),
    R.exports.useEffect(() => {
      !r && p.current && Tv(p.current.config.data, a.labels)
    }, [r, a.labels]),
    R.exports.useEffect(() => {
      !r && p.current && a.datasets && Lv(p.current.config.data, a.datasets, o)
    }, [r, a.datasets]),
    R.exports.useEffect(() => {
      !p.current || (r ? (_(), setTimeout(y)) : p.current.update(d))
    }, [r, l, a.labels, a.datasets, d]),
    R.exports.useEffect(() => {
      !p.current || (_(), setTimeout(y))
    }, [s]),
    R.exports.useEffect(() => (y(), () => _()), []),
    w(
      'canvas',
      Be(te({}, Object.assign({ ref: h, role: 'img', height: n, width: i }, f)), { children: c })
    )
  )
}
const CE = R.exports.forwardRef(kE)
function Zf(e, t) {
  return (
    Os.register(t),
    R.exports.forwardRef((n, i) => w(CE, te({}, Object.assign({}, n, { ref: i, type: e }))))
  )
}
const EE = Zf('line', Ps),
  PE = Zf('bar', Hl),
  ME = Zf('pie', Qf)
function OE(e) {
  return Ct({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: {},
        child: [
          { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
          { tag: 'path', attr: { d: 'M3 12h4v9H3v-9zm14-4h4v13h-4V8zm-7-6h4v19h-4V2z' } }
        ]
      }
    ]
  })(e)
}
function TE(e) {
  return Ct({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: {},
        child: [
          { tag: 'path', attr: { fill: 'none', d: 'M0 0H24V24H0z' } },
          {
            tag: 'path',
            attr: {
              d: 'M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z'
            }
          }
        ]
      }
    ]
  })(e)
}
function LE(e) {
  return Ct({
    tag: 'svg',
    attr: { viewBox: '0 0 24 24' },
    child: [
      {
        tag: 'g',
        attr: {},
        child: [
          { tag: 'path', attr: { fill: 'none', d: 'M0 0h24v24H0z' } },
          {
            tag: 'path',
            attr: {
              d: 'M12 22C6.477 22 2 17.523 2 12c0-4.478 2.943-8.268 7-9.542v2.124A8.003 8.003 0 0 0 12 20a8.003 8.003 0 0 0 7.418-5h2.124c-1.274 4.057-5.064 7-9.542 7zm9.95-9H11V2.05c.329-.033.663-.05 1-.05 5.523 0 10 4.477 10 10 0 .337-.017.671-.05 1zM13 4.062V11h6.938A8.004 8.004 0 0 0 13 4.062z'
            }
          }
        ]
      }
    ]
  })(e)
}
const RE = '_boxChart_1xjef_1',
  NE = '_titleChart_1xjef_14',
  DE = '_chartCart_1xjef_20',
  zE = '_groupButtonChart_1xjef_26',
  IE = '_btnChange_1xjef_38',
  AE = '_active_1xjef_47'
var zn = {
  boxChart: RE,
  titleChart: NE,
  chartCart: DE,
  groupButtonChart: zE,
  btnChange: IE,
  active: AE
}
const tm = {
    responsive: !0,
    plugins: {
      legend: { position: 'left' },
      labels: { fontSize: window.innerWidth > 350 ? 20 : 10 },
      title: { position: 'left', display: !1, text: 'Chart.js Bar Chart' }
    }
  },
  FE = {
    responsive: !0,
    plugins: { legend: { position: 'top' }, title: { display: !0, text: 'Chart.js Line Chart' } }
  }
Os.register(gl, Gf, Vl, ql, Ul, Ts, QC, nE, qC)
const jE = ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  fc = {
    labels: jE,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1, 2, 3, 4, 5, 6, 6, 10],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
      {
        label: 'Dataset 2',
        data: [1, 2, 3, 4, 5, 6, 6, 10],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  },
  BE = [
    { icon: w(TE, { size: 20 }), tooltip: '', name: 'line' },
    { icon: w(OE, { size: 20 }), tooltip: '', name: 'bar' },
    { icon: w(LE, { size: 20 }), tooltip: '', name: 'dou' }
  ]
function Fi(e) {
  const { size: t, type: n } = e,
    [i, r] = R.exports.useState(n),
    o = {
      line: w(EE, {
        options: FE,
        data: fc,
        style: { transform: `scale(${t})` },
        className: zn.chart
      }),
      bar: w(PE, {
        options: tm,
        data: fc,
        style: { transform: `scale(${t})` },
        className: zn.chart
      }),
      dou: w(ME, {
        options: tm,
        data: fc,
        style: { transform: `scale(${t * (3 / 5)})` },
        className: zn.chart
      })
    },
    s = (a) => {
      r(a)
    }
  return q('div', {
    className: zn.chartCart,
    children: [
      w('div', {
        className: zn.groupButtonChart,
        children: BE.map((a) =>
          w(
            'div',
            {
              className: `${zn.btnChange} ${i == a.name && zn.active}`,
              onClick: () => s(a.name),
              children: a.icon
            },
            a.name
          )
        )
      }),
      w('div', { className: zn.titleChart, children: w('p', { children: 'Name' }) }),
      w('div', { className: zn.boxChart, children: o[i] })
    ]
  })
}
function $E() {
  return q('div', {
    className: fn.dashBoard,
    children: [
      q('div', {
        className: fn.boardChart,
        children: [
          w('div', { className: fn.mainChart, children: w(Fi, { size: 1, type: 'line' }) }),
          q('div', {
            className: fn.earningConversion,
            children: [
              w('div', { className: fn.earning, children: w(Fi, { size: 1, type: 'line' }) }),
              w('div', { className: fn.conversion, children: w(Fi, { size: 1, type: 'bar' }) })
            ]
          }),
          w('div', { className: fn.enterpriseClients, children: w(Fi, { size: 1, type: 'line' }) })
        ]
      }),
      q('div', {
        className: fn.boardDetail,
        children: [
          w('div', { className: fn.dabitCard, children: w(Fi, { size: 1, type: 'line' }) }),
          w('div', { className: fn.activityOverview, children: w(Fi, { size: 1, type: 'line' }) }),
          w('div', { className: fn.visitor, children: w(Fi, { size: 1, type: 'line' }) })
        ]
      })
    ]
  })
}
const HE = '_user_e8n2k_2',
  WE = '_fillter_e8n2k_9',
  VE = '_userMain_e8n2k_19',
  UE = '_newUser_e8n2k_24',
  qE = '_accountNumber_e8n2k_25',
  YE = '_role_e8n2k_26',
  QE = '_plan_e8n2k_27',
  XE = '_boxNewUser_e8n2k_31',
  KE = '_boxAccountNumber_e8n2k_32',
  GE = '_boxRole_e8n2k_33',
  ZE = '_boxPlan_e8n2k_34',
  JE = '_boxUser_e8n2k_43'
var _e = {
  user: HE,
  fillter: WE,
  userMain: VE,
  newUser: UE,
  accountNumber: qE,
  role: YE,
  plan: QE,
  boxNewUser: XE,
  boxAccountNumber: KE,
  boxRole: GE,
  boxPlan: ZE,
  boxUser: JE
}
function eP() {
  return q('div', {
    className: _e.user,
    children: [
      w('div', { className: _e.fillter }),
      q('div', {
        className: _e.userMain,
        children: [
          q('div', {
            className: _e.newUser,
            children: [
              w('div', { className: _e.boxNewUser }),
              w('div', { className: _e.boxUser }),
              w('div', { className: _e.boxUser }),
              w('div', { className: _e.boxUser }),
              w('div', { className: _e.boxUser }),
              w('div', { className: _e.boxUser })
            ]
          }),
          q('div', {
            className: _e.accountNumber,
            children: [
              w('div', { className: _e.boxAccountNumber }),
              w('div', { className: _e.boxUser }),
              w('div', { className: _e.boxUser }),
              w('div', { className: _e.boxUser }),
              w('div', { className: _e.boxUser }),
              w('div', { className: _e.boxUser })
            ]
          }),
          q('div', {
            className: _e.role,
            children: [
              w('div', { className: _e.boxRole }),
              w('div', { className: _e.boxUser }),
              w('div', { className: _e.boxUser }),
              w('div', { className: _e.boxUser }),
              w('div', { className: _e.boxUser }),
              w('div', { className: _e.boxUser })
            ]
          }),
          q('div', {
            className: _e.plan,
            children: [
              w('div', { className: _e.boxPlan }),
              w('div', { className: _e.boxUser }),
              w('div', { className: _e.boxUser }),
              w('div', { className: _e.boxUser }),
              w('div', { className: _e.boxUser }),
              w('div', { className: _e.boxUser })
            ]
          })
        ]
      })
    ]
  })
}
var tP = (function (e) {
  var t = {}
  function n(i) {
    if (t[i]) return t[i].exports
    var r = (t[i] = { i, l: !1, exports: {} })
    return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
  }
  return (
    (n.m = e),
    (n.c = t),
    (n.d = function (i, r, o) {
      n.o(i, r) || Object.defineProperty(i, r, { enumerable: !0, get: o })
    }),
    (n.r = function (i) {
      typeof Symbol != 'undefined' &&
        Symbol.toStringTag &&
        Object.defineProperty(i, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(i, '__esModule', { value: !0 })
    }),
    (n.t = function (i, r) {
      if ((1 & r && (i = n(i)), 8 & r || (4 & r && typeof i == 'object' && i && i.__esModule)))
        return i
      var o = Object.create(null)
      if (
        (n.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: i }),
        2 & r && typeof i != 'string')
      )
        for (var s in i)
          n.d(
            o,
            s,
            function (a) {
              return i[a]
            }.bind(null, s)
          )
      return o
    }),
    (n.n = function (i) {
      var r =
        i && i.__esModule
          ? function () {
              return i.default
            }
          : function () {
              return i
            }
      return n.d(r, 'a', r), r
    }),
    (n.o = function (i, r) {
      return Object.prototype.hasOwnProperty.call(i, r)
    }),
    (n.p = ''),
    n((n.s = 32))
  )
})([
  function (e, t, n) {
    e.exports = n(27)()
  },
  function (e, t, n) {
    e.exports = n(25)
  },
  function (e, t, n) {
    e.exports = n(21)
  },
  function (e, t, n) {
    var i = n(20)
    e.exports = function (r) {
      for (var o = 1; o < arguments.length; o++)
        if (o % 2) {
          var s = arguments[o] != null ? arguments[o] : {},
            a = Object.keys(s)
          typeof Object.getOwnPropertySymbols == 'function' &&
            (a = a.concat(
              Object.getOwnPropertySymbols(s).filter(function (l) {
                return Object.getOwnPropertyDescriptor(s, l).enumerable
              })
            )),
            a.forEach(function (l) {
              i(r, l, s[l])
            })
        } else Object.defineProperties(r, Object.getOwnPropertyDescriptors(arguments[o]))
      return r
    }
  },
  function (e, t) {
    function n(i, r, o, s, a, l, u) {
      try {
        var c = i[l](u),
          d = c.value
      } catch (f) {
        return void o(f)
      }
      c.done ? r(d) : Promise.resolve(d).then(s, a)
    }
    e.exports = function (i) {
      return function () {
        var r = this,
          o = arguments
        return new Promise(function (s, a) {
          var l = i.apply(r, o)
          function u(d) {
            n(l, s, a, u, c, 'next', d)
          }
          function c(d) {
            n(l, s, a, u, c, 'throw', d)
          }
          u(void 0)
        })
      }
    }
  },
  function (e, t) {
    function n(i) {
      return (
        (e.exports = n =
          Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (r) {
                return r.__proto__ || Object.getPrototypeOf(r)
              }),
        n(i)
      )
    }
    e.exports = n
  },
  function (e, t) {
    e.exports = function (n, i) {
      if (!(n instanceof i)) throw new TypeError('Cannot call a class as a function')
    }
  },
  function (e, t) {
    function n(i, r) {
      for (var o = 0; o < r.length; o++) {
        var s = r[o]
        ;(s.enumerable = s.enumerable || !1),
          (s.configurable = !0),
          'value' in s && (s.writable = !0),
          Object.defineProperty(i, s.key, s)
      }
    }
    e.exports = function (i, r, o) {
      return r && n(i.prototype, r), o && n(i, o), i
    }
  },
  function (e, t, n) {
    var i = n(22),
      r = n(9)
    e.exports = function (o, s) {
      return !s || (i(s) !== 'object' && typeof s != 'function') ? r(o) : s
    }
  },
  function (e, t) {
    e.exports = function (n) {
      if (n === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
      return n
    }
  },
  function (e, t, n) {
    var i = n(23)
    e.exports = function (r, o) {
      if (typeof o != 'function' && o !== null)
        throw new TypeError('Super expression must either be null or a function')
      ;(r.prototype = Object.create(o && o.prototype, {
        constructor: { value: r, writable: !0, configurable: !0 }
      })),
        o && i(r, o)
    }
  },
  function (e, t, n) {
    var i = n(29),
      r = n(30),
      o = n(31)
    e.exports = function (s, a) {
      return i(s) || r(s, a) || o()
    }
  },
  function (e, t, n) {
    var i = n(17),
      r = n(18),
      o = n(19)
    e.exports = function (s) {
      return i(s) || r(s) || o()
    }
  },
  function (e, t, n) {
    n(5)
    var i = n(24)
    function r(o, s, a) {
      return (
        typeof Reflect != 'undefined' && Reflect.get
          ? (e.exports = r = Reflect.get)
          : (e.exports = r =
              function (l, u, c) {
                var d = i(l, u)
                if (d) {
                  var f = Object.getOwnPropertyDescriptor(d, u)
                  return f.get ? f.get.call(c) : f.value
                }
              }),
        r(o, s, a || o)
      )
    }
    e.exports = r
  },
  function (e, t) {
    e.exports =
      'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgOCAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjMzMzMzMzIj48cGF0aCBkPSJNMSwxNCBDMC40LDE0IDAsMTMuNiAwLDEzIEwwLDEgQzAsMC40IDAuNCwwIDEsMCBDMS42LDAgMiwwLjQgMiwxIEwyLDEzIEMyLDEzLjYgMS42LDE0IDEsMTQgWiIgaWQ9IlBhdGgiPjwvcGF0aD48cGF0aCBkPSJNNywxNCBDNi40LDE0IDYsMTMuNiA2LDEzIEw2LDEgQzYsMC40IDYuNCwwIDcsMCBDNy42LDAgOCwwLjQgOCwxIEw4LDEzIEM4LDEzLjYgNy42LDE0IDcsMTQgWiIgaWQ9IlBhdGgiPjwvcGF0aD48L2c+PC9zdmc+Cg=='
  },
  function (e, t) {
    e.exports =
      'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTQgMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUuMCwgMC4wKSIgZmlsbD0iIzMzMzMzMyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC4wLCAwLjApIj48cG9seWdvbiBwb2ludHM9IjcuNzE5IDQuOTY0IDEyLjY5MiAwLjAxNyAxNC4zODkgMS43MTUgOS40MTIgNi42NjYgMTQuMzU0IDExLjYzNCAxMi42NTcgMTMuMzMxIDYuMDE3IDYuNjU3IDcuNzE1IDQuOTYwIj48L3BvbHlnb24+PHBvbHlnb24gcG9pbnRzPSI3LjYxMiA0Ljk2NCA3LjYxNiA0Ljk2MCA5LjMxMyA2LjY1NyAyLjY3NCAxMy4zMzEgMC45NzcgMTEuNjM0IDUuOTE5IDYuNjY2IDAuOTQyIDEuNzE1IDIuNjM5IDAuMDE3Ij48L3BvbHlnb24+PC9nPjwvZz48L3N2Zz4K'
  },
  function (e, t) {
    e.exports =
      'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTEgMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0iTTAuNSwxNC45IEMwLjIsMTQuNyAwLDE0LjQgMCwxNCBMMCwyIEMwLDEuNiAwLjIsMS4zIDAuNSwxLjEgQzAuOCwwLjkgMS4yLDAuOSAxLjUsMS4xIEwxMC41LDcuMSBDMTAuOCw3LjMgMTAuOSw3LjYgMTAuOSw3LjkgQzEwLjksOC4yIDEwLjcsOC41IDEwLjUsOC43IEwxLjUsMTQuNyBDMS40LDE0LjkgMC44LDE1LjEgMC41LDE0LjkgWiBNMiwzLjkgTDIsMTIuMiBMOC4yLDguMSBMMiwzLjkgWiI+PC9wYXRoPjwvZz48L3N2Zz4K'
  },
  function (e, t) {
    e.exports = function (n) {
      if (Array.isArray(n)) {
        for (var i = 0, r = new Array(n.length); i < n.length; i++) r[i] = n[i]
        return r
      }
    }
  },
  function (e, t) {
    e.exports = function (n) {
      if (
        Symbol.iterator in Object(n) ||
        Object.prototype.toString.call(n) === '[object Arguments]'
      )
        return Array.from(n)
    }
  },
  function (e, t) {
    e.exports = function () {
      throw new TypeError('Invalid attempt to spread non-iterable instance')
    }
  },
  function (e, t) {
    e.exports = function (n, i, r) {
      return (
        i in n
          ? Object.defineProperty(n, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (n[i] = r),
        n
      )
    }
  },
  function (e, t, n) {
    var i = (function (r) {
      var o,
        s = Object.prototype,
        a = s.hasOwnProperty,
        l = typeof Symbol == 'function' ? Symbol : {},
        u = l.iterator || '@@iterator',
        c = l.asyncIterator || '@@asyncIterator',
        d = l.toStringTag || '@@toStringTag'
      function f(C, M, D, W) {
        var F = M && M.prototype instanceof v ? M : v,
          de = Object.create(F.prototype),
          me = new Q(W || [])
        return (
          (de._invoke = (function (Ke, We, E) {
            var A = p
            return function (J, K) {
              if (A === _) throw new Error('Generator is already running')
              if (A === g) {
                if (J === 'throw') throw K
                return ue()
              }
              for (E.method = J, E.arg = K; ; ) {
                var V = E.delegate
                if (V) {
                  var re = Y(V, E)
                  if (re) {
                    if (re === m) continue
                    return re
                  }
                }
                if (E.method === 'next') E.sent = E._sent = E.arg
                else if (E.method === 'throw') {
                  if (A === p) throw ((A = g), E.arg)
                  E.dispatchException(E.arg)
                } else E.method === 'return' && E.abrupt('return', E.arg)
                A = _
                var he = h(Ke, We, E)
                if (he.type === 'normal') {
                  if (((A = E.done ? g : y), he.arg === m)) continue
                  return { value: he.arg, done: E.done }
                }
                he.type === 'throw' && ((A = g), (E.method = 'throw'), (E.arg = he.arg))
              }
            }
          })(C, D, me)),
          de
        )
      }
      function h(C, M, D) {
        try {
          return { type: 'normal', arg: C.call(M, D) }
        } catch (W) {
          return { type: 'throw', arg: W }
        }
      }
      r.wrap = f
      var p = 'suspendedStart',
        y = 'suspendedYield',
        _ = 'executing',
        g = 'completed',
        m = {}
      function v() {}
      function x() {}
      function b() {}
      var O = {}
      O[u] = function () {
        return this
      }
      var k = Object.getPrototypeOf,
        P = k && k(k(X([])))
      P && P !== s && a.call(P, u) && (O = P)
      var L = (b.prototype = v.prototype = Object.create(O))
      function I(C) {
        ;['next', 'throw', 'return'].forEach(function (M) {
          C[M] = function (D) {
            return this._invoke(M, D)
          }
        })
      }
      function N(C) {
        var M
        this._invoke = function (D, W) {
          function F() {
            return new Promise(function (de, me) {
              ;(function Ke(We, E, A, J) {
                var K = h(C[We], C, E)
                if (K.type !== 'throw') {
                  var V = K.arg,
                    re = V.value
                  return re && typeof re == 'object' && a.call(re, '__await')
                    ? Promise.resolve(re.__await).then(
                        function (he) {
                          Ke('next', he, A, J)
                        },
                        function (he) {
                          Ke('throw', he, A, J)
                        }
                      )
                    : Promise.resolve(re).then(
                        function (he) {
                          ;(V.value = he), A(V)
                        },
                        function (he) {
                          return Ke('throw', he, A, J)
                        }
                      )
                }
                J(K.arg)
              })(D, W, de, me)
            })
          }
          return (M = M ? M.then(F, F) : F())
        }
      }
      function Y(C, M) {
        var D = C.iterator[M.method]
        if (D === o) {
          if (((M.delegate = null), M.method === 'throw')) {
            if (
              C.iterator.return &&
              ((M.method = 'return'), (M.arg = o), Y(C, M), M.method === 'throw')
            )
              return m
            ;(M.method = 'throw'),
              (M.arg = new TypeError("The iterator does not provide a 'throw' method"))
          }
          return m
        }
        var W = h(D, C.iterator, M.arg)
        if (W.type === 'throw') return (M.method = 'throw'), (M.arg = W.arg), (M.delegate = null), m
        var F = W.arg
        return F
          ? F.done
            ? ((M[C.resultName] = F.value),
              (M.next = C.nextLoc),
              M.method !== 'return' && ((M.method = 'next'), (M.arg = o)),
              (M.delegate = null),
              m)
            : F
          : ((M.method = 'throw'),
            (M.arg = new TypeError('iterator result is not an object')),
            (M.delegate = null),
            m)
      }
      function S(C) {
        var M = { tryLoc: C[0] }
        1 in C && (M.catchLoc = C[1]),
          2 in C && ((M.finallyLoc = C[2]), (M.afterLoc = C[3])),
          this.tryEntries.push(M)
      }
      function Z(C) {
        var M = C.completion || {}
        ;(M.type = 'normal'), delete M.arg, (C.completion = M)
      }
      function Q(C) {
        ;(this.tryEntries = [{ tryLoc: 'root' }]), C.forEach(S, this), this.reset(!0)
      }
      function X(C) {
        if (C) {
          var M = C[u]
          if (M) return M.call(C)
          if (typeof C.next == 'function') return C
          if (!isNaN(C.length)) {
            var D = -1,
              W = function F() {
                for (; ++D < C.length; ) if (a.call(C, D)) return (F.value = C[D]), (F.done = !1), F
                return (F.value = o), (F.done = !0), F
              }
            return (W.next = W)
          }
        }
        return { next: ue }
      }
      function ue() {
        return { value: o, done: !0 }
      }
      return (
        (x.prototype = L.constructor = b),
        (b.constructor = x),
        (b[d] = x.displayName = 'GeneratorFunction'),
        (r.isGeneratorFunction = function (C) {
          var M = typeof C == 'function' && C.constructor
          return !!M && (M === x || (M.displayName || M.name) === 'GeneratorFunction')
        }),
        (r.mark = function (C) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(C, b)
              : ((C.__proto__ = b), d in C || (C[d] = 'GeneratorFunction')),
            (C.prototype = Object.create(L)),
            C
          )
        }),
        (r.awrap = function (C) {
          return { __await: C }
        }),
        I(N.prototype),
        (N.prototype[c] = function () {
          return this
        }),
        (r.AsyncIterator = N),
        (r.async = function (C, M, D, W) {
          var F = new N(f(C, M, D, W))
          return r.isGeneratorFunction(M)
            ? F
            : F.next().then(function (de) {
                return de.done ? de.value : F.next()
              })
        }),
        I(L),
        (L[d] = 'Generator'),
        (L[u] = function () {
          return this
        }),
        (L.toString = function () {
          return '[object Generator]'
        }),
        (r.keys = function (C) {
          var M = []
          for (var D in C) M.push(D)
          return (
            M.reverse(),
            function W() {
              for (; M.length; ) {
                var F = M.pop()
                if (F in C) return (W.value = F), (W.done = !1), W
              }
              return (W.done = !0), W
            }
          )
        }),
        (r.values = X),
        (Q.prototype = {
          constructor: Q,
          reset: function (C) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = o),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = o),
              this.tryEntries.forEach(Z),
              !C)
            )
              for (var M in this)
                M.charAt(0) === 't' && a.call(this, M) && !isNaN(+M.slice(1)) && (this[M] = o)
          },
          stop: function () {
            this.done = !0
            var C = this.tryEntries[0].completion
            if (C.type === 'throw') throw C.arg
            return this.rval
          },
          dispatchException: function (C) {
            if (this.done) throw C
            var M = this
            function D(We, E) {
              return (
                (de.type = 'throw'),
                (de.arg = C),
                (M.next = We),
                E && ((M.method = 'next'), (M.arg = o)),
                !!E
              )
            }
            for (var W = this.tryEntries.length - 1; 0 <= W; --W) {
              var F = this.tryEntries[W],
                de = F.completion
              if (F.tryLoc === 'root') return D('end')
              if (F.tryLoc <= this.prev) {
                var me = a.call(F, 'catchLoc'),
                  Ke = a.call(F, 'finallyLoc')
                if (me && Ke) {
                  if (this.prev < F.catchLoc) return D(F.catchLoc, !0)
                  if (this.prev < F.finallyLoc) return D(F.finallyLoc)
                } else if (me) {
                  if (this.prev < F.catchLoc) return D(F.catchLoc, !0)
                } else {
                  if (!Ke) throw new Error('try statement without catch or finally')
                  if (this.prev < F.finallyLoc) return D(F.finallyLoc)
                }
              }
            }
          },
          abrupt: function (C, M) {
            for (var D = this.tryEntries.length - 1; 0 <= D; --D) {
              var W = this.tryEntries[D]
              if (W.tryLoc <= this.prev && a.call(W, 'finallyLoc') && this.prev < W.finallyLoc) {
                var F = W
                break
              }
            }
            F &&
              (C === 'break' || C === 'continue') &&
              F.tryLoc <= M &&
              M <= F.finallyLoc &&
              (F = null)
            var de = F ? F.completion : {}
            return (
              (de.type = C),
              (de.arg = M),
              F ? ((this.method = 'next'), (this.next = F.finallyLoc), m) : this.complete(de)
            )
          },
          complete: function (C, M) {
            if (C.type === 'throw') throw C.arg
            return (
              C.type === 'break' || C.type === 'continue'
                ? (this.next = C.arg)
                : C.type === 'return'
                ? ((this.rval = this.arg = C.arg), (this.method = 'return'), (this.next = 'end'))
                : C.type === 'normal' && M && (this.next = M),
              m
            )
          },
          finish: function (C) {
            for (var M = this.tryEntries.length - 1; 0 <= M; --M) {
              var D = this.tryEntries[M]
              if (D.finallyLoc === C) return this.complete(D.completion, D.afterLoc), Z(D), m
            }
          },
          catch: function (C) {
            for (var M = this.tryEntries.length - 1; 0 <= M; --M) {
              var D = this.tryEntries[M]
              if (D.tryLoc === C) {
                var W = D.completion
                if (W.type === 'throw') {
                  var F = W.arg
                  Z(D)
                }
                return F
              }
            }
            throw new Error('illegal catch attempt')
          },
          delegateYield: function (C, M, D) {
            return (
              (this.delegate = { iterator: X(C), resultName: M, nextLoc: D }),
              this.method === 'next' && (this.arg = o),
              m
            )
          }
        }),
        r
      )
    })(e.exports)
    try {
      regeneratorRuntime = i
    } catch {
      Function('r', 'regeneratorRuntime = r')(i)
    }
  },
  function (e, t) {
    function n(r) {
      return (n =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (o) {
              return typeof o
            }
          : function (o) {
              return o &&
                typeof Symbol == 'function' &&
                o.constructor === Symbol &&
                o !== Symbol.prototype
                ? 'symbol'
                : typeof o
            })(r)
    }
    function i(r) {
      return (
        typeof Symbol == 'function' && n(Symbol.iterator) === 'symbol'
          ? (e.exports = i =
              function (o) {
                return n(o)
              })
          : (e.exports = i =
              function (o) {
                return o &&
                  typeof Symbol == 'function' &&
                  o.constructor === Symbol &&
                  o !== Symbol.prototype
                  ? 'symbol'
                  : n(o)
              }),
        i(r)
      )
    }
    e.exports = i
  },
  function (e, t) {
    function n(i, r) {
      return (
        (e.exports = n =
          Object.setPrototypeOf ||
          function (o, s) {
            return (o.__proto__ = s), o
          }),
        n(i, r)
      )
    }
    e.exports = n
  },
  function (e, t, n) {
    var i = n(5)
    e.exports = function (r, o) {
      for (; !Object.prototype.hasOwnProperty.call(r, o) && (r = i(r)) !== null; );
      return r
    }
  },
  function (e, t, n) {
    /** @license React v16.8.6
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var i = n(26),
      r = typeof Symbol == 'function' && Symbol.for,
      o = r ? Symbol.for('react.element') : 60103,
      s = r ? Symbol.for('react.portal') : 60106,
      a = r ? Symbol.for('react.fragment') : 60107,
      l = r ? Symbol.for('react.strict_mode') : 60108,
      u = r ? Symbol.for('react.profiler') : 60114,
      c = r ? Symbol.for('react.provider') : 60109,
      d = r ? Symbol.for('react.context') : 60110,
      f = r ? Symbol.for('react.concurrent_mode') : 60111,
      h = r ? Symbol.for('react.forward_ref') : 60112,
      p = r ? Symbol.for('react.suspense') : 60113,
      y = r ? Symbol.for('react.memo') : 60115,
      _ = r ? Symbol.for('react.lazy') : 60116,
      g = typeof Symbol == 'function' && Symbol.iterator
    function m(E) {
      for (
        var A = arguments.length - 1,
          J = 'https://reactjs.org/docs/error-decoder.html?invariant=' + E,
          K = 0;
        K < A;
        K++
      )
        J += '&args[]=' + encodeURIComponent(arguments[K + 1])
      ;(function (V, re, he, rt, Oe, ze, U, G) {
        if (!V) {
          if ((V = void 0) === re)
            V = Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            )
          else {
            var $ = [he, rt, Oe, ze, U, G],
              T = 0
            ;(V = Error(
              re.replace(/%s/g, function () {
                return $[T++]
              })
            )).name = 'Invariant Violation'
          }
          throw ((V.framesToPop = 1), V)
        }
      })(
        !1,
        'Minified React error #' +
          E +
          '; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ',
        J
      )
    }
    var v = {
        isMounted: function () {
          return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
      },
      x = {}
    function b(E, A, J) {
      ;(this.props = E), (this.context = A), (this.refs = x), (this.updater = J || v)
    }
    function O() {}
    function k(E, A, J) {
      ;(this.props = E), (this.context = A), (this.refs = x), (this.updater = J || v)
    }
    ;(b.prototype.isReactComponent = {}),
      (b.prototype.setState = function (E, A) {
        typeof E != 'object' && typeof E != 'function' && E != null && m('85'),
          this.updater.enqueueSetState(this, E, A, 'setState')
      }),
      (b.prototype.forceUpdate = function (E) {
        this.updater.enqueueForceUpdate(this, E, 'forceUpdate')
      }),
      (O.prototype = b.prototype)
    var P = (k.prototype = new O())
    ;(P.constructor = k), i(P, b.prototype), (P.isPureReactComponent = !0)
    var L = { current: null },
      I = { current: null },
      N = Object.prototype.hasOwnProperty,
      Y = { key: !0, ref: !0, __self: !0, __source: !0 }
    function S(E, A, J) {
      var K = void 0,
        V = {},
        re = null,
        he = null
      if (A != null)
        for (K in (A.ref !== void 0 && (he = A.ref), A.key !== void 0 && (re = '' + A.key), A))
          N.call(A, K) && !Y.hasOwnProperty(K) && (V[K] = A[K])
      var rt = arguments.length - 2
      if (rt === 1) V.children = J
      else if (1 < rt) {
        for (var Oe = Array(rt), ze = 0; ze < rt; ze++) Oe[ze] = arguments[ze + 2]
        V.children = Oe
      }
      if (E && E.defaultProps) for (K in (rt = E.defaultProps)) V[K] === void 0 && (V[K] = rt[K])
      return { $$typeof: o, type: E, key: re, ref: he, props: V, _owner: I.current }
    }
    function Z(E) {
      return typeof E == 'object' && E !== null && E.$$typeof === o
    }
    var Q = /\/+/g,
      X = []
    function ue(E, A, J, K) {
      if (X.length) {
        var V = X.pop()
        return (V.result = E), (V.keyPrefix = A), (V.func = J), (V.context = K), (V.count = 0), V
      }
      return { result: E, keyPrefix: A, func: J, context: K, count: 0 }
    }
    function C(E) {
      ;(E.result = null),
        (E.keyPrefix = null),
        (E.func = null),
        (E.context = null),
        (E.count = 0),
        X.length < 10 && X.push(E)
    }
    function M(E, A, J) {
      return E == null
        ? 0
        : (function K(V, re, he, rt) {
            var Oe = typeof V
            ;(Oe !== 'undefined' && Oe !== 'boolean') || (V = null)
            var ze = !1
            if (V === null) ze = !0
            else
              switch (Oe) {
                case 'string':
                case 'number':
                  ze = !0
                  break
                case 'object':
                  switch (V.$$typeof) {
                    case o:
                    case s:
                      ze = !0
                  }
              }
            if (ze) return he(rt, V, re === '' ? '.' + D(V, 0) : re), 1
            if (((ze = 0), (re = re === '' ? '.' : re + ':'), Array.isArray(V)))
              for (var U = 0; U < V.length; U++) {
                var G = re + D((Oe = V[U]), U)
                ze += K(Oe, G, he, rt)
              }
            else if (
              typeof (G =
                V === null || typeof V != 'object'
                  ? null
                  : typeof (G = (g && V[g]) || V['@@iterator']) == 'function'
                  ? G
                  : null) == 'function'
            )
              for (V = G.call(V), U = 0; !(Oe = V.next()).done; )
                ze += K((Oe = Oe.value), (G = re + D(Oe, U++)), he, rt)
            else
              Oe === 'object' &&
                m(
                  '31',
                  (he = '' + V) == '[object Object]'
                    ? 'object with keys {' + Object.keys(V).join(', ') + '}'
                    : he,
                  ''
                )
            return ze
          })(E, '', A, J)
    }
    function D(E, A) {
      return typeof E == 'object' && E !== null && E.key != null
        ? (function (J) {
            var K = { '=': '=0', ':': '=2' }
            return (
              '$' +
              ('' + J).replace(/[=:]/g, function (V) {
                return K[V]
              })
            )
          })(E.key)
        : A.toString(36)
    }
    function W(E, A) {
      E.func.call(E.context, A, E.count++)
    }
    function F(E, A, J) {
      var K = E.result,
        V = E.keyPrefix
      ;(E = E.func.call(E.context, A, E.count++)),
        Array.isArray(E)
          ? de(E, K, J, function (re) {
              return re
            })
          : E != null &&
            (Z(E) &&
              (E = (function (re, he) {
                return {
                  $$typeof: o,
                  type: re.type,
                  key: he,
                  ref: re.ref,
                  props: re.props,
                  _owner: re._owner
                }
              })(
                E,
                V +
                  (!E.key || (A && A.key === E.key) ? '' : ('' + E.key).replace(Q, '$&/') + '/') +
                  J
              )),
            K.push(E))
    }
    function de(E, A, J, K, V) {
      var re = ''
      J != null && (re = ('' + J).replace(Q, '$&/') + '/'), M(E, F, (A = ue(A, re, K, V))), C(A)
    }
    function me() {
      var E = L.current
      return E === null && m('321'), E
    }
    var Ke = {
        Children: {
          map: function (E, A, J) {
            if (E == null) return E
            var K = []
            return de(E, K, null, A, J), K
          },
          forEach: function (E, A, J) {
            if (E == null) return E
            M(E, W, (A = ue(null, null, A, J))), C(A)
          },
          count: function (E) {
            return M(
              E,
              function () {
                return null
              },
              null
            )
          },
          toArray: function (E) {
            var A = []
            return (
              de(E, A, null, function (J) {
                return J
              }),
              A
            )
          },
          only: function (E) {
            return Z(E) || m('143'), E
          }
        },
        createRef: function () {
          return { current: null }
        },
        Component: b,
        PureComponent: k,
        createContext: function (E, A) {
          return (
            A === void 0 && (A = null),
            ((E = {
              $$typeof: d,
              _calculateChangedBits: A,
              _currentValue: E,
              _currentValue2: E,
              _threadCount: 0,
              Provider: null,
              Consumer: null
            }).Provider = { $$typeof: c, _context: E }),
            (E.Consumer = E)
          )
        },
        forwardRef: function (E) {
          return { $$typeof: h, render: E }
        },
        lazy: function (E) {
          return { $$typeof: _, _ctor: E, _status: -1, _result: null }
        },
        memo: function (E, A) {
          return { $$typeof: y, type: E, compare: A === void 0 ? null : A }
        },
        useCallback: function (E, A) {
          return me().useCallback(E, A)
        },
        useContext: function (E, A) {
          return me().useContext(E, A)
        },
        useEffect: function (E, A) {
          return me().useEffect(E, A)
        },
        useImperativeHandle: function (E, A, J) {
          return me().useImperativeHandle(E, A, J)
        },
        useDebugValue: function () {},
        useLayoutEffect: function (E, A) {
          return me().useLayoutEffect(E, A)
        },
        useMemo: function (E, A) {
          return me().useMemo(E, A)
        },
        useReducer: function (E, A, J) {
          return me().useReducer(E, A, J)
        },
        useRef: function (E) {
          return me().useRef(E)
        },
        useState: function (E) {
          return me().useState(E)
        },
        Fragment: a,
        StrictMode: l,
        Suspense: p,
        createElement: S,
        cloneElement: function (E, A, J) {
          E == null && m('267', E)
          var K = void 0,
            V = i({}, E.props),
            re = E.key,
            he = E.ref,
            rt = E._owner
          if (A != null) {
            A.ref !== void 0 && ((he = A.ref), (rt = I.current)),
              A.key !== void 0 && (re = '' + A.key)
            var Oe = void 0
            for (K in (E.type && E.type.defaultProps && (Oe = E.type.defaultProps), A))
              N.call(A, K) &&
                !Y.hasOwnProperty(K) &&
                (V[K] = A[K] === void 0 && Oe !== void 0 ? Oe[K] : A[K])
          }
          if ((K = arguments.length - 2) === 1) V.children = J
          else if (1 < K) {
            Oe = Array(K)
            for (var ze = 0; ze < K; ze++) Oe[ze] = arguments[ze + 2]
            V.children = Oe
          }
          return { $$typeof: o, type: E.type, key: re, ref: he, props: V, _owner: rt }
        },
        createFactory: function (E) {
          var A = S.bind(null, E)
          return (A.type = E), A
        },
        isValidElement: Z,
        version: '16.8.6',
        unstable_ConcurrentMode: f,
        unstable_Profiler: u,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentDispatcher: L,
          ReactCurrentOwner: I,
          assign: i
        }
      },
      We = Ke
    e.exports = We.default || We
  },
  function (e, t, n) {
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var i = Object.getOwnPropertySymbols,
      r = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable
    e.exports = (function () {
      try {
        if (!Object.assign) return !1
        var s = new String('abc')
        if (((s[5] = 'de'), Object.getOwnPropertyNames(s)[0] === '5')) return !1
        for (var a = {}, l = 0; l < 10; l++) a['_' + String.fromCharCode(l)] = l
        if (
          Object.getOwnPropertyNames(a)
            .map(function (c) {
              return a[c]
            })
            .join('') !== '0123456789'
        )
          return !1
        var u = {}
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function (c) {
            u[c] = c
          }),
          Object.keys(Object.assign({}, u)).join('') === 'abcdefghijklmnopqrst'
        )
      } catch {
        return !1
      }
    })()
      ? Object.assign
      : function (s, a) {
          for (
            var l,
              u,
              c = (function (p) {
                if (p == null)
                  throw new TypeError('Object.assign cannot be called with null or undefined')
                return Object(p)
              })(s),
              d = 1;
            d < arguments.length;
            d++
          ) {
            for (var f in (l = Object(arguments[d]))) r.call(l, f) && (c[f] = l[f])
            if (i) {
              u = i(l)
              for (var h = 0; h < u.length; h++) o.call(l, u[h]) && (c[u[h]] = l[u[h]])
            }
          }
          return c
        }
  },
  function (e, t, n) {
    var i = n(28)
    function r() {}
    function o() {}
    ;(o.resetWarningCache = r),
      (e.exports = function () {
        function s(u, c, d, f, h, p) {
          if (p !== i) {
            var y = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            )
            throw ((y.name = 'Invariant Violation'), y)
          }
        }
        function a() {
          return s
        }
        var l = {
          array: (s.isRequired = s),
          bool: s,
          func: s,
          number: s,
          object: s,
          string: s,
          symbol: s,
          any: s,
          arrayOf: a,
          element: s,
          elementType: s,
          instanceOf: a,
          node: s,
          objectOf: a,
          oneOf: a,
          oneOfType: a,
          shape: a,
          exact: a,
          checkPropTypes: o,
          resetWarningCache: r
        }
        return (l.PropTypes = l)
      })
  },
  function (e, t, n) {
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
  },
  function (e, t) {
    e.exports = function (n) {
      if (Array.isArray(n)) return n
    }
  },
  function (e, t) {
    e.exports = function (n, i) {
      var r = [],
        o = !0,
        s = !1,
        a = void 0
      try {
        for (
          var l, u = n[Symbol.iterator]();
          !(o = (l = u.next()).done) && (r.push(l.value), !i || r.length !== i);
          o = !0
        );
      } catch (c) {
        ;(s = !0), (a = c)
      } finally {
        try {
          o || u.return == null || u.return()
        } finally {
          if (s) throw a
        }
      }
      return r
    }
  },
  function (e, t) {
    e.exports = function () {
      throw new TypeError('Invalid attempt to destructure non-iterable instance')
    }
  },
  function (e, t, n) {
    n.r(t)
    function i(U) {
      var G = U.input,
        $ = U.previews,
        T = U.submitButton,
        H = U.dropzoneProps,
        ee = U.files,
        B = U.extra.maxFiles
      return N.a.createElement(
        'div',
        Object.assign({}, H),
        $,
        ee.length < B && G,
        0 < ee.length && T
      )
    }
    var r = n(12),
      o = n.n(r),
      s = n(3),
      a = n.n(s),
      l = n(2),
      u = n.n(l),
      c = n(4),
      d = n.n(c),
      f = n(6),
      h = n.n(f),
      p = n(7),
      y = n.n(p),
      _ = n(8),
      g = n.n(_),
      m = n(9),
      v = n.n(m),
      x = n(10),
      b = n.n(x),
      O = n(5),
      k = n.n(O),
      P = n(13),
      L = n.n(P),
      I = n(1),
      N = n.n(I),
      Y = n(0),
      S = n.n(Y)
    i.propTypes = {
      input: S.a.node,
      previews: S.a.arrayOf(S.a.node),
      submitButton: S.a.node,
      dropzoneProps: S.a.shape({
        ref: S.a.any.isRequired,
        className: S.a.string.isRequired,
        style: S.a.object,
        onDragEnter: S.a.func.isRequired,
        onDragOver: S.a.func.isRequired,
        onDragLeave: S.a.func.isRequired,
        onDrop: S.a.func.isRequired
      }).isRequired,
      files: S.a.arrayOf(S.a.any).isRequired,
      extra: S.a.shape({
        active: S.a.bool.isRequired,
        reject: S.a.bool.isRequired,
        dragged: S.a.arrayOf(S.a.any).isRequired,
        accept: S.a.string.isRequired,
        multiple: S.a.bool.isRequired,
        minSizeBytes: S.a.number.isRequired,
        maxSizeBytes: S.a.number.isRequired,
        maxFiles: S.a.number.isRequired,
        onFiles: S.a.func.isRequired,
        onCancelFile: S.a.func.isRequired,
        onRemoveFile: S.a.func.isRequired,
        onRestartFile: S.a.func.isRequired
      }).isRequired
    }
    function Z(U) {
      var G,
        $ = U.className,
        T = U.labelClassName,
        H = U.labelWithFilesClassName,
        ee = U.style,
        B = U.labelStyle,
        pe = U.labelWithFilesStyle,
        ne = U.getFilesFromEvent,
        Te = U.accept,
        Ve = U.multiple,
        je = U.disabled,
        Ce = U.content,
        gt = U.withFilesContent,
        ot = U.onFiles,
        st = U.files
      return N.a.createElement(
        'label',
        { className: 0 < st.length ? H : T, style: 0 < st.length ? pe : B },
        0 < st.length ? gt : Ce,
        N.a.createElement('input', {
          className: $,
          style: ee,
          type: 'file',
          accept: Te,
          multiple: Ve,
          disabled: je,
          onChange:
            ((G = d()(
              u.a.mark(function Ge(ye) {
                var tt, ve
                return u.a.wrap(function (fe) {
                  for (;;)
                    switch ((fe.prev = fe.next)) {
                      case 0:
                        return (tt = ye.target), (fe.next = 3), ne(ye)
                      case 3:
                        ;(ve = fe.sent), ot(ve), (tt.value = null)
                      case 6:
                      case 'end':
                        return fe.stop()
                    }
                }, Ge)
              })
            )),
            function (Ge) {
              return G.apply(this, arguments)
            })
        })
      )
    }
    var Q = i
    Z.propTypes = {
      className: S.a.string,
      labelClassName: S.a.string,
      labelWithFilesClassName: S.a.string,
      style: S.a.object,
      labelStyle: S.a.object,
      labelWithFilesStyle: S.a.object,
      getFilesFromEvent: S.a.func.isRequired,
      accept: S.a.string.isRequired,
      multiple: S.a.bool.isRequired,
      disabled: S.a.bool.isRequired,
      content: S.a.node,
      withFilesContent: S.a.node,
      onFiles: S.a.func.isRequired,
      files: S.a.arrayOf(S.a.any).isRequired,
      extra: S.a.shape({
        active: S.a.bool.isRequired,
        reject: S.a.bool.isRequired,
        dragged: S.a.arrayOf(S.a.any).isRequired,
        accept: S.a.string.isRequired,
        multiple: S.a.bool.isRequired,
        minSizeBytes: S.a.number.isRequired,
        maxSizeBytes: S.a.number.isRequired,
        maxFiles: S.a.number.isRequired
      }).isRequired
    }
    function X(U) {
      for (var G = 0, $ = U; 1024 <= $; ) ($ /= 1024), (G += 1)
      return ''
        .concat($.toFixed(10 <= $ || G < 1 ? 0 : 1))
        .concat(['bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'][G])
    }
    function ue(U) {
      var G = new Date(0)
      G.setSeconds(U)
      var $ = G.toISOString().slice(11, 19)
      return U < 3600 ? $.slice(3) : $
    }
    function C(U, G) {
      if (!G || G === '*') return !0
      var $ = U.type || '',
        T = $.replace(/\/.*$/, '')
      return G.split(',')
        .map(function (H) {
          return H.trim()
        })
        .some(function (H) {
          return H.charAt(0) === '.'
            ? U.name === void 0 || U.name.toLowerCase().endsWith(H.toLowerCase())
            : H.endsWith('/*')
            ? T === H.replace(/\/.*$/, '')
            : $ === H
        })
    }
    function M(U) {
      for (var G = arguments.length, $ = new Array(1 < G ? G - 1 : 0), T = 1; T < G; T++)
        $[T - 1] = arguments[T]
      return typeof U == 'function' ? U.apply(void 0, $) : U
    }
    function D(U) {
      var G = null
      if ('dataTransfer' in U) {
        var $ = U.dataTransfer
        'files' in $ && $.files.length ? (G = $.files) : $.items && $.items.length && (G = $.items)
      } else U.target && U.target.files && (G = U.target.files)
      return Array.prototype.slice.call(G)
    }
    var W = Z,
      F = n(11),
      de = n.n(F),
      me = {
        dropzone: 'dzu-dropzone',
        dropzoneActive: 'dzu-dropzoneActive',
        dropzoneReject: 'dzu-dropzoneActive',
        dropzoneDisabled: 'dzu-dropzoneDisabled',
        input: 'dzu-input',
        inputLabel: 'dzu-inputLabel',
        inputLabelWithFiles: 'dzu-inputLabelWithFiles',
        preview: 'dzu-previewContainer',
        previewImage: 'dzu-previewImage',
        submitButtonContainer: 'dzu-submitButtonContainer',
        submitButton: 'dzu-submitButton'
      },
      Ke = n(14),
      We = n.n(Ke),
      E = n(15),
      A = n.n(E),
      J = n(16),
      K = n.n(J),
      V = {
        cancel: { backgroundImage: 'url('.concat(We.a, ')') },
        remove: { backgroundImage: 'url('.concat(A.a, ')') },
        restart: { backgroundImage: 'url('.concat(K.a, ')') }
      },
      re = (function (U) {
        function G() {
          return h()(this, G), g()(this, k()(G).apply(this, arguments))
        }
        return (
          b()(G, U),
          y()(G, [
            {
              key: 'render',
              value: function () {
                var $ = this.props,
                  T = $.className,
                  H = $.imageClassName,
                  ee = $.style,
                  B = $.imageStyle,
                  pe = $.fileWithMeta,
                  ne = pe.cancel,
                  Te = pe.remove,
                  Ve = pe.restart,
                  je = $.meta,
                  Ce = je.name,
                  gt = Ce === void 0 ? '' : Ce,
                  ot = je.percent,
                  st = ot === void 0 ? 0 : ot,
                  Ge = je.size,
                  ye = Ge === void 0 ? 0 : Ge,
                  tt = je.previewUrl,
                  ve = je.status,
                  fe = je.duration,
                  Yt = je.validationError,
                  se = $.isUpload,
                  un = $.canCancel,
                  Ue = $.canRemove,
                  Nn = $.canRestart,
                  Jn = $.extra.minSizeBytes,
                  ct = ''.concat(gt || '?', ', ').concat(X(ye))
                return (
                  fe && (ct = ''.concat(ct, ', ').concat(ue(fe))),
                  ve === 'error_file_size' || ve === 'error_validation'
                    ? N.a.createElement(
                        'div',
                        { className: T, style: ee },
                        N.a.createElement('span', { className: 'dzu-previewFileNameError' }, ct),
                        ve === 'error_file_size' &&
                          N.a.createElement(
                            'span',
                            null,
                            ye < Jn ? 'File too small' : 'File too big'
                          ),
                        ve === 'error_validation' && N.a.createElement('span', null, String(Yt)),
                        Ue &&
                          N.a.createElement('span', {
                            className: 'dzu-previewButton',
                            style: V.remove,
                            onClick: Te
                          })
                      )
                    : ((ve !== 'error_upload_params' &&
                        ve !== 'exception_upload' &&
                        ve !== 'error_upload') ||
                        (ct = ''.concat(ct, ' (upload failed)')),
                      ve === 'aborted' && (ct = ''.concat(ct, ' (cancelled)')),
                      N.a.createElement(
                        'div',
                        { className: T, style: ee },
                        tt &&
                          N.a.createElement('img', {
                            className: H,
                            style: B,
                            src: tt,
                            alt: ct,
                            title: ct
                          }),
                        !tt && N.a.createElement('span', { className: 'dzu-previewFileName' }, ct),
                        N.a.createElement(
                          'div',
                          { className: 'dzu-previewStatusContainer' },
                          se &&
                            N.a.createElement('progress', {
                              max: 100,
                              value: ve === 'done' || ve === 'headers_received' ? 100 : st
                            }),
                          ve === 'uploading' &&
                            un &&
                            N.a.createElement('span', {
                              className: 'dzu-previewButton',
                              style: V.cancel,
                              onClick: ne
                            }),
                          ve !== 'preparing' &&
                            ve !== 'getting_upload_params' &&
                            ve !== 'uploading' &&
                            Ue &&
                            N.a.createElement('span', {
                              className: 'dzu-previewButton',
                              style: V.remove,
                              onClick: Te
                            }),
                          [
                            'error_upload_params',
                            'exception_upload',
                            'error_upload',
                            'aborted',
                            'ready'
                          ].includes(ve) &&
                            Nn &&
                            N.a.createElement('span', {
                              className: 'dzu-previewButton',
                              style: V.restart,
                              onClick: Ve
                            })
                        )
                      ))
                )
              }
            }
          ]),
          G
        )
      })(N.a.PureComponent)
    re.propTypes = {
      className: S.a.string,
      imageClassName: S.a.string,
      style: S.a.object,
      imageStyle: S.a.object,
      fileWithMeta: S.a.shape({
        file: S.a.any.isRequired,
        meta: S.a.object.isRequired,
        cancel: S.a.func.isRequired,
        restart: S.a.func.isRequired,
        remove: S.a.func.isRequired,
        xhr: S.a.any
      }).isRequired,
      meta: S.a.shape({
        status: S.a.oneOf([
          'preparing',
          'error_file_size',
          'error_validation',
          'ready',
          'getting_upload_params',
          'error_upload_params',
          'uploading',
          'exception_upload',
          'aborted',
          'error_upload',
          'headers_received',
          'done'
        ]).isRequired,
        type: S.a.string.isRequired,
        name: S.a.string,
        uploadedDate: S.a.string.isRequired,
        percent: S.a.number,
        size: S.a.number,
        lastModifiedDate: S.a.string,
        previewUrl: S.a.string,
        duration: S.a.number,
        width: S.a.number,
        height: S.a.number,
        videoWidth: S.a.number,
        videoHeight: S.a.number,
        validationError: S.a.any
      }).isRequired,
      isUpload: S.a.bool.isRequired,
      canCancel: S.a.bool.isRequired,
      canRemove: S.a.bool.isRequired,
      canRestart: S.a.bool.isRequired,
      files: S.a.arrayOf(S.a.any).isRequired,
      extra: S.a.shape({
        active: S.a.bool.isRequired,
        reject: S.a.bool.isRequired,
        dragged: S.a.arrayOf(S.a.any).isRequired,
        accept: S.a.string.isRequired,
        multiple: S.a.bool.isRequired,
        minSizeBytes: S.a.number.isRequired,
        maxSizeBytes: S.a.number.isRequired,
        maxFiles: S.a.number.isRequired
      }).isRequired
    }
    function he(U) {
      var G = U.className,
        $ = U.buttonClassName,
        T = U.style,
        H = U.buttonStyle,
        ee = U.disabled,
        B = U.content,
        pe = U.onSubmit,
        ne = U.files,
        Te =
          ne.some(function (Ve) {
            return ['preparing', 'getting_upload_params', 'uploading'].includes(Ve.meta.status)
          }) ||
          !ne.some(function (Ve) {
            return ['headers_received', 'done'].includes(Ve.meta.status)
          })
      return N.a.createElement(
        'div',
        { className: G, style: T },
        N.a.createElement(
          'button',
          {
            className: $,
            style: H,
            onClick: function () {
              pe(
                ne.filter(function (Ve) {
                  return ['headers_received', 'done'].includes(Ve.meta.status)
                })
              )
            },
            disabled: ee || Te
          },
          B
        )
      )
    }
    var rt = re
    he.propTypes = {
      className: S.a.string,
      buttonClassName: S.a.string,
      style: S.a.object,
      buttonStyle: S.a.object,
      disabled: S.a.bool.isRequired,
      content: S.a.node,
      onSubmit: S.a.func.isRequired,
      files: S.a.arrayOf(S.a.object).isRequired,
      extra: S.a.shape({
        active: S.a.bool.isRequired,
        reject: S.a.bool.isRequired,
        dragged: S.a.arrayOf(S.a.any).isRequired,
        accept: S.a.string.isRequired,
        multiple: S.a.bool.isRequired,
        minSizeBytes: S.a.number.isRequired,
        maxSizeBytes: S.a.number.isRequired,
        maxFiles: S.a.number.isRequired
      }).isRequired
    }
    var Oe = he
    n.d(t, 'Layout', function () {
      return Q
    }),
      n.d(t, 'Input', function () {
        return W
      }),
      n.d(t, 'Preview', function () {
        return rt
      }),
      n.d(t, 'SubmitButton', function () {
        return Oe
      }),
      n.d(t, 'formatBytes', function () {
        return X
      }),
      n.d(t, 'formatDuration', function () {
        return ue
      }),
      n.d(t, 'accepts', function () {
        return C
      }),
      n.d(t, 'defaultClassNames', function () {
        return me
      }),
      n.d(t, 'getFilesFromEvent', function () {
        return D
      })
    var ze = (function (U) {
      function G($) {
        var T
        return (
          h()(this, G),
          ((T = g()(this, k()(G).call(this, $))).forceUpdate = function () {
            T.mounted && L()(k()(G.prototype), 'forceUpdate', v()(T)).call(v()(T))
          }),
          (T.getFilesFromEvent = function () {
            return T.props.getFilesFromEvent || D
          }),
          (T.getDataTransferItemsFromEvent = function () {
            return T.props.getDataTransferItemsFromEvent || D
          }),
          (T.handleDragEnter = (function () {
            var H = d()(
              u.a.mark(function ee(B) {
                var pe
                return u.a.wrap(function (ne) {
                  for (;;)
                    switch ((ne.prev = ne.next)) {
                      case 0:
                        return (
                          B.preventDefault(),
                          B.stopPropagation(),
                          (ne.next = 4),
                          T.getDataTransferItemsFromEvent()(B)
                        )
                      case 4:
                        ;(pe = ne.sent), T.setState({ active: !0, dragged: pe })
                      case 6:
                      case 'end':
                        return ne.stop()
                    }
                }, ee)
              })
            )
            return function (ee) {
              return H.apply(this, arguments)
            }
          })()),
          (T.handleDragOver = (function () {
            var H = d()(
              u.a.mark(function ee(B) {
                var pe
                return u.a.wrap(function (ne) {
                  for (;;)
                    switch ((ne.prev = ne.next)) {
                      case 0:
                        return (
                          B.preventDefault(),
                          B.stopPropagation(),
                          clearTimeout(T.dragTimeoutId),
                          (ne.next = 5),
                          T.getDataTransferItemsFromEvent()(B)
                        )
                      case 5:
                        ;(pe = ne.sent), T.setState({ active: !0, dragged: pe })
                      case 7:
                      case 'end':
                        return ne.stop()
                    }
                }, ee)
              })
            )
            return function (ee) {
              return H.apply(this, arguments)
            }
          })()),
          (T.handleDragLeave = function (H) {
            H.preventDefault(),
              H.stopPropagation(),
              (T.dragTimeoutId = window.setTimeout(function () {
                return T.setState({ active: !1, dragged: [] })
              }, 150))
          }),
          (T.handleDrop = (function () {
            var H = d()(
              u.a.mark(function ee(B) {
                var pe
                return u.a.wrap(function (ne) {
                  for (;;)
                    switch ((ne.prev = ne.next)) {
                      case 0:
                        return (
                          B.preventDefault(),
                          B.stopPropagation(),
                          T.setState({ active: !1, dragged: [] }),
                          (ne.next = 5),
                          T.getFilesFromEvent()(B)
                        )
                      case 5:
                        ;(pe = ne.sent), T.handleFiles(pe)
                      case 7:
                      case 'end':
                        return ne.stop()
                    }
                }, ee)
              })
            )
            return function (ee) {
              return H.apply(this, arguments)
            }
          })()),
          (T.handleDropDisabled = function (H) {
            H.preventDefault(), H.stopPropagation(), T.setState({ active: !1, dragged: [] })
          }),
          (T.handleChangeStatus = function (H) {
            if (T.props.onChangeStatus) {
              var ee = (T.props.onChangeStatus(H, H.meta.status, T.files) || {}).meta,
                B = ee === void 0 ? {} : ee
              B && (delete B.status, (H.meta = a()({}, H.meta, {}, B)), T.forceUpdate())
            }
          }),
          (T.handleSubmit = function (H) {
            T.props.onSubmit && T.props.onSubmit(H, o()(T.files))
          }),
          (T.handleCancel = function (H) {
            H.meta.status === 'uploading' &&
              ((H.meta.status = 'aborted'),
              H.xhr && H.xhr.abort(),
              T.handleChangeStatus(H),
              T.forceUpdate())
          }),
          (T.handleRemove = function (H) {
            var ee = T.files.findIndex(function (B) {
              return B === H
            })
            ee !== -1 &&
              (URL.revokeObjectURL(H.meta.previewUrl || ''),
              (H.meta.status = 'removed'),
              T.handleChangeStatus(H),
              T.files.splice(ee, 1),
              T.forceUpdate())
          }),
          (T.handleRestart = function (H) {
            T.props.getUploadParams &&
              (H.meta.status === 'ready'
                ? (H.meta.status = 'started')
                : (H.meta.status = 'restarted'),
              T.handleChangeStatus(H),
              (H.meta.status = 'getting_upload_params'),
              (H.meta.percent = 0),
              T.handleChangeStatus(H),
              T.forceUpdate(),
              T.uploadFile(H))
          }),
          (T.handleFiles = function (H) {
            H.forEach(function (B, pe) {
              return T.handleFile(B, ''.concat(new Date().getTime(), '-').concat(pe))
            })
            var ee = T.dropzone.current
            ee &&
              setTimeout(function () {
                return ee.scroll({ top: ee.scrollHeight, behavior: 'smooth' })
              }, 150)
          }),
          (T.handleFile = (function () {
            var H = d()(
              u.a.mark(function ee(B, pe) {
                var ne, Te, Ve, je, Ce, gt, ot, st, Ge, ye, tt, ve, fe, Yt, se, un
                return u.a.wrap(function (Ue) {
                  for (;;)
                    switch ((Ue.prev = Ue.next)) {
                      case 0:
                        if (
                          ((ne = B.name),
                          (Te = B.size),
                          (Ve = B.type),
                          (je = B.lastModified),
                          (Ce = T.props),
                          (gt = Ce.minSizeBytes),
                          (ot = Ce.maxSizeBytes),
                          (st = Ce.maxFiles),
                          (Ge = Ce.accept),
                          (ye = Ce.getUploadParams),
                          (tt = Ce.autoUpload),
                          (ve = Ce.validate),
                          (fe = new Date().toISOString()),
                          (Yt = je && new Date(je).toISOString()),
                          (se = {
                            file: B,
                            meta: {
                              name: ne,
                              size: Te,
                              type: Ve,
                              lastModifiedDate: Yt,
                              uploadedDate: fe,
                              percent: 0,
                              id: pe
                            }
                          }),
                          B.type === 'application/x-moz-file' || C(B, Ge))
                        ) {
                          Ue.next = 9
                          break
                        }
                        return (
                          (se.meta.status = 'rejected_file_type'),
                          T.handleChangeStatus(se),
                          Ue.abrupt('return')
                        )
                      case 9:
                        if (T.files.length >= st)
                          return (
                            (se.meta.status = 'rejected_max_files'),
                            T.handleChangeStatus(se),
                            Ue.abrupt('return')
                          )
                        Ue.next = 13
                        break
                      case 13:
                        if (
                          ((se.cancel = function () {
                            return T.handleCancel(se)
                          }),
                          (se.remove = function () {
                            return T.handleRemove(se)
                          }),
                          (se.restart = function () {
                            return T.handleRestart(se)
                          }),
                          (se.meta.status = 'preparing'),
                          T.files.push(se),
                          T.handleChangeStatus(se),
                          T.forceUpdate(),
                          Te < gt || ot < Te)
                        )
                          return (
                            (se.meta.status = 'error_file_size'),
                            T.handleChangeStatus(se),
                            T.forceUpdate(),
                            Ue.abrupt('return')
                          )
                        Ue.next = 25
                        break
                      case 25:
                        return (Ue.next = 27), T.generatePreview(se)
                      case 27:
                        if (!ve) {
                          Ue.next = 35
                          break
                        }
                        if ((un = ve(se)))
                          return (
                            (se.meta.status = 'error_validation'),
                            (se.meta.validationError = un),
                            T.handleChangeStatus(se),
                            T.forceUpdate(),
                            Ue.abrupt('return')
                          )
                        Ue.next = 35
                        break
                      case 35:
                        ye
                          ? tt
                            ? (T.uploadFile(se), (se.meta.status = 'getting_upload_params'))
                            : (se.meta.status = 'ready')
                          : (se.meta.status = 'done'),
                          T.handleChangeStatus(se),
                          T.forceUpdate()
                      case 38:
                      case 'end':
                        return Ue.stop()
                    }
                }, ee)
              })
            )
            return function (ee, B) {
              return H.apply(this, arguments)
            }
          })()),
          (T.generatePreview = (function () {
            var H = d()(
              u.a.mark(function ee(B) {
                var pe, ne, Te, Ve, je, Ce, gt, ot, st, Ge
                return u.a.wrap(
                  function (ye) {
                    for (;;)
                      switch ((ye.prev = ye.next)) {
                        case 0:
                          if (
                            ((pe = B.meta.type),
                            (ne = B.file),
                            (Te = pe.startsWith('image/')),
                            (Ve = pe.startsWith('audio/')),
                            (je = pe.startsWith('video/')),
                            Te || Ve || je)
                          ) {
                            ye.next = 6
                            break
                          }
                          return ye.abrupt('return')
                        case 6:
                          if (
                            ((Ce = URL.createObjectURL(ne)),
                            (gt = function (tt) {
                              return Promise.race([
                                new Promise(function (ve) {
                                  tt instanceof HTMLImageElement
                                    ? (tt.onload = ve)
                                    : (tt.onloadedmetadata = ve)
                                }),
                                new Promise(function (ve, fe) {
                                  setTimeout(fe, 1e3)
                                })
                              ])
                            }),
                            (ye.prev = 8),
                            Te)
                          )
                            return (
                              ((ot = new Image()).src = Ce),
                              (B.meta.previewUrl = Ce),
                              (ye.next = 15),
                              gt(ot)
                            )
                          ye.next = 17
                          break
                        case 15:
                          ;(B.meta.width = ot.width), (B.meta.height = ot.height)
                        case 17:
                          if (Ve) return ((st = new Audio()).src = Ce), (ye.next = 22), gt(st)
                          ye.next = 23
                          break
                        case 22:
                          B.meta.duration = st.duration
                        case 23:
                          if (je)
                            return (
                              ((Ge = document.createElement('video')).src = Ce),
                              (ye.next = 28),
                              gt(Ge)
                            )
                          ye.next = 31
                          break
                        case 28:
                          ;(B.meta.duration = Ge.duration),
                            (B.meta.videoWidth = Ge.videoWidth),
                            (B.meta.videoHeight = Ge.videoHeight)
                        case 31:
                          Te || URL.revokeObjectURL(Ce), (ye.next = 37)
                          break
                        case 34:
                          ;(ye.prev = 34), (ye.t0 = ye.catch(8)), URL.revokeObjectURL(Ce)
                        case 37:
                          T.forceUpdate()
                        case 38:
                        case 'end':
                          return ye.stop()
                      }
                  },
                  ee,
                  null,
                  [[8, 34]]
                )
              })
            )
            return function (ee) {
              return H.apply(this, arguments)
            }
          })()),
          (T.uploadFile = (function () {
            var H = d()(
              u.a.mark(function ee(B) {
                var pe,
                  ne,
                  Te,
                  Ve,
                  je,
                  Ce,
                  gt,
                  ot,
                  st,
                  Ge,
                  ye,
                  tt,
                  ve,
                  fe,
                  Yt,
                  se,
                  un,
                  Ue,
                  Nn,
                  Jn,
                  ct
                return u.a.wrap(
                  function (Ze) {
                    for (;;)
                      switch ((Ze.prev = Ze.next)) {
                        case 0:
                          if ((pe = T.props.getUploadParams)) {
                            Ze.next = 3
                            break
                          }
                          return Ze.abrupt('return')
                        case 3:
                          return (ne = null), (Ze.prev = 4), (Ze.next = 7), pe(B)
                        case 7:
                          ;(ne = Ze.sent), (Ze.next = 13)
                          break
                        case 10:
                          ;(Ze.prev = 10),
                            (Ze.t0 = Ze.catch(4)),
                            console.error('Error Upload Params', Ze.t0.stack)
                        case 13:
                          if (ne === null) return Ze.abrupt('return')
                          Ze.next = 15
                          break
                        case 15:
                          if (
                            ((Ve = (Te = ne).url),
                            (je = Te.method),
                            (Ce = je === void 0 ? 'POST' : je),
                            (gt = Te.body),
                            (ot = Te.fields),
                            (st = ot === void 0 ? {} : ot),
                            (Ge = Te.headers),
                            (ye = Ge === void 0 ? {} : Ge),
                            (tt = Te.meta),
                            delete (ve = tt === void 0 ? {} : tt).status,
                            Ve)
                          ) {
                            Ze.next = 22
                            break
                          }
                          return (
                            (B.meta.status = 'error_upload_params'),
                            T.handleChangeStatus(B),
                            T.forceUpdate(),
                            Ze.abrupt('return')
                          )
                        case 22:
                          for (
                            fe = new XMLHttpRequest(),
                              Yt = new FormData(),
                              fe.open(Ce, Ve, !0),
                              se = 0,
                              un = Object.keys(st);
                            se < un.length;
                            se++
                          )
                            (Ue = un[se]), Yt.append(Ue, st[Ue])
                          for (
                            fe.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
                              Nn = 0,
                              Jn = Object.keys(ye);
                            Nn < Jn.length;
                            Nn++
                          )
                            (ct = Jn[Nn]), fe.setRequestHeader(ct, ye[ct])
                          ;(B.meta = a()({}, B.meta, {}, ve)),
                            fe.upload.addEventListener('progress', function (mt) {
                              ;(B.meta.percent = (100 * mt.loaded) / mt.total || 100),
                                T.forceUpdate()
                            }),
                            fe.addEventListener('readystatechange', function () {
                              ;(fe.readyState !== 2 && fe.readyState !== 4) ||
                                (fe.status === 0 &&
                                  B.meta.status !== 'aborted' &&
                                  ((B.meta.status = 'exception_upload'),
                                  T.handleChangeStatus(B),
                                  T.forceUpdate()),
                                0 < fe.status &&
                                  fe.status < 400 &&
                                  ((B.meta.percent = 100),
                                  fe.readyState === 2 && (B.meta.status = 'headers_received'),
                                  fe.readyState === 4 && (B.meta.status = 'done'),
                                  T.handleChangeStatus(B),
                                  T.forceUpdate()),
                                400 <= fe.status &&
                                  B.meta.status !== 'error_upload' &&
                                  ((B.meta.status = 'error_upload'),
                                  T.handleChangeStatus(B),
                                  T.forceUpdate()))
                            }),
                            Yt.append('file', B.file),
                            T.props.timeout && (fe.timeout = T.props.timeout),
                            fe.send(gt || Yt),
                            (B.xhr = fe),
                            (B.meta.status = 'uploading'),
                            T.handleChangeStatus(B),
                            T.forceUpdate()
                        case 38:
                        case 'end':
                          return Ze.stop()
                      }
                  },
                  ee,
                  null,
                  [[4, 10]]
                )
              })
            )
            return function (ee) {
              return H.apply(this, arguments)
            }
          })()),
          (T.state = { active: !1, dragged: [] }),
          (T.files = []),
          (T.mounted = !0),
          (T.dropzone = N.a.createRef()),
          T
        )
      }
      return (
        b()(G, U),
        y()(G, [
          {
            key: 'componentDidMount',
            value: function () {
              this.props.initialFiles && this.handleFiles(this.props.initialFiles)
            }
          },
          {
            key: 'componentDidUpdate',
            value: function ($) {
              var T = this.props.initialFiles
              $.initialFiles !== T && T && this.handleFiles(T)
            }
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              var $ = !(this.mounted = !1),
                T = !1,
                H = void 0
              try {
                for (
                  var ee, B = this.files[Symbol.iterator]();
                  !($ = (ee = B.next()).done);
                  $ = !0
                ) {
                  var pe = ee.value
                  this.handleCancel(pe)
                }
              } catch (ne) {
                ;(T = !0), (H = ne)
              } finally {
                try {
                  $ || B.return == null || B.return()
                } finally {
                  if (T) throw H
                }
              }
            }
          },
          {
            key: 'render',
            value: function () {
              var $ = this.props,
                T = $.accept,
                H = $.multiple,
                ee = $.maxFiles,
                B = $.minSizeBytes,
                pe = $.maxSizeBytes,
                ne = $.onSubmit,
                Te = $.getUploadParams,
                Ve = $.disabled,
                je = $.canCancel,
                Ce = $.canRemove,
                gt = $.canRestart,
                ot = $.inputContent,
                st = $.inputWithFilesContent,
                Ge = $.submitButtonDisabled,
                ye = $.submitButtonContent,
                tt = $.classNames,
                ve = $.styles,
                fe = $.addClassNames,
                Yt = $.InputComponent,
                se = $.PreviewComponent,
                un = $.SubmitButtonComponent,
                Ue = $.LayoutComponent,
                Nn = this.state,
                Jn = Nn.active,
                ct = Nn.dragged,
                Ze = ct.some(function (ei) {
                  return ei.type !== 'application/x-moz-file' && !C(ei, T)
                }),
                mt = {
                  active: Jn,
                  reject: Ze,
                  dragged: ct,
                  accept: T,
                  multiple: H,
                  minSizeBytes: B,
                  maxSizeBytes: pe,
                  maxFiles: ee
                },
                Tt = o()(this.files),
                yu = M(Ve, Tt, mt),
                dh = (function (ei, hh, T1) {
                  for (
                    var Ls = a()({}, me),
                      ph = a()({}, hh),
                      vu = arguments.length,
                      Rs = new Array(3 < vu ? vu - 3 : 0),
                      Ns = 3;
                    Ns < vu;
                    Ns++
                  )
                    Rs[Ns - 3] = arguments[Ns]
                  for (var _u = 0, gh = Object.entries(ei); _u < gh.length; _u++) {
                    var mh = de()(gh[_u], 2),
                      dr = mh[0],
                      to = mh[1]
                    Ls[dr] = M.apply(void 0, [to].concat(Rs))
                  }
                  for (var xu = 0, yh = Object.entries(T1); xu < yh.length; xu++) {
                    var vh = de()(yh[xu], 2)
                    ;(dr = vh[0]),
                      (to = vh[1]),
                      (Ls[dr] = ''.concat(Ls[dr], ' ').concat(M.apply(void 0, [to].concat(Rs))))
                  }
                  for (var bu = 0, _h = Object.entries(hh); bu < _h.length; bu++) {
                    var xh = de()(_h[bu], 2)
                    ;(dr = xh[0]), (to = xh[1]), (ph[dr] = M.apply(void 0, [to].concat(Rs)))
                  }
                  return { classNames: Ls, styles: ph }
                })(tt, ve, fe, Tt, mt),
                cn = dh.classNames,
                n1 = cn.dropzone,
                i1 = cn.dropzoneActive,
                r1 = cn.dropzoneReject,
                o1 = cn.dropzoneDisabled,
                s1 = cn.input,
                a1 = cn.inputLabel,
                l1 = cn.inputLabelWithFiles,
                u1 = cn.preview,
                c1 = cn.previewImage,
                d1 = cn.submitButtonContainer,
                f1 = cn.submitButton,
                dn = dh.styles,
                h1 = dn.dropzone,
                p1 = dn.dropzoneActive,
                g1 = dn.dropzoneReject,
                m1 = dn.dropzoneDisabled,
                y1 = dn.input,
                v1 = dn.inputLabel,
                _1 = dn.inputLabelWithFiles,
                x1 = dn.preview,
                b1 = dn.previewImage,
                w1 = dn.submitButtonContainer,
                S1 = dn.submitButton,
                k1 = Yt || W,
                C1 = se || rt,
                E1 = un || Oe,
                P1 = Ue || Q,
                fh = null
              se !== null &&
                (fh = Tt.map(function (ei) {
                  return N.a.createElement(C1, {
                    className: u1,
                    imageClassName: c1,
                    style: x1,
                    imageStyle: b1,
                    key: ei.meta.id,
                    fileWithMeta: ei,
                    meta: a()({}, ei.meta),
                    isUpload: Boolean(Te),
                    canCancel: M(je, Tt, mt),
                    canRemove: M(Ce, Tt, mt),
                    canRestart: M(gt, Tt, mt),
                    files: Tt,
                    extra: mt
                  })
                }))
              var M1 =
                  Yt !== null
                    ? N.a.createElement(k1, {
                        className: s1,
                        labelClassName: a1,
                        labelWithFilesClassName: l1,
                        style: y1,
                        labelStyle: v1,
                        labelWithFilesStyle: _1,
                        getFilesFromEvent: this.getFilesFromEvent(),
                        accept: T,
                        multiple: H,
                        disabled: yu,
                        content: M(ot, Tt, mt),
                        withFilesContent: M(st, Tt, mt),
                        onFiles: this.handleFiles,
                        files: Tt,
                        extra: mt
                      })
                    : null,
                O1 =
                  ne && un !== null
                    ? N.a.createElement(E1, {
                        className: d1,
                        buttonClassName: f1,
                        style: w1,
                        buttonStyle: S1,
                        disabled: M(Ge, Tt, mt),
                        content: M(ye, Tt, mt),
                        onSubmit: this.handleSubmit,
                        files: Tt,
                        extra: mt
                      })
                    : null,
                Di = n1,
                zi = h1
              return (
                yu
                  ? ((Di = ''.concat(Di, ' ').concat(o1)), (zi = a()({}, zi || {}, {}, m1 || {})))
                  : Ze
                  ? ((Di = ''.concat(Di, ' ').concat(r1)), (zi = a()({}, zi || {}, {}, g1 || {})))
                  : Jn &&
                    ((Di = ''.concat(Di, ' ').concat(i1)), (zi = a()({}, zi || {}, {}, p1 || {}))),
                N.a.createElement(P1, {
                  input: M1,
                  previews: fh,
                  submitButton: O1,
                  dropzoneProps: {
                    ref: this.dropzone,
                    className: Di,
                    style: zi,
                    onDragEnter: this.handleDragEnter,
                    onDragOver: this.handleDragOver,
                    onDragLeave: this.handleDragLeave,
                    onDrop: yu ? this.handleDropDisabled : this.handleDrop
                  },
                  files: Tt,
                  extra: a()({}, mt, {
                    onFiles: this.handleFiles,
                    onCancelFile: this.handleCancel,
                    onRemoveFile: this.handleRemove,
                    onRestartFile: this.handleRestart
                  })
                })
              )
            }
          }
        ]),
        G
      )
    })(N.a.Component)
    ;(ze.defaultProps = {
      accept: '*',
      multiple: !0,
      minSizeBytes: 0,
      maxSizeBytes: Number.MAX_SAFE_INTEGER,
      maxFiles: Number.MAX_SAFE_INTEGER,
      autoUpload: !0,
      disabled: !1,
      canCancel: !0,
      canRemove: !0,
      canRestart: !0,
      inputContent: 'Drag Files or Click to Browse',
      inputWithFilesContent: 'Add Files',
      submitButtonDisabled: !1,
      submitButtonContent: 'Submit',
      classNames: {},
      styles: {},
      addClassNames: {}
    }),
      (ze.propTypes = {
        onChangeStatus: S.a.func,
        getUploadParams: S.a.func,
        onSubmit: S.a.func,
        getFilesFromEvent: S.a.func,
        getDataTransferItemsFromEvent: S.a.func,
        accept: S.a.string,
        multiple: S.a.bool,
        minSizeBytes: S.a.number.isRequired,
        maxSizeBytes: S.a.number.isRequired,
        maxFiles: S.a.number.isRequired,
        validate: S.a.func,
        autoUpload: S.a.bool,
        timeout: S.a.number,
        initialFiles: S.a.arrayOf(S.a.any),
        disabled: S.a.oneOfType([S.a.bool, S.a.func]),
        canCancel: S.a.oneOfType([S.a.bool, S.a.func]),
        canRemove: S.a.oneOfType([S.a.bool, S.a.func]),
        canRestart: S.a.oneOfType([S.a.bool, S.a.func]),
        inputContent: S.a.oneOfType([S.a.node, S.a.func]),
        inputWithFilesContent: S.a.oneOfType([S.a.node, S.a.func]),
        submitButtonDisabled: S.a.oneOfType([S.a.bool, S.a.func]),
        submitButtonContent: S.a.oneOfType([S.a.node, S.a.func]),
        classNames: S.a.object.isRequired,
        styles: S.a.object.isRequired,
        addClassNames: S.a.object.isRequired,
        InputComponent: S.a.func,
        PreviewComponent: S.a.func,
        SubmitButtonComponent: S.a.func,
        LayoutComponent: S.a.func
      }),
      (t.default = ze)
  }
])
const nP = '_dropFile_18yfo_1'
var iP = { dropFile: nP }
const rP = ({ input: e, previews: t, dropzoneProps: n, files: i, extra: { maxFiles: r } }) =>
    q('div', { children: [t, w('div', Be(te({}, n), { children: i.length < r && e }))] }),
  oP = () => {
    const e = () => ({ url: 'https://httpbin.org/post' })
    return w('div', {
      className: iP.dropFile,
      children: w(
        tP,
        { getUploadParams: e, LayoutComponent: rP, inputContent: w(dt, { children: 'aaaaa' }) },
        'a'
      )
    })
  },
  sP = '_inputField_ekvme_1',
  aP = '_invalid_ekvme_17',
  lP = '_inputBox_ekvme_24',
  uP = '_title_ekvme_30',
  cP = '_isRequired_ekvme_35'
var bo = { inputField: sP, invalid: aP, inputBox: lP, title: uP, isRequired: cP }
function dP(e) {
  const {
    name: t,
    value: n,
    handelChange: i,
    row: r,
    title: o,
    invalid: s,
    textInvalid: a,
    isRequired: l
  } = e
  return q('div', {
    className: bo.inputBox,
    children: [
      q('p', {
        className: bo.title,
        children: [o, ' ', l && w('span', { className: bo.isRequired, children: '*' })]
      }),
      w('fieldset', {
        className: bo.inputField,
        children: w('textarea', { value: n, name: t, onChange: (u) => i(u), rows: r })
      }),
      s && l && w('span', { className: bo.invalid, children: a })
    ]
  })
}
const fP = '_addProduct_1lv5z_1',
  hP = '_title_1lv5z_22',
  pP = '_formInput_1lv5z_31',
  gP = '_groupTypeText_1lv5z_39',
  mP = '_groupTypeSpeacial_1lv5z_49',
  yP = '_PriceQuantity_1lv5z_59',
  vP = '_selectSize_1lv5z_67',
  _P = '_selectColor_1lv5z_68',
  xP = '_boxSelect_1lv5z_76',
  bP = '_chooseDiscount_1lv5z_82',
  wP = '_dropImage_1lv5z_86',
  SP = '_titleInput_1lv5z_90',
  kP = '_sizeItem_1lv5z_95',
  CP = '_active_1lv5z_106',
  EP = '_boxColor_1lv5z_112',
  PP = '_colors_1lv5z_119',
  MP = '_addColor_1lv5z_136'
var at = {
  addProduct: fP,
  title: hP,
  formInput: pP,
  groupTypeText: gP,
  groupTypeSpeacial: mP,
  PriceQuantity: yP,
  selectSize: vP,
  selectColor: _P,
  boxSelect: xP,
  chooseDiscount: bP,
  dropImage: wP,
  titleInput: SP,
  sizeItem: kP,
  active: CP,
  boxColor: EP,
  colors: PP,
  addColor: MP
}
const hc = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL']
function Rv() {
  R.exports.useState()
  const [e, t] = R.exports.useState({
      Name: '',
      Category: '',
      Brand: '',
      Description: '',
      Price: '',
      Quantity: '',
      Size: [],
      Color: [],
      DiscountId: '',
      PhotoURL: ''
    }),
    [n, i] = R.exports.useState([
      { id: '1', color: '#E65E75' },
      { id: '2', color: '#165BAA' }
    ]),
    r = R.exports.useCallback(
      (u) => {
        e.Size.includes(u)
          ? t(Be(te({}, e), { Size: [...e.Size.filter((c) => c !== u)] }))
          : t(Be(te({}, e), { Size: [...e.Size, u] }))
      },
      [e.Size]
    ),
    o = R.exports.useCallback(
      (u) => {
        e.Color.includes(u)
          ? t(Be(te({}, e), { Color: [...e.Color.filter((c) => c !== u)] }))
          : t(Be(te({}, e), { Color: [...e.Color, u] }))
      },
      [e.Color]
    ),
    s = (u) => {
      t(Be(te({}, e), { [u.target.name]: u.target.value }))
    },
    a = (u) => {
      n.find((c) => c.color === u) || i([...n, { id: Date.now().toString(), color: u }])
    },
    l = (u, c) => {
      const d = n,
        f = d.findIndex((h) => h.id === u)
      ;(d[f].color = c.target.value), i([...d])
    }
  return q('div', {
    className: at.addProduct,
    children: [
      w('div', { className: at.title, children: w('p', { children: 'Add Product' }) }),
      q('div', {
        className: at.formInput,
        children: [
          q('div', {
            className: at.groupTypeText,
            children: [
              w(
                pr,
                {
                  value: e.Name,
                  type: 'text',
                  name: 'Name',
                  textInvalid: '',
                  title: 'Product Name',
                  handelChange: (u) => {
                    s(u)
                  },
                  invalid: !1,
                  isRequired: !0
                },
                'Name'
              ),
              w(
                pr,
                {
                  value: e.Category,
                  type: 'text',
                  name: 'Category',
                  textInvalid: '',
                  title: 'Category',
                  handelChange: (u) => {
                    s(u)
                  },
                  invalid: !1,
                  isRequired: !0
                },
                'Category'
              ),
              w(
                pr,
                {
                  value: e.Brand,
                  type: 'text',
                  name: 'Brand',
                  textInvalid: '',
                  title: 'Brand',
                  handelChange: (u) => {
                    s(u)
                  },
                  invalid: !1,
                  isRequired: !0
                },
                'Brand'
              ),
              w(
                dP,
                {
                  value: e.Description,
                  name: 'Description',
                  textInvalid: '',
                  title: 'Description',
                  handelChange: (u) => {
                    s(u)
                  },
                  invalid: !1,
                  isRequired: !0,
                  row: 10
                },
                'Description'
              )
            ]
          }),
          q('div', {
            className: at.groupTypeSpeacial,
            children: [
              q('div', {
                className: at.PriceQuantity,
                children: [
                  w(
                    pr,
                    {
                      value: e.Price,
                      type: 'text',
                      name: 'Price',
                      textInvalid: '',
                      title: 'Price',
                      handelChange: (u) => {
                        s(u)
                      },
                      invalid: !1,
                      isRequired: !0
                    },
                    'Price'
                  ),
                  w(
                    pr,
                    {
                      value: e.Quantity,
                      type: 'text',
                      name: 'Quantity',
                      textInvalid: '',
                      title: 'Quantity',
                      handelChange: (u) => {
                        s(u)
                      },
                      invalid: !1,
                      isRequired: !0
                    },
                    'Quantity'
                  )
                ]
              }),
              q('div', {
                className: at.selectSize,
                children: [
                  w('p', { className: at.titleInput, children: 'Select size' }),
                  w('div', {
                    className: at.boxSelect,
                    children:
                      hc == null
                        ? void 0
                        : hc.map((u) =>
                            w(
                              'div',
                              {
                                className: `${at.sizeItem} ${e.Size.includes(u) && at.active}`,
                                onClick: () => r(u),
                                children: u
                              },
                              u
                            )
                          )
                  })
                ]
              }),
              q('div', {
                className: at.selectColor,
                children: [
                  w('p', { className: at.titleInput, children: 'Select color' }),
                  q('div', {
                    className: at.boxColor,
                    children: [
                      n.map((u) =>
                        q(
                          'div',
                          {
                            children: [
                              w('label', {
                                className: at.colors,
                                onClick: () => o(u == null ? void 0 : u.color),
                                style: { backgroundColor: u == null ? void 0 : u.color },
                                htmlFor: u == null ? void 0 : u.id,
                                children:
                                  e.Color.includes(u == null ? void 0 : u.color) &&
                                  w(Hb, { size: 18 })
                              }),
                              w('input', {
                                type: 'color',
                                id: u == null ? void 0 : u.id,
                                style: { display: 'none' },
                                onChange: (c) => l(u == null ? void 0 : u.id, c)
                              })
                            ]
                          },
                          u == null ? void 0 : u.id
                        )
                      ),
                      w('div', {
                        className: at.addColor,
                        onClick: () => a('#000000'),
                        children: w('label', {
                          htmlFor: 'colorchoose',
                          children: w(Wb, { size: 12 })
                        })
                      })
                    ]
                  })
                ]
              }),
              w('div', {
                className: at.chooseDiscount,
                children: w(
                  pr,
                  {
                    value: e.Quantity,
                    type: 'text',
                    name: 'Quantity',
                    textInvalid: '',
                    title: 'Quantity',
                    handelChange: (u) => {
                      s(u)
                    },
                    invalid: !1,
                    isRequired: !0
                  },
                  'Quantity'
                )
              }),
              w('div', { className: at.dropImage, children: w(oP, {}) })
            ]
          })
        ]
      })
    ]
  })
}
const ya = [
    { name: 'Overview', key: '1' },
    { name: 'Oke', key: '2' }
  ],
  va = [
    { name: 'Add Product', key: '1' },
    { name: 'Oke', key: '2' },
    { name: 'Oke', key: '3' }
  ],
  ni = [
    { name: 'Overview', key: '1' },
    { name: 'Oke', key: '2' },
    { name: 'Oke', key: '3' }
  ],
  Ra = [
    {
      link: '/admin/dashboard',
      treeKey: 'dashboard',
      sizeItem: ya == null ? void 0 : ya.length,
      itemLinks: ya,
      titleTree: 'Home',
      nameTree: 'Dashboard',
      icon: w(ow, { size: 18 }),
      body: w($E, {})
    },
    {
      link: '/admin/product',
      treeKey: 'product',
      sizeItem: va == null ? void 0 : va.length,
      titleTree: 'Products',
      nameTree: 'Products',
      itemLinks: va,
      icon: w(rw, { size: 18 }),
      body: w(eP, {})
    },
    {
      link: '/admin/hello',
      treeKey: 'hello',
      sizeItem: ni == null ? void 0 : ni.length,
      titleTree: 'Hello',
      nameTree: 'Hello',
      itemLinks: ni,
      icon: w($p, { size: 18 }),
      body: w('p', { children: 'Hello' })
    },
    {
      link: '/admin/helloo',
      treeKey: 'helloo',
      sizeItem: ni == null ? void 0 : ni.length,
      titleTree: 'Hello',
      nameTree: 'Hello',
      itemLinks: ni,
      icon: w($p, { size: 18 }),
      body: w('p', { children: 'Hello2' })
    }
  ],
  OP = '_treeView_pg9r7_2',
  TP = '_listTreeItem_pg9r7_23',
  LP = '_treeItem_pg9r7_29',
  RP = '_activeTree_pg9r7_50',
  NP = '_chevron_pg9r7_55',
  DP = '_activeItem_pg9r7_63',
  zP = '_activeChevron_pg9r7_72',
  IP = '_titleTree_pg9r7_83',
  AP = '_listTree_pg9r7_23',
  FP = '_activeListTree_pg9r7_96',
  jP = '_nameTree_pg9r7_101'
var hn = {
  treeView: OP,
  listTreeItem: TP,
  treeItem: LP,
  activeTree: RP,
  chevron: NP,
  activeItem: DP,
  activeChevron: zP,
  titleTree: IP,
  listTree: AP,
  activeListTree: FP,
  nameTree: jP
}
function BP(e) {
  return Ct({
    tag: 'svg',
    attr: { viewBox: '0 0 8 16' },
    child: [
      {
        tag: 'path',
        attr: { fillRule: 'evenodd', d: 'M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z' }
      }
    ]
  })(e)
}
function $P(e) {
  const { link: t, itemKey: n, treeItemName: i } = e,
    { slug: r, opt: o } = Tf()
  return q(Lf, {
    to: t,
    className: `${n === o && t === `/admin/${r}/${o}` && hn.activeItem} ${hn.treeItem}`,
    children: [w(BP, {}), w('p', { children: i })]
  })
}
function HP(e) {
  const { link: t, treeKey: n, sizeItem: i, titleTree: r, nameTree: o, itemLinks: s, icon: a } = e,
    { slug: l } = Tf(),
    [u, c] = R.exports.useState(l === n || !1)
  return (
    document.documentElement.style.setProperty('--max-HeightListTree', `${i * 40}px`),
    q('div', {
      className: hn.listTree,
      children: [
        w('p', { className: hn.titleTree, children: r }),
        w(Lf, {
          to: t,
          children: q('div', {
            className: `${n === l && hn.activeTree} ${hn.treeView}`,
            onClick: () => c((d) => !d),
            children: [
              q('div', { className: hn.nameTree, children: [a, w('p', { children: o })] }),
              w(Ly, { className: `${n === l && u ? hn.activeChevron : hn.chevron}`, size: 18 })
            ]
          })
        }),
        w('div', {
          className: `${u && hn.activeListTree} ${hn.listTreeItem}`,
          children:
            s == null
              ? void 0
              : s.map((d) =>
                  w(
                    $P,
                    {
                      link: `${t}/${d == null ? void 0 : d.key}`,
                      treeItemName: d == null ? void 0 : d.name,
                      itemKey: d == null ? void 0 : d.key
                    },
                    `${t}/${d == null ? void 0 : d.key}`
                  )
                )
        })
      ]
    })
  )
}
function WP() {
  return w('div', {
    className: iw.Navigation,
    children:
      Ra == null
        ? void 0
        : Ra.map((e) =>
            w(
              HP,
              {
                link: e == null ? void 0 : e.link,
                treeKey: e == null ? void 0 : e.treeKey,
                sizeItem: e == null ? void 0 : e.sizeItem,
                itemLinks: e == null ? void 0 : e.itemLinks,
                titleTree: e == null ? void 0 : e.titleTree,
                nameTree: e == null ? void 0 : e.nameTree,
                icon: e == null ? void 0 : e.icon
              },
              e.link + e.nameTree + e.titleTree
            )
          )
  })
}
const VP = '_footer_hr4ey_1',
  UP = '_teamOfUser_hr4ey_15',
  qP = '_copyRight_hr4ey_21'
var pc = { footer: VP, teamOfUser: UP, copyRight: qP }
function YP() {
  return q('div', {
    className: pc.footer,
    children: [
      q('div', {
        className: pc.teamOfUser,
        children: [w('p', { children: 'Privacy Policy' }), w('p', { children: 'Term of Use' })]
      }),
      w('div', {
        className: pc.copyRight,
        children: w('p', { children: '\xA9 2022 Ecommercer UHPN, Made with \u2764 by UHPN Design' })
      })
    ]
  })
}
function QP({ title: e, description: t, image: n = '/logo/logo512.png' }) {
  return q('header', {
    children: [
      w('title', { children: e }),
      w('meta', { name: 'title', content: e }, 'meta-title'),
      w('meta', { name: 'description', content: t }, 'meta-description'),
      w('meta', { property: 'og:type', content: 'website' }, 'meta-og:type'),
      w('meta', { property: 'og:title', content: e }, 'meta-og:title'),
      w('meta', { property: 'og:description', content: t }, 'meta-og:description'),
      w('meta', { property: 'og:image', content: n }, 'meta-og:image'),
      w('meta', { property: 'twitter:card', content: 'summary_large_image' }, 'meta-twitter:card'),
      w('meta', { property: 'twitter:title', content: e }, 'meta-twitter:title'),
      w('meta', { property: 'twitter:description', content: t }, 'meta-twitter:description'),
      w('meta', { property: 'twitter:image', content: n }, 'meta-twitter:image')
    ]
  })
}
const XP = [
    { parentURL: 'dashboard', opt: '1', body: w(dt, { children: 'Tree dashboard1' }) },
    { parentURL: 'dashboard', opt: '2', body: w(dt, { children: 'Tree dashboard2' }) },
    { parentURL: 'product', opt: '1', body: w(Rv, {}) },
    { parentURL: 'product', opt: '2', body: w(dt, { children: 'Tree user2' }) },
    { parentURL: 'product', opt: '3', body: w(dt, { children: 'Tree user3' }) },
    { parentURL: 'user', opt: '3', body: w(dt, { children: 'Tree user3' }) },
    { parentURL: 'hello', opt: '1', body: w(Gw, {}) },
    { parentURL: 'hello', opt: '2', body: w(dt, { children: 'Tree hello2' }) },
    { parentURL: 'hello', opt: '3', body: w(dt, { children: 'Tree hello3' }) }
  ],
  KP = [
    { parentURL: 'product', opt: '1', action: 'add', body: w(Rv, {}) },
    { parentURL: 'product', opt: '1', action: 'details', body: w(dt, { children: 'Tree user2' }) },
    { parentURL: 'product', opt: '3', action: 'add', body: w(dt, { children: 'Tree user3' }) }
  ]
function GP() {
  const { slug: e, opt: t, action: n } = Tf(),
    [i, r] = R.exports.useState()
  return (
    R.exports.useEffect(() => {
      var o, s, a
      r(
        t
          ? n
            ? ((a = KP.find((l) => l.parentURL === e && l.opt === t && l.action === n)) == null
                ? void 0
                : a.body) || w(dt, {})
            : ((s = XP.find((l) => l.parentURL === e && l.opt === t)) == null ? void 0 : s.body) ||
              w(dt, {})
          : ((o = Ra.find((l) => l.link == `/admin/${e}`)) == null ? void 0 : o.body) || w(dt, {})
      )
    }, [e, t, n]),
    w(dt, { children: i })
  )
}
const ZP = '_main_dcux6_52',
  JP = '_mainBox_dcux6_58',
  eM = '_body_dcux6_63'
var gc = { main: ZP, mainBox: JP, body: eM }
const mc = () =>
    w('div', {
      className: gc.main,
      children: q('div', {
        className: gc.mainBox,
        children: [w(WP, {}), w('div', { className: gc.body, children: w(GP, {}) })]
      })
    }),
  tM = '_login_17qv1_1',
  nM = '_loginForm_17qv1_14',
  iM = '_imgLogin_17qv1_23',
  rM = '_title_17qv1_32',
  oM = '_inputForm_17qv1_38',
  sM = '_boxInput_17qv1_47',
  aM = '_forgot_17qv1_56',
  lM = '_rememberMe_17qv1_65',
  uM = '_forgotPasss_17qv1_72',
  cM = '_btnLogin_17qv1_78',
  dM = '_logo_17qv1_86'
var wn = {
    login: tM,
    loginForm: nM,
    imgLogin: iM,
    title: rM,
    inputForm: oM,
    boxInput: sM,
    forgot: aM,
    rememberMe: lM,
    forgotPasss: uM,
    btnLogin: cM,
    logo: dM
  },
  fM = './image/login.svg'
function hM() {
  const [e, t] = R.exports.useState({ userName: !1, password: !1 }),
    [n, i] = R.exports.useState({ userName: '', password: '' }),
    r = (o) => {
      i(Be(te({}, n), { [o.target.name]: o.target.value })),
        t(Be(te({}, e), { [o.target.name]: !o.target.value }))
    }
  return q('div', {
    className: wn.login,
    children: [
      q('div', {
        className: wn.loginForm,
        children: [
          q('div', {
            className: wn.logo,
            children: [w('img', { src: Py, alt: 'logo' }), w('p', { children: 'NAME' })]
          }),
          w('div', { className: wn.title, children: '\u0110\u0103ng nh\u1EADp' }),
          q('div', {
            className: wn.inputForm,
            children: [
              w(Up, {
                value: n.userName,
                handelChange: r,
                type: 'text',
                invalid: e.userName,
                textInvalid: 'H\xE3y nh\u1EADp t\xEAn \u0111\u0103ng nh\u1EADp',
                title: 'T\xEAn \u0111\u0103ng nh\u1EADp',
                name: 'userName'
              }),
              w(Up, {
                value: n.password,
                handelChange: r,
                type: 'password',
                invalid: e.password,
                textInvalid: 'H\xE3y nh\u1EADp m\u1EADt kh\u1EA9u',
                title: 'M\u1EADt kh\u1EA9u',
                name: 'password'
              })
            ]
          }),
          q('div', {
            className: wn.forgot,
            children: [
              q('div', {
                className: wn.rememberMe,
                children: [
                  w('input', { type: 'checkbox', name: 'rememberMe', id: 'rememberMe' }),
                  w('p', { children: 'Nh\u1EDB m\u1EADt kh\u1EA9u?' })
                ]
              }),
              w('div', { className: wn.forgotPasss, children: 'Qu\xEAn m\u1EADt kh\u1EA9u' })
            ]
          }),
          w('div', {
            className: wn.btnLogin,
            children: w(_w, { name: '\u0110\u0103ng nh\u1EADp', width: '100%', height: '40px' })
          })
        ]
      }),
      w('div', { className: wn.imgLogin, children: w('img', { src: fM, alt: 'Login' }) })
    ]
  })
}
const pM = '_testType_t4pqd_1'
var gM = { testType: pM }
function yn(e) {
  for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    n[i - 1] = arguments[i]
  throw Error(
    '[Immer] minified error nr: ' +
      e +
      (n.length
        ? ' ' +
          n
            .map(function (r) {
              return "'" + r + "'"
            })
            .join(',')
        : '') +
      '. Find the full error at: https://bit.ly/3cXEKWf'
  )
}
function Mi(e) {
  return !!e && !!e[Ie]
}
function Gn(e) {
  return (
    !!e &&
    ((function (t) {
      if (!t || typeof t != 'object') return !1
      var n = Object.getPrototypeOf(t)
      if (n === null) return !0
      var i = Object.hasOwnProperty.call(n, 'constructor') && n.constructor
      return i === Object || (typeof i == 'function' && Function.toString.call(i) === kM)
    })(e) ||
      Array.isArray(e) ||
      !!e[lm] ||
      !!e.constructor[lm] ||
      Jf(e) ||
      eh(e))
  )
}
function sr(e, t, n) {
  n === void 0 && (n = !1),
    eo(e) === 0
      ? (n ? Object.keys : Ar)(e).forEach(function (i) {
          ;(n && typeof i == 'symbol') || t(i, e[i], e)
        })
      : e.forEach(function (i, r) {
          return t(r, i, e)
        })
}
function eo(e) {
  var t = e[Ie]
  return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : Jf(e) ? 2 : eh(e) ? 3 : 0
}
function Ir(e, t) {
  return eo(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function mM(e, t) {
  return eo(e) === 2 ? e.get(t) : e[t]
}
function Nv(e, t, n) {
  var i = eo(e)
  i === 2 ? e.set(t, n) : i === 3 ? (e.delete(t), e.add(n)) : (e[t] = n)
}
function Dv(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
}
function Jf(e) {
  return wM && e instanceof Map
}
function eh(e) {
  return SM && e instanceof Set
}
function Wi(e) {
  return e.o || e.t
}
function th(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e)
  var t = Iv(e)
  delete t[Ie]
  for (var n = Ar(t), i = 0; i < n.length; i++) {
    var r = n[i],
      o = t[r]
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)),
      (o.get || o.set) &&
        (t[r] = { configurable: !0, writable: !0, enumerable: o.enumerable, value: e[r] })
  }
  return Object.create(Object.getPrototypeOf(e), t)
}
function nh(e, t) {
  return (
    t === void 0 && (t = !1),
    ih(e) ||
      Mi(e) ||
      !Gn(e) ||
      (eo(e) > 1 && (e.set = e.add = e.clear = e.delete = yM),
      Object.freeze(e),
      t &&
        sr(
          e,
          function (n, i) {
            return nh(i, !0)
          },
          !0
        )),
    e
  )
}
function yM() {
  yn(2)
}
function ih(e) {
  return e == null || typeof e != 'object' || Object.isFrozen(e)
}
function On(e) {
  var t = Rd[e]
  return t || yn(18, e), t
}
function vM(e, t) {
  Rd[e] || (Rd[e] = t)
}
function Od() {
  return gs
}
function yc(e, t) {
  t && (On('Patches'), (e.u = []), (e.s = []), (e.v = t))
}
function yl(e) {
  Td(e), e.p.forEach(_M), (e.p = null)
}
function Td(e) {
  e === gs && (gs = e.l)
}
function nm(e) {
  return (gs = { p: [], l: gs, h: e, m: !0, _: 0 })
}
function _M(e) {
  var t = e[Ie]
  t.i === 0 || t.i === 1 ? t.j() : (t.O = !0)
}
function vc(e, t) {
  t._ = t.p.length
  var n = t.p[0],
    i = e !== void 0 && e !== n
  return (
    t.h.g || On('ES5').S(t, e, i),
    i
      ? (n[Ie].P && (yl(t), yn(4)),
        Gn(e) && ((e = vl(t, e)), t.l || _l(t, e)),
        t.u && On('Patches').M(n[Ie].t, e, t.u, t.s))
      : (e = vl(t, n, [])),
    yl(t),
    t.u && t.v(t.u, t.s),
    e !== zv ? e : void 0
  )
}
function vl(e, t, n) {
  if (ih(t)) return t
  var i = t[Ie]
  if (!i)
    return (
      sr(
        t,
        function (o, s) {
          return im(e, i, t, o, s, n)
        },
        !0
      ),
      t
    )
  if (i.A !== e) return t
  if (!i.P) return _l(e, i.t, !0), i.t
  if (!i.I) {
    ;(i.I = !0), i.A._--
    var r = i.i === 4 || i.i === 5 ? (i.o = th(i.k)) : i.o
    sr(i.i === 3 ? new Set(r) : r, function (o, s) {
      return im(e, i, r, o, s, n)
    }),
      _l(e, r, !1),
      n && e.u && On('Patches').R(i, n, e.u, e.s)
  }
  return i.o
}
function im(e, t, n, i, r, o) {
  if (Mi(r)) {
    var s = vl(e, r, o && t && t.i !== 3 && !Ir(t.D, i) ? o.concat(i) : void 0)
    if ((Nv(n, i, s), !Mi(s))) return
    e.m = !1
  }
  if (Gn(r) && !ih(r)) {
    if (!e.h.F && e._ < 1) return
    vl(e, r), (t && t.A.l) || _l(e, r)
  }
}
function _l(e, t, n) {
  n === void 0 && (n = !1), e.h.F && e.m && nh(t, n)
}
function _c(e, t) {
  var n = e[Ie]
  return (n ? Wi(n) : e)[t]
}
function rm(e, t) {
  if (t in e)
    for (var n = Object.getPrototypeOf(e); n; ) {
      var i = Object.getOwnPropertyDescriptor(n, t)
      if (i) return i
      n = Object.getPrototypeOf(n)
    }
}
function ai(e) {
  e.P || ((e.P = !0), e.l && ai(e.l))
}
function xc(e) {
  e.o || (e.o = th(e.t))
}
function Ld(e, t, n) {
  var i = Jf(t)
    ? On('MapSet').N(t, n)
    : eh(t)
    ? On('MapSet').T(t, n)
    : e.g
    ? (function (r, o) {
        var s = Array.isArray(r),
          a = {
            i: s ? 1 : 0,
            A: o ? o.A : Od(),
            P: !1,
            I: !1,
            D: {},
            l: o,
            t: r,
            k: null,
            o: null,
            j: null,
            C: !1
          },
          l = a,
          u = ms
        s && ((l = [a]), (u = Oo))
        var c = Proxy.revocable(l, u),
          d = c.revoke,
          f = c.proxy
        return (a.k = f), (a.j = d), f
      })(t, n)
    : On('ES5').J(t, n)
  return (n ? n.A : Od()).p.push(i), i
}
function xM(e) {
  return (
    Mi(e) || yn(22, e),
    (function t(n) {
      if (!Gn(n)) return n
      var i,
        r = n[Ie],
        o = eo(n)
      if (r) {
        if (!r.P && (r.i < 4 || !On('ES5').K(r))) return r.t
        ;(r.I = !0), (i = om(n, o)), (r.I = !1)
      } else i = om(n, o)
      return (
        sr(i, function (s, a) {
          ;(r && mM(r.t, s) === a) || Nv(i, s, t(a))
        }),
        o === 3 ? new Set(i) : i
      )
    })(e)
  )
}
function om(e, t) {
  switch (t) {
    case 2:
      return new Map(e)
    case 3:
      return Array.from(e)
  }
  return th(e)
}
function bM() {
  function e(o, s) {
    var a = r[o]
    return (
      a
        ? (a.enumerable = s)
        : (r[o] = a =
            {
              configurable: !0,
              enumerable: s,
              get: function () {
                var l = this[Ie]
                return ms.get(l, o)
              },
              set: function (l) {
                var u = this[Ie]
                ms.set(u, o, l)
              }
            }),
      a
    )
  }
  function t(o) {
    for (var s = o.length - 1; s >= 0; s--) {
      var a = o[s][Ie]
      if (!a.P)
        switch (a.i) {
          case 5:
            i(a) && ai(a)
            break
          case 4:
            n(a) && ai(a)
        }
    }
  }
  function n(o) {
    for (var s = o.t, a = o.k, l = Ar(a), u = l.length - 1; u >= 0; u--) {
      var c = l[u]
      if (c !== Ie) {
        var d = s[c]
        if (d === void 0 && !Ir(s, c)) return !0
        var f = a[c],
          h = f && f[Ie]
        if (h ? h.t !== d : !Dv(f, d)) return !0
      }
    }
    var p = !!s[Ie]
    return l.length !== Ar(s).length + (p ? 0 : 1)
  }
  function i(o) {
    var s = o.k
    if (s.length !== o.t.length) return !0
    var a = Object.getOwnPropertyDescriptor(s, s.length - 1)
    if (a && !a.get) return !0
    for (var l = 0; l < s.length; l++) if (!s.hasOwnProperty(l)) return !0
    return !1
  }
  var r = {}
  vM('ES5', {
    J: function (o, s) {
      var a = Array.isArray(o),
        l = (function (c, d) {
          if (c) {
            for (var f = Array(d.length), h = 0; h < d.length; h++)
              Object.defineProperty(f, '' + h, e(h, !0))
            return f
          }
          var p = Iv(d)
          delete p[Ie]
          for (var y = Ar(p), _ = 0; _ < y.length; _++) {
            var g = y[_]
            p[g] = e(g, c || !!p[g].enumerable)
          }
          return Object.create(Object.getPrototypeOf(d), p)
        })(a, o),
        u = {
          i: a ? 5 : 4,
          A: s ? s.A : Od(),
          P: !1,
          I: !1,
          D: {},
          l: s,
          t: o,
          k: l,
          o: null,
          O: !1,
          C: !1
        }
      return Object.defineProperty(l, Ie, { value: u, writable: !0 }), l
    },
    S: function (o, s, a) {
      a
        ? Mi(s) && s[Ie].A === o && t(o.p)
        : (o.u &&
            (function l(u) {
              if (u && typeof u == 'object') {
                var c = u[Ie]
                if (c) {
                  var d = c.t,
                    f = c.k,
                    h = c.D,
                    p = c.i
                  if (p === 4)
                    sr(f, function (v) {
                      v !== Ie &&
                        (d[v] !== void 0 || Ir(d, v) ? h[v] || l(f[v]) : ((h[v] = !0), ai(c)))
                    }),
                      sr(d, function (v) {
                        f[v] !== void 0 || Ir(f, v) || ((h[v] = !1), ai(c))
                      })
                  else if (p === 5) {
                    if ((i(c) && (ai(c), (h.length = !0)), f.length < d.length))
                      for (var y = f.length; y < d.length; y++) h[y] = !1
                    else for (var _ = d.length; _ < f.length; _++) h[_] = !0
                    for (var g = Math.min(f.length, d.length), m = 0; m < g; m++)
                      f.hasOwnProperty(m) || (h[m] = !0), h[m] === void 0 && l(f[m])
                  }
                }
              }
            })(o.p[0]),
          t(o.p))
    },
    K: function (o) {
      return o.i === 4 ? n(o) : i(o)
    }
  })
}
var sm,
  gs,
  rh = typeof Symbol != 'undefined' && typeof Symbol('x') == 'symbol',
  wM = typeof Map != 'undefined',
  SM = typeof Set != 'undefined',
  am = typeof Proxy != 'undefined' && Proxy.revocable !== void 0 && typeof Reflect != 'undefined',
  zv = rh ? Symbol.for('immer-nothing') : (((sm = {})['immer-nothing'] = !0), sm),
  lm = rh ? Symbol.for('immer-draftable') : '__$immer_draftable',
  Ie = rh ? Symbol.for('immer-state') : '__$immer_state',
  kM = '' + Object.prototype.constructor,
  Ar =
    typeof Reflect != 'undefined' && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        }
      : Object.getOwnPropertyNames,
  Iv =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {}
      return (
        Ar(e).forEach(function (n) {
          t[n] = Object.getOwnPropertyDescriptor(e, n)
        }),
        t
      )
    },
  Rd = {},
  ms = {
    get: function (e, t) {
      if (t === Ie) return e
      var n = Wi(e)
      if (!Ir(n, t))
        return (function (r, o, s) {
          var a,
            l = rm(o, s)
          return l
            ? 'value' in l
              ? l.value
              : (a = l.get) === null || a === void 0
              ? void 0
              : a.call(r.k)
            : void 0
        })(e, n, t)
      var i = n[t]
      return e.I || !Gn(i) ? i : i === _c(e.t, t) ? (xc(e), (e.o[t] = Ld(e.A.h, i, e))) : i
    },
    has: function (e, t) {
      return t in Wi(e)
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(Wi(e))
    },
    set: function (e, t, n) {
      var i = rm(Wi(e), t)
      if (i != null && i.set) return i.set.call(e.k, n), !0
      if (!e.P) {
        var r = _c(Wi(e), t),
          o = r == null ? void 0 : r[Ie]
        if (o && o.t === n) return (e.o[t] = n), (e.D[t] = !1), !0
        if (Dv(n, r) && (n !== void 0 || Ir(e.t, t))) return !0
        xc(e), ai(e)
      }
      return (
        (e.o[t] === n && typeof n != 'number' && (n !== void 0 || t in e.o)) ||
        ((e.o[t] = n), (e.D[t] = !0), !0)
      )
    },
    deleteProperty: function (e, t) {
      return (
        _c(e.t, t) !== void 0 || t in e.t ? ((e.D[t] = !1), xc(e), ai(e)) : delete e.D[t],
        e.o && delete e.o[t],
        !0
      )
    },
    getOwnPropertyDescriptor: function (e, t) {
      var n = Wi(e),
        i = Reflect.getOwnPropertyDescriptor(n, t)
      return (
        i && {
          writable: !0,
          configurable: e.i !== 1 || t !== 'length',
          enumerable: i.enumerable,
          value: n[t]
        }
      )
    },
    defineProperty: function () {
      yn(11)
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t)
    },
    setPrototypeOf: function () {
      yn(12)
    }
  },
  Oo = {}
sr(ms, function (e, t) {
  Oo[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
  }
}),
  (Oo.deleteProperty = function (e, t) {
    return Oo.set.call(this, e, t, void 0)
  }),
  (Oo.set = function (e, t, n) {
    return ms.set.call(this, e[0], t, n, e[0])
  })
var CM = (function () {
    function e(n) {
      var i = this
      ;(this.g = am),
        (this.F = !0),
        (this.produce = function (r, o, s) {
          if (typeof r == 'function' && typeof o != 'function') {
            var a = o
            o = r
            var l = i
            return function (y) {
              var _ = this
              y === void 0 && (y = a)
              for (var g = arguments.length, m = Array(g > 1 ? g - 1 : 0), v = 1; v < g; v++)
                m[v - 1] = arguments[v]
              return l.produce(y, function (x) {
                var b
                return (b = o).call.apply(b, [_, x].concat(m))
              })
            }
          }
          var u
          if (
            (typeof o != 'function' && yn(6),
            s !== void 0 && typeof s != 'function' && yn(7),
            Gn(r))
          ) {
            var c = nm(i),
              d = Ld(i, r, void 0),
              f = !0
            try {
              ;(u = o(d)), (f = !1)
            } finally {
              f ? yl(c) : Td(c)
            }
            return typeof Promise != 'undefined' && u instanceof Promise
              ? u.then(
                  function (y) {
                    return yc(c, s), vc(y, c)
                  },
                  function (y) {
                    throw (yl(c), y)
                  }
                )
              : (yc(c, s), vc(u, c))
          }
          if (!r || typeof r != 'object') {
            if (((u = o(r)) === void 0 && (u = r), u === zv && (u = void 0), i.F && nh(u, !0), s)) {
              var h = [],
                p = []
              On('Patches').M(r, u, h, p), s(h, p)
            }
            return u
          }
          yn(21, r)
        }),
        (this.produceWithPatches = function (r, o) {
          if (typeof r == 'function')
            return function (u) {
              for (var c = arguments.length, d = Array(c > 1 ? c - 1 : 0), f = 1; f < c; f++)
                d[f - 1] = arguments[f]
              return i.produceWithPatches(u, function (h) {
                return r.apply(void 0, [h].concat(d))
              })
            }
          var s,
            a,
            l = i.produce(r, o, function (u, c) {
              ;(s = u), (a = c)
            })
          return typeof Promise != 'undefined' && l instanceof Promise
            ? l.then(function (u) {
                return [u, s, a]
              })
            : [l, s, a]
        }),
        typeof (n == null ? void 0 : n.useProxies) == 'boolean' && this.setUseProxies(n.useProxies),
        typeof (n == null ? void 0 : n.autoFreeze) == 'boolean' && this.setAutoFreeze(n.autoFreeze)
    }
    var t = e.prototype
    return (
      (t.createDraft = function (n) {
        Gn(n) || yn(8), Mi(n) && (n = xM(n))
        var i = nm(this),
          r = Ld(this, n, void 0)
        return (r[Ie].C = !0), Td(i), r
      }),
      (t.finishDraft = function (n, i) {
        var r = n && n[Ie],
          o = r.A
        return yc(o, i), vc(void 0, o)
      }),
      (t.setAutoFreeze = function (n) {
        this.F = n
      }),
      (t.setUseProxies = function (n) {
        n && !am && yn(20), (this.g = n)
      }),
      (t.applyPatches = function (n, i) {
        var r
        for (r = i.length - 1; r >= 0; r--) {
          var o = i[r]
          if (o.path.length === 0 && o.op === 'replace') {
            n = o.value
            break
          }
        }
        r > -1 && (i = i.slice(r + 1))
        var s = On('Patches').$
        return Mi(n)
          ? s(n, i)
          : this.produce(n, function (a) {
              return s(a, i)
            })
      }),
      e
    )
  })(),
  Wt = new CM(),
  EM = Wt.produce
Wt.produceWithPatches.bind(Wt)
Wt.setAutoFreeze.bind(Wt)
Wt.setUseProxies.bind(Wt)
Wt.applyPatches.bind(Wt)
Wt.createDraft.bind(Wt)
Wt.finishDraft.bind(Wt)
var Av = EM
function PM(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  )
}
function um(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e)
    t &&
      (i = i.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable
      })),
      n.push.apply(n, i)
  }
  return n
}
function cm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? um(Object(n), !0).forEach(function (i) {
          PM(e, i, n[i])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : um(Object(n)).forEach(function (i) {
          Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i))
        })
  }
  return e
}
function _t(e) {
  return (
    'Minified Redux error #' +
    e +
    '; visit https://redux.js.org/Errors?code=' +
    e +
    ' for the full message or use the non-minified dev environment for full errors. '
  )
}
var dm = (function () {
    return (typeof Symbol == 'function' && Symbol.observable) || '@@observable'
  })(),
  bc = function () {
    return Math.random().toString(36).substring(7).split('').join('.')
  },
  xl = {
    INIT: '@@redux/INIT' + bc(),
    REPLACE: '@@redux/REPLACE' + bc(),
    PROBE_UNKNOWN_ACTION: function () {
      return '@@redux/PROBE_UNKNOWN_ACTION' + bc()
    }
  }
function MM(e) {
  if (typeof e != 'object' || e === null) return !1
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t)
  return Object.getPrototypeOf(e) === t
}
function Fv(e, t, n) {
  var i
  if (
    (typeof t == 'function' && typeof n == 'function') ||
    (typeof n == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(_t(0))
  if (
    (typeof t == 'function' && typeof n == 'undefined' && ((n = t), (t = void 0)),
    typeof n != 'undefined')
  ) {
    if (typeof n != 'function') throw new Error(_t(1))
    return n(Fv)(e, t)
  }
  if (typeof e != 'function') throw new Error(_t(2))
  var r = e,
    o = t,
    s = [],
    a = s,
    l = !1
  function u() {
    a === s && (a = s.slice())
  }
  function c() {
    if (l) throw new Error(_t(3))
    return o
  }
  function d(y) {
    if (typeof y != 'function') throw new Error(_t(4))
    if (l) throw new Error(_t(5))
    var _ = !0
    return (
      u(),
      a.push(y),
      function () {
        if (!!_) {
          if (l) throw new Error(_t(6))
          ;(_ = !1), u()
          var m = a.indexOf(y)
          a.splice(m, 1), (s = null)
        }
      }
    )
  }
  function f(y) {
    if (!MM(y)) throw new Error(_t(7))
    if (typeof y.type == 'undefined') throw new Error(_t(8))
    if (l) throw new Error(_t(9))
    try {
      ;(l = !0), (o = r(o, y))
    } finally {
      l = !1
    }
    for (var _ = (s = a), g = 0; g < _.length; g++) {
      var m = _[g]
      m()
    }
    return y
  }
  function h(y) {
    if (typeof y != 'function') throw new Error(_t(10))
    ;(r = y), f({ type: xl.REPLACE })
  }
  function p() {
    var y,
      _ = d
    return (
      (y = {
        subscribe: function (m) {
          if (typeof m != 'object' || m === null) throw new Error(_t(11))
          function v() {
            m.next && m.next(c())
          }
          v()
          var x = _(v)
          return { unsubscribe: x }
        }
      }),
      (y[dm] = function () {
        return this
      }),
      y
    )
  }
  return (
    f({ type: xl.INIT }),
    (i = { dispatch: f, subscribe: d, getState: c, replaceReducer: h }),
    (i[dm] = p),
    i
  )
}
function OM(e) {
  Object.keys(e).forEach(function (t) {
    var n = e[t],
      i = n(void 0, { type: xl.INIT })
    if (typeof i == 'undefined') throw new Error(_t(12))
    if (typeof n(void 0, { type: xl.PROBE_UNKNOWN_ACTION() }) == 'undefined')
      throw new Error(_t(13))
  })
}
function TM(e) {
  for (var t = Object.keys(e), n = {}, i = 0; i < t.length; i++) {
    var r = t[i]
    typeof e[r] == 'function' && (n[r] = e[r])
  }
  var o = Object.keys(n),
    s
  try {
    OM(n)
  } catch (a) {
    s = a
  }
  return function (l, u) {
    if ((l === void 0 && (l = {}), s)) throw s
    for (var c = !1, d = {}, f = 0; f < o.length; f++) {
      var h = o[f],
        p = n[h],
        y = l[h],
        _ = p(y, u)
      if (typeof _ == 'undefined') throw (u && u.type, new Error(_t(14)))
      ;(d[h] = _), (c = c || _ !== y)
    }
    return (c = c || o.length !== Object.keys(l).length), c ? d : l
  }
}
function bl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  return t.length === 0
    ? function (i) {
        return i
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (i, r) {
        return function () {
          return i(r.apply(void 0, arguments))
        }
      })
}
function LM() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n]
  return function (i) {
    return function () {
      var r = i.apply(void 0, arguments),
        o = function () {
          throw new Error(_t(15))
        },
        s = {
          getState: r.getState,
          dispatch: function () {
            return o.apply(void 0, arguments)
          }
        },
        a = t.map(function (l) {
          return l(s)
        })
      return (o = bl.apply(void 0, a)(r.dispatch)), cm(cm({}, r), {}, { dispatch: o })
    }
  }
}
function jv(e) {
  var t = function (i) {
    var r = i.dispatch,
      o = i.getState
    return function (s) {
      return function (a) {
        return typeof a == 'function' ? a(r, o, e) : s(a)
      }
    }
  }
  return t
}
var Bv = jv()
Bv.withExtraArgument = jv
var fm = Bv,
  RM =
    (globalThis && globalThis.__extends) ||
    (function () {
      var e = function (t, n) {
        return (
          (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (i, r) {
                i.__proto__ = r
              }) ||
            function (i, r) {
              for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (i[o] = r[o])
            }),
          e(t, n)
        )
      }
      return function (t, n) {
        if (typeof n != 'function' && n !== null)
          throw new TypeError('Class extends value ' + String(n) + ' is not a constructor or null')
        e(t, n)
        function i() {
          this.constructor = t
        }
        t.prototype = n === null ? Object.create(n) : ((i.prototype = n.prototype), new i())
      }
    })()
globalThis && globalThis.__generator
var wl =
    (globalThis && globalThis.__spreadArray) ||
    function (e, t) {
      for (var n = 0, i = t.length, r = e.length; n < i; n++, r++) e[r] = t[n]
      return e
    },
  NM = Object.defineProperty,
  hm = Object.getOwnPropertySymbols,
  DM = Object.prototype.hasOwnProperty,
  zM = Object.prototype.propertyIsEnumerable,
  pm = function (e, t, n) {
    return t in e
      ? NM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n)
  },
  ys = function (e, t) {
    for (var n in t || (t = {})) DM.call(t, n) && pm(e, n, t[n])
    if (hm)
      for (var i = 0, r = hm(t); i < r.length; i++) {
        var n = r[i]
        zM.call(t, n) && pm(e, n, t[n])
      }
    return e
  },
  IM =
    typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object' ? bl : bl.apply(null, arguments)
        }
function AM(e) {
  if (typeof e != 'object' || e === null) return !1
  var t = Object.getPrototypeOf(e)
  if (t === null) return !0
  for (var n = t; Object.getPrototypeOf(n) !== null; ) n = Object.getPrototypeOf(n)
  return t === n
}
var FM = (function (e) {
  RM(t, e)
  function t() {
    for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]
    var r = e.apply(this, n) || this
    return Object.setPrototypeOf(r, t.prototype), r
  }
  return (
    Object.defineProperty(t, Symbol.species, {
      get: function () {
        return t
      },
      enumerable: !1,
      configurable: !0
    }),
    (t.prototype.concat = function () {
      for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]
      return e.prototype.concat.apply(this, n)
    }),
    (t.prototype.prepend = function () {
      for (var n = [], i = 0; i < arguments.length; i++) n[i] = arguments[i]
      return n.length === 1 && Array.isArray(n[0])
        ? new (t.bind.apply(t, wl([void 0], n[0].concat(this))))()
        : new (t.bind.apply(t, wl([void 0], n.concat(this))))()
    }),
    t
  )
})(Array)
function Nd(e) {
  return Gn(e) ? Av(e, function () {}) : e
}
function jM(e) {
  return typeof e == 'boolean'
}
function BM() {
  return function (t) {
    return $M(t)
  }
}
function $M(e) {
  e === void 0 && (e = {})
  var t = e.thunk,
    n = t === void 0 ? !0 : t
  e.immutableCheck, e.serializableCheck
  var i = new FM()
  return n && (jM(n) ? i.push(fm) : i.push(fm.withExtraArgument(n.extraArgument))), i
}
var HM = !0
function WM(e) {
  var t = BM(),
    n = e || {},
    i = n.reducer,
    r = i === void 0 ? void 0 : i,
    o = n.middleware,
    s = o === void 0 ? t() : o,
    a = n.devTools,
    l = a === void 0 ? !0 : a,
    u = n.preloadedState,
    c = u === void 0 ? void 0 : u,
    d = n.enhancers,
    f = d === void 0 ? void 0 : d,
    h
  if (typeof r == 'function') h = r
  else if (AM(r)) h = TM(r)
  else
    throw new Error(
      '"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers'
    )
  var p = s
  typeof p == 'function' && (p = p(t))
  var y = LM.apply(void 0, p),
    _ = bl
  l && (_ = IM(ys({ trace: !HM }, typeof l == 'object' && l)))
  var g = [y]
  Array.isArray(f) ? (g = wl([y], f)) : typeof f == 'function' && (g = f(g))
  var m = _.apply(void 0, g)
  return Fv(h, c, m)
}
function vs(e, t) {
  function n() {
    for (var i = [], r = 0; r < arguments.length; r++) i[r] = arguments[r]
    if (t) {
      var o = t.apply(void 0, i)
      if (!o) throw new Error('prepareAction did not return an object')
      return ys(
        ys({ type: e, payload: o.payload }, 'meta' in o && { meta: o.meta }),
        'error' in o && { error: o.error }
      )
    }
    return { type: e, payload: i[0] }
  }
  return (
    (n.toString = function () {
      return '' + e
    }),
    (n.type = e),
    (n.match = function (i) {
      return i.type === e
    }),
    n
  )
}
function $v(e) {
  var t = {},
    n = [],
    i,
    r = {
      addCase: function (o, s) {
        var a = typeof o == 'string' ? o : o.type
        if (a in t)
          throw new Error('addCase cannot be called with two reducers for the same action type')
        return (t[a] = s), r
      },
      addMatcher: function (o, s) {
        return n.push({ matcher: o, reducer: s }), r
      },
      addDefaultCase: function (o) {
        return (i = o), r
      }
    }
  return e(r), [t, n, i]
}
function VM(e) {
  return typeof e == 'function'
}
function UM(e, t, n, i) {
  n === void 0 && (n = [])
  var r = typeof t == 'function' ? $v(t) : [t, n, i],
    o = r[0],
    s = r[1],
    a = r[2],
    l
  if (VM(e))
    l = function () {
      return Nd(e())
    }
  else {
    var u = Nd(e)
    l = function () {
      return u
    }
  }
  function c(d, f) {
    d === void 0 && (d = l())
    var h = wl(
      [o[f.type]],
      s
        .filter(function (p) {
          var y = p.matcher
          return y(f)
        })
        .map(function (p) {
          var y = p.reducer
          return y
        })
    )
    return (
      h.filter(function (p) {
        return !!p
      }).length === 0 && (h = [a]),
      h.reduce(function (p, y) {
        if (y)
          if (Mi(p)) {
            var _ = p,
              g = y(_, f)
            return typeof g == 'undefined' ? p : g
          } else {
            if (Gn(p))
              return Av(p, function (m) {
                return y(m, f)
              })
            var g = y(p, f)
            if (typeof g == 'undefined') {
              if (p === null) return p
              throw Error('A case reducer on a non-draftable value must not return undefined')
            }
            return g
          }
        return p
      }, d)
    )
  }
  return (c.getInitialState = l), c
}
function qM(e, t) {
  return e + '/' + t
}
function YM(e) {
  var t = e.name
  if (!t) throw new Error('`name` is a required option for createSlice')
  var n = typeof e.initialState == 'function' ? e.initialState : Nd(e.initialState),
    i = e.reducers || {},
    r = Object.keys(i),
    o = {},
    s = {},
    a = {}
  r.forEach(function (c) {
    var d = i[c],
      f = qM(t, c),
      h,
      p
    'reducer' in d ? ((h = d.reducer), (p = d.prepare)) : (h = d),
      (o[c] = h),
      (s[f] = h),
      (a[c] = p ? vs(f, p) : vs(f))
  })
  function l() {
    var c = typeof e.extraReducers == 'function' ? $v(e.extraReducers) : [e.extraReducers],
      d = c[0],
      f = d === void 0 ? {} : d,
      h = c[1],
      p = h === void 0 ? [] : h,
      y = c[2],
      _ = y === void 0 ? void 0 : y,
      g = ys(ys({}, f), s)
    return UM(n, g, p, _)
  }
  var u
  return {
    name: t,
    reducer: function (c, d) {
      return u || (u = l()), u(c, d)
    },
    actions: a,
    caseReducers: o,
    getInitialState: function () {
      return u || (u = l()), u.getInitialState()
    }
  }
}
var oh = 'listenerMiddleware'
vs(oh + '/add')
vs(oh + '/removeAll')
vs(oh + '/remove')
bM()
const gm = { user: null },
  Hv = YM({
    initialState: gm,
    name: 'user',
    reducers: {
      logout: () => gm,
      setUser: (e, t) => {
        e.user = t.payload
      }
    }
  })
var QM = Hv.reducer
const { logout: GO, setUser: XM } = Hv.actions
var Wv = { exports: {} },
  Vv = {}
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qr = R.exports
function KM(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var GM = typeof Object.is == 'function' ? Object.is : KM,
  ZM = Qr.useState,
  JM = Qr.useEffect,
  eO = Qr.useLayoutEffect,
  tO = Qr.useDebugValue
function nO(e, t) {
  var n = t(),
    i = ZM({ inst: { value: n, getSnapshot: t } }),
    r = i[0].inst,
    o = i[1]
  return (
    eO(
      function () {
        ;(r.value = n), (r.getSnapshot = t), wc(r) && o({ inst: r })
      },
      [e, n, t]
    ),
    JM(
      function () {
        return (
          wc(r) && o({ inst: r }),
          e(function () {
            wc(r) && o({ inst: r })
          })
        )
      },
      [e]
    ),
    tO(n),
    n
  )
}
function wc(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !GM(e, n)
  } catch {
    return !0
  }
}
function iO(e, t) {
  return t()
}
var rO =
  typeof window == 'undefined' ||
  typeof window.document == 'undefined' ||
  typeof window.document.createElement == 'undefined'
    ? iO
    : nO
Vv.useSyncExternalStore = Qr.useSyncExternalStore !== void 0 ? Qr.useSyncExternalStore : rO
Wv.exports = Vv
var Uv = { exports: {} },
  qv = {}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Kl = R.exports,
  oO = Wv.exports
function sO(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var aO = typeof Object.is == 'function' ? Object.is : sO,
  lO = oO.useSyncExternalStore,
  uO = Kl.useRef,
  cO = Kl.useEffect,
  dO = Kl.useMemo,
  fO = Kl.useDebugValue
qv.useSyncExternalStoreWithSelector = function (e, t, n, i, r) {
  var o = uO(null)
  if (o.current === null) {
    var s = { hasValue: !1, value: null }
    o.current = s
  } else s = o.current
  o = dO(
    function () {
      function l(h) {
        if (!u) {
          if (((u = !0), (c = h), (h = i(h)), r !== void 0 && s.hasValue)) {
            var p = s.value
            if (r(p, h)) return (d = p)
          }
          return (d = h)
        }
        if (((p = d), aO(c, h))) return p
        var y = i(h)
        return r !== void 0 && r(p, y) ? p : ((c = h), (d = y))
      }
      var u = !1,
        c,
        d,
        f = n === void 0 ? null : n
      return [
        function () {
          return l(t())
        },
        f === null
          ? void 0
          : function () {
              return l(f())
            }
      ]
    },
    [t, n, i, r]
  )
  var a = lO(e, o[0], o[1])
  return (
    cO(
      function () {
        ;(s.hasValue = !0), (s.value = a)
      },
      [a]
    ),
    fO(a),
    a
  )
}
Uv.exports = qv
function hO(e) {
  e()
}
let Yv = hO
const pO = (e) => (Yv = e),
  gO = () => Yv,
  Oi = oe.createContext(null)
function Qv() {
  return R.exports.useContext(Oi)
}
const mO = () => {
  throw new Error('uSES not initialized!')
}
let Xv = mO
const yO = (e) => {
    Xv = e
  },
  vO = (e, t) => e === t
function _O(e = Oi) {
  const t = e === Oi ? Qv : () => R.exports.useContext(e)
  return function (i, r = vO) {
    const { store: o, subscription: s, getServerState: a } = t(),
      l = Xv(s.addNestedSub, o.getState, a || o.getState, i, r)
    return R.exports.useDebugValue(l), l
  }
}
const xO = _O()
var Kv = { exports: {} },
  Se = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ut = typeof Symbol == 'function' && Symbol.for,
  sh = ut ? Symbol.for('react.element') : 60103,
  ah = ut ? Symbol.for('react.portal') : 60106,
  Gl = ut ? Symbol.for('react.fragment') : 60107,
  Zl = ut ? Symbol.for('react.strict_mode') : 60108,
  Jl = ut ? Symbol.for('react.profiler') : 60114,
  eu = ut ? Symbol.for('react.provider') : 60109,
  tu = ut ? Symbol.for('react.context') : 60110,
  lh = ut ? Symbol.for('react.async_mode') : 60111,
  nu = ut ? Symbol.for('react.concurrent_mode') : 60111,
  iu = ut ? Symbol.for('react.forward_ref') : 60112,
  ru = ut ? Symbol.for('react.suspense') : 60113,
  bO = ut ? Symbol.for('react.suspense_list') : 60120,
  ou = ut ? Symbol.for('react.memo') : 60115,
  su = ut ? Symbol.for('react.lazy') : 60116,
  wO = ut ? Symbol.for('react.block') : 60121,
  SO = ut ? Symbol.for('react.fundamental') : 60117,
  kO = ut ? Symbol.for('react.responder') : 60118,
  CO = ut ? Symbol.for('react.scope') : 60119
function qt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case sh:
        switch (((e = e.type), e)) {
          case lh:
          case nu:
          case Gl:
          case Jl:
          case Zl:
          case ru:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case tu:
              case iu:
              case su:
              case ou:
              case eu:
                return e
              default:
                return t
            }
        }
      case ah:
        return t
    }
  }
}
function Gv(e) {
  return qt(e) === nu
}
Se.AsyncMode = lh
Se.ConcurrentMode = nu
Se.ContextConsumer = tu
Se.ContextProvider = eu
Se.Element = sh
Se.ForwardRef = iu
Se.Fragment = Gl
Se.Lazy = su
Se.Memo = ou
Se.Portal = ah
Se.Profiler = Jl
Se.StrictMode = Zl
Se.Suspense = ru
Se.isAsyncMode = function (e) {
  return Gv(e) || qt(e) === lh
}
Se.isConcurrentMode = Gv
Se.isContextConsumer = function (e) {
  return qt(e) === tu
}
Se.isContextProvider = function (e) {
  return qt(e) === eu
}
Se.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === sh
}
Se.isForwardRef = function (e) {
  return qt(e) === iu
}
Se.isFragment = function (e) {
  return qt(e) === Gl
}
Se.isLazy = function (e) {
  return qt(e) === su
}
Se.isMemo = function (e) {
  return qt(e) === ou
}
Se.isPortal = function (e) {
  return qt(e) === ah
}
Se.isProfiler = function (e) {
  return qt(e) === Jl
}
Se.isStrictMode = function (e) {
  return qt(e) === Zl
}
Se.isSuspense = function (e) {
  return qt(e) === ru
}
Se.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Gl ||
    e === nu ||
    e === Jl ||
    e === Zl ||
    e === ru ||
    e === bO ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === su ||
        e.$$typeof === ou ||
        e.$$typeof === eu ||
        e.$$typeof === tu ||
        e.$$typeof === iu ||
        e.$$typeof === SO ||
        e.$$typeof === kO ||
        e.$$typeof === CO ||
        e.$$typeof === wO))
  )
}
Se.typeOf = qt
Kv.exports = Se
var Zv = Kv.exports,
  EO = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  PO = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  Jv = {}
Jv[Zv.ForwardRef] = EO
Jv[Zv.Memo] = PO
var ke = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uh = Symbol.for('react.element'),
  ch = Symbol.for('react.portal'),
  au = Symbol.for('react.fragment'),
  lu = Symbol.for('react.strict_mode'),
  uu = Symbol.for('react.profiler'),
  cu = Symbol.for('react.provider'),
  du = Symbol.for('react.context'),
  MO = Symbol.for('react.server_context'),
  fu = Symbol.for('react.forward_ref'),
  hu = Symbol.for('react.suspense'),
  pu = Symbol.for('react.suspense_list'),
  gu = Symbol.for('react.memo'),
  mu = Symbol.for('react.lazy'),
  OO = Symbol.for('react.offscreen'),
  e1
e1 = Symbol.for('react.module.reference')
function ln(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case uh:
        switch (((e = e.type), e)) {
          case au:
          case uu:
          case lu:
          case hu:
          case pu:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case MO:
              case du:
              case fu:
              case mu:
              case gu:
              case cu:
                return e
              default:
                return t
            }
        }
      case ch:
        return t
    }
  }
}
ke.ContextConsumer = du
ke.ContextProvider = cu
ke.Element = uh
ke.ForwardRef = fu
ke.Fragment = au
ke.Lazy = mu
ke.Memo = gu
ke.Portal = ch
ke.Profiler = uu
ke.StrictMode = lu
ke.Suspense = hu
ke.SuspenseList = pu
ke.isAsyncMode = function () {
  return !1
}
ke.isConcurrentMode = function () {
  return !1
}
ke.isContextConsumer = function (e) {
  return ln(e) === du
}
ke.isContextProvider = function (e) {
  return ln(e) === cu
}
ke.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === uh
}
ke.isForwardRef = function (e) {
  return ln(e) === fu
}
ke.isFragment = function (e) {
  return ln(e) === au
}
ke.isLazy = function (e) {
  return ln(e) === mu
}
ke.isMemo = function (e) {
  return ln(e) === gu
}
ke.isPortal = function (e) {
  return ln(e) === ch
}
ke.isProfiler = function (e) {
  return ln(e) === uu
}
ke.isStrictMode = function (e) {
  return ln(e) === lu
}
ke.isSuspense = function (e) {
  return ln(e) === hu
}
ke.isSuspenseList = function (e) {
  return ln(e) === pu
}
ke.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === au ||
    e === uu ||
    e === lu ||
    e === hu ||
    e === pu ||
    e === OO ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === mu ||
        e.$$typeof === gu ||
        e.$$typeof === cu ||
        e.$$typeof === du ||
        e.$$typeof === fu ||
        e.$$typeof === e1 ||
        e.getModuleId !== void 0))
  )
}
ke.typeOf = ln
function TO() {
  const e = gO()
  let t = null,
    n = null
  return {
    clear() {
      ;(t = null), (n = null)
    },
    notify() {
      e(() => {
        let i = t
        for (; i; ) i.callback(), (i = i.next)
      })
    },
    get() {
      let i = [],
        r = t
      for (; r; ) i.push(r), (r = r.next)
      return i
    },
    subscribe(i) {
      let r = !0,
        o = (n = { callback: i, next: null, prev: n })
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !r ||
            t === null ||
            ((r = !1),
            o.next ? (o.next.prev = o.prev) : (n = o.prev),
            o.prev ? (o.prev.next = o.next) : (t = o.next))
        }
      )
    }
  }
}
const mm = { notify() {}, get: () => [] }
function LO(e, t) {
  let n,
    i = mm
  function r(d) {
    return l(), i.subscribe(d)
  }
  function o() {
    i.notify()
  }
  function s() {
    c.onStateChange && c.onStateChange()
  }
  function a() {
    return Boolean(n)
  }
  function l() {
    n || ((n = t ? t.addNestedSub(s) : e.subscribe(s)), (i = TO()))
  }
  function u() {
    n && (n(), (n = void 0), i.clear(), (i = mm))
  }
  const c = {
    addNestedSub: r,
    notifyNestedSubs: o,
    handleChangeWrapper: s,
    isSubscribed: a,
    trySubscribe: l,
    tryUnsubscribe: u,
    getListeners: () => i
  }
  return c
}
const RO =
    typeof window != 'undefined' &&
    typeof window.document != 'undefined' &&
    typeof window.document.createElement != 'undefined',
  NO = RO ? R.exports.useLayoutEffect : R.exports.useEffect
function DO({ store: e, context: t, children: n, serverState: i }) {
  const r = R.exports.useMemo(() => {
      const a = LO(e)
      return { store: e, subscription: a, getServerState: i ? () => i : void 0 }
    }, [e, i]),
    o = R.exports.useMemo(() => e.getState(), [e])
  return (
    NO(() => {
      const { subscription: a } = r
      return (
        (a.onStateChange = a.notifyNestedSubs),
        a.trySubscribe(),
        o !== e.getState() && a.notifyNestedSubs(),
        () => {
          a.tryUnsubscribe(), (a.onStateChange = void 0)
        }
      )
    }, [r, o]),
    w((t || Oi).Provider, { value: r, children: n })
  )
}
function t1(e = Oi) {
  const t = e === Oi ? Qv : () => R.exports.useContext(e)
  return function () {
    const { store: i } = t()
    return i
  }
}
const zO = t1()
function IO(e = Oi) {
  const t = e === Oi ? zO : t1(e)
  return function () {
    return t().dispatch
  }
}
const AO = IO()
yO(Uv.exports.useSyncExternalStoreWithSelector)
pO(Fd.exports.unstable_batchedUpdates)
const FO = WM({ reducer: { userState: QM }, devTools: !1, middleware: (e) => e({}).concat([]) }),
  jO = xO
function BO() {
  const e = jO((i) => i.userState.user),
    t = AO(),
    n = () => {
      t(XM({ usename: 'juu', password: 'aasas' }))
    }
  return (
    R.exports.useEffect(() => {
      console.log(e)
    }, [e]),
    q('div', {
      className: gM.testType,
      children: [w('button', { onClick: () => n(), children: ' set user' }), w(kw, {})]
    })
  )
}
var $O = './image/error_404.svg'
const HO = '_page404_gihn3_1',
  WO = '_img404_gihn3_6',
  VO = '_boxNotice_gihn3_15',
  UO = '_notice_gihn3_26',
  qO = '_buttonGoHome_gihn3_30'
var wo = { page404: HO, img404: WO, boxNotice: VO, notice: UO, buttonGoHome: qO }
function YO() {
  return q(dt, {
    children: [
      w(QP, { title: 'Kh\xF3a h\u1ECDc - Ms.Quynh', description: 'Kh\xF3a h\u1ECDc - Ms.Quynh' }),
      q('div', {
        className: wo.page404,
        children: [
          w('img', { src: $O, alt: 'notfound', className: wo.img404 }),
          q('div', {
            className: wo.boxNotice,
            children: [
              w('p', { className: wo.notice, children: 'Oops! This Page is Not Found.' }),
              w(Lf, {
                to: '/',
                children: w('div', { className: wo.buttonGoHome, children: 'Back to home' })
              })
            ]
          })
        ]
      })
    ]
  })
}
function QO() {
  return q(oe.Fragment, { children: [w(tw, {}), w(Eb, {}), w(YP, {})] })
}
function XO() {
  return w('div', {
    className: 'App',
    children: q(Mb, {
      children: [
        w(In, { index: !0, element: w(hM, {}) }),
        q(In, {
          path: '/',
          element: w(QO, {}),
          children: [
            w(In, { path: '/admin', element: w(Cb, { to: '/admin/dashboard', replace: !0 }) }),
            w(In, { path: '/admin/test', element: w(BO, {}) }),
            w(In, { path: '/admin/:slug', element: w(mc, {}) }),
            w(In, { path: '/admin/:slug/:opt', element: w(mc, {}) }),
            w(In, { path: '/admin/:slug/:opt/:action', element: w(mc, {}) })
          ]
        }),
        w(In, { path: '*', element: w(YO, {}) })
      ]
    })
  })
}
Sc.createRoot(document.getElementById('root')).render(
  w(oe.StrictMode, { children: w(DO, { store: FO, children: w(Lb, { children: w(XO, {}) }) }) })
)
