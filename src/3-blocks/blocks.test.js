const pug = require('pug')

const singleBlock = pug.renderFile('./src/3-blocks/single-block.pug')
const extendsSingleBlock = pug.renderFile('./src/3-blocks/extends-single-block.pug')
const multipleBlocks = pug.renderFile('./src/3-blocks/multiple-blocks.pug')
const extendsMultipleBlocks = pug.renderFile('./src/3-blocks/extends-multiple-blocks.pug')

it('renders a template containing a single block', () => {
  // console.log(singleBlock)
  expect(singleBlock.includes('The HTML head meta title.')).toEqual(true)
})

it('renders a template that extends single-block.pug', () => {
  // console.log(extendsSingleBlock)
  expect(extendsSingleBlock.includes('The HTML head meta title.')).toEqual(true)
  expect(extendsSingleBlock.includes('The HTML head meta description.')).toEqual(true)
})

it('renders a template containing multiple blocks', () => {
  // console.log(multipleBlocks)
  expect(multipleBlocks.includes('The HTML head meta title.')).toEqual(true)
  expect(multipleBlocks.includes('The HTML body h1.')).toEqual(true)
})

it('renders a template that extends multiple-blocks.pug', () => {
  // console.log(extendsMultipleBlocks)
  expect(extendsMultipleBlocks.includes('The HTML head meta description.')).toEqual(true)
  expect(extendsMultipleBlocks.includes('The HTML body paragraph.')).toEqual(true)
})
