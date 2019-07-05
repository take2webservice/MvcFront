const controller = require('../src/controller')
test('1 + 2 = 3', () => {
  expect(controller.add(1, 2)).toEqual(3)
})
