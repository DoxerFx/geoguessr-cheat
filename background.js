console.log("🕗 Loading Cheat Extension");

$(document).ready(() => {
    setTimeout(() => {
        $('.game-statuses').append('' +
            '<div class="game-status" data-qa="round-number">' +
            '<div class="game-status__heading">Start Cheat</div>' +
            '<div class="game-status__body">' +
            '<button onclick="x();" style="cursor:pointer;text-decoration:none;outline:none;transition:.3s;border: none;background: white;color: black;font-weight: 900;" id="btnCheatEvent">Start</button>' +
            '</div></div>' +
            '');
        $('body').prepend('<script src="https://raw.githubusercontent.com/DoxerFx/geoguessr-cheat/master/func.js"></script>')

        console.log("✅ Successfully loaded!");
    }, 2 * 1000)
});