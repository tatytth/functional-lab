/**
* Forma antigua
* function lowercaser(input) {
*	return input.toLowerCase()
* }
**/

//ECMA Script 6

/**
* lowercaser recibe input y lo transforma a lowercase
**/
const lowercaser = (input) => {
	if (typeof input !== 'string') {
		throw ('input is not a valid string')
	}
	return input.toLowerCase()
}
/**
* Esto es lo mismo que arriba pero con las llaves
* const lowercaser = (input) => {
*	return input.toLowerCase()
* }
**/

module.exports = lowercaser

//cambiar el dato de entrada se llama mutabilidad