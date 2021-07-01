const Calculator = (function() {
    let _result;
    function sum(a, b) {
        return _result = a + b;
    }

    return {
        sum: sum,
    };
})(); // Transforms this into an expression and then executes the function

const casio = Calculator;
console.log(casio.sum(2, 2)); // Returns 4