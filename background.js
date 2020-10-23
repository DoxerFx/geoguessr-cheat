console.log("🕗 Loading Cheat Extension");

$(document).ready(() => {
    let script = document.createElement('script');
    script.src = "https://raw.githubusercontent.com/DoxerFx/geoguessr-cheat/master/func.js";
    script.type = "application/js";

    document.body.appendChild(script);
    
    $('.game-statuses').append(
        '<div class="game-status" data-qa="round-number">' +
        '<div class="game-status__heading">Start Cheat</div>' +
        '<div class="game-status__body">' +
        '<button onclick="x();" style="cursor:pointer;text-decoration:none;outline:none;transition:.3s;border: none;background: white;color: black;font-weight: 900;" id="btnCheatEvent">Start</button>' +
        '</div></div>');
    console.log("✅ Successfully loaded!");
});