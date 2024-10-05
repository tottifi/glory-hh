var timerPad = null;
var padValues = '';
var padMatch = false;
var sound = new Audio();
var audio = new Audio();

function onClickPad(arrow) {
    let rotation = '0';
    switch(arrow) {
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
    if (values.includes('top,right,bottom,bottom,bottom')) {

    } else {
        return false;
    }
    return true;
}

function launchSoundDrop() {
    audio.pause();
    audio.src = 'assets/snd/drop.mp3';
    audio.load();
    audio.play();
}