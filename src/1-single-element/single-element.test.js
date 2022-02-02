const pug = require('pug')

const singleElement = pug.renderFile('./src/1-single-element/single-element.pug')

it('renders a template containing a single element', () => {
  // console.log(singleElement)
  expect(singleElement.includes('This is a single <p> element.')).toEqual(true)
})
