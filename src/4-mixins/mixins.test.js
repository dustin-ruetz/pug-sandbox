const pug = require('pug')

const includesSingleMixin = pug.renderFile('./src/4-mixins/includes-single-mixin.pug')
const includesMultipleMixins = pug.renderFile('./src/4-mixins/includes-multiple-mixins.pug')

it('renders a template that includes a single mixin', () => {
  // console.log(includesSingleMixin)
  expect(includesSingleMixin.includes("This is an <img>.")).toEqual(true)
  expect(includesSingleMixin.includes("The image's alternative text.")).toEqual(true)
  expect(includesSingleMixin.includes("The image's source.")).toEqual(true)
})

it('renders a template that includes multiple mixins', () => {
  // console.log(includesMultipleMixins)
  expect(includesMultipleMixins.includes("This is image 1.")).toEqual(true)
  expect(includesMultipleMixins.includes("Image 1 alt.")).toEqual(true)
  expect(includesMultipleMixins.includes("Image 1 src.")).toEqual(true)
  expect(includesMultipleMixins.includes("This is image 2.")).toEqual(true)
  expect(includesMultipleMixins.includes("Image 2 alt.")).toEqual(true)
  expect(includesMultipleMixins.includes("Image 2 src.")).toEqual(true)
})
