const router = require('express').Router()

const userController = require('../controllers/userController');
// const { updateuser } = require('../repositories/userRepository');

router.get('/', userController.getAllUser);
router.get('/:nama', userController.getUserByName);
router.post('/', userController.createUser);
router.put('/:nama', userController.updateUser);
router.delete('/:nama', userController.deleteUser);


module.exports = router;