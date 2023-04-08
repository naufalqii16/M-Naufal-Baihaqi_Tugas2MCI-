const {pemesanan} = require('../models');

const getAllPemesanan = () => {
    return pemesanan.findAll();
}

const getPemesananByBayar_id = (bayar_id) =>{
    return pemesanan.findOne(
        {
            where: {
                detail_bayar_id: bayar_id
            }
        }
    )
}

const createPemesanan = (data) => {
    return pemesanan.create(data)
}

const updatePemesanan = (data, id) => {
    return pemesanan.update(data,{
        where: {
            id: id
        }
    })
}

const deletePemesanan = (id) => {
    return pemesanan.destroy(
        {
            where: {
                id: id
            }
        }
    )
}

module.exports = {
    getAllPemesanan,
    getPemesananByBayar_id,
    createPemesanan,
    updatePemesanan,
    deletePemesanan
}