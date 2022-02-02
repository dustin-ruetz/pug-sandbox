const pug = require('pug')

const multipleBlockAndMixins = pug.renderFile(
  './src/5-blocks-and-mixins/multiple-blocks-and-mixins.pug'
)

it('renders the page template containing both blocks and mixins', () => {
  // console.log(multipleBlockAndMixins)
  expect(multipleBlockAndMixins.includes('The page title.')).toEqual(true)
  expect(multipleBlockAndMixins.includes('The page heading.')).toEqual(true)
  expect(multipleBlockAndMixins.includes('J.R.R. Tolkien')).toEqual(true)
  expect(multipleBlockAndMixins.includes('The Hobbit')).toEqual(true)
  expect(multipleBlockAndMixins.includes('Literary review of The Hobbit.')).toEqual(true)
  expect(multipleBlockAndMixins.includes('Hobbit book cover description.')).toEqual(true)
  expect(multipleBlockAndMixins.includes('Hobbit book cover source.')).toEqual(true)
  expect(multipleBlockAndMixins.includes('A more detailed description of the book cover.')).toEqual(true)
  expect(multipleBlockAndMixins.includes('2022-Feb-02')).toEqual(true)
  expect(multipleBlockAndMixins.includes('123,456,789')).toEqual(true)
})
