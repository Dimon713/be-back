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