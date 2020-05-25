function getCounter(x) {
    this.result = x;
    return {
        log: function() {
            console.log(this.result);
            return this;
        },
        count: function(y) {
            result += y;
            return this;
        },
        reset: function() {
            result = 0;
            return this;
        }
    }
}