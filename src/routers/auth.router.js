const express = require("express");

const router = express.Router();

const authController = require('../controllers/auth.controller.js');


router.get('/login', authController.login)
router.post('/register', express.urlencoded(), authController.register)

module.exports = router;