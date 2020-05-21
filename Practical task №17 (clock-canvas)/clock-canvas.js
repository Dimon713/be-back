let clock = document.getElementById('clock');
clock.width = 500;
clock.height = 500;
let ctx = clock.getContext('2d');
const centerClockX = clock.width / 2;
const centerClockY = clock.height / 2;
const width = clock.width;
const height = clock.height;
const pi = Math.PI;

let angleHours;
let angleMinutes;
let angleSeconds;

let hoursLength;
let minutesLength;
let secondsLength;

function drawCircle() {
    ctx.beginPath();
    let radiusClock = width / 2;
    ctx.lineWidth = width / 250;
    ctx.strokeStyle = 'yellow';
    ctx.fillStyle = 'yellow';
    ctx.arc(centerClockX, centerClockY, radiusClock, 0, 2 * pi);
    ctx.stroke();
    ctx.fill();
    ctx.closePath()
}

function drawClockFace() {
    for (let i = 30; i <= 360; i += 30) {
        let angleClockFace = i / 180 * Math.PI;
        const axialRadiusDigits = width / 2.5;
        let radiusDigits = width / 15;
        let clockFaceX = centerClockX + axialRadiusDigits * Math.sin(angleClockFace);
        let clockFaceY = centerClockY - axialRadiusDigits * Math.cos(angleClockFace);
        let textSize = `${width/15}px`;

        ctx.beginPath();
        ctx.strokeStyle = 'green';
        ctx.fillStyle = 'green';
        ctx.lineWidth = 2;
        ctx.arc(clockFaceX, clockFaceY, radiusDigits, 0, 2 * pi);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();

        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.lineWidth = 2;
        ctx.textBaseline = 'middle';
        ctx.font = `${textSize} Arial`;
        ctx.textAlign = "center";
        ctx.fillText(i / 30, clockFaceX, clockFaceY);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
}

function drawHoursLength() {
    ctx.beginPath();
    ctx.lineWidth = width / 50;
    ctx.strokeStyle = 'black';
    ctx.lineCap = 'round';
    ctx.moveTo(centerClockX, centerClockY);
    ctx.lineTo(centerClockX + hoursLength * Math.cos(pi / 2 - angleHours * (pi / 180)),
        centerClockY - hoursLength * Math.sin(pi / 2 - angleHours * (pi / 180)));
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

function drawMinutesLength() {
    ctx.beginPath();
    ctx.lineWidth = width / 125;
    ctx.strokeStyle = 'black';
    ctx.lineCap = 'round';
    ctx.moveTo(centerClockX, centerClockY);
    ctx.lineTo(centerClockX + minutesLength * Math.cos(pi / 2 - angleMinutes * (pi / 180)),
        centerClockY - minutesLength * Math.sin(pi / 2 - angleMinutes * (pi / 180)));
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

function drawSecondsLength() {
    ctx.beginPath();
    ctx.lineWidth = width / 250;
    ctx.strokeStyle = 'red';
    ctx.lineCap = 'round';
    ctx.moveTo(centerClockX, centerClockY);
    ctx.lineTo(centerClockX + secondsLength * Math.cos(pi / 2 - angleSeconds * (pi / 180)),
        centerClockY - secondsLength * Math.sin(pi / 2 - angleSeconds * (pi / 180)));
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

function drawDigitalClock() {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillText(currenTime.toLocaleTimeString(), centerClockX, centerClockY * 0.6);
    ctx.font = `${width/15}px Arial`;
    ctx.closePath();
}

function drawClock() {
    let currenTime = new Date();
    let hours = currenTime.getHours();
    let minutes = currenTime.getMinutes();
    let seconds = currenTime.getSeconds();

    angleMinutes = minutes * 6;
    angleSeconds = seconds * 6;
    angleHours = (hours % 12) * 30 + minutes * 0
    hoursLength = width / 3;
    minutesLength = width / 2.2;
    secondsLength = width / 2.2;

    ctx.clearRect(0, 0, width, height);

    drawCircle();
    drawClockFace();
    drawHoursLength();
    drawMinutesLength();
    drawSecondsLength();
    drawDigitalClock();
}

setInterval(drawClock, 1000);