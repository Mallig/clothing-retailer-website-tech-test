const pug = require('pug')
const products = require('../public/products')

const compiledFunction = pug.compileFile('views/products.pug')

test('It should render pug correctly', () => {
  expect(compiledFunction(products)).toMatchSnapshot();
});