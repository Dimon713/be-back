function createClock() {
    document.body.style.margin = 0;
    let clock = document.getElementById("clock");
    let widthClock = 500;
    let heightClock = 500;
    let borderRadius = widthClock > heightClock ? heightClock / 2 : widthClock / 2;
    let axialRadiusDigits = widthClock * 0.4;
    let clockFaceWidth = widthClock / 10;
    let clockFaceHeight = heightClock / 10;
    let radiusDigits = widthClock / 20;
    let fontSize = widthClock / 15;
    let hoursHandWidth = widthClock / 30;
    let hoursHandHalfWidth = widthClock / 60;
    let hoursHandHeight = 1.1 * heightClock / 4;
    let hoursRadius = heightClock / 4;
    let hoursHandBorderRadius = widthClock / 30;
    let minuteHandWidth = widthClock / 50;
    let minuteHandHeight = 1.1 * heightClock / 3;
    let minuteHandBorderRadius = widthClock / 50;
    let minuteRadius = heightClock / 3;
    let minuteHandHalfWidth = widthClock / 100;
    let secondHandWidth = widthClock / 125;
    let secondHandHeight = 1.1 * heightClock / 2.5;
    let secondHandBorderRadius = widthClock / 125;
    let secondRadius = heightClock / 2.5;
    let secondHandHalfWidth = widthClock / 250;

    clock.style.width = `${widthClock}px`;
    clock.style.height = `${heightClock}px`;
    clock.style.position = "relative";

    let circle = document.createElement("div");
    clock.append(circle);
    circle.style.width = `${widthClock}px`;
    circle.style.height = `${heightClock}px`;
    circle.style.borderRadius = `${borderRadius}px`;
    circle.style.backgroundColor = "yellow";
    circle.style.position = "absolute";

    let BoundingClientRect = circle.getBoundingClientRect();
    let centerClockX = BoundingClientRect.left + BoundingClientRect.width / 2;
    let centerClockY = BoundingClientRect.top + BoundingClientRect.height / 2;

    for (let i = 30; i <= 360; i += 30) {
        let clockFace = document.createElement("div");
        circle.append(clockFace);
        clockFace.style.width = `${clockFaceWidth}px`;
        clockFace.style.height = `${clockFaceHeight}px`;

        clockFace.style.borderRadius = `${radiusDigits}px`;
        clockFace.style.backgroundColor = "green";
        clockFace.style.position = "absolute";
        let angleClockFace = 300 - i / 180 * Math.PI;
        let clockFaceX = centerClockX + axialRadiusDigits * Math.sin(angleClockFace) - radiusDigits;
        let clockFaceY = centerClockY - axialRadiusDigits * Math.cos(angleClockFace) - radiusDigits;
        let div = document.createElement("div");
        clockFace.append(div);
        clockFace.style.top = `${clockFaceX}px`;
        clockFace.style.left = `${clockFaceY}px`;
        div.innerHTML = i / 30;
        div.style.width = "100%";
        div.style.position = "absolute";
        div.style.top = "50%";
        div.style.marginTop = "-0.625em";
        div.style.textAlign = "center";
        clockFace.style.fontSize = `${fontSize}px`;
        clockFace.style.textAlign = "center";
    }

    let hoursHand = document.createElement("div");
    hoursHand.id = "hoursHand";
    circle.append(hoursHand);
    hoursHand.style.width = `${hoursHandWidth}px `;
    hoursHand.style.height = `${hoursHandHeight}px `;
    hoursHand.style.borderRadius = `${hoursHandBorderRadius}px `;
    hoursHand.style.backgroundColor = "black";
    hoursHand.style.position = "absolute";
    hoursHand.style.transformOrigin = "center 90%";
    hoursHand.style.top = `${centerClockX - hoursRadius}px `;
    hoursHand.style.left = `${centerClockY - hoursHandHalfWidth}px `;

    let minuteHand = document.createElement("div");
    minuteHand.id = "minuteHand";
    circle.append(minuteHand);
    minuteHand.style.width = `${minuteHandWidth}px `;
    minuteHand.style.height = `${minuteHandHeight}px `;
    minuteHand.style.borderRadius = `${minuteHandBorderRadius}px `;
    minuteHand.style.backgroundColor = "black";
    minuteHand.style.position = "absolute";
    minuteHand.style.transformOrigin = "center 90%";
    minuteHand.style.top = `${centerClockX - minuteRadius}px `;
    minuteHand.style.left = `${centerClockY - minuteHandHalfWidth}px `;

    let secondHand = document.createElement("div");
    secondHand.id = "secondHand";
    circle.append(secondHand);
    secondHand.style.width = `${secondHandWidth}px `;
    secondHand.style.height = `${secondHandHeight}px `;
    secondHand.style.borderRadius = `${secondHandBorderRadius}px `;
    secondHand.style.backgroundColor = "red";
    secondHand.style.position = "absolute";
    secondHand.style.transformOrigin = "center 90%";
    secondHand.style.top = `${centerClockX - secondRadius}px `;
    secondHand.style.left = `${centerClockY - secondHandHalfWidth}px `;
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