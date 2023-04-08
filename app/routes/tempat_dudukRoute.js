const router = require('express').Router()


const tempat_dudukController = require('../controllers/tempat_dudukController');
// const { updatetempat_duduk } = require('../repositories/tempat_dudukRepository');

router.get('/', tempat_dudukController.getAllTempat_duduk);
router.get('/:letak', tempat_dudukController.getTempat_dudukByPosision);
router.post('/', tempat_dudukController.createTempat_duduk);
router.put('/:letak', tempat_dudukController.updateTempat_duduk);
router.delete('/:letak', tempat_dudukController.deleteTempat_duduk);


module.exports = router;