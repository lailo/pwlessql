const slugify = require('slugify')

module.exports = function(text) {
  return slugify(text, {
    replacement: '-',
    remove: /[*+~.()'"!:@\/|]/g,
    lower: true,
  })
}
