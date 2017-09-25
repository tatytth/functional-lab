const lowercaser = require('../lowercaser')

test('lowercaser debería retornar un string en lowercase', () => {
	const actual = 'LOREM IPSUM'
	const expected = 'lorem ipsum'

	expect(lowercaser(actual)).toBe(expected) //expect y toBe son métodos de js
})

test('debería fallar cuando se ingresa un número',() =>{
	const actual = 1

	expect(() => {
		lowercaser(actual)
	}).toThrow()
})