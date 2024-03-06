const { Router } = require('express');
const router = express.Router();
const UserControllers = require('../controllers/UserControllers');

Router.post('/creationducompte', UserControllers.createuser);

module.exports = router;