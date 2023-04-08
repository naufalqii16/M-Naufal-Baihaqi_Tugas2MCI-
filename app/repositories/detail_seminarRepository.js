const {detail_seminar} = require('../models');

const getAllDetail_seminar = () => {
    return detail_seminar.findAll();
}

const getDetail_seminarByTitle = (judul) =>{
    return detail_seminar.findOne(
        {
            where: {
                judul: judul
            }
        }
    )
}

const createDetail_seminar = (data) => {
    return detail_seminar.create(data)
}

const updateDetail_seminar = (data, judul) => {
    return detail_seminar.update(data,{
        where: {
            judul: judul
        }
    })
}

const deleteDetail_seminar = (judul) => {
    return detail_seminar.destroy(
        {
            where: {
                judul: judul
            }
        }
    )
}

module.exports = {
    getAllDetail_seminar,
    getDetail_seminarByTitle,
    createDetail_seminar,
    updateDetail_seminar,
    deleteDetail_seminar
}