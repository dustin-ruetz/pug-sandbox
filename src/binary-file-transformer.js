// Jest docs: "Importing images is a way to include them in your browser bundle,
// but they are not valid JavaScript. One way of handling it in Jest is to
// replace the imported value with its filename."
// https://jestjs.io/docs/code-transformation/#transforming-images-to-their-path
const path = require('path')

module.exports = {
  process(sourceText, sourcePath, options) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))}`,
    }
  },
}
