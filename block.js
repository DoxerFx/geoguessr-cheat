chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        if (details.url == "https://www.geoguessr.com/_next/static/chunks/0dc1b7672fbaeb5852eeb66548bcf5fb2331ed73.f1b0700822c16a7cf20a.js")
            return {
                redirectUrl: chrome.extension.getURL("webpackEdited.js")
            };
    }, {
        urls: ["*://www.geoguessr.com/_next/static/chunks/*.js"]
    },
    ["blocking"]
);