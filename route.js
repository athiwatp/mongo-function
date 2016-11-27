var express = require('express')
var router = express.Router()
module.exports = function () {

  var data = require('./mongoose/data/data.route.js')
  router.use('/', data)

  return router
}
