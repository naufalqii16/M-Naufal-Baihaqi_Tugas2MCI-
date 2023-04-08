const userService = require('../services/userService');

const getAllUser = async(req, res) => {
    userService.getAllUser()
    .then(user=>{
        if(!user){
            res.status(404).send({
                status : 'error',
                message : 'Data user tidak ditemukan',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'success',
                message : 'Data user berhasil ditemukan',
                data : user
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
const getUserByName = async(req, res) => {
    const param_nama = req.params.nama;
    userService.getUserByName(param_nama)
    .then(user=>{
        if(!user){
            res.status(404).send({
                status : 'error',
                message : 'Data user tidak ditemukan',
                data : {}
            });
        }
        else{
            res.status(200).send({
                status : 'success',
                message : 'Data user berhasil ditemukan',
                data : user
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

const createUser = async (req, res) => {
    const data = {
        nama : req.body.nama,
        email : req.body.email,
        usia : req.body.usia,
        kota_asal : req.body.kota_asal,
        kota_domisili : req.body.kota_domisili
    }
    // console.log(data);
    userService.createUser(data)
    .then(user => {
        res.status(200).send({
            status : 'success',
            message : 'Data user berhasil ditambahkan',
            data : user
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

const updateUser = async (req, res) => {
    const data = {
        nama : req.body.nama,
        email : req.body.email,
        usia : req.body.usia,
        kota_asal : req.body.kota_asal,
        kota_domisili : req.body.kota_domisili
    }
    const nama = req.params.nama;
    if(!nama){
        res.status(400).send({
            status : 'error',
            message : 'nama tidak valid',
            data : {}
        });
    }
    userService.updateUser(data,nama)
    .then(user => {
        res.status(200).send({
            status : 'success',
            message : 'Data user berhasil diupdate',
            data : user
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

const deleteUser = async (req, res) => {
    const nama = req.params.nama;
    if(!nama){
        res.status(404).send({
            status : 'error',
            message : 'nama tidak valid',
            data : {}
        })
    }
    userService.deleteUser(nama)
    .then(user => {
        res.status(200).send({
            status : 'success',
            message : 'Data user berhasil didelete',
            data : user
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
    getAllUser,
    getUserByName,
    createUser,
    updateUser,
    deleteUser
}