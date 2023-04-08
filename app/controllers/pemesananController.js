const pemesananService = require('../services/pemesananService');

const getAllPemesanan = async(req, res) => {
    pemesananService.getAllPemesanan()
    .then(pemesanan=>{
        if(!pemesanan){
            res.status(404).send({
                status : 'error',
                message : 'Data pemesanan tidak ditemukan',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'success',
                message : 'Data pemesanan berhasil ditemukan',
                data : pemesanan
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
const getPemesananByBayar_id = async(req, res) => {
    const param_detail_bayar_id = req.params.detail_bayar_id;
    pemesananService.getPemesananByBayar_id(param_detail_bayar_id)
    .then(pemesanan=>{
        if(!pemesanan){
            res.status(404).send({
                status : 'error',
                message : 'Data pemesanan tidak ditemukan',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'success',
                message : 'Data pemesanan berhasil ditemukan',
                data : pemesanan
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

const createPemesanan = async (req, res) => {
    const data = {
        kuantitas : req.body.kuantitas,
        waktu_pemesanan : req.body.waktu_pemesanan,
        detail_bayar_id : req.body.detail_bayar_id
    }
    // console.log(data);
    pemesananService.createPemesanan(data)
    .then(pemesanan => {
        res.status(200).send({
            status : 'success',
            message : 'Data pemesanan berhasil ditambahkan',
            data : pemesanan
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

const updatePemesanan = async (req, res) => {
    const data = {
        kuantitas : req.body.kuantitas,
        waktu_pemesanan : req.body.waktu_pemesanan,
        detail_bayar_id : req.body.detail_bayar_id
    }
    const id = req.params.id;
    if(!id){
        res.status(400).send({
            status : 'error',
            message : 'id tidak valid',
            data : {}
        });
    }
    pemesananService.updatePemesanan(data,id)
    .then(pemesanan => {
        res.status(200).send({
            status : 'success',
            message : 'Data pemesanan berhasil diupdate',
            data : pemesanan
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

const deletePemesanan = async (req, res) => {
    const id = req.params.id;
    if(!id){
        res.status(404).send({
            status : 'error',
            message : 'id tidak valid',
            data : {}
        })
    }
    pemesananService.deletePemesanan(id)
    .then(pemesanan => {
        res.status(200).send({
            status : 'success',
            message : 'Data pemesanan berhasil didelete',
            data : pemesanan
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
    getAllPemesanan,
    getPemesananByBayar_id,
    createPemesanan,
    updatePemesanan,
    deletePemesanan
}