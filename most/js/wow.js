/*! WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */
! function(a, b) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], b);
    else if ("undefined" != typeof exports) b(module, exports);
    else {
        var c = { exports: {} };
        b(c, c.exports), a.WOW = c.exports
    }
}(this, function(a, b) {
    "use strict";

    function c(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") }

    function d(a, b) { return b.indexOf(a) >= 0 }

    function e(a, b) {
        for (var c in b)
            if (null == a[c]) {
                var d = b[c];
                a[c] = d
            }
        return a
    }

    function f(a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }

    function g(a) {
        var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
            c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
            d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
            e = void 0;
        return null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
    }

    function h(a, b) { null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]() }

    function i(a, b, c) { null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c }

    function j(a, b, c) { null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b] }

    function k() { return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }
    Object.defineProperty(b, "__esModule", { value: !0 });
    var l, m, n = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }
            return function(b, c, d) { return c && a(b.prototype, c), d && a(b, d), b }
        }(),
        o = window.WeakMap || window.MozWeakMap || function() {
            function a() { c(this, a), this.keys = [], this.values = [] }
            return n(a, [{ key: "get", value: function(a) { for (var b = 0; b < this.keys.length; b++) { var c = this.keys[b]; if (c === a) return this.values[b] } } }, { key: "set", value: function(a, b) { for (var c = 0; c < this.keys.length; c++) { var d = this.keys[c]; if (d === a) return this.values[c] = b, this } return this.keys.push(a), this.values.push(b), this } }]), a
        }(),
        p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function() {
            function a() { c(this, a), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")) }
            return n(a, [{ key: "observe", value: function() {} }]), a
        }(), l.notSupported = !0, m),
        q = window.getComputedStyle || function(a) { var b = /(\-([a-z]){1})/g; return { getPropertyValue: function(c) { "float" === c && (c = "styleFloat"), b.test(c) && c.replace(b, function(a, b) { return b.toUpperCase() }); var d = a.currentStyle; return (null != d ? d[c] : void 0) || null } } },
        r = function() {
            function a() {
                var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                c(this, a), this.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null, resetAnimation: !0 }, this.animate = function() { return "requestAnimationFrame" in window ? function(a) { return window.requestAnimationFrame(a) } : function(a) { return a() } }(), this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = e(b, this.defaults), null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)), this.animationNameCache = new o, this.wowEvent = g(this.config.boxClass)
            }
            return n(a, [{ key: "init", value: function() { this.element = window.document.documentElement, d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start), this.finished = [] } }, {
                key: "start",
                value: function() {
                    var a = this;
                    if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length)
                        if (this.disabled()) this.resetStyle();
                        else
                            for (var b = 0; b < this.boxes.length; b++) {
                                var c = this.boxes[b];
                                this.applyStyle(c, !0)
                            }
                    if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler), i(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) {
                        var d = new p(function(b) {
                            for (var c = 0; c < b.length; c++)
                                for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                                    var f = d.addedNodes[e];
                                    a.doSync(f)
                                }
                        });
                        d.observe(document.body, { childList: !0, subtree: !0 })
                    }
                }
            }, { key: "stop", value: function() { this.stopped = !0, j(this.config.scrollContainer || window, "scroll", this.scrollHandler), j(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval) } }, { key: "sync", value: function() { p.notSupported && this.doSync(this.element) } }, {
                key: "doSync",
                value: function(a) {
                    if ("undefined" != typeof a && null !== a || (a = this.element), 1 === a.nodeType) {
                        a = a.parentNode || a;
                        for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
                            var e = b[c];
                            d(e, this.all) || (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), this.scrolled = !0)
                        }
                    }
                }
            }, { key: "show", value: function(a) { return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), h(a, this.wowEvent), this.config.resetAnimation && (i(a, "animationend", this.resetAnimation), i(a, "oanimationend", this.resetAnimation), i(a, "webkitAnimationEnd", this.resetAnimation), i(a, "MSAnimationEnd", this.resetAnimation)), a } }, {
                key: "applyStyle",
                value: function(a, b) {
                    var c = this,
                        d = a.getAttribute("data-wow-duration"),
                        e = a.getAttribute("data-wow-delay"),
                        f = a.getAttribute("data-wow-iteration");
                    return this.animate(function() { return c.customStyle(a, b, d, e, f) })
                }
            }, {
                key: "resetStyle",
                value: function() {
                    for (var a = 0; a < this.boxes.length; a++) {
                        var b = this.boxes[a];
                        b.style.visibility = "visible"
                    }
                }
            }, {
                key: "resetAnimation",
                value: function(a) {
                    if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                        var b = a.target || a.srcElement;
                        b.className = b.className.replace(this.config.animateClass, "").trim()
                    }
                }
            }, { key: "customStyle", value: function(a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a } }, {
                key: "vendorSet",
                value: function(a, b) {
                    for (var c in b)
                        if (b.hasOwnProperty(c)) {
                            var d = b[c];
                            a["" + c] = d;
                            for (var e = 0; e < this.vendors.length; e++) {
                                var f = this.vendors[e];
                                a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d
                            }
                        }
                }
            }, {
                key: "vendorCSS",
                value: function(a, b) {
                    for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
                        var f = this.vendors[e];
                        d = d || c.getPropertyCSSValue("-" + f + "-" + b)
                    }
                    return d
                }
            }, { key: "animationName", value: function(a) { var b = void 0; try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = q(a).getPropertyValue("animation-name") } return "none" === b ? "" : b } }, { key: "cacheAnimationName", value: function(a) { return this.animationNameCache.set(a, this.animationName(a)) } }, { key: "cachedAnimationName", value: function(a) { return this.animationNameCache.get(a) } }, { key: "scrollHandler", value: function() { this.scrolled = !0 } }, {
                key: "scrollCallback",
                value: function() {
                    if (this.scrolled) {
                        this.scrolled = !1;
                        for (var a = [], b = 0; b < this.boxes.length; b++) {
                            var c = this.boxes[b];
                            if (c) {
                                if (this.isVisible(c)) { this.show(c); continue }
                                a.push(c)
                            }
                        }
                        this.boxes = a, this.boxes.length || this.config.live || this.stop()
                    }
                }
            }, { key: "offsetTop", value: function(a) { for (; void 0 === a.offsetTop;) a = a.parentNode; for (var b = a.offsetTop; a.offsetParent;) a = a.offsetParent, b += a.offsetTop; return b } }, {
                key: "isVisible",
                value: function(a) {
                    var b = a.getAttribute("data-wow-offset") || this.config.offset,
                        c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                        d = c + Math.min(this.element.clientHeight, k()) - b,
                        e = this.offsetTop(a),
                        f = e + a.clientHeight;
                    return d >= e && f >= c
                }
            }, { key: "disabled", value: function() { return !this.config.mobile && f(navigator.userAgent) } }]), a
        }();
    b["default"] = r, a.exports = b["default"]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ3b3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohIFdPVyB3b3cuanMgLSB2MS4zLjAgLSAyMDE2LTEwLTA0XHJcbiAqIGh0dHBzOi8vd293anMudWtcclxuICogQ29weXJpZ2h0IChjKSAyMDE2IFRob21hcyBHcmFpbmdlcjsgTGljZW5zZWQgTUlUICovXHJcbiEgZnVuY3Rpb24oYSwgYikge1xyXG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQpIGRlZmluZShbXCJtb2R1bGVcIiwgXCJleHBvcnRzXCJdLCBiKTtcclxuICAgIGVsc2UgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIGV4cG9ydHMpIGIobW9kdWxlLCBleHBvcnRzKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBjID0geyBleHBvcnRzOiB7fSB9O1xyXG4gICAgICAgIGIoYywgYy5leHBvcnRzKSwgYS5XT1cgPSBjLmV4cG9ydHNcclxuICAgIH1cclxufSh0aGlzLCBmdW5jdGlvbihhLCBiKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICBmdW5jdGlvbiBjKGEsIGIpIHsgaWYgKCEoYSBpbnN0YW5jZW9mIGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkKGEsIGIpIHsgcmV0dXJuIGIuaW5kZXhPZihhKSA+PSAwIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlKGEsIGIpIHtcclxuICAgICAgICBmb3IgKHZhciBjIGluIGIpXHJcbiAgICAgICAgICAgIGlmIChudWxsID09IGFbY10pIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gYltjXTtcclxuICAgICAgICAgICAgICAgIGFbY10gPSBkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGYoYSkgeyByZXR1cm4gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KGEpIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnKGEpIHtcclxuICAgICAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCB2b2lkIDAgPT09IGFyZ3VtZW50c1sxXSA/ICExIDogYXJndW1lbnRzWzFdLFxyXG4gICAgICAgICAgICBjID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IHZvaWQgMCA9PT0gYXJndW1lbnRzWzJdID8gITEgOiBhcmd1bWVudHNbMl0sXHJcbiAgICAgICAgICAgIGQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgdm9pZCAwID09PSBhcmd1bWVudHNbM10gPyBudWxsIDogYXJndW1lbnRzWzNdLFxyXG4gICAgICAgICAgICBlID0gdm9pZCAwO1xyXG4gICAgICAgIHJldHVybiBudWxsICE9IGRvY3VtZW50LmNyZWF0ZUV2ZW50ID8gKGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpLCBlLmluaXRDdXN0b21FdmVudChhLCBiLCBjLCBkKSkgOiBudWxsICE9IGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0ID8gKGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudE9iamVjdCgpLCBlLmV2ZW50VHlwZSA9IGEpIDogZS5ldmVudE5hbWUgPSBhLCBlXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaChhLCBiKSB7IG51bGwgIT0gYS5kaXNwYXRjaEV2ZW50ID8gYS5kaXNwYXRjaEV2ZW50KGIpIDogYiBpbiAobnVsbCAhPSBhKSA/IGFbYl0oKSA6IFwib25cIiArIGIgaW4gKG51bGwgIT0gYSkgJiYgYVtcIm9uXCIgKyBiXSgpIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpKGEsIGIsIGMpIHsgbnVsbCAhPSBhLmFkZEV2ZW50TGlzdGVuZXIgPyBhLmFkZEV2ZW50TGlzdGVuZXIoYiwgYywgITEpIDogbnVsbCAhPSBhLmF0dGFjaEV2ZW50ID8gYS5hdHRhY2hFdmVudChcIm9uXCIgKyBiLCBjKSA6IGFbYl0gPSBjIH1cclxuXHJcbiAgICBmdW5jdGlvbiBqKGEsIGIsIGMpIHsgbnVsbCAhPSBhLnJlbW92ZUV2ZW50TGlzdGVuZXIgPyBhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYiwgYywgITEpIDogbnVsbCAhPSBhLmRldGFjaEV2ZW50ID8gYS5kZXRhY2hFdmVudChcIm9uXCIgKyBiLCBjKSA6IGRlbGV0ZSBhW2JdIH1cclxuXHJcbiAgICBmdW5jdGlvbiBrKCkgeyByZXR1cm4gXCJpbm5lckhlaWdodFwiIGluIHdpbmRvdyA/IHdpbmRvdy5pbm5lckhlaWdodCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGIsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiAhMCB9KTtcclxuICAgIHZhciBsLCBtLCBuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGEoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBiLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBiW2NdO1xyXG4gICAgICAgICAgICAgICAgICAgIGQuZW51bWVyYWJsZSA9IGQuZW51bWVyYWJsZSB8fCAhMSwgZC5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIGQgJiYgKGQud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBkLmtleSwgZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oYiwgYywgZCkgeyByZXR1cm4gYyAmJiBhKGIucHJvdG90eXBlLCBjKSwgZCAmJiBhKGIsIGQpLCBiIH1cclxuICAgICAgICB9KCksXHJcbiAgICAgICAgbyA9IHdpbmRvdy5XZWFrTWFwIHx8IHdpbmRvdy5Nb3pXZWFrTWFwIHx8IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBhKCkgeyBjKHRoaXMsIGEpLCB0aGlzLmtleXMgPSBbXSwgdGhpcy52YWx1ZXMgPSBbXSB9XHJcbiAgICAgICAgICAgIHJldHVybiBuKGEsIFt7IGtleTogXCJnZXRcIiwgdmFsdWU6IGZ1bmN0aW9uKGEpIHsgZm9yICh2YXIgYiA9IDA7IGIgPCB0aGlzLmtleXMubGVuZ3RoOyBiKyspIHsgdmFyIGMgPSB0aGlzLmtleXNbYl07IGlmIChjID09PSBhKSByZXR1cm4gdGhpcy52YWx1ZXNbYl0gfSB9IH0sIHsga2V5OiBcInNldFwiLCB2YWx1ZTogZnVuY3Rpb24oYSwgYikgeyBmb3IgKHZhciBjID0gMDsgYyA8IHRoaXMua2V5cy5sZW5ndGg7IGMrKykgeyB2YXIgZCA9IHRoaXMua2V5c1tjXTsgaWYgKGQgPT09IGEpIHJldHVybiB0aGlzLnZhbHVlc1tjXSA9IGIsIHRoaXMgfSByZXR1cm4gdGhpcy5rZXlzLnB1c2goYSksIHRoaXMudmFsdWVzLnB1c2goYiksIHRoaXMgfSB9XSksIGFcclxuICAgICAgICB9KCksXHJcbiAgICAgICAgcCA9IHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5XZWJraXRNdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5Nb3pNdXRhdGlvbk9ic2VydmVyIHx8IChtID0gbCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBhKCkgeyBjKHRoaXMsIGEpLCBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBjb25zb2xlICYmIG51bGwgIT09IGNvbnNvbGUgJiYgKGNvbnNvbGUud2FybihcIk11dGF0aW9uT2JzZXJ2ZXIgaXMgbm90IHN1cHBvcnRlZCBieSB5b3VyIGJyb3dzZXIuXCIpLCBjb25zb2xlLndhcm4oXCJXT1cuanMgY2Fubm90IGRldGVjdCBkb20gbXV0YXRpb25zLCBwbGVhc2UgY2FsbCAuc3luYygpIGFmdGVyIGxvYWRpbmcgbmV3IGNvbnRlbnQuXCIpKSB9XHJcbiAgICAgICAgICAgIHJldHVybiBuKGEsIFt7IGtleTogXCJvYnNlcnZlXCIsIHZhbHVlOiBmdW5jdGlvbigpIHt9IH1dKSwgYVxyXG4gICAgICAgIH0oKSwgbC5ub3RTdXBwb3J0ZWQgPSAhMCwgbSksXHJcbiAgICAgICAgcSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlIHx8IGZ1bmN0aW9uKGEpIHsgdmFyIGIgPSAvKFxcLShbYS16XSl7MX0pL2c7IHJldHVybiB7IGdldFByb3BlcnR5VmFsdWU6IGZ1bmN0aW9uKGMpIHsgXCJmbG9hdFwiID09PSBjICYmIChjID0gXCJzdHlsZUZsb2F0XCIpLCBiLnRlc3QoYykgJiYgYy5yZXBsYWNlKGIsIGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGIudG9VcHBlckNhc2UoKSB9KTsgdmFyIGQgPSBhLmN1cnJlbnRTdHlsZTsgcmV0dXJuIChudWxsICE9IGQgPyBkW2NdIDogdm9pZCAwKSB8fCBudWxsIH0gfSB9LFxyXG4gICAgICAgIHIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gYSgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IHZvaWQgMCA9PT0gYXJndW1lbnRzWzBdID8ge30gOiBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgICAgICBjKHRoaXMsIGEpLCB0aGlzLmRlZmF1bHRzID0geyBib3hDbGFzczogXCJ3b3dcIiwgYW5pbWF0ZUNsYXNzOiBcImFuaW1hdGVkXCIsIG9mZnNldDogMCwgbW9iaWxlOiAhMCwgbGl2ZTogITAsIGNhbGxiYWNrOiBudWxsLCBzY3JvbGxDb250YWluZXI6IG51bGwsIHJlc2V0QW5pbWF0aW9uOiAhMCB9LCB0aGlzLmFuaW1hdGUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFwicmVxdWVzdEFuaW1hdGlvbkZyYW1lXCIgaW4gd2luZG93ID8gZnVuY3Rpb24oYSkgeyByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhKSB9IDogZnVuY3Rpb24oYSkgeyByZXR1cm4gYSgpIH0gfSgpLCB0aGlzLnZlbmRvcnMgPSBbXCJtb3pcIiwgXCJ3ZWJraXRcIl0sIHRoaXMuc3RhcnQgPSB0aGlzLnN0YXJ0LmJpbmQodGhpcyksIHRoaXMucmVzZXRBbmltYXRpb24gPSB0aGlzLnJlc2V0QW5pbWF0aW9uLmJpbmQodGhpcyksIHRoaXMuc2Nyb2xsSGFuZGxlciA9IHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpLCB0aGlzLnNjcm9sbENhbGxiYWNrID0gdGhpcy5zY3JvbGxDYWxsYmFjay5iaW5kKHRoaXMpLCB0aGlzLnNjcm9sbGVkID0gITAsIHRoaXMuY29uZmlnID0gZShiLCB0aGlzLmRlZmF1bHRzKSwgbnVsbCAhPSBiLnNjcm9sbENvbnRhaW5lciAmJiAodGhpcy5jb25maWcuc2Nyb2xsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihiLnNjcm9sbENvbnRhaW5lcikpLCB0aGlzLmFuaW1hdGlvbk5hbWVDYWNoZSA9IG5ldyBvLCB0aGlzLndvd0V2ZW50ID0gZyh0aGlzLmNvbmZpZy5ib3hDbGFzcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbihhLCBbeyBrZXk6IFwiaW5pdFwiLCB2YWx1ZTogZnVuY3Rpb24oKSB7IHRoaXMuZWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGQoZG9jdW1lbnQucmVhZHlTdGF0ZSwgW1wiaW50ZXJhY3RpdmVcIiwgXCJjb21wbGV0ZVwiXSkgPyB0aGlzLnN0YXJ0KCkgOiBpKGRvY3VtZW50LCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdGhpcy5zdGFydCksIHRoaXMuZmluaXNoZWQgPSBbXSB9IH0sIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJzdGFydFwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zdG9wcGVkID0gITEsIHRoaXMuYm94ZXMgPSBbXS5zbGljZS5jYWxsKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiICsgdGhpcy5jb25maWcuYm94Q2xhc3MpKSwgdGhpcy5hbGwgPSB0aGlzLmJveGVzLnNsaWNlKDApLCB0aGlzLmJveGVzLmxlbmd0aClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQoKSkgdGhpcy5yZXNldFN0eWxlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGIgPSAwOyBiIDwgdGhpcy5ib3hlcy5sZW5ndGg7IGIrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gdGhpcy5ib3hlc1tiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5U3R5bGUoYywgITApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQoKSB8fCAoaSh0aGlzLmNvbmZpZy5zY3JvbGxDb250YWluZXIgfHwgd2luZG93LCBcInNjcm9sbFwiLCB0aGlzLnNjcm9sbEhhbmRsZXIpLCBpKHdpbmRvdywgXCJyZXNpemVcIiwgdGhpcy5zY3JvbGxIYW5kbGVyKSwgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuc2Nyb2xsQ2FsbGJhY2ssIDUwKSksIHRoaXMuY29uZmlnLmxpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgcChmdW5jdGlvbihiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGIubGVuZ3RoOyBjKyspXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZCA9IGJbY10sIGUgPSAwOyBlIDwgZC5hZGRlZE5vZGVzLmxlbmd0aDsgZSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmID0gZC5hZGRlZE5vZGVzW2VdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmRvU3luYyhmKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogITAsIHN1YnRyZWU6ICEwIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7IGtleTogXCJzdG9wXCIsIHZhbHVlOiBmdW5jdGlvbigpIHsgdGhpcy5zdG9wcGVkID0gITAsIGoodGhpcy5jb25maWcuc2Nyb2xsQ29udGFpbmVyIHx8IHdpbmRvdywgXCJzY3JvbGxcIiwgdGhpcy5zY3JvbGxIYW5kbGVyKSwgaih3aW5kb3csIFwicmVzaXplXCIsIHRoaXMuc2Nyb2xsSGFuZGxlciksIG51bGwgIT0gdGhpcy5pbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpIH0gfSwgeyBrZXk6IFwic3luY1wiLCB2YWx1ZTogZnVuY3Rpb24oKSB7IHAubm90U3VwcG9ydGVkICYmIHRoaXMuZG9TeW5jKHRoaXMuZWxlbWVudCkgfSB9LCB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiZG9TeW5jXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBhICYmIG51bGwgIT09IGEgfHwgKGEgPSB0aGlzLmVsZW1lbnQpLCAxID09PSBhLm5vZGVUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEgPSBhLnBhcmVudE5vZGUgfHwgYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYiA9IGEucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIHRoaXMuY29uZmlnLmJveENsYXNzKSwgYyA9IDA7IGMgPCBiLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGJbY107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkKGUsIHRoaXMuYWxsKSB8fCAodGhpcy5ib3hlcy5wdXNoKGUpLCB0aGlzLmFsbC5wdXNoKGUpLCB0aGlzLnN0b3BwZWQgfHwgdGhpcy5kaXNhYmxlZCgpID8gdGhpcy5yZXNldFN0eWxlKCkgOiB0aGlzLmFwcGx5U3R5bGUoZSwgITApLCB0aGlzLnNjcm9sbGVkID0gITApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHsga2V5OiBcInNob3dcIiwgdmFsdWU6IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIHRoaXMuYXBwbHlTdHlsZShhKSwgYS5jbGFzc05hbWUgPSBhLmNsYXNzTmFtZSArIFwiIFwiICsgdGhpcy5jb25maWcuYW5pbWF0ZUNsYXNzLCBudWxsICE9IHRoaXMuY29uZmlnLmNhbGxiYWNrICYmIHRoaXMuY29uZmlnLmNhbGxiYWNrKGEpLCBoKGEsIHRoaXMud293RXZlbnQpLCB0aGlzLmNvbmZpZy5yZXNldEFuaW1hdGlvbiAmJiAoaShhLCBcImFuaW1hdGlvbmVuZFwiLCB0aGlzLnJlc2V0QW5pbWF0aW9uKSwgaShhLCBcIm9hbmltYXRpb25lbmRcIiwgdGhpcy5yZXNldEFuaW1hdGlvbiksIGkoYSwgXCJ3ZWJraXRBbmltYXRpb25FbmRcIiwgdGhpcy5yZXNldEFuaW1hdGlvbiksIGkoYSwgXCJNU0FuaW1hdGlvbkVuZFwiLCB0aGlzLnJlc2V0QW5pbWF0aW9uKSksIGEgfSB9LCB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiYXBwbHlTdHlsZVwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQgPSBhLmdldEF0dHJpYnV0ZShcImRhdGEtd293LWR1cmF0aW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdvdy1kZWxheVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IGEuZ2V0QXR0cmlidXRlKFwiZGF0YS13b3ctaXRlcmF0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGUoZnVuY3Rpb24oKSB7IHJldHVybiBjLmN1c3RvbVN0eWxlKGEsIGIsIGQsIGUsIGYpIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJyZXNldFN0eWxlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCB0aGlzLmJveGVzLmxlbmd0aDsgYSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiID0gdGhpcy5ib3hlc1thXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJyZXNldEFuaW1hdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYS50eXBlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImFuaW1hdGlvbmVuZFwiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiID0gYS50YXJnZXQgfHwgYS5zcmNFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiLmNsYXNzTmFtZSA9IGIuY2xhc3NOYW1lLnJlcGxhY2UodGhpcy5jb25maWcuYW5pbWF0ZUNsYXNzLCBcIlwiKS50cmltKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHsga2V5OiBcImN1c3RvbVN0eWxlXCIsIHZhbHVlOiBmdW5jdGlvbihhLCBiLCBjLCBkLCBlKSB7IHJldHVybiBiICYmIHRoaXMuY2FjaGVBbmltYXRpb25OYW1lKGEpLCBhLnN0eWxlLnZpc2liaWxpdHkgPSBiID8gXCJoaWRkZW5cIiA6IFwidmlzaWJsZVwiLCBjICYmIHRoaXMudmVuZG9yU2V0KGEuc3R5bGUsIHsgYW5pbWF0aW9uRHVyYXRpb246IGMgfSksIGQgJiYgdGhpcy52ZW5kb3JTZXQoYS5zdHlsZSwgeyBhbmltYXRpb25EZWxheTogZCB9KSwgZSAmJiB0aGlzLnZlbmRvclNldChhLnN0eWxlLCB7IGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiBlIH0pLCB0aGlzLnZlbmRvclNldChhLnN0eWxlLCB7IGFuaW1hdGlvbk5hbWU6IGIgPyBcIm5vbmVcIiA6IHRoaXMuY2FjaGVkQW5pbWF0aW9uTmFtZShhKSB9KSwgYSB9IH0sIHtcclxuICAgICAgICAgICAgICAgIGtleTogXCJ2ZW5kb3JTZXRcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYyBpbiBiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShjKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBiW2NdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcIlwiICsgY10gPSBkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IDA7IGUgPCB0aGlzLnZlbmRvcnMubGVuZ3RoOyBlKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IHRoaXMudmVuZG9yc1tlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1wiXCIgKyBmICsgYy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGMuc3Vic3RyKDEpXSA9IGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwidmVuZG9yQ1NTXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGMgPSBxKGEpLCBkID0gYy5nZXRQcm9wZXJ0eUNTU1ZhbHVlKGIpLCBlID0gMDsgZSA8IHRoaXMudmVuZG9ycy5sZW5ndGg7IGUrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IHRoaXMudmVuZG9yc1tlXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZCA9IGQgfHwgYy5nZXRQcm9wZXJ0eUNTU1ZhbHVlKFwiLVwiICsgZiArIFwiLVwiICsgYilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgeyBrZXk6IFwiYW5pbWF0aW9uTmFtZVwiLCB2YWx1ZTogZnVuY3Rpb24oYSkgeyB2YXIgYiA9IHZvaWQgMDsgdHJ5IHsgYiA9IHRoaXMudmVuZG9yQ1NTKGEsIFwiYW5pbWF0aW9uLW5hbWVcIikuY3NzVGV4dCB9IGNhdGNoIChjKSB7IGIgPSBxKGEpLmdldFByb3BlcnR5VmFsdWUoXCJhbmltYXRpb24tbmFtZVwiKSB9IHJldHVybiBcIm5vbmVcIiA9PT0gYiA/IFwiXCIgOiBiIH0gfSwgeyBrZXk6IFwiY2FjaGVBbmltYXRpb25OYW1lXCIsIHZhbHVlOiBmdW5jdGlvbihhKSB7IHJldHVybiB0aGlzLmFuaW1hdGlvbk5hbWVDYWNoZS5zZXQoYSwgdGhpcy5hbmltYXRpb25OYW1lKGEpKSB9IH0sIHsga2V5OiBcImNhY2hlZEFuaW1hdGlvbk5hbWVcIiwgdmFsdWU6IGZ1bmN0aW9uKGEpIHsgcmV0dXJuIHRoaXMuYW5pbWF0aW9uTmFtZUNhY2hlLmdldChhKSB9IH0sIHsga2V5OiBcInNjcm9sbEhhbmRsZXJcIiwgdmFsdWU6IGZ1bmN0aW9uKCkgeyB0aGlzLnNjcm9sbGVkID0gITAgfSB9LCB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwic2Nyb2xsQ2FsbGJhY2tcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zY3JvbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbGVkID0gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGEgPSBbXSwgYiA9IDA7IGIgPCB0aGlzLmJveGVzLmxlbmd0aDsgYisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IHRoaXMuYm94ZXNbYl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZShjKSkgeyB0aGlzLnNob3coYyk7IGNvbnRpbnVlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLnB1c2goYylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJveGVzID0gYSwgdGhpcy5ib3hlcy5sZW5ndGggfHwgdGhpcy5jb25maWcubGl2ZSB8fCB0aGlzLnN0b3AoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgeyBrZXk6IFwib2Zmc2V0VG9wXCIsIHZhbHVlOiBmdW5jdGlvbihhKSB7IGZvciAoOyB2b2lkIDAgPT09IGEub2Zmc2V0VG9wOykgYSA9IGEucGFyZW50Tm9kZTsgZm9yICh2YXIgYiA9IGEub2Zmc2V0VG9wOyBhLm9mZnNldFBhcmVudDspIGEgPSBhLm9mZnNldFBhcmVudCwgYiArPSBhLm9mZnNldFRvcDsgcmV0dXJuIGIgfSB9LCB7XHJcbiAgICAgICAgICAgICAgICBrZXk6IFwiaXNWaXNpYmxlXCIsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oYSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBiID0gYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdvdy1vZmZzZXRcIikgfHwgdGhpcy5jb25maWcub2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjID0gdGhpcy5jb25maWcuc2Nyb2xsQ29udGFpbmVyICYmIHRoaXMuY29uZmlnLnNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgfHwgd2luZG93LnBhZ2VZT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkID0gYyArIE1hdGgubWluKHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQsIGsoKSkgLSBiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlID0gdGhpcy5vZmZzZXRUb3AoYSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGYgPSBlICsgYS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQgPj0gZSAmJiBmID49IGNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgeyBrZXk6IFwiZGlzYWJsZWRcIiwgdmFsdWU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gIXRoaXMuY29uZmlnLm1vYmlsZSAmJiBmKG5hdmlnYXRvci51c2VyQWdlbnQpIH0gfV0pLCBhXHJcbiAgICAgICAgfSgpO1xyXG4gICAgYltcImRlZmF1bHRcIl0gPSByLCBhLmV4cG9ydHMgPSBiW1wiZGVmYXVsdFwiXVxyXG59KTsiXSwiZmlsZSI6Indvdy5qcyJ9