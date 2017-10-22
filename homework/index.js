exports.factorial = (n) => {
	const factorial = n == 0 ? 1 : n * exports.factorial(n - 1)
	return factorial
	module.exports = exports.factorial;
}

exports.fibonacci = (n) => {
	const fibonacci = n == 1 || n == 2 ? 1 : exports.fibonacci(n - 1) + exports.fibonacci(n - 2)
	return fibonacci
	module.exports = exports.fibonacci
}

exports.divide = (a, b) => {
	const divide = b > a ? 0 : exports.divide(a - b, b) + 1
	return divide
	module.exports = exports.divide
}

exports.invert = (n) => {
}

exports.suma = (n) => {

}

exports.multi = (a, b) => {

}

exports.sumArr = (arr) => {

}

function invert(n){
	if(n < 10){
		return n;
	}else {
		return (n%10) + invert(n / 10) * 10;
	}
}

