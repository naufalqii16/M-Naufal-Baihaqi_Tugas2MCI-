const router = require('express').Router()

const pemesanan_detail_seminarController = require('../controllers/pemesanan_detail_seminarController');
// const { updatepemesanan_detail_seminar } = require('../repositories/pemesanan_detail_seminarRepository');

router.get('/', pemesanan_detail_seminarController.getAllPemesanan_detail_seminar);
router.get('/:pemesanan_id', pemesanan_detail_seminarController.getPemesanan_detail_seminarByPemesanan_id);
router.post('/', pemesanan_detail_seminarController.createPemesanan_detail_seminar);
router.put('/:id', pemesanan_detail_seminarController.updatePemesanan_detail_seminar);
router.delete('/:id', pemesanan_detail_seminarController.deletePemesanan_detail_seminar);


module.exports = router;