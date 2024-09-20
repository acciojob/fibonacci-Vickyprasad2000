function calculateFibonacci() {
    const num = parseInt(document.getElementById("inputNumber").value);
    const resultElement = document.getElementById("result");

    if (isNaN(num) || num < 0) {
        resultElement.textContent = "Please enter a valid positive integer.";
        return;
    }

    const fibNum = fibonacci(num);
    resultElement.textContent = `Fibonacci(${num}) = ${fibNum}`;
}

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
