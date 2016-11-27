var express = require('express')
var router = express.Router()
var Data = require('./data.schema.js')
router.get('/api/data', function (req, res) {
  Data.find({})
  .exec((err, results) => {
    if (err) {
      res.send(err)
    }
    if (results) {
      res.send(results)
    }
  })
})

module.exports = router
