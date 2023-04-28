! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (S, e) {
    "use strict";

    function g(e, t, n) {
        var i, o = (t = t || se).createElement("script");
        if (o.text = e, n)
            for (i in we) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }

    function m(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[fe.call(e)] || "object" : typeof e
    }

    function a(e) {
        var t = !!e && "length" in e && e.length,
            n = m(e);
        return !ve(e) && !be(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    function d(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function t(e, n, i) {
        return ve(n) ? ke.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? ke.grep(e, function (e) {
            return e === n !== i
        }) : "string" != typeof n ? ke.grep(e, function (e) {
            return -1 < ce.call(n, e) !== i
        }) : ke.filter(n, e, i)
    }

    function n(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function u(e) {
        var n = {};
        return ke.each(e.match(Le) || [], function (e, t) {
            n[t] = !0
        }), n
    }

    function c(e) {
        return e
    }

    function p(e) {
        throw e
    }

    function l(e, t, n, i) {
        var o;
        try {
            e && ve(o = e.promise) ? o.call(e).done(t).fail(n) : e && ve(o = e.then) ? o.call(e, t, n) : t.apply(undefined, [e].slice(i))
        } catch (e) {
            n.apply(undefined, [e])
        }
    }

    function i() {
        se.removeEventListener("DOMContentLoaded", i), S.removeEventListener("load", i), ke.ready()
    }

    function o(e, t) {
        return t.toUpperCase()
    }

    function f(e) {
        return e.replace(Me, "ms-").replace(Ie, o)
    }

    function r() {
        this.expando = ke.expando + r.uid++
    }

    function s(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : We.test(e) ? JSON.parse(e) : e)
    }

    function h(e, t, n) {
        var i;
        if (n === undefined && 1 === e.nodeType)
            if (i = "data-" + t.replace(Be, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = s(n)
                } catch (o) {}
                Fe.set(e, t, n)
            } else n = undefined;
        return n
    }

    function y(e, t, n, i) {
        var o, r, s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return ke.css(e, t, "")
            },
            l = a(),
            d = n && n[3] || (ke.cssNumber[t] ? "" : "px"),
            u = (ke.cssNumber[t] || "px" !== d && +l) && Xe.exec(ke.css(e, t));
        if (u && u[3] !== d) {
            for (l /= 2, d = d || u[3], u = +l || 1; s--;) ke.style(e, t, u + d), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
            u *= 2, ke.style(e, t, u + d), n = n || []
        }
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = u, i.end = o)), o
    }

    function v(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            o = Ge[i];
        return o || (t = n.body.appendChild(n.createElement(i)), o = ke.css(t, "display"), t.parentNode.removeChild(t), "none" === o && (o = "block"), Ge[i] = o)
    }

    function b(e, t) {
        for (var n, i, o = [], r = 0, s = e.length; r < s; r++)(i = e[r]).style && (n = i.style.display, t ? ("none" === n && (o[r] = Re.get(i, "display") || null, o[r] || (i.style.display = "")), "" === i.style.display && Qe(i) && (o[r] = v(i))) : "none" !== n && (o[r] = "none", Re.set(i, "display", n)));
        for (r = 0; r < s; r++) null != o[r] && (e[r].style.display = o[r]);
        return e
    }

    function w(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], t === undefined || t && d(e, t) ? ke.merge([e], n) : n
    }

    function x(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Re.set(e[n], "globalEval", !t || Re.get(t[n], "globalEval"))
    }

    function k(e, t, n, i, o) {
        for (var r, s, a, l, d, u, c = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if ((r = e[f]) || 0 === r)
                if ("object" === m(r)) ke.merge(p, r.nodeType ? [r] : r);
                else if (nt.test(r)) {
            for (s = s || c.appendChild(t.createElement("div")), a = (Je.exec(r) || ["", ""])[1].toLowerCase(), l = Ze[a] || Ze._default, s.innerHTML = l[1] + ke.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
            ke.merge(p, s.childNodes), (s = c.firstChild).textContent = ""
        } else p.push(t.createTextNode(r));
        for (c.textContent = "", f = 0; r = p[f++];)
            if (i && -1 < ke.inArray(r, i)) o && o.push(r);
            else if (d = ke.contains(r.ownerDocument, r), s = w(c.appendChild(r), "script"), d && x(s), n)
            for (u = 0; r = s[u++];) Ke.test(r.type || "") && n.push(r);
        return c
    }

    function T() {
        return !0
    }

    function C() {
        return !1
    }

    function $() {
        try {
            return se.activeElement
        } catch (e) {}
    }

    function j(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = undefined), t) j(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = undefined) : null == o && ("string" == typeof n ? (o = i, i = undefined) : (o = i, i = n, n = undefined)), !1 === o) o = C;
        else if (!o) return e;
        return 1 === r && (s = o, (o = function (e) {
            return ke().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = ke.guid++)), e.each(function () {
            ke.event.add(this, t, o, i, n)
        })
    }

    function E(e, t) {
        return d(e, "table") && d(11 !== t.nodeType ? t : t.firstChild, "tr") && ke(e).children("tbody")[0] || e
    }

    function A(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function D(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function N(e, t) {
        var n, i, o, r, s, a, l, d;
        if (1 === t.nodeType) {
            if (Re.hasData(e) && (r = Re.access(e), s = Re.set(t, r), d = r.events))
                for (o in delete s.handle, s.events = {}, d)
                    for (n = 0, i = d[o].length; n < i; n++) ke.event.add(t, o, d[o][n]);
            Fe.hasData(e) && (a = Fe.access(e), l = ke.extend({}, a), Fe.set(t, l))
        }
    }

    function H(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function L(n, i, o, r) {
        i = de.apply([], i);
        var e, t, s, a, l, d, u = 0,
            c = n.length,
            p = c - 1,
            f = i[0],
            h = ve(f);
        if (h || 1 < c && "string" == typeof f && !ye.checkClone && dt.test(f)) return n.each(function (e) {
            var t = n.eq(e);
            h && (i[0] = f.call(this, e, t.html())), L(t, i, o, r)
        });
        if (c && (t = (e = k(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
            for (a = (s = ke.map(w(e, "script"), A)).length; u < c; u++) l = e, u !== p && (l = ke.clone(l, !0, !0), a && ke.merge(s, w(l, "script"))), o.call(n[u], l, u);
            if (a)
                for (d = s[s.length - 1].ownerDocument, ke.map(s, D), u = 0; u < a; u++) l = s[u], Ke.test(l.type || "") && !Re.access(l, "globalEval") && ke.contains(d, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? ke._evalUrl && ke._evalUrl(l.src) : g(l.textContent.replace(ut, ""), d, l))
        }
        return n
    }

    function O(e, t, n) {
        for (var i, o = t ? ke.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || ke.cleanData(w(i)), i.parentNode && (n && ke.contains(i.ownerDocument, i) && x(w(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function P(e, t, n) {
        var i, o, r, s, a = e.style;
        return (n = n || pt(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || ke.contains(e.ownerDocument, e) || (s = ke.style(e, t)), !ye.pixelBoxStyles() && ct.test(s) && ft.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), s !== undefined ? s + "" : s
    }

    function q(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function M(e) {
        if (e in bt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = vt.length; n--;)
            if ((e = vt[n] + t) in bt) return e
    }

    function I(e) {
        var t = ke.cssProps[e];
        return t || (t = ke.cssProps[e] = M(e) || e), t
    }

    function z(e, t, n) {
        var i = Xe.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function R(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += ke.css(e, n + _e[s], !0, o)), i ? ("content" === n && (l -= ke.css(e, "padding" + _e[s], !0, o)), "margin" !== n && (l -= ke.css(e, "border" + _e[s] + "Width", !0, o))) : (l += ke.css(e, "padding" + _e[s], !0, o), "padding" !== n ? l += ke.css(e, "border" + _e[s] + "Width", !0, o) : a += ke.css(e, "border" + _e[s] + "Width", !0, o));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5))), l
    }

    function F(e, t, n) {
        var i = pt(e),
            o = P(e, t, i),
            r = "border-box" === ke.css(e, "boxSizing", !1, i),
            s = r;
        if (ct.test(o)) {
            if (!n) return o;
            o = "auto"
        }
        return s = s && (ye.boxSizingReliable() || o === e.style[t]), ("auto" === o || !parseFloat(o) && "inline" === ke.css(e, "display", !1, i)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (o = parseFloat(o) || 0) + R(e, t, n || (r ? "border" : "content"), s, i, o) + "px"
    }

    function W(e, t, n, i, o) {
        return new W.prototype.init(e, t, n, i, o)
    }

    function B() {
        xt && (!1 === se.hidden && S.requestAnimationFrame ? S.requestAnimationFrame(B) : S.setTimeout(B, ke.fx.interval), ke.fx.tick())
    }

    function U() {
        return S.setTimeout(function () {
            wt = undefined
        }), wt = Date.now()
    }

    function X(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = _e[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function _(e, t, n) {
        for (var i, o = (G.tweeners[t] || []).concat(G.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, t, e)) return i
    }

    function Q(e, t, n) {
        var i, o, r, s, a, l, d, u, c = "width" in t || "height" in t,
            p = this,
            f = {},
            h = e.style,
            g = e.nodeType && Qe(e),
            m = Re.get(e, "fxshow");
        for (i in n.queue || (null == (s = ke._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                s.unqueued || a()
            }), s.unqueued++, p.always(function () {
                p.always(function () {
                    s.unqueued--, ke.queue(e, "fx").length || s.empty.fire()
                })
            })), t)
            if (o = t[i], St.test(o)) {
                if (delete t[i], r = r || "toggle" === o, o === (g ? "hide" : "show")) {
                    if ("show" !== o || !m || m[i] === undefined) continue;
                    g = !0
                }
                f[i] = m && m[i] || ke.style(e, i)
            } if ((l = !ke.isEmptyObject(t)) || !ke.isEmptyObject(f))
            for (i in c && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (d = m && m.display) && (d = Re.get(e, "display")), "none" === (u = ke.css(e, "display")) && (d ? u = d : (b([e], !0), d = e.style.display || d, u = ke.css(e, "display"), b([e]))), ("inline" === u || "inline-block" === u && null != d) && "none" === ke.css(e, "float") && (l || (p.done(function () {
                    h.display = d
                }), null == d && (u = h.display, d = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = Re.access(e, "fxshow", {
                display: d
            }), r && (m.hidden = !g), g && b([e], !0), p.done(function () {
                for (i in g || b([e]), Re.remove(e, "fxshow"), f) ke.style(e, i, f[i])
            })), l = _(g ? m[i] : 0, i, p), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
    }

    function Y(e, t) {
        var n, i, o, r, s;
        for (n in e)
            if (o = t[i = f(n)], r = e[n], Array.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = ke.cssHooks[i]) && "expand" in s)
                for (n in r = s.expand(r), delete e[i], r) n in e || (e[n] = r[n], t[n] = o);
            else t[i] = o
    }

    function G(r, e, t) {
        var n, s, i = 0,
            o = G.prefilters.length,
            a = ke.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (s) return !1;
                for (var e = wt || U(), t = Math.max(0, d.startTime + d.duration - e), n = 1 - (t / d.duration || 0), i = 0, o = d.tweens.length; i < o; i++) d.tweens[i].run(n);
                return a.notifyWith(r, [d, n, t]), n < 1 && o ? t : (o || a.notifyWith(r, [d, 1, 0]), a.resolveWith(r, [d]), !1)
            },
            d = a.promise({
                elem: r,
                props: ke.extend({}, e),
                opts: ke.extend(!0, {
                    specialEasing: {},
                    easing: ke.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: wt || U(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = ke.Tween(r, d.opts, e, t, d.opts.specialEasing[e] || d.opts.easing);
                    return d.tweens.push(n), n
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? d.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) d.tweens[t].run(1);
                    return e ? (a.notifyWith(r, [d, 1, 0]), a.resolveWith(r, [d, e])) : a.rejectWith(r, [d, e]), this
                }
            }),
            u = d.props;
        for (Y(u, d.opts.specialEasing); i < o; i++)
            if (n = G.prefilters[i].call(d, r, u, d.opts)) return ve(n.stop) && (ke._queueHooks(d.elem, d.opts.queue).stop = n.stop.bind(n)), n;
        return ke.map(u, _, d), ve(d.opts.start) && d.opts.start.call(r, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), ke.fx.timer(ke.extend(l, {
            elem: r,
            anim: d,
            queue: d.opts.queue
        })), d
    }

    function V(e) {
        return (e.match(Le) || []).join(" ")
    }

    function J(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function K(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(Le) || []
    }

    function Z(n, e, i, o) {
        var t;
        if (Array.isArray(e)) ke.each(e, function (e, t) {
            i || qt.test(n) ? o(n, t) : Z(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o)
        });
        else if (i || "object" !== m(e)) o(n, e);
        else
            for (t in e) Z(n + "[" + t + "]", e[t], i, o)
    }

    function ee(r) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                o = e.toLowerCase().match(Le) || [];
            if (ve(t))
                for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }

    function te(t, o, r, s) {
        function a(e) {
            var i;
            return l[e] = !0, ke.each(t[e] || [], function (e, t) {
                var n = t(o, r, s);
                return "string" != typeof n || d || l[n] ? d ? !(i = n) : void 0 : (o.dataTypes.unshift(n), a(n), !1)
            }), i
        }
        var l = {},
            d = t === Yt;
        return a(o.dataTypes[0]) || !l["*"] && a("*")
    }

    function ne(e, t) {
        var n, i, o = ke.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== undefined && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && ke.extend(!0, e, i), e
    }

    function ie(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in a)
                if (a[o] && a[o].test(i)) {
                    l.unshift(o);
                    break
                } if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        if (r) return r !== l[0] && l.unshift(r), n[r]
    }

    function oe(e, t, n, i) {
        var o, r, s, a, l, d = {},
            u = e.dataTypes.slice();
        if (u[1])
            for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
        for (r = u.shift(); r;)
            if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                if ("*" === r) r = l;
                else if ("*" !== l && l !== r) {
            if (!(s = d[l + " " + r] || d["* " + r]))
                for (o in d)
                    if ((a = o.split(" "))[1] === r && (s = d[l + " " + a[0]] || d["* " + a[0]])) {
                        !0 === s ? s = d[o] : !0 !== d[o] && (r = a[0], u.unshift(a[1]));
                        break
                    } if (!0 !== s)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: s ? c : "No conversion from " + l + " to " + r
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var re = [],
        se = S.document,
        ae = Object.getPrototypeOf,
        le = re.slice,
        de = re.concat,
        ue = re.push,
        ce = re.indexOf,
        pe = {},
        fe = pe.toString,
        he = pe.hasOwnProperty,
        ge = he.toString,
        me = ge.call(Object),
        ye = {},
        ve = function ve(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        be = function be(e) {
            return null != e && e === e.window
        },
        we = {
            type: !0,
            src: !0,
            noModule: !0
        },
        xe = "3.3.1",
        ke = function (e, t) {
            return new ke.fn.init(e, t)
        },
        Te = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    ke.fn = ke.prototype = {
        jquery: xe,
        constructor: ke,
        length: 0,
        toArray: function () {
            return le.call(this)
        },
        get: function (e) {
            return null == e ? le.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = ke.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return ke.each(this, e)
        },
        map: function (n) {
            return this.pushStack(ke.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(le.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: ue,
        sort: re.sort,
        splice: re.splice
    }, ke.extend = ke.fn.extend = function (e) {
        var t, n, i, o, r, s, a = e || {},
            l = 1,
            d = arguments.length,
            u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[l] || {}, l++), "object" == typeof a || ve(a) || (a = {}), l === d && (a = this, l--); l < d; l++)
            if (null != (t = arguments[l]))
                for (n in t) i = a[n], a !== (o = t[n]) && (u && o && (ke.isPlainObject(o) || (r = Array.isArray(o))) ? (r ? (r = !1, s = i && Array.isArray(i) ? i : []) : s = i && ke.isPlainObject(i) ? i : {}, a[n] = ke.extend(u, s, o)) : o !== undefined && (a[n] = o));
        return a
    }, ke.extend({
        expando: "jQuery" + (xe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== fe.call(e)) && (!(t = ae(e)) || "function" == typeof (n = he.call(t, "constructor") && t.constructor) && ge.call(n) === me)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e) {
            g(e)
        },
        each: function (e, t) {
            var n, i = 0;
            if (a(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function (e) {
            return null == e ? "" : (e + "").replace(Te, "")
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (a(Object(e)) ? ke.merge(n, "string" == typeof e ? [e] : e) : ue.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : ce.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
            return e.length = o, e
        },
        grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
            return i
        },
        map: function (e, t, n) {
            var i, o, r = 0,
                s = [];
            if (a(e))
                for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
            else
                for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
            return de.apply([], s)
        },
        guid: 1,
        support: ye
    }), "function" == typeof Symbol && (ke.fn[Symbol.iterator] = re[Symbol.iterator]), ke.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        pe["[object " + t + "]"] = t.toLowerCase()
    });
    var Se = function (n) {
        function w(e, t, n, i) {
            var o, r, s, a, l, d, u, c = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((t ? t.ownerDocument || t : F) !== L && H(t), t = t || L, P)) {
                if (11 !== p && (l = ye.exec(e)))
                    if (o = l[1]) {
                        if (9 === p) {
                            if (!(s = t.getElementById(o))) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (c && (s = c.getElementById(o)) && z(t, s) && s.id === o) return n.push(s), n
                    } else {
                        if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = l[3]) && k.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(o)), n
                    } if (k.qsa && !_[e + " "] && (!q || !q.test(e))) {
                    if (1 !== p) c = t, u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(xe, ke) : t.setAttribute("id", a = R), r = (d = $(e)).length; r--;) d[r] = "#" + a + " " + g(d[r]);
                        u = d.join(","), c = ve.test(e) && h(t.parentNode) || t
                    }
                    if (u) try {
                        return K.apply(n, c.querySelectorAll(u)), n
                    } catch (f) {} finally {
                        a === R && t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(ae, "$1"), t, n, i)
        }

        function e() {
            function n(e, t) {
                return i.push(e + " ") > T.cacheLength && delete n[i.shift()], n[e + " "] = t
            }
            var i = [];
            return n
        }

        function l(e) {
            return e[R] = !0, e
        }

        function o(e) {
            var t = L.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function t(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = t
        }

        function d(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function i(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function r(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function s(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Se(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function a(s) {
            return l(function (r) {
                return r = +r, l(function (e, t) {
                    for (var n, i = s([], e.length, r), o = i.length; o--;) e[n = i[o]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function h(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function u() {}

        function g(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function c(a, e, t) {
            var l = e.dir,
                d = e.next,
                u = d || l,
                c = t && "parentNode" === u,
                p = B++;
            return e.first ? function (e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || c) return a(e, t, n);
                return !1
            } : function (e, t, n) {
                var i, o, r, s = [W, p];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || c)
                            if (o = (r = e[R] || (e[R] = {}))[e.uniqueID] || (r[e.uniqueID] = {}), d && d === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((i = o[u]) && i[0] === W && i[1] === p) return s[2] = i[2];
                                if ((o[u] = s)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function p(o) {
            return 1 < o.length ? function (e, t, n) {
                for (var i = o.length; i--;)
                    if (!o[i](e, t, n)) return !1;
                return !0
            } : o[0]
        }

        function v(e, t, n) {
            for (var i = 0, o = t.length; i < o; i++) w(e, t[i], n);
            return n
        }

        function x(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, d = null != t; a < l; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), d && t.push(a)));
            return s
        }

        function b(f, h, g, m, y, e) {
            return m && !m[R] && (m = b(m)), y && !y[R] && (y = b(y, e)), l(function (e, t, n, i) {
                var o, r, s, a = [],
                    l = [],
                    d = t.length,
                    u = e || v(h || "*", n.nodeType ? [n] : n, []),
                    c = !f || !e && h ? u : x(u, a, f, n, i),
                    p = g ? y || (e ? f : d || m) ? [] : t : c;
                if (g && g(c, p, n, i), m)
                    for (o = x(p, l), m(o, [], n, i), r = o.length; r--;)(s = o[r]) && (p[l[r]] = !(c[l[r]] = s));
                if (e) {
                    if (y || f) {
                        if (y) {
                            for (o = [], r = p.length; r--;)(s = p[r]) && o.push(c[r] = s);
                            y(null, p = [], o, i)
                        }
                        for (r = p.length; r--;)(s = p[r]) && -1 < (o = y ? ee(e, s) : a[r]) && (e[o] = !(t[o] = s))
                    }
                } else p = x(p === t ? p.splice(d, p.length) : p), y ? y(null, t, p, i) : K.apply(t, p)
            })
        }

        function f(e) {
            for (var o, t, n, i = e.length, r = T.relative[e[0].type], s = r || T.relative[" "], a = r ? 1 : 0, l = c(function (e) {
                    return e === o
                }, s, !0), d = c(function (e) {
                    return -1 < ee(o, e)
                }, s, !0), u = [function (e, t, n) {
                    var i = !r && (n || t !== A) || ((o = t).nodeType ? l(e, t, n) : d(e, t, n));
                    return o = null, i
                }]; a < i; a++)
                if (t = T.relative[e[a].type]) u = [c(p(u), t)];
                else {
                    if ((t = T.filter[e[a].type].apply(null, e[a].matches))[R]) {
                        for (n = ++a; n < i && !T.relative[e[n].type]; n++);
                        return b(1 < a && p(u), 1 < a && g(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), t, a < n && f(e.slice(a, n)), n < i && f(e = e.slice(n)), n < i && g(e))
                    }
                    u.push(t)
                } return p(u)
        }

        function m(m, y) {
            var v = 0 < y.length,
                b = 0 < m.length,
                e = function (e, t, n, i, o) {
                    var r, s, a, l = 0,
                        d = "0",
                        u = e && [],
                        c = [],
                        p = A,
                        f = e || b && T.find.TAG("*", o),
                        h = W += null == p ? 1 : Math.random() || .1,
                        g = f.length;
                    for (o && (A = t === L || t || o); d !== g && null != (r = f[d]); d++) {
                        if (b && r) {
                            for (s = 0, t || r.ownerDocument === L || (H(r), n = !P); a = m[s++];)
                                if (a(r, t || L, n)) {
                                    i.push(r);
                                    break
                                } o && (W = h)
                        }
                        v && ((r = !a && r) && l--, e && u.push(r))
                    }
                    if (l += d, v && d !== l) {
                        for (s = 0; a = y[s++];) a(u, c, t, n);
                        if (e) {
                            if (0 < l)
                                for (; d--;) u[d] || c[d] || (c[d] = V.call(i));
                            c = x(c)
                        }
                        K.apply(i, c), o && !e && 0 < c.length && 1 < l + y.length && w.uniqueSort(i)
                    }
                    return o && (W = h, A = p), u
                };
            return v ? l(e) : e
        }
        var y, k, T, S, C, $, j, E, A, D, N, H, L, O, P, q, M, I, z, R = "sizzle" + 1 * new Date,
            F = n.document,
            W = 0,
            B = 0,
            U = e(),
            X = e(),
            _ = e(),
            Q = function (e, t) {
                return e === t && (N = !0), 0
            },
            Y = {}.hasOwnProperty,
            G = [],
            V = G.pop,
            J = G.push,
            K = G.push,
            Z = G.slice,
            ee = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            de = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            ce = new RegExp(re),
            pe = new RegExp("^" + ie + "$"),
            fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            xe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ke = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Te = function () {
                H()
            },
            Se = c(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            K.apply(G = Z.call(F.childNodes), F.childNodes), G[F.childNodes.length].nodeType
        } catch (Ce) {
            K = {
                apply: G.length ? function (e, t) {
                    J.apply(e, Z.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        for (y in k = w.support = {}, C = w.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, H = w.setDocument = function (e) {
                var t, n, i = e ? e.ownerDocument || e : F;
                return i !== L && 9 === i.nodeType && i.documentElement && (O = (L = i).documentElement, P = !C(L), F !== L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), k.attributes = o(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), k.getElementsByTagName = o(function (e) {
                    return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length
                }), k.getElementsByClassName = me.test(L.getElementsByClassName), k.getById = o(function (e) {
                    return O.appendChild(e).id = R, !L.getElementsByName || !L.getElementsByName(R).length
                }), k.getById ? (T.filter.ID = function (e) {
                    var t = e.replace(be, we);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, T.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && P) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (T.filter.ID = function (e) {
                    var n = e.replace(be, we);
                    return function (e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, T.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && P) {
                        var n, i, o, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (o = t.getElementsByName(e), i = 0; r = o[i++];)
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                        }
                        return []
                    }
                }), T.find.TAG = k.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : k.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" !== e) return r;
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }, T.find.CLASS = k.getElementsByClassName && function (e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && P) return t.getElementsByClassName(e)
                }, M = [], q = [], (k.qsa = me.test(L.querySelectorAll)) && (o(function (e) {
                    O.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || q.push(".#.+[+~]")
                }), o(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = L.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), O.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
                })), (k.matchesSelector = me.test(I = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function (e) {
                    k.disconnectedMatch = I.call(e, "*"), I.call(e, "[s!='']:x"), M.push("!=", re)
                }), q = q.length && new RegExp(q.join("|")), M = M.length && new RegExp(M.join("|")), t = me.test(O.compareDocumentPosition), z = t || me.test(O.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, Q = t ? function (e, t) {
                    if (e === t) return N = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !k.sortDetached && t.compareDocumentPosition(e) === n ? e === L || e.ownerDocument === F && z(F, e) ? -1 : t === L || t.ownerDocument === F && z(F, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return N = !0, 0;
                    var n, i = 0,
                        o = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!o || !r) return e === L ? -1 : t === L ? 1 : o ? -1 : r ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                    if (o === r) return d(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? d(s[i], a[i]) : s[i] === F ? -1 : a[i] === F ? 1 : 0
                }), L
            }, w.matches = function (e, t) {
                return w(e, null, null, t)
            }, w.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== L && H(e), t = t.replace(ue, "='$1']"), k.matchesSelector && P && !_[t + " "] && (!M || !M.test(t)) && (!q || !q.test(t))) try {
                    var n = I.call(e, t);
                    if (n || k.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (Ce) {}
                return 0 < w(t, L, null, [e]).length
            }, w.contains = function (e, t) {
                return (e.ownerDocument || e) !== L && H(e), z(e, t)
            }, w.attr = function (e, t) {
                (e.ownerDocument || e) !== L && H(e);
                var n = T.attrHandle[t.toLowerCase()],
                    i = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !P) : undefined;
                return i !== undefined ? i : k.attributes || !P ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, w.escape = function (e) {
                return (e + "").replace(xe, ke)
            }, w.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, w.uniqueSort = function (e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (N = !k.detectDuplicates, D = !k.sortStable && e.slice(0), e.sort(Q), N) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return D = null, e
            }, S = w.getText = function (e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += S(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += S(t);
                return n
            }, (T = w.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || w.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && w.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = $(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(be, we).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = U[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && U(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, i, o) {
                        return function (e) {
                            var t = w.attr(e, n);
                            return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === o : "!=" === i ? t !== o : "^=" === i ? o && 0 === t.indexOf(o) : "*=" === i ? o && -1 < t.indexOf(o) : "$=" === i ? o && t.slice(-o.length) === o : "~=" === i ? -1 < (" " + t.replace(se, " ") + " ").indexOf(o) : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"))
                        }
                    },
                    CHILD: function (h, e, t, g, m) {
                        var y = "nth" !== h.slice(0, 3),
                            v = "last" !== h.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === m ? function (e) {
                            return !!e.parentNode
                        } : function (e, t, n) {
                            var i, o, r, s, a, l, d = y !== v ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                c = b && e.nodeName.toLowerCase(),
                                p = !n && !b,
                                f = !1;
                            if (u) {
                                if (y) {
                                    for (; d;) {
                                        for (s = e; s = s[d];)
                                            if (b ? s.nodeName.toLowerCase() === c : 1 === s.nodeType) return !1;
                                        l = d = "only" === h && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [v ? u.firstChild : u.lastChild], v && p) {
                                    for (f = (a = (i = (o = (r = (s = u)[R] || (s[R] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === W && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[d] || (f = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++f && s === e) {
                                            o[h] = [W, a, f];
                                            break
                                        }
                                } else if (p && (f = a = (i = (o = (r = (s = e)[R] || (s[R] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === W && i[1]), !1 === f)
                                    for (;
                                        (s = ++a && s && s[d] || (f = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== c : 1 !== s.nodeType) || !++f || (p && ((o = (r = s[R] || (s[R] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] = [W, f]), s !== e)););
                                return (f -= m) === g || f % g == 0 && 0 <= f / g
                            }
                        }
                    },
                    PSEUDO: function (e, r) {
                        var t, s = T.pseudos[e] || T.setFilters[e.toLowerCase()] || w.error("unsupported pseudo: " + e);
                        return s[R] ? s(r) : 1 < s.length ? (t = [e, e, "", r], T.setFilters.hasOwnProperty(e.toLowerCase()) ? l(function (e, t) {
                            for (var n, i = s(e, r), o = i.length; o--;) e[n = ee(e, i[o])] = !(t[n] = i[o])
                        }) : function (e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: l(function (e) {
                        var i = [],
                            o = [],
                            a = j(e.replace(ae, "$1"));
                        return a[R] ? l(function (e, t, n, i) {
                            for (var o, r = a(e, null, i, []), s = e.length; s--;)(o = r[s]) && (e[s] = !(t[s] = o))
                        }) : function (e, t, n) {
                            return i[0] = e, a(i, null, n, o), i[0] = null, !o.pop()
                        }
                    }),
                    has: l(function (t) {
                        return function (e) {
                            return 0 < w(t, e).length
                        }
                    }),
                    contains: l(function (t) {
                        return t = t.replace(be, we),
                            function (e) {
                                return -1 < (e.textContent || e.innerText || S(e)).indexOf(t)
                            }
                    }),
                    lang: l(function (n) {
                        return pe.test(n || "") || w.error("unsupported lang: " + n), n = n.replace(be, we).toLowerCase(),
                            function (e) {
                                var t;
                                do {
                                    if (t = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === O
                    },
                    focus: function (e) {
                        return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: s(!1),
                    disabled: s(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function (e) {
                        return ge.test(e.nodeName)
                    },
                    input: function (e) {
                        return he.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (
                            t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: a(function () {
                        return [0]
                    }),
                    last: a(function (e, t) {
                        return [t - 1]
                    }),
                    eq: a(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: a(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: a(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: a(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: a(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = T.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[y] = i(y);
        for (y in {
                submit: !0,
                reset: !0
            }) T.pseudos[y] = r(y);
        return u.prototype = T.filters = T.pseudos, T.setFilters = new u, $ = w.tokenize = function (e, t) {
            var n, i, o, r, s, a, l, d = X[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (s = e, a = [], l = T.preFilter; s;) {
                for (r in n && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = de.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(ae, " ")
                    }), s = s.slice(n.length)), T.filter) !(i = fe[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: r,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? w.error(e) : X(e, a).slice(0)
        }, j = w.compile = function (e, t) {
            var n, i = [],
                o = [],
                r = _[e + " "];
            if (!r) {
                for (t || (t = $(e)), n = t.length; n--;)(r = f(t[n]))[R] ? i.push(r) : o.push(r);
                (r = _(e, m(o, i))).selector = e
            }
            return r
        }, E = w.select = function (e, t, n, i) {
            var o, r, s, a, l, d = "function" == typeof e && e,
                u = !i && $(e = d.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && P && T.relative[r[1].type]) {
                    if (!(t = (T.find.ID(s.matches[0].replace(be, we), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !T.relative[a = s.type]);)
                    if ((l = T.find[a]) && (i = l(s.matches[0].replace(be, we), ve.test(r[0].type) && h(t.parentNode) || t))) {
                        if (r.splice(o, 1), !(e = i.length && g(r))) return K.apply(n, i), n;
                        break
                    }
            }
            return (d || j(e, u))(i, t, !P, n, !t || ve.test(e) && h(t.parentNode) || t), n
        }, k.sortStable = R.split("").sort(Q).join("") === R, k.detectDuplicates = !!N, H(), k.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(L.createElement("fieldset"))
        }), o(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || t("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), k.attributes && o(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || t("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), o(function (e) {
            return null == e.getAttribute("disabled")
        }) || t(te, function (e, t, n) {
            var i;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), w
    }(S);
    ke.find = Se, ke.expr = Se.selectors, ke.expr[":"] = ke.expr.pseudos, ke.uniqueSort = ke.unique = Se.uniqueSort, ke.text = Se.getText, ke.isXMLDoc = Se.isXML, ke.contains = Se.contains, ke.escapeSelector = Se.escape;
    var Ce = function (e, t, n) {
            for (var i = [], o = n !== undefined;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && ke(e).is(n)) break;
                    i.push(e)
                } return i
        },
        $e = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        je = ke.expr.match.needsContext,
        Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    ke.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ke.find.matchesSelector(i, e) ? [i] : [] : ke.find.matches(e, ke.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, ke.fn.extend({
        find: function (e) {
            var t, n, i = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(ke(e).filter(function () {
                for (t = 0; t < i; t++)
                    if (ke.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) ke.find(e, o[t], n);
            return 1 < i ? ke.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(t(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(t(this, e || [], !0))
        },
        is: function (e) {
            return !!t(this, "string" == typeof e && je.test(e) ? ke(e) : e || [], !1).length
        }
    });
    var Ae, De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ke.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || Ae, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : ve(e) ? n.ready !== undefined ? n.ready(e) : e(ke) : ke.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : De.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (t = t instanceof ke ? t[0] : t, ke.merge(this, ke.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), Ee.test(i[1]) && ke.isPlainObject(t))
                for (i in t) ve(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (o = se.getElementById(i[2])) && (this[0] = o, this.length = 1), this
    }).prototype = ke.fn, Ae = ke(se);
    var Ne = /^(?:parents|prev(?:Until|All))/,
        He = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ke.fn.extend({
        has: function (e) {
            var t = ke(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (ke.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && ke(e);
            if (!je.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && ke.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        } return this.pushStack(1 < r.length ? ke.uniqueSort(r) : r)
        },
        index: function (e) {
            return e ? "string" == typeof e ? ce.call(ke(e), this[0]) : ce.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(ke.uniqueSort(ke.merge(this.get(), ke(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ke.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return Ce(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return Ce(e, "parentNode", n)
        },
        next: function (e) {
            return n(e, "nextSibling")
        },
        prev: function (e) {
            return n(e, "previousSibling")
        },
        nextAll: function (e) {
            return Ce(e, "nextSibling")
        },
        prevAll: function (e) {
            return Ce(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return Ce(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return Ce(e, "previousSibling", n)
        },
        siblings: function (e) {
            return $e((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return $e(e.firstChild)
        },
        contents: function (e) {
            return d(e, "iframe") ? e.contentDocument : (d(e, "template") && (e = e.content || e), ke.merge([], e.childNodes))
        }
    }, function (i, o) {
        ke.fn[i] = function (e, t) {
            var n = ke.map(this, o, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = ke.filter(t, n)), 1 < this.length && (He[i] || ke.uniqueSort(n), Ne.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var Le = /[^\x20\t\r\n\f]+/g;
    ke.Callbacks = function (i) {
        i = "string" == typeof i ? u(i) : ke.extend({}, i);
        var o, e, t, n, r = [],
            s = [],
            a = -1,
            l = function () {
                for (n = n || i.once, t = o = !0; s.length; a = -1)
                    for (e = s.shift(); ++a < r.length;) !1 === r[a].apply(e[0], e[1]) && i.stopOnFalse && (a = r.length, e = !1);
                i.memory || (e = !1), o = !1, n && (r = e ? [] : "")
            },
            d = {
                add: function () {
                    return r && (e && !o && (a = r.length - 1, s.push(e)), function n(e) {
                        ke.each(e, function (e, t) {
                            ve(t) ? i.unique && d.has(t) || r.push(t) : t && t.length && "string" !== m(t) && n(t)
                        })
                    }(arguments), e && !o && l()), this
                },
                remove: function () {
                    return ke.each(arguments, function (e, t) {
                        for (var n; - 1 < (n = ke.inArray(t, r, n));) r.splice(n, 1), n <= a && a--
                    }), this
                },
                has: function (e) {
                    return e ? -1 < ke.inArray(e, r) : 0 < r.length
                },
                empty: function () {
                    return r && (r = []), this
                },
                disable: function () {
                    return n = s = [], r = e = "", this
                },
                disabled: function () {
                    return !r
                },
                lock: function () {
                    return n = s = [], e || o || (r = e = ""), this
                },
                locked: function () {
                    return !!n
                },
                fireWith: function (e, t) {
                    return n || (t = [e, (t = t || []).slice ? t.slice() : t], s.push(t), o || l()), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!t
                }
            };
        return d
    }, ke.extend({
        Deferred: function (e) {
            var r = [
                    ["notify", "progress", ke.Callbacks("memory"), ke.Callbacks("memory"), 2],
                    ["resolve", "done", ke.Callbacks("once memory"), ke.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", ke.Callbacks("once memory"), ke.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                s = {
                    state: function () {
                        return o
                    },
                    always: function () {
                        return a.done(arguments).fail(arguments), this
                    },
                    "catch": function (e) {
                        return s.then(null, e)
                    },
                    pipe: function () {
                        var o = arguments;
                        return ke.Deferred(function (i) {
                            ke.each(r, function (e, t) {
                                var n = ve(o[t[4]]) && o[t[4]];
                                a[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && ve(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    then: function (t, n, i) {
                        function d(r, s, a, l) {
                            return function () {
                                var n = this,
                                    i = arguments,
                                    t = function () {
                                        var e, t;
                                        if (!(r < u)) {
                                            if ((e = a.apply(n, i)) === s.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, ve(t) ? l ? t.call(e, d(u, s, c, l), d(u, s, p, l)) : (u++, t.call(e, d(u, s, c, l), d(u, s, p, l), d(u, s, c, s.notifyWith))) : (a !== c && (n = undefined, i = [e]), (l || s.resolveWith)(n, i))
                                        }
                                    },
                                    o = l ? t : function () {
                                        try {
                                            t()
                                        } catch (e) {
                                            ke.Deferred.exceptionHook && ke.Deferred.exceptionHook(e, o.stackTrace), u <= r + 1 && (a !== p && (n = undefined, i = [e]), s.rejectWith(n, i))
                                        }
                                    };
                                r ? o() : (ke.Deferred.getStackHook && (o.stackTrace = ke.Deferred.getStackHook()), S.setTimeout(o))
                            }
                        }
                        var u = 0;
                        return ke.Deferred(function (e) {
                            r[0][3].add(d(0, e, ve(i) ? i : c, e.notifyWith)), r[1][3].add(d(0, e, ve(t) ? t : c)), r[2][3].add(d(0, e, ve(n) ? n : p))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? ke.extend(e, s) : s
                    }
                },
                a = {};
            return ke.each(r, function (e, t) {
                var n = t[2],
                    i = t[5];
                s[t[1]] = n.add, i && n.add(function () {
                    o = i
                }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock), n.add(t[3].fire), a[t[0]] = function () {
                    return a[t[0] + "With"](this === a ? undefined : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function (e) {
            var n = arguments.length,
                t = n,
                i = Array(t),
                o = le.call(arguments),
                r = ke.Deferred(),
                s = function (t) {
                    return function (e) {
                        i[t] = this, o[t] = 1 < arguments.length ? le.call(arguments) : e, --n || r.resolveWith(i, o)
                    }
                };
            if (n <= 1 && (l(e, r.done(s(t)).resolve, r.reject, !n), "pending" === r.state() || ve(o[t] && o[t].then))) return r.then();
            for (; t--;) l(o[t], s(t), r.reject);
            return r.promise()
        }
    });
    var Oe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ke.Deferred.exceptionHook = function (e, t) {
        S.console && S.console.warn && e && Oe.test(e.name) && S.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, ke.readyException = function (e) {
        S.setTimeout(function () {
            throw e
        })
    };
    var Pe = ke.Deferred();
    ke.fn.ready = function (e) {
        return Pe.then(e)["catch"](function (e) {
            ke.readyException(e)
        }), this
    }, ke.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --ke.readyWait : ke.isReady) || (ke.isReady = !0) !== e && 0 < --ke.readyWait || Pe.resolveWith(se, [ke])
        }
    }), ke.ready.then = Pe.then, "complete" === se.readyState || "loading" !== se.readyState && !se.documentElement.doScroll ? S.setTimeout(ke.ready) : (se.addEventListener("DOMContentLoaded", i), S.addEventListener("load", i));
    var qe = function (e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                d = null == n;
            if ("object" === m(n))
                for (a in o = !0, n) qe(e, t, a, n[a], !0, r, s);
            else if (i !== undefined && (o = !0, ve(i) || (s = !0), d && (s ? (t.call(e, i), t = null) : (d = t, t = function (e, t, n) {
                    return d.call(ke(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : d ? t.call(e) : l ? t(e[0], n) : r
        },
        Me = /^-ms-/,
        Ie = /-([a-z])/g,
        ze = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    r.uid = 1, r.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, ze(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[f(t)] = n;
            else
                for (i in t) o[f(i)] = t[i];
            return o
        },
        get: function (e, t) {
            return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][f(t)]
        },
        access: function (e, t, n) {
            return t === undefined || t && "string" == typeof t && n === undefined ? this.get(e, t) : (this.set(e, t, n), n !== undefined ? n : t)
        },
        remove: function (e, t) {
            var n, i = e[this.expando];
            if (i !== undefined) {
                if (t !== undefined) {
                    n = (t = Array.isArray(t) ? t.map(f) : (t = f(t)) in i ? [t] : t.match(Le) || []).length;
                    for (; n--;) delete i[t[n]]
                }(t === undefined || ke.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = undefined : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return t !== undefined && !ke.isEmptyObject(t)
        }
    };
    var Re = new r,
        Fe = new r,
        We = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Be = /[A-Z]/g;
    ke.extend({
        hasData: function (e) {
            return Fe.hasData(e) || Re.hasData(e)
        },
        data: function (e, t, n) {
            return Fe.access(e, t, n)
        },
        removeData: function (e, t) {
            Fe.remove(e, t)
        },
        _data: function (e, t, n) {
            return Re.access(e, t, n)
        },
        _removeData: function (e, t) {
            Re.remove(e, t)
        }
    }), ke.fn.extend({
        data: function (n, e) {
            var t, i, o, r = this[0],
                s = r && r.attributes;
            if (n !== undefined) return "object" == typeof n ? this.each(function () {
                Fe.set(this, n)
            }) : qe(this, function (e) {
                var t;
                if (r && e === undefined) return (t = Fe.get(r, n)) !== undefined ? t : (t = h(r, n)) !== undefined ? t : void 0;
                this.each(function () {
                    Fe.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = Fe.get(r), 1 === r.nodeType && !Re.get(r, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = f(i.slice(5)), h(r, i, o[i]));
                Re.set(r, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function (e) {
            return this.each(function () {
                Fe.remove(this, e)
            })
        }
    }), ke.extend({
        queue: function (e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = Re.get(e, t), n && (!i || Array.isArray(n) ? i = Re.access(e, t, ke.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = ke.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = ke._queueHooks(e, t),
                s = function () {
                    ke.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Re.get(e, n) || Re.access(e, n, {
                empty: ke.Callbacks("once memory").add(function () {
                    Re.remove(e, [t + "queue", n])
                })
            })
        }
    }), ke.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? ke.queue(this[0], t) : n === undefined ? this : this.each(function () {
                var e = ke.queue(this, t, n);
                ke._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ke.dequeue(this, t)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                ke.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, i = 1,
                o = ke.Deferred(),
                r = this,
                s = this.length,
                a = function () {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; s--;)(n = Re.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var Ue = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Xe = new RegExp("^(?:([+-])=|)(" + Ue + ")([a-z%]*)$", "i"),
        _e = ["Top", "Right", "Bottom", "Left"],
        Qe = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ke.contains(e.ownerDocument, e) && "none" === ke.css(e, "display")
        },
        Ye = function (e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r], e.style[r] = t[r];
            for (r in o = n.apply(e, i || []), t) e.style[r] = s[r];
            return o
        },
        Ge = {};
    ke.fn.extend({
        show: function () {
            return b(this, !0)
        },
        hide: function () {
            return b(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Qe(this) ? ke(this).show() : ke(this).hide()
            })
        }
    });
    var Ve = /^(?:checkbox|radio)$/i,
        Je = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ke = /^$|^module$|\/(?:java|ecma)script/i,
        Ze = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td;
    var et, tt, nt = /<|&#?\w+;/;
    et = se.createDocumentFragment().appendChild(se.createElement("div")), (tt = se.createElement("input")).setAttribute("type", "radio"), tt.setAttribute("checked", "checked"), tt.setAttribute("name", "t"), et.appendChild(tt), ye.checkClone = et.cloneNode(!0).cloneNode(!0).lastChild.checked, et.innerHTML = "<textarea>x</textarea>", ye.noCloneChecked = !!et.cloneNode(!0).lastChild.defaultValue;
    var it = se.documentElement,
        ot = /^key/,
        rt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        st = /^([^.]*)(?:\.(.+)|)/;
    ke.event = {
        global: {},
        add: function (t, e, n, i, o) {
            var r, s, a, l, d, u, c, p, f, h, g, m = Re.get(t);
            if (m)
                for (n.handler && (n = (r = n).handler, o = r.selector), o && ke.find.matchesSelector(it, o), n.guid || (n.guid = ke.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (e) {
                        return void 0 !== ke && ke.event.triggered !== e.type ? ke.event.dispatch.apply(t, arguments) : undefined
                    }), d = (e = (e || "").match(Le) || [""]).length; d--;) f = g = (a = st.exec(e[d]) || [])[1], h = (a[2] || "").split(".").sort(), f && (c = ke.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = ke.event.special[f] || {}, u = ke.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ke.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, r), (p = l[f]) || ((p = l[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(f, s)), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), ke.event.global[f] = !0)
        },
        remove: function (e, t, n, i, o) {
            var r, s, a, l, d, u, c, p, f, h, g, m = Re.hasData(e) && Re.get(e);
            if (m && (l = m.events)) {
                for (d = (t = (t || "").match(Le) || [""]).length; d--;)
                    if (f = g = (a = st.exec(t[d]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                        for (c = ke.event.special[f] || {}, p = l[f = (i ? c.delegateType : c.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) u = p[r], !o && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, c.remove && c.remove.call(e, u));
                        s && !p.length && (c.teardown && !1 !== c.teardown.call(e, h, m.handle) || ke.removeEvent(e, f, m.handle), delete l[f])
                    } else
                        for (f in l) ke.event.remove(e, f + t[d], n, i, !0);
                ke.isEmptyObject(l) && Re.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, i, o, r, s, a = ke.event.fix(e),
                l = new Array(arguments.length),
                d = (Re.get(this, "events") || {})[a.type] || [],
                u = ke.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = ke.event.handlers.call(this, a, d), t = 0;
                    (o = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, (i = ((ke.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) !== undefined && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (e, t) {
            var n, i, o, r, s, a = [],
                l = t.delegateCount,
                d = e.target;
            if (l && d.nodeType && !("click" === e.type && 1 <= e.button))
                for (; d !== this; d = d.parentNode || this)
                    if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) s[o = (i = t[n]).selector + " "] === undefined && (s[o] = i.needsContext ? -1 < ke(o, this).index(d) : ke.find(o, this, null, [d]).length), s[o] && r.push(i);
                        r.length && a.push({
                            elem: d,
                            handlers: r
                        })
                    } return d = this, l < t.length && a.push({
                elem: d,
                handlers: t.slice(l)
            }), a
        },
        addProp: function (t, e) {
            Object.defineProperty(ke.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: ve(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (e) {
            return e[ke.expando] ? e : new ke.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== $() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === $() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && d(this, "input")) return this.click(), !1
                },
                _default: function (e) {
                    return d(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ke.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ke.Event = function (e, t) {
        if (!(this instanceof ke.Event)) return new ke.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? T : C, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ke.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[ke.expando] = !0
    }, ke.Event.prototype = {
        constructor: ke.Event,
        isDefaultPrevented: C,
        isPropagationStopped: C,
        isImmediatePropagationStopped: C,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = T, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = T, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = T, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ke.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && ot.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && t !== undefined && rt.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, ke.event.addProp), ke.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, r) {
        ke.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function (e) {
                var t, n = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === n || ke.contains(n, i)) || (e.type = o.origType, t = o.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), ke.fn.extend({
        on: function (e, t, n, i) {
            return j(this, e, t, n, i)
        },
        one: function (e, t, n, i) {
            return j(this, e, t, n, i, 1)
        },
        off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ke(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = C), this.each(function () {
                ke.event.remove(this, e, n, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        }
    });
    var at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        lt = /<script|<style|<link/i,
        dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ke.extend({
        htmlPrefilter: function (e) {
            return e.replace(at, "<$1></$2>")
        },
        clone: function (e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0),
                l = ke.contains(e.ownerDocument, e);
            if (!(ye.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ke.isXMLDoc(e)))
                for (s = w(a), i = 0, o = (r = w(e)).length; i < o; i++) H(r[i], s[i]);
            if (t)
                if (n)
                    for (r = r || w(e), s = s || w(a), i = 0, o = r.length; i < o; i++) N(r[i], s[i]);
                else N(e, a);
            return 0 < (s = w(a, "script")).length && x(s, !l && w(e, "script")), a
        },
        cleanData: function (e) {
            for (var t, n, i, o = ke.event.special, r = 0;
                (n = e[r]) !== undefined; r++)
                if (ze(n)) {
                    if (t = n[Re.expando]) {
                        if (t.events)
                            for (i in t.events) o[i] ? ke.event.remove(n, i) : ke.removeEvent(n, i, t.handle);
                        n[Re.expando] = undefined
                    }
                    n[Fe.expando] && (n[Fe.expando] = undefined)
                }
        }
    }), ke.fn.extend({
        detach: function (e) {
            return O(this, e, !0)
        },
        remove: function (e) {
            return O(this, e)
        },
        text: function (e) {
            return qe(this, function (e) {
                return e === undefined ? ke.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return L(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || E(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return L(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return L(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return L(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ke.cleanData(w(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return ke.clone(this, e, t)
            })
        },
        html: function (e) {
            return qe(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (e === undefined && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !lt.test(e) && !Ze[(Je.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ke.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (ke.cleanData(w(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (o) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var n = [];
            return L(this, arguments, function (e) {
                var t = this.parentNode;
                ke.inArray(this, n) < 0 && (ke.cleanData(w(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), ke.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, s) {
        ke.fn[e] = function (e) {
            for (var t, n = [], i = ke(e), o = i.length - 1, r = 0; r <= o; r++) t = r === o ? this : this.clone(!0), ke(i[r])[s](t), ue.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var ct = new RegExp("^(" + Ue + ")(?!px)[a-z%]+$", "i"),
        pt = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = S), t.getComputedStyle(e)
        },
        ft = new RegExp(_e.join("|"), "i");
    ! function () {
        function e() {
            if (l) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", it.appendChild(a).appendChild(l);
                var e = S.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", r = 36 === t(e.right), i = 36 === t(e.width), l.style.position = "absolute", o = 36 === l.offsetWidth || "absolute", it.removeChild(a), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, i, o, r, s, a = se.createElement("div"),
            l = se.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ye.clearCloneStyle = "content-box" === l.style.backgroundClip, ke.extend(ye, {
            boxSizingReliable: function () {
                return e(), i
            },
            pixelBoxStyles: function () {
                return e(), r
            },
            pixelPosition: function () {
                return e(), n
            },
            reliableMarginLeft: function () {
                return e(), s
            },
            scrollboxSize: function () {
                return e(), o
            }
        }))
    }();
    var ht = /^(none|table(?!-c[ea]).+)/,
        gt = /^--/,
        mt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        yt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        vt = ["Webkit", "Moz", "ms"],
        bt = se.createElement("div").style;
    ke.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = P(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = f(t),
                    l = gt.test(t),
                    d = e.style;
                if (l || (t = I(a)), s = ke.cssHooks[t] || ke.cssHooks[a], n === undefined) return s && "get" in s && (o = s.get(e, !1, i)) !== undefined ? o : d[t];
                "string" === (r = typeof n) && (o = Xe.exec(n)) && o[1] && (n = y(e, t, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (ke.cssNumber[a] ? "" : "px")), ye.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), s && "set" in s && (n = s.set(e, n, i)) === undefined || (l ? d.setProperty(t, n) : d[t] = n))
            }
        },
        css: function (e, t, n, i) {
            var o, r, s, a = f(t);
            return gt.test(t) || (t = I(a)), (s = ke.cssHooks[t] || ke.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)), o === undefined && (o = P(e, t, i)), "normal" === o && t in yt && (o = yt[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), ke.each(["height", "width"], function (e, a) {
        ke.cssHooks[a] = {
            get: function (e, t, n) {
                if (t) return !ht.test(ke.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, a, n) : Ye(e, mt, function () {
                    return F(e, a, n)
                })
            },
            set: function (e, t, n) {
                var i, o = pt(e),
                    r = "border-box" === ke.css(e, "boxSizing", !1, o),
                    s = n && R(e, a, n, r, o);
                return r && ye.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(o[a]) - R(e, a, "border", !1, o) - .5)), s && (i = Xe.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = ke.css(e, a)), z(e, t, s)
            }
        }
    }), ke.cssHooks.marginLeft = q(ye.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(P(e, "marginLeft")) || e.getBoundingClientRect().left - Ye(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), ke.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (o, r) {
        ke.cssHooks[o + r] = {
            expand: function (e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + _e[t] + r] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, "margin" !== o && (ke.cssHooks[o + r].set = z)
    }), ke.fn.extend({
        css: function (e, t) {
            return qe(this, function (e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = pt(e), o = t.length; s < o; s++) r[t[s]] = ke.css(e, t[s], !1, i);
                    return r
                }
                return n !== undefined ? ke.style(e, t, n) : ke.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), (ke.Tween = W).prototype = {
        constructor: W,
        init: function (e, t, n, i, o, r) {
            this.elem = e, this.prop = n, this.easing = o || ke.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ke.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = W.propHooks[this.prop];
            return e && e.get ? e.get(this) : W.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = W.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ke.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
        }
    }, W.prototype.init.prototype = W.prototype, W.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ke.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                ke.fx.step[e.prop] ? ke.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ke.cssProps[e.prop]] && !ke.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ke.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ke.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, ke.fx = W.prototype.init, ke.fx.step = {};
    var wt, xt, kt, Tt, St = /^(?:toggle|show|hide)$/,
        Ct = /queueHooks$/;
    ke.Animation = ke.extend(G, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return y(n.elem, e, Xe.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            ve(e) ? (t = e, e = ["*"]) : e = e.match(Le);
            for (var n, i = 0, o = e.length; i < o; i++) n = e[i], G.tweeners[n] = G.tweeners[n] || [], G.tweeners[n].unshift(t)
        },
        prefilters: [Q],
        prefilter: function (e, t) {
            t ? G.prefilters.unshift(e) : G.prefilters.push(e)
        }
    }), ke.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? ke.extend({}, e) : {
            complete: n || !n && t || ve(e) && e,
            duration: e,
            easing: n && t || t && !ve(t) && t
        };
        return ke.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in ke.fx.speeds ? i.duration = ke.fx.speeds[i.duration] : i.duration = ke.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            ve(i.old) && i.old.call(this), i.queue && ke.dequeue(this, i.queue)
        }, i
    }, ke.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(Qe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function (t, e, n, i) {
            var o = ke.isEmptyObject(t),
                r = ke.speed(e, n, i),
                s = function () {
                    var e = G(this, ke.extend({}, t), r);
                    (o || Re.get(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function (o, e, r) {
            var s = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof o && (r = e, e = o, o = undefined), e && !1 !== o && this.queue(o || "fx", []), this.each(function () {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    n = ke.timers,
                    i = Re.get(this);
                if (t) i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && Ct.test(t) && s(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                !e && r || ke.dequeue(this, o)
            })
        },
        finish: function (s) {
            return !1 !== s && (s = s || "fx"), this.each(function () {
                var e, t = Re.get(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    o = ke.timers,
                    r = n ? n.length : 0;
                for (t.finish = !0, ke.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), ke.each(["toggle", "show", "hide"], function (e, i) {
        var o = ke.fn[i];
        ke.fn[i] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(X(i, !0), e, t, n)
        }
    }), ke.each({
        slideDown: X("show"),
        slideUp: X("hide"),
        slideToggle: X("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, i) {
        ke.fn[e] = function (e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), ke.timers = [], ke.fx.tick = function () {
        var e, t = 0,
            n = ke.timers;
        for (wt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || ke.fx.stop(), wt = undefined
    }, ke.fx.timer = function (e) {
        ke.timers.push(e), ke.fx.start()
    }, ke.fx.interval = 13, ke.fx.start = function () {
        xt || (xt = !0, B())
    }, ke.fx.stop = function () {
        xt = null
    }, ke.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ke.fn.delay = function (i, e) {
        return i = ke.fx && ke.fx.speeds[i] || i, e = e || "fx", this.queue(e, function (e, t) {
            var n = S.setTimeout(e, i);
            t.stop = function () {
                S.clearTimeout(n)
            }
        })
    }, kt = se.createElement("input"), Tt = se.createElement("select").appendChild(
        se.createElement("option")), kt.type = "checkbox", ye.checkOn = "" !== kt.value, ye.optSelected = Tt.selected, (kt = se.createElement("input")).value = "t", kt.type = "radio", ye.radioValue = "t" === kt.value;
    var $t, jt = ke.expr.attrHandle;
    ke.fn.extend({
        attr: function (e, t) {
            return qe(this, ke.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                ke.removeAttr(this, e)
            })
        }
    }), ke.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? ke.prop(e, t, n) : (1 === r && ke.isXMLDoc(e) || (o = ke.attrHooks[t.toLowerCase()] || (ke.expr.match.bool.test(t) ? $t : undefined)), n !== undefined ? null === n ? void ke.removeAttr(e, t) : o && "set" in o && (i = o.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : null == (i = ke.find.attr(e, t)) ? undefined : i)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ye.radioValue && "radio" === t && d(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i = 0,
                o = t && t.match(Le);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) e.removeAttribute(n)
        }
    }), $t = {
        set: function (e, t, n) {
            return !1 === t ? ke.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ke.each(ke.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var s = jt[t] || ke.find.attr;
        jt[t] = function (e, t, n) {
            var i, o, r = t.toLowerCase();
            return n || (o = jt[r], jt[r] = i, i = null != s(e, t, n) ? r : null, jt[r] = o), i
        }
    });
    var Et = /^(?:input|select|textarea|button)$/i,
        At = /^(?:a|area)$/i;
    ke.fn.extend({
        prop: function (e, t) {
            return qe(this, ke.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[ke.propFix[e] || e]
            })
        }
    }), ke.extend({
        prop: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && ke.isXMLDoc(e) || (t = ke.propFix[t] || t, o = ke.propHooks[t]), n !== undefined ? o && "set" in o && (i = o.set(e, n, t)) !== undefined ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = ke.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Et.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ye.optSelected || (ke.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ke.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ke.propFix[this.toLowerCase()] = this
    }), ke.fn.extend({
        addClass: function (t) {
            var e, n, i, o, r, s, a, l = 0;
            if (ve(t)) return this.each(function (e) {
                ke(this).addClass(t.call(this, e, J(this)))
            });
            if ((e = K(t)).length)
                for (; n = this[l++];)
                    if (o = J(n), i = 1 === n.nodeType && " " + V(o) + " ") {
                        for (s = 0; r = e[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (a = V(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function (t) {
            var e, n, i, o, r, s, a, l = 0;
            if (ve(t)) return this.each(function (e) {
                ke(this).removeClass(t.call(this, e, J(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = K(t)).length)
                for (; n = this[l++];)
                    if (o = J(n), i = 1 === n.nodeType && " " + V(o) + " ") {
                        for (s = 0; r = e[s++];)
                            for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                        o !== (a = V(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function (o, t) {
            var r = typeof o,
                s = "string" === r || Array.isArray(o);
            return "boolean" == typeof t && s ? t ? this.addClass(o) : this.removeClass(o) : ve(o) ? this.each(function (e) {
                ke(this).toggleClass(o.call(this, e, J(this), t), t)
            }) : this.each(function () {
                var e, t, n, i;
                if (s)
                    for (t = 0, n = ke(this), i = K(o); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else o !== undefined && "boolean" !== r || ((e = J(this)) && Re.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : Re.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + V(J(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var Dt = /\r/g;
    ke.fn.extend({
        val: function (n) {
            var i, e, o, t = this[0];
            return arguments.length ? (o = ve(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = o ? n.call(this, e, ke(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = ke.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (i = ke.valHooks[this.type] || ke.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, t, "value") !== undefined || (this.value = t))
            })) : t ? (i = ke.valHooks[t.type] || ke.valHooks[t.nodeName.toLowerCase()]) && "get" in i && (e = i.get(t, "value")) !== undefined ? e : "string" == typeof (e = t.value) ? e.replace(Dt, "") : null == e ? "" : e : void 0
        }
    }), ke.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = ke.find.attr(e, "value");
                    return null != t ? t : V(ke.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, i, o = e.options,
                        r = e.selectedIndex,
                        s = "select-one" === e.type,
                        a = s ? null : [],
                        l = s ? r + 1 : o.length;
                    for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                        if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !d(n.parentNode, "optgroup"))) {
                            if (t = ke(n).val(), s) return t;
                            a.push(t)
                        } return a
                },
                set: function (e, t) {
                    for (var n, i, o = e.options, r = ke.makeArray(t), s = o.length; s--;)((i = o[s]).selected = -1 < ke.inArray(ke.valHooks.option.get(i), r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), ke.each(["radio", "checkbox"], function () {
        ke.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < ke.inArray(ke(e).val(), t)
            }
        }, ye.checkOn || (ke.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), ye.focusin = "onfocusin" in S;
    var Nt = /^(?:focusinfocus|focusoutblur)$/,
        Ht = function (e) {
            e.stopPropagation()
        };
    ke.extend(ke.event, {
        trigger: function (e, t, n, i) {
            var o, r, s, a, l, d, u, c, p = [n || se],
                f = he.call(e, "type") ? e.type : e,
                h = he.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = c = s = n = n || se, 3 !== n.nodeType && 8 !== n.nodeType && !Nt.test(f + ke.event.triggered) && (-1 < f.indexOf(".") && (f = (h = f.split(".")).shift(), h.sort()), l = f.indexOf(":") < 0 && "on" + f, (e = e[ke.expando] ? e : new ke.Event(f, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = n), t = null == t ? [e] : ke.makeArray(t, [e]), u = ke.event.special[f] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!i && !u.noBubble && !be(n)) {
                    for (a = u.delegateType || f, Nt.test(a + f) || (r = r.parentNode); r; r = r.parentNode) p.push(r), s = r;
                    s === (n.ownerDocument || se) && p.push(s.defaultView || s.parentWindow || S)
                }
                for (o = 0;
                    (r = p[o++]) && !e.isPropagationStopped();) c = r, e.type = 1 < o ? a : u.bindType || f, (d = (Re.get(r, "events") || {})[e.type] && Re.get(r, "handle")) && d.apply(r, t), (d = l && r[l]) && d.apply && ze(r) && (e.result = d.apply(r, t), !1 === e.result && e.preventDefault());
                return e.type = f, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), t) || !ze(n) || l && ve(n[f]) && !be(n) && ((s = n[l]) && (n[l] = null), ke.event.triggered = f, e.isPropagationStopped() && c.addEventListener(f, Ht), n[f](), e.isPropagationStopped() && c.removeEventListener(f, Ht), ke.event.triggered = undefined, s && (n[l] = s)), e.result
            }
        },
        simulate: function (e, t, n) {
            var i = ke.extend(new ke.Event, n, {
                type: e,
                isSimulated: !0
            });
            ke.event.trigger(i, null, t)
        }
    }), ke.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                ke.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return ke.event.trigger(e, t, n, !0)
        }
    }), ye.focusin || ke.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, i) {
        var o = function (e) {
            ke.event.simulate(i, e.target, ke.event.fix(e))
        };
        ke.event.special[i] = {
            setup: function () {
                var e = this.ownerDocument || this,
                    t = Re.access(e, i);
                t || e.addEventListener(n, o, !0), Re.access(e, i, (t || 0) + 1)
            },
            teardown: function () {
                var e = this.ownerDocument || this,
                    t = Re.access(e, i) - 1;
                t ? Re.access(e, i, t) : (e.removeEventListener(n, o, !0), Re.remove(e, i))
            }
        }
    });
    var Lt = S.location,
        Ot = Date.now(),
        Pt = /\?/;
    ke.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new S.DOMParser).parseFromString(e, "text/xml")
        } catch (n) {
            t = undefined
        }
        return t && !t.getElementsByTagName("parsererror").length || ke.error("Invalid XML: " + e), t
    };
    var qt = /\[\]$/,
        Mt = /\r?\n/g,
        It = /^(?:submit|button|image|reset|file)$/i,
        zt = /^(?:input|select|textarea|keygen)/i;
    ke.param = function (e, t) {
        var n, i = [],
            o = function (e, t) {
                var n = ve(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !ke.isPlainObject(e)) ke.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (n in e) Z(n, e[n], t, o);
        return i.join("&")
    }, ke.fn.extend({
        serialize: function () {
            return ke.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = ke.prop(this, "elements");
                return e ? ke.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ke(this).is(":disabled") && zt.test(this.nodeName) && !It.test(e) && (this.checked || !Ve.test(e))
            }).map(function (e, t) {
                var n = ke(this).val();
                return null == n ? null : Array.isArray(n) ? ke.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Mt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Mt, "\r\n")
                }
            }).get()
        }
    });
    var Rt = /%20/g,
        Ft = /#.*$/,
        Wt = /([?&])_=[^&]*/,
        Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ut = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Xt = /^(?:GET|HEAD)$/,
        _t = /^\/\//,
        Qt = {},
        Yt = {},
        Gt = "*/".concat("*"),
        Vt = se.createElement("a");
    Vt.href = Lt.href, ke.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Lt.href,
            type: "GET",
            isLocal: Ut.test(Lt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Gt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ke.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? ne(ne(e, ke.ajaxSettings), t) : ne(ke.ajaxSettings, e)
        },
        ajaxPrefilter: ee(Qt),
        ajaxTransport: ee(Yt),
        ajax: function (e, t) {
            function n(e, t, n, i) {
                var o, r, s, a, l, d = t;
                h || (h = !0, f && S.clearTimeout(f), u = undefined, p = i || "", k.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, n && (a = ie(m, k, n)), a = oe(m, a, k, o), o ? (m.ifModified && ((l = k.getResponseHeader("Last-Modified")) && (ke.lastModified[c] = l), (l = k.getResponseHeader("etag")) && (ke.etag[c] = l)), 204 === e || "HEAD" === m.type ? d = "nocontent" : 304 === e ? d = "notmodified" : (d = a.state, r = a.data, o = !(s = a.error))) : (s = d, !e && d || (d = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || d) + "", o ? b.resolveWith(y, [r, d, k]) : b.rejectWith(y, [k, d, s]), k.statusCode(x), x = undefined, g && v.trigger(o ? "ajaxSuccess" : "ajaxError", [k, m, o ? r : s]), w.fireWith(y, [k, d]), g && (v.trigger("ajaxComplete", [k, m]), --ke.active || ke.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = undefined), t = t || {};
            var u, c, p, i, f, o, h, g, r, s, m = ke.ajaxSetup({}, t),
                y = m.context || m,
                v = m.context && (y.nodeType || y.jquery) ? ke(y) : ke.event,
                b = ke.Deferred(),
                w = ke.Callbacks("once memory"),
                x = m.statusCode || {},
                a = {},
                l = {},
                d = "canceled",
                k = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!i)
                                for (i = {}; t = Bt.exec(p);) i[t[1].toLowerCase()] = t[2];
                            t = i[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return h ? p : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == h && (e = l[e.toLowerCase()] = l[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == h && (m.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (h) k.always(e[k.status]);
                            else
                                for (t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || d;
                        return u && u.abort(t), n(0, t), this
                    }
                };
            if (b.promise(k), m.url = ((e || m.url || Lt.href) + "").replace(_t, Lt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(Le) || [""], null == m.crossDomain) {
                o = se.createElement("a");
                try {
                    o.href = m.url, o.href = o.href, m.crossDomain = Vt.protocol + "//" + Vt.host != o.protocol + "//" + o.host
                } catch (T) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = ke.param(m.data, m.traditional)), te(Qt, m, t, k), h) return k;
            for (r in (g = ke.event && m.global) && 0 == ke.active++ && ke.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Xt.test(m.type), c = m.url.replace(Ft, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Rt, "+")) : (s = m.url.slice(c.length), m.data && (m.processData || "string" == typeof m.data) && (c += (Pt.test(c) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (c = c.replace(Wt, "$1"), s = (Pt.test(c) ? "&" : "?") + "_=" + Ot++ + s), m.url = c + s), m.ifModified && (ke.lastModified[c] && k.setRequestHeader("If-Modified-Since", ke.lastModified[c]), ke.etag[c] && k.setRequestHeader("If-None-Match", ke.etag[c])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && k.setRequestHeader("Content-Type", m.contentType), k.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : m.accepts["*"]), m.headers) k.setRequestHeader(r, m.headers[r]);
            if (m.beforeSend && (!1 === m.beforeSend.call(y, k, m) || h)) return k.abort();
            if (d = "abort", w.add(m.complete), k.done(m.success), k.fail(m.error), u = te(Yt, m, t, k)) {
                if (k.readyState = 1, g && v.trigger("ajaxSend", [k, m]), h) return k;
                m.async && 0 < m.timeout && (f = S.setTimeout(function () {
                    k.abort("timeout")
                }, m.timeout));
                try {
                    h = !1, u.send(a, n)
                } catch (T) {
                    if (h) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return k
        },
        getJSON: function (e, t, n) {
            return ke.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return ke.get(e, undefined, t, "script")
        }
    }), ke.each(["get", "post"], function (e, o) {
        ke[o] = function (e, t, n, i) {
            return ve(t) && (i = i || n, n = t, t = undefined), ke.ajax(ke.extend({
                url: e,
                type: o,
                dataType: i,
                data: t,
                success: n
            }, ke.isPlainObject(e) && e))
        }
    }), ke._evalUrl = function (e) {
        return ke.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ke.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (ve(e) && (e = e.call(this[0])), t = ke(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (n) {
            return ve(n) ? this.each(function (e) {
                ke(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = ke(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function (t) {
            var n = ve(t);
            return this.each(function (e) {
                ke(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                ke(this).replaceWith(this.childNodes)
            }), this
        }
    }), ke.expr.pseudos.hidden = function (e) {
        return !ke.expr.pseudos.visible(e)
    }, ke.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, ke.ajaxSettings.xhr = function () {
        try {
            return new S.XMLHttpRequest
        } catch (e) {}
    };
    var Jt = {
            0: 200,
            1223: 204
        },
        Kt = ke.ajaxSettings.xhr();
    ye.cors = !!Kt && "withCredentials" in Kt, ye.ajax = Kt = !!Kt, ke.ajaxTransport(function (r) {
        var s, a;
        if (ye.cors || Kt && !r.crossDomain) return {
            send: function (e, t) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                s = function (e) {
                    return function () {
                        s && (s = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Jt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = s(), a = i.onerror = i.ontimeout = s("error"), i.onabort !== undefined ? i.onabort = a : i.onreadystatechange = function () {
                    4 === i.readyState && S.setTimeout(function () {
                        s && a()
                    })
                }, s = s("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (o) {
                    if (s) throw o
                }
            },
            abort: function () {
                s && s()
            }
        }
    }), ke.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), ke.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return ke.globalEval(e), e
            }
        }
    }), ke.ajaxPrefilter("script", function (e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ke.ajaxTransport("script", function (n) {
        var i, o;
        if (n.crossDomain) return {
            send: function (e, t) {
                i = ke("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", o = function (e) {
                    i.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), se.head.appendChild(i[0])
            },
            abort: function () {
                o && o()
            }
        }
    });
    var Zt, en = [],
        tn = /(=)\?(?=&|$)|\?\?/;
    ke.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = en.pop() || ke.expando + "_" + Ot++;
            return this[e] = !0, e
        }
    }), ke.ajaxPrefilter("json jsonp", function (e, t, n) {
        var i, o, r, s = !1 !== e.jsonp && (tn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = ve(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(tn, "$1" + i) : !1 !== e.jsonp && (e.url += (Pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
            return r || ke.error(i + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = S[i], S[i] = function () {
            r = arguments
        }, n.always(function () {
            o === undefined ? ke(S).removeProp(i) : S[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, en.push(i)), r && ve(o) && o(r[0]), r = o = undefined
        }), "script"
    }), ye.createHTMLDocument = ((Zt = se.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Zt.childNodes.length), ke.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (ye.createHTMLDocument ? ((i = (t = se.implementation.createHTMLDocument("")).createElement("base")).href = se.location.href, t.head.appendChild(i)) : t = se), r = !n && [], (o = Ee.exec(e)) ? [t.createElement(o[1])] : (o = k([e], t, r), r && r.length && ke(r).remove(), ke.merge([], o.childNodes)));
        var i, o, r
    }, ke.fn.load = function (e, t, n) {
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return -1 < a && (i = V(e.slice(a)), e = e.slice(0, a)), ve(t) ? (n = t, t = undefined) : t && "object" == typeof t && (o = "POST"), 0 < s.length && ke.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, s.html(i ? ke("<div>").append(ke.parseHTML(e)).find(i) : e)
        }).always(n && function (e, t) {
            s.each(function () {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, ke.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ke.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ke.expr.pseudos.animated = function (t) {
        return ke.grep(ke.timers, function (e) {
            return t === e.elem
        }).length
    }, ke.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, s, a, l, d = ke.css(e, "position"),
                u = ke(e),
                c = {};
            "static" === d && (e.style.position = "relative"), a = u.offset(), r = ke.css(e, "top"), l = ke.css(e, "left"), ("absolute" === d || "fixed" === d) && -1 < (r + l).indexOf("auto") ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), ve(t) && (t = t.call(e, n, ke.extend({}, a))), null != t.top && (c.top = t.top - a.top + s), null != t.left && (c.left = t.left - a.left + o), "using" in t ? t.using.call(e, c) : u.css(c)
        }
    }, ke.fn.extend({
        offset: function (t) {
            if (arguments.length) return t === undefined ? this : this.each(function (e) {
                ke.offset.setOffset(this, t, e)
            });
            var e, n, i = this[0];
            return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === ke.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === ke.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((o = ke(e).offset()).top += ke.css(e, "borderTopWidth", !0), o.left += ke.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - ke.css(i, "marginTop", !0),
                    left: t.left - o.left - ke.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === ke.css(e, "position");) e = e.offsetParent;
                return e || it
            })
        }
    }), ke.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, o) {
        var r = "pageYOffset" === o;
        ke.fn[t] = function (e) {
            return qe(this, function (e, t, n) {
                var i;
                if (be(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), n === undefined) return i ? i[o] : e[t];
                i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), ke.each(["top", "left"], function (e, n) {
        ke.cssHooks[n] = q(ye.pixelPosition, function (e, t) {
            if (t) return t = P(e, n), ct.test(t) ? ke(e).position()[n] + "px" : t
        })
    }), ke.each({
        Height: "height",
        Width: "width"
    }, function (s, a) {
        ke.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function (i, r) {
            ke.fn[r] = function (e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    o = i || (!0 === e || !0 === t ? "margin" : "border");
                return qe(this, function (e, t, n) {
                    var i;
                    return be(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : n === undefined ? ke.css(e, t, o) : ke.style(e, t, n, o)
                }, a, n ? e : undefined, n)
            }
        })
    }), ke.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        ke.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), ke.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ke.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), ke.proxy = function (e, t) {
        var n, i, o;
        return "string" == typeof t && (n = e[t], t = e, e = n), ve(e) ? (i = le.call(arguments, 2), (o = function () {
            return e.apply(t || this, i.concat(le.call(arguments)))
        }).guid = e.guid = e.guid || ke.guid++, o) : undefined
    }, ke.holdReady = function (e) {
        e ? ke.readyWait++ : ke.ready(!0)
    }, ke.isArray = Array.isArray, ke.parseJSON = JSON.parse, ke.nodeName = d, ke.isFunction = ve, ke.isWindow = be, ke.camelCase = f, ke.type = m, ke.now = Date.now, ke.isNumeric = function (e) {
        var t = ke.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ke
    });
    var nn = S.jQuery,
        on = S.$;
    return ke.noConflict = function (e) {
        return S.$ === ke && (S.$ = on), e && S.jQuery === ke && (S.jQuery = nn), ke
    }, e || (S.jQuery = S.$ = ke), ke
}),
function (u, l) {
    "use strict";
    var d;
    u.rails !== l && u.error("jquery-ujs has already been loaded!");
    var e = u(document);
    u.rails = d = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function () {
            return u("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function () {
            return u("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function (e) {
            var t = d.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function () {
            u('form input[name="' + d.csrfParam() + '"]').val(d.csrfToken())
        },
        fire: function (e, t, n) {
            var i = u.Event(t);
            return e.trigger(i, n), !1 !== i.result
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (e) {
            return u.ajax(e)
        },
        href: function (e) {
            return e[0].href
        },
        isRemote: function (e) {
            return e.data("remote") !== l && !1 !== e.data("remote")
        },
        handleRemote: function (i) {
            var e, t, n, o, r, s;
            if (d.fire(i, "ajax:before")) {
                if (o = i.data("with-credentials") || null, r = i.data("type") || u.ajaxSettings && u.ajaxSettings.dataType, i.is("form")) {
                    e = i.data("ujs:submit-button-formmethod") || i.attr("method"), t = i.data("ujs:submit-button-formaction") || i.attr("action"), n = u(i[0]).serializeArray();
                    var a = i.data("ujs:submit-button");
                    a && (n.push(a), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                } else i.is(d.inputChangeSelector) ? (e = i.data("method"), t = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : i.is(d.buttonClickSelector) ? (e = i.data("method") || "get", t = i.data("url"), n = i.serialize(), i.data("params") && (n = n + "&" + i.data("params"))) : (e = i.data("method"), t = d.href(i), n = i.data("params") || null);
                return s = {
                    type: e || "GET",
                    data: n,
                    dataType: r,
                    beforeSend: function (e, t) {
                        if (t.dataType === l && e.setRequestHeader("accept", "*/*;q=0.5, " + t.accepts.script), !d.fire(i, "ajax:beforeSend", [e, t])) return !1;
                        i.trigger("ajax:send", e)
                    },
                    success: function (e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function (e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: d.isCrossDomain(t)
                }, o && (s.xhrFields = {
                    withCredentials: o
                }), t && (s.url = t), d.ajax(s)
            }
            return !1
        },
        isCrossDomain: function (e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (i) {
                return !0
            }
        },
        handleMethod: function (e) {
            var t = d.href(e),
                n = e.data("method"),
                i = e.attr("target"),
                o = d.csrfToken(),
                r = d.csrfParam(),
                s = u('<form method="post" action="' + t + '"></form>'),
                a = '<input name="_method" value="' + n + '" type="hidden" />';
            r === l || o === l || d.isCrossDomain(t) || (a += '<input name="' + r + '" value="' + o + '" type="hidden" />'), i && s.attr("target", i), s.hide().append(a).appendTo("body"), s.submit()
        },
        formElements: function (e, t) {
            return e.is("form") ? u(e[0].elements).filter(t) : e.find(t)
        },
        disableFormElements: function (e) {
            d.formElements(e, d.disableSelector).each(function () {
                d.disableFormElement(u(this))
            })
        },
        disableFormElement: function (e) {
            var t, n;
            t = e.is("button") ? "html" : "val", (n = e.data("disable-with")) !== l && (e.data("ujs:enable-with", e[t]()), e[t](n)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
        },
        enableFormElements: function (e) {
            d.formElements(e, d.enableSelector).each(function () {
                d.enableFormElement(u(this))
            })
        },
        enableFormElement: function (e) {
            var t = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== l && (e[t](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
        },
        allowAction: function (e) {
            var t, n = e.data("confirm"),
                i = !1;
            if (!n) return !0;
            if (d.fire(e, "confirm")) {
                try {
                    i = d.confirm(n)
                } catch (o) {
                    (console.error || console.log).call(console, o.stack || o)
                }
                t = d.fire(e, "confirm:complete", [i])
            }
            return i && t
        },
        blankInputs: function (e, t, n) {
            var i, o, r, s = u(),
                a = t || "input,textarea",
                l = e.find(a),
                d = {};
            return l.each(function () {
                (i = u(this)).is("input[type=radio]") ? (r = i.attr("name"), d[r] || (0 === e.find('input[type=radio]:checked[name="' + r + '"]').length && (o = e.find('input[type=radio][name="' + r + '"]'), s = s.add(o)), d[r] = r)) : (i.is("input[type=checkbox],input[type=radio]") ? i.is(":checked") : !!i.val()) === n && (s = s.add(i))
            }), !!s.length && s
        },
        nonBlankInputs: function (e, t) {
            return d.blankInputs(e, t, !0)
        },
        stopEverything: function (e) {
            return u(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function (e) {
            var t = e.data("disable-with");
            t !== l && (e.data("ujs:enable-with", e.html()), e.html(t)), e.bind("click.railsDisable", function (e) {
                return d.stopEverything(e)
            }), e.data("ujs:disabled", !0)
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== l && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
        }
    }, d.fire(e, "rails:attachBindings") && (u.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || d.CSRFProtection(n)
    }), u(window).on("pageshow.rails", function () {
        u(u.rails.enableSelector).each(function () {
            var e = u(this);
            e.data("ujs:disabled") && u.rails.enableFormElement(e)
        }), u(u.rails.linkDisableSelector).each(function () {
            var e = u(this);
            e.data("ujs:disabled") && u.rails.enableElement(e)
        })
    }), e.on("ajax:complete", d.linkDisableSelector, function () {
        d.enableElement(u(this))
    }), e.on("ajax:complete", d.buttonDisableSelector, function () {
        d.enableFormElement(u(this))
    }), e.on("click.rails", d.linkClickSelector, function (e) {
        var t = u(this),
            n = t.data("method"),
            i = t.data("params"),
            o = e.metaKey || e.ctrlKey;
        if (!d.allowAction(t)) return d.stopEverything(e);
        if (!o && t.is(d.linkDisableSelector) && d.disableElement(t), d.isRemote(t)) {
            if (o && (!n || "GET" === n) && !i) return !0;
            var r = d.handleRemote(t);
            return !1 === r ? d.enableElement(t) : r.fail(function () {
                d.enableElement(t)
            }), !1
        }
        return n ? (d.handleMethod(t), !1) : void 0
    }), e.on("click.rails", d.buttonClickSelector, function (e) {
        var t = u(this);
        if (!d.allowAction(t) || !d.isRemote(t)) return d.stopEverything(e);
        t.is(d.buttonDisableSelector) && d.disableFormElement(t);
        var n = d.handleRemote(t);
        return !1 === n ? d.enableFormElement(t) : n.fail(function () {
            d.enableFormElement(t)
        }), !1
    }), e.on("change.rails", d.inputChangeSelector, function (e) {
        var t = u(this);
        return d.allowAction(t) && d.isRemote(t) ? (d.handleRemote(t), !1) : d.stopEverything(e)
    }), e.on("submit.rails", d.formSubmitSelector, function (e) {
        var t, n, i = u(this),
            o = d.isRemote(i);
        if (!d.allowAction(i)) return d.stopEverything(e);
        if (i.attr("novalidate") === l)
            if (i.data("ujs:formnovalidate-button") === l) {
                if ((t = d.blankInputs(i, d.requiredInputSelector, !1)) && d.fire(i, "ajax:aborted:required", [t])) return d.stopEverything(e)
            } else i.data("ujs:formnovalidate-button", l);
        if (o) {
            if (n = d.nonBlankInputs(i, d.fileInputSelector)) {
                setTimeout(function () {
                    d.disableFormElements(i)
                }, 13);
                var r = d.fire(i, "ajax:aborted:file", [n]);
                return r || setTimeout(function () {
                    d.enableFormElements(i)
                }, 13), r
            }
            return d.handleRemote(i), !1
        }
        setTimeout(function () {
            d.disableFormElements(i)
        }, 13)
    }), e.on("click.rails", d.formInputClickSelector, function (e) {
        var t = u(this);
        if (!d.allowAction(t)) return d.stopEverything(e);
        var n = t.attr("name"),
            i = n ? {
                name: n,
                value: t.val()
            } : null,
            o = t.closest("form");
        0 === o.length && (o = u("#" + t.attr("form"))), o.data("ujs:submit-button", i), o.data("ujs:formnovalidate-button", t.attr("formnovalidate")), o.data("ujs:submit-button-formaction", t.attr("formaction")), o.data("ujs:submit-button-formmethod", t.attr("formmethod"))
    }), e.on("ajax:send.rails", d.formSubmitSelector, function (e) {
        this === e.target && d.disableFormElements(u(this))
    }), e.on("ajax:complete.rails", d.formSubmitSelector, function (e) {
        this === e.target && d.enableFormElements(u(this))
    }), u(function () {
        d.refreshCSRFTokens()
    }))
}(jQuery),
function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (u) {
    "use strict";
    var a = window.Slick || {};
    (a = function () {
        function e(e, t) {
            var n, i = this;
            i.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: u(e),
                    appendDots: u(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (e, t) {
                        return u('<button type="button" />').text(t + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, i.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, u.extend(i, i.initials), i.activeBreakpoint = null, i.animType = null, i.animProp = null, i.breakpoints = [], i.breakpointSettings = [], i.cssTransitions = !1, i.focussed = !1, i.interrupted = !1, i.hidden = "hidden", i.paused = !0, i.positionProp = null, i.respondTo = null, i.rowCount = 1, i.shouldClick = !0, i.$slider = u(e), i.$slidesCache = null, i.transformType = null, i.transitionType = null, i.visibilityChange = "visibilitychange", i.windowWidth = 0, i.windowTimer = null, n = u(e).data("slick") || {}, i.options = u.extend({}, i.defaults, t, n),
                i.currentSlide = i.options.initialSlide, i.originalSettings = i.options, "undefined" != typeof document.mozHidden ? (i.hidden = "mozHidden", i.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (i.hidden = "webkitHidden", i.visibilityChange = "webkitvisibilitychange"), i.autoPlay = u.proxy(i.autoPlay, i), i.autoPlayClear = u.proxy(i.autoPlayClear, i), i.autoPlayIterator = u.proxy(i.autoPlayIterator, i), i.changeSlide = u.proxy(i.changeSlide, i), i.clickHandler = u.proxy(i.clickHandler, i), i.selectHandler = u.proxy(i.selectHandler, i), i.setPosition = u.proxy(i.setPosition, i), i.swipeHandler = u.proxy(i.swipeHandler, i), i.dragHandler = u.proxy(i.dragHandler, i), i.keyHandler = u.proxy(i.keyHandler, i), i.instanceUid = o++, i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, i.registerBreakpoints(), i.init(!0)
        }
        var o = 0;
        return e
    }()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, a.prototype.addSlide = a.prototype.slickAdd = function (e, t, n) {
        var i = this;
        if ("boolean" == typeof t) n = t, t = null;
        else if (t < 0 || t >= i.slideCount) return !1;
        i.unload(), "number" == typeof t ? 0 === t && 0 === i.$slides.length ? u(e).appendTo(i.$slideTrack) : n ? u(e).insertBefore(i.$slides.eq(t)) : u(e).insertAfter(i.$slides.eq(t)) : !0 === n ? u(e).prependTo(i.$slideTrack) : u(e).appendTo(i.$slideTrack), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slides.each(function (e, t) {
            u(t).attr("data-slick-index", e)
        }), i.$slidesCache = i.$slides, i.reinit()
    }, a.prototype.animateHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, a.prototype.animateSlide = function (e, t) {
        var n = {},
            i = this;
        i.animateHeight(), !0 === i.options.rtl && !1 === i.options.vertical && (e = -e), !1 === i.transformsEnabled ? !1 === i.options.vertical ? i.$slideTrack.animate({
            left: e
        }, i.options.speed, i.options.easing, t) : i.$slideTrack.animate({
            top: e
        }, i.options.speed, i.options.easing, t) : !1 === i.cssTransitions ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft), u({
            animStart: i.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: i.options.speed,
            easing: i.options.easing,
            step: function (e) {
                e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate(" + e + "px, 0px)" : n[i.animType] = "translate(0px," + e + "px)", i.$slideTrack.css(n)
            },
            complete: function () {
                t && t.call()
            }
        })) : (i.applyTransition(), e = Math.ceil(e), !1 === i.options.vertical ? n[i.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[i.animType] = "translate3d(0px," + e + "px, 0px)", i.$slideTrack.css(n), t && setTimeout(function () {
            i.disableTransition(), t.call()
        }, i.options.speed))
    }, a.prototype.getNavTarget = function () {
        var e = this,
            t = e.options.asNavFor;
        return t && null !== t && (t = u(t).not(e.$slider)), t
    }, a.prototype.asNavFor = function (t) {
        var e = this.getNavTarget();
        null !== e && "object" == typeof e && e.each(function () {
            var e = u(this).slick("getSlick");
            e.unslicked || e.slideHandler(t, !0)
        })
    }, a.prototype.applyTransition = function (e) {
        var t = this,
            n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, a.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, a.prototype.autoPlayClear = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, a.prototype.autoPlayIterator = function () {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, a.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = u(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = u(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, a.prototype.buildDots = function () {
        var e, t, n = this;
        if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
            for (n.$slider.addClass("slick-dotted"), t = u("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) t.append(u("<li />").append(n.options.customPaging.call(this, n, e)));
            n.$dots = t.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
        }
    }, a.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, t) {
            u(t).attr("data-slick-index", e).data("originalStyling", u(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? u('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), u("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, a.prototype.buildRows = function () {
        var e, t, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(), r = a.$slider.children(), 0 < a.options.rows) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var d = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var u = e * s + (t * a.options.slidesPerRow + n);
                        r.get(u) && d.appendChild(r.get(u))
                    }
                    l.appendChild(d)
                }
                i.appendChild(l)
            }
            a.$slider.empty().append(i), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, a.prototype.checkResponsive = function (e, t) {
        var n, i, o, r = this,
            s = !1,
            a = r.$slider.width(),
            l = window.innerWidth || u(window).width();
        if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = a : "min" === r.respondTo && (o = Math.min(l, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (n in i = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
            null !== i ? null !== r.activeBreakpoint ? (i !== r.activeBreakpoint || t) && (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = u.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = i) : (r.activeBreakpoint = i, "unslick" === r.breakpointSettings[i] ? r.unslick(i) : (r.options = u.extend({}, r.originalSettings, r.breakpointSettings[i]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), s = i) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), s = i), e || !1 === s || r.$slider.trigger("breakpoint", [r, s])
        }
    }, a.prototype.changeSlide = function (e, t) {
        var n, i, o = this,
            r = u(e.currentTarget);
        switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, e.data.message) {
            case "previous":
                i = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - i, !1, t);
                break;
            case "next":
                i = 0 === n ? o.options.slidesToScroll : n, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + i, !1, t);
                break;
            case "index":
                var s = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
                o.slideHandler(o.checkNavigable(s), !1, t), r.children().trigger("focus");
                break;
            default:
                return
        }
    }, a.prototype.checkNavigable = function (e) {
        var t, n;
        if (n = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
        else
            for (var i in t) {
                if (e < t[i]) {
                    e = n;
                    break
                }
                n = t[i]
            }
        return e
    }, a.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (u("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", u.proxy(e.interrupt, e, !0)).off("mouseleave.slick", u.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), u(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && u(e.$slideTrack).children().off("click.slick", e.selectHandler), u(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), u(window).off("resize.slick.slick-" + e.instanceUid, e.resize), u("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), u(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, a.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", u.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", u.proxy(e.interrupt, e, !1))
    }, a.prototype.cleanUpRows = function () {
        var e, t = this;
        0 < t.options.rows && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
    }, a.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, a.prototype.destroy = function (e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), u(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            u(this).attr("style", u(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, a.prototype.disableTransition = function (e) {
        var t = this,
            n = {};
        n[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, a.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function () {
            n.disableTransition(e), t.call()
        }, n.options.speed))
    }, a.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, a.prototype.filterSlides = a.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, a.prototype.focusHandler = function () {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function () {
            var e = u(this);
            setTimeout(function () {
                t.options.pauseOnFocus && e.is(":focus") && (t.focussed = !0, t.autoPlay())
            }, 0)
        }).on("blur.slick", "*", function () {
            u(this);
            t.options.pauseOnFocus && (t.focussed = !1, t.autoPlay())
        })
    }, a.prototype.getCurrent = a.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, a.prototype.getDotCount = function () {
        var e = this,
            t = 0,
            n = 0,
            i = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++i;
            else
                for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++i, t = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }, a.prototype.getLeft = function (e) {
        var t, n, i, o, r = this,
            s = 0;
        return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = -1, !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? o = -1.5 : 1 === r.options.slidesToShow && (o = -2)), s = n * r.options.slidesToShow * o), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * n * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (s = r.slideOffset = 0), !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow ? r.slideOffset = r.slideWidth * Math.floor(r.options.slidesToShow) / 2 - r.slideWidth * r.slideCount / 2 : !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (r.$list.width() - i.outerWidth()) / 2)), t
    }, a.prototype.getOption = a.prototype.slickGetOption = function (e) {
        return this.options[e]
    }, a.prototype.getNavigableIndexes = function () {
        var e, t = this,
            n = 0,
            i = 0,
            o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); n < e;) o.push(n), n = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, a.prototype.getSlick = function () {
        return this
    }, a.prototype.getSlideCount = function () {
        var o, r, e, s = this;
        return e = !0 === s.options.centerMode ? Math.floor(s.$list.width() / 2) : 0, r = -1 * s.swipeLeft + e, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function (e, t) {
            var n, i;
            if (n = u(t).outerWidth(), i = t.offsetLeft, !0 !== s.options.centerMode && (i += n / 2), r < i + n) return o = t, !1
        }), Math.abs(u(o).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }, a.prototype.goTo = a.prototype.slickGoTo = function (e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, a.prototype.init = function (e) {
        var t = this;
        u(t.$slider).hasClass("slick-initialized") || (u(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, a.prototype.initADA = function () {
        var i = this,
            n = Math.ceil(i.slideCount / i.options.slidesToShow),
            o = i.getNavigableIndexes().filter(function (e) {
                return 0 <= e && e < i.slideCount
            });
        i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== i.$dots && (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function (e) {
            var t = o.indexOf(e);
            if (u(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + i.instanceUid + e,
                    tabindex: -1
                }), -1 !== t) {
                var n = "slick-slide-control" + i.instanceUid + t;
                u("#" + n).length && u(this).attr({
                    "aria-describedby": n
                })
            }
        }), i.$dots.attr("role", "tablist").find("li").each(function (e) {
            var t = o[e];
            u(this).attr({
                role: "presentation"
            }), u(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + i.instanceUid + e,
                "aria-controls": "slick-slide" + i.instanceUid + t,
                "aria-label": e + 1 + " of " + n,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(i.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var e = i.currentSlide, t = e + i.options.slidesToShow; e < t; e++) i.options.focusOnChange ? i.$slides.eq(e).attr({
            tabindex: "0"
        }) : i.$slides.eq(e).removeAttr("tabindex");
        i.activateADA()
    }, a.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, a.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (u("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && e.slideCount > e.options.slidesToShow && u("li", e.$dots).on("mouseenter.slick", u.proxy(e.interrupt, e, !0)).on("mouseleave.slick", u.proxy(e.interrupt, e, !1))
    }, a.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", u.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", u.proxy(e.interrupt, e, !1)))
    }, a.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), u(document).on(e.visibilityChange, u.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && u(e.$slideTrack).children().on("click.slick", e.selectHandler), u(window).on("orientationchange.slick.slick-" + e.instanceUid, u.proxy(e.orientationChange, e)), u(window).on("resize.slick.slick-" + e.instanceUid, u.proxy(e.resize, e)), u("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), u(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), u(e.setPosition)
    }, a.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, a.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, a.prototype.lazyLoad = function () {
        function e(e) {
            u("img[data-lazy]", e).each(function () {
                var e = u(this),
                    t = u(this).attr("data-lazy"),
                    n = u(this).attr("data-srcset"),
                    i = u(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                    o = document.createElement("img");
                o.onload = function () {
                    e.animate({
                        opacity: 0
                    }, 100, function () {
                        n && (e.attr("srcset", n), i && e.attr("sizes", i)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), r.$slider.trigger("lazyLoaded", [r, e, t])
                    })
                }, o.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t])
                }, o.src = t
            })
        }
        var t, n, i, r = this;
        if (!0 === r.options.centerMode ? !0 === r.options.infinite ? i = (n = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (n = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), i = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (n = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, i = Math.ceil(n + r.options.slidesToShow), !0 === r.options.fade && (0 < n && n--, i <= r.slideCount && i++)), t = r.$slider.find(".slick-slide").slice(n, i), "anticipated" === r.options.lazyLoad)
            for (var o = n - 1, s = i, a = r.$slider.find(".slick-slide"), l = 0; l < r.options.slidesToScroll; l++) o < 0 && (o = r.slideCount - 1), t = (t = t.add(a.eq(o))).add(a.eq(s)), o--, s++;
        e(t), r.slideCount <= r.options.slidesToShow ? e(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? e(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && e(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
    }, a.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, a.prototype.next = a.prototype.slickNext = function () {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, a.prototype.orientationChange = function () {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, a.prototype.pause = a.prototype.slickPause = function () {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, a.prototype.play = a.prototype.slickPlay = function () {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, a.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && u(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, a.prototype.prev = a.prototype.slickPrev = function () {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, a.prototype.preventDefault = function (e) {
        e.preventDefault()
    }, a.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var t, n, i, o, r, s = this,
            a = u("img[data-lazy]", s.$slider);
        a.length ? (t = a.first(), n = t.attr("data-lazy"), i = t.attr("data-srcset"), o = t.attr("data-sizes") || s.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
            i && (t.attr("srcset", i), o && t.attr("sizes", o)), t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, t, n]), s.progressiveLazyLoad()
        }, r.onerror = function () {
            e < 3 ? setTimeout(function () {
                s.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n]), s.progressiveLazyLoad())
        }, r.src = n) : s.$slider.trigger("allImagesLoaded", [s])
    }, a.prototype.refresh = function (e) {
        var t, n, i = this;
        n = i.slideCount - i.options.slidesToShow, !i.options.infinite && i.currentSlide > n && (i.currentSlide = n), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), t = i.currentSlide, i.destroy(!0), u.extend(i, i.initials, {
            currentSlide: t
        }), i.init(), e || i.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, a.prototype.registerBreakpoints = function () {
        var e, t, n, i = this,
            o = i.options.responsive || null;
        if ("array" === u.type(o) && o.length) {
            for (e in i.respondTo = i.options.respondTo || "window", o)
                if (n = i.breakpoints.length - 1, o.hasOwnProperty(e)) {
                    for (t = o[e].breakpoint; 0 <= n;) i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1), n--;
                    i.breakpoints.push(t), i.breakpointSettings[t] = o[e].settings
                } i.breakpoints.sort(function (e, t) {
                return i.options.mobileFirst ? e - t : t - e
            })
        }
    }, a.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && u(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, a.prototype.resize = function () {
        var e = this;
        u(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = u(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, a.prototype.removeSlide = a.prototype.slickRemove = function (e, t, n) {
        var i = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : i.slideCount - 1 : !0 === t ? --e : e, i.slideCount < 1 || e < 0 || e > i.slideCount - 1) return !1;
        i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, i.reinit()
    }, a.prototype.setCSS = function (e) {
        var t, n, i = this,
            o = {};
        !0 === i.options.rtl && (e = -e), t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px", o[i.positionProp] = e, !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? o[i.animType] = "translate(" + t + ", " + n + ")" : o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)"), i.$slideTrack.css(o)
    }, a.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, a.prototype.setFade = function () {
        var n, i = this;
        i.$slides.each(function (e, t) {
            n = i.slideWidth * e * -1, !0 === i.options.rtl ? u(t).css({
                position: "relative",
                right: n,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : u(t).css({
                position: "relative",
                left: n,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, a.prototype.setHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, a.prototype.setOption = a.prototype.slickSetOption = function (e, t, n) {
        var i, o, r, s, a, l = this,
            d = !1;
        if ("object" === u.type(e) ? (r = arguments[0], d = t, a = "multiple") : "string" === u.type(arguments[0]) && (r = arguments[0], s = arguments[1], d = n, "responsive" === arguments[0] && "array" === u.type(arguments[1]) ? a = "responsive" : "undefined" != typeof arguments[1] && (a = "single")), "single" === a) l.options[r] = s;
        else if ("multiple" === a) u.each(r, function (e, t) {
            l.options[e] = t
        });
        else if ("responsive" === a)
            for (o in s)
                if ("array" !== u.type(l.options.responsive)) l.options.responsive = [s[o]];
                else {
                    for (i = l.options.responsive.length - 1; 0 <= i;) l.options.responsive[i].breakpoint === s[o].breakpoint && l.options.responsive.splice(i, 1), i--;
                    l.options.responsive.push(s[o])
                } d && (l.unload(), l.reinit())
    }, a.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, a.prototype.setProps = function () {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), t.WebkitTransition === undefined && t.MozTransition === undefined && t.msTransition === undefined || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), t.OTransform !== undefined && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", t.perspectiveProperty === undefined && t.webkitPerspective === undefined && (e.animType = !1)), t.MozTransform !== undefined && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", t.perspectiveProperty === undefined && t.MozPerspective === undefined && (e.animType = !1)), t.webkitTransform !== undefined && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", t.perspectiveProperty === undefined && t.webkitPerspective === undefined && (e.animType = !1)), t.msTransform !== undefined && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", t.msTransform === undefined && (e.animType = !1)), t.transform !== undefined && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, a.prototype.setSlideClasses = function (e) {
        var t, n, i, o, r = this;
        if (n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode) {
            var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t <= e && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t + s, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1 + s, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")
        } else 0 <= e && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad || r.lazyLoad()
    }, a.prototype.setupInfinite = function () {
        var e, t, n, i = this;
        if (!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && (t = null, i.slideCount > i.options.slidesToShow)) {
            for (
                n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, e = i.slideCount; e > i.slideCount - n; e -= 1) t = e - 1, u(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < n + i.slideCount; e += 1) t = e, u(i.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");
            i.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                u(this).attr("id", "")
            })
        }
    }, a.prototype.interrupt = function (e) {
        var t = this;
        e || t.autoPlay(), t.interrupted = e
    }, a.prototype.selectHandler = function (e) {
        var t = this,
            n = u(e.target).is(".slick-slide") ? u(e.target) : u(e.target).parents(".slick-slide"),
            i = parseInt(n.attr("data-slick-index"));
        i || (i = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(i, !1, !0) : t.slideHandler(i)
    }, a.prototype.slideHandler = function (e, t, n) {
        var i, o, r, s, a, l = null,
            d = this;
        if (t = t || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e))
            if (!1 === t && d.asNavFor(e), i = e, l = d.getLeft(i), s = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? s : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (i = d.currentSlide, !0 !== n && d.slideCount > d.options.slidesToShow ? d.animateSlide(s, function () {
                d.postSlide(i)
            }) : d.postSlide(i));
            else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (i = d.currentSlide, !0 !== n && d.slideCount > d.options.slidesToShow ? d.animateSlide(s, function () {
            d.postSlide(i)
        }) : d.postSlide(i));
        else {
            if (d.options.autoplay && clearInterval(d.autoPlayTimer), o = i < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + i : i >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : i - d.slideCount : i, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, o]), r = d.currentSlide, d.currentSlide = o, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = (a = d.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== n ? (d.fadeSlideOut(r), d.fadeSlide(o, function () {
                d.postSlide(o)
            })) : d.postSlide(o), void d.animateHeight();
            !0 !== n && d.slideCount > d.options.slidesToShow ? d.animateSlide(l, function () {
                d.postSlide(o)
            }) : d.postSlide(o)
        }
    }, a.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, a.prototype.swipeDirection = function () {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(t, e), (i = Math.round(180 * n / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && 0 <= i ? !1 === o.options.rtl ? "left" : "right" : i <= 360 && 315 <= i ? !1 === o.options.rtl ? "left" : "right" : 135 <= i && i <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= i && i <= 135 ? "down" : "up" : "vertical"
    }, a.prototype.swipeEnd = function () {
        var e, t, n = this;
        if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1;
        if (n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), n.touchObject.curX === undefined) return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (t = n.swipeDirection()) {
                case "left":
                case "down":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != t && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, t]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, a.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && e.originalEvent.touches !== undefined ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, a.prototype.swipeMove = function (e) {
        var t, n, i, o, r, s, a = this;
        return r = e.originalEvent !== undefined ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || r && 1 !== r.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = r !== undefined ? r[0].pageX : e.clientX, a.touchObject.curY = r !== undefined ? r[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < s ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s), n = a.swipeDirection(), e.originalEvent !== undefined && 4 < a.touchObject.swipeLength && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), i = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === n || a.currentSlide >= a.getDotCount() && "left" === n) && (i = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + i * o : a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, a.prototype.swipeStart = function (e) {
        var t, n = this;
        if (n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow) return !(n.touchObject = {});
        e.originalEvent !== undefined && e.originalEvent.touches !== undefined && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = t !== undefined ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = t !== undefined ? t.pageY : e.clientY, n.dragging = !0
    }, a.prototype.unfilterSlides = a.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, a.prototype.unload = function () {
        var e = this;
        u(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, a.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, a.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, a.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, a.prototype.visibility = function () {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, u.fn.slick = function (e) {
        var t, n, i = this,
            o = e,
            r = Array.prototype.slice.call(arguments, 1),
            s = i.length;
        for (t = 0; t < s; t++)
            if ("object" == typeof o || void 0 === o ? i[t].slick = new a(i[t], o) : n = i[t].slick[o].apply(i[t].slick, r), void 0 !== n) return n;
        return i
    }
}), void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0),
    function (d, n, u) {
        function c(e) {
            var t = n.console;
            i[e] || (i[e] = !0, d.migrateWarnings.push(e), t && t.warn && !d.migrateMute && (t.warn("JQMIGRATE: " + e), d.migrateTrace && t.trace && t.trace()))
        }

        function e(e, t, n, i) {
            if (Object.defineProperty) try {
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return c(i), n
                    },
                    set: function (e) {
                        c(i), n = e
                    }
                }), u
            } catch (a) {}
            d._definePropertyBroken = !0, e[t] = n
        }
        var i = {};
        d.migrateWarnings = [], !d.migrateMute && n.console && n.console.log && n.console.log("JQMIGRATE: Logging is active"), d.migrateTrace === u && (d.migrateTrace = !0), d.migrateReset = function () {
            i = {}, d.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && c("jQuery is not compatible with Quirks Mode");
        var s = d("<input/>", {
                size: 1
            }).attr("size") && d.attrFn,
            a = d.attr,
            o = d.attrHooks.value && d.attrHooks.value.get || function () {
                return null
            },
            r = d.attrHooks.value && d.attrHooks.value.set || function () {
                return u
            },
            l = /^(?:input|button)$/i,
            p = /^[238]$/,
            f = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            h = /^(?:checked|selected)$/i;
        e(d, "attrFn", s || {}, "jQuery.attrFn is deprecated"), d.attr = function (e, t, n, i) {
            var o = t.toLowerCase(),
                r = e && e.nodeType;
            return i && (a.length < 4 && c("jQuery.fn.attr( props, pass ) is deprecated"), e && !p.test(r) && (s ? t in s : d.isFunction(d.fn[t]))) ? d(e)[t](n) : ("type" === t && n !== u && l.test(e.nodeName) && e.parentNode && c("Can't change the 'type' of an input or button in IE 6/7/8"), !d.attrHooks[o] && f.test(o) && (d.attrHooks[o] = {
                get: function (e, t) {
                    var n, i = d.prop(e, t);
                    return !0 === i || "boolean" != typeof i && (n = e.getAttributeNode(t)) && !1 !== n.nodeValue ? t.toLowerCase() : u
                },
                set: function (e, t, n) {
                    var i;
                    return !1 === t ? d.removeAttr(e, n) : ((i = d.propFix[n] || n) in e && (e[i] = !0), e.setAttribute(n, n.toLowerCase())), n
                }
            }, h.test(o) && c("jQuery.fn.attr('" + o + "') may use property instead of attribute")), a.call(d, e, t, n))
        }, d.attrHooks.value = {
            get: function (e, t) {
                var n = (e.nodeName || "").toLowerCase();
                return "button" === n ? o.apply(this, arguments) : ("input" !== n && "option" !== n && c("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
            },
            set: function (e, t) {
                var n = (e.nodeName || "").toLowerCase();
                return "button" === n ? r.apply(this, arguments) : ("input" !== n && "option" !== n && c("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, u)
            }
        };
        var t, g, m = d.fn.init,
            y = d.parseJSON,
            v = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        d.fn.init = function (e, t, n) {
            var i;
            return e && "string" == typeof e && !d.isPlainObject(t) && (i = v.exec(d.trim(e))) && i[0] && ("<" !== e.charAt(0) && c("$(html) HTML strings must start with '<' character"), i[3] && c("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (c("HTML string cannot start with a '#' character"), d.error("JQMIGRATE: Invalid selector string (XSS)")), t && t.context && (t = t.context), d.parseHTML) ? m.call(this, d.parseHTML(i[2], t, !0), t, n) : m.apply(this, arguments)
        }, d.fn.init.prototype = d.fn, d.parseJSON = function (e) {
            return e || null === e ? y.apply(this, arguments) : (c("jQuery.parseJSON requires a valid JSON string"), null)
        }, d.uaMatch = function (e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {
                browser: t[1] || "",
                version: t[2] || "0"
            }
        }, d.browser || (g = {}, (t = d.uaMatch(navigator.userAgent)).browser && (g[t.browser] = !0, g.version = t.version), g.chrome ? g.webkit = !0 : g.webkit && (g.safari = !0), d.browser = g), e(d, "browser", d.browser, "jQuery.browser is deprecated"), d.sub = function () {
            function n(e, t) {
                return new n.fn.init(e, t)
            }
            d.extend(!0, n, this), n.superclass = this, n.fn = n.prototype = this(), (n.fn.constructor = n).sub = this.sub, n.fn.init = function (e, t) {
                return t && t instanceof d && !(t instanceof n) && (t = n(t)), d.fn.init.call(this, e, t, i)
            }, n.fn.init.prototype = n.fn;
            var i = n(document);
            return c("jQuery.sub() is deprecated"), n
        }, d.ajaxSetup({
            converters: {
                "text json": d.parseJSON
            }
        });
        var b = d.fn.data;
        d.fn.data = function (e) {
            var t, n, i = this[0];
            return !i || "events" !== e || 1 !== arguments.length || (t = d.data(i, e), n = d._data(i, e), t !== u && t !== n || n === u) ? b.apply(this, arguments) : (c("Use of jQuery.fn.data('events') is deprecated"), n)
        };
        var w = /\/(java|ecma)script/i,
            x = d.fn.andSelf || d.fn.addBack;
        d.fn.andSelf = function () {
            return c("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), x.apply(this, arguments)
        }, d.clean || (d.clean = function (e, t, n, i) {
            t = (t = !(t = t || document).nodeType && t[0] || t).ownerDocument || t, c("jQuery.clean() is deprecated");
            var o, r, s, a, l = [];
            if (d.merge(l, d.buildFragment(e, t).childNodes), n)
                for (s = function (e) {
                        return !e.type || w.test(e.type) ? i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : u
                    }, o = 0; null != (r = l[o]); o++) d.nodeName(r, "script") && s(r) || (n.appendChild(r), r.getElementsByTagName !== u && (a = d.grep(d.merge([], r.getElementsByTagName("script")), s), l.splice.apply(l, [o + 1, 0].concat(a)), o += a.length));
            return l
        });
        var k = d.event.add,
            T = d.event.remove,
            S = d.event.trigger,
            C = d.fn.toggle,
            $ = d.fn.live,
            j = d.fn.die,
            E = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            A = RegExp("\\b(?:" + E + ")\\b"),
            D = /(?:^|\s)hover(\.\S+|)\b/,
            N = function (e) {
                return "string" != typeof e || d.event.special.hover ? e : (D.test(e) && c("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), e && e.replace(D, "mouseenter$1 mouseleave$1"))
            };
        d.event.props && "attrChange" !== d.event.props[0] && d.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), d.event.dispatch && e(d.event, "handle", d.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), d.event.add = function (e, t, n, i, o) {
            e !== document && A.test(t) && c("AJAX events should be attached to document: " + t), k.call(this, e, N(t || ""), n, i, o)
        }, d.event.remove = function (e, t, n, i, o) {
            T.call(this, e, N(t) || "", n, i, o)
        }, d.fn.error = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return c("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
        }, d.fn.toggle = function (n, e) {
            if (!d.isFunction(n) || !d.isFunction(e)) return C.apply(this, arguments);
            c("jQuery.fn.toggle(handler, handler...) is deprecated");
            var i = arguments,
                t = n.guid || d.guid++,
                o = 0,
                r = function (e) {
                    var t = (d._data(this, "lastToggle" + n.guid) || 0) % o;
                    return d._data(this, "lastToggle" + n.guid, t + 1), e.preventDefault(), i[t].apply(this, arguments) || !1
                };
            for (r.guid = t; i.length > o;) i[o++].guid = t;
            return this.click(r)
        }, d.fn.live = function (e, t, n) {
            return c("jQuery.fn.live() is deprecated"), $ ? $.apply(this, arguments) : (d(this.context).on(e, this.selector, t, n), this)
        }, d.fn.die = function (e, t) {
            return c("jQuery.fn.die() is deprecated"), j ? j.apply(this, arguments) : (d(this.context).off(e, this.selector || "**", t), this)
        }, d.event.trigger = function (e, t, n, i) {
            return n || A.test(e) || c("Global events are undocumented and deprecated"), S.call(this, e, t, n || document, i)
        }, d.each(E.split("|"), function (e, t) {
            d.event.special[t] = {
                setup: function () {
                    var e = this;
                    return e !== document && (d.event.add(document, t + "." + d.guid, function () {
                        d.event.trigger(t, null, e, !0)
                    }), d._data(this, t, d.guid++)), !1
                },
                teardown: function () {
                    return this !== document && d.event.remove(document, t + "." + d._data(this, t)), !1
                }
            }
        })
    }(jQuery, window);