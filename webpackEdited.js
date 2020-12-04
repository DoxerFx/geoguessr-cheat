(window.webpackJsonp = window.webpackJsonp || []).push([
    [19], {
        "/DZ+": function (e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+"
        },
        "1IZj": function (e, t, n) {},
        "1OyB": function (e, t, n) {
            "use strict";

            function o(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, "a", (function () {
                return o
            }))
        },
        "336V": function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return f
            }));
            var o = n("1OyB"),
                a = n("vuIU"),
                i = n("JX7q"),
                r = n("Ji7U"),
                c = n("md7G"),
                u = n("foSv"),
                s = n("rePB"),
                l = n("FdF9"),
                d = n("mk4Z");

            function f(e) {
                var t = e.map,
                    n = e.lat,
                    f = e.lng,
                    m = e.children,
                    g = Object(d.a)(),
                    b = function (e) {
                        var t = Object(d.a)(),
                            n = Object(l.useState)(),
                            f = n[0],
                            m = n[1];
                        return Object(l.useEffect)((function () {
                                if (e && t) {
                                    var n = function (e) {
                                        return new(function (e) {
                                            Object(r.a)(n, e);
                                            var t = function (e) {
                                                function t() {
                                                    if ("undefined" === typeof Reflect || !Reflect.construct)
                                                        return !1;
                                                    if (Reflect.construct.sham)
                                                        return !1;
                                                    if ("function" === typeof Proxy)
                                                        return !0;
                                                    try {
                                                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))),
                                                            !0
                                                    } catch (e) {
                                                        return !1
                                                    }
                                                }
                                                return function () {
                                                    var n, o = Object(u.a)(e);
                                                    if (t()) {
                                                        var a = Object(u.a)(this).constructor;
                                                        n = Reflect.construct(o, arguments, a)
                                                    } else
                                                        n = o.apply(this, arguments);
                                                    return Object(c.a)(this, n)
                                                }
                                            }(n);

                                            function n() {
                                                var e;
                                                return Object(o.a)(this, n),
                                                    e = t.call(this),
                                                    Object(s.a)(Object(i.a)(e), "div", void 0),
                                                    Object(s.a)(Object(i.a)(e), "hasAppendedDiv", void 0),
                                                    Object(s.a)(Object(i.a)(e), "position", void 0),
                                                    e.div = document.createElement("div"),
                                                    e.div.style.position = "absolute",
                                                    e.hasAppendedDiv = !1,
                                                    e
                                            }
                                            return Object(a.a)(n, [{
                                                    key: "draw",
                                                    value: function () {
                                                        var e = this.getPanes();
                                                        if (e && !1 === this.hasAppendedDiv && (e.overlayLayer.appendChild(this.div),
                                                                e.overlayMouseTarget.appendChild(this.div),
                                                                this.hasAppendedDiv = !0),
                                                            this.position && this.getProjection()) {
                                                            var t = this.getProjection().fromLatLngToDivPixel(this.position);
                                                            t && (this.div.style.left = "".concat(t.x, "px"),
                                                                this.div.style.top = "".concat(t.y, "px"))
                                                        }
                                                    }
                                                }, {
                                                    key: "remove",
                                                    value: function () {
                                                        this.setMap(null),
                                                            this.hasAppendedDiv && this.div.parentNode && (l.default.unmountComponentAtNode(this.div),
                                                                this.div.parentNode.removeChild(this.div))
                                                    }
                                                }, {
                                                    key: "setPosition",
                                                    value: function (e) {
                                                        this.position = e,
                                                            this.draw()
                                                    }
                                                }, {
                                                    key: "getDomNode",
                                                    value: function () {
                                                        return this.div
                                                    }
                                                }]),
                                                n
                                        }(e.OverlayView))
                                    }(t);
                                    n.setMap(e),
                                        m(n)
                                }
                            }), [e, t]),
                            f
                    }(t);
                return Object(l.useEffect)((function () {
                        b && g && b.setPosition(new g.LatLng(n, f))
                    }), [b, g, n, f]),
                    b ? l.default.createPortal(m, b.getDomNode()) : null
            }
        },
        "7ijV": function (e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48cGF0aCBkPSJNNDYyIDI1Ni4wMDFMMzA3LjQzIDEwMS42OTN2MTE4LjMwMkg1MHY3Mi4wMWgyNTcuNDN2MTE4LjMwMnoiLz48L3N2Zz4="
        },
        "7oRp": function (e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+"
        },
        AFQi: function (e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik01IDE2aDN2M2gydi01SDV2MnptMy04SDV2Mmg1VjVIOHYzem02IDExaDJ2LTNoM3YtMmgtNXY1em0yLTExVjVoLTJ2NWg1VjhoLTN6IiBmaWxsPSIjRkZGIi8+PC9zdmc+"
        },
        B6Ce: function (e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE5IDEzSDV2LTJoMTR2MnoiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+"
        },
        DR8D: function (e, t, n) {},
        GpYj: function (e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE0IDZsLTEtMkg1djE3aDJ2LTdoNWwxIDJoN1Y2aC02em00IDhoLTRsLTEtMkg3VjZoNWwxIDJoNXY2eiIgZmlsbD0iI0ZGRiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz4="
        },
        HNYC: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                    return f
                })),
                n.d(t, "b", (function () {
                    return g
                }));
            var o = n("ODXe"),
                a = n("FdF9"),
                i = (n("jL38"),
                    n("JkVI")),
                r = n("bSLQ"),
                c = n("336V"),
                u = n("1dkv"),
                s = n("IAlb"),
                l = n("NVRb"),
                d = a.default.createElement;

            function f(e) {
                var t = e.guesses,
                    n = e.showRoundNumber,
                    f = void 0 !== n && n,
                    m = e.rounds,
                    b = e.linkCorrectAnswerToStreetView,
                    v = Object(a.useRef)(t),
                    p = Object(a.useRef)(m),
                    y = Object(i.a)({}, (function (e, t) {
                        var n = new t.LatLngBounds;
                        p.current.forEach((function (e) {
                                n.extend(e)
                            })),
                            v.current.forEach((function (e) {
                                e.coordinate && n.extend(e.coordinate)
                            })),
                            e.fitBounds(n)
                    })),
                    h = Object(o.a)(y, 2),
                    j = h[0],
                    I = h[1];
                return d(a.default.Fragment, null, d("div", {
                    className: "result-map__map",
                    ref: j
                }), t.map((function (e, t) {
                    var n = e.coordinate,
                        o = e.roundNumber;
                    return d(a.default.Fragment, {
                        key: "line-".concat(t)
                    }, n && d(r.a, {
                        from: m[o - 1],
                        to: n,
                        map: I,
                        key: t
                    }, d("div", {
                        className: "result-map__line"
                    })))
                })), t.filter((function (e) {
                    return !!e.coordinate
                })).map((function (e, t) {
                    var n = e.coordinate,
                        o = e.playerUserId,
                        a = e.playerPin,
                        i = e.qa;
                    return d(c.a, {
                        lat: n.lat,
                        lng: n.lng,
                        map: I,
                        key: "guess-".concat(t)
                    }, d(u.c, {
                        qa: i
                    }, d(l.a, {
                        anchor: "center-center",
                        imagePath: a,
                        borderColor: !a && o ? g(o) : "white"
                    })))
                })), m.map((function (e, t) {
                    return d(c.a, {
                        lat: e.lat,
                        lng: e.lng,
                        map: I,
                        key: "round-".concat(t)
                    }, d(u.c, {
                        qa: "correct-location-marker",
                        label: !0 === f ? t + 1 : !1 !== f ? f : null,
                        onClick: b ? function () {
                                return function (e) {
                                    window.open(s.a.streetview(e.lat, e.lng), "_blank")
                                }(e)
                            } :
                            void 0
                    }, d(u.a, null)))
                })))
            }
            var m = ["orange", "blue", "pink", "purple", "green", "cyan", "brown"];

            function g(e) {
                if (!e)
                    return "white";
                for (var t = 0, n = 0; n < e.length; n++)
                    t = (t + e.charCodeAt(n)) % m.length;
                return m[t]
            }
        },
        IutD: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return u
            }));
            var o = n("FdF9"),
                a = (n("ibcg"),
                    n("rP5m")),
                i = n.n(a),
                r = n("Waax"),
                c = o.default.createElement;

            function u(e) {
                var t = e.heading,
                    n = e.onChange,
                    a = void 0 === n ? function () {} :
                    n,
                    u = e.qa,
                    s = void 0 === u ? void 0 : u,
                    l = Object(r.a)(),
                    d = Object(o.useRef)(null),
                    f = Object(o.useCallback)(a, []),
                    m = Object(o.useCallback)((function (e) {
                        if (d.current) {
                            var t = d.current.getBoundingClientRect(),
                                n = function (e) {
                                    var t = e.cursorX,
                                        n = e.cursorY,
                                        o = e.compassX,
                                        a = e.compassY,
                                        i = e.compassWidth,
                                        r = e.compassHeight,
                                        c = {
                                            x: t - o - i / 2,
                                            y: r / 2 - (n - a)
                                        },
                                        u = {
                                            x: 0,
                                            y: 1
                                        },
                                        s = c.x * u.x + c.y * u.y,
                                        l = Math.sqrt(Math.pow(c.x, 2) + Math.pow(c.y, 2)),
                                        d = Math.acos(s / l);
                                    c.x < 0 && (d = 2 * Math.PI - d);
                                    return -180 * d / Math.PI
                                }({
                                    compassWidth: t.width,
                                    compassHeight: t.height,
                                    compassX: t.x,
                                    compassY: t.y,
                                    cursorX: e.clientX,
                                    cursorY: e.clientY
                                });
                            f(n)
                        }
                    }), [f, d]),
                    g = Object(o.useCallback)((function () {
                        document.removeEventListener("mousemove", m),
                            document.removeEventListener("mouseup", g)
                    }), [m]);
                Object(o.useEffect)((function () {
                    return function () {
                        document.removeEventListener("mousemove", m),
                            document.removeEventListener("mouseup", g)
                    }
                }), [m, g]);
                var b = -t;
                return c("button", {
                    className: "compass",
                    onMouseDown: function (e) {
                        m(e),
                            document.addEventListener("mousemove", m),
                            document.addEventListener("mouseup", g)
                    },
                    ref: d,
                    title: "Compass",
                    "data-qa": s
                }, c("div", {
                    className: "compass__circle"
                }), c("img", {
                    "data-testid": "compass",
                    className: "compass__indicator",
                    src: i.a,
                    alt: l("components.compass"),
                    draggable: !1,
                    style: {
                        transform: "rotate(".concat(b, "deg)")
                    }
                }))
            }
        },
        IxNk: function (e, t, n) {
            "use strict";
            var o = n("HNYC");
            n.d(t, "b", (function () {
                return o.a
            }));
            var a = n("336V");
            n.d(t, "a", (function () {
                return a.a
            }));
            n("bSLQ")
        },
        JBaI: function (e, t, n) {
            "use strict";

            function o(e) {
                for (var t = new Array(e.length / 2), n = 0; n < e.length / 2; n++)
                    t[n] = String.fromCharCode(parseInt(e[2 * n] + e[2 * n + 1], 16));
                return t.join("")
            }
            n.d(t, "a", (function () {
                return o
            }))
        },
        JX7q: function (e, t, n) {
            "use strict";

            function o(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, "a", (function () {
                return o
            }))
        },
        Ji7U: function (e, t, n) {
            "use strict";

            function o(e, t) {
                return (o = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t,
                        e
                })(e, t)
            }

            function a(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                    t && o(e, t)
            }
            n.d(t, "a", (function () {
                return a
            }))
        },
        JjVd: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return i
            }));
            var o = n("FdF9"),
                a = (n("DR8D"),
                    o.default.createElement);

            function i(e) {
                var t = e.children,
                    n = e.label,
                    i = Object(o.useState)(!1),
                    r = i[0],
                    c = i[1];
                return a("div", {
                    className: "tooltip",
                    onMouseEnter: function () {
                        return c(!0)
                    },
                    onMouseLeave: function () {
                        return c(!1)
                    }
                }, a("div", {
                    className: "tooltip__label ".concat(r ? "tooltip__label--visible" : "")
                }, n), t)
            }
        },
        KOaM: function (e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB3aWR0aD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIyIDExLjk5NlYyYzAtMS4xLS45LTItMi0yaC04Yy0xLjEgMC0yIC45LTIgMnY5Ljk5NkM3LjM4NiAxMy45MjMgNiAxNi43MyA2IDE4YzAgMS4yMTkgMS4wMTYgMiAyIDJoNnYxMGEyIDIgMCAwMDQgMFYyMGg2Yy45ODQgMCAyLS43ODEgMi0yIDAtMS4yNy0xLjM4Ni00LjA3Ny00LTYuMDA0ek0xMS41IDE2Yy40NTgtLjUyMSAxLjU0MS0xLjI5MiAyLjUtMlY0aDR2MTBjLjk1OS43MDggMi4wNDIgMS40NzkgMi41IDJoLTl6Ii8+PC9zdmc+"
        },
        O6Ic: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                    return i
                })),
                n.d(t, "b", (function () {
                    return r
                }));
            var o = n("FdF9"),
                a = (n("1IZj"),
                    o.default.createElement);

            function i(e) {
                var t = e.children,
                    n = e.onClick,
                    o = void 0 === n ? function () {} :
                    n,
                    i = e.qa;
                return a("button", {
                    className: "hud-button",
                    onClick: o,
                    "data-qa": void 0 === i ? void 0 : i
                }, t)
            }

            function r(e) {
                var t = e.children;
                return a("div", {
                    className: "hud-button-group"
                }, t)
            }
        },
        Qf9P: function (e, t, n) {},
        RYCg: function (e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMnoiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+"
        },
        S2e8: function (e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik03IDE0SDV2NWg1di0ySDd2LTN6bS0yLTRoMlY3aDNWNUg1djV6bTEyIDdoLTN2Mmg1di01aC0ydjN6TTE0IDV2MmgzdjNoMlY1aC01eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="
        },
        VkRH: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return i
            }));
            var o = n("FdF9"),
                a = n("Uqnf");

            function i(e, t) {
                var n = Object(o.useState)(function (e, t) {
                        try {
                            var n = window.localStorage.getItem(e);
                            if (null !== n)
                                return JSON.parse(n)
                        } catch (o) {}
                        return t
                    }(e, t)),
                    i = n[0],
                    r = n[1],
                    c = Object(a.a)(e);
                return Object(o.useEffect)((function () {
                        if (c !== e)
                            try {
                                var t = window.localStorage.getItem(e);
                                null !== t && r(JSON.parse(t))
                            } catch (n) {
                                console.log(n)
                            }
                    }), [e, c]),
                    [i, Object(o.useCallback)((function (t) {
                        try {
                            r((function (n) {
                                var o = "function" === typeof t ? t(n) : t;
                                return window.localStorage.setItem(e, JSON.stringify(o)),
                                    o
                            }))
                        } catch (n) {
                            console.log(n)
                        }
                    }), [e])]
            }
        },
        bD3k: function (e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE5IDEzSDV2LTJoMTR2MnoiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+"
        },
        bSLQ: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return f
            }));
            var o = n("1OyB"),
                a = n("vuIU"),
                i = n("JX7q"),
                r = n("Ji7U"),
                c = n("md7G"),
                u = n("foSv"),
                s = n("rePB"),
                l = n("FdF9"),
                d = n("mk4Z");

            function f(e) {
                var t = e.map,
                    n = e.from,
                    f = e.to,
                    m = e.children,
                    g = Object(d.a)(),
                    b = function (e) {
                        var t = Object(d.a)(),
                            n = Object(l.useState)(),
                            f = n[0],
                            m = n[1];
                        return Object(l.useEffect)((function () {
                                if (e && t) {
                                    var n = function (e) {
                                        return new(function (e) {
                                            Object(r.a)(n, e);
                                            var t = function (e) {
                                                function t() {
                                                    if ("undefined" === typeof Reflect || !Reflect.construct)
                                                        return !1;
                                                    if (Reflect.construct.sham)
                                                        return !1;
                                                    if ("function" === typeof Proxy)
                                                        return !0;
                                                    try {
                                                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))),
                                                            !0
                                                    } catch (e) {
                                                        return !1
                                                    }
                                                }
                                                return function () {
                                                    var n, o = Object(u.a)(e);
                                                    if (t()) {
                                                        var a = Object(u.a)(this).constructor;
                                                        n = Reflect.construct(o, arguments, a)
                                                    } else
                                                        n = o.apply(this, arguments);
                                                    return Object(c.a)(this, n)
                                                }
                                            }(n);

                                            function n() {
                                                var e;
                                                return Object(o.a)(this, n),
                                                    e = t.call(this),
                                                    Object(s.a)(Object(i.a)(e), "div", void 0),
                                                    Object(s.a)(Object(i.a)(e), "hasAppendedDiv", void 0),
                                                    Object(s.a)(Object(i.a)(e), "from", void 0),
                                                    Object(s.a)(Object(i.a)(e), "to", void 0),
                                                    e.div = document.createElement("div"),
                                                    e.div.style.position = "absolute",
                                                    e.hasAppendedDiv = !1,
                                                    e
                                            }
                                            return Object(a.a)(n, [{
                                                    key: "draw",
                                                    value: function () {
                                                        var e = this.getPanes();
                                                        if (e && !1 === this.hasAppendedDiv && (e.overlayLayer.appendChild(this.div),
                                                                this.hasAppendedDiv = !0),
                                                            this.from && this.to && this.getProjection()) {
                                                            var t = this.getProjection().fromLatLngToDivPixel(this.from),
                                                                n = this.getProjection().fromLatLngToDivPixel(this.to),
                                                                o = {
                                                                    x: 1,
                                                                    y: 0
                                                                },
                                                                a = {
                                                                    x: n.x - t.x,
                                                                    y: t.y - n.y
                                                                },
                                                                i = o.x * a.x + o.y * a.y,
                                                                r = Math.sqrt(Math.pow(a.x, 2) + Math.pow(a.y, 2)),
                                                                c = Math.acos(i / r);
                                                            n.y < t.y && (c *= -1),
                                                                this.div.style.left = "".concat(t.x, "px"),
                                                                this.div.style.top = "".concat(t.y, "px"),
                                                                this.div.style.width = "".concat(r, "px"),
                                                                this.div.style.transform = "rotate(".concat(c, "rad)"),
                                                                this.div.style.transformOrigin = "center left"
                                                        }
                                                    }
                                                }, {
                                                    key: "remove",
                                                    value: function () {
                                                        this.setMap(null),
                                                            this.hasAppendedDiv && this.div.parentNode && (l.default.unmountComponentAtNode(this.div),
                                                                this.div.parentNode.removeChild(this.div))
                                                    }
                                                }, {
                                                    key: "setPosition",
                                                    value: function (e, t) {
                                                        this.from = e,
                                                            this.to = t,
                                                            this.draw()
                                                    }
                                                }, {
                                                    key: "getDomNode",
                                                    value: function () {
                                                        return this.div
                                                    }
                                                }]),
                                                n
                                        }(e.OverlayView))
                                    }(t);
                                    n.setMap(e),
                                        m(n)
                                }
                            }), [e, t]),
                            f
                    }(t);
                return Object(l.useEffect)((function () {
                        b && g && b.setPosition(new g.LatLng(n.lat, n.lng), new g.LatLng(f.lat, f.lng))
                    }), [b, g, n.lat, n.lng, f.lat, f.lng]),
                    b ? l.default.createPortal(m, b.getDomNode()) : null
            }
        },
        bXPe: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return s
            }));
            var o = n("FdF9"),
                a = n("mk4Z"),
                i = n("FJ74"),
                r = void 0,
                c = void 0,
                u = {
                    addressControl: !1,
                    clickToGo: !0,
                    disableDefaultUI: !0,
                    disableDoubleClickZoom: !0,
                    linksControl: !0,
                    motionTracking: !1,
                    motionTrackingControl: !1,
                    showRoadLabels: !1,
                    styles: {
                        featureType: "poi",
                        elementType: "labels",
                        stylers: [{
                            visibility: "off"
                        }]
                    },
                    fullscreenControl: !1,
                    panControl: !1,
                    zoomControl: !1,
                    enableCloseButton: !1,
                    imageDateControl: !1,
                    scrollwheel: !0,
                    visible: !0,
                    zoom: 1
                };

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {},
                    n = Object(o.useRef)(e),
                    s = Object(a.a)(),
                    l = Object(i.a)().sendEvent,
                    d = Object(o.useState)(0),
                    f = d[0],
                    m = d[1],
                    g = Object(o.useState)(0),
                    b = g[0],
                    v = g[1],
                    p = Object(o.useCallback)(t, []),
                    y = Object(o.useState)(null),
                    h = y[0],
                    j = y[1],
                    I = Object(o.useCallback)((function (e) {
                        null !== e && j(e)
                    }), []);
                return Object(o.useEffect)((function () {
                        s && (r || (c || (c = document.createElement("div")),
                            l({
                                event: "init_panorama",
                                category: "game",
                                label: "google"
                            }),
                            r = new s.StreetViewPanorama(c),
                            m((function (e) {
                                return e + 1
                            }))))
                    }), [s, l]),
                    Object(o.useEffect)((function () {
                        r && h && c && (h.appendChild(c),
                            v((function (e) {
                                return e + 1
                            })))
                    }), [f, h]),
                    Object(o.useEffect)((function () {
                        if (r && s && b > 0) {
                            var e = Object.assign({}, u, n.current);
                            r.setOptions(e),
                                p(r, s)
                        }
                    }), [b, s, p, n]),
                    Object(o.useEffect)((function () {
                        if (r) {
                            var e = r.addListener("status_changed", (function () {
                                c && c.querySelectorAll('a[href*="google.com/maps"], a[href*="google.com/cbk"]').forEach((function (e) {
                                        e.parentNode && e.parentNode.removeChild(e)
                                    })),
                                    e && e.remove()
                            }));
                            return function () {
                                e && e.remove()
                            }
                        }
                    }), [f, b]),
                    [I, r]
            }
        },
        foSv: function (e, t, n) {
            "use strict";

            function o(e) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            n.d(t, "a", (function () {
                return o
            }))
        },
        ibcg: function (e, t, n) {},
        jL38: function (e, t, n) {},
        md7G: function (e, t, n) {
            "use strict";

            function o(e) {
                return (o = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
                        return typeof e
                    } :
                    function (e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                )(e)
            }
            n.d(t, "a", (function () {
                return i
            }));
            var a = n("JX7q");

            function i(e, t) {
                return !t || "object" !== o(t) && "function" !== typeof t ? Object(a.a)(e) : t
            }
        },
        oDgI: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return k
            }));
            var o = n("ODXe"),
                a = n("FdF9"),
                i = n("TSYQ"),
                r = n.n(i),
                c = n("JkVI"),
                u = n("uVtn"),
                s = n("7ijV"),
                l = n.n(s),
                d = n("KOaM"),
                f = n.n(d),
                m = n("RYCg"),
                g = n.n(m),
                b = n("/DZ+"),
                v = n.n(b),
                p = n("bD3k"),
                y = n.n(p),
                h = n("W5Sm"),
                j = (n("Qf9P"),
                    n("g/ic")),
                I = n("Waax"),
                O = n("1dkv"),
                M = n("IxNk"),
                P = a.default.createElement;

            function N(e) {
                var t = e.markerLocation,
                    n = e.onMarkerLocationChanged,
                    o = e.map,
                    i = e.mapRef,
                    r = Object(a.useCallback)(n, []);
                return Object(a.useEffect)((function () {
                        o && o.addListener("click", (function (e) {
                            r({
                                lat: e.latLng.lat(),
                                lng: e.latLng.lng()
                            })
                            console.log(o.map);
                        }))
                    }), [o, r]),
                    P(a.default.Fragment, null, P("div", {
                        className: "guess-map__canvas-container"
                    }, P("div", {
                        className: "guess-map__canvas",
                        ref: i,
                        "data-qa": "guess-map-canvas"
                    })), t && P(M.a, {
                        lat: t.lat,
                        lng: t.lng,
                        map: o
                    }, P(O.c, {
                        qa: "guess-marker"
                    }, P(O.b, {
                        anchor: "center-center"
                    }))))
            }
            var D = n("RaGi"),
                w = a.default.createElement,
                C = {
                    min: {
                        lat: -85,
                        lng: -180
                    },
                    max: {
                        lat: 85,
                        lng: 180
                    }
                },
                S = 1;

            function k(e) {
                var t = e.bounds,
                    n = void 0 === t ? C : t,
                    i = e.onGuess,
                    s = e.isGuessing,
                    l = e.size,
                    d = e.zoom,
                    f = e.sticky,
                    m = e.onChangeSize,
                    g = e.onChangeZoom,
                    b = e.onChangeSticky,
                    v = e.mapType,
                    p = e.onMarkerPlaced,
                    y = e.markerLocation,
                    I = e.onCountrySelected,
                    O = e.country,
                    M = Object(c.a)({
                        draggableCursor: "crosshair",
                        minZoom: S,
                        zoom: d
                    }, (function (e, t) {
                        var o = new t.LatLngBounds;
                        o.extend(n.min),
                            o.extend(n.max),
                            setTimeout((function () {
                                e.fitBounds(o)
                            }), 100)
                    })),
                    P = Object(o.a)(M, 2),
                    k = P[0],
                    T = P[1],
                    z = Object(h.b)().isMobile,
                    R = Object(a.useState)(!z),
                    G = R[0],
                    _ = R[1],
                    A = Object(a.useState)(!1),
                    B = A[0],
                    H = A[1],
                    Y = Object(a.useRef)(void 0),
                    J = f || z,
                    F = function () {
                        Y.current && (clearTimeout(Y.current),
                            Y.current = void 0)
                    };
                Object(a.useEffect)((function () {
                        _(!z)
                    }), [z]),
                    Object(a.useEffect)((function () {
                        return F
                    }), []);
                return Object(a.useEffect)((function () {
                        if (T) {
                            var e = T.addListener("zoom_changed", (function () {
                                var e = T.getZoom();
                                e && e !== d && g(e)
                            }));
                            return function () {
                                e.remove()
                            }
                        }
                    }), [T, d, g]),
                    Object(a.useEffect)((function () {
                        T && T.setZoom(d)
                    }), [d, T]),
                    w(a.default.Fragment, null, w("div", {
                        className: r()("guess-map", "guess-map--size-" + l, {
                            "guess-map--active": B || J,
                            "guess-map--hidden": !G
                        }),
                        onMouseEnter: function () {
                            H(!0),
                                F()
                        },
                        onMouseLeave: function () {
                            F(),
                                Y.current = setTimeout((function () {
                                    H(!1)
                                }), 1e3)
                        },
                        "data-qa": "guess-map"
                    }, w(x, {
                        isSticky: J,
                        onToggleSticky: function () {
                            return b(!J)
                        },
                        size: l,
                        onSizeChanged: function (e) {
                            return m(e)
                        }
                    }), z && w(E, {
                        onClick: function () {
                            return _(!1)
                        }
                    }), w(L, {
                        zoom: d,
                        onZoomIn: function () {
                            return g(d + 1)
                        },
                        onZoomOut: function () {
                            return g(d - 1)
                        }
                    }), "country" === v ? w(D.a, {
                        map: T,
                        mapRef: k,
                        onCountrySelected: I,
                        selectedCountryCode: O
                    }) : "coordinate" === v ? w(N, {
                        markerLocation: y,
                        onMarkerLocationChanged: p,
                        map: T,
                        mapRef: k
                    }) : null, w("div", {
                        className: "guess-map__guess-button"
                    }, w(u.a, {
                        isDisabled: "country" === v && !O || "coordinate" === v && !y,
                        isLoading: s,
                        onClick: i,
                        qa: "perform-guess"
                    }, w(j.b, {
                        id: "game.guess-button-label"
                    })))), !G && w(Z, {
                        onToggle: function () {
                            return _(!0)
                        }
                    }))
            }

            function x(e) {
                var t = e.size,
                    n = e.onSizeChanged,
                    o = e.isSticky,
                    a = e.onToggleSticky,
                    i = Object(I.a)();
                return w("div", {
                    className: "guess-map__controls"
                }, w("button", {
                    className: r()("guess-map__control", "guess-map__control--increase-size", {
                        "guess-map__control--disabled": t >= 4
                    }),
                    onClick: function () {
                        return t < 4 ? n(t + 1) : null
                    }
                }, w("img", {
                    src: l.a,
                    alt: i("game.guess-map-increase-size")
                })), w("button", {
                    className: r()("guess-map__control", "guess-map__control--decrease-size", {
                        "guess-map__control--disabled": t <= 1
                    }),
                    onClick: function () {
                        return t > 0 ? n(t - 1) : null
                    }
                }, w("img", {
                    src: l.a,
                    alt: i("game.guess-map-decrease-size")
                })), w("button", {
                    className: r()("guess-map__control", "guess-map__control--sticky", {
                        "guess-map__control--sticky-active": o
                    }),
                    onClick: function () {
                        return a()
                    }
                }, w("img", {
                    src: f.a,
                    alt: i("game.guess-map-sticky-map")
                })))
            }

            function L(e) {
                var t = e.zoom,
                    n = e.onZoomIn,
                    o = e.onZoomOut,
                    a = Object(I.a)();
                return w("div", {
                    className: "guess-map__zoom-controls"
                }, w("button", {
                    className: r()("guess-map__zoom-control", "guess-map__zoom-control--zoom-in"),
                    onClick: function () {
                        return n()
                    }
                }, w("img", {
                    src: v.a,
                    alt: a("game.guess-map-zoom-in")
                })), w("button", {
                    className: r()("guess-map__zoom-control", "guess-map__zoom-control--zoom-out", {
                        "guess-map__zoom-control--disabled": t <= S
                    }),
                    onClick: function () {
                        return t > 0 ? o() : null
                    }
                }, w("img", {
                    src: y.a,
                    alt: a("game.guess-map-zoom-out")
                })))
            }

            function Z(e) {
                var t = e.onToggle;
                return w("div", {
                    className: "guess-map__toggle"
                }, w(u.a, {
                    onClick: t
                }, w(j.b, {
                    id: "game.show-guess-map-button-label"
                })))
            }

            function E(e) {
                var t = e.onClick,
                    n = Object(I.a)();
                return w("button", {
                    className: "guess-map__close",
                    onClick: t
                }, w("img", {
                    src: g.a,
                    alt: n("game.close-guess-map")
                }))
            }
        },
        "pce+": function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return k
            }));
            var o = n("o0o1"),
                a = n.n(o),
                i = n("HaE+"),
                r = n("FdF9"),
                c = n("7oRp"),
                u = n.n(c),
                s = n("B6Ce"),
                l = n.n(s),
                d = n("GpYj"),
                f = n.n(d),
                m = n("JjVd"),
                g = n("S2e8"),
                b = n.n(g),
                v = n("AFQi"),
                p = n.n(v),
                y = n("O6Ic"),
                h = n("Waax"),
                j = r.default.createElement;

            function I() {
                var e = Object(r.useState)(!1),
                    t = e[0],
                    n = e[1],
                    o = Object(h.a)(),
                    a = Object(r.useCallback)((function () {
                        document.fullscreenElement ? n(!0) : n(!1)
                    }), []);
                return Object(r.useEffect)((function () {
                        return document.addEventListener("fullscreenchange", a),
                            function () {
                                document.removeEventListener("fullscreenchange", a)
                            }
                    }), [a]),
                    j(m.a, {
                        label: o(t ? "game.exit-fullscreen" : "game.enter-fullscreen")
                    }, j(y.a, {
                        onClick: function () {
                            try {
                                t ? document.exitFullscreen() : document.documentElement.requestFullscreen()
                            } catch (e) {}
                        },
                        qa: t ? "exit-fullscreen" : "enter-fullscreen"
                    }, j("img", {
                        src: t ? p.a : b.a,
                        alt: o(t ? "game.exit-fullscreen" : "game.enter-fullscreen")
                    })))
            }
            var O = n("IutD");

            function M(e) {
                return "getPov" in e
            }

            function P(e) {
                return "getBearing" in e
            }
            var N = r.default.createElement;

            function D(e) {
                var t = e.panorama,
                    n = e.forbidRotating,
                    o = e.qa,
                    a = void 0 === o ? void 0 : o,
                    i = Object(r.useState)(0),
                    c = i[0],
                    u = i[1];
                return Object(r.useEffect)((function () {
                        if (t && M(t) && t.getPov()) {
                            u(t.getPov().heading || 0);
                            var e = t.addListener("pov_changed", (function () {
                                u(t.getPov().heading || 0)
                            }));
                            return function () {
                                e.remove()
                            }
                        }
                        if (P(t)) {
                            var n = function () {
                                return t.getBearing().then((function (e) {
                                    u(e || 0)
                                }))
                            };
                            if (t)
                                return n(),
                                    t.on("bearingchanged", n),
                                    function () {
                                        t.off("bearingchanged", n)
                                    }
                        }
                    }), [t]),
                    N(O.a, {
                        heading: c,
                        onChange: function (e) {
                            !n && M(t) && t && t.getPov() && t.setPov({
                                pitch: t.getPov().pitch,
                                heading: e
                            })
                        },
                        qa: a
                    })
            }
            var w = n("k0sb"),
                C = n("JBaI"),
                S = r.default.createElement;

            function k(e) {
                var t = e.panorama,
                    n = e.currentRound,
                    o = e.gameSettings,
                    c = Object(h.a)(),
                    s = function () {
                        var e = Object(i.a)(a.a.mark((function e() {
                            return a.a.wrap((function (e) {
                                for (;;)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            if (!o.forbidZooming) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", !1);
                                        case 2:
                                            if (!t) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.t0 = t,
                                                e.next = 6,
                                                t.getZoom();
                                        case 6:
                                            e.t1 = e.sent,
                                                e.t2 = e.t1 + 1,
                                                e.t0.setZoom.call(e.t0, e.t2);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }(),
                    d = function () {
                        var e = Object(i.a)(a.a.mark((function e() {
                            return a.a.wrap((function (e) {
                                for (;;)
                                    switch (e.prev = e.next) {
                                        case 0:
                                            if (!o.forbidZooming) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", !1);
                                        case 2:
                                            if (!t) {
                                                e.next = 9;
                                                break
                                            }
                                            return e.t0 = t,
                                                e.next = 6,
                                                t.getZoom();
                                        case 6:
                                            e.t1 = e.sent,
                                                e.t2 = e.t1 - 1,
                                                e.t0.setZoom.call(e.t0, e.t2);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                            }), e)
                        })));
                        return function () {
                            return e.apply(this, arguments)
                        }
                    }();
                return t ? S(r.default.Fragment, null, S(y.b, null, S(D, {
                    panorama: t,
                    qa: "compass",
                    forbidRotating: o.forbidRotating
                })), S(w.a, {
                    renderOn: "not-mobile"
                }, (function () {
                    return S(y.b, null, S(I, null))
                })), S(y.b, null, S(m.a, {
                    label: c("game.return-to-start-label")
                }, S(y.a, {
                    onClick: function () {
                        if (t && M(t)) {
                            if (n.panoId) {
                                var e = Object(C.a)(n.panoId),
                                    o = window;
                                o.__GEOGUESSR_DEBUG__ && (o.pano = t,
                                        console.log(e, n)),
                                    t.setPano(e)
                            } else
                                t.setPosition({
                                    lat: n.lat,
                                    lng: n.lng
                                });
                            t.setPov({
                                    heading: n.heading,
                                    pitch: n.pitch
                                }),
                                t.setZoom(n.zoom)
                        } else
                            t && P(t) && (n.panoId ? t.moveToKey(Object(C.a)(n.panoId)) : t.moveCloseTo(n.lat, n.lng),
                                t.setZoom(n.zoom))
                    },
                    qa: "return-to-start"
                }, S("img", {
                    src: f.a,
                    alt: c("game.return-to-start-label")
                })))), !o.forbidZooming && S(y.b, null, S(m.a, {
                    label: c("game.zoom-in-label")
                }, S(y.a, {
                    onClick: s,
                    qa: "pano-zoom-in"
                }, S("img", {
                    src: u.a,
                    alt: c("game.zoom-in-label")
                }))), S(m.a, {
                    label: c("game.zoom-out-label")
                }, S(y.a, {
                    onClick: d,
                    qa: "pano-zoom-out"
                }, S("img", {
                    src: l.a,
                    alt: c("game.zoom-out-label")
                }))))) : null
            }
        },
        peSX: function (e, t, n) {
            "use strict";
            n.d(t, "a", (function () {
                return b
            }));
            var o = n("rePB"),
                a = n("ODXe"),
                i = n("FdF9"),
                r = n("bXPe"),
                c = n("JBaI"),
                u = n("Waax"),
                s = n("crwh"),
                l = n("tAzB"),
                d = i.default.createElement;

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))),
                        n.push.apply(n, o)
                }
                return n
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function (t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var g = 500;

            function b(e) {
                var t = e.panoId,
                    n = e.lat,
                    o = e.lng,
                    f = e.heading,
                    b = e.pitch,
                    v = e.zoom,
                    p = e.onError,
                    y = e.onLoading,
                    h = e.onMount,
                    j = e.gameSettings,
                    I = e.gameToken,
                    O = e.gameType,
                    M = e.gameMode,
                    P = Object(i.useRef)({}),
                    N = Object(u.a)(),
                    D = Object(i.useState)(0),
                    w = D[0],
                    C = D[1],
                    S = Object(l.a)("load-by-pano-id"),
                    k = Object(i.useCallback)((function (e, t, n, o) {
                        if (e)
                            if (S && t) {
                                var a = Object(c.a)(t);
                                a === e.getPano() ? (p(void 0),
                                    y(!1)) : e.setPano(a)
                            } else
                                e.setPosition({
                                    lat: n,
                                    lng: o
                                })
                    }), [y, p, S]),
                    x = Object(r.a)(P.current, (function (e) {
                        var a = m(m({}, P.current), {}, {
                            clickToGo: !j.forbidMoving,
                            linksControl: !j.forbidMoving,
                            disableDoubleClickZoom: j.forbidZooming,
                            scrollwheel: !j.forbidZooming,
                            motionTracking: !1
                        });
                        e.setOptions(a),
                            C((function (e) {
                                return e + 1
                            })),
                            y(!0),
                            p(void 0),
                            k(e, t, n, o),
                            e.setZoom(v),
                            e.setPov({
                                heading: f,
                                pitch: b
                            }),
                            h(e)
                    })),
                    L = Object(a.a)(x, 2),
                    Z = L[0],
                    E = L[1];
                Object(i.useEffect)((function () {
                        var e = document.getElementsByClassName("widget-scene")[0];
                        if (e) {
                            var t = function (e) {
                                if (!j.forbidMoving && !j.forbidZooming && !j.forbidRotating)
                                    return !0;
                                var t = e;
                                return j.forbidMoving && ["arrowup", "arrowdown", "w", "s", "numpad8", "numpad2"].indexOf(t.key.toLowerCase()) > -1 ? (t.stopPropagation(),
                                    !1) : j.forbidZooming && ["+", "-"].indexOf(t.key.toLowerCase()) > -1 ? (t.stopPropagation(),
                                    !1) : !(j.forbidRotating && ["arrowleft", "arrowright", "d", "a", "numpad4", "numpad6"].indexOf(t.key.toLowerCase()) > -1) || (t.stopPropagation(),
                                    !1)
                            };
                            return e.addEventListener("keydown", t),
                                function () {
                                    e.removeEventListener("keydown", t)
                                }
                        }
                    }), [j.forbidRotating, j.forbidMoving, j.forbidZooming, w]),
                    Object(i.useEffect)((function () {
                        var e = document.getElementsByClassName("widget-scene-canvas")[0];
                        if (e) {
                            var t = function (e) {
                                var t = e;
                                return !j.forbidRotating || 1 !== t.buttons || (t.stopPropagation(),
                                    !1)
                            };
                            return e.addEventListener("mousedown", t),
                                function () {
                                    e.removeEventListener("mousedown", t)
                                }
                        }
                    }), [j.forbidRotating, w]);
                var T = Object(i.useRef)(f),
                    z = Object(i.useRef)(b);
                return Object(i.useEffect)((function () {
                        if (E && j.forbidRotating) {
                            var e = E.addListener("pov_changed", (function () {
                                var e = E.getPov(),
                                    t = e.heading,
                                    n = e.pitch;
                                setTimeout((function () {
                                    (void 0 !== t && Math.abs(t - T.current) > 1e-5 || void 0 !== n && Math.abs(n - z.current) > 1e-5) && E.setPov({
                                        heading: T.current,
                                        pitch: z.current
                                    })
                                }), 25)
                            }));
                            return function () {
                                e.remove()
                            }
                        }
                    }), [E, v, j.forbidRotating, w]),
                    Object(i.useEffect)((function () {
                        if (E) {
                            var e, a = E.addListener("status_changed", (function () {
                                if (E.getStatus() === google.maps.StreetViewStatus.OK) {
                                    var i = !t || E.getPano() === Object(c.a)(t);
                                    (r = {
                                            lat: n,
                                            lng: o
                                        },
                                        u = {
                                            lat: E.getPosition().lat(),
                                            lng: E.getPosition().lng()
                                        },
                                        Math.abs(r.lat - u.lat) < .01 && Math.abs(r.lng - u.lng) < .01) && i || function (e, t, n, o, a, i) {
                                            console.error("Possibly wrong panorama loaded.");
                                            try {
                                                s.a.post("/api/v3/debug/game-coordinate", void 0, m({
                                                    requestedCoord: e,
                                                    requestedPano: t,
                                                    loadedCoord: n,
                                                    loadedPano: o,
                                                    loadingMethod: i
                                                }, a))
                                            } catch (r) {
                                                console.error(r)
                                            }
                                        }({
                                            lat: n,
                                            lng: o
                                        }, Object(c.a)(t), {
                                            lat: E.getPosition().lat(),
                                            lng: E.getPosition().lng()
                                        }, E.getPano(), {
                                            gameToken: I,
                                            gameType: O,
                                            gameMode: M
                                        }, S && E ? "by-pano" : "by-coord"),
                                        p(void 0),
                                        C((function (e) {
                                            return e + 1
                                        }))
                                } else
                                    p(N("game.failed-loading-panorama"));
                                var r, u;
                                e = setTimeout((function () {
                                        y(!1)
                                    }), g),
                                    a.remove()
                            }));
                            return function () {
                                a.remove(),
                                    e && clearTimeout(e)
                            }
                        }
                    }), [E, n, o, t, p, y, N, I, M, O, S]),
                    Object(i.useEffect)((function () {
                        E && (y(!0),
                            p(void 0),
                            k(E, t, n, o),
                            E.setZoom(v),
                            z.current = b,
                            T.current = f,
                            E.setPov({
                                heading: f,
                                pitch: b
                            }))
                    }), [E, n, o, b, f, v, y, p, k, t]),
                    Object(i.useEffect)((function () {
                        E && E.setZoom(v)
                    }), [E, v]),
                    d("div", {
                        ref: Z
                    })
            }
        },
        rP5m: function (e, t) {
            e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iOTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjQjgyQTJBIiBkPSJNMTIgMHY0OEgweiIvPjxwYXRoIGZpbGw9IiNDQzJGMzAiIGQ9Ik0xMiAwdjQ4aDEyeiIvPjxwYXRoIGZpbGw9IiNFNkU2RTYiIGQ9Ik0xMiA5NlY0OEgweiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMiA5NlY0OGgxMnoiLz48L2c+PC9zdmc+"
        },
        vuIU: function (e, t, n) {
            "use strict";

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                        o.configurable = !0,
                        "value" in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o)
                }
            }

            function a(e, t, n) {
                return t && o(e.prototype, t),
                    n && o(e, n),
                    e
            }
            n.d(t, "a", (function () {
                return a
            }))
        }
    }
]);