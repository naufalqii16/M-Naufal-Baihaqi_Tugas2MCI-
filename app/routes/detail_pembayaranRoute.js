const router = require('express').Router()


const detail_pembayaranController = require('../controllers/detail_pembayaranController');
// const { updatedetail_pembayaran } = require('../repositories/detail_pembayaranRepository');

router.get('/', detail_pembayaranController.getAllDetail_pembayaran);
router.get('/:user_id', detail_pembayaranController.getDetail_pembayaranByUser_id);
router.post('/', detail_pembayaranController.createDetail_pembayaran);
router.put('/:id', detail_pembayaranController.updateDetail_pembayaran);
router.delete('/:id', detail_pembayaranController.deleteDetail_pembayaran);


module.exports = router;