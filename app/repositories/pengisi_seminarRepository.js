const {pengisi_seminar} = require('../models');

const getAllPengisi_seminar = () => {
    return pengisi_seminar.findAll();
}

const getPengisi_seminarByName = (name) =>{
    return pengisi_seminar.findOne(
        {
            where: {
                nama: name
            }
        }
    )
}

const createPengisi_seminar = (data) => {
    return pengisi_seminar.create(data)
}

const updatePengisi_seminar = (data, nama) => {
    return pengisi_seminar.update(data,{
        where: {
            nama: nama
        }
    })
}

const deletePengisi_seminar = (nama) => {
    return pengisi_seminar.destroy(
        {
            where: {
                nama: nama
            }
        }
    )
}

module.exports = {
    getAllPengisi_seminar,
    getPengisi_seminarByName,
    createPengisi_seminar,
    updatePengisi_seminar,
    deletePengisi_seminar
}