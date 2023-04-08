const pemesanan_detail_seminarService = require('../services/pemesanan_detail_seminarService');

const getAllPemesanan_detail_seminar = async(req, res) => {
    pemesanan_detail_seminarService.getAllPemesanan_detail_seminar()
    .then(pemesanan_detail_seminar=>{
        if(!pemesanan_detail_seminar){
            res.status(404).send({
                status : 'error',
                message : 'Data pemesanan_detail_seminar tidak ditemukan',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'success',
                message : 'Data pemesanan_detail_seminar berhasil ditemukan',
                data : pemesanan_detail_seminar
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
const getPemesanan_detail_seminarByPemesanan_id = async(req, res) => {
    const param_pemesanan_id = req.params.pemesanan_id;
    pemesanan_detail_seminarService.getPemesanan_detail_seminarByPemesanan_id(param_pemesanan_id)
    .then(pemesanan_detail_seminar=>{
        if(!pemesanan_detail_seminar){
            res.status(404).send({
                status : 'error',
                message : 'Data pemesanan_detail_seminar tidak ditemukan',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'success',
                message : 'Data pemesanan_detail_seminar berhasil ditemukan',
                data : pemesanan_detail_seminar
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

const createPemesanan_detail_seminar = async (req, res) => {
    const data = {
        pemesanan_id : req.body.pemesanan_id,
        detail_seminar_id : req.body.detail_seminar_id
    }
    // console.log(data);
    pemesanan_detail_seminarService.createPemesanan_detail_seminar(data)
    .then(pemesanan_detail_seminar => {
        res.status(200).send({
            status : 'success',
            message : 'Data pemesanan_detail_seminar berhasil ditambahkan',
            data : pemesanan_detail_seminar
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

const updatePemesanan_detail_seminar = async (req, res) => {
    const data = {
        pemesanan_id : req.body.pemesanan_id,
        detail_seminar_id : req.body.detail_seminar_id
    }
    const id = req.params.id;
    if(!id){
        res.status(400).send({
            status : 'error',
            message : 'id tidak valid',
            data : {}
        });
    }
    pemesanan_detail_seminarService.updatePemesanan_detail_seminar(data,id)
    .then(pemesanan_detail_seminar => {
        res.status(200).send({
            status : 'success',
            message : 'Data pemesanan_detail_seminar berhasil diupdate',
            data : pemesanan_detail_seminar
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

const deletePemesanan_detail_seminar = async (req, res) => {
    const id = req.params.id;
    if(!id){
        res.status(404).send({
            status : 'error',
            message : 'id tidak valid',
            data : {}
        })
    }
    pemesanan_detail_seminarService.deletePemesanan_detail_seminar(id)
    .then(pemesanan_detail_seminar => {
        res.status(200).send({
            status : 'success',
            message : 'Data pemesanan_detail_seminar berhasil didelete',
            data : pemesanan_detail_seminar
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
    getAllPemesanan_detail_seminar,
    getPemesanan_detail_seminarByPemesanan_id,
    createPemesanan_detail_seminar,
    updatePemesanan_detail_seminar,
    deletePemesanan_detail_seminar
}