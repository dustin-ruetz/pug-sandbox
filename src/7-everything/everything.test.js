const pug = require('pug')

// https://pugjs.org/api/reference.html#pugrenderfilepath-options-callback
const everything = pug.renderFile('./src/7-everything/everything.pug', {
  // explicitly pass in the Node.js `require` method into Pug's options/locals object to enable
  // CommonJS modules to be resolved when using `require()` with pug.renderFile and Jest
  require
})

it('renders everything', () => {
  // console.log(everything)
  expect(everything.includes('The title')).toEqual(true)

  document.body.innerHTML = everything

  const image = document.querySelector('.image')
  // console.log(image.outerHTML)

  expect(everything.includes('The alt')).toEqual(true)
  expect(everything.includes('./images/pug-icon.png')).toEqual(true)
})

it('test render an element without <!DOCTYPE html>', () => {
  const containerEl = '<div class="container"><p class="p1">Paragraph 1</p><p>Paragraph 2</p></div>'
  document.body.innerHTML = containerEl
  console.log(document)

  const container = document.querySelector('.container')
  const p1 = container.querySelector('.p1')
  console.log(container.outerHTML)
  console.log(p1.outerHTML)
})
