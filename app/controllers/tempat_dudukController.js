const tempat_dudukService = require('../services/tempat_dudukService');

const getAllTempat_duduk = async(req, res) => {
    tempat_dudukService.getAllTempat_duduk()
    .then(tempat_duduk=>{
        if(!tempat_duduk){
            res.status(404).send({
                status : 'error',
                message : 'Data tempat_duduk tidak ditemukan',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'success',
                message : 'Data tempat_duduk berhasil ditemukan',
                data : tempat_duduk
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
const getTempat_dudukByPosision = async(req, res) => {
    const param_letak = req.params.letak;
    tempat_dudukService.getTempat_dudukByPosision(param_letak)
    .then(tempat_duduk=>{
        if(!tempat_duduk){
            // console.log(tempat_duduk)
            res.status(404).send({
                status : 'error',
                message : 'Data tempat_duduk tidak ditemukan',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'success',
                message : 'Data tempat_duduk berhasil ditemukan',
                data : tempat_duduk
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

const createTempat_duduk = async (req, res) => {
    const data = {
        letak : req.body.letak,
        pemesanan_id : req.body.pemesanan_id
    }
    // console.log(data);
    tempat_dudukService.createTempat_duduk(data)
    .then(tempat_duduk => {
        res.status(200).send({
            status : 'success',
            message : 'Data tempat_duduk berhasil ditambahkan',
            data : tempat_duduk
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

const updateTempat_duduk = async (req, res) => {
    const data = {
        letak : req.body.letak,
        pemesanan_id : req.body.pemesanan_id
    }
    const letak = req.params.letak;
    if(!letak){
        res.status(400).send({
            status : 'error',
            message : 'letak tidak valid',
            data : {}
        });
    }
    tempat_dudukService.updateTempat_duduk(data,letak)
    .then(tempat_duduk => {
        res.status(200).send({
            status : 'success',
            message : 'Data tempat_duduk berhasil diupdate',
            data : tempat_duduk
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

const deleteTempat_duduk = async (req, res) => {
    const letak = req.params.letak;
    console.log(letak);
    if(!letak){
        res.status(404).send({
            status : 'error',
            message : 'letak tidak valid',
            data : {}
        })
    }
    tempat_dudukService.deleteTempat_duduk(letak)
    .then(tempat_duduk => {
        res.status(200).send({
            status : 'success',
            message : 'Data tempat_duduk berhasil didelete',
            data : tempat_duduk
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
    getAllTempat_duduk,
    getTempat_dudukByPosision,
    createTempat_duduk,
    updateTempat_duduk,
    deleteTempat_duduk
}