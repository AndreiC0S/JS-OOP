function fibonacci(a) {
    var _a;
    if (a < 2) {
        return 1;
    }
    var prev = 0;
    var current = 1;
    var i;
    for (i = 2; i <= a; i++) {
        _a = [current, prev + current], prev = _a[0], current = _a[1];
    }
    return current;
}
console.log(fibonacci(25));
