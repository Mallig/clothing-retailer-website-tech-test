const pug = require('pug')
const cartTotal = { total: 100 }

const compiledFunction = pug.compileFile('views/cart.pug')

test('It should render pug correctly', () => {
  expect(compiledFunction(cartTotal)).toMatchSnapshot();
});