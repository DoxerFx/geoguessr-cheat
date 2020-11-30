console.log("🕗 Loading Cheat Extension");

$(document).ready(() => {
    console.log("✅ Successfully loaded!");
    $('.game-statuses').append('' +
    '<div class="game-status" data-qa="round-number">' +
    '<div class="game-status__heading">Start Cheat</div>' +
    '<div class="game-status__body">' +
    '<button onclick="x();" style="cursor:pointer;text-decoration:none;outline:none;transition:.3s;border: none;background: white;color: black;font-weight: 900;" id="btnCheatEvent">Start</button>' +
    '</div></div>' +
    '');
});

// Injection du JavaScript dans la page Web
runTimeId = `GeoGuessr-${Math.floor(Math.random()*1000)}`;
var s = document.createElement('script');
s.id = runTimeId;
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);

let scripts = $('script');
for(var i=0;i<scripts.length;i++){
    if (scripts[i].id == runTimeId){
        console.log(scripts[i]);
    }
}