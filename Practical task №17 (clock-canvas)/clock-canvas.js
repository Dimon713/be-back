let clock = document.getElementById("clock");
let ctx = clock.getContext("2d");
let width = 500; //ширина полотна
let height = 500; //высота полотна
clock.width = width;
clock.height = height;
let centerClockX = clock.width / 2; //центр X
let centerClockY = clock.height / 2; //центр Y

let radiusClock = width / 2; //радиус большого круга
let axialRadiusDigits = width / 2.5; //межцентровой радиус малых кругов
let radiusDigits = width / 15; //радиус малого круга
let textSize = width / 15;

let hoursLength = width / 3; //длина часовой стрелки
let minutesLength = width / 2.2; //длина минутной стрелки
let secondsLength = width / 2.2; //длина секундной стрелки
let hoursLineWidth = width / 50; //толщина часовой стрелки
let minutesLineWidth = width / 125; //толщина минутной стрелки
let secondsLineWidth = width / 250; //толщина секундной стрелки

let colorBlack = "black";
let colorRed = "red";
let colorGreen = "green";
let colorYellow = "yellow";

function drawCircle(centerClockX, centerClockY, radiusClock, colorCircleBorder, colorCircle) {
    ctx.beginPath();
    ctx.strokeStyle = colorCircleBorder;
    ctx.fillStyle = colorCircle;
    ctx.arc(centerClockX, centerClockY, radiusClock, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.closePath()
}

function drawText(x, y, text, textColor, textSize) {
    ctx.beginPath();
    ctx.fillStyle = textColor;
    ctx.textBaseline = "middle";
    ctx.font = `${textSize}px Arial`;
    ctx.textAlign = "center";
    ctx.fillText(text, x, y);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

function drawLine(centerClockX, centerClockY, lineWidth, colorLine, Length, angleHours) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = colorLine;
    ctx.lineCap = "round";
    ctx.moveTo(centerClockX, centerClockY);
    ctx.lineTo(centerClockX + Length * Math.cos(Math.PI / 2 - angleHours * (Math.PI / 180)),
        centerClockY - Length * Math.sin(Math.PI / 2 - angleHours * (Math.PI / 180)));
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

function drawDigitalClock(centerClockX, centerClockY, colorText, textSize) {
    let currenTime = new Date();
    ctx.beginPath();
    ctx.fillStyle = colorText;
    ctx.fillText(currenTime.toLocaleTimeString(), centerClockX, centerClockY / 2);
    ctx.font = `${textSize}px Arial`;
    ctx.closePath();
}

function drawClock() {
    let currenTime = new Date();
    let hours = currenTime.getHours();
    let minutes = currenTime.getMinutes();
    let seconds = currenTime.getSeconds();

    let angleMinutes = minutes * 6;
    let angleSeconds = seconds * 6;
    let angleHours = (hours % 12) * 30 + minutes * 0

    ctx.clearRect(0, 0, width, height);

    drawCircle(centerClockX, centerClockY, radiusClock, colorYellow, colorYellow);

    for (let i = 30; i <= 360; i += 30) {
        let angleClockFace = i / 180 * Math.PI;
        let clockFaceX = centerClockX + axialRadiusDigits * Math.sin(angleClockFace);
        let clockFaceY = centerClockY - axialRadiusDigits * Math.cos(angleClockFace);
        let text = i / 30;

        drawCircle(clockFaceX, clockFaceY, radiusDigits, colorGreen, colorGreen);
        drawText(clockFaceX, clockFaceY, text, colorBlack, textSize);

    }
    drawLine(centerClockX, centerClockY, hoursLineWidth, colorBlack, hoursLength, angleHours);
    drawLine(centerClockX, centerClockY, minutesLineWidth, colorBlack, minutesLength, angleMinutes);
    drawLine(centerClockX, centerClockY, secondsLineWidth, colorRed, secondsLength, angleSeconds);

    drawDigitalClock(centerClockX, centerClockY, colorBlack, textSize)
}

setInterval(drawClock, 1000);