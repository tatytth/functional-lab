const Sinon = require('sinon');
const Submission = require('../solution/curryN');

describe('curryN()', () => {

  test('debería exportar una función', () => {
      const actual = typeof Submission;
      const expected = 'function';

      expected(actual).toEqual(expected)
  });

  test('debería crear cadena de funciones hasta haber agotado todos los argumentos', () => {
    function add3(one, two, three) {
      return one + two + three;
    }

    var curryC = Submission(add3);
    var curryB = curryC(1);
    var curryA = curryB(2);

    let actual = curryA(3);
    let expected = 6;

    expect(actual).toEqual(expected);

    let actual = curryA(10);
    let expected = 13;

    expect(actual).toEqual(expected);

    let actual = Submission(add3)(1)(2)(3);
    let expected = 6;

    expect(actual).toEqual(expected);
  });

  test('no debería usar bucles for/while', () => {
    const fnBody = Submission.toString();

    const actual = /(for|while)\s*\(/g.test(fnBody);
    const expected = false;
    expect(actual).toEqual(expected);
  });

  test('no debería usar forEach', () => {
    function add3(one, two, three) {
      return one + two + three;
    }

    const spy = Sinon.spy(Array.prototype, 'forEach');

    const actual = Submission(add3)(1)(2)(3);
    const expected = 6;

    expect(actual).toEqual(expected);

    expect(spy.callCount).toEqual(0);
    spy.restore();
  });
});