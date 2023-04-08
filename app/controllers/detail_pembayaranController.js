const detail_pembayaranService = require('../services/detail_pembayaranService');

const getAllDetail_pembayaran = async(req, res) => {
    detail_pembayaranService.getAllDetail_pembayaran()
    .then(detail_pembayaran=>{
        if(!detail_pembayaran){
            res.status(404).send({
                status : 'error',
                message : 'Data detail_pembayaran tidak ditemukan',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'success',
                message : 'Data detail_pembayaran berhasil ditemukan',
                data : detail_pembayaran
            });
        }
    })
    .catch(err=>{
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}
const getDetail_pembayaranByUser_id = async(req, res) => {
    const param_user_id = req.params.user_id;
    console.log(param_user_id);
    detail_pembayaranService.getDetail_pembayaranByUser_id(param_user_id)
    .then(detail_pembayaran=>{
        if(!detail_pembayaran){
            res.status(404).send({
                status : 'error',
                message : 'Data detail_pembayaran tidak ditemukan',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'success',
                message : 'Data detail_pembayaran berhasil ditemukan',
                data : detail_pembayaran
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

const createDetail_pembayaran = async (req, res) => {
    const data = {
        nominal_pembayaran : req.body.nominal_pembayaran,
        metode_pembayaran : req.body.metode_pembayaran,
        waktu_pembayaran : req.body.waktu_pembayaran,
        status_pembayaran : req.body.status_pembayaran,
        user_id : req.body.user_id
    }
    // console.log(data);
    detail_pembayaranService.createDetail_pembayaran(data)
    .then(detail_pembayaran => {
        res.status(200).send({
            status : 'success',
            message : 'Data detail_pembayaran berhasil ditambahkan',
            data : detail_pembayaran
        });
    })
    .catch(err => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

const updateDetail_pembayaran = async (req, res) => {
    const data = {
        nominal_pembayaran : req.body.nominal_pembayaran,
        metode_pembayaran : req.body.metode_pembayaran,
        waktu_pembayaran : req.body.waktu_pembayaran,
        status_pembayaran : req.body.status_pembayaran,
        user_id : req.body.user_id
    }
    const user_id = req.params.user_id;
    if(!user_id){
        res.status(400).send({
            status : 'error',
            message : 'user_id tidak valid',
            data : {}
        });
    }
    detail_pembayaranService.updateDetail_pembayaran(data,user_id)
    .then(detail_pembayaran => {
        res.status(200).send({
            status : 'success',
            message : 'Data detail_pembayaran berhasil diupdate',
            data : detail_pembayaran
        });
    })
    .catch(err => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })
}

const deleteDetail_pembayaran = async (req, res) => {
    const id = req.params.id;
    if(!id){
        res.status(404).send({
            status : 'error',
            message : 'id tidak valid',
            data : {}
        })
    }
    detail_pembayaranService.deleteDetail_pembayaran(id)
    .then(detail_pembayaran => {
        res.status(200).send({
            status : 'success',
            message : 'Data detail_pembayaran berhasil didelete',
            data : detail_pembayaran
        });
    })
    .catch(err => {
        res.status(500).send({
            status : 'error',
            message : err.message,
            data : {}
        });
    })

}

module.exports = {
    getAllDetail_pembayaran,
    getDetail_pembayaranByUser_id,
    createDetail_pembayaran,
    updateDetail_pembayaran,
    deleteDetail_pembayaran
}