var timeClock = document.getElementById("clock");
var hexColor = document.getElementById("hexcolor");

function hexClock() {
    var time = new Date();
    var hours = (time.getHours() % 12).toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = "0" + hours;
    }

    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }

    if (seconds.length < 2) {
        seconds = "0" + seconds;
    }

    var timeString = hours + ":" + minutes + ":" + seconds;
    var colorString = "#" + hours + minutes + seconds;

    timeClock.textContent = timeString;
    hexColor.textContent = colorString;

    document.body.style.backgroundColor = colorString;

}

setInterval(hexClock, 1000);