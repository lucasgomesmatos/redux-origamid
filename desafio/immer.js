!(function (n, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(((n = n || self).immer = {}));
})(this, function (n) {
  function t(n) {
    for (
      var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), e = 1;
      e < t;
      e++
    )
      r[e - 1] = arguments[e];
    throw Error(
      '[Immer] minified error nr: ' +
        n +
        (r.length ? ' ' + r.join(',') : '') +
        '. Find the full error at: https://bit.ly/3cXEKWf',
    );
  }
  function r(n) {
    return !!n && !!n[q];
  }
  function e(n) {
    return (
      !!n &&
      ((function (n) {
        if (!n || 'object' != typeof n) return !1;
        var t = Object.getPrototypeOf(n);
        return !t || t === Object.prototype;
      })(n) ||
        Array.isArray(n) ||
        !!n[X] ||
        !!n.constructor[X] ||
        c(n) ||
        v(n))
    );
  }
  function i(n, t) {
    0 === u(n)
      ? G(n).forEach(function (r) {
          return t(r, n[r], n);
        })
      : n.forEach(function (r, e) {
          return t(e, r, n);
        });
  }
  function u(n) {
    var t = n[q];
    return t
      ? t.t > 3
        ? t.t - 4
        : t.t
      : Array.isArray(n)
      ? 1
      : c(n)
      ? 2
      : v(n)
      ? 3
      : 0;
  }
  function o(n, t) {
    return 2 === u(n) ? n.has(t) : Object.prototype.hasOwnProperty.call(n, t);
  }
  function f(n, t) {
    return 2 === u(n) ? n.get(t) : n[t];
  }
  function a(n, t) {
    return n === t ? 0 !== n || 1 / n == 1 / t : n != n && t != t;
  }
  function c(n) {
    return $ && n instanceof Map;
  }
  function v(n) {
    return C && n instanceof Set;
  }
  function s(n) {
    return n.i || n.u;
  }
  function p(n, r) {
    if ((void 0 === r && (r = !1), Array.isArray(n))) return n.slice();
    var e = Object.create(Object.getPrototypeOf(n));
    return (
      i(n, function (i) {
        if (i !== q) {
          var u = Object.getOwnPropertyDescriptor(n, i),
            o = u.value;
          u.get && (r || t(1), (o = u.get.call(n))),
            u.enumerable
              ? (e[i] = o)
              : Object.defineProperty(e, i, {
                  value: o,
                  writable: !0,
                  configurable: !0,
                });
        }
      }),
      e
    );
  }
  function h(n, t) {
    r(n) ||
      Object.isFrozen(n) ||
      !e(n) ||
      (u(n) > 1 && (n.set = n.add = n.clear = n.delete = l),
      Object.freeze(n),
      t &&
        i(n, function (n, t) {
          return h(t, !0);
        }));
  }
  function l() {
    t(2);
  }
  function d(n) {
    var r = H[n];
    return r || t(19, n), r;
  }
  function _(n, t) {
    H[n] = t;
  }
  function y() {
    return K;
  }
  function b(n, t) {
    t && (d('Patches'), (n.o = []), (n.v = []), (n.s = t));
  }
  function m(n) {
    j(n), n.p.forEach(w), (n.p = null);
  }
  function j(n) {
    n === K && (K = n.h);
  }
  function O(n) {
    return (K = { p: [], h: K, l: n, _: !0, m: 0 });
  }
  function w(n) {
    var t = n[q];
    0 === t.t || 1 === t.t ? t.j() : (t.O = !0);
  }
  function S(n, r) {
    r.m = r.p.length;
    var i = r.p[0],
      u = void 0 !== n && n !== i;
    return (
      r.l.S || d('ES5').P(r, n, u),
      u
        ? (i[q].M && (m(r), t(4)),
          e(n) && ((n = P(r, n)), r.h || g(r, n)),
          r.o && d('Patches').g(i[q], n, r.o, r.v))
        : (n = P(r, i, [])),
      m(r),
      r.o && r.s(r.o, r.v),
      n !== W ? n : void 0
    );
  }
  function P(n, t, r) {
    if (Object.isFrozen(t)) return t;
    var e = t[q];
    if (!e)
      return (
        i(t, function (i, u) {
          return M(n, e, t, i, u, r);
        }),
        t
      );
    if (e.A !== n) return t;
    if (!e.M) return g(n, e.u, !0), e.u;
    if (!e.R) {
      (e.R = !0), e.A.m--;
      var u = 4 === e.t || 5 === e.t ? (e.i = p(e.k, !0)) : e.i;
      i(u, function (t, i) {
        return M(n, e, u, t, i, r);
      }),
        g(n, u, !1),
        r && n.o && d('Patches').F(e, r, n.o, n.v);
    }
    return e.i;
  }
  function M(n, t, i, c, v, s) {
    if (r(v)) {
      var p = P(n, v, s && t && 3 !== t.t && !o(t.D, c) ? s.concat(c) : void 0);
      if (
        ((l = c),
        (d = p),
        2 === (_ = u((h = i)))
          ? h.set(l, d)
          : 3 === _
          ? (h.delete(l), h.add(d))
          : (h[l] = d),
        !r(p))
      )
        return;
      n._ = !1;
    }
    var h, l, d, _;
    if ((!t || !a(v, f(t.u, c))) && e(v)) {
      if (!n.l.J && n.m < 1) return;
      P(n, v), (t && t.A.h) || g(n, v);
    }
  }
  function g(n, t, r) {
    void 0 === r && (r = !1), n.l.J && n._ && h(t, r);
  }
  function A(n, t) {
    var r = n[q],
      e = Reflect.getOwnPropertyDescriptor(r ? s(r) : n, t);
    return e && e.value;
  }
  function z(n) {
    if (!n.M) {
      if (((n.M = !0), 0 === n.t || 1 === n.t)) {
        var t = (n.i = p(n.u));
        i(n.p, function (n, r) {
          t[n] = r;
        }),
          (n.p = void 0);
      }
      n.h && z(n.h);
    }
  }
  function x(n) {
    n.i || (n.i = p(n.u));
  }
  function E(n, t, r) {
    var e = c(t)
      ? d('MapSet').K(t, r)
      : v(t)
      ? d('MapSet').N(t, r)
      : n.S
      ? (function (n, t) {
          var r = Array.isArray(n),
            e = {
              t: r ? 1 : 0,
              A: t ? t.A : y(),
              M: !1,
              R: !1,
              D: {},
              h: t,
              u: n,
              k: null,
              p: {},
              i: null,
              j: null,
              $: !1,
            },
            i = e,
            u = L;
          r && ((i = [e]), (u = Q));
          var o = Proxy.revocable(i, u),
            f = o.revoke,
            a = o.proxy;
          return (e.k = a), (e.j = f), a;
        })(t, r)
      : d('ES5').C(t, r);
    return (r ? r.A : y()).p.push(e), e;
  }
  function R(n, t) {
    n.S ? z(t) : d('ES5').I(t);
  }
  function k() {
    function n(n, t) {
      var r = n[q];
      if (r && !r.W) {
        r.W = !0;
        var e = n[t];
        return (r.W = !1), e;
      }
      return n[t];
    }
    function u(n) {
      n.M || ((n.M = !0), n.h && u(n.h));
    }
    function f(n) {
      n.i || (n.i = c(n.u));
    }
    function c(n) {
      var t = n && n[q];
      if (t) {
        t.W = !0;
        var r = p(t.k, !0);
        return (t.W = !1), r;
      }
      return p(n);
    }
    function v(n) {
      for (var t = n.length - 1; t >= 0; t--) {
        var r = n[t][q];
        if (!r.M)
          switch (r.t) {
            case 5:
              l(r) && u(r);
              break;
            case 4:
              h(r) && u(r);
          }
      }
    }
    function h(n) {
      for (
        var t = n.u, r = n.k, e = Object.keys(r), i = e.length - 1;
        i >= 0;
        i--
      ) {
        var u = e[i],
          f = t[u];
        if (void 0 === f && !o(t, u)) return !0;
        var c = r[u],
          v = c && c[q];
        if (v ? v.u !== f : !a(c, f)) return !0;
      }
      return e.length !== Object.keys(t).length;
    }
    function l(n) {
      var t = n.k;
      if (t.length !== n.u.length) return !0;
      var r = Object.getOwnPropertyDescriptor(t, t.length - 1);
      return !(!r || r.get);
    }
    function d(n) {
      n.O && t(3, JSON.stringify(s(n)));
    }
    var b = {};
    _('ES5', {
      C: function (t, r) {
        var o = Array.isArray(t),
          v = c(t);
        i(v, function (r) {
          !(function (t, r, i) {
            var o = b[r];
            o
              ? (o.enumerable = i)
              : (b[r] = o =
                  {
                    enumerable: i,
                    get: function () {
                      return (function (t, r) {
                        d(t);
                        var i = n(s(t), r);
                        return t.W
                          ? i
                          : i === n(t.u, r) && e(i)
                          ? (f(t), (t.i[r] = E(t.A.l, i, t)))
                          : i;
                      })(this[q], r);
                    },
                    set: function (t) {
                      !(function (t, r, e) {
                        if ((d(t), (t.D[r] = !0), !t.M)) {
                          if (a(e, n(s(t), r))) return;
                          u(t), f(t);
                        }
                        t.i[r] = e;
                      })(this[q], r, t);
                    },
                  }),
              Object.defineProperty(t, r, o);
          })(
            v,
            r,
            o ||
              (function (n, t) {
                var r = Object.getOwnPropertyDescriptor(n, t);
                return !(!r || !r.enumerable);
              })(t, r),
          );
        });
        var p = {
          t: o ? 5 : 4,
          A: r ? r.A : y(),
          M: !1,
          W: !1,
          R: !1,
          D: {},
          h: r,
          u: t,
          k: v,
          i: null,
          O: !1,
          $: !1,
        };
        return Object.defineProperty(v, q, { value: p, writable: !0 }), v;
      },
      I: u,
      P: function (n, t, e) {
        n.p.forEach(function (n) {
          n[q].W = !0;
        }),
          e
            ? r(t) && t[q].A === n && v(n.p)
            : (n.o &&
                (function n(t) {
                  if (t && 'object' == typeof t) {
                    var r = t[q];
                    if (r) {
                      var e = r.u,
                        f = r.k,
                        a = r.D,
                        c = r.t;
                      if (4 === c)
                        i(f, function (t) {
                          t !== q &&
                            (void 0 !== e[t] || o(e, t)
                              ? a[t] || n(f[t])
                              : ((a[t] = !0), u(r)));
                        }),
                          i(e, function (n) {
                            void 0 !== f[n] || o(f, n) || ((a[n] = !1), u(r));
                          });
                      else if (5 === c) {
                        if (
                          (l(r) && (u(r), (a.length = !0)), f.length < e.length)
                        )
                          for (var v = f.length; v < e.length; v++) a[v] = !1;
                        else
                          for (var s = e.length; s < f.length; s++) a[s] = !0;
                        for (
                          var p = Math.min(f.length, e.length), h = 0;
                          h < p;
                          h++
                        )
                          void 0 === a[h] && n(f[h]);
                      }
                    }
                  }
                })(n.p[0]),
              v(n.p));
      },
    });
  }
  function F() {
    function n(t) {
      if (!t || 'object' != typeof t) return t;
      if (Array.isArray(t)) return t.map(n);
      if (c(t))
        return new Map(
          Array.from(t.entries()).map(function (t) {
            return [t[0], n(t[1])];
          }),
        );
      if (v(t)) return new Set(Array.from(t).map(n));
      var r = Object.create(Object.getPrototypeOf(t));
      for (var e in t) r[e] = n(t[e]);
      return r;
    }
    var r = 'add';
    _('Patches', {
      X: function (e, i) {
        return (
          i.forEach(function (i) {
            for (var o = i.path, a = i.op, c = e, v = 0; v < o.length - 1; v++)
              'object' != typeof (c = f(c, o[v])) && t(15, o.join('/'));
            var s = u(c),
              p = n(i.value),
              h = o[o.length - 1];
            switch (a) {
              case 'replace':
                switch (s) {
                  case 2:
                    return c.set(h, p);
                  case 3:
                    t(16);
                  default:
                    return (c[h] = p);
                }
              case r:
                switch (s) {
                  case 1:
                    return c.splice(h, 0, p);
                  case 2:
                    return c.set(h, p);
                  case 3:
                    return c.add(p);
                  default:
                    return (c[h] = p);
                }
              case 'remove':
                switch (s) {
                  case 1:
                    return c.splice(h, 1);
                  case 2:
                    return c.delete(h);
                  case 3:
                    return c.delete(i.value);
                  default:
                    return delete c[h];
                }
              default:
                t(17, a);
            }
          }),
          e
        );
      },
      F: function (n, t, e, u) {
        switch (n.t) {
          case 0:
          case 4:
          case 2:
            return (function (n, t, e, u) {
              var a = n.u,
                c = n.i;
              i(n.D, function (n, i) {
                var v = f(a, n),
                  s = f(c, n),
                  p = i ? (o(a, n) ? 'replace' : r) : 'remove';
                if (v !== s || 'replace' !== p) {
                  var h = t.concat(n);
                  e.push(
                    'remove' === p
                      ? { op: p, path: h }
                      : { op: p, path: h, value: s },
                  ),
                    u.push(
                      p === r
                        ? { op: 'remove', path: h }
                        : 'remove' === p
                        ? { op: r, path: h, value: v }
                        : { op: 'replace', path: h, value: v },
                    );
                }
              });
            })(n, t, e, u);
          case 5:
          case 1:
            return (function (n, t, e, i) {
              var u = n.u,
                o = n.D,
                f = n.i;
              if (f.length < u.length) {
                var a = [f, u];
                (u = a[0]), (f = a[1]);
                var c = [i, e];
                (e = c[0]), (i = c[1]);
              }
              for (
                var v = f.length - u.length, s = 0;
                u[s] === f[s] && s < u.length;

              )
                ++s;
              for (var p = u.length; p > s && u[p - 1] === f[p + v - 1]; ) --p;
              for (var h = s; h < p; ++h)
                if (o[h] && f[h] !== u[h]) {
                  var l = t.concat([h]);
                  e.push({ op: 'replace', path: l, value: f[h] }),
                    i.push({ op: 'replace', path: l, value: u[h] });
                }
              for (var d = e.length, _ = p + v - 1; _ >= p; --_) {
                var y = t.concat([_]);
                (e[d + _ - p] = { op: r, path: y, value: f[_] }),
                  i.push({ op: 'remove', path: y });
              }
            })(n, t, e, u);
          case 3:
            return (function (n, t, e, i) {
              var u = n.u,
                o = n.i,
                f = 0;
              u.forEach(function (n) {
                if (!o.has(n)) {
                  var u = t.concat([f]);
                  e.push({ op: 'remove', path: u, value: n }),
                    i.unshift({ op: r, path: u, value: n });
                }
                f++;
              }),
                (f = 0),
                o.forEach(function (n) {
                  if (!u.has(n)) {
                    var o = t.concat([f]);
                    e.push({ op: r, path: o, value: n }),
                      i.unshift({ op: 'remove', path: o, value: n });
                  }
                  f++;
                });
            })(n, t, e, u);
        }
      },
      g: function (n, t, r, e) {
        r.push({ op: 'replace', path: [], value: t }),
          e.push({ op: 'replace', path: [], value: n.u });
      },
    });
  }
  function D() {
    function n(n, t) {
      function r() {
        this.constructor = n;
      }
      o(n, t), (n.prototype = ((r.prototype = t.prototype), new r()));
    }
    function r(n) {
      n.i || ((n.D = new Map()), (n.i = new Map(n.u)));
    }
    function i(n) {
      n.i ||
        ((n.i = new Set()),
        n.u.forEach(function (t) {
          if (e(t)) {
            var r = E(n.A.l, t, n);
            n.p.set(t, r), n.i.add(r);
          } else n.i.add(t);
        }));
    }
    function u(n) {
      n.O && t(3, JSON.stringify(s(n)));
    }
    var o = function (n, t) {
        return (o =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (n, t) {
              n.__proto__ = t;
            }) ||
          function (n, t) {
            for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
          })(n, t);
      },
      f = (function () {
        function t(n, t) {
          return (
            (this[q] = {
              t: 2,
              h: t,
              A: t ? t.A : y(),
              M: !1,
              R: !1,
              i: void 0,
              D: void 0,
              u: n,
              k: this,
              $: !1,
              O: !1,
            }),
            this
          );
        }
        n(t, Map);
        var i = t.prototype;
        return (
          Object.defineProperty(i, 'size', {
            get: function () {
              return s(this[q]).size;
            },
          }),
          (i.has = function (n) {
            return s(this[q]).has(n);
          }),
          (i.set = function (n, t) {
            var e = this[q];
            return (
              u(e),
              s(e).get(n) !== t &&
                (r(e),
                R(e.A.l, e),
                e.D.set(n, !0),
                e.i.set(n, t),
                e.D.set(n, !0)),
              this
            );
          }),
          (i.delete = function (n) {
            if (!this.has(n)) return !1;
            var t = this[q];
            return u(t), r(t), R(t.A.l, t), t.D.set(n, !1), t.i.delete(n), !0;
          }),
          (i.clear = function () {
            var n = this[q];
            return u(n), r(n), R(n.A.l, n), (n.D = new Map()), n.i.clear();
          }),
          (i.forEach = function (n, t) {
            var r = this;
            s(this[q]).forEach(function (e, i) {
              n.call(t, r.get(i), i, r);
            });
          }),
          (i.get = function (n) {
            var t = this[q];
            u(t);
            var i = s(t).get(n);
            if (t.R || !e(i)) return i;
            if (i !== t.u.get(n)) return i;
            var o = E(t.A.l, i, t);
            return r(t), t.i.set(n, o), o;
          }),
          (i.keys = function () {
            return s(this[q]).keys();
          }),
          (i.values = function () {
            var n,
              t = this,
              r = this.keys();
            return (
              ((n = {})[B] = function () {
                return t.values();
              }),
              (n.next = function () {
                var n = r.next();
                return n.done ? n : { done: !1, value: t.get(n.value) };
              }),
              n
            );
          }),
          (i.entries = function () {
            var n,
              t = this,
              r = this.keys();
            return (
              ((n = {})[B] = function () {
                return t.entries();
              }),
              (n.next = function () {
                var n = r.next();
                if (n.done) return n;
                var e = t.get(n.value);
                return { done: !1, value: [n.value, e] };
              }),
              n
            );
          }),
          (i[B] = function () {
            return this.entries();
          }),
          t
        );
      })(),
      a = (function () {
        function t(n, t) {
          return (
            (this[q] = {
              t: 3,
              h: t,
              A: t ? t.A : y(),
              M: !1,
              R: !1,
              i: void 0,
              u: n,
              k: this,
              p: new Map(),
              O: !1,
              $: !1,
            }),
            this
          );
        }
        n(t, Set);
        var r = t.prototype;
        return (
          Object.defineProperty(r, 'size', {
            get: function () {
              return s(this[q]).size;
            },
          }),
          (r.has = function (n) {
            var t = this[q];
            return (
              u(t),
              t.i
                ? !!t.i.has(n) || !(!t.p.has(n) || !t.i.has(t.p.get(n)))
                : t.u.has(n)
            );
          }),
          (r.add = function (n) {
            var t = this[q];
            return (
              u(t),
              t.i ? t.i.add(n) : t.u.has(n) || (i(t), R(t.A.l, t), t.i.add(n)),
              this
            );
          }),
          (r.delete = function (n) {
            if (!this.has(n)) return !1;
            var t = this[q];
            return (
              u(t),
              i(t),
              R(t.A.l, t),
              t.i.delete(n) || (!!t.p.has(n) && t.i.delete(t.p.get(n)))
            );
          }),
          (r.clear = function () {
            var n = this[q];
            return u(n), i(n), R(n.A.l, n), n.i.clear();
          }),
          (r.values = function () {
            var n = this[q];
            return u(n), i(n), n.i.values();
          }),
          (r.entries = function () {
            var n = this[q];
            return u(n), i(n), n.i.entries();
          }),
          (r.keys = function () {
            return this.values();
          }),
          (r[B] = function () {
            return this.values();
          }),
          (r.forEach = function (n, t) {
            for (var r = this.values(), e = r.next(); !e.done; )
              n.call(t, e.value, e.value, this), (e = r.next());
          }),
          t
        );
      })();
    _('MapSet', {
      K: function (n, t) {
        return new f(n, t);
      },
      N: function (n, t) {
        return new a(n, t);
      },
    });
  }
  var J,
    K,
    N = 'undefined' != typeof Symbol,
    $ = 'undefined' != typeof Map,
    C = 'undefined' != typeof Set,
    I =
      'undefined' != typeof Proxy &&
      void 0 !== Proxy.revocable &&
      'undefined' != typeof Reflect,
    W = N ? Symbol('immer-nothing') : (((J = {})['immer-nothing'] = !0), J),
    X = N ? Symbol('immer-draftable') : '__$immer_draftable',
    q = N ? Symbol('immer-state') : '__$immer_state',
    B = N ? Symbol.iterator : '@@iterator',
    G =
      'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : void 0 !== Object.getOwnPropertySymbols
        ? function (n) {
            return Object.getOwnPropertyNames(n).concat(
              Object.getOwnPropertySymbols(n),
            );
          }
        : Object.getOwnPropertyNames,
    H = {},
    L = {
      get: function (n, t) {
        if (t === q) return n;
        var r = n.p;
        if (!n.M && o(r, t)) return r[t];
        var i = s(n)[t];
        if (n.R || !e(i)) return i;
        if (n.M) {
          if (i !== A(n.u, t)) return i;
          r = n.i;
        }
        return (r[t] = E(n.A.l, i, n));
      },
      has: function (n, t) {
        return t in s(n);
      },
      ownKeys: function (n) {
        return Reflect.ownKeys(s(n));
      },
      set: function (n, t, r) {
        if (!n.M) {
          var e = A(n.u, t);
          if (r ? a(e, r) || r === n.p[t] : a(e, r) && t in n.u) return !0;
          x(n), z(n);
        }
        return (n.D[t] = !0), (n.i[t] = r), !0;
      },
      deleteProperty: function (n, t) {
        return (
          void 0 !== A(n.u, t) || t in n.u
            ? ((n.D[t] = !1), x(n), z(n))
            : n.D[t] && delete n.D[t],
          n.i && delete n.i[t],
          !0
        );
      },
      getOwnPropertyDescriptor: function (n, t) {
        var r = s(n),
          e = Reflect.getOwnPropertyDescriptor(r, t);
        return (
          e &&
            ((e.writable = !0), (e.configurable = 1 !== n.t || 'length' !== t)),
          e
        );
      },
      defineProperty: function () {
        t(11);
      },
      getPrototypeOf: function (n) {
        return Object.getPrototypeOf(n.u);
      },
      setPrototypeOf: function () {
        t(12);
      },
    },
    Q = {};
  i(L, function (n, t) {
    Q[n] = function () {
      return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
    };
  }),
    (Q.deleteProperty = function (n, t) {
      return L.deleteProperty.call(this, n[0], t);
    }),
    (Q.set = function (n, t, r) {
      return L.set.call(this, n[0], t, r, n[0]);
    });
  var T = (function () {
      function n(n) {
        (this.S = I),
          (this.J = !1),
          'boolean' == typeof (null == n ? void 0 : n.useProxies) &&
            this.setUseProxies(n.useProxies),
          'boolean' == typeof (null == n ? void 0 : n.autoFreeze) &&
            this.setAutoFreeze(n.autoFreeze),
          (this.produce = this.produce.bind(this)),
          (this.produceWithPatches = this.produceWithPatches.bind(this));
      }
      var i = n.prototype;
      return (
        (i.produce = function (n, r, i) {
          if ('function' == typeof n && 'function' != typeof r) {
            var u = r;
            r = n;
            var o = this;
            return function (n) {
              var t = this;
              void 0 === n && (n = u);
              for (
                var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), f = 1;
                f < e;
                f++
              )
                i[f - 1] = arguments[f];
              return o.produce(n, function (n) {
                var e;
                return (e = r).call.apply(e, [t, n].concat(i));
              });
            };
          }
          var f;
          if (
            ('function' != typeof r && t(6),
            void 0 !== i && 'function' != typeof i && t(7),
            e(n))
          ) {
            var a = O(this),
              c = E(this, n, void 0),
              v = !0;
            try {
              (f = r(c)), (v = !1);
            } finally {
              v ? m(a) : j(a);
            }
            return 'undefined' != typeof Promise && f instanceof Promise
              ? f.then(
                  function (n) {
                    return b(a, i), S(n, a);
                  },
                  function (n) {
                    throw (m(a), n);
                  },
                )
              : (b(a, i), S(f, a));
          }
          if ((f = r(n)) !== W)
            return void 0 === f && (f = n), this.J && h(f, !0), f;
        }),
        (i.produceWithPatches = function (n, t) {
          var r,
            e,
            i = this;
          return 'function' == typeof n
            ? function (t) {
                for (
                  var r = arguments.length, e = Array(r > 1 ? r - 1 : 0), u = 1;
                  u < r;
                  u++
                )
                  e[u - 1] = arguments[u];
                return i.produceWithPatches(t, function (t) {
                  return n.apply(void 0, [t].concat(e));
                });
              }
            : [
                this.produce(n, t, function (n, t) {
                  (r = n), (e = t);
                }),
                r,
                e,
              ];
        }),
        (i.createDraft = function (n) {
          e(n) || t(8);
          var r = O(this),
            i = E(this, n, void 0);
          return (i[q].$ = !0), j(r), i;
        }),
        (i.finishDraft = function (n, t) {
          var r = (n && n[q]).A;
          return b(r, t), S(void 0, r);
        }),
        (i.setAutoFreeze = function (n) {
          this.J = n;
        }),
        (i.setUseProxies = function (n) {
          I || t(20), (this.S = n);
        }),
        (i.applyPatches = function (n, t) {
          var e;
          for (e = t.length - 1; e >= 0; e--) {
            var i = t[e];
            if (0 === i.path.length && 'replace' === i.op) {
              n = i.value;
              break;
            }
          }
          var u = d('Patches').X;
          return r(n)
            ? u(n, t)
            : this.produce(n, function (n) {
                return u(n, t.slice(e + 1));
              });
        }),
        n
      );
    })(),
    U = new T(),
    V = U.produce,
    Y = U.produceWithPatches.bind(U),
    Z = U.setAutoFreeze.bind(U),
    nn = U.setUseProxies.bind(U),
    tn = U.applyPatches.bind(U),
    rn = U.createDraft.bind(U),
    en = U.finishDraft.bind(U);
  (n.Immer = T),
    (n.applyPatches = tn),
    (n.castDraft = function (n) {
      return n;
    }),
    (n.castImmutable = function (n) {
      return n;
    }),
    (n.createDraft = rn),
    (n.default = V),
    (n.enableAllPlugins = function () {
      k(), D(), F();
    }),
    (n.enableES5 = k),
    (n.enableMapSet = D),
    (n.enablePatches = F),
    (n.finishDraft = en),
    (n.immerable = X),
    (n.isDraft = r),
    (n.isDraftable = e),
    (n.nothing = W),
    (n.original = function (n) {
      if (n && n[q]) return n[q].u;
    }),
    (n.produce = V),
    (n.produceWithPatches = Y),
    (n.setAutoFreeze = Z),
    (n.setUseProxies = nn),
    Object.defineProperty(n, '__esModule', { value: !0 });
});
//# sourceMappingURL=immer.umd.production.min.js.map
