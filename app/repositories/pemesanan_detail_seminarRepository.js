const {pemesanan_detail_seminar} = require('../models');

const getAllPemesanan_detail_seminar = () => {
    return pemesanan_detail_seminar.findAll();
}

const getPemesanan_detail_seminarByPemesanan_id = (pemesanan_id) =>{
    return pemesanan_detail_seminar.findOne(
        {
            where: {
                pemesanan_id: pemesanan_id
            }
        }
    )
}

const createPemesanan_detail_seminar = (data) => {
    return pemesanan_detail_seminar.create(data)
}

const updatePemesanan_detail_seminar = (data, id) => {
    return pemesanan_detail_seminar.update(data,{
        where: {
            id: id
        }
    })
}

const deletePemesanan_detail_seminar = (id) => {
    return pemesanan_detail_seminar.destroy(
        {
            where: {
                id: id
            }
        }
    )
}

module.exports = {
    getAllPemesanan_detail_seminar,
    getPemesanan_detail_seminarByPemesanan_id,
    createPemesanan_detail_seminar,
    updatePemesanan_detail_seminar,
    deletePemesanan_detail_seminar
}