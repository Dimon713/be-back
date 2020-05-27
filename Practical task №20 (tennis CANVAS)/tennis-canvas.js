const width = 700;
const height = 600;
const canvasBackgroundLayerWidth = 700;
const canvasBackgroundLayerHeight = 400;
const canvasGameLayerWidth = 700;
const canvasGameLayerHeight = 400;
const widthBtn = 100;
const heightBtn = 35;
const fontSizeBtn = 20;
const fontSizeScore = 50;
const widthRacquet = 15;
const heightRacquet = 150;
const radiusBall = 40;
let toggle;


function createField() {
    let tennis = document.createElement("div");
    tennis.id = "tennis";
    tennis.style.width = `${width}px`;
    tennis.style.height = `${height}px`;
    tennis.style.display = "block";
    tennis.style.position = "relative";

    let canvasBackgroundLayer = document.createElement("canvas");
    canvasBackgroundLayer.id = "background-layer";
    canvasBackgroundLayer.width = canvasBackgroundLayerWidth;
    canvasBackgroundLayer.height = canvasBackgroundLayerHeight;
    canvasBackgroundLayer.style.display = "block";
    canvasBackgroundLayer.style.position = "absolute";


    let canvasGameLayer = document.createElement("canvas");
    canvasGameLayer.id = "game-layer";
    canvasGameLayer.width = canvasGameLayerWidth;
    canvasGameLayer.height = canvasGameLayerHeight;
    canvasGameLayer.style.display = "block";
    canvasGameLayer.style.position = "absolute";

    let btn = document.createElement("input");
    btn.id = "btn";
    btn.type = "button";
    btn.value = "старт!";
    btn.style.width = `${widthBtn}px`;
    btn.style.height = `${heightBtn}px`;
    btn.style.fontSize = `${fontSizeBtn}px`;
    btn.style.position = "absolute";

    let score = document.createElement("div");
    let score1 = document.createElement("span");
    let score2 = document.createElement("span");
    let blank = document.createTextNode(":");

    score.style.fontSize = `${fontSizeScore}px`;
    score.style.textAlign = "center";
    score.id = "score";

    score1.id = "score1";
    score1.textContent = "0";

    score2.id = "score2";
    score2.textContent = "0";

    document.body.append(tennis);
    tennis.append(btn);
    tennis.append(score);
    score.append(score1);
    score.append(blank);
    score.append(score2);
    tennis.append(canvasBackgroundLayer);
    tennis.append(canvasGameLayer);
}

function drawField() {
    let canvasBackgroundLayer = document.getElementById("background-layer");
    let ctx = canvasBackgroundLayer.getContext("2d", {
        alpha: false
    });

    ctx.fillStyle = "#F0EE7E";
    ctx.fillRect(0, 0, 700, 400);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, 700, 400);
}

let racquet1 = {
    width: widthRacquet,
    height: heightRacquet,
    top: canvasGameLayerHeight / 2 - heightRacquet / 2,
    left: 0,
    speed: 0,
    score: 0,
    update: function() {
        let canvasGameLayer = document.getElementById("game-layer");
        let ctx = canvasGameLayer.getContext("2d");

        ctx.fillStyle = "green";
        ctx.fillRect(this.left, this.top, this.width, this.height);
    }
}

let racquet2 = {
    width: widthRacquet,
    height: heightRacquet,
    top: canvasGameLayerHeight / 2 - heightRacquet / 2,
    left: canvasGameLayerWidth - widthRacquet,
    speed: 0,
    score: 0,
    update: function() {
        let canvasGameLayer = document.getElementById("game-layer");
        let ctx = canvasGameLayer.getContext("2d");

        ctx.fillStyle = "blue";
        ctx.fillRect(this.left, this.top, this.width, this.height);
    }
}

let ball = {
    top: canvasGameLayerHeight / 2,
    left: canvasGameLayerWidth / 2,
    radius: radiusBall / 2,
    speedX: 0,
    speedY: 0,
    update: function() {
        let canvasGameLayer = document.getElementById("game-layer");
        let ctx = canvasGameLayer.getContext("2d");

        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.arc(this.left, this.top, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 16) {
        racquet1.speed = -10;
    };
    if (event.keyCode === 17) {
        racquet1.speed = 10;
    };
    if (event.keyCode === 38) {
        racquet2.speed = -10;
    };
    if (event.keyCode === 40) {
        racquet2.speed = 10;
    };
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode === 16) {
        racquet1.speed = 0;
    };
    if (event.keyCode === 17) {
        racquet1.speed = 0;
    };
    if (event.keyCode === 38) {
        racquet2.speed = 0;
    };
    if (event.keyCode === 40) {
        racquet2.speed = 0;
    };
});

function moveObject() {
    racquet1.top += racquet1.speed;
    racquet2.top += racquet2.speed;

    ball.left += ball.speedX;
    ball.top += ball.speedY;

    if (racquet1.top <= 0) {
        racquet1.top = 0;
    };

    if (racquet2.top <= 0) {
        racquet2.top = 0;
    };

    if (racquet1.top > canvasGameLayerHeight - racquet1.height) {
        racquet1.top = canvasGameLayerHeight - racquet1.height;
    };

    if (racquet2.top > canvasGameLayerHeight - racquet2.height) {
        racquet2.top = canvasGameLayerHeight - racquet2.height;
    };

    if (ball.left - ball.radius <= 0 || ball.left >= canvasGameLayerWidth - ball.radius) {
        ball.speedX = -ball.speedX;
    };

    if (ball.top - ball.radius <= 0 || ball.top >= canvasGameLayerHeight - ball.radius) {
        ball.speedY = -ball.speedY;
    };

    if (ball.left - ball.radius <= racquet1.left + racquet1.width) {
        if (ball.top >= racquet1.top && ball.top <= racquet1.top + racquet1.height) {
            ball.speedX = -ball.speedX;
        }
    };

    if (ball.left - ball.radius <= 0) {
        ball.left = ball.radius;
        racquet2.score++;
        stopGame()
    }

    if (ball.left + ball.radius >= racquet2.left) {
        if (ball.top >= racquet2.top && ball.top <= racquet2.top + racquet2.height) {
            ball.speedX = -ball.speedX;
        }
    };

    if (ball.left + ball.radius >= canvasGameLayerWidth) {
        ball.left = canvasGameLayerWidth - ball.radius;
        racquet1.score++;
        stopGame()
    }

    clearAll();
    racquet1.update();
    racquet2.update();
    ball.update();

    document.getElementById("score1").textContent = racquet1.score;
    document.getElementById("score2").textContent = racquet2.score;
    if (toggle) {
        window.requestAnimationFrame(moveObject);
    }
}

function startBall() {
    ball.left = canvasGameLayerWidth / 2;
    ball.top = canvasGameLayerHeight / 2;

    let random = randomInteger(-1, 1);
    if (random === 0) {
        random = -1;
    }
    ball.speedX = random * 5;
    ball.speedY = random * 5;

}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function startGame() {
    toggle = true;
    racquet1.top = canvasGameLayerHeight / 2 - heightRacquet / 2;
    racquet2.top = canvasGameLayerHeight / 2 - heightRacquet / 2;
    window.requestAnimationFrame(moveObject);
}

function stopGame() {
    toggle = false;
}

function clearAll() {
    let canvasGameLayer = document.getElementById("game-layer");
    let ctx = canvasGameLayer.getContext("2d");
    ctx.clearRect(0, 0, canvasGameLayerWidth, canvasGameLayerHeight);
}

window.onload = function() {
    createField();
    drawField();
    racquet1.update();
    racquet2.update();
    ball.update();

    document.getElementById("btn").addEventListener('click', () => {
        startGame();
        startBall();
    });
}