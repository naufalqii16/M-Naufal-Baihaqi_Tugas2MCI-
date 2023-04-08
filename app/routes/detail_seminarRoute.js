const router = require('express').Router()

const detail_seminarController = require('../controllers/detail_seminarController');
// const { updatedetail_seminar } = require('../repositories/detail_seminarRepository');

router.get('/', detail_seminarController.getAllDetail_seminar);
router.get('/:judul', detail_seminarController.getDetail_seminarByTitle);
router.post('/', detail_seminarController.createDetail_seminar);
router.put('/:judul', detail_seminarController.updateDetail_seminar);
router.delete('/:judul', detail_seminarController.deleteDetail_seminar);


module.exports = router;