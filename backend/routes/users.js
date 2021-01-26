var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController')

router.get('/', function (req, res) {
    const users = userController.getAllUsers();
    res.status(200).send(users);
});

router.post('/', function (req, res) {
    const user = req.body.user
    try {
        userController.addUser(user);
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e.message());
    }
})

router.get('/login', (req, res) => {
    if (req.query.login in userController.users && userController.users[req.query.login].password === req.query.password) {
        res.status(200).send();
    } else {
        res.status(400).send();
    }
})

module.exports = router;