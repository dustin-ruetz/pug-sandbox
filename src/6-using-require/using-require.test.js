const pug = require('pug')

// https://pugjs.org/api/reference.html#pugrenderfilepath-options-callback
const requiringContent = pug.renderFile('./src/6-using-require/requiring-content.pug', {
  // explicitly pass in the Node.js `require` method into Pug's options/locals object to enable
  // CommonJS modules to be resolved when using `require()` with pug.renderFile and Jest
  require
})

it('renders a template that requires JSON content and an image file', () => {
  console.log(requiringContent)
  expect(requiringContent.includes('Hello')).toEqual(true)
  expect(requiringContent.includes('The alternative text')).toEqual(true)
  expect(requiringContent.includes('./images/pug-icon.png')).toEqual(true)
})
