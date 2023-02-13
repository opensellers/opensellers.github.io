!function(t, e) {
    t.VidvertoPlayer = e()
}(this, function() {
    "use strict";
    function t(e) {
        return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(e)
    }
    function e(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    function n(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        t
    }
    function r(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i,
        t
    }
    function o(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && s(t, e)
    }
    function u(t) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function s(t, e) {
        return (s = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function a(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function c(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var i, n, r, o = u(t);
            if (e) {
                var s = u(this).constructor;
                i = Reflect.construct(o, arguments, s)
            } else
                i = o.apply(this, arguments);
            return n = this,
            !(r = i) || "object" != typeof r && "function" != typeof r ? a(n) : r
        }
    }
    function f(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)); )
            ;
        return t
    }
    function l(t, e, i) {
        return (l = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var n = f(t, e);
            if (n) {
                var r = Object.getOwnPropertyDescriptor(n, e);
                return r.get ? r.get.call(i) : r.value
            }
        }
        )(t, e, i || t)
    }
    function h(t, e, i, n) {
        return (h = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function(t, e, i, n) {
            var o, u = f(t, e);
            if (u) {
                if ((o = Object.getOwnPropertyDescriptor(u, e)).set)
                    return o.set.call(n, i),
                    !0;
                if (!o.writable)
                    return !1
            }
            if (o = Object.getOwnPropertyDescriptor(n, e)) {
                if (!o.writable)
                    return !1;
                o.value = i,
                Object.defineProperty(n, e, o)
            } else
                r(n, e, i);
            return !0
        }
        )(t, e, i, n)
    }
    function v(t, e, i, n, r) {
        if (!h(t, e, i, n || t) && r)
            throw new Error("failed to set property");
        return i
    }
    function d(t, e) {
        return function(t) {
            if (Array.isArray(t))
                return t
        }(t) || function(t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
                return;
            var i = []
              , n = !0
              , r = !1
              , o = void 0;
            try {
                for (var u, s = t[Symbol.iterator](); !(n = (u = s.next()).done) && (i.push(u.value),
                !e || i.length !== e); n = !0)
                    ;
            } catch (t) {
                r = !0,
                o = t
            } finally {
                try {
                    n || null == s.return || s.return()
                } finally {
                    if (r)
                        throw o
                }
            }
            return i
        }(t, e) || function(t, e) {
            if (!t)
                return;
            if ("string" == typeof t)
                return p(t, e);
            var i = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === i && t.constructor && (i = t.constructor.name);
            if ("Map" === i || "Set" === i)
                return Array.from(t);
            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                return p(t, e)
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function p(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var i = 0, n = new Array(e); i < e; i++)
            n[i] = t[i];
        return n
    }
    var y = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function _(t, e) {
        return t(e = {
            exports: {}
        }, e.exports),
        e.exports
    }
    var g = function(t) {
        return t && t.Math == Math && t
    }
      , m = g("object" == ("undefined" == typeof globalThis ? "undefined" : t(globalThis)) && globalThis) || g("object" == ("undefined" == typeof window ? "undefined" : t(window)) && window) || g("object" == ("undefined" == typeof self ? "undefined" : t(self)) && self) || g("object" == t(y) && y) || Function("return this")()
      , k = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
      , w = !k(function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    })
      , b = {}.propertyIsEnumerable
      , j = Object.getOwnPropertyDescriptor
      , P = {
        f: j && !b.call({
            1: 2
        }, 1) ? function(t) {
            var e = j(this, t);
            return !!e && e.enumerable
        }
        : b
    }
      , S = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
      , O = {}.toString
      , T = function(t) {
        return O.call(t).slice(8, -1)
    }
      , E = "".split
      , x = k(function() {
        return !Object("z").propertyIsEnumerable(0)
    }) ? function(t) {
        return "String" == T(t) ? E.call(t, "") : Object(t)
    }
    : Object
      , A = function(t) {
        if (null == t)
            throw TypeError("Can't call method on " + t);
        return t
    }
      , M = function(t) {
        return x(A(t))
    }
      , R = function(e) {
        return "object" === t(e) ? null !== e : "function" == typeof e
    }
      , I = function(t, e) {
        if (!R(t))
            return t;
        var i, n;
        if (e && "function" == typeof (i = t.toString) && !R(n = i.call(t)))
            return n;
        if ("function" == typeof (i = t.valueOf) && !R(n = i.call(t)))
            return n;
        if (!e && "function" == typeof (i = t.toString) && !R(n = i.call(t)))
            return n;
        throw TypeError("Can't convert object to primitive value")
    }
      , C = {}.hasOwnProperty
      , L = function(t, e) {
        return C.call(t, e)
    }
      , z = m.document
      , D = R(z) && R(z.createElement)
      , F = function(t) {
        return D ? z.createElement(t) : {}
    }
      , V = !w && !k(function() {
        return 7 != Object.defineProperty(F("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
      , U = Object.getOwnPropertyDescriptor
      , B = {
        f: w ? U : function(t, e) {
            if (t = M(t),
            e = I(e, !0),
            V)
                try {
                    return U(t, e)
                } catch (t) {}
            if (L(t, e))
                return S(!P.f.call(t, e), t[e])
        }
    }
      , N = function(t) {
        if (!R(t))
            throw TypeError(String(t) + " is not an object");
        return t
    }
      , q = Object.defineProperty
      , H = {
        f: w ? q : function(t, e, i) {
            if (N(t),
            e = I(e, !0),
            N(i),
            V)
                try {
                    return q(t, e, i)
                } catch (t) {}
            if ("get"in i || "set"in i)
                throw TypeError("Accessors not supported");
            return "value"in i && (t[e] = i.value),
            t
        }
    }
      , G = w ? function(t, e, i) {
        return H.f(t, e, S(1, i))
    }
    : function(t, e, i) {
        return t[e] = i,
        t
    }
      , W = function(t, e) {
        try {
            G(m, t, e)
        } catch (i) {
            m[t] = e
        }
        return e
    }
      , J = m["__core-js_shared__"] || W("__core-js_shared__", {})
      , X = Function.toString;
    "function" != typeof J.inspectSource && (J.inspectSource = function(t) {
        return X.call(t)
    }
    );
    var K, Y, $, Q = J.inspectSource, Z = m.WeakMap, tt = "function" == typeof Z && /native code/.test(Q(Z)), et = _(function(t) {
        (t.exports = function(t, e) {
            return J[t] || (J[t] = void 0 !== e ? e : {})
        }
        )("versions", []).push({
            version: "3.6.5",
            mode: "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    }), it = 0, nt = Math.random(), rt = function(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++it + nt).toString(36)
    }, ot = et("keys"), ut = function(t) {
        return ot[t] || (ot[t] = rt(t))
    }, st = {}, at = m.WeakMap;
    if (tt) {
        var ct = new at
          , ft = ct.get
          , lt = ct.has
          , ht = ct.set;
        K = function(t, e) {
            return ht.call(ct, t, e),
            e
        }
        ,
        Y = function(t) {
            return ft.call(ct, t) || {}
        }
        ,
        $ = function(t) {
            return lt.call(ct, t)
        }
    } else {
        var vt = ut("state");
        st[vt] = !0,
        K = function(t, e) {
            return G(t, vt, e),
            e
        }
        ,
        Y = function(t) {
            return L(t, vt) ? t[vt] : {}
        }
        ,
        $ = function(t) {
            return L(t, vt)
        }
    }
    var dt = {
        set: K,
        get: Y,
        has: $,
        enforce: function(t) {
            return $(t) ? Y(t) : K(t, {})
        },
        getterFor: function(t) {
            return function(e) {
                var i;
                if (!R(e) || (i = Y(e)).type !== t)
                    throw TypeError("Incompatible receiver, " + t + " required");
                return i
            }
        }
    }
      , pt = _(function(t) {
        var e = dt.get
          , i = dt.enforce
          , n = String(String).split("String");
        (t.exports = function(t, e, r, o) {
            var u = !!o && !!o.unsafe
              , s = !!o && !!o.enumerable
              , a = !!o && !!o.noTargetGet;
            "function" == typeof r && ("string" != typeof e || L(r, "name") || G(r, "name", e),
            i(r).source = n.join("string" == typeof e ? e : "")),
            t !== m ? (u ? !a && t[e] && (s = !0) : delete t[e],
            s ? t[e] = r : G(t, e, r)) : s ? t[e] = r : W(e, r)
        }
        )(Function.prototype, "toString", function() {
            return "function" == typeof this && e(this).source || Q(this)
        })
    })
      , yt = m
      , _t = function(t) {
        return "function" == typeof t ? t : void 0
    }
      , gt = function(t, e) {
        return arguments.length < 2 ? _t(yt[t]) || _t(m[t]) : yt[t] && yt[t][e] || m[t] && m[t][e]
    }
      , mt = Math.ceil
      , kt = Math.floor
      , wt = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? kt : mt)(t)
    }
      , bt = Math.min
      , jt = function(t) {
        return t > 0 ? bt(wt(t), 9007199254740991) : 0
    }
      , Pt = Math.max
      , St = Math.min
      , Ot = function(t) {
        return function(e, i, n) {
            var r, o = M(e), u = jt(o.length), s = function(t, e) {
                var i = wt(t);
                return i < 0 ? Pt(i + e, 0) : St(i, e)
            }(n, u);
            if (t && i != i) {
                for (; u > s; )
                    if ((r = o[s++]) != r)
                        return !0
            } else
                for (; u > s; s++)
                    if ((t || s in o) && o[s] === i)
                        return t || s || 0;
            return !t && -1
        }
    }
      , Tt = {
        includes: Ot(!0),
        indexOf: Ot(!1)
    }
      , Et = Tt.indexOf
      , xt = function(t, e) {
        var i, n = M(t), r = 0, o = [];
        for (i in n)
            !L(st, i) && L(n, i) && o.push(i);
        for (; e.length > r; )
            L(n, i = e[r++]) && (~Et(o, i) || o.push(i));
        return o
    }
      , At = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
      , Mt = At.concat("length", "prototype")
      , Rt = {
        f: Object.getOwnPropertyNames || function(t) {
            return xt(t, Mt)
        }
    }
      , It = {
        f: Object.getOwnPropertySymbols
    }
      , Ct = gt("Reflect", "ownKeys") || function(t) {
        var e = Rt.f(N(t))
          , i = It.f;
        return i ? e.concat(i(t)) : e
    }
      , Lt = function(t, e) {
        for (var i = Ct(e), n = H.f, r = B.f, o = 0; o < i.length; o++) {
            var u = i[o];
            L(t, u) || n(t, u, r(e, u))
        }
    }
      , zt = /#|\.prototype\./
      , Dt = function(t, e) {
        var i = Vt[Ft(t)];
        return i == Bt || i != Ut && ("function" == typeof e ? k(e) : !!e)
    }
      , Ft = Dt.normalize = function(t) {
        return String(t).replace(zt, ".").toLowerCase()
    }
      , Vt = Dt.data = {}
      , Ut = Dt.NATIVE = "N"
      , Bt = Dt.POLYFILL = "P"
      , Nt = Dt
      , qt = B.f
      , Ht = function(e, i) {
        var n, r, o, u, s, a = e.target, c = e.global, f = e.stat;
        if (n = c ? m : f ? m[a] || W(a, {}) : (m[a] || {}).prototype)
            for (r in i) {
                if (u = i[r],
                o = e.noTargetGet ? (s = qt(n, r)) && s.value : n[r],
                !Nt(c ? r : a + (f ? "." : "#") + r, e.forced) && void 0 !== o) {
                    if (t(u) === t(o))
                        continue;
                    Lt(u, o)
                }
                (e.sham || o && o.sham) && G(u, "sham", !0),
                pt(n, r, u, e)
            }
    }
      , Gt = function(t) {
        if ("function" != typeof t)
            throw TypeError(String(t) + " is not a function");
        return t
    }
      , Wt = function(t, e, i) {
        if (Gt(t),
        void 0 === e)
            return t;
        switch (i) {
        case 0:
            return function() {
                return t.call(e)
            }
            ;
        case 1:
            return function(i) {
                return t.call(e, i)
            }
            ;
        case 2:
            return function(i, n) {
                return t.call(e, i, n)
            }
            ;
        case 3:
            return function(i, n, r) {
                return t.call(e, i, n, r)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
      , Jt = function(t) {
        return Object(A(t))
    }
      , Xt = Array.isArray || function(t) {
        return "Array" == T(t)
    }
      , Kt = !!Object.getOwnPropertySymbols && !k(function() {
        return !String(Symbol())
    })
      , Yt = Kt && !Symbol.sham && "symbol" == t(Symbol.iterator)
      , $t = et("wks")
      , Qt = m.Symbol
      , Zt = Yt ? Qt : Qt && Qt.withoutSetter || rt
      , te = function(t) {
        return L($t, t) || (Kt && L(Qt, t) ? $t[t] = Qt[t] : $t[t] = Zt("Symbol." + t)),
        $t[t]
    }
      , ee = te("species")
      , ie = function(t, e) {
        var i;
        return Xt(t) && ("function" != typeof (i = t.constructor) || i !== Array && !Xt(i.prototype) ? R(i) && null === (i = i[ee]) && (i = void 0) : i = void 0),
        new (void 0 === i ? Array : i)(0 === e ? 0 : e)
    }
      , ne = [].push
      , re = function(t) {
        var e = 1 == t
          , i = 2 == t
          , n = 3 == t
          , r = 4 == t
          , o = 6 == t
          , u = 5 == t || o;
        return function(s, a, c, f) {
            for (var l, h, v = Jt(s), d = x(v), p = Wt(a, c, 3), y = jt(d.length), _ = 0, g = f || ie, m = e ? g(s, y) : i ? g(s, 0) : void 0; y > _; _++)
                if ((u || _ in d) && (h = p(l = d[_], _, v),
                t))
                    if (e)
                        m[_] = h;
                    else if (h)
                        switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return l;
                        case 6:
                            return _;
                        case 2:
                            ne.call(m, l)
                        }
                    else if (r)
                        return !1;
            return o ? -1 : n || r ? r : m
        }
    }
      , oe = {
        forEach: re(0),
        map: re(1),
        filter: re(2),
        some: re(3),
        every: re(4),
        find: re(5),
        findIndex: re(6)
    }
      , ue = function(t, e) {
        var i = [][t];
        return !!i && k(function() {
            i.call(null, e || function() {
                throw 1
            }
            , 1)
        })
    }
      , se = Object.defineProperty
      , ae = {}
      , ce = function(t) {
        throw t
    }
      , fe = function(t, e) {
        if (L(ae, t))
            return ae[t];
        e || (e = {});
        var i = [][t]
          , n = !!L(e, "ACCESSORS") && e.ACCESSORS
          , r = L(e, 0) ? e[0] : ce
          , o = L(e, 1) ? e[1] : void 0;
        return ae[t] = !!i && !k(function() {
            if (n && !w)
                return !0;
            var t = {
                length: -1
            };
            n ? se(t, 1, {
                enumerable: !0,
                get: ce
            }) : t[1] = 1,
            i.call(t, r, o)
        })
    }
      , le = oe.forEach
      , he = ue("forEach")
      , ve = fe("forEach")
      , de = he && ve ? [].forEach : function(t) {
        return le(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
    ;
    Ht({
        target: "Array",
        proto: !0,
        forced: [].forEach != de
    }, {
        forEach: de
    });
    var pe = function(t, e, i, n) {
        try {
            return n ? e(N(i)[0], i[1]) : e(i)
        } catch (e) {
            var r = t.return;
            throw void 0 !== r && N(r.call(t)),
            e
        }
    }
      , ye = {}
      , _e = te("iterator")
      , ge = Array.prototype
      , me = function(t) {
        return void 0 !== t && (ye.Array === t || ge[_e] === t)
    }
      , ke = function(t, e, i) {
        var n = I(e);
        n in t ? H.f(t, n, S(0, i)) : t[n] = i
    }
      , we = {};
    we[te("toStringTag")] = "z";
    var be = "[object z]" === String(we)
      , je = te("toStringTag")
      , Pe = "Arguments" == T(function() {
        return arguments
    }())
      , Se = be ? T : function(t) {
        var e, i, n;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = function(t, e) {
            try {
                return t[e]
            } catch (t) {}
        }(e = Object(t), je)) ? i : Pe ? T(e) : "Object" == (n = T(e)) && "function" == typeof e.callee ? "Arguments" : n
    }
      , Oe = te("iterator")
      , Te = function(t) {
        if (null != t)
            return t[Oe] || t["@@iterator"] || ye[Se(t)]
    }
      , Ee = te("iterator")
      , xe = function(t, e) {
        if (!e)
            return !1;
        var i = !1;
        try {
            var n = {};
            n[Ee] = function() {
                return {
                    next: function() {
                        return {
                            done: i = !0
                        }
                    }
                }
            }
            ,
            t(n)
        } catch (t) {}
        return i
    }
      , Ae = !xe(function(t) {});
    Ht({
        target: "Array",
        stat: !0,
        forced: Ae
    }, {
        from: function(t) {
            var e, i, n, r, o, u, s = Jt(t), a = "function" == typeof this ? this : Array, c = arguments.length, f = c > 1 ? arguments[1] : void 0, l = void 0 !== f, h = Te(s), v = 0;
            if (l && (f = Wt(f, c > 2 ? arguments[2] : void 0, 2)),
            null == h || a == Array && me(h))
                for (i = new a(e = jt(s.length)); e > v; v++)
                    u = l ? f(s[v], v) : s[v],
                    ke(i, v, u);
            else
                for (o = (r = h.call(s)).next,
                i = new a; !(n = o.call(r)).done; v++)
                    u = l ? pe(r, f, [n.value, v], !0) : n.value,
                    ke(i, v, u);
            return i.length = v,
            i
        }
    });
    var Me, Re = Object.keys || function(t) {
        return xt(t, At)
    }
    , Ie = w ? Object.defineProperties : function(t, e) {
        N(t);
        for (var i, n = Re(e), r = n.length, o = 0; r > o; )
            H.f(t, i = n[o++], e[i]);
        return t
    }
    , Ce = gt("document", "documentElement"), Le = ut("IE_PROTO"), ze = function() {}, De = function(t) {
        return "<script>" + t + "<\/script>"
    }, Fe = function() {
        try {
            Me = document.domain && new ActiveXObject("htmlfile")
        } catch (t) {}
        var t, e;
        Fe = Me ? function(t) {
            t.write(De("")),
            t.close();
            var e = t.parentWindow.Object;
            return t = null,
            e
        }(Me) : ((e = F("iframe")).style.display = "none",
        Ce.appendChild(e),
        e.src = String("javascript:"),
        (t = e.contentWindow.document).open(),
        t.write(De("document.F=Object")),
        t.close(),
        t.F);
        for (var i = At.length; i--; )
            delete Fe.prototype[At[i]];
        return Fe()
    };
    st[Le] = !0;
    var Ve = Object.create || function(t, e) {
        var i;
        return null !== t ? (ze.prototype = N(t),
        i = new ze,
        ze.prototype = null,
        i[Le] = t) : i = Fe(),
        void 0 === e ? i : Ie(i, e)
    }
      , Ue = te("unscopables")
      , Be = Array.prototype;
    null == Be[Ue] && H.f(Be, Ue, {
        configurable: !0,
        value: Ve(null)
    });
    var Ne = function(t) {
        Be[Ue][t] = !0
    }
      , qe = Tt.includes
      , He = fe("indexOf", {
        ACCESSORS: !0,
        1: 0
    });
    Ht({
        target: "Array",
        proto: !0,
        forced: !He
    }, {
        includes: function(t) {
            return qe(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    Ne("includes");
    var Ge, We, Je = gt("navigator", "userAgent") || "", Xe = m.process, Ke = Xe && Xe.versions, Ye = Ke && Ke.v8;
    Ye ? We = (Ge = Ye.split("."))[0] + Ge[1] : Je && (!(Ge = Je.match(/Edge\/(\d+)/)) || Ge[1] >= 74) && (Ge = Je.match(/Chrome\/(\d+)/)) && (We = Ge[1]);
    var $e = We && +We
      , Qe = te("species")
      , Ze = oe.map
      , ti = function(t) {
        return $e >= 51 || !k(function() {
            var e = [];
            return (e.constructor = {})[Qe] = function() {
                return {
                    foo: 1
                }
            }
            ,
            1 !== e[t](Boolean).foo
        })
    }("map")
      , ei = fe("map");
    Ht({
        target: "Array",
        proto: !0,
        forced: !ti || !ei
    }, {
        map: function(t) {
            return Ze(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var ii = function(t) {
        return function(e, i, n, r) {
            Gt(i);
            var o = Jt(e)
              , u = x(o)
              , s = jt(o.length)
              , a = t ? s - 1 : 0
              , c = t ? -1 : 1;
            if (n < 2)
                for (; ; ) {
                    if (a in u) {
                        r = u[a],
                        a += c;
                        break
                    }
                    if (a += c,
                    t ? a < 0 : s <= a)
                        throw TypeError("Reduce of empty array with no initial value")
                }
            for (; t ? a >= 0 : s > a; a += c)
                a in u && (r = i(r, u[a], a, o));
            return r
        }
    }
      , ni = {
        left: ii(!1),
        right: ii(!0)
    }.left
      , ri = ue("reduce")
      , oi = fe("reduce", {
        1: 0
    });
    Ht({
        target: "Array",
        proto: !0,
        forced: !ri || !oi
    }, {
        reduce: function(t) {
            return ni(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    }),
    Ht({
        target: "Number",
        stat: !0
    }, {
        isNaN: function(t) {
            return t != t
        }
    });
    var ui = Object.assign
      , si = Object.defineProperty
      , ai = !ui || k(function() {
        if (w && 1 !== ui({
            b: 1
        }, ui(si({}, "a", {
            enumerable: !0,
            get: function() {
                si(this, "b", {
                    value: 3,
                    enumerable: !1
                })
            }
        }), {
            b: 2
        })).b)
            return !0;
        var t = {}
          , e = {}
          , i = Symbol();
        return t[i] = 7,
        "abcdefghijklmnopqrst".split("").forEach(function(t) {
            e[t] = t
        }),
        7 != ui({}, t)[i] || "abcdefghijklmnopqrst" != Re(ui({}, e)).join("")
    }) ? function(t, e) {
        for (var i = Jt(t), n = arguments.length, r = 1, o = It.f, u = P.f; n > r; )
            for (var s, a = x(arguments[r++]), c = o ? Re(a).concat(o(a)) : Re(a), f = c.length, l = 0; f > l; )
                s = c[l++],
                w && !u.call(a, s) || (i[s] = a[s]);
        return i
    }
    : ui;
    Ht({
        target: "Object",
        stat: !0,
        forced: Object.assign !== ai
    }, {
        assign: ai
    });
    var ci = P.f
      , fi = function(t) {
        return function(e) {
            for (var i, n = M(e), r = Re(n), o = r.length, u = 0, s = []; o > u; )
                i = r[u++],
                w && !ci.call(n, i) || s.push(t ? [i, n[i]] : n[i]);
            return s
        }
    }
      , li = {
        entries: fi(!0),
        values: fi(!1)
    }
      , hi = li.entries;
    Ht({
        target: "Object",
        stat: !0
    }, {
        entries: function(t) {
            return hi(t)
        }
    });
    var vi = be ? {}.toString : function() {
        return "[object " + Se(this) + "]"
    }
    ;
    be || pt(Object.prototype, "toString", vi, {
        unsafe: !0
    });
    var di = li.values;
    Ht({
        target: "Object",
        stat: !0
    }, {
        values: function(t) {
            return di(t)
        }
    });
    var pi, yi, _i, gi = m.Promise, mi = H.f, ki = te("toStringTag"), wi = function(t, e, i) {
        t && !L(t = i ? t : t.prototype, ki) && mi(t, ki, {
            configurable: !0,
            value: e
        })
    }, bi = te("species"), ji = _(function(e) {
        var i = function(t, e) {
            this.stopped = t,
            this.result = e
        };
        (e.exports = function(e, n, r, o, u) {
            var s, a, c, f, l, h, v, d = Wt(n, r, o ? 2 : 1);
            if (u)
                s = e;
            else {
                if ("function" != typeof (a = Te(e)))
                    throw TypeError("Target is not iterable");
                if (me(a)) {
                    for (c = 0,
                    f = jt(e.length); f > c; c++)
                        if ((l = o ? d(N(v = e[c])[0], v[1]) : d(e[c])) && l instanceof i)
                            return l;
                    return new i(!1)
                }
                s = a.call(e)
            }
            for (h = s.next; !(v = h.call(s)).done; )
                if ("object" == t(l = pe(s, d, v.value, o)) && l && l instanceof i)
                    return l;
            return new i(!1)
        }
        ).stop = function(t) {
            return new i(!0,t)
        }
    }), Pi = te("species"), Si = function(t, e) {
        var i, n = N(t).constructor;
        return void 0 === n || null == (i = N(n)[Pi]) ? e : Gt(i)
    }, Oi = /(iphone|ipod|ipad).*applewebkit/i.test(Je), Ti = m.location, Ei = m.setImmediate, xi = m.clearImmediate, Ai = m.process, Mi = m.MessageChannel, Ri = m.Dispatch, Ii = 0, Ci = {}, Li = function(t) {
        if (Ci.hasOwnProperty(t)) {
            var e = Ci[t];
            delete Ci[t],
            e()
        }
    }, zi = function(t) {
        return function() {
            Li(t)
        }
    }, Di = function(t) {
        Li(t.data)
    }, Fi = function(t) {
        m.postMessage(t + "", Ti.protocol + "//" + Ti.host)
    };
    Ei && xi || (Ei = function(t) {
        for (var e = [], i = 1; arguments.length > i; )
            e.push(arguments[i++]);
        return Ci[++Ii] = function() {
            ("function" == typeof t ? t : Function(t)).apply(void 0, e)
        }
        ,
        pi(Ii),
        Ii
    }
    ,
    xi = function(t) {
        delete Ci[t]
    }
    ,
    "process" == T(Ai) ? pi = function(t) {
        Ai.nextTick(zi(t))
    }
    : Ri && Ri.now ? pi = function(t) {
        Ri.now(zi(t))
    }
    : Mi && !Oi ? (_i = (yi = new Mi).port2,
    yi.port1.onmessage = Di,
    pi = Wt(_i.postMessage, _i, 1)) : !m.addEventListener || "function" != typeof postMessage || m.importScripts || k(Fi) || "file:" === Ti.protocol ? pi = "onreadystatechange"in F("script") ? function(t) {
        Ce.appendChild(F("script")).onreadystatechange = function() {
            Ce.removeChild(this),
            Li(t)
        }
    }
    : function(t) {
        setTimeout(zi(t), 0)
    }
    : (pi = Fi,
    m.addEventListener("message", Di, !1)));
    var Vi, Ui, Bi, Ni, qi, Hi, Gi, Wi, Ji = {
        set: Ei,
        clear: xi
    }, Xi = B.f, Ki = Ji.set, Yi = m.MutationObserver || m.WebKitMutationObserver, $i = m.process, Qi = m.Promise, Zi = "process" == T($i), tn = Xi(m, "queueMicrotask"), en = tn && tn.value;
    en || (Vi = function() {
        var t, e;
        for (Zi && (t = $i.domain) && t.exit(); Ui; ) {
            e = Ui.fn,
            Ui = Ui.next;
            try {
                e()
            } catch (t) {
                throw Ui ? Ni() : Bi = void 0,
                t
            }
        }
        Bi = void 0,
        t && t.enter()
    }
    ,
    Zi ? Ni = function() {
        $i.nextTick(Vi)
    }
    : Yi && !Oi ? (qi = !0,
    Hi = document.createTextNode(""),
    new Yi(Vi).observe(Hi, {
        characterData: !0
    }),
    Ni = function() {
        Hi.data = qi = !qi
    }
    ) : Qi && Qi.resolve ? (Gi = Qi.resolve(void 0),
    Wi = Gi.then,
    Ni = function() {
        Wi.call(Gi, Vi)
    }
    ) : Ni = function() {
        Ki.call(m, Vi)
    }
    );
    var nn, rn, on, un, sn = en || function(t) {
        var e = {
            fn: t,
            next: void 0
        };
        Bi && (Bi.next = e),
        Ui || (Ui = e,
        Ni()),
        Bi = e
    }
    , an = function(t) {
        var e, i;
        this.promise = new t(function(t, n) {
            if (void 0 !== e || void 0 !== i)
                throw TypeError("Bad Promise constructor");
            e = t,
            i = n
        }
        ),
        this.resolve = Gt(e),
        this.reject = Gt(i)
    }, cn = {
        f: function(t) {
            return new an(t)
        }
    }, fn = function(t, e) {
        if (N(t),
        R(e) && e.constructor === t)
            return e;
        var i = cn.f(t);
        return (0,
        i.resolve)(e),
        i.promise
    }, ln = function(t) {
        try {
            return {
                error: !1,
                value: t()
            }
        } catch (t) {
            return {
                error: !0,
                value: t
            }
        }
    }, hn = Ji.set, vn = te("species"), dn = "Promise", pn = dt.get, yn = dt.set, _n = dt.getterFor(dn), gn = gi, mn = m.TypeError, kn = m.document, wn = m.process, bn = gt("fetch"), jn = cn.f, Pn = jn, Sn = "process" == T(wn), On = !!(kn && kn.createEvent && m.dispatchEvent), Tn = Nt(dn, function() {
        if (!(Q(gn) !== String(gn))) {
            if (66 === $e)
                return !0;
            if (!Sn && "function" != typeof PromiseRejectionEvent)
                return !0
        }
        if ($e >= 51 && /native code/.test(gn))
            return !1;
        var t = gn.resolve(1)
          , e = function(t) {
            t(function() {}, function() {})
        };
        return (t.constructor = {})[vn] = e,
        !(t.then(function() {})instanceof e)
    }), En = Tn || !xe(function(t) {
        gn.all(t).catch(function() {})
    }), xn = function(t) {
        var e;
        return !(!R(t) || "function" != typeof (e = t.then)) && e
    }, An = function(t, e, i) {
        if (!e.notified) {
            e.notified = !0;
            var n = e.reactions;
            sn(function() {
                for (var r = e.value, o = 1 == e.state, u = 0; n.length > u; ) {
                    var s, a, c, f = n[u++], l = o ? f.ok : f.fail, h = f.resolve, v = f.reject, d = f.domain;
                    try {
                        l ? (o || (2 === e.rejection && Cn(t, e),
                        e.rejection = 1),
                        !0 === l ? s = r : (d && d.enter(),
                        s = l(r),
                        d && (d.exit(),
                        c = !0)),
                        s === f.promise ? v(mn("Promise-chain cycle")) : (a = xn(s)) ? a.call(s, h, v) : h(s)) : v(r)
                    } catch (t) {
                        d && !c && d.exit(),
                        v(t)
                    }
                }
                e.reactions = [],
                e.notified = !1,
                i && !e.rejection && Rn(t, e)
            })
        }
    }, Mn = function(t, e, i) {
        var n, r;
        On ? ((n = kn.createEvent("Event")).promise = e,
        n.reason = i,
        n.initEvent(t, !1, !0),
        m.dispatchEvent(n)) : n = {
            promise: e,
            reason: i
        },
        (r = m["on" + t]) ? r(n) : "unhandledrejection" === t && function(t, e) {
            var i = m.console;
            i && i.error && (1 === arguments.length ? i.error(t) : i.error(t, e))
        }("Unhandled promise rejection", i)
    }, Rn = function(t, e) {
        hn.call(m, function() {
            var i, n = e.value;
            if (In(e) && (i = ln(function() {
                Sn ? wn.emit("unhandledRejection", n, t) : Mn("unhandledrejection", t, n)
            }),
            e.rejection = Sn || In(e) ? 2 : 1,
            i.error))
                throw i.value
        })
    }, In = function(t) {
        return 1 !== t.rejection && !t.parent
    }, Cn = function(t, e) {
        hn.call(m, function() {
            Sn ? wn.emit("rejectionHandled", t) : Mn("rejectionhandled", t, e.value)
        })
    }, Ln = function(t, e, i, n) {
        return function(r) {
            t(e, i, r, n)
        }
    }, zn = function(t, e, i, n) {
        e.done || (e.done = !0,
        n && (e = n),
        e.value = i,
        e.state = 2,
        An(t, e, !0))
    }, Dn = function t(e, i, n, r) {
        if (!i.done) {
            i.done = !0,
            r && (i = r);
            try {
                if (e === n)
                    throw mn("Promise can't be resolved itself");
                var o = xn(n);
                o ? sn(function() {
                    var r = {
                        done: !1
                    };
                    try {
                        o.call(n, Ln(t, e, r, i), Ln(zn, e, r, i))
                    } catch (t) {
                        zn(e, r, t, i)
                    }
                }) : (i.value = n,
                i.state = 1,
                An(e, i, !1))
            } catch (t) {
                zn(e, {
                    done: !1
                }, t, i)
            }
        }
    };
    Tn && (gn = function(t) {
        !function(t, e, i) {
            if (!(t instanceof e))
                throw TypeError("Incorrect " + (i ? i + " " : "") + "invocation")
        }(this, gn, dn),
        Gt(t),
        nn.call(this);
        var e = pn(this);
        try {
            t(Ln(Dn, this, e), Ln(zn, this, e))
        } catch (t) {
            zn(this, e, t)
        }
    }
    ,
    (nn = function(t) {
        yn(this, {
            type: dn,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }
    ).prototype = function(t, e, i) {
        for (var n in e)
            pt(t, n, e[n], i);
        return t
    }(gn.prototype, {
        then: function(t, e) {
            var i = _n(this)
              , n = jn(Si(this, gn));
            return n.ok = "function" != typeof t || t,
            n.fail = "function" == typeof e && e,
            n.domain = Sn ? wn.domain : void 0,
            i.parent = !0,
            i.reactions.push(n),
            0 != i.state && An(this, i, !1),
            n.promise
        },
        catch: function(t) {
            return this.then(void 0, t)
        }
    }),
    rn = function() {
        var t = new nn
          , e = pn(t);
        this.promise = t,
        this.resolve = Ln(Dn, t, e),
        this.reject = Ln(zn, t, e)
    }
    ,
    cn.f = jn = function(t) {
        return t === gn || t === on ? new rn(t) : Pn(t)
    }
    ,
    "function" == typeof gi && (un = gi.prototype.then,
    pt(gi.prototype, "then", function(t, e) {
        var i = this;
        return new gn(function(t, e) {
            un.call(i, t, e)
        }
        ).then(t, e)
    }, {
        unsafe: !0
    }),
    "function" == typeof bn && Ht({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function(t) {
            return fn(gn, bn.apply(m, arguments))
        }
    }))),
    Ht({
        global: !0,
        wrap: !0,
        forced: Tn
    }, {
        Promise: gn
    }),
    wi(gn, dn, !1),
    function(t) {
        var e = gt(t)
          , i = H.f;
        w && e && !e[bi] && i(e, bi, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }(dn),
    on = gt(dn),
    Ht({
        target: dn,
        stat: !0,
        forced: Tn
    }, {
        reject: function(t) {
            var e = jn(this);
            return e.reject.call(void 0, t),
            e.promise
        }
    }),
    Ht({
        target: dn,
        stat: !0,
        forced: Tn
    }, {
        resolve: function(t) {
            return fn(this, t)
        }
    }),
    Ht({
        target: dn,
        stat: !0,
        forced: En
    }, {
        all: function(t) {
            var e = this
              , i = jn(e)
              , n = i.resolve
              , r = i.reject
              , o = ln(function() {
                var i = Gt(e.resolve)
                  , o = []
                  , u = 0
                  , s = 1;
                ji(t, function(t) {
                    var a = u++
                      , c = !1;
                    o.push(void 0),
                    s++,
                    i.call(e, t).then(function(t) {
                        c || (c = !0,
                        o[a] = t,
                        --s || n(o))
                    }, r)
                }),
                --s || n(o)
            });
            return o.error && r(o.value),
            i.promise
        },
        race: function(t) {
            var e = this
              , i = jn(e)
              , n = i.reject
              , r = ln(function() {
                var r = Gt(e.resolve);
                ji(t, function(t) {
                    r.call(e, t).then(i.resolve, n)
                })
            });
            return r.error && n(r.value),
            i.promise
        }
    });
    var Fn = !!gi && k(function() {
        gi.prototype.finally.call({
            then: function() {}
        }, function() {})
    });
    Ht({
        target: "Promise",
        proto: !0,
        real: !0,
        forced: Fn
    }, {
        finally: function(t) {
            var e = Si(this, gt("Promise"))
              , i = "function" == typeof t;
            return this.then(i ? function(i) {
                return fn(e, t()).then(function() {
                    return i
                })
            }
            : t, i ? function(i) {
                return fn(e, t()).then(function() {
                    throw i
                })
            }
            : t)
        }
    }),
    "function" != typeof gi || gi.prototype.finally || pt(gi.prototype, "finally", gt("Promise").prototype.finally);
    var Vn, Un, Bn, Nn = function(t) {
        return function(e, i) {
            var n, r, o = String(A(e)), u = wt(i), s = o.length;
            return u < 0 || u >= s ? t ? "" : void 0 : (n = o.charCodeAt(u)) < 55296 || n > 56319 || u + 1 === s || (r = o.charCodeAt(u + 1)) < 56320 || r > 57343 ? t ? o.charAt(u) : n : t ? o.slice(u, u + 2) : r - 56320 + (n - 55296 << 10) + 65536
        }
    }, qn = {
        codeAt: Nn(!1),
        charAt: Nn(!0)
    }, Hn = !k(function() {
        function t() {}
        return t.prototype.constructor = null,
        Object.getPrototypeOf(new t) !== t.prototype
    }), Gn = ut("IE_PROTO"), Wn = Object.prototype, Jn = Hn ? Object.getPrototypeOf : function(t) {
        return t = Jt(t),
        L(t, Gn) ? t[Gn] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Wn : null
    }
    , Xn = te("iterator"), Kn = !1;
    [].keys && ("next"in (Bn = [].keys()) ? (Un = Jn(Jn(Bn))) !== Object.prototype && (Vn = Un) : Kn = !0),
    null == Vn && (Vn = {}),
    L(Vn, Xn) || G(Vn, Xn, function() {
        return this
    });
    var Yn = {
        IteratorPrototype: Vn,
        BUGGY_SAFARI_ITERATORS: Kn
    }
      , $n = Yn.IteratorPrototype
      , Qn = function() {
        return this
    }
      , Zn = Object.setPrototypeOf || ("__proto__"in {} ? function() {
        var t, e = !1, i = {};
        try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i, []),
            e = i instanceof Array
        } catch (t) {}
        return function(i, n) {
            return N(i),
            function(t) {
                if (!R(t) && null !== t)
                    throw TypeError("Can't set " + String(t) + " as a prototype")
            }(n),
            e ? t.call(i, n) : i.__proto__ = n,
            i
        }
    }() : void 0)
      , tr = Yn.IteratorPrototype
      , er = Yn.BUGGY_SAFARI_ITERATORS
      , ir = te("iterator")
      , nr = function() {
        return this
    }
      , rr = function(t, e, i, n, r, o, u) {
        !function(t, e, i) {
            var n = e + " Iterator";
            t.prototype = Ve($n, {
                next: S(1, i)
            }),
            wi(t, n, !1),
            ye[n] = Qn
        }(i, e, n);
        var s, a, c, f = function(t) {
            if (t === r && p)
                return p;
            if (!er && t in v)
                return v[t];
            switch (t) {
            case "keys":
            case "values":
            case "entries":
                return function() {
                    return new i(this,t)
                }
            }
            return function() {
                return new i(this)
            }
        }, l = e + " Iterator", h = !1, v = t.prototype, d = v[ir] || v["@@iterator"] || r && v[r], p = !er && d || f(r), y = "Array" == e && v.entries || d;
        if (y && (s = Jn(y.call(new t)),
        tr !== Object.prototype && s.next && (Jn(s) !== tr && (Zn ? Zn(s, tr) : "function" != typeof s[ir] && G(s, ir, nr)),
        wi(s, l, !0))),
        "values" == r && d && "values" !== d.name && (h = !0,
        p = function() {
            return d.call(this)
        }
        ),
        v[ir] !== p && G(v, ir, p),
        ye[e] = p,
        r)
            if (a = {
                values: f("values"),
                keys: o ? p : f("keys"),
                entries: f("entries")
            },
            u)
                for (c in a)
                    !er && !h && c in v || pt(v, c, a[c]);
            else
                Ht({
                    target: e,
                    proto: !0,
                    forced: er || h
                }, a);
        return a
    }
      , or = qn.charAt
      , ur = dt.set
      , sr = dt.getterFor("String Iterator");
    rr(String, "String", function(t) {
        ur(this, {
            type: "String Iterator",
            string: String(t),
            index: 0
        })
    }, function() {
        var t, e = sr(this), i = e.string, n = e.index;
        return n >= i.length ? {
            value: void 0,
            done: !0
        } : (t = or(i, n),
        e.index += t.length,
        {
            value: t,
            done: !1
        })
    });
    var ar = dt.set
      , cr = dt.getterFor("AggregateError")
      , fr = function(t, e) {
        var i = this;
        if (!(i instanceof fr))
            return new fr(t,e);
        Zn && (i = Zn(new Error(e), Jn(i)));
        var n = [];
        return ji(t, n.push, n),
        w ? ar(i, {
            errors: n,
            type: "AggregateError"
        }) : i.errors = n,
        void 0 !== e && G(i, "message", String(e)),
        i
    };
    fr.prototype = Ve(Error.prototype, {
        constructor: S(5, fr),
        message: S(5, ""),
        name: S(5, "AggregateError")
    }),
    w && H.f(fr.prototype, "errors", {
        get: function() {
            return cr(this).errors
        },
        configurable: !0
    }),
    Ht({
        global: !0
    }, {
        AggregateError: fr
    }),
    Ht({
        target: "Promise",
        stat: !0
    }, {
        allSettled: function(t) {
            var e = this
              , i = cn.f(e)
              , n = i.resolve
              , r = i.reject
              , o = ln(function() {
                var i = Gt(e.resolve)
                  , r = []
                  , o = 0
                  , u = 1;
                ji(t, function(t) {
                    var s = o++
                      , a = !1;
                    r.push(void 0),
                    u++,
                    i.call(e, t).then(function(t) {
                        a || (a = !0,
                        r[s] = {
                            status: "fulfilled",
                            value: t
                        },
                        --u || n(r))
                    }, function(t) {
                        a || (a = !0,
                        r[s] = {
                            status: "rejected",
                            reason: t
                        },
                        --u || n(r))
                    })
                }),
                --u || n(r)
            });
            return o.error && r(o.value),
            i.promise
        }
    });
    Ht({
        target: "Promise",
        stat: !0
    }, {
        any: function(t) {
            var e = this
              , i = cn.f(e)
              , n = i.resolve
              , r = i.reject
              , o = ln(function() {
                var i = Gt(e.resolve)
                  , o = []
                  , u = 0
                  , s = 1
                  , a = !1;
                ji(t, function(t) {
                    var c = u++
                      , f = !1;
                    o.push(void 0),
                    s++,
                    i.call(e, t).then(function(t) {
                        f || a || (a = !0,
                        n(t))
                    }, function(t) {
                        f || a || (f = !0,
                        o[c] = t,
                        --s || r(new (gt("AggregateError"))(o,"No one promise resolved")))
                    })
                }),
                --s || r(new (gt("AggregateError"))(o,"No one promise resolved"))
            });
            return o.error && r(o.value),
            i.promise
        }
    }),
    Ht({
        target: "Promise",
        stat: !0
    }, {
        try: function(t) {
            var e = cn.f(this)
              , i = ln(t);
            return (i.error ? e.reject : e.resolve)(i.value),
            e.promise
        }
    });
    var lr = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
      , hr = dt.set
      , vr = dt.getterFor("Array Iterator")
      , dr = rr(Array, "Array", function(t, e) {
        hr(this, {
            type: "Array Iterator",
            target: M(t),
            index: 0,
            kind: e
        })
    }, function() {
        var t = vr(this)
          , e = t.target
          , i = t.kind
          , n = t.index++;
        return !e || n >= e.length ? (t.target = void 0,
        {
            value: void 0,
            done: !0
        }) : "keys" == i ? {
            value: n,
            done: !1
        } : "values" == i ? {
            value: e[n],
            done: !1
        } : {
            value: [n, e[n]],
            done: !1
        }
    }, "values");
    ye.Arguments = ye.Array,
    Ne("keys"),
    Ne("values"),
    Ne("entries");
    var pr = te("iterator")
      , yr = te("toStringTag")
      , _r = dr.values;
    for (var gr in lr) {
        var mr = m[gr]
          , kr = mr && mr.prototype;
        if (kr) {
            if (kr[pr] !== _r)
                try {
                    G(kr, pr, _r)
                } catch (t) {
                    kr[pr] = _r
                }
            if (kr[yr] || G(kr, yr, gr),
            lr[gr])
                for (var wr in dr)
                    if (kr[wr] !== dr[wr])
                        try {
                            G(kr, wr, dr[wr])
                        } catch (t) {
                            kr[wr] = dr[wr]
                        }
        }
    }
    !function() {
        if ("undefined" != typeof window)
            try {
                var t = new window.CustomEvent("test",{
                    cancelable: !0
                });
                if (t.preventDefault(),
                !0 !== t.defaultPrevented)
                    throw new Error("Could not prevent default")
            } catch (t) {
                var e = function(t, e) {
                    var i, n;
                    return (e = e || {}).bubbles = !!e.bubbles,
                    e.cancelable = !!e.cancelable,
                    (i = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
                    n = i.preventDefault,
                    i.preventDefault = function() {
                        n.call(this);
                        try {
                            Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0
                                }
                            })
                        } catch (t) {
                            this.defaultPrevented = !0
                        }
                    }
                    ,
                    i
                };
                e.prototype = window.Event.prototype,
                window.CustomEvent = e
            }
    }();
    var br = {
        code: null,
        autoplay: !1,
        site_logo: null,
        site_link: null,
        vidverto_logo: "https://ad.vidverto.io/vidverto/player/logo.svg",
        vidverto_report_url: "https://vidverto.io/bug-report/",
        vidverto_url: "https://vidverto.io/",
        media: [],
        plugins: [],
        debug: !1,
        mute_live_on_pause: !1,
        mobile_full_width: !1,
        seekTime: 5,
        volume: 1,
        mute: !1,
        duration: null,
        responsive: !0,
        width: null,
        height: null,
        ratio: "16:9",
        hideControls: !0,
        origin_url: null,
        preload: "metadata",
        is_amp: !1,
        ad_priority: "m",
        provider: "html5",
        layout: "default",
        allowed_domains: !1,
        seed: "||_PUT_ENCRYPTION_KEY_||",
        language: {
            current: null,
            fallback: "en",
            available: {
                default: "default",
                en: "English",
                es: "Español",
                uk: "Українська",
                ru: "Русский"
            }
        },
        triton: {
            sync_banners: [],
            station_id: null,
            gdpr_cookie_name: "pbsconsent"
        },
        theme: {
            primary_color: "#c300ff",
            secondary_color: "#00a3ff",
            thumb_color: "#9ac3f7"
        },
        logo: {
            img: "https://ad.vidverto.io/vidverto/player/logo.svg",
            url: "https://vidverto.io/"
        },
        ads: {
            gap: 5,
            priorityTime: 5,
            pre_roll_check_priority: !1,
            language: "auto",
            checkPriority: !1,
            fallback: !0,
            strict_waterfall: !1
        },
        visibility: {
            breakpoint: .5,
            pause: !1,
            autoplay: !1
        },
        sticky: {
            enabled: !1,
            pause: !1,
            breakpoint: .5,
            position: "bottom_right",
            margin: 15
        },
        autoplay_related: {
            enabled: !0,
            related_timeout: 4,
            timeout: 6
        },
        related: !1,
        sharing: !1,
        tracking: {
            throttle: 3e3,
            readyDelay: 2e3,
            beacon_enabled: !0,
            url: null,
            events: null,
            ignoreEvents: []
        },
        shortcuts: {
            enabled: !0,
            global: !1
        },
        fullscreen: {
            enabled: !0,
            fallback: !0,
            iosNative: !0
        },
        i18n: {
            en: {
                play: "Play",
                replay: "Replay",
                pause: "Pause",
                seekLabel: "{currentTime} of {duration}",
                buffered: "Buffered",
                mute: "Mute",
                unmute: "Unmute",
                enterFullscreen: "Fullscreen",
                exitFullscreen: "Exit fullscreen",
                next: "Next",
                previous: "Previous",
                copy_video_url: "Copy video url",
                toggle_play: "Play / Pause",
                toggle_mute: "Mute / Unmute",
                report_a_problem: "Report a problem",
                vidvertoplayer: "Vidverto Player",
                share_screen_title: "Share this video",
                share_screen_title_audio: "Share this audio",
                open_url: "Open link",
                copy: "Copy",
                copied: "Copied",
                language: "Language",
                default: "Default",
                back: "Back",
                live: "Live",
                seekBackward: "Rewind 10s",
                seekForward: "Forward 10s",
                shuffle: "Shuffle",
                shuffle_off: "Turn off shuffle",
                maximize: "Maximize",
                collapse: "Minimize",
                playlist: "Playlist",
                settings: "Settings",
                close: "Close",
                overlay: "The minimum size for appropriate reproduction is 305px",
                program: "Program",
                share: "Share",
                advertisement: "Advertisement",
                media_error: "Error loading media",
                stop: "Stop"
            },
            es: {
                play: "Reproducir",
                replay: "Repetición",
                pause: "Pausar",
                seekLabel: "{currentTime} de {duration}",
                buffered: "Buffered",
                mute: "Silenciar",
                unmute: "Activar sonido",
                enterFullscreen: "Pantalla completa",
                exitFullscreen: "Salir de pantalla completa",
                next: "Siguiente",
                previous: "Anterior",
                copy_video_url: "Copiar la url del video",
                toggle_play: "Reproducir / Pausar",
                toggle_mute: "Silenciar / Activar sonido",
                report_a_problem: "Reportar un problema",
                vidvertoplayer: "Vidverto Player",
                share_screen_title: "Comparte este video",
                share_screen_title_audio: "Comparte este audio",
                open_url: "Abrir enlace",
                copy: "Copiar",
                copied: "Copiado",
                language: "Idioma",
                default: "Default",
                back: "Atras",
                live: "Vivo",
                seekBackward: "Atrasar 10s",
                seekForward: "Adelantar 10s",
                shuffle: "Aleatorio",
                shuffle_off: "Apagar Aleatorio",
                maximize: "Maximizar",
                collapse: "Minimizar",
                playlist: "Playlist",
                settings: "Opciones",
                close: "Close",
                overlay: "El tamaño mínimo para una reproducción apropiada es de 305px.",
                program: "Programación",
                share: "Compartir",
                advertisement: "Anuncio",
                media_error: "Error al cargar el medio",
                stop: "Detener"
            },
            ru: {
                play: "Проиграть",
                replay: "Сначала",
                pause: "Остановить",
                seekLabel: "{currentTime} из {duration}",
                buffered: "Буффер",
                mute: "Выключить звук",
                unmute: "Включить звук",
                enterFullscreen: "Во весь экран",
                exitFullscreen: "Выйти с полноэкранного режима",
                next: "Следующий",
                previous: "Предыдущий",
                copy_video_url: "Копировать видео ссылку",
                toggle_play: "Проиграть / Остановить",
                toggle_mute: "Выключить / Включить звук",
                report_a_problem: "Сообщить о проблеме",
                vidvertoplayer: "Vidverto Player",
                share_screen_title: "Поделиться этим видео",
                share_screen_title_audio: "Поделиться этим аудио",
                open_url: "Открыть ссылку",
                copy: "Копировать",
                copied: "Скопировано",
                language: "Язык",
                default: "По умолчанию",
                back: "Назад",
                live: "В Эфире",
                seekBackward: "Назад на 10с",
                seekForward: "Вперед на 10с",
                shuffle: "Случайный порядок",
                shuffle_off: "По порядку",
                maximize: "Развернуть",
                collapse: "Свернуть",
                playlist: "Плейлист",
                settings: "Настройки",
                close: "Закрыть",
                overlay: "Минимальный размер для корректного воспроизведения составляет 305 пикселей",
                program: "Програма",
                share: "Поделиться",
                advertisement: "Реклама",
                media_error: "Ошибка загрузки медиа",
                stop: "Остановить"
            },
            uk: {
                play: "Відтворити",
                replay: "Спочатку",
                pause: "Зупинити",
                seekLabel: "{currentTime} з {duration}",
                buffered: "Буферизація",
                mute: "Вимкнути звук",
                unmute: "Увімкнути звук",
                enterFullscreen: "Повноекранний режим",
                exitFullscreen: "Вийти з повноекранного режиму",
                next: "Наступний",
                previous: "Попередній",
                copy_video_url: "Копіювати відео посилання",
                toggle_play: "Відтворити / Зупинити",
                toggle_mute: "Вимкнути / Увімкнути звук",
                report_a_problem: "Повідомити про помилку",
                vidvertoplayer: "Vidverto Player",
                share_screen_title: "Поділитися цим відео",
                share_screen_title_audio: "Поділитися цим аудіо",
                open_url: "Відкрити посилання",
                copy: "Копіювати",
                copied: "Скопійовано",
                language: "Мова",
                default: "За замовчуванням",
                back: "Назад",
                live: "Пряма трансляція",
                seekBackward: "Назад на 10с",
                seekForward: "Вперед на 10с",
                shuffle: "Випадковий порядок",
                shuffle_off: "По порядку",
                maximize: "Розгорнути",
                collapse: "Згорнути",
                playlist: "Плейліст",
                settings: "Налаштування",
                close: "Закрити",
                overlay: "Мінімальний розмір для успішного відтворення - 305 пікселів",
                program: "Програма",
                share: "Поділитися",
                advertisement: "Реклама",
                media_error: "Помилка завантаження медіа",
                stop: "Зупинити"
            }
        },
        urls: {
            ima: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
            vast: "https://ad.mediawayss.com/js/ima2/vast-client.min.js",
            hls: "https://cdn.jsdelivr.net/hls.js/latest/hls.js",
            triton: "https://sdk.listenlive.co/web/2.9/td-sdk.min.js",
            ad_priority: "",
            tts: "https://outstream.video/tts.php",
            plugins: {
                VidvertoPlayerSimpleUI: {
                    js: "https://ad.vidverto.io/vidverto/player/ui/js/simple.js?v=1653047028",
                    css: "https://ad.vidverto.io/vidverto/player/ui/css/simple.css?v=1653047028"
                },
                VidvertoPlayerPositionUI: {
                    js: "https://ad.vidverto.io/vidverto/player/ui/js/position.js?v=1653047028",
                    css: "https://ad.vidverto.io/vidverto/player/ui/css/position.css?v=1653047028"
                },
                VidvertoPlayerVideoArticleUI: {
                    js: "https://ad.vidverto.io/vidverto/player/ui/js/video_article.js?v=1653047028",
                    css: "https://ad.vidverto.io/vidverto/player/ui/css/video_article.css?v=1653047028"
                },
                VidvertoPlayerVideoPlaylistUI: {
                    js: "https://ad.vidverto.io/vidverto/player/ui/js/video_playlist.js?v=1653047028",
                    css: "https://ad.vidverto.io/vidverto/player/ui/css/video_playlist.css?v=1653047028"
                },
                VidvertoPlayerAudioLiveUI: {
                    js: "https://ad.vidverto.io/vidverto/player/ui/js/audio_live.js?v=1653047028",
                    css: "https://ad.vidverto.io/vidverto/player/ui/css/audio_live.css?v=1653047028"
                },
                VidvertoPlayerAudioPlaylistUI: {
                    js: "https://ad.vidverto.io/vidverto/player/ui/js/audio_playlist.js?v=1653047028",
                    css: "https://ad.vidverto.io/vidverto/player/ui/css/audio_playlist.css?v=1653047028"
                },
                VidvertoPlayerAudioReaderUI: {
                    js: "https://ad.vidverto.io/vidverto/player/ui/js/audio_reader.js?v=1653047028",
                    css: "https://ad.vidverto.io/vidverto/player/ui/css/audio_reader.css?v=1653047028"
                }
            }
        },
        events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "durationchange", "webkitfullscreenchange", "enterfullscreen", "exitfullscreen", "controlshidden", "controlsshown", "play_requested", "track_changed", "seek_updated", "layout_change", "layout_changed", "ui_updated", "track_info", "ready", "resize", "iframe_module_ready", "sticky_state_update", "sticky_disable", "adserror", "adsprogress", "adsrequested", "adsloaded", "adsimpression", "adsplay", "adspause", "adsresume", "adscomplete", "adspauserequested", "postroll_ended"],
        classNames: {
            root: "vidverto",
            container: "vidverto-player-container",
            type: "vidverto-type_{0}",
            provider: "vidverto-provider_{0}",
            video: "vidverto__video-wrapper",
            embed: "vidverto__video-embed",
            overlay: "vidverto__overlay-error",
            loader: "vidverto__loader",
            embedContainer: "vidverto__video-embed__container",
            poster: "vidverto__poster",
            posterEnabled: "vidverto__poster-enabled",
            layoutWrapper: "vidverto__layout",
            responsiveWrapper: "vidverto__responsive-wrapper",
            holder: "vidverto__holder",
            control: "vidverto__control",
            logo: "vidverto__logo",
            liveBadge: "vidverto__live-badge",
            logoPlaceholder: "vidverto__logo-placeholder",
            mediaWrapper: "vidverto__media-wrapper",
            title: "vidverto__title",
            title_hidden: "vidverto__title-hidden",
            spacer: "vidverto__spacer",
            controlPressed: "vidverto__control-pressed",
            playing: "vidverto-playing",
            paused: "vidverto-paused",
            stopped: "vidverto-stopped",
            loading: "vidverto-loading",
            hover: "vidverto-hover",
            tooltip: "vidverto__tooltip",
            isLive: "vidverto-is_live",
            hidden: "vidverto__sr-only",
            hideControls: "vidverto-hide-controls",
            isIos: "vidverto-is_ios",
            isAndroid: "vidverto-is_android",
            isMobile: "vidverto-is_mobile",
            isIE: "vidverto-is_ie",
            waitPlay: "vidverto-wait_play",
            requestPlay: "vidverto-request_play",
            showPlayPause: "vidverto-show-play-pause-button",
            sticky: "vidverto-sticky_enabled",
            stickyPlaceholder: "vidverto__sticky-placeholder",
            uiSupported: "vidverto-ui_enabled",
            audioSticky: "vidverto-type_audio-sticky",
            noTransition: "vidverto-no_transition",
            theme: "vidverto__theme_{0}",
            unstick_enabled: "vidverto-unstick-enabled",
            helper: {
                hidden: "vidverto-display_none"
            },
            ads: {
                layer: "vidverto__ad-{0}",
                loading: "vidverto-ads_loading",
                playing: "vidverto-ads_playing",
                visible: "vidverto-ads_visible",
                linear: "vidverto-ads_linear",
                active: "vidverto-ads_active",
                full_slot: "vidverto__ad-fullslot"
            },
            related: {
                state: "vidverto__related-videos-shown",
                autoplay: "vidverto__related-videos-autoplay-related",
                autoplay_container: "vidverto__related-videos-autoplay_container",
                autoplay_button_wrapper: "vidverto__related-videos-autoplay__button-wrapper",
                autoplay_button_inner_wrapper: "vidverto__related-videos-autoplay__button-inner-wrapper",
                autoplay_wrapper_up: "vidverto__related-videos-autoplay__wrapper-up",
                autoplay_wrapper_down: "vidverto__related-videos-autoplay__wrapper-down",
                autoplay_next_title: "vidverto__related-videos-autoplay__next-title",
                autoplay_media_title: "vidverto__related-videos-autoplay__media-title",
                autoplay_cancel_title: "vidverto__related-videos-autoplay__cancel-title",
                container: "vidverto__related-videos",
                items_wrapper: "vidverto__related-items-wrapper",
                item: "vidverto__related-item",
                image_wrapper: "vidverto__related-item-image_wrapper"
            },
            playlist: {
                container: "vidverto__playlist",
                title_wrapper: "vidverto__playlist-title-wrapper",
                title: "vidverto__playlist-title",
                badge: "vidverto__playlist-badge",
                item: "vidverto__playlist-item",
                item_number: "vidverto__playlist-item-number",
                item_active: "vidverto__playlist-item_active",
                item_thumbnail: "vidverto__playlist-item-thumbnail",
                item_image_wrapper: "vidverto__playlist-item-thumbnail-image-wrapper",
                item_duration_wrapper: "vidverto__playlist-item-duration-wrapper",
                item_duration: "vidverto__playlist-item-duration",
                item_title: "vidverto__playlist-item-title",
                item_description: "vidverto__playlist-item-description",
                item_text: "vidverto__playlist-item-text",
                item_wrapper: "vidverto__playlist-item-wrapper",
                wrapper: "vidverto__playlist-wrapper",
                position: "vidverto__playlist_position_{0}",
                layout: "vidverto__playlist_layout_{0}",
                theme: "vidverto__playlist_theme_{0}",
                type: "vidverto__playlist_type_{0}",
                video_article_controls: "vidverto__playlist-video_article_controls"
            },
            controls: {
                wrapper: "vidverto__controls",
                progress_wrapper: "vidverto__progress",
                volume_wrapper: "vidverto__volume",
                mute: "vidverto__mute",
                share: "vidverto__share",
                share_hidden: "vidverto__share-hidden",
                fullscreen: "vidverto__fullscreen",
                play: "vidverto__play",
                next: "vidverto__next-track",
                prev: "vidverto__prev-track",
                native_url: "vidverto__native-url",
                replay: "vidverto__replay",
                unstick: "vidverto__unstick"
            },
            share_screen: {
                container: "vidverto__share-screen",
                share_wrapper: "vidverto__share-screen-wrapper",
                buttons_wrapper: "vidverto__share-screen-buttons",
                buttons_wrapper_inner: "vidverto__share-screen-buttons-inner",
                copy_wrapper: "vidverto__share-screen-copy-wrapper",
                middle_wrapper: "vidverto__share-screen-middle-wrapper",
                copy_text: "vidverto__share-screen-copy-text",
                title: "vidverto__share-screen-title",
                icon: "vidverto__share-screen-icon-{0}",
                active: "vidverto__share-screen_active"
            },
            display: {
                time: "vidverto__time",
                buffer: "vidverto__progress__buffer"
            },
            fullscreen: {
                fallback: "vidverto-fullscreen_fallback",
                active: "vidverto-fullscreen_active"
            },
            menu: {
                container: "vidverto__contextmenu",
                active: "vidverto__contextmenu_active",
                logo: "vidverto__contextmenu-logo",
                item: "vidverto__contextmenu-item",
                language: "vidverto__contextmenu-item-language",
                share: "vidverto__contextmenu-item-share",
                language_close: "vidverto__contextmenu-item-close-language",
                share_select: "vidverto__contextmenu-select-share",
                share_close: "vidverto__contextmenu-item-close-share",
                language_select: "vidverto__contextmenu-select-language",
                language_current: "vidverto__contextmenu-current-language"
            },
            tabFocus: "vidverto__tab-focus"
        },
        css: !1
    }
      , jr = function() {}
      , Pr = {
        t: window,
        e: document,
        i: navigator
    }
      , Sr = function(t, e) {
        return (t % e + e) % e
    }
      , Or = function(t) {
        return null != t ? t.constructor : null
    }
      , Tr = function(t, e) {
        return Boolean(t && e && t instanceof e)
    }
      , Er = function(t) {
        return null == t
    }
      , xr = function(t) {
        return Or(t) === Object
    }
      , Ar = function(t) {
        return Or(t) === String
    }
      , Mr = function(t) {
        return Array.isArray(t)
    }
      , Rr = function(t) {
        return Tr(t, NodeList)
    }
      , Ir = function(t) {
        return Er(t) || (Ar(t) || Mr(t) || Rr(t)) && !t.length || xr(t) && !Object.keys(t).length
    }
      , Cr = {
        n: Er,
        r: xr,
        o: function(t) {
            return Or(t) === Number && !Number.isNaN(t)
        },
        u: Ar,
        s: function(t) {
            return Or(t) === Boolean
        },
        c: function(t) {
            return Or(t) === Function
        },
        l: Mr,
        h: Rr,
        d: function(t) {
            return Tr(t, Element)
        },
        p: function(t) {
            return Tr(t, KeyboardEvent)
        },
        _: function(t) {
            if (Tr(t, Pr.t.URL))
                return !0;
            if (Ir(t) || !Ar(t))
                return !1;
            t.match(/^https?:\/\/.*/) || (t = "http://".concat(t));
            try {
                return !Ir(new URL(t).hostname)
            } catch (t) {
                return !1
            }
        },
        g: Ir
    };
    function Lr(t) {
        for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
            i[n - 1] = arguments[n];
        var o = i.shift();
        return Cr.r(o) ? (Object.keys(o).forEach(function(e) {
            Cr.r(o[e]) ? (Object.keys(t).includes(e) || Object.assign(t, r({}, e, {})),
            Lr(t[e], o[e])) : Object.assign(t, r({}, e, o[e]))
        }),
        Lr.apply(void 0, [t].concat(i))) : t
    }
    var zr = "html5"
      , Dr = {
        simple: "simple",
        position: "position",
        playlist: "playlist",
        video_article: "video_article",
        audio: "audio"
    }
      , Fr = function(t) {
        t.on("ended postroll_ended", function() {
            setTimeout(function() {
                !t.ads.manager.active && (t.playlist.left > 0 || t.config.playlist.repeat || t.playlist.shuffle || t.isPosition) && t.playlist.next()
            }, 100)
        })
    }
      , Vr = {
        position: Fr,
        playlist: Fr,
        video_article: Fr,
        audio: Fr
    }
      , Ur = {
        simple: function(t) {
            var e = t.plugins;
            return {
                plugins: e.length ? e : ["VidvertoPlayerSimpleUI"]
            }
        },
        position: function(t) {
            var e = t.plugins;
            return {
                plugins: e.length ? e : ["VidvertoPlayerPositionUI"]
            }
        },
        video_article: function(t) {
            var e = t.plugins;
            return {
                playlist: Lr({}, Br.playlist, {
                    name: t.video_article.title,
                    theme: t.video_article.theme,
                    show: !0,
                    repeat: !1
                }),
                plugins: e.length ? e : ["VidvertoPlayerVideoArticleUI"]
            }
        },
        playlist: function(t) {
            var e = t.plugins;
            return {
                plugins: e.length ? e : ["VidvertoPlayerVideoPlaylistUI"]
            }
        },
        audio: function(t) {
            var e = t.plugins;
            return {
                playlist: Lr({}, Br.playlist, t.audio.playlist),
                plugins: e.length ? e : ["tts" === t.provider ? "VidvertoPlayerAudioReaderUI" : t.audio.live ? "VidvertoPlayerAudioLiveUI" : "VidvertoPlayerAudioPlaylistUI"]
            }
        }
    }
      , Br = {
        position: {
            title: "",
            behavior: "chain",
            mute_live_on_pause: !1
        },
        playlist: {
            id: null,
            name: "",
            description: "",
            show: !1,
            position: "right",
            layout: "default",
            repeat: !1,
            theme: "dark"
        },
        video_article: {
            title: "",
            theme: "dark"
        },
        audio: {
            mute_live_on_pause: !0,
            sticky: !1,
            live: !1,
            theme: "dark",
            playlist: {
                repeat: !1
            },
            reader: {
                skip_selector: !1
            },
            timezone: 0
        }
    }
      , Nr = function() {
        function t(i) {
            e(this, t),
            this.m = i
        }
        return n(t, [{
            key: "proxy",
            value: function(t) {
                var e = function() {
                    Cr.o(arguments[0]) && (arguments[0] += " error"),
                    console[t].apply(console, arguments)
                };
                return this.enabled ? e : jr
            }
        }, {
            key: "enabled",
            get: function() {
                return Pr.t.console && this.m.config.debug
            }
        }, {
            key: "log",
            get: function() {
                return this.proxy("log")
            }
        }, {
            key: "warn",
            get: function() {
                return this.proxy("warn")
            }
        }, {
            key: "error",
            get: function() {
                return this.proxy("error")
            }
        }]),
        t
    }()
      , qr = function() {
        var t = !1;
        try {
            var e = Object.defineProperty({}, "passive", {
                get: function() {
                    return t = !0,
                    null
                }
            });
            Pr.t.addEventListener("test", null, e),
            Pr.t.removeEventListener("test", null, e)
        } catch (t) {}
        return t
    }();
    function Hr(t, e, i) {
        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
          , r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4]
          , o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (t && "addEventListener"in t && !Cr.g(e) && Cr.c(i)) {
            var u = o;
            qr && (u = {
                passive: r,
                capture: o
            }),
            e.split(" ").forEach(function(e) {
                t[(n ? "add" : "remove") + "EventListener"](e, i, u)
            })
        }
    }
    function Gr(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
          , i = arguments.length > 2 ? arguments[2] : void 0
          , n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
          , r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        Hr.call(this, t, e, i, !0, n, r)
    }
    function Wr(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
          , i = arguments.length > 2 ? arguments[2] : void 0
          , n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
          , r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        Hr.call(this, t, e, function o() {
            !function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , i = arguments.length > 2 ? arguments[2] : void 0
                  , n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
                  , r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                Hr.call(this, t, e, i, !1, n, r)
            }(t, e, o, n, r);
            for (var u = arguments.length, s = new Array(u), a = 0; a < u; a++)
                s[a] = arguments[a];
            i.apply(this, s)
        }, !0, n, r)
    }
    function Jr(t, e, i) {
        var n = Pr.e.createElement(t);
        return Cr.r(e) && function(t, e) {
            Cr.d(t) && !Cr.g(e) && Object.entries(e).filter(function(t) {
                var e = d(t, 2)[1];
                return !Cr.n(e)
            }).forEach(function(e) {
                var i = d(e, 2)
                  , n = i[0]
                  , r = i[1];
                return t.setAttribute(n, r)
            })
        }(n, e),
        Cr.u(i) && (n.innerText = i),
        n
    }
    function Xr(t) {
        Cr.h(t) || Cr.l(t) ? Array.from(t).forEach(Xr) : Cr.d(t) && Cr.d(t.parentNode) && t.parentNode.removeChild(t)
    }
    function Kr(t, e) {
        Cr.d(t) && ((Cr.s(e) ? e : !t.hidden) ? t.setAttribute("hidden", "") : t.removeAttribute("hidden"))
    }
    function Yr(t, e, i) {
        if (Cr.h(t))
            return Array.from(t).map(function(t) {
                return Yr(t, e, i)
            });
        if (Cr.d(t)) {
            var n = "toggle";
            return void 0 !== i && (n = i ? "add" : "remove"),
            t.classList[n](e),
            t.classList.contains(e)
        }
        return !1
    }
    function $r(t, e) {
        Cr.d(t) && Object.assign(t.style, e)
    }
    var Qr = {
        k: !!Pr.e.documentMode,
        w: "WebkitAppearance"in Pr.e.documentElement.style && !/Edge/.test(Pr.i.userAgent),
        j: /(iPhone|iPod)/gi.test(Pr.i.userAgent),
        P: /(iPhone|iPad|iPod)/gi.test(Pr.i.userAgent),
        S: /(Mac)/gi.test(Pr.i.userAgent),
        O: /^((?!chrome|android).)*safari/i.test(Pr.i.userAgent),
        T: /(Android)/gi.test(Pr.i.userAgent),
        M: /(iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone)/gi.test(Pr.i.userAgent),
        I: "ontouchstart"in window || navigator.msMaxTouchPoints
    };
    function Zr() {
        if (this.enabled) {
            var t = this.m;
            t.trigger(this.active ? "enterfullscreen" : "exitfullscreen", !0),
            Qr.P || function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                  , e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (Cr.d(t)) {
                    var i = this.getElements("button:not(:disabled), input:not(:disabled), [tabindex]")
                      , n = i[0]
                      , r = i[i.length - 1];
                    Hr.call(this, this.container, "keydown", function(t) {
                        if ("Tab" === t.key && 9 === t.keyCode) {
                            var e = Pr.e.activeElement;
                            e !== r || t.shiftKey ? e === n && t.shiftKey && (r.focus(),
                            t.preventDefault()) : (n.focus(),
                            t.preventDefault())
                        }
                    }, e, !1)
                }
            }
            .call(t, this.target, this.active),
            Yr(t.ui.root.element, t.config.classNames.fullscreen.active, this.active)
        }
    }
    function to() {
        var t = this
          , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (e ? this.scrollPosition = {
            x: Pr.t.scrollX || 0,
            y: Pr.t.scrollY || 0
        } : Pr.t.scrollTo(this.scrollPosition.x, this.scrollPosition.y),
        Pr.e.body.style.overflow = e ? "hidden" : "",
        Yr(this.target, this.m.config.classNames.fullscreen.fallback, e),
        Qr.P) {
            var i = Pr.e.head.querySelector('meta[name="viewport"]')
              , n = "viewport-fit=cover";
            i || (i = Jr("meta", {
                name: "viewport"
            }));
            var r = Cr.u(i.content) && i.content.includes(n);
            e ? (this.cleanupViewport = !r,
            r || (i.content += ",".concat(n))) : this.cleanupViewport && (i.content = i.content.split(",").filter(function(t) {
                return t.trim() !== n
            }).join(",")),
            setTimeout(function() {
                return e = t.target,
                void setTimeout(function() {
                    try {
                        Kr(e, !0),
                        e.offsetHeight,
                        Kr(e, !1)
                    } catch (t) {}
                }, 0);
                var e
            }, 100)
        }
        Zr.call(this)
    }
    var eo = function() {
        function t(i) {
            var n = this;
            e(this, t),
            this.m = i,
            this.C = !1,
            this.scrollPosition = {
                x: 0,
                y: 0
            },
            Gr.call(this.m, Pr.e, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function() {
                Zr.call(n)
            })
        }
        return n(t, [{
            key: "enter",
            value: function() {
                this.enabled && (Qr.P && this.m.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : this.native ? this.prefix ? Cr.g(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen() : to.call(this, !0),
                this.C = !0)
            }
        }, {
            key: "exit",
            value: function() {
                if (this.enabled) {
                    if (Qr.P && this.m.config.fullscreen.iosNative)
                        this.target.webkitExitFullscreen(),
                        this.m.play();
                    else if (this.native)
                        if (this.prefix) {
                            if (!Cr.g(this.prefix)) {
                                var t = "moz" === this.prefix ? "Cancel" : "Exit";
                                Pr.e["".concat(this.prefix).concat(t).concat(this.property)]()
                            }
                        } else
                            (Pr.e.cancelFullScreen || Pr.e.exitFullscreen).call(Pr.e);
                    else
                        to.call(this, !1);
                    this.C = !1
                }
            }
        }, {
            key: "toggle",
            value: function() {
                this.active ? this.exit() : this.enter()
            }
        }, {
            key: "native",
            get: function() {
                return Boolean(Pr.e.fullscreenEnabled || Pr.e.webkitFullscreenEnabled || Pr.e.mozFullScreenEnabled || Pr.e.msFullscreenEnabled)
            }
        }, {
            key: "prefix",
            get: function() {
                if (Cr.c(Pr.e.exitFullscreen))
                    return "";
                var t = "";
                return ["webkit", "moz", "ms"].some(function(e) {
                    return !(!Cr.c(Pr.e["".concat(e, "ExitFullscreen")]) && !Cr.c(Pr.e["".concat(e, "CancelFullScreen")])) && (t = e,
                    !0)
                }),
                t
            }
        }, {
            key: "property",
            get: function() {
                return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
            }
        }, {
            key: "enabled",
            get: function() {
                return (this.native || this.m.config.fullscreen.fallback) && this.m.config.fullscreen.enabled && this.m.isVideo
            }
        }, {
            key: "active",
            get: function() {
                return Qr.P && this.m.config.fullscreen.iosNative ? this.target.webkitDisplayingFullscreen : this.C
            }
        }, {
            key: "target",
            get: function() {
                return Qr.P && this.m.config.fullscreen.iosNative ? this.m.ui.media.element : this.m.ui.playerContainer.element
            }
        }]),
        t
    }();
    function io(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GET"
          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
          , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "text"
          , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return new Promise(function(o, u) {
            try {
                var s = new XMLHttpRequest;
                if (!("withCredentials"in s))
                    return;
                s.addEventListener("load", function() {
                    if ("text" === n || "string" == typeof s.response)
                        try {
                            o(JSON.parse(s.responseText))
                        } catch (t) {
                            o(s.responseText)
                        }
                    else
                        o(s.response)
                }),
                s.addEventListener("error", function() {
                    u(s.status)
                }),
                s.open(e, t, !0),
                Object.entries(r).forEach(function(t) {
                    var e = d(t, 2)
                      , i = e[0]
                      , n = e[1];
                    s.setRequestHeader(i, n)
                }),
                s.responseType = n,
                s.send(i)
            } catch (t) {
                u(t)
            }
        }
        )
    }
    function no(t) {
        return window.vidvertoPromiseCache = window.vidvertoPromiseCache || {},
        t in window.vidvertoPromiseCache || (window.vidvertoPromiseCache[t] = new Promise(function(e, i) {
            var n = document.createElement("script");
            n.onload = e,
            n.onerror = i,
            n.async = !0,
            n.src = t,
            document.head.appendChild(n)
        }
        )),
        window.vidvertoPromiseCache[t]
    }
    var ro = function(t) {
        return [{
            id: t.ads.id,
            data2: t.ads.random,
            ad_from: t.ads.adSource,
            ad_priority: t.options.hasOwnProperty("ad_priority") ? t.options.ad_priority : null
        }]
    }
      , oo = !1
      , uo = !1
      , so = !1
      , ao = !1
      , co = {
        adblock: {
            events: ["ready"],
            extract: function() {
                return new Promise(function(t) {
                    var e = setTimeout(function() {
                        return t(!0)
                    }, 1e4);
                    no("https://ad.vidverto.io/vidverto/player/ads.js").catch(function() {
                        clearTimeout(e),
                        t(!0)
                    }),
                    Wr(document.body, "vidvertoplayer_adblock_disabled", function() {
                        clearTimeout(e),
                        t(!1)
                    })
                }
                )
            },
            merge: function(t, e) {
                return t || e
            }
        },
        player_loaded: {
            events: ["ready"],
            extract: function(t) {
                return new Promise(function(e, i) {
                    var n = setTimeout(function() {
                        return e(!0)
                    }, t.config.tracking.readyDelay);
                    t.once("play", function() {
                        clearTimeout(n),
                        i(!1)
                    })
                }
                )
            },
            merge: function(t, e) {
                return t || e
            }
        },
        first_play: {
            events: ["play"],
            extract: function(t) {
                var e = t.isVideo ? "video" : "audio"
                  , i = null;
                t.provider.live ? e = "live_" + e : t.isReader ? (e = "audio_reader",
                i = t.config.audio.reader.id) : t.isAudio && t.isPlaylist ? (e = "audio_playlist",
                i = t.config.audio.id) : t.isVideo && t.isPlaylist ? (e = "video_playlist",
                i = t.config.playlist.id) : t.isPosition ? (e = "position",
                i = t.config.position.id) : t.isVideoArticle && (e = "video_article",
                i = t.config.video_article.id);
                var n = t.ui.media
                  , r = function() {
                    return {
                        type: e,
                        element_id: i,
                        media_length: t.duration,
                        ad_priority: t.config.ad_priority
                    }
                };
                return ao ? null : (ao = !0,
                n && n.element.readyState >= 1 ? r() : new Promise(function(e) {
                    t.once("loadedmetadata", function() {
                        e(r())
                    })
                }
                ))
            },
            merge: function(t, e) {
                return e
            }
        },
        ad_priority: {
            events: ["play"],
            extract: function(t) {
                return t.options.hasOwnProperty("ad_priority") ? t.options.ad_priority : null
            },
            merge: function(t, e) {
                return e
            }
        },
        progress: {
            events: ["timeupdate", "ended"],
            extract: function(t) {
                return {
                    length: t.duration,
                    watched: t.tracking.duration
                }
            },
            merge: function(t, e) {
                return e
            }
        },
        ad_impression: {
            events: ["adsimpression"],
            extract: ro,
            merge: function(t, e) {
                return t.concat(e)
            }
        },
        ad_request: {
            events: ["adsrequested"],
            extract: ro,
            merge: function(t, e) {
                return t.concat(e)
            }
        },
        skip_ad: {
            events: ["adskipped"],
            extract: ro,
            merge: function(t, e) {
                return t.concat(e)
            }
        },
        error: {
            events: ["error"],
            extract: function() {
                return !0
            },
            merge: function() {
                return !0
            }
        }
    }
      , fo = function() {
        function t(i) {
            e(this, t),
            this.m = i,
            this.L = i.config.tracking,
            this.z = {},
            this.D = [],
            this.V = 0,
            this.U = !!navigator.sendBeacon && i.config.tracking.beacon_enabled
        }
        return n(t, [{
            key: "addProgressRange",
            value: function(t, e) {
                t > e || (this.D.push({
                    min: t,
                    max: e
                }),
                this.D.sort(function(t, e) {
                    return t.min - e.min
                }),
                this.D = this.D.reduce(function(t, e) {
                    if (0 === t.length)
                        t.push(e);
                    else {
                        var i = t.pop();
                        i.max > e.min || Math.abs(i.max - e.min) < .01 ? (i.min = Math.min(i.min, e.min),
                        i.max = Math.max(i.max, e.max),
                        t.push(i)) : t.push(i, e)
                    }
                    return t
                }, []))
            }
        }, {
            key: "worker",
            value: function() {
                var t = this
                  , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , i = this.m;
                if (this.V > 10)
                    this.m.debug.warn(106);
                else if (!Cr.g(this.z)) {
                    var n = JSON.stringify({
                        referer: i.originUrl,
                        code: i.config.code,
                        authorization: i.config.auth,
                        events: this.z
                    });
                    this.U && e ? navigator.sendBeacon(this.L.url, n) : io(this.L.url, "POST", n, "text").catch(function() {
                        t.m.debug.warn(105),
                        t.V++
                    }),
                    this.z = {}
                }
            }
        }, {
            key: "increment",
            value: function(t) {
                var e = this
                  , i = this.m.playlist.currentConfig
                  , n = i.video_random;
                Object.keys(t).forEach(function(o) {
                    o in e.z ? n in e.z[o] ? e.z[o][n].value = co[o].merge(e.z[o][n].value, t[o]) : e.z[o][n] = {
                        media_id: i.id,
                        value: t[o]
                    } : e.z[o] = r({}, n, {
                        media_id: i.id,
                        value: t[o]
                    })
                })
            }
        }, {
            key: "send",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.increment(t),
                e && this.worker()
            }
        }, {
            key: "inject",
            value: function() {
                var t = this
                  , e = this.m;
                (Cr.l(this.L.events) ? this.L.events : Object.keys(co)).forEach(function(i) {
                    !t.L.ignoreEvents.includes(i) && i in co && e.on(co[i].events.join(" "), function() {
                        var n = co[i].extract(e);
                        Promise.resolve(n).then(function(e) {
                            Cr.g(e) || t.send(r({}, i, e))
                        }).catch(function() {})
                    })
                }),
                this.U && window.addEventListener("beforeunload", function() {
                    return t.worker(!0)
                }),
                setInterval(function() {
                    return t.worker()
                }, this.L.throttle);
                var i = 0;
                e.on("timeupdate ended", function() {
                    t.addProgressRange(i, e.currentTime),
                    i = e.currentTime,
                    oo || 1 !== parseInt(e.currentTime) ? uo || 3 !== parseInt(e.currentTime) ? so || 6 !== parseInt(e.currentTime) || (so = !0,
                    t.worker()) : (uo = !0,
                    t.worker()) : (oo = !0,
                    t.worker())
                }),
                e.on("seeking", function() {
                    i = e.currentTime
                }),
                e.on("ended", function() {
                    t.send({}, !0)
                }),
                e.on("track_changed", function() {
                    ao = !1,
                    oo = !1,
                    uo = !1,
                    so = !1,
                    t.D = []
                })
            }
        }, {
            key: "duration",
            get: function() {
                return this.D.reduce(function(t, e) {
                    return t + (e.max - e.min)
                }, 0)
            }
        }]),
        t
    }()
      , lo = function() {
        function t(i) {
            e(this, t),
            this.m = i,
            this.N = !1,
            this.q = null,
            this.H = !1,
            this.watch = this.watch.bind(this)
        }
        return n(t, [{
            key: "activatePause",
            value: function() {
                var t = this.m;
                t.ads.manager.visible && t.ads.manager.pause(),
                this.H = !1,
                t.playing && (this.H = !0,
                t.pause()),
                this.N = !0
            }
        }, {
            key: "deactivatePause",
            value: function() {
                var t = this.m;
                t.ads.manager.visible && t.ads.manager.resume(),
                this.H && t.play(),
                this.N = !1
            }
        }, {
            key: "activate",
            value: function() {
                var t = this.m
                  , e = t.ui.playerContainer.element
                  , i = e.getBoundingClientRect()
                  , n = t.poster;
                this.q = Jr("div", {
                    class: t.config.classNames.stickyPlaceholder
                });
                var r, o, u = Jr("div");
                this.q.appendChild(u),
                $r(u, {
                    paddingBottom: 100 * i.height / i.width + "%"
                }),
                $r(e, this.styles),
                n && $r(u, {
                    backgroundImage: "url('".concat(n, "')")
                }),
                r = this.q,
                o = e,
                Cr.d(r) && Cr.d(o) && o.parentNode.insertBefore(r, o.nextSibling),
                Yr(e, t.config.classNames.sticky, !0),
                this.N = !0
            }
        }, {
            key: "deactivate",
            value: function() {
                var t = this.m
                  , e = t.ui.playerContainer.element;
                Yr(e, t.config.classNames.sticky, !1),
                Cr.d(this.q) && (Xr(this.q),
                this.q = null);
                var i = {};
                Object.keys(this.styles).forEach(function(t) {
                    i[t] = ""
                }),
                $r(e, i),
                this.N = !1
            }
        }, {
            key: "watch",
            value: function() {
                this.allowed ? this.N || (this.enabled ? this.activate() : this.pauseOnBreakpoint && this.activatePause()) : this.N && (this.enabled ? this.deactivate() : this.pauseOnBreakpoint && this.deactivatePause())
            }
        }, {
            key: "inject",
            value: function() {
                Gr.call(this.m, Pr.t, "resize scroll", this.watch, !0, !0),
                this.m.on("play pause adsplay", this.watch)
            }
        }, {
            key: "enabled",
            get: function() {
                return this.m.config.sticky.enabled && this.m.isVideo
            }
        }, {
            key: "pauseOnBreakpoint",
            get: function() {
                return this.m.config.sticky.pause && this.m.isVideo
            }
        }, {
            key: "styles",
            get: function() {
                var t = this.m.config.sticky
                  , e = "".concat(t.margin, "px")
                  , i = {};
                switch (t.position) {
                case "left_top":
                    i = {
                        top: e,
                        left: e
                    };
                    break;
                case "left_bottom":
                    i = {
                        bottom: e,
                        left: e
                    };
                    break;
                case "bottom_right":
                    i = {
                        bottom: e,
                        right: e
                    };
                    break;
                case "top_right":
                default:
                    i = {
                        top: e,
                        right: e
                    }
                }
                return i
            }
        }, {
            key: "allowed",
            get: function() {
                var t = this.m
                  , e = (Cr.d(this.q) ? this.q : t.ui.playerContainer.element).getBoundingClientRect()
                  , i = e.top + e.height * t.config.sticky.breakpoint > 0;
                return (t.playing || t.ads.manager.active || this.N) && t.ready && t.isVideo && !t.fullscreen.active && !i
            }
        }]),
        t
    }()
      , ho = function() {
        function t(i) {
            e(this, t),
            this.m = i,
            this.W = null,
            this.C = !1,
            this.J = !0,
            this.X = !1,
            this.K = !0,
            this.Y = 1,
            this.$ = 0,
            this.Q = null,
            this.Z = null,
            this.tt = null,
            this.et = null,
            this.it = !1,
            this.nt = !1
        }
        return n(t, [{
            key: "init",
            value: function() {
                return Promise.resolve()
            }
        }, {
            key: "onUserEvent",
            value: function() {}
        }, {
            key: "play",
            value: function(t) {
                var e = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                this.W = t,
                this.$ = i,
                this.Q = n,
                this.nt = r;
                var o = this.m
                  , u = ++this.Y;
                return o.ui.root.getChild("ad_layer") ? new Promise(function(t, i) {
                    e.C = !0,
                    e.K = !1,
                    o.trigger("adsrequested"),
                    e.init().then(function() {
                        e.playTag().then(t).catch(i).finally(function() {
                            u === e.Y && (e.visible = !1,
                            e.C = !1,
                            e.K = !0)
                        })
                    }).catch(function() {
                        i(),
                        e.stop()
                    })
                }
                ) : Promise.reject()
            }
        }, {
            key: "stop",
            value: function() {
                this.K = !0,
                this.C = !1,
                this.Z = null,
                this.tt = null,
                this.X = !1
            }
        }, {
            key: "pause",
            value: function() {
                this.K = !0,
                this.m.trigger("adspause")
            }
        }, {
            key: "resume",
            value: function() {
                this.K = !1,
                this.m.trigger("adsresume")
            }
        }, {
            key: "skip",
            value: function() {}
        }, {
            key: "playTag",
            value: function() {
                return Promise.resolve()
            }
        }, {
            key: "isPreRoll",
            value: function() {
                return 0 === this.$
            }
        }, {
            key: "isPostRoll",
            value: function() {
                return 100 === this.$
            }
        }, {
            key: "visible",
            set: function(t) {
                this.X = t,
                Yr(this.container, "vidverto__ad-layer-visible", t)
            },
            get: function() {
                return this.X
            }
        }, {
            key: "linear",
            get: function() {
                return this.it
            }
        }, {
            key: "pauseAllowed",
            get: function() {
                return this.J
            }
        }, {
            key: "paused",
            get: function() {
                return this.K
            }
        }, {
            key: "playing",
            get: function() {
                return !this.paused
            }
        }, {
            key: "active",
            get: function() {
                return this.C
            }
        }, {
            key: "type",
            get: function() {
                return this.Q
            }
        }, {
            key: "currentTime",
            get: function() {
                return this.Z
            }
        }, {
            key: "duration",
            get: function() {
                return this.tt
            }
        }, {
            key: "tag",
            get: function() {
                return this.W
            }
        }, {
            key: "container",
            get: function() {
                return this.m.ui.root.getChild("ad_layer").element
            }
        }]),
        t
    }()
      , vo = function(t) {
        o(r, ho);
        var i = c(r);
        function r(t) {
            var n;
            return e(this, r),
            (n = i.call(this, t)).rt = null,
            n.ot = !1,
            n.ut = !1,
            n.st = null,
            n.at = null,
            n.ct = null,
            n.ft = null,
            n.lt = {},
            n.Y = 1,
            n.ht = !1,
            n.onAdsManagerLoaded = n.onAdsManagerLoaded.bind(a(n)),
            n.onAdEvent = n.onAdEvent.bind(a(n)),
            n.onEnded = n.onAdEvent.bind(a(n)),
            n
        }
        return n(r, [{
            key: "init",
            value: function() {
                var t = this;
                return this.rt || (this.rt = no(this.m.config.urls.ima),
                this.rt.then(function() {
                    var e = t.m
                      , i = e.ui.media.element
                      , n = 0;
                    google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),
                    google.ima.settings.setLocale(e.language),
                    google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0),
                    e.on("volumechange", function() {
                        var i = ++n;
                        t.manager.then(function(t) {
                            i === n && t.setVolume(e.muted ? 0 : e.volume)
                        })
                    });
                    var r = function() {
                        t.ut && t.manager.then(function(i) {
                            var n = e.ui.root.getChild("controls_container")
                              , r = e.ui.media.element
                              , o = r.offsetWidth
                              , u = r.offsetHeight;
                            if (t.container && t.container.ad) {
                                var s = !t.container.ad.isLinear() && n.visible ? n.element.offsetHeight : t.container.ad.isLinear() ? 0 : 8;
                                i.resize(o, u - s, google.ima.ViewMode.NORMAL)
                            }
                        })
                    };
                    e.on("controlshidden controlsshown", r),
                    e.on("enterfullscreen exitfullscreen", r),
                    window.addEventListener("resize", r),
                    t.st = new google.ima.AdDisplayContainer(t.container,i),
                    t.on(["start"], function(e) {
                        t.visible = !0
                    }),
                    t.on("loaded", function(i) {
                        var n = i.getAd();
                        t.container.ad = n,
                        t.it = n.isLinear(),
                        !n.isLinear() && e.paused && e.play()
                    }),
                    t.on("impression", function() {
                        setTimeout(r, 1)
                    }),
                    t.on(["contentResumeRequested", "userClose", "error", "complete", "allAdsCompleted"], function() {
                        t.visible = !1,
                        t.container.ad = null
                    }),
                    t.vt = !0
                }).catch(function() {
                    t.fire("error")
                })),
                this.rt
            }
        }, {
            key: "onUserEvent",
            value: function() {
                !this.ot && this.st && (this.ot = !0,
                this.st.initialize())
            }
        }, {
            key: "playTag",
            value: function() {
                var t = this;
                return new Promise(function(e, i) {
                    t.reset(),
                    t.ot || (t.ot = !0,
                    t.st.initialize());
                    var n = !1
                      , r = t.m
                      , o = r.ui.root.getChild("controls_container")
                      , u = !t.container || !t.container.ad || t.container.ad.isLinear() && t.pauseAllowed || !o.visible ? 0 : o.element.offsetHeight
                      , s = r.ui.media.element
                      , a = s.offsetWidth
                      , c = s.offsetHeight
                      , f = new google.ima.AdsRequest
                      , l = function(e) {
                        i(),
                        r.trigger("adserror"),
                        t.fire("error"),
                        n = !0,
                        r.debug.error(e)
                    };
                    f.adTagUrl = t.tag,
                    f.linearAdSlotWidth = a,
                    f.linearAdSlotHeight = c,
                    f.nonLinearAdSlotWidth = a,
                    f.nonLinearAdSlotHeight = c,
                    f.setAdWillPlayMuted(r.muted),
                    t.loader.requestAds(f),
                    t.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, l, !1),
                    t.manager.then(function(t) {
                        if (!n)
                            try {
                                t.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, l),
                                t.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, e),
                                t.addEventListener(google.ima.AdEvent.Type.USER_CLOSE, e),
                                t.addEventListener(google.ima.AdEvent.Type.IMPRESSION, function(t) {
                                    t.getAd().isLinear() || e()
                                }),
                                t.init(a, c - u, google.ima.ViewMode.NORMAL),
                                t.start()
                            } catch (t) {
                                i()
                            }
                    }).catch(i)
                }
                )
            }
        }, {
            key: "onAdsManagerLoaded",
            value: function(t) {
                var e = this
                  , i = this.m
                  , n = new google.ima.AdsRenderingSettings;
                n.restoreCustomPlaybackStateOnAdBreakComplete = !0,
                n.enablePreloading = !0,
                n.autoAlign = !0,
                n.useStyledNonLinearAds = !0,
                n.AUTO_SCALE = !0,
                this.ct = t.getAdsManager(i, n);
                var r = function() {
                    i.ui.media.element.addEventListener("ended", e.onEnded),
                    i.ui.media.unstash(),
                    e.isPostRoll() ? i.trigger("postroll_ended") : e.nt || i.play()
                };
                this.ct.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, r),
                this.ct.addEventListener(google.ima.AdEvent.Type.COMPLETE, r),
                this.ct.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, function() {
                    i.ui.media.element.removeEventListener("ended", e.onEnded),
                    i.pause(),
                    i.trigger("adspauserequested")
                }),
                this.ct.addEventListener(google.ima.AdEvent.Type.PAUSED, function() {
                    e.ht = !1
                }),
                this.ct.addEventListener(google.ima.AdEvent.Type.RESUMED, function() {
                    e.ht = Date.now() - (Cr.o(e.Z) ? 1e3 * e.Z : 0)
                }),
                this.ct.addEventListener(google.ima.AdEvent.Type.LOADED, function(t) {
                    var n = !1;
                    t.getAd().isLinear() && (n = !0,
                    e.tt = e.ct.getRemainingTime()),
                    Qr.M || Yr(e.container, i.config.classNames.ads.full_slot, n),
                    i.ui.media.stash(),
                    i.trigger("adsloaded")
                }),
                this.ct.addEventListener(google.ima.AdEvent.Type.IMPRESSION, function(t) {
                    e.ht = Date.now(),
                    t.getAd().isLinear() && (e.visible = !0,
                    e.K = !1,
                    e.J = !1),
                    i.trigger("adsimpression")
                }),
                this.ct.addEventListener(google.ima.AdEvent.Type.AD_PROGRESS, function(t) {
                    var n = t.getAdData();
                    e.tt = n.duration,
                    e.J = !0,
                    i.trigger("adsprogress")
                }),
                this.ct.addEventListener(google.ima.AdEvent.Type.SKIPPED, function() {
                    i.trigger("adskipped")
                }),
                Object.keys(google.ima.AdEvent.Type).forEach(function(t) {
                    e.ct.addEventListener(google.ima.AdEvent.Type[t], e.onAdEvent)
                }),
                this.fire("initialized", this.ct)
            }
        }, {
            key: "onEnded",
            value: function() {
                this.loader.contentComplete()
            }
        }, {
            key: "onAdEvent",
            value: function(t) {
                this.m.debug.log(t.type, t, "IMA"),
                this.fire(t.type, t)
            }
        }, {
            key: "stop",
            value: function() {
                this.ht = !1,
                this.ut && this.manager.then(function(t) {
                    return t.stop()
                }),
                l(u(r.prototype), "stop", this).call(this)
            }
        }, {
            key: "pause",
            value: function() {
                this.ht = !1,
                this.ut && this.manager.then(function(t) {
                    return t.pause()
                }),
                l(u(r.prototype), "pause", this).call(this)
            }
        }, {
            key: "resume",
            value: function() {
                this.ht = Date.now() - (Cr.o(this.Z) ? 1e3 * this.Z : 0),
                this.ut && this.manager.then(function(t) {
                    return t.resume()
                }),
                l(u(r.prototype), "resume", this).call(this)
            }
        }, {
            key: "reset",
            value: function() {
                this.loader.destroy(),
                this.loader.contentComplete(),
                this.ut && this.manager.then(function(t) {
                    t.destroy()
                }),
                this.ht = !1,
                this.Z = null,
                this.tt = null,
                this.at = null,
                this.ut = !1,
                this.ft = null,
                this.it = !1
            }
        }, {
            key: "on",
            value: function(t, e) {
                var i = this;
                Cr.l(t) || (t = [t]),
                t.forEach(function(t) {
                    Cr.l(i.lt[t]) || (i.lt[t] = []),
                    Cr.c(e) && i.lt[t].push(e)
                })
            }
        }, {
            key: "fire",
            value: function(t) {
                for (var e = this, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)
                    n[r - 1] = arguments[r];
                var o = this.lt[t];
                Cr.l(o) && o.forEach(function(t) {
                    t.apply(e, n)
                })
            }
        }, {
            key: "loader",
            get: function() {
                return this.at || (this.at = new google.ima.AdsLoader(this.st),
                this.at.getSettings().setPlayerType("vidvertoplayer"),
                this.at.getSettings().setPlayerVersion("1.0.0"),
                this.at.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded, !1)),
                this.at
            }
        }, {
            key: "manager",
            get: function() {
                var t = this;
                return this.ft || (this.ft = new Promise(function(e) {
                    t.on("initialized", function(i) {
                        t.ut = !0,
                        e(i)
                    })
                }
                )),
                this.ft
            }
        }, {
            key: "currentTime",
            get: function() {
                var t = l(u(r.prototype), "currentTime", this);
                return this.ht && this.playing && Cr.o(this.duration) ? (this.Z = Math.min((Date.now() - this.ht) / 1e3, this.duration),
                this.Z) : t
            }
        }]),
        r
    }();
    function po(t) {
        return "".concat(t, "-").concat(yo())
    }
    function yo() {
        return Math.floor(1e14 + Math.random() * (9e14 - 1))
    }
    var _o = function(t) {
        var e = document.cookie.match(new RegExp("(^| )" + t + "=([^;]+)"));
        return !!e && e[2]
    }
      , go = function(t) {
        o(r, ho);
        var i = c(r);
        function r(t) {
            var n;
            return e(this, r),
            (n = i.call(this, t)).dt = null,
            n.pt = null,
            n.yt = !1,
            n.lt = {},
            n.ht = null,
            n.it = !0,
            n
        }
        return n(r, [{
            key: "init",
            value: function() {
                var t = this;
                return this.dt || (this.dt = new Promise(function(e, i) {
                    no(t.m.config.urls.triton).then(function() {
                        var i = Jr("div", {
                            style: "display: none;",
                            id: po("triton")
                        });
                        t.m.ui.root.element.appendChild(i);
                        var n = {
                            coreModules: [{
                                id: "MediaPlayer",
                                playerId: i.getAttribute("id"),
                                idSync: {
                                    stationId: 259413
                                },
                                timeout: 20
                            }, {
                                id: "SyncBanners",
                                elements: [{
                                    id: t.container.getAttribute("id"),
                                    width: 300,
                                    height: 250
                                }]
                            }],
                            playerReady: function() {
                                t.pt = r,
                                e(t.pt)
                            },
                            adBlockerDetected: function() {}
                        }
                          , r = new TDSdk(n);
                        r.addEventListener("ad-playback-start", function() {
                            t.visible = !0,
                            t.pt.setVolume(t.m.muted ? 0 : t.m.volume),
                            t.m.trigger("adsloaded"),
                            t.m.trigger("adsimpression"),
                            t.m.pause()
                        }),
                        r.addEventListener("ad-playback-complete", function() {
                            t.fire("complete")
                        }),
                        r.addEventListener("ad-playback-error", function() {
                            t.fire("error")
                        }),
                        r.addEventListener("ad-countdown", function(e) {
                            if (Cr.o(e.data.countDown)) {
                                t.yt || (t.yt = !0,
                                t.tt = e.data.countDown,
                                t.Z = 0,
                                t.ht = Date.now());
                                var i = t.tt - e.data.countDown;
                                i > t.Z && (t.Z = i,
                                t.ht = Date.now())
                            }
                            t.m.trigger("adsprogress")
                        }),
                        t.m.on("volumechange", function() {
                            t.pt.setVolume(t.m.muted ? 0 : t.m.volume)
                        })
                    }).catch(i)
                }
                )),
                this.dt
            }
        }, {
            key: "playTag",
            value: function() {
                var t = this;
                return new Promise(function(e, i) {
                    t.ht = !1,
                    t.yt = !1,
                    t.Z = 0,
                    t.tt = 0,
                    t.pt.playAd("vastAd", {
                        url: t.tag
                    }),
                    t.once("complete", function() {
                        e(),
                        setTimeout(function() {
                            t.isPostRoll() ? t.m.trigger("postroll_ended") : t.m.play()
                        })
                    }),
                    t.once("error", function() {
                        i(),
                        t.isPostRoll() || t.m.play()
                    })
                }
                )
            }
        }, {
            key: "fire",
            value: function(t) {
                for (var e = this, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++)
                    n[r - 1] = arguments[r];
                var o = this.lt[t];
                Cr.l(o) && (o.forEach(function(t) {
                    t.apply(e, n)
                }),
                this.lt[t] = [])
            }
        }, {
            key: "once",
            value: function(t, e) {
                var i = this;
                Cr.l(t) || (t = [t]),
                t.forEach(function(t) {
                    Cr.l(i.lt[t]) || (i.lt[t] = []),
                    Cr.c(e) && i.lt[t].push(e)
                })
            }
        }, {
            key: "stop",
            value: function() {
                var t = this;
                this.dt && (this.ht = !1,
                this.dt.then(function() {
                    t.pt.stop(),
                    t.isPostRoll() || t.m.play()
                })),
                l(u(r.prototype), "stop", this).call(this)
            }
        }, {
            key: "pause",
            value: function() {
                this.pt && (this.ht = !1,
                this.pt.pause()),
                l(u(r.prototype), "pause", this).call(this)
            }
        }, {
            key: "resume",
            value: function() {
                this.pt && (this.ht = !1,
                this.pt.resume()),
                l(u(r.prototype), "resume", this).call(this)
            }
        }, {
            key: "tag",
            get: function() {
                var t = new URL(l(u(r.prototype), "tag", this))
                  , e = _o(this.m.config.triton.gdpr_cookie_name);
                return e && (t.searchParams.set("gdpr", "1"),
                t.searchParams.set("gdpr_consent", e)),
                t.toString()
            }
        }, {
            key: "currentTime",
            get: function() {
                var t = 0;
                return this.ht && (t = Date.now() - this.ht),
                l(u(r.prototype), "currentTime", this) + t / 1e3
            }
        }]),
        r
    }()
      , mo = function(t) {
        o(r, ho);
        var i = c(r);
        function r() {
            return e(this, r),
            i.apply(this, arguments)
        }
        return n(r, [{
            key: "playTag",
            value: function() {
                var t = document.createRange();
                return this.container.innerHTML = "",
                t.setStart(this.container, 0),
                this.container.appendChild(t.createContextualFragment(this.tag)),
                this.visible = !0,
                l(u(r.prototype), "playTag", this).call(this)
            }
        }]),
        r
    }()
      , ko = function() {
        function i(t) {
            e(this, i),
            this.m = t,
            this._t = {},
            this.gt = [],
            this.mt = {},
            this.kt = {},
            this.ct = null,
            this.wt = null,
            this.bt = null,
            this.jt = null,
            this.Pt = 1,
            this.St = !1,
            this.Ot = "ima",
            this.Tt = 0,
            this.Et = !1,
            this.xt = null,
            this.At = !1
        }
        return n(i, [{
            key: "managerInstance",
            value: function(t) {
                if (!this.mt.hasOwnProperty(t)) {
                    var e;
                    switch (t) {
                    case "outstream":
                        e = new mo(this.m);
                        break;
                    case "triton":
                        e = new go(this.m);
                        break;
                    case "ima":
                    default:
                        e = new vo(this.m)
                    }
                    this.mt[t] = e
                }
                return this.mt[t]
            }
        }, {
            key: "inject",
            value: function() {
                var t = this;
                this.St = !0;
                var e = this.m;
                e.on("timeupdate ended", function(i) {
                    ("timeupdate" !== i.type || e.playing) && ("ended" === i.type && t.manager.stop(),
                    t.manager.active || t.playAds().catch(jr))
                }),
                e.on("track_changed", function() {
                    var i = ++t.Pt;
                    t.manager.stop(),
                    t._t = {},
                    Object.values(t.kt).forEach(function(t) {
                        e.off("timeupdate", t.timeupdate),
                        e.off("play", t.play)
                    }),
                    t.kt = {},
                    t.At = !1,
                    t.xt = null,
                    t.buildCue(!0, function(t) {
                        return Cr.o(t.time) && t.time > -1
                    }),
                    t.gt.length && t.manager.init(),
                    Wr(t.m.media, "durationchange", function() {
                        i < t.Pt || (t.buildCue(!1, function(t) {
                            return !Cr.o(t.time) || -1 === t.time
                        }),
                        t.gt.length && t.manager.init())
                    })
                })
            }
        }, {
            key: "updateAdPriority",
            value: function() {
                var t = this.m;
                if (!t.config.urls.ad_priority)
                    return Promise.resolve();
                var e = {
                    "vidverto-referer": t.originUrl
                };
                return t.config.auth && (e.Authorization = t.config.auth),
                io(t.config.urls.ad_priority, "GET", "", "json", e).then(function(e) {
                    ["m", "p"].includes(e.ad_priority) && e.ad_priority !== t.config.ad_priority && (t.config.ad_priority = e.ad_priority)
                }).catch(function(e) {
                    t.debug.error(107, e)
                })
            }
        }, {
            key: "buildCue",
            value: function() {
                var t = this
                  , e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                e && (this.gt = []),
                i = Cr.c(i) ? i : function() {
                    return !0
                }
                ;
                var n = this.m
                  , r = n.playlist.currentConfig
                  , o = /^(\d+\.?\d*)%$/
                  , u = [];
                if (Cr.l(r.ads) ? u.push(r.ads.map(function(t) {
                    return t.adSource = "marketplace",
                    t
                })) : Cr.r(r.ads) && (Cr.l(r.ads.publisher) && u.push(r.ads.publisher.map(function(t) {
                    return t.adSource = "publisher",
                    t
                })),
                Cr.l(r.ads.marketplace) && u.push(r.ads.marketplace.map(function(t) {
                    return t.adSource = "marketplace",
                    t
                }))),
                u.length) {
                    var s = function(e) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Lr({
                            id: t.Tt++,
                            time: 0,
                            user_time: !1,
                            start_time: null,
                            timezone: 0,
                            duration: null,
                            repeat: !1,
                            position: null,
                            callback_type: null,
                            adSource: null,
                            type: null,
                            client: "ima",
                            configPosition: 0,
                            callback: !1
                        }, e, i)
                    }
                      , a = function(e) {
                        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , o = e.time;
                        e.random = yo();
                        var u = null;
                        e.callback_type && r.callback_ads.hasOwnProperty(e.callback_type) && (u = s(r.callback_ads[e.callback_type], {
                            configPosition: 1,
                            callback: !0,
                            adSource: e.adSource
                        }));
                        for (var a = t.gt.length; a--; )
                            if (t.gt[a].isAd && Math.abs(t.gt[a].time - o) < 1)
                                return e.configPosition = t.gt[a].ads.length,
                                t.gt[a].ads.push(e),
                                void (u && (u.configPosition = t.gt[a].ads.length,
                                t.gt[a].ads.push(u)));
                        var c = Lr({
                            time: e.time,
                            user_time: e.user_time,
                            duration: e.duration,
                            duration_timer: null,
                            duration_start_time: null,
                            random: yo(),
                            ads: u ? [e, u] : [e],
                            isAd: !0
                        }, i);
                        t.gt.push(c),
                        n.config.ads.checkPriority && "linear" === e.type && e.time > n.config.ads.priorityTime && t.gt.push(Lr({}, e, {
                            isAd: !1,
                            time: e.time - n.config.ads.priorityTime,
                            random: yo()
                        }))
                    }
                      , c = 1 / 0;
                    u.forEach(function(e) {
                        e.filter(i).forEach(function(e) {
                            e = s(e);
                            var i = o.exec(e.time);
                            if (i && (e.time = parseFloat(i[1]) * n.duration / 100),
                            "-1" !== e.time && -1 !== e.time || (e.time = n.duration - 1),
                            e.repeat && e.repeat > 0)
                                if (n.provider.live) {
                                    if (!(e.id in t.kt)) {
                                        var r = 0
                                          , u = Date.now()
                                          , f = !1;
                                        t.kt[e.id] = {
                                            timeupdate: function() {
                                                var t = Date.now();
                                                r += (t - u) / 1e3,
                                                u = t;
                                                var i = e.repeat - r;
                                                if (i < 10 && !f) {
                                                    var n = new Date;
                                                    a(e, {
                                                        time: 3600 * n.getUTCHours() + 60 * n.getUTCMinutes() + n.getUTCSeconds() + i,
                                                        user_time: !0
                                                    }),
                                                    f = !0
                                                }
                                                i <= 0 && f && (r = Math.abs(i),
                                                f = !1)
                                            },
                                            play: function() {
                                                u = Date.now()
                                            }
                                        },
                                        n.on("timeupdate", t.kt[e.id].timeupdate),
                                        n.on("play", t.kt[e.id].play)
                                    }
                                } else
                                    for (var l = 1; l <= n.duration / e.repeat; l++)
                                        a(e, {
                                            time: e.time * l
                                        });
                            else
                                a(e);
                            e.time < c && (c = e.time,
                            t.Ot = e.client,
                            t.ct = null)
                        })
                    }),
                    n.debug.log(this.gt, "CUE")
                }
            }
        }, {
            key: "playAds",
            value: function() {
                var e = this;
                if (!this.St)
                    return Promise.reject();
                var i = this.m;
                if (this.manager.active || i.fullscreen.active && Qr.P && i.config.fullscreen.iosNative)
                    return Promise.reject();
                for (var n = i.config.ads.gap, r = i.provider.live ? 0 : i.currentTime, o = i.duration, u = new Date, s = 3600 * u.getUTCHours() + 60 * u.getUTCMinutes() + u.getUTCSeconds(), a = function(u) {
                    var a = e.gt[u]
                      , c = n;
                    if (a.duration) {
                        var f = 0;
                        if (a.duration_start_time)
                            f += ((new Date).getTime() - a.duration_start_time.getTime()) / 1e3;
                        c += f
                    }
                    if ((a.user_time ? s >= a.time && s - a.time <= c : r >= a.time && r - a.time <= c) && !e.wasPlayed(a.random)) {
                        if (a.isAd) {
                            a.duration || e.wasPlayed(a.random, !0);
                            return {
                                v: new Promise(function(n, r) {
                                    (e.xt || (e.xt = new Promise(function(t) {
                                        var n = function() {
                                            var t = "m" === i.config.ad_priority ? "marketplace" : "publisher"
                                              , e = a.ads.slice().filter(function(e) {
                                                return e.adSource === t
                                            });
                                            return e.sort(function(t, e) {
                                                return t.configPosition - e.configPosition
                                            }),
                                            e
                                        };
                                        e.At || e.Et || !i.config.ads.pre_roll_check_priority ? e.Et || t(n()) : (e.Et = !0,
                                        e.updateAdPriority().finally(function() {
                                            e.At = !0,
                                            e.Et = !1,
                                            t(n())
                                        }))
                                    }
                                    )),
                                    e.xt).then(function(u) {
                                        i.debug.log(u, "WATERFALL");
                                        for (var s = function(t) {
                                            var r = u[t];
                                            if (!e.wasPlayed(r.random)) {
                                                e.wt = r.id,
                                                e.bt = r.random,
                                                e.jt = r.adSource,
                                                a.duration ? a.duration_timer || (a.duration_start_time = new Date,
                                                a.duration_timer = setTimeout(function() {
                                                    e.wasPlayed(r.random, !0),
                                                    e.wasPlayed(a.random, !0),
                                                    a.duration_start_time = null,
                                                    a.duration_timer = null,
                                                    i.ads.manager.active && i.ads.manager.stop()
                                                }, 1e3 * a.duration)) : e.wasPlayed(r.random, !0);
                                                var s = t;
                                                return function t(n) {
                                                    var r = Math.round(100 * a.time / o)
                                                      , c = !1
                                                      , f = !1;
                                                    e.wt = n.id,
                                                    e.bt = n.random,
                                                    e.jt = n.adSource,
                                                    e.ct = e.managerInstance(n.client),
                                                    i.ui.root.element.dataset.manager = n.client,
                                                    e.manager.play(n.url, r, n.type, u.length - (s + 1) > 1).catch(function() {
                                                        c = !0
                                                    }).finally(function() {
                                                        if (e.wt = null,
                                                        e.bt = null,
                                                        e.jt = null,
                                                        (c || i.config.ads.strict_waterfall) && u.length - s > 1)
                                                            for (; u.length - s > 1; ) {
                                                                var o = u[++s];
                                                                if (!o.callback || c) {
                                                                    f = !0,
                                                                    t(o);
                                                                    break
                                                                }
                                                            }
                                                        f || (100 === r ? i.trigger("postroll_ended") : (i.play(),
                                                        a.duration && (e.wasPlayed(a.random, !0),
                                                        e.wasPlayed(n.random, !0),
                                                        setTimeout(function() {
                                                            e.wasPlayed(a.random, !1),
                                                            e.wasPlayed(n.random, !1),
                                                            i.play()
                                                        }, 3e4))))
                                                    })
                                                }(r),
                                                n(),
                                                {
                                                    v: void 0
                                                }
                                            }
                                        }, c = 0; c < u.length; c++) {
                                            var f = s(c);
                                            if ("object" === t(f))
                                                return f.v
                                        }
                                        r()
                                    })
                                }
                                )
                            }
                        }
                        e.wasPlayed(a.random) || (e.updateAdPriority(),
                        e.wasPlayed(a.random, !0))
                    }
                }, c = 0; c < this.gt.length; c++) {
                    var f = a(c);
                    if ("object" === t(f))
                        return f.v
                }
                return Promise.reject()
            }
        }, {
            key: "wasPlayed",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (null === e)
                    return this._t[t];
                this._t[t] = e
            }
        }, {
            key: "manager",
            get: function() {
                return this.ct || (this.ct = this.managerInstance(this.Ot)),
                this.ct
            }
        }, {
            key: "id",
            get: function() {
                return this.wt
            }
        }, {
            key: "random",
            get: function() {
                return this.bt
            }
        }, {
            key: "adSource",
            get: function() {
                return this.jt
            }
        }]),
        i
    }()
      , wo = {
        code: null,
        native_title: null,
        shuffle_index: null,
        title: "",
        description: "",
        album: "",
        author: "",
        native_description: null,
        embed: null,
        thumbnail: null,
        stream: !1,
        url: null,
        file: null,
        live: null,
        duration: "",
        programs: [],
        ads: {},
        callback_ads: {}
    }
      , bo = function() {
        function t(i) {
            e(this, t),
            this.m = i,
            this.Mt = 0,
            this.Rt = {},
            this.It = i.config.media,
            this.Ct = null,
            this.Lt = null,
            this.zt = {},
            this.Dt = !1,
            this.ot = !1
        }
        return n(t, [{
            key: "config",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (t = Sr(t, this.length),
                !this.Rt.hasOwnProperty(t)) {
                    var e = this.Dt ? this.Ct[t] : this.It[t];
                    this.Rt[t] = Lr({
                        id: t,
                        video_random: yo()
                    }, wo, e)
                }
                return this.Rt[t]
            }
        }, {
            key: "play",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                  , i = this.m.ui.media;
                t = Sr(t, this.length),
                this.Lt = null,
                i.clearStash(),
                this.current = t,
                i.source = this.config(t),
                this.ot = !0,
                e && this.m.play()
            }
        }, {
            key: "prev",
            value: function() {
                this.play(this.current - 1)
            }
        }, {
            key: "next",
            value: function() {
                this.play(this.current + 1)
            }
        }, {
            key: "current",
            set: function(t) {
                this.Rt = {},
                this.zt = {},
                this.Mt = t;
                var e = this.m.ui.root.getChild("playlist");
                e && e.updateClasses(),
                this.m.trigger("track_changed")
            },
            get: function() {
                return this.Mt
            }
        }, {
            key: "shuffle",
            set: function(t) {
                var e = this.current
                  , i = this.currentConfig;
                if (t) {
                    var n = this.It.slice();
                    n.forEach(function(t, e) {
                        n[e].shuffle_index = e
                    });
                    for (var r = n.length - 1; r > 0; r--) {
                        var o = Math.floor(Math.random() * (r + 1))
                          , u = [n[o], n[r]];
                        n[r] = u[0],
                        n[o] = u[1]
                    }
                    this.Ct = n;
                    for (var s = this.Ct.length; s--; )
                        if (this.Ct[s].shuffle_index === e) {
                            this.Mt = s;
                            break
                        }
                } else
                    this.Mt = i.shuffle_index,
                    this.Ct = null;
                this.Rt = {},
                this.Dt = t
            },
            get: function() {
                return this.Dt
            }
        }, {
            key: "shuffleMedia",
            get: function() {
                return this.Ct
            }
        }, {
            key: "relatedVideo",
            get: function() {
                return this.Lt
            },
            set: function(t) {
                this.Lt = Lr({
                    id: null,
                    video_random: yo()
                }, wo, t)
            }
        }, {
            key: "relatedVideoObject",
            get: function() {
                return Cr.r(this.Lt) ? this.Lt : Lr({
                    id: null
                }, wo)
            }
        }, {
            key: "initialized",
            get: function() {
                return this.ot
            }
        }, {
            key: "left",
            get: function() {
                return this.length - this.current - 1
            }
        }, {
            key: "trackInfo",
            set: function(t) {
                this.zt = t
            },
            get: function() {
                return this.zt
            }
        }, {
            key: "currentConfig",
            get: function() {
                return this.relatedVideo ? this.relatedVideo : this.config(this.current)
            }
        }, {
            key: "media",
            get: function() {
                var t = this
                  , e = [];
                return this.It.forEach(function(i, n) {
                    e.push(t.config(n))
                }),
                e
            }
        }, {
            key: "hasAds",
            get: function() {
                for (var t, e, i = 0; i < this.length; i++)
                    if (t = this.config(i).ads,
                    e = void 0,
                    e = !1,
                    Cr.l(t) && (e = t.length > 0),
                    Cr.r(t) && t.hasOwnProperty("marketplace") && Cr.l(t.marketplace) && (e = e || t.marketplace.length > 0),
                    Cr.r(t) && t.hasOwnProperty("publisher") && Cr.l(t.publisher) && (e = e || t.publisher.length > 0),
                    e)
                        return !0;
                return !1
            }
        }, {
            key: "length",
            get: function() {
                return this.It.length
            }
        }]),
        t
    }();
    function jo() {
        try {
            return Pr.t.self !== Pr.t.top
        } catch (t) {
            return !0
        }
    }
    function Po() {
        var t = function() {
            var t = window;
            try {
                for (; t.parent.document !== t.document && t.parent.document; )
                    t = t.parent
            } catch (t) {}
            return t
        }()
          , e = window.location.href;
        return jo() && document.referrer && ((e = t.document.referrer) || (e = t.document.location.href)),
        e
    }
    var So = function() {
        function t(i) {
            e(this, t),
            this.m = i,
            this.d = null,
            this.W = "div",
            this.Ft = {
                class: "vidverto__media"
            },
            this.Vt = "base",
            this.Ut = !1,
            this.Bt = !1
        }
        return n(t, [{
            key: "play",
            value: function() {
                return Promise.resolve()
            }
        }, {
            key: "pause",
            value: function() {}
        }, {
            key: "fire",
            value: function(t, e) {
                (function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    if (Cr.d(t) && !Cr.g(e)) {
                        var r = new CustomEvent(e,{
                            bubbles: i,
                            detail: Object.assign({}, n, {
                                player: this
                            })
                        });
                        t.dispatchEvent(r)
                    }
                }
                ).call(this.m, this.element, t, !0, e)
            }
        }, {
            key: "createElement",
            value: function() {
                return Jr(this.W, this.Ft)
            }
        }, {
            key: "live",
            get: function() {
                return this.liveOriginal || this.m.playlist.currentConfig.live
            }
        }, {
            key: "liveOriginal",
            get: function() {
                return this.Ut || this.duration === 1 / 0
            }
        }, {
            key: "stream",
            get: function() {
                return this.Bt || this.live
            }
        }, {
            key: "code",
            get: function() {
                return this.Vt
            }
        }, {
            key: "element",
            get: function() {
                return this.d || (this.d = this.createElement()),
                this.d
            }
        }, {
            key: "paused",
            get: function() {
                return !0
            }
        }, {
            key: "ended",
            get: function() {
                return !0
            }
        }, {
            key: "src",
            set: function(t) {},
            get: function() {}
        }, {
            key: "muted",
            get: function() {
                return !1
            },
            set: function(t) {}
        }, {
            key: "volume",
            get: function() {
                return 0
            },
            set: function(t) {}
        }, {
            key: "currentTime",
            get: function() {
                return 0
            },
            set: function(t) {
                this.fire("seeked")
            }
        }, {
            key: "buffered",
            get: function() {
                return 0
            }
        }, {
            key: "duration",
            get: function() {
                return 0
            }
        }, {
            key: "seeking",
            get: function() {
                return !1
            }
        }]),
        t
    }()
      , Oo = function(t) {
        o(r, So);
        var i = c(r);
        function r(t) {
            var n;
            e(this, r),
            n = i.call(this, t);
            var o = t.isAudio && t.config.audio.thumbnail && Qr.M;
            return n.Vt = "html5",
            n.W = t.isVideo || o ? "video" : "audio",
            n.Nt = null,
            n.qt = 1,
            n.Ht = !1,
            n.Gt = t.config.mute_live_on_pause,
            n.Wt = !1,
            n.Jt = !1,
            n.Ft.playsinline = "",
            t.config.mute && (n.Ft.muted = ""),
            t.config.preload && (n.Ft.preload = t.config.preload),
            n
        }
        return n(r, [{
            key: "play",
            value: function() {
                var t = this;
                this.Ht && (this.Ht = !1,
                this.currentTime = 0,
                this.element.load()),
                this.Wt && (this.Wt = !1,
                this.muted = this.Jt);
                var e = this.element.play();
                return e ? e.catch(jr) : e = Promise.resolve(),
                this.m.once("error", function() {
                    t.element.error && t.element.error.message && -1 !== t.element.error.message.indexOf("PIPELINE_ERROR_DECODE") && (t.element.load(),
                    t.element.play())
                }),
                e
            }
        }, {
            key: "pause",
            value: function() {
                if (this.Gt && this.live) {
                    if (!this.Wt) {
                        var t = this.muted;
                        this.muted = !0,
                        this.Wt = !0,
                        this.Jt = t
                    }
                } else
                    this.element.pause(),
                    this.live && this.pauseLive()
            }
        }, {
            key: "pauseLive",
            value: function() {
                this.Ht = !0
            }
        }, {
            key: "paused",
            get: function() {
                return this.element.paused || this.Gt && this.Wt
            }
        }, {
            key: "ended",
            get: function() {
                return this.element.ended
            }
        }, {
            key: "src",
            set: function(t) {
                this.element.setAttribute("src", t)
            },
            get: function() {
                return this.element.getAttribute("src")
            }
        }, {
            key: "muted",
            get: function() {
                return this.Wt ? this.Jt : this.element.muted
            },
            set: function(t) {
                this.Wt ? (this.Jt = t,
                this.m.trigger("volumechange")) : this.element.muted = t
            }
        }, {
            key: "volume",
            get: function() {
                return this.element.volume
            },
            set: function(t) {
                this.element.volume = t
            }
        }, {
            key: "currentTime",
            get: function() {
                return null !== this.Nt ? this.Nt : this.element.currentTime
            },
            set: function(t) {
                var e = this
                  , i = ++this.qt;
                this.element.readyState > 0 ? this.element.currentTime = t : (this.Nt = t,
                Wr(this.element, "loadeddata", function() {
                    i < e.qt || (e.element.currentTime = t,
                    e.Nt = null)
                }))
            }
        }, {
            key: "buffered",
            get: function() {
                return this.element.buffered
            }
        }, {
            key: "duration",
            get: function() {
                return this.element.duration
            }
        }, {
            key: "seeking",
            get: function() {
                return this.element.seeking
            }
        }]),
        r
    }()
      , To = function(t) {
        o(r, Oo);
        var i = c(r);
        function r(t) {
            var n;
            return e(this, r),
            (n = i.call(this, t)).Xt = null,
            n.Kt = null,
            n.Yt = jr,
            n.Bt = !0,
            n.$t = !1,
            n.Qt = null,
            n
        }
        return n(r, [{
            key: "pauseLive",
            value: function() {
                this.$t && (this.Qt = new Date,
                this.hls.then(function(t) {
                    t.detachMedia()
                }))
            }
        }, {
            key: "play",
            value: function() {
                var t = this;
                return this.element.canPlayType("application/x-mpegURL") ? l(u(r.prototype), "play", this).call(this) : this.$t && this.live && this.Qt ? (this.Qt = null,
                void this.hls.then(function(e) {
                    e.attachMedia(t.element);
                    e.on(Hls.Events.MEDIA_ATTACHED, function i() {
                        l(u(r.prototype), "play", t).call(t),
                        e.off(Hls.Events.MEDIA_ATTACHED, i)
                    })
                })) : l(u(r.prototype), "play", this).call(this)
            }
        }, {
            key: "hls",
            get: function() {
                var t = this;
                return this.Xt || (this.Xt = new Promise(function(e, i) {
                    no(t.m.config.urls.hls).then(function() {
                        var i = new Hls;
                        i.on(Hls.Events.MEDIA_ATTACHED, function() {
                            e(i)
                        }),
                        i.on(Hls.Events.LEVEL_LOADED, function(e, i) {
                            t.Ut = i.details.live,
                            t.$t = !0
                        }),
                        i.on(Hls.Events.ERROR, function(e, i) {
                            i.fatal && t.Yt(),
                            t.m.debug.error(i)
                        }),
                        i.attachMedia(t.element)
                    }).catch(i)
                }
                )),
                this.Xt
            }
        }, {
            key: "src",
            set: function(t) {
                var e = this;
                !1 !== t ? this.element.canPlayType("application/x-mpegURL") ? v(u(r.prototype), "src", t, this, !0) : this.Kt !== t && this.hls.then(function(i) {
                    i.loadSource(t),
                    e.Kt = t,
                    e.Yt = function() {
                        v(u(r.prototype), "src", t, e, !0)
                    }
                }) : v(u(r.prototype), "src", t, this, !0)
            }
        }]),
        r
    }()
      , Eo = function(t) {
        o(r, So);
        var i = c(r);
        function r(t) {
            var n;
            return e(this, r),
            (n = i.call(this, t)).Vt = "triton",
            n.dt = null,
            n.Zt = null,
            n.te = po("triton"),
            n.Ft.id = n.te,
            n.pt = null,
            n.K = !0,
            n.ee = 0,
            n.ie = null,
            n.ne = null,
            n.re = null,
            n.Ut = !0,
            n.Bt = !0,
            n
        }
        return n(r, [{
            key: "play",
            value: function() {
                var t = this;
                return this.K = !1,
                this.fire("play"),
                this.fire("waiting"),
                this.triton.then(function(e) {
                    e.play({
                        station: t.Zt
                    })
                })
            }
        }, {
            key: "pause",
            value: function() {
                var t = this;
                return this.K = !0,
                clearInterval(this.ie),
                this.triton.then(function(e) {
                    t.fire("pause"),
                    e.pause()
                })
            }
        }, {
            key: "triton",
            get: function() {
                var t = this;
                return this.dt || (this.dt = new Promise(function(e, i) {
                    no(t.m.config.urls.triton).then(function() {
                        var i = {
                            coreModules: [{
                                id: "MediaPlayer",
                                playerId: t.te,
                                idSync: {
                                    stationId: 259413
                                }
                            }, {
                                id: "NowPlayingApi"
                            }],
                            playerReady: function() {
                                t.fire("loadeddata"),
                                t.pt = n,
                                e(t.pt)
                            },
                            configurationError: function() {},
                            moduleError: function() {},
                            adBlockerDetected: function() {}
                        };
                        t.m.config.triton.sync_banners.length && i.coreModules.push({
                            id: "SyncBanners",
                            elements: t.m.config.triton.sync_banners.slice()
                        });
                        var n = new TDSdk(i);
                        n.addEventListener("stream-start", function() {
                            t.fire("playing"),
                            t.ie = setInterval(function() {
                                t.ee += 1,
                                t.fire("timeupdate")
                            }, 1e3)
                        }),
                        n.addEventListener("track-cue-point", function(e) {
                            var i = e.data.cuePoint;
                            t.m.playlist.trackInfo = {
                                title: i.artistName,
                                description: i.cueTitle + " (" + i.albumName + ")"
                            },
                            t.m.trigger("track_info")
                        })
                    }).catch(i)
                }
                )),
                this.dt
            }
        }, {
            key: "paused",
            get: function() {
                return this.K
            }
        }, {
            key: "ended",
            get: function() {
                return !1
            }
        }, {
            key: "src",
            set: function(t) {
                this.Zt = t
            },
            get: function() {
                return this.Zt
            }
        }, {
            key: "muted",
            get: function() {
                return Cr.s(this.re) ? this.re : 0 === this.volume
            },
            set: function(t) {
                return this.re = t,
                this.fire("volumechange"),
                this.triton.then(function(e) {
                    t ? e.mute() : e.unMute()
                })
            }
        }, {
            key: "volume",
            get: function() {
                return Cr.o(this.ne) ? this.ne : this.pt ? this.pt.getVolume() : 1
            },
            set: function(t) {
                var e = this;
                return this.fire("volumechange"),
                this.ne = t,
                this.triton.then(function(t) {
                    t.setVolume(e.ne)
                })
            }
        }, {
            key: "buffered",
            get: function() {
                return 0
            }
        }, {
            key: "duration",
            get: function() {
                return 1 / 0
            }
        }, {
            key: "currentTime",
            get: function() {
                return this.ee
            },
            set: function(t) {}
        }, {
            key: "seeking",
            get: function() {
                return !1
            }
        }]),
        r
    }()
      , xo = function() {
        function t() {
            e(this, t),
            this.oe = "vidverto-"
        }
        return n(t, [{
            key: "read",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                t = this.oe + t;
                try {
                    return JSON.parse(window.localStorage.getItem(t)) || e
                } catch (t) {
                    return e
                }
            }
        }, {
            key: "write",
            value: function(t, e) {
                t = this.oe + t;
                try {
                    return window.localStorage.setItem(t, JSON.stringify(e)),
                    !0
                } catch (t) {
                    return !1
                }
            }
        }]),
        t
    }()
      , Ao = function() {
        function t(i) {
            e(this, t),
            i instanceof t ? Object.assign(this, i) : ("#" === i.charAt(0) && (i = i.substring(1)),
            3 === i.length && (i = [i.charAt(0), i.charAt(0), i.charAt(1), i.charAt(1), i.charAt(2), i.charAt(2)].join("")),
            this.R = parseInt(i.substring(0, 2), 16),
            this.G = parseInt(i.substring(2, 4), 16),
            this.B = parseInt(i.substring(4, 6), 16),
            this.A = 1)
        }
        return n(t, [{
            key: "clone",
            value: function() {
                return new t(this)
            }
        }, {
            key: "rgba",
            value: function(t) {
                var e = this.clone();
                return e.A = t,
                e
            }
        }, {
            key: "darken",
            value: function(t) {
                var e = (100 - t) / 100
                  , i = this.clone();
                return i.R = Math.max(Math.min(i.R * e, 255), 0),
                i.G = Math.max(Math.min(i.G * e, 255), 0),
                i.B = Math.max(Math.min(i.B * e, 255), 0),
                i
            }
        }, {
            key: "toString",
            value: function() {
                return "rgba(".concat(this.R, ", ").concat(this.G, ", ").concat(this.B, ", ").concat(this.A, ")")
            }
        }]),
        t
    }()
      , Mo = function() {
        function t(i) {
            e(this, t),
            this.m = i,
            this.apply(),
            this.applyStyles()
        }
        return n(t, [{
            key: "apply",
            value: function() {
                Object.entries(this.config).forEach(function(t) {
                    var e = d(t, 2)
                      , i = e[0]
                      , n = e[1];
                    n && document.documentElement.style.setProperty("--vidverto__" + i, n)
                })
            }
        }, {
            key: "applyStyles",
            value: function() {
                var t = this.config
                  , e = '.vidverto input[type="range"]::'
                  , i = [];
                t.secondary_color && t.primary_color && i.push("".concat(e, "-ms-fill-lower {background-image: linear-gradient(to right, ").concat(t.secondary_color, ", ").concat(t.primary_color, ")}")),
                t.secondary_color && (i.push(".vidverto-type_audio .vidverto__track-info-title {color: ".concat(t.secondary_color, "}")),
                i.push(".vidverto-type_audio .vidverto__live-badge {color: ".concat(t.secondary_color, "}")),
                i.push(".vidverto-type_audio .vidverto__live-badge:before {background: ".concat(t.secondary_color, "}"))),
                t.thumb_color && i.push("".concat(e, "-ms-thumb {background-color: ").concat(t.thumb_color, ";}"));
                var n = this.m.config
                  , r = n.width
                  , o = n.height
                  , u = d(n.ratio.split(":").map(function(t) {
                    return parseFloat(t)
                }), 2)
                  , s = u[0]
                  , a = u[1] / s;
                r && o && (a = o / r),
                a *= 100,
                i.push(".vidverto__video-wrapper:before {padding-top: ".concat(a, "%;}")),
                this.m.config.audio && this.m.config.audio.reader && this.m.config.audio.reader.theme && (i.push(".vidverto__audio_reader {background-color: ".concat(this.m.config.audio.reader.theme, ";  }")),
                i.push(".vidverto__audio_reader_bottom_arrow:after {border-top-color: ".concat(this.m.config.audio.reader.theme, " !important; }")),
                i.push(".vidverto__audio_reader_left_arrow:after {border-right-color: ".concat(this.m.config.audio.reader.theme, " !important; }")),
                i.push(".vidverto__audio_reader_top_arrow:after {border-bottom-color: ".concat(this.m.config.audio.reader.theme, " !important; }")),
                i.push(".vidverto__audio_reader_right_arrow:after {border-left-color: ".concat(this.m.config.audio.reader.theme, " !important; }")),
                i.push(".vidverto__media-error-overlay {background: ".concat(this.m.config.audio.reader.theme, ";}")));
                var c = Jr("style", {
                    type: "text/css"
                }, i.join(""));
                document.head.appendChild(c)
            }
        }, {
            key: "config",
            get: function() {
                var t = Lr({}, this.m.config.theme);
                return Cr.u(t.primary_color) && (t.secondary_color || (t.secondary_color = t.primary_color),
                t.thumb_color || (t.thumb_color = new Ao(t.primary_color).darken(-30).toString())),
                t
            }
        }]),
        t
    }()
      , Ro = function(t) {
        return parseInt(t / 60 / 60 % 60, 10)
    }
      , Io = function(t) {
        return parseInt(t / 60 % 60, 10)
    }
      , Co = function(t) {
        return parseInt(t % 60, 10)
    };
    function Lo() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
          , e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t = Cr.o(t) ? t : 0;
        var i = function(t) {
            return "0".concat(t).slice(-2)
        }
          , n = Ro(t)
          , r = Io(t)
          , o = Co(t);
        return n = e || n > 0 ? "".concat(i(n), ":") : "",
        "".concat(n).concat(i(r), ":").concat(i(o))
    }
    function zo(t) {
        var e = 0
          , i = 1
          , n = Cr.u(t) ? t.split(":") : [];
        return n.length <= 3 && n.length > 0 ? n.reverse().forEach(function(t) {
            e += parseInt(t, 10) * i,
            i *= 60
        }) : e = NaN,
        e
    }
    function Do(t) {
        return t < 0 ? 86400 + t : t >= 86400 ? Sr(t, 86400) : t
    }
    var Fo = function() {
        function t(i) {
            e(this, t),
            this.ue = null,
            this.se = null,
            this.ae = null,
            this.ce = [],
            this.m = i
        }
        return n(t, [{
            key: "prepare",
            value: function() {
                var t = this.m.playlist.currentConfig.programs;
                if (this.ue = null,
                this.se = null,
                this.ae = null,
                this.ce = [],
                Cr.l(t) && t.length) {
                    var e = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
                      , i = new Date
                      , n = 86400 * i.getDay() + 60 * i.getTimezoneOffset()
                      , r = n + 86400
                      , o = 86400 * i.getDay() + i.getSeconds() + 60 * (i.getMinutes() + i.getTimezoneOffset()) + 3600 * i.getHours()
                      , u = [];
                    t.forEach(function(t, n) {
                        var r = zo(t.start_at)
                          , o = zo(t.end_at)
                          , s = Do(r - 60 * i.getTimezoneOffset())
                          , a = Do(o - 60 * i.getTimezoneOffset())
                          , c = Lr({
                            id: n,
                            title: "",
                            name: "",
                            start: r,
                            end: o,
                            start_local: s,
                            end_local: a,
                            start_local_formatted: Lo(s, !0).slice(0, 5),
                            end_local_formatted: Lo(a, !0).slice(0, 5),
                            description: "",
                            start_at: null,
                            end_at: null,
                            thumbnail: null,
                            live: !1,
                            days: e
                        }, t);
                        u.push(c)
                    }),
                    u.sort(function(t, e) {
                        return t.start_local - e.start_local
                    });
                    var s = [];
                    e.forEach(function(t, e) {
                        u.forEach(function(i) {
                            if (i.days.includes(t) && i.start_at && i.end_at) {
                                i.title = i.name;
                                var n = 86400 * e + i.start
                                  , r = 86400 * (i.end < i.start ? e + 1 : e) + i.end;
                                s.push({
                                    start: n,
                                    end: r,
                                    program: Lr({}, i, {
                                        week_start_time: n,
                                        week_end_time: r
                                    })
                                })
                            }
                        })
                    }),
                    s.sort(function(t, e) {
                        return t.start - e.start
                    });
                    for (var a = 0; a < s.length; a++) {
                        var c = s[a].start >= n && s[a].start < r || s[a].start < n && s[a].end >= n
                          , f = Lr({
                            today: c
                        }, s[a].program);
                        s[a].start <= o && o < s[a].end && (this.ue = f),
                        s[a].start > o && o > s[Sr(a - 1, s.length)].start && (this.ae = f),
                        s[a].end < o && (o < s[Sr(a + 1, s.length)].end || a + 1 === s.length) && (this.se = f),
                        c && (this.ue && this.ue.id === f.id && this.ue.week_start_time === f.week_start_time && (f.live = !0),
                        this.ce.push(f))
                    }
                }
            }
        }, {
            key: "currentProgram",
            get: function() {
                return this.prepare(),
                this.ue
            }
        }, {
            key: "previousProgram",
            get: function() {
                return this.prepare(),
                this.se
            }
        }, {
            key: "nextProgram",
            get: function() {
                return this.prepare(),
                this.ae
            }
        }, {
            key: "todayPrograms",
            get: function() {
                return this.prepare(),
                this.ce
            }
        }]),
        t
    }();
    var Vo = function(t) {
        o(r, Oo);
        var i = c(r);
        function r(t) {
            var n;
            return e(this, r),
            (n = i.call(this, t)).fe = null,
            n.le = null,
            n.he = null,
            n.ve = {},
            n
        }
        return n(r, [{
            key: "addTextCache",
            value: function(t, e) {
                this.ve[t] = e
            }
        }, {
            key: "getText",
            value: function(t) {
                var e = this
                  , i = this.m;
                return new Promise(function(n) {
                    e.m.isInIframe ? (i.iframe.trigger("get_tts_text", {
                        selector: t,
                        skip: i.config.audio.reader.skip_selector
                    }),
                    i.iframe.once("set_tts_text", function(e) {
                        e.selector === t && n(e.text)
                    })) : (t in e.ve && n(e.ve[t]),
                    e.ve[t] = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                          , i = []
                          , n = ["iframe", "style", "input", "button", "textarea", "form", "table", "select", "script"]
                          , r = {
                            "li, li *": 4,
                            "h1, h1 *, h2, h2 *, h3, h3 *, h4, h4 *, h5, h5 *, h6, h6 *": 1,
                            "p, p *, article, article *, header, header *": 1,
                            "nav *, .vidverto-reader-skip, .vidverto-reader-skip *": 1 / 0
                        };
                        if (e) {
                            var o = [];
                            e.split(",").forEach(function(t) {
                                o.push(t),
                                o.push(t + " *")
                            }),
                            r[o.join(", ")] = 1 / 0
                        }
                        var u = function t(e) {
                            Array.from(e.childNodes).forEach(function(o) {
                                var u = [];
                                o instanceof Text ? u.push(o.wholeText) : o instanceof HTMLElement && -1 === n.indexOf(o.tagName) && null !== o.offsetParent && o.offsetHeight > 0 && o.offsetWidth > 0 && t(o);
                                var s = u.join(" ")
                                  , a = 10;
                                Object.entries(r).forEach(function(t) {
                                    var i = d(t, 2)
                                      , n = i[0]
                                      , r = i[1];
                                    e.matches(n) && (a = r)
                                }),
                                s.trim().split(/\s+/).length >= a && i.push(s)
                            })
                        };
                        if (!1 === t)
                            u(document.body);
                        else {
                            var s = document.querySelectorAll(t);
                            Array.from(s).forEach(function(t) {
                                return u(t)
                            })
                        }
                        return i.join(" ").replace(/\s+/g, " ").trim()
                    }(t, i.config.audio.reader.skip_selector),
                    n(e.ve[t]))
                }
                )
            }
        }, {
            key: "play",
            value: function() {
                var t = this;
                return Qr.M && l(u(r.prototype), "play", this).call(this),
                this.file.then(function(e) {
                    t.he !== e && v(u(r.prototype), "src", e, t, !0),
                    t.he = e,
                    l(u(r.prototype), "play", t).call(t)
                })
            }
        }, {
            key: "file",
            get: function() {
                var t = this;
                if (!this.le) {
                    var e = this.m;
                    this.le = new Promise(function(i, n) {
                        t.getText(t.fe).then(function(t) {
                            io(e.config.urls.tts, "POST", "content=" + encodeURIComponent(t) + "&id=" + e.config.audio.reader.id, "json", {
                                "Content-type": "application/x-www-form-urlencoded",
                                "vidverto-data3": e.config.audio.reader.code
                            }).then(function(t) {
                                i(t.file)
                            }).catch(n)
                        }).catch(n)
                    }
                    )
                }
                return this.le
            }
        }, {
            key: "src",
            set: function(t) {
                this.fe = t,
                this.le = null
            }
        }]),
        r
    }();
    var Uo = function() {
        function t(i) {
            e(this, t),
            this.m = i,
            this.de = !1,
            this.pe = {}
        }
        return n(t, [{
            key: "register",
            value: function(t) {
                if (window.hasOwnProperty(t)) {
                    try {
                        var e = new window[t](this.m);
                        this.pe[t] = e,
                        e.alias && (this.pe[e.alias] = e)
                    } catch (t) {}
                    return !0
                }
                return !1
            }
        }, {
            key: "getPlugin",
            value: function(t) {
                return !!this.pe.hasOwnProperty(t) && this.pe[t]
            }
        }, {
            key: "ready",
            value: function() {
                var t = this;
                if (!this.de) {
                    var e = []
                      , i = this.m;
                    i.config.plugins.forEach(function(t) {
                        t in i.config.urls.plugins && !window.hasOwnProperty(t) && e.push(no(i.config.urls.plugins[t].js));
                        var n, r = !1;
                        Array.from(document.styleSheets).forEach(function(e) {
                            e.href === i.config.urls.plugins[t].css && (r = !0)
                        }),
                        r || e.push((n = i.config.urls.plugins[t].css,
                        window.vidvertoPromiseCache = window.vidvertoPromiseCache || {},
                        n in window.vidvertoPromiseCache || (window.vidvertoPromiseCache[n] = new Promise(function(t, e) {
                            var i = document.createElement("link");
                            i.onload = t,
                            i.onerror = e,
                            i.type = "text/css",
                            i.rel = "stylesheet",
                            i.href = n,
                            document.head.appendChild(i)
                        }
                        )),
                        window.vidvertoPromiseCache[n]))
                    }),
                    this.de = Promise.all(e).then(function() {
                        i.config.plugins.forEach(function(e) {
                            return t.register(e)
                        })
                    })
                }
                return this.de
            }
        }]),
        t
    }()
      , Bo = function() {
        function t(i) {
            e(this, t),
            this.m = i,
            this.wt = po("iframe"),
            this.ye = {}
        }
        return n(t, [{
            key: "trigger",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                window.parent.postMessage({
                    vidvertoplayer: {
                        id: this.wt,
                        type: t,
                        data: e
                    }
                }, this.m.originUrl)
            }
        }, {
            key: "on",
            value: function(t, e) {
                t in this.ye || (this.ye[t] = []),
                this.ye[t].push(e)
            }
        }, {
            key: "off",
            value: function(t, e) {
                if (t in this.ye)
                    for (var i = this.ye[t].length; i--; )
                        if (this.ye[t][i] === e) {
                            this.ye[t].splice(i, 1);
                            break
                        }
            }
        }, {
            key: "once",
            value: function(t, e) {
                var i = this;
                this.on(t, function n(r) {
                    e(r),
                    i.off(t, n)
                })
            }
        }, {
            key: "bind",
            value: function() {
                var t = this
                  , e = this.m;
                Pr.t.addEventListener("message", function(i) {
                    if (Cr.r(i.data) && Cr.r(i.data.vidvertoplayer)) {
                        var n = Object.assign({
                            type: "",
                            data: {}
                        }, i.data.vidvertoplayer)
                          , r = ("on_" + n.type).replace(/(_\w)/g, function(t) {
                            return t[1].toUpperCase()
                        });
                        Cr.c(t[r]) && t[r].call(t, n.data),
                        n.type in t.ye && t.ye[n.type].forEach(function(t) {
                            t.call(e, n.data)
                        })
                    }
                }),
                this.trigger("handshake"),
                e.trigger("iframe_module_ready"),
                e.config.sticky.enabled && e.isVideo && (this.trigger("stick_player", e.config.sticky),
                this.on("sticky_state_update", function(t) {
                    e.trigger("sticky_state_update", t)
                })),
                e.on(br.events.join(" "), function(i) {
                    t.trigger(i.type, {
                        type: e.type,
                        state: {
                            volume: e.volume,
                            currentTime: e.currentTime,
                            paused: e.paused,
                            playing: e.playing,
                            muted: e.muted,
                            duration: e.duration,
                            config: e.config,
                            dimensions: {
                                width: e.ui.root.element.offsetWidth,
                                height: e.ui.root.element.offsetHeight
                            }
                        }
                    })
                })
            }
        }]),
        t
    }()
      , No = function() {
        if ("undefined" != typeof Map)
            return Map;
        function t(t, e) {
            var i = -1;
            return t.some(function(t, n) {
                return t[0] === e && (i = n,
                !0)
            }),
            i
        }
        return function() {
            function e() {
                this._e = []
            }
            return Object.defineProperty(e.prototype, "size", {
                get: function() {
                    return this._e.length
                },
                enumerable: !0,
                configurable: !0
            }),
            e.prototype.get = function(e) {
                var i = t(this._e, e)
                  , n = this._e[i];
                return n && n[1]
            }
            ,
            e.prototype.set = function(e, i) {
                var n = t(this._e, e);
                ~n ? this._e[n][1] = i : this._e.push([e, i])
            }
            ,
            e.prototype.delete = function(e) {
                var i = this._e
                  , n = t(i, e);
                ~n && i.splice(n, 1)
            }
            ,
            e.prototype.has = function(e) {
                return !!~t(this._e, e)
            }
            ,
            e.prototype.clear = function() {
                this._e.splice(0)
            }
            ,
            e.prototype.forEach = function(t, e) {
                void 0 === e && (e = null);
                for (var i = 0, n = this._e; i < n.length; i++) {
                    var r = n[i];
                    t.call(e, r[1], r[0])
                }
            }
            ,
            e
        }()
    }()
      , qo = "undefined" != typeof window && "undefined" != typeof document && window.document === document
      , Ho = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")()
      , Go = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Ho) : function(t) {
        return setTimeout(function() {
            return t(Date.now())
        }, 1e3 / 60)
    }
      , Wo = 2;
    var Jo = 20
      , Xo = ["top", "right", "bottom", "left", "width", "height", "size", "weight"]
      , Ko = "undefined" != typeof MutationObserver
      , Yo = function() {
        function t() {
            this.connected_ = !1,
            this.mutationEventsAdded_ = !1,
            this.mutationsObserver_ = null,
            this.observers_ = [],
            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
            this.refresh = function(t, e) {
                var i = !1
                  , n = !1
                  , r = 0;
                function o() {
                    i && (i = !1,
                    t()),
                    n && s()
                }
                function u() {
                    Go(o)
                }
                function s() {
                    var t = Date.now();
                    if (i) {
                        if (t - r < Wo)
                            return;
                        n = !0
                    } else
                        i = !0,
                        n = !1,
                        setTimeout(u, e);
                    r = t
                }
                return s
            }(this.refresh.bind(this), Jo)
        }
        return t.prototype.addObserver = function(t) {
            ~this.observers_.indexOf(t) || this.observers_.push(t),
            this.connected_ || this.connect_()
        }
        ,
        t.prototype.removeObserver = function(t) {
            var e = this.observers_
              , i = e.indexOf(t);
            ~i && e.splice(i, 1),
            !e.length && this.connected_ && this.disconnect_()
        }
        ,
        t.prototype.refresh = function() {
            this.updateObservers_() && this.refresh()
        }
        ,
        t.prototype.updateObservers_ = function() {
            var t = this.observers_.filter(function(t) {
                return t.gatherActive(),
                t.hasActive()
            });
            return t.forEach(function(t) {
                return t.broadcastActive()
            }),
            t.length > 0
        }
        ,
        t.prototype.connect_ = function() {
            qo && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_),
            window.addEventListener("resize", this.refresh),
            Ko ? (this.mutationsObserver_ = new MutationObserver(this.refresh),
            this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh),
            this.mutationEventsAdded_ = !0),
            this.connected_ = !0)
        }
        ,
        t.prototype.disconnect_ = function() {
            qo && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_),
            window.removeEventListener("resize", this.refresh),
            this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
            this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
            this.mutationsObserver_ = null,
            this.mutationEventsAdded_ = !1,
            this.connected_ = !1)
        }
        ,
        t.prototype.onTransitionEnd_ = function(t) {
            var e = t.propertyName
              , i = void 0 === e ? "" : e;
            Xo.some(function(t) {
                return !!~i.indexOf(t)
            }) && this.refresh()
        }
        ,
        t.getInstance = function() {
            return this.instance_ || (this.instance_ = new t),
            this.instance_
        }
        ,
        t.instance_ = null,
        t
    }()
      , $o = function(t, e) {
        for (var i = 0, n = Object.keys(e); i < n.length; i++) {
            var r = n[i];
            Object.defineProperty(t, r, {
                value: e[r],
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        }
        return t
    }
      , Qo = function(t) {
        return t && t.ownerDocument && t.ownerDocument.defaultView || Ho
    }
      , Zo = ou(0, 0, 0, 0);
    function tu(t) {
        return parseFloat(t) || 0
    }
    function eu(t) {
        for (var e = [], i = 1; i < arguments.length; i++)
            e[i - 1] = arguments[i];
        return e.reduce(function(e, i) {
            return e + tu(t["border-" + i + "-width"])
        }, 0)
    }
    function iu(t) {
        var e = t.clientWidth
          , i = t.clientHeight;
        if (!e && !i)
            return Zo;
        var n = Qo(t).getComputedStyle(t)
          , r = function(t) {
            for (var e = {}, i = 0, n = ["top", "right", "bottom", "left"]; i < n.length; i++) {
                var r = n[i]
                  , o = t["padding-" + r];
                e[r] = tu(o)
            }
            return e
        }(n)
          , o = r.left + r.right
          , u = r.top + r.bottom
          , s = tu(n.width)
          , a = tu(n.height);
        if ("border-box" === n.boxSizing && (Math.round(s + o) !== e && (s -= eu(n, "left", "right") + o),
        Math.round(a + u) !== i && (a -= eu(n, "top", "bottom") + u)),
        !function(t) {
            return t === Qo(t).document.documentElement
        }(t)) {
            var c = Math.round(s + o) - e
              , f = Math.round(a + u) - i;
            1 !== Math.abs(c) && (s -= c),
            1 !== Math.abs(f) && (a -= f)
        }
        return ou(r.left, r.top, s, a)
    }
    var nu = "undefined" != typeof SVGGraphicsElement ? function(t) {
        return t instanceof Qo(t).SVGGraphicsElement
    }
    : function(t) {
        return t instanceof Qo(t).SVGElement && "function" == typeof t.getBBox
    }
    ;
    function ru(t) {
        return qo ? nu(t) ? function(t) {
            var e = t.getBBox();
            return ou(0, 0, e.width, e.height)
        }(t) : iu(t) : Zo
    }
    function ou(t, e, i, n) {
        return {
            x: t,
            y: e,
            width: i,
            height: n
        }
    }
    var uu = function() {
        function t(t) {
            this.broadcastWidth = 0,
            this.broadcastHeight = 0,
            this.contentRect_ = ou(0, 0, 0, 0),
            this.target = t
        }
        return t.prototype.isActive = function() {
            var t = ru(this.target);
            return this.contentRect_ = t,
            t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        }
        ,
        t.prototype.broadcastRect = function() {
            var t = this.contentRect_;
            return this.broadcastWidth = t.width,
            this.broadcastHeight = t.height,
            t
        }
        ,
        t
    }()
      , su = function() {
        return function(t, e) {
            var i, n, r, o, u, s, a, c = (n = (i = e).x,
            r = i.y,
            o = i.width,
            u = i.height,
            s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
            a = Object.create(s.prototype),
            $o(a, {
                x: n,
                y: r,
                width: o,
                height: u,
                top: r,
                right: n + o,
                bottom: u + r,
                left: n
            }),
            a);
            $o(this, {
                target: t,
                contentRect: c
            })
        }
    }()
      , au = function() {
        function t(t, e, i) {
            if (this.activeObservations_ = [],
            this.observations_ = new No,
            "function" != typeof t)
                throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = t,
            this.controller_ = e,
            this.callbackCtx_ = i
        }
        return t.prototype.observe = function(t) {
            if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof Qo(t).Element))
                    throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) || (e.set(t, new uu(t)),
                this.controller_.addObserver(this),
                this.controller_.refresh())
            }
        }
        ,
        t.prototype.unobserve = function(t) {
            if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof Qo(t).Element))
                    throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) && (e.delete(t),
                e.size || this.controller_.removeObserver(this))
            }
        }
        ,
        t.prototype.disconnect = function() {
            this.clearActive(),
            this.observations_.clear(),
            this.controller_.removeObserver(this)
        }
        ,
        t.prototype.gatherActive = function() {
            var t = this;
            this.clearActive(),
            this.observations_.forEach(function(e) {
                e.isActive() && t.activeObservations_.push(e)
            })
        }
        ,
        t.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var t = this.callbackCtx_
                  , e = this.activeObservations_.map(function(t) {
                    return new su(t.target,t.broadcastRect())
                });
                this.callback_.call(t, e, t),
                this.clearActive()
            }
        }
        ,
        t.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }
        ,
        t.prototype.hasActive = function() {
            return this.activeObservations_.length > 0
        }
        ,
        t
    }()
      , cu = "undefined" != typeof WeakMap ? new WeakMap : new No
      , fu = function() {
        return function t(e) {
            if (!(this instanceof t))
                throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
            var i = Yo.getInstance()
              , n = new au(e,i,this);
            cu.set(this, n)
        }
    }();
    ["observe", "unobserve", "disconnect"].forEach(function(t) {
        fu.prototype[t] = function() {
            var e;
            return (e = cu.get(this))[t].apply(e, arguments)
        }
    });
    var lu = void 0 !== Ho.ResizeObserver ? Ho.ResizeObserver : fu
      , hu = _(function(t, e) {
        var i;
        t.exports = (i = i || function(t, e) {
            var i = Object.create || function() {
                function t() {}
                return function(e) {
                    var i;
                    return t.prototype = e,
                    i = new t,
                    t.prototype = null,
                    i
                }
            }()
              , n = {}
              , r = n.lib = {}
              , o = r.Base = {
                extend: function(t) {
                    var e = i(this);
                    return t && e.mixIn(t),
                    e.hasOwnProperty("init") && this.init !== e.init || (e.init = function() {
                        e.$super.init.apply(this, arguments)
                    }
                    ),
                    e.init.prototype = e,
                    e.$super = this,
                    e
                },
                create: function() {
                    var t = this.extend();
                    return t.init.apply(t, arguments),
                    t
                },
                init: function() {},
                mixIn: function(t) {
                    for (var e in t)
                        t.hasOwnProperty(e) && (this[e] = t[e]);
                    t.hasOwnProperty("toString") && (this.toString = t.toString)
                },
                clone: function() {
                    return this.init.prototype.extend(this)
                }
            }
              , u = r.WordArray = o.extend({
                init: function(t, e) {
                    t = this.words = t || [],
                    this.sigBytes = null != e ? e : 4 * t.length
                },
                toString: function(t) {
                    return (t || a).stringify(this)
                },
                concat: function(t) {
                    var e = this.words
                      , i = t.words
                      , n = this.sigBytes
                      , r = t.sigBytes;
                    if (this.clamp(),
                    n % 4)
                        for (var o = 0; o < r; o++) {
                            var u = i[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            e[n + o >>> 2] |= u << 24 - (n + o) % 4 * 8
                        }
                    else
                        for (var o = 0; o < r; o += 4)
                            e[n + o >>> 2] = i[o >>> 2];
                    return this.sigBytes += r,
                    this
                },
                clamp: function() {
                    var e = this.words
                      , i = this.sigBytes;
                    e[i >>> 2] &= 4294967295 << 32 - i % 4 * 8,
                    e.length = t.ceil(i / 4)
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t.words = this.words.slice(0),
                    t
                },
                random: function(e) {
                    for (var i, n = [], r = function(e) {
                        var e = e
                          , i = 987654321
                          , n = 4294967295;
                        return function() {
                            var r = ((i = 36969 * (65535 & i) + (i >> 16) & n) << 16) + (e = 18e3 * (65535 & e) + (e >> 16) & n) & n;
                            return r /= 4294967296,
                            (r += .5) * (t.random() > .5 ? 1 : -1)
                        }
                    }, o = 0; o < e; o += 4) {
                        var s = r(4294967296 * (i || t.random()));
                        i = 987654071 * s(),
                        n.push(4294967296 * s() | 0)
                    }
                    return new u.init(n,e)
                }
            })
              , s = n.enc = {}
              , a = s.Hex = {
                stringify: function(t) {
                    for (var e = t.words, i = t.sigBytes, n = [], r = 0; r < i; r++) {
                        var o = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                        n.push((o >>> 4).toString(16)),
                        n.push((15 & o).toString(16))
                    }
                    return n.join("")
                },
                parse: function(t) {
                    for (var e = t.length, i = [], n = 0; n < e; n += 2)
                        i[n >>> 3] |= parseInt(t.substr(n, 2), 16) << 24 - n % 8 * 4;
                    return new u.init(i,e / 2)
                }
            }
              , c = s.Latin1 = {
                stringify: function(t) {
                    for (var e = t.words, i = t.sigBytes, n = [], r = 0; r < i; r++) {
                        var o = e[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                        n.push(String.fromCharCode(o))
                    }
                    return n.join("")
                },
                parse: function(t) {
                    for (var e = t.length, i = [], n = 0; n < e; n++)
                        i[n >>> 2] |= (255 & t.charCodeAt(n)) << 24 - n % 4 * 8;
                    return new u.init(i,e)
                }
            }
              , f = s.Utf8 = {
                stringify: function(t) {
                    try {
                        return decodeURIComponent(escape(c.stringify(t)))
                    } catch (t) {
                        throw new Error("Malformed UTF-8 data")
                    }
                },
                parse: function(t) {
                    return c.parse(unescape(encodeURIComponent(t)))
                }
            }
              , l = r.BufferedBlockAlgorithm = o.extend({
                reset: function() {
                    this.z = new u.init,
                    this.ge = 0
                },
                me: function(t) {
                    "string" == typeof t && (t = f.parse(t)),
                    this.z.concat(t),
                    this.ge += t.sigBytes
                },
                ke: function(e) {
                    var i = this.z
                      , n = i.words
                      , r = i.sigBytes
                      , o = this.blockSize
                      , s = 4 * o
                      , a = r / s
                      , c = (a = e ? t.ceil(a) : t.max((0 | a) - this.we, 0)) * o
                      , f = t.min(4 * c, r);
                    if (c) {
                        for (var l = 0; l < c; l += o)
                            this.be(n, l);
                        var h = n.splice(0, c);
                        i.sigBytes -= f
                    }
                    return new u.init(h,f)
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t.z = this.z.clone(),
                    t
                },
                we: 0
            })
              , h = (r.Hasher = l.extend({
                cfg: o.extend(),
                init: function(t) {
                    this.cfg = this.cfg.extend(t),
                    this.reset()
                },
                reset: function() {
                    l.reset.call(this),
                    this.je()
                },
                update: function(t) {
                    return this.me(t),
                    this.ke(),
                    this
                },
                finalize: function(t) {
                    t && this.me(t);
                    var e = this.Pe();
                    return e
                },
                blockSize: 16,
                Se: function(t) {
                    return function(e, i) {
                        return new t.init(i).finalize(e)
                    }
                },
                Oe: function(t) {
                    return function(e, i) {
                        return new h.HMAC.init(t,i).finalize(e)
                    }
                }
            }),
            n.algo = {});
            return n
        }(Math),
        i)
    })
      , vu = (_(function(t, e) {
        var i, n, r;
        t.exports = (r = (n = i = hu).lib.WordArray,
        n.enc.Base64 = {
            stringify: function(t) {
                var e = t.words
                  , i = t.sigBytes
                  , n = this.Te;
                t.clamp();
                for (var r = [], o = 0; o < i; o += 3)
                    for (var u = (e[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (e[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | e[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, s = 0; s < 4 && o + .75 * s < i; s++)
                        r.push(n.charAt(u >>> 6 * (3 - s) & 63));
                var a = n.charAt(64);
                if (a)
                    for (; r.length % 4; )
                        r.push(a);
                return r.join("")
            },
            parse: function(t) {
                var e = t.length
                  , i = this.Te
                  , n = this.Ee;
                if (!n) {
                    n = this.Ee = [];
                    for (var o = 0; o < i.length; o++)
                        n[i.charCodeAt(o)] = o
                }
                var u = i.charAt(64);
                if (u) {
                    var s = t.indexOf(u);
                    -1 !== s && (e = s)
                }
                return function(t, e, i) {
                    for (var n = [], o = 0, u = 0; u < e; u++)
                        if (u % 4) {
                            var s = i[t.charCodeAt(u - 1)] << u % 4 * 2
                              , a = i[t.charCodeAt(u)] >>> 6 - u % 4 * 2;
                            n[o >>> 2] |= (s | a) << 24 - o % 4 * 8,
                            o++
                        }
                    return r.create(n, o)
                }(t, e, n)
            },
            Te: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        },
        i.enc.Base64)
    }),
    _(function(t, e) {
        var i;
        t.exports = (i = hu,
        function(t) {
            var e = i
              , n = e.lib
              , r = n.WordArray
              , o = n.Hasher
              , u = e.algo
              , s = [];
            !function() {
                for (var e = 0; e < 64; e++)
                    s[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0
            }();
            var a = u.MD5 = o.extend({
                je: function() {
                    this.xe = new r.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                be: function(t, e) {
                    for (var i = 0; i < 16; i++) {
                        var n = e + i
                          , r = t[n];
                        t[n] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8)
                    }
                    var o = this.xe.words
                      , u = t[e + 0]
                      , a = t[e + 1]
                      , v = t[e + 2]
                      , d = t[e + 3]
                      , p = t[e + 4]
                      , y = t[e + 5]
                      , _ = t[e + 6]
                      , g = t[e + 7]
                      , m = t[e + 8]
                      , k = t[e + 9]
                      , w = t[e + 10]
                      , b = t[e + 11]
                      , j = t[e + 12]
                      , P = t[e + 13]
                      , S = t[e + 14]
                      , O = t[e + 15]
                      , T = o[0]
                      , E = o[1]
                      , x = o[2]
                      , A = o[3];
                    T = c(T, E, x, A, u, 7, s[0]),
                    A = c(A, T, E, x, a, 12, s[1]),
                    x = c(x, A, T, E, v, 17, s[2]),
                    E = c(E, x, A, T, d, 22, s[3]),
                    T = c(T, E, x, A, p, 7, s[4]),
                    A = c(A, T, E, x, y, 12, s[5]),
                    x = c(x, A, T, E, _, 17, s[6]),
                    E = c(E, x, A, T, g, 22, s[7]),
                    T = c(T, E, x, A, m, 7, s[8]),
                    A = c(A, T, E, x, k, 12, s[9]),
                    x = c(x, A, T, E, w, 17, s[10]),
                    E = c(E, x, A, T, b, 22, s[11]),
                    T = c(T, E, x, A, j, 7, s[12]),
                    A = c(A, T, E, x, P, 12, s[13]),
                    x = c(x, A, T, E, S, 17, s[14]),
                    T = f(T, E = c(E, x, A, T, O, 22, s[15]), x, A, a, 5, s[16]),
                    A = f(A, T, E, x, _, 9, s[17]),
                    x = f(x, A, T, E, b, 14, s[18]),
                    E = f(E, x, A, T, u, 20, s[19]),
                    T = f(T, E, x, A, y, 5, s[20]),
                    A = f(A, T, E, x, w, 9, s[21]),
                    x = f(x, A, T, E, O, 14, s[22]),
                    E = f(E, x, A, T, p, 20, s[23]),
                    T = f(T, E, x, A, k, 5, s[24]),
                    A = f(A, T, E, x, S, 9, s[25]),
                    x = f(x, A, T, E, d, 14, s[26]),
                    E = f(E, x, A, T, m, 20, s[27]),
                    T = f(T, E, x, A, P, 5, s[28]),
                    A = f(A, T, E, x, v, 9, s[29]),
                    x = f(x, A, T, E, g, 14, s[30]),
                    T = l(T, E = f(E, x, A, T, j, 20, s[31]), x, A, y, 4, s[32]),
                    A = l(A, T, E, x, m, 11, s[33]),
                    x = l(x, A, T, E, b, 16, s[34]),
                    E = l(E, x, A, T, S, 23, s[35]),
                    T = l(T, E, x, A, a, 4, s[36]),
                    A = l(A, T, E, x, p, 11, s[37]),
                    x = l(x, A, T, E, g, 16, s[38]),
                    E = l(E, x, A, T, w, 23, s[39]),
                    T = l(T, E, x, A, P, 4, s[40]),
                    A = l(A, T, E, x, u, 11, s[41]),
                    x = l(x, A, T, E, d, 16, s[42]),
                    E = l(E, x, A, T, _, 23, s[43]),
                    T = l(T, E, x, A, k, 4, s[44]),
                    A = l(A, T, E, x, j, 11, s[45]),
                    x = l(x, A, T, E, O, 16, s[46]),
                    T = h(T, E = l(E, x, A, T, v, 23, s[47]), x, A, u, 6, s[48]),
                    A = h(A, T, E, x, g, 10, s[49]),
                    x = h(x, A, T, E, S, 15, s[50]),
                    E = h(E, x, A, T, y, 21, s[51]),
                    T = h(T, E, x, A, j, 6, s[52]),
                    A = h(A, T, E, x, d, 10, s[53]),
                    x = h(x, A, T, E, w, 15, s[54]),
                    E = h(E, x, A, T, a, 21, s[55]),
                    T = h(T, E, x, A, m, 6, s[56]),
                    A = h(A, T, E, x, O, 10, s[57]),
                    x = h(x, A, T, E, _, 15, s[58]),
                    E = h(E, x, A, T, P, 21, s[59]),
                    T = h(T, E, x, A, p, 6, s[60]),
                    A = h(A, T, E, x, b, 10, s[61]),
                    x = h(x, A, T, E, v, 15, s[62]),
                    E = h(E, x, A, T, k, 21, s[63]),
                    o[0] = o[0] + T | 0,
                    o[1] = o[1] + E | 0,
                    o[2] = o[2] + x | 0,
                    o[3] = o[3] + A | 0
                },
                Pe: function() {
                    var e = this.z
                      , i = e.words
                      , n = 8 * this.ge
                      , r = 8 * e.sigBytes;
                    i[r >>> 5] |= 128 << 24 - r % 32;
                    var o = t.floor(n / 4294967296)
                      , u = n;
                    i[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                    i[14 + (r + 64 >>> 9 << 4)] = 16711935 & (u << 8 | u >>> 24) | 4278255360 & (u << 24 | u >>> 8),
                    e.sigBytes = 4 * (i.length + 1),
                    this.ke();
                    for (var s = this.xe, a = s.words, c = 0; c < 4; c++) {
                        var f = a[c];
                        a[c] = 16711935 & (f << 8 | f >>> 24) | 4278255360 & (f << 24 | f >>> 8)
                    }
                    return s
                },
                clone: function() {
                    var t = o.clone.call(this);
                    return t.xe = this.xe.clone(),
                    t
                }
            });
            function c(t, e, i, n, r, o, u) {
                var s = t + (e & i | ~e & n) + r + u;
                return (s << o | s >>> 32 - o) + e
            }
            function f(t, e, i, n, r, o, u) {
                var s = t + (e & n | i & ~n) + r + u;
                return (s << o | s >>> 32 - o) + e
            }
            function l(t, e, i, n, r, o, u) {
                var s = t + (e ^ i ^ n) + r + u;
                return (s << o | s >>> 32 - o) + e
            }
            function h(t, e, i, n, r, o, u) {
                var s = t + (i ^ (e | ~n)) + r + u;
                return (s << o | s >>> 32 - o) + e
            }
            e.MD5 = o.Se(a),
            e.HmacMD5 = o.Oe(a)
        }(Math),
        i.MD5)
    }),
    _(function(t, e) {
        var i, n, r, o, u, s, a, c;
        t.exports = (r = (n = i = hu).lib,
        o = r.WordArray,
        u = r.Hasher,
        s = n.algo,
        a = [],
        c = s.SHA1 = u.extend({
            je: function() {
                this.xe = new o.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
            },
            be: function(t, e) {
                for (var i = this.xe.words, n = i[0], r = i[1], o = i[2], u = i[3], s = i[4], c = 0; c < 80; c++) {
                    if (c < 16)
                        a[c] = 0 | t[e + c];
                    else {
                        var f = a[c - 3] ^ a[c - 8] ^ a[c - 14] ^ a[c - 16];
                        a[c] = f << 1 | f >>> 31
                    }
                    var l = (n << 5 | n >>> 27) + s + a[c];
                    l += c < 20 ? 1518500249 + (r & o | ~r & u) : c < 40 ? 1859775393 + (r ^ o ^ u) : c < 60 ? (r & o | r & u | o & u) - 1894007588 : (r ^ o ^ u) - 899497514,
                    s = u,
                    u = o,
                    o = r << 30 | r >>> 2,
                    r = n,
                    n = l
                }
                i[0] = i[0] + n | 0,
                i[1] = i[1] + r | 0,
                i[2] = i[2] + o | 0,
                i[3] = i[3] + u | 0,
                i[4] = i[4] + s | 0
            },
            Pe: function() {
                var t = this.z
                  , e = t.words
                  , i = 8 * this.ge
                  , n = 8 * t.sigBytes;
                return e[n >>> 5] |= 128 << 24 - n % 32,
                e[14 + (n + 64 >>> 9 << 4)] = Math.floor(i / 4294967296),
                e[15 + (n + 64 >>> 9 << 4)] = i,
                t.sigBytes = 4 * e.length,
                this.ke(),
                this.xe
            },
            clone: function() {
                var t = u.clone.call(this);
                return t.xe = this.xe.clone(),
                t
            }
        }),
        n.SHA1 = u.Se(c),
        n.HmacSHA1 = u.Oe(c),
        i.SHA1)
    }),
    _(function(t, e) {
        var i, n, r, o, u, s;
        t.exports = (n = (i = hu).lib,
        r = n.Base,
        o = i.enc,
        u = o.Utf8,
        s = i.algo,
        void (s.HMAC = r.extend({
            init: function(t, e) {
                t = this.Ae = new t.init,
                "string" == typeof e && (e = u.parse(e));
                var i = t.blockSize
                  , n = 4 * i;
                e.sigBytes > n && (e = t.finalize(e)),
                e.clamp();
                for (var r = this.Me = e.clone(), o = this.Re = e.clone(), s = r.words, a = o.words, c = 0; c < i; c++)
                    s[c] ^= 1549556828,
                    a[c] ^= 909522486;
                r.sigBytes = o.sigBytes = n,
                this.reset()
            },
            reset: function() {
                var t = this.Ae;
                t.reset(),
                t.update(this.Re)
            },
            update: function(t) {
                return this.Ae.update(t),
                this
            },
            finalize: function(t) {
                var e = this.Ae
                  , i = e.finalize(t);
                e.reset();
                var n = e.finalize(this.Me.clone().concat(i));
                return n
            }
        })))
    }),
    _(function(t, e) {
        var i, n, r, o, u, s, a, c;
        t.exports = (r = (n = i = hu).lib,
        o = r.Base,
        u = r.WordArray,
        s = n.algo,
        a = s.MD5,
        c = s.EvpKDF = o.extend({
            cfg: o.extend({
                keySize: 4,
                hasher: a,
                iterations: 1
            }),
            init: function(t) {
                this.cfg = this.cfg.extend(t)
            },
            compute: function(t, e) {
                for (var i = this.cfg, n = i.hasher.create(), r = u.create(), o = r.words, s = i.keySize, a = i.iterations; o.length < s; ) {
                    c && n.update(c);
                    var c = n.update(t).finalize(e);
                    n.reset();
                    for (var f = 1; f < a; f++)
                        c = n.finalize(c),
                        n.reset();
                    r.concat(c)
                }
                return r.sigBytes = 4 * s,
                r
            }
        }),
        n.EvpKDF = function(t, e, i) {
            return c.create(i).compute(t, e)
        }
        ,
        i.EvpKDF)
    }),
    _(function(t, e) {
        var i;
        t.exports = void ((i = hu).lib.Cipher || function(t) {
            var e = i
              , n = e.lib
              , r = n.Base
              , o = n.WordArray
              , u = n.BufferedBlockAlgorithm
              , s = e.enc
              , a = (s.Utf8,
            s.Base64)
              , c = e.algo
              , f = c.EvpKDF
              , l = n.Cipher = u.extend({
                cfg: r.extend(),
                createEncryptor: function(t, e) {
                    return this.create(this.Ie, t, e)
                },
                createDecryptor: function(t, e) {
                    return this.create(this.Ce, t, e)
                },
                init: function(t, e, i) {
                    this.cfg = this.cfg.extend(i),
                    this.Le = t,
                    this.ze = e,
                    this.reset()
                },
                reset: function() {
                    u.reset.call(this),
                    this.je()
                },
                process: function(t) {
                    return this.me(t),
                    this.ke()
                },
                finalize: function(t) {
                    t && this.me(t);
                    var e = this.Pe();
                    return e
                },
                keySize: 4,
                ivSize: 4,
                Ie: 1,
                Ce: 2,
                Se: function() {
                    function t(t) {
                        return "string" == typeof t ? j : k
                    }
                    return function(e) {
                        return {
                            encrypt: function(i, n, r) {
                                return t(n).encrypt(e, i, n, r)
                            },
                            decrypt: function(i, n, r) {
                                return t(n).decrypt(e, i, n, r)
                            }
                        }
                    }
                }()
            })
              , h = (n.StreamCipher = l.extend({
                Pe: function() {
                    var t = this.ke(!0);
                    return t
                },
                blockSize: 1
            }),
            e.mode = {})
              , v = n.BlockCipherMode = r.extend({
                createEncryptor: function(t, e) {
                    return this.Encryptor.create(t, e)
                },
                createDecryptor: function(t, e) {
                    return this.Decryptor.create(t, e)
                },
                init: function(t, e) {
                    this.De = t,
                    this.Fe = e
                }
            })
              , d = h.CBC = function() {
                var e = v.extend();
                function i(e, i, n) {
                    var r = this.Fe;
                    if (r) {
                        var o = r;
                        this.Fe = t
                    } else
                        var o = this.Ve;
                    for (var u = 0; u < n; u++)
                        e[i + u] ^= o[u]
                }
                return e.Encryptor = e.extend({
                    processBlock: function(t, e) {
                        var n = this.De
                          , r = n.blockSize;
                        i.call(this, t, e, r),
                        n.encryptBlock(t, e),
                        this.Ve = t.slice(e, e + r)
                    }
                }),
                e.Decryptor = e.extend({
                    processBlock: function(t, e) {
                        var n = this.De
                          , r = n.blockSize
                          , o = t.slice(e, e + r);
                        n.decryptBlock(t, e),
                        i.call(this, t, e, r),
                        this.Ve = o
                    }
                }),
                e
            }()
              , p = e.pad = {}
              , y = p.Pkcs7 = {
                pad: function(t, e) {
                    for (var i = 4 * e, n = i - t.sigBytes % i, r = n << 24 | n << 16 | n << 8 | n, u = [], s = 0; s < n; s += 4)
                        u.push(r);
                    var a = o.create(u, n);
                    t.concat(a)
                },
                unpad: function(t) {
                    var e = 255 & t.words[t.sigBytes - 1 >>> 2];
                    t.sigBytes -= e
                }
            }
              , _ = (n.BlockCipher = l.extend({
                cfg: l.cfg.extend({
                    mode: d,
                    padding: y
                }),
                reset: function() {
                    l.reset.call(this);
                    var t = this.cfg
                      , e = t.iv
                      , i = t.mode;
                    if (this.Le == this.Ie)
                        var n = i.createEncryptor;
                    else {
                        var n = i.createDecryptor;
                        this.we = 1
                    }
                    this.Ue && this.Ue.Be == n ? this.Ue.init(this, e && e.words) : (this.Ue = n.call(i, this, e && e.words),
                    this.Ue.Be = n)
                },
                be: function(t, e) {
                    this.Ue.processBlock(t, e)
                },
                Pe: function() {
                    var t = this.cfg.padding;
                    if (this.Le == this.Ie) {
                        t.pad(this.z, this.blockSize);
                        var e = this.ke(!0)
                    } else {
                        var e = this.ke(!0);
                        t.unpad(e)
                    }
                    return e
                },
                blockSize: 4
            }),
            n.CipherParams = r.extend({
                init: function(t) {
                    this.mixIn(t)
                },
                toString: function(t) {
                    return (t || this.formatter).stringify(this)
                }
            }))
              , g = e.format = {}
              , m = g.OpenSSL = {
                stringify: function(t) {
                    var e = t.ciphertext
                      , i = t.salt;
                    if (i)
                        var n = o.create([1398893684, 1701076831]).concat(i).concat(e);
                    else
                        var n = e;
                    return n.toString(a)
                },
                parse: function(t) {
                    var e = a.parse(t)
                      , i = e.words;
                    if (1398893684 == i[0] && 1701076831 == i[1]) {
                        var n = o.create(i.slice(2, 4));
                        i.splice(0, 4),
                        e.sigBytes -= 16
                    }
                    return _.create({
                        ciphertext: e,
                        salt: n
                    })
                }
            }
              , k = n.SerializableCipher = r.extend({
                cfg: r.extend({
                    format: m
                }),
                encrypt: function(t, e, i, n) {
                    n = this.cfg.extend(n);
                    var r = t.createEncryptor(i, n)
                      , o = r.finalize(e)
                      , u = r.cfg;
                    return _.create({
                        ciphertext: o,
                        key: i,
                        iv: u.iv,
                        algorithm: t,
                        mode: u.mode,
                        padding: u.padding,
                        blockSize: t.blockSize,
                        formatter: n.format
                    })
                },
                decrypt: function(t, e, i, n) {
                    n = this.cfg.extend(n),
                    e = this.Ne(e, n.format);
                    var r = t.createDecryptor(i, n).finalize(e.ciphertext);
                    return r
                },
                Ne: function(t, e) {
                    return "string" == typeof t ? e.parse(t, this) : t
                }
            })
              , w = e.kdf = {}
              , b = w.OpenSSL = {
                execute: function(t, e, i, n) {
                    n || (n = o.random(8));
                    var r = f.create({
                        keySize: e + i
                    }).compute(t, n)
                      , u = o.create(r.words.slice(e), 4 * i);
                    return r.sigBytes = 4 * e,
                    _.create({
                        key: r,
                        iv: u,
                        salt: n
                    })
                }
            }
              , j = n.PasswordBasedCipher = k.extend({
                cfg: k.cfg.extend({
                    kdf: b
                }),
                encrypt: function(t, e, i, n) {
                    var r = (n = this.cfg.extend(n)).kdf.execute(i, t.keySize, t.ivSize);
                    n.iv = r.iv;
                    var o = k.encrypt.call(this, t, e, r.key, n);
                    return o.mixIn(r),
                    o
                },
                decrypt: function(t, e, i, n) {
                    n = this.cfg.extend(n),
                    e = this.Ne(e, n.format);
                    var r = n.kdf.execute(i, t.keySize, t.ivSize, e.salt);
                    n.iv = r.iv;
                    var o = k.decrypt.call(this, t, e, r.key, n);
                    return o
                }
            })
        }())
    }),
    _(function(t, e) {
        var i;
        t.exports = (i = hu,
        function() {
            var t = i
              , e = t.lib.BlockCipher
              , n = t.algo
              , r = []
              , o = []
              , u = []
              , s = []
              , a = []
              , c = []
              , f = []
              , l = []
              , h = []
              , v = [];
            !function() {
                for (var t = [], e = 0; e < 256; e++)
                    t[e] = e < 128 ? e << 1 : e << 1 ^ 283;
                var i = 0
                  , n = 0;
                for (e = 0; e < 256; e++) {
                    var d = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                    d = d >>> 8 ^ 255 & d ^ 99,
                    r[i] = d,
                    o[d] = i;
                    var p = t[i]
                      , y = t[p]
                      , _ = t[y]
                      , g = 257 * t[d] ^ 16843008 * d;
                    u[i] = g << 24 | g >>> 8,
                    s[i] = g << 16 | g >>> 16,
                    a[i] = g << 8 | g >>> 24,
                    c[i] = g,
                    g = 16843009 * _ ^ 65537 * y ^ 257 * p ^ 16843008 * i,
                    f[d] = g << 24 | g >>> 8,
                    l[d] = g << 16 | g >>> 16,
                    h[d] = g << 8 | g >>> 24,
                    v[d] = g,
                    i ? (i = p ^ t[t[t[_ ^ p]]],
                    n ^= t[t[n]]) : i = n = 1
                }
            }();
            var d = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
              , p = n.AES = e.extend({
                je: function() {
                    if (!this.qe || this.He !== this.ze) {
                        for (var t = this.He = this.ze, e = t.words, i = t.sigBytes / 4, n = 4 * ((this.qe = i + 6) + 1), o = this.Ge = [], u = 0; u < n; u++)
                            if (u < i)
                                o[u] = e[u];
                            else {
                                var s = o[u - 1];
                                u % i ? i > 6 && u % i == 4 && (s = r[s >>> 24] << 24 | r[s >>> 16 & 255] << 16 | r[s >>> 8 & 255] << 8 | r[255 & s]) : (s = r[(s = s << 8 | s >>> 24) >>> 24] << 24 | r[s >>> 16 & 255] << 16 | r[s >>> 8 & 255] << 8 | r[255 & s],
                                s ^= d[u / i | 0] << 24),
                                o[u] = o[u - i] ^ s
                            }
                        for (var a = this.We = [], c = 0; c < n; c++)
                            u = n - c,
                            s = c % 4 ? o[u] : o[u - 4],
                            a[c] = c < 4 || u <= 4 ? s : f[r[s >>> 24]] ^ l[r[s >>> 16 & 255]] ^ h[r[s >>> 8 & 255]] ^ v[r[255 & s]]
                    }
                },
                encryptBlock: function(t, e) {
                    this.Je(t, e, this.Ge, u, s, a, c, r)
                },
                decryptBlock: function(t, e) {
                    var i = t[e + 1];
                    t[e + 1] = t[e + 3],
                    t[e + 3] = i,
                    this.Je(t, e, this.We, f, l, h, v, o),
                    i = t[e + 1],
                    t[e + 1] = t[e + 3],
                    t[e + 3] = i
                },
                Je: function(t, e, i, n, r, o, u, s) {
                    for (var a = this.qe, c = t[e] ^ i[0], f = t[e + 1] ^ i[1], l = t[e + 2] ^ i[2], h = t[e + 3] ^ i[3], v = 4, d = 1; d < a; d++) {
                        var p = n[c >>> 24] ^ r[f >>> 16 & 255] ^ o[l >>> 8 & 255] ^ u[255 & h] ^ i[v++]
                          , y = n[f >>> 24] ^ r[l >>> 16 & 255] ^ o[h >>> 8 & 255] ^ u[255 & c] ^ i[v++]
                          , _ = n[l >>> 24] ^ r[h >>> 16 & 255] ^ o[c >>> 8 & 255] ^ u[255 & f] ^ i[v++]
                          , g = n[h >>> 24] ^ r[c >>> 16 & 255] ^ o[f >>> 8 & 255] ^ u[255 & l] ^ i[v++];
                        c = p,
                        f = y,
                        l = _,
                        h = g
                    }
                    p = (s[c >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[255 & h]) ^ i[v++],
                    y = (s[f >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[h >>> 8 & 255] << 8 | s[255 & c]) ^ i[v++],
                    _ = (s[l >>> 24] << 24 | s[h >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[255 & f]) ^ i[v++],
                    g = (s[h >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[255 & l]) ^ i[v++],
                    t[e] = p,
                    t[e + 1] = y,
                    t[e + 2] = _,
                    t[e + 3] = g
                },
                keySize: 8
            });
            t.AES = e.Se(p)
        }(),
        i.AES)
    }))
      , du = _(function(t, e) {
        t.exports = hu.enc.Utf8
    })
      , pu = function() {
        function t(i) {
            e(this, t),
            this.m = i,
            this.Xe = !1,
            this.Ke = null,
            this.Ye = !1,
            this.watch = this.watch.bind(this),
            this.onIframeModuleReady = this.onIframeModuleReady.bind(this)
        }
        return n(t, [{
            key: "onIframeModuleReady",
            value: function() {
                var t = this
                  , e = this.m;
                e.iframe.trigger("visibility_observer", {
                    breakpoint: e.config.visibility.breakpoint
                }),
                e.iframe.on("handshake_done", function() {
                    clearTimeout(t.Ke)
                }),
                e.iframe.on("visibility_observer_visibility", function(i) {
                    i.visible && e.config.visibility.autoplay && e.paused && !t.Xe && (t.Xe = !0,
                    Qr.M && !t.Ye && (e.muted = !0,
                    t.Ye = !0,
                    e.ui.root.element.classList.remove(e.config.classNames.showPlayPause)),
                    e.play()),
                    i.visible || !e.config.visibility.pause || e.paused || e.pause()
                })
            }
        }, {
            key: "watch",
            value: function() {
                var t = this.m
                  , e = t.ui.playerContainer.element.getBoundingClientRect()
                  , i = e.height * t.config.visibility.breakpoint
                  , n = e.top > 0 && e.top + i < window.innerHeight || e.top < 0 && e.top + i > 0;
                n && t.config.visibility.autoplay && t.paused && !this.Xe && (this.Xe = !0,
                Qr.M && !this.Ye && (t.muted = !0,
                this.Ye = !0,
                t.ui.root.element.classList.remove(t.config.classNames.showPlayPause)),
                t.play()),
                n || !t.config.visibility.pause || t.paused || t.pause()
            }
        }, {
            key: "inject",
            value: function() {
                var t = this;
                this.m.isInIframe ? (this.m.on("iframe_module_ready", this.onIframeModuleReady),
                this.Ke = setTimeout(function() {
                    t.m.config.visibility.autoplay && t.m.paused && !t.Xe && (t.Xe = !0,
                    t.m.play())
                }, 6e3)) : (Gr.call(this.m, Pr.t, "resize scroll", this.watch, !0, !0),
                this.m.on("play pause adsplay", this.watch))
            }
        }]),
        t
    }();
    return function() {
        function t(i) {
            var n = this
              , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
              , u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (e(this, t),
            this.ready = !1,
            this.loading = !1,
            this.isInIframe = jo(),
            this.touch = "ontouchstart"in Pr.e.documentElement,
            Cr.u(r) && (u = !0),
            u) {
                for (var s = [_o("vidverto_p_" + o), br.seed], a = 0; a < s.length; a++)
                    try {
                        var c = s[a]
                          , f = vu.decrypt(r, c);
                        r = JSON.parse(f.toString(du));
                        break
                    } catch (t) {}
                Cr.r(r) || (r = {})
            }
            if (o && (r.code = o),
            Cr.u(i) && (i = Pr.e.querySelectorAll(i)),
            (Cr.h(i) || Cr.l(i)) && (i = i[0]),
            this.type = Dr.simple,
            Object.keys(Dr).forEach(function(t) {
                Cr.r(r[t]) && (n.type = t)
            }),
            Cr.r(r.media) && (r.media = [r.media]),
            Cr.g(r.media) && (r.media = [{
                file: !1
            }]),
            r.media.length && Cr.u(r.media[0].file)) {
                var l = r.media[0].file.match(/\.([0-9a-z]+)$/i);
                switch (l ? l[1] : null) {
                case "m3u8":
                    r.provider = "hls";
                    break;
                case "mp3":
                case "mp4":
                case "aac":
                    r.provider = "html5"
                }
            }
            if (this.config = Lr({}, br, Br, r),
            this.options = r,
            this.type in Ur && (this.config = Lr({}, this.config, Ur[this.type].call(this, this.config))),
            this.$e = this.config.layout,
            this.type !== Dr.audio || r.layout || (this.config.media.length > 1 || !this.config.audio.live ? this.$e = "audio_slim" : !this.config.audio.live || this.config.audio.sticky && !this.isInIframe || (this.$e = "audio_maximized")),
            this.debug = new Nr(this),
            this.debug.log("Config", this.config),
            !Cr.n(i) && Cr.d(i))
                if (i.vidvertoplayer)
                    this.debug.error(203);
                else {
                    switch (this.config.provider) {
                    case "hls":
                        this.provider = new To(this);
                        break;
                    case "triton":
                        this.provider = new Eo(this);
                        break;
                    case "tts":
                        this.provider = new Vo(this);
                        break;
                    case "html5":
                    default:
                        this.provider = new Oo(this)
                    }
                    this.pluginManager = new Uo(this),
                    this.pluginManager.ready().then(function() {
                        if (n.theme = new Mo(n),
                        n.storage = new xo,
                        n.ui = n.pluginManager.getPlugin("ui"),
                        n.fullscreen = new eo(n),
                        n.sticky = new lo(n),
                        n.visibilityObserver = new pu(n),
                        n.tracking = new fo(n),
                        n.ads = new ko(n),
                        n.playlist = new bo(n),
                        n.program = new Fo(n),
                        n.ui.build(i),
                        n.visibilityObserver.inject(),
                        n.iframe = new Bo(n),
                        n.isInIframe && n.iframe.bind(),
                        !n.isInIframe && n.isVideo && n.sticky.inject(),
                        i.vidvertoplayer = n,
                        n.target = i,
                        n.config.debug && n.on(n.config.events.join(" "), function(t) {
                            n.debug.log("event: ".concat(t.type))
                        }),
                        n.Qe = null,
                        n.H = !1,
                        n.type in Vr && Vr[n.type].call(n, n),
                        Cr.l(n.config.allowed_domains)) {
                            var t = window.location.hostname;
                            if (jo()) {
                                var e = Po().match(/^https?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/i);
                                t = (t = e && e[1]).replace(/^www\./, "")
                            }
                            -1 === n.config.allowed_domains.indexOf(t) && -1 === n.config.allowed_domains.indexOf("www." + t) || n.ads.inject()
                        } else
                            n.ads.inject();
                        Cr._(n.config.tracking.url) && n.tracking.inject(),
                        n.volume = n.config.volume,
                        n.playlist.play(0, n.config.autoplay),
                        Qr.M && n.config.autoplay
                    })
                }
            else
                this.debug.error(201)
        }
        return n(t, [{
            key: "createResizeObserver",
            value: function(t) {
                return new lu(t)
            }
        }, {
            key: "play",
            value: function() {
                var t = this
                  , e = function() {
                    t.trigger("play_requested"),
                    t.provider.play()
                };
                Qr.M && e(),
                this.ads.playAds().then(function() {
                    Qr.M && t.pause()
                }).catch(function() {
                    Qr.M || e()
                })
            }
        }, {
            key: "pause",
            value: function() {
                this.playing && this.provider.pause()
            }
        }, {
            key: "togglePlay",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                (Cr.s(t) ? t : !this.playing) ? this.play() : this.pause()
            }
        }, {
            key: "stop",
            value: function() {
                this.pause(),
                this.restart()
            }
        }, {
            key: "restart",
            value: function() {
                this.currentTime = 0
            }
        }, {
            key: "rewind",
            value: function(t) {
                this.currentTime = this.currentTime - (Cr.o(t) ? t : this.config.seekTime)
            }
        }, {
            key: "forward",
            value: function(t) {
                this.currentTime = this.currentTime + (Cr.o(t) ? t : this.config.seekTime)
            }
        }, {
            key: "increaseVolume",
            value: function(t) {
                var e = this.provider.muted ? 0 : this.volume;
                this.volume = e + (Cr.o(t) ? t : 0)
            }
        }, {
            key: "getElements",
            value: function(t) {
                return this.container.querySelectorAll(t)
            }
        }, {
            key: "i18n",
            value: function(t) {
                if (Cr.g(t))
                    return "";
                var e = (this.config.i18n.hasOwnProperty(this.language) ? this.config.i18n[this.language] : this.config.i18n[this.config.language.fallback])[t];
                return Cr.u(e) ? e : t
            }
        }, {
            key: "on",
            value: function(t, e) {
                var i = this;
                this.ready ? this.ui.root.live(t, e) : this.pluginManager.ready().then(function() {
                    return i.ui.root.live(t, e)
                })
            }
        }, {
            key: "once",
            value: function(t, e) {
                var i = this;
                this.ready ? this.ui.root.once(this.ui.root.element, t, e) : this.pluginManager.ready().then(function() {
                    return i.ui.root.once(i.ui.root.element, t, e)
                })
            }
        }, {
            key: "off",
            value: function(t, e) {
                var i = this;
                this.ready ? this.ui.root.die(t, e) : this.pluginManager.ready().then(function() {
                    return i.ui.root.die(t, e)
                })
            }
        }, {
            key: "trigger",
            value: function(t) {
                var e = this
                  , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                this.ready ? this.ui.root.trigger(t, i) : this.pluginManager.ready().then(function() {
                    return e.ui.root.trigger(t, i)
                })
            }
        }, {
            key: "destroy",
            value: function() {
                var t = this
                  , e = function() {
                    t.pause(),
                    t.ui.root.unbind(),
                    delete t.target.vidvertoplayer,
                    Xr(t.ui.root.element)
                };
                this.ready ? e() : this.pluginManager.ready().then(e)
            }
        }, {
            key: "iframeVisibility",
            value: function(t, e, i) {
                if (this.ready) {
                    var n = t < e + i * this.config.sticky.breakpoint;
                    this.Qe !== n && (n ? (this.ads.manager.resume(),
                    this.H && this.play()) : (this.H = !1,
                    this.playing && (this.H = !0,
                    this.ads.manager.pause(),
                    this.pause())),
                    this.Qe = n)
                }
            }
        }, {
            key: "media",
            get: function() {
                return this.ready ? this.ui.media.element : null
            }
        }, {
            key: "container",
            get: function() {
                return this.ready ? this.ui.root.element : null
            }
        }, {
            key: "isHTML5",
            get: function() {
                return this.provider.code === zr
            }
        }, {
            key: "isVideo",
            get: function() {
                return this.isSimpleVideo || this.isVideoArticle || this.isPlaylist || this.isPosition
            }
        }, {
            key: "isSimpleVideo",
            get: function() {
                return this.type === Dr.simple
            }
        }, {
            key: "isVideoArticle",
            get: function() {
                return this.type === Dr.video_article
            }
        }, {
            key: "isPlaylist",
            get: function() {
                return this.type === Dr.playlist
            }
        }, {
            key: "isReader",
            get: function() {
                return void 0 !== this.config.audio.reader && void 0 !== this.config.audio.reader.id
            }
        }, {
            key: "isAudio",
            get: function() {
                return this.type === Dr.audio
            }
        }, {
            key: "isPosition",
            get: function() {
                return this.type === Dr.position
            }
        }, {
            key: "playing",
            get: function() {
                return this.ready && !this.paused && !this.ended
            }
        }, {
            key: "paused",
            get: function() {
                return this.provider.paused
            }
        }, {
            key: "stopped",
            get: function() {
                return this.paused && 0 === this.currentTime
            }
        }, {
            key: "ended",
            get: function() {
                return this.provider.ended
            }
        }, {
            key: "layout",
            get: function() {
                return this.$e
            },
            set: function(t) {
                this.$e = t,
                this.trigger("layout_change")
            }
        }, {
            key: "currentTime",
            set: function(t) {
                this.provider.currentTime = Cr.o(t) && t > 0 ? t : 0,
                this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
            },
            get: function() {
                if (this.ads.manager.active) {
                    var t = this.ads.manager.currentTime;
                    if (Cr.o(t))
                        return t
                }
                return this.provider.currentTime
            }
        }, {
            key: "buffered",
            get: function() {
                var t = this.provider.buffered;
                return Cr.o(t) ? t : t && t.length && this.duration > 0 ? t.end(0) / this.duration : 0
            }
        }, {
            key: "seeking",
            get: function() {
                return this.provider.seeking
            }
        }, {
            key: "duration",
            get: function() {
                if (this.ads.manager.visible) {
                    var t = this.ads.manager.duration;
                    if (Cr.o(t))
                        return t
                }
                var e = this.provider.duration;
                return Cr.o(e) && e !== 1 / 0 ? e : 0
            }
        }, {
            key: "volume",
            set: function(t) {
                var e = t;
                Cr.u(e) && (e = Number(e)),
                Cr.o(e) || (e = this.config.volume),
                e = Math.max(Math.min(e, 1), 0),
                this.config.volume = e,
                this.provider.volume = e,
                this.muted && e > 0 && (this.muted = !1)
            },
            get: function() {
                return Number(this.provider.volume)
            }
        }, {
            key: "language",
            get: function() {
                var t = this.storage.read("language", this.config.language.current);
                if (Cr.g(t)) {
                    var e = navigator.language || navigator.userLanguage;
                    t = Cr.u(e) ? e.length > 2 ? e.substring(0, 2) : e : this.config.language.fallback
                }
                return t
            },
            set: function(t) {
                this.storage.write("language", t),
                this.ui.root.onLanguageSwitch()
            }
        }, {
            key: "muted",
            set: function(t) {
                var e = t;
                Cr.s(e) || (e = this.config.mute),
                this.config.mute = e,
                this.provider.muted = e
            },
            get: function() {
                return this.provider.muted
            }
        }, {
            key: "poster",
            set: function(t) {
                this.isVideo ? this.ready && this.ui.poster && this.ui.poster.setPoster(t, !1).catch(jr) : this.debug.warn(101)
            },
            get: function() {
                return this.isVideo ? this.media.getAttribute("poster") : null
            }
        }, {
            key: "autoplay",
            set: function(t) {
                this.config.autoplay = Cr.s(t) ? t : this.config.autoplay
            },
            get: function() {
                return this.config.autoplay
            }
        }, {
            key: "originUrl",
            get: function() {
                return this.config.origin_url || Po()
            },
            set: function(t) {
                this.config.origin_url = t
            }
        }, {
            key: "isAmp",
            get: function() {
                return this.config.is_amp
            },
            set: function(t) {
                this.config.is_amp = t;
                var e = this.ui.root;
                Yr(e.element, "mw-amp", t),
                Yr(e.element, "mw-iframe", !1),
                Yr(e.element, "mw-script", !1)
            }
        }], [{
            key: "standalone",
            value: function() {
                var t = new URL(Pr.e.location).searchParams.get("code");
                if (t) {
                    var e = po("m".concat(t));
                    Pr.e.body.insertAdjacentHTML("beforeend", '<div id="'.concat(e, '"></div>')),
                    io("".replace("{%code%}", t), "GET", null, "text", {
                        "Content-type": "application/x-www-form-urlencoded",
                        "vidverto-referer": Po()
                    }).then(function(i) {
                        var n = Object.create(window.VidvertoPlayer.prototype);
                        window.VidvertoPlayer.apply(n, [document.getElementById(e), Lr(i, {
                            code: t
                        })]),
                        n.pluginManager.ready().then(function() {
                            setTimeout(function() {
                                n.on(br.events.join(" "), function(t) {
                                    window.parent.postMessage({
                                        mh: n.ui.root.element.offsetHeight,
                                        mw: n.ui.root.element.offsetWidth,
                                        cd: "#" + n.config.code,
                                        vidverto_event: {
                                            type: t.type,
                                            state: {
                                                volume: n.volume,
                                                currentTime: n.currentTime,
                                                paused: n.paused,
                                                playing: n.playing,
                                                muted: n.muted,
                                                duration: n.duration,
                                                dimensions: {
                                                    width: n.ui.root.element.offsetWidth,
                                                    height: n.ui.root.element.offsetHeight
                                                }
                                            }
                                        }
                                    }, n.originUrl)
                                })
                            })
                        })
                    }).catch(function(t) {
                        console.error(t)
                    })
                }
            }
        }]),
        t
    }()
});
