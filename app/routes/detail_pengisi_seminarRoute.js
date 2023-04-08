const router = require('express').Router()

const detail_pengisi_seminarController = require('../controllers/detail_pengisi_seminarController');
// const { updatedetail_pengisi_seminar } = require('../repositories/detail_pengisi_seminarRepository');

router.get('/', detail_pengisi_seminarController.getAllDetail_pengisi_seminar);
router.get('/:ds_id', detail_pengisi_seminarController.getDetail_pengisi_seminarBySeminar_id);
router.post('/', detail_pengisi_seminarController.createDetail_pengisi_seminar);
router.put('/:id', detail_pengisi_seminarController.updateDetail_pengisi_seminar);
router.delete('/:id', detail_pengisi_seminarController.deleteDetail_pengisi_seminar);


module.exports = router;