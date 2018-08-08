var express = require('express')
var router = express.Router()

router.get('/documents/create', function (req, res) {
  res.render('documents/create', { })
})

module.exports = router
