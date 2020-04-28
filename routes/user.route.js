const express = require('express');

const router = express.Router();

const controller = require('../controllers/user.controller');
const validate = require('../validate/user.validate');

router.get('/', controller.index);

router.get('/cookie', function(req, res, next) {
  res.cookie('user-id', 123);
  res.send('hello');
});

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;