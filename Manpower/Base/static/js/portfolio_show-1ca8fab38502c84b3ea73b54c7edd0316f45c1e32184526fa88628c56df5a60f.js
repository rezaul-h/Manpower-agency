(function () {
    this.ImagePreloader = {
        images: {
            wide: ["{% static 'images/projects/main-screen-aircasting-mobile-56f478dff1a388dc5e7f465cd39f75d5d0afcfdc11556c2558f524c665242b72.jpg' %}",
             "{% static 'images/projects/main-screen-philips-9d32cd38b523e8401a42d6a74a2372076f5877782d286dccf45c744b13b245d9.jpg' %}",
             "{% static 'images/projects/main-screen-givedish-2b6257b653bb5ff3b36255741f1c3f8ce5251d409c07d80ab0f7c93031b859d7.jpg' %}", 
             "{% static 'images/projects/main-screen-ieep-bf03831dcb9f454dcf954493e58cd1be060efb0aad74570e8848d01d17e47883.jpg' %}", 
             "{% static 'images/projects/main-screen-aircasting-c0cf6bde5044543d48bf0ed37e2c235a4b9b844d344b829d83c0e8f41884e79b.jpg' %}",
              "{% static 'images/projects/main-screen-hypoguide-78ab2a9e236c6e3b2136e47d6130afbe3d6d07565ac505889b417f6733018214.jpg' %}",
               "{% static 'images/projects/main-screen-hypoauktion-0356638fa937a3da9add763adb6d6287277ddfac195f537e6f88b1d1d4f7c6da.jpg' %}",
                "{% static 'images/projects/main-screen-betdash-125f1fcf029d519892cb8866641245800ef128c54a59d7a4ea96f6d767e0e39b.jpg' %}", 
                "{% static 'images/projects/main-screen-skirmish-905bb6121d702bd4aae89b891c2f0d16cb1ba352593b70f834bc38497aa75741.jpg' %}", 
                "{% static 'images/projects/main-screen-funding-circle-a0b05d0486558429b753477a942281fbbc07c7c26f75f7b3447bea7e0f0595ec.jpg' %}",
                 "{% static 'images/projects/main-screen-toucanbox-3a6896f3f18566769ea7531eed30f8cf068e8bd71f60445a501d63f661e74ddc.jpg' %}", 
                 "{% static 'images/projects/main-screen-unep-5d81798e7f0e4c6ccceb981422943f796e0c0415c0b2c8a065f2f39cb385267a.jpg' %}", 
                 "{% static 'images/projects/main-screen-soundbetter-e315f8ab26b6b402a86b48393c203e287c58aaa148ca5525d16884033eab3ad0.jpg' %}"],
            mobile: ["{% static 'images/projects/mobile/main-screen-aircasting-mobile.jpg' %}", 
            "{% static 'images/projects/mobile/main-screen-philips-76510f424c0460687ed561c0d1da7f9c6c15e2e176978569b7cff3f05b62ca4e.jpg' %}",
             "{% static 'images/projects/mobile/main-screen-givedish-7d9013d462aecb5fd25ebaf8807979179d2fd0dbe5bef303fbc9c576cf4407d7.jpg' %}", 
             "{% static 'images/projects/mobile/main-screen-ieep-e0d3d12edc3b5a5ef94cf3a10d48df83114e999dc1da62a44678f66cc86d0bea.jpg' %}", 
             "{% static 'images/projects/mobile/main-screen-aircasting-b42ef0452dddad46be5417cc12ecbd9b342efe421d5b937e36a1456c54e025c3.jpg' %}",
              "{% static 'images/projects/mobile/main-screen-hypoguide-4ff32f50d087937f57ba35013c74bfbda82ea0e29be65a991aaae00a7e3f71ae.jpg' %}",
               "{% static 'images/projects/mobile/main-screen-hypoauktion-f4535a0b8a7a6e7c7d9c94c4229fa53dbcfdb95dec1f3a440646230ef4680093.jpg' %}",
                "{% static 'images/projects/mobile/main-screen-betdash-133bafac1a56be1a4e8725061f1aa1ff380f8994aef369f7545632ff7b4615db.jpg' %}",
                 "{% static 'images/projects/mobile/main-screen-skirmish-e74a492a0aacf5d9c29e5ae844c6873a8589d455162357970bee3487da7956af.jpg' %}",
                  "{% static 'images/projects/mobile/main-screen-funding-circle-3f899a8be974fb5df5eb0759a9b625c5a281f945be5c47137f79b55969a36478.jpg' %}", 
                  "{% static 'images/projects/mobile/main-screen-toucanbox-6ee52d2c27bb2a6d2489a9df8f9e9718500724f8c01b2c154b3f11f19c29c985.jpg' %}",
                   "{% static 'images/projects/mobile/main-screen-unep-952feb1e635b3e42cc44b8c297192476fdfa3094280e988ad5ea53437f1bca75.jpg' %}", 
                   "{% static 'images/projects/mobile/main-screen-soundbetter-e1639b0fdc78a89c9d887b1f9b7d1800930fe0386211847751fba4366e9d8da4.jpg' %}"]
        },
        load: function (e) {
            return (new Image).src = e
        },
        loadAll: function (e) {
            var a, s, c, d;
            for (c = [], a = 0, s = e.length; a < s; a++) d = e[a], c.push(this.load(d));
            return c
        },
        bootstrap: function () {
            return 768 <= Measurements.width() && Measurements.isLandscape() ? this.loadAll(this.images.wide) : this.loadAll(this.images.mobile)
        }
    }, $(document).ready(function () {
        return ImagePreloader.bootstrap()
    })
}).call(this),
    function () {}.call(this);