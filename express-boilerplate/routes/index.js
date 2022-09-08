const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  const dir = path.resolve(process.env.PWD, './src', 'html', 'main.html');
  res.sendFile(dir);
});

module.exports = router;
