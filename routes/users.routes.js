const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users.controllers');

router.get('/', UsersController.getAllUsers);

module.exports = router;
