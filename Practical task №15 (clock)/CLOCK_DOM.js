function createClock() {
    document.body.style.margin = "0";
    let clock = document.getElementById("clock");
    clock.style.width = "500px";
    clock.style.height = "500px";
    clock.style.position = "relative";
    let widthClock = parseInt(clock.style.width);
    let heightClock = parseInt(clock.style.height);

    let circle = document.createElement("div");
    clock.append(circle);
    circle.style.width = `${widthClock}px`;
    circle.style.height = `${heightClock}px`;
    circle.style.borderRadius = `${widthClock > heightClock ? heightClock / 2 : widthClock / 2}px`;
    circle.style.backgroundColor = "yellow";
    circle.style.position = "absolute";

    let BoundingClientRect = circle.getBoundingClientRect();
    let centerClockX = BoundingClientRect.left + BoundingClientRect.width / 2;
    let centerClockY = BoundingClientRect.top + BoundingClientRect.height / 2;

    for (let i = 30; i <= 360; i += 30) {
        let clockFace = document.createElement("div");
        circle.append(clockFace);
        let axialRadiusDigits = widthClock * 0.4;
        clockFace.style.width = `${widthClock / 10}px`;
        clockFace.style.height = `${heightClock / 10}px`;
        let radiusDigits = widthClock / 20;
        clockFace.style.borderRadius = `${radiusDigits}px`;
        clockFace.style.backgroundColor = "green";
        clockFace.style.position = "absolute";

        let angleClockFace = 300 - i / 180 * Math.PI;
        let clockFaceX = centerClockX + axialRadiusDigits * Math.sin(angleClockFace) - radiusDigits;
        let clockFaceY = centerClockY - axialRadiusDigits * Math.cos(angleClockFace) - radiusDigits;
        clockFace.style.top = `${clockFaceX}px`;
        clockFace.style.left = `${clockFaceY}px`;
        clockFace.innerHTML = i / 30;
        clockFace.style.fontSize = "30px";
        clockFace.style.textAlign = "center";
    }

    let hoursHand = document.createElement("div");
    hoursHand.setAttribute("id", "hoursHand");
    circle.append(hoursHand);
    hoursHand.style.width = `${widthClock/30}px`;
    hoursHand.style.height = `${1.1*heightClock/4}px`;
    hoursHand.style.borderRadius = `${widthClock/30}px`;
    hoursHand.style.backgroundColor = "black";
    hoursHand.style.position = "absolute";
    hoursHand.style.transformOrigin = "center 90%";
    hoursHand.style.top = `${centerClockX-heightClock/4}px`;
    hoursHand.style.left = `${centerClockY - widthClock/60}px`;

    let minuteHand = document.createElement("div");
    minuteHand.setAttribute("id", "minuteHand");
    circle.append(minuteHand);
    minuteHand.style.width = `${widthClock/50}px`;
    minuteHand.style.height = `${1.1*heightClock/3}px`;
    minuteHand.style.borderRadius = `${widthClock/50}px`;
    minuteHand.style.backgroundColor = "black";
    minuteHand.style.position = "absolute";
    minuteHand.style.transformOrigin = "center 90%";
    minuteHand.style.top = `${centerClockX-heightClock/3}px`;
    minuteHand.style.left = `${centerClockY - widthClock/100}px`;

    let secondHand = document.createElement("div");
    secondHand.setAttribute("id", "secondHand");
    circle.append(secondHand);
    secondHand.style.width = `${widthClock/125}px`;
    secondHand.style.height = `${1.1*heightClock/2.5}px`;
    secondHand.style.borderRadius = `${widthClock/125}px`;
    secondHand.style.backgroundColor = "red";
    secondHand.style.position = "absolute";
    secondHand.style.transformOrigin = "center 90%";
    secondHand.style.top = `${centerClockX-heightClock/2.5}px`;
    secondHand.style.left = `${centerClockY - widthClock/250}px`;
}

function moveHands() {
    let currenTime = new Date();
    let hours = currenTime.getHours();
    let minutes = currenTime.getMinutes();
    let seconds = currenTime.getSeconds();

    let angleHours = (hours % 12) * 30 + minutes * 0.5;
    let angleMinutes = minutes * 6;
    let angleSeconds = seconds * 6;

    document.getElementById('hoursHand').style.transform = `rotate(${angleHours}deg)`;
    document.getElementById('minuteHand').style.transform = `rotate(${angleMinutes}deg)`;
    document.getElementById('secondHand').style.transform = `rotate(${angleSeconds}deg)`;
}
createClock();
moveHands();
setInterval('moveHands()', 1000);