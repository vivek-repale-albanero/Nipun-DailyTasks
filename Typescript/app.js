function add(a, b, printResult) {
    if (printResult)
        return a + b;
    else
        return "false";
}
var printResult = false;
console.log(add(8, 0, printResult));
