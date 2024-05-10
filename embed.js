(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/pxt-microbit-app/",
    "verprefix": "",
    "workerjs": "/pxt-microbit-app/worker.js",
    "monacoworkerjs": "/pxt-microbit-app/monacoworker.js",
    "gifworkerjs": "/pxt-microbit-app/gifjs/gif.worker.js",
    "serviceworkerjs": "/pxt-microbit-app/serviceworker.js",
    "typeScriptWorkerJs": "/pxt-microbit-app/tsworker.js",
    "pxtVersion": "10.0.23",
    "pxtRelId": "localDirRelId",
    "pxtCdnUrl": "/pxt-microbit-app/",
    "commitCdnUrl": "/pxt-microbit-app/",
    "blobCdnUrl": "/pxt-microbit-app/",
    "cdnUrl": "/pxt-microbit-app/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "microbit",
    "simUrl": "/pxt-microbit-app/simulator.html",
    "simserviceworkerUrl": "/pxt-microbit-app/simulatorserviceworker.js",
    "simworkerconfigUrl": "/pxt-microbit-app/workerConfig.js",
    "partsUrl": "/pxt-microbit-app/siminstructions.html",
    "runUrl": "/pxt-microbit-app/run.html",
    "docsUrl": "/pxt-microbit-app/docs.html",
    "multiUrl": "/pxt-microbit-app/multi.html",
    "asseteditorUrl": "/pxt-microbit-app/asseteditor.html",
    "isStatic": true,
    "kioskUrl": "/pxt-microbit-app/kiosk.html",
    "teachertoolUrl": "/pxt-microbit-app/teachertool.html",
    "tutorialtoolUrl": "/pxt-microbit-app/tutorialtool.html",
    "skillmapUrl": "/pxt-microbit-app/skillmap.html",
    "multiplayerUrl": "/pxt-microbit-app/multiplayer.html",
    "authcodeUrl": "/pxt-microbit-app/authcode.html"
};

    var scripts = [
        "/pxt-microbit-app/highlight.js/highlight.pack.js",
        "/pxt-microbit-app/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/pxt-microbit-app/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/pxt-microbit-app/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/pxt-microbit-app/target.js");
    scripts.push("/pxt-microbit-app/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.setInitCallbacks(pxtCallbacks)
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
