const detail_seminarService = require('../services/detail_seminarService');

const getAllDetail_seminar = async(req, res) => {
    detail_seminarService.getAllDetail_seminar()
    .then(detail_seminar=>{
        if(!detail_seminar){
            res.status(404).send({
                status : 'error',
                message : 'Data detail_seminar tidak ditemukan',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'success',
                message : 'Data detail_seminar berhasil ditemukan',
                data : detail_seminar
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
const getDetail_seminarByTitle = async(req, res) => {
    const param_judul = req.params.judul;
    detail_seminarService.getDetail_seminarByTitle(param_judul)
    .then(detail_seminar=>{
        if(!detail_seminar){
            res.status(404).send({
                status : 'error',
                message : 'Data detail_seminar tidak ditemukan',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'success',
                message : 'Data detail_seminar berhasil ditemukan',
                data : detail_seminar
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

const createDetail_seminar = async (req, res) => {
    const data = {
        judul : req.body.judul,
        kuota_peserta : req.body.kuota_peserta,
        waktu_pelaksanaan : req.body.waktu_pelaksanaan,
        tempat_pelaksanaan : req.body.tempat_pelaksanaan,
        biaya_pelaksanaan : req.body.biaya_pelaksanaan
    }
    // console.log(data);
    detail_seminarService.createDetail_seminar(data)
    .then(detail_seminar => {
        res.status(200).send({
            status : 'success',
            message : 'Data detail_seminar berhasil ditambahkan',
            data : detail_seminar
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

const updateDetail_seminar = async (req, res) => {
    const data = {
        judul : req.body.judul,
        kuota_peserta : req.body.kuota_peserta,
        waktu_pelaksanaan : req.body.waktu_pelaksanaan,
        tempat_pelaksanaan : req.body.tempat_pelaksanaan,
        biaya_pelaksanaan : req.body.biaya_pelaksanaan
    }
    const judul = req.params.judul;
    if(!judul){
        res.status(400).send({
            status : 'error',
            message : 'judul tidak valid',
            data : {}
        });
    }
    detail_seminarService.updateDetail_seminar(data,judul)
    .then(detail_seminar => {
        res.status(200).send({
            status : 'success',
            message : 'Data detail_seminar berhasil diupdate',
            data : detail_seminar
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

const deleteDetail_seminar = async (req, res) => {
    const judul = req.params.judul;
    if(!judul){
        res.status(404).send({
            status : 'error',
            message : 'judul tidak valid',
            data : {}
        })
    }
    detail_seminarService.deleteDetail_seminar(judul)
    .then(detail_seminar => {
        res.status(200).send({
            status : 'success',
            message : 'Data detail_seminar berhasil didelete',
            data : detail_seminar
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
    getAllDetail_seminar,
    getDetail_seminarByTitle,
    createDetail_seminar,
    updateDetail_seminar,
    deleteDetail_seminar
}