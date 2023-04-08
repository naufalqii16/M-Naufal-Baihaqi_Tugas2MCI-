const router = require('express').Router()

const pengisi_seminarController = require('../controllers/pengisi_seminarController');
// const { updatepengisi_seminar } = require('../repositories/pengisi_seminarRepository');

router.get('/', pengisi_seminarController.getAllPengisi_seminar);
router.get('/:nama', pengisi_seminarController.getPengisi_seminarByName);
router.post('/', pengisi_seminarController.createPengisi_seminar);
router.put('/:nama', pengisi_seminarController.updatePengisi_seminar);
router.delete('/:nama', pengisi_seminarController.deletePengisi_seminar);


module.exports = router;