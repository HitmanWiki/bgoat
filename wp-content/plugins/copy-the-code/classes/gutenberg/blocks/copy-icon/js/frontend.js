! function() {
    var e = {
            9: function() {
                window.CTCClipboard = function(e, o, n) {
                    var t;

                    function c() {
                        var c, i;
                        n.userAgent.match(/ipad|iphone/i) ? ((c = o.createRange()).selectNodeContents(t), (i = e.getSelection()).removeAllRanges(), i.addRange(c), t.setSelectionRange(0, 999999)) : t.select()
                    }
                    return copySelection = function(n) {
                        var t = e.getSelection(),
                            c = o.createRange();
                        c.selectNodeContents(n[0]), t.removeAllRanges(), t.addRange(c), o.execCommand("copy"), t.removeAllRanges()
                    }, {
                        copy: function(n) {
                            ! function(e) {
                                (t = o.createElement("textArea")).value = e, o.body.appendChild(t)
                            }(n), c(), o.execCommand("copy"), o.body.removeChild(t), "undefined" != typeof copyTheCode && copyTheCode.redirect_url && (e.location.href = copyTheCode.redirect_url)
                        },
                        copySelection: copySelection
                    }
                }(window, document, navigator)
            }
        },
        o = {};

    function n(t) {
        var c = o[t];
        if (void 0 !== c) return c.exports;
        var i = o[t] = {
            exports: {}
        };
        return e[t](i, i.exports, n), i.exports
    }
    n.n = function(e) {
            var o = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(o, {
                a: o
            }), o
        }, n.d = function(e, o) {
            for (var t in o) n.o(o, t) && !n.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: o[t]
            })
        }, n.o = function(e, o) {
            return Object.prototype.hasOwnProperty.call(e, o)
        },
        function() {
            "use strict";
            var e, o;
            n(9);
            e = jQuery, o = {
                init: function() {
                    this._bind()
                },
                _bind: function() {
                    e(document).on("click", ".wp-block-ctc-copy-icon .ctc-block-copy-icon", this.doCopy)
                },
                doCopy: function(o) {
                    o.preventDefault();
                    var n = e(this),
                        t = n.closest(".wp-block-ctc-copy-icon").find(".ctc-copy-icon-textarea").val().trim() || "";
                    t && (t = t.replace(/<br\s*\/?>/gi, "\n")), CTCClipboard.copy(t), n.addClass("copied"), setTimeout((function() {
                        n.removeClass("copied")
                    }), 1e3)
                }
            }, e((function() {
                o.init()
            }))
        }()
}();