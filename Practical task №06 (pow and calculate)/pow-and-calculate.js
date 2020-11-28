function powers(x, y) {
    if (y >= 0) {
        if (y == 0) {
            return 1;
        } else {
            return x * powers(x, y - 1);
        }
    } else {
        y = Math.abs(y);
        return 1 / powers(x, y);
    }
}

function carryPowers(f) {
    return function(x) {
        return function(y) {
            return f(x, y)
            if (y == 1) {
                return x;
            } else {
                return x * f(x, y - 1);
            }
        }
    }
}

function calc(a, mathematicalAction, b) {
    if (mathematicalAction === "+") {
        return a + b;
    } else if (mathematicalAction === "-") {
        return a - b;
    } else if (mathematicalAction === "*") {
        return a * b;
    } else if (mathematicalAction === "/") {
        if (b === 0) {
            return "Ошибка (на ноль делить нельзя)";
        } else {
            return a / b;
        }
    }
}

function carryCalc(f) {
    return function(a) {
        return function(mathematicalAction) {
            return function(b) {
                return f(a, mathematicalAction, b);
            }
        }
    }
}

let pow = carryPowers(powers);
let calculate = carryCalc(calc);

console.log(`1) Вызов:
   pow(-2)(3);
   calculate(1)("+")(2));
   Результат:
   -2^3=${pow(-2)(3)}
    1+2=${calculate(1)("+")(2)}
`);

console.log(`2) Вызов:
   pow(4)(2);
   calculate(3)("*")(7));
   Результат:
   4^2=${pow(4)(2)}
   3*7=${calculate(3)("*")(7)}
`);

console.log(`3) Вызов:
   pow(16)(0);
   calculate(15)("/")(3));
   Результат:
   16^0=${pow(16)(0)}
   15/3=${calculate(15)("/")(3)}
`);

console.log(`4) Вызов:
   pow(2)(-3);
   calculate(2)("/")(0));
   Результат:
   2^(-3)=${pow(2)(-3)}
   2/0=${calculate(2)("/")(0)}
`);