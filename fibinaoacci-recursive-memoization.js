(function () {
    let fibCache = {};

    function fibinoaaci(n) {
        //base case
        if (n <= 1) fibCache[n] = 1;
        if (fibCache[n] === undefined)
            fibCache[n] = fibinoaaci(n - 1) + fibinoaaci(n - 2);
        return fibCache[n];
    }
    console.log(fibinoaaci(80));
})();