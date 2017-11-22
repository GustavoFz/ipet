/*! jQuery UI - v1.11.2 - 2015-01-31
 * http://jqueryui.com
 * Includes: core.js, widget.js, position.js, autocomplete.js, menu.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function (e) {
    function t(t, s) {
        var a, n, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (o = e("img[usemap='#" + n + "']")[0], !!o && i(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
            return "hidden" === e.css(this, "visibility")
        }).length
    }

    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.2",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function (t) {
            var i = this.css("position"), s = "absolute" === i, a = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                n = this.parents().filter(function () {
                    var t = e(this);
                    return s && "static" === t.css("position") ? !1 : a.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && n.length ? n : e(this[0].ownerDocument || document)
        }, uniqueId: function () {
            var e = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(), removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (i) {
                return !!e.data(i, t)
            }
        }) : function (t, i, s) {
            return !!e.data(t, s[3])
        }, focusable: function (i) {
            return t(i, !isNaN(e.attr(i, "tabindex")))
        }, tabbable: function (i) {
            var s = e.attr(i, "tabindex"), a = isNaN(s);
            return (a || s >= 0) && t(i, !a)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
        function s(t, i, s, n) {
            return e.each(a, function () {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), n && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }

        var a = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], n = i.toLowerCase(), o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + i] = function (t) {
            return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
                e(this).css(n, s(this, t) + "px")
            })
        }, e.fn["outer" + i] = function (t, a) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
                e(this).css(n, s(this, t, !0, a) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function (t) {
            return function (i, s) {
                return "number" == typeof i ? this.each(function () {
                    var t = this;
                    setTimeout(function () {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus), disableSelection: function () {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.bind(e + ".ui-disableSelection", function (e) {
                    e.preventDefault()
                })
            }
        }(), enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }, zIndex: function (t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length) for (var i, s, a = e(this[0]); a.length && a[0] !== document;) {
                if (i = a.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                a = a.parent()
            }
            return 0
        }
    }), e.ui.plugin = {
        add: function (t, i, s) {
            var a, n = e.ui[t].prototype;
            for (a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
        }, call: function (e, t, i, s) {
            var a, n = e.plugins[t];
            if (n && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (a = 0; n.length > a; a++) e.options[n[a][0]] && n[a][1].apply(e.element, i)
        }
    };
    var s = 0, a = Array.prototype.slice;
    e.cleanData = function (t) {
        return function (i) {
            var s, a, n;
            for (n = 0; null != (a = i[n]); n++) try {
                s = e._data(a, "events"), s && s.remove && e(a).triggerHandler("remove")
            } catch (o) {
            }
            t(i)
        }
    }(e.cleanData), e.widget = function (t, i, s) {
        var a, n, o, r, h = {}, l = t.split(".")[0];
        return t = t.split(".")[1], a = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][a.toLowerCase()] = function (t) {
            return !!e.data(t, a)
        }, e[l] = e[l] || {}, n = e[l][t], o = e[l][t] = function (e, t) {
            return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
        }, e.extend(o, n, {
            version: s.version,
            _proto: e.extend({}, s),
            _childConstructors: []
        }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) {
            return e.isFunction(s) ? (h[t] = function () {
                var e = function () {
                    return i.prototype[t].apply(this, arguments)
                }, a = function (e) {
                    return i.prototype[t].apply(this, e)
                };
                return function () {
                    var t, i = this._super, n = this._superApply;
                    return this._super = e, this._superApply = a, t = s.apply(this, arguments), this._super = i, this._superApply = n, t
                }
            }(), void 0) : (h[t] = s, void 0)
        }), o.prototype = e.widget.extend(r, {widgetEventPrefix: n ? r.widgetEventPrefix || t : t}, h, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: a
        }), n ? (e.each(n._childConstructors, function (t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete n._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
    }, e.widget.extend = function (t) {
        for (var i, s, n = a.call(arguments, 1), o = 0, r = n.length; r > o; o++) for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
        return t
    }, e.widget.bridge = function (t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function (n) {
            var o = "string" == typeof n, r = a.call(arguments, 1), h = this;
            return n = !o && r.length ? e.widget.extend.apply(null, [n].concat(r)) : n, o ? this.each(function () {
                var i, a = e.data(this, s);
                return "instance" === n ? (h = a, !1) : a ? e.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, r), i !== a && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + n + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + n + "'")
            }) : this.each(function () {
                var t = e.data(this, s);
                t ? (t.option(n || {}), t._init && t._init()) : e.data(this, s, new i(n, this))
            }), h
        }
    }, e.Widget = function () {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (t, i) {
            var s, a, n, o = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t) if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                for (a = o[t] = e.widget.extend({}, this.options[t]), n = 0; s.length - 1 > n; n++) a[s[n]] = a[s[n]] || {}, a = a[s[n]];
                if (t = s.pop(), 1 === arguments.length) return void 0 === a[t] ? null : a[t];
                a[t] = i
            } else {
                if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                o[t] = i
            }
            return this._setOptions(o), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _on: function (t, i, s) {
            var a, n = this;
            "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = a = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, a = this.widget()), e.each(s, function (s, o) {
                function r() {
                    return t || n.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? n[o] : o).apply(n, arguments) : void 0
                }

                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/), l = h[1] + n.eventNamespace, u = h[2];
                u ? a.delegate(u, l, r) : i.bind(l, r)
            })
        },
        _off: function (t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function (e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }

            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                }, focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, i, s) {
            var a, n, o = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], n = i.originalEvent) for (a in n) a in i || (i[a] = n[a]);
            return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, i) {
        e.Widget.prototype["_" + t] = function (s, a, n) {
            "string" == typeof a && (a = {effect: a});
            var o, r = a ? a === !0 || "number" == typeof a ? i : a.effect || i : t;
            a = a || {}, "number" == typeof a && (a = {duration: a}), o = !e.isEmptyObject(a), a.complete = n, a.delay && s.delay(a.delay), o && e.effects && e.effects.effect[r] ? s[t](a) : r !== t && s[r] ? s[r](a.duration, a.easing, n) : s.queue(function (i) {
                e(this)[t](), n && n.call(s[0]), i()
            })
        }
    }), e.widget, function () {
        function t(e, t, i) {
            return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)]
        }

        function i(t, i) {
            return parseInt(e.css(t, i), 10) || 0
        }

        function s(t) {
            var i = t[0];
            return 9 === i.nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {top: 0, left: 0}
            } : e.isWindow(i) ? {
                width: t.width(),
                height: t.height(),
                offset: {top: t.scrollTop(), left: t.scrollLeft()}
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {top: i.pageY, left: i.pageX}
            } : {width: t.outerWidth(), height: t.outerHeight(), offset: t.offset()}
        }

        e.ui = e.ui || {};
        var a, n, o = Math.max, r = Math.abs, h = Math.round, l = /left|center|right/, u = /top|center|bottom/,
            d = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, p = /%$/, f = e.fn.position;
        e.position = {
            scrollbarWidth: function () {
                if (void 0 !== a) return a;
                var t, i,
                    s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    n = s.children()[0];
                return e("body").append(s), t = n.offsetWidth, s.css("overflow", "scroll"), i = n.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), a = t - i
            }, getScrollInfo: function (t) {
                var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                    s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                    a = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                    n = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
                return {width: n ? e.position.scrollbarWidth() : 0, height: a ? e.position.scrollbarWidth() : 0}
            }, getWithinInfo: function (t) {
                var i = e(t || window), s = e.isWindow(i[0]), a = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: a,
                    offset: i.offset() || {left: 0, top: 0},
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: s || a ? i.width() : i.outerWidth(),
                    height: s || a ? i.height() : i.outerHeight()
                }
            }
        }, e.fn.position = function (a) {
            if (!a || !a.of) return f.apply(this, arguments);
            a = e.extend({}, a);
            var p, m, g, v, y, b, _ = e(a.of), x = e.position.getWithinInfo(a.within), w = e.position.getScrollInfo(x),
                k = (a.collision || "flip").split(" "), T = {};
            return b = s(_), _[0].preventDefault && (a.at = "left top"), m = b.width, g = b.height, v = b.offset, y = e.extend({}, v), e.each(["my", "at"], function () {
                var e, t, i = (a[this] || "").split(" ");
                1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], a[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
            }), 1 === k.length && (k[1] = k[0]), "right" === a.at[0] ? y.left += m : "center" === a.at[0] && (y.left += m / 2), "bottom" === a.at[1] ? y.top += g : "center" === a.at[1] && (y.top += g / 2), p = t(T.at, m, g), y.left += p[0], y.top += p[1], this.each(function () {
                var s, l, u = e(this), d = u.outerWidth(), c = u.outerHeight(), f = i(this, "marginLeft"),
                    b = i(this, "marginTop"), D = d + f + i(this, "marginRight") + w.width,
                    S = c + b + i(this, "marginBottom") + w.height, N = e.extend({}, y),
                    M = t(T.my, u.outerWidth(), u.outerHeight());
                "right" === a.my[0] ? N.left -= d : "center" === a.my[0] && (N.left -= d / 2), "bottom" === a.my[1] ? N.top -= c : "center" === a.my[1] && (N.top -= c / 2), N.left += M[0], N.top += M[1], n || (N.left = h(N.left), N.top = h(N.top)), s = {
                    marginLeft: f,
                    marginTop: b
                }, e.each(["left", "top"], function (t, i) {
                    e.ui.position[k[t]] && e.ui.position[k[t]][i](N, {
                        targetWidth: m,
                        targetHeight: g,
                        elemWidth: d,
                        elemHeight: c,
                        collisionPosition: s,
                        collisionWidth: D,
                        collisionHeight: S,
                        offset: [p[0] + M[0], p[1] + M[1]],
                        my: a.my,
                        at: a.at,
                        within: x,
                        elem: u
                    })
                }), a.using && (l = function (e) {
                    var t = v.left - N.left, i = t + m - d, s = v.top - N.top, n = s + g - c, h = {
                        target: {element: _, left: v.left, top: v.top, width: m, height: g},
                        element: {element: u, left: N.left, top: N.top, width: d, height: c},
                        horizontal: 0 > i ? "left" : t > 0 ? "right" : "center",
                        vertical: 0 > n ? "top" : s > 0 ? "bottom" : "middle"
                    };
                    d > m && m > r(t + i) && (h.horizontal = "center"), c > g && g > r(s + n) && (h.vertical = "middle"), h.important = o(r(t), r(i)) > o(r(s), r(n)) ? "horizontal" : "vertical", a.using.call(this, e, h)
                }), u.offset(e.extend(N, {using: l}))
            })
        }, e.ui.position = {
            fit: {
                left: function (e, t) {
                    var i, s = t.within, a = s.isWindow ? s.scrollLeft : s.offset.left, n = s.width,
                        r = e.left - t.collisionPosition.marginLeft, h = a - r, l = r + t.collisionWidth - n - a;
                    t.collisionWidth > n ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - n - a, e.left += h - i) : e.left = l > 0 && 0 >= h ? a : h > l ? a + n - t.collisionWidth : a : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left)
                }, top: function (e, t) {
                    var i, s = t.within, a = s.isWindow ? s.scrollTop : s.offset.top, n = t.within.height,
                        r = e.top - t.collisionPosition.marginTop, h = a - r, l = r + t.collisionHeight - n - a;
                    t.collisionHeight > n ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - n - a, e.top += h - i) : e.top = l > 0 && 0 >= h ? a : h > l ? a + n - t.collisionHeight : a : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top)
                }
            }, flip: {
                left: function (e, t) {
                    var i, s, a = t.within, n = a.offset.left + a.scrollLeft, o = a.width,
                        h = a.isWindow ? a.scrollLeft : a.offset.left, l = e.left - t.collisionPosition.marginLeft,
                        u = l - h, d = l + t.collisionWidth - o - h,
                        c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                        p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                        f = -2 * t.offset[0];
                    0 > u ? (i = e.left + c + p + f + t.collisionWidth - o - n, (0 > i || r(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h, (s > 0 || d > r(s)) && (e.left += c + p + f))
                }, top: function (e, t) {
                    var i, s, a = t.within, n = a.offset.top + a.scrollTop, o = a.height,
                        h = a.isWindow ? a.scrollTop : a.offset.top, l = e.top - t.collisionPosition.marginTop,
                        u = l - h, d = l + t.collisionHeight - o - h, c = "top" === t.my[1],
                        p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                        f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                        m = -2 * t.offset[1];
                    0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - n, e.top + p + f + m > u && (0 > s || r(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, e.top + p + f + m > d && (i > 0 || d > r(i)) && (e.top += p + f + m))
                }
            }, flipfit: {
                left: function () {
                    e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                }, top: function () {
                    e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                }
            }
        }, function () {
            var t, i, s, a, o, r = document.getElementsByTagName("body")[0], h = document.createElement("div");
            t = document.createElement(r ? "div" : "body"), s = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, r && e.extend(s, {position: "absolute", left: "-1000px", top: "-1000px"});
            for (o in s) t.style[o] = s[o];
            t.appendChild(h), i = r || document.documentElement, i.insertBefore(t, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", a = e(h).offset().left, n = a > 10 && 11 > a, t.innerHTML = "", i.removeChild(t)
        }()
    }(), e.ui.position, e.widget("ui.menu", {
        version: "1.11.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {submenu: "ui-icon-carat-1-e"},
            items: "> *",
            menus: "ul",
            position: {my: "left-1 top", at: "right top"},
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item": function (e) {
                    e.preventDefault()
                }, "click .ui-menu-item": function (t) {
                    var i = e(t.target);
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                }, "mouseenter .ui-menu-item": function (t) {
                    if (!this.previousFilter) {
                        var i = e(t.currentTarget);
                        i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
                    }
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (e, t) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    t || this.focus(e, i)
                }, blur: function (t) {
                    this._delay(function () {
                        e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                }, keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (e) {
                    this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var t = e(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (t) {
            var i, s, a, n, o = !0;
            switch (t.keyCode) {
                case e.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case e.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case e.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case e.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case e.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case e.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case e.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case e.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case e.ui.keyCode.ENTER:
                case e.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case e.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    o = !1, s = this.previousFilter || "", a = String.fromCharCode(t.keyCode), n = !1, clearTimeout(this.filterTimer), a === s ? n = !0 : a = s + a, i = this._filterMenuItems(a), i = n && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (a = String.fromCharCode(t.keyCode), i = this._filterMenuItems(a)), i.length ? (this.focus(t, i), this.previousFilter = a, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            o && t.preventDefault()
        },
        _activate: function (e) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e))
        },
        refresh: function () {
            var t, i, s = this, a = this.options.icons.submenu, n = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), n.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var t = e(this), i = t.parent(),
                    s = e("<span>").addClass("ui-menu-icon ui-icon " + a).data("ui-menu-submenu-carat", !0);
                i.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", i.attr("id"))
            }), t = n.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function () {
                var t = e(this);
                s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
            }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {menu: "menuitem", listbox: "option"}[this.options.role]
        },
        _setOption: function (e, t) {
            "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t)
        },
        focus: function (e, t) {
            var i, s;
            this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {item: t})
        },
        _scrollIntoView: function (t) {
            var i, s, a, n, o, r;
            this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, a = t.offset().top - this.activeMenu.offset().top - i - s, n = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), 0 > a ? this.activeMenu.scrollTop(n + a) : a + r > o && this.activeMenu.scrollTop(n + a - o + r))
        },
        blur: function (e, t) {
            t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {item: this.active}))
        },
        _startOpening: function (e) {
            clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(e)
            }, this.delay))
        },
        _open: function (t) {
            var i = e.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function (t, i) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s
            }, this.delay)
        },
        _close: function (e) {
            e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function (t) {
            return !e(t.target).closest(".ui-menu").length
        },
        _isDivider: function (e) {
            return !/[^\-\u2014\u2013\s]/.test(e.text())
        },
        collapse: function (e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t))
        },
        expand: function (e) {
            var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            t && t.length && (this._open(t.parent()), this._delay(function () {
                this.focus(e, t)
            }))
        },
        next: function (e) {
            this._move("next", "first", e)
        },
        previous: function (e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (e, t, i) {
            var s;
            this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[t]()), this.focus(i, s)
        },
        nextPage: function (t) {
            var i, s, a;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, a = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return i = e(this), 0 > i.offset().top - s - a
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0)
        },
        previousPage: function (t) {
            var i, s, a;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, a = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return i = e(this), i.offset().top - s + a > 0
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var i = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
        },
        _filterMenuItems: function (t) {
            var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), s = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                return s.test(e.trim(e(this).text()))
            })
        }
    }), e.widget("ui.autocomplete", {
        version: "1.11.2",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {my: "left top", at: "left bottom", collision: "none"},
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
            var t, i, s, a = this.element[0].nodeName.toLowerCase(), n = "textarea" === a, o = "input" === a;
            this.isMultiLine = n ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[n || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (a) {
                    if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, void 0;
                    t = !1, s = !1, i = !1;
                    var n = e.ui.keyCode;
                    switch (a.keyCode) {
                        case n.PAGE_UP:
                            t = !0, this._move("previousPage", a);
                            break;
                        case n.PAGE_DOWN:
                            t = !0, this._move("nextPage", a);
                            break;
                        case n.UP:
                            t = !0, this._keyEvent("previous", a);
                            break;
                        case n.DOWN:
                            t = !0, this._keyEvent("next", a);
                            break;
                        case n.ENTER:
                            this.menu.active && (t = !0, a.preventDefault(), this.menu.select(a));
                            break;
                        case n.TAB:
                            this.menu.active && this.menu.select(a);
                            break;
                        case n.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(a), a.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(a)
                    }
                }, keypress: function (s) {
                    if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;
                    if (!i) {
                        var a = e.ui.keyCode;
                        switch (s.keyCode) {
                            case a.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case a.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case a.UP:
                                this._keyEvent("previous", s);
                                break;
                            case a.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                }, input: function (e) {
                    return s ? (s = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0)
                }, focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                }, blur: function (e) {
                    return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0)
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance"), this._on(this.menu.element, {
                mousedown: function (t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function () {
                        var t = this;
                        this.document.one("mousedown", function (s) {
                            s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                        })
                    })
                }, menufocus: function (t, i) {
                    var s, a;
                    return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
                        e(t.target).trigger(t.originalEvent)
                    }), void 0) : (a = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {item: a}) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(a.value), s = i.item.attr("aria-label") || a.value, s && e.trim(s).length && (this.liveRegion.children().hide(), e("<div>").text(s).appendTo(this.liveRegion)), void 0)
                }, menuselect: function (e, t) {
                    var i = t.item.data("ui-autocomplete-item"), s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", e, {item: i}) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                }
            }), this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _initSource: function () {
            var t, i, s = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
                s(e.ui.autocomplete.filter(t, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, a) {
                s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                    url: i, data: t, dataType: "json", success: function (e) {
                        a(e)
                    }, error: function () {
                        a([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (e) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                var t = this.term === this._value(), i = this.menu.element.is(":visible"),
                    s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                (!t || t && !i && !s) && (this.selectedItem = null, this.search(null, e))
            }, this.options.delay)
        },
        search: function (e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
        },
        _search: function (e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: e}, this._response())
        },
        _response: function () {
            var t = ++this.requestIndex;
            return e.proxy(function (e) {
                t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function (e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {content: e}), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function (e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function (e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function (e) {
            this.previous !== this._value() && this._trigger("change", e, {item: this.selectedItem})
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
                return "string" == typeof t ? {label: t, value: t} : e.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function (t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function () {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (t, i) {
            var s = this;
            e.each(i, function (e, i) {
                s._renderItemData(t, i)
            })
        },
        _renderItemData: function (e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function (t, i) {
            return e("<li>").text(i.label).appendTo(t)
        },
        _move: function (e, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (e, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function (e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }, filter: function (t, i) {
            var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function (e) {
                return s.test(e.label || e.value || e)
            })
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        }, __response: function (t) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion))
        }
    }), e.ui.autocomplete
});

/*!
 * Materialize v0.95.1 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
function toast(a, b, c, d) {
    function e(a) {
        var b = $("<div class='toast'></div>").addClass(c).html(a);
        return b.hammer({prevent_default: !1}).bind("pan", function (a) {
            var c = a.gesture.deltaX, d = 80;
            b.hasClass("panning") || b.addClass("panning");
            var e = 1 - Math.abs(c / d);
            0 > e && (e = 0), b.velocity({left: c, opacity: e}, {duration: 50, queue: !1, easing: "easeOutQuad"})
        }).bind("panend", function (a) {
            var c = a.gesture.deltaX, e = 80;
            Math.abs(c) > e ? b.velocity({marginTop: "-40px"}, {
                duration: 375,
                easing: "easeOutExpo",
                queue: !1,
                complete: function () {
                    "function" == typeof d && d(), b.remove()
                }
            }) : (b.removeClass("panning"), b.velocity({left: 0, opacity: 1}, {
                duration: 300,
                easing: "easeOutExpo",
                queue: !1
            }))
        }), b
    }

    if (c = c || "", 0 == $("#toast-container").length) {
        var f = $("<div></div>").attr("id", "toast-container");
        $("body").append(f)
    }
    var f = $("#toast-container"), g = e(a);
    f.append(g), g.css({top: parseFloat(g.css("top")) + 35 + "px", opacity: 0}), g.velocity({
        top: "0px",
        opacity: 1
    }, {duration: 300, easing: "easeOutCubic", queue: !1});
    var h = b, i = setInterval(function () {
        0 === g.parent().length && window.clearInterval(i), g.hasClass("panning") || (h -= 100), 0 >= h && (g.velocity({
            opacity: 0,
            marginTop: "-40px"
        }, {
            duration: 375, easing: "easeOutExpo", queue: !1, complete: function () {
                "function" == typeof d && d(), $(this).remove()
            }
        }), window.clearInterval(i))
    }, 100)
}

jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    },
    easeInQuad: function (a, b, c, d, e) {
        return d * (b /= e) * b + c
    },
    easeOutQuad: function (a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c
    },
    easeInOutQuad: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function (a, b, c, d, e) {
        return d * (b /= e) * b * b + c
    },
    easeOutCubic: function (a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function (a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
    },
    easeOutQuart: function (a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function (a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
    },
    easeOutQuint: function (a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function (a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function (a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function (a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExpo: function (a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function (a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    },
    easeInOutExpo: function (a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function (a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    },
    easeOutCirc: function (a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function (a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g)) + c
    },
    easeOutElastic: function (a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b) return c;
        if (1 == (b /= e)) return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin(2 * (b * e - f) * Math.PI / g) + d + c
    },
    easeInOutElastic: function (a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b) return c;
        if (2 == (b /= e / 2)) return c + d;
        if (g || (g = .3 * e * 1.5), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return 1 > b ? -.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b * e - f) * Math.PI / g) * .5 + d + c
    },
    easeInBack: function (a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
    },
    easeOutBack: function (a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function (a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * b * b * (((f *= 1.525) + 1) * b - f) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function (a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function (a, b, c, d, e) {
        return (b /= e) < 1 / 2.75 ? 7.5625 * d * b * b + c : 2 / 2.75 > b ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : 2.5 / 2.75 > b ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    },
    easeInOutBounce: function (a, b, c, d, e) {
        return e / 2 > b ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
    }
}), !function (a) {
    function b(a) {
        var b = a.length, d = c.type(a);
        return "function" === d || c.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === d || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    if (!a.jQuery) {
        var c = function (a, b) {
            return new c.fn.init(a, b)
        };
        c.isWindow = function (a) {
            return null != a && a == a.window
        }, c.type = function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? e[g.call(a)] || "object" : typeof a
        }, c.isArray = Array.isArray || function (a) {
            return "array" === c.type(a)
        }, c.isPlainObject = function (a) {
            var b;
            if (!a || "object" !== c.type(a) || a.nodeType || c.isWindow(a)) return !1;
            try {
                if (a.constructor && !f.call(a, "constructor") && !f.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (d) {
                return !1
            }
            for (b in a) ;
            return void 0 === b || f.call(a, b)
        }, c.each = function (a, c, d) {
            var e, f = 0, g = a.length, h = b(a);
            if (d) {
                if (h) for (; g > f && (e = c.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = c.apply(a[f], d), e === !1) break
            } else if (h) for (; g > f && (e = c.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = c.call(a[f], f, a[f]), e === !1) break;
            return a
        }, c.data = function (a, b, e) {
            if (void 0 === e) {
                var f = a[c.expando], g = f && d[f];
                if (void 0 === b) return g;
                if (g && b in g) return g[b]
            } else if (void 0 !== b) {
                var f = a[c.expando] || (a[c.expando] = ++c.uuid);
                return d[f] = d[f] || {}, d[f][b] = e, e
            }
        }, c.removeData = function (a, b) {
            var e = a[c.expando], f = e && d[e];
            f && c.each(b, function (a, b) {
                delete f[b]
            })
        }, c.extend = function () {
            var a, b, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
            for ("boolean" == typeof h && (k = h, h = arguments[i] || {}, i++), "object" != typeof h && "function" !== c.type(h) && (h = {}), i === j && (h = this, i--); j > i; i++) if (null != (f = arguments[i])) for (e in f) a = h[e], d = f[e], h !== d && (k && d && (c.isPlainObject(d) || (b = c.isArray(d))) ? (b ? (b = !1, g = a && c.isArray(a) ? a : []) : g = a && c.isPlainObject(a) ? a : {}, h[e] = c.extend(k, g, d)) : void 0 !== d && (h[e] = d));
            return h
        }, c.queue = function (a, d, e) {
            function f(a, c) {
                var d = c || [];
                return null != a && (b(Object(a)) ? !function (a, b) {
                    for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
                    if (c !== c) for (; void 0 !== b[d];) a[e++] = b[d++];
                    return a.length = e, a
                }(d, "string" == typeof a ? [a] : a) : [].push.call(d, a)), d
            }

            if (a) {
                d = (d || "fx") + "queue";
                var g = c.data(a, d);
                return e ? (!g || c.isArray(e) ? g = c.data(a, d, f(e)) : g.push(e), g) : g || []
            }
        }, c.dequeue = function (a, b) {
            c.each(a.nodeType ? [a] : a, function (a, d) {
                b = b || "fx";
                var e = c.queue(d, b), f = e.shift();
                "inprogress" === f && (f = e.shift()), f && ("fx" === b && e.unshift("inprogress"), f.call(d, function () {
                    c.dequeue(d, b)
                }))
            })
        }, c.fn = c.prototype = {
            init: function (a) {
                if (a.nodeType) return this[0] = a, this;
                throw new Error("Not a DOM node.")
            }, offset: function () {
                var b = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
                return {
                    top: b.top + (a.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: b.left + (a.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            }, position: function () {
                function a() {
                    for (var a = this.offsetParent || document; a && "html" === !a.nodeType.toLowerCase && "static" === a.style.position;) a = a.offsetParent;
                    return a || document
                }

                var b = this[0], a = a.apply(b), d = this.offset(),
                    e = /^(?:body|html)$/i.test(a.nodeName) ? {top: 0, left: 0} : c(a).offset();
                return d.top -= parseFloat(b.style.marginTop) || 0, d.left -= parseFloat(b.style.marginLeft) || 0, a.style && (e.top += parseFloat(a.style.borderTopWidth) || 0, e.left += parseFloat(a.style.borderLeftWidth) || 0), {
                    top: d.top - e.top,
                    left: d.left - e.left
                }
            }
        };
        var d = {};
        c.expando = "velocity" + (new Date).getTime(), c.uuid = 0;
        for (var e = {}, f = e.hasOwnProperty, g = e.toString, h = "Boolean Number String Function Array Date RegExp Object Error".split(" "), i = 0; i < h.length; i++) e["[object " + h[i] + "]"] = h[i].toLowerCase();
        c.fn.init.prototype = c.fn, a.Velocity = {Utilities: c}
    }
}(window), function (a) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a() : "function" == typeof define && define.amd ? define(a) : a()
}(function () {
    return function (a, b, c, d) {
        function e(a) {
            for (var b = -1, c = a ? a.length : 0, d = []; ++b < c;) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }

        function f(a) {
            return p.isWrapped(a) ? a = [].slice.call(a) : p.isNode(a) && (a = [a]), a
        }

        function g(a) {
            var b = m.data(a, "velocity");
            return null === b ? d : b
        }

        function h(a) {
            return function (b) {
                return Math.round(b * a) * (1 / a)
            }
        }

        function i(a, c, d, e) {
            function f(a, b) {
                return 1 - 3 * b + 3 * a
            }

            function g(a, b) {
                return 3 * b - 6 * a
            }

            function h(a) {
                return 3 * a
            }

            function i(a, b, c) {
                return ((f(b, c) * a + g(b, c)) * a + h(b)) * a
            }

            function j(a, b, c) {
                return 3 * f(b, c) * a * a + 2 * g(b, c) * a + h(b)
            }

            function k(b, c) {
                for (var e = 0; p > e; ++e) {
                    var f = j(c, a, d);
                    if (0 === f) return c;
                    var g = i(c, a, d) - b;
                    c -= g / f
                }
                return c
            }

            function l() {
                for (var b = 0; t > b; ++b) x[b] = i(b * u, a, d)
            }

            function m(b, c, e) {
                var f, g, h = 0;
                do g = c + (e - c) / 2, f = i(g, a, d) - b, f > 0 ? e = g : c = g; while (Math.abs(f) > r && ++h < s);
                return g
            }

            function n(b) {
                for (var c = 0, e = 1, f = t - 1; e != f && x[e] <= b; ++e) c += u;
                --e;
                var g = (b - x[e]) / (x[e + 1] - x[e]), h = c + g * u, i = j(h, a, d);
                return i >= q ? k(b, h) : 0 == i ? h : m(b, c, c + u)
            }

            function o() {
                y = !0, (a != c || d != e) && l()
            }

            var p = 4, q = .001, r = 1e-7, s = 10, t = 11, u = 1 / (t - 1), v = "Float32Array" in b;
            if (4 !== arguments.length) return !1;
            for (var w = 0; 4 > w; ++w) if ("number" != typeof arguments[w] || isNaN(arguments[w]) || !isFinite(arguments[w])) return !1;
            a = Math.min(a, 1), d = Math.min(d, 1), a = Math.max(a, 0), d = Math.max(d, 0);
            var x = v ? new Float32Array(t) : new Array(t), y = !1, z = function (b) {
                return y || o(), a === c && d === e ? b : 0 === b ? 0 : 1 === b ? 1 : i(n(b), c, e)
            };
            z.getControlPoints = function () {
                return [{x: a, y: c}, {x: d, y: e}]
            };
            var A = "generateBezier(" + [a, c, d, e] + ")";
            return z.toString = function () {
                return A
            }, z
        }

        function j(a, b) {
            var c = a;
            return p.isString(a) ? t.Easings[a] || (c = !1) : c = p.isArray(a) && 1 === a.length ? h.apply(null, a) : p.isArray(a) && 2 === a.length ? u.apply(null, a.concat([b])) : p.isArray(a) && 4 === a.length ? i.apply(null, a) : !1, c === !1 && (c = t.Easings[t.defaults.easing] ? t.defaults.easing : s), c
        }

        function k(a) {
            if (a) for (var b = (new Date).getTime(), c = 0, e = t.State.calls.length; e > c; c++) if (t.State.calls[c]) {
                var f = t.State.calls[c], h = f[0], i = f[2], j = f[3], n = !!j;
                j || (j = t.State.calls[c][3] = b - 16);
                for (var o = Math.min((b - j) / i.duration, 1), q = 0, r = h.length; r > q; q++) {
                    var s = h[q], u = s.element;
                    if (g(u)) {
                        var w = !1;
                        if (i.display !== d && null !== i.display && "none" !== i.display) {
                            if ("flex" === i.display) {
                                var y = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                m.each(y, function (a, b) {
                                    v.setPropertyValue(u, "display", b)
                                })
                            }
                            v.setPropertyValue(u, "display", i.display)
                        }
                        i.visibility !== d && "hidden" !== i.visibility && v.setPropertyValue(u, "visibility", i.visibility);
                        for (var z in s) if ("element" !== z) {
                            var A, B = s[z], C = p.isString(B.easing) ? t.Easings[B.easing] : B.easing;
                            if (1 === o) A = B.endValue; else if (A = B.startValue + (B.endValue - B.startValue) * C(o), !n && A === B.currentValue) continue;
                            if (B.currentValue = A, v.Hooks.registered[z]) {
                                var D = v.Hooks.getRoot(z), E = g(u).rootPropertyValueCache[D];
                                E && (B.rootPropertyValue = E)
                            }
                            var F = v.setPropertyValue(u, z, B.currentValue + (0 === parseFloat(A) ? "" : B.unitType), B.rootPropertyValue, B.scrollData);
                            v.Hooks.registered[z] && (g(u).rootPropertyValueCache[D] = v.Normalizations.registered[D] ? v.Normalizations.registered[D]("extract", null, F[1]) : F[1]), "transform" === F[0] && (w = !0)
                        }
                        i.mobileHA && g(u).transformCache.translate3d === d && (g(u).transformCache.translate3d = "(0px, 0px, 0px)", w = !0), w && v.flushTransformCache(u)
                    }
                }
                i.display !== d && "none" !== i.display && (t.State.calls[c][2].display = !1), i.visibility !== d && "hidden" !== i.visibility && (t.State.calls[c][2].visibility = !1), i.progress && i.progress.call(f[1], f[1], o, Math.max(0, j + i.duration - b), j), 1 === o && l(c)
            }
            t.State.isTicking && x(k)
        }

        function l(a, b) {
            if (!t.State.calls[a]) return !1;
            for (var c = t.State.calls[a][0], e = t.State.calls[a][1], f = t.State.calls[a][2], h = t.State.calls[a][4], i = !1, j = 0, k = c.length; k > j; j++) {
                var l = c[j].element;
                if (b || f.loop || ("none" === f.display && v.setPropertyValue(l, "display", f.display), "hidden" === f.visibility && v.setPropertyValue(l, "visibility", f.visibility)), f.loop !== !0 && (m.queue(l)[1] === d || !/\.velocityQueueEntryFlag/i.test(m.queue(l)[1])) && g(l)) {
                    g(l).isAnimating = !1, g(l).rootPropertyValueCache = {};
                    var n = !1;
                    m.each(v.Lists.transforms3D, function (a, b) {
                        var c = /^scale/.test(b) ? 1 : 0, e = g(l).transformCache[b];
                        g(l).transformCache[b] !== d && new RegExp("^\\(" + c + "[^.]").test(e) && (n = !0, delete g(l).transformCache[b])
                    }), f.mobileHA && (n = !0, delete g(l).transformCache.translate3d), n && v.flushTransformCache(l), v.Values.removeClass(l, "velocity-animating")
                }
                if (!b && f.complete && !f.loop && j === k - 1) try {
                    f.complete.call(e, e)
                } catch (o) {
                    setTimeout(function () {
                        throw o
                    }, 1)
                }
                h && f.loop !== !0 && h(e), f.loop !== !0 || b || (m.each(g(l).tweensContainer, function (a, b) {
                    /^rotate/.test(a) && 360 === parseFloat(b.endValue) && (b.endValue = 0, b.startValue = 360)
                }), t(l, "reverse", {loop: !0, delay: f.delay})), f.queue !== !1 && m.dequeue(l, f.queue)
            }
            t.State.calls[a] = !1;
            for (var p = 0, q = t.State.calls.length; q > p; p++) if (t.State.calls[p] !== !1) {
                i = !0;
                break
            }
            i === !1 && (t.State.isTicking = !1, delete t.State.calls, t.State.calls = [])
        }

        var m, n = function () {
            if (c.documentMode) return c.documentMode;
            for (var a = 7; a > 4; a--) {
                var b = c.createElement("div");
                if (b.innerHTML = "<!--[if IE " + a + "]><span></span><![endif]-->", b.getElementsByTagName("span").length) return b = null, a
            }
            return d
        }(), o = function () {
            var a = 0;
            return b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || function (b) {
                var c, d = (new Date).getTime();
                return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function () {
                    b(d + c)
                }, c)
            }
        }(), p = {
            isString: function (a) {
                return "string" == typeof a
            }, isArray: Array.isArray || function (a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            }, isFunction: function (a) {
                return "[object Function]" === Object.prototype.toString.call(a)
            }, isNode: function (a) {
                return a && a.nodeType
            }, isNodeList: function (a) {
                return "object" == typeof a && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a)) && a.length !== d && (0 === a.length || "object" == typeof a[0] && a[0].nodeType > 0)
            }, isWrapped: function (a) {
                return a && (a.jquery || b.Zepto && b.Zepto.zepto.isZ(a))
            }, isSVG: function (a) {
                return b.SVGElement && a instanceof b.SVGElement
            }, isEmptyObject: function (a) {
                for (var b in a) return !1;
                return !0
            }
        }, q = !1;
        if (a.fn && a.fn.jquery ? (m = a, q = !0) : m = b.Velocity.Utilities, 8 >= n && !q) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= n) return void(jQuery.fn.velocity = jQuery.fn.animate);
        var r = 400, s = "swing", t = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: b.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: c.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Utilities: m,
            Redirects: {},
            Easings: {},
            Promise: b.Promise,
            defaults: {
                queue: "",
                duration: r,
                easing: s,
                begin: d,
                complete: d,
                progress: d,
                display: d,
                visibility: d,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function (a) {
                m.data(a, "velocity", {
                    isSVG: p.isSVG(a),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                })
            },
            hook: null,
            mock: !1,
            version: {major: 1, minor: 1, patch: 0},
            debug: !1
        };
        b.pageYOffset !== d ? (t.State.scrollAnchor = b, t.State.scrollPropertyLeft = "pageXOffset", t.State.scrollPropertyTop = "pageYOffset") : (t.State.scrollAnchor = c.documentElement || c.body.parentNode || c.body, t.State.scrollPropertyLeft = "scrollLeft", t.State.scrollPropertyTop = "scrollTop");
        var u = function () {
            function a(a) {
                return -a.tension * a.x - a.friction * a.v
            }

            function b(b, c, d) {
                var e = {x: b.x + d.dx * c, v: b.v + d.dv * c, tension: b.tension, friction: b.friction};
                return {dx: e.v, dv: a(e)}
            }

            function c(c, d) {
                var e = {dx: c.v, dv: a(c)}, f = b(c, .5 * d, e), g = b(c, .5 * d, f), h = b(c, d, g),
                    i = 1 / 6 * (e.dx + 2 * (f.dx + g.dx) + h.dx), j = 1 / 6 * (e.dv + 2 * (f.dv + g.dv) + h.dv);
                return c.x = c.x + i * d, c.v = c.v + j * d, c
            }

            return function d(a, b, e) {
                var f, g, h, i = {x: -1, v: 0, tension: null, friction: null}, j = [0], k = 0, l = 1e-4, m = .016;
                for (a = parseFloat(a) || 500, b = parseFloat(b) || 20, e = e || null, i.tension = a, i.friction = b, f = null !== e, f ? (k = d(a, b), g = k / e * m) : g = m; h = c(h || i, g), j.push(1 + h.x), k += 16, Math.abs(h.x) > l && Math.abs(h.v) > l;) ;
                return f ? function (a) {
                    return j[a * (j.length - 1) | 0]
                } : k
            }
        }();
        t.Easings = {
            linear: function (a) {
                return a
            }, swing: function (a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }, spring: function (a) {
                return 1 - Math.cos(4.5 * a * Math.PI) * Math.exp(6 * -a)
            }
        }, m.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (a, b) {
            t.Easings[b[0]] = i.apply(null, b[1])
        });
        var v = t.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                }, registered: {}, register: function () {
                    for (var a = 0; a < v.Lists.colors.length; a++) {
                        var b = "color" === v.Lists.colors[a] ? "0 0 0 1" : "255 255 255 1";
                        v.Hooks.templates[v.Lists.colors[a]] = ["Red Green Blue Alpha", b]
                    }
                    var c, d, e;
                    if (n) for (c in v.Hooks.templates) {
                        d = v.Hooks.templates[c], e = d[0].split(" ");
                        var f = d[1].match(v.RegEx.valueSplit);
                        "Color" === e[0] && (e.push(e.shift()), f.push(f.shift()), v.Hooks.templates[c] = [e.join(" "), f.join(" ")])
                    }
                    for (c in v.Hooks.templates) {
                        d = v.Hooks.templates[c], e = d[0].split(" ");
                        for (var a in e) {
                            var g = c + e[a], h = a;
                            v.Hooks.registered[g] = [c, h]
                        }
                    }
                }, getRoot: function (a) {
                    var b = v.Hooks.registered[a];
                    return b ? b[0] : a
                }, cleanRootPropertyValue: function (a, b) {
                    return v.RegEx.valueUnwrap.test(b) && (b = b.match(v.RegEx.valueUnwrap)[1]), v.Values.isCSSNullValue(b) && (b = v.Hooks.templates[a][1]), b
                }, extractValue: function (a, b) {
                    var c = v.Hooks.registered[a];
                    if (c) {
                        var d = c[0], e = c[1];
                        return b = v.Hooks.cleanRootPropertyValue(d, b), b.toString().match(v.RegEx.valueSplit)[e]
                    }
                    return b
                }, injectValue: function (a, b, c) {
                    var d = v.Hooks.registered[a];
                    if (d) {
                        var e, f, g = d[0], h = d[1];
                        return c = v.Hooks.cleanRootPropertyValue(g, c), e = c.toString().match(v.RegEx.valueSplit), e[h] = b, f = e.join(" ")
                    }
                    return c
                }
            },
            Normalizations: {
                registered: {
                    clip: function (a, b, c) {
                        switch (a) {
                            case"name":
                                return "clip";
                            case"extract":
                                var d;
                                return v.RegEx.wrappedValueAlreadyExtracted.test(c) ? d = c : (d = c.toString().match(v.RegEx.valueUnwrap), d = d ? d[1].replace(/,(\s+)?/g, " ") : c), d;
                            case"inject":
                                return "rect(" + c + ")"
                        }
                    }, blur: function (a, b, c) {
                        switch (a) {
                            case"name":
                                return "-webkit-filter";
                            case"extract":
                                var d = parseFloat(c);
                                if (!d && 0 !== d) {
                                    var e = c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    d = e ? e[1] : 0
                                }
                                return d;
                            case"inject":
                                return parseFloat(c) ? "blur(" + c + ")" : "none"
                        }
                    }, opacity: function (a, b, c) {
                        if (8 >= n) switch (a) {
                            case"name":
                                return "filter";
                            case"extract":
                                var d = c.toString().match(/alpha\(opacity=(.*)\)/i);
                                return c = d ? d[1] / 100 : 1;
                            case"inject":
                                return b.style.zoom = 1, parseFloat(c) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(c), 10) + ")"
                        } else switch (a) {
                            case"name":
                                return "opacity";
                            case"extract":
                                return c;
                            case"inject":
                                return c
                        }
                    }
                }, register: function () {
                    9 >= n || t.State.isGingerbread || (v.Lists.transformsBase = v.Lists.transformsBase.concat(v.Lists.transforms3D));
                    for (var a = 0; a < v.Lists.transformsBase.length; a++) !function () {
                        var b = v.Lists.transformsBase[a];
                        v.Normalizations.registered[b] = function (a, c, e) {
                            switch (a) {
                                case"name":
                                    return "transform";
                                case"extract":
                                    return g(c) === d || g(c).transformCache[b] === d ? /^scale/i.test(b) ? 1 : 0 : g(c).transformCache[b].replace(/[()]/g, "");
                                case"inject":
                                    var f = !1;
                                    switch (b.substr(0, b.length - 1)) {
                                        case"translate":
                                            f = !/(%|px|em|rem|vw|vh|\d)$/i.test(e);
                                            break;
                                        case"scal":
                                        case"scale":
                                            t.State.isAndroid && g(c).transformCache[b] === d && 1 > e && (e = 1), f = !/(\d)$/i.test(e);
                                            break;
                                        case"skew":
                                            f = !/(deg|\d)$/i.test(e);
                                            break;
                                        case"rotate":
                                            f = !/(deg|\d)$/i.test(e)
                                    }
                                    return f || (g(c).transformCache[b] = "(" + e + ")"), g(c).transformCache[b]
                            }
                        }
                    }();
                    for (var a = 0; a < v.Lists.colors.length; a++) !function () {
                        var b = v.Lists.colors[a];
                        v.Normalizations.registered[b] = function (a, c, e) {
                            switch (a) {
                                case"name":
                                    return b;
                                case"extract":
                                    var f;
                                    if (v.RegEx.wrappedValueAlreadyExtracted.test(e)) f = e; else {
                                        var g, h = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(e) ? g = h[e] !== d ? h[e] : h.black : v.RegEx.isHex.test(e) ? g = "rgb(" + v.Values.hexToRgb(e).join(" ") + ")" : /^rgba?\(/i.test(e) || (g = h.black), f = (g || e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= n || 3 !== f.split(" ").length || (f += " 1"), f;
                                case"inject":
                                    return 8 >= n ? 4 === e.split(" ").length && (e = e.split(/\s+/).slice(0, 3).join(" ")) : 3 === e.split(" ").length && (e += " 1"), (8 >= n ? "rgb" : "rgba") + "(" + e.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function (a) {
                    return a.replace(/-(\w)/g, function (a, b) {
                        return b.toUpperCase()
                    })
                }, SVGAttribute: function (a) {
                    var b = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (n || t.State.isAndroid && !t.State.isChrome) && (b += "|transform"), new RegExp("^(" + b + ")$", "i").test(a)
                }, prefixCheck: function (a) {
                    if (t.State.prefixMatches[a]) return [t.State.prefixMatches[a], !0];
                    for (var b = ["", "Webkit", "Moz", "ms", "O"], c = 0, d = b.length; d > c; c++) {
                        var e;
                        if (e = 0 === c ? a : b[c] + a.replace(/^\w/, function (a) {
                                return a.toUpperCase()
                            }), p.isString(t.State.prefixElement.style[e])) return t.State.prefixMatches[a] = e, [e, !0]
                    }
                    return [a, !1]
                }
            },
            Values: {
                hexToRgb: function (a) {
                    var b, c = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return a = a.replace(c, function (a, b, c, d) {
                        return b + b + c + c + d + d
                    }), b = d.exec(a), b ? [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] : [0, 0, 0]
                }, isCSSNullValue: function (a) {
                    return 0 == a || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)
                }, getUnitType: function (a) {
                    return /^(rotate|skew)/i.test(a) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a) ? "" : "px"
                }, getDisplayType: function (a) {
                    var b = a && a.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b) ? "inline" : /^(li)$/i.test(b) ? "list-item" : /^(tr)$/i.test(b) ? "table-row" : "block"
                }, addClass: function (a, b) {
                    a.classList ? a.classList.add(b) : a.className += (a.className.length ? " " : "") + b
                }, removeClass: function (a, b) {
                    a.classList ? a.classList.remove(b) : a.className = a.className.toString().replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function (a, c, e, f) {
                function h(a, c) {
                    function e() {
                        j && v.setPropertyValue(a, "display", "none")
                    }

                    var i = 0;
                    if (8 >= n) i = m.css(a, c); else {
                        var j = !1;
                        if (/^(width|height)$/.test(c) && 0 === v.getPropertyValue(a, "display") && (j = !0, v.setPropertyValue(a, "display", v.Values.getDisplayType(a))), !f) {
                            if ("height" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var k = a.offsetHeight - (parseFloat(v.getPropertyValue(a, "borderTopWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderBottomWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingTop")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingBottom")) || 0);
                                return e(), k
                            }
                            if ("width" === c && "border-box" !== v.getPropertyValue(a, "boxSizing").toString().toLowerCase()) {
                                var l = a.offsetWidth - (parseFloat(v.getPropertyValue(a, "borderLeftWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "borderRightWidth")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingLeft")) || 0) - (parseFloat(v.getPropertyValue(a, "paddingRight")) || 0);
                                return e(), l
                            }
                        }
                        var o;
                        o = g(a) === d ? b.getComputedStyle(a, null) : g(a).computedStyle ? g(a).computedStyle : g(a).computedStyle = b.getComputedStyle(a, null), (n || t.State.isFirefox) && "borderColor" === c && (c = "borderTopColor"), i = 9 === n && "filter" === c ? o.getPropertyValue(c) : o[c], ("" === i || null === i) && (i = a.style[c]), e()
                    }
                    if ("auto" === i && /^(top|right|bottom|left)$/i.test(c)) {
                        var p = h(a, "position");
                        ("fixed" === p || "absolute" === p && /top|left/i.test(c)) && (i = m(a).position()[c] + "px")
                    }
                    return i
                }

                var i;
                if (v.Hooks.registered[c]) {
                    var j = c, k = v.Hooks.getRoot(j);
                    e === d && (e = v.getPropertyValue(a, v.Names.prefixCheck(k)[0])), v.Normalizations.registered[k] && (e = v.Normalizations.registered[k]("extract", a, e)), i = v.Hooks.extractValue(j, e)
                } else if (v.Normalizations.registered[c]) {
                    var l, o;
                    l = v.Normalizations.registered[c]("name", a), "transform" !== l && (o = h(a, v.Names.prefixCheck(l)[0]), v.Values.isCSSNullValue(o) && v.Hooks.templates[c] && (o = v.Hooks.templates[c][1])), i = v.Normalizations.registered[c]("extract", a, o)
                }
                return /^[\d-]/.test(i) || (i = g(a) && g(a).isSVG && v.Names.SVGAttribute(c) ? /^(height|width)$/i.test(c) ? a.getBBox()[c] : a.getAttribute(c) : h(a, v.Names.prefixCheck(c)[0])), v.Values.isCSSNullValue(i) && (i = 0), t.debug >= 2 && console.log("Get " + c + ": " + i), i
            },
            setPropertyValue: function (a, c, d, e, f) {
                var h = c;
                if ("scroll" === c) f.container ? f.container["scroll" + f.direction] = d : "Left" === f.direction ? b.scrollTo(d, f.alternateValue) : b.scrollTo(f.alternateValue, d); else if (v.Normalizations.registered[c] && "transform" === v.Normalizations.registered[c]("name", a)) v.Normalizations.registered[c]("inject", a, d), h = "transform", d = g(a).transformCache[c]; else {
                    if (v.Hooks.registered[c]) {
                        var i = c, j = v.Hooks.getRoot(c);
                        e = e || v.getPropertyValue(a, j), d = v.Hooks.injectValue(i, d, e), c = j
                    }
                    if (v.Normalizations.registered[c] && (d = v.Normalizations.registered[c]("inject", a, d), c = v.Normalizations.registered[c]("name", a)), h = v.Names.prefixCheck(c)[0], 8 >= n) try {
                        a.style[h] = d
                    } catch (k) {
                        t.debug && console.log("Browser does not support [" + d + "] for [" + h + "]")
                    } else g(a) && g(a).isSVG && v.Names.SVGAttribute(c) ? a.setAttribute(c, d) : a.style[h] = d;
                    t.debug >= 2 && console.log("Set " + c + " (" + h + "): " + d)
                }
                return [h, d]
            },
            flushTransformCache: function (a) {
                function b(b) {
                    return parseFloat(v.getPropertyValue(a, b))
                }

                var c = "";
                if ((n || t.State.isAndroid && !t.State.isChrome) && g(a).isSVG) {
                    var d = {
                        translate: [b("translateX"), b("translateY")],
                        skewX: [b("skewX")],
                        skewY: [b("skewY")],
                        scale: 1 !== b("scale") ? [b("scale"), b("scale")] : [b("scaleX"), b("scaleY")],
                        rotate: [b("rotateZ"), 0, 0]
                    };
                    m.each(g(a).transformCache, function (a) {
                        /^translate/i.test(a) ? a = "translate" : /^scale/i.test(a) ? a = "scale" : /^rotate/i.test(a) && (a = "rotate"), d[a] && (c += a + "(" + d[a].join(" ") + ") ", delete d[a])
                    })
                } else {
                    var e, f;
                    m.each(g(a).transformCache, function (b) {
                        return e = g(a).transformCache[b], "transformPerspective" === b ? (f = e, !0) : (9 === n && "rotateZ" === b && (b = "rotate"), void(c += b + e + " "))
                    }), f && (c = "perspective" + f + " " + c)
                }
                v.setPropertyValue(a, "transform", c)
            }
        };
        v.Hooks.register(), v.Normalizations.register(), t.hook = function (a, b, c) {
            var e = d;
            return a = f(a), m.each(a, function (a, f) {
                if (g(f) === d && t.init(f), c === d) e === d && (e = t.CSS.getPropertyValue(f, b)); else {
                    var h = t.CSS.setPropertyValue(f, b, c);
                    "transform" === h[0] && t.CSS.flushTransformCache(f), e = h
                }
            }), e
        };
        var w = function () {
            function a() {
                return i ? C.promise || null : n
            }

            function h() {
                function a() {
                    function a(a, b) {
                        var c = d, e = d, f = d;
                        return p.isArray(a) ? (c = a[0], !p.isArray(a[1]) && /^[\d-]/.test(a[1]) || p.isFunction(a[1]) || v.RegEx.isHex.test(a[1]) ? f = a[1] : (p.isString(a[1]) && !v.RegEx.isHex.test(a[1]) || p.isArray(a[1])) && (e = b ? a[1] : j(a[1], i.duration), a[2] !== d && (f = a[2]))) : c = a, b || (e = e || i.easing), p.isFunction(c) && (c = c.call(h, z, y)), p.isFunction(f) && (f = f.call(h, z, y)), [c || 0, e, f]
                    }

                    function n(a, b) {
                        var c, d;
                        return d = (b || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (a) {
                            return c = a, ""
                        }), c || (c = v.Values.getUnitType(a)), [d, c]
                    }

                    function o() {
                        var a = {
                                myParent: h.parentNode || c.body,
                                position: v.getPropertyValue(h, "position"),
                                fontSize: v.getPropertyValue(h, "fontSize")
                            }, d = a.position === J.lastPosition && a.myParent === J.lastParent,
                            e = a.fontSize === J.lastFontSize;
                        J.lastParent = a.myParent, J.lastPosition = a.position, J.lastFontSize = a.fontSize;
                        var f = 100, i = {};
                        if (e && d) i.emToPx = J.lastEmToPx, i.percentToPxWidth = J.lastPercentToPxWidth, i.percentToPxHeight = J.lastPercentToPxHeight; else {
                            var j = g(h).isSVG ? c.createElementNS("http://www.w3.org/2000/svg", "rect") : c.createElement("div");
                            t.init(j), a.myParent.appendChild(j), m.each(["overflow", "overflowX", "overflowY"], function (a, b) {
                                t.CSS.setPropertyValue(j, b, "hidden")
                            }), t.CSS.setPropertyValue(j, "position", a.position), t.CSS.setPropertyValue(j, "fontSize", a.fontSize), t.CSS.setPropertyValue(j, "boxSizing", "content-box"), m.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (a, b) {
                                t.CSS.setPropertyValue(j, b, f + "%")
                            }), t.CSS.setPropertyValue(j, "paddingLeft", f + "em"), i.percentToPxWidth = J.lastPercentToPxWidth = (parseFloat(v.getPropertyValue(j, "width", null, !0)) || 1) / f, i.percentToPxHeight = J.lastPercentToPxHeight = (parseFloat(v.getPropertyValue(j, "height", null, !0)) || 1) / f, i.emToPx = J.lastEmToPx = (parseFloat(v.getPropertyValue(j, "paddingLeft")) || 1) / f, a.myParent.removeChild(j)
                        }
                        return null === J.remToPx && (J.remToPx = parseFloat(v.getPropertyValue(c.body, "fontSize")) || 16), null === J.vwToPx && (J.vwToPx = parseFloat(b.innerWidth) / 100, J.vhToPx = parseFloat(b.innerHeight) / 100), i.remToPx = J.remToPx, i.vwToPx = J.vwToPx, i.vhToPx = J.vhToPx, t.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(i), h), i
                    }

                    if (i.begin && 0 === z) try {
                        i.begin.call(q, q)
                    } catch (r) {
                        setTimeout(function () {
                            throw r
                        }, 1)
                    }
                    if ("scroll" === D) {
                        var w, x, A, B = /^x$/i.test(i.axis) ? "Left" : "Top", E = parseFloat(i.offset) || 0;
                        i.container ? p.isWrapped(i.container) || p.isNode(i.container) ? (i.container = i.container[0] || i.container, w = i.container["scroll" + B], A = w + m(h).position()[B.toLowerCase()] + E) : i.container = null : (w = t.State.scrollAnchor[t.State["scrollProperty" + B]], x = t.State.scrollAnchor[t.State["scrollProperty" + ("Left" === B ? "Top" : "Left")]], A = m(h).offset()[B.toLowerCase()] + E), l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: w,
                                currentValue: w,
                                endValue: A,
                                unitType: "",
                                easing: i.easing,
                                scrollData: {container: i.container, direction: B, alternateValue: x}
                            }, element: h
                        }, t.debug && console.log("tweensContainer (scroll): ", l.scroll, h)
                    } else if ("reverse" === D) {
                        if (!g(h).tweensContainer) return void m.dequeue(h, i.queue);
                        "none" === g(h).opts.display && (g(h).opts.display = "auto"), "hidden" === g(h).opts.visibility && (g(h).opts.visibility = "visible"), g(h).opts.loop = !1, g(h).opts.begin = null, g(h).opts.complete = null, u.easing || delete i.easing, u.duration || delete i.duration, i = m.extend({}, g(h).opts, i);
                        var F = m.extend(!0, {}, g(h).tweensContainer);
                        for (var G in F) if ("element" !== G) {
                            var H = F[G].startValue;
                            F[G].startValue = F[G].currentValue = F[G].endValue, F[G].endValue = H, p.isEmptyObject(u) || (F[G].easing = i.easing), t.debug && console.log("reverse tweensContainer (" + G + "): " + JSON.stringify(F[G]), h)
                        }
                        l = F
                    } else if ("start" === D) {
                        var F;
                        g(h).tweensContainer && g(h).isAnimating === !0 && (F = g(h).tweensContainer), m.each(s, function (b, c) {
                            if (RegExp("^" + v.Lists.colors.join("$|^") + "$").test(b)) {
                                var e = a(c, !0), f = e[0], g = e[1], h = e[2];
                                if (v.RegEx.isHex.test(f)) {
                                    for (var i = ["Red", "Green", "Blue"], j = v.Values.hexToRgb(f), k = h ? v.Values.hexToRgb(h) : d, l = 0; l < i.length; l++) {
                                        var m = [j[l]];
                                        g && m.push(g), k !== d && m.push(k[l]), s[b + i[l]] = m
                                    }
                                    delete s[b]
                                }
                            }
                        });
                        for (var I in s) {
                            var L = a(s[I]), M = L[0], N = L[1], O = L[2];
                            I = v.Names.camelCase(I);
                            var P = v.Hooks.getRoot(I), Q = !1;
                            if (g(h).isSVG || v.Names.prefixCheck(P)[1] !== !1 || v.Normalizations.registered[P] !== d) {
                                (i.display !== d && null !== i.display && "none" !== i.display || i.visibility !== d && "hidden" !== i.visibility) && /opacity|filter/.test(I) && !O && 0 !== M && (O = 0), i._cacheValues && F && F[I] ? (O === d && (O = F[I].endValue + F[I].unitType), Q = g(h).rootPropertyValueCache[P]) : v.Hooks.registered[I] ? O === d ? (Q = v.getPropertyValue(h, P), O = v.getPropertyValue(h, I, Q)) : Q = v.Hooks.templates[P][1] : O === d && (O = v.getPropertyValue(h, I));
                                var R, S, T, U = !1;
                                if (R = n(I, O), O = R[0], T = R[1], R = n(I, M), M = R[0].replace(/^([+-\/*])=/, function (a, b) {
                                        return U = b, ""
                                    }), S = R[1], O = parseFloat(O) || 0, M = parseFloat(M) || 0, "%" === S && (/^(fontSize|lineHeight)$/.test(I) ? (M /= 100, S = "em") : /^scale/.test(I) ? (M /= 100, S = "") : /(Red|Green|Blue)$/i.test(I) && (M = M / 100 * 255, S = "")), /[\/*]/.test(U)) S = T; else if (T !== S && 0 !== O) if (0 === M) S = T; else {
                                    f = f || o();
                                    var V = /margin|padding|left|right|width|text|word|letter/i.test(I) || /X$/.test(I) || "x" === I ? "x" : "y";
                                    switch (T) {
                                        case"%":
                                            O *= "x" === V ? f.percentToPxWidth : f.percentToPxHeight;
                                            break;
                                        case"px":
                                            break;
                                        default:
                                            O *= f[T + "ToPx"]
                                    }
                                    switch (S) {
                                        case"%":
                                            O *= 1 / ("x" === V ? f.percentToPxWidth : f.percentToPxHeight);
                                            break;
                                        case"px":
                                            break;
                                        default:
                                            O *= 1 / f[S + "ToPx"]
                                    }
                                }
                                switch (U) {
                                    case"+":
                                        M = O + M;
                                        break;
                                    case"-":
                                        M = O - M;
                                        break;
                                    case"*":
                                        M = O * M;
                                        break;
                                    case"/":
                                        M = O / M
                                }
                                l[I] = {
                                    rootPropertyValue: Q,
                                    startValue: O,
                                    currentValue: O,
                                    endValue: M,
                                    unitType: S,
                                    easing: N
                                }, t.debug && console.log("tweensContainer (" + I + "): " + JSON.stringify(l[I]), h)
                            } else t.debug && console.log("Skipping [" + P + "] due to a lack of browser support.")
                        }
                        l.element = h
                    }
                    l.element && (v.Values.addClass(h, "velocity-animating"), K.push(l), "" === i.queue && (g(h).tweensContainer = l, g(h).opts = i), g(h).isAnimating = !0, z === y - 1 ? (t.State.calls.length > 1e4 && (t.State.calls = e(t.State.calls)), t.State.calls.push([K, q, i, null, C.resolver]), t.State.isTicking === !1 && (t.State.isTicking = !0, k())) : z++)
                }

                var f, h = this, i = m.extend({}, t.defaults, u), l = {};
                switch (g(h) === d && t.init(h), parseFloat(i.delay) && i.queue !== !1 && m.queue(h, i.queue, function (a) {
                    t.velocityQueueEntryFlag = !0, g(h).delayTimer = {
                        setTimeout: setTimeout(a, parseFloat(i.delay)),
                        next: a
                    }
                }), i.duration.toString().toLowerCase()) {
                    case"fast":
                        i.duration = 200;
                        break;
                    case"normal":
                        i.duration = r;
                        break;
                    case"slow":
                        i.duration = 600;
                        break;
                    default:
                        i.duration = parseFloat(i.duration) || 1
                }
                t.mock !== !1 && (t.mock === !0 ? i.duration = i.delay = 1 : (i.duration *= parseFloat(t.mock) || 1, i.delay *= parseFloat(t.mock) || 1)), i.easing = j(i.easing, i.duration), i.begin && !p.isFunction(i.begin) && (i.begin = null), i.progress && !p.isFunction(i.progress) && (i.progress = null), i.complete && !p.isFunction(i.complete) && (i.complete = null), i.display !== d && null !== i.display && (i.display = i.display.toString().toLowerCase(), "auto" === i.display && (i.display = t.CSS.Values.getDisplayType(h))), i.visibility !== d && null !== i.visibility && (i.visibility = i.visibility.toString().toLowerCase()), i.mobileHA = i.mobileHA && t.State.isMobile && !t.State.isGingerbread, i.queue === !1 ? i.delay ? setTimeout(a, i.delay) : a() : m.queue(h, i.queue, function (b, c) {
                    return c === !0 ? (C.promise && C.resolver(q), !0) : (t.velocityQueueEntryFlag = !0, void a(b))
                }), "" !== i.queue && "fx" !== i.queue || "inprogress" === m.queue(h)[0] || m.dequeue(h)
            }

            var i, n, o, q, s, u,
                x = arguments[0] && (m.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || p.isString(arguments[0].properties));
            if (p.isWrapped(this) ? (i = !1, o = 0, q = this, n = this) : (i = !0, o = 1, q = x ? arguments[0].elements : arguments[0]), q = f(q)) {
                x ? (s = arguments[0].properties, u = arguments[0].options) : (s = arguments[o], u = arguments[o + 1]);
                var y = q.length, z = 0;
                if ("stop" !== s && !m.isPlainObject(u)) {
                    var A = o + 1;
                    u = {};
                    for (var B = A; B < arguments.length; B++) p.isArray(arguments[B]) || !/^(fast|normal|slow)$/i.test(arguments[B]) && !/^\d/.test(arguments[B]) ? p.isString(arguments[B]) || p.isArray(arguments[B]) ? u.easing = arguments[B] : p.isFunction(arguments[B]) && (u.complete = arguments[B]) : u.duration = arguments[B]
                }
                var C = {promise: null, resolver: null, rejecter: null};
                i && t.Promise && (C.promise = new t.Promise(function (a, b) {
                    C.resolver = a, C.rejecter = b
                }));
                var D;
                switch (s) {
                    case"scroll":
                        D = "scroll";
                        break;
                    case"reverse":
                        D = "reverse";
                        break;
                    case"stop":
                        m.each(q, function (a, b) {
                            g(b) && g(b).delayTimer && (clearTimeout(g(b).delayTimer.setTimeout), g(b).delayTimer.next && g(b).delayTimer.next(), delete g(b).delayTimer)
                        });
                        var E = [];
                        return m.each(t.State.calls, function (a, b) {
                            b && m.each(b[1], function (c, e) {
                                var f = p.isString(u) ? u : "";
                                return u !== d && b[2].queue !== f ? !0 : void m.each(q, function (b, c) {
                                    c === e && (u !== d && (m.each(m.queue(c, f), function (a, b) {
                                        p.isFunction(b) && b(null, !0)
                                    }), m.queue(c, f, [])), g(c) && "" === f && m.each(g(c).tweensContainer, function (a, b) {
                                        b.endValue = b.currentValue
                                    }), E.push(a))
                                })
                            })
                        }), m.each(E, function (a, b) {
                            l(b, !0)
                        }), C.promise && C.resolver(q), a();
                    default:
                        if (!m.isPlainObject(s) || p.isEmptyObject(s)) {
                            if (p.isString(s) && t.Redirects[s]) {
                                var F = m.extend({}, u), G = F.duration, H = F.delay || 0;
                                return F.backwards === !0 && (q = m.extend(!0, [], q).reverse()), m.each(q, function (a, b) {
                                    parseFloat(F.stagger) ? F.delay = H + parseFloat(F.stagger) * a : p.isFunction(F.stagger) && (F.delay = H + F.stagger.call(b, a, y)), F.drag && (F.duration = parseFloat(G) || (/^(callout|transition)/.test(s) ? 1e3 : r), F.duration = Math.max(F.duration * (F.backwards ? 1 - a / y : (a + 1) / y), .75 * F.duration, 200)), t.Redirects[s].call(b, b, F || {}, a, y, q, C.promise ? C : d)
                                }), a()
                            }
                            var I = "Velocity: First argument (" + s + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return C.promise ? C.rejecter(new Error(I)) : console.log(I), a()
                        }
                        D = "start"
                }
                var J = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                }, K = [];
                m.each(q, function (a, b) {
                    p.isNode(b) && h.call(b)
                });
                var L, F = m.extend({}, t.defaults, u);
                if (F.loop = parseInt(F.loop), L = 2 * F.loop - 1, F.loop) for (var M = 0; L > M; M++) {
                    var N = {delay: F.delay, progress: F.progress};
                    M === L - 1 && (N.display = F.display, N.visibility = F.visibility, N.complete = F.complete), w(q, "reverse", N)
                }
                return a()
            }
        };
        t = m.extend(w, t), t.animate = w;
        var x = b.requestAnimationFrame || o;
        return t.State.isMobile || c.hidden === d || c.addEventListener("visibilitychange", function () {
            c.hidden ? (x = function (a) {
                return setTimeout(function () {
                    a(!0)
                }, 16)
            }, k()) : x = b.requestAnimationFrame || o
        }), a.Velocity = t, a !== b && (a.fn.velocity = w, a.fn.velocity.defaults = t.defaults), m.each(["Down", "Up"], function (a, b) {
            t.Redirects["slide" + b] = function (a, c, e, f, g, h) {
                var i = m.extend({}, c), j = i.begin, k = i.complete,
                    l = {height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: ""}, n = {};
                i.display === d && (i.display = "Down" === b ? "inline" === t.CSS.Values.getDisplayType(a) ? "inline-block" : "block" : "none"), i.begin = function () {
                    j && j.call(g, g);
                    for (var c in l) {
                        n[c] = a.style[c];
                        var d = t.CSS.getPropertyValue(a, c);
                        l[c] = "Down" === b ? [d, 0] : [0, d]
                    }
                    n.overflow = a.style.overflow, a.style.overflow = "hidden"
                }, i.complete = function () {
                    for (var b in n) a.style[b] = n[b];
                    k && k.call(g, g), h && h.resolver(g)
                }, t(a, l, i)
            }
        }), m.each(["In", "Out"], function (a, b) {
            t.Redirects["fade" + b] = function (a, c, e, f, g, h) {
                var i = m.extend({}, c), j = {opacity: "In" === b ? 1 : 0}, k = i.complete;
                i.complete = e !== f - 1 ? i.begin = null : function () {
                    k && k.call(g, g), h && h.resolver(g)
                }, i.display === d && (i.display = "In" === b ? "auto" : "none"), t(this, j, i)
            }
        }), t
    }(window.jQuery || window.Zepto || window, window, document)
}), !function (a, b, c, d) {
    "use strict";

    function e(a, b, c) {
        return setTimeout(k(a, c), b)
    }

    function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
    }

    function g(a, b, c) {
        var e;
        if (a) if (a.forEach) a.forEach(b, c); else if (a.length !== d) for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++; else for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }

    function h(a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length;) (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
        return a
    }

    function i(a, b) {
        return h(a, b, !0)
    }

    function j(a, b, c) {
        var d, e = b.prototype;
        d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && h(d, c)
    }

    function k(a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }

    function l(a, b) {
        return typeof a == kb ? a.apply(b ? b[0] || d : d, b) : a
    }

    function m(a, b) {
        return a === d ? b : a
    }

    function n(a, b, c) {
        g(r(b), function (b) {
            a.addEventListener(b, c, !1)
        })
    }

    function o(a, b, c) {
        g(r(b), function (b) {
            a.removeEventListener(b, c, !1)
        })
    }

    function p(a, b) {
        for (; a;) {
            if (a == b) return !0;
            a = a.parentNode
        }
        return !1
    }

    function q(a, b) {
        return a.indexOf(b) > -1
    }

    function r(a) {
        return a.trim().split(/\s+/g)
    }

    function s(a, b, c) {
        if (a.indexOf && !c) return a.indexOf(b);
        for (var d = 0; d < a.length;) {
            if (c && a[d][c] == b || !c && a[d] === b) return d;
            d++
        }
        return -1
    }

    function t(a) {
        return Array.prototype.slice.call(a, 0)
    }

    function u(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length;) {
            var g = b ? a[f][b] : a[f];
            s(e, g) < 0 && d.push(a[f]), e[f] = g, f++
        }
        return c && (d = b ? d.sort(function (a, c) {
            return a[b] > c[b]
        }) : d.sort()), d
    }

    function v(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ib.length;) {
            if (c = ib[g], e = c ? c + f : b, e in a) return e;
            g++
        }
        return d
    }

    function w() {
        return ob++
    }

    function x(a) {
        var b = a.ownerDocument;
        return b.defaultView || b.parentWindow
    }

    function y(a, b) {
        var c = this;
        this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
            l(a.options.enable, [a]) && c.handler(b)
        }, this.init()
    }

    function z(a) {
        var b, c = a.options.inputClass;
        return new (b = c ? c : rb ? N : sb ? Q : qb ? S : M)(a, A)
    }

    function A(a, b, c) {
        var d = c.pointers.length, e = c.changedPointers.length, f = b & yb && 0 === d - e,
            g = b & (Ab | Bb) && 0 === d - e;
        c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, B(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
    }

    function B(a, b) {
        var c = a.session, d = b.pointers, e = d.length;
        c.firstInput || (c.firstInput = E(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = E(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput, g = c.firstMultiple, h = g ? g.center : f.center, i = b.center = F(d);
        b.timeStamp = nb(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = J(h, i), b.distance = I(h, i), C(c, b), b.offsetDirection = H(b.deltaX, b.deltaY), b.scale = g ? L(g.pointers, d) : 1, b.rotation = g ? K(g.pointers, d) : 0, D(c, b);
        var j = a.element;
        p(b.srcEvent.target, j) && (j = b.srcEvent.target), b.target = j
    }

    function C(a, b) {
        var c = b.center, d = a.offsetDelta || {}, e = a.prevDelta || {}, f = a.prevInput || {};
        (b.eventType === yb || f.eventType === Ab) && (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        }, d = a.offsetDelta = {x: c.x, y: c.y}), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
    }

    function D(a, b) {
        var c, e, f, g, h = a.lastInterval || b, i = b.timeStamp - h.timeStamp;
        if (b.eventType != Bb && (i > xb || h.velocity === d)) {
            var j = h.deltaX - b.deltaX, k = h.deltaY - b.deltaY, l = G(i, j, k);
            e = l.x, f = l.y, c = mb(l.x) > mb(l.y) ? l.x : l.y, g = H(j, k), a.lastInterval = b
        } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
        b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
    }

    function E(a) {
        for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
            clientX: lb(a.pointers[c].clientX),
            clientY: lb(a.pointers[c].clientY)
        }, c++;
        return {timeStamp: nb(), pointers: b, center: F(b), deltaX: a.deltaX, deltaY: a.deltaY}
    }

    function F(a) {
        var b = a.length;
        if (1 === b) return {x: lb(a[0].clientX), y: lb(a[0].clientY)};
        for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
        return {x: lb(c / b), y: lb(d / b)}
    }

    function G(a, b, c) {
        return {x: b / a || 0, y: c / a || 0}
    }

    function H(a, b) {
        return a === b ? Cb : mb(a) >= mb(b) ? a > 0 ? Db : Eb : b > 0 ? Fb : Gb
    }

    function I(a, b, c) {
        c || (c = Kb);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e)
    }

    function J(a, b, c) {
        c || (c = Kb);
        var d = b[c[0]] - a[c[0]], e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI
    }

    function K(a, b) {
        return J(b[1], b[0], Lb) - J(a[1], a[0], Lb)
    }

    function L(a, b) {
        return I(b[0], b[1], Lb) / I(a[0], a[1], Lb)
    }

    function M() {
        this.evEl = Nb, this.evWin = Ob, this.allow = !0, this.pressed = !1, y.apply(this, arguments)
    }

    function N() {
        this.evEl = Rb, this.evWin = Sb, y.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function O() {
        this.evTarget = Ub, this.evWin = Vb, this.started = !1, y.apply(this, arguments)
    }

    function P(a, b) {
        var c = t(a.touches), d = t(a.changedTouches);
        return b & (Ab | Bb) && (c = u(c.concat(d), "identifier", !0)), [c, d]
    }

    function Q() {
        this.evTarget = Xb, this.targetIds = {}, y.apply(this, arguments)
    }

    function R(a, b) {
        var c = t(a.touches), d = this.targetIds;
        if (b & (yb | zb) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
        var e, f, g = t(a.changedTouches), h = [], i = this.target;
        if (f = c.filter(function (a) {
                return p(a.target, i)
            }), b === yb) for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
        for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Ab | Bb) && delete d[g[e].identifier], e++;
        return h.length ? [u(f.concat(h), "identifier", !0), h] : void 0
    }

    function S() {
        y.apply(this, arguments);
        var a = k(this.handler, this);
        this.touch = new Q(this.manager, a), this.mouse = new M(this.manager, a)
    }

    function T(a, b) {
        this.manager = a, this.set(b)
    }

    function U(a) {
        if (q(a, bc)) return bc;
        var b = q(a, cc), c = q(a, dc);
        return b && c ? cc + " " + dc : b || c ? b ? cc : dc : q(a, ac) ? ac : _b
    }

    function V(a) {
        this.id = w(), this.manager = null, this.options = i(a || {}, this.defaults), this.options.enable = m(this.options.enable, !0), this.state = ec, this.simultaneous = {}, this.requireFail = []
    }

    function W(a) {
        return a & jc ? "cancel" : a & hc ? "end" : a & gc ? "move" : a & fc ? "start" : ""
    }

    function X(a) {
        return a == Gb ? "down" : a == Fb ? "up" : a == Db ? "left" : a == Eb ? "right" : ""
    }

    function Y(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a
    }

    function Z() {
        V.apply(this, arguments)
    }

    function $() {
        Z.apply(this, arguments), this.pX = null, this.pY = null
    }

    function _() {
        Z.apply(this, arguments)
    }

    function ab() {
        V.apply(this, arguments), this._timer = null, this._input = null
    }

    function bb() {
        Z.apply(this, arguments)
    }

    function cb() {
        Z.apply(this, arguments)
    }

    function db() {
        V.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function eb(a, b) {
        return b = b || {}, b.recognizers = m(b.recognizers, eb.defaults.preset), new fb(a, b)
    }

    function fb(a, b) {
        b = b || {}, this.options = i(b, eb.defaults), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = z(this), this.touchAction = new T(this, this.options.touchAction), gb(this, !0), g(b.recognizers, function (a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
        }, this)
    }

    function gb(a, b) {
        var c = a.element;
        g(a.options.cssProps, function (a, d) {
            c.style[v(c.style, d)] = b ? a : ""
        })
    }

    function hb(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
    }

    var ib = ["", "webkit", "moz", "MS", "ms", "o"], jb = b.createElement("div"), kb = "function", lb = Math.round,
        mb = Math.abs, nb = Date.now, ob = 1, pb = /mobile|tablet|ip(ad|hone|od)|android/i, qb = "ontouchstart" in a,
        rb = v(a, "PointerEvent") !== d, sb = qb && pb.test(navigator.userAgent), tb = "touch", ub = "pen",
        vb = "mouse", wb = "kinect", xb = 25, yb = 1, zb = 2, Ab = 4, Bb = 8, Cb = 1, Db = 2, Eb = 4, Fb = 8, Gb = 16,
        Hb = Db | Eb, Ib = Fb | Gb, Jb = Hb | Ib, Kb = ["x", "y"], Lb = ["clientX", "clientY"];
    y.prototype = {
        handler: function () {
        }, init: function () {
            this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(x(this.element), this.evWin, this.domHandler)
        }, destroy: function () {
            this.evEl && o(this.element, this.evEl, this.domHandler), this.evTarget && o(this.target, this.evTarget, this.domHandler), this.evWin && o(x(this.element), this.evWin, this.domHandler)
        }
    };
    var Mb = {mousedown: yb, mousemove: zb, mouseup: Ab}, Nb = "mousedown", Ob = "mousemove mouseup";
    j(M, y, {
        handler: function (a) {
            var b = Mb[a.type];
            b & yb && 0 === a.button && (this.pressed = !0), b & zb && 1 !== a.which && (b = Ab), this.pressed && this.allow && (b & Ab && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: vb,
                srcEvent: a
            }))
        }
    });
    var Pb = {pointerdown: yb, pointermove: zb, pointerup: Ab, pointercancel: Bb, pointerout: Bb},
        Qb = {2: tb, 3: ub, 4: vb, 5: wb}, Rb = "pointerdown", Sb = "pointermove pointerup pointercancel";
    a.MSPointerEvent && (Rb = "MSPointerDown", Sb = "MSPointerMove MSPointerUp MSPointerCancel"), j(N, y, {
        handler: function (a) {
            var b = this.store, c = !1, d = a.type.toLowerCase().replace("ms", ""), e = Pb[d],
                f = Qb[a.pointerType] || a.pointerType, g = f == tb, h = s(b, a.pointerId, "pointerId");
            e & yb && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ab | Bb) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1))
        }
    });
    var Tb = {touchstart: yb, touchmove: zb, touchend: Ab, touchcancel: Bb}, Ub = "touchstart",
        Vb = "touchstart touchmove touchend touchcancel";
    j(O, y, {
        handler: function (a) {
            var b = Tb[a.type];
            if (b === yb && (this.started = !0), this.started) {
                var c = P.call(this, a, b);
                b & (Ab | Bb) && 0 === c[0].length - c[1].length && (this.started = !1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: tb,
                    srcEvent: a
                })
            }
        }
    });
    var Wb = {touchstart: yb, touchmove: zb, touchend: Ab, touchcancel: Bb},
        Xb = "touchstart touchmove touchend touchcancel";
    j(Q, y, {
        handler: function (a) {
            var b = Wb[a.type], c = R.call(this, a, b);
            c && this.callback(this.manager, b, {pointers: c[0], changedPointers: c[1], pointerType: tb, srcEvent: a})
        }
    }), j(S, y, {
        handler: function (a, b, c) {
            var d = c.pointerType == tb, e = c.pointerType == vb;
            if (d) this.mouse.allow = !1; else if (e && !this.mouse.allow) return;
            b & (Ab | Bb) && (this.mouse.allow = !0), this.callback(a, b, c)
        }, destroy: function () {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var Yb = v(jb.style, "touchAction"), Zb = Yb !== d, $b = "compute", _b = "auto", ac = "manipulation", bc = "none",
        cc = "pan-x", dc = "pan-y";
    T.prototype = {
        set: function (a) {
            a == $b && (a = this.compute()), Zb && (this.manager.element.style[Yb] = a), this.actions = a.toLowerCase().trim()
        }, update: function () {
            this.set(this.manager.options.touchAction)
        }, compute: function () {
            var a = [];
            return g(this.manager.recognizers, function (b) {
                l(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
            }), U(a.join(" "))
        }, preventDefaults: function (a) {
            if (!Zb) {
                var b = a.srcEvent, c = a.offsetDirection;
                if (this.manager.session.prevented) return void b.preventDefault();
                var d = this.actions, e = q(d, bc), f = q(d, dc), g = q(d, cc);
                return e || f && c & Hb || g && c & Ib ? this.preventSrc(b) : void 0
            }
        }, preventSrc: function (a) {
            this.manager.session.prevented = !0, a.preventDefault()
        }
    };
    var ec = 1, fc = 2, gc = 4, hc = 8, ic = hc, jc = 16, kc = 32;
    V.prototype = {
        defaults: {}, set: function (a) {
            return h(this.options, a), this.manager && this.manager.touchAction.update(), this
        }, recognizeWith: function (a) {
            if (f(a, "recognizeWith", this)) return this;
            var b = this.simultaneous;
            return a = Y(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
        }, dropRecognizeWith: function (a) {
            return f(a, "dropRecognizeWith", this) ? this : (a = Y(a, this), delete this.simultaneous[a.id], this)
        }, requireFailure: function (a) {
            if (f(a, "requireFailure", this)) return this;
            var b = this.requireFail;
            return a = Y(a, this), -1 === s(b, a) && (b.push(a), a.requireFailure(this)), this
        }, dropRequireFailure: function (a) {
            if (f(a, "dropRequireFailure", this)) return this;
            a = Y(a, this);
            var b = s(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1), this
        }, hasRequireFailures: function () {
            return this.requireFail.length > 0
        }, canRecognizeWith: function (a) {
            return !!this.simultaneous[a.id]
        }, emit: function (a) {
            function b(b) {
                c.manager.emit(c.options.event + (b ? W(d) : ""), a)
            }

            var c = this, d = this.state;
            hc > d && b(!0), b(), d >= hc && b(!0)
        }, tryEmit: function (a) {
            return this.canEmit() ? this.emit(a) : void(this.state = kc)
        }, canEmit: function () {
            for (var a = 0; a < this.requireFail.length;) {
                if (!(this.requireFail[a].state & (kc | ec))) return !1;
                a++
            }
            return !0
        }, recognize: function (a) {
            var b = h({}, a);
            return l(this.options.enable, [this, b]) ? (this.state & (ic | jc | kc) && (this.state = ec), this.state = this.process(b), void(this.state & (fc | gc | hc | jc) && this.tryEmit(b))) : (this.reset(), void(this.state = kc))
        }, process: function () {
        }, getTouchAction: function () {
        }, reset: function () {
        }
    }, j(Z, V, {
        defaults: {pointers: 1}, attrTest: function (a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b
        }, process: function (a) {
            var b = this.state, c = a.eventType, d = b & (fc | gc), e = this.attrTest(a);
            return d && (c & Bb || !e) ? b | jc : d || e ? c & Ab ? b | hc : b & fc ? b | gc : fc : kc
        }
    }), j($, Z, {
        defaults: {event: "pan", threshold: 10, pointers: 1, direction: Jb}, getTouchAction: function () {
            var a = this.options.direction, b = [];
            return a & Hb && b.push(dc), a & Ib && b.push(cc), b
        }, directionTest: function (a) {
            var b = this.options, c = !0, d = a.distance, e = a.direction, f = a.deltaX, g = a.deltaY;
            return e & b.direction || (b.direction & Hb ? (e = 0 === f ? Cb : 0 > f ? Db : Eb, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Cb : 0 > g ? Fb : Gb, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
        }, attrTest: function (a) {
            return Z.prototype.attrTest.call(this, a) && (this.state & fc || !(this.state & fc) && this.directionTest(a))
        }, emit: function (a) {
            this.pX = a.deltaX, this.pY = a.deltaY;
            var b = X(a.direction);
            b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a)
        }
    }), j(_, Z, {
        defaults: {event: "pinch", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [bc]
        }, attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & fc)
        }, emit: function (a) {
            if (this._super.emit.call(this, a), 1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + b, a)
            }
        }
    }), j(ab, V, {
        defaults: {event: "press", pointers: 1, time: 500, threshold: 5}, getTouchAction: function () {
            return [_b]
        }, process: function (a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold,
                f = a.deltaTime > b.time;
            if (this._input = a, !d || !c || a.eventType & (Ab | Bb) && !f) this.reset(); else if (a.eventType & yb) this.reset(), this._timer = e(function () {
                this.state = ic, this.tryEmit()
            }, b.time, this); else if (a.eventType & Ab) return ic;
            return kc
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function (a) {
            this.state === ic && (a && a.eventType & Ab ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = nb(), this.manager.emit(this.options.event, this._input)))
        }
    }), j(bb, Z, {
        defaults: {event: "rotate", threshold: 0, pointers: 2}, getTouchAction: function () {
            return [bc]
        }, attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & fc)
        }
    }), j(cb, Z, {
        defaults: {event: "swipe", threshold: 10, velocity: .65, direction: Hb | Ib, pointers: 1},
        getTouchAction: function () {
            return $.prototype.getTouchAction.call(this)
        },
        attrTest: function (a) {
            var b, c = this.options.direction;
            return c & (Hb | Ib) ? b = a.velocity : c & Hb ? b = a.velocityX : c & Ib && (b = a.velocityY), this._super.attrTest.call(this, a) && c & a.direction && a.distance > this.options.threshold && mb(b) > this.options.velocity && a.eventType & Ab
        },
        emit: function (a) {
            var b = X(a.direction);
            b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
        }
    }), j(db, V, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        }, getTouchAction: function () {
            return [ac]
        }, process: function (a) {
            var b = this.options, c = a.pointers.length === b.pointers, d = a.distance < b.threshold,
                f = a.deltaTime < b.time;
            if (this.reset(), a.eventType & yb && 0 === this.count) return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != Ab) return this.failTimeout();
                var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
                    h = !this.pCenter || I(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                var i = this.count % b.taps;
                if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
                    this.state = ic, this.tryEmit()
                }, b.interval, this), fc) : ic
            }
            return kc
        }, failTimeout: function () {
            return this._timer = e(function () {
                this.state = kc
            }, this.options.interval, this), kc
        }, reset: function () {
            clearTimeout(this._timer)
        }, emit: function () {
            this.state == ic && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), eb.VERSION = "2.0.4", eb.defaults = {
        domEvents: !1,
        touchAction: $b,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[bb, {enable: !1}], [_, {enable: !1}, ["rotate"]], [cb, {direction: Hb}], [$, {direction: Hb}, ["swipe"]], [db], [db, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [ab]],
        cssProps: {
            userSelect: "default",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var lc = 1, mc = 2;
    fb.prototype = {
        set: function (a) {
            return h(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
        }, stop: function (a) {
            this.session.stopped = a ? mc : lc
        }, recognize: function (a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers, e = b.curRecognizer;
                (!e || e && e.state & ic) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length;) c = d[f], b.stopped === mc || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (fc | gc | hc) && (e = b.curRecognizer = c), f++
            }
        }, get: function (a) {
            if (a instanceof V) return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++) if (b[c].options.event == a) return b[c];
            return null
        }, add: function (a) {
            if (f(a, "add", this)) return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
        }, remove: function (a) {
            if (f(a, "remove", this)) return this;
            var b = this.recognizers;
            return a = this.get(a), b.splice(s(b, a), 1), this.touchAction.update(), this
        }, on: function (a, b) {
            var c = this.handlers;
            return g(r(a), function (a) {
                c[a] = c[a] || [], c[a].push(b)
            }), this
        }, off: function (a, b) {
            var c = this.handlers;
            return g(r(a), function (a) {
                b ? c[a].splice(s(c[a], b), 1) : delete c[a]
            }), this
        }, emit: function (a, b) {
            this.options.domEvents && hb(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a, b.preventDefault = function () {
                    b.srcEvent.preventDefault()
                };
                for (var d = 0; d < c.length;) c[d](b), d++
            }
        }, destroy: function () {
            this.element && gb(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, h(eb, {
        INPUT_START: yb,
        INPUT_MOVE: zb,
        INPUT_END: Ab,
        INPUT_CANCEL: Bb,
        STATE_POSSIBLE: ec,
        STATE_BEGAN: fc,
        STATE_CHANGED: gc,
        STATE_ENDED: hc,
        STATE_RECOGNIZED: ic,
        STATE_CANCELLED: jc,
        STATE_FAILED: kc,
        DIRECTION_NONE: Cb,
        DIRECTION_LEFT: Db,
        DIRECTION_RIGHT: Eb,
        DIRECTION_UP: Fb,
        DIRECTION_DOWN: Gb,
        DIRECTION_HORIZONTAL: Hb,
        DIRECTION_VERTICAL: Ib,
        DIRECTION_ALL: Jb,
        Manager: fb,
        Input: y,
        TouchAction: T,
        TouchInput: Q,
        MouseInput: M,
        PointerEventInput: N,
        TouchMouseInput: S,
        SingleTouchInput: O,
        Recognizer: V,
        AttrRecognizer: Z,
        Tap: db,
        Pan: $,
        Swipe: cb,
        Pinch: _,
        Rotate: bb,
        Press: ab,
        on: n,
        off: o,
        each: g,
        merge: i,
        extend: h,
        inherit: j,
        bindFn: k,
        prefixed: v
    }), typeof define == kb && define.amd ? define(function () {
        return eb
    }) : "undefined" != typeof module && module.exports ? module.exports = eb : a[c] = eb
}(window, document, "Hammer"), function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], a) : "object" == typeof exports ? a(require("jquery"), require("hammerjs")) : a(jQuery, Hammer)
}(function (a, b) {
    function c(c, d) {
        var e = a(c);
        e.data("hammer") || e.data("hammer", new b(e[0], d))
    }

    a.fn.hammer = function (a) {
        return this.each(function () {
            c(this, a)
        })
    }, b.Manager.prototype.emit = function (b) {
        return function (c, d) {
            b.call(this, c, d), a(this.element).trigger({type: c, gesture: d})
        }
    }(b.Manager.prototype.emit)
}), function (a) {
    a.fn.collapsible = function (b) {
        var c = {accordion: void 0};
        return b = a.extend(c, b), this.each(function () {
            function c(a) {
                f = e.find(".collapsible-header"), a.parent().toggleClass("active"), a.parent().hasClass("active") ? a.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1
                }) : a.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1
                }), f.not(a).parent().removeClass("active"), f.not(a).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1
                })
            }

            function d(a) {
                a.parent().toggleClass("active"), a.parent().hasClass("active") ? a.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1
                }) : a.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1
                })
            }

            var e = a(this), f = a(this).find(".collapsible-header"), g = e.data("collapsible");
            e.off(), e.children().off(), b.accordion || "accordion" == g || void 0 == g ? (e.on("click", ".collapsible-header", function (b) {
                c(a(b.currentTarget))
            }), c(f.filter(".active").first())) : f.each(function () {
                e.on("click", ".collapsible-header", function (b) {
                    d(a(b.currentTarget))
                }), a(this).hasClass("active") && d(a(this))
            })
        })
    }, a(document).ready(function () {
        a(".collapsible").collapsible()
    })
}(jQuery), function (a) {
    a.fn.dropdown = function (b) {
        var c = {inDuration: 300, outDuration: 225, constrain_width: !0, hover: !0, alignment: "left", gutter: 0};
        b = a.extend(c, b), this.each(function () {
            function c() {
                void 0 != f.data("inDuration") && (b.inDuration = f.data("inDuration")), void 0 != f.data("outDuration") && (b.outDuration = f.data("outDuration")), void 0 != f.data("constrainwidth") && (b.constrain_width = f.data("constrainwidth")), void 0 != f.data("hover") && (b.hover = f.data("hover")), void 0 != f.data("alignment") && (b.alignment = f.data("alignment")), void 0 != f.data("gutter") && (b.gutter = f.data("gutter"))
            }

            function d() {
                c();
                var d = g.height();
                1 == b.constrain_width && g.css("width", f.outerWidth());
                var h = 0, i = b.gutter;
                "right" == b.alignment && (h = f.innerWidth() - g.innerWidth(), i = -1 * i), g.css(e(f[0]) ? {
                    display: "block",
                    position: "fixed",
                    height: 0,
                    top: f.offset().top - a(window).scrollTop(),
                    left: f.offset().left + h + i
                } : {
                    display: "block",
                    top: f.offset().top,
                    left: f.offset().left + h + i,
                    height: 0
                }), g.velocity({opacity: 1}, {
                    duration: b.inDuration,
                    queue: !1,
                    easing: "easeOutQuad"
                }).velocity({height: d}, {
                    duration: b.inDuration,
                    queue: !1,
                    easing: "easeOutCubic",
                    complete: function () {
                        g.css("overflow-y", "auto")
                    }
                })
            }

            function e(b) {
                var c = a(b), d = c.add(c.parents()), e = !1;
                return d.each(function () {
                    return "fixed" === a(this).css("position") ? (e = !0, !1) : void 0
                }), e
            }

            var f = a(this), g = a("#" + f.attr("data-activates"));
            if (c(), g.parent().is(a("body")) || (g.detach(), a("body").append(g)), b.hover) f.on("mouseover", function () {
                d()
            }), g.on("mouseleave", function () {
                g.velocity({opacity: 0}, {
                    duration: b.outDuration, easing: "easeOutQuad", complete: function () {
                        g.css({display: "none", "overflow-y": ""})
                    }
                })
            }); else {
                f.click(function (c) {
                    c.preventDefault(), c.stopPropagation(), d(), a(document).bind("click." + g.attr("id"), function (c) {
                        g.is(c.target) || f.is(c.target) || (g.velocity({opacity: 0}, {
                            duration: b.outDuration,
                            easing: "easeOutQuad",
                            complete: function () {
                                g.css({display: "none", "overflow-y": ""})
                            }
                        }), a(document).unbind("click." + g.attr("id")))
                    })
                })
            }
            a(document).on("resize", function () {
            })
        })
    }
}(jQuery), function (a) {
    a.fn.extend({
        openModal: function (b) {
            var c = this, d = a('<div id="lean-overlay"></div>');
            a("body").append(d);
            var e = {
                opacity: .5,
                in_duration: 300,
                out_duration: 200,
                ready: void 0,
                complete: void 0,
                dismissible: !0
            };
            b = a.extend(e, b), b.dismissible && (a("#lean-overlay").click(function () {
                a(c).closeModal(b)
            }), a(document).keyup(function (d) {
                27 === d.keyCode && (a(c).closeModal(b), a(this).off())
            })), a(c).find(".modal-close").click(function (d) {
                d.preventDefault(), a(c).closeModal(b)
            }), a("#lean-overlay").css({display: "block", opacity: 0}), a(c).css({
                display: "block",
                top: "4%",
                opacity: 0
            }), a("#lean-overlay").velocity({opacity: b.opacity}, {
                duration: b.in_duration,
                queue: !1,
                ease: "easeOutCubic"
            }), a(c).velocity({top: "10%", opacity: 1}, {
                duration: b.in_duration,
                queue: !1,
                ease: "easeOutCubic",
                complete: function () {
                    "function" == typeof b.ready && b.ready()
                }
            })
        }
    }), a.fn.extend({
        closeModal: function (b) {
            var c = {out_duration: 200, complete: void 0}, b = a.extend(c, b);
            a("#lean-overlay").velocity({opacity: 0}, {
                duration: b.out_duration,
                queue: !1,
                ease: "easeOutQuart"
            }), a(this).fadeOut(b.out_duration, function () {
                a(this).css({top: 0}), a("#lean-overlay").css({display: "none"}), "function" == typeof b.complete && b.complete(), a("#lean-overlay").remove()
            })
        }
    }), a.fn.extend({
        leanModal: function (b) {
            return this.each(function () {
                a(this).click(function (c) {
                    var d = a(this).attr("href");
                    a(d).openModal(b), c.preventDefault()
                })
            })
        }
    })
}(jQuery), function (a) {
    a.fn.materialbox = function () {
        return this.each(function () {
            function b() {
                d = !1;
                var b = g.parent(".material-placeholder"), e = (window.innerWidth, window.innerHeight, g.data("width")),
                    h = g.data("height");
                a("#materialbox-overlay").fadeOut(f, function () {
                    c = !1, a(this).remove()
                }), g.velocity({width: e, height: h, left: 0, top: 0}, {
                    duration: f,
                    queue: !1,
                    easing: "easeOutQuad"
                }), a(".materialbox-caption").velocity({opacity: 0}, {
                    duration: f + 200,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function () {
                        b.css({height: "", width: "", position: "", top: "", left: ""}), g.css({
                            height: "",
                            position: "",
                            top: "",
                            left: "",
                            width: "",
                            "max-width": "",
                            position: "",
                            "z-index": ""
                        }), g.removeClass("active"), d = !0, a(this).remove()
                    }
                })
            }

            if (!a(this).hasClass("intialized")) {
                a(this).addClass("intialized");
                var c = !1, d = !0, e = 275, f = 200, g = a(this),
                    h = a("<div></div>").addClass("material-placeholder");
                g.wrap(h), g.on("click", function () {
                    var f = g.parent(".material-placeholder"), h = window.innerWidth, i = window.innerHeight,
                        j = g.width(), k = g.height();
                    if (d === !1) return !1;
                    if (c && d === !0) return b(), !1;
                    d = !1, g.addClass("active"), c = !0, f.css({
                        width: f[0].getBoundingClientRect().width,
                        height: f[0].getBoundingClientRect().height,
                        position: "relative",
                        top: 0,
                        left: 0
                    }), g.css({position: "absolute", "z-index": 1e3}).data("width", j).data("height", k);
                    var l = a('<div id="materialbox-overlay"></div>').css({opacity: 0}).click(function () {
                        d === !0 && b()
                    });
                    if (a("body").append(l), l.velocity({opacity: 1}, {
                            duration: e,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), "" !== g.data("caption")) {
                        var m = a('<div class="materialbox-caption"></div>');
                        m.text(g.data("caption")), a("body").append(m), m.css({display: "inline"}), m.velocity({opacity: 1}, {
                            duration: e,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    }
                    var n = 0, o = j / h, p = k / i, q = 0, r = 0;
                    o > p ? (n = k / j, q = .9 * h, r = .9 * h * n) : (n = j / k, q = .9 * i * n, r = .9 * i), g.hasClass("responsive-img") ? g.velocity({
                        "max-width": q,
                        width: j
                    }, {
                        duration: 0, queue: !1, complete: function () {
                            g.css({left: 0, top: 0}).velocity({
                                height: r,
                                width: q,
                                left: a(document).scrollLeft() + h / 2 - g.parent(".material-placeholder").offset().left - q / 2,
                                top: a(document).scrollTop() + i / 2 - g.parent(".material-placeholder").offset().top - r / 2
                            }, {
                                duration: e, queue: !1, easing: "easeOutQuad", complete: function () {
                                    d = !0
                                }
                            })
                        }
                    }) : g.css("left", 0).css("top", 0).velocity({
                        height: r,
                        width: q,
                        left: a(document).scrollLeft() + h / 2 - g.parent(".material-placeholder").offset().left - q / 2,
                        top: a(document).scrollTop() + i / 2 - g.parent(".material-placeholder").offset().top - r / 2
                    }, {
                        duration: e, queue: !1, easing: "easeOutQuad", complete: function () {
                            d = !0
                        }
                    })
                }), a(window).scroll(function () {
                    c && b()
                }), a(document).keyup(function (a) {
                    27 === a.keyCode && d === !0 && c && b()
                })
            }
        })
    }, a(document).ready(function () {
        a(".materialboxed").materialbox()
    })
}(jQuery), function (a) {
    a.fn.parallax = function () {
        var b = a(window).width();
        return this.each(function () {
            function c(c) {
                var e;
                e = 992 > b ? d.height() > 0 ? d.height() : d.children("img").height() : d.height() > 0 ? d.height() : 500;
                var f = d.children("img").height(), g = f - e, h = d.offset().top + e, i = d.offset().top,
                    j = a(window).scrollTop(), k = window.innerHeight, l = j + k, m = (l - i) / (e + k), n = -1 * g * m;
                h > j && j + k > i && d.children("img").first().css("bottom", n + "px"), c && d.children("img").first().css("display", "block")
            }

            var d = a(this);
            d.addClass("parallax"), c(!0), a(window).scroll(function () {
                b = a(window).width(), c(!1)
            }), a(window).resize(function () {
                b = a(window).width(), c(!1)
            })
        })
    }
}(jQuery), function (a) {
    var b = {
        init: function () {
            return this.each(function () {
                {
                    var b = a(this);
                    a(window).width()
                }
                b.width("100%");
                var c = a(this).children("li").length;
                b.children("li").each(function () {
                    a(this).width(100 / c + "%")
                });
                var d, e, f = b.find("li.tab a"), g = b.width(), h = b.find("li").first().outerWidth(), i = 0;
                d = a(f.filter('[href="' + location.hash + '"]')), 0 === d.length && (d = a(this).find("li.tab a.active").first()), 0 === d.length && (d = a(this).find("li.tab a").first()), d.addClass("active"), i = f.index(d), 0 > i && (i = 0), e = a(d[0].hash), b.append('<div class="indicator"></div>');
                var j = b.find(".indicator");
                b.is(":visible") && (j.css({right: g - (i + 1) * h}), j.css({left: i * h})), a(window).resize(function () {
                    g = b.width(), h = b.find("li").first().outerWidth(), 0 > i && (i = 0), 0 !== h && 0 !== g && (j.css({right: g - (i + 1) * h}), j.css({left: i * h}))
                }), f.not(d).each(function () {
                    a(this.hash).hide()
                }), b.on("click", "a", function (c) {
                    g = b.width(), h = b.find("li").first().outerWidth(), d.removeClass("active"), e.hide(), d = a(this), e = a(this.hash), f = b.find("li.tab a"), d.addClass("active");
                    var k = i;
                    i = f.index(a(this)), 0 > i && (i = 0), e.show(), i - k >= 0 ? (j.velocity({right: g - (i + 1) * h}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), j.velocity({left: i * h}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })) : (j.velocity({left: i * h}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), j.velocity({right: g - (i + 1) * h}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })), c.preventDefault()
                })
            })
        }, select_tab: function (a) {
            this.find('a[href="#' + a + '"]').trigger("click")
        }
    };
    a.fn.tabs = function (c) {
        return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.tooltip") : b.init.apply(this, arguments)
    }, a(document).ready(function () {
        a("ul.tabs").tabs()
    })
}(jQuery), function (a) {
    a.fn.tooltip = function (b) {
        var c = null, d = !1, e = null, f = 5, g = {delay: 350};
        return b = a.extend(g, b), a(".material-tooltip").remove(), this.each(function () {
            var g = a(this), h = a("<span></span>").text(g.attr("data-tooltip")), i = a("<div></div>");
            i.addClass("material-tooltip").append(h), i.appendTo(a("body"));
            var j = a("<div></div>").addClass("backdrop");
            j.appendTo(i), j.css({
                top: 0,
                left: 0
            }), a(this).off("mouseenter mouseleave"), a(this).on({
                mouseenter: function (a) {
                    a.stopPropagation();
                    var h = g.data("delay");
                    h = void 0 == h || "" == h ? b.delay : h, c = 0, e = setInterval(function () {
                        if (c += 10, c >= h && 0 == d) {
                            d = !0, i.css({
                                display: "block",
                                left: "0px",
                                top: "0px"
                            }), i.children("span").text(g.attr("data-tooltip"));
                            var a = g.outerWidth(), b = g.outerHeight(), e = g.attr("data-position"),
                                k = i.outerHeight(), l = i.outerWidth(), m = "0px", n = "0px", o = 8;
                            "top" === e ? (i.css({
                                top: g.offset().top - k - f,
                                left: g.offset().left + a / 2 - l / 2
                            }), m = "-10px", j.css({
                                borderRadius: "14px 14px 0 0",
                                transformOrigin: "50% 90%",
                                marginTop: k,
                                marginLeft: l / 2 - j.width() / 2
                            })) : "left" === e ? (i.css({
                                top: g.offset().top + b / 2 - k / 2,
                                left: g.offset().left - l - f
                            }), n = "-10px", j.css({
                                width: "14px",
                                height: "14px",
                                borderRadius: "14px 0 0 14px",
                                transformOrigin: "95% 50%",
                                marginTop: k / 2,
                                marginLeft: l
                            })) : "right" === e ? (i.css({
                                top: g.offset().top + b / 2 - k / 2,
                                left: g.offset().left + a + f
                            }), n = "+10px", j.css({
                                width: "14px",
                                height: "14px",
                                borderRadius: "0 14px 14px 0",
                                transformOrigin: "5% 50%",
                                marginTop: k / 2,
                                marginLeft: "0px"
                            })) : (i.css({
                                top: g.offset().top + g.outerHeight() + f,
                                left: g.offset().left + a / 2 - l / 2
                            }), m = "+10px", j.css({marginLeft: l / 2 - j.width() / 2})), o = l / 8, 8 > o && (o = 8), ("right" === e || "left" === e) && (o = l / 10, 6 > o && (o = 6)), i.velocity({
                                opacity: 1,
                                marginTop: m,
                                marginLeft: n
                            }, {duration: 350, queue: !1}), j.css({display: "block"}).velocity({opacity: 1}, {
                                duration: 55,
                                delay: 0,
                                queue: !1
                            }).velocity({scale: o}, {duration: 300, delay: 0, queue: !1, easing: "easeInOutQuad"})
                        }
                    }, 10)
                }, mouseleave: function () {
                    clearInterval(e), c = 0, i.velocity({opacity: 0, marginTop: 0, marginLeft: 0}, {
                        duration: 225,
                        queue: !1,
                        delay: 275
                    }), j.velocity({opacity: 0, scale: 1}, {
                        duration: 225, delay: 275, queue: !1, complete: function () {
                            j.css("display", "none"), i.css("display", "none"), d = !1
                        }
                    })
                }
            })
        })
    }, a(document).ready(function () {
        a(".tooltipped").tooltip()
    })
}(jQuery), function (a) {
    "use strict";

    function b(a) {
        return null !== a && a === a.window
    }

    function c(a) {
        return b(a) ? a : 9 === a.nodeType && a.defaultView
    }

    function d(a) {
        var b, d, e = {top: 0, left: 0}, f = a && a.ownerDocument;
        return b = f.documentElement, "undefined" != typeof a.getBoundingClientRect && (e = a.getBoundingClientRect()), d = c(f), {
            top: e.top + d.pageYOffset - b.clientTop,
            left: e.left + d.pageXOffset - b.clientLeft
        }
    }

    function e(a) {
        var b = "";
        for (var c in a) a.hasOwnProperty(c) && (b += c + ":" + a[c] + ";");
        return b
    }

    function f(a) {
        if (k.allowEvent(a) === !1) return null;
        for (var b = null, c = a.target || a.srcElement; null !== c.parentElement;) {
            if (-1 !== c.className.indexOf("waves-effect")) {
                b = c;
                break
            }
            c = c.parentElement
        }
        return b
    }

    function g(b) {
        var c = f(b);
        null !== c && (j.show(b, c), "ontouchstart" in a && (c.addEventListener("touchend", j.hide, !1), c.addEventListener("touchcancel", j.hide, !1)), c.addEventListener("mouseup", j.hide, !1), c.addEventListener("mouseleave", j.hide, !1))
    }

    var h = h || {}, i = document.querySelectorAll.bind(document), j = {
        duration: 750, show: function (a, b) {
            if (2 === a.button) return !1;
            var c = b || this, f = document.createElement("div");
            f.className = "waves-ripple", c.appendChild(f);
            var g = d(c), h = a.pageY - g.top, i = a.pageX - g.left, k = "scale(" + c.clientWidth / 100 * 10 + ")";
            "touches" in a && (h = a.touches[0].pageY - g.top, i = a.touches[0].pageX - g.left), f.setAttribute("data-hold", Date.now()), f.setAttribute("data-scale", k), f.setAttribute("data-x", i), f.setAttribute("data-y", h);
            var l = {top: h + "px", left: i + "px"};
            f.className = f.className + " waves-notransition", f.setAttribute("style", e(l)), f.className = f.className.replace("waves-notransition", ""), l["-webkit-transform"] = k, l["-moz-transform"] = k, l["-ms-transform"] = k, l["-o-transform"] = k, l.transform = k, l.opacity = "1", l["-webkit-transition-duration"] = j.duration + "ms", l["-moz-transition-duration"] = j.duration + "ms", l["-o-transition-duration"] = j.duration + "ms", l["transition-duration"] = j.duration + "ms", l["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", l["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)", f.setAttribute("style", e(l))
        }, hide: function (a) {
            k.touchup(a);
            var b = this, c = (1.4 * b.clientWidth, null), d = b.getElementsByClassName("waves-ripple");
            if (!(d.length > 0)) return !1;
            c = d[d.length - 1];
            var f = c.getAttribute("data-x"), g = c.getAttribute("data-y"), h = c.getAttribute("data-scale"),
                i = Date.now() - Number(c.getAttribute("data-hold")), l = 350 - i;
            0 > l && (l = 0), setTimeout(function () {
                var a = {
                    top: g + "px",
                    left: f + "px",
                    opacity: "0",
                    "-webkit-transition-duration": j.duration + "ms",
                    "-moz-transition-duration": j.duration + "ms",
                    "-o-transition-duration": j.duration + "ms",
                    "transition-duration": j.duration + "ms",
                    "-webkit-transform": h,
                    "-moz-transform": h,
                    "-ms-transform": h,
                    "-o-transform": h,
                    transform: h
                };
                c.setAttribute("style", e(a)), setTimeout(function () {
                    try {
                        b.removeChild(c)
                    } catch (a) {
                        return !1
                    }
                }, j.duration)
            }, l)
        }, wrapInput: function (a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("input" === c.tagName.toLowerCase()) {
                    var d = c.parentNode;
                    if ("i" === d.tagName.toLowerCase() && -1 !== d.className.indexOf("waves-effect")) continue;
                    var e = document.createElement("i");
                    e.className = c.className + " waves-input-wrapper";
                    var f = c.getAttribute("style");
                    f || (f = ""), e.setAttribute("style", f), c.className = "waves-button-input", c.removeAttribute("style"), d.replaceChild(e, c), e.appendChild(c)
                }
            }
        }
    }, k = {
        touches: 0, allowEvent: function (a) {
            var b = !0;
            return "touchstart" === a.type ? k.touches += 1 : "touchend" === a.type || "touchcancel" === a.type ? setTimeout(function () {
                k.touches > 0 && (k.touches -= 1)
            }, 500) : "mousedown" === a.type && k.touches > 0 && (b = !1), b
        }, touchup: function (a) {
            k.allowEvent(a)
        }
    };
    h.displayEffect = function (b) {
        b = b || {}, "duration" in b && (j.duration = b.duration), j.wrapInput(i(".waves-effect")), "ontouchstart" in a && document.body.addEventListener("touchstart", g, !1), document.body.addEventListener("mousedown", g, !1)
    }, h.attach = function (b) {
        "input" === b.tagName.toLowerCase() && (j.wrapInput([b]), b = b.parentElement), "ontouchstart" in a && b.addEventListener("touchstart", g, !1), b.addEventListener("mousedown", g, !1)
    }, a.Waves = h, document.addEventListener("DOMContentLoaded", function () {
        h.displayEffect()
    }, !1)
}(window), function (a) {
    var b = {
        init: function (b) {
            var c = {activationWidth: 70, edge: "left"};
            b = a.extend(c, b), a(this).each(function () {
                function c() {
                    g = !1, h = !1, a("#sidenav-overlay").velocity({opacity: 0}, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function () {
                            a(this).remove()
                        }
                    }), "left" === b.edge ? (a(".drag-target").css({
                        width: "",
                        right: "",
                        left: "0"
                    }), e.velocity({left: -1 * (f + 10)}, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic"
                    })) : (a(".drag-target").css({
                        width: "",
                        right: "0",
                        left: ""
                    }), e.velocity({right: -1 * (f + 10)}, {duration: 200, queue: !1, easing: "easeOutCubic"}))
                }

                var d = a(this), e = a("#" + d.attr("data-activates")), f = 240;
                "left" != b.edge && e.addClass("right-aligned"), a("body").append(a('<div class="drag-target"></div>')), a(".drag-target").css("left" === b.edge ? {left: 0} : {right: 0}), e.hasClass("fixed") && a(window).resize(function () {
                    a(window).width() > 1200 && e.attr("style") && e.removeAttr("style"), 0 != a("#sidenav-overlay").css("opacity") && h && a("#sidenav-overlay").trigger("click")
                });
                var g = !1, h = !1;
                a(".drag-target").hammer({prevent_default: !1}).bind("tap", function () {
                    a("#sidenav-overlay").trigger("click")
                }).bind("pan", function (d) {
                    if ("touch" === d.gesture.pointerType) {
                        {
                            var g = (d.gesture.direction, d.gesture.center.x);
                            d.gesture.center.y, d.gesture.velocityX
                        }
                        if (!a("#sidenav-overlay").length) {
                            var i = a('<div id="sidenav-overlay"></div>');
                            i.css("opacity", 0).click(function () {
                                c()
                            }), a("body").append(i)
                        }
                        if ("left" === b.edge ? g > f ? g = f : 0 > g && (g = 0) : g < a(window).width() - f && (g = a(window).width() - f), "left" === b.edge ? f / 2 > g ? h = !1 : g >= f / 2 && (h = !0) : g < a(window).width() - f / 2 ? h = !0 : g >= a(window).width() - f / 2 && (h = !1), "left" === b.edge ? e.css("left", g - f) : e.css("right", -1 * (g - f / 2)), "left" === b.edge) {
                            var j = g / f;
                            a("#sidenav-overlay").velocity({opacity: j}, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            })
                        } else {
                            var j = Math.abs((g - a(window).width()) / f);
                            a("#sidenav-overlay").velocity({opacity: j}, {
                                duration: 50,
                                queue: !1,
                                easing: "easeOutQuad"
                            })
                        }
                    }
                }).bind("panend", function (c) {
                    if ("touch" === c.gesture.pointerType) {
                        var d = c.gesture.velocityX;
                        g = !1, "left" === b.edge ? h || -.5 > d ? (e.velocity({left: 0}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a("#sidenav-overlay").velocity({opacity: 1}, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a(".drag-target").css({
                            width: "50%",
                            right: 0,
                            left: ""
                        })) : (!h || d > .3) && (e.velocity({left: -240}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a("#sidenav-overlay").velocity({opacity: 0}, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                                a(this).remove()
                            }
                        }), a(".drag-target").css({
                            width: "10%",
                            right: "",
                            left: 0
                        })) : h || d > .5 ? (e.velocity({right: 0}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a("#sidenav-overlay").velocity({opacity: 1}, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a(".drag-target").css({
                            width: "50%",
                            right: "",
                            left: 0
                        })) : (!h || -.3 > d) && (e.velocity({right: -240}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }), a("#sidenav-overlay").velocity({opacity: 0}, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                                a(this).remove()
                            }
                        }), a(".drag-target").css({width: "10%", right: 0, left: ""}))
                    }
                }), d.click(function () {
                    if (e.hasClass("active")) h = !1, g = !1, c(); else {
                        "left" === b.edge ? (a(".drag-target").css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }), e.velocity({left: 0}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (a(".drag-target").css({
                            width: "50%",
                            right: "",
                            left: 0
                        }), e.velocity({right: 0}, {duration: 300, queue: !1, easing: "easeOutQuad"}));
                        var d = a('<div id="sidenav-overlay"></div>');
                        d.css("opacity", 0).click(function () {
                            h = !1, g = !1, c(), d.animate({opacity: 0}, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function () {
                                    a(this).remove()
                                }
                            })
                        }), a("body").append(d), d.animate({opacity: 1}, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function () {
                                h = !0, g = !1
                            }
                        })
                    }
                    return !1
                })
            })
        }, show: function () {
            this.trigger("click")
        }, hide: function () {
            a("#sidenav-overlay").trigger("click")
        }
    };
    a.fn.sideNav = function (c) {
        return b[c] ? b[c].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof c && c ? void a.error("Method " + c + " does not exist on jQuery.tooltip") : b.init.apply(this, arguments)
    }
}(jQuery), function (a) {
    function b(b, c, d, e) {
        var f = a();
        return a.each(g, function (a, g) {
            if (g.height() > 0) {
                var h = g.offset().top, i = g.offset().left, j = i + g.width(), k = h + g.height(),
                    l = !(i > c || e > j || h > d || b > k);
                l && f.push(g)
            }
        }), f
    }

    function c() {
        ++j;
        var c = f.scrollTop(), d = f.scrollLeft(), e = d + f.width(), g = c + f.height(),
            i = b(c + k.top + 200, e + k.right, g + k.bottom, d + k.left);
        a.each(i, function (a, b) {
            var c = b.data("scrollSpy:ticks");
            "number" != typeof c && b.triggerHandler("scrollSpy:enter"), b.data("scrollSpy:ticks", j)
        }), a.each(h, function (a, b) {
            var c = b.data("scrollSpy:ticks");
            "number" == typeof c && c !== j && (b.triggerHandler("scrollSpy:exit"), b.data("scrollSpy:ticks", null))
        }), h = i
    }

    function d() {
        f.trigger("scrollSpy:winSize")
    }

    function e(a, b, c) {
        var d, e, f, g = null, h = 0;
        c || (c = {});
        var i = function () {
            h = c.leading === !1 ? 0 : l(), g = null, f = a.apply(d, e), d = e = null
        };
        return function () {
            var j = l();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, 0 >= k ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), d = e = null) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
        }
    }

    var f = a(window), g = [], h = [], i = !1, j = 0, k = {top: 0, right: 0, bottom: 0, left: 0},
        l = Date.now || function () {
            return (new Date).getTime()
        };
    a.scrollSpy = function (b, d) {
        var h = [];
        b = a(b), b.each(function (b, c) {
            g.push(a(c)), a(c).data("scrollSpy:id", b), a("a[href=#" + a(c).attr("id") + "]").click(function (b) {
                b.preventDefault();
                var c = a(this.hash).offset().top + 1;
                a(".tabs-wrapper").length ? a("html, body").animate({scrollTop: c - 60}, {
                    duration: 400,
                    easing: "easeOutCubic"
                }) : a("html, body").animate({scrollTop: c}, {duration: 400, easing: "easeOutCubic"})
            })
        }), d = d || {throttle: 100}, k.top = d.offsetTop || 0, k.right = d.offsetRight || 0, k.bottom = d.offsetBottom || 0, k.left = d.offsetLeft || 0;
        var j = e(c, d.throttle || 100), l = function () {
            a(document).ready(j)
        };
        return i || (f.on("scroll", l), f.on("resize", l), i = !0), setTimeout(l, 0), b.on("scrollSpy:enter", function () {
            h = a.grep(h, function (a) {
                return 0 != a.height()
            });
            var b = a(this);
            h[0] ? (a("a[href=#" + h[0].attr("id") + "]").removeClass("active"), b.data("scrollSpy:id") < h[0].data("scrollSpy:id") ? h.unshift(a(this)) : h.push(a(this))) : h.push(a(this)), a("a[href=#" + h[0].attr("id") + "]").addClass("active")
        }), b.on("scrollSpy:exit", function () {
            if (h = a.grep(h, function (a) {
                    return 0 != a.height()
                }), h[0]) {
                a("a[href=#" + h[0].attr("id") + "]").removeClass("active");
                var b = a(this);
                h = a.grep(h, function (a) {
                    return a.attr("id") != b.attr("id")
                }), h[0] && a("a[href=#" + h[0].attr("id") + "]").addClass("active")
            }
        }), b
    }, a.winSizeSpy = function (b) {
        return a.winSizeSpy = function () {
            return f
        }, b = b || {throttle: 100}, f.on("resize", e(d, b.throttle || 100))
    }, a.fn.scrollSpy = function (b) {
        return a.scrollSpy(a(this), b)
    }
}(jQuery), function (a) {
    a(document).ready(function () {
        var b = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
        if (a(document).on("change", b, function () {
                0 !== a(this).val().length && a(this).siblings("label, i").addClass("active")
            }), a(document).ready(function () {
                a(b).each(function (b, c) {
                    a(c).val().length > 0 && a(this).siblings("label, i").addClass("active")
                })
            }), a(document).on("reset", function (c) {
                a(c.target).is("form") && (a(this).find(b).removeClass("valid").removeClass("invalid"), a(this).find("select.initialized").each(function () {
                    var b = a(this).find("option[selected]").text();
                    a(this).prev("span.select-dropdown").html(b)
                }))
            }), a(document).on("focus", b, function () {
                a(this).siblings("label, i").addClass("active")
            }), a(document).on("blur", b, function () {
                0 === a(this).val().length ? (a(this).siblings("label, i").removeClass("active"), a(this).hasClass("validate") && (a(this).removeClass("valid"), a(this).removeClass("invalid"))) : a(this).hasClass("validate") && (a(this).is(":valid") ? (a(this).removeClass("invalid"), a(this).addClass("valid")) : (a(this).removeClass("valid"), a(this).addClass("invalid")))
            }), 0 === a(".hiddendiv").length) {
            var c = a('<div class="hiddendiv common"></div>'), d = null;
            a("body").append(c)
        }
        var e = ".materialize-textarea";
        a(".hiddendiv").css("width", a(e).width()), a(e).each(function () {
            a(this).val().length && (d = a(this).val(), d = d.replace(/\n/g, "<br>"), c.html(d + "<br>"), a(this).css("height", c.height()))
        }), a("body").on("keyup keydown", e, function () {
            d = a(this).val(), d = d.replace(/\n/g, "<br>"), c.html(d + "<br>"), a(this).css("height", c.height())
        });
        var f = "input[type=range]", g = !1;
        a(f).each(function () {
            var b = a('<span class="thumb"><span class="value"></span></span>');
            a(this).after(b)
        });
        var h = ".range-field";
        a(document).on("mousedown", h, function (b) {
            var c = a(this).children(".thumb");
            c.length <= 0 && (c = a('<span class="thumb"><span class="value"></span></span>'), a(this).append(c)), g = !0, a(this).addClass("active"), c.hasClass("active") || c.velocity({
                height: "30px",
                width: "30px",
                top: "-20px",
                marginLeft: "-15px"
            }, {duration: 300, easing: "easeOutExpo"});
            var d = b.pageX - a(this).offset().left, e = a(this).outerWidth();
            0 > d ? d = 0 : d > e && (d = e), c.addClass("active").css("left", d), c.find(".value").html(a(this).children("input[type=range]").val())
        }), a(document).on("mouseup", h, function () {
            g = !1, a(this).removeClass("active")
        }), a(document).on("mousemove", h, function (b) {
            var c = a(this).children(".thumb");
            if (g) {
                c.hasClass("active") || c.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {duration: 300, easing: "easeOutExpo"});
                var d = b.pageX - a(this).offset().left, e = a(this).outerWidth();
                0 > d ? d = 0 : d > e && (d = e), c.addClass("active").css("left", d), c.find(".value").html(a(this).children("input[type=range]").val())
            }
        }), a(document).on("mouseout", h, function () {
            if (!g) {
                var b = a(this).children(".thumb");
                b.hasClass("active") && b.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "-6px"
                }, {duration: 100}), b.removeClass("active")
            }
        }), a.fn.material_select = function (b) {
            a(this).each(function () {
                if ($select = a(this), !$select.hasClass("browser-default") && !$select.hasClass("initialized")) {
                    var c = i(), d = a('<div class="select-wrapper"></div>'),
                        e = a('<ul id="select-options-' + c + '" class="dropdown-content select-dropdown"></ul>'),
                        f = $select.children("option");
                    if (void 0 !== $select.find("option:selected")) var g = $select.find("option:selected"); else var g = e.first();
                    f.each(function () {
                        e.append(a('<li class="' + (a(this).is(":disabled") ? "disabled" : "") + '"><span>' + a(this).html() + "</span></li>"))
                    }), e.find("li").each(function (c) {
                        var d = $select;
                        a(this).click(function () {
                            a(this).hasClass("disabled") || (d.find("option").eq(c).prop("selected", !0), d.trigger("change"), d.prev("span.select-dropdown").html(a(this).text()), "undefined" != typeof b && b())
                        })
                    }), $select.wrap(d);
                    var h = a('<span class="select-dropdown ' + ($select.is(":disabled") ? "disabled" : "") + '" data-activates="select-options-' + c + '">' + g.html() + "</span>");
                    $select.before(h), a("body").append(e), $select.is(":disabled") || h.dropdown({hover: !1}), $select.addClass("initialized")
                }
            })
        };
        var i = function () {
            function a() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            return function () {
                return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
            }
        }()
    })
}(jQuery), function (a) {
    a.fn.slider = function (b) {
        var c = {indicators: !0, height: 400, transition: 500, interval: 6e3};
        return b = a.extend(c, b), this.each(function () {
            function c(a, b) {
                a.hasClass("center-align") ? a.velocity({opacity: 0, translateY: -100}, {
                    duration: b,
                    queue: !1
                }) : a.hasClass("right-align") ? a.velocity({opacity: 0, translateX: 100}, {
                    duration: b,
                    queue: !1
                }) : a.hasClass("left-align") && a.velocity({opacity: 0, translateX: -100}, {duration: b, queue: !1})
            }

            function d(a) {
                a >= h.length ? a = 0 : 0 > a && (a = h.length - 1), i = g.find(".active").index(), i != a && (e = h.eq(i), $caption = e.find(".caption"), e.removeClass("active"), e.velocity({opacity: 0}, {
                    duration: b.transition,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function () {
                        h.not(".active").velocity({opacity: 0, translateX: 0, translateY: 0}, {duration: 0, queue: !1})
                    }
                }), c($caption, b.transition), b.indicators && j.eq(i).removeClass("active"), h.eq(a).velocity({opacity: 1}, {
                    duration: b.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                }), h.eq(a).find(".caption").velocity({
                    opacity: 1,
                    translateX: 0,
                    translateY: 0
                }, {
                    duration: b.transition,
                    delay: b.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                }), h.eq(a).addClass("active"), b.indicators && j.eq(a).addClass("active"))
            }

            var e, f = a(this), g = f.find("ul.slides").first(), h = g.find("li"), i = g.find(".active").index();
            if (-1 != i && (e = h.eq(i)), 400 != b.height && (f.height(b.height + 40), g.height(b.height)), h.find(".caption").each(function () {
                    c(a(this), 0)
                }), h.find("img").each(function () {
                    a(this).load(function () {
                        a(this).width() < a(this).parent().width() && a(this).css({width: "100%", height: "auto"})
                    })
                }), b.indicators) {
                var j = a('<ul class="indicators"></ul>');
                h.each(function () {
                    var c = a('<li class="indicator-item"></li>');
                    c.click(function () {
                        var c = g.parent(), e = c.find(a(this)).index();
                        d(e), clearInterval($interval), $interval = setInterval(function () {
                            i = g.find(".active").index(), h.length == i + 1 ? i = 0 : i += 1, d(i)
                        }, b.transition + b.interval)
                    }), j.append(c)
                }), f.append(j), j = f.find("ul.indicators").find("li.indicator-item")
            }
            e ? e.show() : (h.first().addClass("active").velocity({opacity: 1}, {
                duration: b.transition,
                queue: !1,
                easing: "easeOutQuad"
            }), i = 0, e = h.eq(i), b.indicators && j.eq(i).addClass("active")), e.find("img").load(function () {
                e.find(".caption").velocity({opacity: 1, translateX: 0, translateY: 0}, {
                    duration: b.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                })
            }), $interval = setInterval(function () {
                i = g.find(".active").index(), d(i + 1)
            }, b.transition + b.interval);
            var k = !1, l = !1, m = !1;
            f.hammer({prevent_default: !1}).bind("pan", function (a) {
                if ("touch" === a.gesture.pointerType) {
                    clearInterval($interval);
                    var b = a.gesture.direction, c = a.gesture.deltaX, d = a.gesture.velocityX;
                    $curr_slide = g.find(".active"), $curr_slide.velocity({translateX: c}, {
                        duration: 50,
                        queue: !1,
                        easing: "easeOutQuad"
                    }), 4 === b && (c > f.innerWidth() / 2 || -.65 > d) ? m = !0 : 2 === b && (c < -1 * f.innerWidth() / 2 || d > .65) && (l = !0);
                    var e;
                    l && (e = $curr_slide.next(), 0 === e.length && (e = h.first()), e.velocity({opacity: 1}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    })), m && (e = $curr_slide.prev(), 0 === e.length && (e = h.last()), e.velocity({opacity: 1}, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }))
                }
            }).bind("panend", function (a) {
                "touch" === a.gesture.pointerType && ($curr_slide = g.find(".active"), k = !1, curr_index = g.find(".active").index(), m || l ? l ? (d(curr_index + 1), $curr_slide.velocity({translateX: -1 * f.innerWidth()}, {
                    duration: 300,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function () {
                        $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: !1})
                    }
                })) : m && (d(curr_index - 1), $curr_slide.velocity({translateX: f.innerWidth()}, {
                    duration: 300,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function () {
                        $curr_slide.velocity({opacity: 0, translateX: 0}, {duration: 0, queue: !1})
                    }
                })) : $curr_slide.velocity({translateX: 0}, {
                    duration: 300,
                    queue: !1,
                    easing: "easeOutQuad"
                }), l = !1, m = !1, clearInterval($interval), $interval = setInterval(function () {
                    i = g.find(".active").index(), h.length == i + 1 ? i = 0 : i += 1, d(i)
                }, b.transition + b.interval))
            })
        })
    }
}(jQuery), function (a) {
    a(document).ready(function () {
        a(document).on("click.card", ".card", function (b) {
            a(this).find(".card-reveal").length && (a(b.target).is(a(".card-reveal .card-title")) || a(b.target).is(a(".card-reveal .card-title i")) ? a(this).find(".card-reveal").velocity({translateY: 0}, {
                duration: 300,
                queue: !1,
                easing: "easeOutQuad"
            }) : (a(b.target).is(a(".card .activator")) || a(b.target).is(a(".card .activator i"))) && a(this).find(".card-reveal").velocity({translateY: "-100%"}, {
                duration: 300,
                queue: !1,
                easing: "easeOutQuad"
            }))
        })
    })
}(jQuery), function (a) {
    a(document).ready(function () {
        var b = function () {
            function a() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            return function () {
                return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
            }
        }();
        a.fn.pushpin = function (c) {
            var d = {top: 0, bottom: 1 / 0, offset: 0};
            return c = a.extend(d, c), $index = 0, this.each(function () {
                function d(a) {
                    a.removeClass("pin-top"), a.removeClass("pinned"), a.removeClass("pin-bottom")
                }

                function e(b, e) {
                    b.each(function () {
                        c.top <= e && c.bottom >= e && !a(this).hasClass("pinned") && (d(a(this)), a(this).css("top", c.offset), a(this).addClass("pinned")), e < c.top && !a(this).hasClass("pin-top") && (d(a(this)), a(this).css("top", 0), a(this).addClass("pin-top")), e > c.bottom && !a(this).hasClass("pin-bottom") && (d(a(this)), a(this).addClass("pin-bottom"), a(this).css("top", c.bottom - h))
                    })
                }

                var f = b(), g = a(this), h = a(this).offset().top;
                e(g, a(window).scrollTop()), a(window).on("scroll." + f, function () {
                    var b = a(window).scrollTop() + c.offset;
                    e(g, b)
                })
            })
        }
    })
}(jQuery), function (a) {
    "function" == typeof define && define.amd ? define("picker", ["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : this.Picker = a(jQuery)
}(function (a) {
    function b(f, g, i, l) {
        function m() {
            return b._.node("div", b._.node("div", b._.node("div", b._.node("div", y.component.nodes(t.open), v.box), v.wrap), v.frame), v.holder)
        }

        function n() {
            w.data(g, y).addClass(v.input).attr("tabindex", -1).val(w.data("value") ? y.get("select", u.format) : f.value), u.editable || w.on("focus." + t.id + " click." + t.id, function (a) {
                a.preventDefault(), y.$root[0].focus()
            }).on("keydown." + t.id, q), e(f, {haspopup: !0, expanded: !1, readonly: !1, owns: f.id + "_root"})
        }

        function o() {
            y.$root.on({
                keydown: q, focusin: function (a) {
                    y.$root.removeClass(v.focused), a.stopPropagation()
                }, "mousedown click": function (b) {
                    var c = b.target;
                    c != y.$root.children()[0] && (b.stopPropagation(), "mousedown" != b.type || a(c).is("input, select, textarea, button, option") || (b.preventDefault(), y.$root[0].focus()))
                }
            }).on({
                focus: function () {
                    w.addClass(v.target)
                }, blur: function () {
                    w.removeClass(v.target)
                }
            }).on("focus.toOpen", r).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function () {
                var b = a(this), c = b.data(), d = b.hasClass(v.navDisabled) || b.hasClass(v.disabled), e = h();
                e = e && (e.type || e.href), (d || e && !a.contains(y.$root[0], e)) && y.$root[0].focus(), !d && c.nav ? y.set("highlight", y.component.item.highlight, {nav: c.nav}) : !d && "pick" in c ? y.set("select", c.pick) : c.clear ? y.clear().close(!0) : c.close && y.close(!0)
            }), e(y.$root[0], "hidden", !0)
        }

        function p() {
            var b;
            u.hiddenName === !0 ? (b = f.name, f.name = "") : (b = ["string" == typeof u.hiddenPrefix ? u.hiddenPrefix : "", "string" == typeof u.hiddenSuffix ? u.hiddenSuffix : "_submit"], b = b[0] + f.name + b[1]), y._hidden = a('<input type=hidden name="' + b + '"' + (w.data("value") || f.value ? ' value="' + y.get("select", u.formatSubmit) + '"' : "") + ">")[0], w.on("change." + t.id, function () {
                y._hidden.value = f.value ? y.get("select", u.formatSubmit) : ""
            }), u.container ? a(u.container).append(y._hidden) : w.after(y._hidden)
        }

        function q(a) {
            var b = a.keyCode, c = /^(8|46)$/.test(b);
            return 27 == b ? (y.close(), !1) : void((32 == b || c || !t.open && y.component.key[b]) && (a.preventDefault(), a.stopPropagation(), c ? y.clear().close() : y.open()))
        }

        function r(a) {
            a.stopPropagation(), "focus" == a.type && y.$root.addClass(v.focused), y.open()
        }

        if (!f) return b;
        var s = !1, t = {id: f.id || "P" + Math.abs(~~(Math.random() * new Date))},
            u = i ? a.extend(!0, {}, i.defaults, l) : l || {}, v = a.extend({}, b.klasses(), u.klass), w = a(f),
            x = function () {
                return this.start()
            }, y = x.prototype = {
                constructor: x, $node: w, start: function () {
                    return t && t.start ? y : (t.methods = {}, t.start = !0, t.open = !1, t.type = f.type, f.autofocus = f == h(), f.readOnly = !u.editable, f.id = f.id || t.id, "text" != f.type && (f.type = "text"), y.component = new i(y, u), y.$root = a(b._.node("div", m(), v.picker, 'id="' + f.id + '_root" tabindex="0"')), o(), u.formatSubmit && p(), n(), u.container ? a(u.container).append(y.$root) : w.after(y.$root), y.on({
                        start: y.component.onStart,
                        render: y.component.onRender,
                        stop: y.component.onStop,
                        open: y.component.onOpen,
                        close: y.component.onClose,
                        set: y.component.onSet
                    }).on({
                        start: u.onStart,
                        render: u.onRender,
                        stop: u.onStop,
                        open: u.onOpen,
                        close: u.onClose,
                        set: u.onSet
                    }), s = c(y.$root.children()[0]), f.autofocus && y.open(), y.trigger("start").trigger("render"))
                }, render: function (a) {
                    return a ? y.$root.html(m()) : y.$root.find("." + v.box).html(y.component.nodes(t.open)), y.trigger("render")
                }, stop: function () {
                    return t.start ? (y.close(), y._hidden && y._hidden.parentNode.removeChild(y._hidden), y.$root.remove(), w.removeClass(v.input).removeData(g), setTimeout(function () {
                        w.off("." + t.id)
                    }, 0), f.type = t.type, f.readOnly = !1, y.trigger("stop"), t.methods = {}, t.start = !1, y) : y
                }, open: function (c) {
                    return t.open ? y : (w.addClass(v.active), e(f, "expanded", !0), setTimeout(function () {
                        y.$root.addClass(v.opened), e(y.$root[0], "hidden", !1)
                    }, 0), c !== !1 && (t.open = !0, s && k.css("overflow", "hidden").css("padding-right", "+=" + d()), y.$root[0].focus(), j.on("click." + t.id + " focusin." + t.id, function (a) {
                        var b = a.target;
                        b != f && b != document && 3 != a.which && y.close(b === y.$root.children()[0])
                    }).on("keydown." + t.id, function (c) {
                        var d = c.keyCode, e = y.component.key[d], f = c.target;
                        27 == d ? y.close(!0) : f != y.$root[0] || !e && 13 != d ? a.contains(y.$root[0], f) && 13 == d && (c.preventDefault(), f.click()) : (c.preventDefault(), e ? b._.trigger(y.component.key.go, y, [b._.trigger(e)]) : y.$root.find("." + v.highlighted).hasClass(v.disabled) || y.set("select", y.component.item.highlight).close())
                    })), y.trigger("open"))
                }, close: function (a) {
                    return a && (y.$root.off("focus.toOpen")[0].focus(), setTimeout(function () {
                        y.$root.on("focus.toOpen", r)
                    }, 0)), w.removeClass(v.active), e(f, "expanded", !1), setTimeout(function () {
                        y.$root.removeClass(v.opened + " " + v.focused), e(y.$root[0], "hidden", !0)
                    }, 0), t.open ? (t.open = !1, s && k.css("overflow", "").css("padding-right", "-=" + d()), j.off("." + t.id), y.trigger("close")) : y
                }, clear: function (a) {
                    return y.set("clear", null, a)
                }, set: function (b, c, d) {
                    var e, f, g = a.isPlainObject(b), h = g ? b : {};
                    if (d = g && a.isPlainObject(c) ? c : d || {}, b) {
                        g || (h[b] = c);
                        for (e in h) f = h[e], e in y.component.item && (void 0 === f && (f = null), y.component.set(e, f, d)), ("select" == e || "clear" == e) && w.val("clear" == e ? "" : y.get(e, u.format)).trigger("change");
                        y.render()
                    }
                    return d.muted ? y : y.trigger("set", h)
                }, get: function (a, c) {
                    if (a = a || "value", null != t[a]) return t[a];
                    if ("valueSubmit" == a) {
                        if (y._hidden) return y._hidden.value;
                        a = "value"
                    }
                    if ("value" == a) return f.value;
                    if (a in y.component.item) {
                        if ("string" == typeof c) {
                            var d = y.component.get(a);
                            return d ? b._.trigger(y.component.formats.toString, y.component, [c, d]) : ""
                        }
                        return y.component.get(a)
                    }
                }, on: function (b, c, d) {
                    var e, f, g = a.isPlainObject(b), h = g ? b : {};
                    if (b) {
                        g || (h[b] = c);
                        for (e in h) f = h[e], d && (e = "_" + e), t.methods[e] = t.methods[e] || [], t.methods[e].push(f)
                    }
                    return y
                }, off: function () {
                    var a, b, c = arguments;
                    for (a = 0, namesCount = c.length; a < namesCount; a += 1) b = c[a], b in t.methods && delete t.methods[b];
                    return y
                }, trigger: function (a, c) {
                    var d = function (a) {
                        var d = t.methods[a];
                        d && d.map(function (a) {
                            b._.trigger(a, y, [c])
                        })
                    };
                    return d("_" + a), d(a), y
                }
            };
        return new x
    }

    function c(a) {
        var b, c = "position";
        return a.currentStyle ? b = a.currentStyle[c] : window.getComputedStyle && (b = getComputedStyle(a)[c]), "fixed" == b
    }

    function d() {
        if (k.height() <= i.height()) return 0;
        var b = a('<div style="visibility:hidden;width:100px" />').appendTo("body"), c = b[0].offsetWidth;
        b.css("overflow", "scroll");
        var d = a('<div style="width:100%" />').appendTo(b), e = d[0].offsetWidth;
        return b.remove(), c - e
    }

    function e(b, c, d) {
        if (a.isPlainObject(c)) for (var e in c) f(b, e, c[e]); else f(b, c, d)
    }

    function f(a, b, c) {
        a.setAttribute(("role" == b ? "" : "aria-") + b, c)
    }

    function g(b, c) {
        a.isPlainObject(b) || (b = {attribute: c}), c = "";
        for (var d in b) {
            var e = ("role" == d ? "" : "aria-") + d, f = b[d];
            c += null == f ? "" : e + '="' + b[d] + '"'
        }
        return c
    }

    function h() {
        try {
            return document.activeElement
        } catch (a) {
        }
    }

    var i = a(window), j = a(document), k = a(document.documentElement);
    return b.klasses = function (a) {
        return a = a || "picker", {
            picker: a,
            opened: a + "--opened",
            focused: a + "--focused",
            input: a + "__input",
            active: a + "__input--active",
            target: a + "__input--target",
            holder: a + "__holder",
            frame: a + "__frame",
            wrap: a + "__wrap",
            box: a + "__box"
        }
    }, b._ = {
        group: function (a) {
            for (var c, d = "", e = b._.trigger(a.min, a); e <= b._.trigger(a.max, a, [e]); e += a.i) c = b._.trigger(a.item, a, [e]), d += b._.node(a.node, c[0], c[1], c[2]);
            return d
        }, node: function (b, c, d, e) {
            return c ? (c = a.isArray(c) ? c.join("") : c, d = d ? ' class="' + d + '"' : "", e = e ? " " + e : "", "<" + b + d + e + ">" + c + "</" + b + ">") : ""
        }, lead: function (a) {
            return (10 > a ? "0" : "") + a
        }, trigger: function (a, b, c) {
            return "function" == typeof a ? a.apply(b, c || []) : a
        }, digits: function (a) {
            return /\d/.test(a[1]) ? 2 : 1
        }, isDate: function (a) {
            return {}.toString.call(a).indexOf("Date") > -1 && this.isInteger(a.getDate())
        }, isInteger: function (a) {
            return {}.toString.call(a).indexOf("Number") > -1 && a % 1 === 0
        }, ariaAttr: g
    }, b.extend = function (c, d) {
        a.fn[c] = function (e, f) {
            var g = this.data(c);
            return "picker" == e ? g : g && "string" == typeof e ? b._.trigger(g[e], g, [f]) : this.each(function () {
                var f = a(this);
                f.data(c) || new b(this, c, d, e)
            })
        }, a.fn[c].defaults = d.defaults
    }, b
}), function (a) {
    "function" == typeof define && define.amd ? define(["picker", "jquery"], a) : "object" == typeof exports ? module.exports = a(require("./picker.js"), require("jquery")) : a(Picker, jQuery)
}(function (a, b) {
    function c(a, b) {
        var c = this, d = a.$node[0], e = d.value, f = a.$node.data("value"), g = f || e,
            h = f ? b.formatSubmit : b.format, i = function () {
                return d.currentStyle ? "rtl" == d.currentStyle.direction : "rtl" == getComputedStyle(a.$root[0]).direction
            };
        c.settings = b, c.$node = a.$node, c.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        }, c.item = {}, c.item.clear = null, c.item.disable = (b.disable || []).slice(0), c.item.enable = -function (a) {
            return a[0] === !0 ? a.shift() : -1
        }(c.item.disable), c.set("min", b.min).set("max", b.max).set("now"), g ? c.set("select", g, {format: h}) : c.set("select", null).set("highlight", c.item.now), c.key = {
            40: 7,
            38: -7,
            39: function () {
                return i() ? -1 : 1
            },
            37: function () {
                return i() ? 1 : -1
            },
            go: function (a) {
                var b = c.item.highlight, d = new Date(b.year, b.month, b.date + a);
                c.set("highlight", d, {interval: a}), this.render()
            }
        }, a.on("render", function () {
            a.$root.find("." + b.klass.selectMonth).on("change", function () {
                var c = this.value;
                c && (a.set("highlight", [a.get("view").year, c, a.get("highlight").date]), a.$root.find("." + b.klass.selectMonth).trigger("focus"))
            }), a.$root.find("." + b.klass.selectYear).on("change", function () {
                var c = this.value;
                c && (a.set("highlight", [c, a.get("view").month, a.get("highlight").date]), a.$root.find("." + b.klass.selectYear).trigger("focus"))
            })
        }, 1).on("open", function () {
            var d = "";
            c.disabled(c.get("now")) && (d = ":not(." + b.klass.buttonToday + ")"), a.$root.find("button" + d + ", select").attr("disabled", !1)
        }, 1).on("close", function () {
            a.$root.find("button, select").attr("disabled", !0)
        }, 1)
    }

    var d = 7, e = 6, f = a._;
    c.prototype.set = function (a, b, c) {
        var d = this, e = d.item;
        return null === b ? ("clear" == a && (a = "select"), e[a] = b, d) : (e["enable" == a ? "disable" : "flip" == a ? "enable" : a] = d.queue[a].split(" ").map(function (e) {
            return b = d[e](a, b, c)
        }).pop(), "select" == a ? d.set("highlight", e.select, c) : "highlight" == a ? d.set("view", e.highlight, c) : a.match(/^(flip|min|max|disable|enable)$/) && (e.select && d.disabled(e.select) && d.set("select", e.select, c), e.highlight && d.disabled(e.highlight) && d.set("highlight", e.highlight, c)), d)
    }, c.prototype.get = function (a) {
        return this.item[a]
    }, c.prototype.create = function (a, c, d) {
        var e, g = this;
        return c = void 0 === c ? a : c, c == -1 / 0 || 1 / 0 == c ? e = c : b.isPlainObject(c) && f.isInteger(c.pick) ? c = c.obj : b.isArray(c) ? (c = new Date(c[0], c[1], c[2]), c = f.isDate(c) ? c : g.create().obj) : c = f.isInteger(c) || f.isDate(c) ? g.normalize(new Date(c), d) : g.now(a, c, d), {
            year: e || c.getFullYear(),
            month: e || c.getMonth(),
            date: e || c.getDate(),
            day: e || c.getDay(),
            obj: e || c,
            pick: e || c.getTime()
        }
    }, c.prototype.createRange = function (a, c) {
        var d = this, e = function (a) {
            return a === !0 || b.isArray(a) || f.isDate(a) ? d.create(a) : a
        };
        return f.isInteger(a) || (a = e(a)), f.isInteger(c) || (c = e(c)), f.isInteger(a) && b.isPlainObject(c) ? a = [c.year, c.month, c.date + a] : f.isInteger(c) && b.isPlainObject(a) && (c = [a.year, a.month, a.date + c]), {
            from: e(a),
            to: e(c)
        }
    }, c.prototype.withinRange = function (a, b) {
        return a = this.createRange(a.from, a.to), b.pick >= a.from.pick && b.pick <= a.to.pick
    }, c.prototype.overlapRanges = function (a, b) {
        var c = this;
        return a = c.createRange(a.from, a.to), b = c.createRange(b.from, b.to), c.withinRange(a, b.from) || c.withinRange(a, b.to) || c.withinRange(b, a.from) || c.withinRange(b, a.to)
    }, c.prototype.now = function (a, b, c) {
        return b = new Date, c && c.rel && b.setDate(b.getDate() + c.rel), this.normalize(b, c)
    }, c.prototype.navigate = function (a, c, d) {
        var e, f, g, h, i = b.isArray(c), j = b.isPlainObject(c), k = this.item.view;
        if (i || j) {
            for (j ? (f = c.year, g = c.month, h = c.date) : (f = +c[0], g = +c[1], h = +c[2]), d && d.nav && k && k.month !== g && (f = k.year, g = k.month), e = new Date(f, g + (d && d.nav ? d.nav : 0), 1), f = e.getFullYear(), g = e.getMonth(); new Date(f, g, h).getMonth() !== g;) h -= 1;
            c = [f, g, h]
        }
        return c
    }, c.prototype.normalize = function (a) {
        return a.setHours(0, 0, 0, 0), a
    }, c.prototype.measure = function (a, b) {
        var c = this;
        return b ? "string" == typeof b ? b = c.parse(a, b) : f.isInteger(b) && (b = c.now(a, b, {rel: b})) : b = "min" == a ? -1 / 0 : 1 / 0, b
    }, c.prototype.viewset = function (a, b) {
        return this.create([b.year, b.month, 1])
    }, c.prototype.validate = function (a, c, d) {
        var e, g, h, i, j = this, k = c, l = d && d.interval ? d.interval : 1, m = -1 === j.item.enable, n = j.item.min,
            o = j.item.max, p = m && j.item.disable.filter(function (a) {
                if (b.isArray(a)) {
                    var d = j.create(a).pick;
                    d < c.pick ? e = !0 : d > c.pick && (g = !0)
                }
                return f.isInteger(a)
            }).length;
        if ((!d || !d.nav) && (!m && j.disabled(c) || m && j.disabled(c) && (p || e || g) || !m && (c.pick <= n.pick || c.pick >= o.pick))) for (m && !p && (!g && l > 0 || !e && 0 > l) && (l *= -1); j.disabled(c) && (Math.abs(l) > 1 && (c.month < k.month || c.month > k.month) && (c = k, l = l > 0 ? 1 : -1), c.pick <= n.pick ? (h = !0, l = 1, c = j.create([n.year, n.month, n.date + (c.pick === n.pick ? 0 : -1)])) : c.pick >= o.pick && (i = !0, l = -1, c = j.create([o.year, o.month, o.date + (c.pick === o.pick ? 0 : 1)])), !h || !i);) c = j.create([c.year, c.month, c.date + l]);
        return c
    }, c.prototype.disabled = function (a) {
        var c = this, d = c.item.disable.filter(function (d) {
            return f.isInteger(d) ? a.day === (c.settings.firstDay ? d : d - 1) % 7 : b.isArray(d) || f.isDate(d) ? a.pick === c.create(d).pick : b.isPlainObject(d) ? c.withinRange(d, a) : void 0
        });
        return d = d.length && !d.filter(function (a) {
            return b.isArray(a) && "inverted" == a[3] || b.isPlainObject(a) && a.inverted
        }).length, -1 === c.item.enable ? !d : d || a.pick < c.item.min.pick || a.pick > c.item.max.pick
    }, c.prototype.parse = function (a, b, c) {
        var d = this, e = {};
        return b && "string" == typeof b ? (c && c.format || (c = c || {}, c.format = d.settings.format), d.formats.toArray(c.format).map(function (a) {
            var c = d.formats[a], g = c ? f.trigger(c, d, [b, e]) : a.replace(/^!/, "").length;
            c && (e[a] = b.substr(0, g)), b = b.substr(g)
        }), [e.yyyy || e.yy, +(e.mm || e.m) - 1, e.dd || e.d]) : b
    }, c.prototype.formats = function () {
        function a(a, b, c) {
            var d = a.match(/\w+/)[0];
            return c.mm || c.m || (c.m = b.indexOf(d) + 1), d.length
        }

        function b(a) {
            return a.match(/\w+/)[0].length
        }

        return {
            d: function (a, b) {
                return a ? f.digits(a) : b.date
            }, dd: function (a, b) {
                return a ? 2 : f.lead(b.date)
            }, ddd: function (a, c) {
                return a ? b(a) : this.settings.weekdaysShort[c.day]
            }, dddd: function (a, c) {
                return a ? b(a) : this.settings.weekdaysFull[c.day]
            }, m: function (a, b) {
                return a ? f.digits(a) : b.month + 1
            }, mm: function (a, b) {
                return a ? 2 : f.lead(b.month + 1)
            }, mmm: function (b, c) {
                var d = this.settings.monthsShort;
                return b ? a(b, d, c) : d[c.month]
            }, mmmm: function (b, c) {
                var d = this.settings.monthsFull;
                return b ? a(b, d, c) : d[c.month]
            }, yy: function (a, b) {
                return a ? 2 : ("" + b.year).slice(2)
            }, yyyy: function (a, b) {
                return a ? 4 : b.year
            }, toArray: function (a) {
                return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
            }, toString: function (a, b) {
                var c = this;
                return c.formats.toArray(a).map(function (a) {
                    return f.trigger(c.formats[a], c, [0, b]) || a.replace(/^!/, "")
                }).join("")
            }
        }
    }(), c.prototype.isDateExact = function (a, c) {
        var d = this;
        return f.isInteger(a) && f.isInteger(c) || "boolean" == typeof a && "boolean" == typeof c ? a === c : (f.isDate(a) || b.isArray(a)) && (f.isDate(c) || b.isArray(c)) ? d.create(a).pick === d.create(c).pick : b.isPlainObject(a) && b.isPlainObject(c) ? d.isDateExact(a.from, c.from) && d.isDateExact(a.to, c.to) : !1
    }, c.prototype.isDateOverlap = function (a, c) {
        var d = this, e = d.settings.firstDay ? 1 : 0;
        return f.isInteger(a) && (f.isDate(c) || b.isArray(c)) ? (a = a % 7 + e, a === d.create(c).day + 1) : f.isInteger(c) && (f.isDate(a) || b.isArray(a)) ? (c = c % 7 + e, c === d.create(a).day + 1) : b.isPlainObject(a) && b.isPlainObject(c) ? d.overlapRanges(a, c) : !1
    }, c.prototype.flipEnable = function (a) {
        var b = this.item;
        b.enable = a || (-1 == b.enable ? 1 : -1)
    }, c.prototype.deactivate = function (a, c) {
        var d = this, e = d.item.disable.slice(0);
        return "flip" == c ? d.flipEnable() : c === !1 ? (d.flipEnable(1), e = []) : c === !0 ? (d.flipEnable(-1), e = []) : c.map(function (a) {
            for (var c, g = 0; g < e.length; g += 1) if (d.isDateExact(a, e[g])) {
                c = !0;
                break
            }
            c || (f.isInteger(a) || f.isDate(a) || b.isArray(a) || b.isPlainObject(a) && a.from && a.to) && e.push(a)
        }), e
    }, c.prototype.activate = function (a, c) {
        var d = this, e = d.item.disable, g = e.length;
        return "flip" == c ? d.flipEnable() : c === !0 ? (d.flipEnable(1), e = []) : c === !1 ? (d.flipEnable(-1), e = []) : c.map(function (a) {
            var c, h, i, j;
            for (i = 0; g > i; i += 1) {
                if (h = e[i], d.isDateExact(h, a)) {
                    c = e[i] = null, j = !0;
                    break
                }
                if (d.isDateOverlap(h, a)) {
                    b.isPlainObject(a) ? (a.inverted = !0, c = a) : b.isArray(a) ? (c = a, c[3] || c.push("inverted")) : f.isDate(a) && (c = [a.getFullYear(), a.getMonth(), a.getDate(), "inverted"]);
                    break
                }
            }
            if (c) for (i = 0; g > i; i += 1) if (d.isDateExact(e[i], a)) {
                e[i] = null;
                break
            }
            if (j) for (i = 0; g > i; i += 1) if (d.isDateOverlap(e[i], a)) {
                e[i] = null;
                break
            }
            c && e.push(c)
        }), e.filter(function (a) {
            return null != a
        })
    }, c.prototype.nodes = function (a) {
        var b = this, c = b.settings, g = b.item, h = g.now, i = g.select, j = g.highlight, k = g.view, l = g.disable,
            m = g.min, n = g.max, o = function (a, b) {
                return c.firstDay && (a.push(a.shift()), b.push(b.shift())), f.node("thead", f.node("tr", f.group({
                    min: 0,
                    max: d - 1,
                    i: 1,
                    node: "th",
                    item: function (d) {
                        return [a[d], c.klass.weekdays, 'scope=col title="' + b[d] + '"']
                    }
                })))
            }((c.showWeekdaysFull ? c.weekdaysFull : c.weekdaysLetter).slice(0), c.weekdaysFull.slice(0)),
            p = function (a) {
                return f.node("div", " ", c.klass["nav" + (a ? "Next" : "Prev")] + (a && k.year >= n.year && k.month >= n.month || !a && k.year <= m.year && k.month <= m.month ? " " + c.klass.navDisabled : ""), "data-nav=" + (a || -1) + " " + f.ariaAttr({
                    role: "button",
                    controls: b.$node[0].id + "_table"
                }) + ' title="' + (a ? c.labelMonthNext : c.labelMonthPrev) + '"')
            }, q = function (d) {
                var e = c.showMonthsShort ? c.monthsShort : c.monthsFull;
                return "short_months" == d && (e = c.monthsShort), c.selectMonths ? f.node("select", f.group({
                    min: 0,
                    max: 11,
                    i: 1,
                    node: "option",
                    item: function (a) {
                        return [e[a], 0, "value=" + a + (k.month == a ? " selected" : "") + (k.year == m.year && a < m.month || k.year == n.year && a > n.month ? " disabled" : "")]
                    }
                }), c.klass.selectMonth, (a ? "" : "disabled") + " " + f.ariaAttr({controls: b.$node[0].id + "_table"}) + ' title="' + c.labelMonthSelect + '"') : "short_months" == d ? f.node("div", e[k.month]) : f.node("div", e[k.month], c.klass.month)
            }, r = function (d) {
                var e = k.year, g = c.selectYears === !0 ? 5 : ~~(c.selectYears / 2);
                if (g) {
                    var h = m.year, i = n.year, j = e - g, l = e + g;
                    if (h > j && (l += h - j, j = h), l > i) {
                        var o = j - h, p = l - i;
                        j -= o > p ? p : o, l = i
                    }
                    return f.node("select", f.group({
                        min: j, max: l, i: 1, node: "option", item: function (a) {
                            return [a, 0, "value=" + a + (e == a ? " selected" : "")]
                        }
                    }), c.klass.selectYear, (a ? "" : "disabled") + " " + f.ariaAttr({controls: b.$node[0].id + "_table"}) + ' title="' + c.labelYearSelect + '"')
                }
                return "raw" == d ? f.node("div", e) : f.node("div", e, c.klass.year)
            };
        return createDayLabel = function () {
            return null != i ? f.node("div", i.date) : f.node("div", h.date)
        }, createWeekdayLabel = function () {
            var a;
            a = null != i ? i.day : h.day;
            var b = c.weekdaysFull[a];
            return b
        }, f.node("div", f.node("div", createWeekdayLabel(), "picker__weekday-display") + f.node("div", q("short_months"), c.klass.month_display) + f.node("div", createDayLabel(), c.klass.day_display) + f.node("div", r("raw"), c.klass.year_display), c.klass.date_display) + f.node("div", f.node("div", (c.selectYears ? r() + q() : q() + r()) + p() + p(1), c.klass.header) + f.node("table", o + f.node("tbody", f.group({
            min: 0,
            max: e - 1,
            i: 1,
            node: "tr",
            item: function (a) {
                var e = c.firstDay && 0 === b.create([k.year, k.month, 1]).day ? -7 : 0;
                return [f.group({
                    min: d * a - k.day + e + 1, max: function () {
                        return this.min + d - 1
                    }, i: 1, node: "td", item: function (a) {
                        a = b.create([k.year, k.month, a + (c.firstDay ? 1 : 0)]);
                        var d = i && i.pick == a.pick, e = j && j.pick == a.pick,
                            g = l && b.disabled(a) || a.pick < m.pick || a.pick > n.pick,
                            o = f.trigger(b.formats.toString, b, [c.format, a]);
                        return [f.node("div", a.date, function (b) {
                            return b.push(k.month == a.month ? c.klass.infocus : c.klass.outfocus), h.pick == a.pick && b.push(c.klass.now), d && b.push(c.klass.selected), e && b.push(c.klass.highlighted), g && b.push(c.klass.disabled), b.join(" ")
                        }([c.klass.day]), "data-pick=" + a.pick + " " + f.ariaAttr({
                            role: "gridcell",
                            label: o,
                            selected: d && b.$node.val() === o ? !0 : null,
                            activedescendant: e ? !0 : null,
                            disabled: g ? !0 : null
                        })), "", f.ariaAttr({role: "presentation"})]
                    }
                })]
            }
        })), c.klass.table, 'id="' + b.$node[0].id + '_table" ' + f.ariaAttr({
            role: "grid",
            controls: b.$node[0].id,
            readonly: !0
        })), c.klass.calendar_container) + f.node("div", f.node("button", c.today, "btn-flat picker__today", "type=button data-pick=" + h.pick + (a && !b.disabled(h) ? "" : " disabled") + " " + f.ariaAttr({controls: b.$node[0].id})) + f.node("button", c.clear, "btn-flat picker__clear", "type=button data-clear=1" + (a ? "" : " disabled") + " " + f.ariaAttr({controls: b.$node[0].id})) + f.node("button", c.close, "btn-flat picker__close", "type=button data-close=true " + (a ? "" : " disabled") + " " + f.ariaAttr({controls: b.$node[0].id})), c.klass.footer)
    }, c.defaults = function (a) {
        return {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
            today: "Today",
            clear: "Clear",
            close: "Close",
            format: "d mmmm, yyyy",
            klass: {
                table: a + "table",
                header: a + "header",
                date_display: a + "date-display",
                day_display: a + "day-display",
                month_display: a + "month-display",
                year_display: a + "year-display",
                calendar_container: a + "calendar-container",
                navPrev: a + "nav--prev",
                navNext: a + "nav--next",
                navDisabled: a + "nav--disabled",
                month: a + "month",
                year: a + "year",
                selectMonth: a + "select--month",
                selectYear: a + "select--year",
                weekdays: a + "weekday",
                day: a + "day",
                disabled: a + "day--disabled",
                selected: a + "day--selected",
                highlighted: a + "day--highlighted",
                now: a + "day--today",
                infocus: a + "day--infocus",
                outfocus: a + "day--outfocus",
                footer: a + "footer",
                buttonClear: a + "button--clear",
                buttonToday: a + "button--today",
                buttonClose: a + "button--close"
            }
        }
    }(a.klasses().picker + "__"), a.extend("pickadate", c)
});

/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

;(function ($) {

    $.fn.unveil = function (threshold, callback) {

        var $w = $(window),
            th = threshold || 0,
            retina = window.devicePixelRatio > 1,
            attrib = retina ? "data-src-retina" : "data-src",
            images = this,
            loaded;

        this.one("unveil", function () {
            var source = this.getAttribute(attrib);
            source = source || this.getAttribute("data-src");
            if (source) {
                this.setAttribute("src", source);
                if (typeof callback === "function") callback.call(this);
            }
        });

        function unveil() {
            var inview = images.filter(function () {
                var $e = $(this);
                if ($e.is(":hidden")) return;

                var wt = $w.scrollTop(),
                    wb = wt + $w.height(),
                    et = $e.offset().top,
                    eb = et + $e.height();

                return eb >= wt - th && et <= wb + th;
            });

            loaded = inview.trigger("unveil");
            images = images.not(loaded);
        }

        $w.on("scroll.unveil resize.unveil lookup.unveil", unveil);

        unveil();

        return this;

    };

})(window.jQuery || window.Zepto);


/*
 _ _      _       _
 ___| (_) ___| | __  (_)___
 / __| | |/ __| |/ /  | / __|
 \__ \ | | (__|   < _ | \__ \
 |___/_|_|\___|_|\_(_)/ |___/
 |__/

 Version: 1.4.0
 Author: Ken Wheeler
 Website: http://kenwheeler.github.io
 Docs: http://kenwheeler.github.io/slick
 Repo: http://github.com/kenwheeler/slick
 Issues: http://github.com/kenwheeler/slick/issues

 */

!function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    "use strict";
    var b = window.Slick || {};
    b = function () {
        function c(c, d) {
            var f, g, h, e = this;
            if (e.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(c),
                    appendDots: a(c),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (a, b) {
                        return '<button type="button" data-role="none">' + (b + 1) + "</button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rtl: !1,
                    slide: "",
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    variableWidth: !1,
                    vertical: !1,
                    waitForAnimate: !0
                }, e.initials = {
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
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1
                }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, g = e.options.responsive || null, g && g.length > -1) {
                e.respondTo = e.options.respondTo || "window";
                for (h in g) g.hasOwnProperty(h) && (e.breakpoints.push(g[h].breakpoint), e.breakpointSettings[g[h].breakpoint] = g[h].settings);
                e.breakpoints.sort(function (a, b) {
                    return e.options.mobileFirst === !0 ? a - b : b - a
                })
            }
            "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (e.hidden = "msHidden", e.visibilityChange = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.init(), e.checkResponsive()
        }

        var b = 0;
        return c
    }(), b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
        var e = this;
        if ("boolean" == typeof c) d = c, c = null; else if (0 > c || c >= e.slideCount) return !1;
        e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b)
        }), e.$slidesCache = e.$slides, e.reinit()
    }, b.prototype.animateHeight = function () {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.animate({height: b}, a.options.speed)
        }
    }, b.prototype.animateSlide = function (b, c) {
        var d = {}, e = this;
        e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({left: b}, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({top: b}, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({animStart: e.currentLeft}).animate({animStart: b}, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function (a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function () {
                c && c.call()
            }
        })) : (e.applyTransition(), b = Math.ceil(b), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
            e.disableTransition(), c.call()
        }, e.options.speed))
    }, b.prototype.asNavFor = function (b) {
        var c = this, d = null !== c.options.asNavFor ? a(c.options.asNavFor).slick("getSlick") : null;
        null !== d && d.slideHandler(b, !0)
    }, b.prototype.applyTransition = function (a) {
        var b = this, c = {};
        c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.autoPlay = function () {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    }, b.prototype.autoPlayClear = function () {
        var a = this;
        a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    }, b.prototype.autoPlayIterator = function () {
        var a = this;
        a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (0 === a.currentSlide - 1 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll)
    }, b.prototype.buildArrows = function () {
        var b = this;
        b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow = a(b.options.prevArrow), b.$nextArrow = a(b.options.nextArrow), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.appendTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled"))
    }, b.prototype.buildDots = function () {
        var c, d, b = this;
        if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1) d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
            d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active")
        }
    }, b.prototype.buildOut = function () {
        var b = this;
        b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b)
        }), b.$slidesCache = b.$slides, b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), b.options.centerMode === !0 && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.options.accessibility === !0 && b.$list.prop("tabIndex", 0), b.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
    }, b.prototype.checkResponsive = function () {
        var c, d, e, b = this, f = b.$slider.width(), g = window.innerWidth || a(window).width();
        if ("window" === b.respondTo ? e = g : "slider" === b.respondTo ? e = f : "min" === b.respondTo && (e = Math.min(g, f)), b.originalSettings.responsive && b.originalSettings.responsive.length > -1 && null !== b.originalSettings.responsive) {
            d = null;
            for (c in b.breakpoints) b.breakpoints.hasOwnProperty(c) && (b.originalSettings.mobileFirst === !1 ? e < b.breakpoints[c] && (d = b.breakpoints[c]) : e > b.breakpoints[c] && (d = b.breakpoints[c]));
            null !== d ? null !== b.activeBreakpoint ? d !== b.activeBreakpoint && (b.activeBreakpoint = d, "unslick" === b.breakpointSettings[d] ? b.unslick() : (b.options = a.extend({}, b.originalSettings, b.breakpointSettings[d]), b.refresh())) : (b.activeBreakpoint = d, "unslick" === b.breakpointSettings[d] ? b.unslick() : (b.options = a.extend({}, b.originalSettings, b.breakpointSettings[d]), b.refresh())) : null !== b.activeBreakpoint && (b.activeBreakpoint = null, b.options = b.originalSettings, b.refresh())
        }
    }, b.prototype.changeSlide = function (b, c) {
        var f, g, h, d = this, e = a(b.target);
        switch (e.is("a") && b.preventDefault(), h = 0 !== d.slideCount % d.options.slidesToScroll, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
            case"previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
                break;
            case"next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
                break;
            case"index":
                var i = 0 === b.data.index ? 0 : b.data.index || a(b.target).parent().index() * d.options.slidesToScroll;
                d.slideHandler(d.checkNavigable(i), !1, c);
                break;
            default:
                return
        }
    }, b.prototype.checkNavigable = function (a) {
        var c, d, b = this;
        if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1]; else for (var e in c) {
            if (a < c[e]) {
                a = d;
                break
            }
            d = c[e]
        }
        return a
    }, b.prototype.clickHandler = function (a) {
        var b = this;
        b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
    }, b.prototype.destroy = function () {
        var b = this;
        b.autoPlayClear(), b.touchObject = {}, a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(), b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("data-slick-index").css({
            position: "",
            left: "",
            top: "",
            zIndex: "",
            opacity: "",
            width: ""
        }), b.$slider.removeClass("slick-slider"), b.$slider.removeClass("slick-initialized"), b.$list.off(".slick"), a(window).off(".slick-" + b.instanceUid), a(document).off(".slick-" + b.instanceUid), b.$slider.html(b.$slides)
    }, b.prototype.disableTransition = function (a) {
        var b = this, c = {};
        c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
    }, b.prototype.fadeSlide = function (a, b) {
        var c = this;
        c.cssTransitions === !1 ? (c.$slides.eq(a).css({zIndex: 1e3}), c.$slides.eq(a).animate({opacity: 1}, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
            opacity: 1,
            zIndex: 1e3
        }), b && setTimeout(function () {
            c.disableTransition(a), b.call()
        }, c.options.speed))
    }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
        var b = this;
        null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
        var a = this;
        return a.currentSlide
    }, b.prototype.getDotCount = function () {
        var a = this, b = 0, c = 0, d = 0;
        if (a.options.infinite === !0) d = Math.ceil(a.slideCount / a.options.slidesToScroll); else if (a.options.centerMode === !0) d = a.slideCount; else for (; b < a.slideCount;) ++d, b = c + a.options.slidesToShow, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d - 1
    }, b.prototype.getLeft = function (a) {
        var c, d, f, b = this, e = 0;
        return b.slideOffset = 0, d = b.$slides.first().outerHeight(), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = -1 * b.slideWidth * b.options.slidesToShow, e = -1 * d * b.options.slidesToShow), 0 !== b.slideCount % b.options.slidesToScroll && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = -1 * (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth, e = -1 * (b.options.slidesToShow - (a - b.slideCount)) * d) : (b.slideOffset = -1 * b.slideCount % b.options.slidesToScroll * b.slideWidth, e = -1 * b.slideCount % b.options.slidesToScroll * d))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? -1 * a * b.slideWidth + b.slideOffset : -1 * a * d + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
    }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
        var b = this;
        return b.options[a]
    }, b.prototype.getNavigableIndexes = function () {
        var a = this, b = 0, c = 0, d = [],
            e = a.options.infinite === !1 ? a.slideCount - a.options.slidesToShow + 1 : a.slideCount;
        for (a.options.centerMode === !0 && (e = a.slideCount); e > b;) d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        return d
    }, b.prototype.getSlick = function () {
        return this
    }, b.prototype.getSlideCount = function () {
        var c, d, e, b = this;
        return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
    }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
        var c = this;
        c.changeSlide({data: {message: "index", index: parseInt(a)}}, b)
    }, b.prototype.init = function () {
        var b = this;
        a(b.$slider).hasClass("slick-initialized") || (a(b.$slider).addClass("slick-initialized"), b.buildOut(), b.setProps(), b.startLoad(), b.loadSlider(), b.initializeEvents(), b.updateArrows(), b.updateDots()), b.$slider.trigger("init", [b])
    }, b.prototype.initArrowEvents = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {message: "previous"}, a.changeSlide), a.$nextArrow.on("click.slick", {message: "next"}, a.changeSlide))
    }, b.prototype.initDotEvents = function () {
        var b = this;
        b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {message: "index"}, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", function () {
            b.paused = !0, b.autoPlayClear()
        }).on("mouseleave.slick", function () {
            b.paused = !1, b.autoPlay()
        })
    }, b.prototype.initializeEvents = function () {
        var b = this;
        b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {action: "start"}, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {action: "move"}, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {action: "end"}, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), b.options.autoplay === !0 && (a(document).on(b.visibilityChange, function () {
            b.visibility()
        }), b.options.pauseOnHover === !0 && (b.$list.on("mouseenter.slick", function () {
            b.paused = !0, b.autoPlayClear()
        }), b.$list.on("mouseleave.slick", function () {
            b.paused = !1, b.autoPlay()
        }))), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.options.slide, b.$slideTrack).on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, function () {
            b.checkResponsive(), b.setPosition()
        }), a(window).on("resize.slick.slick-" + b.instanceUid, function () {
            a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
                b.windowWidth = a(window).width(), b.checkResponsive(), b.setPosition()
            }, 50))
        }), a("*[draggable!=true]", b.$slideTrack).on("dragstart", function (a) {
            a.preventDefault()
        }), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    }, b.prototype.initUI = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay()
    }, b.prototype.keyHandler = function (a) {
        var b = this;
        37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({data: {message: "previous"}}) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({data: {message: "next"}})
    }, b.prototype.lazyLoad = function () {
        function g(b) {
            a("img[data-lazy]", b).each(function () {
                var b = a(this), c = a(this).attr("data-lazy");
                b.load(function () {
                    b.animate({opacity: 1}, 200)
                }).css({opacity: 0}).attr("src", c).removeAttr("data-lazy").removeClass("slick-loading")
            })
        }

        var c, d, e, f, b = this;
        b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
    }, b.prototype.loadSlider = function () {
        var a = this;
        a.setPosition(), a.$slideTrack.css({opacity: 1}), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    }, b.prototype.next = b.prototype.slickNext = function () {
        var a = this;
        a.changeSlide({data: {message: "next"}})
    }, b.prototype.pause = b.prototype.slickPause = function () {
        var a = this;
        a.autoPlayClear(), a.paused = !0
    }, b.prototype.play = b.prototype.slickPlay = function () {
        var a = this;
        a.paused = !1, a.autoPlay()
    }, b.prototype.postSlide = function (a) {
        var b = this;
        b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay()
    }, b.prototype.prev = b.prototype.slickPrev = function () {
        var a = this;
        a.changeSlide({data: {message: "previous"}})
    }, b.prototype.progressiveLazyLoad = function () {
        var c, d, b = this;
        c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function () {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad()
        }).error(function () {
            d.removeAttr("data-lazy"), b.progressiveLazyLoad()
        }))
    }, b.prototype.refresh = function () {
        var b = this, c = b.currentSlide;
        b.destroy(), a.extend(b, b.initials), b.init(), b.changeSlide({data: {message: "index", index: c}}, !0)
    }, b.prototype.reinit = function () {
        var b = this;
        b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.options.focusOnSelect === !0 && a(b.options.slide, b.$slideTrack).on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b])
    }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
        var d = this;
        return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, d.reinit(), void 0)
    }, b.prototype.setCSS = function (a) {
        var d, e, b = this, c = {};
        b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
    }, b.prototype.setDimensions = function () {
        var a = this;
        if (a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({padding: "0px " + a.options.centerPadding}) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({padding: a.options.centerPadding + " 0px"})), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1) a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length)); else if (a.options.variableWidth === !0) {
            var b = 0;
            a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.children(".slick-slide").each(function () {
                b += a.listWidth
            }), a.$slideTrack.width(Math.ceil(b) + 1)
        } else a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length));
        var c = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
        a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - c)
    }, b.prototype.setFade = function () {
        var c, b = this;
        b.$slides.each(function (d, e) {
            c = -1 * b.slideWidth * d, b.options.rtl === !0 ? a(e).css({
                position: "relative",
                right: c,
                top: 0,
                zIndex: 800,
                opacity: 0
            }) : a(e).css({position: "relative", left: c, top: 0, zIndex: 800, opacity: 0})
        }), b.$slides.eq(b.currentSlide).css({zIndex: 900, opacity: 1})
    }, b.prototype.setHeight = function () {
        var a = this;
        if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
            a.$list.css("height", b)
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function (a, b, c) {
        var d = this;
        d.options[a] = b, c === !0 && (d.unload(), d.reinit())
    }, b.prototype.setPosition = function () {
        var a = this;
        a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
    }, b.prototype.setProps = function () {
        var a = this, b = document.body.style;
        a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = null !== a.animType && a.animType !== !1
    }, b.prototype.setSlideClasses = function (a) {
        var c, d, e, f, b = this;
        b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"), d = b.$slider.find(".slick-slide"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active") : d.length <= b.options.slidesToShow ? d.addClass("slick-active") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
    }, b.prototype.setupInfinite = function () {
        var c, d, e, b = this;
        if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            for (c = 0; e > c; c += 1) d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                a(this).attr("id", "")
            })
        }
    }, b.prototype.selectHandler = function (b) {
        var c = this, d = parseInt(a(b.target).parents(".slick-slide").attr("data-slick-index"));
        return d || (d = 0), c.slideCount <= c.options.slidesToShow ? (c.$slider.find(".slick-slide").removeClass("slick-active"), c.$slides.eq(d).addClass("slick-active"), c.options.centerMode === !0 && (c.$slider.find(".slick-slide").removeClass("slick-center"), c.$slides.eq(d).addClass("slick-center")), c.asNavFor(d), void 0) : (c.slideHandler(d), void 0)
    }, b.prototype.slideHandler = function (a, b, c) {
        var d, e, f, g, h = null, i = this;
        return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d)
        }) : i.postSlide(d)), void 0) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d)
        }) : i.postSlide(d)), void 0) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? 0 !== i.slideCount % i.options.slidesToScroll ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? 0 !== i.slideCount % i.options.slidesToScroll ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? i.fadeSlide(e, function () {
            i.postSlide(e)
        }) : i.postSlide(e), i.animateHeight(), void 0) : (c !== !0 ? i.animateSlide(h, function () {
            i.postSlide(e)
        }) : i.postSlide(e), void 0)))
    }, b.prototype.startLoad = function () {
        var a = this;
        a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
    }, b.prototype.swipeDirection = function () {
        var a, b, c, d, e = this;
        return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : "vertical"
    }, b.prototype.swipeEnd = function () {
        var c, b = this;
        if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
        if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
            case"left":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
                break;
            case"right":
                c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"])
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
    }, b.prototype.swipeHandler = function (a) {
        var b = this;
        if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, a.data.action) {
            case"start":
                b.swipeStart(a);
                break;
            case"move":
                b.swipeMove(a);
                break;
            case"end":
                b.swipeEnd(a)
        }
    }, b.prototype.swipeMove = function (a) {
        var d, e, f, g, h, b = this;
        return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.swipeLeft = b.options.vertical === !1 ? d + f * g : d + f * (b.$list.height() / b.listWidth) * g, b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : (b.setCSS(b.swipeLeft), void 0)) : void 0)
    }, b.prototype.swipeStart = function (a) {
        var c, b = this;
        return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, b.dragging = !0, void 0)
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
        var a = this;
        null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    }, b.prototype.unload = function () {
        var b = this;
        a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && "object" != typeof b.options.prevArrow && b.$prevArrow.remove(), b.$nextArrow && "object" != typeof b.options.nextArrow && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "")
    }, b.prototype.unslick = function () {
        var a = this;
        a.destroy()
    }, b.prototype.updateArrows = function () {
        var b, a = this;
        b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.options.infinite !== !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.removeClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")))
    }, b.prototype.updateDots = function () {
        var a = this;
        null !== a.$dots && (a.$dots.find("li").removeClass("slick-active"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active"))
    }, b.prototype.visibility = function () {
        var a = this;
        document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : (a.paused = !1, a.autoPlay())
    }, a.fn.slick = function () {
        var g, a = this, c = arguments[0], d = Array.prototype.slice.call(arguments, 1), e = a.length, f = 0;
        for (f; e > f; f++) if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        return a
    }, a(function () {
        a("[data-slick]").slick()
    })
});
