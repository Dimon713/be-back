function getCounter(x) {
    let result = x;
    return {
        log: () => {
            console.log(result)
        },
        count: (y) => {
            result += y;
        },
        reset: () => {
            result = 0;
        }
    }
}

var counter = getCounter(5);