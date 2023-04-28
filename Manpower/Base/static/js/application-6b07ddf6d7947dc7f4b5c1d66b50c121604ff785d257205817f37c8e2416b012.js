shortcut = {
        all_shortcuts: {},
        add: function (u, l, p) {
            var t = {
                type: "keydown",
                propagate: !1,
                disable_in_input: !1,
                target: document,
                keycode: !1
            };
            if (p)
                for (var e in t) "undefined" == typeof p[e] && (p[e] = t[e]);
            else p = t;
            var n = p.target;
            "string" == typeof p.target && (n = document.getElementById(p.target));
            u = u.toLowerCase();
            var r = function (t) {
                var e;
                if ((t = t || window.event, p.disable_in_input) && (t.target ? e = t.target : t.srcElement && (e = t.srcElement), 3 == e.nodeType && (e = e.parentNode), "INPUT" == e.tagName || "TEXTAREA" == e.tagName)) return;
                t.keyCode ? code = t.keyCode : t.which && (code = t.which);
                var n = String.fromCharCode(code).toLowerCase();
                188 == code && (n = ","), 190 == code && (n = ".");
                var r = u.split("+"),
                    o = 0,
                    i = {
                        "`": "~",
                        1: "!",
                        2: "@",
                        3: "#",
                        4: "$",
                        5: "%",
                        6: "^",
                        7: "&",
                        8: "*",
                        9: "(",
                        0: ")",
                        "-": "_",
                        "=": "+",
                        ";": ":",
                        "'": '"',
                        ",": "<",
                        ".": ">",
                        "/": "?",
                        "\\": "|"
                    },
                    a = {
                        esc: 27,
                        escape: 27,
                        tab: 9,
                        space: 32,
                        "return": 13,
                        enter: 13,
                        backspace: 8,
                        scrolllock: 145,
                        scroll_lock: 145,
                        scroll: 145,
                        capslock: 20,
                        caps_lock: 20,
                        caps: 20,
                        numlock: 144,
                        num_lock: 144,
                        num: 144,
                        pause: 19,
                        "break": 19,
                        insert: 45,
                        home: 36,
                        "delete": 46,
                        end: 35,
                        pageup: 33,
                        page_up: 33,
                        pu: 33,
                        pagedown: 34,
                        page_down: 34,
                        pd: 34,
                        left: 37,
                        up: 38,
                        right: 39,
                        down: 40,
                        f1: 112,
                        f2: 113,
                        f3: 114,
                        f4: 115,
                        f5: 116,
                        f6: 117,
                        f7: 118,
                        f8: 119,
                        f9: 120,
                        f10: 121,
                        f11: 122,
                        f12: 123
                    },
                    s = {
                        shift: {
                            wanted: !1,
                            pressed: !1
                        },
                        ctrl: {
                            wanted: !1,
                            pressed: !1
                        },
                        alt: {
                            wanted: !1,
                            pressed: !1
                        },
                        meta: {
                            wanted: !1,
                            pressed: !1
                        }
                    };
                t.ctrlKey && (s.ctrl.pressed = !0), t.shiftKey && (s.shift.pressed = !0), t.altKey && (s.alt.pressed = !0), t.metaKey && (s.meta.pressed = !0);
                for (var c = 0; k = r[c], c < r.length; c++) "ctrl" == k || "control" == k ? (o++, s.ctrl.wanted = !0) : "shift" == k ? (o++, s.shift.wanted = !0) : "alt" == k ? (o++, s.alt.wanted = !0) : "meta" == k ? (o++, s.meta.wanted = !0) : 1 < k.length ? a[k] == code && o++ : p.keycode ? p.keycode == code && o++ : n == k ? o++ : i[n] && t.shiftKey && (n = i[n]) == k && o++;
                if (o == r.length && s.ctrl.pressed == s.ctrl.wanted && s.shift.pressed == s.shift.wanted && s.alt.pressed == s.alt.wanted && s.meta.pressed == s.meta.wanted && (l(t), !p.propagate)) return t.cancelBubble = !0, t.returnValue = !1, t.stopPropagation && (t.stopPropagation(), t.preventDefault()), !1
            };
            this.all_shortcuts[u] = {
                callback: r,
                target: n,
                event: p.type
            }, n.addEventListener ? n.addEventListener(p.type, r, !1) : n.attachEvent ? n.attachEvent("on" + p.type, r) : n["on" + p.type] = r
        },
        remove: function (t) {
            t = t.toLowerCase();
            var e = this.all_shortcuts[t];
            if (delete this.all_shortcuts[t], e) {
                var n = e.event,
                    r = e.target,
                    o = e.callback;
                r.detachEvent ? r.detachEvent("on" + n, o) : r.removeEventListener ? r.removeEventListener(n, o, !1) : r["on" + n] = !1
            }
        }
    }, window.matchMedia = window.matchMedia || function (t) {
        "use strict";
        var e, n = t.documentElement,
            r = n.firstElementChild || n.firstChild,
            o = t.createElement("body"),
            i = t.createElement("div");
        return i.id = "mq-test-1", i.style.cssText = "position:absolute;top:-100em", o.style.background = "none", o.appendChild(i),
            function (t) {
                return i.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', n.insertBefore(o, r), e = 42 === i.offsetWidth, n.removeChild(o), {
                    matches: e,
                    media: t
                }
            }
    }(document),
    function (l) {
        "use strict";
        l.picturefill = function () {
            for (var t = l.document.getElementsByTagName("span"), e = 0, n = t.length; e < n; e++)
                if (null !== t[e].getAttribute("data-picture")) {
                    for (var r = t[e].getElementsByTagName("span"), o = [], i = 0, a = r.length; i < a; i++) {
                        var s = r[i].getAttribute("data-media");
                        (!s || l.matchMedia && l.matchMedia(s).matches) && o.push(r[i])
                    }
                    var c = t[e].getElementsByTagName("img")[0];
                    if (o.length) {
                        var u = o.pop();
                        c || ((c = l.document.createElement("img")).alt = t[e].getAttribute("data-alt")), c.src = u.getAttribute("data-src"), u.appendChild(c)
                    } else c && c.parentNode.removeChild(c)
                }
        }, l.addEventListener ? (l.addEventListener("resize", l.picturefill, !1), l.addEventListener("DOMContentLoaded", function () {
            l.picturefill(), l.removeEventListener("load", l.picturefill, !1)
        }, !1), l.addEventListener("load", l.picturefill, !1)) : l.attachEvent && l.attachEvent("onload", l.picturefill)
    }(this),
    function () {
        this.Measurements = {
            LANDSCAPE: 0,
            PORTRAIT: 1,
            width: function () {
                return window.innerWidth
            },
            height: function () {
                return window.innerHeight
            },
            getOrientation: function () {
                return this.width() > this.height() ? this.LANDSCAPE : this.PORTRAIT
            },
            isLandscape: function () {
                return this.getOrientation() === this.LANDSCAPE
            },
            isPortrait: function () {
                return this.getOrientation() === this.PORTRAIT
            },
            scrollTop: function () {
                return $(window).scrollTop()
            }
        }
    }.call(this),
    function () {
        window.AppConfig = {
            // api: {
            //     internship_applications: "https://jobs.lunarlogic.io/api/internship_applications",
            //     job_applications: "https://jobs.lunarlogic.io/api/job_applications"
            // }
        }
    }.call(this),
    function () {
        $(document).ready(function () {
            $(".testimonials-slider").slick({
                infinite: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0
            })
        })
    }.call(this),
    function () {
        this.ContactForm = {
            bootstrap: function () {
                return this.handleResponse(), this.initFlyingLabelInputs(), this.bindFlyingLabelInputsChange()
            },
            initFlyingLabelInputs: function () {
                var t, n;
                return t = $(".flying-label-input"), $.each(t, (n = this, function (t, e) {
                    return n.toggleFilledInputClass(e)
                }))
            },
            bindFlyingLabelInputsChange: function () {
                var t, e;
                return e = this, t = function (t) {
                    return e.toggleFilledInputClass(t.target)
                }, $(".flying-label-input").change(t)
            },
            toggleFilledInputClass: function (t) {
                var e;
                return e = $(t), this.hasValue(e) ? e.addClass("filled-input") : e.removeClass("filled-input")
            },
            hasValue: function (t) {
                return 0 < $.trim(t.val()).length
            },
            handleResponse: function () {
                return $("#new_contact_form").on("ajax:success", (n = this, function (t, e) {
                    return n.hideErrors(), 406 === e.status ? n.showErrors(e.errors) : (n.showSuccessInfo(), n.clearForm(), n.initFlyingLabelInputs())
                }));
                var n
            },
            hideErrors: function () {
                return $("#new_contact_form").find("span.error").remove()
            },
            showErrors: function (t) {
                var e, n, r;
                for (e in r = [], t) n = $("[name*='contact_form[" + e + "]']"), r.push($("<span class='error'>" + t[e][0] + "</span>").insertAfter(n));
                return r
            },
            showSuccessInfo: function () {
                return $(".js-contact-wrapper .success").fadeIn(), setTimeout(this.hideSuccessInfo, 5e3)
            },
            hideSuccessInfo: function () {
                return $(".js-contact-wrapper .success").fadeOut()
            },
            clearForm: function () {
                return $("#new_contact_form").find("input[type=text], input[type=email], textarea").val("")
            }
        }, $(document).ready(function () {
            return ContactForm.bootstrap()
        })
    }.call(this),
    function () {
        this.FadingHeader = {
            menu: function () {
                return $("#menu")
            },
            menuButton: function () {
                return $(".menu-button")
            },
            header: function () {
                return $(".main-header")
            },
            bootstrap: function () {
                return FadingHeader.menuButton().click(function (t) {
                    return t.preventDefault(), FadingHeader.menuButton().toggleClass("active"), FadingHeader.menu().toggleClass("active"), FadingHeader.header().toggleClass("active")
                }), FadingHeader.menu(".contact-link").click(function () {
                    return FadingHeader.menuButton().removeClass("active"), FadingHeader.menu().removeClass("active")
                })
            }
        }, $(document).ready(function () {
            return FadingHeader.bootstrap()
        })
    }.call(this),
    function () {
        var t, e = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        };
        t = function () {
            function t() {
                this.submit = e(this.submit, this)
            }
            return t.prototype.bootstrap = function () {
                return $("#job_form").submit(this.submit)
            }, t.prototype.submit = function () {
                var t, e, n, r;
                return t = document.getElementById("job_form"), e = $(".x-submit").val(), $(".x-submit").val("Sending form. Please wait...").prop("disabled", !0), $.ajax({
                    url: window.AppConfig.api.job_applications,
                    type: "POST",
                    data: new FormData(t),
                    success: (r = this, function () {
                        return r.handleSuccess()
                    }),
                    error: (n = this, function (t) {
                        return n.handleError(t)
                    }),
                    complete: function () {
                        return $(".x-submit").val(e).prop("disabled", !1)
                    },
                    cache: !1,
                    processData: !1,
                    contentType: !1
                }), !1
            }, t.prototype.handleSuccess = function () {
                return this.removeErrors(), this.removeForm(), this.displaySuccessMessage(), this.scrollToTop()
            }, t.prototype.handleError = function (t) {
                return this.removeErrors(), this.displayErrors(t), this.scrollToTop()
            }, t.prototype.displaySuccessMessage = function () {
                return $("#new_job_application .success").fadeIn()
            }, t.prototype.scrollToTop = function () {
                return $("html, body").animate({
                    scrollTop: $("#new_job_application").offset().top
                }, "slow")
            }, t.prototype.removeForm = function () {
                return $("#new_job_application").find("input[type=text], input[type=email], input[type=file], textarea").val(""), $("#new_job_application").find("input[type=checkbox]").prop("checked", !1), $("#job_form").remove(), $(".job-form-header").remove()
            }, t.prototype.removeErrors = function () {
                return $(".error-info").hide(), $("#new_job_application").find("span.error").remove()
            }, t.prototype.displayErrors = function (t) {
                var e, n, r, o;
                try {
                    n = jQuery.parseJSON(t.responseText)
                } catch (i) {}
                if (n && 0 !== n.length) {
                    for (e in o = [], n) r = $("[name*='job_form[" + e + "]']"), o.push($("<span class='error'>" + n[e][0] + "</span>").insertAfter(r[0]));
                    return o
                }
                $(".error-info").fadeIn()
            }, t
        }(), $(document).ready(function () {
            return (new t).bootstrap()
        })
    }.call(this),
    function () {
        var t, e = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        };
        t = function () {
            function t() {
                this.submit = e(this.submit, this)
            }
            return t.prototype.bootstrap = function () {
                return $("#internship").submit(this.submit)
            }, t.prototype.submit = function () {
                var t, e, n, r;
                return t = document.getElementById("internship"), e = $(".x-submit").val(), $(".x-submit").val("Sending form. Please wait...").prop("disabled", !0), $.ajax({
                    url: window.AppConfig.api.internship_applications,
                    type: "POST",
                    data: new FormData(t),
                    success: (r = this, function () {
                        return r.handleSuccess()
                    }),
                    error: (n = this, function (t) {
                        return n.handleError(t)
                    }),
                    complete: function () {
                        return $(".x-submit").val(e).prop("disabled", !1)
                    },
                    cache: !1,
                    processData: !1,
                    contentType: !1
                }), !1
            }, t.prototype.handleSuccess = function () {
                return this.removeErrors(), this.removeForm(), this.displaySuccessMessage(), this.scrollToTop()
            }, t.prototype.handleError = function (t) {
                return this.removeErrors(), this.displayErrors(t), this.scrollToTop()
            }, t.prototype.displaySuccessMessage = function () {
                return $("#new_job_application .success").fadeIn()
            }, t.prototype.scrollToTop = function () {
                return $("html, body").animate({
                    scrollTop: $("#new_job_application").offset().top
                }, "slow")
            }, t.prototype.removeForm = function () {
                return $("#new_job_application").find("input[type=text], input[type=email], input[type=file], textarea").val(""), $("#internship").remove()
            }, t.prototype.removeErrors = function () {
                return $("#new_job_application").find("span.error").remove()
            }, t.prototype.displayErrors = function (t) {
                var e, n, r, o;
                for (e in o = [], n = jQuery.parseJSON(t.responseText)) r = $("[name*='internship_application[" + e + "]']"), o.push($("<span class='error'>" + n[e][0] + "</span>").insertAfter(r));
                return o
            }, t
        }(), $(document).ready(function () {
            return (new t).bootstrap()
        })
    }.call(this);