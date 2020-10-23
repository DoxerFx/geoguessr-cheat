console.log("🕗 Loading Cheat Extension");

$(document).ready(() => {
    setTimeout(() => {
        $('body').prepend('<script src=""></script>')
        // $('body').prepend('<script>let x=async function(){var e;await(e=function(e){let t=[],n=performance.getEntriesByType("resource");for(let e=0;e<n.length;e++)"xmlhttprequest"!=n[e].initiatorType&&"script"!=n[e].initiatorType||t.push(n[e].name);return t}().filter(e=>e.includes("GeoPhoto"))[0],new Promise(function(t,n){e=e.slice(0,e.indexOf("callback")-1);let o="_"+Math.round(1e4*Math.random()),l="jsonp_callback_"+o,c=e+"&callback="+l;window[l]=function(e){delete window[l];let n=document.getElementById(o);n.parentNode.removeChild(n),console.log(e),t(e)};let a=document.createElement("script");a.src=c,a.id=o,a.addEventListener("error",n),console.log(a),(document.getElementsByTagName("head")[0]||document.body||document.documentElement).appendChild(a)})).then(e=>{let t=e[1][5][0][1][0].slice(2,4);console.log(t),console.log(`https://www.google.com/maps/search/${t[0]},+${t[1]}`)})};</script>')
        $('.game-statuses').append('' +
            '<div class="game-status" data-qa="round-number">' +
            '<div class="game-status__heading">Start Cheat</div>' +
            '<div class="game-status__body">' +
            '<button onclick="x();" style="cursor:pointer;text-decoration:none;outline:none;transition:.3s;border: none;background: white;color: black;font-weight: 900;" id="btnCheatEvent">Start</button>' +
            '</div></div>' +
            '');
        console.log("✅ Successfully loaded!");
    }, 2 * 1000)
});

// let x = async function () {
//     function captureNetworkRequest(e) {
//         let capture_newtwork_request = [];
//         let capture_resource = performance.getEntriesByType(`resource`);
//         for (let i = 0; i < capture_resource.length; i++) {
//             if (capture_resource[i].initiatorType == `xmlhttprequest` || capture_resource[i].initiatorType == `script`) {
//                 if (!0) {
//                     capture_newtwork_request.push(capture_resource[i].name);
//                 }
//             }
//         };
//         return capture_newtwork_request;
//     };

//     function jsonp(uri) {
//         return new Promise(function (resolve, reject) {
//             uri = uri.slice(0, (uri.indexOf("callback") - 1));
//             let id = `_` + Math.round(10000 * Math.random());
//             let callbackName = `jsonp_callback_` + id;
//             let src = uri + `&callback=` + callbackName;
//             window[callbackName] = function (data) {
//                 delete window[callbackName];
//                 let ele = document.getElementById(id);
//                 ele.parentNode.removeChild(ele);
//                 console.log(data);
//                 resolve(data)
//             };
//             let script = document.createElement(`script`);
//             script.src = src;
//             script.id = id;
//             script.addEventListener(`error`, reject);
//             console.log(script);
//             (document.getElementsByTagName(`head`)[0] || document.body || document.documentElement).appendChild(script)
//         })
//     };

//     await jsonp(captureNetworkRequest().filter(url => {
//         return url.includes(`GeoPhoto`)
//     })[0]).then(data => {
//         let coords = data[1][5][0][1][0].slice(2, 4);
//         console.log(coords)
//         console.log(`https://www.google.com/maps/search/${coords[0]},+${coords[1]}`)
//     })
// };
// $('#btnCheatEvent').click(() => {
//     console.log('🕐 Cheat activate!');
//     x();
// })
// setTimeout(() => {
//     x();
// }, 2 * 1000)