const clock = document.querySelector(".clock .clock-text");

function getTime() {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    if (hours <10) {
        hours='0'+hours;
    }
    if (mins <10){
        mins='0'+mins;
    }
    if (secs <10) {
        secs='0'+secs;
    }
    const time = `${hours}:${mins}:${secs}`;
    clock.innerHTML = time;
    return;
}
function showTime() {
    getTime();
    setInterval(showTime, 1000);
}
showTime();


