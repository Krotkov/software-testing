var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')

router.get('/', function(req, res) {
  const users = userController.getAllUsers();
  res.status(200).send(users);
});

router.post('/', function(req, res) {
  const user = req.body.user
  try {
    userController.addUser(user);
    res.status(201).send(user);
  } catch (e) {
    res.status(400).send(e.message());
  }
})

module.exports = router;
