exports.factorial = (n) => {
	const factorial = n => n == 0 ? 1 : n * factorial(n - 1)
}

exports.fibonacci = (n) => {
	const fibonacci = n => n == 1 || n == 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2)
}

exports.divide = (a, b) => {
	const divide = (a, b) => b > a ? 0 : divide(a - b, b) + 1
}

exports.invert = (n) => {

}

exports.suma = (n) => {

}

exports.multi = (a, b) => {

}

exports.sumArr = (arr) => {

}


