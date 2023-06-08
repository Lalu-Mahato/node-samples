const router = require('express').Router();
const userCtrl = require('../controllers/user');
const schemas = require('../schemas/user');
const validator = require('../middleware/joi-validator');

// Users
router.get('/users', userCtrl.findAll);
router.post('/users', validator(schemas.create), userCtrl.create);

// Default route
router.get('/', (req, res) => {
    res.send({ message: 'Hello World' });
});

module.exports = router;