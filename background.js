console.log("🕗 Loading Cheat Extension");
console.log("🛑 Blocking GeoGuessr Anti-Cheat");

(async () => {
    // Injection du JavaScript dans la page Web
    runTimeId = `GeoGuessr-${Math.floor(Math.random()*10*1000)}`;
    let s = document.createElement('script');
    s.id = runTimeId;
    s.src = chrome.extension.getURL('script.js');
    (document.head || document.documentElement).appendChild(s);

    let scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].id == runTimeId) {
            console.log(scripts[i]);
        }
    }

    // Ajout UI
    $('.game-statuses').append('' +
    '<div class="game-status" data-qa="round-number">' +
    '<div class="game-status__heading">Start Cheat</div>' +
    '<div class="game-status__body">' +
    '<button onclick="x();" style="cursor:pointer;text-decoration:none;outline:none;transition:.3s;border: none;background: white;color: black;font-weight: 900;" id="btnCheatEvent">Start</button>' +
    '</div></div>');

    console.log("✅ Successfully loaded!");
})()