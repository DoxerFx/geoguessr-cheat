console.log("✅ Geoguessr Cheat Func.js loaded!")

let x = async function () {
    function captureNetworkRequest(e) {
        let capture_newtwork_request = [];
        let capture_resource = performance.getEntriesByType(`resource`);
        for (let i = 0; i < capture_resource.length; i++) {
            if (capture_resource[i].initiatorType == `xmlhttprequest` || capture_resource[i].initiatorType == `script`) {
                if (!0) {
                    capture_newtwork_request.push(capture_resource[i].name);
                }
            }
        };
        return capture_newtwork_request;
    };

    function jsonp(uri) {
        return new Promise(function (resolve, reject) {
            uri = uri.slice(0, (uri.indexOf("callback") - 1));
            let id = `_` + Math.round(10000 * Math.random());
            let callbackName = `jsonp_callback_` + id;
            let src = uri + `&callback=` + callbackName;
            window[callbackName] = function (data) {
                delete window[callbackName];
                let ele = document.getElementById(id);
                ele.parentNode.removeChild(ele);
                console.log(data);
                resolve(data)
            };
            let script = document.createElement(`script`);
            script.src = src;
            script.id = id;
            script.addEventListener(`error`, reject);
            console.log(script);
            (document.getElementsByTagName(`head`)[0] || document.body || document.documentElement).appendChild(script)
        })
    };

    await jsonp(captureNetworkRequest().filter(url => {
        return url.includes(`GeoPhoto`)
    })[0]).then(data => {
        let coords = data[1][5][0][1][0].slice(2, 4);
        console.log(coords)
        console.log(`https://www.google.com/maps/search/${coords[0]},+${coords[1]}`)
    })
};