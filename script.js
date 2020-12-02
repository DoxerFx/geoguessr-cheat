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
                resolve(data);
            };
            let script = document.createElement(`script`);
            script.src = src;
            script.id = id;
            script.addEventListener(`error`, reject);
            (document.getElementsByTagName(`head`)[0] || document.body || document.documentElement).appendChild(script)
        })
    };

    function simulateClick (elem){
        var evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        var canceled = !elem.dispatchEvent(evt);
    };

    await jsonp(captureNetworkRequest().filter(url => {
        return url.includes(`GeoPhoto`)
    })[0]).then(data => {
        let coords;
        if (data[1][5][0][1][0].slice(2, 4)){
            console.log(data)
            console.log("🎮 GameMode Loaded: Search Coords");
            coords = data[1][5][0][1][0].slice(2, 4);
        }else{
            console.log("🎮 GameMode Loaded: Search Country");
            return console.warn("⚠️ Under development");
            // let coords = data[1][0][5][0][1][0].slice(2, 4);
        }
        if(!coords) return console.error("Error when i try to search the coords", "I suggest you to contact the founder of the extension");
        console.log(coords);
        let lat = coords[0];
        let lon = coords[1];
        
        let stickyControl = document.querySelector(".guess-map__control--sticky");
        simulateClick(stickyControl);
        let zoomControl = document.querySelector(".guess-map__control--increase-size");
        simulateClick(zoomControl);

        for(var b in window) { 
            if(window.hasOwnProperty(b) && b == "google"){
                var e = {
                    latLng: google.maps.LatLng(lat, lon)
                };

                /* Avancement:
                 * - On arrive à prendre la variable de google qui est stocké
                 * - On arrive à pouvoir la décomposer mais pas à accéder à la fonction "LatLng" qui nous permettrais de pouvoir mettre nos coordonnes
                */

                console.log(google.maps.LatLng(lat, lon));

                // Normalement le trigger marche.
                // google.maps.event.trigger(google.maps.Map(document.getElementsByClassName('guess-map__canvas')), 'click', e);
                return;
            } 
        }

    })
};