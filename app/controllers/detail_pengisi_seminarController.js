const detail_pengisi_seminarService = require('../services/detail_pengisi_seminarService');

const getAllDetail_pengisi_seminar = async(req, res) => {
    detail_pengisi_seminarService.getAllDetail_pengisi_seminar()
    .then(detail_pengisi_seminar=>{
        if(!detail_pengisi_seminar){
            res.status(404).send({
                status : 'error',
                message : 'Data detail_pengisi_seminar tidak ditemukan',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'success',
                message : 'Data detail_pengisi_seminar berhasil ditemukan',
                data : detail_pengisi_seminar
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
const getDetail_pengisi_seminarBySeminar_id = async(req, res) => {
    const param_ds_id = req.params.ds_id;
    detail_pengisi_seminarService.getDetail_pengisi_seminarBySeminar_id(param_ds_id)
    .then(detail_pengisi_seminar=>{
        if(!detail_pengisi_seminar){
            res.status(404).send({
                status : 'error',
                message : 'Data detail_pengisi_seminar tidak ditemukan',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'success',
                message : 'Data detail_pengisi_seminar berhasil ditemukan',
                data : detail_pengisi_seminar
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

const createDetail_pengisi_seminar = async (req, res) => {
    const data = {
        ds_id : req.body.ds_id,
        ps_id : req.body.ps_id
    }
    // console.log(data);
    detail_pengisi_seminarService.createDetail_pengisi_seminar(data)
    .then(detail_pengisi_seminar => {
        res.status(200).send({
            status : 'success',
            message : 'Data detail_pengisi_seminar berhasil ditambahkan',
            data : detail_pengisi_seminar
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

const updateDetail_pengisi_seminar = async (req, res) => {
    const data = {
        ds_id : req.body.ds_id,
        ps_id : req.body.ps_id
    }
    const id = req.params.id;
    if(!id){
        res.status(400).send({
            status : 'error',
            message : 'id tidak valid',
            data : {}
        });
    }
    detail_pengisi_seminarService.updateDetail_pengisi_seminar(data,id)
    .then(detail_pengisi_seminar => {
        res.status(200).send({
            status : 'success',
            message : 'Data detail_pengisi_seminar berhasil diupdate',
            data : detail_pengisi_seminar
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

const deleteDetail_pengisi_seminar = async (req, res) => {
    const id = req.params.id;
    if(!id){
        res.status(404).send({
            status : 'error',
            message : 'id tidak valid',
            data : {}
        })
    }
    detail_pengisi_seminarService.deleteDetail_pengisi_seminar(id)
    .then(detail_pengisi_seminar => {
        res.status(200).send({
            status : 'success',
            message : 'Data detail_pengisi_seminar berhasil didelete',
            data : detail_pengisi_seminar
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
    getAllDetail_pengisi_seminar,
    getDetail_pengisi_seminarBySeminar_id,
    createDetail_pengisi_seminar,
    updateDetail_pengisi_seminar,
    deleteDetail_pengisi_seminar
}