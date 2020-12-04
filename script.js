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

    function simulateClick(elem) {
        var evt = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        var canceled = !elem.dispatchEvent(evt);
    };

    function click(x,y){
        var ev = document.createEvent("MouseEvent");
        var el = document.elementFromPoint(x,y);
        ev.initMouseEvent(
            "click",
            true, 
            true,
            window, null,
            x, y, 0, 0,
            false, false, false, false,
            0, null
        );
        el.dispatchEvent(ev);
    }

    function getElementCoords(element){
        let topOffset = element.getBoundingClientRect().top;
        let leftOffset = element.getBoundingClientRect().left;
        return {topOffset, leftOffset};
    }

    function getWidthElement(element){
        let leftBorder = element.getBoundingClientRect().left;
        let rightBorder = element.getBoundingClientRect().right;
        return rightBorder-leftBorder;
    }

    function getHeightElement(element){
        let topBorder = element.getBoundingClientRect().top;
        let bottomBorder = element.getBoundingClientRect().bottom;
        return bottomBorder-topBorder;
    }

    function calculateClickZone(ElementCoords, WidthElement, HeightElement){
        let x = ElementCoords.leftOffset + (WidthElement/2);
        let y = ElementCoords.topOffset + (HeightElement/2);
        return {x, y}
    }

    await jsonp(captureNetworkRequest().filter(url => {
        return url.includes(`GeoPhoto`)
    })[0]).then(data => {
        let coords;
        if (data[1][5][0][1][0].slice(2, 4)) {
            console.log(data)
            console.log("🎮 GameMode Loaded: Search Coords");
            coords = data[1][5][0][1][0].slice(2, 4);
        } else {
            console.log("🎮 GameMode Loaded: Search Country");
            return console.warn("⚠️ Under development");
            coords = data[1][0][5][0][1][0].slice(2, 4);
        }
        if (!coords) return console.error("Error when i try to search the coords", "I suggest you to contact the founder of the extension");
        console.log(coords);
        let lat = coords[0];
        let lon = coords[1];

        let stickyControl = document.querySelector(".guess-map__control--sticky");
        simulateClick(stickyControl);
        let zoomControl = document.querySelector(".guess-map__control--increase-size");
        simulateClick(zoomControl);
        let guessMap = document.querySelector(".guess-map__canvas");
        setTimeout(()=>{
            let getCoords = calculateClickZone(getElementCoords(guessMap), getWidthElement(guessMap), getHeightElement(guessMap));
            click(getCoords.x, getCoords.y)
            window.LatLngFromExtension = {lat, lon}
            setTimeout(()=>{
                click(getCoords.x, getCoords.y)
            }, 1000)
        }, 1000)
    })
};


/* L'extension marche enfin !!
 *  TODO: 
 * - Faire un système de configuration comprenant:
 *      - Choisir la precision
 *      - Choisir le temps
 *      
 * - Optimisation
 * - Ajout d'automatisme pour rejouer automatiquement
*/