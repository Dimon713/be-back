const width = 700;
const height = 600;
const widthCourt = 700;
const heigthCourt = 400;
const widthBtn = 100;
const heightBtn = 35;
const fontSizeBtn = 20;
const fontSizeScore = 50;
const widthRacquet = 15;
const heightRacquet = 150;
const leftRacquet2Start = 685;
const widthBall = heightBall = 50;
let timerId;

function createField() {
    let tennis = document.createElement("div");
    tennis.id = "tennis";
    tennis.style.width = `${width}px`;
    tennis.style.height = `${height}px`;
    tennis.style.display = "block";

    let court = document.createElement("div");
    court.id = "court";
    court.style.width = `${widthCourt}px`;
    court.style.height = `${heigthCourt}px`;
    court.style.border = "1px solid black";
    court.style.backgroundColor = "#F0EE7E";
    court.style.display = "block";
    court.style.position = "relative";

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

    let racquet1 = document.createElement("div");
    let racquet2 = document.createElement("div");
    let ball = document.createElement("div");

    score.style.fontSize = `${fontSizeScore}px`;
    score.style.textAlign = "center";
    score.id = "score";

    score1.id = "score1";
    score1.textContent = "0";

    score2.id = "score2";
    score2.textContent = "0";

    racquet1.id = "racquet1";

    racquet2.id = "racquet2";

    ball.id = "ball";

    document.body.appendChild(tennis);
    tennis.appendChild(btn);
    tennis.appendChild(score);
    score.appendChild(score1);
    score.appendChild(blank);
    score.appendChild(score2);
    tennis.appendChild(court);
    court.appendChild(racquet1);
    court.appendChild(racquet2);
    court.appendChild(ball);
}

let racquet1 = {
    width: widthRacquet,
    height: heightRacquet,
    top: heigthCourt / 2 - heightRacquet / 2,
    left: 0,
    speed: 0,
    score: 0,
    update: function() {
        let racquet1 = document.getElementById("racquet1");
        racquet1.style.width = `${this.width}px`;
        racquet1.style.height = `${this.height}px`;
        racquet1.style.backgroundColor = "green";
        racquet1.style.position = "absolute";
        racquet1.style.top = `${this.top}px`;
        racquet1.style.left = `${this.left}px`;
    }
}

let racquet2 = {
    width: widthRacquet,
    height: heightRacquet,
    top: heigthCourt / 2 - heightRacquet / 2,
    left: leftRacquet2Start,
    speed: 0,
    score: 0,
    update: function() {
        let racquet2 = document.getElementById("racquet2");
        racquet2.style.width = `${this.width}px`;
        racquet2.style.height = `${this.height}px`;
        racquet2.style.backgroundColor = "blue";
        racquet2.style.position = "absolute";
        racquet2.style.top = `${this.top}px`;
        racquet2.style.left = `${this.left}px`;
    }
}

let ball = {
    width: widthBall,
    height: heightBall,
    borderRadius: widthBall / 2,
    top: heigthCourt / 2 - heightBall / 2,
    left: widthCourt / 2 - widthBall / 2,
    speedX: 0,
    speedY: 0,
    update: function() {
        let ball = document.getElementById("ball");
        ball.style.width = `${this.width}px`;
        ball.style.height = `${this.height}px`;
        ball.style.borderRadius = `${this.borderRadius}px`;
        ball.style.backgroundColor = "red";
        ball.style.position = "absolute";
        ball.style.top = `${this.top}px`;
        ball.style.left = `${this.left}px`;
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

    if (racquet1.top > heigthCourt - racquet1.height) {
        racquet1.top = heigthCourt - racquet1.height;
    };

    if (racquet2.top > heigthCourt - racquet2.height) {
        racquet2.top = heigthCourt - racquet2.height;
    };

    if (ball.left <= 0 || ball.left >= widthCourt - ball.width) {
        ball.speedX = -ball.speedX;
    };

    if (ball.top <= 0 || ball.top >= heigthCourt - ball.height) {
        ball.speedY = -ball.speedY;
    };

    if (ball.left <= racquet1.left + racquet1.width) {
        if (ball.top >= racquet1.top && ball.top <= racquet1.top + racquet1.height) {
            ball.speedX = -ball.speedX;
        }
    };

    if (ball.left <= 0) {
        ball.left = 0;
        racquet2.score++;
        stopGame()
    }

    if (ball.left + ball.width >= racquet2.left) {
        if (ball.top >= racquet2.top && ball.top <= racquet2.top + racquet2.height) {
            ball.speedX = -ball.speedX;
        }
    };

    if (ball.left + ball.width >= widthCourt) {
        ball.left = widthCourt - ball.width;
        racquet1.score++;
        stopGame()
    }

    racquet1.update();
    racquet2.update();
    ball.update();

    document.getElementById("score1").textContent = racquet1.score;
    document.getElementById("score2").textContent = racquet2.score;
}

function startBall() {
    ball.left = widthCourt / 2 - widthBall / 2;
    ball.top = heigthCourt / 2 - heightBall / 2;

    let random = randomInteger(-1, 1);
    if (random === 0) {
        random = -1;
    }
    ball.speedX = random * 10;
    ball.speedY = random * 10;

};

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function startGame() {
    stopGame();
    racquet1.top = heigthCourt / 2 - heightRacquet / 2;
    racquet2.top = heigthCourt / 2 - heightRacquet / 2;
    timerId = setInterval(moveObject, 25);
};

function stopGame() {
    clearInterval(timerId);
};

window.onload = function() {
    createField();
    racquet1.update();
    racquet2.update();
    ball.update();

    document.getElementById("btn").addEventListener('click', () => {
        startGame();
        startBall();
    });
}