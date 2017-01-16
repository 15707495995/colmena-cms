'use strict'

var Showdown = require('showdown')

module.exports = function (Page) {

  Page.createFakeData = (faker) => {
    var name = faker.company.catchPhrase()
    var slug = faker.helpers.slugify(name)
    return Page.create({
      id: slug,
      name: name,
      slug: slug,
      content: ` > ${faker.lorem.paragraph()}`,
    })
  }

  var converter = new Showdown.converter() // eslint-disable-line new-cap

  Page.html = (id, cb) => {
    Page.findById(id, (err, page) => {
      if (err) {
        return cb(err)
      }
      var result = page
      result.html = converter.makeHtml(page.content)
      cb(err, result)
    })
  }

  Page.remoteMethod('html', {
    accepts: {
      arg: 'id',
      type: 'string',
    },
    returns: {
      arg: 'content',
      type: 'string',
    },
    http: {
      path: '/:id/html',
      verb: 'get',
    },
  })

}
