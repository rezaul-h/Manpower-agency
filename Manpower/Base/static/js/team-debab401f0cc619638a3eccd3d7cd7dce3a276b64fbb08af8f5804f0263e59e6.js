(function () {
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
}).call(this),
    function () {
        $(".team-slider-new").slick({
            slidesToShow: 3,
            variableWidth: !0,
            centerMode: !0,
            slidesToScroll: 1,
            focusOnSelect: !0,
            swipeToSlide: !0,
            arrows: !0,
            speed: 800,
            asNavFor: ".team-navigation"
        }), $(".team-navigation").slick({
            slidesToShow: 9,
            slidesToScroll: 0,
            infinite: !0,
            asNavFor: ".team-slider-new",
            dots: !1,
            arrows: !1,
            centerMode: !0,
            focusOnSelect: !0,
            variableWidth: !1,
            lazyLoad: "ondemand",
            responsive: [{
                breakpoint: 450,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7
                }
            }]
        }), $(".team-slider-new").on("beforeChange", function (i, e, t, n) {
            var s, o;
            o = e.$slides.length - 1, (0 === t || t === o) && (0 === n || n === o) && (s = $(i.currentTarget).find(".slick-cloned.slick-active"), setTimeout(function () {
                s.addClass("slick-current")
            }, 100))
        })
    }.call(this);