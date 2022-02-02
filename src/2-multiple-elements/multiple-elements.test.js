const pug = require('pug')

const multipleSiblings = pug.renderFile('./src/2-multiple-elements/multiple-siblings.pug')
const singleParentMultipleChildren = pug.renderFile(
  './src/2-multiple-elements/single-parent-multiple-children.pug'
)

it('renders a template containing multiple top-level sibling elements', () => {
  // console.log(multipleSiblings)
  expect(multipleSiblings.includes('Sibling element 1.')).toEqual(true)
  expect(multipleSiblings.includes('Sibling element 2.')).toEqual(true)
  expect(multipleSiblings.includes('Sibling element 3.')).toEqual(true)
})

it('renders a template containing a single parent element with multiple children sibling elements', () => {
  // console.log(singleParentMultipleChildren)
  expect(singleParentMultipleChildren.includes('First child, an <h1>.')).toEqual(true)
  expect(singleParentMultipleChildren.includes('Second child, a <p>.')).toEqual(true)
  expect(singleParentMultipleChildren.includes('Third child, an <a>.')).toEqual(true)
})
