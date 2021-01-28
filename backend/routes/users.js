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

router.get('/register', (req, res) => {
    if (req.query.login in userController.users) {
        res.status(400).send();
    } else {
        const user = {
            login: req.query.login,
            password: req.query.password,
            name: req.query.name,
            phones: []
        }
        userController.users[user.login] = user;
        res.status(200).send();
    }
})

router.get('/phones', (req, res) => {
    res.status(200).send(userController.users[req.query.login].phones);
})

router.post('/phones', (req, res) => {
    userController.users[req.query.login].phones.push({
        name: req.query.name,
        phone: req.query.phone
    })
    res.status(200).send()
})

router.post('/reset', (req, res) => {
    userController.users = {
        'admin': {
            login: 'admin',
            password: 'admin',
            name: 'Admin',
            phones: []
        }
    }
    res.status(200).send()
})

module.exports = router;