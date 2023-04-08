const pengisi_seminarService = require('../services/pengisi_seminarService');

const getAllPengisi_seminar = async(req, res) => {
    pengisi_seminarService.getAllPengisi_seminar()
    .then(pengisi_seminar=>{
        if(!pengisi_seminar){
            res.status(404).send({
                status : 'error',
                message : 'Data pengisi_seminar tidak ditemukan',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'success',
                message : 'Data pengisi_seminar berhasil ditemukan',
                data : pengisi_seminar
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
const getPengisi_seminarByName = async(req, res) => {
    const param_nama = req.params.nama;
    pengisi_seminarService.getPengisi_seminarByName(param_nama)
    .then(pengisi_seminar=>{
        if(!pengisi_seminar){
            res.status(404).send({
                status : 'error',
                message : 'Data pengisi_seminar tidak ditemukan',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'success',
                message : 'Data pengisi_seminar berhasil ditemukan',
                data : pengisi_seminar
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

const createPengisi_seminar = async (req, res) => {
    const data = {
        nama : req.body.nama,
        email : req.body.email,
        profesi : req.body.profesi
    }
    // console.log(data);
    pengisi_seminarService.createPengisi_seminar(data)
    .then(pengisi_seminar => {
        res.status(200).send({
            status : 'success',
            message : 'Data pengisi_seminar berhasil ditambahkan',
            data : pengisi_seminar
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

const updatePengisi_seminar = async (req, res) => {
    const data = {
        nama : req.body.nama,
        email : req.body.email,
        profesi : req.body.profesi
    }
    const nama = req.params.nama;
    if(!nama){
        res.status(400).send({
            status : 'error',
            message : 'nama tidak valid',
            data : {}
        });
    }
    pengisi_seminarService.updatePengisi_seminar(data,nama)
    .then(pengisi_seminar => {
        res.status(200).send({
            status : 'success',
            message : 'Data pengisi_seminar berhasil diupdate',
            data : pengisi_seminar
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

const deletePengisi_seminar = async (req, res) => {
    const nama = req.params.nama;
    if(!nama){
        res.status(404).send({
            status : 'error',
            message : 'nama tidak valid',
            data : {}
        })
    }
    pengisi_seminarService.deletePengisi_seminar(nama)
    .then(pengisi_seminar => {
        res.status(200).send({
            status : 'success',
            message : 'Data pengisi_seminar berhasil didelete',
            data : pengisi_seminar
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
    getAllPengisi_seminar,
    getPengisi_seminarByName,
    createPengisi_seminar,
    updatePengisi_seminar,
    deletePengisi_seminar
}