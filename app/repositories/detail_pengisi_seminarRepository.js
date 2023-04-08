const {detail_pengisi_seminar} = require('../models');

const getAllDetail_pengisi_seminar = () => {
    return detail_pengisi_seminar.findAll();
}

const getDetail_pengisi_seminarBySeminar_id = (ds_id) =>{
    return detail_pengisi_seminar.findOne(
        {
            where: {
                ds_id: ds_id
            }
        }
    )
}

const createDetail_pengisi_seminar = (data) => {
    return detail_pengisi_seminar.create(data)
}

const updateDetail_pengisi_seminar = (data, id) => {
    return detail_pengisi_seminar.update(data,{
        where: {
            id: id
        }
    })
}

const deleteDetail_pengisi_seminar = (id) => {
    return detail_pengisi_seminar.destroy(
        {
            where: {
                id: id
            }
        }
    )
}

module.exports = {
    getAllDetail_pengisi_seminar,
    getDetail_pengisi_seminarBySeminar_id,
    createDetail_pengisi_seminar,
    updateDetail_pengisi_seminar,
    deleteDetail_pengisi_seminar
}