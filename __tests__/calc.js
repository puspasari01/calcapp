const calc = require('../calc.js')

test('the sum of 1 and 3 is 4', () => {
  const actual = calc.add(1, 3)
  const expected = 4
  expect(actual).toBe(4)
})
