var timerPad = null;
var padValues = '';
var padMatch = false;
var sounds = {
    drop: new Audio('assets/snd/drop.mp3'),
    key: new Audio('assets/snd/key.mp3')
};

function onClickPad(arrow) {
    let rotation = '0';
    sounds.key.fastSeek(0);
    sounds.key.play();
    switch (arrow) {
        case 'top': break;
        case 'right':
            rotation = '90';
            break;
        case 'bottom':
            rotation = '180';
            break;
        case 'left':
            rotation = '270';
    }

    if (padMatch) {
        clearPadResult();
    }

    let arrowContainer = document.getElementById('pad-result-container');
    let imgEl = document.createElement('img');
    imgEl.setAttribute('src', 'assets/img/arrow_yellow.png');
    imgEl.style.transform = 'rotate(' + rotation + 'deg)';
    arrowContainer.appendChild(imgEl);

    padValues = padValues + arrow + ',';

    clearTimeout(timerPad);

    padMatch = checkPadValues(padValues);

    if (!padMatch) {
        timerPad = setTimeout(clearPadResult, 1500);
    }
}

function clearPadResult() {
    padValues = '';
    let arrowContainer = document.getElementById('pad-result-container');
    while (arrowContainer.hasChildNodes()) {
        arrowContainer.removeChild(arrowContainer.firstChild);
    }
}

function checkPadValues(values) {
    if (values == 'top,right,bottom,bottom,bottom,') {

    } else {
        return false;
    }
    return true;
}

function pauseAll() {
    Object.keys(sounds).forEach(key => sounds[key].pause());
}

function loadAll() {
    Object.keys(sounds).forEach(key => sounds[key].load());
}

function launchSoundDrop() {
    pauseAll();
    sounds.drop.play()
}

//loadAll();