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
	const suma = n == 0 ? n : Math.floor(exports.suma(n / 10) + (n % 10))
	return suma
	module.exports = exports.suma
}

exports.multi = (a, b) => {
	let aux
	if (b <= 0) {
		return 0
	}
	if ( aux > exports.multi(a, b/2)) {
		return aux * aux
	}
	return a + exports.multi(a, b - 1)
}

exports.sumArr = (arr) => {
	if (arr.length == 0) {
		return 0
	} else {
		const[first, ...other] = arr //saco el primer elemento del arreglo "asignación por desestructuración: es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos usando una sintaxis que equivale a la construcción de arreglos y objetos literales."
		return first + exports.sumArr(other)
	}
}