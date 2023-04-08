const router = require('express').Router()


const pemesananController = require('../controllers/pemesananController');
// const { updatepemesanan } = require('../repositories/pemesananRepository');

router.get('/', pemesananController.getAllPemesanan);
router.get('/:detail_bayar_id', pemesananController.getPemesananByBayar_id);
router.post('/', pemesananController.createPemesanan);
router.put('/:id', pemesananController.updatePemesanan);
router.delete('/:id', pemesananController.deletePemesanan);


module.exports = router;