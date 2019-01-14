/*!
 * Bootstrap-select v1.13.2 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2018 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */
! function(e, t) {
    void 0 === e && void 0 !== window && (e = window), "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, function(e) {
    ! function(F) {
        "use strict";
        var e, a, t, i = document.createElement("_");
        if (i.classList.toggle("c3", !1), i.classList.contains("c3")) {
            var s = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, t) {
                return 1 in arguments && !this.contains(e) == !t ? t : s.call(this, e)
            }
        }

        function S(e) {
            var t, i = [],
                s = e && e.options;
            if (e.multiple)
                for (var n = 0, o = s.length; n < o; n++)(t = s[n]).selected && i.push(t.value || t.text);
            else i = e.value;
            return i
        }
        String.prototype.startsWith || (e = function() {
            try {
                var e = {},
                    t = Object.defineProperty,
                    i = t(e, e, e) && t
            } catch (e) {}
            return i
        }(), a = {}.toString, t = function(e) {
            if (null == this) throw new TypeError;
            var t = String(this);
            if (e && "[object RegExp]" == a.call(e)) throw new TypeError;
            var i = t.length,
                s = String(e),
                n = s.length,
                o = 1 < arguments.length ? arguments[1] : void 0,
                l = o ? Number(o) : 0;
            l != l && (l = 0);
            var r = Math.min(Math.max(l, 0), i);
            if (i < n + r) return !1;
            for (var c = -1; ++c < n;)
                if (t.charCodeAt(r + c) != s.charCodeAt(c)) return !1;
            return !0
        }, e ? e(String.prototype, "startsWith", {
            value: t,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = t), Object.keys || (Object.keys = function(e, t, i) {
            for (t in i = [], e) i.hasOwnProperty.call(e, t) && i.push(t);
            return i
        });
        var n = {
            useDefault: !1,
            _set: F.valHooks.select.set
        };
        F.valHooks.select.set = function(e, t) {
            return t && !n.useDefault && F(e).data("selected", !0), n._set.apply(this, arguments)
        };
        var y = null,
            o = function() {
                try {
                    return new Event("change"), !0
                } catch (e) {
                    return !1
                }
            }();

        function $(e, t, i, s) {
            for (var n = ["content", "subtext", "tokens"], o = !1, l = 0; l < n.length; l++) {
                var r = n[l],
                    c = e[r];
                if (c && (c = c.toString(), "content" === r && (c = c.replace(/<[^>]+>/g, "")), s && (c = d(c)), c = c.toUpperCase(), o = "contains" === i ? 0 <= c.indexOf(t) : c.startsWith(t))) break
            }
            return o
        }

        function O(e) {
            return parseInt(e, 10) || 0
        }

        function d(e) {
            return F.each([{
                re: /[\xC0-\xC6]/g,
                ch: "A"
            }, {
                re: /[\xE0-\xE6]/g,
                ch: "a"
            }, {
                re: /[\xC8-\xCB]/g,
                ch: "E"
            }, {
                re: /[\xE8-\xEB]/g,
                ch: "e"
            }, {
                re: /[\xCC-\xCF]/g,
                ch: "I"
            }, {
                re: /[\xEC-\xEF]/g,
                ch: "i"
            }, {
                re: /[\xD2-\xD6]/g,
                ch: "O"
            }, {
                re: /[\xF2-\xF6]/g,
                ch: "o"
            }, {
                re: /[\xD9-\xDC]/g,
                ch: "U"
            }, {
                re: /[\xF9-\xFC]/g,
                ch: "u"
            }, {
                re: /[\xC7-\xE7]/g,
                ch: "c"
            }, {
                re: /[\xD1]/g,
                ch: "N"
            }, {
                re: /[\xF1]/g,
                ch: "n"
            }], function() {
                e = e ? e.replace(this.re, this.ch) : ""
            }), e
        }
        F.fn.triggerNative = function(e) {
            var t, i = this[0];
            i.dispatchEvent ? (o ? t = new Event(e, {
                bubbles: !0
            }) : (t = document.createEvent("Event")).initEvent(e, !0, !1), i.dispatchEvent(t)) : i.fireEvent ? ((t = document.createEventObject()).eventType = e, i.fireEvent("on" + e, t)) : this.trigger(e)
        };
        var l = function(t) {
                var i = function(e) {
                        return t[e]
                    },
                    e = "(?:" + Object.keys(t).join("|") + ")",
                    s = RegExp(e),
                    n = RegExp(e, "g");
                return function(e) {
                    return e = null == e ? "" : "" + e, s.test(e) ? e.replace(n, i) : e
                }
            },
            G = l({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }),
            f = l({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#x27;": "'",
                "&#x60;": "`"
            }),
            E = {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "A",
                66: "B",
                67: "C",
                68: "D",
                69: "E",
                70: "F",
                71: "G",
                72: "H",
                73: "I",
                74: "J",
                75: "K",
                76: "L",
                77: "M",
                78: "N",
                79: "O",
                80: "P",
                81: "Q",
                82: "R",
                83: "S",
                84: "T",
                85: "U",
                86: "V",
                87: "W",
                88: "X",
                89: "Y",
                90: "Z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9"
            },
            C = 27,
            z = 13,
            T = 32,
            D = 9,
            H = 38,
            L = 40,
            _ = {
                success: !1,
                major: "3"
            };
        try {
            _.full = (F.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split("."), _.major = _.full[0], _.success = !0
        } catch (e) {
            console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", e)
        }
        var q = {
                DISABLED: "disabled",
                DIVIDER: "divider",
                SHOW: "open",
                DROPUP: "dropup",
                MENU: "dropdown-menu",
                MENURIGHT: "dropdown-menu-right",
                MENULEFT: "dropdown-menu-left",
                BUTTONCLASS: "btn-default",
                POPOVERHEADER: "popover-title"
            },
            N = {
                MENU: "." + q.MENU
            };
        "4" === _.major && (q.DIVIDER = "dropdown-divider", q.SHOW = "show", q.BUTTONCLASS = "btn-light", q.POPOVERHEADER = "popover-header");
        var A = new RegExp(H + "|" + L),
            P = new RegExp("^" + D + "$|" + C),
            c = (new RegExp(z + "|" + T), function(e, t) {
                var i = this;
                n.useDefault || (F.valHooks.select.set = n._set, n.useDefault = !0), this.$element = F(e), this.$newElement = null, this.$button = null, this.$menu = null, this.options = t, this.selectpicker = {
                    main: {
                        map: {
                            newIndex: {},
                            originalIndex: {}
                        }
                    },
                    current: {
                        map: {}
                    },
                    search: {
                        map: {}
                    },
                    view: {},
                    keydown: {
                        keyHistory: "",
                        resetKeyHistory: {
                            start: function() {
                                return setTimeout(function() {
                                    i.selectpicker.keydown.keyHistory = ""
                                }, 800)
                            }
                        }
                    }
                }, null === this.options.title && (this.options.title = this.$element.attr("title"));
                var s = this.options.windowPadding;
                "number" == typeof s && (this.options.windowPadding = [s, s, s, s]), this.val = c.prototype.val, this.render = c.prototype.render, this.refresh = c.prototype.refresh, this.setStyle = c.prototype.setStyle, this.selectAll = c.prototype.selectAll, this.deselectAll = c.prototype.deselectAll, this.destroy = c.prototype.destroy, this.remove = c.prototype.remove, this.show = c.prototype.show, this.hide = c.prototype.hide, this.init()
            });

        function r(e) {
            var o, l = arguments,
                r = e;
            if ([].shift.apply(l), !_.success) {
                try {
                    _.full = (F.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split(".")
                } catch (e) {
                    _.full = c.BootstrapVersion.split(" ")[0].split(".")
                }
                _.major = _.full[0], _.success = !0, "4" === _.major && (q.DIVIDER = "dropdown-divider", q.SHOW = "show", q.BUTTONCLASS = "btn-light", c.DEFAULTS.style = q.BUTTONCLASS = "btn-light", q.POPOVERHEADER = "popover-header")
            }
            var t = this.each(function() {
                var e = F(this);
                if (e.is("select")) {
                    var t = e.data("selectpicker"),
                        i = "object" == typeof r && r;
                    if (t) {
                        if (i)
                            for (var s in i) i.hasOwnProperty(s) && (t.options[s] = i[s])
                    } else {
                        var n = F.extend({}, c.DEFAULTS, F.fn.selectpicker.defaults || {}, e.data(), i);
                        n.template = F.extend({}, c.DEFAULTS.template, F.fn.selectpicker.defaults ? F.fn.selectpicker.defaults.template : {}, e.data().template, i.template), e.data("selectpicker", t = new c(this, n))
                    }
                    "string" == typeof r && (o = t[r] instanceof Function ? t[r].apply(t, l) : t.options[r])
                }
            });
            return void 0 !== o ? o : t
        }
        c.VERSION = "1.13.2", c.BootstrapVersion = _.major, c.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No results matched {0}",
            countSelectedText: function(e, t) {
                return 1 == e ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function(e, t) {
                return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: q.BUTTONCLASS,
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1,
            windowPadding: 0,
            virtualScroll: 600,
            display: !1
        }, "4" === _.major && (c.DEFAULTS.style = "btn-light", c.DEFAULTS.iconBase = "", c.DEFAULTS.tickIcon = "bs-ok-default"), c.prototype = {
            constructor: c,
            init: function() {
                var i = this,
                    e = this.$element.attr("id");
                this.$element.addClass("bs-select-hidden"), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createDropdown(), this.createLi(), this.$element.after(this.$newElement).prependTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(N.MENU), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), !0 === this.options.dropdownAlignRight && this.$menu.addClass(q.MENURIGHT), void 0 !== e && this.$button.attr("data-id", e), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container ? this.selectPosition() : this.$element.on("hide.bs.select", function() {
                    if (i.isVirtual()) {
                        var e = i.$menuInner[0],
                            t = e.firstChild.cloneNode(!1);
                        e.replaceChild(t, e.firstChild), e.scrollTop = 0
                    }
                }), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                    "hide.bs.dropdown": function(e) {
                        i.$menuInner.attr("aria-expanded", !1), i.$element.trigger("hide.bs.select", e)
                    },
                    "hidden.bs.dropdown": function(e) {
                        i.$element.trigger("hidden.bs.select", e)
                    },
                    "show.bs.dropdown": function(e) {
                        i.$menuInner.attr("aria-expanded", !0), i.$element.trigger("show.bs.select", e)
                    },
                    "shown.bs.dropdown": function(e) {
                        i.$element.trigger("shown.bs.select", e)
                    }
                }), i.$element[0].hasAttribute("required") && this.$element.on("invalid", function() {
                    i.$button.addClass("bs-invalid"), i.$element.on({
                        "shown.bs.select": function() {
                            i.$element.val(i.$element.val()).off("shown.bs.select")
                        },
                        "rendered.bs.select": function() {
                            this.validity.valid && i.$button.removeClass("bs-invalid"), i.$element.off("rendered.bs.select")
                        }
                    }), i.$button.on("blur.bs.select", function() {
                        i.$element.focus().blur(), i.$button.off("blur.bs.select")
                    })
                }), setTimeout(function() {
                    i.$element.trigger("loaded.bs.select")
                })
            },
            createDropdown: function() {
                var e = this.multiple || this.options.showTick ? " show-tick" : "",
                    t = this.autofocus ? " autofocus" : "",
                    i = this.options.header ? '<div class="' + q.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                    s = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + G(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>' : "",
                    n = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' + q.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + q.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>" : "",
                    o = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' + q.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>" : "",
                    l = '<div class="dropdown bootstrap-select' + e + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"' : "") + 'data-toggle="dropdown"' + t + ' role="button"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' + ("4" === _.major ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + q.MENU + " " + ("4" === _.major ? "" : q.SHOW) + '" role="combobox">' + i + s + n + '<div class="inner ' + q.SHOW + '" role="listbox" aria-expanded="false" tabindex="-1"><ul class="' + q.MENU + " inner " + ("4" === _.major ? q.SHOW : "") + '"></ul></div>' + o + "</div></div>";
                return F(l)
            },
            setPositionData: function() {
                this.selectpicker.view.canHighlight = [];
                for (var e = 0; e < this.selectpicker.current.data.length; e++) {
                    var t = this.selectpicker.current.data[e],
                        i = !0;
                    "divider" === t.type ? (i = !1, t.height = this.sizeInfo.dividerHeight) : "optgroup-label" === t.type ? (i = !1, t.height = this.sizeInfo.dropdownHeaderHeight) : t.height = this.sizeInfo.liHeight, t.disabled && (i = !1), this.selectpicker.view.canHighlight.push(i), t.position = (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) + t.height
                }
            },
            isVirtual: function() {
                return !1 !== this.options.virtualScroll && this.selectpicker.main.elements.length >= this.options.virtualScroll || !0 === this.options.virtualScroll
            },
            createView: function(C, e) {
                e = e || 0;
                var O = this;
                this.selectpicker.current = C ? this.selectpicker.search : this.selectpicker.main;
                var z, T, D = [];

                function i(e, t) {
                    var i, s, n, o, l, r, c, a, d, h = O.selectpicker.current.elements.length,
                        p = [],
                        u = void 0,
                        f = !0,
                        m = O.isVirtual();
                    O.selectpicker.view.scrollTop = e, !0 === m && O.sizeInfo.hasScrollBar && O.$menu[0].offsetWidth > O.sizeInfo.totalMenuWidth && (O.sizeInfo.menuWidth = O.$menu[0].offsetWidth, O.sizeInfo.totalMenuWidth = O.sizeInfo.menuWidth + O.sizeInfo.scrollBarWidth, O.$menu.css("min-width", O.sizeInfo.menuWidth)), i = Math.ceil(O.sizeInfo.menuInnerHeight / O.sizeInfo.liHeight * 1.5), s = Math.round(h / i) || 1;
                    for (var v = 0; v < s; v++) {
                        var g = (v + 1) * i;
                        if (v === s - 1 && (g = h), p[v] = [v * i + (v ? 1 : 0), g], !h) break;
                        void 0 === u && e <= O.selectpicker.current.data[g - 1].position - O.sizeInfo.menuInnerHeight && (u = v)
                    }
                    if (void 0 === u && (u = 0), l = [O.selectpicker.view.position0, O.selectpicker.view.position1], n = Math.max(0, u - 1), o = Math.min(s - 1, u + 1), O.selectpicker.view.position0 = Math.max(0, p[n][0]) || 0, O.selectpicker.view.position1 = Math.min(h, p[o][1]) || 0, r = l[0] !== O.selectpicker.view.position0 || l[1] !== O.selectpicker.view.position1, void 0 !== O.activeIndex && (T = O.selectpicker.current.elements[O.selectpicker.current.map.newIndex[O.prevActiveIndex]], D = O.selectpicker.current.elements[O.selectpicker.current.map.newIndex[O.activeIndex]], z = O.selectpicker.current.elements[O.selectpicker.current.map.newIndex[O.selectedIndex]], t && (O.activeIndex !== O.selectedIndex && (D.classList.remove("active"), D.firstChild && D.firstChild.classList.remove("active")), O.activeIndex = void 0), O.activeIndex && O.activeIndex !== O.selectedIndex && z && z.length && (z.classList.remove("active"), z.firstChild && z.firstChild.classList.remove("active"))), void 0 !== O.prevActiveIndex && O.prevActiveIndex !== O.activeIndex && O.prevActiveIndex !== O.selectedIndex && T && T.length && (T.classList.remove("active"), T.firstChild && T.firstChild.classList.remove("active")), (t || r) && (c = O.selectpicker.view.visibleElements ? O.selectpicker.view.visibleElements.slice() : [], O.selectpicker.view.visibleElements = O.selectpicker.current.elements.slice(O.selectpicker.view.position0, O.selectpicker.view.position1), O.setOptionStatus(), (C || !1 === m && t) && (a = c, d = O.selectpicker.view.visibleElements, f = !(a.length === d.length && a.every(function(e, t) {
                            return e === d[t]
                        }))), (t || !0 === m) && f)) {
                        var b, w, x = O.$menuInner[0],
                            I = document.createDocumentFragment(),
                            k = x.firstChild.cloneNode(!1),
                            $ = !0 === m ? O.selectpicker.view.visibleElements : O.selectpicker.current.elements;
                        x.replaceChild(k, x.firstChild);
                        v = 0;
                        for (var E = $.length; v < E; v++) I.appendChild($[v]);
                        !0 === m && (b = 0 === O.selectpicker.view.position0 ? 0 : O.selectpicker.current.data[O.selectpicker.view.position0 - 1].position, w = O.selectpicker.view.position1 > h - 1 ? 0 : O.selectpicker.current.data[h - 1].position - O.selectpicker.current.data[O.selectpicker.view.position1 - 1].position, x.firstChild.style.marginTop = b + "px", x.firstChild.style.marginBottom = w + "px"), x.firstChild.appendChild(I)
                    }
                    if (O.prevActiveIndex = O.activeIndex, O.options.liveSearch) {
                        if (C && t) {
                            var S, y = 0;
                            O.selectpicker.view.canHighlight[y] || (y = 1 + O.selectpicker.view.canHighlight.slice(1).indexOf(!0)), S = O.selectpicker.view.visibleElements[y], O.selectpicker.view.currentActive && (O.selectpicker.view.currentActive.classList.remove("active"), O.selectpicker.view.currentActive.firstChild && O.selectpicker.view.currentActive.firstChild.classList.remove("active")), S && (S.classList.add("active"), S.firstChild && S.firstChild.classList.add("active")), O.activeIndex = O.selectpicker.current.map.originalIndex[y]
                        }
                    } else O.$menuInner.focus()
                }
                this.setPositionData(), i(e, !0), this.$menuInner.off("scroll.createView").on("scroll.createView", function(e, t) {
                    O.noScroll || i(this.scrollTop, t), O.noScroll = !1
                }), F(window).off("resize.createView").on("resize.createView", function() {
                    i(O.$menuInner[0].scrollTop)
                })
            },
            createLi: function() {
                var z, T = this,
                    D = [],
                    H = 0,
                    L = 0,
                    N = [],
                    A = 0,
                    P = 0,
                    R = -1;
                this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option"));
                var W = {
                        span: document.createElement("span"),
                        subtext: document.createElement("small"),
                        a: document.createElement("a"),
                        li: document.createElement("li"),
                        whitespace: document.createTextNode("Â ")
                    },
                    e = W.span.cloneNode(!1),
                    B = document.createDocumentFragment();
                e.className = T.options.iconBase + " " + T.options.tickIcon + " check-mark", W.a.appendChild(e), W.a.setAttribute("role", "option"), W.subtext.className = "text-muted", W.text = W.span.cloneNode(!1), W.text.className = "text";
                var M = function(e, t, i, s) {
                        var n = W.li.cloneNode(!1);
                        return e && (1 === e.nodeType || 11 === e.nodeType ? n.appendChild(e) : n.innerHTML = e), void 0 !== i && "" !== i && (n.className = i), null != s && n.classList.add("optgroup-" + s), n
                    },
                    U = function(e, t, i) {
                        var s = W.a.cloneNode(!0);
                        return e && (11 === e.nodeType ? s.appendChild(e) : s.insertAdjacentHTML("beforeend", e)), void 0 !== t & "" !== t && (s.className = t), "4" === _.major && s.classList.add("dropdown-item"), i && s.setAttribute("style", i), s
                    },
                    V = function(e) {
                        var t, i, s = W.text.cloneNode(!1);
                        if (e.optionContent) s.innerHTML = e.optionContent;
                        else {
                            if (s.textContent = e.text, e.optionIcon) {
                                var n = W.whitespace.cloneNode(!1);
                                (i = W.span.cloneNode(!1)).className = T.options.iconBase + " " + e.optionIcon, B.appendChild(i), B.appendChild(n)
                            }
                            e.optionSubtext && ((t = W.subtext.cloneNode(!1)).innerHTML = e.optionSubtext, s.appendChild(t))
                        }
                        return B.appendChild(s), B
                    };
                if (this.options.title && !this.multiple) {
                    R--;
                    var t = this.$element[0],
                        i = !1,
                        s = !this.selectpicker.view.titleOption.parentNode;
                    if (s) this.selectpicker.view.titleOption.className = "bs-title-option", this.selectpicker.view.titleOption.value = "", i = void 0 === F(t.options[t.selectedIndex]).attr("selected") && void 0 === this.$element.data("selected");
                    (s || 0 !== this.selectpicker.view.titleOption.index) && t.insertBefore(this.selectpicker.view.titleOption, t.firstChild), i && (t.selectedIndex = 0)
                }
                var j = this.$element.find("option");
                j.each(function(e) {
                    var t = F(this);
                    if (R++, !t.hasClass("bs-title-option")) {
                        var i, s, n = t.data(),
                            o = this.className || "",
                            l = G(this.style.cssText),
                            r = n.content,
                            c = this.textContent,
                            a = n.tokens,
                            d = n.subtext,
                            h = n.icon,
                            p = t.parent(),
                            u = p[0],
                            f = "OPTGROUP" === u.tagName,
                            m = f && u.disabled,
                            v = this.disabled || m,
                            g = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName,
                            b = p.data();
                        if (!0 === n.hidden || T.options.hideDisabled && (v && !f || m)) {
                            i = n.prevHiddenIndex, t.next().data("prevHiddenIndex", void 0 !== i ? i : e), R--, g || void 0 !== i && (y = j[i].previousElementSibling) && "OPTGROUP" === y.tagName && !y.disabled && (g = !0), g && "divider" !== N[N.length - 1].type && (R++, D.push(M(!1, 0, q.DIVIDER, A + "div")), N.push({
                                type: "divider",
                                optID: A
                            }))
                        } else {
                            if (f && !0 !== n.divider) {
                                if (T.options.hideDisabled && v) {
                                    if (void 0 === b.allOptionsDisabled) {
                                        var w = p.children();
                                        p.data("allOptionsDisabled", w.filter(":disabled").length === w.length)
                                    }
                                    if (p.data("allOptionsDisabled")) return void R--
                                }
                                var x = " " + u.className || "";
                                if (!this.previousElementSibling) {
                                    A += 1;
                                    var I = u.label,
                                        k = G(I),
                                        $ = b.subtext,
                                        E = b.icon;
                                    0 !== e && 0 < D.length && (R++, D.push(M(!1, 0, q.DIVIDER, A + "div")), N.push({
                                        type: "divider",
                                        optID: A
                                    })), R++;
                                    var S = function(e) {
                                        var t, i, s = W.text.cloneNode(!1);
                                        if (s.innerHTML = e.labelEscaped, e.labelIcon) {
                                            var n = W.whitespace.cloneNode(!1);
                                            (i = W.span.cloneNode(!1)).className = T.options.iconBase + " " + e.labelIcon, B.appendChild(i), B.appendChild(n)
                                        }
                                        return e.labelSubtext && ((t = W.subtext.cloneNode(!1)).textContent = e.labelSubtext, s.appendChild(t)), B.appendChild(s), B
                                    }({
                                        labelEscaped: k,
                                        labelSubtext: $,
                                        labelIcon: E
                                    });
                                    D.push(M(S, 0, "dropdown-header" + x, A)), N.push({
                                        content: k,
                                        subtext: $,
                                        type: "optgroup-label",
                                        optID: A
                                    }), P = R - 1
                                }
                                if (T.options.hideDisabled && v || !0 === n.hidden) return void R--;
                                s = V({
                                    text: c,
                                    optionContent: r,
                                    optionSubtext: d,
                                    optionIcon: h
                                }), D.push(M(U(s, "opt " + o + x, l), 0, "", A)), N.push({
                                    content: r || c,
                                    subtext: d,
                                    tokens: a,
                                    type: "option",
                                    optID: A,
                                    headerIndex: P,
                                    lastIndex: P + u.childElementCount,
                                    originalIndex: e,
                                    data: n
                                }), H++
                            } else if (!0 === n.divider) D.push(M(!1, 0, q.DIVIDER)), N.push({
                                type: "divider",
                                originalIndex: e,
                                data: n
                            });
                            else {
                                var y;
                                if (!g && T.options.hideDisabled)
                                    if (void 0 !== (i = n.prevHiddenIndex))(y = j[i].previousElementSibling) && "OPTGROUP" === y.tagName && !y.disabled && (g = !0);
                                g && "divider" !== N[N.length - 1].type && (R++, D.push(M(!1, 0, q.DIVIDER, A + "div")), N.push({
                                    type: "divider",
                                    optID: A
                                })), s = V({
                                    text: c,
                                    optionContent: r,
                                    optionSubtext: d,
                                    optionIcon: h
                                }), D.push(M(U(s, o, l))), N.push({
                                    content: r || c,
                                    subtext: d,
                                    tokens: a,
                                    type: "option",
                                    originalIndex: e,
                                    data: n
                                }), H++
                            }
                            T.selectpicker.main.map.newIndex[e] = R, T.selectpicker.main.map.originalIndex[R] = e;
                            var C = N[N.length - 1];
                            C.disabled = v;
                            var O = 0;
                            C.content && (O += C.content.length), C.subtext && (O += C.subtext.length), h && (O += 1), L < O && (L = O, z = D[D.length - 1])
                        }
                    }
                }), this.selectpicker.main.elements = D, this.selectpicker.main.data = N, this.selectpicker.current = this.selectpicker.main, this.selectpicker.view.widestOption = z, this.selectpicker.view.availableOptionsCount = H
            },
            findLis: function() {
                return this.$menuInner.find(".inner > li")
            },
            render: function() {
                var e = this,
                    t = this.$element.find("option"),
                    i = [],
                    s = [];
                this.togglePlaceholder(), this.tabIndex();
                for (var n = 0, o = this.selectpicker.main.elements.length; n < o; n++) {
                    var l = t[this.selectpicker.main.map.originalIndex[n]];
                    if (l && l.selected && (i.push(l), s.length < 100 && "count" !== e.options.selectedTextFormat || 1 === i.length)) {
                        if (e.options.hideDisabled && (l.disabled || "OPTGROUP" === l.parentNode.tagName && l.parentNode.disabled)) return;
                        var r, c, a = this.selectpicker.main.data[n].data,
                            d = a.icon && e.options.showIcon ? '<i class="' + e.options.iconBase + " " + a.icon + '"></i> ' : "";
                        r = e.options.showSubtext && a.subtext && !e.multiple ? ' <small class="text-muted">' + a.subtext + "</small>" : "", c = l.title ? l.title : a.content && e.options.showContent ? a.content.toString() : d + l.innerHTML.trim() + r, s.push(c)
                    }
                }
                var h = this.multiple ? s.join(this.options.multipleSeparator) : s[0];
                if (50 < i.length && (h += "..."), this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count")) {
                    var p = this.options.selectedTextFormat.split(">");
                    if (1 < p.length && i.length > p[1] || 1 === p.length && 2 <= i.length) {
                        var u = this.selectpicker.view.availableOptionsCount;
                        h = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(i.length, u) : this.options.countSelectedText).replace("{0}", i.length.toString()).replace("{1}", u.toString())
                    }
                }
                null == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (h = this.options.title), h || (h = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), this.$button[0].title = f(h.replace(/<[^>]*>?/g, "").trim()), this.$button.find(".filter-option-inner-inner")[0].innerHTML = h, this.$element.trigger("rendered.bs.select")
            },
            setStyle: function(e, t) {
                this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                var i = e || this.options.style;
                "add" == t ? this.$button.addClass(i) : "remove" == t ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
            },
            liHeight: function(e) {
                if (e || !1 !== this.options.size && !this.sizeInfo) {
                    this.sizeInfo || (this.sizeInfo = {});
                    var t = document.createElement("div"),
                        i = document.createElement("div"),
                        s = document.createElement("div"),
                        n = document.createElement("ul"),
                        o = document.createElement("li"),
                        l = document.createElement("li"),
                        r = document.createElement("li"),
                        c = document.createElement("a"),
                        a = document.createElement("span"),
                        d = this.options.header && 0 < this.$menu.find("." + q.POPOVERHEADER).length ? this.$menu.find("." + q.POPOVERHEADER)[0].cloneNode(!0) : null,
                        h = this.options.liveSearch ? document.createElement("div") : null,
                        p = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        u = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                    if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth, a.className = "text", c.className = "dropdown-item " + this.$element.find("option")[0].className, t.className = this.$menu[0].parentNode.className + " " + q.SHOW, t.style.width = this.sizeInfo.selectWidth + "px", "auto" === this.options.width && (i.style.minWidth = 0), i.className = q.MENU + " " + q.SHOW, s.className = "inner " + q.SHOW, n.className = q.MENU + " inner " + ("4" === _.major ? q.SHOW : ""), o.className = q.DIVIDER, l.className = "dropdown-header", a.appendChild(document.createTextNode("Inner text")), c.appendChild(a), r.appendChild(c), l.appendChild(a.cloneNode(!0)), this.selectpicker.view.widestOption && n.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)), n.appendChild(r), n.appendChild(o), n.appendChild(l), d && i.appendChild(d), h) {
                        var f = document.createElement("input");
                        h.className = "bs-searchbox", f.className = "form-control", h.appendChild(f), i.appendChild(h)
                    }
                    p && i.appendChild(p), s.appendChild(n), i.appendChild(s), u && i.appendChild(u), t.appendChild(i), document.body.appendChild(t);
                    var m, v = c.offsetHeight,
                        g = l ? l.offsetHeight : 0,
                        b = d ? d.offsetHeight : 0,
                        w = h ? h.offsetHeight : 0,
                        x = p ? p.offsetHeight : 0,
                        I = u ? u.offsetHeight : 0,
                        k = F(o).outerHeight(!0),
                        $ = !!window.getComputedStyle && window.getComputedStyle(i),
                        E = i.offsetWidth,
                        S = $ ? null : F(i),
                        y = {
                            vert: O($ ? $.paddingTop : S.css("paddingTop")) + O($ ? $.paddingBottom : S.css("paddingBottom")) + O($ ? $.borderTopWidth : S.css("borderTopWidth")) + O($ ? $.borderBottomWidth : S.css("borderBottomWidth")),
                            horiz: O($ ? $.paddingLeft : S.css("paddingLeft")) + O($ ? $.paddingRight : S.css("paddingRight")) + O($ ? $.borderLeftWidth : S.css("borderLeftWidth")) + O($ ? $.borderRightWidth : S.css("borderRightWidth"))
                        },
                        C = {
                            vert: y.vert + O($ ? $.marginTop : S.css("marginTop")) + O($ ? $.marginBottom : S.css("marginBottom")) + 2,
                            horiz: y.horiz + O($ ? $.marginLeft : S.css("marginLeft")) + O($ ? $.marginRight : S.css("marginRight")) + 2
                        };
                    s.style.overflowY = "scroll", m = i.offsetWidth - E, document.body.removeChild(t), this.sizeInfo.liHeight = v, this.sizeInfo.dropdownHeaderHeight = g, this.sizeInfo.headerHeight = b, this.sizeInfo.searchHeight = w, this.sizeInfo.actionsHeight = x, this.sizeInfo.doneButtonHeight = I, this.sizeInfo.dividerHeight = k, this.sizeInfo.menuPadding = y, this.sizeInfo.menuExtras = C, this.sizeInfo.menuWidth = E, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth, this.sizeInfo.scrollBarWidth = m, this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight, this.setPositionData()
                }
            },
            getSelectPosition: function() {
                var e, t = F(window),
                    i = this.$newElement.offset(),
                    s = F(this.options.container);
                this.options.container && !s.is("body") ? ((e = s.offset()).top += parseInt(s.css("borderTopWidth")), e.left += parseInt(s.css("borderLeftWidth"))) : e = {
                    top: 0,
                    left: 0
                };
                var n = this.options.windowPadding;
                this.sizeInfo.selectOffsetTop = i.top - e.top - t.scrollTop(), this.sizeInfo.selectOffsetBot = t.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - e.top - n[2], this.sizeInfo.selectOffsetLeft = i.left - e.left - t.scrollLeft(), this.sizeInfo.selectOffsetRight = t.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - e.left - n[1], this.sizeInfo.selectOffsetTop -= n[0], this.sizeInfo.selectOffsetLeft -= n[3]
            },
            setMenuSize: function(e) {
                this.getSelectPosition();
                var t, i, s, n, o, l, r, c = this.sizeInfo.selectWidth,
                    a = this.sizeInfo.liHeight,
                    d = this.sizeInfo.headerHeight,
                    h = this.sizeInfo.searchHeight,
                    p = this.sizeInfo.actionsHeight,
                    u = this.sizeInfo.doneButtonHeight,
                    f = this.sizeInfo.dividerHeight,
                    m = this.sizeInfo.menuPadding,
                    v = 0;
                if (this.options.dropupAuto && (r = a * this.selectpicker.current.elements.length + m.vert, this.$newElement.toggleClass(q.DROPUP, this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && r + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot)), "auto" === this.options.size) n = 3 < this.selectpicker.current.elements.length ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0, i = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert, s = n + d + h + p + u, l = Math.max(n - m.vert, 0), this.$newElement.hasClass(q.DROPUP) && (i = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert), t = (o = i) - d - h - p - u - m.vert;
                else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) {
                    for (var g = 0; g < this.options.size; g++) "divider" === this.selectpicker.current.data[g].type && v++;
                    t = (i = a * this.options.size + v * f + m.vert) - m.vert, o = i + d + h + p + u, s = l = ""
                }
                "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(q.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.$menu[0].offsetWidth - c), this.$menu.css({
                    "max-height": o + "px",
                    overflow: "hidden",
                    "min-height": s + "px"
                }), this.$menuInner.css({
                    "max-height": t + "px",
                    "overflow-y": "auto",
                    "min-height": l + "px"
                }), this.sizeInfo.menuInnerHeight = t, this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth, this.$menu.css("min-width", this.sizeInfo.totalMenuWidth)), this.dropdown && this.dropdown._popper && this.dropdown._popper.update()
            },
            setSize: function(e) {
                if (this.liHeight(e), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
                    var t, i = this,
                        s = F(window),
                        n = 0;
                    this.setMenuSize(), "auto" === this.options.size ? (this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", function() {
                        return i.setMenuSize()
                    }), s.off("resize.setMenuSize scroll.setMenuSize").on("resize.setMenuSize scroll.setMenuSize", function() {
                        return i.setMenuSize()
                    })) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && (this.$searchbox.off("input.setMenuSize propertychange.setMenuSize"), s.off("resize.setMenuSize scroll.setMenuSize")), e ? n = this.$menuInner[0].scrollTop : i.multiple || "number" == typeof(t = i.selectpicker.main.map.newIndex[i.$element[0].selectedIndex]) && !1 !== i.options.size && (n = (n = i.sizeInfo.liHeight * t) - i.sizeInfo.menuInnerHeight / 2 + i.sizeInfo.liHeight / 2), i.createView(!1, n)
                }
            },
            setWidth: function() {
                var i = this;
                "auto" === this.options.width ? requestAnimationFrame(function() {
                    i.$menu.css("min-width", "0"), i.liHeight(), i.setMenuSize();
                    var e = i.$newElement.clone().appendTo("body"),
                        t = e.css("width", "auto").children("button").outerWidth();
                    e.remove(), i.sizeInfo.selectWidth = Math.max(i.sizeInfo.totalMenuWidth, t), i.$newElement.css("width", i.sizeInfo.selectWidth + "px")
                }) : "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", "")), this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = F('<div class="bs-container" />');
                var s, n, o, l = this,
                    r = F(this.options.container),
                    e = function(e) {
                        var t = {},
                            i = l.options.display || F.fn.dropdown.Constructor.Default.display;
                        l.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(q.DROPUP, e.hasClass(q.DROPUP)), s = e.offset(), r.is("body") ? n = {
                            top: 0,
                            left: 0
                        } : ((n = r.offset()).top += parseInt(r.css("borderTopWidth")) - r.scrollTop(), n.left += parseInt(r.css("borderLeftWidth")) - r.scrollLeft()), o = e.hasClass(q.DROPUP) ? 0 : e[0].offsetHeight, (_.major < 4 || "static" === i) && (t.top = s.top - n.top + o, t.left = s.left - n.left), t.width = e[0].offsetWidth, l.$bsContainer.css(t)
                    };
                this.$button.on("click.bs.dropdown.data-api", function() {
                    l.isDisabled() || (e(l.$newElement), l.$bsContainer.appendTo(l.options.container).toggleClass(q.SHOW, !l.$button.hasClass(q.SHOW)).append(l.$menu))
                }), F(window).on("resize scroll", function() {
                    e(l.$newElement)
                }), this.$element.on("hide.bs.select", function() {
                    l.$menu.data("height", l.$menu.height()), l.$bsContainer.detach()
                })
            },
            setOptionStatus: function() {
                var e = this,
                    t = this.$element.find("option");
                if (e.noScroll = !1, e.selectpicker.view.visibleElements && e.selectpicker.view.visibleElements.length)
                    for (var i = 0; i < e.selectpicker.view.visibleElements.length; i++) {
                        var s = e.selectpicker.current.map.originalIndex[i + e.selectpicker.view.position0],
                            n = t[s];
                        if (n) {
                            var o = this.selectpicker.main.map.newIndex[s],
                                l = this.selectpicker.main.elements[o];
                            e.setDisabled(s, n.disabled || "OPTGROUP" === n.parentNode.tagName && n.parentNode.disabled, o, l), e.setSelected(s, n.selected, o, l)
                        }
                    }
            },
            setSelected: function(e, t, i, s) {
                var n, o, l, r = void 0 !== this.activeIndex,
                    c = this.activeIndex === e || t && !this.multiple && !r;
                i || (i = this.selectpicker.main.map.newIndex[e]), s || (s = this.selectpicker.main.elements[i]), l = s.firstChild, t && (this.selectedIndex = e), s.classList.toggle("selected", t), s.classList.toggle("active", c), c && (this.selectpicker.view.currentActive = s, this.activeIndex = e), l && (l.classList.toggle("selected", t), l.classList.toggle("active", c), l.setAttribute("aria-selected", t)), c || !r && t && void 0 !== this.prevActiveIndex && (n = this.selectpicker.main.map.newIndex[this.prevActiveIndex], (o = this.selectpicker.main.elements[n]).classList.toggle("selected", t), o.classList.remove("active"), o.firstChild && (o.firstChild.classList.toggle("selected", t), o.firstChild.classList.remove("active")))
            },
            setDisabled: function(e, t, i, s) {
                var n;
                i || (i = this.selectpicker.main.map.newIndex[e]), s || (s = this.selectpicker.main.elements[i]), n = s.firstChild, s.classList.toggle(q.DISABLED, t), n && ("4" === _.major && n.classList.toggle(q.DISABLED, t), n.setAttribute("aria-disabled", t), t ? n.setAttribute("tabindex", -1) : n.setAttribute("tabindex", 0))
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                var e = this;
                this.isDisabled() ? (this.$newElement.addClass(q.DISABLED), this.$button.addClass(q.DISABLED).attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button.hasClass(q.DISABLED) && (this.$newElement.removeClass(q.DISABLED), this.$button.removeClass(q.DISABLED).attr("aria-disabled", !1)), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function() {
                    return !e.isDisabled()
                })
            },
            togglePlaceholder: function() {
                var e = this.$element[0],
                    t = e.selectedIndex,
                    i = -1 === t;
                i || e.options[t].value || (i = !0), this.$button.toggleClass("bs-placeholder", i)
            },
            tabIndex: function() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
            },
            clickListener: function() {
                var E = this,
                    t = F(document);

                function e() {
                    E.options.liveSearch ? E.$searchbox.focus() : E.$menuInner.focus()
                }

                function i() {
                    E.dropdown && E.dropdown._popper && E.dropdown._popper.state.isCreated ? e() : requestAnimationFrame(i)
                }
                t.data("spaceSelect", !1), this.$button.on("keyup", function(e) {
                    /(32)/.test(e.keyCode.toString(10)) && t.data("spaceSelect") && (e.preventDefault(), t.data("spaceSelect", !1))
                }), this.$newElement.on("show.bs.dropdown", function() {
                    3 < _.major && !E.dropdown && (E.dropdown = E.$button.data("bs.dropdown"), E.dropdown._menu = E.$menu[0])
                }), this.$button.on("click.bs.dropdown.data-api", function() {
                    E.$newElement.hasClass(q.SHOW) || E.setSize()
                }), this.$element.on("shown.bs.select", function() {
                    E.$menuInner[0].scrollTop !== E.selectpicker.view.scrollTop && (E.$menuInner[0].scrollTop = E.selectpicker.view.scrollTop), 3 < _.major ? requestAnimationFrame(i) : e()
                }), this.$menuInner.on("click", "li a", function(e, t) {
                    var i = F(this),
                        s = E.isVirtual() ? E.selectpicker.view.position0 : 0,
                        n = E.selectpicker.current.map.originalIndex[i.parent().index() + s],
                        o = S(E.$element[0]),
                        l = E.$element.prop("selectedIndex"),
                        r = !0;
                    if (E.multiple && 1 !== E.options.maxOptions && e.stopPropagation(), e.preventDefault(), !E.isDisabled() && !i.parent().hasClass(q.DISABLED)) {
                        var c = E.$element.find("option"),
                            a = c.eq(n),
                            d = a.prop("selected"),
                            h = a.parent("optgroup"),
                            p = h.find("option"),
                            u = E.options.maxOptions,
                            f = h.data("maxOptions") || !1;
                        if (n === E.activeIndex && (t = !0), t || (E.prevActiveIndex = E.activeIndex, E.activeIndex = void 0), E.multiple) {
                            if (a.prop("selected", !d), E.setSelected(n, !d), i.blur(), !1 !== u || !1 !== f) {
                                var m = u < c.filter(":selected").length,
                                    v = f < h.find("option:selected").length;
                                if (u && m || f && v)
                                    if (u && 1 == u) {
                                        c.prop("selected", !1), a.prop("selected", !0);
                                        for (var g = 0; g < c.length; g++) E.setSelected(g, !1);
                                        E.setSelected(n, !0)
                                    } else if (f && 1 == f) {
                                    h.find("option:selected").prop("selected", !1), a.prop("selected", !0);
                                    for (g = 0; g < p.length; g++) {
                                        var b = p[g];
                                        E.setSelected(c.index(b), !1)
                                    }
                                    E.setSelected(n, !0)
                                } else {
                                    var w = "string" == typeof E.options.maxOptionsText ? [E.options.maxOptionsText, E.options.maxOptionsText] : E.options.maxOptionsText,
                                        x = "function" == typeof w ? w(u, f) : w,
                                        I = x[0].replace("{n}", u),
                                        k = x[1].replace("{n}", f),
                                        $ = F('<div class="notify"></div>');
                                    x[2] && (I = I.replace("{var}", x[2][1 < u ? 0 : 1]), k = k.replace("{var}", x[2][1 < f ? 0 : 1])), a.prop("selected", !1), E.$menu.append($), u && m && ($.append(F("<div>" + I + "</div>")), r = !1, E.$element.trigger("maxReached.bs.select")), f && v && ($.append(F("<div>" + k + "</div>")), r = !1, E.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                                        E.setSelected(n, !1)
                                    }, 10), $.delay(750).fadeOut(300, function() {
                                        F(this).remove()
                                    })
                                }
                            }
                        } else c.prop("selected", !1), a.prop("selected", !0), E.setSelected(n, !0);
                        !E.multiple || E.multiple && 1 === E.options.maxOptions ? E.$button.focus() : E.options.liveSearch && E.$searchbox.focus(), r && (o != S(E.$element[0]) && E.multiple || l != E.$element.prop("selectedIndex") && !E.multiple) && (y = [n, a.prop("selected"), o], E.$element.triggerNative("change"))
                    }
                }), this.$menu.on("click", "li." + q.DISABLED + " a, ." + q.POPOVERHEADER + ", ." + q.POPOVERHEADER + " :not(.close)", function(e) {
                    e.currentTarget == this && (e.preventDefault(), e.stopPropagation(), E.options.liveSearch && !F(e.target).hasClass("close") ? E.$searchbox.focus() : E.$button.focus())
                }), this.$menuInner.on("click", ".divider, .dropdown-header", function(e) {
                    e.preventDefault(), e.stopPropagation(), E.options.liveSearch ? E.$searchbox.focus() : E.$button.focus()
                }), this.$menu.on("click", "." + q.POPOVERHEADER + " .close", function() {
                    E.$button.click()
                }), this.$searchbox.on("click", function(e) {
                    e.stopPropagation()
                }), this.$menu.on("click", ".actions-btn", function(e) {
                    E.options.liveSearch ? E.$searchbox.focus() : E.$button.focus(), e.preventDefault(), e.stopPropagation(), F(this).hasClass("bs-select-all") ? E.selectAll() : E.deselectAll()
                }), this.$element.on({
                    change: function() {
                        E.render(), E.$element.trigger("changed.bs.select", y), y = null
                    },
                    focus: function() {
                        E.$button.focus()
                    }
                })
            },
            liveSearchListener: function() {
                var u = this,
                    f = document.createElement("li");
                this.$button.on("click.bs.dropdown.data-api", function() {
                    u.$searchbox.val() && u.$searchbox.val("")
                }), this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", function(e) {
                    e.stopPropagation()
                }), this.$searchbox.on("input propertychange", function() {
                    var e = u.$searchbox.val();
                    if (u.selectpicker.search.map.newIndex = {}, u.selectpicker.search.map.originalIndex = {}, u.selectpicker.search.elements = [], u.selectpicker.search.data = [], e) {
                        var t = [],
                            i = e.toUpperCase(),
                            s = {},
                            n = [],
                            o = u._searchStyle(),
                            l = u.options.liveSearchNormalize;
                        u._$lisSelected = u.$menuInner.find(".selected");
                        for (var r = 0; r < u.selectpicker.main.data.length; r++) {
                            var c = u.selectpicker.main.data[r];
                            s[r] || (s[r] = $(c, i, o, l)), s[r] && void 0 !== c.headerIndex && -1 === n.indexOf(c.headerIndex) && (0 < c.headerIndex && (s[c.headerIndex - 1] = !0, n.push(c.headerIndex - 1)), s[c.headerIndex] = !0, n.push(c.headerIndex), s[c.lastIndex + 1] = !0), s[r] && "optgroup-label" !== c.type && n.push(r)
                        }
                        r = 0;
                        for (var a = n.length; r < a; r++) {
                            var d = n[r],
                                h = n[r - 1],
                                p = (c = u.selectpicker.main.data[d], u.selectpicker.main.data[h]);
                            ("divider" !== c.type || "divider" === c.type && p && "divider" !== p.type && a - 1 !== r) && (u.selectpicker.search.data.push(c), t.push(u.selectpicker.main.elements[d]), c.hasOwnProperty("originalIndex") && (u.selectpicker.search.map.newIndex[c.originalIndex] = t.length - 1, u.selectpicker.search.map.originalIndex[t.length - 1] = c.originalIndex))
                        }
                        u.activeIndex = void 0, u.noScroll = !0, u.$menuInner.scrollTop(0), u.selectpicker.search.elements = t, u.createView(!0), t.length || (f.className = "no-results", f.innerHTML = u.options.noneResultsText.replace("{0}", '"' + G(e) + '"'), u.$menuInner[0].firstChild.appendChild(f))
                    } else u.$menuInner.scrollTop(0), u.createView(!1)
                })
            },
            _searchStyle: function() {
                return this.options.liveSearchStyle || "contains"
            },
            val: function(e) {
                return void 0 !== e ? (this.$element.val(e).triggerNative("change"), this.$element) : this.$element.val()
            },
            changeAll: function(e) {
                if (this.multiple) {
                    void 0 === e && (e = !0);
                    var t = this.$element.find("option"),
                        i = 0,
                        s = 0,
                        n = S(this.$element[0]);
                    this.$element.addClass("bs-select-hidden");
                    for (var o = 0; o < this.selectpicker.current.elements.length; o++) {
                        var l = this.selectpicker.current.data[o],
                            r = t[this.selectpicker.current.map.originalIndex[o]];
                        r && !r.disabled && "divider" !== l.type && (r.selected && i++, r.selected = e, r.selected && s++)
                    }
                    this.$element.removeClass("bs-select-hidden"), i !== s && (this.setOptionStatus(), this.togglePlaceholder(), y = [null, null, n], this.$element.triggerNative("change"))
                }
            },
            selectAll: function() {
                return this.changeAll(!0)
            },
            deselectAll: function() {
                return this.changeAll(!1)
            },
            toggle: function(e) {
                (e = e || window.event) && e.stopPropagation(), this.$button.trigger("click.bs.dropdown.data-api")
            },
            keydown: function(e) {
                var t, i, s, n, o, l = F(this),
                    r = l.hasClass("dropdown-toggle"),
                    c = (r ? l.closest(".dropdown") : l.closest(N.MENU)).data("this"),
                    a = c.findLis(),
                    d = !1,
                    h = e.which === D && !r && !c.options.selectOnTab,
                    p = A.test(e.which) || h,
                    u = c.$menuInner[0].scrollTop,
                    f = c.isVirtual(),
                    m = !0 === f ? c.selectpicker.view.position0 : 0;
                if (!(i = c.$newElement.hasClass(q.SHOW)) && (p || 48 <= e.which && e.which <= 57 || 96 <= e.which && e.which <= 105 || 65 <= e.which && e.which <= 90) && c.$button.trigger("click.bs.dropdown.data-api"), e.which === C && i && (e.preventDefault(), c.$button.trigger("click.bs.dropdown.data-api").focus()), p) {
                    if (!a.length) return;
                    void 0 === (t = !0 === f ? a.index(a.filter(".active")) : c.selectpicker.current.map.newIndex[c.activeIndex]) && (t = -1), -1 !== t && ((s = c.selectpicker.current.elements[t + m]).classList.remove("active"), s.firstChild && s.firstChild.classList.remove("active")), e.which === H ? (-1 !== t && t--, t + m < 0 && (t += a.length), c.selectpicker.view.canHighlight[t + m] || -1 === (t = c.selectpicker.view.canHighlight.slice(0, t + m).lastIndexOf(!0) - m) && (t = a.length - 1)) : (e.which === L || h) && (++t + m >= c.selectpicker.view.canHighlight.length && (t = 0), c.selectpicker.view.canHighlight[t + m] || (t = t + 1 + c.selectpicker.view.canHighlight.slice(t + m + 1).indexOf(!0))), e.preventDefault();
                    var v = m + t;
                    e.which === H ? 0 === m && t === a.length - 1 ? (c.$menuInner[0].scrollTop = c.$menuInner[0].scrollHeight, v = c.selectpicker.current.elements.length - 1) : d = (o = (n = c.selectpicker.current.data[v]).position - n.height) < u : (e.which === L || h) && (0 === t ? v = c.$menuInner[0].scrollTop = 0 : d = u < (o = (n = c.selectpicker.current.data[v]).position - c.sizeInfo.menuInnerHeight)), (s = c.selectpicker.current.elements[v]) && (s.classList.add("active"), s.firstChild && s.firstChild.classList.add("active")), c.activeIndex = c.selectpicker.current.map.originalIndex[v], c.selectpicker.view.currentActive = s, d && (c.$menuInner[0].scrollTop = o), c.options.liveSearch ? c.$searchbox.focus() : l.focus()
                } else if (!l.is("input") && !P.test(e.which) || e.which === T && c.selectpicker.keydown.keyHistory) {
                    var g, b, w = [];
                    e.preventDefault(), c.selectpicker.keydown.keyHistory += E[e.which], c.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(c.selectpicker.keydown.resetKeyHistory.cancel), c.selectpicker.keydown.resetKeyHistory.cancel = c.selectpicker.keydown.resetKeyHistory.start(), b = c.selectpicker.keydown.keyHistory, /^(.)\1+$/.test(b) && (b = b.charAt(0));
                    for (var x = 0; x < c.selectpicker.current.data.length; x++) {
                        var I = c.selectpicker.current.data[x];
                        $(I, b, "startsWith", !0) && c.selectpicker.view.canHighlight[x] && (I.index = x, w.push(I.originalIndex))
                    }
                    if (w.length) {
                        var k = 0;
                        a.removeClass("active").find("a").removeClass("active"), 1 === b.length && (-1 === (k = w.indexOf(c.activeIndex)) || k === w.length - 1 ? k = 0 : k++), g = c.selectpicker.current.map.newIndex[w[k]], 0 < u - (n = c.selectpicker.current.data[g]).position ? (o = n.position - n.height, d = !0) : (o = n.position - c.sizeInfo.menuInnerHeight, d = n.position > u + c.sizeInfo.menuInnerHeight), (s = c.selectpicker.current.elements[g]).classList.add("active"), s.firstChild && s.firstChild.classList.add("active"), c.activeIndex = w[k], s.firstChild.focus(), d && (c.$menuInner[0].scrollTop = o), l.focus()
                    }
                }
                i && (e.which === T && !c.selectpicker.keydown.keyHistory || e.which === z || e.which === D && c.options.selectOnTab) && (e.which !== T && e.preventDefault(), c.options.liveSearch && e.which === T || (c.$menuInner.find(".active a").trigger("click", !0), l.focus(), c.options.liveSearch || (e.preventDefault(), F(document).data("spaceSelect", !0))))
            },
            mobile: function() {
                this.$element.addClass("mobile-device")
            },
            refresh: function() {
                var e = F.extend({}, this.options, this.$element.data());
                this.options = e, this.selectpicker.main.map.newIndex = {}, this.selectpicker.main.map.originalIndex = {}, this.createLi(), this.checkDisabled(), this.render(), this.setStyle(), this.setWidth(), this.setSize(!0), this.$element.trigger("refreshed.bs.select")
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove(), this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
            }
        };
        var h = F.fn.selectpicker;
        F.fn.selectpicker = r, F.fn.selectpicker.Constructor = c, F.fn.selectpicker.noConflict = function() {
            return F.fn.selectpicker = h, this
        }, F(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.select", '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bs-searchbox input', c.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bs-searchbox input', function(e) {
            e.stopPropagation()
        }), F(window).on("load.bs.select.data-api", function() {
            F(".selectpicker").each(function() {
                var e = F(this);
                r.call(e, e.data())
            })
        })
    }(e)
});
//# sourceMappingURL=bootstrap-select.js.map